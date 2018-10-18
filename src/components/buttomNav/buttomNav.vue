<template>
<div>
  <div class="wrap">
    <router-link to="/" class="item-box" :class="{active: $route.name === 'index'}">
    <div class="icon" v-if=" $route.name === 'index'">
      <img src="./imgs/党_red.png" alt="">
    </div>
    <div class="icon" v-else>
      <img src="./imgs/党_grey.png" alt="">
    </div>
      <p>首页</p>
    </router-link>
    <router-link to="/message" class="item-box" :class="{active: $route.name === 'message'}">
    <div class="icon" v-if=" $route.name === 'message'">
      <img src="./imgs/消息_red.png" alt="">
    </div>
    <div class="icon" v-else>
      <img src="./imgs/消息_grey.png" alt="">
    </div>
      <p>通知早知道</p>
    </router-link>
    <router-link to="/user" class="item-box" :class="{active: $route.name === 'user'}">
    <div class="icon" v-if=" $route.name === 'user'">
      <img src="./imgs/会员_red.png" alt="">
    </div>
    <div class="icon" v-else>
      <img src="./imgs/会员_grey.png" alt="">
    </div>
      <p>我的党建</p>
    </router-link>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'buttomNav',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

  .wrap {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: white;
    display: flex;
    height: 1.08rem;
    align-items: center;
    z-index: 998;
    .item-box {
      flex: 1;
      text-align: center;
      p{
        font-size: 14px;
        color: #aaa;
        padding-top: 6px;
      }
      img {
        padding-top: 4px;
        margin: 0 auto;
        height: 0.4rem;
        display: block;
      }
     
    }
     .active{
        border-top: 2px solid #c7000a;
        p{
      color: #c7000a;
     
    }
     }
  }
</style>
