'use strict';

SantiApp.module('Views', function (Views, SantiApp, Backbone, Marionette, $, _) {

    Views.List = Marionette.CompositeView.extend({
        template: __templates['list'],
        templateHelpers: function() {
            return {
                categories: SantiApp.categories
            }
        },
        childView: Views.Item,
        childViewContainer: '[data-js="items-container"]',
        ui: {
            'listButton': '[data-js="view-list"]',
            'gridButton': '[data-js="view-module"]',
            'container': '[data-js="items-container"]'
        },
        events: {
            'click @ui.listButton': 'viewList',
            'click @ui.gridButton': 'viewGrid'
        },
        viewList: function(){
            this.ui.container
                .find('[data-js="item-container"]')
                .removeClass('s6')
                .addClass('s12');
        },
        viewGrid: function() {
            this.ui.container
                .find('[data-js="item-container"]')
                .removeClass('s12')
                .addClass('s6');
        }
    });

});
