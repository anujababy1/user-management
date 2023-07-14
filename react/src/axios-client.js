import axios from "axios";


const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

/* request section configuation */
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

/* response section configuation */
axiosClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const {response} = error;
  if (response.status === 401) {
    /* if the existing token is expired, then deleet it from the local storage and lgin again */
    localStorage.removeItem('token')
  }

  throw error;
})

export default axiosClient