import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "豫章书院黑历史档案",
  description: "一本关于豫章书院的黑历史档案",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "目录", link: "/toc" },
    ],

    sidebar: [],

    socialLinks: [
      { icon: "github", link: "https://github.com/AkarinLiu/yzsy-archive" },
    ],
  },
});
