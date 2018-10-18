<template>
    <div class="wraper container" >
        <Header></Header>
        <div class="main-wrap">
            <div class="logo">
                <img src="../../../static/imgs/logo.png">
            </div>
            <form class="login-input">
                <input type="身份证号" placeholder="请输入身份证">
                <input type="password" placeholder="密码">
                <button>登录</button>
            </form>
        </div>
        <!-- <buttomNav></buttomNav> -->
    </div>
</template>

<script>
export default {};
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
      width: 6rem;
      border: 1px solid #ff0;
      background: #c50206;
      color: #fff;
    }
    ::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #fff;
      padding-left: 10px;
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