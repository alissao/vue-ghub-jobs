import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://jobs.github.com/positions.json'
})