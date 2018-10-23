<template>
    <div>
        <Header></Header>
        <button v-if="isChange" @click="editor">
            编辑
        </button>
        <button v-else @click="save">
            保存
        </button>
        <ul class="Detail p8">
            <li> 
                <p class="fll">头像</p>   
                <img :src="this.userinfo.header" class="flr" v-if="isShow">
                <div v-else class="fileupload">
                    <img :src="imgurl" class="flr"> 
                    <input type="file" class="flr" @change="getfile($event)">  
                </div>
            </li>
            <li> 
                <p class="fll">姓名</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.username}}</p>  
                <input type="" class="flr" v-else v-model="userinfo.username"> 
            </li>
            <li> 
                <p class="fll">身份证</p>   
                <p class="flr" >{{this.userinfo.idCard}}</p>  
                 
            </li>
            <li> 
                <p class="fll">家庭住址</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.hometown}}</p>  
                 <input type="" class="flr" v-else v-model="userinfo.hometown"> 
            </li>
            <li> 
                <p class="fll">工作住址</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.address}}</p> 
                 <input type="" class="flr" v-else v-model="userinfo.address">  
            </li>
            <li> 
                <p class="fll">名族</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.nation}}</p>
                 <input type="" class="flr" v-else v-model="userinfo.nation">  
            </li>
            <li> 
                <p class="fll">微信号</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.wxNum}}</p>
                 <input type="" class="flr" v-else v-model="userinfo.wxNum">   
            </li>
            <li> 
                <p class="fll">QQ号</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.qqNum}}</p>
                 <input type="" class="flr" v-else v-model="userinfo.qqNum">   
            </li>
            <li > 
                <p class="fll">性别</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.sex == 0? '女':'男'}}</p> 
                 <span class="flr radio" v-else>
                    <input type="radio" name="sex" value="1" v-model="userinfo.sex">男 
                    <input type="radio" name="sex" value="0" v-model="userinfo.sex">女
                 </span>
            </li>
            <li> 
                <p class="fll">最高学历</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.education}}</p> 
                 <input type="" class="flr" v-else v-model="userinfo.education">  
            </li>
            <li> 
                <p class="fll">职称</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.jobRank}}</p>
                 <input type="" class="flr" v-else :model="userinfo.jobRank">   
            </li>
            <li> 
                <p class="fll">薪资水平</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.salary}}</p> 
                 <input type="" class="flr" v-else v-model="userinfo.salary">  
            </li>
            <li> 
                <p class="fll">入党时间</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.joinPartyTime}}</p> 
                <input type="date" class="flr" v-else v-model="userinfo.joinPartyTime">
            </li>
            <li> 
                <p class="fll">入党最后缴纳时间</p>   
                <p class="flr" v-if="isShow">{{this.userinfo.lastPayTime}}</p> 
                 <input type="date" class="flr" v-else v-model="userinfo.lastPayTime">
            </li>
            <li> 
                <p class="fll">当前身份</p>   
                <p class="flr" v-if="isShow">{{this.partyIdentity}}</p> 
                <select  class="flr" v-else v-model="userinfo.partyStatus">
                    <option v-for="item in this.optionlist" :value="item.id" :key="item.id">
                        {{item.name}}
                    </option>
                </select>  
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {},
      partyIdentity: "",
      isShow: true,
      isupdateimg:false,
      // joinPartyTime:'',
      // lastPayTime:'',
      isChange: true,
      optionlist: [
        {
          id: "0",
          name: "积极分子"
        },
        {
          id: "1",
          name: "预备党员"
        },
        {
          id: "2",
          name: "党员"
        }
      ],
      imgurl: ""
    };
  },
  methods: {
    getData() {
      this.$axios.get(`user/userInfo.do`).then(res => {
        if (res.code == 1) {
          this.partyIdentity = res.data.partyIdentity;
          this.userinfo = res.data
        }
      });
    },
    saveUserinfo() {
      let obj = {
        username: this.userinfo.username,
        hometown: this.userinfo.hometown,
        address: this.userinfo.address,
        nation: this.userinfo.nation,
        wxNum: this.userinfo.wxNum,
        qqNum: this.userinfo.qqNum,
        sex: this.userinfo.sex,
        education: this.userinfo.education,
        jobRank: this.userinfo.jobRank,
        salary: this.userinfo.salary,
        joinPartyTime: this.userinfo.joinPartyTime,
        lastPayTime: this.userinfo.lastPayTime,
        partyStatus: this.userinfo.partyStatus
      };
      if(this.isupdateimg){
            obj.header = this.userinfo.header
        }
      this.$axios.post(`/user/modifyInfo.do`, obj).then(res => {
        console.log(res);
        if (res.code == 1) {
        //   this.$store.commit("CHANGE_USERINFO", null);
            this.getData()
            this.$store.commit("CHANGE_USERINFO", this.userinfo);
        }
      });
    },
    getfile(event) {
      console.log(event.result);
      let _this = this;
      let file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function(evt) {
        let base64Data = evt.target.result;
        _this.imgurl = base64Data;
        console.log(base64Data)
        const reg = /data:image\/png;base64,/;
        let sendData = base64Data.replace(reg, "");
        _this.$axios
          .post(`/image/uploadBase64.do`, { myFile: sendData })
          .then(res => {
            // console.log(res);
            _this.userinfo.header = res.url;
            _this.isupdateimg = true;
            console.log(_this.userinfo.header);
          });
      };
      reader.readAsDataURL(file);
    },
    openPicker() {
      this.$refs.picker.open();
    },
    editor() {
      this.isChange = false;
      this.isShow = false;
    },
    save() {
      this.isChange = true;
      this.isShow = true;
      this.saveUserinfo();
    }
  },
  created() {
    this.getData();
    this.userinfo = this.$store.state.userinfo
    this.imgurl = this.$store.state.userinfo.header
  }
};
</script>

<style scoped lang="scss">
.fileupload input[type="file"] {
  height: 0.7rem;
  position: absolute;
  opacity: 0;
  top: 1rem;
  right: 0.2rem;
  width: 1rem;
}
button {
  position: fixed;
  right: 0.2rem;
  top: 0;
  z-index: 10000;
  font-size: 18px;
  color: whitesmoke;
  background: #c50206;
  border: 0px;
  background-color: transparent;
  height: 0.88rem;
  line-height: 0.88rem;
  outline: none;
}
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
  input {
    height: 0.5rem;
    margin-top: 0.1rem;
    border: none;
    direction: rtl;
  }
  input:focus {
    outline: none;
  }
  .radio {
    input {
      margin-left: 0.2rem;
      height: 0.24rem;
    }
  }
  select {
    height: 0.5rem;
    margin-top: 0.15rem;
    margin-right: 0.2rem;
  }
}
</style>