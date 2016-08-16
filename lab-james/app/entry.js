'use strict';
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

let cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$scope', function($scope) {
  $scope.inputText = 'eat sleep poop repeat';
  $scope.saySomething = function() {
    return cowsay.say({text: $scope.inputText});
  };
  $scope.whatISaid = function() {
    $scope.said = $scope.saySomething();
  };
}]);
