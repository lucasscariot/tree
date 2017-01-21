(function () {
  angular
        .module('app')
        .controller('HomeController', HomeController)

  HomeController.$inject = ['UserService', '$rootScope', '$http']
  function HomeController(UserService, $rootScope, $http) {
    const vm = this

    vm.user = null
    vm.allUsers = []

    initController()

    function initController() {
      // loadCurrentUser()
      loadAllChannels()
    }

    // function loadCurrentUser() {
    //   UserService.GetByUsername($rootScope.globals.currentUser.username)
    //     .then((user) => {
    //       console.log($rootScope.globals.currentUser)
    //       vm.user = user
    //     })
    // }

    function loadAllChannels() {
      const req = {
        method: 'GET',
        url: 'http://localhost:3000/channels',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      $http(req).then((response) => {
        if (response.status === 200) {
          vm.channels = response.data
        } else {
          vm.channels = []
        }
      })
    }
  }
}())
