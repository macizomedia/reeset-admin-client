import axios from 'axios'

export default {
  resetPassword(payload) {
    return axios.post('API/auth/reset', payload)
  }
}
