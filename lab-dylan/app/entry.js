'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('cowsayApp', []);

angular.module('cowsayApp').controller('CowsayController', ['$scope', function($scope) {
  $scope.cowtext = 'cow says...';
  $scope.say = function() {
    return '\n' + cowsay.say({text: $scope.cowtext});
  };
  $scope.makeItSay = function() {
    $scope.result = $scope.say();
  };
}]);
