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
          <div class=" w-full h-44 absolute overflow-y-hidden -my-8 -mx-4 sm:-mx-6 lg:-mx-8 z-0">
            <img class="" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="">
          </div>
          <!-- Page header -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8 h-44">
            <!-- Left: Title and subtitle -->
            <div class="-mx-4 sm:-mx-6 lg:-mx-8 px-8 pl-4 rounded sm:mb-4 md:mb-8 z-10 backdrop-blur-md bg-white/30 w-full sm:w-1/2">
              <input type="text" class="w-full h-auto text-2xl md:text-3xl text-slate-900 font-bold bg-transparent 
                appearance-none
                active:ring-0 focus:ring-0 ring-0
                border-none
                " value="Marco Legal Actualizado"/>
                <input type="text" class="block -mt-4 text-lg md:text-xl text-slate-600 font-bold bg-transparent 
                appearance-none
                active:ring-0 focus:ring-0 ring-0
                border-none
                " value="Subtitulo Creativo"/>
                
                <input type="text" disabled class="block text-md md:text-lg text-slate-600 bg-transparent 
                appearance-none
                active:ring-0 focus:ring-0 ring-0
                border-none
                " value="Últ.Act.: 20/04/22"/>
                
              <h3 class="text-md md:text-lg text-slate-600 font-bold mt-4"></h3>
            </div>
            <div class="flex z-10 gap-4"> 
              <!-- Edit button -->
              <button class="btn bg-white hover:bg-slate-200 text-black z-10">
                
                <span class="" @click.stop="registerModalOpen = true">Cambiar Foto</span>
              </button>   
            <!-- Add category button -->
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white z-10">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="block ml-2" @click.stop="createCategoryModalOpen = true">Agregar Categoría</span>
              </button>   
            </div>
                   

          </div>
          <!-- Page content -->
          <div class="absolute flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-2">

            <!-- Sidebar -->
            <CategorySidebar />

            <!-- Content -->
            <div>

                
            <!-- More actions -->
            <div class="sm:flex sm:justify-between sm:items-center mb-5">
              <!-- Left side -->
              <div class="mb-4 sm:mb-0">
                  <ul class="flex flex-wrap -m-1">
                      <li class="m-1">
                          <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">Todas <span class="ml-1 text-indigo-200">67</span></button>
                      </li>
                      <li class="m-1">
                          <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Aprobado II <span class="ml-1 text-slate-400">14</span></button>
                      </li>
                      <li class="m-1">
                          <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Aprobado I <span class="ml-1 text-slate-400">14</span></button>
                      </li>
                      <li class="m-1">
                          <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Pendiente <span class="ml-1 text-slate-400">34</span></button>
                      </li>
                      <li class="m-1">
                          <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Corregir <span class="ml-1 text-slate-400">19</span></button>
                      </li>
                  </ul>
              </div>
              <!-- Right: Actions  -->
              <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <!-- Search form -->
                <SearchForm placeholder="Buscar Publicación" />
                <!-- Create post button -->
                <button 
                @click.stop="createPostModalOpen = true"
                class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span class="hidden xs:block ml-2">Crear Publicación</span>
                </button>
              </div>           
            </div>

             
              <!-- Cards 1 (Video Courses) -->
              <div>
                
                <!-- Table -->
                <PostsTable @change-selection="updateSelectedItems($event)" />

              </div>

              <!-- Pagination -->
              <div class="mt-6">
                <PaginationClassic />
              </div>

            </div>

          </div>

        </div>        
      </main>

    </div> 
    
    <!-- Create Post -->
    <ModalBasic
      :modalOpen="createPostModalOpen"
      @close-modal="createPostModalOpen = false"
      title="Crear Publicación"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <div class="font-medium text-slate-800 mb-2">
            Haga click sobre el círculo y elija una foto apropiada.
          </div>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="flex justify-center sm:col-span-2">
             
              <img
                class="rounded-full cursor-pointer hover:grayscale ease-in-out duration-300 active:grayscale-0"
                :src="'../src/images/user-64-01.jpg'"
                width="64"
                height="64"
                :alt="'Foto de perfil'"
              />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="title"
                >Titulo</label
              >
              <input id="title" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="ronumber"
                >Número de R.O.</label
              >
              <input id="ronumber" class="form-input w-full" type="text" v-model="newPost.ro" />
            </div>

            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="legalnorm"
                >Norma Legal</label
              >
              <input id="legalnorm" class="form-input w-full" type="text" v-model="newPost.legal_regulation" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="normnum"
                >Número de norma</label
              >
              <input id="normnum" class="form-input w-full" type="text" v-model="newPost.number" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="reformtype"
                >Tipo de Reforma</label
              >
              <input id="reformtype" class="form-input w-full" type="text" v-model="newPost.type_reform"/>
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="description"
                >Descripción</label
              >
              <input id="description" class="form-input w-full" type="text" v-model="newPost.content"/>
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="reference"
                >Referencia</label
              >
              <input id="reference" class="form-input w-full" type="text" />
            </div>
             <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1" for="country"
                >Categoría </label
              >
              <select id="country" class="form-select">
                <option>Categoria 1</option>
                <option>Categoria 2</option>
                <option>Categoria 3</option>
              </select>
            </div>

            
            <!-- Start -->
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium mb-1" for="reference"
                >Archivo Adjunto</label
              >
              <input id="reference" class="form-input w-full" type="file" />
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
            @click.stop="createPostModalOpen = false"
          >
            Cancelar
          </button>
          <button @click="createPost" :disabled="submitting" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>
    
    <!-- Create Category Modal -->
    <ModalBasic
      :modalOpen="createCategoryModalOpen"
      @close-modal="createCategoryModalOpen = false"
      title="Crear Categoría"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
    
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="name"
                >Nombre</label
              >
              <input id="name" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 " for="email"
                >Vistas Madre</label
              >
              <input id="email" class="form-input w-full" type="text" />
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
            @click.stop="createCategoryModalOpen = false"
          >
            Cancelar
          </button>
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>

    
    <!-- Edit Post -->
    <ModalBasic
      :modalOpen="editPostModalOpen"
      @close-modal="editPostModalOpen = false"
      title="Editar Operador"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <div class="font-medium text-slate-800 mb-2">
            Haga click sobre el círculo y elija una foto de perfil.
          </div>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="flex justify-center sm:col-span-2">
             
              <img
                class="rounded-full cursor-pointer hover:grayscale ease-in-out duration-300 active:grayscale-0"
                :src="Image01 != null ? Image01 :'../src/images/user-64-01.jpg'"
                width="64"
                height="64"
                :alt="'Foto de perfil'"
              />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="name"
                >Nombre y Apellido</label
              >
              <input id="name" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="email"
                >Correo</label
              >
              <input id="email" class="form-input w-full" type="text" />
            </div>

            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="phrase"
                >Breve Descripción</label
              >
              <input id="phrase" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="cellphone"
                >Celular</label
              >
              <input id="cellphone" class="form-input w-full" type="text" />
            </div>

           
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="password"
                >Clave</label
              >
              <input id="password" class="form-input w-full" type="password" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="password"
                >Confirmar Clave</label
              >
              <input id="password" class="form-input w-full" type="password" />
            </div>
             <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1" for="country"
                >Rol</label
              >
              <select id="country" class="form-select">
                <option>Creador</option>
                <option>Revisor I</option>
                <option>Revisor II</option>
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
            @click.stop="createPostModalOpen = false"
          >
            Cancelar
          </button>
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>

    
    <!-- Edit Category -->
    <ModalBasic
      :modalOpen="editPostModalOpen"
      @close-modal="editPostModalOpen = false"
      title="Editar Operador"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <div class="font-medium text-slate-800 mb-2">
            Haga click sobre el círculo y elija una foto de perfil.
          </div>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="flex justify-center sm:col-span-2">
             
              <img
                class="rounded-full cursor-pointer hover:grayscale ease-in-out duration-300 active:grayscale-0"
                :src="Image01 != null ? Image01 :'../src/images/user-64-01.jpg'"
                width="64"
                height="64"
                :alt="'Foto de perfil'"
              />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="name"
                >Nombre y Apellido</label
              >
              <input id="name" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="email"
                >Correo</label
              >
              <input id="email" class="form-input w-full" type="text" />
            </div>

            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="phrase"
                >Breve Descripción</label
              >
              <input id="phrase" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="cellphone"
                >Celular</label
              >
              <input id="cellphone" class="form-input w-full" type="text" />
            </div>

           
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="password"
                >Clave</label
              >
              <input id="password" class="form-input w-full" type="password" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="password"
                >Confirmar Clave</label
              >
              <input id="password" class="form-input w-full" type="password" />
            </div>
             <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1" for="country"
                >Rol</label
              >
              <select id="country" class="form-select">
                <option>Creador</option>
                <option>Revisor I</option>
                <option>Revisor II</option>
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
            @click.stop="createPostModalOpen = false"
          >
            Cancelar
          </button>
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>
  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import SearchForm from '../../components/SearchForm.vue'
