<template>
  <div class="about">
    <h1>This is an cakes page</h1>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { useCakeStore } from '@/stores/cake'

export default {
  name: 'Cakes',
  setup() {
    const cakeStore = useCakeStore()
    const cakes = cakeStore.$state.cakes

    console.log(cakes)
  }
}
</script>
