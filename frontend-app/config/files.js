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
        './scripts/vendors/materialize.js',

        './build/templates/templates.js',

        // Application files
        './app.js',
        './scripts/modules/urls.module.js',
        './scripts/modules/utils.module.js',
        './scripts/modules/handlebarsRegisters.module.js',
        './scripts/modules/router.module.js',

        // Application files
        './scripts/views/index.layout.view.js',

        // Initialize
        './scripts/modules/init.module.js'
    ],
    'css': [
        './styles/materialize.scss',
    ],
    'tmpl': [
        './templates/*.hbs'
    ],
    'fonts': [
        './fonts/**/*'
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
