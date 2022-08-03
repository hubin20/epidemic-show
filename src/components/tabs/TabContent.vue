<!--
  作者：hcodeb
  时间：2022年08月02日 15:51:52
-->
<!-- <template>
  <div>
    <div v-for="(item,index) in this.pans" :key="index">{{item}}</div>
  </div>
</template> -->

<script>
export default {
  name: 'TabContent',
  render() {
    //ele -> tab
    return (
      <div>{
        this.pans.map(ele => {
          // return ele.isActive ? ele.$slots.default : ''
          return <div style={{display:ele.isActive ? 'block' : 'none'}}>{ele.$slots.default}</div>
        })
      }</div>
    )
  },
  props: {
    pans: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {},
  created() { },
  mounted() {
   },
  methods: {
  }
}
</script>

<style scoped>
</style>
