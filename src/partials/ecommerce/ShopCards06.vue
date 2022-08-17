<template>
  <!-- Card 1 -->
  <div
    v-for="view in views"
    :key="`ViewCard-${view.id}`"
    class="
      relative
      col-span-full
      sm:col-span-6
      xl:col-span-3
      bg-white
      shadow-lg
      rounded-sm
      border border-slate-200
      overflow-hidden
    "
  >
    <!-- Image -->
    <img
      class="absolute w-full h-full object-cover"
      src="../../images/applications-image-17.jpg"
      width="286"
      height="160"
      alt="Application 17"
    />
    <!-- Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"
      aria-hidden="true"
    ></div>
    <!-- Content -->
    <div class="relative h-full p-5 flex flex-col justify-end">
      <h3 class="text-lg text-white font-semibold mt-16 mb-0.5">
        {{view.name}}
      </h3>
      <a
        class="text-sm font-medium text-indigo-400 hover:text-indigo-300"
        :href="view.id"
        >Ingresar -&gt;</a
      >
    </div>
    <div class="m-1.5 cursor-pointer absolute right-2 top-2">
      <!-- Start -->
      <div
        :class="view.status == 'user' ? getVisible : getInvisible"
      >
        {{view.status == 'user'? 'Visible':'Invisible'}}
      </div>
      <!-- End -->
    </div>
  </div>

</template>

<script>
export default {
  name: "ShopCards06",
  props: ['views'],
  computed: {
    getVisible() {
      return "text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1"
    },
    getInvisible() {
      return "text-xs inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1"
    }
  },
  mounted() {
    console.log(this.views);
  }
};
</script>