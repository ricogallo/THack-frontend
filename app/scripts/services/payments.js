
'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:WidgetCtrl
 * @description
 * # WidgetCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .factory('payments', function (flightsPath, $http) {
    var checkout = function(user) {
      // return $http({
      //   method: 'GET',
      //   url: flightsPath,
      //   params: params
      // });
    };

    return {
      checkout: checkout
    };
  });
