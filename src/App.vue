<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <router-link 
            to="/" 
            class="flex items-center text-xl font-bold text-gray-900"
          >
            My Blog
          </router-link>
          <div class="flex items-center space-x-4">
            <router-link 
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to" 
              class="text-gray-700 hover:text-gray-900"
            >
              {{ link.text }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
interface NavLink {
  to: string
  text: string
}

const navLinks: NavLink[] = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' }
]
</script>