<template>
    <div id="app" class="wrapper">
        <div class="operation" @keydown.enter='add'>
            <input v-model='goodsname' class="add-name" type="text" placeholder="请输入名称">
            <input v-model="goodsprice" class="add-name" type="text" placeholder="请输入名称">
            <button @click='add' class="add-btn" type="button">添加数据</button>
        </div>
        <div class="search">
            <input v-model="goodssearch" type="text" placeHolder="请输入筛选内容">
        </div>
        <table id="tb">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>名称</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody v-cloak>
                <tr v-for="(v,i) in goodsList" v-if="search(v.name)" :key="i">
                    <td>{{i+1}}</td>
                    <td>{{v.name}}</td>
                    <td>{{v.price|formatPrice}}</td>
                    <td>
                        <a @click="remove(i)" href="#">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script>
export default {
    data() {

        return {
            goodsList: [
            { name: '斗转星阁', price: '123混沌石' },
            { name: '三三重天', price: '124混沌石' }
        ],
        goodsname: '',
        goodsprice: '',
        goodssearch: ''
        }
    },
    methods: {
        add() {
            this.goodsList.push({
                name: this.goodsname,
                price: this.goodsprice
            })
        },
        remove(i) {
            this.goodsList.splice(i, 1);
        },
        search(name) {
            return new RegExp(this.goodssearch).test(name);
        }
    },
    fliter:{
        formatPrice:function(val){
            return '$'+val;
        }
    }
}
</script>



<style>
.wrapper {
    width: 800px;
    margin: 20px auto;
}

.operation {
    margin-bottom: 10px;
    text-align: center;
    line-height: 20px;
    font-size: 18px;
}

.operation input {
    padding: 5px;
    border: 1px solid deepskyblue;
}

.operation button {
    border-radius: 3px;
    background-color: deepskyblue;
}

.search {
    text-align: left;
    line-height: 20px;
    font-size: 18px;
}

.search input {
    padding: 5px;
    border: 1px solid deeppink;
}

#tb {
    width: 800px;
    border-collapse: collapse;
    margin: 20px auto;
}

#tb th {
    background-color: #0094ff;
    color: white;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    border: 1px solid black;
}

#tb td {
    padding: 5px;
    text-align: center;
    border: 1px solid black;
}

[v-cloak] {
    display: none;
}
</style>