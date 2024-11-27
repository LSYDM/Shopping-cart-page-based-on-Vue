<template>
    <div class="goods">
        <div v-for="item in goods"
             :key="item.id"
             @mouseenter="showBtn(item.id)"
             @mouseleave="hideBtn(item.id)">
            <img :src="item.imgSrc" alt="">
            <p>{{ item.goodsName }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.tips }}</p>
            <button :style="{bottom: btn_btm_arr[item.id] + 'px'}" @click="addGood(item.id)">
                加入购物车
            </button>
        </div>
    </div>
    <input type="text" style="display: none" >
</template>


<script lang="ts">
    export default {
        name: "ShoppingGoods",
    }
</script>


<script lang="ts" setup>
    import '../assets/css/goods.css';
    import axios from "axios";
    import {reactive, ref} from 'vue';
    // import {add_good} from '@/api'


    let btn_btm_arr = ref(new Array(11).fill(-25));
    let goods = ref([]);
    let addGoodFlag = ref(1);


    axios.get('http://localhost:8080').then(res => {
        goods.value = res.data;
    });


    function hideBtn(id: number) {
        btn_btm_arr.value[id] = -25;
    }


    function showBtn(id: number) {
        btn_btm_arr.value[id] = 5;
    }


    async function addGood(good_id: number) {
        return await axios.get(
            'http://127.0.0.1:8080',
            {
                params: {
                    add: good_id
                }
            }
        ).then(res => addGoodFlag.value ++);
    }


    defineExpose({addGoodFlag});
</script>
