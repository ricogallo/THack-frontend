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

    $scope.moment = window.moment;

    $scope.location = 'flights';

    $scope.is = function(location) {
      return location === $scope.location;
    };
    
    $scope.goTo = function(location) {
      if (($scope.is('flights') &&
          !$scope.selectedFlight) ||
          ($scope.is('hotels') && 
           location !== 'flights' &&
          !$scope.selectedHotel)) {
          return;
      }

      if ($scope.is('flights')) $scope.selectedFlight = null;
      if ($scope.is('hotels')) $scope.selectedHotel = null;
      if ($scope.is('checkout')) $scope.user = {};
      $scope.location = location;
    };

    $scope.selectFlight = function(flight) {
      $scope.selectedFlight = flight;
      $scope.goTo('hotels');
    };
    
    $scope.selectHotel = function(hotel) {
      $scope.selectedHotel = hotel;
      $scope.goTo('checkout');
    };

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

    $scope.repeatStars = function(stars) {
      var string = '';
      for(var i = 0; i < stars; i++) {
        string += '&#9733 ';
      }

      return string;
    };

    $scope.hotelResults = {
      arrivalLocation: 'Hamburg',
      departureDate: new Date,
      hotels: [
        {
          name: 'Best hotel ever',
          address: 'Via dei Foo Bar, 24',
          checkinDate: new Date,
          checkoutDate: new Date,
          stars: 5,
          price: '100'
        },
        {
          name: 'Another great hotel',
          address: 'Via dei Foo Bar, 24',
          checkinDate: new Date,
          checkoutDate: new Date,
          stars: 5,
          price: '100'
        },
        {
          name: 'St Pauli',
          address: 'Via dei Foo Bar, 24',
          checkinDate: new Date,
          checkoutDate: new Date,
          stars: 5,
          price: '100'
        }
      ]
    };

    $scope.user = {};
  });
