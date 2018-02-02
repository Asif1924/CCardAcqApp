package com.ctfs.WICI.Helper;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.logging.Logger;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.channel.ctfs.ctc.webicgateway.RequestBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBodyType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
import com.ctc.ctfs.channel.sharedservices.ServiceRequest;
import com.ctc.ctfs.channel.sharedservices.ServiceResponse;
import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctfs.WICI.Model.WebIcMQRespVO;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIAccountApplicationResponse;
import com.ctfs.WICI.Servlet.Model.WICIMessageType;

public class AccountApplicationHelper
{
	static Logger log = Logger.getLogger(AccountApplicationHelper.class.getName());
	
	String CONFIG_NAME_ENABLE_WEBICGATEWAY = "WEBICGATEWAY_CHECK_ENABLED";
	
	public WICIAccountApplicationResponse doRequest(CreditCardApplicationData argCardData, AccountApplicationRequestType argAARequestObject ) throws Exception
	{
		String sMethod = this.getClass().getName() + "[doRequest( CreditCardApplicationData, AccountApplicationRequestType )] ";
		log.info(sMethod);

		boolean enable_webic_auth = false;
		WICIDBHelper wicidbhelper = new WICIDBHelper();	
		enable_webic_auth = wicidbhelper.isAuthfieldCheckEnabledforWebicGateway(CONFIG_NAME_ENABLE_WEBICGATEWAY);
		
		if(enable_webic_auth){
		
		RequestBody requestBody = new RequestBody();
		ResponseBody responseBody = new ResponseBody();
		AccountApplicationResponseType result = null;
		AccountAcquisitionPortalProxy accountApplicationProxy = new WICIPortalProxyFactory().createWICIWebServicesPortalProxy();

		try
		{
			String requestBodyString = serializeRequest(argAARequestObject);

			log.info(sMethod + "::requestBodyString::" + requestBodyString);

			requestBody.setRequestBody(requestBodyString);
			responseBody = accountApplicationProxy.processRequest((new WICIObjectsHelper()).createMessageHeader(WICIMessageType.ACCOUNT_APPLICATION), requestBody);
			result = deserializeResponse(responseBody);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Exception::" + e.getMessage());
			throw e;
		}
		WICIAccountApplicationResponse wiciAccountApplicationResponse = new WICIAccountApplicationResponse();
		return wiciAccountApplicationResponse.entityToModel(result);
		}
		else
		{
			ServiceRequest serviceRequest = new ServiceRequest();
			ServiceResponse serviceResponse = new ServiceResponse();
			AccountApplicationResponseType result = null;
			WebIcMQRespVO webIcMQResp = null;
			WICIAccountApplicationResponse wiciAccountApplicationResponse = new WICIAccountApplicationResponse();
			SharedWebServicesSOAPProxy sharedWebServicesSOAPProxy = new WICIPortalProxyFactory().createWICIWebSharedServicesPortalProxy();
			try
			{
				if (argAARequestObject != null ) {	
					
					String requestBodyString = serializeRequest(argAARequestObject);
					log.info(sMethod + "::requestBodyString::" + requestBodyString);
					serviceRequest.setMethodName("processIcApplication");
					serviceRequest.setServiceArgument1(requestBodyString);
					serviceRequest.setServiceName("CTFSWebICGatewayService");
					log.info("serviceRequest=" + serviceRequest.getServiceArgument1());
					
					serviceResponse = sharedWebServicesSOAPProxy.processRequest(serviceRequest);
					log.info("serviceResponse=" + serviceResponse.getPassFail()+","  + serviceResponse.getResponseArgument1());
					webIcMQResp  = deserializeResponseforSS(serviceResponse);
					
					result = setWebICAccountApplicationResponseforSS(webIcMQResp);
					
				}
			}
			catch (Exception e)
			{
				log.warning(sMethod + "::Exception::" + e.getMessage());
				throw e;
			}
			return wiciAccountApplicationResponse.entityToModel(result);
		}
	}

