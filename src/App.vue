<template>
  <div id="app">
      <nav>
    <div class="nav-wrapper" style="background-image : ./assets/ciel-de-la-nuit,-lune,-nuit-196416.jpg" >
      <a href=".#/accueil" class="brand-logo">Ouvert la nuit</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
               <li> <router-link to='/'>home</router-link></li>
               <li> <router-link to='/date'>date</router-link></li>
               <li> <router-link to='/time'>time</router-link></li>
               <li> <router-link to='/ref'>referencer son magasin</router-link></li>
               <li> <router-link to='/mapg'>map</router-link></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
               <li> <router-link to='/'>home</router-link></li>
               <li> <router-link to='/date'>date</router-link></li>
               <li> <router-link to='/time'>time</router-link></li>
               <li> <router-link to='/ref'>referencer son magasin</router-link></li>
               <li> <router-link to='/mapg'>je cherche un magasin</router-link></li>
      </ul>
    </div>
  </nav>
    <router-view/>  
  </div>
</template>


<script>

import date from './components/date'
import time from './components/time'



export default {
  name: 'App',
  components : {
    date, time,
    
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.nav-wrapper {
  background-attachment: "./assets/ciel-de-la-nuit,-lune,-nuit-196416.jpg"
}

</style>
