import { defineStore, acceptHMRUpdate } from 'pinia';
import { Order } from '../interfaces/order';

interface OrdersState {
    orders: Order[];
    selectedOrder: {};
    loading: boolean;
    error: String;
    results: number;
    page: number;
}

export const useOrdersStore = defineStore({
    id: 'orders',
    state: (): OrdersState => ({
        orders: [] ,
        selectedOrder: {},
        error: '',
        loading: false,
        results: 0,
        page:1,
    }),
    getters: {
        
    },
    actions: {
        getOrderById(id: string) {
            this.selectedOrder = this.orders?.find((order) => order._id == id);
            
        },
        loadOrders(data) {
           try {
                this.orders = data.data.results;
                this.results = data.data.totalResults;
                this.page = data.data.page;
           } catch (error) {
                this.error = error;
                console.error(error);
           }
            
        },
    }
});
