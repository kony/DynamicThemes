//startup.js file
var globalhttpheaders = {};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
var appConfig = {
    appId: "themes",
    appName: "SampleDynamicThe",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    middlewareContext: "middleware"
};
skinsInit();

function appInit(params) {
    initializeheader();
    initializeHeader1();
    initializefooter();
    kony.application.setAppHeaders([hbox120664956618559, hbox120664956618024]);
    kony.application.setAppFooters([hbox120664956619270]);
    frmdynamicThemeGlobals();
    frmIntroGlobals();
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
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();