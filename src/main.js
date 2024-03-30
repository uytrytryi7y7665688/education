import Vue from 'vue'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueQrcode from 'vue-qrcode'
import vuex from "vuex"
Vue.use(ElementUi)
Vue.use(vuex)
import router from './router'
// import VueNativeSock from 'vue-native-websocket';
// Vue.use(VueNativeSock, 'ws://localhost:10001/chat', { format: 'json' }); // 这里的URL应根据实际情况修改为正确的WebSocket服务器地址
Vue.use(VueQrcode)
Vue.config.productionTip = false


new Vue({
        el: '#app',
        render: h => h(App),
        router: router,
        beforeCreate() {
            Vue.prototype.$bus = this
        }


    }
)

