(function () {
  angular.module('app').controller('RegisterController', RegisterController)

  RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService', '$http']
  function RegisterController(UserService, $location, $rootScope, FlashService, $http) {
    const vm = this

    vm.register = register

    function register() {
      vm.dataLoading = true

      const req = {
        method: 'POST',
        url: 'http://localhost:3000/users',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          firstName: vm.user.firstName,
          lastName: vm.user.lastName,
          password: vm.user.password,
          email: vm.user.email,
        },
      }

      $http(req).then((response) => {
        if (response.status == 201) {
          FlashService.Success('Registration successful', true)
          $location.path('/login')
        } else {
          FlashService.Error(response.message)
          vm.dataLoading = false
        }
      })
    }
  }
}())
