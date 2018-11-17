<template>
  <div class="charts">
    <section v-if="errored">
      <p> {{errorMessage}} </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <line-chart v-else :data=response></line-chart>
      data is <br>
      {{response}}
    </section>
  </div>
</template>

<script>
import ApiSerivce from '@/services/api'

export default {
  name: 'Charts',
  props: {
    msg: String
  },
  data: function () {
    return {
      response: '',
      loading: true,
      errored: false,
      errorMessage: ''
    }
  },
  mounted () {
    ApiSerivce
      .get('timeseries/temperature/')
      .then((response) => {
        console.log(response)
        this.response = this.mapTimeseries(response)
      })
      .catch(error => {
        console.log('Error is ', error)
        this.errorMessage = error
        this.errored = true
      })
      .finally(() => { this.loading = false })
  },
  methods: {
    mapTimeseries (ts) {
      let result = {}
      for (let x of ts) {
        result[x['timestamp']] = x['value']
      }
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
