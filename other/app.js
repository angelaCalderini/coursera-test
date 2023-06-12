(function(){
  'use strict';
  angular.module("myFirstApp",[])
  //in questo caso lo scope è tutta la parte dell'html che
  //riguarda il div con nome"MyFirstController"
  .controller("MyFirstController",function($scope){
    $scope.name = "Angie";
    $scope.ciao = function(){
      return "Benvenuta"
    };
  });

  }
)();
