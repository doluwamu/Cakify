<template>
  <div class="hero-home flex items-center sm:m-6 sm:rounded-3xl">
    <div class="px-6 flex flex-col justify-center items-center gap-6 sm:items-start">
      <h1
        class="text-4xl text-center text-white font-medium p-2 sm:text-justify sm:text-5xl md:text-7xl"
        style="max-width: 1000px"
      >
        Find ingredients that best suit your dream cake
      </h1>

      <p
        class="text-white text-center text-xl opacity-70 sm:text-justify sm:text-xl md:text-3xl"
        style="max-width: 700px"
      >
        Have a cake in mind but don't know how to make it? Look no further. We have the ingredients
        and preparation methods just for you
      </p>

      <!-- <a
        href=""
        class="button bg-white border border-orange-600 py-2 px-4 rounded-lg hover:bg-orange-600 hover:border-white"
        style="transition: 0.5s; width: 120px"
        >Get started</a
      > -->

      <div class="social-icons flex gap-6">
        <a href="/">
          <i class="fa-brands fa-facebook text-white text-3xl opacity-80"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-instagram text-white text-3xl opacity-80"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-x-twitter text-white text-3xl opacity-80"></i>
        </a>
      </div>
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
  height: 530px;
}
</style>
