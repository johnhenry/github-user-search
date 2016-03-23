/*
 * @ngdoc application
 * @name application
 * @description
 * This main application. It is automatically boostrapped via directives in "index.html"
 *
 */
//Angular Dependencies
import angular from 'angular';
import angularRoute from 'angular-route';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import angularMaterialIcons from 'angular-material-icons';
//Internal Dependencies
import routeConfiguration from './config/route';
import controller from './controller/';
import userController from './controller/user';
//Application
const applicationModules = ["ngMaterial", "ngMdIcons", "ngRoute"];
const application = angular.module('application', applicationModules);
//Application Registration
application.config(routeConfiguration);
application.controller('controller', controller);
application.controller('userController', userController);
