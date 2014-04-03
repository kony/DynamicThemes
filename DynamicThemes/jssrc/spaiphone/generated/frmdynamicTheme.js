//Form JS File
function frmdynamicTheme_hbox120664956618024_onClick_seq0(eventobject) {
    frmIntro.show();
};

function frmdynamicTheme_button120664956618029_onClick_seq0(eventobject) {
    newKonyThemefn.call(this);
};

function frmdynamicTheme_button120664956618030_onClick_seq0(eventobject) {
    oldkonyThemefn.call(this);
};

function addWidgetsfrmdynamicTheme() {
    var label1178943813218402 = new kony.ui.Label({
        "id": "label1178943813218402",
        "isVisible": true,
        "text": "Dynamic Themes",
        "skin": "sknLblKonyThemeAppHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 91
    }, {});
    var hbox120664956618024 = new kony.ui.Box({
        "id": "hbox120664956618024",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "hbxKonythemeHeader",
        "focusSkin": "hbxKonythemeHeader",
        "onClick": frmdynamicTheme_hbox120664956618024_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120664956618024.add(
    label1178943813218402);
    var button120664956618029 = new kony.ui.Button({
        "id": "button120664956618029",
        "isVisible": true,
        "text": "New Kony Theme",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmdynamicTheme_button120664956618029_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 0, 0, 0],
        "padding": [0, 8, 0, 8],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {});
    var vbox1178973604210980 = new kony.ui.Box({
        "id": "vbox1178973604210980",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 16,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1178973604210980.add();
    var button120664956618030 = new kony.ui.Button({
        "id": "button120664956618030",
        "isVisible": true,
        "text": "Old Kony Theme",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmdynamicTheme_button120664956618030_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 6, 0],
        "padding": [0, 8, 0, 8],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {});
    var hbox120664956618675 = new kony.ui.Box({
        "id": "hbox120664956618675",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120664956618675.add(
    button120664956618029, vbox1178973604210980, button120664956618030);
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
            "hbox120664956617995": "hbox120664956617995",
            "lbl1": "lbl1",
            "hbox120664956617994": "hbox120664956617994"
        },
        "rowTemplate": segment2120664956617990box,
        "widgetSkin": "sknSegKonyThemeRowNormal",
        "rowSkin": "sknSegKonyThemeRowNormal",
        "rowFocusSkin": "sknSegKonyThemeRowFocus",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "c0c0c000",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [4, 2, 4, 5],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [1, 2, 1, 2],
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
        "padding": [1, 2, 1, 2],
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 2, 1, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 2, 1, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120664956617995.add(
    lbl41, lbl42);
    segment2120664956617990box.add(
    lbl1, lbl2, hbox120664956617994, hbox120664956617995);
    frmdynamicTheme.add(
    hbox120664956618024, hbox120664956618675, segment2120664956617990);
};

function frmdynamicThemeGlobals() {
    var MenuId = [];
    frmdynamicTheme = new kony.ui.Form2({
        "id": "frmdynamicTheme",
        "title": "Dynamic Theme",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmdynamicTheme
    }, {
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};