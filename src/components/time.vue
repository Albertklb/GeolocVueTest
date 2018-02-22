<template>
<div id="time">
  <h5>Entrez vos heures d'ouverture : </h5>
  <div class="wrap">
      <br>
  <el-time-picker
    is-range
    v-model="value4"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
  <button class="btn waves-effect waves-light" type="submit" name="action">Send
    <i class="material-icons right">Envoi</i>
  </button>
  </div>
  </div>
</template>

<script>

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require("vue-simple-calendar/dist/static/css/default.css")
require("vue-simple-calendar/dist/static/css/holidays-us.css")

  export default {
    data() {
      return {
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
<style scoped>
h5 {
    display: inline-flex;
    margin-top: 100px;

}
date-editor.el-input__inner {
    display: inline-flex;
    width: 220px;
    margin-top: 100px;
    margin-left: 100px;

}

button{
      margin-left: 20px ;

}
</style>
