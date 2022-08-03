<!--
  作者：hcodeb
  时间：2022年08月01日 11:03:29
-->
<template>
  <div>
    <p class="title">
      疫情地图
    </p>
    <tabs :currentIndex="currentIndex">
      <tab index="1" label="中国疫情">
        <div id="chinaMap"></div>
      </tab>
      <tab index="2" label="全球疫情">
        <div id="worldMap"></div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import api from '../api'
import Tabs from './tabs/Tabs.vue'
import axios from "../utils/request";


export default {
  components: { Tabs },
  name: 'EchartsMap',
  data() {
    return {
      currentIndex: '1'
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    axios.all([api.getNcovCity({
      api_key: "77710d287ef93c12",
      type: 'epidemicInfectionData'
    }), api.getNcovAbroad({
      key: '7fcc48b8a29e228a39fdc520c9419bd5'
    })]).then(
      axios.spread((ncovCity, ncovAbroad) => {
        console.log(ncovCity);
        let allCities = []
        ncovCity.data.data.forEach(item => {
          let temp = {
            name: item.provinceShortName,
            value: item.currentConfirmedCount,
          }
          allCities.push(temp)
        })
        //处理全球疫情结果
        console.log(ncovAbroad);
        let worldData = []
        ncovAbroad.data.newslist.forEach(item => {
          let temp = {
            name: item.provinceName,
            value: item.currentConfirmedCount,
          }
          worldData.push(temp)
        })
        this.$charts.chinaMap('chinaMap', allCities);
        this.$charts.worldMap('worldMap', worldData);
      })
    )
    this.$bus.$on('getIndex', (index) => {
      this.currentIndex = index
    })

  },
  methods: {
  }
}
</script>

<style scoped>
#chinaMap {
  width: 375px;
  height: 400px;
}

#worldMap {
  width: 375px;
  height: 400px;
}

.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}

.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>
