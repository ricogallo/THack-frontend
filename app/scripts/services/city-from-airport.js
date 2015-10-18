
'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:WidgetCtrl
 * @description
 * # WidgetCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .factory('cityFromAirport', function (cityFromAirportPath, $http) {
    var search = function(airport) {
      return $http.jsonp(cityFromAirportPath + '/' + airport + '?user_key=278c2e7d2bdb9216b9bbd9c072bd18b9&callback=JSON_CALLBACK', {
        headers: {
          'Accept': 'application/json'
        }
      });
    };

    return {
      search: search
    };
  });
