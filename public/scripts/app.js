/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
    .module('tunely', [])
    .controller('AlbumsIndexController', AlbumsIndexController);
// ^ the first argument is a string naming the controller,
// the second argument is a function that defines the capacities
// of the controller.
AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController($http) {
    var vm = this;

    $http({
        method: 'GET',
        url: '/api/albums'
    }).then(successCallback, errorCallback);

    vm.newAlbum = {
        name: 'Viva Hate',
        artistName: 'Morrissey'
    };

    vm.albums = [];

    vm.createAlbum = function (album){
      console.log(album);
        $http({
          method: 'POST',
          url: '/api/albums',
          data: album
        }).then(succPost, errorCallback);
    }

    function succPost(res){
      console.log('it made post req');
      vm.albums.push(res.data);
    }

    function successCallback(res){

      vm.albums = res.data;
      console.log(res.data);
    }
    function errorCallback(res){
      console.log('didnt maek it');
    }

}
