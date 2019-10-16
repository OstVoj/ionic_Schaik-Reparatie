module Appointment {
    'use strict';

    import Paths = Constants.Paths;

    angular.module(Paths.Appointment, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Appointment, {
                cache: false,
                url: '/' + Paths.Appointment,
                params: {
                    title: null,
                    key: null,
                    selection: null
                },
                templateUrl: Paths.Modules + 'appointment/templates/appointment.html',
                controller: 'appointmentController'
            });
    }
}
