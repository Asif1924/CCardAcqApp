package com.ctfs.BRB.exceptions;

public class XSSAttackException extends Exception
{	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6796048857731069261L;

	public XSSAttackException(String str){
		super(str);
	}
}
