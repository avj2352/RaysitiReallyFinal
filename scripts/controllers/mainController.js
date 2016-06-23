(function(){
	angular.module('myApp')
	.controller('mainController',['$scope','$rootScope','dataService',mainController]);
	function mainController($scope,$rootScope,dataService){
    var vm = $scope;
    vm.name = "Pramod Jingade";
    vm.hello = dataService.helloWorld();
  }//endcontroller:mainController
}());//IIFE
