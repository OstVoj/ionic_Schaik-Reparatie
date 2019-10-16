module Appointment {
		'use strict';

		import Strings = Constants.Strings;

		// Add expected parameters to stateParams
		interface IAppointmentStateParams extends ng.ui.IStateParamsService {
				key: string
				selection: string
				title: string
		}

		interface IAppointmentScope extends Core.IScope {
				title: string
				selection: string
				date: Date
				times: Array<any>
				hasTimes: boolean
				time: any
				image: string
				openDatePicker(): void
				addPhoto(): void
				confirmAppointment(date: Date, timeIndex: number, notes: string, image: string): void
				Strings: any
		}

		export class AppointmentController {
				constructor(
						private $scope: IAppointmentScope,
						private $state: ng.ui.IStateService,
						private $stateParams: IAppointmentStateParams,
						private $http: ng.IHttpService,
						private $ionicHistory: ionic.navigation.IonicHistoryService,
						private $ionicPopup: ionic.popup.IonicPopupService,
						private $ionicLoading: ionic.loading.IonicLoadingService,
						private ionicDatePicker: any
				) {
						this.$scope.Strings = Strings;
						this.$scope.title = this.$stateParams.title;
						this.$scope.selection = this.$stateParams.selection;
						this.$scope.hasTimes = false;
						this.$scope.times = [];
						this.$scope.openDatePicker = this.openDatePicker.bind(this);
						this.$scope.addPhoto = this.addPhoto.bind(this);
						this.$scope.confirmAppointment = this.confirmAppointment.bind(this);
				}

				openDatePicker(): void {
						this.ionicDatePicker.openDatePicker({
								callback: this.selectDate.bind(this)
						});
				}

				selectDate(epoch: number): void {
						var date = new Date(epoch);
						var self = this;
						var calendar = Constants.Wizard[this.$stateParams.key].calendar;
						this.$scope.date = date;
						this.$scope.hasTimes = false;
						this.$ionicLoading.show();
						this.$http({
								method: 'GET',
								url: Constants.Api + 'calendars/available-timeslots/' + [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-') + '/' + Constants.Calendars[calendar],
								headers: Constants.Headers
						}).then(
								// succcess callback
								function (response: any): void {
										self.$ionicLoading.hide();
										if (response.data.success) {
												if (response.data.returnValue.length > 0) {
														self.$scope.hasTimes = true;
														self.$scope.times = response.data.returnValue;
														self.$scope.time = response.data.returnValue[0];
												} else {
														self.$ionicPopup.show({
																title: Strings.titles.error,
																template: Strings.errors.noTimesAvailable,
																buttons: [{ text: 'OK' }]
														});
												}
										} else {
												self.$ionicPopup.show({
														title: Strings.titles.error,
														template: Strings.errors.noTimesReceived,
														buttons: [{ text: 'OK' }]
												});
										}
								},
								// error callback
								function (): void {
										Core.Logger.log('Appointment Timeslots Network', arguments);
										self.$ionicLoading.hide();
										self.$ionicPopup.show({
												title: Strings.titles.error,
												template: Strings.errors.noTimesReceived,
												buttons: [{ text: 'OK' }]
										});
								});
				}

				addPhoto(): void {
						var self = this;
						this.$ionicLoading.show();
						window.navigator.camera.getPicture(
								// success callback
								function (data: string): void {
										// Perhaps show preview
										self.$ionicLoading.hide();
										self.$scope.image = data;
								},
								// error callback
								function (message: string): void {
										Core.Logger
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

				confirmAppointment(date: Date, time: any, notes: string, image: string): void {
						var calendar = Constants.Wizard[this.$stateParams.key].calendar;

						if (date && time) {
							this.$state.go('confirmation', {
								message: 'couldBePlanned',
								calendar: calendar,
								location: this.$stateParams.selection,
								date: date,
								time: time,
								notes: notes,
								image: image
							}, { location: 'replace' });
						} else {
							this.$ionicPopup.show({
								title: Strings.titles.error,
								template: Strings.errors.noDateTime,
								buttons: [{ text: 'OK' }]
							});
						}
				}
		}

		angular.module(Constants.Paths.Appointment).controller('appointmentController', AppointmentController);
}