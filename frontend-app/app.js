// App.js
;(function (exports) {

    // Check if app its launched
    if (exports.SantiApp) { return; }

    // Create app
    var SantiApp = new Backbone.Marionette.Application();

    SantiApp.addRegions({
        'mainRegion': '#app-container'
    });

    // Subscribe to "start" application event
    SantiApp.on('start', function() {
        Backbone.history.start({pushState: true});
    });

    // Export Application
    exports.SantiApp = SantiApp;

    // Start the MyAccountApp app
    $(function() {
        // This fire "start" application event
        SantiApp.start();
    });

}(window));
