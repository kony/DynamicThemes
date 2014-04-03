//Template File
function initializeheader() {
    var image2120664956619268 = new kony.ui.Image2({
        "id": "image2120664956619268",
        "isVisible": true,
        "src": "header1.png",
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
    hbox120664956618024 = new kony.ui.Box({
        "id": "hbox120664956618024",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "paddingInPixel": false
    }, {});
    hbox120664956618024.add(
    image2120664956619268);
};