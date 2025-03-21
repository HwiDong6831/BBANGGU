import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // 개발 환경에서도 PWA 활성화
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      scope: '/',
      base: '/public',
      manifest: {
        name: '빵구앱',
        short_name: '빵구',
        description: '소비기한 임박 빵 할인 서비스',
        theme_color: '#FF9F43',
        background_color: '#ffffff',
        display: 'standalone',
        display_override: ["standalone", "fullscreen"],
        prefer_related_applications: false,
        icons: [
          {
            src: '/icon/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/apple-touch-icon.png',  // iOS용 아이콘 추가
            sizes: '180x180',
            type: 'image/png'
          }
        ],
        shortcuts: [
          {
            name: "빵 등록하기",
            url: "/owner/bread/register",
            icons: [{ src: "/icon/icon-192x192.png", sizes: "192x192" }]
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: 'localhost',
    port: 5173,
    proxy: {
      '/uploads': {
        target: 'https://i12d102.p.ssafy.io',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
            proxyReq.removeHeader('origin');
            proxyReq.removeHeader('referer');
          });

          proxy.on('proxyRes', (_proxyRes, _req, res) => {
            res.removeHeader('Access-Control-Allow-Origin');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
            res.setHeader('Access-Control-Allow-Methods', 'GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
          });
        }
      },
      '/ai': {
        target: 'https://i12d102.p.ssafy.io',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/ai/, '/ai')
      }
    },
    hmr: {
      host: 'localhost'  // WebSocket 연결을 위한 호스트 설정
    },
  },
  preview: {
    host: '0.0.0.0',  // 또는 true
    port: 5173
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})
