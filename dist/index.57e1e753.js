// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1QJRq":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "acbb1e2157e1e753";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9WuRb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "productsToPage", ()=>productsToPage
);
parcelHelpers.export(exports, "offcanvasCart", ()=>offcanvasCart
) //BACKUP
;
var _productObjects = require("./models/product-objects");
var _isomething = require("./models/Isomething");
let image001 = "/assets/product-feed-img/1.jpg";
let image002 = "2.0fe79b40.jpg";
let image003 = "11.cdc2b607.jpg";
let image004 = "4.a09afae4.jpg";
let image005 = "5.ad46c5a6.jpg";
let image006 = "6.692c53f5.jpg";
let image007 = "7.318e1685.jpg";
let image008 = "8.14acd5c6.jpg";
let image009 = "13.2d4597af.jpg";
let product001 = new _productObjects.Article(image001, "Daft Punk", "Homework", 1997, 250, "MJT001R", "Homework is the debut studio album by the French electronic music duo Daft Punk, released on 20 January 1997 by Virgin Records and Soma Quality Recordings.<br/><br/> The duo produced the tracks without plans to release an album. After working on projects that were intended to be separate singles over five months, they considered the material good enough for an album.", "Electronic", "purchase", "more info", "spotify", 1, "https://open.spotify.com/album/5uRdvUR7xCnHmUW8n64n9y?si=43c792ad2c8e4c2d" //SPOTIFY-URL
);
let product002 = new _productObjects.Article(image002, "DIO", "Holy diver", 1983, 250, "MJT002R", "Holy Diver is the debut studio album by the American heavy metal band Dio, released in 1983. <br/> Vocalist Ronnie James Dio had just finished his first tenure in Black Sabbath, whose drummer, Vinny Appice, he took with him to put together his own band. <br/><br/>The roster was completed by his former bandmate from Rainbow, Jimmy Bain, on bass and by the young guitarist Vivian Campbell, coming from the new wave of British heavy metal band Sweet Savage. <br/>The album was acclaimed by the music press and is the band's most successful effort.", "rock", "purchase", "more info", "spotify", 2, "https://open.spotify.com/album/1QJmLRcuIMMjZ49elafR3K?si=57709f0b1eb141be");
let product003 = new _productObjects.Article(image003, "Deftones", "Diamond eyes", 2010, 250, "MJT003R", "Diamond Eyes is the sixth studio album by American alternative metal band Deftones, released on May 4, 2010 by Reprise Records. <br/> It was the first album to feature bassist Sergio Vega, who replaced original bassist Chi Cheng.<br/><br/> An album tentatively titled Eros was originally intended to be the band's sixth full-length release following Saturday Night Wrist (2006), but was not finished due to Cheng entering a coma after a serious car accident that occurred in November 2008, eventually resulting in his death in 2013. <br/><br/>The band continued on with Vega as his replacement, and the release of Eros was put on hold in favor of Diamond Eyes in June 2009.", "Rock", "purchase", "more info", "spotify", 3, "https://open.spotify.com/album/4RQnFSkkZlA65Xxchhnaha?si=Td0NsFfJR0-g015ARt4d-g");
let product004 = new _productObjects.Article(image004, "Calvin Harris", "I created disco", 2007, 250, "MJT004R", "I Created Disco is the debut studio album by Scottish singer-musician Calvin Harris. <br/>It was released on 15 June 2007 by Columbia Records.<br/><br/> It was preceded by the singles 'Acceptable in the 80s' and 'The Girls', which reached numbers 10 and three on the UK Singles Chart, respectively. <br/><br/>The album debuted at number eight on the UK Albums Chart with first-week sales of 16,121 copies. <br/><br/>On 23 May 2008, it was certified gold by the British Phonographic Industry (BPI). I Created Disco had sold 223,845 copies in the United Kingdom by November 2014.", "Electronic", "purchase", "more info", "spotify", 4, "https://open.spotify.com/album/5gDkjyJBK8VLZjKqqUd79K?si=e13578af3d734b42");
let product005 = new _productObjects.Article(image005, "Avicii", "True", 2013, 250, "MJT005R", "True is the debut studio album by Swedish electronic music producer Avicii, released on 13 September 2013 by PRMD Music and Island Records. <br/><br/>Avicii said that sonically, the album would move away from his earlier house music sound on previous records by incorporating elements of other genres such as country music. <br/><br/>True was preceded by the release of the Aloe Blacc-assisted 'Wake Me Up' that featured a rare Marantz Enhanced Digital Stereo audio track and topped several charts around the world, and 'You Make Me', which features vocals from Swedish artist Salem Al Fakir.", "Electronic", "purchase", "more info", "spotify", 5, "https://open.spotify.com/album/2H6i2CrWgXE1HookLu8Au0?si=70bf68a557754edb");
let product006 = new _productObjects.Article(image006, "The Stone Roses", "The stone roses", 1989, 250, "MJT006R", "The Stone Roses is the debut studio album by English rock band the Stone Roses. <br/><br/>It was recorded mostly at Battery Studios in London with producer John Leckie from June 1988 to February 1989 and released in May of that year by Silvertone Records.<br/><br/>Despite not being an immediate success, the album grew popular alongside the band's high-profile concert performances, which also helped establish them as fixtures of the Madchester and baggy cultural scenes.", "rock", "purchase", "more info", "spotify", 6, "https://open.spotify.com/album/0um9FI6BLBldL5POP4D4Cw?si=b8ebc3dc44a04ff3");
let product007 = new _productObjects.Article(image007, "Destroyer", "Kaputt", 2011, 250, "MJT007R", "Kaputt is the ninth album by Canadian band Destroyer. It was released on January 25, 2011 by Merge Records and Dead Oceans Records. The album was leaked towards the end of 2010.<br/><br/> The vinyl edition of the album features bonus material on side three written largely by frequent Destroyer collaborator Ted Bois. <br/><br/>This material is also included in the European CD version of the album credited as 'The Laziest River'. The album was named as a shortlisted (one of 10) nominee for the 2011 Polaris Music Prize award. ", "rock", "purchase", "more info", "spotify", 7, "https://open.spotify.com/album/3yy32elu0ZXO6xq2bTuhmU?si=5497dd79effc4e78");
let product008 = new _productObjects.Article(image008, "Bob Dylan", "Infidels", 1983, 250, "MJT008R", "Infidels is the 22nd studio album by American singer-songwriter Bob Dylan, released on October 27, 1983 by Columbia Records. <br/><br/>Produced by Mark Knopfler and Dylan himself, Infidels is seen as his return to secular music, following a conversion to Christianity, three evangelical records and a subsequent return to a less religious lifestyle.<br/><br/> Though he has never entirely abandoned religious imagery, Infidels gained much attention for its focus on more personal themes of love and loss, in addition to commentary on the environment and geopolitics. <br/><br/>Christopher Connelly of Rolling Stone called those gospel albums just prior to Infidels 'lifeless', and saw Infidels as making Bob Dylan's career viable again", "rock", "purchase", "more info", "spotify", 8, "https://open.spotify.com/album/66zadu7BtUnpbkT4iAkaHy?si=4d6aa4b034384fb2");
let product009 = new _productObjects.Article(image009, "Whitechapel", "The valley", 2019, 250, "MJT009R", "The Valley is the seventh studio album by the American deathcore band Whitechapel.<br/><br/> It was released through Metal Blade Records on March 29, 2019 to very positive reviews.<br/><br/> On April 14, 2020, an acoustic version of 'Hickory Creek' was released. It marks the first Whitechapel song to include entirely clean vocals.<br/><br/> Loudwire named it one of the 50 best metal albums of 2019.[9]", "Rock", "purchase", "more info", "spotify", 8, "https://open.spotify.com/album/3CuUGJ6cFro2LQIiWlXOue?si=E7MhQu3qSoa0HRHoRZ7eNA");
let products = [
    product001,
    product002,
    product003,
    product004,
    product005,
    product006,
    product007,
    product008,
    product009, 
];
// let shoppingCart = [];
window.onload = function() {
    productsToPage();
    offcanvasCart(); //BACKUP
};
let cart = new _isomething.CartList();
function productsToPage() {
    let productContainer = document.getElementById("products");
    for(let i = 0; i < products.length; i++){
        let productFeed = document.createElement("div");
        productFeed.className = "product";
        let productImage = document.createElement("img");
        productImage.className = "product-image";
        productImage.src = products[i].photo;
        //ADD DESCRIPTION.HTML ANCHORTAG TO PHOTO
        let photoRedirect = document.createElement("a");
        photoRedirect.href = "../description.html";
        //CLICK PHOTO TO REDIRECT
        productImage.addEventListener("click", ()=>{
            window.localStorage.setItem("product", JSON.stringify(products[i]));
            location.href = photoRedirect.href;
        });
        let productArtist = document.createElement("p");
        productArtist.className = "artist";
        productArtist.innerHTML = products[i].artist;
        let productAlbum = document.createElement("p");
        productAlbum.className = "album";
        productAlbum.innerHTML = products[i].album;
        let productYear = document.createElement("p");
        productYear.className = "year";
        productYear.innerHTML = "year: " + products[i].year;
        let productPrice = document.createElement("p");
        productPrice.className = "price";
        productPrice.innerHTML = "price: " + products[i].price + " SEK";
        let productGenre = document.createElement("p");
        productGenre.className = "genre";
        productGenre.innerHTML = "Genre: " + products[i].genre;
        //PURCHASE BUTTON
        let addToCart = document.createElement("button");
        addToCart.className = "purchase-button";
        addToCart.innerHTML = products[i].addToCart;
        //ADD PRODUCT TO LOCAL STORAGE // addToCart () {}
        addToCart.addEventListener("click", ()=>{
            cart.addToCart(products[i]);
            offcanvasCart();
            //BEHÅLLARE TÖMMAS
            // shoppingCart.push(products[i]);
            // window.localStorage.setItem("addToCart", JSON.stringify(shoppingCart));
            if (typeof Storage !== "undefined") {
                if (localStorage.clickcount) localStorage.clickcount = Number(localStorage.clickcount) + 1;
                else localStorage.clickcount = 1;
            }
        // console.log(shoppingCart);
        // cartProductCount(); //CART COUNT
        });
        //CREATE INFOBUTTON (PRODUCTDESCRIPTION)
        let infoBtn = document.createElement("button");
        infoBtn.className = "info-button";
        infoBtn.innerHTML = products[i].infoBtn;
        //ADD DESCRIPTION.HTML ANCHORTAG
        let infoRedirect = document.createElement("a");
        infoRedirect.href = "../description.html";
        //CLICK TO REDIRECT
        infoBtn.addEventListener("click", ()=>{
            window.localStorage.setItem("product", JSON.stringify(products[i]));
            location.href = infoRedirect.href;
        });
        //CREATE SPOTIFY-BUTTON
        let listenBtn = document.createElement("button");
        listenBtn.className = "listen-button";
        listenBtn.innerHTML = products[i].listenBtn;
        //CREATE SPOTIFYLOGO
        let spotifyLogo = document.createElement("i");
        spotifyLogo.className = "fa fa-spotify";
        //ADD ALBUM URL TO BUTTON
        let spotifyUrl = document.createElement("a");
        spotifyUrl.className = "spotify-redirect";
        spotifyUrl.href = products[i].spotifyUrl;
        //CLICK TO OPEN SPOTIFY
        listenBtn.addEventListener("click", ()=>{
            location.href = spotifyUrl.href;
        });
        productFeed.appendChild(productImage);
        productFeed.appendChild(productArtist);
        productFeed.appendChild(productAlbum);
        productFeed.appendChild(productYear);
        productFeed.appendChild(productPrice);
        productFeed.appendChild(productGenre);
        productFeed.appendChild(addToCart);
        productFeed.appendChild(infoBtn);
        infoBtn.appendChild(infoRedirect);
        productFeed.appendChild(listenBtn);
        listenBtn.appendChild(spotifyUrl);
        listenBtn.appendChild(spotifyLogo);
        productContainer.appendChild(productFeed);
    }
    console.log(products);
}
//Adding product cart counting
function cartProductCount() {
    let purchaseBtnCount = document.querySelectorAll(".purchase-button");
    let cartAdding = document.getElementById("cartCount");
    if (purchaseBtnCount) {
        if (cartAdding) {
            let cartCount = Number(cartAdding.innerText || 0);
            cartAdding.innerText = String(cartCount + 1);
            cartAdding.style.visibility = "visible";
        }
    }
}
function offcanvasCart() {
    // let getCart: string = localStorage.getItem("addToCart");
    // let cartObject: any = JSON.parse(getCart); //BACKUP
    let cartContainer = document.getElementById("shopping-cart-offcanvas");
    for(let i = 0; i < cart.getCart.length; i++){
        let cartItem = document.createElement("ul");
        cartItem.className = "cart-item-offcanvas";
        let photo = document.createElement("img");
        photo.className = "product-image-offcanvas";
        photo.src = cart.getCart[i].photo;
        let artist = document.createElement("li");
        artist.className = "artist-offcanvas";
        artist.innerHTML = cart.getCart[i].artist;
        let album = document.createElement("li");
        album.className = "album-offcanvas";
        album.innerHTML = "'" + cart.getCart[i].album + "'";
        let article = document.createElement("li");
        article.className = "article-offcanvas";
        article.innerHTML = cart.getCart[i].article;
        let price = document.createElement("li");
        price.className = "price-offcanvas";
        price.innerHTML = cart.getCart[i].price + " SEK";
        let removeItem = document.createElement("button");
        removeItem.className = "remove-from-offcanvas";
        removeItem.innerHTML = "REMOVE";
        console.log(cart.getCart);
        removeItem.addEventListener("click", ()=>{
            cart.getCart.splice(i, 1);
            console.log(cart.getCart);
            offcanvasCart();
        });
        cartItem.appendChild(photo);
        cartItem.appendChild(artist);
        cartItem.appendChild(album);
        cartItem.appendChild(article);
        cartItem.appendChild(price);
        cartContainer.appendChild(cartItem);
        cartItem.appendChild(removeItem);
    }
}

},{"./models/product-objects":"d5Ism","./models/Isomething":"brPZg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d5Ism":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Article", ()=>Article
);
class Article {
    constructor(photo, artist, album, year, price, article, description, genre, addToCart, infoBtn, listenBtn, id, spotifyUrl){
        this.photo = photo;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.price = price;
        this.article = article;
        this.description = description;
        this.genre = genre;
        this.addToCart = addToCart;
        this.infoBtn = infoBtn;
        this.listenBtn = listenBtn;
        this.id = id;
        this.spotifyUrl = spotifyUrl;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["1QJRq","9WuRb"], "9WuRb", "parcelRequire1848")

//# sourceMappingURL=index.57e1e753.js.map
