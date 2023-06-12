(function(){
  'use strict';
  angular.module("ProvaUppercase",[])
  .controller("upperCaseController",upperCaseController);
  function upperCaseController($scope, $filter)
    {
    $scope.name = "ee";
    $scope.upper = function(){
      var upCase= $filter('uppercase');
      $scope.name= upCase($scope.name);
    };

  }


  }
)();
