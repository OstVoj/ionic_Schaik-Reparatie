module Register {
    'use strict';

    import Paths = Constants.Paths;

    angular.module(Paths.Wizard, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Wizard, {
                url: '/' + Paths.Wizard + '/:key',
                templateUrl: Paths.Modules + 'wizard/templates/wizard.html',
                controller: 'wizardController'
            });
    }
}
