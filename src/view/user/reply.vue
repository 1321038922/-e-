<template>
    <div class="bg">
        <Header></Header>
        <div class="p8 wrapper">
            <div class="content-wrap clearfix " >
                <div class="title clearfix " >
                    <div class="photo-wrap fll">
                        <img class="photo" :src="this.formData.header" alt="">
                        </div>
                    <div class="fll headline">
                        <div class="name">{{this.formData.username}}</div>
                        <div class="headline-detail">
                            <img class="time" src="../../../static/imgs/时间.png">
                            <span>{{this.formData.currentTime}}</span>
                            <img class="song" src="../../../static/imgs/声音.png">
                            <span>公开</span>
                        </div>
                    </div>
                </div>
                <div class="content ">
                    {{this.formData.content}}
                </div>
            </div>
        </div>
        <div class="content-wrap clearfix " v-for="item in rows" :key="item.id">
                <div class="title clearfix " >
                    <div class="photo-wrap fll">
                        <img class="photo" :src="item.header" alt="">
                        </div>
                    <div class="fll headline">
                        <div class="name">{{item.username}}</div>
                        <div class="headline-detail">
                            <img class="time" src="../../../static/imgs/时间.png">
                            <span>{{item.timeFormat}}</span>
                            <img class="song" src="../../../static/imgs/声音.png">
                            <span>公开</span>
                        </div>
                    </div>
                </div>
                <div class="content ">
                    {{item.comment}}
                </div>
            </div>
       <div class="bottom">没有数据</div>
       <div class="submit">
           <input placeholder="评论内容" v-model="content" type="text">
           <button @click="handleSubmit">提交</button>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                rows:[],
                formData:'',
                content:'',
                page:1
            }
        },
        methods:{
            getData() {
                this.$axios.get(`/forum/forumCommentList.do?page=${this.page}&rows=10&forum_id=${this.formData.forumId}`)
                .then (res => {
                    this.rows = res.rows
                })
            },
            handleSubmit() {
                let obj = {
                    forum_id : this.formData.forumId,
                    comment : this.content
                }
                this.$axios.post('forum/addComment.do', obj).then(res => {
                    console.log(res)
                     let data = res.data
                        this.rows = [data,...this.rows]
                })
            }
        },
        created() {
            this.formData = this.$route.params.item
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
.bg {
    background: #efeff4;
    overflow: hidden;
}
.wrapper {
    margin: 0.2rem;
}
.content-wrap {
  font-size: 16px;
  padding: 0.32rem;
  border: 1px solid #ddd;
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
.content {
  height: 1rem;
  line-height: 1rem;
}
.bottom {
    text-align: center;
    font-size: 16px;
    color: #999;
    padding: 0.2rem 0;
}
.submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid #ddd;
    background-color: #fff;
    display: block;
    height: 0.8rem;
    input {
        display: block;
        height: 0.6rem;
        margin-top: 0.05rem;
        margin-left: 0.2rem;
        float: left;
        padding-left: 4px;
        border: 1px solid #c50206;
        width: 80%;
        border-radius: 4px;
    }
    button {
        margin-top: 0.05rem;
        display: block;
        float: right;
        height: 0.6rem;
        width: 0.8rem;
        background: #f00;
        color: #fff;
        border-radius: 4px;
        border: 0;
    }
}
</style>