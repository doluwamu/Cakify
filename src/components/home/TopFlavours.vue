<template>
  <section id="top-flavours" class="p-2">
    <h1 class="text-3xl text-center font-semibold py-6 sm:text-4xl">Top Cakes</h1>

    <div class="flex flex-col gap-8 justify-center items-center sm:flex-row sm:flex-wrap">
      <div
        v-for="(flavour, i) in flavours"
        :key="i"
        class="relative sm:w-1/3 md:w-1/4 overflow-hidden"
      >
        <img :src="flavour.image" :alt="flavour.name" class="" />
        <div
          class="absolute bottom-0 w-full flex items-center justify-center py-2 bg-black-800 h-12 sm:h-8 md:h-12"
        >
          <p class="text-white font-mediium text-xl">
            {{ flavour.type }}
          </p>
        </div>
      </div>

      <div class="relative sm:w-1/3 md:w-1/4 overflow-hidden"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { useCakeStore } from '../../stores/cake'

export default {
  name: 'TopFlavours',
  setup() {
    const cakeStore = useCakeStore()
    const flavours = cakeStore.$state.flavours

    return { flavours }
  }
}
</script>
