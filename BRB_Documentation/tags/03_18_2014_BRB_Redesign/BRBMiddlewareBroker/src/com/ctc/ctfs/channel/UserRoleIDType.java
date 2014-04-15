
package com.ctc.ctfs.channel;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for userRoleIDType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="userRoleIDType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;maxLength value="5"/>
 *     &lt;enumeration value="ADMIN"/>
 *     &lt;enumeration value="FMR"/>
 *     &lt;minLength value="3"/>
 *     &lt;enumeration value="EMP"/>
 *     &lt;enumeration value="REP"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "userRoleIDType", namespace = "http://www.channel.ctfs.ctc.com")
@XmlEnum
public enum UserRoleIDType {

    ADMIN,
    FMR,
    EMP,
    REP;

    public String value() {
        return name();
    }

    public static UserRoleIDType fromValue(String v) {
        return valueOf(v);
    }

}
