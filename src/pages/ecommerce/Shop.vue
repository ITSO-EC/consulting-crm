<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="mb-5">

            <!-- Title -->
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Contenido 💡</h1>

          </div>


          <div class="flex grid grid-cols-1 sm:grid-cols-2">
            
          <!-- Search form -->
          <div class="min-w-xl mb-5">
            <form class="relative w-">
              <label for="app-search" class="sr-only">Search</label>
              <input id="app-search" class="form-input w-full pl-9 py-3 focus:border-slate-300" type="search" placeholder="Search…" />
              <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            
                
          </div>
            <!-- Add order button -->
              <button 
              @click.stop="createModalOpen = true"
              class="btn bg-indigo-500 hover:bg-indigo-600 
              text-white mb-6 justify-self-start sm:justify-self-end">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="hidden xs:block ml-2">Nueva Vista</span>
              </button>
          </div>


          <!-- Page content -->
          <div>


            <!-- Cards 6 (Trending Now) -->
            <div class="mt-8">
              <h2 class="text-xl leading-snug text-slate-800 font-bold mb-5">Vistas</h2>
              <div class="grid grid-cols-12 gap-6">
                <ShopCards06 :views="views" />
                
              </div>
            </div>




          </div>

        </div>        
      </main>

    </div> 
    
    <!-- Create View-->
    <ModalBasic
      :modalOpen="createModalOpen"
      @close-modal="createModalOpen = false"
      title="Crear Vista"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <div class="font-medium text-slate-800 mb-2">
            Haga click sobre la foto para cambiarla.
          </div>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="flex justify-center sm:col-span-2">
             
              <img
                class="cursor-pointer hover:grayscale ease-in-out duration-300 active:grayscale-0 w-44 h-24"
                :src="'/src/images/applications-image-18.jpg'"
                width="120"
                height="80"
                :alt="'Foto de la vista'"
              />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="name" 
                >Nombre</label
              >
              <input id="name" class="form-input w-full" type="text" v-model="newPage.name"/>
            </div>
           
           <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="status"
                >Estado</label
              >
              <select id="status" class="form-select" v-model="newPage.status">
                <option value="user">Visible</option>
                <option value="admin">Invisible</option>
              </select>
            </div>
            

            <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="categories"
                >Categorías</label
              >
              <div class="flex h-12 gap-2 items-center justify-cneter">
                <input id="categories" class="form-input w-full" type="text" /> 
                <button 
                class="btn bg-indigo-500 hover:bg-indigo-600 
                text-white justify-self-start sm:justify-self-end">
                  <svg class="h-[18px] fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  
                </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="px-5 py-4">
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="
              btn-sm
              border-slate-200
              hover:border-slate-300
              text-slate-600
            "
            @click.stop="createModalOpen = false"
          >
            Cancelar
          </button>
          <button :disabled="submitting" @click="createView" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>

  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import ShopCards06 from '../../partials/ecommerce/ShopCards06.vue'
import ModalBasic from '../../components/ModalBasic.vue'
import axios from 'axios'

export default {
  name: 'Shop',
  components: {
    Sidebar,
    Header,
    ModalBasic,
    ShopCards06,
  },
  setup() {
    const newPage = ref({
      name:'',
      image_url: '/src/images/applications-image-18.jpg',
      status: 'user',
    })
    const submitting= ref(false);
    const sidebarOpen = ref(false)
    const createModalOpen = ref(false);
    const selectedPage = ref(1);
    const totalPages = ref(1);

    const limit = ref(8);
    const views = ref([]);

    function resetData() {
      newPage.value = {
        name:'',
        image_url: '/src/images/applications-image-18.jpg',
        status: 'user',
      }
    }
    function createView() {
        submitting.value = true;
        axios.post(import.meta.env.VITE_API_URL+'pages', newPage.value)
        .then(response => {
          submitting.value = false
          resetData();
          getViews();
        })
        .catch(error => {
          submitting.value = false
          console.log(error)
          resetData()
        });
    };

    function getViews() {
      axios.get(import.meta.env.VITE_API_URL+'pages?limit='+limit.value+'&page='+selectedPage.value)
      .then(response => {
        console.log(response.data);
        views.value = response.data.results;
        totalPages.value = response.data.totalPages;
        })
      .catch(error => console.log(error));
    }

    onMounted(()=> {
      getViews();
    })
    return {
      newPage,
      sidebarOpen,
      createModalOpen,
      totalPages,
      selectedPage,
      views,
      createView,
      submitting
    }  
  }
}
</script>