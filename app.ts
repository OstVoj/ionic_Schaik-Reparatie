/// <reference path="constants/paths.ts" />
/// <reference path="constants/api.ts" />
/// <reference path="constants/headers.ts" />
/// <reference path="constants/strings.ts" />
/// <reference path="constants/wizard.ts" />
/// <reference path="constants/calendars.ts" />
/// <reference path="constants/phones.ts" />
/// <reference path="constants/migrations.ts"/>

// Expand Window interface with cordova plugins
interface Window {
		ionic: any
		sqlitePlugin: any
		device: any
		StackTrace: any
}

module App {
		'use strict';

		angular
				.module('app', [
						'ionic',
						'ionic-datepicker',
						Constants.Paths.Core,
						Constants.Paths.Register,
						Constants.Paths.Welcome,
						Constants.Paths.Home,
						Constants.Paths.Info,
						Constants.Paths.Wizard,
						Constants.Paths.Appointment,
						Constants.Paths.Overview,
						Constants.Paths.Phone,
						Constants.Paths.Mail,
						Constants.Paths.Confirmation,
						Constants.Paths.Success
				])
				.constant('$ionicLoadingConfig', { template: '<ion-spinner></ion-spinner>' })
				.config(statesConfiguration);

		window.ionic.Platform.isFullScreen = true
		window.ionic.Platform.ready(function () {
				window.onerror = function (msg, file, line, col, error) {
					Core.Logger.log('Crash', arguments, error);
					location.reload();
					return true;
				};
				window.addEventListener('error', function (e) {
					Core.Logger.log('Crash', arguments);
					location.reload();
					return true;
				});
				angular.bootstrap(document.querySelector('body'), ['app']);
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
		});

		// Configure settings and set initial route
		function statesConfiguration(
				$urlRouterProvider: ng.ui.IUrlRouterProvider,
				$httpProvider: ng.IHttpProvider,
				$ionicConfigProvider: ionic.utility.IonicConfigProvider,
				ionicDatePickerProvider: any
		): void {
				var startDate = new Date();
				startDate.setDate(startDate.getDate() + 7);
				var endDate = new Date();
				endDate.setFullYear(startDate.getFullYear() + 1);
				ionicDatePickerProvider.configDatePicker({
						inputDate: startDate,
						closeLabel: Constants.Strings.buttons.close,
						mondayFirst: false,
						weeksList: Constants.Strings.weekDays,
						monthsList: Constants.Strings.months,
						templateType: 'popup',
						from: startDate,
						to: endDate,
						showTodayButton: false,
						dateFormat: 'dd-MM-yyyy',
						closeOnSelect: true,
						disableWeekdays: [0, 6] // disable weekends
				});
				$ionicConfigProvider.backButton.previousTitleText(false);
				$ionicConfigProvider.backButton.text('');
				$urlRouterProvider.otherwise('/welcome');
		}
}
