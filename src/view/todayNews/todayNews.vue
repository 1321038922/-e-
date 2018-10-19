<template>
    <div>
        <Header></Header>
        <div v-html="this.message" class="content p8"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
     message:''
    };
  },
  methods: {
    getData() {
      this.$axios.get(`/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70505%2Findex.html`).then(res => {
        console.log(res)
          let str = res.split("<!--content-->")[1]
          this.message = str.split("<!--p1 end-->")[0]
          console.log(this.message);
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: normal;
  margin: 0.2rem 0;
}
h2 {
  font-size: 20px;
  margin: 0.2rem 0;
  font-weight: normal;
}
p {
  font-size: 14px;
  margin: 0.2rem 0;
  font-weight: normal;
  line-height: 2;
}
.content {
  font-size: 14px;
  margin: 0.2rem 0.2rem;

  line-height: 2;
}
</style>