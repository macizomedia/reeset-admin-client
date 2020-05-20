import axios from 'axios'

export default {
  forgotPassword(payload) {
    return axios.post('API/auth/forgot', payload)
  }
}
