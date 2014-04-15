
package com.ctc.ctfs.channel;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for messageTextType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="messageTextType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;minLength value="3"/>
 *     &lt;maxLength value="150"/>
 *     &lt;enumeration value="SUCCESS"/>
 *     &lt;enumeration value="FAILURE"/>
 *     &lt;enumeration value="ERROR"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "messageTextType", namespace = "http://www.channel.ctfs.ctc.com")
@XmlEnum
public enum MessageTextType {

    SUCCESS,
    FAILURE,
    ERROR;

    public String value() {
        return name();
    }

    public static MessageTextType fromValue(String v) {
        return valueOf(v);
    }

}
