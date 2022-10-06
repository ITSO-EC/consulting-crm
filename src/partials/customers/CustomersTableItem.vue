<template>
  <tr :key="myorders.length">
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{customer.name}}</div>
    </td>
    
    <!-- <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="flex items-center">
        <div class="w-10 h-10 shrink-0 mr-2 sm:mr-3">
          <img class="rounded-full" :src="customer.image" width="40" height="40" :alt="customer.name" />
        </div>
        <div class="font-medium text-slate-800">{{customer.name}}</div>
      </div>
    </td> -->
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{customer.email}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{getRole(customer.role)}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center">{{myorders}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left font-medium text-sky-500">{{convertDate(customer.updatedAt)}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left font-medium text-emerald-500">${{myprice}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center">{{myrefunds}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <!-- Menu button -->
      <button class="text-slate-400 hover:text-slate-500 rounded-full">
        <span class="sr-only">Menu</span>
        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="2" />
          <circle cx="10" cy="16" r="2" />
          <circle cx="22" cy="16" r="2" />
        </svg>
      </button>
    </td>
  </tr>  
</template>

<script setup>
import useOrders from '../../composables/useOrders';
import { defineProps, onMounted,ref } from 'vue';
const {orders} = useOrders();
const props = defineProps(['customer', 'value', 'selected'])

const convertDate = (date) => {
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Error"
];

  date = new Date(date)
  let dd = date.getDate(); 
  let mm = date.getMonth();
  let yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  return date = dd+'-'+monthNames[mm]+'-'+yyyy
}

//OPTIMIZABLE
//TEMPORAL HASTA QUE SE USE EL QUERY... REMOVER
const myorders = ref(0)
const myprice = ref(0)
const myrefunds = ref(0)
function filterById() {
  let neworders = [...orders?.value]
  neworders.filter(order=>order.user==props.customer.id)
  
  let thisorders = neworders.length;
  let refunds = neworders.reduce((totalValue, currentOrder)=>currentOrder.type=='refunded'? totalValue++ : totalValue, 0)
  let price = neworders.reduce((totalValue, currentOrder)=>totalValue+currentOrder.price, 0)
  
  myprice.value = price;
  myorders.value = thisorders-refunds;
  myrefunds.value = refunds;
}

function getRole(role) {
  switch(role) {
    case 'user':
      return "Usuario";
    case 'member':
      return "Miembro";
    default:
      return "Unknown";
  }
}
onMounted(()=>{
  filterById()

})
</script>
