# FeatureDetector #

### Description ###

This is an *Android* plugin for Apache Cordova / Phonegap. It allows you to check if certain hard or software features are present on the current device. 

The original plugin is available at https://github.com/Airblader/FeatureDetector
The fork is available at https://github.com/DarioDP/FeatureDetector

## Installation

### Install ###

``cordova plugin add https://github.com/DarioDP/FeatureDetector.git ``

For more help on installing Cordova plugins, please read the official [documentation](http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface_add_plugin_features)

## Usage

The plugin will be available at `window.featureDetector` and provides the method `hasFeature(feature, callback)`. The features to check for can be found in `window.featureDetector.FEATURE`. For example, if you want to check for camera presence:
Example:
```
    window.featureDetector.hasFeature(
        window.featureDetector.FEATURE.FEATURE_CAMERA,
        function (hasFeature) {
            if (hasFeature) {
                alert('Camera is present!');
            } else {
                alert('Sorry, no camera present!');
            }
        }
    );
```

### Limitations ###
For Android only. Tested on Android API 10-19 (testing for API 20 is undergoing).


### License ###

This plugin can be used freely without a license of any kind.
