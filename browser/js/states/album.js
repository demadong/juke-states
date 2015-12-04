app.config(function($stateProvider) {
	$stateProvider.state('album', {
		url: '/album/:albumId',
		templateUrl: '../../template/album.html',
		controller: 'AlbumCtrl'
	})
})