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
}