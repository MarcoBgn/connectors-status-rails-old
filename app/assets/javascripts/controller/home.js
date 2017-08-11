angular
  .module('connectorsStatus')
  .controller('HomeCtrl', function($scope, $rootScope, RepoFetcherService) {
    $scope.refreshed = false;
    $scope.refreshNotice = 'Refreshing repos list...'
    $scope.reposList = '';
    $scope.statusProd = [];
    $scope.statusUAT = [];

    // Not implemented yet
    $scope.perPage = 0;

    $scope.refresh = function () {
      $scope.refreshed = true;
      RepoFetcherService.getRepos().then(function (response) {
        $scope.refreshNotice = 'OK';
        $scope.refreshed = false;
        $scope.entry = response;
        $scope.reposList = response.items;
      })
      $scope.checkStatusProd = function (appName) {
        RepoFetcherService.getStatus(appName, 'Prod').then(function (response) {
          var frameworkVersion = response.split('\n')[0];
          self.statusProd.push(frameworkVersion);
        });
      }
      // .catch(function (response) {
      //   $scope.refreshNotice = response;
      // });
    }
  })
