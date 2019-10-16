module Core {
    'use strict';

    export interface IAppointment {
        id: string,
        registrationId: string,
        calendarId: string,
        calendarEventId: string,
        startDateTime: Date,
        endDateTime: Date,
        startResponseWindow: string,
        endResponseWindow: string,
        title: string,
        location: string,
        notes: string,
        image: string,
        referenceCode: string,
        status: number
    }
}