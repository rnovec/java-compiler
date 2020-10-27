import axios from 'axios'

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== 'development'
      ? 'http://localhost:8000'
      : 'https://compiler-api.herokuapp.com',
  timeout: 20000,
  mode: 'cors',
  withCredentials: false
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(response => {
  return response.data
})

export default instance
