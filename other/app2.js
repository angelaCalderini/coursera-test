(function(){
  'use strict';
  angular.module("NameCalculator",[])
  .controller("nameCalculatorController",function($scope){
    $scope.name = "";
    $scope.totaValue =0;
    $scope.displayNumeric = function(){
      var totalNameValue= calculateNumericString($scope.name);
      $scope.totalValue= totalNameValue;
    };
    function calculateNumericString(string){
      var totalStringValue=0;
      for(var i =0;i<string.length;i++){
        totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });

  }
)();
