'use strict';

SantiApp.module('Init', function (Init, SantiApp, Backbone, Marionette, $, _) {

    // Set methods and properties that you need to use from any place of your application
    // Here start the application router, in consecuense also the rest of application.


    /**
     * Initializer router
     * Get the App up and running by initializing the mediator
     * when the the application is started.
     */
    Init.addInitializer(function(){
        new SantiApp.Router();
    });

});
