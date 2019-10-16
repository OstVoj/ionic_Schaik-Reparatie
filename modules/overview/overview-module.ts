module Overview {
    'use strict';

    import Paths = Constants.Paths;

    angular.module(Paths.Overview, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Overview, {
                url: '/' + Paths.Overview,
                templateUrl: Paths.Modules + 'overview/templates/overview.html',
                controller: 'overviewController'
            });
    }
}
