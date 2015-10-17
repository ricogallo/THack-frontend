'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .controller('MainCtrl', function ($scope, $rootScope, iframePath) {
    $scope.search = function(query) {
      $rootScope.positionPromise.then(function(position) {
        $scope.widgetPath = iframePath +
                            '?url=' + encodeURI(query) +
                            '&lat=' + position.coords.latitude +
                            '&long=' + position.coords.longitude;
        $scope.embedCode = '<iframe src="' + $scope.widgetPath + '">';
      });
    };
  });
