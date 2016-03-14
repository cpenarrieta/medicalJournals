angular.module('services.journals', [])
.factory('JournalsService', function ($http) {
  var getJournals = function() {
    return $http({
      method: 'GET',
      url: '/api/journals'
    })
    .then(function (journals) {
      return journals.data;
    });
  };

  return {
    getJournals: getJournals
  };
});
