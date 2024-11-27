<template>
    <ShoppingBackgroundImg></ShoppingBackgroundImg>
    <ShoppingCart :flag="shopGoods"></ShoppingCart>
    <Goods_up_text></Goods_up_text>
<!--    <button @click="showLog">点我展示</button>-->
    <ShoppingGoods ref="shopGoods"></ShoppingGoods>
</template>


<script lang="ts">
    import ShoppingBackgroundImg from './components/backgroundImg.vue';
    import ShoppingCart from './components/cart.vue';
    import Goods_up_text from "@/components/goods_up_text.vue";
    import ShoppingGoods from './components/goods.vue';
    import '@/assets/css/App.css';


    export default {
        name: 'App',
        components: {
            ShoppingBackgroundImg,
            ShoppingCart,
            Goods_up_text,
            ShoppingGoods
        }
    }
</script>


<script lang="ts" setup>
    import {ref, watch, watchEffect} from "vue";

    let shopGoods = ref();


    // watch(() => {
    //     try {
    //         return shopGoods.value.addGoodFlag
    //     } catch (e) {
    //         return undefined
    //     }
    // }, () => {
    //     console.log('变化了');
    // })


    // function showLog() {
    //     console.log(shopGoods.value.addGoodFlag)
    // }



</script>

