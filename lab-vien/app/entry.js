'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

// npm modules
const angular = require('angular');
const cowsay = require('cowsay-browser');
// angular modules
const app = angular.module('cowsayApp', []);
// services
// controllers
app.controller('CowsayController', ['$scope', function($scope) {
  $scope.cowtext = 'something';
  $scope.cowType = 'default';
  $scope.previousCowArray = [];

  cowsay.list((err, list) => {
    if (err) {
      return $scope.allCowTypes = ['default'];
    }
    return $scope.allCowTypes = list;
  });

  $scope.say = function() {
    return cowsay.say({
      text: $scope.cowtext || '',
      f: $scope.cowType,
    });
  };

  $scope.save = function() {
    $scope.previousCowArray.push($scope.saved || '');
    $scope.saved = $scope.say();
  };

  $scope.reset = function() {
    $scope.saved = $scope.previousCowArray.pop() || '';
  };
}]);
// components / directives
