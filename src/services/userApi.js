import instance from "./AxiosInstance";

export const UserApi={
    Login :async(params)=>{
        const url ='/Login';
        return await instance.get(`${url}/${params.userName}/${params.password}`)
    }
}
