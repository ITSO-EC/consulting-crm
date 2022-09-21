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
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Vistas 💡</h1>

          </div>

          <div class="flex grid grid-cols-1 sm:grid-cols-2">
            
            <!-- Search form -->
            <div class="min-w-xl mb-5">
              <form class="relative w-">
                <label for="app-search" class="sr-only">Search</label>
                <input id="app-search" class="form-input w-full pl-9 py-3 focus:border-slate-300" type="search" placeholder="Search…" />
                <button class="absolute inset-0 right-auto group" disabled aria-disabled="true" aria-label="Search">
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


            <div class="mt-8">
              <div class="grid grid-cols-12 gap-6">
                <ViewCards v-if="!loading" :xviews="views" @update-list="getViews()" :key="loading"/>
                <span v-else>Cargando {{results}}</span>
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
            
            <div class="flex justify-center sm:col-span-2"
            @click="pickFile()"
             >
             
              <img
                
                class="cursor-pointer hover:brightness-50 ease-in-out duration-300 active:brightness-100 w-44 h-24"
                :src="selectedFile"
                width="120"
                height="80"
                :alt="'Foto de la vista'"
              />
              <form class="hidden" ref="form" action="">
                <input ref="fileInput" type="file" @input="onSelectedFile" />
              </form>
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
                <option value="visible">Visible</option>
                <option value="invisible">Invisible</option>
              </select>
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
import ViewCards from '../../partials/ecommerce/ViewCards.vue'
import ModalBasic from '../../components/ModalBasic.vue'

import useViews from '../../composables/useViews';
import axios from 'axios'
 
const PROXY_URL = 'https://cryptic-dawn-02543.herokuapp.com/'
export default {
  name: 'Shop',
  components: {
    Sidebar,
    Header,
    ModalBasic,
    ViewCards,
  },
  setup() {
    const newPage = ref({
      name:'',
      status: 'visible',
    })
    const downloading = ref(false);
    const submitting= ref(false);
    const sidebarOpen = ref(false)
    const createModalOpen = ref(false);
    const selectedPage = ref(1);
    const totalPages = ref(1);

    const limit = ref(8);
    const notviews = ref([]);
    const {views, queriedViews,error, loading, results, page, initializeViews, filterByName} = useViews();


    function resetData() {
     
      newPage.value = {
        name:'',
        status: 'visible',
      }
    }
    function createView() {
        submitting.value = true;
        axios.post(PROXY_URL+import.meta.env.VITE_API_URL+'pages', {image_url: selectedFile.value , ...newPage.value})
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
      initializeViews();
    //   downloading.value = true
    //   axios.get(import.meta.env.VITE_API_URL+'pages?limit='+limit.value+'&page='+selectedPage.value)
    //   .then(response => {
    //     views.value = response.data.results;
    //     totalPages.value = response.data.totalPages;
    //     downloading.value = false;
    //     })
    //   .catch(error => console.log(error));
     }




    //File selector        
    const selectedFile = ref('/src/images/applications-image-18.jpg');
    const fileInput = ref(null);
    const form = ref(null);

    function onSelectedFile() {
      let file = fileInput.value.files;
      
      if (file != null) {
        let reader = new FileReader();
        reader.onload = (e) => {
          selectedFile.value = e.target.result;
          
        };
        reader.readAsDataURL(file[0]);
      }
    }

    function pickFile() {
      fileInput.value.click();
    }


    function deleteFile() {
      selectedFile.value = null;
      form.value.reset();
    }
    onMounted(async()=> {
      await initializeViews();
    })
    return {
      newPage,
      sidebarOpen,
      createModalOpen,
      totalPages,
      selectedPage,
      views,

      selectedFile,
      fileInput,
      form,
      onSelectedFile,
      pickFile,
      deleteFile,

      queriedViews,error, loading, results, page, initializeViews, filterByName,

      createView,
      getViews,
      submitting,
      downloading
    }  
  }
}
</script>