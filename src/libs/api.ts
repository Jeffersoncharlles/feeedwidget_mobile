import axios from "axios";

const api = axios.create({
    baseURL: "http://10.10.10.101:3333"
})

export { api }