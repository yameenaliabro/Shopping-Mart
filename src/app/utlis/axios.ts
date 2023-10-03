import { message } from "antd";
import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://localhost:4000/",
});

axios.interceptors.response.use(
    (res) => res,
    (err) => {
        const errMessage = err.ree || err.message;
        Promise.reject(errMessage), message.error(errMessage);
    }
);

export const setaxiostoken = (token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeaxiostoken = () => {
    axios.defaults.headers.Authorization = null;
};

export default axios;
