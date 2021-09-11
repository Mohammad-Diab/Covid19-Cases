import storage from '../../shared/localStorage';

var favorite = {
    addtoFavorite: function(countryId) {
        let result = storage.getFromStorage('userFavorite');
        if (!result) {
            result = [];
        }
        if (result.indexOf(countryId) < 0) {
            result.push(countryId);
            storage.setInStorage('userFavorite', result);
        }
    },

    removefromFavorite: function(countryId) {
        let result = storage.getFromStorage('userFavorite');
        if (result) {
            const index = result.indexOf(countryId);
            if (index > -1) {
                result.splice(index, 1);
                storage.setInStorage('userFavorite', result);
            }
        }
    },

    isInFavorite: function(countryId) {
        let result = storage.getFromStorage('userFavorite');
        if (result) {
            const index = result.indexOf(countryId);
            if (index > -1) {
                return true;
            }
        }
        return false;
    }
}

export default favorite;