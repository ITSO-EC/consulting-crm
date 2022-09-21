import { defineStore, acceptHMRUpdate } from 'pinia';
import { Post } from '~~/interfaces/post';
import { generateID, sleep } from '~~/utils'

interface PostsState {
    posts: Post[];
    loading: boolean;
    error: String;
    results: number;
    page: number;
}

export const usePostsStore = defineStore({
    id: 'posts',
    state: (): PostsState => ({
        posts: [] ,
        error: '',
        loading: false,
        results: 0,
        page:1,
    }),
    getters: {},
    actions: {
        async loadPosts(): Promise<void> {
            if(!this.posts.length && !this.loading) {
                this.error = [];
                this.loading = true;
                $fetch('/api/posts')
                    
                    .then((res)=> {
                        this.posts = res.results;
                        this.results = res.totalResults;
                        this.page = res.page;
                        this.loading = false;
                       
                    })
                    .catch((err)=> {
                        this.error = err;
                        this.loading = false;
                        
                    })
            }    
        },
        async addPost(post: Object): Promise<void> {
            this.loading = true;
            this.posts.push({id: generateID(), ...post});
            await sleep(1000);
            this.loading = false;
        },
        async deletePost(id: number): Promise<void> {
            this.loading = true;
            this.posts = this.posts.filter((post) => post._id !== id);
            await sleep(1000);
            this.loading = false;
        },
        async updatePost(id: number): Promise<void> {
            // this.loading = true;
            // const post = this.posts.find((post) => post._id === id);

            // if (post) {
            //     post.done = !post.done;
            // }

            // await sleep(1000);
            // this.loading = false;
        },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot));
  }