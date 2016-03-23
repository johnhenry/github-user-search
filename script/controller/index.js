import {TITLE} from '../settings';
//Main Controller - controlls application search
const injections = ["$scope", "$location", "$http"];
//The controller's scope exposes
  //appTitle =
  //searchTerm
  //textChange
  //textSelect
const controller = function($scope, $location, {get}){
  $scope.appTitle = TITLE;
  $scope.searchTerm = $location.path();
  $scope.searchTerm = $scope.searchTerm[0] === '/' ?
  $scope.searchTerm.substring(1) : $scope.searchTerm;
  var timer;
  $scope.textChange = function(term){
    if(!term) return;
    $scope.items = get(
      `https://api.github.com/search/users?q=${term}+in:login`)
      .then((response)=>{
        if(response.status !== 200) throw new Error('unsuccessful');
        return response;})//Filter errors
      .then(
        ({data})=>{
          clearTimeout(timer);
          return data.items.map(({login})=>login)},
        ()=>{
          clearTimeout(timer);
          timer = setTimeout(function(){
            $scope.textChange(term);
          },8000);}
      )
  };
  $scope.textSelect = $location.path.bind($location);
  //Selecting an item sets the location
}
controller.$inject = injections;
export default controller;
