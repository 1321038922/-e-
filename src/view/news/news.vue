<template>
    <div>
        <Header ></Header>
        <div class="news-option"
           v-infinite-scroll="getMore"
            infinite-scroll-disabled="loading"
        >
            <div class="news-item" v-for="item in rows" :key="item.id">
                <router-link :to="{path:'newsDetail', query:{newsId:item.newsId}}" class="item-wrap">
                    <div class="title-left" :style="`background-image: url(${item.pic})`">
                    </div>
                    <div class="item-title">
                        <div class="titles">
                            {{item.title}}
                        </div>
                        <span class="createtime clearfix">
                            <p class="fll"> {{item.currentTime}}</p>
                            <span class="flr">{{item.count}}</span>
                            <img class="flr" src="../../../static/imgs/12-eye.png" alt=""> 
                        </span>
                    </div>
                </router-link>
            </div>
            <span class="buttom-hint" v-if="isShow">没有更多了</span>
            <img v-if="isLoading" src="../../../static/imgs/loading.gif" class="loading">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [],
      type:'',
      page:1,
      loading: false,
      isShow:false,
      isLoading:false,
    };
  },
  methods: {
    getMore() {
      this.page = this.page + 1
      this.getData()
    },
    getData() {
      this.isLoading = true
      this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=${this.type}`).then(res => {
        this.rows = [...this.rows,...res.rows]
        this.loading =false
        if(res.rows.length == 0){
          this.loading =true
          this.isShow = true
          this.isLoading = false
        }
      });
    }
  },
  created() {
    // let rs = this.$route.name
    // switch (rs) {
    //   case 'news':
    //     this.type = 0;
    //     break;
    //   case 'oneClick':
    //     this.type = 3 ;
    //     console.log(this.type)
    //     break
    //   case 'study':
    //     this.type = 6 ;
    //     break
    //   case 'institutional':
    //     this.type = 4 ;
    //     break;  
    //   case 'specialEvent':
    //     this.type = 1 ;
    //     break;  
    //   case 'politicalstudy':
    //     this.type = 8 ;
    //     break;  
    // }
    this.type = this.$route.meta.type
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.loading{
  margin: 0 auto;
  display: block;
}
.news-option {
  padding-top: 0.88rem;
  display: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;

}
.news-item {
  .item-wrap {
    height: 2rem;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
    justify-content: space-around;
    .title-left {
      flex: 1;
      margin: 0.3rem 0.2rem;
      height: 1.4rem;
      background-size: cover;
      background-position: 50%;
    }
    .item-title {
      padding-top: 0.2rem;
      flex: 3;
      font-size: 16px;
      color: #333;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      .titles {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //将元素设为盒子伸缩模型显示
        -webkit-box-orient: vertical; //伸缩方向设为垂直方向
        -webkit-line-clamp: 2;  //超出3行隐藏，并显示省略号
      }
    }
  }
  .createtime {
    position: absolute;
    bottom: 0.25rem;
    font-size: 12px;
    color: #999;
    display: block;
    width: 100%;
    p {
      margin-right: 0.1rem;
    }
    span {
      margin-right: 0.2rem;
    }
    img {
      height: 0.2rem;
      padding: 0;
      display: block;
      margin-top: 0.05rem;
      margin-right: 0.1rem;
    }
  }
}
.buttom-hint {
  font-size: 14px;
  text-align: center;
  display: block;
  padding: 10px 0;
  color: #666;
}
</style>