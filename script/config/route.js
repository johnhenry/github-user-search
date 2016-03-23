const injections = ["$routeProvider"];
const config = function($routeProvider){
  $routeProvider.when('/:login',{
    controller:'userController',
    templateUrl:'views/user.html'
  })
  .otherwise({
    controller:null,
    templateUrl:'views/default.html'
  })
};
config.$inject = injections;
export default config;
