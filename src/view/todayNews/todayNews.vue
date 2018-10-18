<template>
    <div>
        <Header></Header>
        <h1>党史上的今天</h1>
        <h2>
            1967年10月17日　中共中央、国务院等发出《
            关于按照系统实行革命大联合的通知》
        </h2>
        <p>
            1969年10月17日  根据毛泽东关于国际形势有可能
            突然恶化的估计，林彪作出《关于加强战备，
            防止敌人突然袭击的紧急指示》，要求全军进入
            紧急战备状态，抓紧武器的生产，指挥班子进入战
            时指挥位置等。18日，黄永胜等以“林副主席第一个号
            令”正式下达这个“紧急指示”，引起了各方面的极大震动。
        </p>
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
      this.$axios.get(`/proxy/proxy.do`).then(res => {
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

<style scoped>
h1 {
  font-size: 24px;
  font-weight: normal;
  margin: 0.2rem 0;
}
h2 {
  font-size: 20px;
  margin: 0.2rem 0;
  font-weight: normal;
}
p {
  font-size: 14px;
  margin: 0.2rem 0;
  font-weight: normal;
  line-height: 2;
}
</style>