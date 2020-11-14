<template>
    <div class="goods">
        <Goodsitem v-for="item in goods.list" :item="item">
        </Goodsitem>
    </div>
</template>

<script>
    import Goodsitem from "./Goodsitem"

    export default {
        name: "Goods",
        components: {
            Goodsitem
        },
        props: {
            goods: Object
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>