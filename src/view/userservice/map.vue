<template>
    <div >
        <Header/>
          <div class="baidumap" id="allmap">

        </div>
    </div>
</template>

<script>
// import BMap from 'BMap'
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
export default {
  methods: {
    map() {
      const BMap = window.BMap;
      let map = new BMap.Map('allmap'); // 创建Map实例
      let point = new BMap.Point(116.404, 39.915); // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(point, 15);
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.addControl(new BMap.NavigationControl(
        {
          offset: new BMap.Size(10, 60),
          anchor:window.BMAP_ANCHOR_TOP_LEFT
        }
      ));
      map.addControl(new BMap.GeolocationControl());
    }
  },
  mounted() {
    this.map();
  }
};
</script>

<style scoped>
.baidumap {
  height: 12.8rem;
  overflow: hidden;
  }
</style>