import { storeToRefs } from 'pinia';
import { usePostsStore } from '~~/stores/postsStore'

const usePosts = () => {
    const postsStore = usePostsStore();
    
    
    const {posts, error, loading, results, page} = storeToRefs(postsStore);

    const loadPosts = () => postsStore.loadPosts();
    return {
        // Properties
        posts,
        error,
        loading,
        results,
        page,

        //methods
        loadPosts,

    }
}
export default usePosts;
