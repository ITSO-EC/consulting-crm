<template>
  <div :key="loading" class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">Publicaciones <span class="text-slate-400 font-medium">67</span></h2>
    </header>
    <div v-if="!loading">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
            <tr>
              <!-- <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="flex items-center">
                  <label class="inline-flex">
                    <span class="sr-only">Todos</span>
                    <input class="form-checkbox" type="checkbox" v-model="selectAll" @click="checkAll" />
                  </label>
                </div>
              </th> -->
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Post</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Título</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Estado</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">R.O.#</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Fecha Registro</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Fecha Actualización</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Tipo Reforma</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Acciones</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <Post
              v-for="post of posts"
              :key="post.id"
              :post="post"
              v-model:selected="selected"
              :value="post.id"
            />
            <div v-if="posts.length < 1" class="p-5 py-8 w-12">
              <span class="absolute -mt-2">No hay posts registrados aún en esta categoría.</span>
            </div>
          </tbody>
        </table>

      </div>
    </div>
    <div v-else class="md:col-span-2 xl:col-span-1">
        <svg class="animate-spin block h-24 w-24 mt-10 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 
        <span class="inline-block text-xl font-bold w-full my-4 mt-6 mx-auto text-center mb-10">Actualizando</span>
      </div>
     <!-- Create Post -->
     <ModalBasic
      :modalOpen="createPostModalOpen"
      @close-modal="closeCreateModal()"
      title="Crear Publicación"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <div class="font-medium text-slate-800 mb-2">
            Haga click sobre el círculo y elija una foto apropiada.
          </div>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <!-- <div class="flex justify-center sm:col-span-2">
             
              <img
                class="rounded-full cursor-pointer hover:grayscale ease-in-out duration-300 active:grayscale-0"
                :src="'https://images.unsplash.com/photo-1521245307621-b71069baa546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'"
                width="64"
                height="64"
                :alt="'Foto de perfil'"
              />
            </div> -->
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="title"
                >Titulo</label
              >
              <input id="title" class="form-input w-full" type="text" v-model="newPost.title"/>
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
                >Tipo de Norma</label
              >
              <input id="reference" class="form-input w-full" type="text" v-model="newPost.type"/>
            </div>
             <!-- Select -->
            <!-- <div>
              <label class="block text-sm font-medium mb-1" for="country"
                >Categoría </label
              >
              <select id="country" class="form-select" v-model="newPost.category">
                <option :value="category.id" v-for="category in categories" :key="`CategorySelect-${category.id}`">
                  {{category.name}}
                </option>
              </select>
            </div> -->

            
            <!-- Start -->
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium mb-1" for="file"
                >Archivo Adjunto</label
              >
              <form class="w-full" ref="form">
                <input id="file" class="form-input w-full" type="file" ref="fileInput" @input="onSelectedFile()" />
              </form>
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
            @click.stop="closeCreateModal()"
          >
            Cancelar
          </button>
          <button @click="createPost" :disabled="submitting" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
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
          <form class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="flex justify-center sm:col-span-2">
             
              <img
                class="rounded-full cursor-pointer hover:grayscale ease-in-out duration-300 active:grayscale-0"
                :src="'https://images.unsplash.com/photo-1521245307621-b71069baa546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'"
               width="64"
                height="64"
                :alt="'Foto de perfil'"
              />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="ep-name"
                >Nombre y Apellido</label
              >
              <input id="ep-name" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="ep-email"
                >Correo</label
              >
              <input id="ep-email" class="form-input w-full" type="text" />
            </div>

            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="ep-phrase"
                >Breve Descripción</label
              >
              <input id="ep-phrase" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="ep-cellphone"
                >Celular</label
              >
              <input id="ep-cellphone" class="form-input w-full" type="text" />
            </div>

           
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="ep-password"
                >Clave</label
              >
              <input id="ep-password" class="form-input w-full" type="password" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="ep-confpassword"
                >Confirmar Clave</label
              >
              <input id="ep-confpassword" class="form-input w-full" type="password" />
            </div>
             <!-- Select -->
            <div>
              <label class="block text-sm font-medium mb-1" for="ep-country"
                >Rol</label
              >
              <select id="ep-country" class="form-select">
                <option>Creador</option>
                <option>Revisor I</option>
                <option>Revisor II</option>
              </select>
            </div>
          </form>
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

<script setup>
import { onMounted, defineProps, defineEmits, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Post from './PostTableItem.vue'
import ModalBasic from '../../components/ModalBasic.vue'
import axios from 'axios'
import useCategories from '../../composables/useCategories';
import useQueryPosts from '../../composables/useQueryPosts';


const PROXY_URL='https://sheltered-dusk-91889.herokuapp.com/'
const { categories} = useCategories();
const { posts, selectedPost, error, loading, results, page, initializeAllPosts, initializeQueriedPosts} = useQueryPosts();
const submitting = ref(false);

const route = useRoute();
const props = defineProps(['selectedItems', 'create-button', 'editButton'])
const emit = defineEmits(['change-selection','close-create'])
const selectAll = ref(false)
const selected = ref([])
const newPost = ref({
  status: "user",
  type: "",
  number: "",
  title: "",
  content: "",
  legal_regulation: "",
  image_url: "http",
  status:"pendiente",
  type_reform: "",
      //reference: "6309e58b6310870021f66e05",
  ro: ""
})
    
//File selector        
const selectedFile = ref(null);
const fileInput = ref(null);
let formData = new FormData()

const form = ref(null);
function onSelectedFile() {
  let file = fileInput.value.files;
      
      if (file != null) {
        let reader = new FileReader();
        reader.onload = (e) => {
          selectedFile.value = e.target.result;
         
        };
        reader.readAsDataURL(file[0]);
        
        formData =  file[0]
        console.log("blob", formData)
      }
    }

  


function deleteFile() {
  selectedFile.value = null;
  form.value.reset();
}

    
const createPostModalOpen = ref(props.createButton);
    
const editPostModalOpen = ref(false);

const deletePostModalOpen = ref(false);

    //const posts = ref(props.posts);
function closeCreateModal() {
  emit('close-create');
}
   
    
    
    function createPost() {
        submitting.value = true;

        axios.post(PROXY_URL+import.meta.env.VITE_API_URL+'posts', {...newPost.value, file_url: formData, category: route.params.categoryId,reference:'www.sri.gob.ec'}, {
          headers: {
            'Content-type':'multipart/form-data'
          }
        })
        .then(response => {
          submitting.value = false

        })
        .catch(error => {
          submitting.value = false
          console.log("error",error)
          
        });
    };

  initializeQueriedPosts(route.params.categoryId)
    
   
</script>