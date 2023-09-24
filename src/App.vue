<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex gap-3">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/cakes">Cakes</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
