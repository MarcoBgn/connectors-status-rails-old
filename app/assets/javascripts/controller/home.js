angular
  .module('connectorsStatus')
  .controller('HomeCtrl', function($scope, $rootScope, RepoFetcherService) {
    $scope.refreshed = false;
    $scope.refreshNotice = 'Refreshing repos list...'
    $scope.reposList = '';
    $scope.statusProd = [];
    $scope.statusUAT = [];

    $scope.appReference = {
      'connector-shopify': 'universal-monkey-1',
      'connector-keypay': 'compatible-wombat-3',
      'connector-office365': 'visionary-eagle-8',
      'connector-pipedrive': 'inverse-wombat-5',
      'connector-sageone-global': 'versatile-skate-7',
      'connector-neto': 'upgradable-salmon-5',
      'connector-workflowmax': 'clueless-caterpillar-4',
      'connector-eventbrite': 'monitored-koala-2',
      'connector-freeagent': 'enhanced-falcon-1',
      'connector-sageone-south': 'digitized-koala-8',
      'connector-placetel': 'implemented-robot-1',
      'connector-basecrm': 'customizable-teapot-4',
      'connector-kounta': 'enhanced-monkey-9',
      'connector-unleashed': 'cloned-cat-8',
      'connector-constant-contact': 'focused-goat-3',
      'connector-salesforce': 'visionary-wombat-3',
      'connector-vend': 'managed-tiger-8',
      'connector-moneybird': 'networked-raptor-9',
      'connector-cin7': 'programmable-whale-4',
      'connector-google-apps-for-work': 'intuitive-turkey-4',
      'connector-hubspot': 'devolved-balloon-4',
      'connector-sageone-north': 'reduced-turkey-1'
        }

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
          var frameworkVersion = response.split('\n')[0].slice(18);
          $scope.statusProd.push(frameworkVersion);
        });
      }
      $scope.checkStatusUAT = function (appName) {
        RepoFetcherService.getStatus($scope.appReference[appName], 'UAT').then(function (response) {
          var frameworkVersion = response.split('\n')[0].slice(18);
          $scope.statusUAT.push(frameworkVersion);
        });
      }
    }
  })
