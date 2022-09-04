// 'use strict'

const apiKey = 'AAPK3f0719badf7d40c98575015b32c80a09Dur9TO9eKobJqJ7Kmac-V_WvA6dAF-LaNgd0Un5QPti1LxT7OwTLz-2Udp4WD5oZ';

require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView"
], function (Map, MapView) {

    esriConfig.apiKey = apiKey;
    const map = new Map({
        basemap: "arcgis-nova"
    });

    const view = new MapView({
        map: map,
        center: [-118.805, 34.027],
        zoom: 13,
        container: "viewDiv"
    });
});