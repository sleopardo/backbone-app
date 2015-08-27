'use strict';

SantiApp.module('Views', function (Views, SantiApp, Backbone, Marionette, $, _) {

    Views.Item = Marionette.ItemView.extend({
        template: __templates['item']
    });

});
