import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useQueryPostsStore } from '../stores/queryPostsStore'

const BASE_API='https://itso.ga/v1/'

const useQueryPosts = () => {
    const queryPostsStore = useQueryPostsStore();
    
    const {posts, selectedPost, error, loading, results, page} = storeToRefs(queryPostsStore);

    const initializeAllPosts = async()=>{
        loading.value = true;
        queryPostsStore.loadPosts(await axios.get(BASE_API+'posts'))
        loading.value = false;
    };
    const initializeQueriedPosts = async(id: string)=>{
        queryPostsStore.loadPosts(await axios.get(BASE_API+'posts?byCategory='+id))
    };
    const selectPostById = (id: string) => queryPostsStore.getPostById(id);

    return {
        // Properties
        posts,
        selectedPost,
        error,
        loading,
        results,
        page,

        //methods
        initializeAllPosts,
        initializeQueriedPosts,
        selectPostById

    }
}
export default useQueryPosts;
