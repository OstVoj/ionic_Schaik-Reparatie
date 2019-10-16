module Mail {
    'use strict';

    import Paths = Constants.Paths;

    angular.module(Paths.Mail, [])
        .config(statesConfiguration);

    function statesConfiguration(
        $stateProvider: ng.ui.IStateProvider
    ): void {

        $stateProvider
            .state(Paths.Mail, {
                cache: false,
                url: '/' + Paths.Mail,
                params: {
                    title: null,
                    key: null,
                    selection: null
                },
                templateUrl: Paths.Modules + 'mail/templates/mail.html',
                controller: 'mailController'
            });
    }
}
