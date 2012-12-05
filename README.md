# FeatureDetector

This is an Android plugin for Apache Cordova / Phonegap. It allows you to check if certain hard- or software features are present on the current device.

## Installation

1. Add `FeatureDetector.java` to your project (package: `org.apache.cordova.plugin`)
2. Add `FeatureDetector.js` into your project (somewhere in your `assets/` folder)
3. Add  the following line to `src/res/xml/config.xml`

    <plugin name="FeatureDetector" value="org.apache.cordova.plugin.FeatureDetector" />

## Usage

The plugin will be available at `window.featureDetector` and provides the method `hasFeature(feature, callback)`. The features to check for can be found in `window.featureDetector.FEATURE`. For example, if you want to check for camera presence:

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

## License

This plugin can be used freely without a license of any kind.
