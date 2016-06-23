(function(){
  angular.module('myApp').factory('dataService',[dataService]);
  function dataService($cookies){
    var jsonObject = {};

    return{
      helloWorld: helloWorld
      //any other properties that need to be defined
    };

    function helloWorld(){
      return "Hello World";
    }//end:helloWorld()
  }
}());
