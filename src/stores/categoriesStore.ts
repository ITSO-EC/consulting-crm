import { defineStore, acceptHMRUpdate } from 'pinia';
import { Category } from '../interfaces/category';

interface CategoriesState {
    categories: Category[];
    selectedCategory: {};
    loading: boolean;
    error: String;
    results: number;
    page: number;
}

export const useCategoriesStore = defineStore({
    id: 'categories',
    state: (): CategoriesState => ({
        categories: [] ,
        selectedCategory: {},
        error: '',
        loading: false,
        results: 0,
        page:1,
    }),
    getters: {
        
    },
    actions: {
        getCategoryById(id: string) {
            this.selectedCategory = this.categories?.find((category) => category._id == id);
            
        },
        loadCategories(data) {
           try {
                this.categories = data.results;
                this.results = data.totalResults;
                this.page = data.page;
           } catch (error) {
                this.error = error;
                console.error(error);
           }
            
        },
    }
});
