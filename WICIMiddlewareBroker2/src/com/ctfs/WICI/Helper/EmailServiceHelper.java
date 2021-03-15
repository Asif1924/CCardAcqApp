package com.ctfs.WICI.Helper;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctfs.WICI.Model.AccountApplicationSubmissionRequest;
import com.ctfs.WICI.Model.EmailResponse;
import com.ctfs.WICI.Servlet.Model.Activity;
import com.ctfs.WICI.Servlet.Model.EmailServiceRequest;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationRequest;
import com.ctfs.WICI.Servlet.Model.Subscriber;
import com.ctfs.WICI.Servlet.Model.WICIAccountApplicationResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.exception.InvalidEmailException;
import com.ctfs.WICI.exception.InvalidTabserialNumberException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class EmailServiceHelper {
	
	private static final String event ="WICI_APPROVE_";
	public static final String EMPTY_STRING = "";

	static Logger log = Logger.getLogger(EmailServiceHelper.class.getName());

	

	public void sendEmail(String transactionId, Object  applicationResponse  ) {

		    String sMethod = this.getClass().getName() + "[sendEmail] ";
		    CloseableHttpClient httpClient = null;
			EmailServiceRequest dssEmailRequest = new EmailServiceRequest();
			EmailResponse dssEmailResponse= new EmailResponse();
					WICIDBHelper  wiciDBHelper = new WICIDBHelper();
					try {
						
					AccountApplicationSubmissionRequest submissionRequest = wiciDBHelper.retrieveAccountApplicationRequest(transactionId);
					
						 String responseContent;
					
							WICIObjectsHelper objectHelper = new WICIObjectsHelper();
							 
							 AccountApplicationRequestType AccountApplicationRequest = objectHelper.deserializeXMLToAccountApplicationRequestType(submissionRequest.getRequestString());
							 
							 Activity activity = prepareApprovedEmailRequest(AccountApplicationRequest,applicationResponse,submissionRequest.getAdmAppId(),submissionRequest.getRetailNetwork(),submissionRequest.getAgencyCode() );
							
							 dssEmailRequest.setActivity(activity);
							 
							 log.info(sMethod + "DSS EmailService Request :::: " + toJson(dssEmailRequest));
							 
							 HttpClientHelper secureClient = new HttpClientHelper();
							 httpClient = secureClient.getHttpSecureClient();
							 WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
							 log.info(sMethod + " The DSS email endPoint  ===" + conf.getDssEmailEndPoint());

								HttpPost post = new HttpPost(conf.getDssEmailEndPoint());
								ObjectMapper mapper = new ObjectMapper();
								JsonWrapper jsonWrapper = new JsonWrapper(mapper);
								String jsonInput = mapper.writeValueAsString(dssEmailRequest);
								post.setEntity(new StringEntity(jsonInput));
								post.setHeader("Content-type", "application/json");
								HttpResponse response = httpClient.execute(post);

								int statusCode = response.getStatusLine().getStatusCode();
								
								log.info(sMethod + "EmailService Response status code :::: " + statusCode);
								if (statusCode != 200) {
									throw new RuntimeException("Failed with HTTP error code : "
											+ statusCode);
								}
								responseContent = EntityUtils.toString(response.getEntity());
								dssEmailResponse = jsonWrapper.deserialize(responseContent, EmailResponse.class);
								
								log.info(sMethod + "EmailService Response :::: " + dssEmailResponse);
								
								if(dssEmailResponse != null && dssEmailResponse.getId() != null){
									log.info(sMethod + "update email flag with transaction Id :::: " + transactionId);
									wiciDBHelper.updateApprovedEmailFlag(transactionId);
								}
							
						} catch (Exception e) {
							e.printStackTrace();
						}
							
					
		
	}
	
	
	
	private Activity prepareApprovedEmailRequest(AccountApplicationRequestType request, Object applicationResponse,String admAppId, String banner, String EmployerId){
		
		String sMethod = this.getClass().getName() + "[prepareApprovedEmailRequest] ";
		
		log.info(sMethod +" Request object from wicirquestQueqe :::::    \n"+ request +"[admappdid] :::::   \n" +admAppId+  "the response from approved appp::::::  \n" + applicationResponse);
		 Activity activity;
		try {
			activity = new Activity();
			Subscriber subscriber = new Subscriber();
			if (isNullOrEmpty(admAppId)) {
				//force approval  email testing
				admAppId="123654";
			}
			if (isNullOrEmpty(request.getCurrentEmailAddress())) {
				throw new InvalidEmailException();
			}
			if (isNullOrEmpty(request.getTabSerialId())) {
				throw new InvalidTabserialNumberException();
			}
			  
			  subscriber.setUid(admAppId.concat(";").concat(request.getCurrentEmailAddress()));
			 if(request.getPreferedLanguage()!= null && request.getPreferedLanguage().equalsIgnoreCase("E")){
				 request.setPreferedLanguage("EN");
			 }
			 if(request.getPreferedLanguage()!= null && request.getPreferedLanguage().equalsIgnoreCase("F")){
				 request.setPreferedLanguage("FR");
			 }
			 
			 activity.setSubscriber(subscriber);

			 Map<String, Object> properties = new HashMap<String, Object>();
			 		 
			 if( applicationResponse instanceof WICIAccountApplicationResponse ){
				 
				 WICIAccountApplicationResponse approvedResponse = (WICIAccountApplicationResponse) applicationResponse;
	                 
				 activity.setEvent(event.concat(approvedResponse.getRespCardType()).concat("_"+request.getPreferedLanguage().toUpperCase()));
				 properties.put("approvedCreditLimit", new BigInteger(approvedResponse.getCreditLimit()));
				 properties.put("apr", new BigDecimal(approvedResponse.getApr())); 
				 properties.put("cashAPR", new BigDecimal(approvedResponse.getCashAPR()));
				 properties.put("accountOpenDate", getCurrentDate());
				
			 } 
			if( applicationResponse instanceof PendAccountApplicationRequest ){
				
				 
				PendAccountApplicationRequest pendApprovedResponse = (PendAccountApplicationRequest) applicationResponse;
				 activity.setEvent(event.concat(pendApprovedResponse.getRespCardType()).concat("_"+request.getPreferedLanguage().toUpperCase()));
				 properties.put("approvedCreditLimit", new BigInteger(pendApprovedResponse.getCreditLimit()));
				 properties.put("apr", new BigDecimal(pendApprovedResponse.getApr())); 
				 properties.put("cashAPR", new BigDecimal(pendApprovedResponse.getCashAPR()));
				 properties.put("accountOpenDate", getCurrentDate());
			 } 	 
					 
			
			 
			 properties.put("emailAddress", request.getCurrentEmailAddress());
			 properties.put("firstName", request.getFirstName());
			 properties.put("lastName", request.getLastName());
			 properties.put("surveyGUID", new GUIDGenerator().getGUIDAsString());
			 
			 //VZE-112 added new parameter for email template
			 properties.put("StoreNumber", request.getStoreNumber());
			 properties.put("Province", request.getCurrentProvince());
			 properties.put("EmployerID", EmployerId);
			 properties.put("Banner", banner);
			 
			 if(request.getInsuranceCode()!= null && request.getInsuranceCode().equalsIgnoreCase("N") ){
				 properties.put("insuranceProductCode", EMPTY_STRING);
				 
			 }else{
				 properties.put("insuranceProductCode", request.getInsuranceCode()); 
				 
			 }
			 
		 
			 properties.put("tabletSerialNumber", request.getTabSerialId());
			 
			 activity.setProperties(properties);
			 
			 log.info(sMethod+   "the Activity request Object For Dss   ::::: "+activity);
			 
			 
			 return activity;
			 
		} catch (Exception e) {
			log.warning(sMethod+ "error while constructing the dss email request");
			e.printStackTrace();
		}
		return null;
		 
		 	
		
	}
	
	private String getCurrentDate(){
		String pattern = "yyyy-MM-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		return simpleDateFormat.format(new Date());	
	
	
	}
	private boolean isNullOrEmpty(String input) {
		boolean result = false;
		if (input == null || input.trim().equalsIgnoreCase(null) || input.trim().length() == 0) {
			result = true;
		}
		return result;
	}
	private String toJson(Object o) throws IOException
	{
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.writeValueAsString(o);
	}

}
