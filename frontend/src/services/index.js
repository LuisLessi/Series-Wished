import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:5000"
})

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      // Redireciona para página de login ou realiza alguma outra ação
    }
    return Promise.reject(error)
  }
)

const services = {
  login: { method: 'post', url: 'login' },
  loadSession: { method: 'get', url: 'load-session' }
}

Object.keys(services).forEach((service) => {
  const { url, method } = services[service]
  services[service] = (payload) => {
    return http({
      url,
      method,
      data: payload
    })
  }
})

const setBearerToken = token => {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}` 
}

export default services
export { http, setBearerToken }
