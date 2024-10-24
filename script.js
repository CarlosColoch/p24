
//import 'regenerator-runtime/runtime';
//import axios from 'axios';
axios
  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (this.info = response.data.bpi))
  .catch(error => console.log(error))

function iniciarMap(){
    var coord = {lat:19.322819 ,lng: -99.2231394};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 100,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

//https://www.google.com/maps/@19.322819,-99.2231394,15z?entry=ttu