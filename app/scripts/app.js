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
  .constant('iframePath', 'http://localhost:9000/#/widget')
  .config(function ($routeProvider, $sceProvider) {
    $sceProvider.enabled(false);
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

