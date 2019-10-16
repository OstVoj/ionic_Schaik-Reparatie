module Phone {
    'use strict';

    interface IPhoneParams extends ng.ui.IStateParamsService {
        title: string
        key: string
        selection: string
    }

    interface IPhoneScope extends Core.IScope {
        title: string
        message: string
        selection: string
        number: string
        goHome: () => void
    }

    import Paths = Constants.Paths;

    angular.module(Paths.Phone, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Phone, {
                url: '/' + Paths.Phone,
                params: {
                    key: null,
                    selection: null,
                    title: null
                },
                templateUrl: Paths.Modules + 'phone/templates/phone.html',
                // Simple in-line controller for loading Strings.
                controller: function (
                    $scope: IPhoneScope,
                    $stateParams: IPhoneParams,
                    $state: ng.ui.IStateService,
                    $ionicHistory: ionic.navigation.IonicHistoryService
                ): void {
                    $scope.Strings = Constants.Strings;
                    $scope.title = $stateParams.title;
                    $scope.message = Constants.Strings.phone[$stateParams.key];
                    $scope.selection = $stateParams.selection;
                    $scope.number = Constants.Phones[Constants.Wizard[$stateParams.key].phone];
                    $scope.goHome = function () {
                        $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                        $state.go('home', {}, { location: 'replace' });
                    }   
                }
            });
    }
}
