module Mail {
		'use strict';

		import Strings = Constants.Strings;

		// Add expected parameters to stateParams
		interface IMailStateParams extends ng.ui.IStateParamsService {
				key: string
				selection: string
				title: string
		}

		interface IMailScope extends Core.IScope {
				title: string
				selection: string
				image: string
				hasPhone: boolean
				addPhoto(): void
				createMail(notes: string, image: string, phone: string): void
				Strings: any
		}

		export class MailController {
				private appointment: Core.Appointment;

				constructor(
						private $scope: IMailScope,
						private $state: ng.ui.IStateService,
						private $stateParams: IMailStateParams,
						private $ionicHistory: ionic.navigation.IonicHistoryService,
						private $ionicPopup: ionic.popup.IonicPopupService,
						private $ionicLoading: ionic.loading.IonicLoadingService
				) {
						var self = this;
						this.$scope.Strings = Strings;
						this.$scope.title = this.$stateParams.title;
						this.$scope.selection = this.$stateParams.selection;
						this.$scope.hasPhone = true;
						this.$scope.addPhoto = this.addPhoto.bind(this);
						this.$scope.createMail = this.createMail.bind(this);

						this.appointment = new Core.Appointment();

						Core.Registration.load(
								// Success callback
								function (registration: Core.Registration) {
										self.$scope.hasPhone = (registration.phone != undefined);
								},
								// Error callback
								function () {
										self.$ionicPopup.show({
												title: Strings.titles.error,
												template: Strings.errors.appointmentDatabase,
												buttons: [{ text: 'OK' }]
										});
										self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
										self.$state.go('home', {}, { location: 'replace' });
								});
				}

				addPhoto(): void {
						var self = this;
						this.$ionicLoading.show();
						window.navigator.camera.getPicture(
								// success callback
								function (data: string): void {
										self.$ionicLoading.hide();
										self.appointment.image = data;
										self.$scope.image = data;
								},
								// error callback
								function (message: string): void {
										self.$ionicLoading.hide();
										self.$ionicPopup.show({
												title: Strings.titles.error,
												template: message,
												buttons: [{ text: 'OK' }]
										});
								},
								// options
								{
										quality: 25,
										destinationType: Camera.DestinationType.DATA_URL,
										targetHeight: 640,
										targetWidth: 640
								});
				}

				createMail(notes: string, image: string, phone: string): void {
						var self = this;
						var calendar = Constants.Wizard[this.$stateParams.key].contact;

						this.appointment.calendarId = Constants.Calendars[calendar];
						this.appointment.location = this.$stateParams.selection;
						this.appointment.notes = notes;

						this.$ionicLoading.show();
						Core.Registration.load(
								// Success callback
								function (registration: Core.Registration): void {
										self.appointment.registrationId = registration.id;
										// Currently phone is required so this check always passes. Code in place in case registration was created before phone was required. 
										if (registration.phone) {
												self.confirmAppointment(notes, image);
										} else if (phone) {
												self.saveRegistration(registration, phone, notes, image);
										} else {
												self.$ionicPopup.show({
														title: Strings.titles.error,
														template: Strings.errors.noPhone,
														buttons: [{ text: 'OK' }]
												});
										}
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

				private saveRegistration(registration: Core.Registration, phone: string, notes: string, image: string) {
						var self = this;
						// Assign phone number, save to API and then save to database.
						registration.phone = phone;
						registration.save(
								// Success callback
								function () {
										registration.stash(
												// Success callback
												function () {
														self.confirmAppointment(notes, image);
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
				}

				private confirmAppointment(notes: string, image: string) {
						var calendar = Constants.Wizard[this.$stateParams.key].calendar;

						this.$ionicLoading.hide();

						this.$state.go('confirmation', {
							message: 'couldNotBePlanned',
							calendar: calendar,
							location: this.$stateParams.selection,
							notes: notes,
							image: image
						}, { location: 'replace' });
				}
		}

		angular.module(Constants.Paths.Mail).controller('mailController', MailController);
}