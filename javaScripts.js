var bITsApp = angular.module('hackathon',['ngMaterial']);

bITsApp.controller('availabilityCtrl', function($scope) {

  $scope.supportType=8760;
  $scope.downtime=0 ;
  $scope.P1=0;
  $scope.SLA=0;

  $scope.resetValues = function(){
      $scope.downtime=0 ;
      $scope.P1=0;
      $scope.SLA=0;
  };
});

bITsApp.controller('SLACtrl', function($scope) {

  $scope.supportType=8760;
  $scope.downtime=0 ;
  $scope.P1=1;
  $scope.availablityPercentage=100;

  $scope.resetValues = function(){
      $scope.downtime=0 ;
      $scope.P1=1;
      $scope.availablityPercentage=100;
  };
});

bITsApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('indigo');
});