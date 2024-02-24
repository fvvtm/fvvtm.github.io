'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cc86b7798370c947f72f5e061d921fa4",
"assets/AssetManifest.json": "b88bd8e9553349d1ec2f83b33039daec",
"assets/assets/fonts/fira/FiraMono-Bold.ttf": "ba7aefe1d903f1f89d285a01fac887a9",
"assets/assets/fonts/fira/FiraMono-Medium.ttf": "ae2376e676e06ffa41cc1133b4702c60",
"assets/assets/fonts/fira/FiraMono-Regular.ttf": "aa00c5d91c47e7b718b5cdca3dea7875",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-Black.ttf": "2c0b4c69d67be5270916f67ebebc0625",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-Bold.ttf": "4dc35e25b8576b77c0f21320b6d4dd6f",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-ExtraBold.ttf": "bdf4f16b225e73aa533fefd8bf42913f",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-ExtraLight.ttf": "60a5e60cb0d12c0dd362fc5459943f5b",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-Light.ttf": "afe16ca4fbbbde8e75052ac915979468",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-Medium.ttf": "f8c4d7d6e14a9acd629f88c5ae1019f1",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-Regular.ttf": "06396d1dff3a66c238b97c0469d890ce",
"assets/assets/fonts/inconsolata/Inconsolata_SemiExpanded-SemiBold.ttf": "95ae852ff228d3a93ff66a08a6f8cda8",
"assets/assets/fonts/inter/Inter-Black.otf": "e6fef702b507237e0033f4244cc4389c",
"assets/assets/fonts/inter/Inter-BlackItalic.otf": "6b9a465122dcdddf666caa17a1447e67",
"assets/assets/fonts/inter/Inter-Bold.otf": "d759e235e88e47f838062c7ab97308b1",
"assets/assets/fonts/inter/Inter-BoldItalic.otf": "b186ce584f0824196eb2ef3a38e0da38",
"assets/assets/fonts/inter/Inter-ExtraBold.otf": "b799b6950c238082c8e314d127842845",
"assets/assets/fonts/inter/Inter-ExtraBoldItalic.otf": "83ba0d6212dc1fb6107c7749729798f9",
"assets/assets/fonts/inter/Inter-ExtraLight.otf": "97592cd01de5f8e5db834265c3e2a0d4",
"assets/assets/fonts/inter/Inter-ExtraLightItalic.otf": "c76c911e77ac5bb473f419cad8376b6d",
"assets/assets/fonts/inter/Inter-Italic.otf": "0f9f3b37376a39136b2f0c63e287ad0f",
"assets/assets/fonts/inter/Inter-Light.otf": "d7019947105844db1899d246172f06b4",
"assets/assets/fonts/inter/Inter-LightItalic.otf": "4268ddecb3b091fc039efae1719cf1d6",
"assets/assets/fonts/inter/Inter-Medium.otf": "ef3d193e6a6ad033724c7872aec1cff7",
"assets/assets/fonts/inter/Inter-MediumItalic.otf": "3d33faa33190d4a4c271dbaf7a6dfb86",
"assets/assets/fonts/inter/Inter-Regular.otf": "76e872bc911c3d908aeaf31b2c16bc63",
"assets/assets/fonts/inter/Inter-SemiBold.otf": "ef2dede4404ddb4cb3ed69d196ef2722",
"assets/assets/fonts/inter/Inter-SemiBoldItalic.otf": "cc0173dae3b39bd7bbb34674b8d576e1",
"assets/assets/fonts/inter/Inter-Thin.otf": "72869267880104b27bed47fdf7e5c75d",
"assets/assets/fonts/inter/Inter-ThinItalic.otf": "efd29db88022972e4835288ca2c43d32",
"assets/assets/fonts/inter/Inter-V.ttf": "8d63a82f5fc6d6eba21050dd9111520d",
"assets/assets/fonts/monoid/Monoid-Bold.ttf": "0826c4524b430fa5e44d4e4afce22014",
"assets/assets/fonts/monoid/Monoid-Regular.ttf": "9b27db986ad2a74c522e9d3b6f7e2a63",
"assets/assets/fonts/monoid/Monoid-Retina.ttf": "3481716b7a63e4acf222467fd4e2968e",
"assets/assets/svgs/apple.svg": "6329a793f35321c2d1b2082dd751c15a",
"assets/assets/svgs/ellipse.svg": "be7040e2d213c2028844dd337ae84585",
"assets/assets/svgs/google.svg": "edd0e34f60d7ca4a2f4ece79cff21ae3",
"assets/assets/svgs/logo.svg": "d6ab222c844843b65941b035e886fd3d",
"assets/assets/svgs/marker.svg": "37075db50478c9fb76f7661a953dbcba",
"assets/assets/svgs/microsoft.svg": "363fdd53d34303b727d9dab161b8e88b",
"assets/assets/svgs/pallet.svg": "a02803e058df85e6339262e00c53f348",
"assets/FontManifest.json": "40d9414db36ccdfc25b8142dcf896446",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e98d96e59032d94ca9a8b21152ab24e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-mini.ttf": "386edca9b60a321796225b48622546a1",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-outline.ttf": "afa81b94edb7e2dc244a5616e4c817e0",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-solid.ttf": "0dc5afe02adec5f5e9de1a2287cf23df",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0d9aa7b8efecb4dbe116572183be3cf",
"/": "f0d9aa7b8efecb4dbe116572183be3cf",
"main.dart.js": "79010e120038305ce14e1846a808a132",
"manifest.json": "239f0211ba74909465bd84c1f16b4dd0",
"version.json": "08029a224975ed0bf9a64ece2baa4458"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
