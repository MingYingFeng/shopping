<template>
    <div id="detail">
        <TopBar bgCol="pink">
            <div slot="left">
                <img src="@/assets/img/common/back.svg" alt="" @click="backHome">
            </div>
            <div slot="center" class="center-ter">
                <div class="ti-item"
                v-for="(item,index) in topTitles"
                :key="item"
                @click="changIndex(index)"
                :class="{active:currentIndex==index ? true:false}">{{item}}</div>
            </div>
        </TopBar>
        <div  class="banner-img">
            <Swiper>
                <SwiperItem v-for="(item,index) in detailGoods.bannerImg" :key="index">
                    <img :src=item alt="">
                </SwiperItem>
            </Swiper>
        </div>
    </div>
</template>

<script>
    import {request} from "@/network/axios";
    import TopBar from "@/components/common/topBar/TopBar"
    import {Swiper,SwiperItem} from "@/components/common/swiper"
    export default {
        name: "Detail",
        components:{
            TopBar,
            Swiper,
            SwiperItem
        },
        data(){
            return{
                detailGoods:{
                    bannerImg:[],
                    shoppingInfo:{
                        title:"",
                        price:"",
                        oldPrice:"",
                        desc:"",

                    },
                    columns:[],
                    services:[],
                    shopInfo:{},
                    desc:"",
                    detailInfo:[],
                    itemParams:[],
                    rate:[]
                },
                topTitles:["商品","参数","详情","评论"],
                currentIndex:0
            }
        },
        created(){
            this.getDetailData(this.$route.query.id);
        },
        methods:{
            getDetailData(iid){
                request({
                    url:"/detail",
                    params:{
                        goodsId:iid
                    }
                }).then(value =>{
                    var da = value.data.result
                    this.detailGoods.bannerImg=da.itemInfo.topImages
                    this.detailGoods.title=da.itemInfo.title
                    this.detailGoods.price= da.itemInfo.price
                    this.detailGoods.oldprice=da.itemInfo.oldprice
                    this.detailGoods.desc=da.itemInfo.desc
                    this.detailGoods.columns.push(da.columns[0],da.columns[1],da.shopInfo.services[da.shopInfo.services.length-1].name)
                    this.detailGoods.services=da.shopInfo.services
                    this.detailGoods.services.pop()
                    this.detailGoods.shopInfo=da.shopInfo
                    this.detailGoods.desc=da.itemInfo.desc
                    this.detailGoods.detailInfo=da.detailInfo.detailImage[0].list
                    this.detailGoods.itemParams= da.itemParams
                    this.detailGoods.rate=da.rate.list
                })
            },
            backHome(){
                this.$router.push("/home")
            },
            changIndex(index){
                this.currentIndex=index
            },
        }
    }
</script>

<style scoped>
    #detail{
        position: fixed;
        top: 0;
        left: 0px;
        right: 0px;
    }
.center-ter{
    display:flex;
}
.ti-item{
    flex: 1;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    display: inline-block;
}
    img{
        margin-top: 12px;
    }
    .active{
        color: red;
    }
    .banner-img{
        height: 300px;
        overflow: hidden;
    }
</style>