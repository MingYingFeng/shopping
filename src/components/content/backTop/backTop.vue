<template>
    <div class="back-top" @click="backTop">
        <img src="@/assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "backTop",
        props:{
            isShow:Boolean,
            default:true
        },
        methods:{
            backTop(){
           this.$emit("backTop")
            }
        }
    }
</script>

<style scoped>
.back-top{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 80px;
    right: 30px;
    opacity: 0.5;
}
    .back-top img{
        width: 100%;
    }
</style>