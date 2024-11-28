<template>
    <div>
        <h1 class="text-4xl font-bold text-gray-900">Welcome to My Blog</h1>
        <div v-if="isLoading" class="mt-4">
            Loading...
        </div>
        <div v-else-if="error" class="mt-4 text-red-600">
            {{ store.error }}
        </div>
        <div v-else class="mt-8 space-y-6">
            <article v-for="post in posts" :key="post.id" class="prose">
                <h2>{{ post.title }}</h2>
                <p>{{ post.content }}</p>
            </article>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBlogStore } from '@/stores/blog'

const store = useBlogStore()


// 使用计算属性
const isLoading = computed(() => store.loading)
const error = computed(() => store.error)
const posts = computed(() => store.posts)

onMounted(async () => {
    await store.fetchPosts()
})
</script>