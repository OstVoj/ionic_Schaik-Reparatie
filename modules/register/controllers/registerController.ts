module Register {
    'use strict';

    interface IRegisterScope extends Core.IScope {
        registration: Core.IRegistration;
        hasRegistration: boolean;
        submitForm(registration: Core.IRegistration): void;
        skipForm(): void;
    }

    import Strings = Constants.Strings;

    export class RegisterController {
        private registration: Core.Registration;

        constructor(
            private $scope: IRegisterScope,
            private $ionicPopup: ionic.popup.IonicPopupService,
            private $state: ng.ui.IStateService,
            private $ionicHistory: ionic.navigation.IonicHistoryService,
            private $ionicLoading: ionic.loading.IonicLoadingService
        ) {
            var self = this;
            this.registration = new Core.Registration();

            this.$scope.hasRegistration = false;
            Core.Registration.load(
                // Success callback
                function (registration: Core.Registration) {
                    self.registration = registration;
                    self.$scope.hasRegistration = (registration != undefined);
                    self.$scope.registration = self.registration;
                },
                // Error callback
                function () {
                    // Report error?
                });

            $scope.Strings = Strings;
            $scope.submitForm = this.submitForm.bind(this);
            $scope.skipForm = this.skipForm.bind(this);
        }

        private submitForm(data: Core.IRegistration): void {
            var self = this;
            // Stip spaces from zipcode.
            if (data && data.zipcode) { data.zipcode = data.zipcode.replace(/\s/g, '').toUpperCase(); }
            let registration = new Core.Registration(data);
            // First save registration remotely.
            this.$ionicLoading.show();
            registration.save(
                function (response) {
                    // If successfull stash it locally to the database.
                    registration.stash(
                        // Success callback
                        function (): void {
                            self.$ionicLoading.hide();
                            // If successfull redirect to the home screen.
                            self.$ionicHistory.nextViewOptions({ disableAnimate: true, disableBack: true, historyRoot: true });
                            self.$state.go('home', {}, { location: 'replace' });
                        },
                        // Error callback
                        function () {
                            self.$ionicLoading.hide();
                            // Database save failure, should not happen but display error message regardless.
                            let message = Strings.errors.registrationDatabase;
                            self.$ionicPopup.show({
                                title: Strings.titles.error,
                                template: message,
                                buttons: [{ text: 'OK' }]
                            });
                        });
                },
                function (response) {
                    self.$ionicLoading.hide();
                    // API save failure. Default to generic error message.
                    let message = Strings.errors.registrationNetwork;
                    // If API provided errors display the first message instead.
                    if (registration.errors.length > 0) {
                        message = registration.errors[0].message;
                    }
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: message,
                        buttons: [{ text: 'OK' }]
                    });
                }
            );
        }

        private skipForm(): void {
            this.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
            this.$state.go('home', {}, { location: 'replace' });
        }
    }

    angular.module(Constants.Paths.Register).controller('registerController', RegisterController);
}