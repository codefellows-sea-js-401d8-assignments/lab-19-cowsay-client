'use strict';

//webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

//npm modules
const angular = require('angular');
const cowsay = require('cowsay-browser');

//angular module
angular.module('demoApp', []);

//controllers
angular.module('demoApp').controller('CowsayController', ['$scope', function($scope){
  $scope.cowText = 'wish i had something to say';
  $scope.say = function() {
    return '\n' + cowsay.say({text: $scope.cowtext});
  };
  $scope.alreadySaid = function() {
    $scope.result = $scope.say();
  };
}]);
