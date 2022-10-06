import { storeToRefs } from 'pinia';
import { useViewsStore } from '../stores/viewsStore'
import axios from 'axios';

const useViews = () => {
    const viewsStore = useViewsStore();
    
    const BASE_API='https://itso.ga/v1/'
    
    const { views , queriedViews , selectedView , error, loading, results, page, pages} = storeToRefs(viewsStore);
    //'/api/views'
    const initializeViews = async (selpage: number = 1) => {
      
        viewsStore.toggleLoading(true);
        viewsStore.loadViews(await axios.get(BASE_API+'pages?limit=8&page='+selpage))
        viewsStore.toggleLoading(false);
    };

    const nextPage = async (actualpage:number) => {
      await initializeViews(actualpage+1);
    }
    const prevPage = async (actualpage:number) => {
      await initializeViews(actualpage-1);
    }


    const createView = async( payload ) =>{
        loading.value = true;
        console.log("imagen size",payload.image_url.size/1000)
        if(payload.image_url.size/1000 > 300) {
          loading.value = false;
          error.value = 'La imagen excede el peso máximo (300kB)'
          return;
          
        } 
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
        pages,

        //methods
        createView,
        nextPage,
        prevPage,
        initializeViews,
        filterByName,
        getViewById 

    }
}
export default useViews;
