
package com.ctc.ctfs.channel;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for addressStatus.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="addressStatus">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;length value="1"/>
 *     &lt;enumeration value="V"/>
 *     &lt;enumeration value="C"/>
 *     &lt;enumeration value="N"/>
 *     &lt;enumeration value="F"/>
 *     &lt;enumeration value="I"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "addressStatus", namespace = "http://www.channel.ctfs.ctc.com")
@XmlEnum
public enum AddressStatus {

    V,
    C,
    N,
    F,
    I;

    public String value() {
        return name();
    }

    public static AddressStatus fromValue(String v) {
        return valueOf(v);
    }

}
