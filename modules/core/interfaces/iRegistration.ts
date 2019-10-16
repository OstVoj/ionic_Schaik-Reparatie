module Core {
	'use strict';

	export interface IRegistration {
		id: string,
		deviceId: string,
		firstName: string,
		surname: string,
		street: string,
		houseNumber: string,
		zipcode: string,
		city: string,
		phone: string,
		email: string
	}
}