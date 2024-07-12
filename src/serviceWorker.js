/* eslint-disable no-restricted-globals */

// Define o nome do cache
const CACHE_NAME = "app-cache-v1";
// Lista de URLs para armazenar em cache
const urlsToCache = [
  "/",
  "/index.html",
  "/app.js",
  "/styles.css",
  "/images/logo.png",
];

// Evento de instalação do service worker
self.addEventListener("install", (event) => {
  // Executa as etapas de instalação
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto");
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento de fetch (requisição)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    // Verifica se a requisição já está em cache
    caches.match(event.request).then((response) => {
      // Retorna a resposta do cache, se disponível
      if (response) {
        return response;
      }

      // Clona a requisição para evitar consumi-la
      const fetchRequest = event.request.clone();

      // Faz uma requisição de busca da rede
      return fetch(fetchRequest).then((response) => {
        // Verifica se recebeu uma resposta válida
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clona a resposta para armazenar em cache
        const responseToCache = response.clone();

        // Abre o cache e armazena a resposta
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Evento de ativação do service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Deleta caches antigos que não estão na whitelist
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/serviceWorker.js").then(
        function (registration) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
}
