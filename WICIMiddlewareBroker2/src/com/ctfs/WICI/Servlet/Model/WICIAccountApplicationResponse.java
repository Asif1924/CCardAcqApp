package com.ctfs.WICI.Servlet.Model;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
//import com.sun.org.apache.xml.internal.security.utils.Base64;
import org.apache.commons.codec.binary.Base64;

public class WICIAccountApplicationResponse

{   private AccountApplicationResponseType AccountApplicationresponse;
	public AccountApplicationResponseType getAccountApplicationresponse() {
	return AccountApplicationresponse;
}

public void setAccountApplicationresponse(
		AccountApplicationResponseType accountApplicationresponse) {
	AccountApplicationresponse = accountApplicationresponse;
}

	String accountNumber;

	public String getAccountNumber()
	{
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber)
	{
		this.accountNumber = accountNumber;
	}
	public String getAppStatus()
	{
		return appStatus;
	}
	
	String encryptedPan;
	
	public String getEncryptedPan() {
		return encryptedPan;
	}

	public void setEncryptedPan(String encryptedPan) {
		this.encryptedPan = encryptedPan;
	}

	String	maskedPAN; //US3692
	public String getMaskedPAN()
	{
		return maskedPAN;
	}
	public void setMaskedPAN(String maskedPAN)
	{
		this.maskedPAN = maskedPAN;
	}
	
	
	public String getRespCardType() {
		return respCardType;
	}

	public void setRespCardType(String respCardType) {
		this.respCardType = respCardType;
	}

	String accountReference;
	String expiryDate;
	String creditLimit;
	String apr;
	String cashAPR;

	String appStatus;
	String customerValueInd;
	String respCardType;
	String queueName;

	public WICIAccountApplicationResponse()
	{

	}

	public WICIAccountApplicationResponse entityToModel(AccountApplicationResponseType entity)
	{
		WICIAccountApplicationResponse result = new WICIAccountApplicationResponse();
		result.accountReference = entity.getAccountReference();
		result.appStatus = entity.getAppStatus();
		result.customerValueInd = entity.getCustomerValueInd();
		result.expiryDate = entity.getExpiryDate();
		result.creditLimit=String.valueOf(entity.getCreditLimit()); 
		result.apr= String.valueOf(entity.getApr());
		result.appStatus=String.valueOf(entity.getAppStatus());
		try
		{
			result.accountNumber = entity.getAccountNumber();
		}
		catch (Exception e)
		{
			result.accountNumber = null;
		}
		
		try
		{
			result.encryptedPan = entity.getEncryptedPan();
		}
		catch (Exception e)
		{
			result.encryptedPan = null;
		}

		try
		{
			result.creditLimit = entity.getCreditLimit().toString();
		}
		catch (Exception e)
		{
			result.creditLimit = null;
		}
		try
		{
			result.apr = entity.getApr().toString();
		}
		catch (Exception e)
		{
			result.apr = null;
		}
		try
		{
			result.cashAPR = entity.getCashAPR().toString();
		}
		catch (Exception e)
		{
			result.cashAPR = null;
		}
		
		
		//US3692
		try
		{
			result.maskedPAN = entity.getMaskedPAN().toString();
		}
		catch (Exception e)
		{
			result.maskedPAN = null;
		}
		
		try 
		{
			result.respCardType = entity.getRespCardType().toString();
		} 
		catch (Exception e) 
		{
			result.respCardType = null;
		}
		
		try 
		{
			result.queueName = entity.getQueueName().toString();
		} 
		catch (Exception e) 
		{
			result.queueName = null;
		}

		return result;
	}

	@Override
	public String toString() {
		return "WICIAccountApplicationResponse [AccountApplicationresponse="
				+ AccountApplicationresponse + ", accountNumber="
				+ accountNumber + ", encryptedPan=" + encryptedPan
				+ ", maskedPAN=" + maskedPAN + ", accountReference="
				+ accountReference + ", expiryDate=" + expiryDate
				+ ", creditLimit=" + creditLimit + ", apr=" + apr
				+ ", cashAPR=" + cashAPR + ", appStatus=" + appStatus
				+ ", customerValueInd=" + customerValueInd + ", respCardType="
				+ respCardType + ", queueName=" + queueName + "]";
	}

	public String getCreditLimit() {
		return creditLimit;
	}

	public void setCreditLimit(String creditLimit) {
		this.creditLimit = creditLimit;
	}

	public String getAccountReference() {
		return accountReference;
	}

	public void setAccountReference(String accountReference) {
		this.accountReference = accountReference;
	}

	public String getApr() {
		return apr;
	}

	public void setApr(String apr) {
		this.apr = apr;
	}

	public String getCashAPR() {
		return cashAPR;
	}

	public void setCashAPR(String cashAPR) {
		this.cashAPR = cashAPR;
	}

	public String getQueueName() {
		return queueName;
	}

	public void setQueueName(String queueName) {
		this.queueName = queueName;
	}

	public void setAppStatus(String appStatus) {
		this.appStatus = appStatus;
	}
}
