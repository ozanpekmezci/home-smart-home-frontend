import axios from 'axios'
import Vue from 'vue'
import Socket from 'simple-websocket'

const BASE_HOST = '131.159.209.35:8085'
class ApiServiceConstr {
  constructor () {
    this.v = new Vue()
    this.user = null
    this.x = axios.create({
      baseURL: 'http://' + BASE_HOST + '/',
      timeout: 5000
      // withCredentials: true,
      // headers: {'Access-Control-Allow-Origin': '*'}

    })
    this.apiSocket = new Socket('ws://' + BASE_HOST + '/ws/event-entryies/')
    this.apiSocket.on('connect', function () {
      console.log('Connected to web socket')
    })
  }

  /* login (email, password) {

  }
  logout () {

  } */

  onceUserChange (callb) {
    this.v.$once('user-change', callb)
  }
  onUserChange (callb) {
    this.v.$on('user-change', callb)
  }
  onSocketMessage (callb) {
    this.apiSocket.on('data', (data) => {
      let strings = new TextDecoder('utf-8').decode(data)
      try {
        let newObj = JSON.parse(strings)
        callb(newObj['object'] || {})
      } catch (e) {
        callb({})
      }
    })
  }
  get (path) {
    return this.x.get(path).then((res) => {
      window.localStorage.setItem(path, JSON.stringify(res.data))
      return res.data
    })
  }
}
const ApiSerivce = new ApiServiceConstr()

export default ApiSerivce
