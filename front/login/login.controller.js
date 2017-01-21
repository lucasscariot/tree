(function () {
  angular
        .module('app')
        .controller('LoginController', LoginController)

  LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService', '$http']
  function LoginController($location, AuthenticationService, FlashService, $http) {
    const vm = this

    vm.login = login;

    (function initController() {
            // reset login status
      AuthenticationService.ClearCredentials()
    }())

    function login() {
      vm.dataLoading = true
      const req = {
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: vm.email,
          password: vm.password,
        },
      }

      $http(req).then((response) => {
        console.log(response.data)
        if (response.status === 200) {
          FlashService.Success('Login successful', true)
          AuthenticationService.SetCredentials(response.data.treeName, response.data.email, response.data._id)
          $location.path('/')
        } else {
          FlashService.Error(response.message)
          vm.dataLoading = false
        }
      })
    }
  }
}())
