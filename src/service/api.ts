import axios from "axios";
import type { Post } from "@/types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截
api.interceptors.request.use(
  (config) => {
    // 可以在这里添加请求头或其他配置
    console.log("Request:", config);
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);
// 响应拦截
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    if (response) {
      // 处理 404 错误
      if (response.status === 404) {
        console.error("404 Not Found:", response.config.url);
        // 可以在这里进行页面跳转
        // e.g., router.push('/404')
      }

      // 处理 403 错误
      if (response.status === 403) {
        console.error("403 Forbidden:", response.config.url);
        // 可以在这里进行重载或其他处理
        // e.g., location.reload()
      }
    } else {
      // 处理网络错误
      console.error("Network Error:", error);
    }

    return Promise.reject(error);
  }
);
export const postService = {
  async getPosts(): Promise<Post[]> {
    const { data } = await api.get<Post[]>("/posts");
    return data;
  },

  async getPost(id: number): Promise<Post> {
    const { data } = await api.get<Post>(`/posts/${id}`);
    return data;
  },
};
