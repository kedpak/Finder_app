let request = require('fs');
let axios = require('axios');


getApi = () => {
    axios.get('https://api.foursquare.com/v2/venues/search', {
	    params: {
		client_id: 'CWZSTYEOSJ0LVZXRMQNMYKD5GOG2FY0YWU2ZVW4CNS0A42PJ',
		client_secret: '5QGV304KK1T5OYOF1CBKMEK0FF2QDELDCVFGVAVEBZUZ1ADW',
		ll: '40.7243,-74.0018',
		query: 'mexican',
		v: '20170801',
		limit: 1
	    }
	}).then(res => {
	    console.log(res.data.response.venues[0]);
	    }).catch(error => {
		    console.log(error);
		});
}

getApi();
