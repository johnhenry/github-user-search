var APPTITLE = 'Github User Search';
//suggestions
var mapSearchResults = ({data})=>data.items.map(({login, text_matches})=>{return {login, text_matches};});
//
//repos
var combineResults = ([user, repositories])=>{return {user:user.data,repositories:repositories.data};};
//
//script.js
var application = window.angular.module("application",
["ngMaterial", "ngMdIcons", "ngRoute"]);

//RouteConfig
var routeConfigInjections = ["$routeProvider"];
var routeConfig = function($routeProvider){
  $routeProvider.when('/:term',{
    controller:'userController',
    template:'templates/user.html'
  })
  .otherwise({
    controller:null,
    template:'templates/default.html'
  })
};
routeConfig.$inject = routeConfigInjections;
application.config(routeConfig);

//Controllers
var controllerInjections = ["$scope", "$http"];
//Main Controller - controlls application search
var backup;
var controller = function($scope, $http){
  $scope.appTitle = APPTITLE;
  $scope.search_status = 'search';
  $scope.textChange = function(term){
    if(!term) return;
    $scope.items = $http.get(
      `https://api.github.com/search/users?q=${term}+in:login`,
      {
        headers: {
          'Accept':'application/vnd.github.v3.text-match+json',
          'Authorization' : `token ${$scope.accessToken}`
          }
      })
      .then(mapSearchResults, ()=>{$scope.items = backup})
      .then(null, ()=>{backup = $scope.items})
  };
  $scope.textSelect = function({login}){
      Promise.all(
        [
          $http.get(
            `https://api.github.com/users/${login}`,{
                headers: {
                  'Authorization' : `token ${$scope.accessToken}`
                  }
              }),
          $http.get(
            `https://api.github.com/users/${login}/repos`,{
                headers: {
                  'Authorization' : `token ${$scope.accessToken}`
                  }
              })
        ]
      ).then(combineResults).then(subject=>{
        $scope.subject=subject;
        $scope.$apply();
      });
  };
}
controller.$inject = controllerInjections;
application.controller("controller", controller);
//User Controller - displays information and repositories for
var userControllerInjections = ["$scope", "$http", "$routeParams"];
var userController = function($scope, $http){
  
};
userController.$inject = userControllerInjections;
application.controller("userController", userController);
