<template>
  <div>
    <div class="bg-white shadow-lg rounded-sm border border-slate-200 p-5 min-w-60">
      <div class="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
        <!-- Group 1 -->
        <div>
          <div class="text-sm text-slate-800 font-semibold mb-3">Categorías</div>
          <ul class="text-sm font-medium space-y-2">
            <li v-for="category in categories" :key="'CategoryId-'+category?.id">
              <router-link class="text-slate-600 hover:text-slate-700" :to="`${$route.params.id}/${category?.id}`">{{category?.name}}</router-link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopSidebar',
  props: ['categories'],
}
</script>