//
// Generated By:JAX-WS RI IBM 2.1.1 in JDK 6 (JAXB RI IBM JAXB 2.1.3 in JDK 1.6)
//


package com.ctc.ctfs.channel.webicuserlocation;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for WebICCheckLocationRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICCheckLocationRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="UserID" type="{http://www.channel.ctfs.ctc.com}userIDType"/>
 *         &lt;element name="LocationID" type="{http://www.channel.ctfs.ctc.com}userLocationIDType"/>
 *         &lt;element name="RetailNetwork" type="{http://www.channel.ctfs.ctc.com}userRetailNetwork"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICCheckLocationRequest", namespace = "http://www.channel.ctfs.ctc.com/WebICUserLocation", propOrder = {
    "userID",
    "locationID",
    "retailNetwork"
})
public class WebICCheckLocationRequest
    implements Serializable
{

    @XmlElement(name = "UserID", required = true)
    protected String userID;
    @XmlElement(name = "LocationID", required = true)
    protected String locationID;
    @XmlElement(name = "retailNetwork", required = true)
    protected String retailNetwork;

    public String getRetailNetwork() {
		return retailNetwork;
	}

	public void setRetailNetwork(String retailNetwork) {
		this.retailNetwork = retailNetwork;
	}

	/**
     * Gets the value of the userID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUserID() {
        return userID;
    }

    /**
     * Sets the value of the userID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUserID(String value) {
        this.userID = value;
    }

    /**
     * Gets the value of the locationID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLocationID() {
        return locationID;
    }

    /**
     * Sets the value of the locationID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLocationID(String value) {
        this.locationID = value;
    }

}
