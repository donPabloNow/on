function initializeSite() {
    "use strict";
    !function () {
        function e() {
            var e = $(".sphere"),
                t = e.height(),
                n = $(window).height(),
                i = (n - t) / 2;
            e.css({
                "margin-top": i + "px"
            });
            var r = $(".hero"),
                o = (n - r.height()) / 2;
            r.css({
                "margin-top": o + "px"
            })
        }

        $(document).ready(e), $(window).resize(e)
    }(), $("#scene").parallax()
}

!function (e, t) {
    var n, i, r = typeof t,
        o = e.location,
        s = e.document,
        a = s.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = p.concat,
        d = p.push,
        h = p.slice,
        m = p.indexOf,
        y = c.toString,
        g = c.hasOwnProperty,
        v = "1.10.2".trim,
        b = function (e, t) {
            return new b.fn.init(e, t, i)
        },
        x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        j = /-([\da-z])/gi,
        L = function (e, t) {
            return t.toUpperCase()
        },
        H = function (e) {
            (s.addEventListener || "load" === e.type || "complete" === s.readyState) && (F(), b.ready())
        },
        F = function () {
            s.addEventListener ? (s.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (s.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
        };

    function M(e) {
        var t = e.length,
            n = b.type(e);
        return !b.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    b.fn = b.prototype = {
        jquery: "1.10.2",
        constructor: b,
        init: function (e, n, i) {
            var r, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e)) || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : s, !0)), N.test(r[1]) && b.isPlainObject(n))
                        for (r in n) b.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                    return this
                }
                if ((o = s.getElementById(r[2])) && o.parentNode) {
                    if (o.id !== r[2]) return i.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = s, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return h.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return b.each(this, e, t)
        },
        ready: function (e) {
            return b.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
        var e, n, i, r, o, s, a = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || b.isFunction(a) || (a = {}), u === l && (a = this, --l); l < u; l++)
            if (null != (o = arguments[l]))
                for (r in o) e = a[r], a !== (i = o[r]) && (c && i && (b.isPlainObject(i) || (n = b.isArray(i))) ? (n ? (n = !1, s = e && b.isArray(e) ? e : []) : s = e && b.isPlainObject(e) ? e : {}, a[r] = b.extend(c, s, i)) : i !== t && (a[r] = i));
        return a
    }, b.extend({
        expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = l), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function (e) {
            if (!0 === e ? !--b.readyWait : !b.isReady) {
                if (!s.body) return setTimeout(b.ready);
                b.isReady = !0, !0 !== e && --b.readyWait > 0 || (n.resolveWith(s, [b]), b.fn.trigger && b(s).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === b.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            var n;
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (b.support.ownLast)
                for (n in e) return g.call(e, n);
            for (n in e) ;
            return n === t || g.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || s;
            var i = N.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = b.buildFragment([e], t, r), r && b(r).remove(), b.merge([], i.childNodes))
        },
        parseJSON: function (t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = b.trim(t)) && k.test(t.replace(S, "@").replace(A, "]").replace(E, "")) ? new Function("return " + t)() : void b.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? i = (new DOMParser).parseFromString(n, "text/xml") : ((i = new ActiveXObject("Microsoft.XMLDOM")).async = "false", i.loadXML(n))
            } catch (e) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), i
        },
        noop: function () {
        },
        globalEval: function (t) {
            t && b.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(D, "ms-").replace(j, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var i = 0,
                r = e.length,
                o = M(e);
            if (n) {
                if (o)
                    for (; i < r && !1 !== t.apply(e[i], n); i++) ;
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (o)
                for (; i < r && !1 !== t.call(e[i], i, e[i]); i++) ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: v && !v.call("\ufeff ") ? function (e) {
            return null == e ? "" : v.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (m) return m.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var i = n.length,
                r = e.length,
                o = 0;
            if ("number" == typeof i)
                for (; o < i; o++) e[r++] = n[o];
            else
                for (; n[o] !== t;) e[r++] = n[o++];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            var i = [],
                r = 0,
                o = e.length;
            for (n = !!n; r < o; r++) n !== !!t(e[r], r) && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var i, r = 0,
                o = e.length,
                s = [];
            if (M(e))
                for (; r < o; r++) null != (i = t(e[r], r, n)) && (s[s.length] = i);
            else
                for (r in e) null != (i = t(e[r], r, n)) && (s[s.length] = i);
            return f.apply([], s)
        },
        guid: 1,
        proxy: function (e, n) {
            var i, r, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (i = h.call(arguments, 2), (r = function () {
                return e.apply(n || this, i.concat(h.call(arguments)))
            }).guid = e.guid = e.guid || b.guid++, r) : t
        },
        access: function (e, n, i, r, o, s, a) {
            var l = 0,
                u = e.length,
                c = null == i;
            if ("object" === b.type(i))
                for (l in o = !0, i) b.access(e, n, l, i[l], !0, s, a);
            else if (r !== t && (o = !0, b.isFunction(r) || (a = !0), c && (a ? (n.call(e, r), n = null) : (c = n, n = function (e, t, n) {
                return c.call(b(e), n)
            })), n))
                for (; l < u; l++) n(e[l], i, a ? r : r.call(e[l], l, n(e[l], i)));
            return o ? e : c ? n.call(e) : u ? n(e[0], i) : s
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        }
    }), b.ready.promise = function (t) {
        if (!n)
            if (n = b.Deferred(), "complete" === s.readyState) setTimeout(b.ready);
            else if (s.addEventListener) s.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
            else {
                s.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
                var i = !1;
                try {
                    i = null == e.frameElement && s.documentElement
                } catch (e) {
                }
                i && i.doScroll && function e() {
                    if (!b.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        F(), b.ready()
                    }
                }()
            }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    }), i = b(s),
        function (e, t) {
            var n, i, r, o, s, a, l, u, c, p, f, d, h, m, y, g, v, x = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = oe(),
                k = oe(),
                E = oe(),
                S = !1,
                A = function (e, t) {
                    return e === t ? (S = !0, 0) : 0
                },
                D = 1 << 31,
                j = {}.hasOwnProperty,
                L = [],
                H = L.pop,
                F = L.push,
                M = L.push,
                q = L.slice,
                O = L.indexOf || function (e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                _ = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                B = R.replace("w", "w#"),
                P = "\\[" + _ + "*(" + R + ")" + _ + "*(?:([*^$|!~]?=)" + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + B + ")|)|)" + _ + "*\\]",
                W = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
                X = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                z = new RegExp("^" + _ + "*," + _ + "*"),
                I = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
                Y = new RegExp(_ + "*[+~]"),
                U = new RegExp("=" + _ + "*([^\\]'\"]*)" + _ + "*\\]", "g"),
                V = new RegExp(W),
                J = new RegExp("^" + B + "$"),
                Z = {
                    ID: new RegExp("^#(" + R + ")"),
                    CLASS: new RegExp("^\\.(" + R + ")"),
                    TAG: new RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + W),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + $ + ")$", "i"),
                    needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^[^{]+\{\s*\[native \w/,
                G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /^(?:input|select|textarea|button)$/i,
                ee = /^h\d$/i,
                te = /'|\\/g,
                ne = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
                ie = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                M.apply(L = q.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: L.length ? function (e, t) {
                        F.apply(e, q.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                        e.length = n - 1
                    }
                }
            }

            function re(e, t, n, r) {
                var s, a, u, c, d, y, g, b, T, C;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (c = (t = t || f).nodeType) && 9 !== c) return [];
                if (h && !r) {
                    if (s = G.exec(e))
                        if (u = s[1]) {
                            if (9 === c) {
                                if (!(a = t.getElementById(u)) || !a.parentNode) return n;
                                if (a.id === u) return n.push(a), n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(u)) && v(t, a) && a.id === u) return n.push(a), n
                        } else {
                            if (s[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((u = s[3]) && i.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(u)), n
                        }
                    if (i.qsa && (!m || !m.test(e))) {
                        if (b = g = x, T = t, C = 9 === c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                            for (y = he(e), (g = t.getAttribute("id")) ? b = g.replace(te, "\\$&") : t.setAttribute("id", b), b = "[id='" + b + "'] ", d = y.length; d--;) y[d] = b + me(y[d]);
                            T = Y.test(e) && t.parentNode || t, C = y.join(",")
                        }
                        if (C) try {
                            return M.apply(n, T.querySelectorAll(C)), n
                        } catch (e) {
                        } finally {
                            g || t.removeAttribute("id")
                        }
                    }
                }
                return function (e, t, n, r) {
                    var s, a, u, c, p, f = he(e);
                    if (!r && 1 === f.length) {
                        if ((a = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = a[0]).type && i.getById && 9 === t.nodeType && h && o.relative[a[1].type]) {
                            if (!(t = (o.find.ID(u.matches[0].replace(ne, ie), t) || [])[0])) return n;
                            e = e.slice(a.shift().value.length)
                        }
                        for (s = Z.needsContext.test(e) ? 0 : a.length; s-- && (u = a[s], !o.relative[c = u.type]);)
                            if ((p = o.find[c]) && (r = p(u.matches[0].replace(ne, ie), Y.test(a[0].type) && t.parentNode || t))) {
                                if (a.splice(s, 1), !(e = r.length && me(a))) return M.apply(n, r), n;
                                break
                            }
                    }
                    return l(e, f)(r, t, !h, n, Y.test(e)), n
                }(e.replace(X, "$1"), t, n, r)
            }

            function oe() {
                var e = [];
                return function t(n, i) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = i
                }
            }

            function se(e) {
                return e[x] = !0, e
            }

            function ae(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function le(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) o.attrHandle[n[i]] = t
            }

            function ue(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ce(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function pe(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function fe(e) {
                return se(function (t) {
                    return t = +t, se(function (n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            for (n in a = re.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, i = re.support = {}, p = re.setDocument = function (e) {
                var t = e ? e.ownerDocument || e : w,
                    n = t.defaultView;
                return t !== f && 9 === t.nodeType && t.documentElement ? (f = t, d = t.documentElement, h = !a(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                    p()
                }), i.attributes = ae(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), i.getElementsByTagName = ae(function (e) {
                    return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                }), i.getElementsByClassName = ae(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), i.getById = ae(function (e) {
                    return d.appendChild(e).id = x, !t.getElementsByName || !t.getElementsByName(x).length
                }), i.getById ? (o.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function (e) {
                    var t = e.replace(ne, ie);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function (e) {
                    var t = e.replace(ne, ie);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = i.getElementsByTagName ? function (e, t) {
                    if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e)
                } : function (e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, o.find.CLASS = i.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && h) return t.getElementsByClassName(e)
                }, y = [], m = [], (i.qsa = Q.test(t.querySelectorAll)) && (ae(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || m.push("\\[" + _ + "*(?:value|" + $ + ")"), e.querySelectorAll(":checked").length || m.push(":checked")
                }), ae(function (e) {
                    var n = t.createElement("input");
                    n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && m.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (i.matchesSelector = Q.test(g = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ae(function (e) {
                    i.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), y.push("!=", W)
                }), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), v = Q.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = d.compareDocumentPosition ? function (e, n) {
                    if (e === n) return S = !0, 0;
                    var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                    return r ? 1 & r || !i.sortDetached && n.compareDocumentPosition(e) === r ? e === t || v(w, e) ? -1 : n === t || v(w, n) ? 1 : c ? O.call(c, e) - O.call(c, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, n) {
                    var i, r = 0,
                        o = e.parentNode,
                        s = n.parentNode,
                        a = [e],
                        l = [n];
                    if (e === n) return S = !0, 0;
                    if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : c ? O.call(c, e) - O.call(c, n) : 0;
                    if (o === s) return ue(e, n);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (i = n; i = i.parentNode;) l.unshift(i);
                    for (; a[r] === l[r];) r++;
                    return r ? ue(a[r], l[r]) : a[r] === w ? -1 : l[r] === w ? 1 : 0
                }, t) : f
            }, re.matches = function (e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(U, "='$1']"), i.matchesSelector && h && (!y || !y.test(t)) && (!m || !m.test(t))) try {
                    var n = g.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                }
                return re(t, f, null, [e]).length > 0
            }, re.contains = function (e, t) {
                return (e.ownerDocument || e) !== f && p(e), v(e, t)
            }, re.attr = function (e, t) {
                (e.ownerDocument || e) !== f && p(e);
                var n = o.attrHandle[t.toLowerCase()],
                    r = n && j.call(o.attrHandle, t.toLowerCase()) ? n(e, t, !h) : void 0;
                return void 0 === r ? i.attributes || !h ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null : r
            }, re.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    o = 0;
                if (S = !i.detectDuplicates, c = !i.sortStable && e.slice(0), e.sort(A), S) {
                    for (; t = e[o++];) t === e[o] && (r = n.push(o));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, s = re.getText = function (e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i]; i++) n += s(t);
                return n
            }, (o = re.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: Z,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ne, ie), e[3] = (e[4] || e[5] || "").replace(ne, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[5] && e[2];
                        return Z.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && V.test(n) && (t = he(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ne, ie).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = N[e + " "];
                        return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && N(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (i) {
                            var r = re.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var u, c, p, f, d, h, m = o !== s ? "nextSibling" : "previousSibling",
                                y = t.parentNode,
                                g = a && t.nodeName.toLowerCase(),
                                v = !l && !a;
                            if (y) {
                                if (o) {
                                    for (; m;) {
                                        for (p = t; p = p[m];)
                                            if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? y.firstChild : y.lastChild], s && v) {
                                    for (d = (u = (c = y[x] || (y[x] = {}))[e] || [])[0] === T && u[1], f = u[0] === T && u[2], p = d && y.childNodes[d]; p = ++d && p && p[m] || (f = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                } else if (v && (u = (t[x] || (t[x] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    for (;
                                        (p = ++d && p && p[m] || (f = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++f || (v && ((p[x] || (p[x] = {}))[e] = [T, f]), p !== t));) ;
                                return (f -= r) === i || f % i == 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            i = o.pseudos[e] || o.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--;) e[r = O.call(e, o[s])] = !(n[r] = o[s])
                        }) : function (e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            n = [],
                            i = l(e.replace(X, "$1"));
                        return i[x] ? se(function (e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), !n.pop()
                        }
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return re(e, t).length > 0
                        }
                    }),
                    contains: se(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    lang: se(function (e) {
                        return J.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(ne, ie).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === d
                    },
                    focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return !1 === e.disabled
                    },
                    disabled: function (e) {
                        return !0 === e.disabled
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function (e) {
                        return ee.test(e.nodeName)
                    },
                    input: function (e) {
                        return K.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: fe(function () {
                        return [0]
                    }),
                    last: fe(function (e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: fe(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = o.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) o.pseudos[n] = ce(n);
            for (n in {
                submit: !0,
                reset: !0
            }) o.pseudos[n] = pe(n);

            function de() {
            }

            function he(e, t) {
                var n, i, r, s, a, l, u, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, l = [], u = o.preFilter; a;) {
                    for (s in n && !(i = z.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(r = [])), n = !1, (i = I.exec(a)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(X, " ")
                    }), a = a.slice(n.length)), o.filter) !(i = Z[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: s,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? re.error(e) : k(e, l).slice(0)
            }

            function me(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function ye(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    s = C++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function (t, n, a) {
                    var l, u, c, p = T + " " + s;
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o)
                                if ((u = (c = t[x] || (t[x] = {}))[i]) && u[0] === p) {
                                    if (!0 === (l = u[1]) || l === r) return !0 === l
                                } else if ((u = c[i] = [p])[1] = e(t, n, a) || r, !0 === u[1]) return !0
                }
            }

            function ge(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function ve(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
                return s
            }

            function be(e, t, n, i, r, o) {
                return i && !i[x] && (i = be(i)), r && !r[x] && (r = be(r, o)), se(function (o, s, a, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = s.length,
                        m = o || function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) re(e, t[i], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !o && t ? m : ve(m, f, e, a, l),
                        g = n ? r || (o ? e : h || i) ? [] : s : y;
                    if (n && n(y, g, a, l), i)
                        for (u = ve(g, d), i(u, [], a, l), c = u.length; c--;) (p = u[c]) && (g[d[c]] = !(y[d[c]] = p));
                    if (o) {
                        if (r || e) {
                            if (r) {
                                for (u = [], c = g.length; c--;) (p = g[c]) && u.push(y[c] = p);
                                r(null, g = [], u, l)
                            }
                            for (c = g.length; c--;) (p = g[c]) && (u = r ? O.call(o, p) : f[c]) > -1 && (o[u] = !(s[u] = p))
                        }
                    } else g = ve(g === s ? g.splice(h, g.length) : g), r ? r(null, s, g, l) : M.apply(s, g)
                })
            }

            function xe(e) {
                for (var t, n, i, r = e.length, s = o.relative[e[0].type], a = s || o.relative[" "], l = s ? 1 : 0, c = ye(function (e) {
                    return e === t
                }, a, !0), p = ye(function (e) {
                    return O.call(t, e) > -1
                }, a, !0), f = [function (e, n, i) {
                    return !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : p(e, n, i))
                }]; l < r; l++)
                    if (n = o.relative[e[l].type]) f = [ye(ge(f), n)];
                    else {
                        if ((n = o.filter[e[l].type].apply(null, e[l].matches))[x]) {
                            for (i = ++l; i < r && !o.relative[e[i].type]; i++) ;
                            return be(l > 1 && ge(f), l > 1 && me(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(X, "$1"), n, l < i && xe(e.slice(l, i)), i < r && xe(e = e.slice(i)), i < r && me(e))
                        }
                        f.push(n)
                    }
                return ge(f)
            }

            de.prototype = o.filters = o.pseudos, o.setFilters = new de, l = re.compile = function (e, t) {
                var n, i = [],
                    s = [],
                    a = E[e + " "];
                if (!a) {
                    for (t || (t = he(e)), n = t.length; n--;) (a = xe(t[n]))[x] ? i.push(a) : s.push(a);
                    a = E(e, function (e, t) {
                        var n = 0,
                            i = t.length > 0,
                            s = e.length > 0,
                            a = function (a, l, c, p, d) {
                                var h, m, y, g = [],
                                    v = 0,
                                    b = "0",
                                    x = a && [],
                                    w = null != d,
                                    C = u,
                                    N = a || s && o.find.TAG("*", d && l.parentNode || l),
                                    k = T += null == C ? 1 : Math.random() || .1;
                                for (w && (u = l !== f && l, r = n); null != (h = N[b]); b++) {
                                    if (s && h) {
                                        for (m = 0; y = e[m++];)
                                            if (y(h, l, c)) {
                                                p.push(h);
                                                break
                                            }
                                        w && (T = k, r = ++n)
                                    }
                                    i && ((h = !y && h) && v--, a && x.push(h))
                                }
                                if (v += b, i && b !== v) {
                                    for (m = 0; y = t[m++];) y(x, g, l, c);
                                    if (a) {
                                        if (v > 0)
                                            for (; b--;) x[b] || g[b] || (g[b] = H.call(p));
                                        g = ve(g)
                                    }
                                    M.apply(p, g), w && !a && g.length > 0 && v + t.length > 1 && re.uniqueSort(p)
                                }
                                return w && (T = k, u = C), x
                            };
                        return i ? se(a) : a
                    }(s, i))
                }
                return a
            }, i.sortStable = x.split("").sort(A).join("") === x, i.detectDuplicates = S, p(), i.sortDetached = ae(function (e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            }), ae(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || le("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), i.attributes && ae(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || le("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ae(function (e) {
                return null == e.getAttribute("disabled")
            }) || le($, function (e, t, n) {
                var i;
                if (!n) return (i = e.getAttributeNode(t)) && i.specified ? i.value : !0 === e[t] ? t.toLowerCase() : null
            }), b.find = re, b.expr = re.selectors, b.expr[":"] = b.expr.pseudos, b.unique = re.uniqueSort, b.text = re.getText, b.isXMLDoc = re.isXML, b.contains = re.contains
        }(e);
    var q = {};
    b.Callbacks = function (e) {
        e = "string" == typeof e ? q[e] || function (e) {
            var t = q[e] = {};
            return b.each(e.match(w) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : b.extend({}, e);
        var n, i, r, o, s, a, l = [],
            u = !e.once && [],
            c = function (t) {
                for (i = e.memory && t, r = !0, s = a || 0, a = 0, o = l.length, n = !0; l && s < o; s++)
                    if (!1 === l[s].apply(t[0], t[1]) && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : p.disable())
            },
            p = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        !function t(n) {
                            b.each(n, function (n, i) {
                                var r = b.type(i);
                                "function" === r ? e.unique && p.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
                            })
                        }(arguments), n ? o = l.length : i && (a = t, c(i))
                    }
                    return this
                },
                remove: function () {
                    return l && b.each(arguments, function (e, t) {
                        for (var i;
                             (i = b.inArray(t, l, i)) > -1;) l.splice(i, 1), n && (i <= o && o--, i <= s && s--)
                    }), this
                },
                has: function (e) {
                    return e ? b.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], o = 0, this
                },
                disable: function () {
                    return l = u = i = t, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = t, i || p.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, t) {
                    return !l || r && !u || (t = [e, (t = t || []).slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return p
    }, b.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", b.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return b.Deferred(function (n) {
                            b.each(t, function (t, o) {
                                var s = o[0],
                                    a = b.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? b.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, b.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, n, i, r = 0,
                o = h.call(arguments),
                s = o.length,
                a = 1 !== s || e && b.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : b.Deferred(),
                u = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? h.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && b.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    }), b.support = function (t) {
        var n, i, o, a, l, u, c, p, f, d = s.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], !(i = d.getElementsByTagName("a")[0]) || !i.style || !n.length) return t;
        u = (a = s.createElement("select")).appendChild(s.createElement("option")), o = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!s.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (e) {
            t.deleteExpando = !1
        }
        for (f in (o = s.createElement("input")).setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), (l = s.createDocumentFragment()).appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click()), {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || !1 === d.attributes[c].expando;
        for (f in d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(t)) break;
        return t.ownLast = "0" !== f, b(function () {
            var n, i, o,
                a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = s.getElementsByTagName("body")[0];
            l && ((n = s.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (o = d.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, (i = d.appendChild(s.createElement("div"))).style.cssText = d.style.cssText = a, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== r && (d.innerHTML = "", d.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = i = null)
        }), n = a = l = u = i = o = null, t
    }({});
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        $ = /([A-Z])/g;

    function _(e, n, i, r) {
        if (b.acceptData(e)) {
            var o, s, a = b.expando,
                l = e.nodeType,
                u = l ? b.cache : e,
                c = l ? e[a] : e[a] && a;
            if (c && u[c] && (r || u[c].data) || i !== t || "string" != typeof n) return c || (c = l ? e[a] = p.pop() || b.guid++ : a), u[c] || (u[c] = l ? {} : {
                toJSON: b.noop
            }), "object" != typeof n && "function" != typeof n || (r ? u[c] = b.extend(u[c], n) : u[c].data = b.extend(u[c].data, n)), s = u[c], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[b.camelCase(n)] = i), "string" == typeof n ? null == (o = s[n]) && (o = s[b.camelCase(n)]) : o = s, o
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var i, r, o = e.nodeType,
                s = o ? b.cache : e,
                a = o ? e[b.expando] : b.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    r = (t = b.isArray(t) ? t.concat(b.map(t, b.camelCase)) : t in i ? [t] : (t = b.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !P(i) : !b.isEmptyObject(i)) return
                }
                (n || (delete s[a].data, P(s[a]))) && (o ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function B(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace($, "-$1").toLowerCase();
            if ("string" == typeof (i = e.getAttribute(r))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : O.test(i) ? b.parseJSON(i) : i)
                } catch (e) {
                }
                b.data(e, n, i)
            } else i = t
        }
        return i
    }

    function P(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    b.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return !!(e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando]) && !P(e)
        },
        data: function (e, t, n) {
            return _(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return _(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var i, r, o = null,
                s = 0,
                a = this[0];
            if (e === t) {
                if (this.length && (o = b.data(a), 1 === a.nodeType && !b._data(a, "parsedAttrs"))) {
                    for (i = a.attributes; s < i.length; s++) 0 === (r = i[s].name).indexOf("data-") && B(a, r = b.camelCase(r.slice(5)), o[r]);
                    b._data(a, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                b.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                b.data(this, e, n)
            }) : a ? B(a, e, b.data(a, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    }), b.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = b._data(e, t), n && (!i || b.isArray(n) ? i = b._data(e, t, b.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = b._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                b.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = b.fx && b.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var i, r = 1,
                o = b.Deferred(),
                s = this,
                a = this.length,
                l = function () {
                    --r || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) (i = b._data(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var W, X, z = /[\t\r\n\f]/g,
        I = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        U = /^(?:a|area)$/i,
        V = /^(?:checked|selected)$/i,
        J = b.support.getSetAttribute,
        Z = b.support.input;
    b.fn.extend({
        attr: function (e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = b.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {
                }
            })
        },
        addClass: function (e) {
            var t, n, i, r, o, s = 0,
                a = this.length,
                l = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(w) || []; s < a; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        n.className = b.trim(i)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(w) || []; s < a; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        n.className = e ? b.trim(i) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var t, i = 0, o = b(this), s = e.match(w) || []; t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else n !== r && "boolean" !== n || (this.className && b._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(z, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, i, r, o = this[0];
            return arguments.length ? (r = b.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, b(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (i = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (i = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()]) && "get" in i && (n = i.get(o, "value")) !== t ? n : "string" == typeof (n = o.value) ? n.replace(I, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && (b.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = b.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = b.inArray(b(i).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, n, i) {
            var o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === r ? b.prop(e, n, i) : (1 === a && b.isXMLDoc(e) || (n = n.toLowerCase(), o = b.attrHooks[n] || (b.expr.match.bool.test(n) ? X : W)), i === t ? o && "get" in o && null !== (s = o.get(e, n)) ? s : null == (s = b.find.attr(e, n)) ? t : s : null !== i ? o && "set" in o && (s = o.set(e, i, n)) !== t ? s : (e.setAttribute(n, i + ""), i) : void b.removeAttr(e, n))
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(w);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = b.propFix[n] || n, b.expr.match.bool.test(n) ? Z && J || !V.test(n) ? e[i] = !1 : e[b.camelCase("default-" + n)] = e[i] = !1 : b.attr(e, n, ""), e.removeAttribute(J ? n : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function (e, n, i) {
            var r, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !b.isXMLDoc(e)) && (n = b.propFix[n] || n, o = b.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || U.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : Z && J || !V.test(n) ? e.setAttribute(!J && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var i = b.expr.attrHandle[n] || b.find.attr;
        b.expr.attrHandle[n] = Z && J || !V.test(n) ? function (e, n, r) {
            var o = b.expr.attrHandle[n],
                s = r ? t : (b.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
            return b.expr.attrHandle[n] = o, s
        } : function (e, n, i) {
            return i ? t : e[b.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Z && J || (b.attrHooks.value = {
        set: function (e, t, n) {
            if (!b.nodeName(e, "input")) return W && W.set(e, t, n);
            e.defaultValue = t
        }
    }), J || (W = {
        set: function (e, n, i) {
            var r = e.getAttributeNode(i);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
        }
    }, b.expr.attrHandle.id = b.expr.attrHandle.name = b.expr.attrHandle.coords = function (e, n, i) {
        var r;
        return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
    }, b.valHooks.button = {
        get: function (e, n) {
            var i = e.getAttributeNode(n);
            return i && i.specified ? i.value : t
        },
        set: W.set
    }, b.attrHooks.contenteditable = {
        set: function (e, t, n) {
            W.set(e, "" !== t && t, n)
        }
    }, b.each(["width", "height"], function (e, t) {
        b.attrHooks[t] = {
            set: function (e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), b.support.hrefNormalized || b.each(["href", "src"], function (e, t) {
        b.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), b.support.style || (b.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        b.propFix[this.toLowerCase()] = this
    }), b.support.enctype || (b.propFix.enctype = "encoding"), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            set: function (e, t) {
                if (b.isArray(t)) return e.checked = b.inArray(b(e).val(), t) >= 0
            }
        }, b.support.checkOn || (b.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Q = /^(?:input|select|textarea)$/i,
        G = /^key/,
        K = /^(?:mouse|contextmenu)|click/,
        ee = /^(?:focusinfocus|focusoutblur)$/,
        te = /^([^.]*)(?:\.(.+)|)$/;

    function ne() {
        return !0
    }

    function ie() {
        return !1
    }

    function re() {
        try {
            return s.activeElement
        } catch (e) {
        }
    }

    b.event = {
        global: {},
        add: function (e, n, i, o, s) {
            var a, l, u, c, p, f, d, h, m, y, g, v = b._data(e);
            if (v) {
                for (i.handler && (i = (c = i).handler, s = c.selector), i.guid || (i.guid = b.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || ((f = v.handle = function (e) {
                    return typeof b === r || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                }).elem = e), u = (n = (n || "").match(w) || [""]).length; u--;) m = g = (a = te.exec(n[u]) || [])[1], y = (a[2] || "").split(".").sort(), m && (p = b.event.special[m] || {}, m = (s ? p.delegateType : p.bindType) || m, p = b.event.special[m] || {}, d = b.extend({
                    type: m,
                    origType: g,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && b.expr.match.needsContext.test(s),
                    namespace: y.join(".")
                }, c), (h = l[m]) || ((h = l[m] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, o, y, f) || (e.addEventListener ? e.addEventListener(m, f, !1) : e.attachEvent && e.attachEvent("on" + m, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[m] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, l, u, c, p, f, d, h, m, y = b.hasData(e) && b._data(e);
            if (y && (c = y.events)) {
                for (u = (t = (t || "").match(w) || [""]).length; u--;)
                    if (d = m = (a = te.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                        for (p = b.event.special[d] || {}, f = c[d = (i ? p.delegateType : p.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) s = f[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, p.remove && p.remove.call(e, s));
                        l && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, y.handle) || b.removeEvent(e, d, y.handle), delete c[d])
                    } else
                        for (d in c) b.event.remove(e, d + t[u], n, i, !0);
                b.isEmptyObject(c) && (delete y.handle, b._removeData(e, "events"))
            }
        },
        trigger: function (n, i, r, o) {
            var a, l, u, c, p, f, d, h = [r || s],
                m = g.call(n, "type") ? n.type : n,
                y = g.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !ee.test(m + b.event.triggered) && (m.indexOf(".") >= 0 && (y = m.split("."), m = y.shift(), y.sort()), l = m.indexOf(":") < 0 && "on" + m, (n = n[b.expando] ? n : new b.Event(m, "object" == typeof n && n)).isTrigger = o ? 2 : 3, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : b.makeArray(i, [n]), p = b.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, i))) {
                if (!o && !p.noBubble && !b.isWindow(r)) {
                    for (c = p.delegateType || m, ee.test(c + m) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (r.ownerDocument || s) && h.push(f.defaultView || f.parentWindow || e)
                }
                for (d = 0;
                     (u = h[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? c : p.bindType || m, (a = (b._data(u, "events") || {})[n.type] && b._data(u, "handle")) && a.apply(u, i), (a = l && u[l]) && b.acceptData(u) && a.apply && !1 === a.apply(u, i) && n.preventDefault();
                if (n.type = m, !o && !n.isDefaultPrevented() && (!p._default || !1 === p._default.apply(h.pop(), i)) && b.acceptData(r) && l && r[m] && !b.isWindow(r)) {
                    (f = r[l]) && (r[l] = null), b.event.triggered = m;
                    try {
                        r[m]()
                    } catch (e) {
                    }
                    b.event.triggered = t, f && (r[l] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, i, r, o, s, a, l = h.call(arguments),
                u = (b._data(this, "events") || {})[e.type] || [],
                c = b.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = b.event.handlers.call(this, e, u), n = 0;
                     (o = a[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, s = 0;
                         (r = o.handlers[s++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, (i = ((b.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) !== t && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var i, r, o, s, a = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (o = [], s = 0; s < l; s++) o[i = (r = n[s]).selector + " "] === t && (o[i] = r.needsContext ? b(i, this).index(u) >= 0 : b.find(i, this, null, [u]).length), o[i] && o.push(r);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return l < n.length && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        fix: function (e) {
            if (e[b.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = K.test(r) ? this.mouseHooks : G.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new b.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var i, r, o, a = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (o = (r = e.target.ownerDocument || s).documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== re() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === re() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (b.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function (e) {
                    return b.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? b.event.trigger(r, null, t) : b.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, b.removeEvent = s.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === r && (e[i] = null), e.detachEvent(i, n))
    }, b.Event = function (e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? ne : ie) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        isDefaultPrevented: ie,
        isPropagationStopped: ie,
        isImmediatePropagationStopped: ie,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ne, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ne, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = ne, this.stopPropagation()
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || b.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            if (b.nodeName(this, "form")) return !1;
            b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    i = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                i && !b._data(i, "submitBubbles") && (b.event.add(i, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (b.nodeName(this, "form")) return !1;
            b.event.remove(this, "._submit")
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            if (Q.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (b.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
            })), !1;
            b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Q.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return b.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            i = function (e) {
                b.event.simulate(t, e.target, b.event.fix(e), !0)
            };
        b.event.special[t] = {
            setup: function () {
                0 == n++ && s.addEventListener(e, i, !0)
            },
            teardown: function () {
                0 == --n && s.removeEventListener(e, i, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                for (s in "string" != typeof n && (i = i || n, n = t), e) this.on(s, n, i, e[s], o);
                return this
            }
            if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), !1 === r) r = ie;
            else if (!r) return this;
            return 1 === o && (a = r, (r = function (e) {
                return b().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = b.guid++)), this.each(function () {
                b.event.add(this, e, r, i, n)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return !1 !== n && "function" != typeof n || (i = n, n = t), !1 === i && (i = ie), this.each(function () {
                b.event.remove(this, e, i, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0)
        }
    });
    var oe = /^.[^:#\[\.,]*$/,
        se = /^(?:parents|prev(?:Until|All))/,
        ae = b.expr.match.needsContext,
        le = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function ue(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function ce(e, t, n) {
        if (b.isFunction(t)) return b.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (oe.test(t)) return b.filter(t, e, n);
            t = b.filter(t, e)
        }
        return b.grep(e, function (e) {
            return b.inArray(e, t) >= 0 !== n
        })
    }

    function pe(e) {
        var t = fe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    b.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(b(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (b.contains(i[t], this)) return !0
            }));
            for (t = 0; t < r; t++) b.find(e, i[t], n);
            return (n = this.pushStack(r > 1 ? b.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = b(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; t < i; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ce(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(ce(this, e || [], !1))
        },
        is: function (e) {
            return !!ce(this, "string" == typeof e && ae.test(e) ? b(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ae.test(e) || "string" != typeof e ? b(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                i = b.merge(this.get(), n);
            return this.pushStack(b.unique(i))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ue(e, "nextSibling")
        },
        prev: function (e) {
            return ue(e, "previousSibling")
        },
        nextAll: function (e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return b.sibling(e.firstChild)
        },
        contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function (e, t) {
        b.fn[e] = function (n, i) {
            var r = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = b.filter(i, r)), this.length > 1 && (le[e] || (r = b.unique(r)), se.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    }), b.extend({
        filter: function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? b.find.matchesSelector(i, e) ? [i] : [] : b.find.matches(e, b.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !b(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        de = / jQuery\d+="(?:null|\d+)"/g,
        he = new RegExp("<(?:" + fe + ")[\\s/>]", "i"),
        me = /^\s+/,
        ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ge = /<([\w:]+)/,
        ve = /<tbody/i,
        be = /<|&#?\w+;/,
        xe = /<(?:script|style|link)/i,
        we = /^(?:checkbox|radio)$/i,
        Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ce = /^$|\/(?:java|ecma)script/i,
        Ne = /^true\/(.*)/,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ee = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Se = pe(s).appendChild(s.createElement("div"));

    function Ae(e, t) {
        return b.nodeName(e, "table") && b.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function De(e) {
        return e.type = (null !== b.find.attr(e, "type")) + "/" + e.type, e
    }

    function je(e) {
        var t = Ne.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) b._data(n, "globalEval", !t || b._data(t[i], "globalEval"))
    }

    function He(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, i, r, o = b._data(e),
                s = b._data(t, o),
                a = o.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (i = 0, r = a[n].length; i < r; i++) b.event.add(t, n, a[n][i]);
            s.data && (s.data = b.extend({}, s.data))
        }
    }

    function Fe(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                for (i in (r = b._data(t)).events) b.removeEvent(t, i, r.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (De(t).text = e.text, je(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && we.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function Me(e, n) {
        var i, o, s = 0,
            a = typeof e.getElementsByTagName !== r ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== r ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], i = e.childNodes || e; null != (o = i[s]); s++) !n || b.nodeName(o, n) ? a.push(o) : b.merge(a, Me(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], a) : a
    }

    function qe(e) {
        we.test(e.type) && (e.defaultChecked = e.checked)
    }

    Ee.optgroup = Ee.option, Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead, Ee.th = Ee.td, b.fn.extend({
        text: function (e) {
            return b.access(this, function (e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? b.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || b.cleanData(Me(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Le(Me(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && b.cleanData(Me(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {},
                    i = 0,
                    r = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(de, "") : t;
                if ("string" == typeof e && !xe.test(e) && (b.support.htmlSerialize || !he.test(e)) && (b.support.leadingWhitespace || !me.test(e)) && !Ee[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ye, "<$1></$2>");
                    try {
                        for (; i < r; i++) 1 === (n = this[i] || {}).nodeType && (b.cleanData(Me(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = b.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var i = e[t++],
                    r = e[t++];
                r && (i && i.parentNode !== r && (i = this.nextSibling), b(this).remove(), r.insertBefore(n, i))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = f.apply([], e);
            var i, r, o, s, a, l, u = 0,
                c = this.length,
                p = this,
                d = c - 1,
                h = e[0],
                m = b.isFunction(h);
            if (m || !(c <= 1 || "string" != typeof h || b.support.checkClone) && Te.test(h)) return this.each(function (i) {
                var r = p.eq(i);
                m && (e[0] = h.call(this, i, r.html())), r.domManip(e, t, n)
            });
            if (c && (i = (l = b.buildFragment(e, this[0].ownerDocument, !1, !n && this)).firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (o = (s = b.map(Me(l, "script"), De)).length; u < c; u++) r = l, u !== d && (r = b.clone(r, !0, !0), o && b.merge(s, Me(r, "script"))), t.call(this[u], r, u);
                if (o)
                    for (a = s[s.length - 1].ownerDocument, b.map(s, je), u = 0; u < o; u++) r = s[u], Ce.test(r.type || "") && !b._data(r, "globalEval") && b.contains(a, r) && (r.src ? b._evalUrl(r.src) : b.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ke, "")));
                l = i = null
            }
            return this
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            for (var n, i = 0, r = [], o = b(e), s = o.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), b(o[i])[t](n), d.apply(r, n.get());
            return this.pushStack(r)
        }
    }), b.extend({
        clone: function (e, t, n) {
            var i, r, o, s, a, l = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !he.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Se.innerHTML = e.outerHTML, Se.removeChild(o = Se.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (i = Me(o), a = Me(e), s = 0; null != (r = a[s]); ++s) i[s] && Fe(r, i[s]);
            if (t)
                if (n)
                    for (a = a || Me(e), i = i || Me(o), s = 0; null != (r = a[s]); s++) He(r, i[s]);
                else He(e, o);
            return (i = Me(o, "script")).length > 0 && Le(i, !l && Me(e, "script")), i = a = r = null, o
        },
        buildFragment: function (e, t, n, i) {
            for (var r, o, s, a, l, u, c, p = e.length, f = pe(t), d = [], h = 0; h < p; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                    else if (be.test(o)) {
                        for (a = a || f.appendChild(t.createElement("div")), l = (ge.exec(o) || ["", ""])[1].toLowerCase(), c = Ee[l] || Ee._default, a.innerHTML = c[1] + o.replace(ye, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                        if (!b.support.leadingWhitespace && me.test(o) && d.push(t.createTextNode(me.exec(o)[0])), !b.support.tbody)
                            for (r = (o = "table" !== l || ve.test(o) ? "<table>" !== c[1] || ve.test(o) ? 0 : a : a.firstChild) && o.childNodes.length; r--;) b.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                        for (b.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                        a = f.lastChild
                    } else d.push(t.createTextNode(o));
            for (a && f.removeChild(a), b.support.appendChecked || b.grep(Me(d, "input"), qe), h = 0; o = d[h++];)
                if ((!i || -1 === b.inArray(o, i)) && (s = b.contains(o.ownerDocument, o), a = Me(f.appendChild(o), "script"), s && Le(a), n))
                    for (r = 0; o = a[r++];) Ce.test(o.type || "") && n.push(o);
            return a = null, f
        },
        cleanData: function (e, t) {
            for (var n, i, o, s, a = 0, l = b.expando, u = b.cache, c = b.support.deleteExpando, f = b.event.special; null != (n = e[a]); a++)
                if ((t || b.acceptData(n)) && (s = (o = n[l]) && u[o])) {
                    if (s.events)
                        for (i in s.events) f[i] ? b.event.remove(n, i) : b.removeEvent(n, i, s.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== r ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function (e) {
            return b.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), b.fn.extend({
        wrapAll: function (e) {
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return b.isFunction(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = b.isFunction(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Oe, $e, _e, Re = /alpha\([^)]*\)/i,
        Be = /opacity\s*=\s*([^)]*)/,
        Pe = /^(top|right|bottom|left)$/,
        We = /^(none|table(?!-c[ea]).+)/,
        Xe = /^margin/,
        ze = new RegExp("^(" + x + ")(.*)$", "i"),
        Ie = new RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Ye = new RegExp("^([+-])=(" + x + ")", "i"),
        Ue = {
            BODY: "block"
        },
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ze = ["Top", "Right", "Bottom", "Left"],
        Qe = ["Webkit", "O", "Moz", "ms"];

    function Ge(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Qe.length; r--;)
            if ((t = Qe[r] + n) in e) return t;
        return i
    }

    function Ke(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function et(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) (i = e[s]).style && (o[s] = b._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ke(i) && (o[s] = b._data(i, "olddisplay", rt(i.nodeName)))) : o[s] || (r = Ke(i), (n && "none" !== n || !r) && b._data(i, "olddisplay", r ? n : b.css(i, "display"))));
        for (s = 0; s < a; s++) (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function tt(e, t, n) {
        var i = ze.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function nt(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += b.css(e, n + Ze[o], !0, r)), i ? ("content" === n && (s -= b.css(e, "padding" + Ze[o], !0, r)), "margin" !== n && (s -= b.css(e, "border" + Ze[o] + "Width", !0, r))) : (s += b.css(e, "padding" + Ze[o], !0, r), "padding" !== n && (s += b.css(e, "border" + Ze[o] + "Width", !0, r)));
        return s
    }

    function it(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = $e(e),
            s = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = _e(e, t, o)) < 0 || null == r) && (r = e.style[t]), Ie.test(r)) return r;
            i = s && (b.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + nt(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function rt(e) {
        var t = s,
            n = Ue[e];
        return n || ("none" !== (n = ot(e, t)) && n || ((t = ((Oe = (Oe || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || Oe[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = ot(e, t), Oe.detach()), Ue[e] = n), n
    }

    function ot(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            i = b.css(n[0], "display");
        return n.remove(), i
    }

    b.fn.extend({
        css: function (e, n) {
            return b.access(this, function (e, n, i) {
                var r, o, s = {},
                    a = 0;
                if (b.isArray(n)) {
                    for (o = $e(e), r = n.length; a < r; a++) s[n[a]] = b.css(e, n[a], !1, o);
                    return s
                }
                return i !== t ? b.style(e, n, i) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return et(this, !0)
        },
        hide: function () {
            return et(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ke(this) ? b(this).show() : b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, l = b.camelCase(n),
                    u = e.style;
                if (n = b.cssProps[l] || (b.cssProps[l] = Ge(u, l)), a = b.cssHooks[n] || b.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o : u[n];
                if ("string" == (s = typeof i) && (o = Ye.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || b.cssNumber[l] || (i += "px"), b.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(e, i, r)) === t))) try {
                    u[n] = i
                } catch (e) {
                }
            }
        },
        css: function (e, n, i, r) {
            var o, s, a, l = b.camelCase(n);
            return n = b.cssProps[l] || (b.cssProps[l] = Ge(e.style, l)), (a = b.cssHooks[n] || b.cssHooks[l]) && "get" in a && (s = a.get(e, !0, i)), s === t && (s = _e(e, n, r)), "normal" === s && n in Je && (s = Je[n]), "" === i || i ? (o = parseFloat(s), !0 === i || b.isNumeric(o) ? o || 0 : s) : s
        }
    }), e.getComputedStyle ? ($e = function (t) {
        return e.getComputedStyle(t, null)
    }, _e = function (e, n, i) {
        var r, o, s, a = i || $e(e),
            l = a ? a.getPropertyValue(n) || a[n] : t,
            u = e.style;
        return a && ("" !== l || b.contains(e.ownerDocument, e) || (l = b.style(e, n)), Ie.test(l) && Xe.test(n) && (r = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = o, u.maxWidth = s)), l
    }) : s.documentElement.currentStyle && ($e = function (e) {
        return e.currentStyle
    }, _e = function (e, n, i) {
        var r, o, s, a = i || $e(e),
            l = a ? a[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Ie.test(l) && !Pe.test(n) && (r = u.left, (s = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, s && (o.left = s)), "" === l ? "auto" : l
    }), b.each(["height", "width"], function (e, t) {
        b.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return 0 === e.offsetWidth && We.test(b.css(e, "display")) ? b.swap(e, Ve, function () {
                    return it(e, t, i)
                }) : it(e, t, i)
            },
            set: function (e, n, i) {
                var r = i && $e(e);
                return tt(0, n, i ? nt(e, t, i, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return Be.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace(Re, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Re.test(o) ? o.replace(Re, r) : o + " " + r)
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return b.swap(e, {
                    display: "inline-block"
                }, _e, [e, "marginRight"])
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, t) {
            b.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = _e(e, t), Ie.test(n) ? b(e).position()[t] + "px" : n
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function (e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ze[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Xe.test(e) || (b.cssHooks[e + t].set = tt)
    });
    var st = /%20/g,
        at = /\[\]$/,
        lt = /\r?\n/g,
        ut = /^(?:submit|button|image|reset|file)$/i,
        ct = /^(?:input|select|textarea|keygen)/i;

    function pt(e, t, n, i) {
        var r;
        if (b.isArray(t)) b.each(t, function (t, r) {
            n || at.test(e) ? i(e, r) : pt(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== b.type(t)) i(e, t);
        else
            for (r in t) pt(e + "[" + r + "]", t[r], n, i)
    }

    b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && ct.test(this.nodeName) && !ut.test(e) && (this.checked || !we.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(lt, "\r\n")
                }
            }).get()
        }
    }), b.param = function (e, n) {
        var i, r = [],
            o = function (e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (i in e) pt(i, e[i], n, o);
        return r.join("&").replace(st, "+")
    }, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ft, dt, ht = b.now(),
        mt = /\?/,
        yt = /#.*$/,
        gt = /([?&])_=[^&]*/,
        vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        bt = /^(?:GET|HEAD)$/,
        xt = /^\/\//,
        wt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Tt = b.fn.load,
        Ct = {},
        Nt = {},
        kt = "*/".concat("*");
    try {
        dt = o.href
    } catch (e) {
        (dt = s.createElement("a")).href = "", dt = dt.href
    }

    function Et(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function St(e, t, n, i) {
        var r = {},
            o = e === Nt;

        function s(a) {
            var l;
            return r[a] = !0, b.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
            }), l
        }

        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function At(e, n) {
        var i, r, o = b.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && b.extend(!0, e, i), e
    }

    ft = wt.exec(dt.toLowerCase()) || [], b.fn.load = function (e, n, i) {
        if ("string" != typeof e && Tt) return Tt.apply(this, arguments);
        var r, o, s, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), b.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && b.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
        }).complete(i && function (e, t) {
            a.each(i, o || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? At(At(e, b.ajaxSettings), t) : At(b.ajaxSettings, e)
        },
        ajaxPrefilter: Et(Ct),
        ajaxTransport: Et(Nt),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, r, o, s, a, l, u, c, p = b.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                h = b.Deferred(),
                m = b.Callbacks("once memory"),
                y = p.statusCode || {},
                g = {},
                v = {},
                x = 0,
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!c)
                                for (c = {}; t = vt.exec(s);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) y[t] = [y[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return u && u.abort(t), N(0, t), this
                    }
                };
            if (h.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || dt) + "").replace(yt, "").replace(xt, ft[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (i = wt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === ft[1] && i[2] === ft[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), St(Ct, p, n, C), 2 === x) return C;
            for (r in (l = p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !bt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (mt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = gt.test(o) ? o.replace(gt, "$1_=" + ht++) : o + (mt.test(o) ? "&" : "?") + "_=" + ht++)), p.ifModified && (b.lastModified[o] && C.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && C.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || 2 === x)) return C.abort();
            for (r in T = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) C[r](p[r]);
            if (u = St(Nt, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (a = setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, u.send(g, N)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    N(-1, e)
                }
            } else N(-1, "No Transport");

            function N(e, n, i, r) {
                var c, g, v, w, T, N = n;
                2 !== x && (x = 2, a && clearTimeout(a), u = t, s = r || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = function (e, n, i) {
                    for (var r, o, s, a, l = e.contents, u = e.dataTypes;
                         "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
                    if (o)
                        for (a in l)
                            if (l[a] && l[a].test(o)) {
                                u.unshift(a);
                                break
                            }
                    if (u[0] in i) s = u[0];
                    else {
                        for (a in i) {
                            if (!u[0] || e.converters[a + " " + u[0]]) {
                                s = a;
                                break
                            }
                            r || (r = a)
                        }
                        s = s || r
                    }
                    if (s) return s !== u[0] && u.unshift(s), i[s]
                }(p, C, i)), w = function (e, t, n, i) {
                    var r, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o]))
                                    for (r in u)
                                        if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, C, c), c ? (p.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (b.lastModified[o] = T), (T = C.getResponseHeader("etag")) && (b.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, g = w.data, c = !(v = w.error))) : (v = N, !e && N || (N = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [g, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(y), y = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? g : v]), m.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --b.active || b.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return b.get(e, t, n, "script")
        }
    }), b.each(["get", "post"], function (e, n) {
        b[n] = function (e, i, r, o) {
            return b.isFunction(i) && (o = o || r, r = i, i = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, i = s.head || b("head")[0] || s.documentElement;
            return {
                send: function (t, r) {
                    (n = s.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Dt = [],
        jt = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Dt.pop() || b.expando + "_" + ht++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (n, i, r) {
        var o, s, a,
            l = !1 !== n.jsonp && (jt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(n.data) && "data");
        if (l || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(jt, "$1" + o) : !1 !== n.jsonp && (n.url += (mt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return a || b.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[o], e[o] = function () {
            a = arguments
        }, r.always(function () {
            e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, Dt.push(o)), a && b.isFunction(s) && s(a[0]), a = s = t
        }), "script"
    });
    var Lt, Ht, Ft = 0,
        Mt = e.ActiveXObject && function () {
            var e;
            for (e in Lt) Lt[e](t, !0)
        };

    function qt() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    }

    b.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && qt() || function () {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }()
    } : qt, Ht = b.ajaxSettings.xhr(), b.support.cors = !!Ht && "withCredentials" in Ht, (Ht = b.support.ajax = !!Ht) && b.ajaxTransport(function (n) {
        var i;
        if (!n.crossDomain || b.support.cors) return {
            send: function (r, o) {
                var s, a, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                    for (a in n.xhrFields) l[a] = n.xhrFields[a];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (a in r) l.setRequestHeader(a, r[a])
                } catch (e) {
                }
                l.send(n.hasContent && n.data || null), i = function (e, r) {
                    var a, u, c, p;
                    try {
                        if (i && (r || 4 === l.readyState))
                            if (i = t, s && (l.onreadystatechange = b.noop, Mt && delete Lt[s]), r) 4 !== l.readyState && l.abort();
                            else {
                                p = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (e) {
                                    c = ""
                                }
                                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
                            }
                    } catch (e) {
                        r || o(-1, e)
                    }
                    p && o(a, c, p, u)
                }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Ft, Mt && (Lt || (Lt = {}, b(e).unload(Mt)), Lt[s] = i), l.onreadystatechange = i) : i()
            },
            abort: function () {
                i && i(t, !0)
            }
        }
    });
    var Ot, $t, _t = /^(?:toggle|show|hide)$/,
        Rt = new RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Bt = /queueHooks$/,
        Pt = [function (e, t, n) {
            var i, r, o, s, a, l, u = this,
                c = {},
                p = e.style,
                f = e.nodeType && Ke(e),
                d = b._data(e, "fxshow");
            for (i in n.queue || (null == (a = b._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, u.always(function () {
                u.always(function () {
                    a.unqueued--, b.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== rt(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || u.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), t)
                if (r = t[i], _t.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) continue;
                    c[i] = d && d[i] || b.style(e, i)
                }
            if (!b.isEmptyObject(c))
                for (i in d ? "hidden" in d && (f = d.hidden) : d = b._data(e, "fxshow", {}), o && (d.hidden = !f), f ? b(e).show() : u.done(function () {
                    b(e).hide()
                }), u.done(function () {
                    var t;
                    for (t in b._removeData(e, "fxshow"), c) b.style(e, t, c[t])
                }), c) s = zt(f ? d[i] : 0, i, u), i in d || (d[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        Wt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = Rt.exec(t),
                    o = r && r[3] || (b.cssNumber[e] ? "" : "px"),
                    s = (b.cssNumber[e] || "px" !== o && +i) && Rt.exec(b.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do {
                        s /= a = a || ".5", b.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };

    function Xt() {
        return setTimeout(function () {
            Ot = t
        }), Ot = b.now()
    }

    function zt(e, t, n) {
        for (var i, r = (Wt[t] || []).concat(Wt["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function It(e, t, n) {
        var i, r, o = 0,
            s = Pt.length,
            a = b.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = Ot || Xt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ot || Xt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = b.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function (e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (r = t[i = b.camelCase(n)], o = e[n], b.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = b.cssHooks[i]) && "expand" in s)
                    for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                else t[i] = r
        }(c, u.opts.specialEasing); o < s; o++)
            if (i = Pt[o].call(u, e, c, u.opts)) return i;
        return b.map(c, zt, u), b.isFunction(u.opts.start) && u.opts.start.call(e, u), b.fx.timer(b.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function Yt(e, t, n, i, r) {
        return new Yt.prototype.init(e, t, n, i, r)
    }

    function Ut(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Ze[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Vt(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    b.Animation = b.extend(It, {
        tweener: function (e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Wt[n] = Wt[n] || [], Wt[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Pt.unshift(e) : Pt.push(e)
        }
    }), b.Tween = Yt, Yt.prototype = {
        constructor: Yt,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Yt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ut(t, !0), e, i, r)
        }
    }), b.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Ke).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var r = b.isEmptyObject(e),
                o = b.speed(t, n, i),
                s = function () {
                    var t = It(this, b.extend({}, e), o);
                    (r || b._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, n, i) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = b.timers,
                    s = b._data(this);
                if (n) s[n] && s[n].stop && r(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && Bt.test(n) && r(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                !t && i || b.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = b._data(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = b.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, b.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), b.each({
        slideDown: Ut("show"),
        slideUp: Ut("hide"),
        slideToggle: Ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        b.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), b.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return i.duration = b.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in b.fx.speeds ? b.fx.speeds[i.duration] : b.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            b.isFunction(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue)
        }, i
    }, b.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = Yt.prototype.init, b.fx.tick = function () {
        var e, n = b.timers,
            i = 0;
        for (Ot = b.now(); i < n.length; i++) (e = n[i])() || n[i] !== e || n.splice(i--, 1);
        n.length || b.fx.stop(), Ot = t
    }, b.fx.timer = function (e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        $t || ($t = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function () {
        clearInterval($t), $t = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            b.offset.setOffset(this, e, t)
        });
        var n, i, o = {
                top: 0,
                left: 0
            },
            s = this[0],
            a = s && s.ownerDocument;
        return a ? (n = a.documentElement, b.contains(n, s) ? (typeof s.getBoundingClientRect !== r && (o = s.getBoundingClientRect()), i = Vt(a), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0
    }, b.offset = {
        setOffset: function (e, t, n) {
            var i = b.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = b(e),
                a = s.offset(),
                l = b.css(e, "top"),
                u = b.css(e, "left"),
                c = {},
                p = {};
            ("absolute" === i || "fixed" === i) && b.inArray("auto", [l, u]) > -1 ? (r = (p = s.position()).top, o = p.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (c.top = t.top - a.top + r), null != t.left && (c.left = t.left - a.left + o), "using" in t ? t.using.call(e, c) : s.css(c)
        }
    }, b.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === b.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(i, "marginTop", !0),
                    left: t.left - n.left - b.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || a; e && !b.nodeName(e, "html") && "static" === b.css(e, "position");) e = e.offsetParent;
                return e || a
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var i = /Y/.test(n);
        b.fn[e] = function (r) {
            return b.access(this, function (e, r, o) {
                var s = Vt(e);
                if (o === t) return s ? n in s ? s[n] : s.document.documentElement[r] : e[r];
                s ? s.scrollTo(i ? b(s).scrollLeft() : o, i ? o : b(s).scrollTop()) : e[r] = o
            }, e, r, arguments.length, null)
        }
    }), b.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (i, r) {
            b.fn[r] = function (r, o) {
                var s = arguments.length && (i || "boolean" != typeof r),
                    a = i || (!0 === r || !0 === o ? "margin" : "border");
                return b.access(this, function (n, i, r) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? b.css(n, i, a) : b.style(n, i, r, a)
                }, n, s ? r : t, s, null)
            }
        })
    }), b.fn.size = function () {
        return this.length
    }, b.fn.andSelf = b.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = b : (e.jQuery = e.$ = b, "function" == typeof define && define.amd && define("jquery", [], function () {
        return b
    }))
}(window),
    function (e, t, n, i) {
        "use strict";
        var r = "parallax",
            o = {
                relativeInput: !1,
                clipRelativeInput: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5
            };

        function s(t, n) {
            this.element = t, this.$context = e(t).data("api", this), this.$layers = this.$context.find(".layer");
            var i = {
                calibrateX: this.$context.data("calibrate-x") || null,
                calibrateY: this.$context.data("calibrate-y") || null,
                invertX: this.$context.data("invert-x") || null,
                invertY: this.$context.data("invert-y") || null,
                limitX: parseFloat(this.$context.data("limit-x")) || null,
                limitY: parseFloat(this.$context.data("limit-y")) || null,
                scalarX: parseFloat(this.$context.data("scalar-x")) || null,
                scalarY: parseFloat(this.$context.data("scalar-y")) || null,
                frictionX: parseFloat(this.$context.data("friction-x")) || null,
                frictionY: parseFloat(this.$context.data("friction-y")) || null,
                originX: parseFloat(this.$context.data("origin-x")) || null,
                originY: parseFloat(this.$context.data("origin-y")) || null
            };
            for (var r in i) null === i[r] && delete i[r];
            e.extend(this, o, n, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
        }

        s.prototype.transformSupport = function (e) {
            for (var i = n.createElement("div"), r = !1, o = null, s = !1, a = null, l = null, u = 0, c = this.vendors.length; u < c; u++)
                if (null !== this.vendors[u] ? (a = this.vendors[u][0] + "transform", l = this.vendors[u][1] + "Transform") : (a = "transform", l = "transform"), void 0 !== i.style[l]) {
                    r = !0;
                    break
                }
            switch (e) {
                case "2D":
                    s = r;
                    break;
                case "3D":
                    if (r) {
                        var p = n.body || n.createElement("body"),
                            f = n.documentElement,
                            d = f.style.overflow;
                        n.body || (f.style.overflow = "hidden", f.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(i), i.style[l] = "translate3d(1px,1px,1px)", s = void 0 !== (o = t.getComputedStyle(i).getPropertyValue(a)) && o.length > 0 && "none" !== o, f.style.overflow = d, p.removeChild(i)
                    }
            }
            return s
        }, s.prototype.ww = null, s.prototype.wh = null, s.prototype.wcx = null, s.prototype.wcy = null, s.prototype.wrx = null, s.prototype.wry = null, s.prototype.portrait = null, s.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), s.prototype.vendors = [null, ["-webkit-", "webkit"],
            ["-moz-", "Moz"],
            ["-o-", "O"],
            ["-ms-", "ms"]
        ], s.prototype.motionSupport = !!t.DeviceMotionEvent, s.prototype.orientationSupport = !!t.DeviceOrientationEvent, s.prototype.orientationStatus = 0, s.prototype.transform2DSupport = s.prototype.transformSupport("2D"), s.prototype.transform3DSupport = s.prototype.transformSupport("3D"), s.prototype.propertyCache = {}, s.prototype.initialise = function () {
            "static" === this.$context.css("position") && this.$context.css({
                position: "relative"
            }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
        }, s.prototype.updateLayers = function () {
            this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
                position: "absolute",
                display: "block",
                left: 0,
                top: 0
            }), this.$layers.first().css({
                position: "relative"
            }), this.accelerate(this.$layers), this.$layers.each(e.proxy(function (t, n) {
                this.depths.push(e(n).data("depth") || 0)
            }, this))
        }, s.prototype.updateDimensions = function () {
            this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
        }, s.prototype.updateBounds = function () {
            this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
        }, s.prototype.queueCalibration = function (e) {
            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
        }, s.prototype.enable = function () {
            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
        }, s.prototype.disable = function () {
            this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
        }, s.prototype.calibrate = function (e, t) {
            this.calibrateX = void 0 === e ? this.calibrateX : e, this.calibrateY = void 0 === t ? this.calibrateY : t
        }, s.prototype.invert = function (e, t) {
            this.invertX = void 0 === e ? this.invertX : e, this.invertY = void 0 === t ? this.invertY : t
        }, s.prototype.friction = function (e, t) {
            this.frictionX = void 0 === e ? this.frictionX : e, this.frictionY = void 0 === t ? this.frictionY : t
        }, s.prototype.scalar = function (e, t) {
            this.scalarX = void 0 === e ? this.scalarX : e, this.scalarY = void 0 === t ? this.scalarY : t
        }, s.prototype.limit = function (e, t) {
            this.limitX = void 0 === e ? this.limitX : e, this.limitY = void 0 === t ? this.limitY : t
        }, s.prototype.origin = function (e, t) {
            this.originX = void 0 === e ? this.originX : e, this.originY = void 0 === t ? this.originY : t
        }, s.prototype.clamp = function (e, t, n) {
            return e = Math.max(e, t), Math.min(e, n)
        }, s.prototype.css = function (t, n, i) {
            var r = this.propertyCache[n];
            if (!r)
                for (var o = 0, s = this.vendors.length; o < s; o++)
                    if (r = null !== this.vendors[o] ? e.camelCase(this.vendors[o][1] + "-" + n) : n, void 0 !== t.style[r]) {
                        this.propertyCache[n] = r;
                        break
                    }
            t.style[r] = i
        }, s.prototype.accelerate = function (e) {
            for (var t = 0, n = e.length; t < n; t++) {
                var i = e[t];
                this.css(i, "transform", "translate3d(0,0,0)"), this.css(i, "transform-style", "preserve-3d"), this.css(i, "backface-visibility", "hidden")
            }
        }, s.prototype.setPosition = function (e, t, n) {
            t += "px", n += "px", this.transform3DSupport ? this.css(e, "transform", "translate3d(" + t + "," + n + ",0)") : this.transform2DSupport ? this.css(e, "transform", "translate(" + t + "," + n + ")") : (e.style.left = t, e.style.top = n)
        }, s.prototype.onOrientationTimer = function (e) {
            this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
        }, s.prototype.onCalibrationTimer = function (e) {
            this.calibrationFlag = !0
        }, s.prototype.onWindowResize = function (e) {
            this.updateDimensions()
        }, s.prototype.onAnimationFrame = function () {
            this.updateBounds();
            var e = this.ix - this.cx,
                t = this.iy - this.cy;
            (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? t : this.iy, this.my = this.calibrateY ? e : this.ix) : (this.mx = this.calibrateX ? e : this.ix, this.my = this.calibrateY ? t : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
            for (var n = 0, i = this.$layers.length; n < i; n++) {
                var r = this.depths[n],
                    o = this.$layers[n],
                    s = this.vx * r * (this.invertX ? -1 : 1),
                    a = this.vy * r * (this.invertY ? -1 : 1);
                this.setPosition(o, s, a)
            }
            this.raf = requestAnimationFrame(this.onAnimationFrame)
        }, s.prototype.onDeviceOrientation = function (e) {
            if (!this.desktop && null !== e.beta && null !== e.gamma) {
                this.orientationStatus = 1;
                var n = (e.beta || 0) / 30,
                    i = (e.gamma || 0) / 30,
                    r = t.innerHeight > t.innerWidth;
                this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = n, this.cy = i), this.ix = n, this.iy = i
            }
        }, s.prototype.onMouseMove = function (e) {
            var t = e.clientX,
                n = e.clientY;
            !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.ex), t = Math.min(t, this.ex + this.ew), n = Math.max(n, this.ey), n = Math.min(n, this.ey + this.eh)), this.ix = (t - this.ex - this.ecx) / this.erx, this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (t - this.wcx) / this.wrx, this.iy = (n - this.wcy) / this.wry)
        };
        var a = {
            enable: s.prototype.enable,
            disable: s.prototype.disable,
            updateLayers: s.prototype.updateLayers,
            calibrate: s.prototype.calibrate,
            friction: s.prototype.friction,
            invert: s.prototype.invert,
            scalar: s.prototype.scalar,
            limit: s.prototype.limit,
            origin: s.prototype.origin
        };
        e.fn[r] = function (t) {
            var n = arguments;
            return this.each(function () {
                var i = e(this),
                    o = i.data(r);
                o || (o = new s(this, t), i.data(r, o)), a[t] && o[t].apply(o, Array.prototype.slice.call(n, 1))
            })
        }
    }(window.jQuery || window.Zepto, window, document),
    function () {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
            var i = (new Date).getTime(),
                r = Math.max(0, 16 - (i - e)),
                o = window.setTimeout(function () {
                    t(i + r)
                }, r);
            return e = i + r, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }(),
    function (e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Countdown = e()
        }
    }(function () {
        return function e(t, n, i) {
            function r(s, a) {
                if (!n[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(s, !0);
                        if (o) return o(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(c.exports, function (e) {
                        return r(t[s][1][e] || e)
                    }, c, c.exports, e, t, n, i)
                }
                return n[s].exports
            }

            for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
            return r
        }({
            1: [function (e, t, n) {
                var i = {
                    date: "June 7, 2087 15:03:25",
                    refresh: 1e3,
                    offset: 0,
                    onEnd: function () {
                    },
                    render: function (e) {
                        this.el.innerHTML = e.years + " years, " + e.days + " days, " + this.leadingZeros(e.hours) + " hours, " + this.leadingZeros(e.min) + " min and " + this.leadingZeros(e.sec) + " sec"
                    }
                };
                t.exports = function (e, t) {
                    for (var n in this.el = e, this.options = {}, this.interval = !1, i) i.hasOwnProperty(n) && (this.options[n] = void 0 !== t[n] ? t[n] : i[n], "date" === n && "object" != typeof this.options.date && (this.options.date = new Date(this.options.date)), "function" == typeof this.options[n] && (this.options[n] = this.options[n].bind(this)));
                    this.getDiffDate = function () {
                        var e = (this.options.date.getTime() - Date.now() + this.options.offset) / 1e3,
                            t = {
                                years: 0,
                                days: 0,
                                hours: 0,
                                min: 0,
                                sec: 0,
                                millisec: 0
                            };
                        return e <= 0 ? (this.interval && (this.stop(), this.options.onEnd()), t) : (e >= 31557600 && (t.years = Math.floor(e / 31557600), e -= 365.25 * t.years * 86400), e >= 86400 && (t.days = Math.floor(e / 86400), e -= 86400 * t.days), e >= 3600 && (t.hours = Math.floor(e / 3600), e -= 3600 * t.hours), e >= 60 && (t.min = Math.floor(e / 60), e -= 60 * t.min), t.sec = Math.round(e), t.millisec = e % 1 * 1e3, t)
                    }.bind(this), this.leadingZeros = function (e, t) {
                        return t = t || 2, (e = String(e)).length > t ? e : (Array(t + 1).join("0") + e).substr(-t)
                    }, this.update = function (e) {
                        return "object" != typeof e && (e = new Date(e)), this.options.date = e, this.render(), this
                    }.bind(this), this.stop = function () {
                        return this.interval && (clearInterval(this.interval), this.interval = !1), this
                    }.bind(this), this.render = function () {
                        return this.options.render(this.getDiffDate()), this
                    }.bind(this), this.start = function () {
                        if (!this.interval) return this.render(), this.options.refresh && (this.interval = setInterval(this.render, this.options.refresh)), this
                    }.bind(this), this.updateOffset = function (e) {
                        return this.options.offset = e, this
                    }.bind(this), this.start()
                }
            }, {}],
            2: [function (e, t, n) {
                var i = e("./countdown.js");
                jQuery.fn.countdown = function (e) {
                    return $.each(this, function (t, n) {
                        var r = $(n);
                        r.data("countdown") || (r.data("date") && (e.date = r.data("date")), r.data("countdown", new i(n, e)))
                    })
                }, t.exports = i
            }, {
                "./countdown.js": 1
            }]
        }, {}, [2])(2)
    }), $(window).load(function () {
    $(".preloader").fadeOut("slow")
}), $(window).load(function () {
    initializeSite(), setTimeout(function () {
        window.scrollTo(0, 0)
    }, 0)
}), $("#countdown").countdown({
    date: "December 31, 2022 00:00:01",
    render: function (e) {
        $(this.el).empty().append("<div>" + this.leadingZeros(e.days, 2) + " <span>days</span></div>").append("<div>" + this.leadingZeros(e.hours, 2) + " <span>hrs</span></div>").append("<div>" + this.leadingZeros(e.min, 2) + " <span>min</span></div>").append("<div>" + this.leadingZeros(e.sec, 2) + " <span>sec</span></div>")
    }
}), $("html").on("click", function (e) {
    var t = document.body,
        n = t.requestFullScreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullScreen;
    if (n) n.call(t);
    else if (void 0 !== window.ActiveXObject) {
        var i = new ActiveXObject("WScript.Shell");
        null !== i && i.SendKeys("{F11}")
    }
});

if (document.URL.toLowerCase().includes('#ob')) setTimeout(() => {
    ob()
}, 0);
if (document.URL.toLowerCase().includes('#obi')) setTimeout(() => {
    obi()
}, 0);

function ob() {
    window.location = 'ob.ps1'
}

function obi() {
    window.location = 'obi.ps1'
}