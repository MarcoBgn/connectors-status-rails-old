angular
  .module('connectorsStatus')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('access', {
        url: '/access',
        templateUrl: 'views/access.html',
        controller: 'AccessCtrl',
        onEnter: function(apiKey, $state){
          AuthVerifier.authenticate().then(function(){
            $state.go('home')
          })
        }
      })
    $urlRouterProvider.otherwise('/home')
  })
