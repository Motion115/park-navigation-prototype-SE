<template>
  <el-container>
    <el-header style="height: 31.43px;"><h2 style="margin: 0;">探索 - 顾村公园</h2></el-header>
    <el-main>
      <baidu-map class="map" 
        :scroll-wheel-zoom="true"
        :center="start"
        :zoom="17">
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-marker :position="start"></bm-marker>
        <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->
        <bm-walking :start="start" :end="ends[0]" :panel="false" v-if="routes[0]"></bm-walking>
        <bm-walking :start="start" :end="ends[1]" :panel="false" v-if="routes[1]"></bm-walking>
        <bm-walking :start="start" :end="ends[2]" :panel="false" v-if="routes[2]"></bm-walking>
        <bm-walking :start="start" :end="ends[3]" :panel="false" v-if="routes[3]"></bm-walking>
        <bm-walking :start="start" :end="ends[4]" :panel="false" v-if="routes[4]"></bm-walking>
        <bm-walking :start="start" :end="ends[5]" :panel="false" v-if="routes[5]"></bm-walking>
        <bm-walking :start="start" :end="ends[6]" :panel="false" v-if="routes[6]"></bm-walking>
        <bm-walking :start="start" :end="ends[7]" :panel="false" v-if="routes[7]"></bm-walking>
        <bm-walking :start="start" :end="ends[8]" :panel="false" v-if="routes[8]"></bm-walking>
      </baidu-map>
      <el-tabs v-model="activeName" style="margin-top: 10px;">
        <el-tab-pane label="公园介绍" name="first">
          <!-- <p>公园介绍待上传，敬请期待……</p> -->
          <p>&emsp;&emsp;顾村公园是一座集生态防护、景观观赏、休闲健身、文化娱乐、旅游度假等功能于一体的大型城市郊野森林公园。是上海市外环生态工程的重要组成部分。规划总用地430公顷，以中心河为界分为两期。公园内水系、湿地、植物群落，田园风光相交汇，并融合和传承历史人文，体现人与自然和谐相处的理念。公园位于上海市宝山区外环线S20以北，东起沪太路，西至陈广路，地铁7号线可直达顾村公园，交通十分便利。</p>
          <p>&emsp;&emsp;顾村公园规划定位是以生态、休闲、娱乐为主体的大型城市郊野森林公园，营造人与自然和谐共存的生态环境。公园以中心河为界，分两期实施，一期规划占地180公顷，二期为244.7公顷。公园一期建设布局为“一轴、一带、三区、七园”，即悦林大道（原陈富路）景观发展轴，外环100米生态防护林带，东南北三个主入口的景观服务配套区，七园为郊野森林园、异域风情园、森林漫步园、森林烧烤园、儿童森林嘉年华、森林休闲运动园、植物观赏园。</p>
          <p>&emsp;&emsp;公园二期规划有“一弧、一轴、两带、三片区、五心、十区”，即特色景观弧生态廊道，悦林大道（原陈富路）景观发展轴，规划S6、S7高架两侧宽度100-200米的生态防护林带，“三片区”为悦林湖森林水景片区、养生农庄片区、森林拓展片区，“五心”为悦林湖景观中心、青少年活动中心、康健活动中心、养生农庄休闲中心、森林拓展活动中心，“十区”为悦林湖景区、中心码头景区、森林草甸区、水上森林景区、康健活动区、青少年活动区、花木和园艺展示区、养生农庄区、森林拓展区、奇石园区等主题园区，以不同形态的景观效果展示植物群落的生态效应。同时，公园还将宝山工业文化、国际民间艺术文化融入其中，传承区域历史文脉，彰显具有宝山特色的文化内涵。</p>
          <p><img src="http://www.gucunpark.net/gygk/UploadFiles_7254/201911/2019112810222678.jpg" alt/></p>
          <p><img src="http://www.gucunpark.net/gygk/UploadFiles_7254/201911/2019112810222670.jpg" alt/></p>
          <p><el-link href="http://www.gucunpark.net/" type="primary"><i class="bi bi-info-circle-fill"></i> 了解更多</el-link></p>
        </el-tab-pane>
        <el-tab-pane label="特色景点" name="second">
          <!-- <p>特色景点待上传，敬请期待……</p> -->
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="名称"
              width="140">
            </el-table-column>
            <el-table-column
              label="更多操作">
              <template slot-scope="scope">
                <el-link type="primary" :href="scope.row.link"> <i class="bi bi-info-circle-fill"></i> 详细信息 </el-link>&emsp;
                <el-link :type="routes[scope.$index]?'info':'primary'" @click="showRoute(scope)"> <i class="bi bi-sign-turn-right-fill"></i> 到这去 </el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="评价信息" name="third">
          <!-- <p>评价信息待上传，敬请期待……</p> -->
          <h3 style="margin-top: 0; margin-bottom: 10px;">综合评分</h3>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          <h3 style="margin-top: 20px; margin-bottom: 10px;">历史评价</h3>
          <el-row v-for="(item, index) in comments" :key="index">
            <h4 style="float: left; margin-top: 4px; margin-bottom: 6px;">{{ index+1 }}#</h4>
            <el-rate
              v-model="item.value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              style="margin-top: 4.57px; margin-left: 40.12px;">
            </el-rate>
            <p style="margin-top: 10px; margin-bottom: 10px;"> {{item.content}} </p>
          </el-row>
          <h3 style="margin-top: 10px; margin-bottom: 10px;">上传评价</h3>
          <el-rate
            v-model="comment.value"
            show-score
            text-color="#ff9900"
            score-template="{value}"
            style="margin-bottom: 10px;">
          </el-rate>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="comment.content">
          </el-input>
          <el-button type="primary" size="medium" icon="el-icon-upload" @click="uploadComment" style="margin-top: 10px; width: 100%;">
            上传评价
          </el-button>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer>
      
    </el-footer>
  </el-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'inParkExplore',
  components: {
    // HelloWorld
  },
  data() {
    return {
      start: {
        lng: 121.37664,
        lat: 31.34461,
      },
      ends: [
        {
          lng: 121.368683,
          lat: 31.342434,
        },
        {
          lng: 121.369482,
          lat: 31.341188,
        },
        {
          lng: 121.377567,
          lat: 31.346647,
        },
        {
          lng: 121.364932,
          lat: 31.343964,
        },
        {
          lng: 121.384776,
          lat: 31.351208,
        },
        {
          lng: 121.376925,
          lat: 31.3447,
        },
        {
          lng: 121.360737,
          lat: 31.342245,
        },
        {
          lng: 121.373511,
          lat: 31.346489,
        },
        {
          lng: 121.380019,
          lat: 31.346,
        },
      ],
      activeName: 'first',
      tableData: [{
        name: '月季园',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=17',
        pos: {
          lng: 121.376489,
          lat: 31.35461,
        }
      }, {
        name: '东方鸟世界',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=15',
        pos: {
          lng: 121.376489,
          lat: 31.35461,
        }
      }, {
        name: '自然谷恐龙园',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=13',
        pos: {
          lng: 121.376489,
          lat: 31.35461
        }
      }, {
        name: '樱花观赏区',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=12',
        pos: {
          lng: 121.376489,
          lat: 31.35461
        }
      }, {
        name: '异域风情园',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=11',
        pos: {
          lng: 121.376489,
          lat: 31.35461
        }
      }, {
        name: '森林运动园',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=7',
        pos: {
          lng: 121.376489,
          lat: 31.35461
        }
      }, {
        name: '森林烧烤园',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=6',
        pos: {
          lng: 121.376489,
          lat: 31.35461
        }
      }, {
        name: '森林漫步园',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=5',
        pos: {
          lng: 121.376489,
          lat: 31.35461
        }
      }, {
        name: '儿童森林嘉年华',
        link: 'http://www.gucunpark.net/yyjd/ShowPhoto.asp?PhotoID=1',
        pos: {
          lng: 121.376489,
          lat: 31.35461
        }
      },],
      routes: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      value: 4.67,
      comments: [
        {
          value: 4,
          content: "顾村公园在春季办上海樱花节。现在15号线通车，可以到公园北门，去年去还是1号线转宝山公交车到南门。今年买票挺麻烦，要下载宝山汇APP，才能买入园的20元票。在园口现场买票，则是涵盖乐园项目的50元联票，有些小贵。",
        },
        {
          value: 5,
          content: "家小区门口的公园，每年樱花季必来，平时也隔三岔五带小朋友来运动野餐扎帐篷。盛樱季全部开放的时候，确实是蛮震撼的，难怪每年到了这个季节都深受上海人民追捧。",
        },
        {
          value: 4,
          content: "园内聚集了世界近80种原种或品种。阳春三月，早樱开放，尤其樱花岛上，繁花盛开，不去日本也可以欣赏如此梦幻般的樱花，令人感动。 因前段时间低温阴雨影响了花期，真正大面积开放，要到月底。届时您将与成片白色樱花和樱吹雪来一场浪漫的邂逅~",
        },
      ],
      comment: {
        value: 4,
        content: "",
      },
    }
  },
  methods: {
    // 展示导航路径
    showRoute(scope) {
      let tmpRoutes = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]
      tmpRoutes[scope.$index] = !this.routes[scope.$index]
      this.routes = tmpRoutes
    },
    // 上传评论
    uploadComment() {
      if (this.comment.content.length === 0)
      {
        this.$message({
          showClose: true,
          type: 'error',
          message: `上传的评价内容不能为空，请重新填写`
        });
      }
      else
      {
        let l = this.comments.push(this.comment)
        this.value = 0
        for (let i = 0; i < l; i++) {
          this.value += this.comments[i].value
        }
        this.value = (this.value / l).toFixed(2)
        this.comment = { value: 4, content: "" }
      }
    },
  },
  mounted() {
    // 获取信息失败
    // this.$message({
    //   showClose: true,
    //   type: 'error',
    //   message: `获取信息失败，请检查您的网络环境后重试`
    // });
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
