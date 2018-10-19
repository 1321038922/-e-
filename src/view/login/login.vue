<template>
    <div class="wraper container" >
        <Header></Header>
        <div class="main-wrap">
            <div class="logo">
                <img src="../../../static/imgs/logo.png">
            </div>
            <form class="login-input" :model="formData">
                <input type="身份证号" placeholder="请输入身份证" v-model="formData.id_card">
                <input type="password" placeholder="密码" v-model="formData.password">
                <button @click="login">登录</button>
            </form>
        </div>
        <!-- <buttomNav></buttomNav> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        id_card: "",
        password: ""
      }
    };
  },
  methods:{
    login(){
      this.$axios.post('user/userLogin.do', this.formData).then(res => {
        if(res.code == 1) {
          this.$store.commit('CHANGE_USERINFO',res.data)
          this.$store.commit('SAVE_TOKEN',res.token)
          this.$store.commit('IS_LOGIN','1')
          console.log(res)
          setTimeout(()=>{
            this.$router.push('/user')
          },1000)
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
.wraper {
  .main-wrap {
    background: #c50206;
    position: absolute;
    top: 0.88rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .logo {
    margin: 0.6rem auto;
    width: 4rem;
    background: #c50206;
    img {
      display: block;
      height: 1rem;
    }
  }
  .login-input {
    display: block;
    text-align: center;
    input {
      font-size: 14px;
      height: 0.82rem;
      border-radius: 5px;
      width: 5.8rem;
      border: 1px solid #ff0;
      background: #c50206;
      color: #fff;
      outline:none;
      padding-left: 0.2rem;
    }
    input:focus {
      font-size: 14px;
      height: 0.82rem;
      color: #fff;
      
    }
    ::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #fff;
    }
    button {
      font-size: 14px;
      height: 0.82rem;
      border-radius: 5px;
      width: 6rem;
      background: #e3574f;
      border: 0;
      color: #fff;
    }
  }
}
</style>