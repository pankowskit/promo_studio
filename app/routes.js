angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/about",{
        templateUrl: "app/templates/about.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .when("/service",{
        templateUrl: "app/templates/service.html"
    })
    .when("/work",{
        templateUrl: "app/templates/work.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});