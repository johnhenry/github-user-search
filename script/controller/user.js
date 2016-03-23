//User Controller - displays information and repositories for
const injections = ["$scope", "$http", "$routeParams"];
const controller = function($scope, {get}, {login}){
  Promise.all([
    get(`https://api.github.com/users/${login}`),
    get(`https://api.github.com/users/${login}/repos`)])
    .then(
      ([user, repositories])=>{return {user:user.data,repositories:repositories.data};})
    .then(subject=>{
      $scope.subject=subject;
      $scope.subject.user.html_url = $scope.subject.user.html_url || `https://github.com/${login}`;
      $scope.subject.user.name = $scope.subject.user.name || login;
      $scope.$apply();
  });
};
controller.$inject = injections;
export default controller;
