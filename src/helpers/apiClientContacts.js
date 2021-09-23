import configuration from '../data/configuration.json'
import axios from 'axios'

const apiClientContacts = axios.create({
  baseURL: `${configuration.userUrl}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClientContacts
