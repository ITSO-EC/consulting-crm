<template>
  <div>
    <!-- Add category button -->
    <button :disabled="loading" @click.stop="createCategoryModalOpen = true" class="btn bg-indigo-500 hover:bg-indigo-600 text-white z-10">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="block ml-2">Agregar Categoría</span>
              </button>   
    <div class="bg-white shadow-lg rounded-sm border border-slate-200 p-5 mt-5 min-w-60">
      
      <div v-if="!loading" class="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
        <!-- Group 1 -->
        <div class="md:col-span-2 xl:col-span-1">
          
          <div class="text-sm text-slate-800 font-semibold mb-3">Categorías</div>
          <ul class="text-sm font-medium space-y-2">
            <li v-for="category in categories" :key="'CategoryId-'+category?.id" class="w-full">
            
              <router-link 
              :class="$route.params.categoryId != null && $route.params.categoryId == category?._id ? ' font-bold text-sky-500': ''"
              class="inline-block text-slate-600 hover:text-slate-700 w-full" 
              :to="{name:'Workspace', params:{id: $route.params.id, categoryId: category?._id}}">
              {{category?.name}}</router-link>
            </li>
            <li v-if="categories.length < 1">
              Sin categorias aún
            </li>
           
          </ul>
        </div>
      </div>

      <div v-else class="md:col-span-2 xl:col-span-1">
        <svg class="animate-spin block h-12 w-12 mt-10 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 
        <span class="inline-block text-xl font-bold w-full my-4 mt-6 mx-auto text-center">Actualizando</span>
      </div>

    </div>

 

     <!-- Create Category Modal -->
     <ModalBasic
      :modalOpen="createCategoryModalOpen"
      @close-modal="createCategoryModalOpen = false"
      title="Crear Categoría"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
            <h1 class="my-4">
              Escriba el nombre de la categoría para registrar en esta vista.              
            </h1>
          <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <!-- Start -->
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium mb-1 mt-2" for="cc-name"
                >Nombre:</label
              >
              <input id="cc-name" class="form-input w-full" type="text" v-model="newCategory.name"/>
            </div>
            <!-- Start -->
            <!-- <div>
              <label class="block text-sm font-medium mb-1 " for="cc-email"
                >Vistas Madre</label
              >
              <input id="cc-email" class="form-input w-full" type="text" />
            </div> -->

            
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
          <button @click.stop="createCategory(newCategory); createCategoryModalOpen = false" class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </ModalBasic>

    <!-- Edit Category -->
    <ModalBasic
      :modalOpen="editCategoryModalOpen"
      @close-modal="editCategoryModalOpen = false"
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
                :src="'../src/images/user-64-01.jpg'"
                width="64"
                height="64"
                :alt="'Foto de perfil'"
              />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="ec-name"
                >Nombre y Apellido</label
              >
              <input id="ec-name" class="form-input w-full" type="text" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1 mt-2" for="ec-email"
                >Correo</label
              >
              <input id="ec-email" class="form-input w-full" type="text" />
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
              <label class="block text-sm font-medium mb-1" for="ec-password"
                >Clave</label
              >
              <input id="ec-password" class="form-input w-full" type="password" />
            </div>
            <!-- Start -->
            <div>
              <label class="block text-sm font-medium mb-1" for="ec-confpassword"
                >Confirmar Clave</label
              >
              <input id="ec-confpassword" class="form-input w-full" type="password" />
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
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useCategories from '../../composables/useCategories';
import ModalBasic from '../../components/ModalBasic.vue'

const { categories, selectedCategory,error, loading, results, page, initializeCategories, createCategory,getCategoryById } = useCategories();
//const props = defineProps(['categories'])
const route = useRoute()
const createCategoryModalOpen = ref(false);
const editCategoryModalOpen = ref(false);
const newCategory = ref({
      name: "",
      page: route.params.id
})

initializeCategories(route.params.id);
</script>