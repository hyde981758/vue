// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import MintUI from 'mint-ui';

import 'mint-ui/lib/style.css';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';

// 记得手动use启动插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

// 导入过滤器
import './filter.js';
// 导入自己的模块
import router from './router.js';

// 带入自己的组件
import App from '../component/App.vue';



 new Vue({
    el:"#app",
    render:function(c){
        return c(App)
    },
    router
})