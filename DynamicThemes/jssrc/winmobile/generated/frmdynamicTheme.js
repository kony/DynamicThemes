//Form JS File
function frmdynamicTheme_frmdynamicTheme_preshow_seq0(eventobject, neworientation) {
    var crntTheme = kony.theme.getCurrentTheme();
    if ((crntTheme == "OldKonyTheme") && (kony.os.deviceInfo() == "iPhone")) {
        frmdynamicTheme.imgHeader.src = "back_ico_f.png";
    }
    if (((crntTheme == "NewKonyTheme") || (crntTheme == "default")) && (kony.os.deviceInfo() == "iPhone")) {
        frmdynamicTheme.imgHeader.src = "back_ico.png";
    }
};

function frmdynamicTheme_btnNewKonyTheme_onClick_seq0(eventobject) {
    newKonyThemefn.call(this);
};

function frmdynamicTheme_btnOldKonyThene_onClick_seq0(eventobject) {
    oldkonyThemefn.call(this);
};

function addWidgetsfrmdynamicTheme() {
    var lblHeadW8 = new kony.ui.Label({
        "id": "lblHeadW8",
        "isVisible": true,
        "text": "Dynamic Themes",
        "skin": "sknLblKonyThemeAppHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxHeadW8 = new kony.ui.Box({
        "id": "hbxHeadW8",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
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
    hbxHeadW8.add(
    lblHeadW8);
    var btnNewKonyTheme = new kony.ui.Button({
        "id": "btnNewKonyTheme",
        "isVisible": true,
        "text": "New Kony Theme",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmdynamicTheme_btnNewKonyTheme_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [5, 1, 1, 1],
        "padding": [1, 10, 1, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 39
    }, {});
    var vbx1 = new kony.ui.Box({
        "id": "vbx1",
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
    vbx1.add();
    var btnOldKonyThene = new kony.ui.Button({
        "id": "btnOldKonyThene",
        "isVisible": true,
        "text": "Old Kony Theme",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmdynamicTheme_btnOldKonyThene_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 0, 1],
        "padding": [1, 10, 1, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 39
    }, {});
    var hbxBtn = new kony.ui.Box({
        "id": "hbxBtn",
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
    hbxBtn.add(
    btnNewKonyTheme, vbx1, btnOldKonyThene);
    var segContentbox = new kony.ui.Box({
        "id": "segContentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 35
    }, {});
    var segContent = new kony.ui.SegmentedUI2({
        "id": "segContent",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbx1": "hbx1",
            "hbx2": "hbx2",
            "lbl32": "lbl32",
            "lbl31": "lbl31",
            "lbl42": "lbl42",
            "lbl2": "lbl2",
            "lbl41": "lbl41",
            "lbl1": "lbl1"
        },
        "rowTemplate": segContentbox,
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
        "margin": [1, 1, 1, 1],
        "padding": [2, 3, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
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
        "margin": [1, 1, 1, 1],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 51
    }, {});
    var hbx1 = new kony.ui.Box({
        "id": "hbx1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 25,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx1.add(
    lbl31, lbl32);
    var lbl41 = new kony.ui.Label({
        "id": "lbl41",
        "isVisible": true,
        "skin": "lbl31Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 51
    }, {});
    var hbx2 = new kony.ui.Box({
        "id": "hbx2",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 24,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx2.add(
    lbl41, lbl42);
    segContentbox.add(
    lbl1, lbl2, hbx1, hbx2);
    frmdynamicTheme.add(
    hbxHeadW8, hbxBtn, segContent);
};

function frmdynamicThemeGlobals() {
    var MenuId = [];
    frmdynamicTheme = new kony.ui.Form2({
        "id": "frmdynamicTheme",
        "title": "Dynamic Theme",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "preShow": frmdynamicTheme_frmdynamicTheme_preshow_seq0,
        "addWidgets": addWidgetsfrmdynamicTheme
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "showMiniAppMenu": false,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["segContent", "lblHeader", "hbxBtn", "btnNewKonyTheme", "btnOldKonyThene", "vbx1", "hbxHeadW8", "lblHeadW8"]
    });
};