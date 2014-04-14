//Form JS File
function frmdynamicTheme_btnNewKonyTheme_onClick_seq0(eventobject) {
    newKonyThemefn.call(this);
};

function frmdynamicTheme_btnOldKonyThene_onClick_seq0(eventobject) {
    oldkonyThemefn.call(this);
};

function addWidgetsfrmdynamicTheme() {
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
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
        "containerWeight": 100
    }, {});
    var hbxHeader = new kony.ui.Box({
        "id": "hbxHeader",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "hbxKonythemeHeader",
        "focusSkin": "hbxKonythemeHeader",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "padding": [0, 2, 0, 2],
        "vExpand": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxHeader.add(
    lblHeader);
    var btnNewKonyTheme = new kony.ui.Button({
        "id": "btnNewKonyTheme",
        "isVisible": true,
        "text": "New Kony Theme",
        "skin": "btnnormal",
        "focusSkin": "btnFocus",
        "onClick": frmdynamicTheme_btnNewKonyTheme_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {});
    var line1177186144842094 = new kony.ui.Line({
        "id": "line1177186144842094",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var btnOldKonyThene = new kony.ui.Button({
        "id": "btnOldKonyThene",
        "isVisible": true,
        "text": "Old Kony Theme",
        "skin": "btngrey",
        "focusSkin": "btnBlue",
        "onClick": frmdynamicTheme_btnOldKonyThene_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {});
    var hbxBtn = new kony.ui.Box({
        "id": "hbxBtn",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxBlue",
        "focusSkin": "hboxBlue",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxBtn.add(
    btnNewKonyTheme, line1177186144842094, btnOldKonyThene);
    var segContentbox = new kony.ui.Box({
        "id": "segContentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 59
    }, {});
    var segContent = new kony.ui.SegmentedUI2({
        "id": "segContent",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbx1": "hbx1",
            "hbx2": "hbx2",
            "hbx4": "hbx4",
            "hbx5": "hbx5",
            "hbx6": "hbx6",
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
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        },
        "groupCells": false,
        "screenLevelWidget": true,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "containerWeight": 59
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "skin": "lbl1Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {});
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "lbl2Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {});
    var lbl31 = new kony.ui.Label({
        "id": "lbl31",
        "isVisible": true,
        "skin": "lbl31Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {});
    var lbl32 = new kony.ui.Label({
        "id": "lbl32",
        "isVisible": true,
        "skin": "lbl32Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "containerWeight": 49
    }, {});
    var hbx1 = new kony.ui.Box({
        "id": "hbx1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "padding": [2, 0, 0, 0],
        "vExpand": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx1.add(
    lbl31, lbl32);
    var hbx5 = new kony.ui.Box({
        "id": "hbx5",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 23,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx5.add(
    hbx1);
    var lbl41 = new kony.ui.Label({
        "id": "lbl41",
        "isVisible": true,
        "skin": "lbl31Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
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
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "containerWeight": 51
    }, {});
    var hbx2 = new kony.ui.Box({
        "id": "hbx2",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx2.add(
    lbl41, lbl42);
    var hbx6 = new kony.ui.Box({
        "id": "hbx6",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 22,
        "margin": [0, 0, 70, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx6.add(
    hbx2);
    var hbx4 = new kony.ui.Box({
        "id": "hbx4",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx4.add(
    hbx5, hbx6);
    segContentbox.add(
    lbl1, lbl2, hbx4);
    var sbxContent = new kony.ui.ScrollBox({
        "id": "sbxContent",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "scrollArrowConfig": ["", "", "", ""]
    });
    sbxContent.add(
    segContent);
    var hbxScbx1 = new kony.ui.Box({
        "id": "hbxScbx1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxScbx1.add(
    sbxContent);
    frmdynamicTheme.add(
    hbxHeader, hbxBtn, hbxScbx1);
};

function frmdynamicThemeGlobals() {
    var MenuId = [];
    frmdynamicTheme = new kony.ui.Form2({
        "id": "frmdynamicTheme",
        "title": "Dynamic Theme",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "needAppMenu": true,
        "addWidgets": addWidgetsfrmdynamicTheme
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
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