<template>
  <div class="flex justify-center">
    <nav class="flex" role="navigation" aria-label="Navigation">
      <div class="mr-2">
        <button @click="handlePrevArrow" :class="getPrevArrow">
          <span class="sr-only">Anterior</span><wbr />
          <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
            <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
          </svg>
        </button>
      </div>
      <ul class="inline-flex text-sm font-medium -space-x-px shadow-sm">
        <li v-for="i in parseInt(totalPages)" :key="`PaginatorId-${i}`">
          <button @click="selectedPage = i; $emit('change-page', i)" :disabled="i==selectedPage" :class="i==selectedPage ? getSelected : getDefault">{{i}}</button>
        </li>
      </ul>
      <div class="ml-2">
        <button :disabled="selectedPage+1 > totalPages" @click="handleNextArrow" :class="getNextArrow">
          <span class="sr-only">Siguiente</span><wbr />
          <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
            <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PaginationNumeric',
  props: ['totalPages'],
  data() {
    return {
      selectedPage: 1,

    }
  },
  computed: {
      getSelected() {
          return "inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 text-indigo-500"
      },
      getDefault() {
        return "inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-indigo-500 border border-slate-200 text-slate-600 hover:text-white"
      },
      getNextArrow() {
        return this.selectedPage + 1 <= this.totalPages ? "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-indigo-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm": 
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300"
      },
      getPrevArrow() {
        return this.selectedPage - 1 > 0 ? "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-indigo-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm": 
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300"
      }
  },
  methods: {
    handleNextArrow() {
      if(this.selectedPage +1 <= this.totalPages)
      {
        this.selectedPage++; 
        this.$emit('change-page', this.selectedPage)
      }
    },
    handlePrevArrow() {
      if(this.selectedPage -1 > 0)
      {
        this.selectedPage--; 
        this.$emit('change-page', this.selectedPage)
      }
    },
  },
  mounted() {
    console.log(this.totalPages)
  }
}
</script>