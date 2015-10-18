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
    var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

    $scope.isValidUrl = function(query) {
      return URL_REGEXP.test(query);
    };

    $scope.searchLoading = false;

    $scope.search = function(query) {
      $scope.searchLoading = true;
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
        $scope.searchLoading = false;
      });
    };
  });
