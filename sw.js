const CACHE = "ziya-island-v4-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./hanzi-writer.min.js",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/strokes/%E6%97%A5.json",
  "./assets/strokes/%E6%9C%88.json",
  "./assets/strokes/%E5%B1%B1.json",
  "./assets/strokes/%E6%B0%B4.json",
  "./assets/strokes/%E7%81%AB.json",
  "./assets/strokes/%E6%9C%A8.json",
  "./assets/strokes/%E4%BA%BA.json",
  "./assets/strokes/%E5%8F%A3.json",
  "./assets/strokes/%E6%89%8B.json",
  "./assets/strokes/%E7%9B%AE.json",
  "./assets/strokes/%E8%80%B3.json",
  "./assets/strokes/%E5%BF%83.json",
  "./assets/strokes/%E7%88%B8.json",
  "./assets/strokes/%E5%A6%88.json",
  "./assets/strokes/%E5%AE%B6.json",
  "./assets/strokes/%E9%97%A8.json",
  "./assets/strokes/%E4%B8%8A.json",
  "./assets/strokes/%E4%B8%8B.json",
  "./assets/strokes/%E5%A4%A9.json",
  "./assets/strokes/%E5%9C%B0.json",
  "./assets/strokes/%E5%A4%A7.json",
  "./assets/strokes/%E5%B0%8F.json",
  "./assets/strokes/%E5%A4%9A.json",
  "./assets/strokes/%E5%B0%91.json",
  "./assets/strokes/%E4%BA%91.json",
  "./assets/strokes/%E9%9B%A8.json",
  "./assets/strokes/%E9%A3%8E.json",
  "./assets/strokes/%E7%94%B5.json",
  "./assets/strokes/%E9%9B%AA.json",
  "./assets/strokes/%E6%98%9F.json",
  "./assets/strokes/%E4%B8%80.json",
  "./assets/strokes/%E4%BA%8C.json",
  "./assets/strokes/%E4%B8%89.json",
  "./assets/strokes/%E5%9B%9B.json",
  "./assets/strokes/%E4%BA%94.json",
  "./assets/strokes/%E5%85%AD.json"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).then(res => {
    const copy=res.clone(); caches.open(CACHE).then(c=>c.put(event.request, copy)); return res;
  }).catch(()=>caches.match(event.request).then(c=>c||caches.match("./index.html"))));
});