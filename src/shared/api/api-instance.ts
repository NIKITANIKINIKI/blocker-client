import axios, { AxiosError, AxiosRequestConfig } from 'axios'

export const apiInstance=axios.create({
    baseURL:'/api',
    headers:{
        'Content-Type':'application/json'
    }
})

export const createInstance=<T>(
    config:AxiosRequestConfig,
    options?:AxiosRequestConfig // допустим headers: { Authorization: 'Bearer newToken456' }
): Promise<T>=>{
    return apiInstance({
        ...config,
        ...options,
    }).then(res => res.data)
}

export type BodyType<Data>=Data

export type ErrorType<Error>=AxiosError<Error>