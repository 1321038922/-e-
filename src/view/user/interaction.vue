<template>
    <div>
        <Header/>
        <div class="p8"
        v-infinite-scroll="getMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="200"
            v-if="this.ispublish"
        >
            <ul class="wrapper" 
            v-for="item in rows" :key="item.id">
                <li class="content-wrap clearfix">
                    <div class="title clearfix" >
                        <div class="photo-wrap fll">
                            <img class="photo" :src="item.header" alt="">
                            </div>
                        <div class="fll headline">
                            <div class="name">{{item.username}}</div>
                            <div class="headline-detail">
                                <img class="time" src="../../../static/imgs/时间.png">
                                <span>{{item.currentTime}}</span>
                                <img class="song" src="../../../static/imgs/声音.png">
                                <span>公开</span>
                            </div>
                        </div>
                        <div class="flr type">
                            党员互动
                        </div>
                    </div>
                    <div class="content ">
                        {{item.content}}
                    </div>
                    <div class="flr">
                        <span class="reply">     
                            <span @click="handlereply(item)">回复</span>
                            <img class="reply-icon" src="../../../static/imgs/回复.png">
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <span class="buttom-hint" v-if="isShow">没有更多了</span>
        <img v-if="isLoading" src="../../../static/imgs/loading.gif" class="loading">
        <div class="fabu" @click="handlePublish">
            <img src="../../../static/imgs/发布btn.png" alt="">
        </div>
        <div class="bg" >
          <form action="" class="publish"> 
            <textarea  class="publish-text" v-model="content"></textarea>
            <button class="fll submit" @click="handleSubmit">提交</button>
            <button class="flr cancel" @click="handlecancel">取消</button>
          </form>
          
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [],
      page: 1,
      loading: true,
      isShow: false,
      isLoading: true,
      content:'',
      ispublish: true,
    };
  },
  methods: {
    getMore() {
      this.page = this.page + 1;
      this.getData();
    },
    getData() {
      this.isLoading = true;
      this.$axios
        .get(`/forum/forumList.do?page=${this.page}&rows=10`)
        .then(res => {
          this.rows = [...this.rows, ...res.rows];
          this.loading = false;
          this.isLoading = false;
          if (this.rows.length == res.total) {
            this.loading = true;
            this.isShow = true;
            this.isLoading = false;
          }
        });
    },
    handleSubmit() {
      let type = 1
      let formData = {
        type,
        content:this.content
      }
      this.$axios.post('forum/saveForum.do', formData).then(res =>{
        console.log(res)
        this.ispublish = true
        let data = res.data
        this.rows = [data,...this.rows]
      })
    },
    handlePublish() {
      this.ispublish = false
      console.log(1)
    },
    handlereply(item){
      console.log(item)
      this.$router.push({name:'reply', params:{item:item}})
    },
    handlecancel () {
      this.content = '',
      this.ispublish = true
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.dn {
  display: none;
}
.wrapper {
  background: #efeff4;
  padding-bottom: 0.2rem;
}
.content-wrap {
  font-size: 16px;
  padding: 0.32rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: #fff;
}
.photo {
  border-radius: 50%;
  width: 0.7rem;
  height: 0.7rem;
}
.photo-wrap {
  margin-right: 0.32rem;
}
.headline {
  .name {
    font-size: 18px;
  }
  .headline-detail {
    font-size: 12px;
    color: #666;
  }
}
.type {
  color: red;
  border: 0.01rem solid #f00;
  border-radius: 15%/50%;
  font-size: 12px;
  padding: 3px 8px;
}
.content {
  height: 1rem;
  line-height: 1rem;
}
.reply {
  display: block;
  span {
    float: right;
    line-height: 0.5rem;
    height: 0.5rem;
    display: block;
  }
}
.reply-icon {
  height: 0.5rem;
  display: block;
  float: right;
}
.fabu {
  position: fixed;
  right: 10px;
  bottom: 70px;
  z-index: 999;
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
.bg {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 99999;
    background: rgba(0,0,0,.5);
    font-size: 14px;
    .submit {
      height: 0.6rem;
      border: 0;
      background: #ef473a;
      color: #fff;
      border-radius: 4px;
      width:0.6rem ;
    }
    .cancel {
      height: 0.6rem;
      border: 0;
      background: #fff;
      border-radius: 4px;
      width:0.6rem ;
    }
}
.publish {
  left: 0;
  right: 0;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background: #f1f1f1;
  display: block;
  
}
.publish-text {
  width: 100%;
  height: 1.5rem;
  border-radius: 3px;
  padding: 0.02px;
  margin-bottom: 10px;
  display: block;
  border: 0;
}
</style>