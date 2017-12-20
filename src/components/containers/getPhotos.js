import axios from 'axios';

const getPhotos = (id) => {
  let string = "https://api.foursquare.com/v2/venues/" + id + '/photos'
  console.log(string);
  axios.get(string , {
    params: {
    client_id: 'RN3TFCPNS0XOCEGT2XEC4E5ZCHMFA2BPSIJ5UIKZT3ROTWOU',
    client_secret: 'AHW0LBIZY2IAMIAGFFQ2FKZB44AVMW4UVF5QAJRY4N1S5OPN',
    v: '20170801',
    VENUE_ID: id,
    limit: 200
    }
    }).then(res => {

        let photoString = res.data.response.photos.items[0].prefix;
        return (
          photoString
        )
      }).catch(error => {
          console.log(error);
      })
}

export default getPhotos;
