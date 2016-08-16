'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

var angular = require('angular');
var cowsay = require('cowsay-browser');

angular.module('cowApp', []);
angular.module('ghostsOfCowsPast', []);


angular.module('cowApp')
  .controller('CowsayStuff', ['$scope', function($scope) {
    $scope.cowWords = 'type words here now';
    $scope.place = 0;
    $scope.doneSaidIt = [];

    $scope.say = function() {
      return cowsay.say({
        text: $scope.cowWords
      });
    };

    $scope.post = function() {
      $scope.end = $scope.say();
      $scope.doneSaidIt.push($scope.cowWords);
      $scope.place = $scope.doneSaidIt.indexOf($scope.cowWords);
      console.log($scope.doneSaidIt);
    };

    $scope.goBack = function() {
      console.log('going back');
      if (--$scope.place < 0) {
        $scope.cowWords = 'Cannot go back any futher.';
        return $scope.end = $scope.say();
      }
      $scope.cowWords = $scope.doneSaidIt[$scope.place];
      $scope.doneSaidIt.push($scope.cowWords);
      return $scope.end = $scope.say();
    };

  }]);


console.log('hello');
