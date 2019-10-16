module Core {
	export class Registration implements IRegistration {
		id: string
		deviceId: string
		firstName: string
		surname: string
		street: string
		houseNumber: string
		zipcode: string
		city: string
		phone: string
		email: string

		errors: any

		constructor(registration?: IRegistration) {
			// Passing registration is optional, in case we want to retrieve from db.
			if (registration) {
				this.setAttributes(registration);
			}
			this.errors = [];
			// Set device if we don't have it so we don't have to worry about it.
			if (!this.deviceId) {
				this.deviceId = window.device.uuid;
			}
		}

		public save(successCallback: (response: any) => any, errorCallback: (response: any) => any): void {
			var self = this;
			var $http = angular.injector(["ng"]).get("$http");
			// Send all relevant data to the API.
			$http({
				method: this.id ? 'PUT' : 'POST',
				url: Constants.Api + 'Registrations',
				data: {
					id: self.id,
					deviceId: self.deviceId,
					firstName: self.firstName,
					surname: self.surname,
					street: self.street,
					houseNumber: self.houseNumber,
					zipcode: self.zipcode,
					city: self.city,
					phone: self.phone,
					email: self.email
				},
				headers: Constants.Headers
			}).then(
				// Success callback
				function (response: any) {
					if (response.data.success) {
						// Retrieve Id if we did not have it yet, should be exactly the same if we do.
						self.id = response.data.returnValue.id;
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
					Logger.log('Create Registration Network', arguments);
					errorCallback(undefined);
				});
		}

		public stash(successCallback: () => any, errorCallback: () => any): void {
			var self = this;
			DatabaseFactory.get(function (tx: SqlTransaction): void {
				// First clear all previous registrations, app only holds one at a time.
				tx.executeSql('DELETE FROM registrations', [], undefined, function () {
					Logger.log('Delete Registration Query', arguments);
				});
				// Simple insert of all our data. Then callback based on if the row was written successfully.
				tx.executeSql('INSERT INTO registrations (id, deviceId, firstName, surname, street, houseNumber, zipcode, city, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
					[self.id, self.deviceId, self.firstName, self.surname, self.street, self.houseNumber, self.zipcode, self.city, self.phone, self.email],
					successCallback,
					// Error callback
					function () {
						Logger.log('Save Registration Query', arguments);
						errorCallback();
					});
			},
			// Error callback
			function () {
				Logger.log('Save Registration Database', arguments);
				errorCallback();
			});
		}

		public validate(successCallback: (response: any) => any, errorCallback: (response: any) => any): void {
			var self = this;
			var $http = angular.injector(["ng"]).get("$http");
			$http({
				method: 'GET',
				url: Constants.Api + 'Registrations/' + this.id,
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
					Logger.log('Validate Registration Network', arguments);
					errorCallback(undefined);
				});
		}

		public clear(successCallback: () => any, errorCallback: () => any): void {
			DatabaseFactory.get(
				// Success callback
				function (tx: SqlTransaction): void {
					tx.executeSql('DELETE FROM registrations', [], successCallback,
						// Error callback
						function () {
							Logger.log('Clear Registration Query', arguments);
							errorCallback();
						});
				},
				// Error callback
				function () {
					Logger.log('Clear Registration Database', arguments);
					errorCallback();
				});
		}


		public static load(successCallback: (registration: Registration) => any, errorCallback: () => any): void {
			DatabaseFactory.get(
				// Success callback
				function (tx: SqlTransaction): void {
					// Simple select and load results from the first row.
					tx.executeSql('SELECT * FROM registrations', [], function (tx: SqlTransaction, res: SqlResultSet): void {
						if (res.rows.length > 0) {
							successCallback(new Registration(<Core.IRegistration>res.rows.item(0)));
						} else {
							successCallback(undefined);
						}
					},
					// Error callback
					function () {
						Logger.log('Load Registration Query', arguments);
						errorCallback();
					});
				},
				// Error callback
				function () {
					Logger.log('Load Registration Database', arguments);
					errorCallback();
				});
		}

		private setAttributes(registration: IRegistration) {
			var simple_attributes = ['id', 'deviceId', 'firstName', 'surname', 'street', 'houseNumber', 'zipcode', 'city', 'phone', 'email']
			for (var i = 0; i < simple_attributes.length; i++) {
				let key = simple_attributes[i]
				if (registration[key] && registration[key] != 'undefined') {
					this[key] = registration[key];
				}
			}
		}
	}
}