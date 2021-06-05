/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/bijou.js@8.2.2/bijou.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
let isNode = !1;
isNode = "undefined" == typeof window || "undefined" == typeof document, isNode && console.warn();

let node = () => {
  if (isNode) throw new Error("You are using Node.js, this function does not work in Node.js! Sorry!");
},
    array_namespace = {},
    color_namespace = {},
    date_namespace = {},
    element_namespace = {},
    event_namespace = {},
    function_namespace = {},
    math_namespace = {},
    object_namespace = {},
    string_namespace = {},
    utility_namespace = {};

const req = (e, t, r = !0) => {
  if (!r) return;
  let n = "Missing parameter";
  throw e && (n += " of type " + e), t && (n = `Parameter ${t} ${e ? `(${e})` : ""} required.`), new Error(n);
};

export let count = (e = req("array", "array")) => e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {});
export let arrayDiff = (e = req("array", "array 1"), t = req("array", "array 2")) => {
  for (var r = [], n = [], o = 0; o < e.length; o++) r[e[o]] = !0;

  for (o = 0; o < t.length; o++) r[t[o]] ? delete r[t[o]] : r[t[o]] = !0;

  for (var a in r) n.push(a);

  return n;
};
export let diff = function (e = req("string", "Text 1"), t = req("string", "Text 2")) {
  for (var r = [], n = void 0, o = 0; o < e.length; o++) e[o] != t[o] && null == n && (n = [o]), null != n && e[o] == t[o] && (n.push(o), r.push(n), n = void 0);

  return null != n && (n.push(o), r.push(n)), r;
};
export let remove = (e = req("array", "array"), t = req(void 0, "item")) => "string" == typeof e ? e.replace(t, "") : "object" == typeof e ? (e["" + t] = void 0, e = _$.clone(e, e => void 0 !== e)) : (e.indexOf(t) > -1 && e.splice(e.indexOf(t), 1), e);
export let spliceArrayBuffer = (e = req("ArrayBuffer"), t = req("number"), r = req("number"), n = !1) => {
  var o = n ? -1 : 1;
  n && ([t, r] = [r, t]), t = Math.floor(t), r = Math.floor(r) + o;

  for (var a = t, i = 0; a != r; a += o) i = 256 * i + e[a];

  return i;
};
export let flatten = (e = req("array", "array"), t = 1) => {
  var r = e;
  return _$.each(t, () => {
    r = [].concat.apply([], e);
  }), r;
};
export let nFlatten = (e = req("array", "array")) => e.reduce(function (e, t) {
  return e.concat(Array.isArray(t) ? flatten(t) : t);
}, []);
export let contains = (e = req("array"), t = req("string")) => e.includes(t);
export let shuffleArray = (e = req("array")) => e.sort(() => Math.random() - .5);
export let splice = (e = req("array", "array"), t = req("number", "index"), r = 0, n) => {
  let o = Array.from(arguments);
  return o.shift(), "string" == typeof e ? e.split("").splice(...o).join("") : e.splice(...o);
};
export let unionArrays = (e = req("array", "array1"), t = req("array", "array2")) => {
  for (var r = {}, n = e.length - 1; n >= 0; --n) r[e[n]] = e[n];

  for (n = t.length - 1; n >= 0; --n) r[t[n]] = t[n];

  var o = [];

  for (var a in r) r.hasOwnProperty(a) && o.push(r[a]);

  return o;
};
export let averageBy = (e = req("array", "array"), t = req("function", "callback")) => e.map("function" == typeof t ? t : e => e[t]).reduce((e, t) => e + t, 0) / e.length;
export let uniqueArray = (e = req("array", "array")) => [...new Set(e)];
export let each = (e = req("Array|Number|String", "array"), t = req("function", "callback")) => {
  e = "number" == typeof e ? _$.range(1, e) : "string" == typeof e ? e.split("") : e;

  for (let r = 0; r < e.length; r++) t(e[r], r, e);

  return e;
};
export let rgbToHex = (e = req("string", "RGB color")) => {
  let t = e.indexOf(",") > -1 ? "," : " ",
      r = (+(e = e.substr(4).split(")")[0].split(t))[0]).toString(16),
      n = (+e[1]).toString(16),
      o = (+e[2]).toString(16);
  return 1 === r.length && (r = "0" + r), 1 === n.length && (n = "0" + n), 1 === o.length && (o = "0" + o), "#" + r + n + o;
};
export let hexToRGB = (e = req("string", "hex color")) => {
  if ((e.length - 1 != 6 && e.length - 1 != 8 && e.length - 1 != 4 && e.length - 1 != 3 || !e.startsWith("#")) && (6 !== e.length && 8 !== e.length && 4 !== e.length && 3 !== e.length || e.startsWith("#"))) throw new Error("Invalid hex");
  let t = !1,
      r = e.slice(e.startsWith("#") ? 1 : 0);
  return 3 === r.length ? r = [...r].map(e => e + e).join("") : 8 === r.length && (t = !0), r = parseInt(r, 16), "rgb" + (t ? "a" : "") + "(" + (r >>> (t ? 24 : 16)) + ", " + ((r & (t ? 16711680 : 65280)) >>> (t ? 16 : 8)) + ", " + ((r & (t ? 65280 : 255)) >>> (t ? 8 : 0)) + (t ? ", " + (255 & r) : "") + ")";
};
export let blendColors = (e = req("string", "color 1"), t = req("string", "color 2"), r = 50) => {
  const n = (e, t, r) => e + r / 100 * (t - e),
        o = parseInt(`${e[1]}${e[2]}`, 16),
        a = parseInt(`${e[3]}${e[4]}`, 16),
        i = parseInt(`${e[5]}${e[6]}`, 16),
        l = parseInt(`${t[1]}${t[2]}`, 16),
        s = parseInt(`${t[3]}${t[4]}`, 16),
        c = parseInt(`${t[5]}${t[6]}`, 16);

  return ((e, t, r) => {
    let n = e.toString(16),
        o = t.toString(16),
        a = r.toString(16);

    for (; n.length < 2;) n = "0" + n;

    for (; o.length < 2;) o = "0" + o;

    for (; a.length < 2;) a = "0" + a;

    return `#${n}${o}${a}`;
  })(Math.round(n(o, l, r)), Math.round(n(a, s, r)), Math.round(n(i, c, r)));
};
export let randomColor = () => "#" + Math.floor(16777215 * Math.random()).toString(16);
export let lightenColor = (e = req("string", "hex color"), t = req("number", "amount")) => {
  var r = !1;
  "#" == e[0] && (e = e.slice(1), r = !0);
  var n = parseInt(e, 16),
      o = (n >> 16) + t;
  o > 255 ? o = 255 : o < 0 && (o = 0);
  var a = (n >> 8 & 255) + t;
  a > 255 ? a = 255 : a < 0 && (a = 0);
  var i = (255 & n) + t;
  return i > 255 ? i = 255 : i < 0 && (i = 0), (r ? "#" : "") + (i | a << 8 | o << 16).toString(16);
};
export let lightOrDark = (e = req("string", "hex or RGB color")) => {
  var t, r, n, o;
  return e.match(/^rgb/) ? (t = (e = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1], r = e[2], n = e[3]) : (t = (e = +("0x" + e.slice(1).replace(e.length < 5 && /./g, "$&$&"))) >> 16, r = e >> 8 & 255, n = 255 & e), (o = Math.sqrt(t * t * .299 + r * r * .587 + n * n * .114)) > 127.5 ? {
    lightOrDark: "light",
    hsp: o
  } : {
    lightOrDark: "dark",
    hsp: o
  };
};
export let dayName = (e = new Date(), t = "en-US") => e.toLocaleDateString(t, {
  weekday: "long"
});
export let formatMilliseconds = (e = req("number", "milliseconds")) => {
  (e = "string" == typeof e ? +e : e) < 0 && (e = -e);
  const t = {
    century: Math.floor(e / 11448e8),
    year: Math.floor(e / 22896e6) % 50,
    day: Math.floor(e / 864e5) % 365,
    hour: Math.floor(e / 36e5) % 24,
    minute: Math.floor(e / 6e4) % 60,
    second: Math.floor(e / 1e3) % 60,
    millisecond: Math.floor(e) % 1e3
  };
  return Object.entries(t).filter(e => 0 !== e[1]).map(([e, t]) => `${t} ${e}${1 !== t ? "s" : ""}`).join(", ");
};
export let addMinutesToDate = (e = req("date", "date or date string"), t = req("number", "minutes")) => {
  const r = new Date(e);
  return r.setTime(r.getTime() + 6e4 * t), r.toISOString().split(".")[0].replace("T", " ");
};
export let isDateValid = (...e) => (req("any", "date arguments", ![...e].length), !Number.isNaN(new Date(...e).valueOf()));
export let addDaysToDate = (e = req("date", "date or date string"), t = req("number", "days")) => {
  const r = new Date(e);
  return r.setDate(r.getDate() + t), r.toISOString().split("T")[0];
};
export let ripple = (e = req("element", "element"), {
  time: t,
  color: r,
  opacity: n,
  event: o
}) => {
  node(), t = t || 3 * (+e.getAttribute("data-time") || 1e3), r = r || e.getAttribute("data-color") || "currentColor", n = n || e.getAttribute("data-opacity") || ".3", o = o || e.getAttribute("data-event") || "mousedown", e.style.overflow = "hidden", e.style.position = "relative", e.addEventListener(o, o => {
    var a = document.createElement("DIV");
    a.style.position = "absolute", a.style.background = "" + r, a.style.borderRadius = "50%";
    var i,
        l = e.getBoundingClientRect();
    i = l.width > l.height ? 3 * l.width : 3 * l.height, a.style.pointerEvents = "none", a.style.height = i + "px", a.style.width = i + "px", a.style.transform = "translate(-50%, -50%) scale(0)", a.style.top = o.pageY - (l.top + window.scrollY) + "px", a.style.left = o.pageX - (l.left + window.scrollX) + "px", a.style.transition = `opacity ${t}ms ease, transform ${t}ms ease`, a.removeAttribute("data-ripple"), a.style.opacity = n, e.appendChild(a), setTimeout(() => {
      a.style.transform = "translate(-50%, -50%) scale(1)", a.style.opacity = "0", setTimeout(() => {
        a.remove();
      }, t);
    }, 1);
  });
};
export function elementReady(e = req("string", "query selector"), t = document.documentElement) {
  return node(), new Promise((r, n) => {
    const o = t.querySelector(e);
    o && r(o), new MutationObserver((n, o) => {
      Array.from(t.querySelectorAll(e)).forEach(e => {
        r(e), o.disconnect();
      });
    }).observe(t, {
      childList: !0,
      subtree: !0
    });
  });
}
export let elementContains = (e = req("HTMLElement", "parent"), t = req("HTMLElement", "child")) => (node(), e !== t && e.contains(t));
export let parents = (e = req("element")) => (node(), [...function* (e) {
  for (; e = e.parentNode;) yield e;
}(e)]);
export let getImages = (e = document.documentElement, t = !1) => {
  node();
  const r = [...e.getElementsByTagName("img")].map(e => e.getAttribute("src"));
  return t ? r : [...new Set(r)];
};
export let renderElement = ({
  type: e,
  props: t = {}
} = req("object", "options"), r = req("HTMLElement", "container")) => {
  node();

  const n = !e,
        o = n ? document.createTextNode("") : document.createElement(e),
        a = e => e.startsWith("on");

  return Object.keys(t).forEach(e => {
    (e => !a(e) && "children" !== e)(e) && (o[e] = t[e]), !n && a(e) && o.addEventListener(e.toLowerCase().slice(2), t[e]);
  }), !n && t.children && t.children.length && t.children.forEach(e => renderElement(e, o)), r.appendChild(o), o;
};
export function create(e = "div", ...t) {
  node();
  let r = e.match(/^[a-z0-9]+/i),
      n = e.match(/#([a-z]+[a-z0-9-]*)/gi),
      o = e.match(/\.([a-z]+[a-z0-9-]*)/gi),
      a = e.match(/\[([a-z][a-z-]+)(=['|"]?([^\]]*)['|"]?)?\]/gi),
      i = r ? r[0] : "div";
  if (n && n.length > 1) throw new Error("only 1 ID is allowed");
  const l = document.createElement(i);

  if (n && (l.id = n[0].replace("#", "")), o) {
    const e = o.join(" ").replace(/\./g, "");
    l.setAttribute("class", e);
  }

  return a && a.forEach(e => {
    e = e.slice(0, -1).slice(1);
    let [t, r] = e.split("=");
    r && (r = r.replace(/^['"](.*)['"]$/, "$1")), l.setAttribute(t, r || "");
  }), t.forEach(e => {
    "string" == typeof e || "number" == typeof e ? l.appendChild(document.createTextNode(e)) : e.nodeType === document.ELEMENT_NODE && l.appendChild(e);
  }), l;
}
export let context = () => {
  node();
  var e = document.createElement("UL");
  e.id = "contextMenu", document.body.appendChild(e);
  let t = document.createElement("STYLE");
  t.innerHTML = "#contextMenu {\n       pointer-events: none;\n       padding: 0;\n       opacity: 0;\n       transition: opacity .3s ease;\n       position: fixed;\n       padding-top: 3px;\n       padding-bottom: 3px;\n       max-height: 200px;\n       overflow-y: scroll;\n       overflow-x: hidden;\n       list-style: none;\n       z-index: 10000;\n       background: white;\n       color: #333;\n       font-family: sans-serif;\n       border-radius: 5px;\n       box-shadow: 2px 2px 5px #0004;\n       width: fit-content;\n       min-width: 50px;\n       max-width: 150px;\n     }\n     #contextMenu li {\n       transition: background-color .3s ease;\n       display: block;\n       min-width: 150px;\n       margin: 0;\n       padding: 10px;\n     }\n     #contextMenu li:hover {\n       background-color: #ddd;\n       cursor: pointer;\n     }\n     ", document.body.appendChild(t);
  var r = document.querySelectorAll("[contextmenu]");

  for (let t = 0; t < r.length; t++) window.addEventListener("contextmenu", t => {
    let r;
    e.style.pointerEvents = "auto";

    try {
      r = document.querySelectorAll(`#${t.target.closest("[contextmenu]").getAttribute("contextmenu")} menuitem`), t.preventDefault();
    } catch (t) {
      return !0;
    }

    e.innerHTML = "";

    for (let t = 0; t < r.length; t++) {
      const n = r[t],
            o = document.createElement("li");
      o.setAttribute("onclick", n.getAttribute("onclick")), o.addEventListener("click", () => {
        e.style.opacity = 0, e.style.pointerEvents = "none";
      }), o.textContent = n.getAttribute("label"), e.innerHTML += o.outerHTML;
    }

    console.log(e.innerHTML), e.style.top = t.clientY + "px", e.style.left = t.clientX + "px", e.style.opacity = 1;
  });

  var n = 0;
  return setInterval(() => {
    if ((n += 100) > 3e3) return e.style.opacity = 0, e.style.pointerEvents = "none", void (n = 0);
  }, 100), _$.addEventListeners(e, ["mousemove", "click", "scroll"], () => {
    n = 0;
  }), _$.onOutsideClick(e, () => {
    e.style.opacity = 0, e.style.pointerEvents = "none";
  }), r;
};
export let inView = (e = req("HTMLElement", "element")) => {
  node();

  for (var t = e.offsetTop, r = e.offsetLeft, n = e.offsetWidth, o = e.offsetHeight; e.offsetParent;) t += (e = e.offsetParent).offsetTop, r += e.offsetLeft;

  return t >= window.pageYOffset && r >= window.pageXOffset && t + o <= window.pageYOffset + window.innerHeight && r + n <= window.pageXOffset + window.innerWidth;
};
export let inPartialView = (e = req("HTMLElement", "element")) => {
  node();

  for (var t = e.offsetTop, r = e.offsetLeft, n = e.offsetWidth, o = e.offsetHeight; e.offsetParent;) t += (e = e.offsetParent).offsetTop, r += e.offsetLeft;

  return t < window.pageYOffset + window.innerHeight && r < window.pageXOffset + window.innerWidth && t + o > window.pageYOffset && r + n > window.pageXOffset;
};
export let replaceText = (e = req("HTMLElement", "element"), t = req("function", "callback")) => (node(), _$.each(_$.textNodes(e), e => {
  e.textContent = t(e.textContent);
}), e);
export let textNodes = (e = req("HTMLElement", "element")) => (node(), [...e.childNodes].filter(e => e.nodeType === Node.TEXT_NODE && "" !== e.nodeValue.trim()));
export let querySelector = (e = req("HTMLElement", "element")) => {
  node();
  var t = "";
  return function e(r) {
    if (r.getAttribute("id") && 1 === document.querySelectorAll("#" + r.getAttribute("id")).length) return t = (t = (t = t.replace(/^/, " #" + r.getAttribute("id"))).replace(/\s/, "")).replace(/\s/g, " > ");
    if (document.body === r) return t = (t = (t = t.replace(/^/, " body")).replace(/\s/, "")).replace(/\s/g, " > ");

    if (r.getAttribute("class")) {
      var n = ".";
      n = (n = (n += r.getAttribute("class")).replace(/\s/g, ".")).replace(/^/g, " ");
      var o = "",
          a = r.parentNode.children;
      if (a.length < 2) return;

      for (var i = [], l = 0; l < a.length; l++) r.getAttribute("class") == a[l].getAttribute("class") && i.push(a[l]);

      if (i.length > 1) for (var s = 0; s < i.length; s++) if (r === i[s]) {
        o = ":nth-of-type(" + ++s + ")";
        break;
      }
      t = t.replace(/^/, n + o);
    } else {
      var c = r.nodeName;
      c = c.toLowerCase();
      var u = "";

      if ((a = r.parentNode.children).length > 2) {
        var p = [];

        for (l = 0; l < a.length; l++) r.nodeName == a[l].nodeName && p.push(a[l]);

        if (p.length > 1) for (s = 0; s < p.length; s++) if (r === p[s]) {
          u = ":nth-of-type(" + ++s + ")";
          break;
        }
      }

      t = t.replace(/^/, " " + c + u);
    }

    if (!r.parentNode) return t = (t = t.replace(/\s/g, " > ")).replace(/\s/, "");
    e(r.parentNode);
  }(e), t;
};
export let removeComments = (e = req("HTMLElement", "HTMLElement")) => {
  node();
  const t = "string" == typeof e;
  e = t ? _$.parseHTML(e) : e.cloneNode(!0);

  for (const t of [...e.querySelectorAll("*"), e]) for (const e of t.childNodes) e instanceof Comment && t.removeChild(e);

  return t ? e.outerHTML : e;
};
export let parseHTML = (e = req("string", "html string"), t = "text/html") => {
  node();
  return new DOMParser().parseFromString(e, t);
};
export let drag = (e = req("String|Element", "drag handle"), t = req("String|Element", "drag target")) => {
  node();
  let r = null,
      n = 0,
      o = 0;

  function a(e) {
    e.preventDefault(), e.stopPropagation(), r = t, r.style.position = "absolute";
    let a = r.getBoundingClientRect();
    "mousedown" == e.type ? (n = e.clientX - a.left, o = e.clientY - a.top, window.addEventListener("mousemove", i, !0)) : "touchstart" == e.type && (n = e.targetTouches[0].clientX - a.left, o = e.targetTouches[0].clientY - a.top, window.addEventListener("touchmove", i, !0));
  }

  function i(e) {
    e.preventDefault(), e.stopPropagation(), null != r && ("mousemove" == e.type ? (r.style.left = e.clientX - n + "px", r.style.top = e.clientY - o + "px") : "touchmove" == e.type && (r.style.left = e.targetTouches[0].clientX - n + "px", r.style.top = e.targetTouches[0].clientY - o + "px"));
  }

  e = "string" == typeof e ? document.querySelector(e) : e, t = "string" == typeof t ? document.querySelector(t) : t, e.addEventListener("mousedown", a, !0), e.addEventListener("touchstart", a, !0), document.onmouseup = function (e) {
    r && (r = null, window.removeEventListener("mousemove", i, !0), window.removeEventListener("touchmove", i, !0));
  };
};
export let addEventListeners = (e = req("HTMLElement", "element"), t = req("array", "events"), r = () => {}, n = !1, o = []) => {
  if (node(), !(t instanceof Array)) throw 'addMultipleListeners: please supply an array of eventstrings (like ["click","mouseover"])';

  for (var a = function (e) {
    r.apply(this, o && o instanceof Array ? o : []);
  }, i = 0; i < t.length; i += 1) e.addEventListener(t[i], a, n);

  return e;
};
export let sortTable = (e = req("HTMLTableElement", "table element"), t) => {
  node();

  var r = function (e, r) {
    return t ? t(e.children[r], e, r) : e.children[r].innerText || e.children[r].textContent;
  };

  return Array.prototype.slice.call(e.querySelectorAll("th")).forEach(function (e) {
    e.addEventListener("click", function () {
      for (var t, n, o = e.parentNode; "TABLE" != o.tagName.toUpperCase();) o = o.parentNode;

      Array.prototype.slice.call(o.querySelectorAll("tr:nth-child(n+2)")).sort((t = Array.prototype.slice.call(e.parentNode.children).indexOf(e), n = this.asc = !this.asc, function (e, o) {
        return a = r(n ? e : o, t), i = r(n ? o : e, t), "" === a || "" === i || isNaN(a) || isNaN(i) ? a.toString().localeCompare(i) : a - i;
        var a, i;
      })).forEach(function (e) {
        o.appendChild(e);
      });
    });
  }), e;
};
export let sortTableBy = (e = req("HTMLTableElement", "<th> element"), t = !0) => {
  node();

  for (var r, n, o = function (e, t) {
    return e.children[t].innerText || e.children[t].textContent;
  }, a = e.parentNode; "TABLE" != a.tagName.toUpperCase();) a = a.parentNode;

  return Array.prototype.slice.call(a.querySelectorAll("tr:nth-child(n+2)")).sort((r = Array.prototype.slice.call(e.parentNode.children).indexOf(e), n = t, function (e, t) {
    return a = o(n ? e : t, r), i = o(n ? t : e, r), "" === a || "" === i || isNaN(a) || isNaN(i) ? a.toString().localeCompare(i) : a - i;
    var a, i;
  })).forEach(function (e) {
    a.appendChild(e);
  }), a;
};
export let addStyles = (e = req("HTMLElement", "element"), t = req("Object", "styles")) => (node(), Object.assign(e.style, t));
export let createElement = (e = req("String", "HTML element string")) => {
  node();
  const t = document.createElement("div");
  return t.innerHTML = e, t.firstElementChild;
};
export let compStyle = (e = req("HTMLElement", "element"), t = req("String", "CSS property string")) => (node(), window.getComputedStyle(e).getPropertyValue(t));
export let elementSiblings = (e = req("HTMLElement", "element")) => (node(), [...e.parentElement.children].filter(t => t != e));
export let disableRightClick = (e = req("HTMLElement", "element")) => (node(), e.addEventListener("contextmenu", e => e.preventDefault()), e);
export let inlineCSS = (e = req("HTMLElement", "element")) => {
  node();
  var t,
      r = getComputedStyle(e, null);

  for (t = 0; t < r.length; t++) {
    var n = r[t] + "";
    e.style[n] = r[n];
  }

  return r;
};
export let attributes = (e = req("HTMLElement", "element")) => {
  node();

  for (var t, r = [], n = 0, o = e.attributes, a = o.length; n < a; n++) t = o[n], r.push({
    name: t.nodeName,
    value: t.nodeValue
  });

  return r;
};
export let observeMutations = (e = req("HTMLElement", "element"), t = req("function", "callback"), r = {}) => {
  node();
  const n = new MutationObserver(e => e.forEach(e => t(e)));
  return n.observe(e, Object.assign({
    childList: !0,
    attributes: !0,
    attributeOldValue: !0,
    characterData: !0,
    characterDataOldValue: !0,
    subtree: !0
  }, r)), n;
};
export let tilt = (e = req("HTMLElement", "element"), t = req("number", "x"), r = req("number", "y"), n = 500, o = 30) => {
  node();
  let a = `perspective(${n}px) scale(1.1) rotateX(${-1 * o * ((r - e.clientHeight / 2) / e.clientHeight)}deg) rotateY(${o * ((t - e.clientWidth / 2) / e.clientWidth)}deg)`;
  return e.style.transform = a, a;
};
export let fullScreen = (e = req("HTMLElement", "element")) => (node(), e.requestFullScreen || e.mozRequestFullScreen || e.webkitRequestFullScreen() || new Error("Fullscreen failed"));
export let replaceSelection = (e = req("string", "replacement text")) => {
  var t, r;

  if (node(), window.getSelection) {
    if ((t = window.getSelection()).rangeCount) {
      (r = t.getRangeAt(0)).deleteContents();
      let n = document.createElement("span");
      n.insertAdjacentHTML("beforeend", e), r.insertNode(n);
    }
  } else document.selection && document.selection.createRange && (console.warn("You are using IE < 9, you are evil. Falling back to text not HTML."), (r = document.selection.createRange()).text = e.replace(/<[^>]*>/g, ""));

  return window.getSelection();
};
export let waitUntil = async (e = req("function", "condition"), t = 1 / 0) => new Promise(async (r, n) => {
  let o = Date.now();

  for (; !e();) {
    if (Date.now() - o >= t) return void n(e());
    await new Promise(e => requestAnimationFrame(e));
  }

  return r(e()), e();
});
export let onOutsideClick = (e = req("HTMLElement", "element"), t = req("function", "callback")) => (node(), new Promise((r, n) => {
  document.addEventListener("click", n => {
    e.contains(n.target) || (t(), r());
  });
}));
export let onScrollStop = (e = window, t = req("function", "callback"), r = 150) => {
  let n;
  return node(), new Promise((o, a) => {
    e.addEventListener("scroll", e => {
      clearTimeout(n), n = setTimeout(() => {
        t(e), o(e);
      }, r);
    }, !1);
  });
};
export let hub = () => ({
  hub: Object.create(null),

  emit(e, t) {
    (this.hub[e] || []).forEach(e => e(t));
  },

  on(e, t) {
    this.hub[e] || (this.hub[e] = []), this.hub[e].push(t);
  },

  off(e, t) {
    const r = (this.hub[e] || []).findIndex(e => e === t);
    r > -1 && this.hub[e].splice(r, 1), 0 === this.hub[e].length && delete this.hub[e];
  }

});
export let dispatch = (e = req("object", "event properties"), t = req("string", "type"), r = window) => {
  let n = new Event(t);

  for (let t in e) n[t] = e[t];

  return r.dispatchEvent(n), n;
};
export let juxt = (...e) => (...t) => [...e].map(e => [...t].map(e));
export let sleep = (e = req("number", "milliseconds")) => new Promise(t => setTimeout(t, e));
export let limitArgs = (e = req("function", "function"), t = req("number", "arguments")) => (...r) => e(...r.slice(0, t));
export let fastestFunction = (e, t = 1e3) => {
  const r = e.map(e => {
    const r = performance.now();

    for (let r = 0; r < t; r++) e();

    return performance.now() - r;
  });
  return r.indexOf(Math.min(...r));
};
export let spread = (e = req("function")) => t => {
  e.apply(globalThis, t);
};
export let memoize = (e = req("function")) => {
  let t = {};
  return function () {
    let r = JSON.stringify(Array.from(arguments)),
        n = Array.from(arguments);
    return t[r] || (t[r] = e(...n)), t[r];
  };
};
export let composeFunction = (...e) => t => (req("functions", "function list", ![...e].length), e.reduceRight((e, t) => t(e), t));
export let curryFunction = (e = req("function"), t = e.length, ...r) => t <= r.length ? e(...r) : _$.curryFunction.bind(null, e, t, ...r);
export let isAsync = (e = req("function")) => "[object AsyncFunction]" === Object.prototype.toString.call(e);
export let timeFunction = (e = req("function"), t = "_$ function timer") => {
  let r = performance.now();
  return console.time(t), e(), console.timeEnd(t), {
    function: e,
    time: performance.now() - r
  };
};
export let throttle = (e = req("function"), t = req("number", "wait"), r = {}) => {
  var n,
      o,
      a,
      i = null,
      l = 0;
  r || (r = {});

  var s = function () {
    l = !1 === r.leading ? 0 : Date.now(), i = null, a = e.apply(n, o), i || (n = o = null);
  };

  return function () {
    var c = Date.now();
    l || !1 !== r.leading || (l = c);
    var u = t - (c - l);
    return n = this, o = arguments, u <= 0 || u > t ? (i && (clearTimeout(i), i = null), l = c, a = e.apply(n, o), i || (n = o = null)) : i || !1 === r.trailing || (i = setTimeout(s, u)), a;
  };
};
export let debounce = (e = req("function"), t = req("number", "wait"), r = !1) => {
  var n;
  return function () {
    var o = this,
        a = arguments,
        i = r && !n;
    clearTimeout(n), n = setTimeout(function () {
      n = null, r || e.apply(o, a);
    }, t), i && e.apply(o, a);
  };
};
export let runAsync = (e = req("function")) => {
  const t = new Worker(URL.createObjectURL(new Blob([`postMessage((${e})());`]), {
    type: "application/javascript; charset=utf-8"
  }));
  return new Promise((e, r) => {
    t.onmessage = ({
      data: r
    }) => {
      e(r), t.terminate();
    }, t.onerror = e => {
      r(e), t.terminate();
    };
  });
};
export let flattenObj = (e = req("object", "object")) => e !== Object(e) || Array.isArray(e) ? {} : Object.assign({}, ...function e(t) {
  return [].concat.apply([], Object.entries(t).map(([t, r]) => r && "object" == typeof r && Object.keys(r).some(e => r.hasOwnProperty(e)) && !Array.isArray(r) ? e(r) : {
    [t]: r
  }));
}(e));
export let clone = (e = req("object", "Object to clone"), t, r) => {
  var n = Object.create;
  if ("function" != typeof n && (n = function (e) {
    function t() {}

    return t.prototype = e, new t();
  }), null === e || "object" != typeof e) return e;
  if ("function" == typeof e.clone) return e.clone(!0);
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) return new RegExp(e);
  if (e.nodeType && "function" == typeof e.cloneNode) return e.cloneNode(!0);
  void 0 === t && (t = [], r = []);
  var o = t.length;

  for (i = 0; i < o; i++) if (e === t[i]) return r[i];

  if ("[object Array]" == Object.prototype.toString.call(e)) {
    var a = e.slice();
    t.push(e), r.push(a);

    for (var i = a.length; i--;) a[i] = clone(a[i], t, r);

    return a;
  }

  var l = Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__;
  l || (l = e.constructor.prototype);
  var s = n(l);

  for (var c in t.push(e), r.push(s), e) s[c] = clone(e[c], t, r);

  return s;
};
export let listen = (e = req("object"), t = () => null, r = () => null) => new Proxy(e, {
  set: function (e, r, n) {
    return t(r, n), e[r] = n, e[r];
  },
  get: function (t, n, o) {
    return r(n, o), e[n];
  }
});
export let merge = function e(t = req("object", "object 1"), r = req("object", "object 2")) {
  for (var n in r) if (!(n in Object.prototype)) try {
    r[n].constructor == Object ? t[n] = e(t[n], r[n]) : t[n] = r[n];
  } catch (e) {
    t[n] = r[n];
  }

  return t;
};
export let mapObjectKeys = (e = req("object"), t = req("function", "callback")) => Array.isArray(e) ? e.map(e => _$.mapObjectKeys(e, t)) : "object" == typeof e ? Object.keys(e).reduce((r, n) => {
  const o = t(n),
        a = e[n];
  return r[o] = null !== a && "object" == typeof a ? _$.mapObjectKeys(a, t) : a, r;
}, {}) : e;
export let mapObjectValues = (e = req("object", "object"), t = req("function", "callback")) => (Object.keys(e).map(function (r, n) {
  e[r] = t(e[r], n);
}), e);
export let formToObject = (e = req("HTMLFormElement", "the form")) => (node(), Array.from(new FormData(e)).reduce((e, [t, r]) => ({ ...e,
  [t]: r
})));
export let sortObj = (e = req("object", "object")) => Object.keys(e).sort().reduce(function (t, r) {
  return t[r] = e[r], t;
}, {});
export let gcd = (...e) => {
  return e[0] instanceof Array ? t(e[0]) : t([...e]);

  function t(e) {
    let r = Math.min(...e);
    if (r == Math.max(...e)) return r;

    for (let t in e) e[t] > r && (e[t] = e[t] - r);

    return t(e);
  }
};
export let round = (e = req("number"), t = 1) => Math.round(e / t) * t;
export let equals = (e = req("any", "a"), t = req("any", "b")) => {
  if (e === t) return !0;
  if ("RegExp" === _$.typeOf(e) && "RegExp" === _$.typeOf(t)) return String(e) === String(t);
  if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
  if (!e || !t || "object" != typeof e && "object" != typeof t) return e === t;
  if (e.prototype !== t.prototype) return !1;
  let r = Object.keys(e);
  return r.length === Object.keys(t).length && r.every(r => equals(e[r], t[r]));
};
export let isPrime = (e = req("number", "number")) => {
  const t = Math.floor(Math.sqrt(e));

  for (let r = 2; r <= t; r++) if (e % r == 0) return !1;

  return e >= 2;
};
export let factorial = (e = req("number")) => e < 0 ? (() => {
  throw new TypeError("Negative numbers are not allowed!");
})() : e <= 1 ? 1 : e * factorial(e - 1);
export let luhnCheck = (e = req("String|Number")) => {
  let t = (e + "").split("").reverse().map(e => parseInt(e)),
      r = t.splice(0, 1)[0],
      n = t.reduce((e, t, r) => r % 2 != 0 ? e + t : e + 2 * t % 9 || 9, 0);
  return n += r, n % 10 == 0;
};
export let animate = (e = req("Number", "start"), t = req("Number", "end"), r = req("number", "duration"), n = req("function", "callback"), o = 20, a = e => e) => {
  var i = e,
      l = Date.now();
  let s = setInterval(() => {
    i = a((Date.now() - l) / r) * (t - e) + e, n(i, a((Date.now() - l) / r));
  }, o);
  return setTimeout(() => {
    clearInterval(s), n(t, 1);
  }, r), s;
};
export let range = (e = req("number", "start"), t = 0) => (e > t && ([e, t] = [t, e]), Array(t - e + 1).fill().map((t, r) => e + r));
export let uuid = (e = Math.random()) => {
  function t(t) {
    var r = (e.toString(16) + "000000000").substr(2, 8);
    return t ? "-" + r.substr(0, 4) + "-" + r.substr(4, 4) : r;
  }

  return "string" == typeof e && (e = _temp.hashString(e) / 1e16), t() + t(!0) + t(!0) + t();
};
export let primesTo = (e = req("number", "number")) => {
  let t = Array.from({
    length: e - 1
  }).map((e, t) => t + 2),
      r = Math.floor(Math.sqrt(e));
  return Array.from({
    length: r - 1
  }).map((e, t) => t + 2).forEach(e => t = t.filter(t => t % e != 0 || t === e)), t;
};
export let random = (e = req("number", "max"), t = req("number", "min"), r = !0, n = Math.random()) => {
  t > e && ([t, e] = [e, t]);
  var o = n * (e - t + 1) + t;
  return r && (o = Math.round(o)), o;
};
export let seedRandom = (e = req("number", "seed")) => {
  var t = e += 1831565813;
  return t = Math.imul(t ^ t >>> 15, 1 | t), (((t ^= t + Math.imul(t ^ t >>> 7, 61 | t)) ^ t >>> 14) >>> 0) / 4294967296;
};
export let formatNumber = (e = req("number", "number")) => e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
export let ease = {
  linear: (e = req("number", "percentage")) => e,
  easeInSine: (e = req("number", "percentage")) => 1 - Math.cos(e * Math.PI / 2),
  easeOutSine: (e = req("number", "percentage")) => Math.sin(e * Math.PI / 2),
  easeInOutSine: (e = req("number", "percentage")) => -(Math.cos(Math.PI * e) - 1) / 2,
  easeInQuad: (e = req("number", "percentage")) => e * e,
  easeOutQuad: (e = req("number", "percentage")) => e * (2 - e),
  easeInOutQuad: (e = req("number", "percentage")) => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
  easeInCubic: (e = req("number", "percentage")) => e * e * e,
  easeOutCubic: (e = req("number", "percentage")) => --e * e * e + 1,
  easeInOutCubic: (e = req("number", "percentage")) => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e = req("number", "percentage")) => e * e * e * e,
  easeOutQuart: (e = req("number", "percentage")) => 1 - --e * e * e * e,
  easeInOutQuart: (e = req("number", "percentage")) => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
  easeInQuint: (e = req("number", "percentage")) => e * e * e * e * e,
  easeOutQuint: (e = req("number", "percentage")) => 1 + --e * e * e * e * e,
  easeInOutQuint: (e = req("number", "percentage")) => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e,
  easeInExpo: (e = req("number", "percentage")) => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
  easeOutExpo: (e = req("number", "percentage")) => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
  easeInOutExpo: (e = req("number", "percentage")) => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
  easeInCirc: (e = req("number", "percentage")) => 1 - Math.sqrt(1 - e * e),
  easeOutCirc: (e = req("number", "percentage")) => Math.sqrt(1 - (e - 1) * (e - 1)),
  easeInOutCirc: (e = req("number", "percentage")) => e < .5 ? 1 - Math.sqrt(1 - 4 * e * e) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
  easeInBack: (e = req("number", "percentage")) => 2.70158 * e * e * e - 1.70158 * e * e,
  easeOutBack: (e = req("number", "percentage")) => 1 + 2.70158 * Math.pow(e - 1, 3) + c1 * Math.pow(e - 1, 2),
  easeInOutBack: e => {
    const t = 2.5949095;
    return e < .5 ? 4 * e * e * (2 * (t + 1) * e - t) / 2 : (Math.pow(2 * e - 2, 2) * ((t + 1) * (2 * e - 2) + t) + 2) / 2;
  },
  easeInElastic: (e = req("number", "percentage")) => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * (2 * Math.PI) / 3),
  easeOutElastic: (e = req("number", "percentage")) => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * (2 * Math.PI) / 3) + 1,
  easeInOutElastic: (e = req("number", "percentage")) => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI) / 4.5) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI) / 4.5) / 2 + 1,
  easeInBounce: (e = req("number", "percentage")) => 1 - ease.easeOutBounce(1 - e),
  easeOutBounce: (e = req("number", "percentage")) => {
    const t = 7.5625,
          r = 2.75;
    return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375;
  },
  easeInOutBounce: (e = req("number", "percentage")) => e < .5 ? (1 - ease.easeOutBounce(1 - 2 * e)) / 2 : (1 + ease.easeOutBounce(2 * e - 1)) / 2
};
export let jaroDistance = function (e, t) {
  if (!e || !t) return 0;
  e = e.trim().toUpperCase(), t = t.trim().toUpperCase();

  for (var r = e.length, n = t.length, o = [], a = [], i = Math.floor(Math.max(r, n) / 2) - 1, l = Math.min(r, n), s = 0, c = n - 1, u = 0; u < r; u++) for (var p = u + i <= c ? u + i : c, d = u >= i ? u - i : 0; d <= p; d++) if (1 !== a[d] && e[d] === t[u]) {
    o[d] = 1, a[u] = 1, s++;
    break;
  }

  if (0 === s) return 0;
  var m = 0,
      g = 0;

  for (u = 0; u < r; u++) if (1 === o[u]) {
    for (d = m; d < n; d++) if (1 === a[d]) {
      m = d + 1;
      break;
    }

    e[u] !== t[d] && g++;
  }

  g = Math.floor(g / 2);
  var f = 0,
      h = {
    A: "E",
    A: "I",
    A: "O",
    A: "U",
    B: "V",
    E: "I",
    E: "O",
    E: "U",
    I: "O",
    I: "U",
    O: "U",
    I: "Y",
    E: "Y",
    C: "G",
    E: "F",
    W: "U",
    W: "V",
    X: "K",
    S: "Z",
    X: "S",
    Q: "C",
    U: "V",
    M: "N",
    L: "I",
    Q: "O",
    P: "R",
    I: "J",
    2: "Z",
    5: "S",
    8: "B",
    1: "I",
    1: "L",
    0: "O",
    0: "Q",
    C: "K",
    G: "J",
    E: " ",
    Y: " ",
    S: " "
  };
  if (l > s) for (u = 0; u < r; u++) if (!o[u]) for (d = 0; d < n; d++) if (!a[d] && h[e[u]] === t[d]) {
    f += 3, a[d] = 2;
    break;
  }
  var y = f / 10 + s,
      b = y / r + y / n + (s - g) / s;

  if ((b /= 3) > .7) {
    d = l >= 4 ? 4 : l;

    for (u = 0; u < d && e[u] === t[u]; u++);

    u && (b += .1 * u * (1 - b)), l > 4 && s > u + 1 && 2 * s >= l + u && (b += (s - u - 1) / (r * n - 2 * u + 2) * (1 - b));
  }

  return b;
};
export let prefixCSS = (e = req("string", "property")) => {
  node();
  const t = e.charAt(0).toUpperCase() + e.slice(1),
        r = ["", "webkit", "moz", "ms", "o"],
        n = r.findIndex(r => void 0 !== document.body.style[r ? r + t : e]);
  return -1 !== n ? 0 === n ? e : r[n] + t : null;
};
export let parseCookie = (e = req("string", "cookie string")) => e.split(";").map(e => e.split("=")).reduce((e, t) => (e[decodeURIComponent(t[0].trim())] = decodeURIComponent(t[1].trim()), e), {});
export let hash = (e = req("string", "input string")) => (node(), crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(e)).then(e => {
  let t = [],
      r = new DataView(e);

  for (let e = 0; e < r.byteLength; e += 4) t.push(("00000000" + r.getUint32(e).toString(16)).slice(-8));

  return t.join("");
}));
export let forTemplateLiteral = (e = req("array", "array"), t = req("function", "callback")) => e.map(t).join``;
export let mapString = (e = req("string", "string"), t = req("function", "callback")) => Array.prototype.map.call(e, t).join("");
export let deburr = (e = req("string", "string")) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export let removeTags = (e = req("string", "html string")) => e.replace(/<[^>]*>/g, "");
export let speak = (e = req("string", "text"), t = "en", r = 1, n = 1, o = 1, a = 1) => {
  var i = new SpeechSynthesisUtterance(),
      l = window.speechSynthesis.getVoices();
  let s = l.filter(e => e.default);
  return i.voice = n ? "number" == typeof n ? l[n] : n : s, i.volume = r, i.rate = a, i.pitch = o, i.text = e, i.lang = t, window.speechSynthesis.speak(i), i;
};
export let widows = (e = req("string", "text")) => {
  for (var t = e.split(" "), r = "", n = 0; n <= t.length - 1; n++) r += t[n], n == t.length - 2 ? r += "&nbsp;" : r += " ";

  return r;
};
export let unCamelCase = function (e = req("string", "string")) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3").replace(/^./, function (e) {
    return e.toUpperCase();
  });
};
export let camelCase = (e = req("string", "string")) => e.replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, t) {
  return 0 === t ? e.toLowerCase() : e.toUpperCase();
}).replace(/\s+/g, "");
export let scrambleString = (e = req("string")) => {
  for (var t = e.split(""), r = t.length - 1; r > 0; r--) {
    var n = Math.floor(Math.random() * (r + 1)),
        o = t[r];
    t[r] = t[n], t[n] = o;
  }

  return t.join("");
};
export let hashString = (e = req("string"), t = 0) => {
  let r = 3735928559 ^ t,
      n = 1103547991 ^ t;

  for (let t, o = 0; o < e.length; o++) t = e.charCodeAt(o), r = Math.imul(r ^ t, 2654435761), n = Math.imul(n ^ t, 1597334677);

  return r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & n) + (r >>> 0);
};
export let editDistance = (e = req("string", "string 1"), t = req("string", "string 2")) => {
  if (0 == e.length) return t.length;
  if (0 == t.length) return e.length;
  var r,
      n,
      o = [];

  for (r = 0; r <= t.length; r++) o[r] = [r];

  for (n = 0; n <= e.length; n++) o[0][n] = n;

  for (r = 1; r <= t.length; r++) for (n = 1; n <= e.length; n++) t.charAt(r - 1) == e.charAt(n - 1) ? o[r][n] = o[r - 1][n - 1] : o[r][n] = Math.min(o[r - 1][n - 1] + 1, Math.min(o[r][n - 1] + 1, o[r - 1][n] + 1));

  return o[t.length][e.length];
};
export let byteSize = (e = req("string", "string")) => new Blob([e]).size;
export let replaceMultiple = (e = req("string", "text"), t = req("object", "replace key pairs")) => {
  var r = new RegExp(Object.keys(t).join("|"), "gi");
  return e = e.replace(r, function (e) {
    return mapObj[e];
  });
};
export let urlQuery = (e = req("string", "query"), t = window.location.href) => {
  e = e.replace(/[\[\]]/g, "\\$&");
  var r = new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(t);
  return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
};
export let sanitize = (e = req("string", "input html"), t, r) => {
  node();
  t = t || ["I", "P", "B", "BODY", "HTML", "DEL", "INS", "STRONG", "SMALL", "A", "IMG", "CITE", "FIGCAPTION", "ASIDE", "ARTICLE", "SUMMARY", "DETAILS", "NAV", "TD", "TH", "TABLE", "THEAD", "TBODY", "NAV", "SPAN", "BR", "CODE", "PRE", "BLOCKQUOTE", "EM", "HR", "H1", "H2", "H3", "H4", "H5", "H6", "DIV", "MAIN", "HEADER", "FOOTER", "SELECT", "COL", "AREA", "ADDRESS", "ABBR", "BDI", "BDO"];
  r = (r = r || [{
    attribute: "src",
    tags: "*",
    regex: /^(?:https|http|\/\/):/
  }, {
    attribute: "href",
    tags: "*",
    regex: /^(?:https|http|\/\/):/
  }, {
    attribute: "width",
    tags: "*",
    regex: /^[0-9]+$/
  }, {
    attribute: "height",
    tags: "*",
    regex: /^[0-9]+$/
  }, {
    attribute: "id",
    tags: "*",
    regex: /^[a-zA-Z]+$/
  }, {
    attribute: "class",
    tags: "*",
    regex: /^[a-zA-Z ]+$/
  }, {
    attribute: "value",
    tags: ["INPUT", "TEXTAREA"],
    regex: /^.+$/
  }, {
    attribute: "checked",
    tags: ["INPUT"],
    regex: /^(?:true|false)+$/
  }, {
    attribute: "placeholder",
    tags: ["INPUT", "TEXTAREA"],
    regex: /^.+$/
  }, {
    attribute: "alt",
    tags: ["IMG", "AREA", "INPUT"],
    regex: /^[0-9a-zA-Z]+$/
  }, {
    attribute: "autofocus",
    tags: ["INPUT"],
    regex: /^(?:true|false)+$/
  }, {
    attribute: "for",
    tags: ["LABEL", "OUTPUT"],
    regex: /^[a-zA-Z0-9]+$/
  }]).map(e => {
    if ("string" == typeof e) return {
      attribute: e,
      tags: "*",
      regex: /^.+$/
    };
    let t = e;
    return e.hasOwnProperty("tags") || (t.tags = "*"), e.hasOwnProperty("regex") || (t.regex = /^.+$/), t;
  });
  var n = new DOMParser().parseFromString(e, "text/html"),
      o = n.querySelectorAll("*");

  for (let e = 0; e < o.length; e++) {
    const r = o[e];
    let n = i(r);

    for (let e = 0; e < n.length; e++) {
      a(r, n[e]) || r.removeAttribute(n[e]);
    }

    t.includes(r.tagName) || r.remove();
  }

  return n.documentElement.innerHTML;

  function a(e, t) {
    return r.filter(r => r.attribute === t && ("*" === r.tags || r.tags.includes(e.tagName)) && r.regex.test(e.getAttribute(t))).length > 0;
  }

  function i(e) {
    for (var t = 0, r = e.attributes, n = r.length, o = []; t < n; t++) o.push(r[t].nodeName);

    return o;
  }
};
export let markdownToHTML = (e = req("string", "input")) => {
  var t = /\\([\\\|`*_{}\[\]()#+\-~])/g,
      r = /\n *&gt; *([^]*?)(?=(\n|$){2})/g,
      n = /\n( *)(?:[*\-+]|((\d+)|([a-z])|[A-Z])[.)]) +([^]*?)(?=(\n|$){2})/g,
      o = /(^|[^A-Za-z\d\\])(([*_])|(~)|(\^)|(--)|(\+\+)|`)(\2?)([^<]*?)\2\8(?!\2)(?=\W|_|$)/g,
      a = /^.*\n( *\|( *\:?-+\:?-+\:? *\|)* *\n|)/,
      i = /.*\n/g,
      l = /\||(.*?[^\\])\|/g;

  function s(t, r) {
    e = e.replace(t, r);
  }

  function c(e, t) {
    return "<" + e + ">" + t + "</" + e + ">";
  }

  function u(e) {
    return e.replace(o, function (e, t, r, n, o, a, i, l, s, p) {
      return t + c(n ? s ? "strong" : "em" : o ? s ? "s" : "sub" : a ? "sup" : i ? "small" : l ? "big" : "code", u(p));
    });
  }

  function p(e) {
    return e.replace(t, "$1");
  }

  var d = [],
      m = 0;
  return e = "\n" + e + "\n", s(/</g, "&lt;"), s(/>/g, "&gt;"), s(/\t|\r|\uf8ff/g, "  "), e = function e(t) {
    return t.replace(r, function (t, r) {
      return c("blockquote", e(u(r.replace(/^ *&gt; */gm, ""))));
    });
  }(e), s(/^([*\-=_] *){3,}$/gm, "<hr/>"), e = function e(t) {
    return t.replace(n, function (t, r, n, o, a, i) {
      var l = c("li", u(i.split(RegExp("\n ?" + r + "(?:(?:\\d+|[a-zA-Z])[.)]|[*\\-+]) +", "g")).map(e).join("</li><li>")));
      return "\n" + (n ? '<ol start="' + (o ? n + '">' : parseInt(n, 36) - 9 + '" style="list-style-type:' + (a ? "low" : "upp") + 'er-alpha">') + l + "</ol>" : c("ul", l));
    });
  }(e), s(/<\/(ol|ul)>\n\n<\1>/g, ""), s(/\n((```|~~~).*\n?([^]*?)\n?\2|(( {4}.*?\n)+))/g, function (e, t, r, n, o) {
    return d[--m] = c("pre", c("code", n || o.replace(/^ {4}/gm, ""))), m + "";
  }), s(/((!?)\[(.*?)\]\((.*?)( ".*")?\)|\\([\\`*_{}\[\]()#+\-.!~]))/g, function (e, t, r, n, o, a, i) {
    return d[--m] = i || (r ? o ? '<img src="' + _$.escapeHTML(o) + '" alt="' + _$.escapeHTML(n) + '"/>' : t : /^https?:\/\//g.test(o) ? '<a href="' + _$.escapeHTML(o) + '">' + p(u(n)) + "</a>" : t), m + "";
  }), s(/\n(( *\|.*?\| *\n)+)/g, function (e, t) {
    var r = t.match(a)[1];
    return "\n" + c("table", t.replace(i, function (e, t) {
      return e == r ? "" : c("tr", e.replace(l, function (e, n, o) {
        return o ? c(r && !t ? "th" : "td", p(u(n || ""))) : "";
      }));
    }));
  }), s(/(?=^|>|\n)([>\s]*?)(#{1,6}) (.*?)( #*)? *(?=\n|$)/g, function (e, t, r, n) {
    return t + c("h" + r.length, p(u(n)));
  }), s(/(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g, function (e, t) {
    return c("p", p(u(t)));
  }), s(/-\d+\uf8ff/g, function (e) {
    return d[parseInt(e)];
  }), e.trim();
};
export let syllables = (e = req("string", "word")) => {
  var t = 0;
  (e = e.toLowerCase()).length > 3 && "some" == e.substring(0, 4) && (e = e.replace("some", ""), t++);
  var r = (e = (e = e.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, "")).replace(/^y/, "")).match(/[aeiouy]{1,2}/g);
  if (console.log(r), r) return r.length + t;
};
export let titleCase = (e = req("string", "string")) => e.toLowerCase().split(" ").map((e, t) => ["at", "by", "for", "in", "of", "off", "on", "out", "to", "up", "as", "if", "but", "per", "via", "for", "and", "nor", "but", "or", "yet", "so", "the", "a", "an"].includes(e) && 0 != t ? e : String.fromCodePoint(e.codePointAt(0)).toUpperCase() + e.slice(e.codePointAt(0) > 65535 ? 2 : 1)).join(" ");
export let capitalize = (e = req("string", "string")) => String.fromCodePoint(e.codePointAt(0)).toUpperCase() + e.slice(e.codePointAt(0) > 65535 ? 2 : 1);
export let replaceBetween = (e = req("string", "string"), t = req("number", "start"), r = req("number", "end"), n = req("string", "replace with")) => e.substring(0, t) + n + e.substring(r);
export let escapeHTML = (e = req("string")) => e.replace(/[&<>'"]/g, e => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
})[e] || e);
export let unescapeHTML = (e = req("string")) => e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, e => ({
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&#39;": "'",
  "&quot;": '"'
})[e] || e);
export let previousPage = () => (node(), document.referrer || window.location.href);
export let preload = {
  init: () => {
    window.load = load, window.show = show, [...document.querySelectorAll("a")].forEach(e => {
      e.addEventListener("click", t => {
        t.preventDefault(), show(e.href);
      }), e.addEventListener("mouseenter", t => {
        load(e.href);
      });
    });
  },
  load: function (e) {
    return new Promise(r => {
      if (function (e) {
        try {
          return !e.startsWith("http://") && !e.startsWith("https://") || new URL(e).hostname === window.location.hostname;
        } catch (e) {
          return !1;
        }
      }(e) && !document.getElementById(t(e))) {
        var n = document.createElement("iframe");
        n.src = e, document.documentElement.appendChild(n), n.id = t(e), n.classList.add("preload"), n.onload = r, _$.addStyles(n, {
          background: "transparent",
          width: "100vw",
          height: "100vh",
          padding: "0",
          margin: "0",
          display: "none",
          border: "none"
        });
      }
    });

    function t(e) {
      return "preload_" + function (e, t = 0) {
        let r = 3735928559 ^ t,
            n = 1103547991 ^ t;

        for (let t, o = 0; o < e.length; o++) t = e.charCodeAt(o), r = Math.imul(r ^ t, 2654435761), n = Math.imul(n ^ t, 1597334677);

        return r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & n) + (r >>> 0);
      }(e).toString(16);
    }
  },
  show: async function (e) {
    if (!function (e) {
      try {
        return !e.startsWith("http://") && !e.startsWith("https://") || new URL(e).hostname === window.location.hostname;
      } catch (e) {
        return !1;
      }
    }(e)) return void (window.location.href = e);
    document.getElementById(n(e)) || (await _$.preload.load(e)), history.pushState({}, e, e), document.body && document.body.remove();
    let t = document.getElementById(n(e));
    t.style.display = "block";
    let r = t.contentDocument;

    function n(e) {
      return "preload_" + function (e, t = 0) {
        let r = 3735928559 ^ t,
            n = 1103547991 ^ t;

        for (let t, o = 0; o < e.length; o++) t = e.charCodeAt(o), r = Math.imul(r ^ t, 2654435761), n = Math.imul(n ^ t, 1597334677);

        return r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & n) + (r >>> 0);
      }(e).toString(16);
    }

    Array.from(r.querySelectorAll("a")).forEach(e => {
      e.addEventListener("click", r => {
        r.preventDefault(), _$.preload.show.call(window.parent, e.href), t.remove();
      }), e.addEventListener("mouseenter", t => {
        _$.preload.load.call(window.parent, e.href);
      });
    });
  }
};
export let tag = (e = e => e, t = e => e) => (r, ...n) => {
  let o = [];
  n.push("");

  for (let a = 0; a < r.length; a++) o.push(t(r[a]), e(n[a]));

  return o.join("");
};
export let resize = async (e = req("string", "html"), t, r) => {
  node(), e = e.replace(/^(?:http|https)\:\/\//, "");
  let n = new Image();
  n.src = await _$.imageToData("https://cors.explosionscratc.repl.co/" + e), await new Promise(e => n.onload = e);
  let o = document.createElement("canvas"),
      a = o.getContext("2d");
  return o.width = t < 1 || !t ? n.width : t, o.height = r < 1 || !t ? n.height : r, a.drawImage(n, 0, 0, o.width, o.height), o.toDataURL(0, 0, o.width, o.height);
};
export let htmlToImage = (e = req("string", "html string"), {
  x: t = 0,
  y: r = 0,
  width: n = 300,
  height: o = 400
} = {}) => {
  node();
  let a = document.createElement("canvas");
  a.width = n, a.height = o;
  var i = a.getContext("2d");
  return new Promise(l => {
    var s = function (e) {
      var t = document.implementation.createHTMLDocument("");
      return t.write(e), t.documentElement.setAttribute("xmlns", t.documentElement.namespaceURI), e = new XMLSerializer().serializeToString(t.body);
    }(e);

    s = s.replace(/\#/g, "%23");
    var c = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${o}"><foreignObject width="100%" height="100%">${s}</foreignObject></svg>`,
        u = new Image();
    u.onload = function () {
      i.drawImage(u, t, r, n, o), l(a.toDataURL());
    }, u.src = c;
  });
};

let callbackify = (e = req("function", "function")) => (t, ...r) => e(...r).then(t).catch(errCallback),
    promisify = (e = req("function"), t = 0) => (...r) => new Promise((n, o) => {
  try {
    r.splice(t, 0, n), e(...r);
  } catch (e) {
    o(e);
  }
});

export let race = (e = req("function"), t = req("number", "timeout"), r) => Promise.race(["function" == typeof e ? e() : e, new Promise((e, n) => setTimeout(() => r || n(new Error("Promise timed out (Bijou.js _$.race function)")), t))]);
export let typeOf = (e = req("any", "any"), t = !0) => t ? Object.prototype.toString.call(e).split(" ")[1].replace(/]$/, "").toLowerCase() : Object.prototype.toString.call(e).split(" ")[1].replace(/]$/, "");
export let injectCSS = (e = req("string", "css")) => {
  node();
  let t = document.createElement("style");
  return t.setAttribute("type", "text/css"), t.innerText = e, document.head.appendChild(t), t;
};
export let mobileOrDesktop = () => (node(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "mobile" : "desktop");
export let playSection = (e = req("HTMLMediaElement", "audio"), t = req("number", "start"), r = req("number", "stop")) => {
  let n = e.cloneNode(!0);
  return n.currentTime = t, n.play(), n.int = setInterval(function () {
    n.currentTime > r && (n.pause(), clearInterval(n.int));
  }, 10), n;
};
export let formatHTML = (e = req("string", "html")) => {
  var t = "",
      r = "";
  return e.split(/>\s*</).forEach(function (e) {
    e.match(/^\/\w/) && (r = r.substring("\t".length)), t += r + "<" + e + ">\r\n", e.match(/^<?\w[^>]*[^\/]$/) && !e.startsWith("input") && (r += "\t");
  }), t.substring(1, t.length - 3);
};
export let getJSON = (e = req("string", "url"), t = () => {}) => (node(), new Promise((r, n) => {
  fetch(e).then(e => e.json()).then(e => {
    t(e), r(e);
  }).catch(e => {
    throw n(e), new Error(e.stack);
  });
}));
export let getHTML = (e = req("string", "url"), t = () => {}) => (node(), new Promise((r, n) => {
  fetch(e).then(e => e.text()).then(e => {
    t(_$.parseHTML(e)), r(_$.parseHTML(e));
  }).catch(e => {
    throw n(e.stack), new Error(e.stack);
  });
}));
export let preloadImage = (...e) => {
  req("string", "url arguments", ![...e].length);
  let t = [];

  for (var r = 0; r < e.length; r++) t[r] = new Image(), t[r].src = e[r];

  return t;
};
export let saveBlob = (e = req("blob", "blob"), t = "output.txt") => {
  node();
  var r = document.createElement("a");
  document.body.appendChild(r), r.style = "display: none";
  var n = window.URL.createObjectURL(e);
  return r.href = n, r.download = t, r.click(), window.URL.revokeObjectURL(n), e;
};
export let requestInterval = function (e = req("function", "function"), t = req("number", "delay")) {
  node();

  var r = window.requestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  },
      n = new Date().getTime(),
      o = {};

  return o.value = r(function a() {
    o.value = r(a), new Date().getTime() - n >= t && (e.call(), n = new Date().getTime());
  }), o;
};
export let loadScript = (e = req("string", "url"), t = () => {}, r = {}, n = !1) => {
  if (node(), !n || !document.querySelector(`script[src="${e}"]`)) return new Promise((n, o) => {
    var a = document.createElement("script");
    a.type = "text/javascript";
    let i = Object.keys(r);
    _$.each(i, e => {
      a.setAttribute(e, r[e]);
    }), a.readyState ? a.onreadystatechange = function () {
      "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, t(), n());
    } : a.onload = function () {
      t(), n();
    }, a.src = e, document.getElementsByTagName("head")[0].appendChild(a);
  });
};
export let imageToData = async (e = req("string", "url"), t = () => {}) => (node(), new Promise(async (r, n) => {
  let o = await fetch(e).then(e => e.blob()),
      a = await new Promise(e => {
    let t = new FileReader();
    t.onload = () => e(t.result), t.readAsDataURL(o);
  });
  t(a), r(a);
}));
export let cookies = {
  setItem: (e = req("string", "name"), t = req("string", "value"), r = 1e3) => {
    node();
    var n = "";

    if (r) {
      var o = new Date();
      o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3), n = "; expires=" + o.toUTCString();
    }

    document.cookie = e + "=" + (t || "") + n + "; path=/";
  },
  getItem: (e = req("string", "name")) => {
    node();

    for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var o = r[n]; " " == o.charAt(0);) o = o.substring(1, o.length);

      if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
    }

    return null;
  },
  removeItem: (e = req("string", "name")) => (node(), document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", document.cookie)
};
export let regex = {
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  name: /^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?(?:[a-zA-Z]{1,})?)/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  link: /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,
  strongPassword: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
  moderatePassword: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
  ipv4: /^ (([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2}| 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3 } ([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5]) $ /,
  ipv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
  ip: / ((^\s*((([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2} | 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3}([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5])) \s * $)| (^\s * ((([0 - 9A - Fa - f]{ 1, 4 }:) { 7 } ([0 - 9A - Fa - f]{ 1, 4 }|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 6 } (: [0 - 9A - Fa - f]{ 1, 4 }| ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 5 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 2 })|: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 4 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 3 })| ((: [0 - 9A - Fa - f]{ 1, 4 })?: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 3 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 4 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 2 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 2 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 5 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 3 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 1 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 6 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 4 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (: (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 7 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 5 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))) (%.+) ?\s * $)) /,
  socialSecurity: /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/,
  hex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  zipCode: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
  simplePhone: /^\+?[\d\s]{3,}$/,
  visaCredit: /^4[0–9]{12}(?:[0–9]{3})?$/,
  expressCredit: /^3[47][0–9]{13}$/,
  mastercardCredit: /^(?:5[1–5][0–9]{2}|222[1–9]|22[3–9][0–9]|2[3–6][0–9]{2}|27[01][0–9]|2720)[0–9]{12}$/,
  discoverCredit: /^6(?:011|5[0–9]{2})[0–9]{12}$/
};
export let jsonToCsv = (e = req("array", "array"), t = req("number", "columns"), r = ",") => [t.join(r), ...e.map(e => t.reduce((t, n) => `${t}${t.length ? r : ""}"${e[n] ? e[n] : ""}"`, ""))].join("\n");
export let arrayToCSV = (e = req("array", "array"), t = ",") => e.map(e => e.map(e => isNaN(e) ? `"${e.replace(/"/g, '""')}"` : e).join(t)).join("\n");
export let notify = async (e = req("string", "text"), t = req("string", "body"), r) => {
  if (node(), !window.Notification) throw new Error("browser does not support notifications.");
  if ("granted" !== Notification.permission) Notification.requestPermission().then(function (n) {
    if ("granted" !== n) throw new Error("User blocked notifications");
    new Notification(e, {
      body: t,
      icon: r
    });
  }).catch(function (e) {
    throw e;
  });else new Notification(e, {
    body: t,
    icon: r
  });
};
export let copy = (e = req("string", "string")) => {
  node();
  const t = document.createElement("textarea");
  t.value = e, t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t);
  const r = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
  return t.select(), document.execCommand("copy"), document.body.removeChild(t), r && (document.getSelection().removeAllRanges(), document.getSelection().addRange(r)), e;
};
export let browser = () => {
  node();
  var e = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
      t = "undefined" != typeof InstallTrigger,
      r = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && window.safari.pushNotification).toString(),
      n = !!document.documentMode,
      o = !n && !!window.StyleMedia,
      a = !(!window.chrome || !window.chrome.webstore && !window.chrome.runtime),
      i = a && -1 != navigator.userAgent.indexOf("Edg"),
      l = (a || e) && !!window.CSS;
  return e ? "Opera" : t ? "Firefox" : r ? "Safari" : o ? "Edge" : n ? "Internet Explorer" : a ? "Chrome" : i ? "Edge Chromium" : l ? "Blink" : void 0;
};
export let serializeForm = (e = req("HTMLFormElement", "form")) => (node(), Array.from(new FormData(e), e => e.map(encodeURIComponent).join("=")).join("&"));
export let soundex = (e = req("string", "word")) => {
  var t = e.toLowerCase().split(""),
      r = t.shift(),
      n = {
    a: "",
    e: "",
    i: "",
    o: "",
    u: "",
    b: 1,
    f: 1,
    p: 1,
    v: 1,
    c: 2,
    g: 2,
    j: 2,
    k: 2,
    q: 2,
    s: 2,
    x: 2,
    z: 2,
    d: 3,
    t: 3,
    l: 4,
    m: 5,
    n: 5,
    r: 6
  };
  return (r + t.map(function (e, t, r) {
    return n[e];
  }).filter(function (e, t, o) {
    return 0 === t ? e !== n[r] : e !== o[t - 1];
  }).join("") + "000").slice(0, 4).toUpperCase();
};
export let prototype = (e = {
  overwrite: !0,
  tryCatch: !1
}) => {
  function t(t, r, n) {
    let o = n || t ? t.name : "noNameHehe124672463467432376453",
        a = void 0 !== e.overwrite && !1 !== e.overwrite;
    r.prototype.hasOwnProperty(o) && !a || Object.defineProperty(r.prototype, o, {
      value: function (...r) {
        if (!0 !== (e.try || e.tryCatch || e.catch || e.catchErrors)) {
          return t(this, ...r);
        }

        try {
          return t(this, ...r);
        } catch (e) {
          return e;
        }
      }
    });
  }

  t(_$.addDaysToDate, Date, "addDays"), t(_$.addEventListeners, Element), t(_$.addMinutesToDate, Date, "addMinutes"), t(_$.addStyles, Element), t(_$.animate, Number), t(_$.arrayDiff, Array, "diff"), t(_$.arrayToCSV, Array, "toCSV"), t(_$.attributes, Element), t(_$.averageBy, Array), t(_$.blendColors, String), t(_$.byteSize, String), t(_$.camelCase, String), t(_$.capitalize, String), t(_$.clone, Object), t(_$.compStyle, Element), t(_$.composeFunction, Function, "compose"), t(_$.contains, Array), t(_$.copy, String), t(_$.count, Array), t(_$.create, String), t(_$.createElement, String), t(_$.curryFunction, Function, "curry"), t(_$.dayName, Date), t(_$.debounce, Function), t(_$.deburr, String), t(_$.disableRightClick, Element), t(_$.dispatch, Object), t(_$.drag, Element), t(_$.each, Array), t(_$.editDistance, String), t(_$.elementContains, Element, "contains"), t(_$.equals, Date), t(_$.equals, Object), t(_$.escapeHTML, String), t(_$.factorial, Number), t(_$.fastestFunction, Array), t(_$.flatten, Array), t(_$.flattenObj, Object, "flatten"), t(_$.forTemplateLiteral, Array), t(_$.formToObject, Element, "toObject"), t(_$.formatHTML, String), t(_$.formatNumber, Number), t(_$.fullScreen, Element), t(_$.gcd, Array), t(_$.hash, String), t(_$.hashString, String), t(_$.imageToData, String), t(_$.inPartialView, Element), t(_$.inView, Element), t(_$.inlineCSS, Element), t(_$.isAsync, Function), t(_$.isDateValid, Date, "valid"), t(_$.isPrime, Number), t(_$.jaroDistance, String), t(_$.juxt, Function), t(_$.lightOrDark, String), t(_$.lightenColor, String), t(_$.limitArgs, Function), t(_$.listen, Object), t(_$.luhnCheck, Number), t(_$.mapObjectKeys, Object, "mapKeys"), t(_$.mapObjectValues, Object, "map"), t(_$.mapString, String, "map"), t(_$.markDownToHTML, String), t(_$.memoize, Function), t(_$.merge, Object), t(_$.nFlatten, Array), t(_$.observeMutations, Element, "observe"), t(_$.onOutsideClick, Element), t(_$.onScrollStop, Element), t(_$.parents, Element), t(_$.parseHTML, String), t(_$.playSection, Element), t(_$.prefixCSS, String), t(_$.preloadImage, String), t(_$.primesTo, Number), t(_$.querySelector, Element, "genQuerySelector"), t(_$.random, Number), t(_$.range, Number), t(_$.remove, Array), t(_$.removeComments, String), t(_$.removeTags, String), t(_$.renderElement, Object), t(_$.replaceBetween, String), t(_$.replaceMultiple, Object), t(_$.replaceText, Element), t(_$.rgbToHex, String), t(_$.runAsync, Function), t(_$.sanitize, String), t(_$.saveBlob, Blob), t(_$.scrambleString, String, "scramble"), t(_$.seedRandom, String), t(_$.serializeForm, Element, "serialize"), t(_$.shuffleArray, Array, "shuffle"), t(_$.sortObj, Object, "sort"), t(_$.sortTable, Element, "sort"), t(_$.sortTableBy, Element), t(_$.speak, String), t(_$.splice, String), t(_$.spread, Function), t(_$.syllables, String), t(_$.textNodes, Element), t(_$.throttle, Function), t(_$.tilt, Element), t(_$.timeFunction, Function), t(_$.titleCase, String), t(_$.unCamelCase, String), t(_$.unescapeHTML, String), t(_$.unionArrays, Array, "union"), t(_$.uniqueArray, Array, "unique"), t(_$.urlQuery, String), t(_$.widows, String);
};
let _temp = {
  addDaysToDate: addDaysToDate,
  addEventListeners: addEventListeners,
  addMinutesToDate: addMinutesToDate,
  addStyles: addStyles,
  animate: animate,
  arrayDiff: arrayDiff,
  arrayToCSV: arrayToCSV,
  attributes: attributes,
  averageBy: averageBy,
  blendColors: blendColors,
  browser: browser,
  byteSize: byteSize,
  camelCase: camelCase,
  capitalize: capitalize,
  clone: clone,
  compStyle: compStyle,
  composeFunction: composeFunction,
  contains: contains,
  context: context,
  cookies: cookies,
  copy: copy,
  count: count,
  create: create,
  createElement: createElement,
  curryFunction: curryFunction,
  dayName: dayName,
  debounce: debounce,
  deburr: deburr,
  diff: diff,
  disableRightClick: disableRightClick,
  dispatch: dispatch,
  drag: drag,
  each: each,
  ease: ease,
  editDistance: editDistance,
  elementContains: elementContains,
  elementReady: elementReady,
  elementSiblings: elementSiblings,
  equals: equals,
  escapeHTML: escapeHTML,
  factorial: factorial,
  fastestFunction: fastestFunction,
  flatten: flatten,
  flattenObj: flattenObj,
  forTemplateLiteral: forTemplateLiteral,
  formToObject: formToObject,
  formatHTML: formatHTML,
  formatMilliseconds: formatMilliseconds,
  formatNumber: formatNumber,
  fullScreen: fullScreen,
  gcd: gcd,
  getHTML: getHTML,
  getImages: getImages,
  getJSON: getJSON,
  hash: hash,
  hashString: hashString,
  hexToRGB: hexToRGB,
  htmlToImage: htmlToImage,
  hub: hub,
  imageToData: imageToData,
  inPartialView: inPartialView,
  inView: inView,
  injectCSS: injectCSS,
  inlineCSS: inlineCSS,
  isAsync: isAsync,
  isDateValid: isDateValid,
  isPrime: isPrime,
  jaroDistance: jaroDistance,
  jsonToCsv: jsonToCsv,
  juxt: juxt,
  lightOrDark: lightOrDark,
  lightenColor: lightenColor,
  limitArgs: limitArgs,
  listen: listen,
  loadScript: loadScript,
  luhnCheck: luhnCheck,
  mapObjectKeys: mapObjectKeys,
  mapObjectValues: mapObjectValues,
  mapString: mapString,
  markdownToHTML: markdownToHTML,
  memoize: memoize,
  merge: merge,
  mobileOrDesktop: mobileOrDesktop,
  nFlatten: nFlatten,
  notify: notify,
  observeMutations: observeMutations,
  onOutsideClick: onOutsideClick,
  onScrollStop: onScrollStop,
  parents: parents,
  parseCookie: parseCookie,
  parseHTML: parseHTML,
  playSection: playSection,
  prefixCSS: prefixCSS,
  preloadImage: preloadImage,
  previousPage: previousPage,
  primesTo: primesTo,
  prototype: prototype,
  querySelector: querySelector,
  race: race,
  random: random,
  randomColor: randomColor,
  range: range,
  regex: regex,
  remove: remove,
  removeComments: removeComments,
  removeTags: removeTags,
  renderElement: renderElement,
  replaceBetween: replaceBetween,
  replaceMultiple: replaceMultiple,
  replaceSelection: replaceSelection,
  replaceText: replaceText,
  requestInterval: requestInterval,
  resize: resize,
  rgbToHex: rgbToHex,
  ripple: ripple,
  runAsync: runAsync,
  sanitize: sanitize,
  saveBlob: saveBlob,
  scrambleString: scrambleString,
  seedRandom: seedRandom,
  serializeForm: serializeForm,
  shuffleArray: shuffleArray,
  sleep: sleep,
  sortObj: sortObj,
  sortTable: sortTable,
  sortTableBy: sortTableBy,
  soundex: soundex,
  speak: speak,
  splice: splice,
  spliceArrayBuffer: spliceArrayBuffer,
  spread: spread,
  syllables: syllables,
  tag: tag,
  textNodes: textNodes,
  throttle: throttle,
  tilt: tilt,
  timeFunction: timeFunction,
  titleCase: titleCase,
  typeOf: typeOf,
  unCamelCase: unCamelCase,
  unescapeHTML: unescapeHTML,
  unionArrays: unionArrays,
  uniqueArray: uniqueArray,
  urlQuery: urlQuery,
  uuid: uuid,
  waitUntil: waitUntil,
  widows: widows
};
_temp = sortObj(_temp);
export default _temp;
isNode || (window._$ = _temp);
export const _$ = _temp;
if (isNode) try {
  module.exports = _temp;
} catch (e) {
  console.error(e);
}