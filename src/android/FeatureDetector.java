package org.apache.cordova.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

public class FeatureDetector extends CordovaPlugin {
	private static final String FEATURE_DETECTOR_TAG = "FeatureDetector";
	private static final String ACTION_HAS_FEATURE   = "hasFeature";
	
	
	@Override
	public boolean execute (String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals(ACTION_HAS_FEATURE)) {
			String requestedFeature = args.getString(0);
			hasFeature(requestedFeature, callbackContext);
			
			return true;
		} else {
			Log.d(FEATURE_DETECTOR_TAG, "Invalid action");
			callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION, false));
			
			return false;
		}
	}
	
	private synchronized void hasFeature (String feature, CallbackContext callbackContext) {
		boolean hasFeature = cordova.getActivity().getApplicationContext().getPackageManager().hasSystemFeature(feature);
		
		callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, hasFeature));
	}
}
