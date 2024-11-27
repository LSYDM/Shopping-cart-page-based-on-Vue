import axios from "axios";

export async function add_good(good_id: number, cb: Function) {
        return await axios.get(
            'http://127.0.0.1:8080',
            {
                params: {
                    add: good_id
                }
            }
        ).then(res => cb())
    }


export async function reduce_good(good_id: number, cb: Function) {
    return await axios.get(
        'http://127.0.0.1:8080',
        {
            params: {
                reduce: good_id
            }
        }
    ).then(res => cb())
}


export async function remove_good(good_id: number, cb: Function) {
    return await axios.get(
        'http://127.0.0.1:8080',
        {
            params: {
                remove: good_id
            }
        }
    ).then(res => cb())
}


export function get_cart_list() {
    return axios.get(
        'http://127.0.0.1:8080',
        {
            params:{
                get_cart: 1
            }
        }
    )
}


export async function select(good_id: number, cb: Function) {
    return await axios.get(
        'http://127.0.0.1:8080',
        {
            params:{
                select: good_id
            }
        }
    ).then(res => cb())
}


export async function select_all(status: boolean, cb: Function) {
    return await axios.get(
        'http://127.0.0.1:8080',
        {
            params:{
                select_all: status
            }
        }
    ).then(res => cb())
}


