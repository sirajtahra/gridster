var app = angular.module('widgetsApp', ['ui.router']);

app.config(function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'views/home.html'
  }

  var demoState = {
    name: 'demo',
    url: '/demo',
    templateUrl: 'views/demo.html',
    controller: 'demoController'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(demoState);
});
