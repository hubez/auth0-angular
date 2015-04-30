angular.module( 'sample.login', [
  'auth0'
])
.controller( 'LoginCtrl', function HomeController( $scope, auth, $location ) {

  $scope.login = function() {
    auth.signin({
      authParams: {
        scope: 'openid email offline_access'
      }
    });
  }

});
