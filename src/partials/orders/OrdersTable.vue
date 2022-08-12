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
        <table class="table-auto w-full divide-y divide-slate-200">
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
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="flex items-center">
                  <label class="inline-flex">
                    <span class="sr-only">Select all</span>
                    <input
                      class="form-checkbox"
                      type="checkbox"
                      v-model="selectAll"
                      @click="checkAll"
                    />
                  </label>
                </div>
              </th>
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
            :key="order.id"
            :order="order"
            v-model:selected="selected"
            :value="order.id"
          />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Order from "./OrdersTableItem.vue";

import Image01 from "../../images/icon-01.svg";
import Image02 from "../../images/icon-02.svg";
import Image03 from "../../images/icon-03.svg";

export default {
  name: "OrdersTable",
  components: {
    Order,
  },
  props: ["selectedItems"],
  setup(props, { emit }) {
    const selectAll = ref(false);
    const selected = ref([]);

    const checkAll = () => {
      selected.value = [];
      if (!selectAll.value) {
        selected.value = orders.value.map((order) => order.id);
      }
    };

    watch(selected, () => {
      selectAll.value =
        orders.value.length === selected.value.length ? true : false;
      emit("change-selection", selected.value);
    });

    const orders = ref([
      {
        id: "0",
        image: Image01,
        order: "#123567",
        date: "22/01/2021",
        customer: "Patricia Semklo",
        total: "$129.00",
        status: "Anulada",
        items: "1",
        location: "user@gmail.com",
        type: "Suscripción",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "1",
        image: Image01,
        order: "#779912",
        date: "22/01/2021",
        customer: "Dominik Lamakani",
        total: "$89.00",
        status: "Resuelta",
        items: "2",
        location: "user@gmail.com",
        type: "Renovación",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "2",
        image: Image02,
        order: "#889924",
        date: "22/01/2021",
        customer: "Ivan Mesaros",
        total: "$89.00",
        status: "Resuelta",
        items: "2",
        location: "user@gmail.com",
        type: "Suscripción",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "3",
        image: Image01,
        order: "#897726",
        date: "22/01/2021",
        customer: "Maria Martinez",
        total: "$59.00",
        status: "Pendiente",
        items: "1",
        location: "user@gmail.com",
        type: "Suscripción",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "4",
        image: Image03,
        order: "#123567",
        date: "22/01/2021",
        customer: "Vicky Jung",
        total: "$39.00",
        status: "Anulada",
        items: "1",
        location: "user@gmail.com",
        type: "Renovación",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "5",
        image: Image01,
        order: "#896644",
        date: "21/01/2021",
        customer: "Tisho Yanchev",
        total: "$59.00",
        status: "Resuelta",
        items: "1",
        location: "user@gmail.com",
        type: "Suscripción",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "6",
        image: Image03,
        order: "#136988",
        date: "21/01/2021",
        customer: "James Cameron",
        total: "$89.00",
        status: "Resuelta",
        items: "1",
        location: "user@gmail.com",
        type: "Renovación",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "7",
        image: Image03,
        order: "#442206",
        date: "21/01/2021",
        customer: "Haruki Masuno",
        total: "$129.00",
        status: "Resuelta",
        items: "2",
        location: "user@gmail.com",
        type: "Renovación",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "8",
        image: Image02,
        order: "#764321",
        date: "21/01/2021",
        customer: "Joe Huang",
        total: "$89.00",
        status: "Pendiente",
        items: "2",
        location: "user@gmail.com",
        type: "Suscripción",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
      {
        id: "9",
        image: Image01,
        order: "#908764",
        date: "21/01/2021",
        customer: "Carolyn McNeail",
        total: "$59.00",
        status: "Anulada",
        items: "1",
        location: "user@gmail.com",
        type: "Renovación",
        description:
          "Aqui va un mensaje que yo deje en mi orden porque necesitaba una respuesta rápida, por favor ver el pdf.",
      },
    ]);

    return {
      selectAll,
      selected,
      checkAll,
      orders,
    };
  },
};
</script>