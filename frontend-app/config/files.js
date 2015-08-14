var mobile, desktop, defaults;

defaults = {
    'js': [
        // Vendors
        './bower_components/jquery/dist/jquery.js',
        './bower_components/chico/dist/ui/chico.js',
        './bower_components/handlebars/handlebars.js',
        './bower_components/underscore/underscore.js',
        './bower_components/backbone/backbone.js',
        './bower_components/backbone.babysitter/src/childviewcontainer.js',
        './bower_components/backbone.babysitter/src/build/backbone.babysitter.js',
        './bower_components/backbone.wreqr/lib/backbone.wreqr.js',
        './bower_components/json2/json2.js',
        './bower_components/marionette/lib/core/backbone.marionette.js',
        './frontend-app/scripts/vendors/materialize.js',

        './www/build/templates/templates.js',

        // Application files
        './frontend-app/app.js',
        './frontend-app/scripts/modules/urls.module.js',
        './frontend-app/scripts/modules/utils.module.js',
        './frontend-app/scripts/modules/handlebarsRegisters.module.js',
        './frontend-app/scripts/modules/router.module.js',

        // Application files
        './frontend-app/scripts/views/index.layout.view.js',

        // Initialize
        './frontend-app/scripts/modules/init.module.js'
    ],
    'css': [
        './frontend-app/styles/materialize.scss',
    ],
    'tmpl': [
        './frontend-app/templates/*.hbs'
    ],
    'fonts': [
        './frontend-app/fonts/**/*'
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
