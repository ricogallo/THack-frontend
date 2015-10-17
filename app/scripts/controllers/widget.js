'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:WidgetCtrl
 * @description
 * # WidgetCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .controller('WidgetCtrl', function ($scope, $route) {
    $scope.message = $route.current.params.url;

    $scope.location = 'flights';

    $scope.goTo = function(location) {
      $scope.location = location;
    };
  });
