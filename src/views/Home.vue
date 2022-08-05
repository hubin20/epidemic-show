<!--
  作者：hcodeb
  时间：2022年07月30日 11:22:15
-->
<template>
  <div class="home">
    <header-bar></header-bar>
    <covid19-info />
    <case-num :caseNumData="caseNumData" />
    <echarts-map />
    <my-swiper />
    <spring-travel />
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue'
import Covid19Info from '../components/Covid19Info.vue'
import CaseNum from '../components/CaseNum.vue'
import api from '../api'
import EchartsMap from '../components/EchartsMap.vue'
import MySwiper from '../components/MySwiper.vue'
import SpringTravel from '../components/SpringTravel.vue'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Covid19Info,
    CaseNum,
    EchartsMap,
    MySwiper,
    SpringTravel
  },
  data() {
    return {
      caseNumData: {
        modifyTime: '',  //数据更新时间
        currentConfirmedCount: '',  //现存确诊人数
        suspectedCount: '', //累计境外输入人数
        seriousCount: '',  //现存无症状人数
        confirmedCount: '',  //累计确诊人数
        deadCount: '',  //累计死亡人数
        curedCount: '',  //累计治愈人数
        currentConfirmedIncr: '',  // 现存确诊
        suspectedIncr: '', // 新增境外
        seriousIncr: '',  //相比昨天现存无症状人数
        confirmedIncr: '',  //相比昨天累计确诊人数
        deadIncr: '',  //相比昨天新增死亡人数
        curedIncr: ''  //相比昨天新增治愈人数
      }
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    api.getNcov({
      key: "7fcc48b8a29e228a39fdc520c9419bd5"
    }).then(res => {
      console.log(res);
      if (res.status === 200) {
        // 疫情病例
        this.desc = res.data.newslist[0].desc
        // this.caseNumData = {
        //   modifyTime: this.desc.modifyTime,
        //   currentConfirmedCount: this.desc.currentConfirmedCount,
        //   suspectedCount: this.desc.suspectedCount,
        //   seriousCount: this.desc.seriousCount,
        //   confirmedCount: this.desc.confirmedCount,
        //   deadCount: this.desc.deadCount,
        //   curedCount: this.desc.curedCount,
        //   currentConfirmedIncr: this.desc.currentConfirmedIncr,
        //   suspectedIncr: this.desc.suspectedIncr,
        //   seriousIncr: this.desc.seriousIncr,
        //   confirmedIncr: this.desc.confirmedIncr,
        //   deadIncr: this.desc.deadIncr,
        //   curedIncr: this.desc.curedIncr
        // }

        this.caseNumData.modifyTime = this.desc.modifyTime
        this.caseNumData.currentConfirmedCount = this.desc.currentConfirmedCount,
          this.caseNumData.suspectedCount = this.desc.suspectedCount,
          this.caseNumData.seriousCount = this.desc.seriousCount,
          this.caseNumData.confirmedCount = this.desc.confirmedCount,
          this.caseNumData.deadCount = this.desc.deadCount,
          this.caseNumData.curedCount = this.desc.curedCount,
          this.caseNumData.currentConfirmedIncr = this.desc.currentConfirmedIncr,  // 现存确诊
          this.caseNumData.suspectedIncr = this.desc.suspectedIncr, // 现存疑似
          this.caseNumData.seriousIncr = this.desc.seriousIncr,
          this.caseNumData.confirmedIncr = this.desc.confirmedIncr,
          this.caseNumData.deadIncr = this.desc.deadIncr,
          this.caseNumData.curedIncr = this.desc.curedIncr
      }
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {}
}
</script>

<style scoped>
.home {}
</style>
