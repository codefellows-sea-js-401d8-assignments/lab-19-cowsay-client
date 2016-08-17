'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('demoApp', []);

angular.module('demoApp')
.controller('CowsayController', ['$scope', function($scope){
  $scope.cowtext = 'What should I say?!';
  $scope.say = function(){
    return '\n' + cowsay.say({text: $scope.cowtext});
  };
  $scope.speakIt = function(){
    $scope.result = $scope.say();
  };
}]);
