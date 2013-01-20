requirejs.config({
    enforceDefine: true,
    paths: {
        "jquery": "libs/jquery-1.8.3",
        "underscore": "libs/underscore",
        "backbone": "libs/backbone"
    },
    shim: {
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
    }    
});

define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
    }
);




