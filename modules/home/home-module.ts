module Home {
    'use strict';

    import Paths = Constants.Paths;

    angular.module(Paths.Home, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Home, {
                url: '/' + Paths.Home,
                templateUrl: Paths.Modules + 'home/templates/home.html',
                // Simple in-line controller for loading Strings.
                controller: 'homeController'
            });
    }
}
