<!--
  作者：hcodeb
  时间：2022年08月02日 15:51:59
-->
<template>
  <li class="tab" @click="changeIndex" :class="{active: this.isActive}">{{this.label}}</li>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    label:{
      type: String,
      default: ''
    },
    index: {
      type: [String,Number],
      default: '1'
    }
  },
  data () {
    return {}
  },
  computed: {
    isActive() {
      return this.$parent.currentIndex === this.index 
    }
  },
  watch: {},
  created () {},
  mounted () {
    this.$parent.pans.push(this)
  },
  methods: {
    changeIndex() {
      this.$bus.$emit('getIndex',this.index)
    }
  }
}
</script>

<style scoped>
.tab {
  flex: 1;
  position: relative;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  text-align: center;
}
.tab.active {
  border-bottom: 2px solid blue;
}
</style>
