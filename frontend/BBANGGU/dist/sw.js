if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const c=e=>n(e,s),l={module:{uri:s},exports:f,require:c};i[s]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(o(...e),f)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"6637613260c58bcffea56e027704a682"},{url:"assets/camera_ex-vcmZ3lZf.png",revision:null},{url:"assets/index-Bw2DvHei.js",revision:null},{url:"assets/index-Bybtyj0-.css",revision:null},{url:"assets/onwer_default_header_img-BPeENauy.png",revision:null},{url:"assets/vendor-Bf3UyOWp.js",revision:null},{url:"favicon.ico",revision:"89a7e9643b3fbbf825afe4018e9b2de7"},{url:"icon/bbanggu-icon.png",revision:"51988017225368fea13ce77e2fd3cc31"},{url:"icon/icon-192x192.png",revision:"f5b5a8b521c40a2f699f934f018cd8a3"},{url:"icon/icon-512x512.png",revision:"7475f151f436e1fe61fff14ce08710ed"},{url:"index.html",revision:"faf7afee79d0bf7e2049256687982c72"},{url:"marker.png",revision:"e73ac93445cd82a9cd947494cbd7044b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"user-location.png",revision:"7a0f34dbe03312327336031cca58cf89"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"apple-touch-icon.png",revision:"6637613260c58bcffea56e027704a682"},{url:"favicon.ico",revision:"89a7e9643b3fbbf825afe4018e9b2de7"},{url:"icon/icon-192x192.png",revision:"f5b5a8b521c40a2f699f934f018cd8a3"},{url:"icon/icon-512x512.png",revision:"7475f151f436e1fe61fff14ce08710ed"},{url:"manifest.webmanifest",revision:"f6950e0414983099ef549b03a980f961"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
