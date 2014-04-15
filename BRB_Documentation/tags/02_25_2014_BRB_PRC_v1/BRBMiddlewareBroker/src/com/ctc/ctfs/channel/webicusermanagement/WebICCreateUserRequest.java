
package com.ctc.ctfs.channel.webicusermanagement;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import com.ctc.ctfs.channel.AddressProvinceType;
import com.ctc.ctfs.channel.UserRoleIDType;


/**
 * <p>Java class for WebICCreateUserRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICCreateUserRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ActiveUserID" type="{http://www.channel.ctfs.ctc.com}activeUserID"/>
 *         &lt;element name="UserID" type="{http://www.channel.ctfs.ctc.com}userIDType"/>
 *         &lt;element name="FirstName" type="{http://www.channel.ctfs.ctc.com}userFirstNameType"/>
 *         &lt;element name="LastName" type="{http://www.channel.ctfs.ctc.com}userLastNameType"/>
 *         &lt;element name="EmployeeNumber" type="{http://www.channel.ctfs.ctc.com}userEmplIDType"/>
 *         &lt;element name="RoleID" type="{http://www.channel.ctfs.ctc.com}userRoleIDType"/>
 *         &lt;element name="GroupID" type="{http://www.channel.ctfs.ctc.com}userGroupIDType"/>
 *         &lt;element name="AddressLine1" type="{http://www.channel.ctfs.ctc.com}addressLine1Type"/>
 *         &lt;element name="AddressLine2" type="{http://www.channel.ctfs.ctc.com}addressLine2Type"/>
 *         &lt;element name="Municipality" type="{http://www.channel.ctfs.ctc.com}addressMunicipalityType"/>
 *         &lt;element name="Province" type="{http://www.channel.ctfs.ctc.com}addressProvinceType"/>
 *         &lt;element name="PostalCode" type="{http://www.channel.ctfs.ctc.com}addressPostalCodeType"/>
 *         &lt;element name="PhoneNumber" type="{http://www.channel.ctfs.ctc.com}userPhoneNumberType"/>
 *         &lt;element name="Email" type="{http://www.channel.ctfs.ctc.com}userEmailType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICCreateUserRequest", propOrder = {
    "activeUserID",
    "userID",
    "firstName",
    "lastName",
    "employeeNumber",
    "roleID",
    "groupID",
    "addressLine1",
    "addressLine2",
    "municipality",
    "province",
    "postalCode",
    "phoneNumber",
    "email"
})
public class WebICCreateUserRequest
    implements Serializable
{

    @XmlElement(name = "ActiveUserID", required = true)
    protected String activeUserID;
    @XmlElement(name = "UserID", required = true)
    protected String userID;
    @XmlElement(name = "FirstName", required = true)
    protected String firstName;
    @XmlElement(name = "LastName", required = true)
    protected String lastName;
    @XmlElement(name = "EmployeeNumber", required = true)
    protected String employeeNumber;
    @XmlElement(name = "RoleID", required = true)
    protected UserRoleIDType roleID;
    @XmlElement(name = "GroupID", required = true)
    protected String groupID;
    @XmlElement(name = "AddressLine1", required = true)
    protected String addressLine1;
    @XmlElement(name = "AddressLine2", required = true)
    protected String addressLine2;
    @XmlElement(name = "Municipality", required = true)
    protected String municipality;
    @XmlElement(name = "Province", required = true)
    protected AddressProvinceType province;
    @XmlElement(name = "PostalCode", required = true)
    protected String postalCode;
    @XmlElement(name = "PhoneNumber", required = true)
    protected String phoneNumber;
    @XmlElement(name = "Email", required = true)
    protected String email;

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
     * Gets the value of the firstName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Sets the value of the firstName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFirstName(String value) {
        this.firstName = value;
    }

    /**
     * Gets the value of the lastName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Sets the value of the lastName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLastName(String value) {
        this.lastName = value;
    }

    /**
     * Gets the value of the employeeNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmployeeNumber() {
        return employeeNumber;
    }

    /**
     * Sets the value of the employeeNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmployeeNumber(String value) {
        this.employeeNumber = value;
    }

    /**
     * Gets the value of the roleID property.
     * 
     * @return
     *     possible object is
     *     {@link UserRoleIDType }
     *     
     */
    public UserRoleIDType getRoleID() {
        return roleID;
    }

    /**
     * Sets the value of the roleID property.
     * 
     * @param value
     *     allowed object is
     *     {@link UserRoleIDType }
     *     
     */
    public void setRoleID(UserRoleIDType value) {
        this.roleID = value;
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

    /**
     * Gets the value of the addressLine1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAddressLine1() {
        return addressLine1;
    }

    /**
     * Sets the value of the addressLine1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAddressLine1(String value) {
        this.addressLine1 = value;
    }

    /**
     * Gets the value of the addressLine2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAddressLine2() {
        return addressLine2;
    }

    /**
     * Sets the value of the addressLine2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAddressLine2(String value) {
        this.addressLine2 = value;
    }

    /**
     * Gets the value of the municipality property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMunicipality() {
        return municipality;
    }

    /**
     * Sets the value of the municipality property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMunicipality(String value) {
        this.municipality = value;
    }

    /**
     * Gets the value of the province property.
     * 
     * @return
     *     possible object is
     *     {@link AddressProvinceType }
     *     
     */
    public AddressProvinceType getProvince() {
        return province;
    }

    /**
     * Sets the value of the province property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressProvinceType }
     *     
     */
    public void setProvince(AddressProvinceType value) {
        this.province = value;
    }

    /**
     * Gets the value of the postalCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPostalCode() {
        return postalCode;
    }

    /**
     * Sets the value of the postalCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPostalCode(String value) {
        this.postalCode = value;
    }

    /**
     * Gets the value of the phoneNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * Sets the value of the phoneNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPhoneNumber(String value) {
        this.phoneNumber = value;
    }

    /**
     * Gets the value of the email property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the value of the email property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmail(String value) {
        this.email = value;
    }

}
