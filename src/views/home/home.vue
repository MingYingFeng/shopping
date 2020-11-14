<template>
    <div id="home">
        <HomeTopBar></HomeTopBar>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <Swiper>
                    <SwiperItem v-for="item in banner">
                        <img :src="item.image" alt="">
                    </SwiperItem>
                </Swiper>
                <homeRecommend :recommend="recommend"></homeRecommend>
                <Weekpopular></Weekpopular>
                <TitleBar :titles="['流行','新款','精选']" @itemClick="itemClick"></TitleBar>
                <Goods :goods="goods[titles[currentIndex]]"></Goods>
            </div>
        </div>
        <backTop :isShow="homeIsShow" @backTop="backTop"></backTop>
    </div>
</template>

<script>
    // import Vue from 'vue-router'
    //私有组件
    import homeRecommend from "./Children/home-Recommend"
    import Weekpopular from "./Children/Weekpopular"
    import HomeTopBar from "./Children/HomeTopBar"
    //公共组件
    import backTop from "@/components/content/backTop/backTop"
    import BetterScroll from "better-scroll"
    import Goods from "@/components/content/goods/Goods"
    import TitleBar from "@/components/content/titleBar/titleBar"
    import {Swiper, SwiperItem} from "@/components/common/swiper"
    import {getHomeMultidata} from "@/network/home/index"
    import {request} from "@/network/axios";

    export default {
        name: "home",
        components: {
            HomeTopBar,
            Swiper,
            SwiperItem,
            homeRecommend,
            Weekpopular,
            TitleBar,
            Goods,
            backTop
        },
        data() {
            return {
                banner: [],
                recommend: [],
                goods: {
                    pop: {
                        title: "流行",
                        id: 0,
                        list: []
                    },
                    news: {
                        title: "新款",
                        id: 0,
                        list: []
                    },
                    sell: {
                        title: "精选",
                        id: 0,
                        list: []
                    },
                },
                titles: ["pop", "news", "sell"],
                currentIndex: 0,
                scroll,
                homeIsShow:true
            }
        },
        methods: {
            getHomeGoodaInfo(title, id) {
                request({
                    url: "/home/" + title,
                    params: {
                        id: id
                    }
                }).then(res => {
                    this.goods[title].list.push(...res.data.data.list);
                    this.goods[title].id++;
                        this.$nextTick(() => {
                           const scroll = new BetterScroll(".wrapper", {
                                click:true,
                                probeType:3,
                               pullUpLoad:true,

                            });
                           this.scroll=scroll;
                            this.scroll.on("pullingUp",()=>{
                               this.getHomeGoodaInfo(this.titles[this.currentIndex],this.goods[this.titles[this.currentIndex]].id+1)
                            })
                        })
                    this.scroll.on("scroll",(postion)=>{
                        if (postion.y<-1000){
                            this.homeIsShow=true
                        }else {
                            this.homeIsShow=false
                        }
                    })
                })
            },
            itemClick(index) {
                this.currentIndex = index
                this.scroll.refresh()
            },
            backTop(){
                this.scroll.scrollTo(0,0,3000)
            }
        },
        created() {
            getHomeMultidata().then(res => {
                this.banner = res.data.data.banner.list;
                this.recommend = res.data.data.recommend.list

            });
            this.getHomeGoodaInfo('pop', this.goods.pop.id + 1);
            this.getHomeGoodaInfo('news', this.goods.news.id + 1);
            this.getHomeGoodaInfo('sell', this.goods.sell.id + 1)
        },
    }
</script>

<style scoped>
    #home {
        margin-bottom: 60px;
    }

    .wrapper {
        height: calc(100vh - 50px - 44px);
        overflow: hidden;
    }


</style>