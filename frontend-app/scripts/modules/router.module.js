'use strict';

SantiApp.module('Router', function (Router, SantiApp, Backbone, Marionette, $, _) {

    var controller = {},
        routes = {};

    /*
     * Routes Definitions
     */
    function addRoutes(urlName) {
        // urlName must be the same that controller method name
        routes[SantiApp.Urls.get(urlName)] = urlName;
    }

    addRoutes('index');

    /*
     * Controller methods
     */
    controller.index = function() {
        // this will be fired when routes match with '/'
        SantiApp.mainRegion.show(new SantiApp.Views.Index());
    };

    /**
     * Router Constructor
     */
    SantiApp.Controller = controller;
    SantiApp.Router = Marionette.AppRouter.extend({
        'appRoutes': routes,
        'controller': controller,
        'onRoute': function(name, path, args) {
            // Todo something when change the url
        }
    });

});
