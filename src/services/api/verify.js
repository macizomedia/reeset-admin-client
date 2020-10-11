import axios from 'axios'

export default {
  sendVerify(payload) {
    return axios.post('/auth/verify', payload)
  }
}
