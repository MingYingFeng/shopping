import axios from "axios"

export function request(config) {
    let axios1 = axios.create({
        baseURL: "http://192.168.1.4:3000",
        timeout: 5000
    });
    return axios1(config)
}