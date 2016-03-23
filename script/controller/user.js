/*
 * @ngdoc controller
 * @name userController
 * @description
 * This is a secondary controller for the application. It fetches infromation given a user's login.
 *
 */
import {ENDPOINT} from '../settings';
const injections = ["$scope", "$http", "$routeParams"];
const userController = function($scope, {get}, {login}){
  Promise.all([
    get(`${ENDPOINT}/users/${login}`),
    get(`${ENDPOINT}/users/${login}/repos`)])
    .then(
      ([user, repositories])=>{return {user:user.data,repositories:repositories.data};})
    .then(subject=>{
      $scope.subject=subject;
      //Some users don't have an html_url set. Let's fix that...
      $scope.subject.user.html_url = $scope.subject.user.html_url || `https://github.com/${login}`;
      //Some users don't have a name set. Let's fix that...
      $scope.subject.user.name = $scope.subject.user.name || login;
      //Remember to apply these changes to the scope since these are being call asynchronously.
      $scope.$apply();
  });
};
userController.$inject = injections;
export default userController;
