'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .controller('MainCtrl', function ($scope, iframePath) {
    $scope.search = function(query) {
      $scope.widgetPath = iframePath + '?url=' + encodeURI(query);
      $scope.embedCode = '<iframe src="' + $scope.widgetPath + '">';
    };
  });
