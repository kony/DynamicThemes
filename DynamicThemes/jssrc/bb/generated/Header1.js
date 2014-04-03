//Template File
function Header1_button120664956618028_onClick_seq0(eventobject) {
    defaultThemefn.call(this);
};

function Header1_button120664956618029_onClick_seq0(eventobject) {
    goldThemefn.call(this);
};

function Header1_button120664956618030_onClick_seq0(eventobject) {
    standardThemefn.call(this);
};

function initializeHeader1() {
    var image2120664956619269 = new kony.ui.Image2({
        "id": "image2120664956619269",
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
    var hbox120664956618024 = new kony.ui.Box({
        "id": "hbox120664956618024",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    hbox120664956618024.add(
    image2120664956619269);
    var button120664956618028 = new kony.ui.Button({
        "id": "button120664956618028",
        "isVisible": true,
        "text": "Remote",
        "skin": "btnHead1",
        "focusSkin": "btnHead1",
        "onClick": Header1_button120664956618028_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "containerWeight": 33
    }, {});
    var button120664956618029 = new kony.ui.Button({
        "id": "button120664956618029",
        "isVisible": true,
        "text": "Gold",
        "skin": "btnGold",
        "focusSkin": "btnGold",
        "onClick": Header1_button120664956618029_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "containerWeight": 34
    }, {});
    var button120664956618030 = new kony.ui.Button({
        "id": "button120664956618030",
        "isVisible": true,
        "text": "Blue",
        "skin": "btnStand",
        "focusSkin": "btnStand",
        "onClick": Header1_button120664956618030_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "containerWeight": 33
    }, {});
    var hbox120664956618675 = new kony.ui.Box({
        "id": "hbox120664956618675",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 42,
        "percent": true,
        "vExpand": false,
        "hExpand": true
    }, {});
    hbox120664956618675.add(
    button120664956618028, button120664956618029, button120664956618030);
    var vbox120664956618568 = new kony.ui.Box({
        "id": "vbox120664956618568",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "vExpand": false,
        "hExpand": true
    }, {});
    vbox120664956618568.add(
    hbox120664956618024, hbox120664956618675);
    hbox120664956618559 = new kony.ui.Box({
        "id": "hbox120664956618559",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 28,
        "percent": true,
        "vExpand": false,
        "hExpand": true
    }, {});
    hbox120664956618559.add(
    vbox120664956618568);
};