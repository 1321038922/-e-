<template>
    <div>
        <Header></Header>
        <div class="p8 title">
            <p>请选择支付方式:</p>
        </div>
         <div class="options ">
             <router-link to="/integralDetail" class="options-item clearfix">
                <img src="../../../static/imgs/微信.png" alt="" class="fll options-img">
                    微信
                <img class="next flr" src="../../assets/next.png" alt="">
            </router-link>
             <router-link to="/integralDetail" class="options-item clearfix">
                <img src="../../../static/imgs/支付宝.png" alt="" class="fll options-img">
                    支付宝
                <img class="next flr" src="../../assets/next.png" alt="">
            </router-link>
            

        </div>
    </div>
</template>

<script>
    export default {
        
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
</style>