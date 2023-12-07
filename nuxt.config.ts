import { logger } from "@nuxt/kit";
import { fileURLToPath } from "url";
import { resolve } from "pathe";
import { version } from "./package.json";
//import ModuleTransformPDF from "./modules/transformpdf/module";

logger.success(`Using pp-widgets-demo v${version}`);

const themeDir = fileURLToPath(new URL("./", import.meta.url));
const resolveThemeDir = (path: string) => resolve(themeDir, path);


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    //{
    //  // TODO: useful ?
    //  prefix: "",
    //  path: resolveThemeDir("./components/content"),
    //  global: true,
    //},
    //{
    //  // publish components that overload existing nuxt/content/docus components
    //  prefix: "",
    //  path: resolveThemeDir("./components/overload"),
    //  global: true,
    //},
    {
      // all components are published with ppw- prefix
      prefix: "ppw",
      path: resolveThemeDir("./components/ppw"),
      global: true,
    },
  ],


  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  // Fonts
  fontMetrics: {
    //fonts: ['DM Sans']
    fonts: ['Ubuntu Condensed']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      //'DM+Sans': [400, 500, 600, 700]
      'Ubuntu+Condensed': [400, 500, 600, 700]
    }
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
