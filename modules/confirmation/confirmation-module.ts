module Confirmation {
	'use strict';

	import Paths = Constants.Paths;

	angular.module(Paths.Confirmation, [])
		.config(statesConfiguration);

	function statesConfiguration(
		$stateProvider: ng.ui.IStateProvider
	): void {

		$stateProvider
			.state(Paths.Confirmation, {
				cache: false,
				url: '/' + Paths.Confirmation,
				params: {
					message: null,
					calendar: null,
					date: null,
					time: null,
					location: null,
					notes: null,
					image: null
				},
				templateUrl: Paths.Modules + 'confirmation/templates/confirmation.html',
				controller: 'confirmationController'
			});
	}
}
