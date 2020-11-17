import instance from "./AxiosInstance";

export const ReportApi={
    GetReportData :async(params)=>{
        const url ='/GetReportData';
        return await instance.get(`${url}?data=${params.data}&fromDate=${params.fromDate}&toDate=${params.toDate}`)
    }
}
