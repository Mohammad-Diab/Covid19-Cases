const db = require("../db");
const config = require("../config.json");

module.exports = logic = {
    getCountriesList: async function(pageNumber, filter, sortBy) {
        pageNumber = pageNumber < 0 ? 1 : pageNumber;
        let result = {};
        let resultCount = await db.getCountriesListCount(filter);
        result.count = resultCount;
        result.numberOfPages = Math.ceil(resultCount / config.rowPerPage);
        if (result.count) {
            let dbResult = await db.getCountriesList(pageNumber, filter, sortBy);
            result.data = dbResult.map((it) => {
                return {
                    id: it.Id,
                    country: it.Country,
                    region: it.Region,
                    confirmedCases: it.Confirmed,
                    recoveredCases: it.Recovered,
                    deathCases: it.Death,
                };
            });
        } else {
            result.data = [];
        }
        return result
    },

    getCountryDetails: async function(countryId, pageNumber) {
        pageNumber = pageNumber < 0 ? 1 : pageNumber;
        let result = {};
        let resultCount = await db.getCountryDetailsCount(countryId);

        result.count = resultCount;
        result.numberOfPages = Math.ceil(resultCount / config.rowPerPage);

        if (result.count) {
            let dbResult = await db.getCountryDetails(countryId, pageNumber);
            result.data = dbResult.map((it, idx) => {
                return {
                    id: idx,
                    date: stringToDate(it.Date),
                    confirmedCases: it.Confirmed,
                    recoveredCases: it.Recovered,
                    deathCases: it.Death,
                };
            });
        } else {
            result.data = [];
        }
        return result;

    },

    getCountryCasesCount: async function(countryId) {
        return await db.getCountryCasesCount(countryId);
    },

    getAllRegions: async function() {
        return await db.getAllRegions();
    },
};

function stringToDate(str) {
    return `${str.substr(6,2)}/${str.substr(4,2)}/${str.substr(0,4)}`;
}