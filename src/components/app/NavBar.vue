<template>
  <nav class="bg-brown-500 sticky top-0">
    <div
      class="flex flex-col justify-between items-center py-6 px-4 mx-auto md:flex-row"
      style="max-width: 1200px"
    >
      <a href="/">
        <img src="@/assets/img/cakeifyLogoLight.png" alt="img" />
      </a>

      <div class="nav-links flex flex-col gap-10 items-center md:flex-row">
        <div class="flex justify-center gap-10 text-white">
          <a href="/">Home</a>
          <a href="/cakes">Cakes</a>
          <a href="/contact">Contact</a>
          <a href="/faqs">FAQs</a>
        </div>

        <div class="flex gap-5">
          <button class="button bg-white text-brown-500 px-4 py-2 rounded-lg font-medium">
            Get started
          </button>
          <button
            class="button border border-white text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-600 hover:border-orange-600"
            style="transition: 0.5s"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar'
}
</script>
