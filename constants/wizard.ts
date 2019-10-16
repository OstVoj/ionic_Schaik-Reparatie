module Constants {
		'use strict';

		// Maps the structure of the repair wizard. A flat structure is used to allow reuse of specific parts for multiple locations.

		// Each entry must have one, and only one, of the following keys:
		// - options: creates a menu consisting of other entries
		// - calendar: end node that creates an appointment in the specified calendar
		// - contact: end node that creates a contact request in the specified calendar
		// - phone: end node that instructs the user to call the specified number
		// Additionally each entry can have the following keys:
		// - title: define if the title is not the same as the key of the entry, should be a key in Strings.wizard.
		// - subTitle: define if a sub title should be shown, should be a key in Strings.wizard.

		export let Wizard = {
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
};
