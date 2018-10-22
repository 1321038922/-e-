<template>
    <div class="pt110">
        <Header />
        <div class="lookcontent"
        v-infinite-scroll="downUpLoad"
        infinite-scroll-disabled="isOffDown"
       >
            <div class="item" v-for="item in person" :key=item.id>
                <div class="left">
                    <img :src="item.header" alt="">
                    <span>{{item.username}}</span>
                </div>
                <div class="right">
                    {{item.branchName}}
                </div>
            </div>
        </div>
        <span class="buttom-hint" v-if="isShow">没有更多了</span>
        <img v-if="isloading" src="../../../static/imgs/loading.gif" class="isloading">
    </div>
</template>

<script>

    export default {
        data(){
            return{
                person:'',
                page:1,
                isOffDown:true,
                isloading:true,
                isShow:false
            }
        },
        methods:{
            // &user_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1NDA3MjE3Mzg3MjksInVpZCI6OCwicHdkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE1NDAxMTY5Mzg3Mjl9.6QY7ZPT64s_g7NBdKxYOxWNskKWPfM-B1iJ0K5wmtRs
            getdata(){
                this.$axios.get(`/nationComment/userList.do?select_branch=${this.$route.query.id}&page=${this.page}&rows=15`).then(res => {
                    this.person = [...this.person,...res.rows]
                    this.isOffDown = false;
                    this.isloading = false;
                    if(res.rows.length == 0){ //没有数据了
                        this.isOffDown = true;
                        this.isShow = true
                    }
                })
            },
            downUpLoad(){
                this.page = this.page + 1
                this.isloading = true;
                this.getdata()
            }
        },
        created(){
            this.getdata()
        }
        
    }
</script>

<style scoped lang='scss'>
.isloading{
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
.item{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    justify-content: space-between;
    padding: 0 0.2rem;
    border-bottom: 1px solid #ddd;
    color: #666;
    .left{
        font-size: 0.34rem;
        img{
            float: left;
            width: 0.6rem;
            height: 0.6rem;
            margin: 0.2rem 0.14rem 0 0;
        }
    }
    .right{
        font-size: 0.28rem;
    }
}
</style>