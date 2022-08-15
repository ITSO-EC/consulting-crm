<template>
  <div>
    <div class="bg-white shadow-lg rounded-sm border border-slate-200 p-5 min-w-60">
      <div class="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
        <!-- Group 1 -->
        <div>
          <div class="text-sm text-slate-800 font-semibold mb-3">Categorías</div>
          <ul class="text-sm font-medium space-y-2">
            <li>
              <a class="text-indigo-500" href="#0">Sector Rural</a>
            </li>
            <li>
              <a class="text-slate-600 hover:text-slate-700" href="#0">Comercial</a>
            </li>
            <li>
              <a class="text-slate-600 hover:text-slate-700" href="#0">Finanzas</a>
            </li>
            <li>
              <a class="text-slate-600 hover:text-slate-700" href="#0">Gestión</a>
            </li>
            <li>
              <a class="text-slate-600 hover:text-slate-700" href="#0">Educación</a>
            </li>
            <li>
              <a class="text-slate-600 hover:text-slate-700" href="#0">Economía</a>
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
}
</script>