<template>
    <div>
      <h1 class="text-4xl font-bold text-gray-900">Welcome to My Blog</h1>
      <div v-if="store.loading" class="mt-4">
        Loading...
      </div>
      <div v-else-if="store.error" class="mt-4 text-red-600">
        {{ store.error }}
      </div>
      <div v-else class="mt-8 space-y-6">
        <article v-for="post in store.posts" :key="post.id" class="prose">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </article>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import { useBlogStore } from '../stores/blog'
  
  const store = useBlogStore()
  
  onMounted(() => {
    store.fetchPosts()
  })
  </script>