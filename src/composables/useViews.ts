import { storeToRefs } from 'pinia';
import { useViewsStore } from '../stores/viewsStore'
import axios from 'axios';

const useViews = () => {
    const viewsStore = useViewsStore();
    
    const BASE_API='https://itso.ga/v1/'
    
    const { views , queriedViews , selectedView , error, loading, results, page} = storeToRefs(viewsStore);
    //'/api/views'
    const initializeViews = async (selpage: number = 1) => {
        viewsStore.toggleLoading(true);
        viewsStore.loadViews(await axios.get(BASE_API+'pages?limit=12&page='+selpage))
        console.log("listos",viewsStore.views)
        viewsStore.toggleLoading(false);
    };
    const getViewById = (id) => viewsStore.getViewById(id);
    const filterByName = (querytext: string)=> viewsStore.filterByValue(querytext);
    return {
        // Properties
        views,
        queriedViews,
        selectedView,
        error,
        loading,
        results,
        page,

        //methods
        initializeViews,
        filterByName,
        getViewById 

    }
}
export default useViews;
