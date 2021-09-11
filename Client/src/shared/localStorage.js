var storage = {
    getFromStorage: function(key) {
        let result;
        if (key) {
            result = window.localStorage.getItem(key);
            result = JSON.parse(result);

        }
        return result;
    },

    setInStorage: function(key, value) {
        if (key) {
            window.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
}

export default storage;