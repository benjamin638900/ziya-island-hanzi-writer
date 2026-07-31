const CACHE = "ziya-island-v4-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./hanzi-writer.min.js",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/strokes/ri.json",
  "./assets/strokes/yue.json",
  "./assets/strokes/shan.json",
  "./assets/strokes/shui.json",
  "./assets/strokes/huo.json",
  "./assets/strokes/mu_eye.json",
  "./assets/strokes/ren.json",
  "./assets/strokes/kou.json",
  "./assets/strokes/shou.json",
  "./assets/strokes/mu_eye.json",
  "./assets/strokes/er_ear.json",
  "./assets/strokes/xin.json",
  "./assets/strokes/ba.json",
  "./assets/strokes/ma.json",
  "./assets/strokes/jia.json",
  "./assets/strokes/men.json",
  "./assets/strokes/shang.json",
  "./assets/strokes/xia.json",
  "./assets/strokes/tian.json",
  "./assets/strokes/di.json",
  "./assets/strokes/da.json",
  "./assets/strokes/xiao.json",
  "./assets/strokes/duo.json",
  "./assets/strokes/shao.json",
  "./assets/strokes/yun.json",
  "./assets/strokes/yu.json",
  "./assets/strokes/feng.json",
  "./assets/strokes/dian.json",
  "./assets/strokes/xue.json",
  "./assets/strokes/xing.json",
  "./assets/strokes/yi.json",
  "./assets/strokes/er.json",
  "./assets/strokes/san.json",
  "./assets/strokes/si.json",
  "./assets/strokes/wu.json",
  "./assets/strokes/liu.json"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).then(res => {
    const copy=res.clone(); caches.open(CACHE).then(c=>c.put(event.request, copy)); return res;
  }).catch(()=>caches.match(event.request).then(c=>c||caches.match("./index.html"))));
});