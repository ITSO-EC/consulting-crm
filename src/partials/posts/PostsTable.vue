<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">Publicaciones <span class="text-slate-400 font-medium">67</span></h2>
    </header>
    <div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
            <tr>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="flex items-center">
                  <label class="inline-flex">
                    <span class="sr-only">Todos</span>
                    <input class="form-checkbox" type="checkbox" v-model="selectAll" @click="checkAll" />
                  </label>
                </div>
              </th>
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

              :postid="post.id"
              :number="post.number"
              :ro="post.ro"
              :status="post.status"
              :type="post.type"
              :content="post.content"
              :legal_regulation="post.legal_regulation"
              :type_reform="post.type_reform"

              v-model:selected="selected"
              :value="post.id"
            />
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import Post from './PostTableItem.vue'
import axios from 'axios'

export default {
  name: 'PostsTable',
  components: {
    Post,
  },  
  props: ['selectedItems'],
 
  setup(props, { emit }) {

    const selectAll = ref(false)
    const selected = ref([])
    const posts = ref([]);

    const checkAll = () => {
      selected.value = []
      if (!selectAll.value) {
        selected.value = invoices.value.map(invoice => invoice.id)
      }
    }
    
    watch(selected, () => {
      selectAll.value = invoices.value.length === selected.value.length ? true : false
      emit('change-selection', selected.value)
    })    
  
    const invoices = ref([
      {
        id: '0',
        invoice: '#123567',
        total: 'Suplemento Importante SRI',
        status: 'Corregir',
        customer: '#42391',
        issueddate: '22/07/2021',
        paiddate: '-',        
        type: 'Suplemento',
      },
    ])
    function getPosts() {
      axios.get(import.meta.env.VITE_API_URL+'posts?limit='+10+'&page='+1)
      .then(response => {
        posts.value = response.data.results;
        })
      .catch(error => console.log(error));
    }
    

    onMounted(()=>{
      getPosts();
    })
    return {
      selectAll,
      selected,
      checkAll,
      posts,
    }
  }
}
</script>