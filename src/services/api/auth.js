import axios from 'axios'

export default {
  userLogin(payload) {
    return axios.post('API/auth/login', payload)
  },
  refreshToken() {
    return axios.get('API/auth/token')
  }
}
