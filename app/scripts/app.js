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
    'ngTouch',
    'xml'
  ])
  .constant('iframePath', 'http://localhost:9000/#/widget')
  .constant('flightsPath', 'http://box.mashopolo.com:3000/flights')
  .constant('hotelsPath', 'http://box.mashopolo.com:3000/hotels')
  .constant('cityFromAirportPath', 'http://airport.api.aero/airport')
  .config(function ($routeProvider, $sceProvider, $httpProvider) {
    $sceProvider.enabled(false);
    $httpProvider.interceptors.push('xmlHttpInterceptor');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/widget', {
        templateUrl: 'views/widget.html',
        controller: 'WidgetCtrl',
        controllerAs: 'widget'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $q) {
    var deferredPosition = $q.defer();
    window.navigator.geolocation.getCurrentPosition(function(position) {
      deferredPosition.resolve(position);
    });

    $rootScope.positionPromise = deferredPosition.promise;
  });

