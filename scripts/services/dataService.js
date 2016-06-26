(function(){
  angular.module('myApp').factory('dataService',[dataService]);
  function dataService($cookies){
    var jsonObject = {};

    return{
      helloWorld: helloWorld,
      ideate:ideate
      //any other properties that need to be defined
    };

    function helloWorld(){
      return "Hello From Logo Controller";
    }//end:helloWorld()

    function ideate(){
      var result = {};
      result.heading = "Let us help you Ideate your Logo";
      result.lineFirst = "Ready to get started? Great, so are we.";
      result.lineSecond = "We bring a personal and effective approach to every project we work on.";
      result.lineThird = "Our Step by Step Logo Design wizard will help us better understand your requirement.";
      return result;
    }//end:helloWorld()
  }
}());
