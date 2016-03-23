/*
 * @ngdoc controller
 * @name controller
 * @description
 * This is the main controller for the application. It provides the main search functionality and also modifies the route when a user is selected
 *
 */
import {TITLE, TIMEOUT, ENDPOINT} from '../settings';
const injections = ["$scope", "$location", "$http"];
const controller = function($scope, $location, {get}){
  //Set application title
  $scope.appTitle = TITLE;
  //Retrieve search term from URL if given
  $scope.searchTerm = $location.path();
  $scope.searchTerm = $scope.searchTerm[0] === '/' ?
  $scope.searchTerm.substring(1) : $scope.searchTerm;
  var timer;
  //Function called to populate auto-complete results.
  $scope.textChange = function(term){
    if(!term) return;
    $scope.items = get(
      `${ENDPOINT}/search/users?q=${term}+in:login`)
      .then(
        (response)=>{
        //Filter errors
          if(response.status !== 200) throw new Error('unsuccessful');
          return response;
        })
      .then(
        ({data})=>{
          //Extract login from results
          clearTimeout(timer);
          return data.items.map(({login})=>login)},
        ()=>{
          //Wait and retry search if there is an error.
          clearTimeout(timer);
          timer = setTimeout(function(){
            $scope.textChange(term);
          }, TIMEOUT);}
      )
  };
  //Function called when user is selected
  $scope.textSelect = $location.path.bind($location);
}
controller.$inject = injections;
export default controller;
