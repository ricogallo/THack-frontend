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

    $scope.airlineResults = {
      departureLocation: 'MPX',
      arrivalLocation: 'HAM',
      departureDate: new Date,
      flights: [
        {
          departureTime: new Date,
          arrivalTime: new Date,
          flightCode: 'AZ1234',
          airline: 'Alitalia',
          price: '100',
          image: 'http://ndc.developer.iata.org/files/athena2.png'
        },
        {
          departureTime: new Date,
          arrivalTime: new Date,
          flightCode: 'AZ1234',
          airline: 'Alitalia',
          price: '100',
          image: 'http://ndc.developer.iata.org/files/athena2.png'
        },
        {
          departureTime: new Date,
          arrivalTime: new Date,
          flightCode: 'AZ1234',
          airline: 'Alitalia',
          price: '100',
          image: 'http://ndc.developer.iata.org/files/athena2.png'
        }
      ]
    };

    $scope.location = 'flights';

    $scope.goTo = function(location) {
      $scope.location = location;
    };
  });
