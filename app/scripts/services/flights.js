
'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:WidgetCtrl
 * @description
 * # WidgetCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .factory('flights', function (flightsPath, $http) {
    var search = function(params) {
      return $http({
        method: 'GET',
        url: flightsPath,
        params: params
      });
    };

    return {
      search: search
    };
  });
