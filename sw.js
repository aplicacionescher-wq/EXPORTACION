self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
    // Simplemente pasa todas las solicitudes (sin caché por ahora)
});