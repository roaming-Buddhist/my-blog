import axios from 'axios'
import type { Post } from '@/types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const postService = {
  async getPosts(): Promise<Post[]> {
    const { data } = await api.get<Post[]>('/posts')
    return data
  },

  async getPost(id: number): Promise<Post> {
    const { data } = await api.get<Post>(`/posts/${id}`)
    return data
  }
}