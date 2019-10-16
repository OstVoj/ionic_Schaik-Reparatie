module Core {
    export class Appointment implements IAppointment {
        id: string
        registrationId: string
        calendarId: string
        calendarEventId: string
        startDateTime: Date
        endDateTime: Date
        startResponseWindow: string
        endResponseWindow: string
        title: string
        location: string
        notes: string
        image: string
        referenceCode: string
        status: number

        errors: any

        constructor(appointment?: IAppointment) {
            // Passing registration is optional, in case we want to retrieve from db.
            if (appointment) {
                this.setAttributes(appointment);
            }
            this.errors = [];
        }

        public save(successCallback: (response: any) => any, errorCallback: (response: any) => any): void {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
            // Send all relevant data to the API.
            $http({
                method: 'POST',
                url: Constants.Api + 'Calendars',
                data: {
                    registrationId: this.registrationId,
                    calendarGroupId: this.calendarId,
                    canBePlanned: true,
                    startDateTime: (this.startDateTime === undefined || this.startDateTime.getTime() === 0) ? undefined : this.startDateTime,
                    location: this.location,
                    notes: this.notes,
                    image: this.image
                },
                headers: Constants.Headers
            }).then(
                // Success callback
                function (response: any) {
                    if (response.data.success) {
                        self.setAttributes(<Core.IAppointment>response.data.returnValue);
                        self.errors = [];
                        successCallback(response);
                    } else {
                        // Get errors from API and remember them.
                        self.errors = response.data.errors;;
                        errorCallback(response);
                    }
                },
                // Error callback
                function () {
                    Logger.log('Create Appointment Network', arguments);
                    errorCallback(undefined);
                });
        }

        public stash(successCallback: () => any, errorCallback: () => any): void {
            var self = this;
            DatabaseFactory.get(
                // Success callback
                function (tx: SqlTransaction): void {
                    // Simple insert or replace of all our data. Then callback based on if the row was written successfully.
                    tx.executeSql('INSERT OR REPLACE INTO appointments (id, registrationId, calendarId, calendarEventId, startDateTime, endDateTime, title, location, notes, image, referenceCode, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                        [self.id, self.registrationId, self.calendarId, self.calendarEventId, self.startDateTime.getTime(), self.endDateTime.getTime(), self.title, self.location, self.notes, self.image, self.referenceCode, self.status],
                        // Success callback
                        function (tx: SqlTransaction, res: SqlResultSet): void {
                            if (res.rowsAffected == 1) {
                                successCallback();
                            } else {
                                errorCallback();
                            }
                        },
                        // Error callback
                        function () {
                            Logger.log('Save Appointment Query', arguments);
                            errorCallback();
                        });
                },
                // Error callback
                function () {
                    Logger.log('Save Appointment Database', arguments);
                    errorCallback();
                });
        }

        public cancel(successCallback: (response: any) => any, errorCallback: (response: any) => any): void {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
            $http({
                method: 'DELETE',
                url: Constants.Api + 'Calendars/' + this.id,
                headers: Constants.Headers
            }).then(
                // Success callback
                function (response: any) {
                    if (response.data.success) {
                        successCallback(response);
                    } else {
                        errorCallback(response);
                    }
                },
                // Error callback
                function () {
                    Logger.log('Cancel Appointment Network', arguments);
                    errorCallback(undefined);
                });
        }

        public remove(successCallback: () => any, errorCallback: () => any): void {
            var self = this;
            DatabaseFactory.get(function (tx: SqlTransaction): void {
                tx.executeSql('DELETE FROM appointments WHERE id = ?', [self.id],
                    // Success callback
                    function (tx: SqlTransaction, res: SqlResultSet): void {
                        if (res.rowsAffected == 1) {
                            successCallback();
                        } else {
                            errorCallback();
                        }
                    },
                    // Error callback
                    function () {
                        Logger.log('Remove Appointment Query', arguments);
                        errorCallback();
                    });
            },
            // Error callback
            function () {
                Logger.log('Remove Appointment Database', arguments);
                errorCallback();
            });
        }

        public static fetch(registrationId: string, successCallback: (appointments: Array<Appointment>, response: any) => any, errorCallback: (response: any) => any): void {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
            $http({
                method: 'GET',
                url: Constants.Api + 'registrations/' + registrationId + '/events',
                headers: Constants.Headers
            }).then(
                // Success Callback
                function (response: any) {
                    var saved = 0;
                    var hasError = false;
                    var appointments = [];
                    if (response.data.success) {
                        if (response.data.returnValue.length === 0) {
                            successCallback([], response);
                            return;
                        }
                        for (let val of response.data.returnValue) {
                            let appointment = new Appointment(<IAppointment>val);
                            appointments.push(appointment);
                            appointment.stash(function () {
                                if (response.data.returnValue.length == ++saved) {
                                    if (hasError) {
                                        errorCallback(response);
                                    } else {
                                        appointments.sort(self.compare);
                                        successCallback(appointments, response);
                                        Appointment.clearExcept(appointments);
                                    }
                                }
                            }, function () {
                                hasError = true;
                                if (response.data.returnValue.length == ++saved) {
                                    errorCallback(response);
                                }
                            });
                        }
                    } else {
                        errorCallback(response);
                    }
                },
                // Error callback
                function () {
                    Logger.log('Fetch Appointments Network', arguments);
                    errorCallback(undefined);
                });
        }

        public static load(successCallback: (appointments: Array<Appointment>) => any, errorCallback: () => any): void {
            var self = this;
            DatabaseFactory.get(function (tx: SqlTransaction): void {
                // Clear all old entries?
                // tx.executeSql('DELETE FROM appointments WHERE endDateTime < ?', [new Date().getTime()]);
                // Simple select and load results.
                tx.executeSql('SELECT * FROM appointments', [], function (tx: SqlTransaction, res: SqlResultSet): void {
                    if (res.rows.length > 0) {
                        var appointments: Array<Appointment> = [];
                        for (var i = 0; i < res.rows.length; i++) {
                            let item = <any>res.rows.item(i);
                            item.startDateTime = new Date(parseInt(item.startDateTime));
                            item.endDateTime = new Date(parseInt(item.endDateTime));
                            appointments.push(new Appointment(<Core.IAppointment>item));
                        }
                        appointments.sort(self.compare);
                        successCallback(appointments);
                    } else {
                        successCallback([]);
                    }
                },
                // Error callback
                function () {
                    Logger.log('Load Appointments Query', arguments);
                    errorCallback();
                });
            },
            // Error callback
            function () {
                Logger.log('Load Appointments Database', arguments);
                errorCallback();
            });
        }

        private setAttributes(appointment: IAppointment) {
            var simple_attributes = ['id', 'registrationId', 'calendarId', 'calendarEventId', 'startResponseWindow', 'endResponseWindow', 'title', 'location', 'notes', 'image', 'referenceCode', 'status']
            for (var i = 0; i < simple_attributes.length; i++) {
                let key = simple_attributes[i]
                if (appointment[key] && appointment[key] != 'undefined') {
                    this[key] = appointment[key];
                }
            }
            var date_attributes = ['startDateTime', 'endDateTime']
            for (var i = 0; i < date_attributes.length; i++) {
                let key = date_attributes[i]
                if (appointment[key] && appointment[key] != 'undefined') {
                    this[key] = new Date(appointment[key]);
                } else {
                    this[key] = new Date(0);
                }
            }
        }

        // getTime() === 0 means no date. Earliest dates at the top, null dates at the bottom.
        private static compare(a: Appointment, b: Appointment) {
            if (a.startDateTime.getTime() === b.startDateTime.getTime()) {
                return 0;
            } else if (a.startDateTime.getTime() === 0) {
                return 1;
            } else if (b.startDateTime.getTime() === 0) {
                return -1;
            } else if (a.startDateTime.getTime() > b.startDateTime.getTime()) {
                return 1;
            } else {
                return -1;
            }
        }

        private static clearExcept(appointments: Array<Appointment>): void {
            var self = this;
            var ids = appointments.map(function (appointment) { return appointment.id; });
            DatabaseFactory.get(
                // Success callback
                function (tx: SqlTransaction): void {
                    tx.executeSql('DELETE FROM appointments WHERE id NOT IN (' + ids.map(function () { return '?' }).join(', ') + ')', ids, undefined, function () {
                        Logger.log('Clear Appointments Query', arguments);
                    });
                },
                // Error callback
                function () {
                    Logger.log('Clear Appointments Database', arguments);
                });
        }
    }
}