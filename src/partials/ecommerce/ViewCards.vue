<template>
 
  <div
    v-for="view in views"
    :key="`ViewCard-${view._id}-${busy}`"
    class="
      hover:scale-105
      duration-300
      relative
      col-span-full
      sm:col-span-6
      xl:col-span-3
      bg-white
      shadow-lg
      rounded-sm
      border border-slate-200
      overflow-hidden
    "
  >
    <!-- Image -->
    <img
      class="absolute w-full h-full object-cover"
      :src="view.image_url || '../../images/applications-image-17.jpg'"
      width="286"
      height="160"
      alt="Application 17"
    />
    <!-- Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"
      aria-hidden="true"
    ></div>
    <!-- Content -->
    <router-link class="relative h-full p-5 flex flex-col justify-end"
    :to="'/ecommerce/workspace/'+view._id">
      <h3 class="text-lg text-white font-semibold mt-16 mb-0.5">
        {{view.name}}
      </h3>
      <span
        class="text-sm font-medium text-indigo-400 hover:text-indigo-300">
        Ingresar -&gt;
        </span>
    </router-link>
    <div :class="busy? '':'cursor-pointer'" class="m-1.5 absolute right-2 top-2">
      <!-- Start -->
      <div
        @click="toggleVisibility(view._id)"
        :class="view.status == 'visible' ? getVisible : getInvisible"
      >
        {{view.status == 'visible'? 'Visible':'Invisible'}}
      </div>
      <!-- End -->
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "ViewCards",
  props: ['xviews'],
  data() {
    return {
      views: this.$props.xviews,
      busy: false
    }
  },
  emits: ['update-list'],
  computed: {
    getVisible() {
      return "text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1"
    },
    getInvisible() {
      return "text-xs inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1"
    }
  },
  methods: {
    toggleVisibility(id) {
      let state = this.views?.find(view => view._id === id ).status
      if (state == 'visible')
      {
        state = 'invisible';
      }
      else {
        state = 'visible'
      }
      this.updateVisibility(id,state);
    },
    updateVisibility(id, newStatus){
      this.busy = true;
      axios.patch(import.meta.env.VITE_API_URL+'pages/'+id, 
        {
          status: newStatus
        }
      ).then((res)=>{
          const newViews = this.views?.map((view) => {
              let nview = view._id == id ? {...view, status: res.data.status} : view
              return nview
            });
            
          this.views = newViews
          this.$emit('update-list');
          this.busy = false
          
          
        })
        .catch((err)=>{ 
          this.busy = false;
          console.log(err)
          });
    }
  },
  mounted() {
    console.log(this.xviews)
  }
};
</script>