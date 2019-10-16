var Constants;
(function (Constants) {
    'use strict';
    Constants.Paths = {
        Core: 'core',
        Modules: 'modules/',
        Welcome: 'welcome',
        Home: 'home',
        Register: 'register',
        Info: 'info',
        Wizard: 'wizard',
        Appointment: 'appointment',
        Overview: 'overview',
        Phone: 'phone',
        Mail: 'mail',
        Success: 'success',
        Confirmation: 'confirmation'
    };
})(Constants || (Constants = {}));
;
var Constants;
(function (Constants) {
    'use strict';
    Constants.Api = 'http://api.werepair.masc3.nl/api/';
})(Constants || (Constants = {}));
;
var Constants;
(function (Constants) {
    'use strict';
    Constants.Headers = {
        'api_key': '3F21044F-C7E8-4CE4-93F3-8DA01261021C'
    };
})(Constants || (Constants = {}));
;
var Constants;
(function (Constants) {
    'use strict';
    Constants.Strings = {
        titles: {
            register: 'Registreren',
            welcome: 'Welkom',
            home: 'Reparatie - App',
            info: 'Info - pagina',
            error: 'Foutmelding',
            wizard: 'Reparatieverzoek',
            overview: 'Overzicht',
            success: 'Success',
            appointment: 'Reparatie aanvraag'
        },
        form: {
            personalInfo: 'Persoonsgegevens',
            address: 'Adres',
            validate: 'Versturen',
            skip: 'Overslaan'
        },
        menu: {
            repairRequest: 'Reparatieverzoek',
            byPhone: 'Telefonisch',
            withApp: 'Nieuwe reparatie aanvraag',
            rushRepair: 'Spoedreparatie',
            myAccount: 'Mijn account',
            myData: 'Mijn gegevens',
            myRepairs: 'Mijn reparatie aanvragen',
            callDirectly: 'Bel direct voor:',
            noHeating: 'Geen verwarming',
            glassDamage: 'Glasschade',
            elevatorMalfunction: 'Lift werkt niet'
        },
        extra: {
            outsideOfficeHours: '(ook buiten kantooruren)',
            byPhone: '(telefonisch)',
            firmRomijnders: '(firma Romijnders)',
            firmSeuren: '(firma Seuren)',
            firmKone: '(firma Kone)'
        },
        errors: {
            registrationNetwork: 'Er is iets misgegaan bij het valideren van uw gegevens. Controleer uw verbinding en probeer het opnieuw.',
            registrationDatabase: 'Er is iets misgegaan bij het  aanmaken van uw account. Probeer het later opnieuw.',
            noRegistration: 'U heeft zich nog niet geregistreerd, u moet eerst uw gegevens opgeven.',
            noTimesReceived: 'Er is iets misgegaan bij het ophalen van de beschikbare tijden. Controleer uw verbinding en probeer het opnieuw',
            noTimesAvailable: 'Op deze datum zijn geen tijden beschikbaar, probeer een andere datum',
            noDateTime: 'U moet een datum en tijd kiezen voor uw reparatieverzoek.',
            appointmentNetwork: 'Er is iets misgegaan bij het versturen van uw reparatieverzoek. Controleer uw verbinding en probeer het opnieuw',
            appointmentDatabase: 'Er is iets misgegaan bij het toevoegen van uw reparatieverzoek aan het overzicht.',
            overviewNetwork: 'Er is iets misgegaan bij het opvragen van uw reparatieverzoeken. Controleer uw verbinding en probeer het opnieuw',
            overviewDatabase: 'Er is iets misgegaan bij het opvragen van uw reparatieverzoeken.',
            cancelNetwork: 'Er is iets misgegaan bij het annuleren van uw reparatieverzoek. Controleer uw verbinding en probeer het opnieuw',
            cancelDatabase: 'Er is iets misgegaan bij het annuleren van uw reparatieverzoek.',
            noPhone: 'U moet een telefoonnummer invoeren'
        },
        messages: {
            loading: 'Uw gegevens worden geladen...',
            welcome: 'Met deze App kunt u eenvoudig en direct een reparatieverzoek of servicemelding indienen via ons online meldpunt. Daarnaast krijgt u, in veel gevallen, toegang tot onze digitale agenda zodat uzelf een afspraak kunt plannen wanneer u dat uitkomt.',
            continue: 'Doorgaan',
            appointmentOptions: 'Wat wilt u met deze reparatie aanvraag doen?'
        },
        buttons: {
            cancel: 'Afzeggen',
            close: 'Sluiten',
            back: 'Terug',
            goHome: 'Terug naar het hoofdmenu'
        },
        registration: {
            firstName: 'Voornaam',
            surname: 'Achternaam',
            phone: 'Telefoonnummer',
            email: 'Emailadres',
            street: 'Straat',
            houseNumber: 'Huisnummer',
            zipcode: 'Postcode',
            city: 'Plaats'
        },
        info: {
            aboutTheApp: {
                title: 'Werkwijze App',
                content: 'Met behulp van een eenvoudig menu op uw smartphone kunt u aangeven waar uw reparatieverzoek over gaat. Vervolgens kunt u extra informatie en/of een foto toevoegen aan uw verzoek. Indien mogelijk plant uzelf onze reparatie- en onderhoudsmedewerker in. U krijgt per e-mail een bevestiging met het door u vastgelegde tijdstip of wanneer direct plannen niet mogelijk is de mededeling dat u binnen twee werkdagen wordt teruggebeld. In sommige gevallen kunt u meteen een (nood)nummer bellen.'
            },
            howDoesItWork: {
                title: 'Reparatie- en onderhoudsapplicatie',
                content: 'Deze App is ontwikkeld op initiatief van Van Schaik Aannemingsbedrijf.'
            }
        },
        appointment: {
            pickDate: 'Datum kiezen',
            addPhoto: 'Foto toevoegen',
            notes: 'Opmerkingen',
            confirm: 'Bevestigen',
            submit: 'Verzenden',
            toBePlanned: 'Moet nog ingepland worden',
            notPlannable: 'Niet automatisch inplanbaar',
            none: 'Er zijn geen reparatieverzoeken'
        },
        phone: {
            elevatorMalfunction: 'Contact opnemen met Kone 0900-22255566',
            glass: 'Voor glas beschadigingen kunt u contact op nemen met Seuren 024-3231010',
            serviceElectrics: 'Geen elektra in de woning 0800-9009',
            serviceGas: 'Geen gas in de wonining 0800-9009',
            serviceWater: 'Geen water in de woning 0800-0359',
            serviceSewer: 'Verstopping',
            serviceHeating: 'Geen verwarming in de woning 024-6488222',
            call: 'Bellen'
        },
        success: {
            intro: 'Geachte heer/mevrouw,',
            couldBePlanned: {
                title: 'Afspraakbevestiging',
                message: 'Uw reparatieverzoek met referentienummer %{referenceCode} is in goede orde ontvangen. Onze reparatie- en onderhoudsmedewerker komt op %{date} rond %{startTime} bij u langs. Bent u onverhoopt verhinderd op dit tijdstip geef dit dan tijdig door via de App (wijzigen reparatieverzoek, tot twee dagen voor geplande datum) of telefonisch op nummer 024-3817810.',
            },
            couldNotBePlanned: {
                title: 'Terugbelverzoek',
                message: 'Uw reparatieverzoek met referentienummer %{referenceCode} is in goede orde ontvangen. Onze reparatie- en onderhoudsmedewerker neemt binnen twee werkdagen contact met u op om een afspraak te maken. Voor vragen kunt u altijd bellen met 024-3817810.'
            },
            thanks: 'Hartelijk dank voor het gebruik van deze App.',
            greetings: 'Met vriendelijke groet,',
            owner: 'Afdeling reparatie en onderhoud'
        },
        wizard: {
            general: 'Algemene ruimte',
            inside: 'Binnen de woning',
            outside: 'Buiten de woning',
            around: 'Rondom de woning',
            entrance: 'Entree/hal',
            corridor: 'Galerij/gang/trap',
            basement: 'Kelder',
            elevator: 'Lift',
            garage: 'Parkeergarage',
            services: 'Voorzieningen',
            livingRoom: 'Woonkamer',
            kitchen: 'Keuken',
            bedroom: 'Slaapkamer',
            attic: 'Zolder',
            bathroom: 'Badkamer',
            toilet: 'Toilet',
            hallway: 'Gang/hal/trap',
            balcony: 'Balkon',
            flatRoof: 'Plat dak',
            slantedRoof: 'Schuin dak',
            facade: 'Gevel',
            generalStorage: 'Berging (algemeen)',
            privateStorage: 'Berging (eigen)',
            street: 'Pad/straat',
            parking: 'Parkeerplaats',
            generalShed: 'Schuur/garage (algemeen)',
            privateShed: 'Schuur/garage (eigen)',
            generalGarden: 'Tuin (algemeen)',
            privateGarden: 'Tuin (eigen)',
            other: 'Anders',
            bell: 'Bel / Deuropener / Intercom',
            mailBox: 'Brievenbus / Postkast / Papierbak',
            generalDoor: 'Algemene toegangsdeur',
            privateDoor: 'Eigen voordeur',
            extraKeys: 'Extra sleutels',
            renterBillSub: '(rekening huurder)',
            ownResponsibilitySub: '(door huurder)',
            lighting: 'Elektra / Verlichting',
            window: 'Kozijn / Raam',
            glass: 'Glas',
            nameTags: 'Naamplaatjes',
            nameTagHolders: 'Naamplaathouders',
            nameTagHoldersSub: '(alleen bij etagewoningen)',
            pests: 'Ongedierte',
            pestsSub: '(gemeenschappelijke ruimtes rekening WBSG)',
            walls: 'Plafond / Vloer / Wand',
            ventilation: 'Ventilatie',
            cleaning: 'Schoonmaak',
            railing: 'Balustrade / Hekwerk / Leuning',
            door: 'Deur',
            drainpipe: 'Regenpijp',
            corridorCleaningSub: '(galerij is voor huurder)',
            stairs: 'Trap',
            waterMeter: 'Watermeter',
            meterBox: 'Meterkast',
            basementRailing: 'Leuning',
            elevatorMalfunction: 'Lift werkt niet',
            elevatorDoor: 'Liftdeur',
            garageDoor: 'Garagedeur',
            parkingBarrier: 'Parkeerbeugel',
            sewer: 'Riool',
            barrier: 'Slagboom',
            water: 'Water',
            electrics: 'Elektra',
            provider: 'UPC/KPN',
            providerSub: '(wanneer u geen telefoon/kabel/internet ontvangt kunt u contact opnemen met u provider)',
            geyser: 'Geiser',
            kitchenAppliances: 'Keukenapparatuur',
            kitchenCounter: 'Keukenblok',
            drain: 'Riool / Afvoer',
            heating: 'Verwarming',
            faucet: 'Water / Kraan',
            kitchenGas: 'Gas / Gaskraan',
            roofWindow: 'Dakraam',
            sink: 'Wastafel',
            gas: 'Gas',
            vlizo: 'Trap / Vlizo',
            boiler: 'Ketel',
            bath: 'Bad',
            shower: 'Douche',
            showerDrain: 'Riool / Afvoer / Doucheput',
            washingMachine: 'Wasmachine',
            pipes: 'Waterleiding',
            toiletBowl: 'Toiletpot / Stortbak',
            toiletSeat: 'WC bril',
            toiletPaperHolder: 'Toiletrolhouder',
            hallwayElectrics: 'Elektra / Meterkast',
            mirror: 'Spiegel',
            soapTray: 'Zeepbakje',
            frontDoor: 'Voordeur',
            smokeAlarm: 'Rookmelders',
            balconySeparation: 'Balkonafscheiding',
            balconyCabinet: 'Balkonkast',
            outsideFloor: 'Plafond / Vloer',
            roof: 'Dak',
            gutter: 'Dakgoot',
            eaves: 'Dakrand',
            chimney: 'Schoorsteen',
            dormer: 'Dakkapel',
            outsideWall: 'Buitenmuur',
            porch: 'Portiek',
            outsideDoor: 'Buitendeur',
            manhole: 'Put / Riool',
            scooterCabinet: 'Kast scootmobiel',
            pavement: 'Bestrating',
            vegetation: 'Begroeiing',
            well: 'Put',
            fence: 'Schutting / Tuinmuur',
            lawn: 'Grasveld',
            gate: 'Toegangshek',
            shedOutsideWall: 'Buitenmuur',
            shedDoor: 'Garagedeur',
            gardenGate: 'Hek / Poort',
            playset: 'Speeltoestel',
            screen: 'Scherm / Schutting',
            gardenWall: 'Tuinmuur',
            frontDoorBell: 'Voordeurbel',
            doorOpener: 'Deuropener',
            interphone: 'Intercom',
            lock: 'Slot werkt niet',
            letterFlap: 'Brievenbusklep',
            mailBoxDoor: 'Deurtje',
            cylinder: 'Cilinder',
            cylinderSub: '(bij verlies, buitensluiting: kosten huurder)',
            hinges: 'Scharnieren',
            doorOpening: 'Deur gaat niet meer open of dicht',
            doorClosing: 'Sluit slecht/niet',
            doorDamage: 'Deur beschadigd',
            closer: 'Deurdranger',
            windowClosing: 'Raam sluit niet',
            windowLocks: 'Hang- en sluitwerk doet het niet',
            windowDamage: 'Kozijn/raam beschadigd',
            windowsillDamage: 'Vensterbank beschadigd',
            ceilingLeak: 'Lekkage plafond',
            ceilingDamage: 'Plafond beschadigd',
            floorDamage: 'Vloer beschadigd',
            floorTileDamage: 'Vloertegels beschadigd',
            wallDamage: 'Wand beschadigd',
            wallTileDamage: 'Wandtegels beschadigd',
            wallDirty: 'Wanden bevuild',
            wallGraffiti: 'Graffiti op de wanden',
            wallPainting: 'Schilderen, behangen en kleine reparatie stucwerk',
            bathroomWallPainting: 'Schilderen en kleine reparatie stucwerk',
            railingDamage: 'Leuning beschadigd',
            stairsDamage: 'Trap beschadigd',
            groundFault: 'Aardlek slaat er steeds uit',
            groundFaultSub: '(met spoed contact opnemen)',
            sewerDamage: 'Riool beschadigd',
            elevatorDoorClosing: 'Lift duer sluit niet / blijft open',
            leaking: 'Lekt water',
            noLongerLockable: 'Is niet meer afsluitbaar',
            parkingBarrierUpDown: 'Beugel gaat niet meer omhoog of omlaag',
            barrierOpening: 'Slagboom gaat niet meer open of dicht',
            barrierDamage: 'Slagboom beschadigd',
            waterDrain: 'Water loopt niet weg',
            waterLeak: 'Lekkage',
            plugMalfunction: 'Stopcontact doet het niet',
            lightSwitchMalfunction: 'Lightschakelaar doet het niet',
            lightingMalfunction: 'Verlichting doet het niet',
            ventMalfunction: 'Ventilatie rooster werkt niet',
            ventControl: 'Ventilatie rooster niet bedienbaar',
            ventDefect: 'Mechanische afzuiging defect',
            heatingMalfunction: 'Radiator wordt niet warm',
            heatingMalfunctionSub: '(radiator bijvullen en ontluchten, door huurder)',
            thermostatMalfunction: 'thermostatMalfunction',
            geyserMalfunction: 'Water wordt niet warm',
            cookerDefect: 'Kookplaat defect',
            ovenDefect: 'Oven defect',
            hoodDefect: 'Afzuigkap defect',
            dishwasherDefect: 'Vaatwasser defect',
            drawerClosing: 'Lade of kastje sluit niet meer',
            drawerDamage: 'Lade kapot',
            lockerDamage: 'Kastje kapot',
            leafDamage: 'Blad kapot',
            faucetLeak: 'Kraan lekt',
            knobsMalfunction: 'Draai knoppen werken niet',
            faucetLoose: 'Kraan zit los',
            knobMalfunction: 'Draai knop werkt niet meer',
            hose: 'Gas slang',
            roofWindowClosing: 'Dakraam sluit niet',
            roofWindowDamage: 'Dakraam beschadigd',
            sinkDamage: 'Wastafel beschadigd',
            sinkleak: 'Wastafel lekt',
            siphonLeak: 'Sifon lekt',
            vlizoMalfunction: 'Vlizotrap werkt niet',
            vlizoDamage: 'Vlizotrap beschadigd',
            boilerMalfunction: 'Ketel defect',
            boilerRefill: 'Ketel bijvullen en radiatoren ontluchten',
            washingMachineDefect: 'Wasmachine defect',
            washingMachineDamage: 'Wasmachine beschadigd',
            bathFaucetLeak: 'Badkraan lekt',
            bathFaucetDefect: 'Badkraan defect',
            bathDamage: 'Bad beschadigd',
            showerFaucetLeak: 'Douchekraan lekt',
            showerFaucetDefect: 'Douchekraan defect',
            showerPoleDefect: 'Glijstang defect',
            showerheadLeak: 'Douchekop lekt',
            showerheadDefect: 'Douchekop defect',
            showerHoseLeak: 'Doucheslang lekt',
            showerHoseDefect: 'Doucheslang defect',
            showerDrainDamage: 'Doucheputje beschadigd',
            pipeLeak: 'Waterleiding lekt',
            pipeAffected: 'Waterleiding aangetast',
            toiletBowlLeak: 'Toiletpot/stortbak lekt',
            cisternSlow: 'Stortbak loopt langzaam vol',
            toiletBowlDamage: 'Toiletpot/stortbak beschadigd',
            toiletFaucetLeak: 'Toilet kraan lekt',
            toiletFaucetClosing: 'Toilet kraan is niet meer afsluitbaar',
            mirrorDamage: 'Spiegel beschadigd',
            mirrorWorn: 'Spiegel verweerd',
            mirrorLoose: 'Spiegel hangt los',
            soapTrayDamage: 'Zeepbakje beschadigd',
            soapTrayLoose: 'Zeepbakje hangt los',
            smokeAlarmSignal: 'Rookmelder blijft signaal geven',
            smokeAlarmBattery: 'Batterij vervangen',
            smokeAlarmBatterySub: '(huurder zelf verantwoordelijk)',
            damaged: 'Beschadigd',
            rusted: 'Verroest',
            roofLeak: 'Dak lekkage',
            roofDamage: 'Dak beschadigd',
            gutterDamage: 'Dakgoot beschadigd',
            gutterLoose: 'Dakgoot hangt los',
            gutterBlocked: 'Dakgoot verstopt',
            gutterCleaning: 'Schoonhouden dakgoot',
            eavesDamage: 'Dakrand beschadigd',
            eavesLoose: 'Dakrand hangt los',
            chimneyDamage: 'Schoorsteen beschadigd',
            leadLoose: 'Lood hangt los',
            chimneyLoose: 'Schoorsteen pot staat los',
            roofTileLoose: 'Dakpan list los',
            roofTileLost: 'Dakpan weg gewaaid',
            roofWater: 'Dak staat vol water',
            fasciaLoose: 'Boeiboord hangt los',
            jointingLoose: 'Voegwerk laat los',
            brickLoose: 'Metselsteen zit los',
            manholeBlocked: 'Put/riool verstopt',
            cabinetDamage: 'Kast beschadigd',
            pavementLoose: 'Bestrating ligt los',
            pavementDamage: 'Bestrating beschadigd',
            vegetationBlown: 'Begroeiing is omgewaaid',
            vegetationGrown: 'Begroeiing is buiten proportie gegroeid',
            wellBlocked: 'Put is verstopt',
            brickWallDamage: 'Gemetselde muur is beschadigd',
            lawnGarbage: 'Afval op grasveld achtergelaten',
            gateClosing: 'Toegangshek gaat niet meer open of dicht',
            gateDamage: 'Toegangshek beschadigd',
            doorUpDown: 'Deur gaat niet meer omhoog of omlaag',
            privateWaterSub: '(huurder is zelf verantwoordelijk voor het afsluiten van de buitenkraan i.v.m. vorst)',
            playsetDamage: 'Speeltoestel beschadigd',
            playsetDirty: 'Speeltoestel bevuild',
            blockage: 'Water loopt niet weg',
            blockageSub: '(verstopping)',
            drainSmell: 'Afvoer stinkt',
            drainpipeDamage: 'Regenpijp beschadigd',
            allLights: 'Alle lampen doen het niet',
            singleLight: 'Één lamp doet het niet. Waar?....',
            cleaningSkipped: 'Schoonmaak niet uitgevoerd',
            garbageLeft: 'Afval achter gelaten'
        },
        weekDays: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
        months: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    };
})(Constants || (Constants = {}));
;
var Constants;
(function (Constants) {
    'use strict';
    Constants.Wizard = {
        main: {
            options: ['general', 'inside', 'outside', 'around']
        },
        general: {
            options: ['entrance', 'corridor', 'basement', 'elevator', 'garage']
        },
        inside: {
            options: ['services', 'livingRoom', 'kitchen', 'bedroom', 'attic', 'bathroom', 'toilet', 'hallway']
        },
        outside: {
            options: ['balcony', 'flatRoof', 'slantedRoof', 'facade']
        },
        around: {
            options: ['generalStorage', 'privateStorage', 'street', 'parking', 'generalShed', 'privateShed', 'generalGarden',
                'privateGarden']
        },
        entrance: {
            options: ['bell', 'mailBox', 'generalDoor', 'privateDoor', 'extraKeys', 'lighting', 'generalWindow', 'glass',
                'nameTags', 'nameTagHolders', 'pests', 'generalWalls', 'entranceVentilation', 'cleaning', 'other']
        },
        corridor: {
            options: ['railing', 'door', 'lighting', 'generalWindow', 'glass', 'pests', 'generalWalls', 'drainpipe',
                'corridorCleaning', 'stairs', 'waterMeter', 'meterBox', 'other']
        },
        basement: {
            options: ['basementRailing', 'door', 'lighting', 'generalWindow', 'glass', 'pests', 'generalWalls', 'drainpipe',
                'generalSewer', 'irregularCleaning', 'waterMeter', 'other']
        },
        elevator: {
            options: ['elevatorMalfunction', 'lighting', 'elevatorDoor', 'elevatorWalls', 'cleaning', 'other']
        },
        garage: {
            options: ['door', 'lighting', 'garageDoor', 'generalWindow', 'pests', 'parkingBarrier', 'generalWalls', 'generalSewer',
                'irregularCleaning', 'barrier', 'water', 'other']
        },
        services: {
            options: ['serviceElectrics', 'serviceGas', 'serviceWater', 'serviceSewer', 'serviceHeating']
        },
        livingRoom: {
            options: ['insideDoor', 'electrics', 'insideWindow', 'glass', 'insideWalls', 'insideVentilation', 'livingRoomHeating',
                'provider', 'other']
        },
        kitchen: {
            options: ['insideDoor', 'electrics', 'geyser', 'kitchenAppliances', 'kitchenCounter', 'insideWindow', 'glass', 'pests',
                'kitchenWalls', 'drain', 'kitchenVentilation', 'heating', 'faucet', 'kitchenGas', 'other']
        },
        bedroom: {
            options: ['roofWindow', 'insideDoor', 'electrics', 'insideWindow', 'glass', 'insideWalls', 'insideVentilation',
                'heating', 'sink', 'faucet', 'other']
        },
        attic: {
            options: ['roofWindow', 'insideDoor', 'electrics', 'gas', 'insideWindow', 'glass', 'pests', 'insideWalls', 'vlizo',
                'insideVentilation', 'boiler', 'insideSewer', 'washingMachine', 'sink', 'faucet', 'other']
        },
        bathroom: {
            options: ['bath', 'insideDoor', 'shower', 'electrics', 'insideWindow', 'glass', 'bathroomWalls', 'showerDrain',
                'insideVentilation', 'heating', 'washingMachine', 'sink', 'faucet', 'pipes', 'toiletBowl', 'toiletSeat',
                'toiletPaperHolder', 'mirror', 'soapTray', 'other']
        },
        toilet: {
            options: ['insideDoor', 'toiletElectrics', 'insideWindow', 'glass', 'pests', 'insideWalls', 'insideSewer', 'insideVentilation',
                'heating', 'sink', 'faucet', 'mirror', 'toiletBowl', 'toiletSeat', 'toiletPaperHolder', 'other']
        },
        hallway: {
            options: ['bell', 'mailBox', 'frontDoor', 'insideDoor', 'hallwayElectrics', 'gas', 'waterMeter', 'insideWindow', 'glass', 'pests',
                'kitchenWalls', 'insideSewer', 'stairs', 'smokeAlarm', 'insideVentilation', 'heating', 'other']
        },
        balcony: {
            options: ['balconySeparation', 'balconyCabinet', 'railing', 'electrics', 'outsideWindow', 'pests', 'outsideFloor',
                'drainpipe', 'other']
        },
        flatRoof: {
            options: ['roof', 'gutter', 'roofWindow', 'eaves', 'drainpipe', 'chimney', 'other']
        },
        slantedRoof: {
            options: ['roofTiles', 'gutter', 'dormer', 'roofWindow', 'eaves', 'drainpipe', 'chimney', 'other']
        },
        facade: {
            options: ['bell', 'mailBox', 'outsideWall', 'porch', 'outsideDoor', 'lighting', 'pests', 'drainpipe', 'other']
        },
        generalStorage: {
            options: ['door', 'lighting', 'generalWindow', 'glass', 'pests', 'generalWalls', 'manhole', 'irregularCleaning',
                'aroundWater', 'scooterCabinet', 'other']
        },
        privateStorage: {
            options: ['door', 'lighting', 'generalWindow', 'glass', 'pests', 'aroundWalls', 'manhole', 'other']
        },
        street: {
            options: ['pavement', 'lighting', 'pests', 'vegetation', 'well', 'fence', 'other']
        },
        parking: {
            options: ['pavement', 'door', 'lighting', 'lawn', 'pests', 'parkingBarrier', 'vegetation', 'well', 'irregularCleaning',
                'barrier', 'gate', 'other']
        },
        generalShed: {
            options: ['shedOutsideWall', 'shedFlatRoof', 'shedSlantedRoof', 'gutter', 'roofWindow', 'eaves', 'drainpipe', 'door', 'lighting',
                'shedDoor', 'window', 'glass', 'pests', 'shedWall', 'well', 'drainpipe', 'sewer', 'aroundWater', 'other']
        },
        privateShed: {
            options: ['shedOutsideWall', 'shedFlatRoof', 'shedSlantedRoof', 'gutter', 'roofWindow', 'eaves', 'drainpipe', 'door', 'lighting',
                'shedDoor', 'window', 'glass', 'pests', 'shedWall', 'well', 'drainpipe', 'sewer', 'privateWater', 'other']
        },
        generalGarden: {
            options: ['pavement', 'door', 'lighting', 'lawn', 'gardenGate', 'pests', 'vegetation', 'well', 'fence', 'playset',
                'aroundWater', 'other']
        },
        privateGarden: {
            options: ['pavement', 'door', 'lighting', 'pests', 'screen', 'well', 'fence', 'privateWater', 'other']
        },
        other: {
            contact: 'vanSchaik'
        },
        bell: {
            options: ['frontDoorBell', 'doorOpener', 'interphone']
        },
        mailBox: {
            options: ['lock', 'letterFlap', 'mailBoxDoor']
        },
        generalDoor: {
            options: ['lock', 'cylinder', 'hinges', 'doorClosing', 'doorDamage', 'closer']
        },
        privateDoor: {
            options: ['lock', 'cylinder', 'hinges', 'doorClosing', 'doorDamage']
        },
        extraKeys: {
            subTitle: 'renterBillSub',
            calendar: 'vanSchaik'
        },
        lighting: {
            options: ['allLights', 'singleLight']
        },
        generalWindow: {
            title: 'window',
            options: ['windowClosing', 'windowDamage']
        },
        glass: {
            phone: 'seuren',
        },
        nameTags: {
            subTitle: 'renterBillSub',
            calendar: 'vanSchaik'
        },
        nameTagHolders: {
            subTitle: 'nameTagHoldersSub',
            calendar: 'vanSchaik'
        },
        pests: {
            subTitle: 'pestsSub',
            contact: 'vanSchaik'
        },
        generalWalls: {
            title: 'walls',
            options: ['ceilingLeak', 'ceilingDamage', 'floorDamage', 'wallDamage', 'wallDirty', 'wallGraffiti']
        },
        entranceVentilation: {
            title: 'ventilation',
            calendar: 'vanSchaik'
        },
        cleaning: {
            options: ['cleaningSkipped', 'garbageLeft']
        },
        railing: {
            options: ['damaged', 'rusted']
        },
        door: {
            options: ['lock', 'cylinder', 'hinges', 'doorClosing', 'doorDamage', 'closer']
        },
        drainpipe: {
            options: ['blockage', 'drainpipeDamage']
        },
        corridorCleaning: {
            title: 'cleaning',
            subTitle: 'corridorCleaningSub',
            options: ['cleaningSkipped', 'garbageLeft']
        },
        stairs: {
            options: ['railingDamage', 'stairsDamage']
        },
        waterMeter: {
            options: ['leaking', 'noLongerLockable']
        },
        meterBox: {
            options: ['doorDamage', 'lock', 'groundFault']
        },
        basementRailing: {
            options: ['damaged']
        },
        generalSewer: {
            title: 'sewer',
            options: ['blockage', 'sewerDamage']
        },
        irregularCleaning: {
            title: 'cleaning',
            contact: 'vanSchaik'
        },
        elevatorMalfunction: {
            phone: 'kone'
        },
        elevatorDoor: {
            options: ['elevatorDoorClosing']
        },
        elevatorWalls: {
            title: 'walls',
            options: ['ceilingDamage', 'floorDamage', 'wallDamage', 'wallDirty', 'wallGraffiti']
        },
        garageDoor: {
            options: ['doorOpening', 'doorDamage']
        },
        parkingBarrier: {
            options: ['parkingBarrierUpDown']
        },
        barrier: {
            options: ['barrierOpening', 'barrierDamage']
        },
        water: {
            options: ['waterDrain', 'waterLeak']
        },
        serviceElectrics: {
            title: 'electrics',
            phone: 'serviceMain'
        },
        serviceGas: {
            title: 'gas',
            phone: 'serviceMain'
        },
        serviceWater: {
            title: 'water',
            phone: 'serviceWater'
        },
        serviceSewer: {
            title: 'sewer',
            phone: 'serviceSewer'
        },
        serviceHeating: {
            title: 'heating',
            phone: 'romijnders'
        },
        insideDoor: {
            title: 'door',
            options: ['lock', 'hinges', 'doorClosing', 'doorDamage']
        },
        electrics: {
            title: 'electrics',
            options: ['plugMalfunction', 'lightSwitchMalfunction', 'lightingMalfunction']
        },
        insideWindow: {
            title: 'window',
            options: ['windowClosing', 'windowLocks', 'windowDamage', 'windowsillDamage']
        },
        insideWalls: {
            title: 'walls',
            options: ['ceilingLeak', 'ceilingDamage', 'floorDamage', 'wallDamage', 'wallPainting']
        },
        insideVentilation: {
            title: 'ventilation',
            options: ['ventMalfunction', 'ventControl']
        },
        livingRoomHeating: {
            title: 'heating',
            options: ['heatingMalfunction', 'thermostatMalfunction']
        },
        provider: {
            subTitle: 'providerSub',
            contact: 'vanSchaik'
        },
        geyser: {
            options: ['geyserMalfunction']
        },
        kitchenAppliances: {
            options: ['cookerDefect', 'ovenDefect', 'hoodDefect', 'dishwasherDefect']
        },
        kitchenCounter: {
            options: ['drawerClosing', 'drawerDamage', 'lockerDamage', 'leafDamage']
        },
        kitchenWalls: {
            title: 'walls',
            options: ['ceilingLeak', 'ceilingDamage', 'floorDamage', 'wallTileDamage', 'wallDamage', 'wallPainting']
        },
        drain: {
            options: ['blockage', 'drainSmell']
        },
        kitchenVentilation: {
            title: 'ventilation',
            options: ['ventMalfunctionBaeten', 'ventControlBaeten', 'ventDefect']
        },
        heating: {
            options: ['heatingMalfunction']
        },
        faucet: {
            options: ['faucetLeak', 'knobsMalfunction', 'faucetLoose']
        },
        kitchenGas: {
            options: ['knobMalfunction', 'hose']
        },
        roofWindow: {
            options: ['roofWindowClosing', 'roofWindowDamage']
        },
        sink: {
            options: ['sinkDamage', 'sinkLeak', 'siphonLeak']
        },
        vlizo: {
            options: ['vlizoMalfunction', 'vlizoDamage', 'railingDamage', 'stairsDamage']
        },
        boiler: {
            options: ['boilerMalfunction', 'boilerRefill']
        },
        insideSewer: {
            title: 'sewer',
            options: ['blockage', 'sewerDamage']
        },
        washingMachine: {
            options: ['waschingMachineDefect', 'washingMachineDamage']
        },
        bath: {
            options: ['bathFaucetLeak', 'bathFaucetDefect', 'bathDamage']
        },
        shower: {
            options: ['showerFaucetLeak', 'showerFaucetDefect', 'showerPoleDefect', 'showerheadLeak', 'showerheadDefect',
                'showerHoseLeak', 'showerHoseDefect']
        },
        bathroomWalls: {
            title: 'walls',
            options: ['ceilingLeak', 'ceilingDamage', 'floorTileDamage', 'wallTileDamage', 'bathroomWallPainting']
        },
        showerDrain: {
            options: ['showerDrainDamage', 'blockageVanSchaik', 'drainSmell']
        },
        pipes: {
            options: ['pipeLeak', 'pipeAffected']
        },
        toiletBowl: {
            options: ['toiletBowlLeak', 'cisternSlow', 'toiletBowlDamage', 'toiletFaucetLeak', 'toiletFaucetClosing']
        },
        toiletSeat: {
            subTitle: 'renterBillSub',
            calendar: 'romijnders'
        },
        toiletPaperHolder: {
            subTitle: 'renterBillSub',
            calendar: 'romijnders'
        },
        mirror: {
            options: ['mirrorDamage', 'mirrorWorn', 'mirrorLoose']
        },
        soapTray: {
            options: ['soapTrayDamage', 'soapTrayLoose']
        },
        toiletElectrics: {
            title: 'electrics',
            options: ['lightSwitchMalfunction', 'lightingMalfunction']
        },
        frontDoor: {
            options: ['lock', 'cylinder', 'hinges', 'doorClosing', 'doorDamage']
        },
        hallwayElectrics: {
            options: ['doorDamageBaeten', 'lockBaeten', 'groundFaultBaeten']
        },
        smokeAlarm: {
            options: ['smokeAlarmSignal', 'smokeAlarmBattery']
        },
        balconySeparation: {
            options: ['damaged', 'rusted']
        },
        balconyCabinet: {
            options: ['lock', 'cylinder', 'hinges', 'doorClosing', 'doorDamage']
        },
        outsideWindow: {
            title: 'window',
            options: ['windowClosing', 'windowDamage']
        },
        outsideFloor: {
            options: ['ceilingLeak', 'ceilingDamage', 'floorDamage']
        },
        roof: {
            options: ['roofLeak', 'roofDamage']
        },
        gutter: {
            options: ['gutterDamage', 'gutterLoose', 'gutterBlocked', 'gutterCleaning']
        },
        eaves: {
            options: ['eavesDamage', 'eavesLoose']
        },
        chimney: {
            options: ['chimneyDamage', 'leadLoose', 'chimneyLoose']
        },
        roofTiles: {
            title: 'roof',
            options: ['roofLeak', 'roofDamage', 'roofTileLoose', 'roofTileLost']
        },
        dormer: {
            options: ['roofWater', 'roofTileLoose', 'roofTileLost', 'fasciaLoose']
        },
        outsideWall: {
            options: ['jointingLoose', 'brickLoose', 'wallGraffiti']
        },
        porch: {
            options: ['railingLoose', 'garbage', 'ceilingDamage', 'floorDamage', 'wallDamage', 'wallDirty']
        },
        outsideDoor: {
            options: ['lock', 'cylinder', 'hinges', 'doorClosing', 'doorDamage']
        },
        manhole: {
            options: ['manholeBlocked']
        },
        aroundWater: {
            title: 'water',
            options: ['leaking', 'noLongerLockable']
        },
        scooterCabinet: {
            options: ['lock', 'cylinder', 'cabinetDamage', 'doorDamage']
        },
        aroundWalls: {
            title: 'walls',
            options: ['ceilingLeak', 'ceilingDamage', 'floorDamage', 'wallDamage']
        },
        pavement: {
            options: ['pavementLoose', 'pavementDamage']
        },
        vegetation: {
            options: ['vegetationBlown', 'vegetationGrown']
        },
        well: {
            options: ['wellBlocked']
        },
        fence: {
            options: ['brickWallDamage', 'jointingLoose']
        },
        lawn: {
            options: ['lawnGarbage']
        },
        gate: {
            options: ['gateClosing', 'gateDamage']
        },
        shedOutsideWall: {
            options: ['jointingLoose', 'brickLoose', 'wallDamage', 'wallDirty', 'wallGraffiti']
        },
        shedFlatRoof: {
            title: 'flatRoof',
            options: ['roofLeak', 'roofDamage']
        },
        shedSlantedRoof: {
            title: 'slantedRoof',
            options: ['roofLeak', 'roofDamage', 'roofTileLoose', 'roofTileLost']
        },
        shedDoor: {
            options: ['lock', 'cylinder', 'doorDamage', 'doorUpDown']
        },
        shedWall: {
            title: 'walls',
            options: ['ceilingLeak', 'ceilingDamage', 'floorDamage', 'wallDamage']
        },
        privateWater: {
            title: 'water',
            subTitle: 'privateWaterSub',
            options: ['leaking', 'noLongerLockable']
        },
        gardenGate: {
            options: ['lock', 'cylinder', 'hinges', 'doorClosing', 'doorDamage']
        },
        playSet: {
            options: ['playsetDamage', 'playsetDirty']
        },
        frontDoorBell: {
            calendar: 'baeten'
        },
        doorOpener: {
            calendar: 'baeten'
        },
        interphone: {
            calendar: 'baeten'
        },
        lock: {
            calendar: 'vanSchaik'
        },
        letterFlap: {
            calendar: 'vanSchaik'
        },
        mailBoxDoor: {
            calendar: 'vanSchaik'
        },
        cylinder: {
            subTitle: 'cylinderSub',
            calendar: 'vanSchaik'
        },
        hinges: {
            calendar: 'vanSchaik'
        },
        doorClosing: {
            calendar: 'vanSchaik'
        },
        doorDamage: {
            calendar: 'vanSchaik'
        },
        closer: {
            calendar: 'vanSchaik'
        },
        allLights: {
            calendar: 'baeten'
        },
        singleLight: {
            calendar: 'baeten'
        },
        windowClosing: {
            calendar: 'vanSchaik'
        },
        windowDamage: {
            calendar: 'vanSchaik'
        },
        ceilingLeak: {
            contact: 'vanSchaik'
        },
        ceilingDamage: {
            contact: 'vanSchaik'
        },
        floorDamage: {
            contact: 'vanSchaik'
        },
        wallDamage: {
            contact: 'vanSchaik'
        },
        wallDirty: {
            contact: 'vanSchaik'
        },
        wallGraffiti: {
            contact: 'vanSchaik'
        },
        cleaningSkipped: {
            contact: 'vanSchaik'
        },
        garbageLeft: {
            contact: 'vanSchaik'
        },
        damaged: {
            calendar: 'vanSchaik'
        },
        rusted: {
            calendar: 'vanSchaik'
        },
        blockage: {
            subTitle: 'blockageSub',
            calendar: 'romijnders'
        },
        drainSmell: {
            calendar: 'romijnders'
        },
        drainpipeDamage: {
            calendar: 'romijnders'
        },
        railingDamage: {
            calendar: 'vanSchaik'
        },
        stairsDamage: {
            calendar: 'vanSchaik'
        },
        leaking: {
            calendar: 'romijnders'
        },
        noLongerLockable: {
            calendar: 'romijnders'
        },
        groundFault: {
            subTitle: 'groundFaultSub',
            contact: 'vanSchaik'
        },
        sewerDamage: {
            calendar: 'romijnders'
        },
        elevatorDoorClosing: {
            contact: 'vanSchaik'
        },
        doorOpening: {
            calendar: 'vanSchaik'
        },
        parkingBarrierUpDown: {
            calendar: 'vanSchaik'
        },
        barrierOpening: {
            contact: 'vanSchaik'
        },
        barrierDamage: {
            calendar: 'vanSchaik'
        },
        waterDrain: {
            calendar: 'romijnders'
        },
        waterLeak: {
            calendar: 'romijnders'
        },
        plugMalfunction: {
            calendar: 'baeten'
        },
        lightSwitchMalfunction: {
            calendar: 'baeten'
        },
        lightingMalfunction: {
            calendar: 'baeten'
        },
        windowLocks: {
            calendar: 'vanSchaik'
        },
        windowsillDamage: {
            calendar: 'vanSchaik'
        },
        wallPainting: {
            subTitle: 'renterBillSub',
            contact: 'vanSchaik'
        },
        ventMalfunction: {
            calendar: 'vanSchaik'
        },
        ventControl: {
            calendar: 'vanSchaik'
        },
        heatingMalfunction: {
            subTitle: 'healingMalfunctionSub',
            calendar: 'romijnders'
        },
        thermostatMalfunction: {
            calendar: 'romijnders'
        },
        geyserMalfunction: {
            calendar: 'romijnders'
        },
        cookerDefect: {
            contact: 'vanSchaik'
        },
        overDefect: {
            contact: 'vanSchaik'
        },
        hoodDefect: {
            contact: 'vanSchaik'
        },
        dishwasherDefect: {
            contact: 'vanSchaik'
        },
        drawerClosing: {
            calendar: 'vanSchaik'
        },
        drawerDamage: {
            calendar: 'vanSchaik'
        },
        lockerDamage: {
            calendar: 'vanSchaik'
        },
        leafDamage: {
            calendar: 'vanSchaik'
        },
        wallTileDamage: {
            contact: 'vanSchaik'
        },
        ventMalfunctionBaeten: {
            title: 'ventMalfunction',
            calendar: 'baeten'
        },
        ventControlBaeten: {
            title: 'ventControl',
            calendar: 'baeten'
        },
        ventDefect: {
            calendar: 'baeten'
        },
        faucetLeak: {
            calendar: 'romijnders'
        },
        knobsMalfunction: {
            calendar: 'romijnders'
        },
        faucetLoose: {
            calendar: 'romijnders'
        },
        knobMalfunction: {
            calendar: 'romijnders'
        },
        hose: {
            calendar: 'romijnders'
        },
        roofWindowClosing: {
            calendar: 'vanSchaik'
        },
        roofWindowDamage: {
            calendar: 'vanSchaik'
        },
        sinkDamage: {
            calendar: 'romijnders'
        },
        sinkLeak: {
            calendar: 'romijnders'
        },
        siphonLeak: {
            calendar: 'romijnders'
        },
        vlizoMalfunction: {
            calendar: 'vanSchaik'
        },
        vlizoDamage: {
            calendar: 'vanSchaik'
        },
        boilerMalfunction: {
            phone: 'romijnders'
        },
        boilerRefill: {
            subTitle: 'ownResponsibilitySub',
            contact: 'vanSchaik'
        },
        washingMachineDefect: {
            calendar: 'romijnders'
        },
        washingMachineDamage: {
            calendar: 'romijnders'
        },
        bathFaucetLeak: {
            calendar: 'romijnders'
        },
        bathFaucetDefect: {
            calendar: 'romijnders'
        },
        bathDamage: {
            calendar: 'romijnders'
        },
        showerFaucetLeak: {
            calendar: 'romijnders'
        },
        showerFaucetDefect: {
            calendar: 'romijnders'
        },
        showerPoleDefect: {
            calendar: 'romijnders'
        },
        showerheadLeak: {
            calendar: 'romijnders'
        },
        showerheadDefect: {
            calendar: 'romijnders'
        },
        showerHoseLeak: {
            calendar: 'romijnders'
        },
        showerHoseDefect: {
            calendar: 'romijnders'
        },
        bathroomWallPainting: {
            subTitle: 'renterBillSub',
            contact: 'vanSchaik'
        },
        showerDrainDamage: {
            contact: 'vanSchaik'
        },
        blockageVanSchaik: {
            contact: 'vanSchaik'
        },
        pipeLeak: {
            calendar: 'romijnders'
        },
        pipeAffected: {
            calendar: 'romijnders'
        },
        toiletBowlLeak: {
            calendar: 'romijnders'
        },
        cisternSlow: {
            calendar: 'romijnders'
        },
        toiletBowlDamage: {
            calendar: 'romijnders'
        },
        toiletFaucetLeak: {
            calendar: 'romijnders'
        },
        toiletFaucetClosing: {
            calendar: 'romijnders'
        },
        mirrorDamage: {
            calendar: 'romijnders'
        },
        mirrorWorn: {
            calendar: 'romijnders'
        },
        mirrorLoose: {
            calendar: 'romijnders'
        },
        soapTrayDamage: {
            calendar: 'romijnders'
        },
        soapTrayLoose: {
            calendar: 'romijnders'
        },
        doorDamageBaeten: {
            calendar: 'baeten'
        },
        lockBaeten: {
            calendar: 'baeten'
        },
        groundFaultBaeten: {
            calendar: 'baeten'
        },
        smokeAlarmSignal: {
            calendar: 'baeten'
        },
        smokeAlarmBattery: {
            subTitle: 'ownResponsibilitySub',
            calendar: 'baeten'
        },
        gutterDamage: {
            contact: 'vanSchaik'
        },
        gutterLoose: {
            contact: 'vanSchaik'
        },
        gutterBlocked: {
            contact: 'vanSchaik'
        },
        gutterCleaning: {
            subTitle: 'gutterCleaningSub',
            contact: 'vanSchaik'
        },
        eavesDamage: {
            contact: 'vanSchaik'
        },
        eavesLoose: {
            contact: 'vanSchaik'
        },
        chimneyDamage: {
            contact: 'vanSchaik'
        },
        leadLoose: {
            contact: 'vanSchaik'
        },
        chimneyLoose: {
            contact: 'vanSchaik'
        },
        roofLeak: {
            contact: 'vanSchaik'
        },
        roofDamage: {
            contact: 'vanSchaik'
        },
        roofTileLoose: {
            contact: 'vanSchaik'
        },
        roofTileLost: {
            contact: 'vanSchaik'
        },
        roofWater: {
            contact: 'vanSchaik'
        },
        fasciaLoose: {
            contact: 'vanSchaik'
        },
        jointingLoose: {
            contact: 'vanSchaik'
        },
        brickLoose: {
            contact: 'vanSchaik'
        },
        garbage: {
            contact: 'vanSchaik'
        },
        manholeBlocked: {
            contact: 'vanSchaik'
        },
        pavementLoose: {
            contact: 'vanSchaik'
        },
        pavementDamage: {
            contact: 'vanSchaik'
        },
        vegetationBlown: {
            contact: 'vanSchaik'
        },
        vegetationGrown: {
            contact: 'vanSchaik'
        },
        wellBlocked: {
            contact: 'vanSchaik'
        },
        brickWallDamage: {
            contact: 'vanSchaik'
        },
        lawnGarbage: {
            contact: 'vanSchaik'
        },
        gateClosing: {
            contact: 'vanSchaik'
        },
        gateDamage: {
            contact: 'vanSchaik'
        },
        doorUpDown: {
            calendar: 'vanSchaik'
        },
        playsetDamage: {
            contact: 'vanSchaik'
        },
        playsetDirty: {
            contact: 'vanSchaik'
        }
    };
})(Constants || (Constants = {}));
;
var Constants;
(function (Constants) {
    'use strict';
    Constants.Calendars = {
        vanSchaik: '7C8C83A6-9653-4757-9370-8BCC8AE42A0A',
        romijnders: '4B7322F7-46FB-480B-9CD7-C02A1D5EFD7A',
        baeten: 'DCAB11BB-809E-4BFC-B711-51796B56930E',
        wesselsStucadoor: '622D5CE7-D4D9-4684-87E1-2805361DD3C5',
        HPRSchilder: '47596A69-0248-40D4-8021-D1C70CB131F9'
    };
})(Constants || (Constants = {}));
;
var Constants;
(function (Constants) {
    'use strict';
    Constants.Phones = {
        repair: '+31243817810',
        rushRepair: '+31243817810',
        romijnders: '+31246488222',
        seuren: '+31243231010',
        kone: '+319002255566',
        serviceMain: '+318009009',
        serviceWater: '+318000359',
        serviceSewer: '+31243817810',
    };
})(Constants || (Constants = {}));
;
var Constants;
(function (Constants) {
    'use strict';
    Constants.Migrations = [
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
})(Constants || (Constants = {}));
;
var App;
(function (App) {
    'use strict';
    angular
        .module('app', [
        'ionic',
        'ionic-datepicker',
        Constants.Paths.Core,
        Constants.Paths.Register,
        Constants.Paths.Welcome,
        Constants.Paths.Home,
        Constants.Paths.Info,
        Constants.Paths.Wizard,
        Constants.Paths.Appointment,
        Constants.Paths.Overview,
        Constants.Paths.Phone,
        Constants.Paths.Mail,
        Constants.Paths.Confirmation,
        Constants.Paths.Success
    ])
        .constant('$ionicLoadingConfig', { template: '<ion-spinner></ion-spinner>' })
        .config(statesConfiguration);
    window.ionic.Platform.isFullScreen = true;
    window.ionic.Platform.ready(function () {
        window.onerror = function (msg, file, line, col, error) {
            Core.Logger.log('Crash', arguments, error);
            location.reload();
            return true;
        };
        window.addEventListener('error', function (e) {
            Core.Logger.log('Crash', arguments);
            location.reload();
            return true;
        });
        angular.bootstrap(document.querySelector('body'), ['app']);
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    });
    function statesConfiguration($urlRouterProvider, $httpProvider, $ionicConfigProvider, ionicDatePickerProvider) {
        var startDate = new Date();
        startDate.setDate(startDate.getDate() + 7);
        var endDate = new Date();
        endDate.setFullYear(startDate.getFullYear() + 1);
        ionicDatePickerProvider.configDatePicker({
            inputDate: startDate,
            closeLabel: Constants.Strings.buttons.close,
            mondayFirst: false,
            weeksList: Constants.Strings.weekDays,
            monthsList: Constants.Strings.months,
            templateType: 'popup',
            from: startDate,
            to: endDate,
            showTodayButton: false,
            dateFormat: 'dd-MM-yyyy',
            closeOnSelect: true,
            disableWeekdays: [0, 6]
        });
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.text('');
        $urlRouterProvider.otherwise('/welcome');
    }
})(App || (App = {}));
var Register;
(function (Register) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Wizard, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Wizard, {
            url: '/' + Paths.Wizard + '/:key',
            templateUrl: Paths.Modules + 'wizard/templates/wizard.html',
            controller: 'wizardController'
        });
    }
})(Register || (Register = {}));
var Wizard;
(function (Wizard) {
    'use strict';
    var Strings = Constants.Strings;
    var WizardController = (function () {
        function WizardController($scope, $rootScope, $state, $stateParams, $ionicPlatform, $ionicHistory, ionicDatePicker) {
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.$ionicPlatform = $ionicPlatform;
            this.$ionicHistory = $ionicHistory;
            this.ionicDatePicker = ionicDatePicker;
            var self = this;
            var obj = Constants.Wizard[this.$stateParams.key];
            if (this.$stateParams.key === 'main') {
                Core.WizardHistory.reset();
            }
            if (obj === undefined) {
                this.$state.go('home');
                return;
            }
            var key = Core.WizardHistory.peek();
            if (key) {
                this.$scope.title = Strings.wizard[Constants.Wizard[key].title || key];
            }
            else {
                this.$scope.title = Strings.titles.wizard;
            }
            this.$scope.Strings = Strings;
            this.$scope.options = {};
            obj.options.forEach(function (option) {
                self.$scope.options[option] = Constants.Wizard[option];
            });
            this.$scope.selectOption = this.selectOption.bind(this);
            this.oldGoBack = $rootScope.$ionicGoBack;
            this.$rootScope.$ionicGoBack = this.goBack.bind(this);
            this.deregisterBack = $ionicPlatform.registerBackButtonAction(this.goBack.bind(this), 101);
            this.$scope.$on('$destroy', this.restoreBack.bind(this));
        }
        WizardController.prototype.selectOption = function (option) {
            var obj = Constants.Wizard[option];
            Core.WizardHistory.push(option);
            if (obj.options) {
                this.$state.go('wizard', { key: option });
            }
            else {
                var state = 'home';
                var selection = Core.WizardHistory.get().map(function (k) {
                    return Strings.wizard[Constants.Wizard[k].title || k];
                }).join(' - ');
                var title = Strings.wizard[Constants.Wizard[Core.WizardHistory.peek()].title || Core.WizardHistory.peek()];
                if (obj.calendar) {
                    state = 'appointment';
                }
                else if (obj.phone) {
                    state = 'phone';
                }
                else if (obj.contact) {
                    state = 'mail';
                }
                this.$state.go(state, {
                    key: option,
                    selection: selection,
                    title: title
                });
            }
        };
        WizardController.prototype.goBack = function (backCount) {
            Core.WizardHistory.pop();
            this.$ionicHistory.goBack(backCount);
        };
        WizardController.prototype.restoreBack = function () {
            this.$rootScope.$ionicGoBack = this.oldGoBack;
            this.deregisterBack();
        };
        return WizardController;
    }());
    Wizard.WizardController = WizardController;
    angular.module(Constants.Paths.Wizard).controller('wizardController', WizardController);
})(Wizard || (Wizard = {}));
var Register;
(function (Register) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Welcome, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Welcome, {
            url: '/' + Paths.Welcome,
            templateUrl: Paths.Modules + 'welcome/templates/welcome.html',
            controller: 'welcomeController'
        });
    }
})(Register || (Register = {}));
var Welcome;
(function (Welcome) {
    'use strict';
    var Strings = Constants.Strings;
    var WelcomeController = (function () {
        function WelcomeController($scope, $state, $ionicHistory, $ionicLoading) {
            this.$scope = $scope;
            this.$state = $state;
            this.$ionicHistory = $ionicHistory;
            this.$ionicLoading = $ionicLoading;
            $scope.Strings = Strings;
            var self = this;
            this.$ionicHistory.nextViewOptions({ disableAnimate: true, disableBack: true, historyRoot: true });
            this.$ionicLoading.show();
            Core.Registration.load(function (registration) {
                if (registration) {
                    registration.validate(function () {
                        self.$ionicLoading.hide();
                        self.$state.go('home', {}, { location: 'replace' });
                    }, function (response) {
                        if (response) {
                            registration.id = undefined;
                            registration.save(function () {
                                self.$ionicLoading.hide();
                                self.$state.go('home', {}, { location: 'replace' });
                            }, function () {
                                registration.clear(function () {
                                    self.$ionicLoading.hide();
                                    self.$state.go('register', {}, { location: 'replace' });
                                }, function () {
                                    self.$ionicLoading.hide();
                                    self.$state.go('register', {}, { location: 'replace' });
                                });
                            });
                        }
                        else {
                            self.$ionicLoading.hide();
                            self.$state.go('home', {}, { location: 'replace' });
                        }
                    });
                }
                else {
                    self.$ionicLoading.hide();
                }
            }, function () {
                self.$ionicLoading.hide();
            });
        }
        return WelcomeController;
    }());
    Welcome.WelcomeController = WelcomeController;
    angular.module(Constants.Paths.Welcome).controller('welcomeController', WelcomeController);
})(Welcome || (Welcome = {}));
var Success;
(function (Success) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Success, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Success, {
            url: '/' + Paths.Success,
            templateUrl: Paths.Modules + 'success/templates/success.html',
            params: {
                message: null,
                referenceCode: null,
                date: null,
                startResponseWindow: null,
                endResponseWindow: null
            },
            controller: function ($scope, $stateParams, $ionicHistory) {
                var date = new Date($stateParams.date);
                $scope.Strings = Constants.Strings;
                $scope.message = Constants.Strings.success[$stateParams.message].message
                    .replace(/%\{referenceCode\}/g, $stateParams.referenceCode)
                    .replace(/%\{date\}/g, [Constants.Strings.weekDays[date.getDay()], date.getDate(), Constants.Strings.months[date.getMonth()], date.getFullYear()].join(' '))
                    .replace(/%\{startTime\}/g, ($stateParams.startResponseWindow || '').substring(0, 5))
                    .replace(/%\{endTime\}/g, ($stateParams.endResponseWindow || '').substring(0, 5));
                $scope.title = Constants.Strings.success[$stateParams.message].title;
                $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
            }
        });
    }
})(Success || (Success = {}));
var Register;
(function (Register) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Register, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Register, {
            url: '/' + Paths.Register,
            templateUrl: Paths.Modules + 'register/templates/register.html',
            controller: 'registerController'
        });
    }
})(Register || (Register = {}));
var Register;
(function (Register) {
    'use strict';
    var Strings = Constants.Strings;
    var RegisterController = (function () {
        function RegisterController($scope, $ionicPopup, $state, $ionicHistory, $ionicLoading) {
            this.$scope = $scope;
            this.$ionicPopup = $ionicPopup;
            this.$state = $state;
            this.$ionicHistory = $ionicHistory;
            this.$ionicLoading = $ionicLoading;
            var self = this;
            this.registration = new Core.Registration();
            this.$scope.hasRegistration = false;
            Core.Registration.load(function (registration) {
                self.registration = registration;
                self.$scope.hasRegistration = (registration != undefined);
                self.$scope.registration = self.registration;
            }, function () {
            });
            $scope.Strings = Strings;
            $scope.submitForm = this.submitForm.bind(this);
            $scope.skipForm = this.skipForm.bind(this);
        }
        RegisterController.prototype.submitForm = function (data) {
            var self = this;
            if (data && data.zipcode) {
                data.zipcode = data.zipcode.replace(/\s/g, '').toUpperCase();
            }
            var registration = new Core.Registration(data);
            this.$ionicLoading.show();
            registration.save(function (response) {
                registration.stash(function () {
                    self.$ionicLoading.hide();
                    self.$ionicHistory.nextViewOptions({ disableAnimate: true, disableBack: true, historyRoot: true });
                    self.$state.go('home', {}, { location: 'replace' });
                }, function () {
                    self.$ionicLoading.hide();
                    var message = Strings.errors.registrationDatabase;
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: message,
                        buttons: [{ text: 'OK' }]
                    });
                });
            }, function (response) {
                self.$ionicLoading.hide();
                var message = Strings.errors.registrationNetwork;
                if (registration.errors.length > 0) {
                    message = registration.errors[0].message;
                }
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: message,
                    buttons: [{ text: 'OK' }]
                });
            });
        };
        RegisterController.prototype.skipForm = function () {
            this.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
            this.$state.go('home', {}, { location: 'replace' });
        };
        return RegisterController;
    }());
    Register.RegisterController = RegisterController;
    angular.module(Constants.Paths.Register).controller('registerController', RegisterController);
})(Register || (Register = {}));
var Phone;
(function (Phone) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Phone, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Phone, {
            url: '/' + Paths.Phone,
            params: {
                key: null,
                selection: null,
                title: null
            },
            templateUrl: Paths.Modules + 'phone/templates/phone.html',
            controller: function ($scope, $stateParams, $state, $ionicHistory) {
                $scope.Strings = Constants.Strings;
                $scope.title = $stateParams.title;
                $scope.message = Constants.Strings.phone[$stateParams.key];
                $scope.selection = $stateParams.selection;
                $scope.number = Constants.Phones[Constants.Wizard[$stateParams.key].phone];
                $scope.goHome = function () {
                    $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                    $state.go('home', {}, { location: 'replace' });
                };
            }
        });
    }
})(Phone || (Phone = {}));
var Overview;
(function (Overview) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Overview, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Overview, {
            url: '/' + Paths.Overview,
            templateUrl: Paths.Modules + 'overview/templates/overview.html',
            controller: 'overviewController'
        });
    }
})(Overview || (Overview = {}));
var overview;
(function (overview) {
    'use strict';
    var Strings = Constants.Strings;
    var OverviewController = (function () {
        function OverviewController($scope, $state, $ionicHistory, $ionicPopup, $ionicLoading) {
            this.$scope = $scope;
            this.$state = $state;
            this.$ionicHistory = $ionicHistory;
            this.$ionicPopup = $ionicPopup;
            this.$ionicLoading = $ionicLoading;
            $scope.Strings = Strings;
            $scope.selectAppointment = this.selectAppointment.bind(this);
            var self = this;
            $ionicLoading.show();
            if (navigator.connection.type == Connection.NONE) {
                Core.Appointment.load(function (appointments) {
                    self.$scope.appointments = OverviewController.filterAppointments(appointments);
                    self.$ionicLoading.hide();
                }, function () {
                    self.$ionicLoading.hide();
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: Strings.errors.overviewDatabase,
                        buttons: [{ text: 'OK' }]
                    });
                    self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                    self.$state.go('home', {}, { location: 'replace' });
                });
            }
            else {
                Core.Registration.load(function (registration) {
                    Core.Appointment.fetch(registration.id, function (appointments, response) {
                        self.$ionicLoading.hide();
                        self.$scope.appointments = OverviewController.filterAppointments(appointments);
                    }, function (response) {
                        self.$ionicLoading.hide();
                        self.$ionicPopup.show({
                            title: Strings.titles.error,
                            template: Strings.errors.overviewNetwork,
                            buttons: [{ text: 'OK' }]
                        });
                        self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                        self.$state.go('home', {}, { location: 'replace' });
                    });
                }, function () {
                    self.$ionicLoading.hide();
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: Strings.errors.overviewDatabase,
                        buttons: [{ text: 'OK' }]
                    });
                    self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                    self.$state.go('home', {}, { location: 'replace' });
                });
            }
        }
        OverviewController.prototype.selectAppointment = function (appointment, index) {
            var self = this;
            this.$ionicPopup.show({
                title: Strings.titles.appointment,
                template: Strings.messages.appointmentOptions,
                buttons: [
                    {
                        text: Strings.buttons.cancel,
                        type: 'button-assertive',
                        onTap: function () {
                            self.$ionicLoading.show();
                            appointment.cancel(function () {
                                appointment.remove(function () {
                                    self.$scope.appointments.splice(index, 1);
                                    self.$ionicLoading.hide();
                                }, function () {
                                    self.$ionicLoading.hide();
                                    self.$ionicPopup.show({
                                        title: Strings.titles.error,
                                        template: Strings.errors.cancelDatabase,
                                        buttons: [{ text: 'OK' }]
                                    });
                                    self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                                    self.$state.go('home', {}, { location: 'replace' });
                                });
                            }, function () {
                                self.$ionicLoading.hide();
                                self.$ionicPopup.show({
                                    title: Strings.titles.error,
                                    template: Strings.errors.cancelNetwork,
                                    buttons: [{ text: 'OK' }]
                                });
                            });
                        }
                    },
                    { text: Strings.buttons.back }
                ]
            });
        };
        OverviewController.filterAppointments = function (appointments) {
            return appointments.filter(function (appointment) {
                return (appointment.startDateTime.getTime() > new Date().setHours(0, 0, 0, 0) ||
                    appointment.startDateTime.getTime() == 0);
            });
        };
        return OverviewController;
    }());
    overview.OverviewController = OverviewController;
    angular.module(Constants.Paths.Welcome).controller('overviewController', OverviewController);
})(overview || (overview = {}));
var Mail;
(function (Mail) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Mail, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
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
})(Mail || (Mail = {}));
var Mail;
(function (Mail) {
    'use strict';
    var Strings = Constants.Strings;
    var MailController = (function () {
        function MailController($scope, $state, $stateParams, $ionicHistory, $ionicPopup, $ionicLoading) {
            this.$scope = $scope;
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.$ionicHistory = $ionicHistory;
            this.$ionicPopup = $ionicPopup;
            this.$ionicLoading = $ionicLoading;
            var self = this;
            this.$scope.Strings = Strings;
            this.$scope.title = this.$stateParams.title;
            this.$scope.selection = this.$stateParams.selection;
            this.$scope.hasPhone = true;
            this.$scope.addPhoto = this.addPhoto.bind(this);
            this.$scope.createMail = this.createMail.bind(this);
            this.appointment = new Core.Appointment();
            Core.Registration.load(function (registration) {
                self.$scope.hasPhone = (registration.phone != undefined);
            }, function () {
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.appointmentDatabase,
                    buttons: [{ text: 'OK' }]
                });
                self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                self.$state.go('home', {}, { location: 'replace' });
            });
        }
        MailController.prototype.addPhoto = function () {
            var self = this;
            this.$ionicLoading.show();
            window.navigator.camera.getPicture(function (data) {
                self.$ionicLoading.hide();
                self.appointment.image = data;
                self.$scope.image = data;
            }, function (message) {
                self.$ionicLoading.hide();
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: message,
                    buttons: [{ text: 'OK' }]
                });
            }, {
                quality: 25,
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 640,
                targetWidth: 640
            });
        };
        MailController.prototype.createMail = function (notes, image, phone) {
            var self = this;
            var calendar = Constants.Wizard[this.$stateParams.key].contact;
            this.appointment.calendarId = Constants.Calendars[calendar];
            this.appointment.location = this.$stateParams.selection;
            this.appointment.notes = notes;
            this.$ionicLoading.show();
            Core.Registration.load(function (registration) {
                self.appointment.registrationId = registration.id;
                if (registration.phone) {
                    self.confirmAppointment(notes, image);
                }
                else if (phone) {
                    self.saveRegistration(registration, phone, notes, image);
                }
                else {
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: Strings.errors.noPhone,
                        buttons: [{ text: 'OK' }]
                    });
                }
            }, function () {
                self.$ionicLoading.hide();
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.appointmentDatabase,
                    buttons: [{ text: 'OK' }]
                });
            });
        };
        MailController.prototype.saveRegistration = function (registration, phone, notes, image) {
            var self = this;
            registration.phone = phone;
            registration.save(function () {
                registration.stash(function () {
                    self.confirmAppointment(notes, image);
                }, function () {
                    self.$ionicLoading.hide();
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: Strings.errors.appointmentDatabase,
                        buttons: [{ text: 'OK' }]
                    });
                });
            }, function () {
                self.$ionicLoading.hide();
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.appointmentNetwork,
                    buttons: [{ text: 'OK' }]
                });
            });
        };
        MailController.prototype.confirmAppointment = function (notes, image) {
            var calendar = Constants.Wizard[this.$stateParams.key].calendar;
            this.$ionicLoading.hide();
            this.$state.go('confirmation', {
                message: 'couldNotBePlanned',
                calendar: calendar,
                location: this.$stateParams.selection,
                notes: notes,
                image: image
            }, { location: 'replace' });
        };
        return MailController;
    }());
    Mail.MailController = MailController;
    angular.module(Constants.Paths.Mail).controller('mailController', MailController);
})(Mail || (Mail = {}));
var Info;
(function (Info) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Info, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Info, {
            url: '/' + Paths.Info,
            templateUrl: Paths.Modules + 'info/templates/info.html',
            controller: function ($scope) {
                $scope.Strings = Constants.Strings;
            }
        });
    }
})(Info || (Info = {}));
var Home;
(function (Home) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Home, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Home, {
            url: '/' + Paths.Home,
            templateUrl: Paths.Modules + 'home/templates/home.html',
            controller: 'homeController'
        });
    }
})(Home || (Home = {}));
var Home;
(function (Home) {
    'use strict';
    var Strings = Constants.Strings;
    var HomeController = (function () {
        function HomeController($scope, $ionicPopup, $state) {
            this.$scope = $scope;
            this.$ionicPopup = $ionicPopup;
            this.$state = $state;
            this.$scope.missingRegistration = true;
            $scope.Phones = Constants.Phones;
            $scope.Strings = Strings;
            $scope.startWizard = this.startWizard.bind(this);
            $scope.showOverview = this.showOverview.bind(this);
            this.checkRegistration();
            $scope.$on("$ionicView.beforeEnter", this.checkRegistration.bind(this));
        }
        HomeController.prototype.checkRegistration = function () {
            var self = this;
            Core.Registration.load(function (registration) {
                self.$scope.missingRegistration = (registration === undefined);
            }, function () {
                self.$scope.missingRegistration = true;
            });
        };
        HomeController.prototype.startWizard = function () {
            var self = this;
            if (!this.$scope.missingRegistration) {
                this.$state.go('wizard', { key: 'main' });
            }
            else {
                this.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.noRegistration,
                    buttons: [{ text: 'OK', onTap: function () { self.$state.go('register'); } }]
                });
            }
        };
        HomeController.prototype.showOverview = function () {
            var self = this;
            if (!this.$scope.missingRegistration) {
                this.$state.go('overview');
            }
            else {
                this.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.noRegistration,
                    buttons: [{ text: 'OK', onTap: function () { self.$state.go('register'); } }]
                });
            }
        };
        return HomeController;
    }());
    Home.HomeController = HomeController;
    angular.module(Constants.Paths.Home).controller('homeController', HomeController);
})(Home || (Home = {}));
var Core;
(function (Core) {
    'use strict';
    angular.module(Constants.Paths.Core, []);
})(Core || (Core = {}));
var Core;
(function (Core) {
    'use strict';
})(Core || (Core = {}));
var Core;
(function (Core) {
    'use strict';
})(Core || (Core = {}));
var Core;
(function (Core) {
    'use strict';
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Appointment = (function () {
        function Appointment(appointment) {
            if (appointment) {
                this.setAttributes(appointment);
            }
            this.errors = [];
        }
        Appointment.prototype.save = function (successCallback, errorCallback) {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
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
            }).then(function (response) {
                if (response.data.success) {
                    self.setAttributes(response.data.returnValue);
                    self.errors = [];
                    successCallback(response);
                }
                else {
                    self.errors = response.data.errors;
                    ;
                    errorCallback(response);
                }
            }, function () {
                Core.Logger.log('Create Appointment Network', arguments);
                errorCallback(undefined);
            });
        };
        Appointment.prototype.stash = function (successCallback, errorCallback) {
            var self = this;
            Core.DatabaseFactory.get(function (tx) {
                tx.executeSql('INSERT OR REPLACE INTO appointments (id, registrationId, calendarId, calendarEventId, startDateTime, endDateTime, title, location, notes, image, referenceCode, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [self.id, self.registrationId, self.calendarId, self.calendarEventId, self.startDateTime.getTime(), self.endDateTime.getTime(), self.title, self.location, self.notes, self.image, self.referenceCode, self.status], function (tx, res) {
                    if (res.rowsAffected == 1) {
                        successCallback();
                    }
                    else {
                        errorCallback();
                    }
                }, function () {
                    Core.Logger.log('Save Appointment Query', arguments);
                    errorCallback();
                });
            }, function () {
                Core.Logger.log('Save Appointment Database', arguments);
                errorCallback();
            });
        };
        Appointment.prototype.cancel = function (successCallback, errorCallback) {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
            $http({
                method: 'DELETE',
                url: Constants.Api + 'Calendars/' + this.id,
                headers: Constants.Headers
            }).then(function (response) {
                if (response.data.success) {
                    successCallback(response);
                }
                else {
                    errorCallback(response);
                }
            }, function () {
                Core.Logger.log('Cancel Appointment Network', arguments);
                errorCallback(undefined);
            });
        };
        Appointment.prototype.remove = function (successCallback, errorCallback) {
            var self = this;
            Core.DatabaseFactory.get(function (tx) {
                tx.executeSql('DELETE FROM appointments WHERE id = ?', [self.id], function (tx, res) {
                    if (res.rowsAffected == 1) {
                        successCallback();
                    }
                    else {
                        errorCallback();
                    }
                }, function () {
                    Core.Logger.log('Remove Appointment Query', arguments);
                    errorCallback();
                });
            }, function () {
                Core.Logger.log('Remove Appointment Database', arguments);
                errorCallback();
            });
        };
        Appointment.fetch = function (registrationId, successCallback, errorCallback) {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
            $http({
                method: 'GET',
                url: Constants.Api + 'registrations/' + registrationId + '/events',
                headers: Constants.Headers
            }).then(function (response) {
                var saved = 0;
                var hasError = false;
                var appointments = [];
                if (response.data.success) {
                    if (response.data.returnValue.length === 0) {
                        successCallback([], response);
                        return;
                    }
                    for (var _i = 0, _a = response.data.returnValue; _i < _a.length; _i++) {
                        var val = _a[_i];
                        var appointment = new Appointment(val);
                        appointments.push(appointment);
                        appointment.stash(function () {
                            if (response.data.returnValue.length == ++saved) {
                                if (hasError) {
                                    errorCallback(response);
                                }
                                else {
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
                }
                else {
                    errorCallback(response);
                }
            }, function () {
                Core.Logger.log('Fetch Appointments Network', arguments);
                errorCallback(undefined);
            });
        };
        Appointment.load = function (successCallback, errorCallback) {
            var self = this;
            Core.DatabaseFactory.get(function (tx) {
                tx.executeSql('SELECT * FROM appointments', [], function (tx, res) {
                    if (res.rows.length > 0) {
                        var appointments = [];
                        for (var i = 0; i < res.rows.length; i++) {
                            var item = res.rows.item(i);
                            item.startDateTime = new Date(parseInt(item.startDateTime));
                            item.endDateTime = new Date(parseInt(item.endDateTime));
                            appointments.push(new Appointment(item));
                        }
                        appointments.sort(self.compare);
                        successCallback(appointments);
                    }
                    else {
                        successCallback([]);
                    }
                }, function () {
                    Core.Logger.log('Load Appointments Query', arguments);
                    errorCallback();
                });
            }, function () {
                Core.Logger.log('Load Appointments Database', arguments);
                errorCallback();
            });
        };
        Appointment.prototype.setAttributes = function (appointment) {
            var simple_attributes = ['id', 'registrationId', 'calendarId', 'calendarEventId', 'startResponseWindow', 'endResponseWindow', 'title', 'location', 'notes', 'image', 'referenceCode', 'status'];
            for (var i = 0; i < simple_attributes.length; i++) {
                var key = simple_attributes[i];
                if (appointment[key] && appointment[key] != 'undefined') {
                    this[key] = appointment[key];
                }
            }
            var date_attributes = ['startDateTime', 'endDateTime'];
            for (var i = 0; i < date_attributes.length; i++) {
                var key = date_attributes[i];
                if (appointment[key] && appointment[key] != 'undefined') {
                    this[key] = new Date(appointment[key]);
                }
                else {
                    this[key] = new Date(0);
                }
            }
        };
        Appointment.compare = function (a, b) {
            if (a.startDateTime.getTime() === b.startDateTime.getTime()) {
                return 0;
            }
            else if (a.startDateTime.getTime() === 0) {
                return 1;
            }
            else if (b.startDateTime.getTime() === 0) {
                return -1;
            }
            else if (a.startDateTime.getTime() > b.startDateTime.getTime()) {
                return 1;
            }
            else {
                return -1;
            }
        };
        Appointment.clearExcept = function (appointments) {
            var self = this;
            var ids = appointments.map(function (appointment) { return appointment.id; });
            Core.DatabaseFactory.get(function (tx) {
                tx.executeSql('DELETE FROM appointments WHERE id NOT IN (' + ids.map(function () { return '?'; }).join(', ') + ')', ids, undefined, function () {
                    Core.Logger.log('Clear Appointments Query', arguments);
                });
            }, function () {
                Core.Logger.log('Clear Appointments Database', arguments);
            });
        };
        return Appointment;
    }());
    Core.Appointment = Appointment;
})(Core || (Core = {}));
var Core;
(function (Core) {
    var DatabaseFactory = (function () {
        function DatabaseFactory() {
        }
        DatabaseFactory.get = function (successCallback, errorCallback) {
            var self = this;
            var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            var db;
            if (isCordovaApp) {
                db = window.sqlitePlugin.openDatabase({ name: 'vanschaik.db', location: 'default', androidDatabaseImplementation: 2 });
            }
            else {
                db = window.openDatabase('vanschaik', '1.0', 'Van Schaik App database', 2 * 1024 * 1024);
            }
            db.transaction(function (tx) {
                self.prepare(tx, successCallback, errorCallback);
            });
        };
        DatabaseFactory.prepare = function (tx, successCallback, errorCallback) {
            var self = this;
            tx.executeSql('CREATE TABLE IF NOT EXISTS migrations (version integer primary key asc, sql text)', [], function (tx) {
                tx.executeSql('SELECT version FROM migrations', [], function (tx, results) {
                    var current_version = results.rows.length > 0 ? results.rows.item(results.rows.length - 1)['version'] : -1;
                    self.migrate(tx, current_version, successCallback, errorCallback);
                }, errorCallback);
            }, errorCallback);
        };
        DatabaseFactory.migrate = function (tx, current_version, successCallback, errorCallback) {
            var self = this;
            if (current_version >= Constants.Migrations.length - 1) {
                successCallback(tx);
            }
            else {
                var new_version = current_version + 1;
                tx.executeSql(Constants.Migrations[new_version], [], function (tx) {
                    tx.executeSql('INSERT INTO migrations (version, sql) VALUES (?, ?)', [new_version, Constants.Migrations[new_version]], function (tx) {
                        self.migrate(tx, new_version, successCallback, errorCallback);
                    }, errorCallback);
                }, errorCallback);
            }
        };
        return DatabaseFactory;
    }());
    Core.DatabaseFactory = DatabaseFactory;
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Logger = (function () {
        function Logger() {
        }
        Logger.log = function (label, data, error) {
            var $http = angular.injector(["ng"]).get("$http");
            var tracer;
            if (error) {
                tracer = window.StackTrace.fromError(error);
            }
            else {
                tracer = window.StackTrace.get();
            }
            tracer.then(function (stackframes) {
                var trace = stackframes.map(function (sf) { return sf.toString(); }).join('\n');
                $http({
                    method: 'POST',
                    url: Constants.Api + 'Log',
                    data: { message: [label, JSON.stringify(data), trace].join('\n') },
                    headers: Constants.Headers
                });
            });
        };
        return Logger;
    }());
    Core.Logger = Logger;
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Registration = (function () {
        function Registration(registration) {
            if (registration) {
                this.setAttributes(registration);
            }
            this.errors = [];
            if (!this.deviceId) {
                this.deviceId = window.device.uuid;
            }
        }
        Registration.prototype.save = function (successCallback, errorCallback) {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
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
            }).then(function (response) {
                if (response.data.success) {
                    self.id = response.data.returnValue.id;
                    self.errors = [];
                    successCallback(response);
                }
                else {
                    self.errors = response.data.errors;
                    ;
                    errorCallback(response);
                }
            }, function () {
                Core.Logger.log('Create Registration Network', arguments);
                errorCallback(undefined);
            });
        };
        Registration.prototype.stash = function (successCallback, errorCallback) {
            var self = this;
            Core.DatabaseFactory.get(function (tx) {
                tx.executeSql('DELETE FROM registrations', [], undefined, function () {
                    Core.Logger.log('Delete Registration Query', arguments);
                });
                tx.executeSql('INSERT INTO registrations (id, deviceId, firstName, surname, street, houseNumber, zipcode, city, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [self.id, self.deviceId, self.firstName, self.surname, self.street, self.houseNumber, self.zipcode, self.city, self.phone, self.email], successCallback, function () {
                    Core.Logger.log('Save Registration Query', arguments);
                    errorCallback();
                });
            }, function () {
                Core.Logger.log('Save Registration Database', arguments);
                errorCallback();
            });
        };
        Registration.prototype.validate = function (successCallback, errorCallback) {
            var self = this;
            var $http = angular.injector(["ng"]).get("$http");
            $http({
                method: 'GET',
                url: Constants.Api + 'Registrations/' + this.id,
                headers: Constants.Headers
            }).then(function (response) {
                if (response.data.success) {
                    successCallback(response);
                }
                else {
                    errorCallback(response);
                }
            }, function () {
                Core.Logger.log('Validate Registration Network', arguments);
                errorCallback(undefined);
            });
        };
        Registration.prototype.clear = function (successCallback, errorCallback) {
            Core.DatabaseFactory.get(function (tx) {
                tx.executeSql('DELETE FROM registrations', [], successCallback, function () {
                    Core.Logger.log('Clear Registration Query', arguments);
                    errorCallback();
                });
            }, function () {
                Core.Logger.log('Clear Registration Database', arguments);
                errorCallback();
            });
        };
        Registration.load = function (successCallback, errorCallback) {
            Core.DatabaseFactory.get(function (tx) {
                tx.executeSql('SELECT * FROM registrations', [], function (tx, res) {
                    if (res.rows.length > 0) {
                        successCallback(new Registration(res.rows.item(0)));
                    }
                    else {
                        successCallback(undefined);
                    }
                }, function () {
                    Core.Logger.log('Load Registration Query', arguments);
                    errorCallback();
                });
            }, function () {
                Core.Logger.log('Load Registration Database', arguments);
                errorCallback();
            });
        };
        Registration.prototype.setAttributes = function (registration) {
            var simple_attributes = ['id', 'deviceId', 'firstName', 'surname', 'street', 'houseNumber', 'zipcode', 'city', 'phone', 'email'];
            for (var i = 0; i < simple_attributes.length; i++) {
                var key = simple_attributes[i];
                if (registration[key] && registration[key] != 'undefined') {
                    this[key] = registration[key];
                }
            }
        };
        return Registration;
    }());
    Core.Registration = Registration;
})(Core || (Core = {}));
var Core;
(function (Core) {
    var WizardHistory = (function () {
        function WizardHistory() {
        }
        WizardHistory.push = function (key) {
            this.historyList.push(key);
        };
        WizardHistory.pop = function () {
            return this.historyList.pop();
        };
        WizardHistory.peek = function () {
            return this.historyList[this.historyList.length - 1];
        };
        WizardHistory.get = function () {
            return this.historyList.slice(0);
        };
        WizardHistory.reset = function () {
            this.historyList = [];
        };
        WizardHistory.historyList = [];
        return WizardHistory;
    }());
    Core.WizardHistory = WizardHistory;
})(Core || (Core = {}));
var Confirmation;
(function (Confirmation) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Confirmation, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Confirmation, {
            cache: false,
            url: '/' + Paths.Confirmation,
            params: {
                message: null,
                calendar: null,
                date: null,
                time: null,
                location: null,
                notes: null,
                image: null
            },
            templateUrl: Paths.Modules + 'confirmation/templates/confirmation.html',
            controller: 'confirmationController'
        });
    }
})(Confirmation || (Confirmation = {}));
var Confirmation;
(function (Confirmation) {
    'use strict';
    var Strings = Constants.Strings;
    var ConfirmationController = (function () {
        function ConfirmationController($scope, $state, $stateParams, $ionicHistory, $ionicPopup, $ionicLoading) {
            this.$scope = $scope;
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.$ionicHistory = $ionicHistory;
            this.$ionicPopup = $ionicPopup;
            this.$ionicLoading = $ionicLoading;
            this.$scope.Strings = Strings;
            this.$scope.createAppointment = this.createAppointment.bind(this);
            console.log(this.$stateParams);
            this.$scope.location = this.$stateParams.location;
            if (this.$stateParams.date) {
                this.$scope.hasDate = true;
                this.$scope.dateString = [
                    Constants.Strings.weekDays[this.$stateParams.date.getDay()],
                    this.$stateParams.date.getDate(),
                    Constants.Strings.months[this.$stateParams.date.getMonth()],
                    this.$stateParams.date.getFullYear()
                ].join(' ');
                this.$scope.timeString =
                    this.$stateParams.time.startResponseWindow.substring(0, 5) +
                        ' - ' + this.$stateParams.time.endResponseWindow.substring(0, 5);
            }
            else {
                this.$scope.hasDate = false;
            }
            this.$scope.notes = this.$stateParams.notes;
            if (this.$stateParams.image) {
                this.$scope.hasImage = true;
                this.$scope.image = this.$stateParams.image;
            }
            else {
                this.$scope.hasImage = false;
            }
            this.appointment = new Core.Appointment();
        }
        ConfirmationController.prototype.createAppointment = function () {
            var self = this;
            var calendar = this.$stateParams.calendar;
            if (this.$stateParams.date) {
                var date = new Date(this.$stateParams.date.getTime());
                var times = this.$stateParams.time.startTime.split(':');
                date.setHours(parseInt(times[0]));
                date.setMinutes(parseInt(times[1]));
                this.appointment.startDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
            }
            this.appointment.calendarId = Constants.Calendars[calendar];
            this.appointment.location = this.$stateParams.location;
            this.appointment.notes = this.$stateParams.notes;
            if (this.$stateParams.image) {
                this.appointment.image = this.$stateParams.image;
            }
            this.$ionicLoading.show();
            Core.Registration.load(function (registration) {
                self.appointment.registrationId = registration.id;
                self.appointment.save(function () {
                    self.appointment.stash(function () {
                        self.$ionicLoading.hide();
                        Core.WizardHistory.reset();
                        self.$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                        self.$state.go('success', {
                            message: self.$stateParams.message,
                            referenceCode: self.appointment.referenceCode,
                            date: self.appointment.startDateTime.toISOString(),
                            startResponseWindow: self.appointment.startResponseWindow,
                            endResponseWindow: self.appointment.endResponseWindow
                        }, { location: 'replace' });
                    }, function () {
                        self.$ionicLoading.hide();
                        self.$ionicPopup.show({
                            title: Strings.titles.error,
                            template: Strings.errors.appointmentDatabase,
                            buttons: [{ text: 'OK' }]
                        });
                    });
                }, function () {
                    self.$ionicLoading.hide();
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: Strings.errors.appointmentNetwork,
                        buttons: [{ text: 'OK' }]
                    });
                });
            }, function () {
                self.$ionicLoading.hide();
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.appointmentDatabase,
                    buttons: [{ text: 'OK' }]
                });
            });
        };
        return ConfirmationController;
    }());
    Confirmation.ConfirmationController = ConfirmationController;
    angular.module(Constants.Paths.Confirmation).controller('confirmationController', ConfirmationController);
})(Confirmation || (Confirmation = {}));
var Appointment;
(function (Appointment) {
    'use strict';
    var Paths = Constants.Paths;
    angular.module(Paths.Appointment, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
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
})(Appointment || (Appointment = {}));
var Appointment;
(function (Appointment) {
    'use strict';
    var Strings = Constants.Strings;
    var AppointmentController = (function () {
        function AppointmentController($scope, $state, $stateParams, $http, $ionicHistory, $ionicPopup, $ionicLoading, ionicDatePicker) {
            this.$scope = $scope;
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.$http = $http;
            this.$ionicHistory = $ionicHistory;
            this.$ionicPopup = $ionicPopup;
            this.$ionicLoading = $ionicLoading;
            this.ionicDatePicker = ionicDatePicker;
            this.$scope.Strings = Strings;
            this.$scope.title = this.$stateParams.title;
            this.$scope.selection = this.$stateParams.selection;
            this.$scope.hasTimes = false;
            this.$scope.times = [];
            this.$scope.openDatePicker = this.openDatePicker.bind(this);
            this.$scope.addPhoto = this.addPhoto.bind(this);
            this.$scope.confirmAppointment = this.confirmAppointment.bind(this);
        }
        AppointmentController.prototype.openDatePicker = function () {
            this.ionicDatePicker.openDatePicker({
                callback: this.selectDate.bind(this)
            });
        };
        AppointmentController.prototype.selectDate = function (epoch) {
            var date = new Date(epoch);
            var self = this;
            var calendar = Constants.Wizard[this.$stateParams.key].calendar;
            this.$scope.date = date;
            this.$scope.hasTimes = false;
            this.$ionicLoading.show();
            this.$http({
                method: 'GET',
                url: Constants.Api + 'calendars/available-timeslots/' + [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-') + '/' + Constants.Calendars[calendar],
                headers: Constants.Headers
            }).then(function (response) {
                self.$ionicLoading.hide();
                if (response.data.success) {
                    if (response.data.returnValue.length > 0) {
                        self.$scope.hasTimes = true;
                        self.$scope.times = response.data.returnValue;
                        self.$scope.time = response.data.returnValue[0];
                    }
                    else {
                        self.$ionicPopup.show({
                            title: Strings.titles.error,
                            template: Strings.errors.noTimesAvailable,
                            buttons: [{ text: 'OK' }]
                        });
                    }
                }
                else {
                    self.$ionicPopup.show({
                        title: Strings.titles.error,
                        template: Strings.errors.noTimesReceived,
                        buttons: [{ text: 'OK' }]
                    });
                }
            }, function () {
                Core.Logger.log('Appointment Timeslots Network', arguments);
                self.$ionicLoading.hide();
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.noTimesReceived,
                    buttons: [{ text: 'OK' }]
                });
            });
        };
        AppointmentController.prototype.addPhoto = function () {
            var self = this;
            this.$ionicLoading.show();
            window.navigator.camera.getPicture(function (data) {
                self.$ionicLoading.hide();
                self.$scope.image = data;
            }, function (message) {
                Core.Logger;
                self.$ionicLoading.hide();
                self.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: message,
                    buttons: [{ text: 'OK' }]
                });
            }, {
                quality: 25,
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 640,
                targetWidth: 640
            });
        };
        AppointmentController.prototype.confirmAppointment = function (date, time, notes, image) {
            var calendar = Constants.Wizard[this.$stateParams.key].calendar;
            if (date && time) {
                this.$state.go('confirmation', {
                    message: 'couldBePlanned',
                    calendar: calendar,
                    location: this.$stateParams.selection,
                    date: date,
                    time: time,
                    notes: notes,
                    image: image
                }, { location: 'replace' });
            }
            else {
                this.$ionicPopup.show({
                    title: Strings.titles.error,
                    template: Strings.errors.noDateTime,
                    buttons: [{ text: 'OK' }]
                });
            }
        };
        return AppointmentController;
    }());
    Appointment.AppointmentController = AppointmentController;
    angular.module(Constants.Paths.Appointment).controller('appointmentController', AppointmentController);
})(Appointment || (Appointment = {}));
//# sourceMappingURL=app.js.map