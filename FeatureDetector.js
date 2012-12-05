/**
 *  FEATURE DETECTOR
 *      Apache Cordova Plugin to check the presence of hardware features
 *
 *  @author Ingo Bürk (admin(at)airblader.de)
 */

cordova.define('cordova/plugin/FeatureDetector', function (require, exports, module) {
    var exec = require('cordova/exec'),
        FeatureDetector;
        
    FeatureDetector = function () {
        /* --- */
    };
        
    
    /**
     *  Checks whether a hardware feature is present
     *  
     *  Example Usage:
     *      window.featureDetector.hasFeature(
     *          window.featureDetector.FEATURE.FEATURE_CAMERA,
     *          function (response) {
     *              console.log('Device has ' + ((response) ? '' : 'no ') + 'camera');
     *          }
     *      );
     *  
     *  @param feature Feature to be checked (from FeatureDetector.FEATURE)
     *  @param callback Callback function that will be invoked with a boolean value representing the response
     */
    FeatureDetector.prototype.hasFeature = function (feature, callback) {
        if (typeof feature === 'string') {
            exec(callback, null, 'FeatureDetector', 'hasFeature', [feature]);
        } else { // Unknown argument type
            if (window.console && window.console.log) {
                window.console.log('FeatureDetector (JS): Unknown/Invalid argument type "' + typeof feature + '"');    
            }
            
            callback(false);
        }
    }
    
    // Constants taken from
    // https://developer.android.com/reference/android/content/pm/PackageManager.html
    FeatureDetector.prototype.FEATURE = {
        // CAMERA
        FEATURE_CAMERA                        : 'android.hardware.camera',
        FEATURE_CAMERA_ANY                    : 'android.hardware.camera.any',
        FEATURE_CAMERA_AUTOFOCUS              : 'android.hardware.camera.autofocus',
        FEATURE_CAMERA_FLASH                  : 'android.hardware.camera.flash',
        FEATURE_CAMERA_FRONT                  : 'android.hardware.camera.front',
        
        // FAKETOUCH
        FEATURE_FAKETOUCH                     : 'android.hardware.faketouch',
        FEATURE_FAKETOUCH_MULTITOUCH_DISTINCT : 'android.hardware.faketouch.multitouch.distinct',
        FEATURE_FAKETOUCH_MULTITOUCH_JAZZHAND : 'android.hardware.faketouch.multitouch.jazzhand',
        
        // LOCATION
        FEATURE_LOCATION                      : 'android.hardware.location',
        FEATURE_LOCATION_GPS                  : 'android.hardware.location.gps',
        FEATURE_LOCATION_NETWORK              : 'android.hardware.location.network',
        
        // SENSOR
        FEATURE_SENSOR_ACCELEROMETER          : 'android.hardware.sensor.accelerometer',
        FEATURE_SENSOR_BAROMETER              : 'android.hardware.sensor.barometer',
        FEATURE_SENSOR_COMPASS                : 'android.hardware.sensor.compass',
        FEATURE_SENSOR_GYROSCOPE              : 'android.hardware.sensor.gyroscope',
        FEATURE_SENSOR_LIGHT                  : 'android.hardware.sensor.light',
        FEATURE_SENSOR_PROXIMITY              : 'android.hardware.sensor.proximity',
        
        // OTHER HARDWARE
        FEATURE_MICROPHONE                    : 'android.hardware.microphone',
        FEATURE_NFC                           : 'android.hardware.nfc',
        FEATURE_SCREEN_LANDSCAPE              : 'android.hardware.screen.landscape',
        FEATURE_SCREEN_PORTRAIT               : 'android.hardware.screen.portrait',
        
        // SOFTWARE
        FEATURE_LIVE_WALLPAPER                : 'android.software.live_wallpaper',
        FEATURE_SIP                           : 'android.software.sip',
    };
    
    
    // Create instance and register for export
    module.exports = new FeatureDetector();
});

// Attach FeatureDetector to global window scope
if (!window.featureDetector) {
    window.featureDetector = cordova.require('cordova/plugin/FeatureDetector');
}