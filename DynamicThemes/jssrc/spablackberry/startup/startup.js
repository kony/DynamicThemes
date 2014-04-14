//startup.js file
var appConfig = {
    appId: "themes",
    appName: "DynamicThemes",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    url: null,
    secureurl: null,
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmdynamicThemeGlobals();
    frmIntroGlobals();
    //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIntro.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default", "NewKonyTheme", "OldKonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
kony.print = function() {
    return;
};