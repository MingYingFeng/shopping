import {request} from "@/network/axios"

export function getHomeMultidata(banner,recommend){
    return request({
        url: "/home/multidata"
    })
}


