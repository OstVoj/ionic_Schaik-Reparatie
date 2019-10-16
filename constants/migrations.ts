module Constants {
    'use strict';

    // Add changes to the database to this array, will be automatically processed next time app is run. NEVER change existing entries! NEVER remove entries!
    export let Migrations = [
        'DROP TABLE IF EXISTS registrations',
        'CREATE TABLE registrations (id text primary key, deviceId text, firstName text, surname text, street text, houseNumber text, zipcode text, city text, phone text, email text)',
        'DROP TABLE IF EXISTS appointments',
        'CREATE TABLE appointments (id text primary key, registrationId text, calendarId text, calendarEventId text, startDateTime number, endDateTime number, title text, description text, notes text, image text, referenceCode text, status integer)',
        'ALTER TABLE appointments RENAME TO appointments_old',
        'CREATE TABLE appointments (id text primary key, registrationId text, calendarId text, calendarEventId text, startDateTime number, endDateTime number, title text, location text, notes text, image text, referenceCode text, status integer)',
        'INSERT INTO appointments (id, registrationId, calendarId, calendarEventId, startDateTime, endDateTime, title, location, notes, image, referenceCode, status) SELECT id, registrationId, calendarId, calendarEventId, startDateTime, endDateTime, title, description, notes, image, referenceCode, status FROM appointments_old',
        'DROP TABLE appointments_old',
        'ALTER TABLE appointments ADD COLUMN startResponseWindow text',
        'ALTER TABLE appointments ADD COLUMN endResponseWindow text'
    ];
};
