import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import("../views/home/home");
const Category=()=>import("../views/category/Category");
const ShoppingCart=()=>import("../views/shoppingCart/ShoppingCart");
const Profile=()=>import("../views/profile/Profile");


Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        redirect:'/Profile'
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

];

const router =new VueRouter({
    routes,
    mode:"history"
});

export default router