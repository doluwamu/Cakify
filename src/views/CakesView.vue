<template>
  <div class="about">
    <h1>This is an cakes page</h1>
  </div>
</template>

<!-- <script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated, user } = useAuth0()
console.log(isAuthenticated.value)

if (isAuthenticated.value === false || !user.value) window.location.replace('/')
</script> -->

<script lang="ts">
import { storeToRefs } from 'pinia'
import { useCakeStore } from '../stores/cake'

export default {
  name: 'Cakes'
}
</script>
