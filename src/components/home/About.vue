<template>
  <section class="flex flex-col px-2 py-28 gap-3 md:flex-row md:pr-2">
    <div class="image-splide md:w-1/2">
      <img src="@/assets/img/app/cake4.jpg" alt="img" />
    </div>

    <div class="texts flex flex-col justify-center gap-6 px-2 md:px-20 md:w-1/2">
      <h1 class="text-3xl sm:text-4xl md:text-5xl">Get top notch preparation methods</h1>
      <p class="text-justify">
        At Cakeify, we don't only provide you with the best ingredients for your dream cake, we also
        give a comprehensive preparation guide and put you through step by step on how to make that
        dream cake a reality.
      </p>
      <a
        href="/cakes"
        class="button border border-brown-500 rounded-xl py-2 px-4 w-1/2 sm:w-1/4 sm:font-medium text-center text-brown-500 hover:bg-brown-500 hover:text-white"
        style="transition: 0.5s"
      >
        Explore
      </a>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'About'
}
</script>

<style scoped></style>
