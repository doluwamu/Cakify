<template>
  <section class="p-4">
    <div class="flex flex-col justify-center gap-4 items-center sm:px-4 sm:flex-row sm:flex-wrap">
      <div
        class="flex flex-col gap-2 items-center justify-center sm:w-1/3 md:w-1/4"
        v-if="loadingFetch === false"
        v-for="(cake, i) in cakes"
        :key="i"
      >
        <img :src="cake.image" alt="" />
        <p class="text-sm text-center">{{ cake.title }}</p>
      </div>

      <div class="text-center" v-if="loadingFetch === true">Loading...</div>
    </div>
  </section>
</template>

<script lang="ts">
import { useCakeStore } from '../../stores/cake'

export default {
  name: 'CakesDisplay',
  data() {
    return {
      cakes: [],
      loadingFetch: false
    }
  },
  async mounted() {
    const cakeStore = useCakeStore()
    let cks: any[] = []

    try {
      await cakeStore.getCakes()
      cks = cakeStore.$state.cakes

      //   debugger
    } catch (error) {
      throw error
    }

    return (this.cakes = cks)

    // const prom = cakeStore.$state.
  }
}
</script>
