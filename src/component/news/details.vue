<template>
    <section class="details">
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{news.title}}</div>
            <div class="mui-card-footer">
                <span>创建时间：{{news.add_time | formatDate('yyyy-mm-dd')}}</span>
                <span>点击量：{{news.click}}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="news.content"></div>
            </div>
        </div>
    </section>
</template>

<script>
import config from '../../js/config.js';
import Ctitle from '../common/title.vue';
export default {
data(){
    return {
        news:{},
        title:'新闻详情'
    }
},
methods:{
    getDetails(){
        console.log(1);
        let url = config.newsDetails + this.$route.params.id;
        this.$http.get(url).then(resp=>{
            console.log(resp);
            resp.body.status == 0 && (this.news = resp.body.message[0])
        })
    }
},
created(){
    this.getDetails();
},
components:{
    'v-title':Ctitle
}
}
</script>

<style>

</style>
