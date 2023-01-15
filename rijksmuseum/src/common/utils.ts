import axios, { AxiosResponse } from 'axios'

export async function getCollection(query: string = "", culture: "nl" | "en", page: number = 1, pageSize: number = 10) {
    const url = `https://www.rijksmuseum.nl/api/${culture}/collection`
    const promise: Promise<AxiosResponse> = axios.get(url, { params: {
            key: import.meta.env.VITE_API_KEY,
            p: page,
            ps: pageSize,
            q: query
        }})
        .catch((error) => console.log(error)) as Promise<AxiosResponse>

    const response = await promise
    return response
}

export async function getCollectionDetails(objectNumber: string = "", culture: "nl" | "en") {
    const url = `https://www.rijksmuseum.nl/api/${culture}/collection/${objectNumber}`
    const promise: Promise<AxiosResponse> = axios.get(url)
    .catch((error) => console.log(error)) as Promise<AxiosResponse>

    const response = await promise
    return response
}