import Vue from 'vue'
import Router from 'vue-router'
import date from '../components/date'
import time from '../components/time'
import ref from '../components/ref.vue'
import mapg from '../components/mapg.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'mapg',
            component: mapg
        },
        {
            path: '/date',
            name: 'date',
            component: date
        }, {
            path: '/time',
            name: 'time',
            component: time
        },
        {
            path: '/ref',
            name: 'ref',
            component: ref
        },
        {
            path: '/mapg',
            name: 'mapg',
            component: mapg
        }
    ]
})