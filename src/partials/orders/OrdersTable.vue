<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">
        Todas las Órdenes <span class="text-slate-400 font-medium">442</span>
      </h2>
    </header>
    <div>
      <!-- Table -->
      <div class="overflow-x-auto">
        <table v-if="!loading" class="table-auto w-full divide-y divide-slate-200">
          <!-- Table header -->
          <thead
            class="
              text-xs
              font-semibold
              uppercase
              text-slate-500
              bg-slate-50
              border-t border-slate-200
            "
          >
            <tr>
   
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Órden</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Fecha</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Cliente</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Valor</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Estado</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">Archivo</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Correo</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Asunto</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <span class="sr-only">Menu</span>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <Order
            v-for="order in orders"
            :key="order._id"
            :order="order"
            :value="order._id"
          />
        </table>
        <div v-else>
          Cargando
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  import useOrders from "./../../composables/useOrders";
  import useUsers from "./../../composables/useUsers";
  
  import Order from "./OrdersTableItem.vue";
  
  const { initializeUsers } = useUsers();
  const { orders,  initializeAllOrders, loading } = useOrders();

  initializeUsers();
  initializeAllOrders();
</script>
