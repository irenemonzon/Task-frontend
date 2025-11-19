import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('AUTH_TOKEN')
    if (token) {
        
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    response => response,
    (error) => {
        
        if (axios.isAxiosError(error)) {
            const serverMessage = (error.response?.data as any)?.error || (error.response?.data as any)?.message
            const message = serverMessage || error.message || 'Request failed'
            return Promise.reject(new Error(message))
        }
        return Promise.reject(error)
    }
)

export default api