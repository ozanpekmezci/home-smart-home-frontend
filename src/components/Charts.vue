<template>
  <div class="charts">
    <section v-if="errored">
      <p> {{errorMessage}} </p>
    </section>
    
    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <line-chart :data=response></line-chart>
        <section v-if="!userAsleep">
          <h2> USER IS AWAKE </h2>
        </section>
        <section v-else>
          <h2> USER IS SLEEPING </h2>
        </section>
      </div>
      
    </section>
    <v-dialog
      :value="userAsleep && notified"
      width="500"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          User fell asleep
        </v-card-title>

        <v-card-text>
          Now the system will:
          <ul>
            <li>Dim the ligths</li>
            <li>Turn off the TV</li>
            <li>Whatever</li>
            <li>Whatever</li>
            <li>Whatever</li>
          </ul>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="userAsleep = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      userAsleep:false,
      notified:false,
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
