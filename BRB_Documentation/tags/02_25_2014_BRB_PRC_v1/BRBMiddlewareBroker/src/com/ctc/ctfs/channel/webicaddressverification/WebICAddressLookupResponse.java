
package com.ctc.ctfs.channel.webicaddressverification;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;
import com.ctc.ctfs.channel.AddressProvinceType;
import com.ctc.ctfs.channel.AddressStatus;


/**
 * <p>Java class for WebICAddressLookupResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICAddressLookupResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="standardAddressLine1" type="{http://www.channel.ctfs.ctc.com}addressLine1Type" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="standardAddressLine2" type="{http://www.channel.ctfs.ctc.com}addressLine2Type" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="standardCityName" type="{http://www.channel.ctfs.ctc.com}addressMunicipalityType" minOccurs="0"/>
 *         &lt;element name="standardProvince" type="{http://www.channel.ctfs.ctc.com}addressProvinceType" minOccurs="0"/>
 *         &lt;element name="standardPostalCode" type="{http://www.channel.ctfs.ctc.com}addressPostalCodeType" minOccurs="0"/>
 *         &lt;element name="addressStatus" type="{http://www.channel.ctfs.ctc.com}addressStatus" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICAddressLookupResponse", propOrder = {
    "standardAddressLine1",
    "standardAddressLine2",
    "standardCityName",
    "standardProvince",
    "standardPostalCode",
    "addressStatus"
})
public class WebICAddressLookupResponse
    implements Serializable
{

    protected List<String> standardAddressLine1;
    protected List<String> standardAddressLine2;
    protected String standardCityName;
    protected AddressProvinceType standardProvince;
    protected String standardPostalCode;
    protected AddressStatus addressStatus;

    /**
     * Gets the value of the standardAddressLine1 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the standardAddressLine1 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getStandardAddressLine1().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getStandardAddressLine1() {
        if (standardAddressLine1 == null) {
            standardAddressLine1 = new ArrayList<String>();
        }
        return this.standardAddressLine1;
    }

    /**
     * Gets the value of the standardAddressLine2 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the standardAddressLine2 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getStandardAddressLine2().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getStandardAddressLine2() {
        if (standardAddressLine2 == null) {
            standardAddressLine2 = new ArrayList<String>();
        }
        return this.standardAddressLine2;
    }

    /**
     * Gets the value of the standardCityName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStandardCityName() {
        return standardCityName;
    }

    /**
     * Sets the value of the standardCityName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStandardCityName(String value) {
        this.standardCityName = value;
    }

    /**
     * Gets the value of the standardProvince property.
     * 
     * @return
     *     possible object is
     *     {@link AddressProvinceType }
     *     
     */
    public AddressProvinceType getStandardProvince() {
        return standardProvince;
    }

    /**
     * Sets the value of the standardProvince property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressProvinceType }
     *     
     */
    public void setStandardProvince(AddressProvinceType value) {
        this.standardProvince = value;
    }

    /**
     * Gets the value of the standardPostalCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStandardPostalCode() {
        return standardPostalCode;
    }

    /**
     * Sets the value of the standardPostalCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStandardPostalCode(String value) {
        this.standardPostalCode = value;
    }

    /**
     * Gets the value of the addressStatus property.
     * 
     * @return
     *     possible object is
     *     {@link AddressStatus }
     *     
     */
    public AddressStatus getAddressStatus() {
        return addressStatus;
    }

    /**
     * Sets the value of the addressStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressStatus }
     *     
     */
    public void setAddressStatus(AddressStatus value) {
        this.addressStatus = value;
    }

}
