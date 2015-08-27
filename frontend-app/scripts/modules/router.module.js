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
    addRoutes('byCategory');

    /*
     * Controller methods
     */
    controller.index = function() {
        // this will be fired when routes match with '/'

        /* This must be fetch of collection */
        $.when(SantiApp.getCategories(), SantiApp.getTattoos()).then(function(categories, tattoos) {
            SantiApp.Utils.categories = categories[0];
            SantiApp.Utils.categorySelectedId = null;
            SantiApp.Utils.categorySelectedDescription = null;

            SantiApp.mainRegion.show(new SantiApp.Views.Index({
                collection: new SantiApp.Collections.Tattoos(tattoos[0])
            }));
        });
    };

    controller.byCategory = function(id) {
        // this will be fired when routes match with '/category/:id'

        /* This must be fetch of collection */
        $.when(SantiApp.getCategories(), SantiApp.getTattoos(id)).then(function(categories, tattoos) {
            SantiApp.Utils.categories = categories[0];
            var match = _.find(SantiApp.Utils.categories, function(e, i) {
                return e.id === id;
            });
            SantiApp.Utils.categorySelectedId = match.id;
            SantiApp.Utils.categorySelectedDescription = match.description;

            SantiApp.mainRegion.show(new SantiApp.Views.Index({
                collection: new SantiApp.Collections.Tattoos(tattoos[0])
            }));
        });
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
