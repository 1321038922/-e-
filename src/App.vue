<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration:none;
  }
  .flr {
    float: right;
  }
  .fll {
    float: left ;
  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
.p8 {
  padding-top: 0.88rem;
}

</style>
