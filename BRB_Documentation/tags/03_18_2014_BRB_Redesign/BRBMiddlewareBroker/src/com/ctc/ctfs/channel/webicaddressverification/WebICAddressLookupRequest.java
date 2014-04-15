
package com.ctc.ctfs.channel.webicaddressverification;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;
import com.ctc.ctfs.channel.AddressProvinceType;


/**
 * <p>Java class for WebICAddressLookupRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICAddressLookupRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="originalAddressLine1" type="{http://www.channel.ctfs.ctc.com}addressLine1Type" minOccurs="0"/>
 *         &lt;element name="originalAddressLine2" type="{http://www.channel.ctfs.ctc.com}addressLine2Type" minOccurs="0"/>
 *         &lt;element name="originalCityName" type="{http://www.channel.ctfs.ctc.com}addressMunicipalityType" minOccurs="0"/>
 *         &lt;element name="originalProvince" type="{http://www.channel.ctfs.ctc.com}addressProvinceType" minOccurs="0"/>
 *         &lt;element name="originalPostalCode" type="{http://www.channel.ctfs.ctc.com}addressPostalCodeType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICAddressLookupRequest", propOrder = {
    "originalAddressLine1",
    "originalAddressLine2",
    "originalCityName",
    "originalProvince",
    "originalPostalCode"
})
public class WebICAddressLookupRequest
    implements Serializable
{

    protected String originalAddressLine1;
    protected String originalAddressLine2;
    protected String originalCityName;
    protected AddressProvinceType originalProvince;
    protected String originalPostalCode;

    /**
     * Gets the value of the originalAddressLine1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginalAddressLine1() {
        return originalAddressLine1;
    }

    /**
     * Sets the value of the originalAddressLine1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginalAddressLine1(String value) {
        this.originalAddressLine1 = value;
    }

    /**
     * Gets the value of the originalAddressLine2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginalAddressLine2() {
        return originalAddressLine2;
    }

    /**
     * Sets the value of the originalAddressLine2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginalAddressLine2(String value) {
        this.originalAddressLine2 = value;
    }

    /**
     * Gets the value of the originalCityName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginalCityName() {
        return originalCityName;
    }

    /**
     * Sets the value of the originalCityName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginalCityName(String value) {
        this.originalCityName = value;
    }

    /**
     * Gets the value of the originalProvince property.
     * 
     * @return
     *     possible object is
     *     {@link AddressProvinceType }
     *     
     */
    public AddressProvinceType getOriginalProvince() {
        return originalProvince;
    }

    /**
     * Sets the value of the originalProvince property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressProvinceType }
     *     
     */
    public void setOriginalProvince(AddressProvinceType value) {
        this.originalProvince = value;
    }

    /**
     * Gets the value of the originalPostalCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginalPostalCode() {
        return originalPostalCode;
    }

    /**
     * Sets the value of the originalPostalCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginalPostalCode(String value) {
        this.originalPostalCode = value;
    }

}
