'use strict';

  this.getStatus = function (appName, envReq) {
    var app = envReq === 'Prod' ? appName.substring(10) : appName;
    var requestProd = {
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/https://' + app + '.addon-hub.io/version',
    };
    var requestUAT = {
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/https://' + app + '.app.uat.maestrano.io/version',
    };
    var requestType = envReq === 'Prod' ? requestProd : requestUAT

    return $http(requestType)
    .then(function (response) {
      return response.data;
    })
    .catch(function (response) {
      throw response.status;
    })
  }

  function RepoFetcherService($http) {
    var request = {
      method: 'GET',
      url: 'https://api.github.com/search/repositories?q=connector in:name+org:maestrano&per_page=50',
      headers: {
        'Authorization': 'token ' + __env.ApiToken
      }
    }
    this.getRepos = function getRepos() {
      return $http(request)
      .then(function (response) {
        return response.data;
      })
      .catch(function (response) {
        throw response.status;
      })
    }

    this.getStatus = function (appName, envReq) {
      var app = envReq === 'Prod' ? appName.substring(10) : appName;
      var requestProd = {
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://' + app + '.addon-hub.io/version',
      };
      var requestUAT = {
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://' + app + '.app.uat.maestrano.io/version',
      };
      var requestType = envReq === 'Prod' ? requestProd : requestUAT

      return $http(requestType)
      .then(function (response) {
        return response.data;
      })
      .catch(function (response) {
        throw response.status;
      })
    }
  };

  angular
    .module('connectorsStatus')
    .service('RepoFetcherService', RepoFetcherService);
