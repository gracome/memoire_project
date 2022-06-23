import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/theme/css/app.css'
import "@/assets/mdi/css/materialdesignicons.min.css"
import '@/styles/main.css'
import '@/plugins'
Vue.config.productionTip = false
import io from 'socket.io-client';
const options = {
  transports: ['polling'],
  polling: {
    extraHeaders: {
      'x-clientid': 'abc'
    }
  }
};
Vue.use(new VueSocketIO({
  debug: false,
  connection: io(process.env.VUE_APP_CONVERSATION_API, options), //options object is Optional
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

