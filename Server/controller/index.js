const logic = require('../logic');
const sortBy_enum = require('../enum/sortBy');

module.exports = async function(app, logger) {
    app.get('/getCountriesList', function(req, res) {
        let filter = req.query.filter || '';
        let pageNumber = req.query.pageNumber || 1;
        let sortBy = req.query.sortBy || sortBy_enum.country;
        logger.log({
            level: 'info',
            message: `${dateTime()}; getCountriesList is requested with these paramenters filter='${filter}' pageNumber='${pageNumber}' sortBy='${sortBy}'`
        });
        logic.getCountriesList(pageNumber, filter, sortBy).then((result) => {
            res.send(result)
        }).catch((ex) => {
            logger.log({
                level: 'error',
                message: `${dateTime()}; ${ex.message}`
            });
            res.send({
                code: 2000,
                message: ex.message
            });
        });
    });

    app.get('/getCountryDetails', function(req, res) {

        let countryId = req.query.countryId || '';
        if (!countryId) {
            logger.log({
                level: 'warn',
                message: `${dateTime()}; getCountryDetails; invalid request`
            });
            return null;
        }
        let pageNumber = req.query.pageNumber || 1;

        logger.log({
            level: 'info',
            message: `${dateTime()}; getCountryDetails is requested with these paramenters countryId=${countryId} pageNumber='${pageNumber}'`
        });

        logic.getCountryDetails(countryId, pageNumber).then((result) => {
            res.send(result)
        }).catch((ex) => {
            logger.log({
                level: 'error',
                message: `${dateTime()}; ${ex.message}`
            });
            res.send({
                code: 2000,
                message: ex.message
            });
        });
    });

    app.get('/getCountryCasesCount', function(req, res) {

        let countryId = req.query.countryId || '';
        if (!countryId) {
            logger.log({
                level: 'warn',
                message: `${dateTime()}; getCountryCasesCount; invalid request`
            });
            return null;
        }
        logger.log({
            level: 'info',
            message: `${dateTime()}; getCountryCasesCount is requested with these paramenter countryId='${countryId}'`
        });
        logic.getCountryCasesCount(countryId).then((result) => {
            res.send(result)
        }).catch((ex) => {
            logger.log({
                level: 'error',
                message: `${dateTime()}; ${ex.message}`
            });
            res.send({
                code: 2000,
                message: ex.message
            });
        });
    });

    app.get('/getAllRegions', function(req, res) {
        logger.log({
            level: 'info',
            message: `${dateTime()}; getAllRegions is requested`
        });
        logic.getAllRegions().then((result) => {
            res.send(result)
        }).catch((ex) => {
            logger.log({
                level: 'error',
                message: `${dateTime()}; ${ex.message}`
            });
            res.send({
                code: 2000,
                message: ex.message
            });
        });
    });
}

function dateTime() {
    return new Date().toISOString().
    replace(/T/, ' ').
    replace(/\..+/, '')
}