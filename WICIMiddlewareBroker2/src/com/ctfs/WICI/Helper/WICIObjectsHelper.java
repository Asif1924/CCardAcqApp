package com.ctfs.WICI.Helper;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringBufferInputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationResponse;
import com.ctfs.WICI.Model.WebIcMQRespVO;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationRequest;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.google.gson.Gson;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

public class WICIObjectsHelper
{

	static Logger log = Logger.getLogger(WICIObjectsHelper.class.getName());

	public String convertObjectToJSON(Object argObject)
	{
		String sMethod = this.getClass().getName() + "[convertObjectToJSON] ";
		log.info(sMethod);

		Gson libraryJSONHelper = new Gson();
		String json = libraryJSONHelper.toJson(argObject);

		return json;
	}

	public WebICCheckLocationResponse deserializeXMLToWebICCheckLocationResponseObject(String xmlStr)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToWebICCheckLocationResponseObject] xmlStr=" + xmlStr;
		log.info(sMethod);

		WebICCheckLocationResponse result = null;
		XStream xstream = new XStream(new DomDriver());
		xstream.alias("WebICCheckLocationResponse", WebICCheckLocationResponse.class);

		try
		{
			result = (WebICCheckLocationResponse) xstream.fromXML(xmlStr);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			xmlStr = xmlStr.replaceFirst("<message>(.*)</message>", "<message>SUCCESS</message>");
			result = (WebICCheckLocationResponse) xstream.fromXML(xmlStr);
		}
		return result;
	}
	
	public WebIcMQRespVO deserializeXMLToAccountApplicationResponseObjectforSS(String xmlStr)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToAccountApplicationResponseObject] ";
		log.info(sMethod);

		xmlStr = xmlStr.replace("tns:", "");
		WebIcMQRespVO deserializedAccountApplicationResponseObject = new WebIcMQRespVO();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebIcMQRespVO", WebIcMQRespVO.class);
		xmlStr = xmlStr.replaceAll("cashApr>", "cashAPR>");
		deserializedAccountApplicationResponseObject = (WebIcMQRespVO) xstream.fromXML(xmlStr);

		return deserializedAccountApplicationResponseObject;
	}

	public String deserializeXMLToAccountApplicationResponseString(String xmlStr)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToAccountApplicationResponseString] ";
		log.info(sMethod);
		
		xmlStr = xmlStr.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "");
		String deserializedAccountApplicationResponseObject = null;

		xmlStr = xmlStr.replaceAll("<tokenNumber>", "");
		xmlStr = xmlStr.replaceAll("</tokenNumber>", "");
		xmlStr = xmlStr.replaceAll("<accountNumber>", "");
		xmlStr = xmlStr.replaceAll("</accountNumber>", "");
		deserializedAccountApplicationResponseObject = xmlStr;

		return deserializedAccountApplicationResponseObject;
	}
	
	public AccountApplicationResponseType deserializeXMLToAccountApplicationResponseObject(String xmlStr)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToAccountApplicationResponseObject] ";
		log.info(sMethod);

		xmlStr = xmlStr.replace("tns:", "");
		AccountApplicationResponseType deserializedAccountApplicationResponseObject = new AccountApplicationResponseType();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("AccountApplicationResponse", AccountApplicationResponseType.class);
		xmlStr = xmlStr.replaceAll("cashApr>", "cashAPR>");
		deserializedAccountApplicationResponseObject = (AccountApplicationResponseType) xstream.fromXML(xmlStr);

		return deserializedAccountApplicationResponseObject;
	}

	public String accountApplicationSerialize(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[accountApplicationSerialize] ";
		log.info(sMethod);

		String accountApplicationReturnValue = "";
		com.thoughtworks.xstream.XStream accountApplicationParser = new com.thoughtworks.xstream.XStream();

		accountApplicationParser.registerConverter(new DateConverter());
		accountApplicationParser.alias("dateOfBirth", String.class);

		Map accountApplicationList = new HashMap();
		accountApplicationList.put("AccountApplicationRequest", AccountApplicationRequestType.class);
		Iterator accountApplicationPairs = accountApplicationList.entrySet().iterator();

		while (accountApplicationPairs.hasNext())
		{
			Map.Entry entry = (Map.Entry) accountApplicationPairs.next();
			String thisKey = (String) entry.getKey();
			Class thisValue = (Class) entry.getValue();
			accountApplicationParser.alias(thisKey, thisValue);
		}

		accountApplicationReturnValue = accountApplicationParser.toXML(obj);
		accountApplicationReturnValue = accountApplicationReturnValue.replace("org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl", "");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("class=\"\"", "");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("tuSessionID", "TUSessionID");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("tuExamResult", "TUExamResult");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("<dateOfBirth >", "<dateOfBirth>");

		log.log(Level.FINE, sMethod + "accountApplicationReturnValue:" + accountApplicationReturnValue);
		return accountApplicationReturnValue;
	}

	public XMLGregorianCalendar getXMLGregorianCalendarDateFromString(String argDateAsString) throws ParseException, DatatypeConfigurationException
	{
		String sMethod = this.getClass().getName() + "[getXMLGregorianCalendarDateFromString] ";
		log.info(sMethod);

		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date simpleDate = dateFormatter.parse(argDateAsString);
		GregorianCalendar gregsCal = new GregorianCalendar();
		gregsCal.setTime(simpleDate);
		javax.xml.datatype.XMLGregorianCalendar xmlDateAccordingToPopeGregory = DatatypeFactory.newInstance().newXMLGregorianCalendar(gregsCal);
		return xmlDateAccordingToPopeGregory;
	}

	public byte[] convertSignatureStringToByte(String argSignatureAsString)
	{
		String sMethod = this.getClass().getName() + "[convertSignatureStringToByte] ";
		log.info(sMethod);

		ByteArrayOutputStream byteRepresentationOfSignature = new ByteArrayOutputStream();
		try
		{
			InputStream signatureStringStream = new StringBufferInputStream(argSignatureAsString);
			byte[] buf = new byte[1024];
			for (int readNum; (readNum = signatureStringStream.read(buf)) != -1;)
			{
				byteRepresentationOfSignature.write(buf, 0, readNum);
			}
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
		return byteRepresentationOfSignature.toByteArray();
	}

	public String getDateAsStringFromXMLGregorianCalendarDateObject(XMLGregorianCalendar argXMLGCDate)
	{
		String sMethod = this.getClass().getName() + "[getDateAsStringFromXMLGregorianCalendarDateObject] ";
		log.info(sMethod);

		String dateString = "";
		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date theDate = argXMLGCDate.toGregorianCalendar().getTime();

		dateString = dateFormatter.format(theDate);
		return dateString;
	}

	public PendAccountApplicationRequest deserializeXMLToPendAccountApplicationRequestObject(String pendAccountApplicationRequestXML)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToPendAccountApplicationRequestObject] ";
		log.info(sMethod);

		PendAccountApplicationRequest deserializedPendAccountApplicationResponseObject = new PendAccountApplicationRequest();
		XStream xstream = new XStream(new DomDriver());
		xstream.alias("PendAccountApplicationRequest", PendAccountApplicationRequest.class);
		
		deserializedPendAccountApplicationResponseObject = (PendAccountApplicationRequest) xstream.fromXML(pendAccountApplicationRequestXML);

		return deserializedPendAccountApplicationResponseObject;
	}

	public String serializePendAccountApplicationResponse(PendAccountApplicationResponse argPAAResponse)
	{
		XStream xstream = new XStream();
		String pendAAResponseXML = xstream.toXML(argPAAResponse);
		return pendAAResponseXML;
	}

	public WICIResponse convertPendAccountApplicationRequestToWICIResponse(PendAccountApplicationRequest pAARequest)
	{		
		WICIResponse convertedResponse = new WICIResponse();
		PendAccountApplicationRequest mangledPendAARequest = new PendAccountApplicationRequest();
		if( "PENDING".equalsIgnoreCase(pAARequest.getAppStatus()) || "DECLINED".equalsIgnoreCase(pAARequest.getAppStatus()) ){
			mangledPendAARequest.setAppStatus(pAARequest.getAppStatus());
			mangledPendAARequest.setQueueName(pAARequest.getQueueName());
			convertedResponse.setData(mangledPendAARequest);
		}else if( "APPROVED".equalsIgnoreCase(pAARequest.getAppStatus())){								
			//US3692
			mangledPendAARequest.setMaskedPAN(pAARequest.getMaskedPAN());
			 
			mangledPendAARequest.setAccountNumber(pAARequest.getAccountNumber());
			mangledPendAARequest.setAppStatus(pAARequest.getAppStatus());
			mangledPendAARequest.setApr(pAARequest.getApr());
			mangledPendAARequest.setCashAPR(pAARequest.getCashAPR());
			mangledPendAARequest.setCreditLimit(pAARequest.getCreditLimit());
			mangledPendAARequest.setCustomerValueInd(pAARequest.getCustomerValueInd());
			mangledPendAARequest.setExpiryDate(pAARequest.getExpiryDate());
			mangledPendAARequest.setEncryptedPan(pAARequest.getEncryptedPan());
			mangledPendAARequest.setAccountReference(null);
			mangledPendAARequest.setExternalReferenceId(null);
			mangledPendAARequest.setApplicationId(null);
			mangledPendAARequest.setRespCardType(pAARequest.getRespCardType());
			mangledPendAARequest.setQueueName(pAARequest.getQueueName());
			convertedResponse.setData(mangledPendAARequest);
		}
		
		return convertedResponse;
	}

	public AccountApplicationRequestType deserializeXMLToAccountApplicationRequestType(String argAccountApplicationRequestXML)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToAccountApplicationRequestType] ";
		log.info(sMethod);

		//String convertedAccountApplicationRequestXML = argAccountApplicationRequestXML;
		String convertedAccountApplicationRequestXML = convertToProperTags(argAccountApplicationRequestXML);
		
		AccountApplicationRequestType deserializedAccountApplicationResponseObject = new AccountApplicationRequestType();
		XStream xstream = new XStream(new DomDriver());
		xstream.alias("AccountApplicationRequestType", AccountApplicationRequestType.class);
		xstream.registerConverter(new XMLGregorianCalendarConverter());
		//xstream.alias("dateOfBirth", String.class); XMLGregorianCalendar
		xstream.alias("dateOfBirth", XMLGregorianCalendar.class);
		deserializedAccountApplicationResponseObject = (AccountApplicationRequestType) xstream.fromXML(convertedAccountApplicationRequestXML);

		return deserializedAccountApplicationResponseObject;
	}
	
	private String convertToProperTags( String argWrongTagVersion ){
		String correctedTagVersion = new String();
		if( argWrongTagVersion.indexOf("AccountApplicationRequest")>0){
		//if( argWrongTagVersion.substring("<AccountApplicationRequest>")!=-1){
		//if( argWrongTagVersion.contains("AccountApplicationRequest")){
			correctedTagVersion = argWrongTagVersion.replace("AccountApplicationRequest", "AccountApplicationRequestType");
			//correctedTagVersion = correctedTagVersion.replace("</AccountApplicationRequest>", "</AccountApplicationRequestType>");
		}
		System.out.println (correctedTagVersion);
		return correctedTagVersion;
	}

	public WICIResponse createUnretrievableResponse()
	{
		//We need to build this
		//{"error":true,"msg":"UNRETRIEVABLE"}
		WICIResponse unretrievableResponse = new WICIResponse();
		
		unretrievableResponse.setError(true);
		unretrievableResponse.setData(null);
		unretrievableResponse.setMsg("UNRETRIEVABLE");
		return unretrievableResponse;
	}
	public String accountApplicationSerializeAccount(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[accountApplicationSerializeAccount] ";
		log.info(sMethod);

		String accountApplicationReturnValue = "";
		com.thoughtworks.xstream.XStream accountApplicationParser = new com.thoughtworks.xstream.XStream();

		accountApplicationReturnValue = accountApplicationParser.toXML(obj);
//		accountApplicationReturnValue = accountApplicationReturnValue.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("<accountNumber>", "");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("</accountNumber>", "");
		log.log(Level.FINE, sMethod + "accountApplicationReturnValue:" + accountApplicationReturnValue);
		return accountApplicationReturnValue;
	}
	

}
