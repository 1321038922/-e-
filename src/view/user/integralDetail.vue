<template>
    <div>
        <Header></Header>
        <div class="wrapper"
            v-infinite-scroll="getMore"
            infinite-scroll-disabled="loading">
            <div class="list clearfix" v-for="item in rows" :key="item.id">
                <div class="fll">
                    <div>{{item.typeName}}</div>
                    <div class="time">{{item.timeFormat}}</div>
                </div>
                <div class="flr">+{{item.singleDesc}}</div>
            </div>
        </div>
        <span class="buttom-hint" v-if="isShow">没有更多了</span>
        <img v-if="isLoading" src="../../../static/imgs/loading.gif" class="loading">
    </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [],
      page: 0,
      isShow: false,
      isLoading: false,
      loading: false
    };
  },
  methods: {
    getMore() {
      this.page = this.page + 1;
      this.getData();
    },
    getData() {

      this.$axios
        .get(`integral/integralList.do?page=${this.page}&rows=10`)
        .then(res => {
          console.log(res)
          this.rows = [...this.rows, ...res.rows];
          this.loading = false;
          if (res.rows.length == 0) {
            this.loading = true;
            this.isShow = true;
            this.isLoading = false;
          }
        });
    },
    created() {
      this.getData();
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding-top: 0.88rem;
  display: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
}
.loading {
  margin: 0 auto;
  display: block;
}
.buttom-hint {
  font-size: 14px;
  text-align: center;
  display: block;
  padding: 10px 0;
  color: #666;
}
.list {
  color: #333;
  height: 1.5rem;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
}
.time {
  font-size: 14px;
}
.flr {
  font-size: 14px;
  color: red;
  padding-top: 0.3rem;
  padding-right: 0.4rem;
}
.fll {
  padding-top: 0.3rem;
  line-height: 0.4rem;
  padding-left: 0.4rem;
}
</style>