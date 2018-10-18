<template>
    <div class="main">
        <div class="header clearfix">
            <div class="logo fll">
                <img src="../../../static/imgs/logo.png" alt="">
            </div>
                <router-link to="/login" class="login flr">登录</router-link>
        </div>
        <div class="swiper">
            <mt-swipe :auto="4000" class="swiper-item">
                <mt-swipe-item v-for="item in rows" :key="item.id">
                    <router-link to="/">
                        <img :src="item.imgUrl" alt="">
                    </router-link>
                    <span class="desc">{{item.title}}</span>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="menu-list">
            <div class="list-wrap list-top clearfix">
                    <router-link to="/news" class="item">
                        <div>
                            <img src="../../../static/imgs/icon_01@2x.png" alt="">
                        </div> 
                        <p>信工新闻眼</p>
                    </router-link>
                    <router-link to="/userservice" class="item">
                        <div>
                            <img src="../../../static/imgs/icon_03@2x.png" alt="">
                        </div>
                        <p>掌上组织生活</p>
                    </router-link>
                    <router-link to="/" class="item">
                        <div>
                            <img src="../../../static/imgs/icon_05@2x.png" alt="">
                        </div>
                        <p>党员云互动</p>
                    </router-link>      
            </div>
            <div class="list-wrap list-button clearfix">     
                    <router-link to="/oneClick" class="item">
                        <div>
                            <img src="../../../static/imgs/icon_04@2x.png" alt="">
                        </div>
                        <p>党建一点通</p>
                    </router-link>               
                    <router-link to="/" class="item">
                        <div>
                            <img src="../../../static/imgs/icon_06@2x.png" alt="">
                        </div>
                        <p>党员亮身份</p>
                    </router-link>
                    <router-link to="/todayNews" class="item">
                        <div>
                            <img src="../../../static/imgs/icon_02@2x.png" alt="">
                        </div>
                        <p>党史上的今天</p>
                    </router-link>
            </div>
        </div>
        <div class="banner">
            <img  src="../../../static/imgs/banner01@2x.png" alt="">
        </div>
        <div class="footer-nav">
            <div class="nav-right">

            </div>
            <div class="nav-left">
                <div class="row">
                    <router-link to="/study"></router-link>
                    <router-link to="/photos"></router-link>
                </div>
                <div class="row">
                    <router-link to="/institutional"></router-link>
                    <router-link to="/specialEvent"></router-link>
                </div>
            </div>
        </div>
        <ButtomNav class="buttom"></ButtomNav>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";
export default {
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
  },
  data() {
    return {
      rows: []
    };
  },
  methods:{
      getData() {
      this.$axios.get(`carousel/carouselList.do?type=0`).then(res => {

        if (res.code == 1) {
            this.rows = res.rows

        }
      });
    }
  },
  created(){
      this.getData()
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 1.13rem;
  background: #c50206;
  line-height: 1.13rem;
  position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: block;
    z-index: 998;
}
.swiper {
    margin-top: 1.13rem;
    .swiper-item  {
        height: 4rem;
        img{
            height: 4rem;
        }
    }
}
.logo {
  height: 1.13rem;
}
.login {
  margin: 0 auto;
  font-weight: 300;
  font-size: 17px;
  color: aliceblue;
  text-decoration: none;
  margin-right: 10px;
}
.logo img {
  width: 130px;
  padding-left: 15px;
  display: block;
  padding-top: 0.3rem;
}
.mint-swipe {
  height: 2.92rem;
}
.mint-swipe img {
  width: 100%;
  height: 2.92rem;
}
.menu-list .list-img img {
  width: 100%;
  height: 3.8rem;
}
.desc {
  font-size: 14px;
  padding: 5px;
  height: 20px;
  line-height: 20px;
  width: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
}

.menu-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
  background: url(../../../static/imgs/bt_bg.png) no-repeat;
  background-size: 100%;
  height: 3.79rem;
  p{
      color: #666666
  }
}
.menu-list .list-wrap img {
  width: 0.95rem;
}
.menu-list .list-wrap {
  display: flex;
}
.menu-list .list-wrap .item {
  flex: 1;
  text-align: center;
 
}
.banner img{
    width: 100%;
    display: block;
    height: 1.73rem;
}
.footer-nav {
    background: url(../../../static/imgs/channelType@2x.png) no-repeat;
    height: 3.16rem;
    background-size: 100%;
    display: flex;
    padding-bottom:1.08rem;
    .nav-left {
        flex: 2;
        .row {
            display: flex;
            height: 50%;
            a {
                flex: 1;
                height: 100%;
            }
        }
    }
    .nav-right {
        flex: 1;
        height: 50% ;
    }
    
}

</style>