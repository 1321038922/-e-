<template>
    <div>
        <div class="head">
            <header class="com-header clearfix" >
                <span class="header-title" >{{title || this.$route.meta.title}}</span>
                <button class="icon-lift fll" @click="$router.back()" v-if="isShow">
                    <img src="../../assets/last.png" alt="">
                </button>
                
            </header>
        </div>
    </div>  
</template>

<script>
export default {
  data() {
    return {
        isShow : true
    };
  },
  props: {
    title: {
      type: String
    }
  },
  mounted() {
      if(this.$route.name == 'user'){
          this.isShow = false
      }else if(this.$route.name == 'message'){
          this.isShow = false
      }else{
          this.isShow = true
      }
  }
};
</script>

<style scoped lang="scss">
.head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;
}
.com-header {
  height: 0.88rem;
  line-height: 0.88rem;
  background-color: #c50206;
  font-size: 18px;
  color: aliceblue;
  text-align: center;
  position: relative;
  .header-title {
    display: block;
    margin: 0 auto;
  }
  .icon-lift {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #c50206;
    border: 0px;
    background-color: transparent;
    height: 0.88rem;
    line-height: 0.88rem;
    outline: none;
    img {
      height: 0.4rem;
      display: block;
      padding-left: 10px;
    }
  }
}
</style>