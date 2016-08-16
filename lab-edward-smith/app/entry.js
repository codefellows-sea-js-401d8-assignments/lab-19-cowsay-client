'use strict';
// file loader docs
// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss')

// npm modules
const angular = require('angular');
const cowsay = require('cowsay-browser');

// angular modules
// // setter

angular.module('cowsayApp', []);
// services
// controllers

angular.module('cowsayApp')
.controller('CowsayController', ['$scope', function($scope){

  $scope.cowtext = 'feed me';
  $scope.prevText = ' ';
  $scope.say = function() {
    return '\n' + cowsay.say({text: $scope.cowtext, f: $scope.selectedCow });
  };
  $scope.speakIt = function() {
    $scope.prevText = $scope.result
    $scope.result = $scope.say();

    return $scope.prevText

  };

  $scope.revertIt = function() {
    $scope.result = $scope.prevText;
  };

  $scope.cowTypes = [
    'beavis.zen',
    'bong',
    'bud-frogs',
    'bunny',
    'cheese',
    'cower',
    'daemon',
    'default',
    'doge',
    'dragon-and-cow',
    'dragon',
    'elephant in snake',
    'elephant',
    'eyes',
    'flaming sheep',
    'ghostbusters',
    'head-in',
    'hellokitty',
    'kiss',
    'kitty',
    'kosh',
    'luke-koala',
    'mech-and-cow',
    'meow',
    'milk',
    'moofasa',
    'mutilated',
    'ren',
    'satanic',
    'sheep',
    'skeleton',
    'small',
    'sodomized',
    'squirrel',
    'stegosaurus',
    'stimpy',
    'supermilker',
    'surgery',
    'telebears',
    'turkey',
    'turtle',
    'tux',
    'vader-koala',
    'vader',
    'www'
  ]
}])
// directives
