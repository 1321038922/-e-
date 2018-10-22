<template>
    <div>
        <Header></Header>
        <div class="p8">
            <p class="title">评议须知</p>
            <div class="content" v-html="content.content">
                
            </div>
            <div>
                <div class="button">
                    <select name="slectbox" class="branchSelect" v-model="value">
                        <option value="0" >请选择</option> 
                        <option v-for="item in select" :key=item.id :value=item.id >{{item.branch}}</option>                     
                    </select>
                    <button class="flr" @click="handlenext">下一步</button>
                </div> 
            </div>
        </div> 
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "0",
      content: "",
      select: ""
    };
  },
  methods: {
    getcontent() {
      this.$axios.get(`/nationComment/getComment.do`).then(res => {
        this.content = res;
        console.log(res)
      });
    },
    getselect() {
      this.$axios.get(`/branch/findAll.do`).then(res => {
        this.select = res.rows;
        console.log(this.select)
      });
    },
    handlenext() {
        if(this.value == "0"){
            Toast('请先选择一项数据')
        }else{
            this.$router.push({name:'appraiseDetail',query:{id:this.value}})
        }
    }
  },
  created() {
    this.getcontent();
    this.getselect();
  }
};
</script>


<style scoped lang="scss">
.title {
  text-align: center;
  font-size: 16px;
  margin-top: 0.5rem;
}

.content {
  padding: 0.2rem;
  margin: 0.25rem 0;
  font-size: 0.28rem;
  color: #666;
    /deep/ p {
    margin: 0.2rem 0;
  }
}

.button {
  margin: 1.5rem 0.8rem 0;
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  select {
    padding-left: 0.2rem;
    width: 3.2rem;
    margin-right: 0.2rem;
    border-radius: 4px;
    background: #c50206;
    color: #fff;
    option {
      background: #fff;
      color: #000;
      width: 100%;
    }
  }
  button {
    width: 1.8rem;
    border-radius: 4px;
    background: #c50206;
    border: none;
    color: #fff;
    outline: none;
  }
}
</style>