<template>
    <div class="goods-item" @click="urlToDetail">
        <img :src="item.show.img" alt="">
        <p class="goods-title">{{item.title}}</p>
        <p class="goods-price"><span class="price">${{item.price}}</span></p>
        <img class="xing" src="@/assets/img/common/collect.svg" alt="">
        <span class="cfav">{{item.cfav}}</span>
    </div>
</template>

<script>
    export default {
        name: "Goodsitem",
        props: {
            item: Object
        },
        methods:{
            urlToDetail(){
                this.$router.push({
                    path : "/detail",
                    query :{
                        id : this.item.iid
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .goods-item {
        width: 45%;
    }

    .goods-item > img {
        width: 100%;
    }

    .goods-item .xing {
        width: 14px;
        display: inline-block;
        margin-left: 70px;
    }

    .goods-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .goods-price {
        color: red;
        display: inline-block;
    }

    .goods-price span {
        display: inline-block;
        vertical-align: middle;
    }

    .cfav {
        vertical-align: middle;
    }
</style>