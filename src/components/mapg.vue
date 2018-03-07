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
          <input placeholder="Nom du magasin" id="magasin" type="text" class="validate" v-model="mag">
        </div>
        <div>{{res}}</div>
        <button type="submit" @click="f">Envoyez</button>
      </div>
      </div>


</div>
</template>

<script>
import * as VueGoogleMaps from "vue2-google-maps";


const geolocation = require("google-geolocation")({
  key: "AIzaSyAM3jmpomtVXxPskyOSDZ9k7rr_CEo_Jvc",
  timeout: 2000
});





const params = {
  wifiAccessPoints: [
    {
      macAddress: "01:23:45:67:89:AB",
      signalStrength: -65,
      signalToNoiseRatio: 40
    }
  ]
};

var googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyAM3jmpomtVXxPskyOSDZ9k7rr_CEo_Jvc"
});



export default {

  data() {
    return {
    name: "mapg",
    mag: "test",
    res: '',
    position : {
      lat:'1',
      lng:'1',
    }
    
    }
  },

  methods: {
    f: function() {
      console.log(this.mag);
      googleMapsClient.geocode(
        {
          address: this.mag,
          region: "fr",
          language: "fr"
        },
        (err, response)=> {
          if (!err) {

            console.log(response.json.results);
            console.log(response.json.results[0].formatted_address);
            // console.log(response.json.results.geocode);

            //ici les deux lignes en dessous n affiche rien
            this.res = response.json.results[0].formatted_address

          }
        } 
      );
    },



    g: function () {
      navigator.geolocation.getCurrentPosition((position)=> {
        // do_something(position.coords.latitude, position.coords.longitude);
      this.lat = position.coords.latitude
      this.long = position.coords.longitude
      console.log( "Affichage de la latitude et longitude de g() " + this.lat + " - " + this.long )
      this.position.lat = 1
      this.position.lng = 1
});
      
    },


  },

  mounted : function() {
      this.$nextTick( this.g)
    
  },


};
</script>

<style>
.map-container {
  width: 45vw;
  height: 50vh;
}
</style>

