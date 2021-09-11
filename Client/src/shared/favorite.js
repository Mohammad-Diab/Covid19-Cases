import storage from './localStorage';

var favorite = {
    addtoFavorite: function(countryId, countryName) {
        let result = storage.getFromStorage('userFavorite');
        if (!result) {
            result = [];
        }
        const index = result.findIndex((it) => it.id === countryId);
        if (index === -1) {
            result.push({ id: countryId, name: countryName });
            storage.setInStorage('userFavorite', result);
        }
    },

    removefromFavorite: function(countryId) {
        let result = storage.getFromStorage('userFavorite');
        if (result) {
            const index = result.findIndex((it) => it.id === countryId);
            if (index > -1) {
                result.splice(index, 1);
                storage.setInStorage('userFavorite', result);
            }
        }
    },

    isInFavorite: function(countryId) {
        let result = storage.getFromStorage('userFavorite');
        if (result) {
            const index = result.findIndex((it) => it.id === countryId);
            if (index > -1) {
                return true;
            }
        }
        return false;
    },

    getFavoriteList: function() {
        let result = storage.getFromStorage('userFavorite');
        return result;
    }
}

export default favorite;