import axios from 'axios'

export default {
  userLogin(payload) {
    return axios.post('/login', payload)
    console.log(payload)
  },
  refreshToken() {
    return axios.get('/auth/token')
  }
}
