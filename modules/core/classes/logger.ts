module Core {
    export class Logger {
        public static log(label: string, data: any, error?: Error): void {
            var $http = angular.injector(["ng"]).get("$http");
            var tracer;
            if (error) {
                tracer = window.StackTrace.fromError(error);
            } else {
                tracer = window.StackTrace.get();
            }
            tracer.then(function (stackframes) {
                var trace = stackframes.map(function (sf) { return sf.toString(); }).join('\n');
                $http({
                    method: 'POST',
                    url: Constants.Api + 'Log',
                    data: { message: [label, JSON.stringify(data), trace].join('\n') },
                    headers: Constants.Headers
                })
            });
        }
    }
}