import Header from '../../partials/Header.vue'
import CategorySidebar from '../../partials/ecommerce/CategorySidebar.vue'
import ShopCards07 from '../../partials/ecommerce/ShopCards07.vue'
import PostsTable from '../../partials/posts/PostsTable.vue'
import PaginationClassic from '../../components/PaginationClassic.vue'
import axios from 'axios'
import ModalBasic from '../../components/ModalBasic.vue'

export default {
  name: 'Workspace',
  components: {
    Sidebar,
    SearchForm,
    ModalBasic,
    PostsTable,
    Header,
    CategorySidebar,
    ShopCards07,    
    PaginationClassic,
  },
  setup() {
    
    const newPost = ref({
      status: "hi",
      type: "file",
      number: "hola",
      content: "hola",
      legal_regulation: "hi",
      image_url: "http",
      file_url: "a",
      type_reform: "a",
      ro: "a",
    })
    const submitting = ref(false);

    const sidebarOpen = ref(false)
    const selectedItems = ref([])

    
    const createCategoryModalOpen = ref(false);
    const createPostModalOpen = ref(false);
    
    const editCategoryModalOpen = ref(false);
    const editPostModalOpen = ref(false);

    
    const deleteCategoryModalOpen = ref(false);
    const deletePostModalOpen = ref(false);

    const updateSelectedItems = (selected) => {
      selectedItems.value = selected
    }

    function createPost() {
        submitting.value = true;
        axios.post(import.meta.env.VITE_API_URL+'posts', newPost.value)
        .then(response => {
          submitting.value = false

        })
        .catch(error => {
          submitting.value = false
          
        });
    };

    return {
      sidebarOpen,
      selectedItems,
      updateSelectedItems,
      createCategoryModalOpen,
      createPostModalOpen,
      editCategoryModalOpen,
      editPostModalOpen,
      deleteCategoryModalOpen,
      deletePostModalOpen,

      newPost,
      submitting,
      createPost
    }  
  }
}
</script>