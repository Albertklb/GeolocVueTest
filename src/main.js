// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'materialize-css/dist/css/materialize.css'
import * as $ from 'jquery'
import CalendarView from "vue-simple-calendar"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import * as VueGoogleMaps from 'vue2-google-maps'

require("vue-simple-calendar/dist/static/css/default.css")
require("vue-simple-calendar/dist/static/css/holidays-us.css")

export { $ }
window.jQuery = window.$ = require('jquery')

Vue.use(ElementUI, { locale })

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAM3jmpomtVXxPskyOSDZ9k7rr_CEo_Jvc',
        libraries: 'places',
        // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',

    render: h => h(App)

})

// const Header = new Vue({
//     el: '#header',
//     router,
//     components: { App },
//     template: '<App/>'
// })