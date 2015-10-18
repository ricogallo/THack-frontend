'use strict';

/**
 * @ngdoc function
 * @name mashopoloApp.controller:WidgetCtrl
 * @description
 * # WidgetCtrl
 * Controller of the mashopoloApp
 */
angular.module('mashopoloApp')
  .controller('WidgetCtrl', function ($q, $rootScope, $scope, $route, flights, payments, hotels, cityFromAirport, $timeout) {
    $scope.airlineResults = [];
    $scope.hotelResults = [];
    var foo;

    $scope.widgetLoading = true;

    flights.search($route.current.params).then(function(res) {
      $rootScope.checkinDate = res.data.flights[0].segments[0].arrivalTime;
     foo = res.data.arrivalLocation;
      var hotelParams = {
        lat: $route.current.params.lat,
        long: $route.current.params.long,
        checkin: moment(res.data.flights[0].segments[0].arrivalTime).format('YYYY-MM-DD')
      };

    

      return $q.all([
        cityFromAirport.search(res.data.departureLocation),
        cityFromAirport.search(res.data.arrivalLocation),
        hotels.search(hotelParams),
        $q.when(res)
      ])
    })
    .then(function(responses) {
        $rootScope.departureCity = responses[0].data.airports.length ? responses[0].data.airports[0].city : '';
        $rootScope.arrivalCity = responses[1].data.airports[0].city;
        $scope.hotelResults = responses[2].data;
        $scope.airlineResults = responses[3].data;
        $scope.widgetLoading = false;
    });

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

      if ($scope.is('flights')) {
        $scope.selectedFlight = null;
      }
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
      $scope.totalPrice = $scope.selectedHotel.price + $scope.selectedFlight.price;
      console.log($scope.totalPrice);
      $scope.goTo('checkout');
    };

    $scope.checkout = function(user) {
      payments.checkout(user);
      $scope.goTo('end');
    };

    $scope.repeatStars = function(stars) {
      var string = '';
      for(var i = 0; i < stars; i++) {
        string += '&#9733 ';
      }

      return string;
    };

    $scope.user = {};
  });
