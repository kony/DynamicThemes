//Form JS File
function frmIntro_button120950950221626_onClick_seq0(eventobject) {
    dynamicThemes.call(this);
};

function addWidgetsfrmIntro() {
    var label120664956617081 = new kony.ui.Label({
        "id": "label120664956617081",
        "isVisible": true,
        "text": "This app is showcase of dynamic themes :",
        "skin": "lblWhiteBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 10, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label120766246021556 = new kony.ui.Label({
        "id": "label120766246021556",
        "isVisible": true,
        "text": "-locally packaged themes (Gold & Blue themes)",
        "skin": "lblWhiteBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label120766246021564 = new kony.ui.Label({
        "id": "label120766246021564",
        "isVisible": true,
        "text": "-Remote themes(remote.theme)",
        "skin": "lblWhiteBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button120950950221626 = new kony.ui.Button({
        "id": "button120950950221626",
        "isVisible": true,
        "text": "Continue",
        "skin": "btnBlue",
        "focusSkin": "btnBlue",
        "onClick": frmIntro_button120950950221626_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 8, 1, 8],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    frmIntro.add(
    label120664956617081, label120766246021556, label120766246021564, button120950950221626);
};

function frmIntroGlobals() {
    var MenuId = [];
    frmIntro = new kony.ui.Form2({
        "id": "frmIntro",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox120664956618024],
        "footers": [hbox120664956619270],
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmBlue",
        "addWidgets": addWidgetsfrmIntro
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT
    }, {
        "retainScrollPosition": false,
        "titleBar": true,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};