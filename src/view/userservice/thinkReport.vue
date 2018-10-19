<template>
    <div>
        <Header/>
        <div class="wraper p8">
            <div class="loading">
                <img src="../../../static/imgs/reviewing.png" alt="">
                 <p>正在审核中</p>
            </div>
           
            <button @click="$router.back()">关闭</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.wraper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
}
.loading img{
    width: 2rem;
    
}
p {
    font-size: 16px;
    display: block;
}
button {
    margin: 2rem auto;
      font-size: 14px;
      height: 0.82rem;
      border-radius: 5px;
      width: 4rem;
      background: #e3574f;
      border: 0;
      color: #fff;
    }
</style>