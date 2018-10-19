<template>
    <div>
    <Header/>
        <div class="header-wrapper">
            <div class="header-logo">
                <img src="../../../static/imgs/timg.jpg" alt="">
            </div>
        </div>
        <div class="item-wrapper">
            <router-link to="/politicalstudy" class="item">
                <img src="../../../static/imgs/icon1.png" alt="">
                <div>政治学习</div>
            </router-link>
            <router-link :to=" this.$store.state.isLogin != 1? '/' :'/thinkReport' "  class="item">
                <img src="../../../static/imgs/icon2.png" alt="">
                <div>思想汇报</div>
            </router-link>
            <router-link :to=" this.$store.state.isLogin != 1? '/' :'/expreience' " class="item">
                <img src="../../../static/imgs/icon3.png" alt="">
                <div>心得总结</div>
            </router-link>
        </div>
        <div class="item-wrapper2">
             <router-link to="/appraise" class="item">
                <img src="../../../static/imgs/icon4.png" alt="">
                <div>民主评议</div>
            </router-link>
            <router-link to="/map" class="item">
                <img src="../../../static/imgs/icon5.png" alt="">
                <div>流动党员找组织</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.header-logo {
    img {
        height: 4rem;
        width: 100%;
    }
}
.item-wrapper {
    display: flex;
    .item {
        text-align: center;
        flex: 1;
        font-size: 14px;
        margin: 0.1rem 0.5rem;
        flex-wrap: wrap;
        width: 100%;
        color: #666;
        img {
            height: 1.4rem;
        }
    }
}
.item-wrapper2 {
    display: flex;
    .item {
        color: #666;
        text-align: center;
        font-size: 14px;
        margin: 0.5rem;
        width: 100%;
        flex: 0.25;
        img {
            height: 1.4rem;
        }
    }
}
</style>