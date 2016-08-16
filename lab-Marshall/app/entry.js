'use strict';

//npm assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

//npm modulles
const angular = require('angular');
const cowsay = require('cowsay-browser');
//anguler module
angular.module('demoApp', []);

//services

//controllers

angular.module('demoApp')
.controller('CowsayController', ['$scope', function($scope){

  $scope.cowtext = 'Mooooo';

  $scope.say = function(){
    return '\n' + cowsay.say({ text: $scope.cowtext });
  };

  $scope.mooIt = function(){
    $scope.result = $scope.say();
  };
}]);

//components

console.log('Woot woot');
