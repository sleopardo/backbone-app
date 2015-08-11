'use strict';

SantiApp.module('Urls', function (Urls, SantiApp, Backbone, Marionette, $, _) {

    var urls = {
        'index': ''
    };

    // Use this method to invoke any url from router, templates o files js
    // You can send values to replace into urls
    Urls.get = function() {
        var key = arguments[0];
        var iterator;

        if (!key) { throw new Error('You must send the urlId that you want to get.');}

        // if only receive key, return original url (without replaces)
        if (arguments.length === 1) { return urls[key];}

        // return url with replaces
        iterator = 1;
        return urls[key].replace(/:([a-z]+[A-Z]*)+/g, function() {
            iterator += 1;
            return arguments[iterator];
        });
    };

});
