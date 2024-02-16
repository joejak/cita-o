import { v4 as uuidv4 } from 'uuid';

/**
 * Allocations for the specifier.
 * @typedef {Object} Allocations
 * @property {number} percent - The percentage allocation.
 * @property {number} daily - The daily allocation.
 * @property {number} weekly - The weekly allocation.
 * @property {number} monthly - The monthly allocation.
 * @property {number} yearly - The yearly allocation.
 * @property {number} extra - Extra allocation.
 */

/**
 * Represents a project object.
 * @typedef {Object} Project
 * @property {string} id - The unique identifier of the project.
 * @property {string} name - The name of the project.
 * @property {Array<string>} scenarioIDs - An array of scenario identifiers associated with the project.
 * @property {Array<string>} authorIDs - An array of authors associated with the project.
 * @property {string} stageID - The identifier of the stage the project is in.
 */

/**
 * Represents a project object.
 * @typedef {Object} Scenario
 * @property {string} id - The unique identifier of the project.
 * @property {string} name - The name of the project.
 * @property {Array<string>} phaseIDs - An array of phase identifiers associated with the project.
 */

/**
 * Represents working hours by calendar object.
 * @typedef {Object} WorkingHoursByCalendar
 * @property {string} calendarId - The identifier of the calendar.
 * @property {number} totalHours - The total working hours for the calendar.
 */

/**
 * Represents a date range object.
 * @typedef {Object} DateRange
 * @property {Date} start - The start date of the date range.
 * @property {Date} end - The end date of the date range.
 */

/**
 * Represents a holiday object.
 * @typedef {Object} Holiday
 * @property {Date} date - The date of the holiday.
 * @property {string} name - The name of the holiday.
 * @property {number} hoursOff - The number of hours off for the holiday.
 */

/**
 * Represents a calendar object.
 * @typedef {Object} Calendar
 * @property {string} id - The identifier of the calendar.
 * @property {string} name - The name of the calendar.
 * @property {Holiday[]} holidays - An array of holidays associated with the calendar.
 */


/**
 * Represents a specifier object.
 * @typedef {Object} Specifier
 * @property {string} id - The identifier of the specifier.
 * @property {string} name - The name of the specifier.
 * @property {string} role - The role of the specifier.
 * @property {string} calendar - The calendar associated with the specifier.
 * @property {Allocations[]} allocations - Allocations for the specifier.
 * @property {number} billrate - The bill rate for the specifier.
 * @property {number} costrate - The cost rate for the specifier.
 */


/**
 * Represents a phase object.
 * @typedef {Object} Phase
 * @property {string} id - The identifier of the phase.
 * @property {string} name - The name of the phase.
 * @property {Specifier[]} specifiers - An array of specifiers associated with the phase.
 * @property {DateRange[]} dateRanges - An array of date ranges for the phase.
 * @property {number} billRateBlended - The blended bill rate for the phase.
 * @property {number} costRateBlended - The blended cost rate for the phase.
 * @property {number} marginPercent - The margin percentage for the phase.
 * @property {Array.<WorkingHoursByCalendar>} workHoursByCalendar - An array of work hours by calendar.
 * @property {number} workHourTotals - The total work hours for the phase.
 * @property {number} billTotal - The total bill amount for the phase.
 * @property {number} costTotal - The total cost amount for the phase.
 * @property {number} profitTotal - The total profit amount for the phase.
 * @property {Array<string>} missingRates - An array of missing rates for the phase.
 */

/**
 * Creates a new allocation object with default values.
 * @function createAllocation
 * @returns {Allocations} A new allocation object with default values.
 */
export function createAllocation() {
	return {
		percent: 0,
		daily: 0,
		weekly: 0,
		monthly: 0,
		yearly: 0,
		extra: 0
	};
}

/**
 * Creates a new project object with default values.
 * @function createProject
 * @returns {Project} A new project object with default values.
 */
export function createProject() {
	return {
		id: uuidv4(),
		name: '',
		scenarioIDs: [],
		authorIDs: [],
		stageID: ''
	};
}

/**
 * Creates a new scenario object with default values.
 * @function createScenario
 * @returns {Scenario} A new scenario object with default values.
 */
export function createScenario() {
	return {
		id: uuidv4(),
		name: '',
		phaseIDs: []
	};
}

/**
 * Creates a new working hours by calendar object with default values.
 * @function createWorkingHoursByCalendar
 * @returns {WorkingHoursByCalendar} A new working hours by calendar object with default values.
 */
export function createWorkingHoursByCalendar() {
	return {
		calendarId: '',
		totalHours: 0
	};
}

/**
 * Creates a new date range object with default values.
 * @function createDateRange
 * @returns {DateRange} A new date range object with default values.
 */
export function createDateRange() {
	return {
		start: new Date(),
		end: new Date()
	};
}

/**
 * Creates a new holiday object with default values.
 * @function createHoliday
 * @returns {Holiday} A new holiday object with default values.
 */
export function createHoliday() {
	return {
		date: new Date(),
		name: '',
		hoursOff: 0
	};
}

/**
 * Creates a new calendar object with default values.
 * @function createCalendar
 * @returns {Calendar} A new calendar object with default values.
 */
export function createCalendar() {
	return {
		id: uuidv4(),
		name: '',
		holidays: []
	};
}

/**
 * Creates a new specifier object with default values.
 * @function createSpecifier
 * @returns {Specifier} A new specifier object with default values.
 */
export function createSpecifier() {
	return {
		id: uuidv4(),
		name: '',
		role: '',
		calendar: '',
		allocations: [],
		billrate: 0,
		costrate: 0
	};
}

/**
 * Creates a new phase object with default values.
 * @function createPhase
 * @returns {Phase} A new phase object with default values.
 */
export function createPhase() {
	return {
		id: uuidv4(),
		name: '',
		specifiers: [],
		dateRanges: [],
		billRateBlended: 0,
		costRateBlended: 0,
		marginPercent: 0,
		workHoursByCalendar: [],
		workHourTotals: 0,
		billTotal: 0,
		costTotal: 0,
		profitTotal: 0,
		missingRates: []
	};
}
