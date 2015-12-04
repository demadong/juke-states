app.config(function($stateProvider) {
	$stateProvider.state('artistsList', {
		url: '/artists',
		templateUrl: '../../template/artistsList.html',
		controller: 'artistCtrl'
	})
})