'use strict';

SantiApp.module('HandlebarsRegisters', function (HandlebarsRegisters, SantiApp, Backbone, Marionette, $, _) {

    // Register all templates like Handlebars Partials
    _.each(__templates, function(templateFunction, templateName) {
        Handlebars.registerPartial(templateName, templateFunction);
    });

    /* a helper to execute an IF statement with any expression
    USAGE:
    -- Yes you NEED to properly escape the string literals, or just alternate single and double quotes
    -- to access any global function or property you should use window.functionName() instead of just functionName()
    -- this example assumes you passed this context to your handlebars template( {name: 'Sam', age: '20' } ), notice age is a string, just for so I can demo parseInt later
    <p>
     {{#xif " this.name == 'Sam' && this.age === '12' " }}
       BOOM
     {{else}}
       BAMM
     {{/xif}}
    </p>
    */
    Handlebars.registerHelper("xif", function(expression, options) {
        return Handlebars.helpers["x"].apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
    });

    /* a helper to execute javascript expressions
    USAGE:
    -- Yes you NEED to properly escape the string literals or just alternate single and double quotes
    -- to access any global function or property you should use window.functionName() instead of just functionName(), notice how I had to use window.parseInt() instead of parseInt()
    -- this example assumes you passed this context to your handlebars template( {name: 'Sam', age: '20' } )
    <p>Url: {{x " \"hi\" + this.name + \", \" + window.location.href + \" <---- this is your href,\" + " your Age is:" + window.parseInt(this.age, 10) "}}</p>
    OUTPUT:
    <p>Url: hi Sam, http://example.com <---- this is your href, your Age is: 20</p>
    */

    Handlebars.registerHelper("x", function(expression, options) {
        var fn = function() {},
            result;
        try {
            fn = Function.apply(this, ["window", "return " + expression + " ;"]);
        } catch (e) {
            console.warn("{{x " + expression + "}} has invalid javascript", e);
        }

        try {
            result = fn.call(this, window);
        } catch (e) {
            console.warn("{{x " + expression + "}} hit a runtime error", e);
        }
        return result;
    });

    /**
     * urls
     * Read SantiApp.Urls object and return the value of the param key
     * Usage: {{#urls "urlId" "replaceVar1" "replaceVar2"}}
     * Example: {{#urls "index"}}
     */
    Handlebars.registerHelper('urls', function() {
        return SantiApp.Urls.get.apply(null, arguments);
    });

    /**
     * utils
     * Return value of utils variables
     * Usage:   {{#utils variable}}
     * Example: {{#utils device}}
     */
    Handlebars.registerHelper('utils', function(key) {
        if (!key) {throw new Error("Must specify key");}
        return SantiApp.Utils[key];
    });

});
