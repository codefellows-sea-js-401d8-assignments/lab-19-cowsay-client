'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('demoApp', []);
//
// angular.module('demoApp').controller('CowsayController', ['$scope', function($scope) {
//   $scope.cowText = 'this is a trip';
//   $scope.say = function(){
//     return '\n' + cowsay.say({text: $scope.cowText});
//   };
//   $scope.speakIt = function(){
//     $scope.result = $scope.say();
//   };
// }]);
