package com.ctfs.wicimobile.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import com.ctfs.wicimobile.util.WICIDeviceInfoHelper;

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.util.Log;

@TargetApi(Build.VERSION_CODES.GINGERBREAD)
public class DeviceInfoPlugin extends CordovaPlugin
{
	private static final String TAG = "DeviceInfoPlugin";
	private static final String NOT_SUPPORTED_ACTION = "Not supported action: ";

	public Activity getCurrentContext()
	{
		return this.cordova.getActivity();
	}

	private String getManufacturerSerialNumber()
	{
		//return WICIDeviceInfoHelper.getDeviceSerialNo();
		//return new WICIDeviceInfoHelper().getDeviceSerialNo(this.cordova.getActivity());
		return WICIDeviceInfoHelper.getInstace(this.cordova.getActivity()).getDeviceSerialNo();
	}

	private String getBuildSerialNumber()
	{
		Log.i(TAG, "getBuildSerialNumber" );
		return Build.SERIAL;
	}


	private String getDeviceInfo()
	{
		String deviceInfoString = "{}";
		String mfgSerial = getManufacturerSerialNumber();
		String buildSerial = getBuildSerialNumber();

		deviceInfoString = "{ MfgSerial : \"" + mfgSerial + "\", BuildSerial : \"" + buildSerial + "\" }";

		return deviceInfoString;
	}

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException
	{
		Log.i(TAG,"execute");
		if (action.equals("getDeviceInfo"))
		{
			try
			{
				String deviceInfo = getDeviceInfo();
				PluginResult result = new PluginResult(PluginResult.Status.OK, deviceInfo);
				callbackContext.sendPluginResult(result);
				return true;
			}
			catch (Exception ex)
			{
				Log.e(TAG, action + " execute exception", ex);

				if (callbackContext != null)
				{
					callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
				}
			}
		}
		else
		{
			Log.e(TAG, action + " action is not supported", null);

			if (callbackContext != null)
			{
				callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, NOT_SUPPORTED_ACTION + action));
			}
		}

		return false;
	}
}

