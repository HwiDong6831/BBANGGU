if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const s=e=>n(e,c),f={module:{uri:c},exports:o,require:s};i[c]=Promise.all(r.map((e=>f[e]||s(e)))).then((e=>(a(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"6637613260c58bcffea56e027704a682"},{url:"assets/camera_ex-vcmZ3lZf.png",revision:null},{url:"assets/index-B6epUf8r.js",revision:null},{url:"assets/index-BZQXpZYB.css",revision:null},{url:"assets/index-C2ErYuKu.js",revision:null},{url:"assets/index-CeSJM1pF.css",revision:null},{url:"assets/onwer_default_header_img-BPeENauy.png",revision:null},{url:"assets/vendor-A1i9Bi8x.js",revision:null},{url:"assets/vendor-C8xhApdn.js",revision:null},{url:"assets/빵꾸러미-CkUT9K0_.png",revision:null},{url:"bakery/bread_icon.png",revision:"0e9e9c33e66b0619015a5b6a0a11eadc"},{url:"bakery/bread_logo.png",revision:"0a4ecde8184073f4205503f3bb9d02d1"},{url:"bakery/bread_logo.svg",revision:"d09482bb73b6c9d459ef257096ee4291"},{url:"bakery/bread_pakage.svg",revision:"7cb49754a708cb8359bb2729cab95ed2"},{url:"bakery/camera_ex.png",revision:"0d8c696918adc5db6e912f7c5ab2352a"},{url:"bakery/onwer_default_header_img.png",revision:"bc5686735d1fd3824cf5f6c5d7a144c5"},{url:"bakery/owner_camera_icon.svg",revision:"0287b8069019c5af00d31b4473a7af4f"},{url:"bakery/owner_camera_icon1.png",revision:"31eb7e792bbf72628ee54891edb06116"},{url:"bakery/owner_camera_icon2.png",revision:"482d56f12fe643db6b4fae67806d269c"},{url:"bakery/robot.svg",revision:"85360beca861a0899a3348651768e8d7"},{url:"bakery/won_icon.png",revision:"1597ed30d4a843f71b9eccf9030b550d"},{url:"bakery/빵꾸러미.png",revision:"e917c50d2e3f47949fc940b23971b5cb"},{url:"favicon.ico",revision:"89a7e9643b3fbbf825afe4018e9b2de7"},{url:"fe_car.png",revision:"37b479b441ff8ae9113c2206cc1a49aa"},{url:"icon/bbanggu-icon.png",revision:"51988017225368fea13ce77e2fd3cc31"},{url:"icon/bbanggu-logo2.png",revision:"08b23232ceaff57ffab91530f2b45586"},{url:"icon/icon-192x192.png",revision:"f5b5a8b521c40a2f699f934f018cd8a3"},{url:"icon/icon-512x512.png",revision:"7475f151f436e1fe61fff14ce08710ed"},{url:"icons/payment/kakaopay.png",revision:"e48561d826c45748cc634be40b7bd55a"},{url:"icons/payment/naverpay.png",revision:"64a4fb304659ef12bfc3d311117bf899"},{url:"icons/payment/tosspay.png",revision:"ee8f93d13ff95ed05a7cca4f36c68578"},{url:"icons/pickup-time-icon.svg",revision:"fe98c1648fdc91dcb4002bae45bc2b7e"},{url:"icons/qna-icon.svg",revision:"312f8b159675946b388dd7ffa928a0f1"},{url:"icons/settlement-icon.svg",revision:"2b4ec7b24b3df7755422d9f78b4803b2"},{url:"icons/store-icon.svg",revision:"29310a002c826977287dfe9b567e91f7"},{url:"icons/support-icon.svg",revision:"e14704b974f3720b673a7c70be7f7633"},{url:"index.html",revision:"dec0a57c395f97fc65786b5a57a5f051"},{url:"kakao-talk-fill.png",revision:"685375325b6c7a04e186de6325d2ed01"},{url:"logo.png",revision:"8c73e20ba616b80d90bfa7a528730e66"},{url:"marker.png",revision:"e73ac93445cd82a9cd947494cbd7044b"},{url:"mdi_bread.png",revision:"2838de1f46c490be7772e07e8d842244"},{url:"mdi_cloud-outline.png",revision:"2881239d851aa1de4038083ae7d8192e"},{url:"pig.png",revision:"c89cef46d3c18d75f35666535e9a31a1"},{url:"react.svg",revision:"f0402b67b6ce880f65666bb49e841696"},{url:"registerSW.js",revision:"db476d65a8b959ffb8d79022de656354"},{url:"shower-fill.png",revision:"b13ce329e2259c63d747c90a7bbb1f56"},{url:"tdesign_money.png",revision:"8d23d940fa0173e19972fbaede3f111c"},{url:"tree-fill.png",revision:"2ca6beaf1725bf12279440fddfc746b6"},{url:"user-location.png",revision:"7a0f34dbe03312327336031cca58cf89"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"지도.png",revision:"d7aae6187cd2d4a8f38a14a8c0a1dd0b"},{url:"apple-touch-icon.png",revision:"6637613260c58bcffea56e027704a682"},{url:"favicon.ico",revision:"89a7e9643b3fbbf825afe4018e9b2de7"},{url:"icon/icon-192x192.png",revision:"f5b5a8b521c40a2f699f934f018cd8a3"},{url:"icon/icon-512x512.png",revision:"7475f151f436e1fe61fff14ce08710ed"},{url:"manifest.webmanifest",revision:"259999d7f61aafe973c5a278e96c4673"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
