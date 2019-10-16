module Home {
    'use strict';

    interface IHomeScope extends Core.IScope {
        Phones: any;
        missingRegistration: boolean;
        startWizard(): void;
        showOverview(): void;
    }

    import Strings = Constants.Strings;

    export class HomeController {
        constructor(
            private $scope: IHomeScope,
            private $ionicPopup: ionic.popup.IonicPopupService,
            private $state: ng.ui.IStateService
        ) {
            this.$scope.missingRegistration = true;

            $scope.Phones = Constants.Phones;
            $scope.Strings = Strings;
            $scope.startWizard = this.startWizard.bind(this);
            $scope.showOverview = this.showOverview.bind(this);

            this.checkRegistration();
            $scope.$on("$ionicView.beforeEnter", this.checkRegistration.bind(this));
        }

        private checkRegistration(): void {
            var self = this;
            Core.Registration.load(
                // Success callback
                function (registration: Core.Registration) {
                    self.$scope.missingRegistration = (registration === undefined);
                },
                // Error callback
                function () {
                    self.$scope.missingRegistration = true;
                });
        }

        private startWizard(): void {
            var self = this;
            if (!this.$scope.missingRegistration) {
                this.$state.go('wizard', { key: 'main' });
            } else {
                this.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.noRegistration,
                    buttons: [{ text: 'OK', onTap: function () { self.$state.go('register'); } }]
                });
            }
        }

        private showOverview(): void {
            var self = this;
            if (!this.$scope.missingRegistration) {
                this.$state.go('overview');
            } else {
                this.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.noRegistration,
                    buttons: [{ text: 'OK', onTap: function () { self.$state.go('register'); } }]
                });
            }
        }
    }

    angular.module(Constants.Paths.Home).controller('homeController', HomeController);
}