const db = require('../db');

module.exports = logic = {
    getCountriesList: async function(pageNumber, filter, sortBy) {
        pageNumber = pageNumber < 0 ? 1 : pageNumber;
        return await db.getCountriesList(pageNumber, filter, sortBy)
    },

    getCountryDetails: async function(countryId, pageNumber) {
        pageNumber = pageNumber < 0 ? 1 : pageNumber;
        return await db.getCountryDetails(countryId, pageNumber)
    },

    getCountryCasesCount: async function(countryId) {
        return await db.getCountryCasesCount(countryId)
    },

    getAllRegions: async function() {
        return await db.getAllRegions()
    }
}