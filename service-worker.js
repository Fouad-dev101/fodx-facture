// Incrémentez la version à chaque publication pour déclencher la mise à jour.
const CACHE='fodx-facture-v1';
const SHELL=['./','index.html','manifest.webmanifest','vendor/jspdf.umd.min.js','vendor/jspdf.plugin.autotable.min.js','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('fodx-facture-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('message',e=>{if(e.data==='SKIP')self.skipWaiting()});
// Seuls les fichiers de l'application sont mis en cache. Les données clients restent dans localStorage (jamais dans le cache).
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put('index.html',cp))}return res}).catch(()=>caches.match('index.html')));return}
 e.respondWith(caches.match(r).then(h=>h||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})))});
