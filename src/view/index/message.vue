<template>
    <div>
        <Header/>
        <div class="p8">
            <router-link :to="{path:'messageDetail', query: {newsId:item.newsId}}" class="row " v-for="item in rows" :key="item.id">
            <div class="row-item">
                <img src="../../../static/imgs/iconfont.png" alt="">
            </div>
            <div class="node-details">
                <p>{{item.title}}</p>
                <div class="node-time">
                    {{item.currentTime}}
                </div>
            </div >  
        </router-link>
        <span class="buttom-hint" v-if="isShow">没有更多了</span>
        <img v-if="isLoading" src="../../../static/imgs/loading.gif" class="loading">
        </div>
        <ButtomNav/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [],
      type:'',
      isShow:false,
      isLoading:false,
    };
  },
  methods: {
    getData() {
        this.isLoading = true
      this.$axios.get(`/news/newsList.do?type=2`).then(res => {
        if (res.code == 1) {
          console.log(res)
          this.rows = res.rows
         
        }
         this.isLoading = false
         this.isShow = true
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.loading{
  margin: 0 auto;
  display: block;
}
.row{
    height: 2.44rem;
    color: #666;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    .row-item{
        flex: 1;
        line-height: 2.44rem;
        text-align: center;
        img {
            height: 0.8rem;
        }
    }
    .node-details {
        flex: 3;
        font-size: 16px;
        padding-top: 40px;
        padding-right: 15px;
        line-height: 0.4rem;
        .node-time {
            font-size: 14px;
            padding-top: 0.1rem;
        }
    }  
}
.buttom-hint{
        font-size: 14px;
        text-align: center;
        display: block;
        padding-top: 10px;
        color: #666;
        padding-bottom: 1.22rem;
}
</style>