'use strict';

var app=angular.module("lmsApp",['ngRoute','ngAnimate','ngStorage']);

/*************ROUTING CODE*********************/

app.config(function($routeProvider){
  $routeProvider.when('/create', {
    templateUrl:'assignment.html',
    controller:'assignmentCtrl'
  })
});
app.config(function($routeProvider)
{
  $routeProvider.when('/test',{
    templateUrl:'../views/testproperties.html',
    controller:'testCtrl'
  })
});

app.config(function($routeProvider)
{
  $routeProvider.when('/video',{
    templateUrl:'../views/uploadvideo.html',
    controller:'videoCtrl'
  })
});


