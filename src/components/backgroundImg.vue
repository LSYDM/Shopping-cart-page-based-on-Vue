<template>
    <header>
        <img :src="firstImg" alt="" @click="changeBackgroundImg(firstImg)">
        <img :src="secondImg" alt="" @click="changeBackgroundImg(secondImg)">
        <img :src="thirdImg" alt="" @click="changeBackgroundImg(thirdImg)">
    </header>
    <span class="line"></span>
</template>


<script lang="ts">
    export default {
        name: "ShoppingBackgroundImg",
    }
</script>


<script setup lang="ts">
    import '../assets/css/backgroundImg.css';
    import {type ChangeBackground} from '@/types';
    import firstImg from '@/assets/img/1.jpg';
    import secondImg from '@/assets/img/2.jpg';
    import thirdImg from '@/assets/img/3.jpg';


    let changeBackgroundImg: ChangeBackground = function (img: string) {
        document.body.style.backgroundImage = `url(${img})`;
    }
</script>

