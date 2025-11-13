const CACHE_NAME = 'farmaformula-v1';
const urlsToCache = [
  'index.html',
  'css/styles.css',
  'js/slider.js',
  'js/lgpd.js',
  'manifest.json',
  'favicon.ico',
  'assets/img/logo.png',
  'assets/img/favicon.png',
  'assets/img/mapa-atuacao.png',
  'assets/img/produto1.png',
  'assets/img/produto2.png',
  'assets/img/produto3.png',
  'assets/img/medicamentos.png',
  'assets/img/cosmetico.png',
  'assets/img/homeopatia.png',
  'assets/img/hormonios.png',
  'assets/img/farmaceutica.png',
  'assets/img/envie_sua_receita.png',
  'assets/img/whatsapp.png',
  'assets/img/telefone.png',
  'assets/img/email.png',
  'assets/img/instagram.png',
  'assets/img/localizacao.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna do cache se disponível
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 
