import { get, post, put, del } from "./api.js";

const endpoints = {
    sorted: '/data/fruits?sortBy=_createdOn%20desc',
    allFruits: '/data/fruits',
    fruitById: '/data/fruits/',
};


export async function getAll(){
    return get(endpoints.sorted)
}


export async function getById(id){
    return get(endpoints.fruitById + id)
}


export async function createFruit(data){
    return post(endpoints.allFruits , data)
}


export async function updateFruit(id, data){
    return put(endpoints.fruitById + id, data)
}


export async function deleteFruit(id){
    del(endpoints.fruitById + id)
}

export async function search(query){
    return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`)
}