// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

Vue.config.productionTip = false
/*
  fill belows from the firebase project setup
*/
var config = {
  apiKey: 'AIzaSyB20KvGNExHfCWuiDrsAHXIBRX9WqYaEd8',
  authDomain: 'vue-example1.firebaseapp.com',
  databaseURL: 'https://vue-example1.firebaseio.com',
  projectId: 'vue-example1',
  storageBucket: 'vue-example1.appspot.com',
  messagingSenderId: '686205830736'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
