import { axiosClient } from './api';

const ProductApi = {
    getAll(){
        const url = `/product`;
        return axiosClient.get(url);
    },
    add(product){
        const url = `/product`;
        return axiosClient.post(url, product);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `/product/${id}`;
        return axiosClient.put(url,data);
    }
}
export default ProductApi;


