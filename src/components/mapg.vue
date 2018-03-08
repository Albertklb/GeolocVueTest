export default {
  data () {
    return {
      name: 'mapg',
      mag: 'test',
      res: '',
      center: {lat:48.8545797, lng:2.3342732},
      position: {lat:48.8545797, lng:2.3342732}
    }
  },
  methods: {
    f () {
      console.log(this.mag)
      googleMapsClient.geocode(
        {
          address: this.mag,
          region: 'fr',
          language: 'fr'
        },
        (err, response) => {
          if (!err) {
            let data = response.json.results
            console.log('data', data)
            console.log('[response]', data[0].formatted_address)
            this.res = data[0].formatted_address
            console.log('this.res', this.res)
          } else return err
        }
      )
    },
    g () {
      navigator.geolocation.getCurrentPosition((position)=> {
        console.log('thiscenter', this.position.lat);
        console.log(position.coords.latitude);
        
        // do_something(position.coords.latitude, position.coords.longitude);
      this.position.lat = position.coords.latitude
      this.center.lat = position.coords.latitude
      this.center.lng = position.coords.longitude
      this.position.lng = position.coords.longitude
      console.log( "Affichage de la latitude et longitude de g() " + this.position.lat + " - " + this.mposition.lng )
      // this.position.lat = 1
      // this.position.lng = 1
      });
    },
  },
  mounted () {
    this.g()
  }
}
