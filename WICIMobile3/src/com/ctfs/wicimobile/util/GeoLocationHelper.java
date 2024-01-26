package com.ctfs.wicimobile.util;

import android.Manifest;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Service;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.os.IBinder;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.util.Log;

public class GeoLocationHelper extends Service implements LocationListener {
	private static final String TAG = "GeoLocationHelper :: ";
    private final Context mContext;
    boolean isGPSEnabled = false;
    boolean isNetworkEnabled = false;
    boolean canGetLocation = false;
    Location location;
    double latitude;
    double longitude;
    private static final long MIN_DISTANCE_CHANGE_FOR_UPDATES = 10; // 10 meters
    private static final long MIN_TIME_BW_UPDATES = 1000 * 60 * 1; // 1 minute

    protected LocationManager locationManager;

    public GeoLocationHelper(Context context) {
        this.mContext = context;
        getLocation();
    }

    public Location getLocation() {
    	final String sMethod = "getLocation :: ";
    	Log.d(TAG, sMethod);
        try {
            locationManager = (LocationManager) mContext.getSystemService(LOCATION_SERVICE);
            
            isGPSEnabled = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER);
            Log.d(TAG, sMethod + "isGPSEnabled : " + isGPSEnabled);
            
            isNetworkEnabled = locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER);
            Log.d(TAG, sMethod + "isNetworkEnabled : " + isNetworkEnabled);
            
            if (!isGPSEnabled && !isNetworkEnabled) {
            	Log.d(TAG, sMethod + "No network provider is enabled");
                // no network provider is enabled
            } else {
                this.canGetLocation = true;
                Log.d(TAG, sMethod + " canGetLocation : " + canGetLocation);
                
                if (isNetworkEnabled) {
                	Log.d(TAG, sMethod + "First get location from Network Provider.");
                    //check the network permission
                    if (ActivityCompat.checkSelfPermission(mContext, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(mContext, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                        ActivityCompat.requestPermissions((Activity) mContext, new String[]{android.Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION}, 101);
                    }
                    locationManager.requestLocationUpdates(
                            LocationManager.NETWORK_PROVIDER,
                            MIN_TIME_BW_UPDATES,
                            MIN_DISTANCE_CHANGE_FOR_UPDATES, this);
                   
                    if (locationManager != null) {
                    	Log.d(TAG, sMethod + " locationManager not null ");
                        location = locationManager
                                .getLastKnownLocation(LocationManager.NETWORK_PROVIDER);

                        if (location != null) {
                        	Log.d(TAG, sMethod + " location not null ");
                            latitude = location.getLatitude();
                            longitude = location.getLongitude();
                            Log.d(TAG, sMethod + " latitude : " + latitude +
                            		" longitude : " + longitude);
                        }
                    }
                }

                if (isGPSEnabled) {
                	Log.d(TAG, sMethod + "if GPS Enabled get lat/long using GPS Services.");
                	
                    if (location == null) {
                    	Log.d(TAG, sMethod + " location null ");
                        //check the network permission
                        if (ActivityCompat.checkSelfPermission(mContext, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(mContext, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                            ActivityCompat.requestPermissions((Activity) mContext, new String[]{android.Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION}, 101);
                        }
                        locationManager.requestLocationUpdates(
                                LocationManager.GPS_PROVIDER,
                                MIN_TIME_BW_UPDATES,
                                MIN_DISTANCE_CHANGE_FOR_UPDATES, this);

                        if (locationManager != null) {
                        	Log.d(TAG, sMethod + " locationManager not null ");
                            location = locationManager
                                    .getLastKnownLocation(LocationManager.GPS_PROVIDER);

                            if (location != null) {
                            	Log.d(TAG, sMethod + " location not null ");
                                latitude = location.getLatitude();
                                longitude = location.getLongitude();
                                Log.d(TAG, sMethod + " latitude : " + latitude +
                                		" longitude : " + longitude);
                            }
                        }
                    }
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return location;
    }

    /**
     * Stop using GPS listener
     * Calling this function will stop using GPS in your app
     * */

    public void stopUsingGPS(){
    	final String sMethod = "stopUsingGPS :: ";
    	Log.d(TAG, sMethod);
    	
        if(locationManager != null){
            locationManager.removeUpdates(GeoLocationHelper.this);
        }
    }

    /**
     * Function to get latitude
     * */

    public double getLatitude(){
    	final String sMethod = "getLatitude :: ";
    	Log.d(TAG, sMethod);
    	
        if(location != null){
            latitude = location.getLatitude();
        }
        
        return latitude;
    }

    /**
     * Function to get longitude
     * */

    public double getLongitude(){
    	final String sMethod = "getLongitude :: ";
    	Log.d(TAG, sMethod);
    	
        if(location != null){
            longitude = location.getLongitude();
        }

        return longitude;
    }

    /**
     * Function to check GPS/wifi enabled
     * @return boolean
     * */

    public boolean canGetLocation() {
    	final String sMethod = "canGetLocation :: ";
    	Log.d(TAG, sMethod);
    	
        return this.canGetLocation;
    }

    /**
     * Function to show settings alert dialog
     * On pressing Settings button will lauch Settings Options
     * */

    public void showSettingsAlert(){
    	final String sMethod = "showSettingsAlert :: ";
    	Log.d(TAG, sMethod);
    	
    	AlertDialog.Builder alertDialog = new AlertDialog.Builder(mContext);
        alertDialog.setTitle("Settings");
        alertDialog.setMessage("GPS is not enabled. Do you want to go to settings menu?");

        alertDialog.setPositiveButton("Settings", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog,int which) {
                Intent intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                mContext.startActivity(intent);
            }
        });

        alertDialog.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel();
            }
        });
        alertDialog.show();
    }

    @Override
    public void onLocationChanged(Location location) {
    }

    @Override
    public void onProviderDisabled(String provider) {
    }

    @Override
    public void onProviderEnabled(String provider) {
    }

    @Override
    public void onStatusChanged(String provider, int status, Bundle extras) {
    }

    @Override
    public IBinder onBind(Intent arg0) {
        return null;
    }
}