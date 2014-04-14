//Form JS File
function frmdynamicTheme_segMenu_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    OnRowClick.call(this);
};

function addWidgetsfrmdynamicTheme() {
    var segMenubox = new kony.ui.Box({
        "id": "segMenubox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 100
    }, {});
    var segMenu = new kony.ui.SegmentedUI2({
        "id": "segMenu",
        "isVisible": true,
        "retainSelection": true,
        "widgetDataMap": {
            "lblSegData": "lblSegData"
        },
        "data": [{
            "lblSegData": "New Kony Theme"
        }, {
            "lblSegData": "Old Kony Theme"
        }],
        "rowTemplate": segMenubox,
        "rowSkin": "sknSegKonyThemeRowNormal",
        "rowFocusSkin": "sknSegKonyThemeRowFocus",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": true,
        "screenLevelWidget": true,
        "onRowClick": frmdynamicTheme_segMenu_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var lblSegData = new kony.ui.Label({
        "id": "lblSegData",
        "isVisible": true,
        "skin": "lblgrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    segMenubox.add(
    lblSegData);
    var vbx5 = new kony.ui.Box({
        "id": "vbx5",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 98,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbx5.add(
    segMenu);
    var sbxMenu = new kony.ui.ScrollBox({
        "id": "sbxMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "skin": "sbxSkin",
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 100,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    sbxMenu.add(
    vbx5);
    var vbx3 = new kony.ui.Box({
        "id": "vbx3",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 34,
        "margin": [2, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbx3.add(
    sbxMenu);
    var segContentbox = new kony.ui.Box({
        "id": "segContentbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 100
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
        "groupCells": false,
        "screenLevelWidget": true,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "containerWeight": 100
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "skin": "lbl1Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "lbl2Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 8
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {});
    var lbl32 = new kony.ui.Label({
        "id": "lbl32",
        "isVisible": true,
        "skin": "lbl32Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 50
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
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx1.add(
    lbl31, lbl32);
    var hbx5 = new kony.ui.Box({
        "id": "hbx5",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 48,
        "margin": [1, 0, 0, 0],
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 50
    }, {});
    var lbl42 = new kony.ui.Label({
        "id": "lbl42",
        "isVisible": true,
        "skin": "lbl32Skin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 50
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
        "containerWeight": 52,
        "margin": [0, 0, 0, 0],
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
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 40, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx4.add(
    hbx5, hbx6);
    segContentbox.add(
    lbl1, lbl2, hbx4);
    var vbx6 = new kony.ui.Box({
        "id": "vbx6",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 99,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbx6.add(
    segContent);
    var sbxContent = new kony.ui.ScrollBox({
        "id": "sbxContent",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 100,
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    sbxContent.add(
    vbx6);
    var vbx2 = new kony.ui.Box({
        "id": "vbx2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 66,
        "margin": [1, 1, 1, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbx2.add(
    sbxContent);
    var hbx3 = new kony.ui.Box({
        "id": "hbx3",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 75,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx3.add(
    vbx3, vbx2);
    frmdynamicTheme.add(
    hbx3);
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
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Vertical,
        "titleBar": true,
        "showBackButton": true,
        "titleBarSkin": "sknTitleKonyTheme",
        "backButtonSkin": "sknBtnKonyThemeNormal",
        "directChildrenIDs": ["lblHeader", "hbx3", "vbx2", "sbxContent", "vbx6", "segContent", "vbx3", "sbxMenu", "vbx5", "segMenu", "lblHeadW8"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};