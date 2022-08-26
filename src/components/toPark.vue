<template>
  <el-container>
    <el-header style="height: 31.43px;"><h2 style="margin: 0;">导航</h2></el-header>
    <el-main>
      <el-input
        placeholder="请输入公园名"
        @keyup.enter.native="search"
        v-model="park">
        <i slot="suffix" @click="search" class="el-input__icon el-icon-search"></i>
      </el-input>
      <br/><br/>
      <baidu-map 
        class="map" 
        :key = "mapChange"
        :scroll-wheel-zoom="true"
        :center="parkPos"
        :zoom="10">
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-marker :position="nowPos"></bm-marker>
        <bm-control anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
          <input type="radio" id="drive" value="drive" v-model="guideMode">
          <label>驾车</label>
          <input type="radio" id="public" value="public" v-model="guideMode">
          <label>公交</label>
          <input type="radio" id="walk" value="walk" v-model="guideMode">
          <label>步行</label>
        </bm-control>
      
        <bm-driving :start="nowPos" :end="parkPos" :panel="false" v-if="guideMode === 'drive'"></bm-driving>
        <bm-transit :start="nowPos" :end="parkPos" :panel="false" v-if="guideMode === 'public'"></bm-transit>
        <bm-walking :start="nowPos" :end="parkPos" :panel="false" v-if="guideMode === 'walk'"></bm-walking>
      </baidu-map>
    </el-main>
    <el-footer>
      
    </el-footer>
  </el-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'toPark',
  components: {
    // HelloWorld
  },
  data() {
    return {
      parkChoice:0,
      keyword:"",
      guideMode:'drive',
      nowPos:{lng: 121.215252,
          lat: 31.286054},
      mapChange:true,
      // nowPos:{},
      parkPos:{lng: 121.37664,
          lat: 31.34461},
      park:"",
      //["顾村公园","郊野公园","人民公园","古猗园","古城公园","森林公园","世纪公园"], 
      // [{name:"顾村公园",pos:{lng: 121.37664,lat: 31.34461}},
      //   {name:"郊野公园",pos:{lng: 121.37664,lat: 31.34461}}],
      outerRoute : false,
    }
  },
  watch:{
    guideMode(){
      console.log("change")
      this.mapChange = ~ this.mapChange
    },
    
  },
  methods: {
    search(){
      console.log("park changed",this.park)
      //window.loadBMap("getParkLoc");
      //window.loadBMap("initBaiduMapScript");
    }
  },
  created() {
    var that = this;
    window.loadBMap = (callback) =>{
        let script = document.createElement('script')
        script.src = 'https://api.map.baidu.com/api?v=2.0&ak=XhLjiuRGtvb1yc7WoG4AkziwyoZjEMk3&callback=' + callback
        console.log(script)
        document.body.appendChild(script)
    }

    window.getParkLoc = ()=>{
      console.log("getparks")
      var ls = new window.BMap.LocalSearch("上海市");
      
      console.log(that.park)
      ls.search(that.park);
      
      ls.setSearchCompleteCallback(function (searchResult) {
        console.log("searchResult",searchResult.Kr)
        that.parkPos = {lng:searchResult.Kr[0].point.lng,lat:searchResult.Kr[0].point.lat}
        console.log("parkPos",that.parkPos)
      });
      that.mapChange = ~ that.mapChange
    }
    
    //定义回调函数 
    window.initBaiduMapScript = () => { 
      console.log("getloc")
      that.BMap = window.BMap;
      var geolocation = new that.BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
          if (this.getStatus() == 0) {//成功获取位置信息
            console.log(r.longitude - 0)
            that.nowPos = { lng: r.longitude - 0, lat: r.latitude-0 };
            console.log("pos",that.nowPos);
            that.mapChange = ~that.mapChange
          } else {//无法获取到位置信息
            that.nowPos = { lng: "", lat: "" };
          }
      },
      {
          enableHighAccuracy: true
      });
      that.mapChange = ~ that.mapChange
    };
    
    // window.loadBMap("initBaiduMapScript");
    
  },
  beforeMount(){
    console.log("beforeMount",this)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.map {
  width: 100%;
  height: 300px;
}
.btn {
  width: 90%;
}
p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
img {
  width: 100%;
}
</style>
