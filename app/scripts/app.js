'use strict';

/**
 * @ngdoc overview
 * @name mashopoloApp
 * @description
 * # mashopoloApp
 *
 * Main module of the application.
 */
angular
  .module('mashopoloApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
