import axios from 'axios'

const api = axios.create({
  baseURL: "https://meuapp.luizpaulo2005.repl.co"
})

export default api;