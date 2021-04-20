'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "6e0a3edcd0547a1712583063ea0ca78f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b15d4acf6900a8209e84756d36e87f1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93f4b0c0be9051b20ed9b7ff6e242a6f",
".git/logs/refs/heads/master": "93f4b0c0be9051b20ed9b7ff6e242a6f",
".git/logs/refs/remotes/origin/master": "e4af7f7d8e0651d9fb4ea9686c039b59",
".git/objects/03/10d1bee30d43923e65302b1456182f9649f25e": "cc72ba9061d5d056d4c62f394e994cb6",
".git/objects/03/94b9a479e1faeca78ea6fc6860038bb3c2c4b8": "21e9fb41361ee23fdb6e7e32dc9aaaf3",
".git/objects/1d/b2b636fd01ca2f2df615ff946546d5234110e4": "ea0cc2d8b330e071261f389536ff4706",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/38fc1838d122cb1a0171942451f68f0433282e": "6ed664151346aec7487343f4c9670e9e",
".git/objects/2b/0f654f059a1eb0717c721899eece4c97ed83e9": "2bf2a4bca3c543ec1099a7d77030fb84",
".git/objects/2e/86bd170da33ecd2ed707e4d6d96bd5532584de": "8a229fc652e914eed52e963e5b9e1f04",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/3b/fff35c9acd99cb98bde351270f7eff2fb365a3": "d0aed354f0560f81d60c3d5a07ce550a",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/57/62c4770cd34199ce89409729e3ca89dbafe582": "5f5f2d87d968d3e244e34020b54a1f5b",
".git/objects/5b/1f2ae2b7fe6a19d7a1fe35303009b4e0028f9c": "3545ab82fb02e4227572225c8f4e9e48",
".git/objects/5b/3238ba6edfe2bf2683eb687155d6e5a855ebe1": "b0052c807cda2debb952bf459d97b82f",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/6b/d57ec9716ab3860deac6c3a43595604d8a77b9": "bc89a5aab47421d1de80f437924ae144",
".git/objects/70/4008e53ec05eb6c7dc4a127079bf70d69dc13d": "6fb4a107f9302bd34432215c8f32b170",
".git/objects/74/c5320e3503605b0f54be66775b3cf323dcd865": "06707f76b045d8246ad336c3e36a8b34",
".git/objects/75/c4f3d6033b007dfea86d70630fa283f8351b2a": "f90de498b20706766e6377aae0be71f3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/267a1cfd1b7604210f7ac48f005f92e8335b1c": "9d54771ab39457738a1361b151d36a93",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/91640feb6c2050f347fb468ae5bfe4ae51c318": "16077de552982a817cecef6eb4edc566",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c27212f2c8148f74f8a0f4c0cbf758ae05f91d": "784e8da5fdeb2bba30a3f94305a843f8",
".git/objects/8c/8ab177edeb2509f68a008694ca9d2de91f9131": "d992f65f5a015ae3d348a56454cbe7c8",
".git/objects/8d/aa13a755345f09c65a36fc45108fa43d0996a9": "4559d3d721498978db91a223debb16b1",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/9f/3fb7500ac5cfb3b23b18145a177ed83127311c": "4190787ba48ad8b78661c8f9a24998ae",
".git/objects/9f/ca695f3edfa09d0a4d69e3fdf2a32edf5a3140": "8606092a5b5b740c30789cefa9b6e1b8",
".git/objects/a0/6852803a654adc3289eba18df468eec962a122": "876ba2a366918812821c118b8f574b9f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/ccea9c446e30797b814d03bd8d709fd29a3edf": "e423df2f0f66df6bbb6d62b5d53a6feb",
".git/objects/b2/d92d7f19c2b7df297d3d3cf57fb67e8958d1fb": "6a3f98bea2b2664e2fd3fc173d2a74b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/a6a9d58292b2a35392b06e7bfc3b6fd3d63496": "80605a6827e674b9c86560729b543cbd",
".git/objects/c1/c92734d3a203516846e8812f68f29fb1040b70": "3943589686b9d511b314b3f76a8768e6",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/ce/08e34ad7a363e20fb0b0f1ec5144d9c483550b": "c9baf29d44b8cda99a7039c442d97d47",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e0/5504faea69d8f041ef4a81aaaf1106aa399969": "b9659e1b0c8f953cc77e0324c294c6a6",
".git/objects/e1/1c048a9a207b6eab29b8f6052f90f9b5405882": "7baf60f29be11bffcb60aa795a0291aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/b4af10bce7b0dd01812aec671a246789386a09": "cf664e9c99c75d1322fa10c86e378c04",
".git/objects/f7/c377332094d9ec8bdd5273356b4f47dd6243f1": "24a5db45cdf43ca0bd289212109f3f21",
".git/objects/f9/56cb142b72a8e271e813e6ae551c835e98abb6": "97277c65db15a5e7c3cfc280ecb19e4a",
".git/objects/f9/ae777eb06482e76573daf93f7851293041ea05": "7e2b2550ba559e4a70cf07ec4377371f",
".git/objects/fb/b5105e99b075c3734ffc709acd3ee590fe22b9": "32d12fcca206500b8bdbf9a712649d2c",
".git/refs/heads/master": "f4786791f5794b494a227cea39a473e3",
".git/refs/remotes/origin/master": "f4786791f5794b494a227cea39a473e3",
"assets/AssetManifest.json": "99d33694b255b22747a2121507678f65",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/img/covid.JPG": "e0a5ddc74e18911ce3098f8ff5bf03a9",
"assets/img/galleryPage1.JPG": "c1ac78fc1636f044e6f129726c1a05d2",
"assets/img/hamburger_menu.jpg": "ea8ed3ecbd62521a9f7ad1aea2a16796",
"assets/img/headshot.jpg": "ccbda9a2eebc96897dcf809efa48a9a0",
"assets/img/homePage.JPG": "f621084874db39da91c1b728689d31e3",
"assets/img/loginPage.jpg": "92bce2c0ae4cef33c93cd3fe48d13798",
"assets/img/mac-mood-app1.jpg": "a83204b4b8de1a226085d9ba5a0d44f5",
"assets/img/mac-mood-app2.jpg": "1ef2ff3a3a04afa83bcf24715220392e",
"assets/img/mac-mood-app3.jpg": "36d4d440c292bba6fd52c8edd1e47b35",
"assets/NOTICES": "ffcf4e48960ee22b0abb0a905ade5fa7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c6b6c0b37d0be0c1d2f043131df29815",
"/": "c6b6c0b37d0be0c1d2f043131df29815",
"main.dart.js": "3b0dae98450c65269ba8eed3eb95ecbb",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