	public AccountApplicationResponseType deserializeResponse(ResponseBody responseBody) throws Exception
	{
		String sMethod = this.getClass().getName() + "[deserializeResponse] ";
		log.info(sMethod);

		ResponseBodyType rawResponseBody = responseBody.getResponseBody();
		AccountApplicationResponseType accountApplicationResponse = null;
		String accountApplicationResponseXML = "";

		if (rawResponseBody == null)
		{
			return accountApplicationResponse;
		}

		accountApplicationResponseXML = responseBody.getResponseBody().getResultDocument();

		if (accountApplicationResponseXML == null)
		{
			return accountApplicationResponse;
		}

		log.info(sMethod + "::accountApplicationResponseXML::" + accountApplicationResponseXML);

		try
		{
			WICIObjectsHelper wiciObjectsHelper = new WICIObjectsHelper();
			accountApplicationResponse = wiciObjectsHelper.deserializeXMLToAccountApplicationResponseObject(accountApplicationResponseXML);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			throw e;
		}

		return accountApplicationResponse;
	}

	public String serializeRequest(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[serializeRequest] ";
		log.info(sMethod);

		WICIObjectsHelper wiciObjectsHelper = new WICIObjectsHelper();
		return (wiciObjectsHelper.accountApplicationSerialize(obj));
	}

	public String getRetrievalToken(AccountApplicationRequestType argRequest) {
		String externalRefId = argRequest.getExternalReferenceId();
		String retrievalToken = new ExternalReferenceIdHelper().getLastPartOfExternalRefId(externalRefId);
		return retrievalToken;
	}
	//  serialize the request for call sharedservices
	public String serializeRequestStr(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[serializeRequestStr] ";
		log.info(sMethod);

		WICIObjectsHelper wiciObjectsHelper = new WICIObjectsHelper();
		return (wiciObjectsHelper.accountApplicationSerializeAccount(obj));
	}
	
	public WebIcMQRespVO deserializeResponseforSS(ServiceResponse serviceResponse) throws Exception
	{
		String sMethod = this.getClass().getName() + "[deserializeResponse] ";
		log.info(sMethod);

		String response = serviceResponse.getResponseArgument1();
		WebIcMQRespVO webIcMQRespVO = null;
		String accountApplicationResponseXML = "";

		if (response == null)
		{
			return webIcMQRespVO;
		}

		accountApplicationResponseXML = serviceResponse.getResponseArgument1();

		if (accountApplicationResponseXML == null)
		{
			return webIcMQRespVO;
		}

		log.info(sMethod + "::accountApplicationResponseXML::" + accountApplicationResponseXML);

		try
		{
			WICIObjectsHelper wiciObjectsHelper = new WICIObjectsHelper();
			webIcMQRespVO = wiciObjectsHelper.deserializeXMLToAccountApplicationResponseObjectforSS(accountApplicationResponseXML);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			throw e;
		}

		return webIcMQRespVO;
	}

	
	private AccountApplicationResponseType setWebICAccountApplicationResponseforSS(WebIcMQRespVO webIcMQRespVO) {
		
		AccountApplicationResponseType accountApplicationResponse = new AccountApplicationResponseType();
		
		if (webIcMQRespVO != null) {
			if (webIcMQRespVO.getAccountNumber() != null) {
				accountApplicationResponse.setAccountNumber(webIcMQRespVO.getAccountNumber());	
			}
			
			if (webIcMQRespVO.getExpiryDate() != null) {
				accountApplicationResponse.setExpiryDate(webIcMQRespVO.getExpiryDate());
			}
			
			if(webIcMQRespVO.getCreditLimit()!=null)
			accountApplicationResponse.setCreditLimit(BigInteger.valueOf(new Integer(webIcMQRespVO.getCreditLimit())));
			
			if (webIcMQRespVO.getApr() !=null) {
				accountApplicationResponse.setApr(new BigDecimal(webIcMQRespVO.getApr()));
			}
			if (webIcMQRespVO.getCashAPR() !=null) {
				accountApplicationResponse.setCashAPR(new BigDecimal(webIcMQRespVO.getCashAPR()));
			}
			if (webIcMQRespVO.getAppStatus() != null) {
				accountApplicationResponse.setAppStatus(webIcMQRespVO.getAppStatus());
			}
			if (webIcMQRespVO.getCustomerValueInd() != null) {
				accountApplicationResponse.setCustomerValueInd(webIcMQRespVO.getCustomerValueInd());
			}	
			if (webIcMQRespVO.getEncryptedPan() != null) {
				accountApplicationResponse.setEncryptedPan(webIcMQRespVO.getEncryptedPan());
			}
			if (webIcMQRespVO.getMaskedPAN() != null) {
				accountApplicationResponse.setMaskedPAN(webIcMQRespVO.getMaskedPAN());
			}	
		}
		
		return accountApplicationResponse;
	}

}
