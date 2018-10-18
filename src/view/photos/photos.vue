<template>
    <div>
        <Header></Header>
        <div class="photos-wrap p8">
            <div class="photos" v-for="item in rows" :key="item.id">
                <router-link :to="{path:'newsDetail', query:{newsId:item.newsId}}" class="photo-item">
                    <i><img :src="item.pic" ></i>
                    <div class="title">{{item.title}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rows: []
    };
  },
  methods: {
    getData() {
      this.$axios.get(`/news/newsList.do?type=7`).then(res => {
        console.log(res);
        if (res.code == 1) {
          this.rows = res.rows;
        }
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.photos-wrap {
    display: flex;
     justify-content: space-between;
    flex-wrap: wrap;
    justify-content: start;
    
}
.photos {
    width: 3.2rem;
    margin-top: 0.4rem;
    margin-left: 0.28rem;
   .photo-item {
       font-size: 14px;
       text-align: center;
       color: #666;

       .title {
         width: 3.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //将元素设为盒子伸缩模型显示
        -webkit-box-orient: vertical; //伸缩方向设为垂直方向
        -webkit-line-clamp: 2;  //超出2行隐藏，并显示省略号
       }
   }
   img {
       width: 3.2rem;
       height: 2.4rem;
       display: block;
   }
}
</style>