<template>
    <div>
        <Header></Header>
        <div class="p8 title">
            <p>请选择支付方式:</p>
        </div>
         <div class="options ">
             <div  class="options-item clearfix" @click="showvx">
                <img src="../../../static/imgs/微信.png" alt="" class="fll options-img">
                    微信
                <img class="next flr" src="../../assets/next.png" alt="">
            </div>
             <div to="/integralDetail" class="options-item clearfix" @click="showzfb">
                <img src="../../../static/imgs/支付宝.png" alt="" class="fll options-img">
                    支付宝
                <img class="next flr" src="../../assets/next.png" alt="">
            </div>             
        </div>
        <div :class="this.showbg? 'pay-img' : 'bgn'" >
            <div v-if="clickz" class="img-z">
                支付宝支付
                <img   src="../../../static/imgs/zfvewm.jpg" alt="">
            </div>
            <div v-if="clickv" class="img-v">
                微信支付
                <img   src="../../../static/imgs/wxewm.jpg" alt="">
            </div>
            <div class="bg" @click="shownull" >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                clickz:false,
                clickv:false,
                showbg:false,
            }
        },
        methods: {
            showvx() {
                this.clickv = true;
                this.showbg = true
            },
            showzfb() {
                this.clickz = true;
                this.showbg = true
            },
            shownull() {
                this.clickv = false;
                this.clickz = false;
                this.showbg = false
            },
        }
    }
</script>

<style scoped lang="scss">
.title {
    font-size: 16px;
    margin-top: 0.3rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.3rem;
}
.options {
  font-size: 16px;

  .options-item {
    color: #666;
    height: 1.2rem;
    line-height: 1.2rem;
    display: block;
    width: 100%;
    border-bottom: 1px solid #ddd;
    .options-img {
      margin: 0.2rem;
      height: 0.8rem;
      display: block;
    }
  }
  .next {
    display: block;
    margin-top: 0.35rem;
    height: 0.4rem;
    margin-right: 0.2rem;
  }
}
.pay-img {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    .bg{
    background: #000;
    position: absolute;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    }
    .img-z {
         font-size: 18px;
        width: 80%;
        position: absolute;
        left: 10%;
        right: 10%;
        top: 30%;
        z-index: 998;
        padding-top: 0.5rem;
        text-align: center;
        background: #fff;
         img{
            height: 100%;
            width: 100%;
            display: block;
        }
    }
    .img-v {
        font-size: 18px;
        width: 80%;
        position: absolute;
        left: 10%;
        right: 10%;
        top: 30%;
        z-index: 998;
        padding-top: 0.5rem;
        text-align: center;
        background: #fff;
         img{
            height: 100%;
            width: 100%;
            display: block;
        }
    }
}
.dbn {
    display: none;
}
</style>