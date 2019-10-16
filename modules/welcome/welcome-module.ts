module Register {
	'use strict';

	import Paths = Constants.Paths;

	angular.module(Paths.Welcome, [])
		.config(statesConfiguration);

	function statesConfiguration(
		$stateProvider: ng.ui.IStateProvider
	): void {

		$stateProvider
			.state(Paths.Welcome, {
				url: '/' + Paths.Welcome,
				templateUrl: Paths.Modules + 'welcome/templates/welcome.html',
				controller: 'welcomeController'
			});
	}
}
