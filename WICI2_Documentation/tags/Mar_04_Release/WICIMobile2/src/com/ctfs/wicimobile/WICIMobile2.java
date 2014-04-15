/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.ctfs.wicimobile;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;
import android.os.Bundle;
import android.util.Log;

import com.ctfs.wicimobile.util.PrinterManager;

public class WICIMobile2 extends DroidGap
//public class WICIMobile2 extends Activity implements CordovaInterface 
{
	
	//private 	ExecutorService 		threadPool;
	//private		CordovaWebView			cwv;
	
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
    	Log.i("WICIMobile2", "onCreate");
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        
        //setContentView(R.layout.main);
        
        // Restore printers history 
        PrinterManager.getInstance().populatePrinterHistoryFromPreferences(this);

        //Orphaned and only relevant for DroidGap inheritance
        super.loadUrl(Config.getStartUrl());    
        //super.loadUrl("file:///android_asset/www/production/index.html");

        //cwv = (CordovaWebView) findViewById(R.id.WICIWebView);        
        //cwv.getSettings().setDefaultTextEncodingName("utf-8");
        //cwv.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        
        //Config.init(this);
        //cwv.loadUrl(Config.getStartUrl());        
    }
    
    @Override
    protected void onStop() {
        super.onStop();
        
        // Save printers history
        PrinterManager.getInstance().storePrinterHistoryInPreferences(this);
    }

    /*
	@Override
	public Activity getActivity() {
		// Need to return this otherwise the app crashes.
		//return this;
	}

	@Override
	public ExecutorService getThreadPool() {
		//return threadPool;
	}

	@Override
	public Object onMessage(String arg0, Object arg1) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setActivityResultCallback(CordovaPlugin arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void startActivityForResult(CordovaPlugin arg0, Intent arg1, int arg2) {
		// TODO Auto-generated method stub
		
	}
     */
}