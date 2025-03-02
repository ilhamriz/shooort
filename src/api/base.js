import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((req) => {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };
  return { ...req, headers: { ...headers, ...req.headers } };
});

axiosInstance.interceptors.response.use(
  async (res) => {
    const data = await res.data;
    return Promise.resolve(data);
  },
  async (err) => {
    const res = await err.response;
    return Promise.reject(res);
  }
);

const serviceUrl = (url) => `${API_URL}${url}`;

export const getApi = (url, options = {}) => {
  return axiosInstance.get(serviceUrl(url), options);
};

export const postApi = (url, options = {}) => {
  const { data, ...config } = options;
  return axiosInstance.post(serviceUrl(url), data, config);
};

export const postBlobApi = (url, options = {}) => {
  const { data, ...config } = options;
  return axiosInstance.post(serviceUrl(url), data, {
    responseType: "arraybuffer",
    ...config,
  });
};

export const putApi = (url, options = {}) => {
  const { data, ...config } = options;
  return axiosInstance.put(serviceUrl(url), data, config);
};

export const deleteApi = (url, options = {}) => {
  return axiosInstance.delete(serviceUrl(url), options);
};

export const patchApi = (url, options = {}) => {
  const { data, ...config } = options;
  return axiosInstance.patch(serviceUrl(url), data, config);
};
