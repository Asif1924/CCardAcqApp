
package com.ctc.ctfs.channel.webicusermanagement;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for WebICDeleteUserRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICDeleteUserRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ActiveUserID" type="{http://www.channel.ctfs.ctc.com}activeUserID"/>
 *         &lt;element name="UserID" type="{http://www.channel.ctfs.ctc.com}userIDType"/>
 *         &lt;element name="GroupID" type="{http://www.channel.ctfs.ctc.com}userGroupIDType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICDeleteUserRequest", propOrder = {
    "activeUserID",
    "userID",
    "groupID"
})
public class WebICDeleteUserRequest
    implements Serializable
{

    @XmlElement(name = "ActiveUserID", required = true)
    protected String activeUserID;
    @XmlElement(name = "UserID", required = true)
    protected String userID;
    @XmlElement(name = "GroupID", required = true)
    protected String groupID;

    /**
     * Gets the value of the activeUserID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getActiveUserID() {
        return activeUserID;
    }

    /**
     * Sets the value of the activeUserID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setActiveUserID(String value) {
        this.activeUserID = value;
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
     * Gets the value of the groupID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getGroupID() {
        return groupID;
    }

    /**
     * Sets the value of the groupID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setGroupID(String value) {
        this.groupID = value;
    }

}
