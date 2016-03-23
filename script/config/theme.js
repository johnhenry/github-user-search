const injections = ["$mdThemingProvider"];
const config = function($mdThemingProvider) {
  $mdThemingProvider
    .theme('default');
};
config.$inject = injections;
export default config;
angular.module('myApp', ['ngMaterial'])
.config();
