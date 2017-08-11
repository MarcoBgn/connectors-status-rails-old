angular
  .module('connectorsStatus')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html',
        controller: 'HomeCtrl'
      })
      .state('home.refresh-repos', {
        url: '/refresh-repos',
        templateUrl: 'views/partial-home-refresh-repos.html',
        controller: 'RefreshCtrl'
      })
    $urlRouterProvider.otherwise('/home')
  })
