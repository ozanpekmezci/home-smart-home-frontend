<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid class="extra-top-space">
          <v-layout row wrap>
        <v-flex xs8>
          <Charts />
        </v-flex>
        <v-flex xs4>
          <Lamp :on='userAsleep'></Lamp>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <div class="custom-alert" :class='{active:userAsleep}'>
      <h2>User is asleep</h2>
    </div>
  </v-app>
</template>

<script>
  import Charts from './components/Charts'
  import Lamp from './components/Lamp'
  import ApiSerivce from '@/services/api'
  export default {
    name: 'App',
    components: {
      Charts,
      Lamp
    },
    data () {
      return {
        userAsleep: false,
        notified: false
      }
    },
    mounted () {
      ApiSerivce.onSocketMessage(this.updateUserSleep)
    },
    methods: {
      updateUserSleep (data) {
        this.notified = true
        this.userAsleep = data.value
      }
    }
  }
</script>
<style>
  body {
    background-color: #f60;
    background-image: linear-gradient(30deg, #f60 0%, #ff8300 51%, #f18238 75%);
    color: white;
    opacity: 0.95;
  }
  .theme--light.application{
    background: none!important
  }
  .extra-top-space {
    margin-top: 50px;
  }

  .custom-alert {
    position: fixed;
    top: -200px;
    left: 2%;
    width: auto;
    padding: 5px 20px;
    min-width: 400px;
    background: red;
    z-index: 99;
    ;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    transition: all 0.5s ease;
  }

  .custom-alert.active {
    top: 2%;
  }
</style>