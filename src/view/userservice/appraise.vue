<template>
    <div>
        <Header></Header>
        <div class="item p8">
             <button @click="$router.back()">个人总结</button>
             <button @click="$router.push('/appraiseItem')">民主评议</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.item{
    text-align: center;
    margin-top: 3rem;
}
    button {
    margin:0 auto;
      font-size: 14px;
      height: 0.82rem;
      border-radius: 5px;
      width: 4rem;
      background: #e3574f;
      border: 0;
      color: #fff;
    }
</style>