let request = require('fs');
let axios = require('axios');


getApi = () => {
    axios.get('https://api.foursquare.com/v2/venues/502e2b0be4b0c65b4a278c4f/photos', {
	    params: {
		client_id: 'RN3TFCPNS0XOCEGT2XEC4E5ZCHMFA2BPSIJ5UIKZT3ROTWOU',
		client_secret: 'AHW0LBIZY2IAMIAGFFQ2FKZB44AVMW4UVF5QAJRY4N1S5OPN',
		VENUE_ID: '502e2b0be4b0c65b4a278c4f',
		limit: 1,
		v: '20170801',
	    }
	}).then(res => {
	    console.log(res.data.response.photos.items);
	    }).catch(error => {
		    console.log(error);
		});
}

getApi();
