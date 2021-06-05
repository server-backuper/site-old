/**
 * Bundled by jsDelivr using Rollup v2.32.0 and Terser v5.3.5.
 * Original file: /npm/preact@10.5.13/dist/preact.module.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e,
    n,
    t,
    _,
    l,
    o,
    r = {},
    i = [],
    u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function s(e, n) {
  for (var t in n) e[t] = n[t];

  return e;
}

function c(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}

function f(e, n, t) {
  var _,
      l,
      o,
      r = arguments,
      i = {};

  for (o in n) "key" == o ? _ = n[o] : "ref" == o ? l = n[o] : i[o] = n[o];

  if (arguments.length > 3) for (t = [t], o = 3; o < arguments.length; o++) t.push(r[o]);
  if (null != t && (i.children = t), "function" == typeof e && null != e.defaultProps) for (o in e.defaultProps) void 0 === i[o] && (i[o] = e.defaultProps[o]);
  return p(e, i, _, l, null);
}

function p(n, t, _, l, o) {
  var r = {
    type: n,
    props: t,
    key: _,
    ref: l,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++e.__v : o
  };
  return null != e.vnode && e.vnode(r), r;
}

function a() {
  return {
    current: null
  };
}

function d(e) {
  return e.children;
}

function h(e, n) {
  this.props = e, this.context = n;
}

function v(e, n) {
  if (null == n) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;

  for (var t; n < e.__k.length; n++) if (null != (t = e.__k[n]) && null != t.__e) return t.__e;

  return "function" == typeof e.type ? v(e) : null;
}

function y(e) {
  var n, t;

  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++) if (null != (t = e.__k[n]) && null != t.__e) {
      e.__e = e.__c.base = t.__e;
      break;
    }

    return y(e);
  }
}

function m(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !k.__r++ || l !== e.debounceRendering) && ((l = e.debounceRendering) || _)(k);
}

function k() {
  for (var e; k.__r = t.length;) e = t.sort(function (e, n) {
    return e.__v.__b - n.__v.__b;
  }), t = [], e.some(function (e) {
    var n, t, _, l, o, r;

    e.__d && (o = (l = (n = e).__v).__e, (r = n.__P) && (t = [], (_ = s({}, l)).__v = l.__v + 1, D(r, l, _, n.__n, void 0 !== r.ownerSVGElement, null != l.__h ? [o] : null, t, null == o ? v(l) : o, l.__h), T(t, l), l.__e != o && y(l)));
  });
}

function g(e, n, t, _, l, o, u, s, c, f) {
  var a,
      h,
      y,
      m,
      k,
      g,
      C,
      P = _ && _.__k || i,
      S = P.length;

  for (t.__k = [], a = 0; a < n.length; a++) if (null != (m = t.__k[a] = null == (m = n[a]) || "boolean" == typeof m ? null : "string" == typeof m || "number" == typeof m || "bigint" == typeof m ? p(null, m, null, null, m) : Array.isArray(m) ? p(d, {
    children: m
  }, null, null, null) : m.__b > 0 ? p(m.type, m.props, m.key, null, m.__v) : m)) {
    if (m.__ = t, m.__b = t.__b + 1, null === (y = P[a]) || y && m.key == y.key && m.type === y.type) P[a] = void 0;else for (h = 0; h < S; h++) {
      if ((y = P[h]) && m.key == y.key && m.type === y.type) {
        P[h] = void 0;
        break;
      }

      y = null;
    }
    D(e, m, y = y || r, l, o, u, s, c, f), k = m.__e, (h = m.ref) && y.ref != h && (C || (C = []), y.ref && C.push(y.ref, null, m), C.push(h, m.__c || k, m)), null != k ? (null == g && (g = k), "function" == typeof m.type && null != m.__k && m.__k === y.__k ? m.__d = c = b(m, c, e) : c = x(e, m, y, P, k, c), f || "option" !== t.type ? "function" == typeof t.type && (t.__d = c) : e.value = "") : c && y.__e == c && c.parentNode != e && (c = v(y));
  }

  for (t.__e = g, a = S; a--;) null != P[a] && ("function" == typeof t.type && null != P[a].__e && P[a].__e == t.__d && (t.__d = v(_, a + 1)), W(P[a], P[a]));

  if (C) for (a = 0; a < C.length; a++) N(C[a], C[++a], C[++a]);
}

function b(e, n, t) {
  var _, l;

  for (_ = 0; _ < e.__k.length; _++) (l = e.__k[_]) && (l.__ = e, n = "function" == typeof l.type ? b(l, n, t) : x(t, l, l, e.__k, l.__e, n));

  return n;
}

function C(e, n) {
  return n = n || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function (e) {
    C(e, n);
  }) : n.push(e)), n;
}

function x(e, n, t, _, l, o) {
  var r, i, u;
  if (void 0 !== n.__d) r = n.__d, n.__d = void 0;else if (null == t || l != o || null == l.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(l), r = null;else {
    for (i = o, u = 0; (i = i.nextSibling) && u < _.length; u += 2) if (i == l) break e;

    e.insertBefore(l, o), r = o;
  }
  return void 0 !== r ? r : l.nextSibling;
}

function P(e, n, t, _, l) {
  var o;

  for (o in t) "children" === o || "key" === o || o in n || E(e, o, null, t[o], _);

  for (o in n) l && "function" != typeof n[o] || "children" === o || "key" === o || "value" === o || "checked" === o || t[o] === n[o] || E(e, o, n[o], t[o], _);
}

function S(e, n, t) {
  "-" === n[0] ? e.setProperty(n, t) : e[n] = null == t ? "" : "number" != typeof t || u.test(n) ? t : t + "px";
}

function E(e, n, t, _, l) {
  var o;

  e: if ("style" === n) {
    if ("string" == typeof t) e.style.cssText = t;else {
      if ("string" == typeof _ && (e.style.cssText = _ = ""), _) for (n in _) t && n in t || S(e.style, n, "");
      if (t) for (n in t) _ && t[n] === _[n] || S(e.style, n, t[n]);
    }
  } else if ("o" === n[0] && "n" === n[1]) o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? _ || e.addEventListener(n, o ? U : w, o) : e.removeEventListener(n, o ? U : w, o);else if ("dangerouslySetInnerHTML" !== n) {
    if (l) n = n.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== n && "list" !== n && "form" !== n && "tabIndex" !== n && "download" !== n && n in e) try {
      e[n] = null == t ? "" : t;
      break e;
    } catch (e) {}
    "function" == typeof t || (null != t && (!1 !== t || "a" === n[0] && "r" === n[1]) ? e.setAttribute(n, t) : e.removeAttribute(n));
  }
}

function w(n) {
  this.l[n.type + !1](e.event ? e.event(n) : n);
}

function U(n) {
  this.l[n.type + !0](e.event ? e.event(n) : n);
}

function D(n, t, _, l, o, r, i, u, c) {
  var f,
      p,
      a,
      v,
      y,
      m,
      k,
      b,
      C,
      x,
      P,
      S = t.type;
  if (void 0 !== t.constructor) return null;
  null != _.__h && (c = _.__h, u = t.__e = _.__e, t.__h = null, r = [u]), (f = e.__b) && f(t);

  try {
    e: if ("function" == typeof S) {
      if (b = t.props, C = (f = S.contextType) && l[f.__c], x = f ? C ? C.props.value : f.__ : l, _.__c ? k = (p = t.__c = _.__c).__ = p.__E : ("prototype" in S && S.prototype.render ? t.__c = p = new S(b, x) : (t.__c = p = new h(b, x), p.constructor = S, p.render = L), C && C.sub(p), p.props = b, p.state || (p.state = {}), p.context = x, p.__n = l, a = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != S.getDerivedStateFromProps && (p.__s == p.state && (p.__s = s({}, p.__s)), s(p.__s, S.getDerivedStateFromProps(b, p.__s))), v = p.props, y = p.state, a) null == S.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
        if (null == S.getDerivedStateFromProps && b !== v && null != p.componentWillReceiveProps && p.componentWillReceiveProps(b, x), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(b, p.__s, x) || t.__v === _.__v) {
          p.props = b, p.state = p.__s, t.__v !== _.__v && (p.__d = !1), p.__v = t, t.__e = _.__e, t.__k = _.__k, t.__k.forEach(function (e) {
            e && (e.__ = t);
          }), p.__h.length && i.push(p);
          break e;
        }

        null != p.componentWillUpdate && p.componentWillUpdate(b, p.__s, x), null != p.componentDidUpdate && p.__h.push(function () {
          p.componentDidUpdate(v, y, m);
        });
      }
      p.context = x, p.props = b, p.state = p.__s, (f = e.__r) && f(t), p.__d = !1, p.__v = t, p.__P = n, f = p.render(p.props, p.state, p.context), p.state = p.__s, null != p.getChildContext && (l = s(s({}, l), p.getChildContext())), a || null == p.getSnapshotBeforeUpdate || (m = p.getSnapshotBeforeUpdate(v, y)), P = null != f && f.type === d && null == f.key ? f.props.children : f, g(n, Array.isArray(P) ? P : [P], t, _, l, o, r, i, u, c), p.base = t.__e, t.__h = null, p.__h.length && i.push(p), k && (p.__E = p.__ = null), p.__e = !1;
    } else null == r && t.__v === _.__v ? (t.__k = _.__k, t.__e = _.__e) : t.__e = A(_.__e, t, _, l, o, r, i, c);

    (f = e.diffed) && f(t);
  } catch (n) {
    t.__v = null, (c || null != r) && (t.__e = u, t.__h = !!c, r[r.indexOf(u)] = null), e.__e(n, t, _);
  }
}

function T(n, t) {
  e.__c && e.__c(t, n), n.some(function (t) {
    try {
      n = t.__h, t.__h = [], n.some(function (e) {
        e.call(t);
      });
    } catch (n) {
      e.__e(n, t.__v);
    }
  });
}

function A(e, n, t, _, l, o, u, s) {
  var f,
      p,
      a,
      d,
      h = t.props,
      v = n.props,
      y = n.type,
      m = 0;
  if ("svg" === y && (l = !0), null != o) for (; m < o.length; m++) if ((f = o[m]) && (f === e || (y ? f.localName == y : 3 == f.nodeType))) {
    e = f, o[m] = null;
    break;
  }

  if (null == e) {
    if (null === y) return document.createTextNode(v);
    e = l ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, v.is && v), o = null, s = !1;
  }

  if (null === y) h === v || s && e.data === v || (e.data = v);else {
    if (o = o && i.slice.call(e.childNodes), p = (h = t.props || r).dangerouslySetInnerHTML, a = v.dangerouslySetInnerHTML, !s) {
      if (null != o) for (h = {}, d = 0; d < e.attributes.length; d++) h[e.attributes[d].name] = e.attributes[d].value;
      (a || p) && (a && (p && a.__html == p.__html || a.__html === e.innerHTML) || (e.innerHTML = a && a.__html || ""));
    }

    if (P(e, v, h, l, s), a) n.__k = [];else if (m = n.props.children, g(e, Array.isArray(m) ? m : [m], n, t, _, l && "foreignObject" !== y, o, u, e.firstChild, s), null != o) for (m = o.length; m--;) null != o[m] && c(o[m]);
    s || ("value" in v && void 0 !== (m = v.value) && (m !== e.value || "progress" === y && !m) && E(e, "value", m, h.value, !1), "checked" in v && void 0 !== (m = v.checked) && m !== e.checked && E(e, "checked", m, h.checked, !1));
  }
  return e;
}

function N(n, t, _) {
  try {
    "function" == typeof n ? n(t) : n.current = t;
  } catch (n) {
    e.__e(n, _);
  }
}

function W(n, t, _) {
  var l, o, r;

  if (e.unmount && e.unmount(n), (l = n.ref) && (l.current && l.current !== n.__e || N(l, null, t)), _ || "function" == typeof n.type || (_ = null != (o = n.__e)), n.__e = n.__d = void 0, null != (l = n.__c)) {
    if (l.componentWillUnmount) try {
      l.componentWillUnmount();
    } catch (n) {
      e.__e(n, t);
    }
    l.base = l.__P = null;
  }

  if (l = n.__k) for (r = 0; r < l.length; r++) l[r] && W(l[r], t, _);
  null != o && c(o);
}

function L(e, n, t) {
  return this.constructor(e, t);
}

function M(n, t, _) {
  var l, o, u;
  e.__ && e.__(n, t), o = (l = "function" == typeof _) ? null : _ && _.__k || t.__k, u = [], D(t, n = (!l && _ || t).__k = f(d, null, [n]), o || r, r, void 0 !== t.ownerSVGElement, !l && _ ? [_] : o ? null : t.firstChild ? i.slice.call(t.childNodes) : null, u, !l && _ ? _ : o ? o.__e : t.firstChild, l), T(u, n);
}

function F(e, n) {
  M(e, n, F);
}

function H(e, n, t) {
  var _,
      l,
      o,
      r = arguments,
      i = s({}, e.props);

  for (o in n) "key" == o ? _ = n[o] : "ref" == o ? l = n[o] : i[o] = n[o];

  if (arguments.length > 3) for (t = [t], o = 3; o < arguments.length; o++) t.push(r[o]);
  return null != t && (i.children = t), p(e.type, i, _ || e.key, l || e.ref, null);
}

function R(e, n) {
  var t = {
    __c: n = "__cC" + o++,
    __: e,
    Consumer: function (e, n) {
      return e.children(n);
    },
    Provider: function (e) {
      var t, _;

      return this.getChildContext || (t = [], (_ = {})[n] = this, this.getChildContext = function () {
        return _;
      }, this.shouldComponentUpdate = function (e) {
        this.props.value !== e.value && t.some(m);
      }, this.sub = function (e) {
        t.push(e);
        var n = e.componentWillUnmount;

        e.componentWillUnmount = function () {
          t.splice(t.indexOf(e), 1), n && n.call(e);
        };
      }), e.children;
    }
  };
  return t.Provider.__ = t.Consumer.contextType = t;
}

e = {
  __e: function (e, n) {
    for (var t, _, l; n = n.__;) if ((t = n.__c) && !t.__) try {
      if ((_ = t.constructor) && null != _.getDerivedStateFromError && (t.setState(_.getDerivedStateFromError(e)), l = t.__d), null != t.componentDidCatch && (t.componentDidCatch(e), l = t.__d), l) return t.__E = t;
    } catch (n) {
      e = n;
    }

    throw e;
  },
  __v: 0
}, n = function (e) {
  return null != e && void 0 === e.constructor;
}, h.prototype.setState = function (e, n) {
  var t;
  t = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof e && (e = e(s({}, t), this.props)), e && s(t, e), null != e && this.__v && (n && this.__h.push(n), m(this));
}, h.prototype.forceUpdate = function (e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), m(this));
}, h.prototype.render = d, t = [], _ = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, o = 0;
export { h as Component, d as Fragment, H as cloneElement, R as createContext, f as createElement, a as createRef, f as h, F as hydrate, n as isValidElement, e as options, M as render, C as toChildArray };