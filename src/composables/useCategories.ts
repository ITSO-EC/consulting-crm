import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '../stores/categoriesStore'

const PROXY_URL='https://sheltered-dusk-91889.herokuapp.com/'
const BASE_API='https://itso.ga/v1/'
const useCategories = () => {
    const categoriesStore = useCategoriesStore();
    
    
    const {categories, selectedCategory,error, loading, results, page} = storeToRefs(categoriesStore);

    const initializeCategories = async (id: string) => {
        loading.value = true;
        categoriesStore.loadCategories(await axios.get(BASE_API+'categories?byPage='+id));
        loading.value = false;
    }
    const getCategoryById = (id: string) => categoriesStore.getCategoryById(id);
    const createCategory = async(payload) => {
        loading.value = true;
        axios.post(PROXY_URL+BASE_API+'categories', payload)
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

        //methods
        createCategory,
        initializeCategories,
        getCategoryById 

    }
}
export default useCategories;
