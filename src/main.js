import { createApp } from 'vue';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'styles/reset.css'
import 'styles/border.css' // 因為移動端的分辨率會導致邊框象素增大，所以要修正
import 'styles/iconfont.css' // 因為移動端的分辨率會導致邊框象素增大，所以要修正
import 'swiper/dist/css/swiper.css'

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
