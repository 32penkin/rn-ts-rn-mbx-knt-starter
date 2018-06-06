import axios, { AxiosInstance } from 'axios';
import { config } from '../config';

export const http: AxiosInstance = axios.create({
  baseURL: config.BASE_URL,
});