//Form JS File
function frmdynamicTheme_button120664956617085_onClick_seq0(eventobject) {
    frmIntro.show();
};

function frmdynamicTheme_button120664956619314_onClick_seq0(eventobject) {
    frmIntro.show();
};

function addWidgetsfrmdynamicTheme() {
    var button120664956617085 = new kony.ui.Button({
        "id": "button120664956617085",
        "isVisible": true,
        "text": "Home",
        "skin": "btnSample",
        "focusSkin": "btnSample",
        "onClick": frmdynamicTheme_button120664956617085_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var segment2120664956617990box = new kony.ui.Box({
        "id": "segment2120664956617990box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 35
    }, {});
    var segment2120664956617990 = new kony.ui.SegmentedUI2({
        "id": "segment2120664956617990",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lbl32": "lbl32",
            "lbl31": "lbl31",
            "lbl42": "lbl42",
            "lbl2": "lbl2",
            "lbl41": "lbl41",
            "lbl1": "lbl1"
        },
        "rowTemplate": segment2120664956617990box,
        "widgetSkin": "segSkin",
        "rowSkin": "segSkin",
        "rowFocusSkin": "segSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "c0c0c000",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [4, 2, 4, 5],
        "marginInPixel": false,
        "containerWeight": 35
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "skin": "lbl1Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [2, 3, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "lbl2Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var lbl31 = new kony.ui.Label({
        "id": "lbl31",
        "isVisible": true,
        "skin": "lbl31Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {});
    var lbl32 = new kony.ui.Label({
        "id": "lbl32",
        "isVisible": true,
        "skin": "lbl32Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {});
    var hbox120664956617994 = new kony.ui.Box({
        "id": "hbox120664956617994",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 25,
        "percent": true,
        "margin": [2, 0, 2, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false
    }, {});
    hbox120664956617994.add(
    lbl31, lbl32);
    var lbl41 = new kony.ui.Label({
        "id": "lbl41",
        "isVisible": true,
        "skin": "lbl31Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {});
    var lbl42 = new kony.ui.Label({
        "id": "lbl42",
        "isVisible": true,
        "skin": "lbl32Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {});
    var hbox120664956617995 = new kony.ui.Box({
        "id": "hbox120664956617995",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 24,
        "percent": true,
        "margin": [2, 0, 2, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false
    }, {});
    hbox120664956617995.add(
    lbl41, lbl42);
    segment2120664956617990box.add(
    lbl1, lbl2, hbox120664956617994, hbox120664956617995);
    var button120664956619314 = new kony.ui.Button({
        "id": "button120664956619314",
        "isVisible": true,
        "text": "Home",
        "skin": "btnSample",
        "focusSkin": "btnSample",
        "onClick": frmdynamicTheme_button120664956619314_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmdynamicTheme.add(
    button120664956617085, segment2120664956617990, button120664956619314);
};

function frmdynamicThemeGlobals() {
    var MenuId = [];
    frmdynamicTheme = new kony.ui.Form2({
        "id": "frmdynamicTheme",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox120664956618559],
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmBlue",
        "addWidgets": addWidgetsfrmdynamicTheme
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT
    }, {
        "retainScrollPosition": false,
        "titleBar": true,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};