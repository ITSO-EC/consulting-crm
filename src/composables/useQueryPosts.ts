import axios from 'axios';
import { storeToRefs } from 'pinia';
import { Post } from '../interfaces/post';
import { useQueryPostsStore } from '../stores/queryPostsStore'
const PROXY_URL='https://sheltered-dusk-91889.herokuapp.com/'
const BASE_API='https://itso.ga/v1/'

const useQueryPosts = () => {
    const queryPostsStore = useQueryPostsStore();
    
    const {posts, selectedPost, error, loading, results, page, pages} = storeToRefs(queryPostsStore);

    const initializeAllPosts = async()=>{
        loading.value = true;
        queryPostsStore.loadPosts(await axios.get(BASE_API+'posts'))
        loading.value = false;
    };
    const initializeQueriedPosts = async(id: string)=>{
        queryPostsStore.loadPosts(await axios.get(BASE_API+'posts?byCategory='+id, {
          headers: {
            'Content-type':'application/json'
          }
        }))
    };
    const selectPostById = (id: string) => queryPostsStore.getPostById(id);

    
    const createPost = async ( payload:Post ,categoryid:string) => {
        loading.value = true;
        if(payload.type_reform != 'Suplemento') {
          payload.legal_regulation = '---'
        };
        
        try {  
            axios.post(BASE_API+'posts', {
              ...payload, 
              category: categoryid,
              type:'pending'
            }, 
            {
              headers: {
                'Content-type':'multipart/form-data',

              }
            })
          loading.value = false;
          //initializeQueriedPosts(categoryid);

        } catch (err) {
          loading.value = false;
          error.value = err;
          console.log("MIerror",err)
          
        }
        
    };

    const deletePost = async (id:string, catid:string) => {
      loading.value = true;
      
      try {
        await axios.delete(BASE_API+'posts/'+id);
        loading.value = false;
        
        initializeQueriedPosts(catid);

      } catch (error) {
        console.error(error)
        
        error.value = error;
        loading.value = false;
      }
      
      
    }

    return {
        // Properties
        posts,
        selectedPost,
        error,
        loading,
        results,
        page,
        pages,

        //methods
        createPost,
        deletePost,
        initializeAllPosts,
        initializeQueriedPosts,
        selectPostById

    }
}
export default useQueryPosts;
