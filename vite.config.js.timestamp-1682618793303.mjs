// vite.config.js
import { defineConfig } from "file:///C:/Users/svetl/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Projects/vite-project/node_modules/vite/dist/node/index.js";
import glob from "file:///C:/Users/svetl/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Projects/vite-project/node_modules/glob/glob.js";
import injectHTML from "file:///C:/Users/svetl/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Projects/vite-project/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/Users/svetl/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Projects/vite-project/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html")
    },
    outDir: "../dist"
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzdmV0bFxcXFxPbmVEcml2ZVxcXFxcdTA0MjBcdTA0MzBcdTA0MzFcdTA0M0VcdTA0NDdcdTA0MzhcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDNFXHUwNDNCXFxcXFByb2plY3RzXFxcXHZpdGUtcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc3ZldGxcXFxcT25lRHJpdmVcXFxcXHUwNDIwXHUwNDMwXHUwNDMxXHUwNDNFXHUwNDQ3XHUwNDM4XHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzRVx1MDQzQlxcXFxQcm9qZWN0c1xcXFx2aXRlLXByb2plY3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3N2ZXRsL09uZURyaXZlLyVEMCVBMCVEMCVCMCVEMCVCMSVEMCVCRSVEMSU4NyVEMCVCOCVEMCVCOSUyMCVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCQi9Qcm9qZWN0cy92aXRlLXByb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYic7XHJcbmltcG9ydCBpbmplY3RIVE1MIGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0JztcclxuaW1wb3J0IEZ1bGxSZWxvYWQgZnJvbSAndml0ZS1wbHVnaW4tZnVsbC1yZWxvYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByb290OiAnc3JjJyxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogZ2xvYi5zeW5jKCcuL3NyYy8qLmh0bWwnKSxcclxuICAgIH0sXHJcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtpbmplY3RIVE1MKCksIEZ1bGxSZWxvYWQoWycuL3NyYy8qKi8qKi5odG1sJ10pXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdWEsU0FBUyxvQkFBb0I7QUFDcGMsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBRXZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sS0FBSyxLQUFLLGNBQWM7QUFBQSxJQUNqQztBQUFBLElBQ0EsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUQsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
