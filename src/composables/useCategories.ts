import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/stores/categoriesStore'

const BASE_API='https://itso.ga/v1/'
const useCategories = () => {
    const categoriesStore = useCategoriesStore();
    
    
    const {categories, selectedCategory,error, loading, results, page} = storeToRefs(categoriesStore);

    const initializeCategories = async (id: string) => categoriesStore.loadCategories(await $fetch(BASE_API+'categories?byPage='+id));
    const getCategoryById = (id: string) => categoriesStore.getCategoryById(id);
    return {
        // Properties
        categories,
        selectedCategory,
        error,
        loading,
        results,
        page,

        //methods
        initializeCategories,
        getCategoryById 

    }
}
export default useCategories;
