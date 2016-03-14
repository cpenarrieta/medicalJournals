angular.module('controller.search', [])
.controller('searchController', function($scope, JournalsService) {
  $scope.journals = [];

  var initializeJournals = function() {
    JournalsService.getJournals()
    .then(function(journals) {
      $scope.journals = journals;
    });
  };

  initializeJournals();
});
