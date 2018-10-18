<template>
    <div>
        <Header :title="this.title"/>
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
      formData: {},
      title: ""
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(`/news/newsContent.do?newsId=${this.$route.query.newsId}`)
        .then(res => {
          if (res.code == 1) {
            this.formData = res.data;
            let tp = this.formData.type;
            switch (tp) {
              case 0:
                this.title = "信工新闻眼";
                break;
              case 3:
                this.title = "党建一点通";
                break;
              case 6:
                this.title = "随时随地学";
                break;
              case 4:
                this.title = "制度建设";
                break;
              case 2:
                this.title = "通知早知道";
                break;
              case 1:
                this.title = "特色活动";
                break;
            }
          }
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style>
.ql-align-center img {
  width: 100%;
  max-width: 100%;
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