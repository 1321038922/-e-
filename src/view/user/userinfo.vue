<template>
    <div>
        <Header></Header>
        <ul class="Detail p8">
            <li> 
                <p class="fll">头像</p>   
                <img :src="$store.state.userinfo.header" class="flr">   
            </li>
            <li> 
                <p class="fll">姓名</p>   
                <p class="flr">{{$store.state.userinfo.username}}</p>   
            </li>
            <li> 
                <p class="fll">身份证</p>   
                <p class="flr">{{$store.state.userinfo.idCard}}</p>   
            </li>
            <li> 
                <p class="fll">家庭住址</p>   
                <p class="flr">{{$store.state.userinfo.hometown}}</p>   
            </li>
            <li> 
                <p class="fll">工作住址</p>   
                <p class="flr">{{$store.state.userinfo.address}}</p>   
            </li>
            <li> 
                <p class="fll">名族</p>   
                <p class="flr">{{$store.state.userinfo.nation}}</p>   
            </li>
            <li> 
                <p class="fll">微信号</p>   
                <p class="flr">{{$store.state.userinfo.wxNum}}</p>   
            </li>
            <li> 
                <p class="fll">QQ号</p>   
                <p class="flr">{{$store.state.userinfo.qqNum}}</p>   
            </li>
            <li> 
                <p class="fll">性别</p>   
                <p class="flr">{{$store.state.userinfo.qqNum == 0? '女':'男'}}</p>   
            </li>
            <li> 
                <p class="fll">最高学历</p>   
                <p class="flr">{{$store.state.userinfo.education}}</p>   
            </li>
            <li> 
                <p class="fll">职称</p>   
                <p class="flr">{{$store.state.userinfo.jobRank}}</p>   
            </li>
            <li> 
                <p class="fll">薪资水平</p>   
                <p class="flr">{{$store.state.userinfo.salary}}</p>   
            </li>
            <li> 
                <p class="fll">入党时间</p>   
                <p class="flr">{{$store.state.userinfo.joinPartyTime}}</p>   
            </li>
            <li> 
                <p class="fll">入党最后缴纳时间</p>   
                <p class="flr">{{$store.state.userinfo.lastPayTime}}</p>   
            </li>
            <li> 
                <p class="fll">当前身份</p>   
                <p class="flr">{{this.partyIdentity}}</p>   
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      partyIdentity: ""
    };
  },
  methods: {
    getData() {
      this.$axios.get(`user/userInfo.do`).then(res => {
        if (res.code == 1) {
          this.partyIdentity = res.data.partyIdentity;
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
.Detail {
  font-size: 14px;
  img {
    height: 0.7rem;
    padding-top: 0.05rem;
  }
  .fll {
    padding-left: 0.2rem;
  }
  .flr {
    padding-right: 0.2rem;
  }
  li {
    color: #333;
    border-bottom: 1px solid #ccc;
    height: 0.8rem;
    line-height: 0.8rem;
  }
}
</style>