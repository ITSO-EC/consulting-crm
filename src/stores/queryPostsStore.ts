import { defineStore} from 'pinia';
import { Post } from '../interfaces/post';

interface PostsState {
    posts: Post[];
    selectedPost: Object;
    loading: boolean;
    error: String;
    results: number;
    page: number;
}

export const useQueryPostsStore = defineStore({
    id: 'queryposts',
    state: (): PostsState => ({
        posts: [] ,
        selectedPost: {},
        error: '',
        loading: false,
        results: 0,
        page:1,
    }),
    getters: {},
    actions: {
        getPostById(id: string) {
            this.selectedPost = this.posts?.find((post) => post._id == id);
            
        },
        loadPosts(data) {
            try {
                this.posts = data.data.results;
                this.results = data.data.totalResults;
                this.page = data.data.page;
           } catch (error) {
                this.error = error;
                console.error(error);
           }
        },
          }
});
