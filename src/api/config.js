import axios from 'axios';
import { appConfig, deviceName } from "src/core/constants/app-config";

import {TokensRepository} from '../helpers/tokens-repository';


export const API_URL = 'https://musicialconnect.com/api'; // TEST

const DeviceName = deviceName

export const api = axios.create({
    baseURL: API_URL,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

api.interceptors.request.use(
    async params => {
        if (params._retry) {
            return params;
        }

        const accessToken = TokensRepository.getAccessToken();
        if (accessToken) {
            params.headers.Authorization = 'Bearer ' + accessToken;
        }
        console.log(params.method.toUpperCase(), params.url);

        return params;
    },
    error => Promise.reject(error),
);
