module Success {
		'use strict';

		interface ISuccessParams extends ng.ui.IStateParamsService {
				message: string
				referenceCode: string
				date: string
				startResponseWindow: string
				endResponseWindow: string
		}

		interface ISuccessScope extends Core.IScope {
				title: string
				message: string
		}

		import Paths = Constants.Paths;

		angular.module(Paths.Success, [])
				.config(statesConfiguration);

		function statesConfiguration(
				$stateProvider: ng.ui.IStateProvider
		): void {

				$stateProvider
						.state(Paths.Success, {
								url: '/' + Paths.Success,
								templateUrl: Paths.Modules + 'success/templates/success.html',
								params: {
										message: null,
										referenceCode: null,
										date: null,
										startResponseWindow: null,
										endResponseWindow: null
								},
								// Simple in-line controller for loading Strings.
								controller: function ($scope: ISuccessScope, $stateParams: ISuccessParams, $ionicHistory: ionic.navigation.IonicHistoryService): void {
										var date = new Date($stateParams.date);
										$scope.Strings = Constants.Strings;
										$scope.message = Constants.Strings.success[$stateParams.message].message
												.replace(/%\{referenceCode\}/g, $stateParams.referenceCode)
												.replace(/%\{date\}/g, [Constants.Strings.weekDays[date.getDay()], date.getDate(), Constants.Strings.months[date.getMonth()], date.getFullYear()].join(' '))
												.replace(/%\{startTime\}/g, ($stateParams.startResponseWindow || '').substring(0, 5))
												.replace(/%\{endTime\}/g, ($stateParams.endResponseWindow || '').substring(0, 5));
										$scope.title = Constants.Strings.success[$stateParams.message].title;
										$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
								}
						});
		}
}
