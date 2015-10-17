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
        var type;

        if (/facebook\.com/.test(query)) {
          type = 'facebook';
        } else if (/eventbrite\.com/.test(query)) {
          type = 'eventbrite';
        } else {
          type = 'generic';
        }

        $scope.widgetPath = iframePath +
                            '?url=' + encodeURI(query) +
                            '&type=' + type +
                            '&lat=' + position.coords.latitude +
                            '&long=' + position.coords.longitude;
        $scope.embedCode = '<iframe src="' + $scope.widgetPath + '">';
      });
    };
  });
