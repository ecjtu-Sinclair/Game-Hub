import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4acb02ef3e474e38863a8ab4a4de9035",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config:AxiosRequestConfig) {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint,config)
    .then(res => res.data);
  }
}

export default APIClient;
