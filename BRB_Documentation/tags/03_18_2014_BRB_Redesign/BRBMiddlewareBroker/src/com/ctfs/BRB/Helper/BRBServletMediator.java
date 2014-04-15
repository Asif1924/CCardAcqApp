package com.ctfs.BRB.Helper;

import java.io.BufferedReader;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.BRB.Interfaces.IResponse;
import com.ctfs.BRB.Model.HTTPMethodType;
import com.ctfs.BRB.exceptions.XSSAttackException;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class BRBServletMediator
{
	static Logger log = Logger.getLogger(BRBServletMediator.class.getName());
	public static final String BRB_TRANSACTION_ID = "brbTransactionId";
	public static final String BRB_TRAKING_SCREEN_ID = "TrackingScreenID";

	HTTPMethodType 				httpMethodType;
	StringBuffer 				postRequestBody;
	String						brbTransactionId;
	String 						trackingScreenID;
	HttpServletRequest 			servletRequest;
	HttpServletResponse 		servletResponse;
	JsonElement 				postRequestBodyAsJson;

	public BRBServletMediator(HttpServletRequest request, HttpServletResponse response)
	{
		this.servletResponse = response;
		this.servletRequest = request;
	}

	/**
	 * Initialize ServletMediator. Very IMPORTANT to initialize Mediator before usage
	 */
	public void IntializeMediator () throws XSSAttackException {
		parseHttpRequest(this.servletRequest);
	}

	public StringBuffer getPostRequestBody()
	{
		return postRequestBody;
	}

	public String getTrackingScreenID()
	{
		return trackingScreenID;
	}

	public String getBrbTransactionId()
	{
		return brbTransactionId;
	}

	public HTTPMethodType getHttpMethodType()
	{
		return httpMethodType;
	}

	public HttpServletRequest getRequest()
	{
		return servletRequest;
	}

	public HttpServletResponse getResponse()
	{
		return servletResponse;
	}

	public String getHttpGetRequestParameter(String paramName)
	{
		return getRequest().getParameter(paramName);
	}

	public JsonElement getPostRequestBodyAsJson()
	{
		return postRequestBodyAsJson;
	}

	protected void parseHttpRequest(HttpServletRequest request) throws XSSAttackException
	{
		String sMethod = "[parseHttpRequest]";
		log.info(sMethod + "::Called!");

		try
		{
			// Validate request
			validateServletRequest(request);

			// Detect request type
			detectHttpMethodRequest();

			// Grab request body
			grabRequestBody();
		}
		catch (XSSAttackException xssEx){
			log.warning(sMethod + "::XSSAttack exception occurred during parsing HttpRequest::" + xssEx.getMessage());
			throw xssEx;
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during parsing HttpRequest::" + e.getMessage());
		}
	}

	public void processHttpResponse(IResponse response)
	{
		processHttpResponse(response, null);
	}

	public void processHttpResponse(IResponse response, List<Object> gsonTypeAdapters)
	{
		String sMethod = "[processHttpResponse]";
		log.info(sMethod + "::Called!");

		GsonBuilder gson = new GsonBuilder();

		PrintWriter writer = null;

		try
		{
			log.info(sMethod + "validateServletResponse..." );
			// Validate response
			validateServletResponse(servletResponse);

			log.info(sMethod + "validateResponse..." );
			// Validate input data
			validateResponse(response);

			log.info(sMethod + "updateResponseHeader..." );
			// Update response header
			updateResponseHeader();

			log.info(sMethod + "writer..." );
			// Get writer
			writer = this.servletResponse.getWriter();

			log.info(sMethod + "gsonTypeAdapters..." );
			// Add gson adapter
			if (gsonTypeAdapters != null)
			{
				for (Object typeAdapter : gsonTypeAdapters)
				{
					gson.registerTypeAdapter(response.getClass(), typeAdapter);
				}
			}

			log.info(sMethod + "Form response..." );
			// Form response
			String responseAsJsonString = gson.create().toJson(response, response.getClass());

			log.info(sMethod + "::Response::\n" + responseAsJsonString);

			// Write response
			writer.append(responseAsJsonString);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during process servlet response::" + e.getMessage());
		}
		finally
		{
			if (writer != null)
			{
				try
				{
					writer.flush();
					writer.close();
				}
				catch (Exception e)
				{
					log.warning(sMethod + "::Error occurred during close 'PrintWriter' stream::" + e.getMessage());
				}
			}
		}
	}

	protected void updateResponseHeader () {
		String sMethod = "[updateResponseHeader]";
		log.info(sMethod + "::Called!");

		// Set Content-Type to application/json for normal responses to the client
		servletResponse.setContentType("application/json");

		/* The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a <frame> or <iframe>.
		Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.*/
		servletResponse.addHeader("X-Frame-Options", "SAMEORIGIN"); //The page can only be displayed in a frame on the same origin as the page itself.

		servletResponse.addHeader("Cache-Control", "no-cache");
		servletResponse.addHeader("Pragma", "no-cache");
		servletResponse.setCharacterEncoding("utf-8");
	}

	protected void grabRequestBody() throws Exception
	{
		String sMethod = "[grabRequestBody]";
		log.info(sMethod + "::Called!");

		try
		{
			if (httpMethodType == HTTPMethodType.POST)
			{
				readPostRequestBody();
			}

			// Check for Cross-site scripting attacks
			sanitizeServletRequest();

			tryGetBRBTransactionIdParam();
			tryGetBRBTrackingScreenIdParam();
		}
		catch (XSSAttackException xssEx){
			log.warning(sMethod + "::XSSAttack exception occurred during grab request body::" + xssEx.getMessage());
			throw xssEx;
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during grab request body::" + e.getMessage());
			throw e;
		}
	}

	/*
	 * To convert the InputStream to String we use the Reader.read(char[]
	 * buffer) method. We iterate until the Reader return null which means
	 * there's no more data to read.
	 */
	protected void readPostRequestBody() throws Exception
	{
		String sMethod = "[readPostRequestBody]";
		log.info(sMethod + "::Called!");

		postRequestBody = new StringBuffer();

		String line = null;
		try
		{
			BufferedReader reader = servletRequest.getReader();
			while ((line = reader.readLine()) != null)
			{
				postRequestBody.append(line);
			}
			postRequestBody = replaceFrenchCharsForEquivalent(postRequestBody);
			log.info(sMethod + " result: " + postRequestBody.toString());
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during get json parameter::" + e.getMessage());
			throw e;
		}
	}

	public StringBuffer replaceFrenchCharsForEquivalent(StringBuffer argRequestBodybuffer)
	{
		String input = argRequestBodybuffer.toString();
		String aLetter = "A";
		String aLetterFrench = "[\\u00C0-\\u00C6]";
		String eLetter = "E";
		String eLetterFrench = "[\\u00C8\\u00C9\\u00CB\\u00CA]";
		String iLetter = "I";
		String iLetterFrench = "[\\u00CE\\u00CF]";
		String oLetter = "O";
		String oLetterFrench = "[\\u00D4\\u00D3\\u00D2\\u0152]";
		String uLetter = "U";
		String uLetterFrench = "[\\u00D9\\u00DB\\u00DC]";
		String yLetter = "Y";
		String yLetterFrench = "[\\u0178]";
		String cLetter = "C";
		String cLetterFrench = "[\\u00C7]";
		HashMap<String, String> equivalentsMap = new HashMap<String, String>();
		equivalentsMap.put(aLetter, aLetterFrench);
		equivalentsMap.put(eLetter, eLetterFrench);
		equivalentsMap.put(iLetter, iLetterFrench);
		equivalentsMap.put(oLetter, oLetterFrench);
		equivalentsMap.put(uLetter, uLetterFrench);
		equivalentsMap.put(yLetter, yLetterFrench);
		equivalentsMap.put(cLetter, cLetterFrench);
		for (String e: equivalentsMap.keySet()){
			input = input.replaceAll(equivalentsMap.get(e), e);
		}
		return new StringBuffer(input);
	}

	protected void sanitizeServletRequest() throws Exception
	{
		String sMethod = "[sanitizeServletRequest]";
		log.info(sMethod + "::Called!");

		WASDefender wasDefender = new WASDefender();

		if (httpMethodType == HTTPMethodType.GET){
			// Get all HTTP GET request parameters
			Enumeration<String> parameterNames = servletRequest.getParameterNames();

			// Scan parameters values
			while (parameterNames.hasMoreElements()) {
				 String paramName = parameterNames.nextElement();
				 String[] paramValues = servletRequest.getParameterValues(paramName);

				 for (int i = 0; i < paramValues.length; i++) {
					 paramValues[i] = wasDefender.scanForXSSInjections(paramValues[i]);

					 log.info(sMethod + String.format("Result of the sanitizing: \n %s = %s", paramName, paramValues[i]));
				 }
			}
		} else if (httpMethodType == HTTPMethodType.POST){
			String encodedPostRequestBody = wasDefender.scanForXSSInjections(getPostRequestBody().toString());

			postRequestBody = new StringBuffer(encodedPostRequestBody);

			log.info(sMethod + String.format("Result of the sanitizing: \n PostRequestBody = %s", postRequestBody));
		}
	}

	protected void tryGetBRBTransactionIdParam()
	{
		String sMethod = "[tryGetBRBTransactionIdParam]";
		log.info(sMethod + "::Called!");

		if (httpMethodType == HTTPMethodType.GET)
		{
			brbTransactionId = servletRequest.getParameter(BRB_TRANSACTION_ID);
		}
		else if (httpMethodType == HTTPMethodType.POST)
		{
			brbTransactionId = searchElementInsidePostRequestBody(postRequestBody.toString(), BRB_TRANSACTION_ID);
		}

		log.info(sMethod + "::BRBTransactionId now equal::" + brbTransactionId);
	}

	protected void tryGetBRBTrackingScreenIdParam()
	{
		String sMethod = "[tryGetBRBTrackingScreenIdParam]";
		log.info(sMethod + "::Called!");

		if (httpMethodType == HTTPMethodType.GET)
		{
			trackingScreenID = servletRequest.getParameter(BRB_TRAKING_SCREEN_ID);
		}
		else if (httpMethodType == HTTPMethodType.POST)
		{
			trackingScreenID = searchElementInsidePostRequestBody(postRequestBody.toString(), BRB_TRAKING_SCREEN_ID);
		}

		log.info(sMethod + "::TrackingScreenID now equal::" + trackingScreenID);
	}

	private void detectHttpMethodRequest()
	{
		String sMethod = "[detectHttpMethodRequest]";
		log.info(sMethod + "::Called!");

		httpMethodType = HTTPMethodType.fromValue(servletRequest.getMethod());

		log.info(sMethod + "::Detected HTTP method type:: " + httpMethodType.toString());
	}

	private String searchElementInsidePostRequestBody(String postRequestBody, String elementToSearch)
	{
		String sMethod = "[searchElementInsidePostRequestBody]";
		log.info(String.format("%s::Called with parameters:: PostRequestBody='%s', ElementToSearch='%s'", sMethod, postRequestBody, elementToSearch));

		String serarchElement = null;

		// Get request body as json element
		postRequestBodyAsJson = processJsonRequestBody(postRequestBody);

		if (postRequestBodyAsJson.isJsonArray())
		{
			serarchElement = processJsonArray(postRequestBodyAsJson, elementToSearch);
		}
		else if (postRequestBodyAsJson.isJsonObject())
		{
			serarchElement = processJsonObject(postRequestBodyAsJson, elementToSearch);
		}

		return serarchElement;
	}

	private JsonElement processJsonRequestBody(String postRequestBody)
	{
		String sMethod = "[tryGetBRBTransactionIdParam]";
		log.info(String.format("%s::Called with parameters:: PostRequestBody='%s'", sMethod, postRequestBody));

		JsonParser jParser = new JsonParser();

		return jParser.parse(postRequestBody);
	}

	private String processJsonArray(JsonElement jElement, String elementToSearch)
	{
		String sMethod = "[processJsonArray]";
		log.info(String.format("%s::Called with parameters:: ElementToSearch='%s'", sMethod, elementToSearch));

		String serarchElement = null;
		JsonArray jArray = jElement.getAsJsonArray();
		for (int i = 0; i < jArray.size(); i++)
		{
			JsonObject el = (JsonObject) jArray.get(i);
			if (el.has(elementToSearch))
			{
				serarchElement = el.get(elementToSearch).getAsString();
			}
		}

		return serarchElement;
	}

	private String processJsonObject(JsonElement jElement, String elementToSearch)
	{
		String sMethod = "[processJsonObject]";
		log.info(String.format("%s::Called with parameters:: ElementToSearch='%s'", sMethod, elementToSearch));

		JsonObject jObject = jElement.getAsJsonObject();

		JsonElement serarchElement = jObject.get(elementToSearch);

		return serarchElement != null ? serarchElement.getAsString() : null;
	}

	private void validateServletRequest(HttpServletRequest request)
	{
		String sMethod = "[validateServletRequest]";
		log.info(sMethod + "::Called!");

		if (request == null)
		{
			throw new IllegalArgumentException("Invalid 'HttpServletRequest' parameter!");
		}
	}

	private void validateServletResponse(HttpServletResponse response)
	{
		String sMethod = "[validateServletResponse]";
		log.info(sMethod + "::Called!");

		if (response == null)
		{
			throw new IllegalArgumentException("Invalid 'HttpServletResponse' parameter!");
		}
	}

	private void validateResponse(IResponse response)
	{
		String sMethod = "[validateResponse]";
		log.info(sMethod + "::Called!");

		if (response == null)
		{
			throw new IllegalArgumentException("Invalid 'Response' parameter!");
		}
	}
}