<template>
    <table>
        <thead>
            <tr>
                <th><input type="checkbox" v-model="selectAll" @click="select_all(true, flush_cart)">全选</th>
                <th>商品名称</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in cart_goods">
                <td><input type="checkbox" @click="select(item.id, flush_cart)" v-model="item.selected" :value="item.id"></td>
                <td>
                    <div>
                        <img :src="item.imgSrc" alt="">
                        <p>item.tips</p>
                    </div>
                </td>
                <td>{{ item.price }}</td>
                <td>
                    <div>
                        <button @click="reduce_good(item.id, flush_cart)">-</button>
                        <p>{{ item.num }}</p>
                        <button @click="add_good(item.id, flush_cart)">+</button>
                    </div>
                </td>
                <td>{{ (Number(item.price.slice(0, -1)) * item.num).toFixed(2) }}元</td>
                <td><button @click="remove_good(item.id, flush_cart)">x</button></td>
            </tr>
        </tbody>
    </table>
<!--    <button @click="showLog">点我显示当前状态</button>-->
    <div class="cart_total">
        <div>
            <p>继续购物</p>
            <p>共<span>{{ goodsNum }}</span>件商品, 已选择<span>{{ selectedGoodsNum }}</span>件</p>
        </div>
        <div>
            <p>合计<span>{{ selectedPrice }}</span>元</p>
            <button>去结算</button>
        </div>
    </div>
</template>


<script lang="ts">
    export default {
        name: "ShoppingCart",
    }
</script>

<script setup lang="ts">
    import '../assets/css/cart.css';
    import '../assets/css/cart_total.css';
    import {ref, watch, watchEffect} from "vue";
    import {get_cart_list, add_good, reduce_good, remove_good, select, select_all} from "@/api";

    let cart_goods = ref(null);
    let flush_flag = defineProps(['flag']);
    let selectAll: boolean;

    let selectedGoodsNum = ref(0);
    let selectedPrice = ref(0);
    let goodsNum = ref(0);


    watch(() => {
        try {
            return flush_flag.flag.addGoodFlag
        } catch (e) {
            return undefined
        }
    }, () => {
        flush_cart()
    })


    // function showLog() {
    //     console.log(flush_flag.flag.addGoodFlag)
    // }


    get_cart_list().then(res => {
        cart_goods.value = res.data
        selectAll = res.data.every((item: object) => item.selected);
        flush_total(res.data)
    });


    function flush_cart() {
        get_cart_list().then(res => {
            // console.log(res.data);
            cart_goods.value = res.data;
            selectAll = res.data.every((item: object) => item.selected);
            flush_total(res.data)
            // console.log(cart_goods.value)
        })
    }


    function flush_total(data: Array<object>) {
        goodsNum.value = data.length;
        let selected_good = data.filter((item: object) => item.selected);
        selectedGoodsNum.value = selected_good.length;
        selectedPrice.value = selected_good.reduce(
            (acc: number, item: object) => acc + Number((parseInt(item.price) * item.num).toFixed(2)), 0);
    }

</script>
