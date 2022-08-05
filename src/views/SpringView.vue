<!--
  作者：hcodeb
  时间：2022年08月05日 17:19:26
-->
<template>
  <div>
    <div class="from">
      <h3>{{fromInfo.city_name}}</h3>
      <p>{{fromInfo.high_in_desc}}</p>
      <p>{{fromInfo.low}}</p>
      <p>{{fromInfo.out_desc}}</p>
    </div>
    <hr>
    <div class="to">
      <h3>{{toInfo.city_name}}</h3>
      <p>{{toInfo.high_in_desc}}</p>
      <p>{{toInfo.low}}</p>
      <p>{{toInfo.out_desc}}</p>
    </div>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'SpringView',
  props: {
    cities: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      fromInfo: {},
      toInfo: {}
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    api.getSpringQuery({
      key: "2b06895660ae24478c9706d38fd5c0d3",
      from: this.cities[0].value,
      to: this.cities[1].value
    }).then(res => {
      if (res.status === 200 ) {
        this.fromInfo = res.data.result.from_info
        this.toInfo = res.data.result.to_info
      }
    })
  },
  methods: {}
}
</script>

<style scoped>

</style>
