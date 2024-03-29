/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "hr-app-1651070416"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.js",
    "revision": "39d03e43ab84df3dbdfe3349102df07b"
  },
  {
    "url": "css/app.css",
    "revision": "511e9048fd1be03cd88e23ba02012f92"
  },
  {
    "url": "css/bootstrap_v1.css",
    "revision": "fad98a51d4b8929bc11877a3785d6fa5"
  },
  {
    "url": "css/bootstrap-arabic.css",
    "revision": "0b7e550ea145a542551b81d6ff46b9cd"
  },
  {
    "url": "css/bootstrap-arabic.min.css",
    "revision": "18b3d8a991ee8b23911bb263fa6f8e36"
  },
  {
    "url": "css/bootstrap-theme.css",
    "revision": "fa8821c9d4f7cb2a0010869452037945"
  },
  {
    "url": "css/bootstrap-theme.min.css",
    "revision": "644d1de09e85e6f91552ec795dc6e05a"
  },
  {
    "url": "css/bootstrap.css",
    "revision": "7d6fe3c8fd13465bded7136153f70a95"
  },
  {
    "url": "css/bootstrap.min.css",
    "revision": "3e53c6843a02b42ed881307d0c17af7d"
  },
  {
    "url": "css/facebox.css",
    "revision": "5e11c9f6d19dab4af26580ccc479819b"
  },
  {
    "url": "css/font/asasna.eot",
    "revision": "b941f507578ae914b785a6ca7d12e2c3"
  },
  {
    "url": "css/font/asasna.svg",
    "revision": "89b9945b5a569782fb2bec1a159778a2"
  },
  {
    "url": "css/font/asasna.ttf",
    "revision": "9727829292eb579bda66056055c3d631"
  },
  {
    "url": "css/font/asasna.woff",
    "revision": "88f06eafa62d696206fe3269bdb4cec8"
  },
  {
    "url": "css/font/asasna.woff2",
    "revision": "ffcd8bd44daeb58b38ab13e89a5619e4"
  },
  {
    "url": "css/font/asasna1.eot",
    "revision": "5ba3d6e713e0765851354dddb89215f3"
  },
  {
    "url": "css/font/asasna1.svg",
    "revision": "a7c41628a8bdeebd60e23d94d70ea138"
  },
  {
    "url": "css/font/asasna1.ttf",
    "revision": "fdcc11336132c25bdfdccf16ce7306f3"
  },
  {
    "url": "css/font/asasna1.woff",
    "revision": "b9b814a2c1e03aaac385c57673eed0a4"
  },
  {
    "url": "css/font/asasna1.woff2",
    "revision": "b8e8d164ddbaf1817fdc8daebbd9dba4"
  },
  {
    "url": "css/font/jf.ttf",
    "revision": "a742499d94a75f0b9a87b620f5f2acec"
  },
  {
    "url": "css/font/jf.woff",
    "revision": "1ce8c264d0bcb7a8e75234ee8f51b608"
  },
  {
    "url": "css/font/noone.eot",
    "revision": "e75d2d857ca4fd83810d8cf70889e2ab"
  },
  {
    "url": "css/font/noone.svg",
    "revision": "b77e672f9796c0c9d11b1fe324c4f19d"
  },
  {
    "url": "css/font/noone.ttf",
    "revision": "19e85e4c1db493b3ff7660a085b22eed"
  },
  {
    "url": "css/font/noone.woff",
    "revision": "6ba26cf2bb4186750b3366c465997c6c"
  },
  {
    "url": "css/font/noone.woff2",
    "revision": "646d1f4221fa68223b7dc4a5fafdf0e4"
  },
  {
    "url": "css/script.css",
    "revision": "01f7d77738d8ee1e445f9e1cabc38c32"
  },
  {
    "url": "facebox.css",
    "revision": "0493b9cc2dba527ae8edcdcd414c3ac2"
  },
  {
    "url": "favicon.ico",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "font/asasna.eot",
    "revision": "b941f507578ae914b785a6ca7d12e2c3"
  },
  {
    "url": "font/asasna.svg",
    "revision": "89b9945b5a569782fb2bec1a159778a2"
  },
  {
    "url": "font/asasna.ttf",
    "revision": "9727829292eb579bda66056055c3d631"
  },
  {
    "url": "font/asasna.woff",
    "revision": "88f06eafa62d696206fe3269bdb4cec8"
  },
  {
    "url": "font/asasna.woff2",
    "revision": "ffcd8bd44daeb58b38ab13e89a5619e4"
  },
  {
    "url": "font/asasna3.eot",
    "revision": "c848f8a2ad5a0fa839403a98a9b6fc04"
  },
  {
    "url": "font/asasna3.svg",
    "revision": "d13d7c9e228156f35ad3675de95a8a32"
  },
  {
    "url": "font/asasna3.ttf",
    "revision": "8c3e580d17a28869a3378ac96b688900"
  },
  {
    "url": "font/asasna3.woff",
    "revision": "d1fb323b46cd196150c95900a9a6fed4"
  },
  {
    "url": "font/asasna3.woff2",
    "revision": "86d3fb2c9076e83e55af1642e1e6d7b0"
  },
  {
    "url": "font/css/bootstrap-arabic.css",
    "revision": "d0f2b08f6afc4cda6854e436518898bb"
  },
  {
    "url": "font/css/bootstrap-arabic.min.css",
    "revision": "18b3d8a991ee8b23911bb263fa6f8e36"
  },
  {
    "url": "font/css/bootstrap-theme.css",
    "revision": "fa8821c9d4f7cb2a0010869452037945"
  },
  {
    "url": "font/css/bootstrap-theme.min.css",
    "revision": "644d1de09e85e6f91552ec795dc6e05a"
  },
  {
    "url": "font/css/bootstrap.css",
    "revision": "7d6fe3c8fd13465bded7136153f70a95"
  },
  {
    "url": "font/css/bootstrap.min.css",
    "revision": "3e53c6843a02b42ed881307d0c17af7d"
  },
  {
    "url": "font/css/facebox.css",
    "revision": "5e11c9f6d19dab4af26580ccc479819b"
  },
  {
    "url": "font/css/font/asasna.eot",
    "revision": "5ba3d6e713e0765851354dddb89215f3"
  },
  {
    "url": "font/css/font/asasna.svg",
    "revision": "a7c41628a8bdeebd60e23d94d70ea138"
  },
  {
    "url": "font/css/font/asasna.ttf",
    "revision": "fdcc11336132c25bdfdccf16ce7306f3"
  },
  {
    "url": "font/css/font/asasna.woff",
    "revision": "b9b814a2c1e03aaac385c57673eed0a4"
  },
  {
    "url": "font/css/font/asasna.woff2",
    "revision": "b8e8d164ddbaf1817fdc8daebbd9dba4"
  },
  {
    "url": "font/css/script.css",
    "revision": "53fddcee908467432a25b3b2edf8b7d6"
  },
  {
    "url": "font/fontello-055982e3/config.json",
    "revision": "31de631af18613cc8e062ac548e06422"
  },
  {
    "url": "font/fontello-055982e3/css/animation.css",
    "revision": "e7da1c1d837b0be2240c2c23bf0c4475"
  },
  {
    "url": "font/fontello-055982e3/css/noone-codes.css",
    "revision": "25c03e7cc1fa616555216ece814d9312"
  },
  {
    "url": "font/fontello-055982e3/css/noone-embedded.css",
    "revision": "3fb29de346f3b1ea70d83bba0570600e"
  },
  {
    "url": "font/fontello-055982e3/css/noone-ie7-codes.css",
    "revision": "f1a898ade325deefafaa6387817d7368"
  },
  {
    "url": "font/fontello-055982e3/css/noone-ie7.css",
    "revision": "892afb7c38635d94e11891765a8ffc2b"
  },
  {
    "url": "font/fontello-055982e3/css/noone.css",
    "revision": "ae5552969b939daea32197c0c2a3360e"
  },
  {
    "url": "font/fontello-055982e3/font/noone.eot",
    "revision": "98e9a3fd21014a425b1e60f94c086f10"
  },
  {
    "url": "font/fontello-055982e3/font/noone.svg",
    "revision": "13a88c9d7f4a2dcfe07c71e098c51e25"
  },
  {
    "url": "font/fontello-055982e3/font/noone.ttf",
    "revision": "6ffeb4d3289281f0427f7206c8b3094b"
  },
  {
    "url": "font/fontello-055982e3/font/noone.woff",
    "revision": "4615775e98aa3fe78c239d5a65c240cc"
  },
  {
    "url": "font/fontello-055982e3/font/noone.woff2",
    "revision": "dd57ac5ef321dac5d2259043d63d68cc"
  },
  {
    "url": "font/hacen-liner-print-out.ttf",
    "revision": "2fe93362ecafe480d44b1892da7550bb"
  },
  {
    "url": "font/hacen-liner-print-out.woff",
    "revision": "3115e1ca31f7ed2886a0bf4bf50186e1"
  },
  {
    "url": "font/hacen-liner-screen-bd.ttf",
    "revision": "6ac62c95c48547fc3f9842b151beddd4"
  },
  {
    "url": "font/jf.ttf",
    "revision": "a742499d94a75f0b9a87b620f5f2acec"
  },
  {
    "url": "font/jf.woff",
    "revision": "1ce8c264d0bcb7a8e75234ee8f51b608"
  },
  {
    "url": "font/js/affix.js",
    "revision": "a8d59b6e9d0920eed759db2f70d1843f"
  },
  {
    "url": "font/js/alert.js",
    "revision": "bbb4056f3bd6c3eef93ed8f09b506c55"
  },
  {
    "url": "font/js/app.js",
    "revision": "39d03e43ab84df3dbdfe3349102df07b"
  },
  {
    "url": "font/js/bootstrap.js",
    "revision": "5a9f44d675d85a3ee17d2a5dd9aed015"
  },
  {
    "url": "font/js/bootstrap.min.js",
    "revision": "e7d9a06cf9053c51cd4ad3386da0659a"
  },
  {
    "url": "font/js/button.js",
    "revision": "cae50d581bc9733d7522cfe9a1e4fa19"
  },
  {
    "url": "font/js/carousel.js",
    "revision": "d8f3c390d7d553367b9aebffaf99324a"
  },
  {
    "url": "font/js/collapse.js",
    "revision": "9e4a4b3f1569a16810dd33146334ac8e"
  },
  {
    "url": "font/js/compobox.js",
    "revision": "145a621874f0cd42317cc3b3ea6280e0"
  },
  {
    "url": "font/js/dropdown.js",
    "revision": "5879ba37bfeb1417f54ffdc26cd851b7"
  },
  {
    "url": "font/js/facebox/app.js",
    "revision": "85da149b7117283e3c87d75a12fee3a2"
  },
  {
    "url": "font/js/facebox/email.js",
    "revision": "302d77525aa73fa67b91be195995c298"
  },
  {
    "url": "font/js/facebox/facebox.js",
    "revision": "21e19876b1d9124e8afe397e8a8b2642"
  },
  {
    "url": "font/js/facebox/index.js",
    "revision": "20f0d463033599abbe05ddf85aaf77ec"
  },
  {
    "url": "font/js/facebox/jquery.js",
    "revision": "b695b1fc606e034340aaeb6a5065bb6b"
  },
  {
    "url": "font/js/facebox/jquery1.js",
    "revision": "7805fd3edca37e7384cde43f6842f7fe"
  },
  {
    "url": "font/js/home.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "font/js/index.js",
    "revision": "e77a8205633c6412e5533162eaa47495"
  },
  {
    "url": "font/js/jquery.circliful.min.js",
    "revision": "c3e24d3dc886f737962d6ffd51ebfa31"
  },
  {
    "url": "font/js/jquery.js",
    "revision": "46639776ff2dc5529e1a49e6898a84ba"
  },
  {
    "url": "font/js/modal.js",
    "revision": "a5de96ee976ec4a3647903f3875d74d2"
  },
  {
    "url": "font/js/npm.js",
    "revision": "9ec191bedba9f5132306169274b67e05"
  },
  {
    "url": "font/js/popover.js",
    "revision": "8af5e694e669abbf5c4ff7cff3d78b08"
  },
  {
    "url": "font/js/script_ed.js",
    "revision": "74c73f9c54b13933419598e8a0f6ed42"
  },
  {
    "url": "font/js/script_exp.js",
    "revision": "052afeb7fc1ab0a9895a9b43f2d11c58"
  },
  {
    "url": "font/js/scrollspy.js",
    "revision": "f59d041e2d0d17e09fe7db0fd0c97ae2"
  },
  {
    "url": "font/js/tab.js",
    "revision": "4013c827fb6100de3d58bd858c9d1755"
  },
  {
    "url": "font/js/tooltip.js",
    "revision": "d3d0fafb67a2b8caf82674a9f7aaa752"
  },
  {
    "url": "font/js/transition.js",
    "revision": "94b1b1c5a35de65b33f8817d1b91dfee"
  },
  {
    "url": "font/js/vue-resource.min.js",
    "revision": "51bd4709d67a1c036d8d4fa33c9abee9"
  },
  {
    "url": "font/js/vue.min.js",
    "revision": "149f696ac576138d186e7084ae932752"
  },
  {
    "url": "font/noone.eot",
    "revision": "98e9a3fd21014a425b1e60f94c086f10"
  },
  {
    "url": "font/noone.svg",
    "revision": "13a88c9d7f4a2dcfe07c71e098c51e25"
  },
  {
    "url": "font/noone.ttf",
    "revision": "6ffeb4d3289281f0427f7206c8b3094b"
  },
  {
    "url": "font/noone.woff",
    "revision": "4615775e98aa3fe78c239d5a65c240cc"
  },
  {
    "url": "font/noone.woff2",
    "revision": "dd57ac5ef321dac5d2259043d63d68cc"
  },
  {
    "url": "font1/2.eot",
    "revision": "5ba3d6e713e0765851354dddb89215f3"
  },
  {
    "url": "font1/2.svg",
    "revision": "a7c41628a8bdeebd60e23d94d70ea138"
  },
  {
    "url": "font1/2.ttf",
    "revision": "fdcc11336132c25bdfdccf16ce7306f3"
  },
  {
    "url": "font1/2.woff",
    "revision": "b9b814a2c1e03aaac385c57673eed0a4"
  },
  {
    "url": "font1/2.woff2",
    "revision": "b8e8d164ddbaf1817fdc8daebbd9dba4"
  },
  {
    "url": "font1/asasna.eot",
    "revision": "b941f507578ae914b785a6ca7d12e2c3"
  },
  {
    "url": "font1/asasna.svg",
    "revision": "89b9945b5a569782fb2bec1a159778a2"
  },
  {
    "url": "font1/asasna.ttf",
    "revision": "9727829292eb579bda66056055c3d631"
  },
  {
    "url": "font1/asasna.woff",
    "revision": "88f06eafa62d696206fe3269bdb4cec8"
  },
  {
    "url": "font1/asasna.woff2",
    "revision": "ffcd8bd44daeb58b38ab13e89a5619e4"
  },
  {
    "url": "fontello-87912daf/config.json",
    "revision": "d150ce7084b0c2111a33d9ed7adf31c0"
  },
  {
    "url": "fontello-87912daf/css/animation.css",
    "revision": "e7da1c1d837b0be2240c2c23bf0c4475"
  },
  {
    "url": "fontello-87912daf/css/noone-codes.css",
    "revision": "550d2a29a830b9e5ec312c895ef664a5"
  },
  {
    "url": "fontello-87912daf/css/noone-embedded.css",
    "revision": "33a5b8e1ab3571d8e8384cbe952cdd7e"
  },
  {
    "url": "fontello-87912daf/css/noone-ie7-codes.css",
    "revision": "89f9274ce3e63bcec683aceac1a0efa7"
  },
  {
    "url": "fontello-87912daf/css/noone-ie7.css",
    "revision": "4010e768f4b21a26ebf251d2b39fe7cf"
  },
  {
    "url": "fontello-87912daf/css/noone.css",
    "revision": "c2a503482983888eb17cf68a680aacaf"
  },
  {
    "url": "fontello-87912daf/font/noone.eot",
    "revision": "e75d2d857ca4fd83810d8cf70889e2ab"
  },
  {
    "url": "fontello-87912daf/font/noone.svg",
    "revision": "b77e672f9796c0c9d11b1fe324c4f19d"
  },
  {
    "url": "fontello-87912daf/font/noone.ttf",
    "revision": "19e85e4c1db493b3ff7660a085b22eed"
  },
  {
    "url": "fontello-87912daf/font/noone.woff",
    "revision": "6ba26cf2bb4186750b3366c465997c6c"
  },
  {
    "url": "fontello-87912daf/font/noone.woff2",
    "revision": "646d1f4221fa68223b7dc4a5fafdf0e4"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.svg",
    "revision": "f721466883998665b87923b92dea655b"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "images/home/line.svg",
    "revision": "96989ddea7c15d5c7c68354d80ad46bb"
  },
  {
    "url": "images/web/search.svg",
    "revision": "1b22f9567fe35a913738e18039bd8227"
  },
  {
    "url": "index.js",
    "revision": "043e96d1cd47905b851ef334a9126c42"
  },
  {
    "url": "js/affix.js",
    "revision": "a8d59b6e9d0920eed759db2f70d1843f"
  },
  {
    "url": "js/alert.js",
    "revision": "bbb4056f3bd6c3eef93ed8f09b506c55"
  },
  {
    "url": "js/app.js",
    "revision": "2cf9a14b7df8ac428cadf15f5405aa69"
  },
  {
    "url": "js/bootstrap.js",
    "revision": "5a9f44d675d85a3ee17d2a5dd9aed015"
  },
  {
    "url": "js/bootstrap.min.js",
    "revision": "e7d9a06cf9053c51cd4ad3386da0659a"
  },
  {
    "url": "js/button.js",
    "revision": "cae50d581bc9733d7522cfe9a1e4fa19"
  },
  {
    "url": "js/carousel.js",
    "revision": "d8f3c390d7d553367b9aebffaf99324a"
  },
  {
    "url": "js/collapse.js",
    "revision": "9e4a4b3f1569a16810dd33146334ac8e"
  },
  {
    "url": "js/compobox.js",
    "revision": "145a621874f0cd42317cc3b3ea6280e0"
  },
  {
    "url": "js/dropdown.js",
    "revision": "5879ba37bfeb1417f54ffdc26cd851b7"
  },
  {
    "url": "js/facebox/app.js",
    "revision": "85da149b7117283e3c87d75a12fee3a2"
  },
  {
    "url": "js/facebox/email.js",
    "revision": "302d77525aa73fa67b91be195995c298"
  },
  {
    "url": "js/facebox/facebox.js",
    "revision": "34c8d9e46f24c4de8018337ece423a8e"
  },
  {
    "url": "js/facebox/index.js",
    "revision": "eedc64cabd92b23c0675668deddd8f74"
  },
  {
    "url": "js/facebox/jquery.js",
    "revision": "b695b1fc606e034340aaeb6a5065bb6b"
  },
  {
    "url": "js/facebox/jquery1.js",
    "revision": "7805fd3edca37e7384cde43f6842f7fe"
  },
  {
    "url": "js/home.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/html2canvas.js",
    "revision": "92dcef7d2e6a9f0a1918fa381561b816"
  },
  {
    "url": "js/index.js",
    "revision": "265ee746ba9f7fc5557c9828c5788ba4"
  },
  {
    "url": "js/jquery.circliful.min.js",
    "revision": "c3e24d3dc886f737962d6ffd51ebfa31"
  },
  {
    "url": "js/jquery.js",
    "revision": "46639776ff2dc5529e1a49e6898a84ba"
  },
  {
    "url": "js/jspdf.min.js",
    "revision": "b9ee7f21dce277ad27dad7e3d1b643ff"
  },
  {
    "url": "js/modal.js",
    "revision": "a5de96ee976ec4a3647903f3875d74d2"
  },
  {
    "url": "js/npm.js",
    "revision": "9ec191bedba9f5132306169274b67e05"
  },
  {
    "url": "js/popover.js",
    "revision": "8af5e694e669abbf5c4ff7cff3d78b08"
  },
  {
    "url": "js/script_ed.js",
    "revision": "74c73f9c54b13933419598e8a0f6ed42"
  },
  {
    "url": "js/script_exp.js",
    "revision": "e2ca0c91039a8a6d0eac01c9f54526a6"
  },
  {
    "url": "js/scrollspy.js",
    "revision": "f59d041e2d0d17e09fe7db0fd0c97ae2"
  },
  {
    "url": "js/service-worker copy.js",
    "revision": "dd618f1de3957fddfba395d26ddca6e9"
  },
  {
    "url": "js/service-worker.js",
    "revision": "0a5cc5fa52bf8d8d146be95e4fb083ab"
  },
  {
    "url": "js/tab.js",
    "revision": "4013c827fb6100de3d58bd858c9d1755"
  },
  {
    "url": "js/tooltip.js",
    "revision": "d3d0fafb67a2b8caf82674a9f7aaa752"
  },
  {
    "url": "js/transition.js",
    "revision": "94b1b1c5a35de65b33f8817d1b91dfee"
  },
  {
    "url": "js/vue-resource.min.js",
    "revision": "51bd4709d67a1c036d8d4fa33c9abee9"
  },
  {
    "url": "js/vue.min.js",
    "revision": "149f696ac576138d186e7084ae932752"
  },
  {
    "url": "manifest.json",
    "revision": "96d80178852c3d18fe49b39864a78192"
  },
  {
    "url": "mix-manifest.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  },
  {
    "url": "service-worker.js",
    "revision": "de964cc14b9f8607db731674fe16d52f"
  },
  {
    "url": "images/ajax-loader.gif",
    "revision": "2a6692973429d7a74513bfa8bcb5be20"
  },
  {
    "url": "images/cncpt233.gif",
    "revision": "f0ebef72dec8b2ab12fb8572a79bbb10"
  },
  {
    "url": "images/edit.png",
    "revision": "dea464aedeb1746dba092180d51b7be3"
  },
  {
    "url": "images/google.png",
    "revision": "3d0d5a6b2eb8abb1309f57a219f6bf68"
  },
  {
    "url": "images/happy_bg.png",
    "revision": "811346043a23646537792c1fc8b3c166"
  },
  {
    "url": "images/libyacvapp.png",
    "revision": "97bdcd1381005ca7a936a366d590a5b0"
  },
  {
    "url": "images/libyacvapp2.png",
    "revision": "c86edbcead0b042ebf880c9d40d89fc7"
  },
  {
    "url": "images/libyacvapp3.png",
    "revision": "1d23719436b89da71962e66a09d4d44c"
  },
  {
    "url": "images/libyacvapp4.png",
    "revision": "10dcb89aac0380fe5aeaa3328f3ad303"
  },
  {
    "url": "images/libyacvapp5.png",
    "revision": "57caa2f5b781a37476d0bfa6020d7036"
  },
  {
    "url": "images/libyacvapp6.png",
    "revision": "60ecce7ee86a44324742656f3a076a78"
  },
  {
    "url": "images/loading.gif",
    "revision": "7e99e1159a3686f6aa4f90043c554483"
  },
  {
    "url": "images/logos.png",
    "revision": "81614caa44ead8570c4f4ae5fd041af2"
  },
  {
    "url": "images/measuremdent_1x.jpg",
    "revision": "261434cf5335bacdac13ac323a78ba1c"
  },
  {
    "url": "images/measurement_1x.png",
    "revision": "4bae9969911a7bec2de5319fc95e1485"
  },
  {
    "url": "images/mobile-phone_1x.png",
    "revision": "83f90a5ff1037c61911cc3875f74a689"
  },
  {
    "url": "images/mobile-tablet_1x.png",
    "revision": "6f9c6f39fd82a3adeeb0483f1cb76307"
  },
  {
    "url": "images/oracle_11g_architecture.jpg",
    "revision": "3eba4503fb02a752a10b3d829f0cc377"
  },
  {
    "url": "images/print.png",
    "revision": "28177dd8d7d4348a127594642941992a"
  },
  {
    "url": "images/remove.png",
    "revision": "740b35f20e29575acc7eb70de628ea6d"
  },
  {
    "url": "images/usdt.png",
    "revision": "62c6917b7fb1452e9096d2bb3abacde3"
  },
  {
    "url": "images/بيسيس.png",
    "revision": "9ae2d77e4c22d46388e94c8d1a3b2955"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst(), 'GET');
