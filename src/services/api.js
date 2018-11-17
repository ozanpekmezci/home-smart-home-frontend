import axios from 'axios'
import Vue from 'vue'

class ApiServiceConstr {
  constructor () {
    this.v = new Vue()
    this.user = null
    this.x = axios.create({
      baseURL: 'http://131.159.209.35:8085/',
      timeout: 5000,
      //withCredentials: true,
      // headers: {'Access-Control-Allow-Origin': '*'}

    })
  }

  login (email, password) {

  }
  logout () {

  }

  onceUserChange (callb) {
    this.v.$once('user-change', callb)
  }
  onUserChange (callb) {
    this.v.$on('user-change', callb)
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
