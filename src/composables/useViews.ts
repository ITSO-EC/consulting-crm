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
        viewsStore.toggleLoading(false);
    };

    const createView = async( payload ) =>{
        loading.value = true;
        axios.post(BASE_API+'pages', payload ,{
          headers: {
            'Content-type':'multipart/form-data'
          }
        })
        .then(response => {
          loading.value = false
          initializeViews()
        })
        .catch(error => {
          loading.value = false
          console.log(error)
        });
    };


    const getViewById = (id) => {
      viewsStore.getViewById(id)
    };
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
        createView,
        initializeViews,
        filterByName,
        getViewById 

    }
}
export default useViews;
