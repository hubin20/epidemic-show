<!--
  作者：hcodeb
  时间：2022年08月02日 15:52:07
-->
<template>
  <div>
    <ul class="tabs-header">
      <slot></slot>
    </ul>
    <tab-content :pans="this.pans" />
  </div>

</template>

<script>
import TabContent from './TabContent.vue'

export default {
  name: 'Tabs',
  components: {
    TabContent
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: '1'
    }
  },
  data() {
    return {
      pans: []
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { 
  },
  methods: {
   
  }
}
</script>

<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
