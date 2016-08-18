'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('cowsayApp', []);

angular.module('cowsayApp')
.controller('CowsayController', ['$scope', function($scope){
  $scope.cowText = 'Make me talk!';
  $scope.say = function(){
    return cowsay.say({text: $scope.cowText});
  };
  $scope.speakIt = function(){
    $scope.result = $scope.say();
  };
}]);
