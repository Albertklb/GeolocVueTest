<template>
<div id="mapg">
        <div class="row">
                    <div class="input-field col s6">

  <gmap-map class="map-container" :center="{lat:48.8545797, lng:2.3342732}" :zoom="12">
    <gmap-marker :position="{lat:48.8545797, lng:2.3342732}">
    </gmap-marker>
    <gmap-info-window :position="{lat:48.8545797, lng:2.3342732}">
      Hello world!
    </gmap-info-window>
  </gmap-map>
  </div>
                 <div class="input-field col s6">

          <div class="input-field col s6">
              <p>Code postal :</p>
            <input id="postal" type="number" class="validate">
        </div>
        <div class="input-field col s6">
            <p>Adresse :</p>
          <input placeholder="adresse" id="adresse" type="text" class="validate">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6 ">
            <p>Nom du magasin : </p>
          <input placeholder="Nom du magasin" id="magasin" type="text" class="validate">
        </div>
      </div>
      </div>


</div>
</template>

<script>

import * as VueGoogleMaps from 'vue2-google-maps'

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAM3jmpomtVXxPskyOSDZ9k7rr_CEo_Jvc'
});

googleMapsClient.geocode({
  address: 'pizzeria paris',
  region : 'fr',
  language : 'fr',
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
  
});


  export default {
      name : "mapg",
    data () {
      return {
        styles: [ ]
      }
    }
  }

</script>

<style>
  .map-container {
    width: 800px;
    height: 400px;
  }
</style>

