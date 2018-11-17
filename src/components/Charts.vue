<template>
  <div class="charts">
    <section v-if="errored">
      <p> {{errorMessage}} </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <line-chart v-else :data=response></line-chart>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Charts',
  props: {
    msg: String
  },
  data: function() {
    return {
        response: '',
        loading: true,
        errored: false,
        errorMessage: ''
      };
  },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2014-01-05')
        .then(response => (this.response = response.data.bpi))
        .catch(error => {
          this.errorMessage = error
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
