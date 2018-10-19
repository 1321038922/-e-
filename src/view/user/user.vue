<template>
    <div>
        <Header/>
        <div>
            <div class="userinfo">
                <div class="user-icon">
                    <img v-if="this.$store.state.isLogin == 1" :src="this.$store.state.userinfo.header" alt="">
                    <img v-else src="../../../static/imgs/bt_bg.png" alt="">
                </div>
            <router-link to="/login" class="user-login">
                <p v-if="this.$store.state.isLogin == 1">{{this.$store.state.userinfo.username}}</p>
               <p v-else>你还没有登录，请点击登录</p>
            </router-link>
            </div>
            <div class="options">
                <router-link to="/userinfo" class="options-item clearfix">
                    <img src="../../../static/imgs/person.png" alt="" class="fll options-img">
                    个人信息
                    <img class="next flr" src="../../assets/next.png" alt="">
                </router-link>
                <router-link to="/userintegral" class="options-item clearfix">
                    <img src="../../../static/imgs/jf.png" class="fll options-img" alt="">
                    个人量化积分
                    <img class="next flr" src="../../assets/next.png" alt="">
                </router-link>
                <router-link to="/" class="options-item clearfix">
                    
                    <img src="../../../static/imgs/xgmm.png" class="fll options-img" alt="">
                    修改密码
                    <img class="next flr" src="../../assets/next.png" alt="">
                </router-link>
                <router-link to="/" class="options-item clearfix">
                    <img src="../../../static/imgs/df.png" class="fll options-img" alt="" >
                    党费缴纳
                    <img class="next flr" src="../../assets/next.png" alt="">
                </router-link>
            </div> 
        </div>
        <div class="button">
            <button  v-if="this.$store.state.isLogin == 1" @click="handleLogout">退出登录</button>
        </div>
        
        <ButtomNav/>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogout() {
            this.$store.commit("CHANGE_USERINFO", null);
            this.$store.commit('SAVE_TOKEN',null)
            this.$store.commit('IS_LOGIN','2')
            setTimeout(() =>{
                this.$router.push('/login')
            })
        }
    }
};
</script>

<style scoped lang="scss">
.userinfo {
  height: 3.5rem;
  background: #c50206;
  border-top: 1px solid #ce282b;
  .user-icon {
    img {
      margin: 1rem auto 8px;
      display: block;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
      background: #f00;
    }
  }
  .user-login {
    text-align: center;
    display: block;
    p {
      color: #fff;
      font-size: 14px;
    }
  }
}
.options {
  font-size: 16px;
  height: 3.6rem;

  .options-item {
    color: #666;
    height: 1.1rem;
    line-height: 1.1rem;
    display: block;
    width: 100%;
    border-bottom: 1px solid #ddd;
    .options-img {
      margin: 0.2rem;
      height: 0.7rem;
      display: block;
    }
  }
  .next {
    display: block;
    margin-top: 0.35rem;
    height: 0.4rem;
  }
}
.button {
    padding-top: 1.5rem;
  button {
      margin: 0 auto;
    display: block;
    font-size: 14px;
    height: 0.82rem;
    border-radius: 5px;
    width: 6rem;
    background: #e3574f;
    border: 0;
    color: #fff;
  }
}
</style>