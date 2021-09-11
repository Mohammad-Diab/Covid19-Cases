import axios from 'axios'
import config from './../config.json'
var request = {
    get: async function(api) {
        try {
            let url = new URL(api, config.server);
            const response = await axios.get(url.href);
            debugger
            if (response.data.code === 2000) {
                alert(response.data.message);
                return null;
            } else {
                return response.data;
            }
        } catch (error) {
            alert(error);
        }
    }
}

export default request;