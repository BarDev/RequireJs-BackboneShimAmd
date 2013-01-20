requirejs.config({
    urlArgs: "bust=" +  (new Date()).getTime(),  
    baseUrl: "scripts", 
    waitSeconds: 200,
    
    enforceDefine: true,
    paths: {
        "jquery": "libs/jquery-1.8.3",
        "underscore": "libs/underscore-amd",
        "backbone": "libs/backbone-amd"
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




