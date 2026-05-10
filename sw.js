self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Este archivo puede estar vacío de funciones, pero es obligatorio que exista 
  // para que el celular reconozca que es una aplicación instalable.
});