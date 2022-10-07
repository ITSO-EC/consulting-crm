import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '../stores/categoriesStore'

const BASE_API='https://itso.ga/v1/'
const useCategories = () => {
    const categoriesStore = useCategoriesStore();
    
    
    const {categories, selectedCategory,error, loading, results, page, pages} = storeToRefs(categoriesStore);

    const initializeCategories = async (id: string,page: number =1) => {
        loading.value = true;
        categoriesStore.loadCategories(await axios.get(BASE_API+'categories?byPage='+id+'&page='+page));
        loading.value = false;
    }
    
    const nextPage = async (category:string,actualpage:number) => {
      await initializeCategories(category,actualpage+1);
    }
    const prevPage = async (category:string,actualpage:number) => {
      await initializeCategories(category,actualpage-1);
    }

    const getCategoryById = (id: string) => categoriesStore.getCategoryById(id);
    
    const createCategory = async(payload) => {
        loading.value = true;
        axios.post(BASE_API+'categories', payload)
        .then(response => {
        initializeCategories(response.data.page)
        loading.value = false
        })
        .catch(error => {
          loading.value = false    
          console.error("error en useCategories",error)  
        });
      };
  
    return {
        // Properties
        categories,
        selectedCategory,
        error,
        loading,
        results,
        page,
        pages,
        //methods
        createCategory,
        nextPage,
        prevPage,
        initializeCategories,
        getCategoryById 

    }
}
export default useCategories;
