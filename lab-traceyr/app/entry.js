'use strict';

require('!!file?name=[name].ext!.html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('lab-19', []);

angular.module('lab-19').controller('CowsayController', ['$scope', function($scope){

}]);

console.log('Geranimo!');
