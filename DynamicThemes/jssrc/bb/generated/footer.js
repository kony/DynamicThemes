//Template File
function initializefooter() {
    var image2120664956619271 = new kony.ui.Image2({
        "id": "image2120664956619271",
        "isVisible": true,
        "src": "cpyrite.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 100
    }, {});
    hbox120664956619270 = new kony.ui.Box({
        "id": "hbox120664956619270",
        "isVisible": true,
        "skin": "hboxBlue",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "vExpand": false,
        "hExpand": true
    }, {});
    hbox120664956619270.add(
    image2120664956619271);
};