const db = require('../db');

module.exports = logic = {
    getCountriesList: async function(pageNumber, filter, sortBy) {
        pageNumber = pageNumber < 0 ? 1 : pageNumber;
        return await db.getCountriesList(pageNumber, filter, sortBy)
    }
}