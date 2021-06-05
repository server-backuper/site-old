/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/ripplet.js@1.1.0/es/ripplet.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
export var defaultOptions = {
  className: "",
  color: "currentcolor",
  opacity: .1,
  spreadingDuration: ".4s",
  spreadingDelay: "0s",
  spreadingTimingFunction: "linear",
  clearing: !0,
  clearingDuration: "1s",
  clearingDelay: "0s",
  clearingTimingFunction: "ease-in-out",
  centered: !1,
  appendTo: "auto"
};

var containerContainerTemplate,
    target2container2ripplet = new Map(),
    findElementAppendTo = function (e, t) {
  if (t && "auto" !== t) return "target" === t ? e : "parent" === t ? e.parentElement : document.querySelector(t);

  for (; e && (e instanceof SVGElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement || e instanceof HTMLImageElement || e instanceof HTMLHRElement);) e = e.parentElement;

  return e;
};

function ripplet(e, t) {
  var n = e.currentTarget,
      r = e.clientX,
      i = e.clientY;

  if (n instanceof Element) {
    var a = t ? Object.keys(defaultOptions).reduce(function (e, n) {
      return e[n] = t.hasOwnProperty(n) ? t[n] : defaultOptions[n], e;
    }, {}) : defaultOptions;

    if (!containerContainerTemplate) {
      var o = document.createElement("div");
      o.innerHTML = '<div style="float:left;position:relative;isolation:isolate;pointer-events:none"><div style="position:absolute;overflow:hidden;transform-origin:0 0"><div style="border-radius:50%;transform:scale(0)"></div></div></div>', containerContainerTemplate = o.firstChild;
    }

    var l = n.getBoundingClientRect();
    if (a.centered && "false" !== a.centered) r = l.left + .5 * l.width, i = l.top + .5 * l.height;else {
      if ("number" != typeof r || "number" != typeof i) return;
      var p = 1 / (+getComputedStyle(document.body).zoom || 1);
      r *= p, i *= p;
    }

    var c = getComputedStyle(n),
        d = function (e) {
      var t = e && /^var\((--.+)\)$/.exec(e);
      return t ? c.getPropertyValue(t[1]) : e;
    },
        s = findElementAppendTo(n, a.appendTo),
        f = s.appendChild(containerContainerTemplate.cloneNode(!0));

    f.style.zIndex = (+c.zIndex || 0) + 1;
    var u = f.firstChild,
        g = u.getBoundingClientRect(),
        m = u.style;
    m.top = l.top - g.top + "px", m.left = l.left - g.left + "px", m.width = l.width + "px", m.height = l.height + "px", m.opacity = d(a.opacity), m.borderTopLeftRadius = c.borderTopLeftRadius, m.borderTopRightRadius = c.borderTopRightRadius, m.borderBottomLeftRadius = c.borderBottomLeftRadius, m.borderBottomRightRadius = c.borderBottomRightRadius, m.clipPath = c.clipPath, g = u.getBoundingClientRect();
    var h = l.width / g.width,
        y = l.height / g.height;
    m.transform = "scale(" + h + "," + y + ") translate(" + (l.left - g.left) + "px," + (l.top - g.top) + "px)";
    var v = Math.max(r - l.left, l.right - r),
        T = Math.max(i - l.top, l.bottom - i),
        x = Math.sqrt(v * v + T * T),
        E = u.firstChild,
        R = E.style,
        b = d(a.color);
    if (R.backgroundColor = /^currentcolor$/i.test(b) ? c.color : b, E.className = a.className, R.width = R.height = x + x + "px", "rtl" === getComputedStyle(s).direction ? R.marginRight = l.right - r - x + "px" : R.marginLeft = r - l.left - x + "px", R.marginTop = i - l.top - x + "px", R.transition = "transform " + d(a.spreadingDuration) + " " + d(a.spreadingTimingFunction) + " " + d(a.spreadingDelay) + ",opacity " + d(a.clearingDuration) + " " + d(a.clearingTimingFunction) + " " + d(a.clearingDelay), E.addEventListener("transitionend", function (e) {
      "opacity" === e.propertyName && f.parentElement && f.parentElement.removeChild(f);
    }), a.clearing && "false" !== a.clearing) R.opacity = "0";else {
      var C = target2container2ripplet.get(n);
      C || target2container2ripplet.set(n, C = new Map()), C.set(f, E);
    }
    return E.offsetWidth, R.transform = "", f;
  }
}

ripplet.clear = function (e, t) {
  if (e) {
    var n = target2container2ripplet.get(e);
    if (n) if (t) {
      var r = n.get(t);
      r && (r.style.opacity = "0"), n.delete(t), 0 === n.size && target2container2ripplet.delete(e);
    } else n.forEach(function (e) {
      return e.style.opacity = "0";
    }), target2container2ripplet.delete(e);
  } else target2container2ripplet.forEach(function (e) {
    return e.forEach(function (e) {
      return e.style.opacity = "0";
    });
  }), target2container2ripplet.clear();
}, ripplet.defaultOptions = defaultOptions, ripplet._ripplets = target2container2ripplet;
export default ripplet;