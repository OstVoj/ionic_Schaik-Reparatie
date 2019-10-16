module Wizard {
    'use strict';

    import Strings = Constants.Strings;

    // Add expected parameters to stateParams
    interface IWizardStateParams extends ng.ui.IStateParamsService {
        key: string
    }

    interface IWizardScope extends Core.IScope {
        title: string
        options: {}
        selectOption(option: string): void
    }

    export class WizardController {
        private oldGoBack;
        private deregisterBack;

        constructor(
            private $scope: IWizardScope,
            private $rootScope: any,
            private $state: ng.ui.IStateService,
            private $stateParams: IWizardStateParams,
            private $ionicPlatform: ionic.platform.IonicPlatformService,
            private $ionicHistory: ionic.navigation.IonicHistoryService,
            private ionicDatePicker: any
        ) {
            var self = this;
            var obj = Constants.Wizard[this.$stateParams.key];
            if (this.$stateParams.key === 'main') {
                Core.WizardHistory.reset();
            }
            if (obj === undefined) {
                this.$state.go('home'); // you're drunk
                return;
            }

            var key = Core.WizardHistory.peek();
            if (key) {
                this.$scope.title = Strings.wizard[Constants.Wizard[key].title || key];
            } else {
                this.$scope.title = Strings.titles.wizard;
            }

            this.$scope.Strings = Strings;
            this.$scope.options = {};
            obj.options.forEach(function (option) {
                self.$scope.options[option] = Constants.Wizard[option];
            });
            this.$scope.selectOption = this.selectOption.bind(this);

            //Override back button behaviour
            this.oldGoBack = $rootScope.$ionicGoBack;
            this.$rootScope.$ionicGoBack = this.goBack.bind(this);
            this.deregisterBack = $ionicPlatform.registerBackButtonAction(this.goBack.bind(this), 101);
            this.$scope.$on('$destroy', this.restoreBack.bind(this));
        }

        selectOption(option: string): void {
            var obj = Constants.Wizard[option];
            Core.WizardHistory.push(option);
            if (obj.options) {
                this.$state.go('wizard', { key: option });
            } else {
                var state = 'home'; // default back home.
                var selection = Core.WizardHistory.get().map(function (k) {
                    return Strings.wizard[Constants.Wizard[k].title || k];
                }).join(' - ');
                var title = Strings.wizard[Constants.Wizard[Core.WizardHistory.peek()].title || Core.WizardHistory.peek()];
                if (obj.calendar) {
                    state = 'appointment';
                } else if (obj.phone) {
                    state = 'phone';
                } else if (obj.contact) {
                    state = 'mail';
                }
                this.$state.go(state, {
                    key: option,
                    selection: selection,
                    title: title
                });
            }
        }

        goBack(backCount: number): void {
            Core.WizardHistory.pop();
            this.$ionicHistory.goBack(backCount);
        }

        restoreBack(): void {
            this.$rootScope.$ionicGoBack = this.oldGoBack;
            this.deregisterBack();
        }
    }

    angular.module(Constants.Paths.Wizard).controller('wizardController', WizardController);
}