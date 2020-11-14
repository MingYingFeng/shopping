<template>
    <div class="home-Recommend">
<div class="recommend-item" v-for="item in recommend" :key="item.sort">
    <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
    </a>
</div>
    </div>
</template>

<script>
    export default {
        name: "home-Recommend",
        props:{
            recommend:Array
        }
    }
</script>

<style scoped>
.recommend-item{
    flex: 1;
    text-align: center;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: #00b3ee 10px solid;
}
.home-Recommend{
    display: flex;
    }
.recommend-item img{
    width: 60px;
}
    a{
        color: #333333;
        font-size: 14px;
        margin-top: 10px;
    }
</style>