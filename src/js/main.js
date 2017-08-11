// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 记得手动use启动插件
Vue.use(VueRouter);
Vue.use(VueResource);


// 导入自己的模块
import router from './router.js';

// 带入自己的组件
import comptApp from '../component/App.vue';



 new Vue({
    el:"#app",
    render:function(c){
        return c(comptApp)
    },
    router
})