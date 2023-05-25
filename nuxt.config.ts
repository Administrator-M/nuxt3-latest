import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  // 第三方模块
  modules: ["@nuxt/image-edge", "@nuxt/devtools"],
  app: {
    head: {
      style: [{ children: "* { margin: 0; padding: 0;}" }],
    },
  },
  // 运行时配置
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
  // 第三方模块 [@nuxt/image-edge] 配置项
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: "jpg",
          width: 32,
          height: 32,
        },
      },
    },
  },
});
