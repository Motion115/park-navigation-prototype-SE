<template>
  <el-container>
    <el-header style="height: 31.43px;"><h2 style="margin: 0;">公园信息</h2></el-header>
    <el-main>
      <p>
        <b>开放时间</b><br/>
        全年 08:00-17:00(最晚入园16:30)<br/>
        <b>优待政策</b><br/>
          老人：65周岁（含）以上，凭有效证件免费<br/>
          残疾军人：凭军残证免费<br/>
          军休干部：凭军人证免费<br/>
          烈士遗属、病故军人遗属等：凭有效证件免费<br/>
          离休干部：凭离休证免费<br/>
          儿童：一名成人可免费携带一名1.3米（含）以下或6周岁（含）以下儿童入园，免费<br/>
        <b>服务设施</b><br/>
        <u>停车场</u> ￥4／小时<br/>
        [顾村公园1号门停车场] 顾村公园1号门（沪太路）-850库位<br/>
        [顾村公园3号门停车场] 顾村公园3号门（镜泊湖路）-2000库位<br/>
        <u>园内交通</u> ￥10／人<br/>
        公园1.2.3号门提供园内观光车服务，工作时间8:30-17:00
      </p>
    </el-main>
    <el-footer>
      
    </el-footer>
  </el-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'parkInfo',
  components: {
    // HelloWorld
  },
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
</style>
