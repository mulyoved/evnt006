'use strict';

angular.module('evnt006App', ['ezfb'])
  .config(function ($routeProvider, $FBProvider) {
    $FBProvider.setInitParams({
        // This is my FB app id for plunker demo app
        appId: '551573844909923'
      });      
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
