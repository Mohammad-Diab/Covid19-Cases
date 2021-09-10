const logic = require('../logic');
const sortBy_enum = require('../enum/sortBy');

module.exports = async function(app) {
    app.get('/getCountriesList', function(req, res) {
        let filter = req.query.filter || '';
        let pageNumber = req.query.pageNumber || 1;
        let sortBy = req.query.sortBy || sortBy_enum.country;
        logic.getCountriesList(pageNumber, filter, sortBy).then((result) => {
            res.send(result)
        });
    });

    app.get('/getCountryDetails', function(req, res) {
        let countryId = req.query.countryId || '';
        if (!countryId) {
            // invalid request;
            return;
        }
        let pageNumber = req.query.pageNumber || 1;

        logic.getCountryDetails(countryId, pageNumber).then((result) => {
            res.send(result)
        });
    });
}