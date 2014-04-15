package com.ctfs.wicimobile.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import com.ctfs.wicimobile.enums.ServerResponseStatus;
import com.zebra.sdk.comm.Connection;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.printer.ZebraPrinter;
import android.content.Context;
import android.content.res.AssetManager;

public class WICIFileHelper {
    public final static String PrintOutMockupFilePath = "templates/PrintOutMockup_";    
    public final static String PrintOutMockupFileExtension = ".prn";    
    public final static String PrintOutMockupPendDecSuffix = "_PENDING_DECLINE";
//    public final static String PrintOutMockupQCProvinceSuffix = "_QC";
    public final static String PrintOutMockupProvinceSuffix = "_555";
    public final static String PrintTestFilePath = "templates/TestPrintTemplate";
    protected static final String EMPTY_STRING = "";
    
    public void processMockupFile(
            ZebraPrinter printer,
            Context context, 
            WICIReplacementHelper replacementHelper, 
            String cardType,
            ServerResponseStatus serverResponseStatus,
            String province,
            String correspondenceLanguage) throws ConnectionException, IOException {
        
        // Get AssetManager instance
        AssetManager assetManager = context.getAssets();
        
        // Get printer connection
        Connection  connection = printer.getConnection();
        
        try {
        	String _cardType = cardType;
        	
        	// Define suffix for correspondence language
        	String correspondenceLanguageSuffix = "";
        	if (correspondenceLanguage != "") {
        		correspondenceLanguageSuffix = "_" + correspondenceLanguage;
        	} else {
        		// Default suffix for English as correspondence language
        		correspondenceLanguageSuffix = "_E";
        	}
        	
            // Add suffix for bad server response
            if (serverResponseStatus != ServerResponseStatus.APPROVED){
                cardType += PrintOutMockupPendDecSuffix;
            } 
//            if (_cardType.equalsIgnoreCase("OMC") && province.equalsIgnoreCase("QC")) {
//                // If province QUEBEC use OMC mockup without a coupon            	
//            	cardType += PrintOutMockupQCProvinceSuffix;
//            }
            
            // Set suffix for correspondence language
            cardType += correspondenceLanguageSuffix;
            
            if (_cardType.equalsIgnoreCase("OMC") && 
            	((province.equalsIgnoreCase("QC") ||
            	  province.equalsIgnoreCase("PE") ||
            	  province.equalsIgnoreCase("NL") ||
            	  province.equalsIgnoreCase("NB") ||
            	  province.equalsIgnoreCase("NS")))) {
//            	cardType += PrintOutMockupQCProvinceSuffix;
            	cardType += PrintOutMockupProvinceSuffix;
            }            
            
            String fullFileName = PrintOutMockupFilePath + cardType + PrintOutMockupFileExtension; 
            
            java.io.InputStream inputStream = assetManager.open(fullFileName);
            
            if ( inputStream != null ) {
                // Get input file stream
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
                String line;                                
                
                // Open connection                
                if (!connection.isConnected()) {
                    connection.open();
                }
                
                // Read file per line
                while ((line = bufferedReader.readLine()) != null ) {
                    String replacedLine = replacementHelper.applyReplacement(line);
                    if (replacedLine == EMPTY_STRING) continue;
                    
                    // Send result to the printer
                    connection.write(replacedLine.getBytes());
                }

                // Close input file stream
                inputStream.close();
            }
        }
        finally{
            if (connection.isConnected()) {
                connection.close();
            }
        }
    }    
    
    public void printTestFile(ZebraPrinter printer, Context context) throws ConnectionException, IOException {
        // Get AssetManager instance
        AssetManager assetManager = context.getAssets();
        
        // Get printer connection
        Connection  connection = printer.getConnection();
        
        try {
            String fullFileName = PrintTestFilePath + PrintOutMockupFileExtension;
            
            java.io.InputStream inputStream = assetManager.open(fullFileName);
            
            if ( inputStream != null ) {
                // Get input file stream
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
                String line;                                
                
                // Open connection                
                if (!connection.isConnected()) {
                    connection.open();
                }
                
                // Read file per line
                while ((line = bufferedReader.readLine()) != null ) {
                    // Send result to the printer
                    connection.write(line.getBytes());
                }

                // Close input file stream
                inputStream.close();
            }
        }
        finally{
            if (connection.isConnected()) {
                connection.close();
            }
        }        
    }
}
