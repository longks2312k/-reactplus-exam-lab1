import axios from 'axios'
import { baseURL } from './config'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
export const getUser = () => instance.get(baseURL)
export const postUser = (params) => instance.post(params)
export const deleteUser = (params) => instance.delete(params)