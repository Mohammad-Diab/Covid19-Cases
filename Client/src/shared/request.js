import axios from 'axios'
import config from './../config.json'
var request = {
    get: async function(api) {
        try {
            let url = new URL(api, config.server);
            const response = await axios.get(url.href);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default request;