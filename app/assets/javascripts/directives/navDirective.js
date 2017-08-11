
function NavBar(){
  return {
    templateUrl: 'views/nav.html',
    controller: 'NavCtrl'
  }
}

angular
  .module('connectorsStatus')
  .directive('navBar', NavBar);
