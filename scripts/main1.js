requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),  //Remove for prod
    paths: {
        "jquery": "libs/jquery-1.8.3",
        "underscore": "libs/underscore",
        "backbone": "libs/backbone"
    },
});

require(["jquery", "underscore", "backbone"],


    function ($, _, Backbone) {
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
    }
);



