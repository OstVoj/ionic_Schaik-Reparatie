module Register {
    'use strict';

    import Paths = Constants.Paths;

    angular.module(Paths.Register, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Register, {
                url: '/' + Paths.Register,
                templateUrl: Paths.Modules + 'register/templates/register.html',
                controller: 'registerController'
            });
    }
}
