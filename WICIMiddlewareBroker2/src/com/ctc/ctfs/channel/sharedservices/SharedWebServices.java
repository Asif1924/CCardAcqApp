//
// Generated By:JAX-WS RI IBM 2.1.6 in JDK 6 (JAXB RI IBM JAXB 2.1.10 in JDK 6)
//


package com.ctc.ctfs.channel.sharedservices;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

@WebService(name = "SharedWebServices", targetNamespace = "http://web.sharedservices.ctfs.com/SharedWebServices/")
@XmlSeeAlso({
    ObjectFactory.class
})
public interface SharedWebServices {


    /**
     * 
     * @param in
     * @return
     *     returns com.channel.ctfs.ctc.ServiceResponse
     */
    @WebMethod(action = "http://web.sharedservices.ctfs.com/SharedWebServices/processRequest")
    @WebResult(name = "out", targetNamespace = "")
    @RequestWrapper(localName = "processRequest", targetNamespace = "http://web.sharedservices.ctfs.com/SharedWebServices/", className = "com.channel.ctfs.ctc.ProcessRequest")
    @ResponseWrapper(localName = "processRequestResponse", targetNamespace = "http://web.sharedservices.ctfs.com/SharedWebServices/", className = "com.channel.ctfs.ctc.ProcessRequestResponse")
    public ServiceResponse processRequest(
        @WebParam(name = "in", targetNamespace = "")
        ServiceRequest in);

}