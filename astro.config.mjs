// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://arianoalban.netlify.app/",
  integrations: [tailwind(), react(), sitemap()],
  adapter: netlify(),
});
