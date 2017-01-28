'use strict';

module.exports = {
    client: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css'
            ],
            js: [
                'public/lib/angular/angular.js',
                'public/lib/jquery/dist/jquery.js',
                'public/lib/bootstrap/dist/js/bootstrap.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js'
            ],
            tests: ['public/lib/angular-mocks/angular-mocks.js']
        },
        css: ['modules/*/client/css/*.css'],
        less: ['modules/*/client/less/*.less'],
        sass: ['modules/*/client/scss/*.scss'],
        js: [
            'modules/core/client/app/config.js',
            'modules/core/client/app/init.js',
            'modules/!(tests)/client/*.js',
            'modules/!(tests)/client/**/*.js'
        ],
        views: ['modules/*/client/views/**/*.html'],
        templates: ['build/templates.js'],
        destination: 'modules',
        index: 'modules/core/client/views/index.client.tpl.html'
    },
    server: {
        gruntConfig: 'gruntfile.js',
        allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
        models: 'modules/*/server/models/**/*.js',
        routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
        sockets: 'modules/*/server/sockets/**/*.js',
        config: 'modules/*/server/config/*.js',
        policies: 'modules/*/server/policies/*.js',
        views: 'modules/*/server/views/*.html'
    }
};
