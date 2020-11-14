<template>
    <div class="title-bar">
<div class="title-item"
     v-for="(item ,index) in titles"
     :key="item"
     @click="changeStyle(index)">
    <span :class="{active:currentIndex==index ? true : false}">
    {{item}}
    </span>
</div>
    </div>
</template>

<script>
    export default {
        name: "titleBar",
        props:{
            titles:{
                type:Array,
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            changeStyle(index){
                this.currentIndex= index
                this.$emit("itemClick",index)
            }
        }
    }
</script>

<style scoped>
.title-bar{
    display: flex;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
}
    .title-item{
        flex: 1;
        text-align: center;
    }
    .active{
        color: #ff69b4;
        border-bottom:solid #ff69b4 3px;
    }
</style>