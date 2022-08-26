<template>
  <el-container>
    <el-header style="height: 31.43px;">
      <h2 style="margin: 0;">郊野公园导航系统</h2>
      <h5 style="margin: 0;">以上海市顾村公园为例</h5>
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" style="margin-top: 10px;">
        <el-tab-pane label="去公园" name="first">
          <ToPark></ToPark>
        </el-tab-pane>
        <el-tab-pane label="探索公园" name="second">
          <InParkExplore></InParkExplore>
        </el-tab-pane>
        <el-tab-pane label="基础信息" name="third">
          <ParkInfo></ParkInfo>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer>
      
    </el-footer>
  </el-container>
</template>

<script>
import InParkExplore from './inParkExplore.vue';
import ToPark from './toPark.vue';
import ParkInfo from './parkInfo.vue';

export default {
  name: 'HelloWorld',
  components: {
    InParkExplore,
    ToPark,
    ParkInfo
  },
  data() {
    return {
      activeName: "first",
    }
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
p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
</style>
