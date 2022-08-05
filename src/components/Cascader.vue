<!--
  作者：hcodeb
  时间：2022年08月05日 16:31:38
-->
<template>
  <div>
    <van-field v-model="city" is-link readonly :label="label" placeholder="请选择地区" @click="show = true" />
    <van-popup v-model="show" round position="bottom">
      <van-cascader v-model="cascaderValue" title="请选择地区" :options="options" @close="show = false"
        @finish="onFinish" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Cascader',
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
      city: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.city = selectedOptions.map((option) => option.text).join('/');
      this.$emit('onValue',selectedOptions[1])
    },
  }
}
</script>

<style scoped>
</style>
