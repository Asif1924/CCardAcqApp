package com.ctfs.WICI.Helper;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;
import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
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

		    //String sMethod = this.getClass().getName() + "EmailServiceHelper[sendEmail] ";
		    CloseableHttpClient httpClient = null;
			EmailServiceRequest dssEmailRequest = new EmailServiceRequest();
			EmailResponse dssEmailResponse= new EmailResponse();
					WICIDBHelper  wiciDBHelper = new WICIDBHelper();
					try {
						
					AccountApplicationSubmissionRequest submissionRequest = wiciDBHelper.retrieveAccountApplicationRequest(transactionId);
					
						 String responseContent;
					
							WICIObjectsHelper objectHelper = new WICIObjectsHelper();
							log.info("EmailServiceHelper[sendEmail] submissionRequest.getRequestString() :::: " + CWE117Fix.encodeCRLF(submissionRequest.getRequestString()));
							 AccountApplicationRequestType AccountApplicationRequest = objectHelper.deserializeXMLToAccountApplicationRequestType(submissionRequest.getRequestString());
							 
							 Activity activity = prepareApprovedEmailRequest(AccountApplicationRequest,applicationResponse,submissionRequest.getAdmAppId(),submissionRequest.getRetailNetwork(),submissionRequest.getAgencyCode() );
							
							 dssEmailRequest.setActivity(activity);
							 
							 log.info("EmailServiceHelper[sendEmail] DSS EmailService Request :::: " + toJson(dssEmailRequest));
							 
							 HttpClientHelper secureClient = new HttpClientHelper();
							 httpClient = secureClient.getHttpSecureClient();
							 WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
							 log.info("EmailServiceHelper[sendEmail]  The DSS email endPoint  ===" + CWE117Fix.encodeCRLF(conf.getDssEmailEndPoint()));

								HttpPost post = new HttpPost(conf.getDssEmailEndPoint());
								ObjectMapper mapper = new ObjectMapper();
								JsonWrapper jsonWrapper = new JsonWrapper(mapper);
								String jsonInput = mapper.writeValueAsString(dssEmailRequest);
								post.setEntity(new StringEntity(jsonInput));
								post.setHeader("Content-type", "application/json");
								HttpResponse response = httpClient.execute(post);

								int statusCode = response.getStatusLine().getStatusCode();
								
								log.info("EmailServiceHelper[sendEmail] EmailService Response status code :::: " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
								if (statusCode != 200) {
									throw new RuntimeException("Failed with HTTP error code : "
											+ CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
								}
								responseContent = EntityUtils.toString(response.getEntity());
								dssEmailResponse = jsonWrapper.deserialize(responseContent, EmailResponse.class);
								
								log.info("EmailServiceHelper[sendEmail]EmailService Response :::: " + CWE117Fix.encodeCRLF(dssEmailResponse != null ? dssEmailResponse.toString() : null));
								
								if(dssEmailResponse != null && dssEmailResponse.getId() != null){
									log.info("EmailServiceHelper[sendEmail]update email flag with transaction Id :::: " + CWE117Fix.encodeCRLF(transactionId));
									wiciDBHelper.updateApprovedEmailFlag(transactionId);
								}
							
						} catch (Exception e) {
							e.printStackTrace();
						}
							
					
		
	}
	public void sendEmailHttp(String transactionId, Object  applicationResponse  ) {

	    
	   // CloseableHttpClient httpClient = null;
		EmailServiceRequest dssEmailRequest = new EmailServiceRequest();
		EmailResponse dssEmailResponse= new EmailResponse();
				WICIDBHelper  wiciDBHelper = new WICIDBHelper();
				try {
					
				AccountApplicationSubmissionRequest submissionRequest = wiciDBHelper.retrieveAccountApplicationRequest(transactionId);
				
					 String responseContent;
				
						WICIObjectsHelper objectHelper = new WICIObjectsHelper();
						log.info("[sendEmailHttp]  submissionRequest.getRequestString() :::: " + CWE117Fix.encodeCRLF(submissionRequest.getRequestString()));
						 AccountApplicationRequestType AccountApplicationRequest = objectHelper.deserializeXMLToAccountApplicationRequestType(submissionRequest.getRequestString());
						 
						 Activity activity = prepareApprovedEmailRequest(AccountApplicationRequest,applicationResponse,submissionRequest.getAdmAppId(),submissionRequest.getRetailNetwork(),submissionRequest.getAgencyCode() );
						
						 dssEmailRequest.setActivity(activity);
						 
						 log.info("[sendEmailHttp] DSS EmailService Request :::: " + toJson(dssEmailRequest));
						 
						 
						 HttpClient   httpClient = HttpClientBuilder.create().build();

				         try{

				            // point to dev
				             String postUrl   = "http://d9cbwpdssa01:8765/wici/v1/triggerWICIEmail";


				            HttpPost post  = new HttpPost(postUrl);

				            ObjectMapper  mapper = new ObjectMapper();
				            JsonWrapper jsonWrapper = new JsonWrapper(mapper);
				            String jsonInput = mapper.writeValueAsString(dssEmailRequest);

				            log.info("[sendEmailHttp] The DSS Email Input  "  +CWE117Fix.encodeCRLF(jsonInput));


				            post.setEntity(new StringEntity(jsonInput));
				            post.setHeader("Content-type", "application/json");
				            HttpResponse  response=null;
				            try{
				            response = httpClient.execute(post);
				            }catch(Exception e)
				            {
				            	log.info("[sendEmailHttp] EmailService httpClient :::: " + CWE117Fix.encodeCRLF(e.getMessage()));
				            }

				            int statusCode = response.getStatusLine().getStatusCode();
				            if (statusCode != 200)
				            {   
				                throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
				            }
				            responseContent = EntityUtils.toString(response.getEntity());
							
							log.info("[sendEmailHttp] EmailService Response status code :::: " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
							if (statusCode != 200) {
								throw new RuntimeException("Failed with HTTP error code : "
										+ CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
							}
							responseContent = EntityUtils.toString(response.getEntity());
							dssEmailResponse = jsonWrapper.deserialize(responseContent, EmailResponse.class);
							
							log.info("[sendEmailHttp]EmailService Response :::: " +CWE117Fix.encodeCRLF(dssEmailResponse != null ?dssEmailResponse.toString() : null));
							
							if(dssEmailResponse != null && dssEmailResponse.getId() != null){
								log.info("[sendEmailHttp] update email flag with transaction Id :::: " + CWE117Fix.encodeCRLF(transactionId));
								wiciDBHelper.updateApprovedEmailFlag(transactionId);
							}
						
					} catch (Exception e) {
						e.printStackTrace();
					}
				}catch(Exception ex)
				{
					ex.printStackTrace();
				}
						
				
	
}
	
	
	
	private Activity prepareApprovedEmailRequest(AccountApplicationRequestType request, Object applicationResponse,String admAppId, String banner, String EmployerId){
		
		
		log.info("[prepareApprovedEmailRequest] Request object from wicirquestQueqe :::::    \n"+ CWE117Fix.encodeCRLF(request != null ?request.toString() : null) +"[admappdid] :::::   \n" +CWE117Fix.encodeCRLF(admAppId)+  "the response from approved appp::::::  \n" + CWE117Fix.encodeCRLF(applicationResponse != null ? applicationResponse.toString() : null));
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
				 if(approvedResponse.getAccountApplicationresponse().getAccountNumber()!=null) {
					 log.info("AccountNumber : "+CWE117Fix.encodeCRLF(approvedResponse.getAccountApplicationresponse().getAccountNumber()));
					 String retrieveDecryptedPANNumber=null;
					if (approvedResponse.getAccountApplicationresponse().getAccountNumber().length() > 16) {
						try {
							retrieveDecryptedPANNumber = retrieveDecryptedPANNumber(approvedResponse.getAccountApplicationresponse().getAccountNumber());
						} catch (Exception ex) {
							ex.printStackTrace();
						}
					}
				 log.info("prepareApprovedEmailRequest:: retrieveDecryptedPANNumber : " + CWE117Fix.encodeCRLF(retrieveDecryptedPANNumber));
				 activity.setPgToken(retrieveDecryptedPANNumber);
				 if(activity.getPgToken()!=null)
				 {
			     DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			     Date currentDate = new Date();
			     Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("America/Toronto"));
			     cal.setTime(currentDate);
				 cal.add(Calendar.DAY_OF_MONTH, 2);
				 Date currentDatePlusTwo = cal.getTime();
				 log.info("prepareApprovedEmailRequest::JWT Expiry :   ::::: "+CWE117Fix.encodeCRLF(dateFormat.format(currentDatePlusTwo)));
				 properties.put("pgTokenExpiry", dateFormat.format(currentDatePlusTwo));
				 log.info("prepareApprovedEmailRequest:: WICIAccountApplicationResponse Form Subm Id :: "+CWE117Fix.encodeCRLF(approvedResponse.getAccountApplicationresponse().getFormSubmId()));
				 activity.setFormSubmID(approvedResponse.getAccountApplicationresponse().getFormSubmId());
				 }
				 }
				 properties.put("approvedCreditLimit", new BigInteger(approvedResponse.getCreditLimit()));
				 properties.put("apr", new BigDecimal(approvedResponse.getApr())); 
				 properties.put("cashAPR", new BigDecimal(approvedResponse.getCashAPR()));
				 properties.put("accountOpenDate", getCurrentDate());
				 //properties.put("dsaHost", "qa-mastercard.cantire.net");
				 ApplicationConfiguration.readApplicationConfiguration();
				 String dsaHost = ApplicationConfiguration.getCategoryKeyValue("WebICKeyStore","DSAHost");
				 log.info("prepareApprovedEmailRequest::dsaHost : " + dsaHost);
				 properties.put("dsaHost", dsaHost);
				
			 } 
			if( applicationResponse instanceof PendAccountApplicationRequest ){
				PendAccountApplicationRequest pendApprovedResponse = (PendAccountApplicationRequest) applicationResponse;
				 activity.setEvent(event.concat(pendApprovedResponse.getRespCardType()).concat("_"+request.getPreferedLanguage().toUpperCase()));
				 
				 if(pendApprovedResponse.getAccountNumber()!=null) {
					 log.info("PendAccountApplicationRequest AccountNumber : "+CWE117Fix.encodeCRLF(pendApprovedResponse.getAccountNumber()));
					 String retrieveDecryptedPANNumber=null;
					 
					 if(pendApprovedResponse.getAccountNumber().length()>16){
						 try {
						 retrieveDecryptedPANNumber=retrieveDecryptedPANNumber(pendApprovedResponse.getAccountNumber());
						 }catch(Exception ex)
						 {
							ex.getStackTrace();
						 }
						 log.info("prepareApprovedEmailRequest:: PendAccountApplicationRequest retrieveDecryptedPANNumber : " + CWE117Fix.encodeCRLF(retrieveDecryptedPANNumber));
						 activity.setPgToken(retrieveDecryptedPANNumber);
						 if(activity.getPgToken()!=null)
						 {
							 DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
						     Date currentDate = new Date();
						     Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("America/Toronto"));
						     cal.setTime(currentDate);
							 cal.add(Calendar.DAY_OF_MONTH, 2);
							 Date currentDatePlusTwo = cal.getTime();
							 log.info("prepareApprovedEmailRequest::JWT Expiry :   ::: "+CWE117Fix.encodeCRLF(dateFormat.format(currentDatePlusTwo)));
							 properties.put("pgTokenExpiry",dateFormat.format(currentDatePlusTwo));
							 log.info("prepareApprovedEmailRequest:: PendAccountApplicationRequest Form Subm Id :: "+CWE117Fix.encodeCRLF(pendApprovedResponse.getFormSubmId()));
						 	 activity.setFormSubmID(pendApprovedResponse.getFormSubmId());
						 }
					 }
				 }
				 properties.put("approvedCreditLimit", new BigInteger(pendApprovedResponse.getCreditLimit()));
				 properties.put("apr", new BigDecimal(pendApprovedResponse.getApr())); 
				 properties.put("cashAPR", new BigDecimal(pendApprovedResponse.getCashAPR()));
				 properties.put("accountOpenDate", getCurrentDate());
				 
				 ApplicationConfiguration.readApplicationConfiguration();
				 String dsaHost = ApplicationConfiguration.getCategoryKeyValue("WebICKeyStore","DSAHost");
				 log.info("prepareApprovedEmailRequest::dsaHost : " + dsaHost);
				 properties.put("dsaHost", dsaHost);
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
			 
			 log.info("prepareApprovedEmailRequest:: the Activity request Object For Dss   ::::: "+CWE117Fix.encodeCRLF(activity != null ? activity.toString() : null));
			 
			 
			 return activity;
			 
		} catch (Exception e) {
			log.warning("prepareApprovedEmailRequest:: error while constructing the dss email request");
			e.printStackTrace();
		}
		return null;
		 
		 	
		
	}
	public java.lang.String retrieveDecryptedPANNumber(java.lang.String accountNumber) throws java.lang.Exception{
		log.info("retrieveDecryptedPANNumber");
		java.lang.String retVal = null;

		retVal = WebICCryptoUtil.getInstance().decodePAN(accountNumber);

		log.info("retrieveDecryptedPANNumber completed");

		return retVal;
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
