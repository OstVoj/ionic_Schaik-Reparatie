module Confirmation {
		'use strict';

		import Strings = Constants.Strings;

		// Add expected parameters to stateParams
		interface IConfirmationStateParams extends ng.ui.IStateParamsService {
			message: string
			calendar: string
			date: Date
			time: any
			location: string
			notes: string
			image: string
		}

		interface IConfirmationScope extends Core.IScope {
			location: string
			hasDate: boolean
			dateString: string
			timeString: string
			notes: string
			hasImage: boolean
			image: string
			createAppointment(): void
			Strings: any
		}

		export class ConfirmationController {
				private appointment: Core.Appointment;

				constructor(
						private $scope: IConfirmationScope,
						private $state: ng.ui.IStateService,
						private $stateParams: IConfirmationStateParams,
						private $ionicHistory: ionic.navigation.IonicHistoryService,
						private $ionicPopup: ionic.popup.IonicPopupService,
						private $ionicLoading: ionic.loading.IonicLoadingService
				) {
						this.$scope.Strings = Strings;
						this.$scope.createAppointment = this.createAppointment.bind(this);

						console.log(this.$stateParams);

						this.$scope.location = this.$stateParams.location;
						if (this.$stateParams.date) {
							this.$scope.hasDate = true;
							this.$scope.dateString = [
								Constants.Strings.weekDays[this.$stateParams.date.getDay()],
								this.$stateParams.date.getDate(),
								Constants.Strings.months[this.$stateParams.date.getMonth()],
								this.$stateParams.date.getFullYear()
							].join(' ');
							this.$scope.timeString =
								this.$stateParams.time.startResponseWindow.substring(0, 5) +
								' - ' + this.$stateParams.time.endResponseWindow.substring(0, 5)
						} else {
							this.$scope.hasDate = false;
						}
						this.$scope.notes = this.$stateParams.notes;
						if (this.$stateParams.image) {
							this.$scope.hasImage = true;
							this.$scope.image = this.$stateParams.image;
						} else {
							this.$scope.hasImage = false;
						}

						this.appointment = new Core.Appointment();
				}

				createAppointment(): void {
						var self = this;
						var calendar = this.$stateParams.calendar;

						if (this.$stateParams.date) {
							var date = new Date(this.$stateParams.date.getTime());
							var times = this.$stateParams.time.startTime.split(':');

							date.setHours(parseInt(times[0]));
							date.setMinutes(parseInt(times[1]));

							//Compensate for javascript time zones
							this.appointment.startDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
						}

						this.appointment.calendarId = Constants.Calendars[calendar];
						this.appointment.location = this.$stateParams.location;
						this.appointment.notes = this.$stateParams.notes;
						if (this.$stateParams.image) {
							this.appointment.image = this.$stateParams.image;
						}

						this.$ionicLoading.show();
						// First get our current registration, then save our appointment to server and then save appointment to local database.
						Core.Registration.load(
								// Success callback
								function (registration: Core.Registration): void {
										self.appointment.registrationId = registration.id;
										self.appointment.save(
												// Success callback
												function () {
														self.appointment.stash(function (): void {
																// Stop loading, clear history and go to success screen.
																self.$ionicLoading.hide();
																Core.WizardHistory.reset();
																self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
																self.$state.go('success', {
																		message: self.$stateParams.message,
																		referenceCode: self.appointment.referenceCode,
																		date: self.appointment.startDateTime.toISOString(),
																		startResponseWindow: self.appointment.startResponseWindow,
																		endResponseWindow: self.appointment.endResponseWindow
																}, { location: 'replace' });
														}, function () {
																self.$ionicLoading.hide();
																self.$ionicPopup.show({
																		title: Strings.titles.error,
																		template: Strings.errors.appointmentDatabase,
																		buttons: [{ text: 'OK' }]
																});
														});
												},
												// Error callback
												function () {
														self.$ionicLoading.hide();
														self.$ionicPopup.show({
																title: Strings.titles.error,
																template: Strings.errors.appointmentNetwork,
																buttons: [{ text: 'OK' }]
														});
												});
								},
								// Error callback
								function () {
										self.$ionicLoading.hide();
										self.$ionicPopup.show({
												title: Strings.titles.error,
												template: Strings.errors.appointmentDatabase,
												buttons: [{ text: 'OK' }]
										});
								});
				}
		}

		angular.module(Constants.Paths.Confirmation).controller('confirmationController', ConfirmationController);
}