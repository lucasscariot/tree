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

      console.log(vm)

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
        if (response.status === 200) {
          FlashService.Success('Login successful', true)
          vm.dataLoading = false
        } else {
          FlashService.Error(response.message)
          vm.dataLoading = false
        }
      })
    }
  }
}())
