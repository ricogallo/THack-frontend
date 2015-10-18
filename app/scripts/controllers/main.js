'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .controller('MainCtrl', function ($scope, $rootScope, iframePath, flights) {
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

        var widgetParams = '?type=' + type +
                           '&lat=' + position.coords.latitude +
                           '&long=' + position.coords.longitude +
                           '&url=' + encodeURI(query); 

        $scope.widgetPath = iframePath + widgetParams;
        $scope.embedCode = '<iframe height="309px" width="600px" frameBorder="0" scrolling="no" src="' + $scope.widgetPath + '">';
        return flights.search(widgetParams);
      }).then(function(res) {
        console.log(res.data);
      });
    };
  });
