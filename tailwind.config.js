/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 自定义主题配置
      colors: {
        primary: '#4F46E5',
        // ... 其他颜色
      },
    },
  },
  plugins: [],
}