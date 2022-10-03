import axios from 'axios';
import { storeToRefs } from 'pinia';
import { Post } from '../interfaces/post';
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

    
    const createPost = ( payload:Post ,categoryid:string) => {
        loading.value = true;
        if(payload.type_reform != 'Suplemento') {
          payload.legal_regulation = '---'
        };
        console.log(payload)
        axios.post(BASE_API+'posts', {
          ...payload, 
          category: categoryid,
          type:'pending'
        }, 
        {
          headers: {
            'Content-type':'multipart/form-data'
          }
        })
        .then(response => {
          loading.value = false

        })
        .catch(error => {
          loading.value = false
          console.log("error",error)
          
        });
    };

    const deletePost = async (id:string, catid:string) => {
      loading.value = true;
      
      try {
        await axios.delete(BASE_API+'posts/'+id);
        loading.value = false;
        
        initializeQueriedPosts(catid);

      } catch (error) {
        console.error(error)
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

        //methods
        createPost,
        deletePost,
        initializeAllPosts,
        initializeQueriedPosts,
        selectPostById

    }
}
export default useQueryPosts;
