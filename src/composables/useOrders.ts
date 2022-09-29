import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useOrdersStore } from '../stores/ordersStore';

const BASE_API='https://itso.ga/v1/'

const useOrders = () => {
    const ordersStore = useOrdersStore();
    
    
    const {orders, selectedOrder,error, loading, results, page} = storeToRefs(ordersStore);


    const initializeAllOrders = async () => {
      loading.value = true;
      ordersStore.loadOrders(await axios.get(BASE_API+'orders'));
      loading.value = false;
  }

    const initializeOrders = async (id: string) => {
        loading.value = true;
        ordersStore.loadOrders(await axios.get(BASE_API+'orders?byPage='+id));
        loading.value = false;
    }
    const getOrderById = (id: string) => ordersStore.getOrderById(id);
    const createOrder = async(payload) => {
        loading.value = true;
        axios.post(BASE_API+'orders', payload)
        .then(response => {
        initializeOrders(response.data.page)
        loading.value = false
        })
        .catch(error => {
          loading.value = false    
          console.error("error en useOrders",error)  
        });
      };
  
    return {
        // Properties
        orders,
        selectedOrder,
        error,
        loading,
        results,
        page,

        //methods
        createOrder,
        initializeAllOrders,
        initializeOrders,
        getOrderById 

    }
}
export default useOrders;
