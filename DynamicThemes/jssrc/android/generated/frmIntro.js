//Form JS File
function frmIntro_button120950950221626_onClick_seq0(eventobject) {
    dynamicThemes.call(this);
};

function addWidgetsfrmIntro() {
    var label1178943813210979 = new kony.ui.Label({
        "id": "label1178943813210979",
        "isVisible": true,
        "text": "Home",
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
    var hbox1178943813210978 = new kony.ui.Box({
        "id": "hbox1178943813210978",
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
    hbox1178943813210978.add(
    label1178943813210979);
    var label120664956617081 = new kony.ui.Label({
        "id": "label120664956617081",
        "isVisible": true,
        "text": "This app is showcase of dynamic themes",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 10, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {});
    var img1 = new kony.ui.Image2({
        "id": "img1",
        "isVisible": true,
        "src": "bullet.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 3, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {});
    var label120766246021556 = new kony.ui.Label({
        "id": "label120766246021556",
        "isVisible": true,
        "text": "locally packaged themes (New & Old Kony themes)",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 93
    }, {});
    var hbox1178943813210981 = new kony.ui.Box({
        "id": "hbox1178943813210981",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1178943813210981.add(
    img1, label120766246021556);
    var img2 = new kony.ui.Image2({
        "id": "img2",
        "isVisible": true,
        "src": "bullet.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 3, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {});
    var label120766246021564 = new kony.ui.Label({
        "id": "label120766246021564",
        "isVisible": true,
        "text": "Remote themes(remote.theme)",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 0, 0],
        "padding": [0, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 93
    }, {});
    var hbox1178943813210982 = new kony.ui.Box({
        "id": "hbox1178943813210982",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1178943813210982.add(
    img2, label120766246021564);
    var button120950950221626 = new kony.ui.Button({
        "id": "button120950950221626",
        "isVisible": true,
        "text": "Continue",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmIntro_button120950950221626_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 8, 1, 8],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    frmIntro.add(
    hbox1178943813210978, label120664956617081, hbox1178943813210981, hbox1178943813210982, button120950950221626);
};

function frmIntroGlobals() {
    var MenuId = [];
    frmIntro = new kony.ui.Form2({
        "id": "frmIntro",
        "title": "Home",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmIntro
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};