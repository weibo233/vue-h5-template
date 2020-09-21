<template>
    <div>
        <buiness-swiper></buiness-swiper>
        <router-view class="app-content"/>
    </div>    
</template>
<script>
import buinessSwiper from '@/views/buiness/swiper'
export default {
    components:{
        buinessSwiper
    }
}
</script>
<style lang="scss" scoped>
.certificate-title{
    display: inline-block;
    width: 100%;
    text-align: center;
}
</style>