import axiosBase from '@/module/AxiosBase'
let axios = axiosBase.axios;
export default {
    getEmployees(): Promise<any> {
        return axios.get('employees');
    }
}