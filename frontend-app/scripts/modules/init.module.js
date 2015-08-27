'use strict';

SantiApp.module('Init', function (Init, SantiApp, Backbone, Marionette, $, _) {

    // Set methods and properties that you need to use from any place of your application
    // Here start the application router, in consecuense also the rest of application.
    SantiApp.tattoosCollection = null;

    SantiApp.getCategories = function () {
        return $.ajax({
            method: 'GET',
            dataType: 'json',
            url: './mocks/responses/categories.json',
            success: function (data) {},
            error: function(data) {}
        });
    };

    SantiApp.getTattoos = function (id) {
        var url;
        if (!!id) {
            url = './mocks/responses/tattoos.json?id=' + id;
        } else {
            url = './mocks/responses/tattoos.json'
        }

        return $.ajax({
            method: 'GET',
            dataType: 'json',
            url: url,
            success: function (data) {},
            error: function(data) {}
        });
    };

    /**
     * Initializer router
     * Get the App up and running by initializing the mediator
     * when the the application is started.
     */
    Init.addInitializer(function(){
        new SantiApp.Router();
    });

});
