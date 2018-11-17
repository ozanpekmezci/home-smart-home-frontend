<template>
  <div class="charts">
    <h1>{{ msg }}</h1>
    <line-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></line-chart>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
