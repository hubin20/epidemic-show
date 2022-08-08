<!--
  作者：hcodeb
  时间：2022年08月04日 16:16:50
-->
<template>
  <div>
    <div id="city"></div>
  </div>

</template>

<script>
import api from '../api'

export default {
  name: 'City',
  props: {
    city: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    let provinces= []
    api.getNcovCity({
      api_key: "77710d287ef93c12",
      type: 'epidemicInfectionData'
    }).then(res => {
      if (res.status === 200) {
        res.data.data.forEach(item => {
          if (item.provinceShortName === this.city) {
            item.cities.forEach(item => {
              let temp = {
                name: ((item.cityName.includes('盟')) || (item.cityName.includes('区')) || (item.cityName.includes('县')) || (item.cityName.includes('州'))) ? item.cityName : item.cityName + '市',  
                value: item.currentConfirmedCount
              }
              provinces.push(temp) 
            })
          }
        })
      }
      this.$charts.provinceMap("city",this.city,provinces)
    })
  },
  methods: {}
}
</script>

<style scoped>
#city {
  width: 375px;
  height: 600px;
}
</style>
