<!--
  作者：hcodeb
  时间：2022年07月31日 10:50:31
-->
<template>
  <div class="info">
      <p class="title">
          <i></i>
          病毒信息
      </p>
      <div class="content">
          <p>{{"病毒: SARS-CoV-2,其导致疾病命名COVID-19"}}</p>
          <p>{{ "传染源:新冠肺炎的患者。无症状感染者也可能成传染源"}}</p>
          <p>{{ "传播途径:经呼吸道飞沫、接触传播是主要的传播途径。气溶胶传播和消化道等传播途径尚待明确。" }}</p>
          <p>{{ "易感人群:人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童级婴幼儿也有发病"}}</p>
          <p>{{"潜伏期:一般为3~7天，最长不超过14天，潜伏期内可能存在传染性,其中无症状病例传染性非常罕见" }}</p>
          <p>{{"宿主:野生动物，可能为中华菊头蝠" }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Covid19Info',
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.info{
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
}
.title{
    font-size: 0.17rem;
}

.title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
}
.content{
    padding: 0.06rem 0.16rem;
}

.content p{
    font-size: 13px;
    margin: 5px 0;
}
</style>
