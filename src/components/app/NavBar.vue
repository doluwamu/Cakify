<template>
  <nav id="navbar" class="nav-bar bg-brown-500 sticky top-0 z-50 overflow-hidden">
    <div
      class="flex flex-col justify-between items-center text-center py-6 px-4 mx-auto gap-6 md:gap-0 md:flex-row"
      style="max-width: 1200px"
    >
      <div class="flex flex-row justify-between items-center w-full px-4 md:w-28">
        <a href="/" class="flex flex-col justify-center">
          <img src="@/assets/img/cakeifyLogoLight.png" alt="img" />
          <span class="text-center text-white font-semibold">Cakeify</span>
        </a>

        <div
          class="flex flex-col items-start justify-center hamburger space-y-2 overflow-hidden cursor-pointer md:hidden"
          id="ham"
          @click="openNav"
          style="width: 25px; height: 20px"
        >
          <div id="top" class="ham-line w-full bg-white rounded-3xl" style="height: 1px"></div>
          <div id="center" class="ham-line w-full bg-white rounded-3xl" style="height: 1px"></div>
          <div id="bottom" class="ham-line w-full bg-white rounded-3xl" style="height: 1px"></div>
        </div>
      </div>

      <div class="nav-links flex flex-col gap-10 items-center md:flex-row">
        <div class="flex flex-col justify-center gap-10 text-white md:flex-row">
          <a href="/">Home</a>
          <a href="/cakes" v-if="isAuthenticated">Cakes</a>
          <a href="/contact">Contact</a>
          <a href="/faqs">FAQs</a>
        </div>

        <div v-if="!isAuthenticated" class="flex flex-col gap-8 md:gap-5 md:flex-row">
          <button
            class="button bg-white text-brown-500 px-4 py-2 rounded-lg font-medium"
            @click="handleSignup"
          >
            Get started
          </button>

          <button
            class="button border border-white text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-600 hover:border-orange-600"
            style="transition: 0.5s"
            @click="handleLogin"
          >
            Login
          </button>
        </div>

        <div v-if="isAuthenticated" class="flex flex-col gap-8 md:gap-5 md:flex-row">
          <button
            class="button border border-white text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-600 hover:border-orange-600"
            style="transition: 0.5s"
            @click="handleLogout"
          >
            Logout
          </button>
        </div>

        <div v-if="isAuthenticated" class="flex flex-col gap-1 justify-center items-center">
          <img :src="user.picture" :alt="user.nickname" width="35" class="rounded-full" />
          <div class="text-white text-xs">{{ user.nickname }}</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()

const handleSignup = () => {
  loginWithRedirect({
    appState: {
      target: '/'
    },
    authorizationParams: {
      screen_hint: 'signup'
    }
  })
}

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: '/cakes'
    }
  })
}

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<script lang="ts">
export default {
  name: 'NavBar',
  mounted() {
    const navbar = document.getElementById('navbar')

    navbar.classList.add('h-28')
  },
  methods: {
    openNav() {
      // hamburger bars
      const top: HTMLElement = document.getElementById('top')
      const center: HTMLElement = document.getElementById('center')
      const bottom: HTMLElement = document.getElementById('bottom')

      // center.classList.toggle('hidden')
      top.classList.toggle('rotate-45')
      bottom.classList.toggle('rotate-neg45')

      center.classList.toggle('center-ham-move')

      const navbar = document.getElementById('navbar')
      navbar.classList.toggle('h-28')
    }
  }
}
</script>

<style>
.rotate-neg45 {
  transform: rotate(-45deg);
}

.ham-line {
  transition: 0.5s;
}

.center-ham-move {
  transform: translateX(-80px);
}
</style>
