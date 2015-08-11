'use strict';

SantiApp.module('Views', function (Views, SantiApp, Backbone, Marionette, $, _) {

    Views.Index = Marionette.LayoutView.extend({
        template: __templates['index']
    });

});
