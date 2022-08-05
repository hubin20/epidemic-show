<!--
  作者：hcodeb
  时间：2022年08月05日 12:02:58
-->
<template>
  <div class="spring">
    <h3 class="title">春节旅行各地政策</h3>
    <cascader :options="options" label="始发地" @onValue="getGoCity" />
    <cascader :options="options" label="目的地" @onValue="getOnCity" />
    <van-button round type="info" block @click="goSpringView">查看政策</van-button>
  </div>
</template>

<script>
import api from '../api'
import Cascader from './Cascader.vue'

export default {
  name: 'SpringTravel',
  components: {
    Cascader
  },
  data() {
    return {
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [],
      cities: []
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    api.getSpringCity({
      key: '2b06895660ae24478c9706d38fd5c0d3'
    }).then(res => {
      console.log(res);
      if (res.status === 200) {
        let currentAll = []
        res.data.result.forEach(item => {
          let arr = [];
          item.citys.forEach(item => {
            let temp1 = {
              text: item.city,
              value: item.city_id
            }
            arr.push(temp1)
          })
          let temp2 = {
            text: item.province,
            value: item.province_id,
            children: arr
          }
          currentAll.push(temp2)
        })
        this.options = currentAll
      }
    })
  },
  methods: {
    getGoCity(data) {
      console.log(data);
      this.cities.push(data)
    },
    getOnCity(data) {
      console.log(data);
      this.cities.push(data)
    },
    goSpringView() {
      if (this.cities.length === 2) {
        this.$router.push({ name: "SpringView", params: { cities: this.cities } })
      } else {
        this.$notify({ type: 'danger', message: '请选择地区' })
      }
    }
  }
}
</script>

<style scoped>
.spring {
  width: 100%;
  background-color: #fff;
}

.spring .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
</style>
