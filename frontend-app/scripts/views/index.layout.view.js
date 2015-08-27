'use strict';

SantiApp.module('Views', function (Views, SantiApp, Backbone, Marionette, $, _) {

    Views.Index = Marionette.LayoutView.extend({
        template: __templates['index'],
        ui: {
            'menuMobileTrigger': '[data-js="button-collapse"]'
        },
        regions: {
            'mainContentRegion': '[data-js="main-content-region"]'
        },
        onShow: function() {
            this.ui.menuMobileTrigger.sideNav({
                menuWidth: 300, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            });

            var listView = new Views.List({
                collection: this.collection
            });

            this.mainContentRegion.show(listView);
        }
    });

});
