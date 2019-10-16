module overview {
		'use strict';

		import Strings = Constants.Strings;

		interface IOverviewScope extends Core.IScope {
				appointments: Array<Core.Appointment>;
				selectAppointment: (appointment: Core.Appointment) => any;
		}

		export class OverviewController {
				constructor(
						private $scope: IOverviewScope,
						private $state: ng.ui.IStateService,
						private $ionicHistory: ionic.navigation.IonicHistoryService,
						private $ionicPopup: ionic.popup.IonicPopupService,
						private $ionicLoading: ionic.loading.IonicLoadingService
				) {
						$scope.Strings = Strings;
						$scope.selectAppointment = this.selectAppointment.bind(this);
						var self = this;
						// Try loading a registration from the database.
						$ionicLoading.show();
						if (navigator.connection.type == Connection.NONE) {
								Core.Appointment.load(
										// Success callback
										function (appointments: Array<Core.Appointment>) {
												self.$scope.appointments = OverviewController.filterAppointments(appointments);
												self.$ionicLoading.hide();
										},
										// Error callback
										function () {
												self.$ionicLoading.hide();
												self.$ionicPopup.show({
														title: Strings.titles.error,
														template: Strings.errors.overviewDatabase,
														buttons: [{ text: 'OK' }]
												});
												self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
												self.$state.go('home', {}, { location: 'replace' });
										});
						} else {
								Core.Registration.load(
										// Success callback
										function (registration: Core.Registration) {
												Core.Appointment.fetch(registration.id,
														// Success callback
														function (appointments: Array<Core.Appointment>, response: any): any {
																self.$ionicLoading.hide();
																self.$scope.appointments = OverviewController.filterAppointments(appointments);
														},
														// Error callback
														function (response: any) {
																self.$ionicLoading.hide();
																self.$ionicPopup.show({
																		title: Strings.titles.error,
																		template: Strings.errors.overviewNetwork,
																		buttons: [{ text: 'OK' }]
																});
																self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
																self.$state.go('home', {}, { location: 'replace' });
														});
										},
										// Error callback
										function () {
												self.$ionicLoading.hide();
												self.$ionicPopup.show({
														title: Strings.titles.error,
														template: Strings.errors.overviewDatabase,
														buttons: [{ text: 'OK' }]
												});
												self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
												self.$state.go('home', {}, { location: 'replace' });
										});
						}
				}

				selectAppointment(appointment: Core.Appointment, index: number): void {
						var self = this;
						this.$ionicPopup.show({
								title: Strings.titles.appointment,
								template: Strings.messages.appointmentOptions,
								buttons: [
										{
												text: Strings.buttons.cancel,
												type: 'button-assertive',
												onTap: function () {
														self.$ionicLoading.show();
														appointment.cancel(
																// Success callback
																function () {
																		appointment.remove(
																				// Success callback
																				function () {
																						self.$scope.appointments.splice(index, 1);
																						self.$ionicLoading.hide();
																				},
																				// Error callback
																				function () {
																						self.$ionicLoading.hide();
																						self.$ionicPopup.show({
																								title: Strings.titles.error,
																								template: Strings.errors.cancelDatabase,
																								buttons: [{ text: 'OK' }]
																						});
																						self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
																						self.$state.go('home', {}, { location: 'replace' });
																				});
																},
																// Error callback
																function () {
																		self.$ionicLoading.hide();
																		self.$ionicPopup.show({
																				title: Strings.titles.error,
																				template: Strings.errors.cancelNetwork,
																				buttons: [{ text: 'OK' }]
																		});
																});
												}
										},
										{ text: Strings.buttons.back }
								]
						});
				}

				private static filterAppointments(appointments: Array<Core.Appointment>): Array<Core.Appointment> {
					return appointments.filter(function (appointment: Core.Appointment): boolean {
						return (appointment.startDateTime.getTime() > new Date().setHours(0, 0, 0, 0) ||
							appointment.startDateTime.getTime() == 0)
					});
				}
		}

		angular.module(Constants.Paths.Welcome).controller('overviewController', OverviewController);
}