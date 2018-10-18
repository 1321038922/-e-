<template>
    <div>
        <Header></Header>
        <div :model="this.formData" class="p8 content-wrap">
            <h3 class="title">
                {{formData.title}}
            </h3>
            <div class="content" v-html="formData.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
    return {
        formData:{}
    };
  },
  methods: {
    getData() {
      this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.newsId}`).then(res => {
          console.log(res)
       if(res.code == 1) {
           this.formData = res.data
           
       }
      });
    }
  },
  created() {
      this.getData()
  }
}
</script>

<style>
  .ql-align-center img {
    width: 100%;
    max-width:100%
  }
  
</style>

<style scoped lang="scss">
.content-wrap {
    width: auto;
    height: auto;
    overflow: hidden;

}
.title {
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  width: 100%;
}

.content {
  font-size: 14px;
  margin: 0.2rem 0.2rem;
  font-weight: normal;
  line-height: 2;

  
}
</style>