// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // ↓最終的にデプロイされるURL。canonicalタグに使用
  site: "https://astro.build/",
  // ↓ビルド時にHTMLを圧縮しない
  compressHTML: false,
  build: {
    // ↓ソースフォルダに作成した通りのファイルパスでHTMLファイルを生成
    format: "preserve",
  },
  // ↓開発時に末尾のスラッシュを必須にする
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
