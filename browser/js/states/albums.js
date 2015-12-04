app.config(function($stateProvider) {
	$stateProvider.state('albumsList', {
		url: '/albums',
		templateUrl: '../../template/albumsList.html',
		controller: 'AlbumsCtrl'
	})
})