<template>
  <!-- Card 1 -->
  <div
    v-for="view in views"
    :key="`ViewCard-${view.id}-${busy}`"
    class="
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
      src="../../images/applications-image-17.jpg"
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
    <div class="relative h-full p-5 flex flex-col justify-end">
      <h3 class="text-lg text-white font-semibold mt-16 mb-0.5">
        {{view.name}}
      </h3>
      <router-link
        class="text-sm font-medium text-indigo-400 hover:text-indigo-300"
        :to="'/ecommerce/workspace/'+view.id"
        >Ingresar -&gt;</router-link
      >
    </div>
    <div :class="busy? '':'cursor-pointer'" class="m-1.5 absolute right-2 top-2">
      <!-- Start -->
      <div
        @click="toggleVisibility(view.id)"
        :class="view.status == 'user' ? getVisible : getInvisible"
      >
        {{view.status == 'user'? 'Visible':'Invisible'}}
      </div>
      <!-- End -->
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "ShopCards06",
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
      let state = this.views?.find(view => view.id === id ).status
      if (state == 'user')
      {
        state = 'invisible';
      }
      else {
        state = 'user'
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
              let nview = view.id == id ? {...view, status: res.data.status} : view
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
  }
};
</script>