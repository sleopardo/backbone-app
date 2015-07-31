/**
 * Dependencies
 */
 var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    del = require('del'),
    path = require('path'),
    runSequence = require('run-sequence'),
    mkdirp = require('mkdirp'),
    merge = require('arr-merge'),
    rootBuild = '../web-app/build/',
    rootDist = '../web-app/dist/',
    src = {
        'build':{
            'root': rootBuild,
            'styles': rootBuild + 'styles',
            'scripts': rootBuild + 'scripts',
            'images': rootBuild + 'images/',
            'fonts': rootBuild + 'fonts/',
            'tmpl': rootBuild + '/templates/'
        },
        'dist':{
            'root': rootDist,
            'styles': rootDist + 'styles',
            'scripts': rootDist + 'scripts',
            'images': rootDist + 'images/',
            'fonts': rootDist + 'fonts/',
            'manifest': rootDist
        }
    },
    assets = require('./config/files'),
    bundles = {
        js: {
            'mobile': merge(assets.defaults.js, assets.mobile.js),
            'desktop': merge(assets.defaults.js, assets.desktop.js)
        },
        css: {
            'mobile': merge(assets.defaults.css, assets.mobile.css),
            'desktop': merge(assets.defaults.css, assets.desktop.css)
        },
        tmpl: assets.defaults.tmpl, assets.mobile.tmpl,
        fonts: assets.defaults.fonts
    };


/**
 * Default tasks
 */
gulp.task('jsLinting', function() {
    gulp.src('./frontend-app/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
});

// Compila todos los hbs de la aplicacion
gulp.task('templates', function(){
    mkdirp(src.build.tmpl);
    return gulp.src(bundles.tmpl)
        .pipe($.handlebars())
        .pipe($.wrap('Handlebars.template(<%= contents %>)'))
        .pipe($.declare({
            namespace: 'templates',
            noRedeclare: true, // Avoid duplicate declarations
        }))
        .pipe($.concat('templates.js'))
        .pipe(gulp.dest(src.build.tmpl));
});

gulp.task('templatesWatch', function(){
    runSequence(
        'templates',
        ['jsLarge', 'jsSmall']
    );
});

gulp.task('fontsBuild', function() {
    mkdirp(src.build.fonts);
    return gulp.src(bundles.fonts)
        .pipe(gulp.dest(src.build.fonts));
});

gulp.task('cleanBuild', function() {
    del.sync([src.build.root + '*']);
});


// Genera un bundle sin minificar de todos los JS del proyecto
gulp.task('jsSmall', function() {
    gulp.src(bundles.js.mobile)
        .pipe($.concat('bundle__small.js'))
        .pipe($.size({
            title: 'JS bundle size:'
        }))
        .pipe(gulp.dest(src.build.scripts));
});

// Genera un bundle desktop sin minificar de todos los JS del proyecto
gulp.task('jsLarge', function() {
    gulp.src(bundles.js.desktop)
        .pipe($.concat('bundle__large.js'))
        .pipe($.size({
            title: 'JS bundle size:'
        }))
        .pipe(gulp.dest(src.build.scripts));
});

// Compila los sass del proyecto
// los guarda en una carpeta temporal y los consume otra tarea
gulp.task('stylesSmall', function() {
    return gulp.src(bundles.css.mobile)
        .pipe($.sass({
            outputStyle: 'expanded',
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe($.postcss([
            require('autoprefixer-core')({
                browsers: ['last 8 versions', 'ie 8']
            }),
        ]))
        .pipe($.size({
            title: 'CSS size:'
        }))
        .pipe(gulp.dest(src.build.styles));
});

// Compila los sass del proyecto
// los guarda en una carpeta temporal y los consume otra tarea
gulp.task('stylesLarge', function() {
    return gulp.src(bundles.css.desktop)
        .pipe($.sass({
            outputStyle: 'expanded',
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe($.postcss([
            require('autoprefixer-core')({
                browsers: ['last 8 versions', 'ie 8']
            }),
        ]))
        .pipe($.size({
            title: 'CSS size:'
        }))
        .pipe(gulp.dest(src.build.styles));
});


/********************************************************
********************* TASK FOR DIST *********************
*********************************************************/

gulp.task('cleanDist', function() {
    del.sync([src.dist.root + '*']);
});

gulp.task('jsDist', function() {
    return gulp.src(src.build.scripts + '*.js')
        .pipe($.foreach(function(stream, file){
            var fileName = path.basename(file.path, '.js');

            return stream
                .pipe($.uglify())
                .pipe($.size({
                    title: fileName + '.js minified size: '
                }))
                .pipe(gulp.dest(src.dist.scripts));
        }));
});

gulp.task('stylesDist', function() {
    return gulp.src(src.build.styles + '*.css')
        .pipe($.foreach(function(stream, file){
            var fileName = path.basename(file.path, '.css');
            return stream
                .pipe($.postcss([
                    require('csswring')({
                        preserveHacks: true
                    })
                ]))
                .pipe($.size({
                    title: fileName + '.css minified size: '
                }))
                .pipe(gulp.dest(src.dist.styles));
        }));
});

gulp.task('fontsDist', function() {
    mkdirp(src.dist.fonts);

    return gulp.src(src.build.fonts + "*")
        .pipe(gulp.dest(src.dist.fonts));
});

gulp.task('revisionDist',function(){
    gulp.src(src.dist.root + '*')
        .pipe($.rev())
        .pipe($.gzip())
        .pipe(gulp.dest(src.dist.root))

        .pipe($.rev.manifest())
        .pipe(gulp.dest(src.dist.root));
});


gulp.task('dist',function(){
    runSequence(
        'cleanDist',
        ['jsDist', 'stylesDist', 'fontsDist'],
        'revisionDist'
    );
});
/********************************************************
********************* END TASK FOR DIST *****************
*********************************************************/


gulp.task('default', function(){
    runSequence(
        'cleanBuild',
        'templates',
        ['stylesSmall', 'stylesLarge', 'fontsBuild'],
        ['jsLarge', 'jsSmall']
    );
});

gulp.task('build', function() {
    gulp.start('default');
});

gulp.task('watch', function() {
    gulp.start('default');
    gulp.watch([
        '/frontend-app/scripts/**/*.js',
    ], ['jsLarge', 'jsSmall']);
    gulp.watch('/frontend-app/templates/*.hbs', ['templatesWatch']);
    gulp.watch('/frontend-app/styles/**/*.scss', ['stylesSmall', 'stylesLarge']);
});
