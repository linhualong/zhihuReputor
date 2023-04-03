import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
/* 导入Vant */
import Vant, { Lazyload } from 'vant';
import './assets/reset.min.css';
import 'amfe-flexible';
import 'vant/lib/index.css';
/* 处理最大宽度 */
import { handleMaxWidth } from './assets/utils';
handleMaxWidth();
window.addEventListener('resize', handleMaxWidth);

const app = createApp(App);

app.mount('#app');