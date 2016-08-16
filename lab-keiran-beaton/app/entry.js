'use strict';

//webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

//npm modules
const angular = require('angular');
const cowsay = require('cowsay-browser');

//angular module
angular.module('cowsayApp', []);

//controllers
angular.module('cowsayApp')
.controller('CowsayController', ['$scope', function($scope){
  $scope.cowText = 'Write your stuff here';
  $scope.say = function() {
    return '\n' + cowsay.say({text: $scope.cowText});
  };
  $scope.alreadySaid = function() {
    $scope.result = $scope.say();
  };
}]);
