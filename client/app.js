var medicalJournals = angular.module('medicalJournals',
['ui.router', 'ngMaterial', 'ngRoute', 'controller.search', 'services.journals'])
  .config(function($stateProvider, $mdThemingProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        views: {
          "login": {
            templateUrl : 'views/login.html'
          }
        }
      })
      .state('search', {
        url: "/search",
        views: {
          "header": {
            templateUrl : 'views/header.html',
          },
          "content": {
            templateUrl : 'views/search.html',
            controller: 'searchController'
          }
        }
      });

    $urlRouterProvider
      .otherwise('/search');

    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('deep-orange');
  });
