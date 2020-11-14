import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import("../views/home/home");
const Category=()=>import("../views/category/Category");
const ShoppingCart=()=>import("../views/shoppingCart/ShoppingCart");
const Profile=()=>import("../views/profile/Profile");
const Detail=()=>import("../views/detail/Detail");



Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        redirect:'/Home'
    },
    {
        path:"/Home",
        component:()=>import("../views/home/home")
    },
    {
        path:"/category",
        component:()=>import("../views/category/Category")
    },
    {
        path:"/shoppingCart",
        component:()=>import("../views/shoppingCart/ShoppingCart")
    },
    {
        path:"/profile",
        component:()=>import("../views/profile/Profile")
    },
    {
        path:'/detail',
        component:Detail
    }

];

const router =new VueRouter({
    routes,
    mode:"history"
});

export default router