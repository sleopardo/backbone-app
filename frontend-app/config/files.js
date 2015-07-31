var mobile, desktop, defaults;

defaults = {
    'js': [
        // Vendors
        '../frontend-app/bower_components/jquery/dist/jquery.js',
        '../frontend-app/bower_components/chico/dist/ui/chico.js',
        '../frontend-app/bower_components/handlebars/handlebars.js',
        '../frontend-app/bower_components/underscore/underscore.js',
        '../frontend-app/bower_components/backbone/backbone.js',
        '../frontend-app/bower_components/backbone.babysitter/src/childviewcontainer.js',
        '../frontend-app/bower_components/backbone.babysitter/src/build/backbone.babysitter.js',
        '../frontend-app/bower_components/backbone.wreqr/lib/backbone.wreqr.js',
        '../frontend-app/bower_components/json2/json2.js',
        '../frontend-app/bower_components/marionette/lib/core/backbone.marionette.js'
    ],
    'css': [

    ],
    'tmpl': [
        '../frontend-app/templates/*.hbs'
    ],
    'fonts': [

    ]
};

mobile = {
    'js': [],
    'css': [],
    'tmpl': [],
    'fonts': []
};

desktop = {
    'js': [],
    'css': [],
    'tmpl': [],
    'fonts': []
};

/*
 * Expose
 */
exports.defaults = defaults;
exports.mobile = mobile;
exports.desktop = desktop;
