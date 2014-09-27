'use strict';

angular.module('TaprootHomeworkIonic.services', [])

.factory('Events', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var Events = function() {
    this.events = [];
    this.busy = false;
    this.currentPage = 1;
  };

  Events.prototype.all = function() {
    return this.events;
  },
  Events.prototype.get = function(eventId) {
    var result = $.grep(this.events, function(e){ return e.id === eventId; });
    return result;
  },

  Events.prototype.loadEvents = function(lat, long, map, ENV) {
    if (this.busy){
      return;
    }
    this.busy = true;

    var url = ENV.apiEndpoint + 'events?callback=JSON_CALLBACK&lat='+ lat + '&long=' +long;
    $http.jsonp(url).success(function(data) {
      for (var i = 0; i < data.events.length; i++) {
        this.events.push(data.events[i]);
        var myLatlng = new google.maps.LatLng(this.events[i].venue.location.point.lat, this.events[i].venue.location.point.long);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: this.events[i].title
        });
        marker.setMap(map);
      }
      console.log(this.events);
      this.busy = false;
    }.bind(this));
  };
  return Events;
});
