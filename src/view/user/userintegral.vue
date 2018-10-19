<template>
    <div>
        <Header></Header>
        <div class="bg p8">
            <img src="../../../static/imgs/jifen.png" alt="">
            <p class="totalScore">{{this.$store.state.userinfo.totalScore}}</p>
        </div>
        <div class="options">
             <router-link to="/integralDetail" class="options-item clearfix">
                <img src="../../../static/imgs/积分明细icon.png" alt="" class="fll options-img">
                    积分明细
                <img class="next flr" src="../../assets/next.png" alt="">
            </router-link>
        </div>
        <ul class="Detail">
            <li class="first clearfix">
                <p class="fll">积分规则</p>
                <img class="flr" src="../../../static/imgs/问号icon.png" alt="">
            </li>
            <li> 
                <p class="fll">登录APP</p>   
                <p class="flr">5</p>   
            </li>
            <li> 
                <p class="fll">完善个人信息</p>   
                <p class="flr">2</p>   
            </li>
            <li> 
                <p class="fll">查看积分</p>   
                <p class="flr">1</p>   
            </li>
            <li> 
                <p class="fll">按时交党费</p>   
                <p class="flr">10</p>   
            </li>
            <li> 
                <p class="fll">查看通知</p>   
                <p class="flr">2</p>   
            </li>
            <li> 
                <p class="fll">了解学院工作动态</p>   
                <p class="flr">5</p>   
            </li>
            <li> 
                <p class="fll">上交思想汇报经审核通过</p>   
                <p class="flr">5</p>   
            </li>
            <li> 
                <p class="fll">主动学习相关文件</p>   
                <p class="flr">10</p>   
            </li>
            <li> 
                <p class="fll">认真撰写心得总结并提交，审核通过</p>   
                <p class="flr">5</p>   
            </li>
            <li> 
                <p class="fll">提交个人总结，并参与评议</p>   
                <p class="flr">2</p>   
            </li>
            <li> 
                <p class="fll">积极参与互动</p>   
                <p class="flr">5</p>   
            </li>
            <li> 
                <p class="fll">学习党建知识</p>   
                <p class="flr">5</p>   
            </li>
            <li> 
                <p class="fll">学习党史</p>   
                <p class="flr">10</p>   
            </li>
            <li> 
                <p class="fll">创先争优事迹</p>   
                <p class="flr">10</p>   
            </li>
            <li> 
                <p class="fll">学习党章，学习习近平总书记系列讲话</p>   
                <p class="flr">10</p>   
            </li>
            <li> 
                <p class="fll">用镜头记录两学一做过程中令人感动的人和事</p>   
                <p class="flr">3</p>   
            </li>
            <li> 
                <p class="fll">关注并积极参与特色活动</p>   
                <p class="flr">5</p>   
            </li>
            <li> 
                <p class="fll">制度化，常态化建设</p>   
                <p class="flr">5</p>   
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                formData:{}
            }
        },
        methods:{
            getData(){
                this.$axios.get(`user/userInfo.do`).then(res =>{
                    console.log(res)
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
.bg img{
    position: relative;
    width: 100%;
    display: block;
}
.options {
  font-size: 16px;

  .options-item {
    color: #666;
    height: 1rem;
    line-height: 1rem;
    display: block;
    width: 100%;
    border-bottom: 1px solid #ddd;
    .options-img {
      margin: 0.2rem;
      height: 0.6rem;
      display: block;
    }
  }
  .next {
    display: block;
    margin-top: 0.35rem;
    height: 0.4rem;
  }
}
.Detail {
    font-size: 14px;
    .first{
        color: #333;
        background: #eee;
        img {
            display: block;
            margin-top: 0.15rem;
            padding-right: 0.1rem;
        }
        p{
            padding-left: 0.2rem;
        }
    }
    .fll{
        padding-left: 0.2rem;
    }
    .flr{
        color: red;
        padding-right: 0.1rem;
    }
    li{
        color: #999;
        border-bottom: 1px solid #ccc;
        height: 0.6rem;
        line-height: 0.6rem;
    }
}
.totalScore {
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    color: aliceblue;
    left: 46%;
    top:2.1rem;
}
</style>