<template>
  <div class="hero-home sm:m-10 flex items-center sm:rounded-3xl">
    <div class="px-6 flex flex-col justify-center items-center gap-6 sm:items-start">
      <h1
        class="text-4xl text-center text-white font-medium p-2 sm:text-justify sm:text-5xl md:text-7xl"
        style="max-width: 1000px"
      >
        Find ingredients that best suit your dream cake
      </h1>
      <p
        class="text-white text-center text-xl opacity-60 sm:text-justify sm:text-xl md:text-3xl"
        style="max-width: 700px"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis deserunt
        doloribus eligendi, vitae
      </p>
      <a
        href=""
        class="button bg-white border border-yellow-300 py-2 px-4 rounded-lg hover:bg-yellow-300 hover:border-white"
        style="transition: 0.5s; width: 120px"
        >Get started</a
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
.hero-home {
  background: url(../../assets/img/app/cake1.jpg) #0009;
  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* width: ; */
  height: 500px;
}
</style>
