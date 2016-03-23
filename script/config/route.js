/*
 * @ngdoc config
 * @name route
 * @description
 * This config object provides a routing information for the secondary controller.
 *
 */
const injections = ["$routeProvider"];
const config = function($routeProvider){
  $routeProvider.when('/:login',{
    controller:'userController',
    templateUrl:'views/user.html'
  });
  $routeProvider.otherwise({
    controller:null,
    templateUrl:'views/default.html'
  })
};
config.$inject = injections;
export default config;
