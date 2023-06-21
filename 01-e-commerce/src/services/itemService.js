import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const getAllItems = () => axios.get(`${BASE_URL}/items`)
const getSingleItem = (id) => axios.get(`${BASE_URL}/items/${id}`)

export { getAllItems, getSingleItem }
