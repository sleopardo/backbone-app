'use strict';

SantiApp.module('Collections', function (Collections, SantiApp, Backbone, Marionette, $, _) {

    Collections.Tattoos = Backbone.Collection.extend({
        models: SantiApp.Models.Tattoo
    });

});
