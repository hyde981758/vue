// 因为我们使用webpack打包，最终每个文件都是一个模块，都被放置到了一个沙箱函数中执行
// 没有所谓的全局变量，使用什么东西都需要单独导入
import VueRouter from 'vue-router';
import ComptIndex from '../component/index.vue';

// 这个js对外导出一个路由实例
export default new VueRouter({
    routes: [
        { path: "/", redirect: "/index" },
        { path: "/index", component: ComptIndex }
        // {path:"/index",component:{template:"<p>首页</p>"}},
        // {path:"/new",component:{template:"<p>新闻模块</p>"}}
    ]
})