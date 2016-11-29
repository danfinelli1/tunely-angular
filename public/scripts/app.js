/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController ($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(function successCallback(res){
    res.json(res);
  }, function errCallback(res){
    console.log('err getting data');
  });

  vm.newAlbum = {};

  vm.newAlbum = {
      name: 'License to Ill',
      artistName: 'Beastie Boys'
  };
  vm.albums = [

];
}
