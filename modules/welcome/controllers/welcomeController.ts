module Welcome {
    'use strict';

    import Strings = Constants.Strings;

    export class WelcomeController {
        constructor(
            private $scope: Core.IScope,
            private $state: ng.ui.IStateService,
            private $ionicHistory: ionic.navigation.IonicHistoryService,
            private $ionicLoading: ionic.loading.IonicLoadingService
        ) {
            $scope.Strings = Strings;
            var self = this;

            // Whatever we do we don't want this page in the history.
            this.$ionicHistory.nextViewOptions({ disableAnimate: true, disableBack: true, historyRoot: true });

            this.$ionicLoading.show();
            // Try loading a registration from the database.
            Core.Registration.load(
                // Success callback
                function (registration: Core.Registration): any {
                    if (registration) {
                        registration.validate(
                            // Success callback
                            function () {
                                // Registration exists as expected on server.
                                self.$ionicLoading.hide();
                                self.$state.go('home', {}, { location: 'replace' });
                            },
                            // Error callback
                            function (response: any) {
                                // Check if we have a response. If so registration no longer exists on server.
                                if (response) {
                                    // Registration no longer exists on server. Try removing ID to register again.
                                    registration.id = undefined;
                                    registration.save(
                                        // Success callback
                                        function () {
                                            // Successfully registered again.
                                            self.$ionicLoading.hide();
                                            self.$state.go('home', {}, { location: 'replace' });
                                        },
                                        // Error callback
                                        function () {
                                            // Not enough information to register again.
                                            registration.clear(
                                                // Success callback
                                                function () {
                                                    self.$ionicLoading.hide();
                                                    self.$state.go('register', {}, { location: 'replace' });
                                                },
                                                // Error callback
                                                function () {
                                                    // Shouldn't ever happen but if it does just register again.
                                                    self.$ionicLoading.hide();
                                                    self.$state.go('register', {}, { location: 'replace' });
                                                });
                                        });
                                } else {
                                    // No connection or other server error. Couldn't validate so assume it's still valid.
                                    self.$ionicLoading.hide();
                                    self.$state.go('home', {}, { location: 'replace' });
                                }
                            });
                    } else {
                        self.$ionicLoading.hide();
                    }
                },
                // Error callback
                function () {
                    self.$ionicLoading.hide();
                });
        }
    }

    angular.module(Constants.Paths.Welcome).controller('welcomeController', WelcomeController);
}