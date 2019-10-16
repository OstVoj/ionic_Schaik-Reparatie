module Info {
    'use strict';

    import Paths = Constants.Paths;

    angular.module(Paths.Info, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Info, {
                url: '/' + Paths.Info,
                templateUrl: Paths.Modules + 'info/templates/info.html',
                // Simple in-line controller for loading Strings.
                controller: function ($scope: Core.IScope): void {
                    $scope.Strings = Constants.Strings;
                }
            });
    }
}
