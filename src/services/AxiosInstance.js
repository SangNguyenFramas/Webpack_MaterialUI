import axios from "axios";
import queryString from "query-string";
const instance = axios.create({
  baseURL: 'https://localhost:44353/api/value' ,
  headers: {
    "Content-Type": "application/json",
    // 'Access-Control-Allow-Origin':'*',
    // 'Access-Control-Allow-Headers':'*',
    // 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS'
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.request.use(async (config) => {
  return config;
});
instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
        alert('resone')
      return response.data;
    }
    alert(response)
    return response;
  },
  (error) => {
    //   alert(error)
   return  false;
  }
);
export default instance;
