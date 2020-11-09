import instance from "./AxiosInstance";

export const UserApi={
    Login :(params)=>{
        const url ='/Login';
        return instance.get(`${url}/${params.userName}/${params.password}`)
    }
}
