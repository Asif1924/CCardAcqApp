/**
 * ClickEvent.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

public class ClickEvent  extends com.exacttarget.wsdl.partnerAPI.TrackingEvent  implements java.io.Serializable {
    private java.lang.Integer URLID;

    private java.lang.String URL;

    private java.lang.Long URLIDLong;

    public ClickEvent() {
    }

    public ClickEvent(
           com.exacttarget.wsdl.partnerAPI.ClientID client,
           java.lang.String partnerKey,
           com.exacttarget.wsdl.partnerAPI.APIProperty[] partnerProperties,
           java.util.Calendar createdDate,
           java.util.Calendar modifiedDate,
           java.lang.Integer ID,
           java.lang.String objectID,
           java.lang.String customerKey,
           com.exacttarget.wsdl.partnerAPI.Owner owner,
           java.lang.String correlationID,
           java.lang.String objectState,
           java.lang.Integer sendID,
           java.lang.String subscriberKey,
           java.util.Calendar eventDate,
           com.exacttarget.wsdl.partnerAPI.EventType eventType,
           java.lang.String triggeredSendDefinitionObjectID,
           java.lang.Integer batchID,
           java.lang.Integer URLID,
           java.lang.String URL,
           java.lang.Long URLIDLong) {
        super(
            client,
            partnerKey,
            partnerProperties,
            createdDate,
            modifiedDate,
            ID,
            objectID,
            customerKey,
            owner,
            correlationID,
            objectState,
            sendID,
            subscriberKey,
            eventDate,
            eventType,
            triggeredSendDefinitionObjectID,
            batchID);
        this.URLID = URLID;
        this.URL = URL;
        this.URLIDLong = URLIDLong;
    }


    /**
     * Gets the URLID value for this ClickEvent.
     * 
     * @return URLID
     */
    public java.lang.Integer getURLID() {
        return URLID;
    }


    /**
     * Sets the URLID value for this ClickEvent.
     * 
     * @param URLID
     */
    public void setURLID(java.lang.Integer URLID) {
        this.URLID = URLID;
    }


    /**
     * Gets the URL value for this ClickEvent.
     * 
     * @return URL
     */
    public java.lang.String getURL() {
        return URL;
    }


    /**
     * Sets the URL value for this ClickEvent.
     * 
     * @param URL
     */
    public void setURL(java.lang.String URL) {
        this.URL = URL;
    }


    /**
     * Gets the URLIDLong value for this ClickEvent.
     * 
     * @return URLIDLong
     */
    public java.lang.Long getURLIDLong() {
        return URLIDLong;
    }


    /**
     * Sets the URLIDLong value for this ClickEvent.
     * 
     * @param URLIDLong
     */
    public void setURLIDLong(java.lang.Long URLIDLong) {
        this.URLIDLong = URLIDLong;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ClickEvent)) return false;
        ClickEvent other = (ClickEvent) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.URLID==null && other.getURLID()==null) || 
             (this.URLID!=null &&
              this.URLID.equals(other.getURLID()))) &&
            ((this.URL==null && other.getURL()==null) || 
             (this.URL!=null &&
              this.URL.equals(other.getURL()))) &&
            ((this.URLIDLong==null && other.getURLIDLong()==null) || 
             (this.URLIDLong!=null &&
              this.URLIDLong.equals(other.getURLIDLong())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = super.hashCode();
        if (getURLID() != null) {
            _hashCode += getURLID().hashCode();
        }
        if (getURL() != null) {
            _hashCode += getURL().hashCode();
        }
        if (getURLIDLong() != null) {
            _hashCode += getURLIDLong().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ClickEvent.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ClickEvent"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("URLID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "URLID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("URL");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "URL"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("URLIDLong");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "URLIDLong"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}