const axios = require('axios');

exports.getIndiaAPI = () => {
	return axios.get('https://api.covid19india.org/data.json');
};

exports.getWorldAPI = () => {
	return axios.get('https://bing.com/covid/data');
};
