'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('lab19', []);

angular.module('lab19').controller('CowsayController', ['$scope', function($scope){
  $scope.cowtext = 'Bowties are cool';
  $scope.say = function(){
    return '\n' + cowsay.say({text: $scope.cowtext});
  };
  $scope.speakIt = function(){
    $scope.result = $scope.say();
  };
}]);

console.log('Geranimo!');
