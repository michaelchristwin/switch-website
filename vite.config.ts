import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

const EXCLUDED_PREFIXES = ['/assets/', '/3d/']
const EXCLUDED_EXTENSIONS = ['.pdf', '.glb', '.gltf', '.bin', 'usdz']

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  ssr: {
    noExternal: ['@google/model-viewers'],
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        filter: ({ path }) =>
          !EXCLUDED_PREFIXES.some((p) => path.startsWith(p)) &&
          !EXCLUDED_EXTENSIONS.some((e) => path.endsWith(e)),
        crawlLinks: true,
        autoStaticPathsDiscovery: true, // auto-discovers static routes
        concurrency: 14,
      },
      sitemap: {
        enabled: true,
        host: 'https://whynotswitch.com',
      },
    }),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})

export default config
