<template>
  <div class="charts">
    <section v-if="errored">
      <p> {{errorMessage}} </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else>
        <h2>Temperature</h2><br>
        <line-chart :data=response></line-chart>
      </div>

    </section>
    
  </div>
</template>

<script>
  import ApiSerivce from '@/services/api'

  export default {
    name: 'Charts',
    props: {
      data: []
    },
    data: function () {
      return {
        response: '',
        loading: true,
        errored: false,
        userAsleep: false,
        notified: false,
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
      ApiSerivce.onSocketMessage(this.updateUserSleep)
    },
    methods: {
      mapTimeseries (ts) {
        let result = {}
        for (let x of ts) {
          result[x['timestamp']] = x['value']
        }
        return result
      },
      updateUserSleep (data) {
        this.notified = true
        this.userAsleep = data.value
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>