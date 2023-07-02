import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const getAllItems = () => axios.get(`${BASE_URL}/items`)
const getSingleItem = (id) => axios.get(`${BASE_URL}/items/${id}`)
const CreateItem = (data, token) => axios.post(`${BASE_URL}/items`, data, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})

export { getAllItems, getSingleItem, CreateItem }
