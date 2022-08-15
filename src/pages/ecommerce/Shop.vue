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
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white mb-6 justify-self-start sm:justify-self-end">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="hidden xs:block ml-2">Nueva Vista</span>
              </button>
          </div>

          <!-- Filters -->
          <div class="mb-4 border-b border-slate-200">
            <ul class="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a class="text-indigo-500 whitespace-nowrap" href="#0">Vistas</a>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a class="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Marco Legal Actualizado</a>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a class="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Marco Legal Específico</a>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a class="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Marco Legal Diario</a>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a class="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Noticias</a>
              </li>
            </ul>
          </div>

          <!-- Page content -->
          <div>


            <!-- Cards 6 (Trending Now) -->
            <div class="mt-8">
              <h2 class="text-xl leading-snug text-slate-800 font-bold mb-5">Vistas</h2>
              <div class="grid grid-cols-12 gap-6">
                <ShopCards06 />
                
                <ShopCards06 />
                <ShopCards06 />
              </div>
            </div>




          </div>

        </div>        
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import ShopCards01 from '../../partials/ecommerce/ShopCards01.vue'
import ShopCards02 from '../../partials/ecommerce/ShopCards02.vue'
import ShopCards03 from '../../partials/ecommerce/ShopCards03.vue'
import ShopCards04 from '../../partials/ecommerce/ShopCards04.vue'
import ShopCards05 from '../../partials/ecommerce/ShopCards05.vue'
import ShopCards06 from '../../partials/ecommerce/ShopCards06.vue'

export default {
  name: 'Shop',
  components: {
    Sidebar,
    Header,
    ShopCards01,
    ShopCards02,
    ShopCards03,
    ShopCards04,
    ShopCards05,
    ShopCards06,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>