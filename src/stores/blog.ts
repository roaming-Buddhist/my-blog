import { defineStore } from 'pinia'
import type { Post } from '@/types'

interface BlogState {
  posts: Post[]
  loading: boolean
  error: string | null
}

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => ({
    posts: [],
    loading: false,
    error: null
  }),
  
  getters: {
    getPostById: (state) => {
      return (id: number) => state.posts.find(post => post.id === id)
    }
  },

  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = null
      try {
        // API 调用逻辑
        // const response = await api.get<Post[]>('/posts')
        // this.posts = response.data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
})