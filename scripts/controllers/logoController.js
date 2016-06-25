(function(){
	angular.module('myApp')
	.controller('logoController',['$scope','$rootScope','dataService',logoController]);
	function logoController($scope,$rootScope,dataService){
    var vm = $scope;
    vm.name = "Pramod Jingade";
    vm.resultObj = dataService.ideate();
  }//endcontroller:logoController
}());//IIFE
