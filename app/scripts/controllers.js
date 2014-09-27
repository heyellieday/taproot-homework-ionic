'use strict';

angular.module('TaprootHomeworkIonic.controllers', [])

.controller('EventsCtrl', function($scope, Events, $rootScope) {
  $rootScope.Events = new Events();
})

.controller('MapCtrl', function($scope, $ionicLoading, $rootScope, ENV) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log('Centering');
    if (!$scope.map) {
      return;
    }

    $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $rootScope.Events.loadEvents(pos.coords.latitude, pos.coords.longitude, $scope.map, ENV );
      $ionicLoading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
