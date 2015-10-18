
'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:WidgetCtrl
 * @description
 * # WidgetCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .factory('hotels', function (hotelsPath, $http) {
    var search = function(params) {
      return $http({
        method: 'GET',
        url: hotelsPath,
        params: params
      });
    };

    return {
      search: search
    };
  });
