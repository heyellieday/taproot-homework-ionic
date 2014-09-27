'use strict';

angular.module('TaprootHomeworkIonic', ['ionic', 'config', 'TaprootHomeworkIonic.controllers', 'TaprootHomeworkIonic.directives', 'TaprootHomeworkIonic.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }
  });
});
