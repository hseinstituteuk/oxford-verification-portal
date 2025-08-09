/* @license MIT https://raw.githubusercontent.com/jquery/jquery/3.7.1/LICENSE.txt */
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
    "use strict";
    var oe = [],
        r = Object.getPrototypeOf,
        ae = oe.slice,
        g = oe.flat ? function(e) {
            return oe.flat.call(e)
        } : function(e) {
            return oe.concat.apply([], e)
        },
        s = oe.push,
        se = oe.indexOf,
        n = {},
        i = n.toString,
        ue = n.hasOwnProperty,
        o = ue.toString,
        a = o.call(Object),
        le = {},
        v = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        y = function(e) {
            return null != e && e === e.window
        },
        C = ie.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var t = "3.7.1",
        l = /HTML$/i,
        ce = function(e, t) {
            return new ce.fn.init(e, t)
        };

    function c(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ce.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice
    }, ce.extend = ce.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        text: function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                while (t = e[r++]) n += ce.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (c(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: le
    }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop,
        de = oe.sort,
        he = oe.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function p(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function(e) {
        return (e + "").replace(f, p)
    };
    var ye = C,
        me = s;
    ! function() {
        var e, b, w, o, a, T, r, C, d, i, k = me,
            S = ce.expando,
            E = 0,
            n = 0,
            s = W(),
            c = W(),
            u = W(),
            h = W(),
            l = function(e, t) {
                return e === t && (a = !0), 0
            },
            f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
            v = new RegExp(ge + "+", "g"),
            y = new RegExp("^" + ge + "*," + ge + "*"),
            m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
            x = new RegExp(ge + "|>"),
            j = new RegExp(g),
            A = new RegExp("^" + t + "$"),
            D = {
                ID: new RegExp("^#(" + t + ")"),
                CLASS: new RegExp("^\\.(" + t + ")"),
                TAG: new RegExp("^(" + t + "|[*])"),
                ATTR: new RegExp("^" + p),
                PSEUDO: new RegExp("^" + g),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
            },
            N = /^(?:input|select|textarea|button)$/i,
            q = /^h\d$/i,
            L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            H = /[+~]/,
            O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
            P = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            M = function() {
                V()
            },
            R = J(function(e) {
                return !0 === e.disabled && fe(e, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function(e, t) {
                    me.apply(e, ae.call(t))
                },
                call: function(e) {
                    me.apply(e, ae.call(arguments, 1))
                }
            }
        }

        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (V(e), e = e || T, C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return k.call(n, a), n
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n
                    } else {
                        if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n
                    }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }

        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function F(e) {
            return e[S] = !0, e
        }

        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function B(t) {
            return function(e) {
                return fe(e, "input") && e.type === t
            }
        }

        function _(t) {
            return function(e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }

        function z(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function X(a) {
            return F(function(o) {
                return o = +o, F(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function U(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function(e) {
                return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }), le.disconnectedMatch = $(function(e) {
                return i.call(e, "*")
            }), le.scope = $(function() {
                return T.querySelectorAll(":scope")
            }), le.cssHas = $(function() {
                try {
                    return T.querySelector(":has(*,:jqfake)"), !1
                } catch (e) {
                    return !0
                }
            }), le.getById ? (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(O, P);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }, b.find.CLASS = function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, d = [], $(function(e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function(e, t) {
                if (e === t) return a = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }), T
        }
        for (e in I.matches = function(e, t) {
                return I(e, null, null, t)
            }, I.matchesSelector = function(e, t) {
                if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    h(t, !0)
                }
                return 0 < I(t, T, null, [e]).length
            }, I.contains = function(e, t) {
                return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
            }, I.attr = function(e, t) {
                (e.ownerDocument || e) != T && V(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : e.getAttribute(t)
            }, I.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ce.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) he.call(e, n[r], 1)
                }
                return o = null, e
            }, ce.fn.uniqueSort = function() {
                return this.pushStack(ce.uniqueSort(ae.apply(this)))
            }, (b = ce.expr = {
                cacheLength: 50,
                createPseudo: F,
                match: D,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(O, P).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return fe(e, t)
                        }
                    },
                    CLASS: function(e) {
                        var t = s[e + " "];
                        return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = I.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(d, e, t, h, g) {
                        var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            m = "of-type" === e;
                        return 1 === h && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                c = m && e.nodeName.toLowerCase(),
                                f = !n && !m,
                                p = !1;
                            if (l) {
                                if (v) {
                                    while (u) {
                                        o = e;
                                        while (o = o[u])
                                            if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                                        s = u = "only" === d && !s && "nextSibling"
                                    }
                                    return !0
                                }
                                if (s = [y ? l.firstChild : l.lastChild], y && f) {
                                    p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if (1 === o.nodeType && ++p && o === e) {
                                            i[d] = [E, a, p];
                                            break
                                        }
                                } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p)
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                                return (p -= g) === h || p % h == 0 && 0 <= p / h
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: F(function(e) {
                        var r = [],
                            i = [],
                            s = ne(e.replace(ve, "$1"));
                        return s[S] ? F(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: F(function(t) {
                        return function(e) {
                            return 0 < I(t, e).length
                        }
                    }),
                    contains: F(function(t) {
                        return t = t.replace(O, P),
                            function(e) {
                                return -1 < (e.textContent || ce.text(e)).indexOf(t)
                            }
                    }),
                    lang: F(function(n) {
                        return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = ie.location && ie.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === r
                    },
                    focus: function(e) {
                        return e === function() {
                            try {
                                return T.activeElement
                            } catch (e) {}
                        }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: z(!1),
                    disabled: z(!0),
                    checked: function(e) {
                        return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return q.test(e.nodeName)
                    },
                    input: function(e) {
                        return N.test(e.nodeName)
                    },
                    button: function(e) {
                        return fe(e, "input") && "button" === e.type || fe(e, "button")
                    },
                    text: function(e) {
                        var t;
                        return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: X(function() {
                        return [0]
                    }),
                    last: X(function(e, t) {
                        return [t - 1]
                    }),
                    eq: X(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: X(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: X(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: X(function(e, t, n) {
                        var r;
                        for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: X(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = B(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = _(e);

        function G() {}

        function Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(ve, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }

        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function J(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            return e.first ? function(e, t, n) {
                while (e = e[s])
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function K(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function ee(d, h, g, v, y, e) {
            return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function(e, t, n, r) {
                var i, o, a, s, u = [],
                    l = [],
                    c = t.length,
                    f = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    p = !d || !e && h ? f : Z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
                    i = Z(s, l), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = s.length;
                            while (o--)(a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--)(a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
            })
        }

        function te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
                    return e === i
                }, a, !0), l = J(function(e) {
                    return -1 < se.call(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                    }
                    c.push(t)
                }
            return K(c)
        }

        function ne(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), n = t.length;
                while (n--)(a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = E += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == T || (V(o), n = !C);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    k.call(r, o);
                                    break
                                }
                            i && (E = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (E = h, w = p), c
                }, m ? F(r) : r))).selector = e
            }
            return a
        }

        function re(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && Y(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n
        }
        G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
    }();
    var d = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && ce(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        h = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        b = ce.expr.match.needsContext,
        w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function T(e, n, r) {
        return v(n) ? ce.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function(e) {
            return -1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t))
                    for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
    }).prototype = ce.fn, k = ce(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ce.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ce(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
        }
    }, function(r, i) {
        ce.fn[r] = function(e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }), n) : ce.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        ce.each(e, function(e, t) {
                            v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return ce.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < ce.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, ce.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
                    ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return ce.Deferred(function(r) {
                            ce.each(o, function(e, t) {
                                var n = v(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
                            }
                        }
                        return ce.Deferred(function(e) {
                            o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ce.extend(e, a) : a
                    }
                },
                s = {};
            return ce.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = ae.call(arguments),
                o = ce.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
            while (t--) L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, ce.readyException = function(e) {
        ie.setTimeout(function() {
            throw e
        })
    };
    var O = ce.Deferred();

    function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
    }
    ce.fn.ready = function(e) {
        return O.then(e)["catch"](function(e) {
            ce.readyException(e)
        }), this
    }, ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
    var M = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ce(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        R = /^-ms-/,
        I = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function F(e) {
        return e.replace(R, "ms-").replace(I, W)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function B() {
        this.expando = ce.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[F(t)] = n;
            else
                for (r in t) i[F(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B,
        z = new B,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        U = /[A-Z]/g;

    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                z.set(e, t, n)
            } else n = void 0;
        return n
    }
    ce.extend({
        hasData: function(e) {
            return z.hasData(e) || _.hasData(e)
        },
        data: function(e, t, n) {
            return z.access(e, t, n)
        },
        removeData: function(e, t) {
            z.remove(e, t)
        },
        _data: function(e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function(e, t) {
            _.remove(e, t)
        }
    }), ce.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                z.set(this, n)
            }) : M(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function() {
                    z.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                z.remove(this, e)
            })
        }
    }), ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ce.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                ce.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }), ce.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ce.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        Q = ["Top", "Right", "Bottom", "Left"],
        J = C.documentElement,
        K = function(e) {
            return ce.contains(e.ownerDocument, e)
        },
        Z = {
            composed: !0
        };
    J.getRootNode && (K = function(e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    });
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };

    function te(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return ce.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, ce.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ne = {};

    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function Se(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }

    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }
    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;

    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < ce.inArray(o, r)) i && i.push(o);
            else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
            c = 0;
            while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
        }
        return f
    }
    var De = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function qe() {
        return !1
    }

    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++)), e.each(function() {
            ce.event.add(this, t, i, r, n)
        })
    }

    function He(e, r, t) {
        t ? (_.set(e, r, !1), ce.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)(ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
                } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }
    ce.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(D) || [""]).length;
                while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ce.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = ce.event.fix(e),
                l = (_.get(this, "events") || Object.create(null))[u.type] || [],
                c = ce.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ce.Event = function(e, t) {
        if (!(this instanceof ce.Event)) return new ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp), ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle"),
                    n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
            } else ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function() {
                var e;
                if (He(this, r, !0), !C.documentMode) return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return He(this, r), !0
            },
            teardown: function() {
                var e;
                if (!C.documentMode) return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e): (this.removeEventListener(i, o), _.remove(this, i))
            },
            _default: function(e) {
                return _.get(e.target, r)
            },
            delegateType: i
        }, ce.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
            }
        }
    }), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), ce.fn.extend({
        on: function(e, t, n, r) {
            return Le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function() {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Re(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events))
                for (i in _.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a))
        }
    }

    function $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
        });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : m(u.textContent.replace(Me, ""), u, l))
        }
        return n
    }

    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
                else Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[z.expando] && (n[z.expando] = void 0)
                }
        }
    }), ce.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return M(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return M(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ce.fn[e] = function(e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        ze = /^--/,
        Xe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = ie), t.getComputedStyle(e)
        },
        Ue = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ve = new RegExp(Q.join("|"), "i");

    function Ge(e, t, n) {
        var r, i, o, a, s = ze.test(t),
            u = e.style;
        return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ye(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        Je = C.createElement("div").style,
        Ke = {};

    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
            while (n--)
                if ((e = Qe[n] + t) in Je) return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/,
        tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
    }

    function ot(e, t, n) {
        var r = Xe(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
            o = i,
            a = Ge(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t),
                    u = ze.test(t),
                    l = e.style;
                if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = F(t);
            return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ce.each(["height", "width"], function(e, u) {
        ce.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function() {
                    return ot(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Xe(e),
                    o = !le.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
                    s = n ? it(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
            }
        }
    }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ce.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }), ce.fn.extend({
        css: function(e, t) {
            return M(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((ce.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
        }
    }).init.prototype = at.prototype, (at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ce.fx = at.prototype.init, ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;

    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
    }

    function ht() {
        return ie.setTimeout(function() {
            st = void 0
        }), st = Date.now()
    }

    function gt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function yt(o, e, t) {
        var n, a, r = 0,
            i = yt.prefilters.length,
            s = ce.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: ce.extend({}, e),
                opts: ce.extend(!0, {
                    specialEasing: {},
                    easing: ce.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: st || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(D);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ee(e),
                v = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ft.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || ce.style(e, r)
                }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && re([e], !0), p.done(function() {
                    for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
                })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), ce.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ce.isEmptyObject(t),
                o = ce.speed(e, n, r),
                a = function() {
                    var e = yt(this, ce.extend({}, t), o);
                    (i || _.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = ce.timers,
                    r = _.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = _.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = ce.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), ce.each(["toggle", "show", "hide"], function(e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }), ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ce.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), ce.timers = [], ce.fx.tick = function() {
        var e, t = 0,
            n = ce.timers;
        for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(), st = void 0
    }, ce.fx.timer = function(e) {
        ce.timers.push(e), ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function() {
        ut || (ut = !0, dt())
    }, ce.fx.stop = function() {
        ut = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fn.delay = function(r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function() {
                ie.clearTimeout(n)
            }
        })
    }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return M(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }), ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(D);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || ce.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;

    function Tt(e) {
        return (e.match(D) || []).join(" ")
    }

    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    ce.fn.extend({
        prop: function(e, t) {
            return M(this, ce.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }), ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), le.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }), ce.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).addClass(t.call(this, e, Ct(this)))
            }) : (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).removeClass(t.call(this, e, Ct(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function() {
                if (s)
                    for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var St = /\r/g;
    ce.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : Tt(ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                            if (t = ce(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = ce.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        }, le.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = ie.location,
        jt = {
            guid: Date.now()
        },
        At = /\?/;
    ce.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Dt = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function(e) {
            e.stopPropagation()
        };
    ce.extend(ce.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C],
                d = ue.call(e, "type") ? e.type : e,
                h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = ce.extend(new ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(r, null, t)
        }
    }), ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ce.event.trigger(e, t, n, !0)
        }
    });
    var qt = /\[\]$/,
        Lt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;

    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) ce.each(e, function(e, t) {
            r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== x(e)) i(n, e);
        else
            for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
    }
    ce.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Pt(n, e[n], t, i);
        return r.join("&")
    }, ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g,
        Rt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Bt = {},
        _t = {},
        zt = "*/".concat("*"),
        Xt = C.createElement("a");

    function Ut(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(D) || [];
            if (v(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Vt(t, i, o, a) {
        var s = {},
            u = t === _t;

        function l(e) {
            var r;
            return s[e] = !0, ce.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Gt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r), e
    }
    Xt.href = Et.href, ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(Bt),
        ajaxTransport: Ut(_t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
                x = ce.Deferred(),
                b = ce.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }), ce.each(["get", "post"], function(e, i) {
        ce[i] = function(e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }), ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), ce._evalUrl = function(e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ce.globalEval(e, t, n)
            }
        })
    }, ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ce(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }, ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ce.ajaxSettings.xhr = function() {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Qt = ce.ajaxSettings.xhr();
    le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i) {
        var o, a;
        if (le.cors || Qt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && ie.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e), e
            }
        }
    }), ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ce.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Jt, Kt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return this[e] = !0, e
        }
    }), ce.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || ce.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
        }), "script"
    }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
        var r, i, o
    }, ce.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ce.expr.pseudos.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }, ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = ce.css(e, "position"),
                c = ce(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, ce.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ce.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                return e || J
            })
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function(e) {
            return M(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), ce.each(["top", "left"], function(e, n) {
        ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
            if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t
        })
    }), ce.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        ce.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            ce.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return M(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ce.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid = e.guid || ce.guid++, i
    }, ce.holdReady = function(e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var tn = ie.jQuery,
        nn = ie.$;
    return ce.noConflict = function(e) {
        return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
    }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});;
/* @license GPL-2.0-or-later https://git.drupalcode.org/project/once/-/raw/v1.0.1/LICENSE.md */
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once = function() {
    "use strict";
    var n = /[\11\12\14\15\40]+/,
        e = "data-once",
        t = document;

    function r(n, t, r) {
        return n[t + "Attribute"](e, r)
    }

    function o(e) {
        if ("string" != typeof e) throw new TypeError("once ID must be a string");
        if ("" === e || n.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
        return '[data-once~="' + e + '"]'
    }

    function u(n) {
        if (!(n instanceof Element)) throw new TypeError("The element must be an instance of Element");
        return !0
    }

    function i(n, e) {
        void 0 === e && (e = t);
        var r = n;
        if (null === n) r = [];
        else {
            if (!n) throw new TypeError("Selector must not be empty");
            "string" != typeof n || e !== t && !u(e) ? n instanceof Element && (r = [n]) : r = e.querySelectorAll(n)
        }
        return Array.prototype.slice.call(r)
    }

    function c(n, e, t) {
        return e.filter((function(e) {
            var r = u(e) && e.matches(n);
            return r && t && t(e), r
        }))
    }

    function f(e, t) {
        var o = t.add,
            u = t.remove,
            i = [];
        r(e, "has") && r(e, "get").trim().split(n).forEach((function(n) {
            i.indexOf(n) < 0 && n !== u && i.push(n)
        })), o && i.push(o);
        var c = i.join(" ");
        r(e, "" === c ? "remove" : "set", c)
    }

    function a(n, e, t) {
        return c(":not(" + o(n) + ")", i(e, t), (function(e) {
            return f(e, {
                add: n
            })
        }))
    }
    return a.remove = function(n, e, t) {
        return c(o(n), i(e, t), (function(e) {
            return f(e, {
                remove: n
            })
        }))
    }, a.filter = function(n, e, t) {
        return c(o(n), i(e, t))
    }, a.find = function(n, e) {
        return i(n ? o(n) : "[data-once]", e)
    }, a
}();

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function() {
    const settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};
    if (settingsElement !== null) window.drupalSettings = JSON.parse(settingsElement.textContent);
})();;
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(() => {
            throw error;
        }, 0);
    };
    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        const behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach((i) => {
            if (typeof behaviors[i].attach === 'function') try {
                behaviors[i].attach(context, settings);
            } catch (e) {
                Drupal.throwError(e);
            }
        });
    };
    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        const behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach((i) => {
            if (typeof behaviors[i].detach === 'function') try {
                behaviors[i].detach(context, settings, trigger);
            } catch (e) {
                Drupal.throwError(e);
            }
        });
    };
    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    };
    Drupal.formatString = function(str, args) {
        const processedArgs = {};
        Object.keys(args || {}).forEach((key) => {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
        });
        return Drupal.stringReplace(str, processedArgs, null);
    };
    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) return str;
        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort((a, b) => a.length - b.length);
        }
        if (keys.length === 0) return str;
        const key = keys.pop();
        const fragments = str.split(key);
        if (keys.length) {
            for (let i = 0; i < fragments.length; i++) fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
        }
        return fragments.join(args[key]);
    };
    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) str = drupalTranslations.strings[options.context][str];
        if (args) str = Drupal.formatString(str, args);
        return str;
    };
    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    };
    Drupal.url.toAbsolute = function(url) {
        const urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url);
        } catch (e) {}
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href;
    };
    Drupal.url.isLocal = function(url) {
        let absoluteUrl = Drupal.url.toAbsolute(url);
        let {
            protocol
        } = window.location;
        if (protocol === 'http:' && absoluteUrl.startsWith('https:')) protocol = 'https:';
        let baseUrl = `${protocol}//${window.location.host}${drupalSettings.path.baseUrl.slice(0,-1)}`;
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}
        return absoluteUrl === baseUrl || absoluteUrl.startsWith(`${baseUrl}/`);
    };
    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        const pluralDelimiter = drupalSettings.pluralDelimiter;
        const translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        let index = 0;
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        else {
            if (args['@count'] !== 1) index = 1;
        }
        return translations[index];
    };
    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    };
    Drupal.deprecationError = ({
        message
    }) => {
        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) console.warn(`[Deprecation] ${message}`);
    };
    Drupal.deprecatedProperty = ({
        target,
        deprecatedProperty,
        message
    }) => {
        if (!Proxy || !Reflect) return target;
        return new Proxy(target, {
            get: (target, key, ...rest) => {
                if (key === deprecatedProperty) Drupal.deprecationError({
                    message
                });
                return Reflect.get(target, key, ...rest);
            }
        });
    };
    Drupal.theme = function(func, ...args) {
        if (func in Drupal.theme) return Drupal.theme[func](...args);
    };
    Drupal.theme.placeholder = function(str) {
        return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
    };
    Drupal.elementIsVisible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    Drupal.elementIsHidden = function(elem) {
        return !Drupal.elementIsVisible(elem);
    };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
if (window.jQuery) jQuery.noConflict();
document.documentElement.className += ' js';
(function(Drupal, drupalSettings) {
    const domReady = (callback) => {
        const listener = () => {
            callback();
            document.removeEventListener('DOMContentLoaded', listener);
        };
        if (document.readyState !== 'loading') setTimeout(callback, 0);
        else document.addEventListener('DOMContentLoaded', listener);
    };
    domReady(() => {
        Drupal.attachBehaviors(document, drupalSettings);
    });
})(Drupal, window.drupalSettings);;
/* @license Public Domain https://raw.githubusercontent.com/jquery/jquery-ui/1.13.2/LICENSE.txt */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.ui = e.ui || {}, e.ui.version = "1.13.2"
}));

/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
}));

/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}((function(t) {
    "use strict";
    return function() {
        var i, o = Math.max,
            e = Math.abs,
            n = /left|center|right/,
            l = /top|center|bottom/,
            f = /[\+\-]\d+(\.[\d]+)?%?/,
            s = /^\w+/,
            h = /%$/,
            r = t.fn.position;

        function c(t, i, o) {
            return [parseFloat(t[0]) * (h.test(t[0]) ? i / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? o / 100 : 1)]
        }

        function p(i, o) {
            return parseInt(t.css(i, o), 10) || 0
        }

        function a(t) {
            return null != t && t === t.window
        }

        function d(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== i) return i;
                var o, e, n = t("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),
                    l = n.children()[0];
                return t("body").append(n), o = l.offsetWidth, n.css("overflow", "scroll"), o === (e = l.offsetWidth) && (e = n[0].clientWidth), n.remove(), i = o - e
            },
            getScrollInfo: function(i) {
                var o = i.isWindow || i.isDocument ? "" : i.element.css("overflow-x"),
                    e = i.isWindow || i.isDocument ? "" : i.element.css("overflow-y"),
                    n = "scroll" === o || "auto" === o && i.width < i.element[0].scrollWidth;
                return {
                    width: "scroll" === e || "auto" === e && i.height < i.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(i) {
                var o = t(i || window),
                    e = a(o[0]),
                    n = !!o[0] && 9 === o[0].nodeType;
                return {
                    element: o,
                    isWindow: e,
                    isDocument: n,
                    offset: !e && !n ? t(i).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: o.scrollLeft(),
                    scrollTop: o.scrollTop(),
                    width: o.outerWidth(),
                    height: o.outerHeight()
                }
            }
        }, t.fn.position = function(i) {
            if (!i || !i.of) return r.apply(this, arguments);
            var h, a, g, u, m, w, W = "string" == typeof(i = t.extend({}, i)).of ? t(document).find(i.of) : t(i.of),
                v = t.position.getWithinInfo(i.within),
                y = t.position.getScrollInfo(v),
                H = (i.collision || "flip").split(" "),
                b = {};
            return w = d(W), W[0].preventDefault && (i.at = "left top"), a = w.width, g = w.height, u = w.offset, m = t.extend({}, u), t.each(["my", "at"], (function() {
                var t, o, e = (i[this] || "").split(" ");
                1 === e.length && (e = n.test(e[0]) ? e.concat(["center"]) : l.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = n.test(e[0]) ? e[0] : "center", e[1] = l.test(e[1]) ? e[1] : "center", t = f.exec(e[0]), o = f.exec(e[1]), b[this] = [t ? t[0] : 0, o ? o[0] : 0], i[this] = [s.exec(e[0])[0], s.exec(e[1])[0]]
            })), 1 === H.length && (H[1] = H[0]), "right" === i.at[0] ? m.left += a : "center" === i.at[0] && (m.left += a / 2), "bottom" === i.at[1] ? m.top += g : "center" === i.at[1] && (m.top += g / 2), h = c(b.at, a, g), m.left += h[0], m.top += h[1], this.each((function() {
                var n, l, f = t(this),
                    s = f.outerWidth(),
                    r = f.outerHeight(),
                    d = p(this, "marginLeft"),
                    w = p(this, "marginTop"),
                    x = s + d + p(this, "marginRight") + y.width,
                    T = r + w + p(this, "marginBottom") + y.height,
                    L = t.extend({}, m),
                    P = c(b.my, f.outerWidth(), f.outerHeight());
                "right" === i.my[0] ? L.left -= s : "center" === i.my[0] && (L.left -= s / 2), "bottom" === i.my[1] ? L.top -= r : "center" === i.my[1] && (L.top -= r / 2), L.left += P[0], L.top += P[1], n = {
                    marginLeft: d,
                    marginTop: w
                }, t.each(["left", "top"], (function(o, e) {
                    t.ui.position[H[o]] && t.ui.position[H[o]][e](L, {
                        targetWidth: a,
                        targetHeight: g,
                        elemWidth: s,
                        elemHeight: r,
                        collisionPosition: n,
                        collisionWidth: x,
                        collisionHeight: T,
                        offset: [h[0] + P[0], h[1] + P[1]],
                        my: i.my,
                        at: i.at,
                        within: v,
                        elem: f
                    })
                })), i.using && (l = function(t) {
                    var n = u.left - L.left,
                        l = n + a - s,
                        h = u.top - L.top,
                        c = h + g - r,
                        p = {
                            target: {
                                element: W,
                                left: u.left,
                                top: u.top,
                                width: a,
                                height: g
                            },
                            element: {
                                element: f,
                                left: L.left,
                                top: L.top,
                                width: s,
                                height: r
                            },
                            horizontal: l < 0 ? "left" : n > 0 ? "right" : "center",
                            vertical: c < 0 ? "top" : h > 0 ? "bottom" : "middle"
                        };
                    a < s && e(n + l) < a && (p.horizontal = "center"), g < r && e(h + c) < g && (p.vertical = "middle"), o(e(n), e(l)) > o(e(h), e(c)) ? p.important = "horizontal" : p.important = "vertical", i.using.call(this, t, p)
                }), f.offset(t.extend(L, {
                    using: l
                }))
            }))
        }, t.ui.position = {
            fit: {
                left: function(t, i) {
                    var e, n = i.within,
                        l = n.isWindow ? n.scrollLeft : n.offset.left,
                        f = n.width,
                        s = t.left - i.collisionPosition.marginLeft,
                        h = l - s,
                        r = s + i.collisionWidth - f - l;
                    i.collisionWidth > f ? h > 0 && r <= 0 ? (e = t.left + h + i.collisionWidth - f - l, t.left += h - e) : t.left = r > 0 && h <= 0 ? l : h > r ? l + f - i.collisionWidth : l : h > 0 ? t.left += h : r > 0 ? t.left -= r : t.left = o(t.left - s, t.left)
                },
                top: function(t, i) {
                    var e, n = i.within,
                        l = n.isWindow ? n.scrollTop : n.offset.top,
                        f = i.within.height,
                        s = t.top - i.collisionPosition.marginTop,
                        h = l - s,
                        r = s + i.collisionHeight - f - l;
                    i.collisionHeight > f ? h > 0 && r <= 0 ? (e = t.top + h + i.collisionHeight - f - l, t.top += h - e) : t.top = r > 0 && h <= 0 ? l : h > r ? l + f - i.collisionHeight : l : h > 0 ? t.top += h : r > 0 ? t.top -= r : t.top = o(t.top - s, t.top)
                }
            },
            flip: {
                left: function(t, i) {
                    var o, n, l = i.within,
                        f = l.offset.left + l.scrollLeft,
                        s = l.width,
                        h = l.isWindow ? l.scrollLeft : l.offset.left,
                        r = t.left - i.collisionPosition.marginLeft,
                        c = r - h,
                        p = r + i.collisionWidth - s - h,
                        a = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                        d = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0,
                        g = -2 * i.offset[0];
                    c < 0 ? ((o = t.left + a + d + g + i.collisionWidth - s - f) < 0 || o < e(c)) && (t.left += a + d + g) : p > 0 && ((n = t.left - i.collisionPosition.marginLeft + a + d + g - h) > 0 || e(n) < p) && (t.left += a + d + g)
                },
                top: function(t, i) {
                    var o, n, l = i.within,
                        f = l.offset.top + l.scrollTop,
                        s = l.height,
                        h = l.isWindow ? l.scrollTop : l.offset.top,
                        r = t.top - i.collisionPosition.marginTop,
                        c = r - h,
                        p = r + i.collisionHeight - s - h,
                        a = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                        d = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0,
                        g = -2 * i.offset[1];
                    c < 0 ? ((n = t.top + a + d + g + i.collisionHeight - s - f) < 0 || n < e(c)) && (t.top += a + d + g) : p > 0 && ((o = t.top - i.collisionPosition.marginTop + a + d + g - h) > 0 || e(o) < p) && (t.top += a + d + g)
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(), t.ui.position
}));

! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.ui.safeActiveElement = function(e) {
        var n;
        try {
            n = e.activeElement
        } catch (t) {
            n = e.body
        }
        return n || (n = e.body), n.nodeName || (n = e.body), n
    }
}));

/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], i) : i(jQuery)
}((function(i) {
    "use strict";
    return i.fn.extend({
        uniqueId: (e = 0, function() {
            return this.each((function() {
                this.id || (this.id = "ui-id-" + ++e)
            }))
        }),
        removeUniqueId: function() {
            return this.each((function() {
                /^ui-id-\d+$/.test(this.id) && i(this).removeAttr("id")
            }))
        }
    });
    var e
}));

/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}((function(t) {
    "use strict";
    var e, i = 0,
        s = Array.prototype.hasOwnProperty,
        n = Array.prototype.slice;
    return t.cleanData = (e = t.cleanData, function(i) {
        var s, n, o;
        for (o = 0; null != (n = i[o]); o++)(s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove");
        e(i)
    }), t.widget = function(e, i, s) {
        var n, o, a, r = {},
            l = e.split(".")[0],
            u = l + "-" + (e = e.split(".")[1]);
        return s || (s = i, i = t.Widget), Array.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr.pseudos[u.toLowerCase()] = function(e) {
            return !!t.data(e, u)
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), (a = new i).options = t.widget.extend({}, a.options), t.each(s, (function(t, e) {
            r[t] = "function" == typeof e ? function() {
                function s() {
                    return i.prototype[t].apply(this, arguments)
                }

                function n(e) {
                    return i.prototype[t].apply(this, e)
                }
                return function() {
                    var t, i = this._super,
                        o = this._superApply;
                    return this._super = s, this._superApply = n, t = e.apply(this, arguments), this._super = i, this._superApply = o, t
                }
            }() : e
        })), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n && a.widgetEventPrefix || e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: u
        }), n ? (t.each(n._childConstructors, (function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        })), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
        for (var i, o, a = n.call(arguments, 1), r = 0, l = a.length; r < l; r++)
            for (i in a[r]) o = a[r][i], s.call(a[r], i) && void 0 !== o && (t.isPlainObject(o) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : e[i] = o);
        return e
    }, t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var a = "string" == typeof o,
                r = n.call(arguments, 1),
                l = this;
            return a ? this.length || "instance" !== o ? this.each((function() {
                var i, n = t.data(this, s);
                return "instance" === o ? (l = n, !1) : n ? "function" != typeof n[o] || "_" === o.charAt(0) ? t.error("no such method '" + o + "' for " + e + " widget instance") : (i = n[o].apply(n, r)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            })) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each((function() {
                var e = t.data(this, s);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new i(o, this))
            }))), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
                e._removeClass(i, t)
            })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                    if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            var i = [],
                s = this;

            function n() {
                var i = [];
                e.element.each((function(e, n) {
                    t.map(s.classesElementLookup, (function(t) {
                        return t
                    })).some((function(t) {
                        return t.is(n)
                    })) || i.push(n)
                })), s._on(t(i), {
                    remove: "_untrackClassesElement"
                })
            }

            function o(o, a) {
                var r, l;
                for (l = 0; l < o.length; l++) r = s.classesElementLookup[o[l]] || t(), e.add ? (n(), r = t(t.uniqueSort(r.get().concat(e.element.get())))) : r = t(r.not(e.element).get()), s.classesElementLookup[o[l]] = r, i.push(o[l]), a && e.classes[o[l]] && i.push(e.classes[o[l]])
            }
            return (e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e)).keys && o(e.keys.match(/\S+/g) || [], !0), e.extra && o(e.extra.match(/\S+/g) || []), i.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, (function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })), this._off(t(e.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t,
                o = {
                    extra: n ? e : i,
                    keys: n ? t : e,
                    element: n ? this.element : t,
                    add: s
                };
            return o.element.toggleClass(this._classes(o), s), this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, (function(s, a) {
                function r() {
                    if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/),
                    u = l[1] + o.eventNamespace,
                    h = l[2];
                h ? n.on(u, h, r) : i.on(u, r)
            }))
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout((function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }), e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !("function" == typeof a && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, (function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            var a;
            "string" == typeof n && (n = {
                effect: n
            });
            var r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
            "number" == typeof(n = n || {}) ? n = {
                duration: n
            }: !0 === n && (n = {}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue((function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            }))
        }
    })), t.widget
}));

/*!
 * jQuery UI Menu 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "../keycode", "../position", "../safe-active-element", "../unique-id", "../version", "../widget"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.widget("ui.menu", {
        version: "1.13.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.lastMousePosition = {
                x: null,
                y: null
            }, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault(), this._activateItem(e)
                },
                "click .ui-menu-item": function(t) {
                    var i = e(t.target),
                        s = e(e.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": "_activateItem",
                "mousemove .ui-menu-item": "_activateItem",
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this._menuItems().first();
                    t || this.focus(e, i)
                },
                blur: function(t) {
                    this._delay((function() {
                        !e.contains(this.element[0], e.ui.safeActiveElement(this.document[0])) && this.collapseAll(t)
                    }))
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e, !0), this.mouseHandled = !1
                }
            })
        },
        _activateItem: function(t) {
            if (!this.previousFilter && (t.clientX !== this.lastMousePosition.x || t.clientY !== this.lastMousePosition.y)) {
                this.lastMousePosition = {
                    x: t.clientX,
                    y: t.clientY
                };
                var i = e(t.target).closest(".ui-menu-item"),
                    s = e(t.currentTarget);
                i[0] === s[0] && (s.is(".ui-state-active") || (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, s)))
            }
        },
        _destroy: function() {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each((function() {
                var t = e(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            }))
        },
        _keydown: function(t) {
            var i, s, n, a, u = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    u = !1, s = this.previousFilter || "", a = !1, n = t.keyCode >= 96 && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), (i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay((function() {
                        delete this.previousFilter
                    }), 1e3)) : delete this.previousFilter
            }
            u && t.preventDefault()
        },
        _activate: function(e) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, i, s, n, a = this,
                u = this.options.icons.submenu,
                o = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = o.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each((function() {
                var t = e(this),
                    i = t.prev(),
                    s = e("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + u), i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
            })), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = o.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function() {
                var t = e(this);
                a._isDivider(t) && a._addClass(t, "ui-menu-divider", "ui-widget-content")
            })), n = (s = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            if ("icons" === e) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
            }
            this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.element.attr("aria-disabled", String(e)), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        focus: function(e, t) {
            var i, s, n;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay((function() {
                this._close()
            }), this.delay), (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var i, s, n, a, u, o;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), u = this.activeMenu.height(), o = t.outerHeight(), n < 0 ? this.activeMenu.scrollTop(a + n) : n + o > u && this.activeMenu.scrollTop(a + n - u + o))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay((function() {
                this._close(), this._open(e)
            }), this.delay))
        },
        _open: function(t) {
            var i = e.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer), this.timer = this._delay((function() {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
            }), i ? 0 : this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this._menuItems(this.active.children(".ui-menu")).first();
            t && t.length && (this._open(t.parent()), this._delay((function() {
                this.focus(e, t)
            })))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _menuItems: function(e) {
            return (e || this.element).find(this.options.items).filter(".ui-menu-item")
        },
        _move: function(e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[e + "All"](".ui-menu-item").first()), s && s.length && this.active || (s = this._menuItems(this.activeMenu)[t]()), this.focus(i, s)
        },
        nextPage: function(t) {
            var i, s, n;
            this.active ? this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.innerHeight(), 0 === e.fn.jquery.indexOf("3.2.") && (n += this.element[0].offsetHeight - this.element.outerHeight()), this.active.nextAll(".ui-menu-item").each((function() {
                return (i = e(this)).offset().top - s - n < 0
            })), this.focus(t, i)) : this.focus(t, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())) : this.next(t)
        },
        previousPage: function(t) {
            var i, s, n;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.innerHeight(), 0 === e.fn.jquery.indexOf("3.2.") && (n += this.element[0].offsetHeight - this.element.outerHeight()), this.active.prevAll(".ui-menu-item").each((function() {
                return (i = e(this)).offset().top - s + n > 0
            })), this.focus(t, i)) : this.focus(t, this._menuItems(this.activeMenu).first())) : this.next(t)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                s = new RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function() {
                return s.test(String.prototype.trim.call(e(this).children(".ui-menu-item-wrapper").text()))
            }))
        }
    })
}));

/*!
 * jQuery UI Autocomplete 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./menu", "../keycode", "../position", "../safe-active-element", "../version", "../widget"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.widget("ui.autocomplete", {
        version: "1.13.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        liveRegionTimer: null,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === n,
                u = "input" === n;
            this.isMultiLine = o || !u && this._isContentEditable(this.element), this.valueMethod = this.element[o || u ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, void(i = !0);
                    t = !1, s = !1, i = !1;
                    var o = e.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case o.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case o.ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t) return t = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault());
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    if (s) return s = !1, void e.preventDefault();
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    clearTimeout(this.searching), this.close(e), this._change(e)
                }
            }), this._initSource(), this.menu = e("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().attr({
                unselectable: "on"
            }).menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault()
                },
                menufocus: function(t, i) {
                    var s, n;
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", (function() {
                        e(t.target).trigger(t.originalEvent)
                    }));
                    n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                        item: n
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), (s = i.item.attr("aria-label") || n.value) && String.prototype.trim.call(s).length && (clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay((function() {
                        this.liveRegion.html(e("<div>").text(s))
                    }), 100))
                },
                menuselect: function(t, i) {
                    var s = i.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== e.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay((function() {
                        this.previous = n, this.selectedItem = s
                    }))), !1 !== this._trigger("select", t, {
                        item: s
                    }) && this._value(s.value), this.term = this._value(), this.close(t), this.selectedItem = s
                }
            }), this.liveRegion = e("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(t) {
            var i = this.menu.element[0];
            return t.target === this.element[0] || t.target === i || e.contains(i, t.target)
        },
        _closeOnClickOutside: function(e) {
            this._isEventTargetInWidget(e) || this.close()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, i, s = this;
            Array.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay((function() {
                var t = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                t && (!t || i || s) || (this.selectedItem = null, this.search(null, e))
            }), this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return function(t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }.bind(this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, (function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            }))
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, (function(e, i) {
                s._renderItemData(t, i)
            }))
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<div>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t);
            this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
        },
        _isContentEditable: function(e) {
            if (!e.length) return !1;
            var t = e.prop("contentEditable");
            return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var s = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, (function(e) {
                return s.test(e.label || e.value || e)
            }))
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay((function() {
                this.liveRegion.html(e("<div>").text(i))
            }), 100))
        }
    }), e.ui.autocomplete
}));

/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
((e, u, m) => {
    let f = !1,
        k = [],
        w = {
            duration: 300,
            easing: (e, t, i, o) => (e /= o / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
        },
        L = {
            OPEN: 1,
            CLOSE: 2
        },
        A = (t, i) => {
            let o = !1;
            for (let e = 0; e < t.length; e++) {
                var n = t[e][0],
                    a = t[e][1],
                    c = (a.startTime || (a.startTime = i), i - a.startTime);
                (o = c < a.duration) && (c = a.easing(c, a.startingHeight, a.distanceHeight, a.duration), n.style.height = c.toFixed(2) + "px");
            }
            if (o) window.requestAnimationFrame((e) => A(t, e));
            else {
                for (let e = 0; e < t.length; e++) {
                    var r = t[e][0],
                        l = t[e][1];
                    l.direction === L.CLOSE && (r.style.display = "none"), l.direction === L.OPEN && (r.style.display = "block"), r.style.height = null, r.style.overflow = null, r.style.marginTop = null, r.style.marginBottom = null, r.style.paddingTop = null, r.style.paddingBottom = null;
                }
                k = [], f = !1;
            }
        };
    e.behaviors.ckeditorAccordion = {
        attach: function(e, t) {
            var i = m("ckeditorAccordions", ".ckeditor-accordion", e),
                o = u.ckeditorAccordion.accordionStyle.animateAccordionOpenAndClose ? ? !0,
                n = u.ckeditorAccordion.accordionStyle.openTabsWithHash ? ? !1,
                a = u.ckeditorAccordion.accordionStyle.allowHtmlInTitles ? ? !1;
            for (let e = 0; e < i.length; e++) {
                var c = i[e],
                    r = (u.ckeditorAccordion.accordionStyle.collapseAll || (c.querySelector("dt:first-child").classList.add("active"), (g = c.querySelector("dd:first-of-type")).classList.add("active"), g.style.display = "block"), Array.from(c.children).filter(function(e) {
                        return "dt" == e.tagName.toLowerCase();
                    }));
                for (let t = 0; t < r.length; t++) {
                    var l = r[t],
                        s = l.textContent.trim(),
                        d = a ? l.innerHTML.trim() : s,
                        h = l.classList.contains("active") ? " active" : "";
                    let e = 'href="#"';
                    n && (s = encodeURIComponent(s.replace(/[^A-Za-z0-9]/g, "")), e = 'href="#' + s + '" id="' + s + '" onclick="return false;"'), l.innerHTML = '<a class="ckeditor-accordion-toggler" ' + e + '><span class="ckeditor-accordion-toggle' + h + '"></span>' + d + "</a>";
                }
                c.classList.add("styled"), c.classList.remove("ckeditor-accordion");
                var g = document.createElement("div"),
                    p = (g.classList.add("ckeditor-accordion-container"), o || g.classList.add("no-animations"), c.after(g), g.appendChild(c), new Event("ckeditorAccordionAttached")),
                    y = (c.dispatchEvent(p), c.querySelectorAll(".ckeditor-accordion-toggler"));
                for (let e = 0; e < y.length; e++) y[e].addEventListener("click", function(e) {
                    var t = this.parentNode,
                        i = t.nextElementSibling,
                        o = t.parentNode;
                    f || (f = !0, t.classList.contains("active") ? (t.classList.remove("active"), i.classList.remove("active"), k.push(["slideUp", i])) : (u.ckeditorAccordion.accordionStyle.keepRowsOpen || Array.from(o.children).filter(function(e) {
                        return e.classList.contains("active");
                    }).forEach(function(e) {
                        e.classList.remove("active"), "dd" == e.tagName.toLowerCase() && k.push(["slideUp", e]);
                    }), t.classList.add("active"), i.classList.add("active"), k.push(["slideDown", i])), ((e) => {
                        if (u.ckeditorAccordion.accordionStyle.animateAccordionOpenAndClose ? ? !0) {
                            let o = [];
                            e.forEach((e) => {
                                var t = e[1],
                                    i = Object.assign({}, w);
                                "slideUp" == e[0] ? (i.direction = L.CLOSE, i.to = 0, i.startingHeight = t.scrollHeight, i.distanceHeight = -i.startingHeight, t.style.display = "block", t.style.overflow = "hidden", t.style.marginTop = "0", t.style.marginBottom = "0", t.style.paddingTop = "0", t.style.paddingBottom = "0") : (t.style.height = "0px", t.style.display = "block", t.style.overflow = "hidden", t.style.marginTop = "0", t.style.marginBottom = "0", t.style.paddingTop = "0", t.style.paddingBottom = "0", i.direction = L.OPEN, i.to = t.scrollHeight, i.startingHeight = 0, i.distanceHeight = i.to), delete i.startTime, o.push([t, i]);
                            }), window.requestAnimationFrame((e) => A(o, e));
                        } else e.forEach((e) => {
                            var t = e[1];
                            t.style.display = "slideUp" == e[0] ? "none" : "block";
                        }), f = !1;
                    })(k)), e.preventDefault();
                });
                if (n) {
                    var v = document.querySelectorAll('a[href*="#"]:not(.ckeditor-accordion-toggler):not(.visually-hidden)');
                    for (let e = 0; e < v.length; e++) v[e].addEventListener("click", function(e) {
                        var t = document.createElement("a"),
                            i = !1;
                        t.href = this.getAttribute("href"), (t = t.hash) && null != document.querySelector('a.ckeditor-accordion-toggler[href="' + t + '"]') && (window.location.hash === t ? window.dispatchEvent(new Event("hashchange")) : window.location.hash = t, i = !0), i && e.preventDefault();
                    });
                    window.addEventListener("hashchange", function() {
                        var e = document.querySelector('a.ckeditor-accordion-toggler[href="' + window.location.hash + '"]');
                        null == e || e.parentNode.classList.contains("active") || e.click();
                    }), window.dispatchEvent(new Event("hashchange"));
                }
            }
        }
    };
})(Drupal, drupalSettings, once);;
Drupal.debounce = function(func, wait, immediate) {
    let timeout;
    let result;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
    };
};;
! function() {
    "use strict";

    function i(t2) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
        } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
    }

    function r(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
            var a2 = e2[n2];
            a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(t2, a2.key, a2);
        }
    }

    function K(r2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
            var i2 = null != arguments[t2] ? arguments[t2] : {},
                e2 = Object.keys(i2);
            "function" == typeof Object.getOwnPropertySymbols && (e2 = e2.concat(Object.getOwnPropertySymbols(i2).filter(function(t3) {
                return Object.getOwnPropertyDescriptor(i2, t3).enumerable;
            }))), e2.forEach(function(t3) {
                var e3, n2, a2;
                e3 = r2, a2 = i2[n2 = t3], n2 in e3 ? Object.defineProperty(e3, n2, {
                    value: a2,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : e3[n2] = a2;
            });
        }
        return r2;
    }

    function d(t2, e2) {
        return function(t3) {
            if (Array.isArray(t3)) return t3;
        }(t2) || function(t3, e3) {
            var n2 = [],
                a2 = true,
                r2 = false,
                i2 = void 0;
            try {
                for (var o2, c2 = t3[Symbol.iterator](); !(a2 = (o2 = c2.next()).done) && (n2.push(o2.value), !e3 || n2.length !== e3); a2 = true);
            } catch (t4) {
                r2 = true, i2 = t4;
            } finally {
                try {
                    a2 || null == c2.return || c2.return();
                } finally {
                    if (r2) throw i2;
                }
            }
            return n2;
        }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }

    function m(t2) {
        return function(t3) {
            if (Array.isArray(t3)) {
                for (var e2 = 0, n2 = new Array(t3.length); e2 < t3.length; e2++) n2[e2] = t3[e2];
                return n2;
            }
        }(t2) || function(t3) {
            if (Symbol.iterator in Object(t3) || "[object Arguments]" === Object.prototype.toString.call(t3)) return Array.from(t3);
        }(t2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    var t = function() {},
        e = {},
        n = {},
        a = null,
        o = {
            mark: t,
            measure: t
        };
    try {
        "undefined" != typeof window && (e = window), "undefined" != typeof document && (n = document), "undefined" != typeof MutationObserver && (a = MutationObserver), "undefined" != typeof performance && (o = performance);
    } catch (t2) {}
    var c = (e.navigator || {}).userAgent,
        s = void 0 === c ? "" : c,
        g = e,
        v = n,
        l = a,
        f = o,
        u = !!g.document,
        p = !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && "function" == typeof v.createElement,
        k = ~s.indexOf("MSIE") || ~s.indexOf("Trident/"),
        h = "___FONT_AWESOME___",
        A = 16,
        b = "fa",
        y = "svg-inline--fa",
        G = "data-fa-i2svg",
        w = "data-fa-pseudo-element",
        x = "data-fa-pseudo-element-pending",
        C = "data-prefix",
        O = "data-icon",
        S = "fontawesome-i2svg",
        P = "async",
        N = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        M = function() {
            try {
                return true;
            } catch (t2) {
                return false;
            }
        }(),
        z = {
            fas: "solid",
            far: "regular",
            fal: "light",
            fad: "duotone",
            fab: "brands",
            fa: "solid"
        },
        E = {
            solid: "fas",
            regular: "far",
            light: "fal",
            duotone: "fad",
            brands: "fab"
        },
        j = "fa-layers-text",
        L = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,
        R = {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal"
        },
        _ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        T = _.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        I = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        Y = {
            GROUP: "group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary"
        },
        F = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", Y.GROUP, Y.SWAP_OPACITY, Y.PRIMARY, Y.SECONDARY].concat(_.map(function(t2) {
            return "".concat(t2, "x");
        })).concat(T.map(function(t2) {
            return "w-".concat(t2);
        })),
        H = g.FontAwesomeConfig || {};
    if (v && "function" == typeof v.querySelector)[["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function(t2) {
        var e2, n2 = d(t2, 2),
            a2 = n2[0],
            r2 = n2[1],
            i2 = "" === (e2 = function(t3) {
                var e3 = v.querySelector("script[" + t3 + "]");
                if (e3) return e3.getAttribute(t3);
            }(a2)) || "false" !== e2 && ("true" === e2 || e2);
        null != i2 && (H[r2] = i2);
    });
    var D = K({}, {
        familyPrefix: b,
        replacementClass: y,
        autoReplaceSvg: true,
        autoAddCss: true,
        autoA11y: true,
        searchPseudoElements: false,
        observeMutations: true,
        mutateApproach: "async",
        keepOriginalSource: true,
        measurePerformance: false,
        showMissingIcons: true
    }, H);
    D.autoReplaceSvg || (D.observeMutations = false);
    var J = K({}, D);
    g.FontAwesomeConfig = J;
    var U = g || {};
    U[h] || (U[h] = {}), U[h].styles || (U[h].styles = {}), U[h].hooks || (U[h].hooks = {}), U[h].shims || (U[h].shims = []);
    var W = U[h],
        q = [],
        X = false;

    function B(t2) {
        p && (X ? setTimeout(t2, 0) : q.push(t2));
    }
    p && ((X = (v.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(v.readyState)) || v.addEventListener("DOMContentLoaded", function t2() {
        v.removeEventListener("DOMContentLoaded", t2), X = 1, q.map(function(t3) {
            return t3();
        });
    }));
    var V, Q = "pending",
        Z = "settled",
        $ = "fulfilled",
        tt = "rejected",
        et = function() {},
        nt = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
        at = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        rt = [];

    function it() {
        for (var t2 = 0; t2 < rt.length; t2++) rt[t2][0](rt[t2][1]);
        V = !(rt = []);
    }

    function ot(t2, e2) {
        rt.push([t2, e2]), V || (V = true, at(it, 0));
    }

    function ct(t2) {
        var e2 = t2.owner,
            n2 = e2._state,
            a2 = e2._data,
            r2 = t2[n2],
            i2 = t2.then;
        if ("function" == typeof r2) {
            n2 = $;
            try {
                a2 = r2(a2);
            } catch (t3) {
                ut(i2, t3);
            }
        }
        st(i2, a2) || (n2 === $ && lt(i2, a2), n2 === tt && ut(i2, a2));
    }

    function st(e2, n2) {
        var a2;
        try {
            if (e2 === n2) throw new TypeError("A promises callback cannot return that same promise.");
            if (n2 && ("function" == typeof n2 || "object" === i(n2))) {
                var t2 = n2.then;
                if ("function" == typeof t2) return t2.call(n2, function(t3) {
                    a2 || (a2 = true, n2 === t3 ? ft(e2, t3) : lt(e2, t3));
                }, function(t3) {
                    a2 || (a2 = true, ut(e2, t3));
                }), true;
            }
        } catch (t3) {
            return a2 || ut(e2, t3), true;
        }
        return false;
    }

    function lt(t2, e2) {
        t2 !== e2 && st(t2, e2) || ft(t2, e2);
    }

    function ft(t2, e2) {
        t2._state === Q && (t2._state = Z, t2._data = e2, ot(mt, t2));
    }

    function ut(t2, e2) {
        t2._state === Q && (t2._state = Z, t2._data = e2, ot(pt, t2));
    }

    function dt(t2) {
        t2._then = t2._then.forEach(ct);
    }

    function mt(t2) {
        t2._state = $, dt(t2);
    }

    function pt(t2) {
        t2._state = tt, dt(t2), !t2._handled && nt && global.process.emit("unhandledRejection", t2._data, t2);
    }

    function ht(t2) {
        global.process.emit("rejectionHandled", t2);
    }

    function gt(t2) {
        if ("function" != typeof t2) throw new TypeError("Promise resolver " + t2 + " is not a function");
        if (this instanceof gt == false) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [],
            function(t3, e2) {
                function n2(t4) {
                    ut(e2, t4);
                }
                try {
                    t3(function(t4) {
                        lt(e2, t4);
                    }, n2);
                } catch (t4) {
                    n2(t4);
                }
            }(t2, this);
    }
    gt.prototype = {
        constructor: gt,
        _state: Q,
        _then: null,
        _data: void 0,
        _handled: false,
        then: function(t2, e2) {
            var n2 = {
                owner: this,
                then: new this.constructor(et),
                fulfilled: t2,
                rejected: e2
            };
            return !e2 && !t2 || this._handled || (this._handled = true, this._state === tt && nt && ot(ht, this)), this._state === $ || this._state === tt ? ot(ct, n2) : this._then.push(n2), n2.then;
        },
        catch: function(t2) {
            return this.then(null, t2);
        }
    }, gt.all = function(c2) {
        if (!Array.isArray(c2)) throw new TypeError("You must pass an array to Promise.all().");
        return new gt(function(n2, t2) {
            var a2 = [],
                r2 = 0;

            function e2(e3) {
                return r2++,
                    function(t3) {
                        a2[e3] = t3, --r2 || n2(a2);
                    };
            }
            for (var i2, o2 = 0; o2 < c2.length; o2++)(i2 = c2[o2]) && "function" == typeof i2.then ? i2.then(e2(o2), t2) : a2[o2] = i2;
            r2 || n2(a2);
        });
    }, gt.race = function(r2) {
        if (!Array.isArray(r2)) throw new TypeError("You must pass an array to Promise.race().");
        return new gt(function(t2, e2) {
            for (var n2, a2 = 0; a2 < r2.length; a2++)(n2 = r2[a2]) && "function" == typeof n2.then ? n2.then(t2, e2) : t2(n2);
        });
    }, gt.resolve = function(e2) {
        return e2 && "object" === i(e2) && e2.constructor === gt ? e2 : new gt(function(t2) {
            t2(e2);
        });
    }, gt.reject = function(n2) {
        return new gt(function(t2, e2) {
            e2(n2);
        });
    };
    var vt = "function" == typeof Promise ? Promise : gt,
        bt = A,
        yt = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: false,
            flipY: false
        };

    function wt(t2) {
        if (t2 && p) {
            var e2 = v.createElement("style");
            e2.setAttribute("type", "text/css"), e2.innerHTML = t2;
            for (var n2 = v.head.childNodes, a2 = null, r2 = n2.length - 1; - 1 < r2; r2--) {
                var i2 = n2[r2],
                    o2 = (i2.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(o2) && (a2 = i2);
            }
            return v.head.insertBefore(e2, a2), t2;
        }
    }
    var xt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function kt() {
        for (var t2 = 12, e2 = ""; 0 < t2--;) e2 += xt[62 * Math.random() | 0];
        return e2;
    }

    function At(t2) {
        for (var e2 = [], n2 = (t2 || []).length >>> 0; n2--;) e2[n2] = t2[n2];
        return e2;
    }

    function Ct(t2) {
        return t2.classList ? At(t2.classList) : (t2.getAttribute("class") || "").split(" ").filter(function(t3) {
            return t3;
        });
    }

    function Ot(t2, e2) {
        var n2, a2 = e2.split("-"),
            r2 = a2[0],
            i2 = a2.slice(1).join("-");
        return r2 !== t2 || "" === i2 || (n2 = i2, ~F.indexOf(n2)) ? null : i2;
    }

    function St(t2) {
        return "".concat(t2).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function Pt(n2) {
        return Object.keys(n2 || {}).reduce(function(t2, e2) {
            return t2 + "".concat(e2, ": ").concat(n2[e2], ";");
        }, "");
    }

    function Nt(t2) {
        return t2.size !== yt.size || t2.x !== yt.x || t2.y !== yt.y || t2.rotate !== yt.rotate || t2.flipX || t2.flipY;
    }

    function Mt(t2) {
        var e2 = t2.transform,
            n2 = t2.containerWidth,
            a2 = t2.iconWidth,
            r2 = {
                transform: "translate(".concat(n2 / 2, " 256)")
            },
            i2 = "translate(".concat(32 * e2.x, ", ").concat(32 * e2.y, ") "),
            o2 = "scale(".concat(e2.size / 16 * (e2.flipX ? -1 : 1), ", ").concat(e2.size / 16 * (e2.flipY ? -1 : 1), ") "),
            c2 = "rotate(".concat(e2.rotate, " 0 0)");
        return {
            outer: r2,
            inner: {
                transform: "".concat(i2, " ").concat(o2, " ").concat(c2)
            },
            path: {
                transform: "translate(".concat(a2 / 2 * -1, " -256)")
            }
        };
    }
    var zt = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

    function Et(t2) {
        var e2 = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        return t2.attributes && (t2.attributes.fill || e2) && (t2.attributes.fill = "black"), t2;
    }

    function jt(t2) {
        var e2 = t2.icons,
            n2 = e2.main,
            a2 = e2.mask,
            r2 = t2.prefix,
            i2 = t2.iconName,
            o2 = t2.transform,
            c2 = t2.symbol,
            s2 = t2.title,
            l2 = t2.extra,
            f2 = t2.watchable,
            u2 = void 0 !== f2 && f2,
            d2 = a2.found ? a2 : n2,
            m2 = d2.width,
            p2 = d2.height,
            h2 = "fa-w-".concat(Math.ceil(m2 / p2 * 16)),
            g2 = [J.replacementClass, i2 ? "".concat(J.familyPrefix, "-").concat(i2) : "", h2].filter(function(t3) {
                return -1 === l2.classes.indexOf(t3);
            }).concat(l2.classes).join(" "),
            v2 = {
                children: [],
                attributes: K({}, l2.attributes, {
                    "data-prefix": r2,
                    "data-icon": i2,
                    class: g2,
                    role: l2.attributes.role || "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(m2, " ").concat(p2)
                })
            };
        u2 && (v2.attributes[G] = ""), s2 && v2.children.push({
            tag: "title",
            attributes: {
                id: v2.attributes["aria-labelledby"] || "title-".concat(kt())
            },
            children: [s2]
        });
        var b2, y2, w2, x2, k2, A2, C2, O2, S2, P2, N2, M2, z2, E2, j2, L2, R2, _2, T2, I2, Y2, F2, H2, D2, U2, W2, q2 = K({}, v2, {
                prefix: r2,
                iconName: i2,
                main: n2,
                mask: a2,
                transform: o2,
                symbol: c2,
                styles: l2.styles
            }),
            X2 = a2.found && n2.found ? (w2 = (b2 = q2).children, x2 = b2.attributes, k2 = b2.main, A2 = b2.mask, C2 = b2.transform, O2 = k2.width, S2 = k2.icon, P2 = A2.width, N2 = A2.icon, M2 = Mt({
                transform: C2,
                containerWidth: P2,
                iconWidth: O2
            }), z2 = {
                tag: "rect",
                attributes: K({}, zt, {
                    fill: "white"
                })
            }, E2 = S2.children ? {
                children: S2.children.map(Et)
            } : {}, j2 = {
                tag: "g",
                attributes: K({}, M2.inner),
                children: [Et(K({
                    tag: S2.tag,
                    attributes: K({}, S2.attributes, M2.path)
                }, E2))]
            }, L2 = {
                tag: "g",
                attributes: K({}, M2.outer),
                children: [j2]
            }, R2 = "mask-".concat(kt()), _2 = "clip-".concat(kt()), T2 = {
                tag: "mask",
                attributes: K({}, zt, {
                    id: R2,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [z2, L2]
            }, I2 = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: _2
                    },
                    children: (y2 = N2, "g" === y2.tag ? y2.children : [y2])
                }, T2]
            }, w2.push(I2, {
                tag: "rect",
                attributes: K({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(_2, ")"),
                    mask: "url(#".concat(R2, ")")
                }, zt)
            }), {
                children: w2,
                attributes: x2
            }) : function(t3) {
                var e3 = t3.children,
                    n3 = t3.attributes,
                    a3 = t3.main,
                    r3 = t3.transform,
                    i3 = Pt(t3.styles);
                if (0 < i3.length && (n3.style = i3), Nt(r3)) {
                    var o3 = Mt({
                        transform: r3,
                        containerWidth: a3.width,
                        iconWidth: a3.width
                    });
                    e3.push({
                        tag: "g",
                        attributes: K({}, o3.outer),
                        children: [{
                            tag: "g",
                            attributes: K({}, o3.inner),
                            children: [{
                                tag: a3.icon.tag,
                                children: a3.icon.children,
                                attributes: K({}, a3.icon.attributes, o3.path)
                            }]
                        }]
                    });
                } else e3.push(a3.icon);
                return {
                    children: e3,
                    attributes: n3
                };
            }(q2),
            B2 = X2.children,
            V2 = X2.attributes;
        return q2.children = B2, q2.attributes = V2, c2 ? (F2 = (Y2 = q2).prefix, H2 = Y2.iconName, D2 = Y2.children, U2 = Y2.attributes, W2 = Y2.symbol, [{
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [{
                tag: "symbol",
                attributes: K({}, U2, {
                    id: true === W2 ? "".concat(F2, "-").concat(J.familyPrefix, "-").concat(H2) : W2
                }),
                children: D2
            }]
        }]) : function(t3) {
            var e3 = t3.children,
                n3 = t3.main,
                a3 = t3.mask,
                r3 = t3.attributes,
                i3 = t3.styles,
                o3 = t3.transform;
            if (Nt(o3) && n3.found && !a3.found) {
                var c3 = n3.width / n3.height / 2,
                    s3 = 0.5;
                r3.style = Pt(K({}, i3, {
                    "transform-origin": "".concat(c3 + o3.x / 16, "em ").concat(s3 + o3.y / 16, "em")
                }));
            }
            return [{
                tag: "svg",
                attributes: r3,
                children: e3
            }];
        }(q2);
    }

    function Lt(t2) {
        var e2 = t2.content,
            n2 = t2.width,
            a2 = t2.height,
            r2 = t2.transform,
            i2 = t2.title,
            o2 = t2.extra,
            c2 = t2.watchable,
            s2 = void 0 !== c2 && c2,
            l2 = K({}, o2.attributes, i2 ? {
                title: i2
            } : {}, {
                class: o2.classes.join(" ")
            });
        s2 && (l2[G] = "");
        var f2, u2, d2, m2, p2, h2, g2, v2, b2, y2 = K({}, o2.styles);
        Nt(r2) && (y2.transform = (u2 = (f2 = {
            transform: r2,
            startCentered: true,
            width: n2,
            height: a2
        }).transform, d2 = f2.width, m2 = void 0 === d2 ? A : d2, p2 = f2.height, h2 = void 0 === p2 ? A : p2, g2 = f2.startCentered, b2 = "", b2 += (v2 = void 0 !== g2 && g2) && k ? "translate(".concat(u2.x / bt - m2 / 2, "em, ").concat(u2.y / bt - h2 / 2, "em) ") : v2 ? "translate(calc(-50% + ".concat(u2.x / bt, "em), calc(-50% + ").concat(u2.y / bt, "em)) ") : "translate(".concat(u2.x / bt, "em, ").concat(u2.y / bt, "em) "), b2 += "scale(".concat(u2.size / bt * (u2.flipX ? -1 : 1), ", ").concat(u2.size / bt * (u2.flipY ? -1 : 1), ") "), b2 += "rotate(".concat(u2.rotate, "deg) ")), y2["-webkit-transform"] = y2.transform);
        var w2 = Pt(y2);
        0 < w2.length && (l2.style = w2);
        var x2 = [];
        return x2.push({
            tag: "span",
            attributes: l2,
            children: [e2]
        }), i2 && x2.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [i2]
        }), x2;
    }
    var Rt = function() {},
        _t = J.measurePerformance && f && f.mark && f.measure ? f : {
            mark: Rt,
            measure: Rt
        },
        Tt = 'FA "5.11.2"',
        It = function(t2) {
            _t.mark("".concat(Tt, " ").concat(t2, " ends")), _t.measure("".concat(Tt, " ").concat(t2), "".concat(Tt, " ").concat(t2, " begins"), "".concat(Tt, " ").concat(t2, " ends"));
        },
        Yt = {
            begin: function(t2) {
                return _t.mark("".concat(Tt, " ").concat(t2, " begins")),
                    function() {
                        return It(t2);
                    };
            },
            end: It
        },
        Ft = function(t2, e2, n2, a2) {
            var r2, i2, o2, c2, s2, l2 = Object.keys(t2),
                f2 = l2.length,
                u2 = void 0 !== a2 ? (c2 = e2, s2 = a2, function(t3, e3, n3, a3) {
                    return c2.call(s2, t3, e3, n3, a3);
                }) : e2;
            for (o2 = void 0 === n2 ? (r2 = 1, t2[l2[0]]) : (r2 = 0, n2); r2 < f2; r2++) o2 = u2(o2, t2[i2 = l2[r2]], i2, t2);
            return o2;
        };

    function Ht(t2) {
        for (var e2 = "", n2 = 0; n2 < t2.length; n2++) e2 += ("000" + t2.charCodeAt(n2).toString(16)).slice(-4);
        return e2;
    }
    var Dt = W.styles,
        Ut = W.shims,
        Wt = {},
        qt = {},
        Xt = {},
        Bt = function() {
            var t2 = function(a2) {
                return Ft(Dt, function(t3, e2, n2) {
                    return t3[n2] = Ft(e2, a2, {}), t3;
                }, {});
            };
            Wt = t2(function(t3, e2, n2) {
                return e2[3] && (t3[e2[3]] = n2), t3;
            }), qt = t2(function(e2, t3, n2) {
                var a2 = t3[2];
                return e2[n2] = n2, a2.forEach(function(t4) {
                    e2[t4] = n2;
                }), e2;
            });
            var i2 = "far" in Dt;
            Xt = Ft(Ut, function(t3, e2) {
                var n2 = e2[0],
                    a2 = e2[1],
                    r2 = e2[2];
                return "far" !== a2 || i2 || (a2 = "fas"), t3[n2] = {
                    prefix: a2,
                    iconName: r2
                }, t3;
            }, {});
        };

    function Vt(t2, e2) {
        return (Wt[t2] || {})[e2];
    }
    Bt();
    var Kt = W.styles,
        Gt = function() {
            return {
                prefix: null,
                iconName: null,
                rest: []
            };
        };

    function Jt(t2) {
        return t2.reduce(function(t3, e2) {
            var n2 = Ot(J.familyPrefix, e2);
            if (Kt[e2]) t3.prefix = e2;
            else if (J.autoFetchSvg && -1 < ["fas", "far", "fal", "fad", "fab", "fa"].indexOf(e2)) t3.prefix = e2;
            else if (n2) {
                var a2 = "fa" === t3.prefix ? Xt[n2] || {
                    prefix: null,
                    iconName: null
                } : {};
                t3.iconName = a2.iconName || n2, t3.prefix = a2.prefix || t3.prefix;
            } else e2 !== J.replacementClass && 0 !== e2.indexOf("fa-w-") && t3.rest.push(e2);
            return t3;
        }, Gt());
    }

    function Qt(t2, e2, n2) {
        if (t2 && t2[e2] && t2[e2][n2]) return {
            prefix: e2,
            iconName: n2,
            icon: t2[e2][n2]
        };
    }

    function Zt(t2) {
        var n2, e2 = t2.tag,
            a2 = t2.attributes,
            r2 = void 0 === a2 ? {} : a2,
            i2 = t2.children,
            o2 = void 0 === i2 ? [] : i2;
        return "string" == typeof t2 ? St(t2) : "<".concat(e2, " ").concat((n2 = r2, Object.keys(n2 || {}).reduce(function(t3, e3) {
            return t3 + "".concat(e3, '="').concat(St(n2[e3]), '" ');
        }, "").trim()), ">").concat(o2.map(Zt).join(""), "</").concat(e2, ">");
    }
    var $t = function() {};

    function te(t2) {
        return "string" == typeof(t2.getAttribute ? t2.getAttribute(G) : null);
    }
    var ee = {
        replace: function(t2) {
            var e2 = t2[0],
                n2 = t2[1].map(function(t3) {
                    return Zt(t3);
                }).join("\n");
            if (e2.parentNode && e2.outerHTML) e2.outerHTML = n2 + (J.keepOriginalSource && "svg" !== e2.tagName.toLowerCase() ? "<!-- ".concat(e2.outerHTML, " -->") : "");
            else {
                if (e2.parentNode) {
                    var a2 = document.createElement("span");
                    e2.parentNode.replaceChild(a2, e2), a2.outerHTML = n2;
                }
            }
        },
        nest: function(t2) {
            var e2 = t2[0],
                n2 = t2[1];
            if (~Ct(e2).indexOf(J.replacementClass)) return ee.replace(t2);
            var a2 = new RegExp("".concat(J.familyPrefix, "-.*"));
            delete n2[0].attributes.style, delete n2[0].attributes.id;
            var r2 = n2[0].attributes.class.split(" ").reduce(function(t3, e3) {
                return e3 === J.replacementClass || e3.match(a2) ? t3.toSvg.push(e3) : t3.toNode.push(e3), t3;
            }, {
                toNode: [],
                toSvg: []
            });
            n2[0].attributes.class = r2.toSvg.join(" ");
            var i2 = n2.map(function(t3) {
                return Zt(t3);
            }).join("\n");
            e2.setAttribute("class", r2.toNode.join(" ")), e2.setAttribute(G, ""), e2.innerHTML = i2;
        }
    };

    function ne(t2) {
        t2();
    }

    function ae(n2, t2) {
        var a2 = "function" == typeof t2 ? t2 : $t;
        if (0 === n2.length) a2();
        else {
            var e2 = ne;
            J.mutateApproach === P && (e2 = g.requestAnimationFrame || ne), e2(function() {
                var t3 = true === J.autoReplaceSvg ? ee.replace : ee[J.autoReplaceSvg] || ee.replace,
                    e3 = Yt.begin("mutate");
                n2.map(t3), e3(), a2();
            });
        }
    }
    var re = false;

    function ie() {
        re = false;
    }
    var oe = null;

    function ce(t2) {
        if (l && J.observeMutations) {
            var r2 = t2.treeCallback,
                i2 = t2.nodeCallback,
                o2 = t2.pseudoElementsCallback,
                e2 = t2.observeMutationsRoot,
                n2 = void 0 === e2 ? v : e2;
            oe = new l(function(t3) {
                re || At(t3).forEach(function(t4) {
                    if ("childList" === t4.type && 0 < t4.addedNodes.length && !te(t4.addedNodes[0]) && (J.searchPseudoElements && o2(t4.target), r2(t4.target)), "attributes" === t4.type && t4.target.parentNode && J.searchPseudoElements && o2(t4.target.parentNode), "attributes" === t4.type && te(t4.target) && ~I.indexOf(t4.attributeName))
                        if ("class" === t4.attributeName) {
                            var e3 = Jt(Ct(t4.target)),
                                n3 = e3.prefix,
                                a2 = e3.iconName;
                            n3 && t4.target.setAttribute("data-prefix", n3), a2 && t4.target.setAttribute("data-icon", a2);
                        } else i2(t4.target);
                });
            }), p && oe.observe(n2, {
                childList: true,
                attributes: true,
                characterData: true,
                subtree: true
            });
        }
    }

    function se(t2) {
        var e2, n2, a2 = t2.getAttribute("data-prefix"),
            r2 = t2.getAttribute("data-icon"),
            i2 = void 0 !== t2.innerText ? t2.innerText.trim() : "",
            o2 = Jt(Ct(t2));
        return a2 && r2 && (o2.prefix = a2, o2.iconName = r2), o2.prefix && 1 < i2.length ? o2.iconName = (e2 = o2.prefix, n2 = t2.innerText, (qt[e2] || {})[n2]) : o2.prefix && 1 === i2.length && (o2.iconName = Vt(o2.prefix, Ht(t2.innerText))), o2;
    }
    var le = function(t2) {
        var e2 = {
            size: 16,
            x: 0,
            y: 0,
            flipX: false,
            flipY: false,
            rotate: 0
        };
        return t2 ? t2.toLowerCase().split(" ").reduce(function(t3, e3) {
            var n2 = e3.toLowerCase().split("-"),
                a2 = n2[0],
                r2 = n2.slice(1).join("-");
            if (a2 && "h" === r2) return t3.flipX = true, t3;
            if (a2 && "v" === r2) return t3.flipY = true, t3;
            if (r2 = parseFloat(r2), isNaN(r2)) return t3;
            switch (a2) {
                case "grow":
                    t3.size = t3.size + r2;
                    break;
                case "shrink":
                    t3.size = t3.size - r2;
                    break;
                case "left":
                    t3.x = t3.x - r2;
                    break;
                case "right":
                    t3.x = t3.x + r2;
                    break;
                case "up":
                    t3.y = t3.y - r2;
                    break;
                case "down":
                    t3.y = t3.y + r2;
                    break;
                case "rotate":
                    t3.rotate = t3.rotate + r2;
            }
            return t3;
        }, e2) : e2;
    };

    function fe(t2) {
        var e2, n2, a2, r2, i2, o2, c2, s2 = se(t2),
            l2 = s2.iconName,
            f2 = s2.prefix,
            u2 = s2.rest,
            d2 = (e2 = t2.getAttribute("style"), n2 = [], e2 && (n2 = e2.split(";").reduce(function(t3, e3) {
                var n3 = e3.split(":"),
                    a3 = n3[0],
                    r3 = n3.slice(1);
                return a3 && 0 < r3.length && (t3[a3] = r3.join(":").trim()), t3;
            }, {})), n2),
            m2 = le(t2.getAttribute("data-fa-transform")),
            p2 = null !== (a2 = t2.getAttribute("data-fa-symbol")) && ("" === a2 || a2),
            h2 = (i2 = At((r2 = t2).attributes).reduce(function(t3, e3) {
                return "class" !== t3.name && "style" !== t3.name && (t3[e3.name] = e3.value), t3;
            }, {}), o2 = r2.getAttribute("title"), J.autoA11y && (o2 ? i2["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(kt()) : (i2["aria-hidden"] = "true", i2.focusable = "false")), i2),
            g2 = (c2 = t2.getAttribute("data-fa-mask")) ? Jt(c2.split(" ").map(function(t3) {
                return t3.trim();
            })) : Gt();
        return {
            iconName: l2,
            title: t2.getAttribute("title"),
            prefix: f2,
            transform: m2,
            symbol: p2,
            mask: g2,
            extra: {
                classes: u2,
                styles: d2,
                attributes: h2
            }
        };
    }

    function ue(t2) {
        this.name = "MissingIcon", this.message = t2 || "Icon unavailable", this.stack = new Error().stack;
    }(ue.prototype = Object.create(Error.prototype)).constructor = ue;
    var de = {
            fill: "currentColor"
        },
        me = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        pe = {
            tag: "path",
            attributes: K({}, de, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        he = K({}, me, {
            attributeName: "opacity"
        }),
        ge = {
            tag: "g",
            children: [pe, {
                tag: "circle",
                attributes: K({}, de, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: [{
                    tag: "animate",
                    attributes: K({}, me, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: K({}, he, {
                        values: "1;0;1;1;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: K({}, de, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: [{
                    tag: "animate",
                    attributes: K({}, he, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: K({}, de, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: K({}, he, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }]
        },
        ve = W.styles;

    function be(t2) {
        var e2 = t2[0],
            n2 = t2[1],
            a2 = d(t2.slice(4), 1)[0];
        return {
            found: true,
            width: e2,
            height: n2,
            icon: Array.isArray(a2) ? {
                tag: "g",
                attributes: {
                    class: "".concat(J.familyPrefix, "-").concat(Y.GROUP)
                },
                children: [{
                    tag: "path",
                    attributes: {
                        class: "".concat(J.familyPrefix, "-").concat(Y.SECONDARY),
                        fill: "currentColor",
                        d: a2[0]
                    }
                }, {
                    tag: "path",
                    attributes: {
                        class: "".concat(J.familyPrefix, "-").concat(Y.PRIMARY),
                        fill: "currentColor",
                        d: a2[1]
                    }
                }]
            } : {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: a2
                }
            }
        };
    }

    function ye(a2, r2) {
        return new vt(function(t2, e2) {
            var n2 = {
                found: false,
                width: 512,
                height: 512,
                icon: ge
            };
            if (a2 && r2 && ve[r2] && ve[r2][a2]) return t2(be(ve[r2][a2]));
            "object" === i(g.FontAwesomeKitConfig) && "string" == typeof window.FontAwesomeKitConfig.token && g.FontAwesomeKitConfig.token, a2 && r2 && !J.showMissingIcons ? e2(new ue("Icon is missing for prefix ".concat(r2, " with icon name ").concat(a2))) : t2(n2);
        });
    }
    var we = W.styles;

    function xe(t2) {
        var i2, e2, o2, c2, s2, l2, f2, n2, u2, a2 = fe(t2);
        return ~a2.extra.classes.indexOf(j) ? function(t3, e3) {
            var n3 = e3.title,
                a3 = e3.transform,
                r2 = e3.extra,
                i3 = null,
                o3 = null;
            if (k) {
                var c3 = parseInt(getComputedStyle(t3).fontSize, 10),
                    s3 = t3.getBoundingClientRect();
                i3 = s3.width / c3, o3 = s3.height / c3;
            }
            return J.autoA11y && !n3 && (r2.attributes["aria-hidden"] = "true"), vt.resolve([t3, Lt({
                content: t3.innerHTML,
                width: i3,
                height: o3,
                transform: a3,
                title: n3,
                extra: r2,
                watchable: true
            })]);
        }(t2, a2) : (i2 = t2, o2 = (e2 = a2).iconName, c2 = e2.title, s2 = e2.prefix, l2 = e2.transform, f2 = e2.symbol, n2 = e2.mask, u2 = e2.extra, new vt(function(r2, t3) {
            vt.all([ye(o2, s2), ye(n2.iconName, n2.prefix)]).then(function(t4) {
                var e3 = d(t4, 2),
                    n3 = e3[0],
                    a3 = e3[1];
                r2([i2, jt({
                    icons: {
                        main: n3,
                        mask: a3
                    },
                    prefix: s2,
                    iconName: o2,
                    transform: l2,
                    symbol: f2,
                    mask: a3,
                    title: c2,
                    extra: u2,
                    watchable: true
                })]);
            });
        }));
    }

    function ke(t2) {
        var n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (p) {
            var e2 = v.documentElement.classList,
                a2 = function(t3) {
                    return e2.add("".concat(S, "-").concat(t3));
                },
                r2 = function(t3) {
                    return e2.remove("".concat(S, "-").concat(t3));
                },
                i2 = J.autoFetchSvg ? Object.keys(z) : Object.keys(we),
                o2 = [".".concat(j, ":not([").concat(G, "])")].concat(i2.map(function(t3) {
                    return ".".concat(t3, ":not([").concat(G, "])");
                })).join(", ");
            if (0 !== o2.length) {
                var c2 = [];
                try {
                    c2 = At(t2.querySelectorAll(o2));
                } catch (t3) {}
                if (0 < c2.length) {
                    a2("pending"), r2("complete");
                    var s2 = Yt.begin("onTree"),
                        l2 = c2.reduce(function(t3, e3) {
                            try {
                                var n3 = xe(e3);
                                n3 && t3.push(n3);
                            } catch (t4) {
                                M || t4 instanceof ue && console.error(t4);
                            }
                            return t3;
                        }, []);
                    return new vt(function(e3, t3) {
                        vt.all(l2).then(function(t4) {
                            ae(t4, function() {
                                a2("active"), a2("complete"), r2("pending"), "function" == typeof n2 && n2(), s2(), e3();
                            });
                        }).catch(function() {
                            s2(), t3();
                        });
                    });
                }
            }
        }
    }

    function Ae(t2) {
        var e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        xe(t2).then(function(t3) {
            t3 && ae([t3], e2);
        });
    }

    function Ce(m2, p2) {
        var h2 = "".concat(x).concat(p2.replace(":", "-"));
        return new vt(function(a2, t2) {
            if (null !== m2.getAttribute(h2)) return a2();
            var e2 = At(m2.children).filter(function(t3) {
                    return t3.getAttribute(w) === p2;
                })[0],
                n2 = g.getComputedStyle(m2, p2),
                r2 = n2.getPropertyValue("font-family").match(L),
                i2 = n2.getPropertyValue("font-weight");
            if (e2 && !r2) return m2.removeChild(e2), a2();
            if (r2) {
                var o2 = n2.getPropertyValue("content"),
                    c2 = ~["Solid", "Regular", "Light", "Duotone", "Brands"].indexOf(r2[1]) ? E[r2[1].toLowerCase()] : R[i2],
                    s2 = Ht(3 === o2.length ? o2.substr(1, 1) : o2),
                    l2 = Vt(c2, s2),
                    f2 = l2;
                if (!l2 || e2 && e2.getAttribute(C) === c2 && e2.getAttribute(O) === f2) a2();
                else {
                    m2.setAttribute(h2, f2), e2 && m2.removeChild(e2);
                    var u2 = {
                            iconName: null,
                            title: null,
                            prefix: null,
                            transform: yt,
                            symbol: false,
                            mask: null,
                            extra: {
                                classes: [],
                                styles: {},
                                attributes: {}
                            }
                        },
                        d2 = u2.extra;
                    d2.attributes[w] = p2, ye(l2, c2).then(function(t3) {
                        var e3 = jt(K({}, u2, {
                                icons: {
                                    main: t3,
                                    mask: Gt()
                                },
                                prefix: c2,
                                iconName: f2,
                                extra: d2,
                                watchable: true
                            })),
                            n3 = v.createElement("svg");
                        ":before" === p2 ? m2.insertBefore(n3, m2.firstChild) : m2.appendChild(n3), n3.outerHTML = e3.map(function(t4) {
                            return Zt(t4);
                        }).join("\n"), m2.removeAttribute(h2), a2();
                    }).catch(t2);
                }
            } else a2();
        });
    }

    function Oe(t2) {
        return vt.all([Ce(t2, ":before"), Ce(t2, ":after")]);
    }

    function Se(t2) {
        return !(t2.parentNode === document.head || ~N.indexOf(t2.tagName.toUpperCase()) || t2.getAttribute(w) || t2.parentNode && "svg" === t2.parentNode.tagName);
    }

    function Pe(r2) {
        if (p) return new vt(function(t2, e2) {
            var n2 = At(r2.querySelectorAll("*")).filter(Se).map(Oe),
                a2 = Yt.begin("searchPseudoElements");
            re = true, vt.all(n2).then(function() {
                a2(), ie(), t2();
            }).catch(function() {
                a2(), ie(), e2();
            });
        });
    }
    var Ne = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

    function Me() {
        var t2 = b,
            e2 = y,
            n2 = J.familyPrefix,
            a2 = J.replacementClass,
            r2 = Ne;
        if (n2 !== t2 || a2 !== e2) {
            var i2 = new RegExp("\\.".concat(t2, "\\-"), "g"),
                o2 = new RegExp("\\--".concat(t2, "\\-"), "g"),
                c2 = new RegExp("\\.".concat(e2), "g");
            r2 = r2.replace(i2, ".".concat(n2, "-")).replace(o2, "--".concat(n2, "-")).replace(c2, ".".concat(a2));
        }
        return r2;
    }

    function ze() {
        J.autoAddCss && !_e && (wt(Me()), _e = true);
    }

    function Ee(e2, t2) {
        return Object.defineProperty(e2, "abstract", {
            get: t2
        }), Object.defineProperty(e2, "html", {
            get: function() {
                return e2.abstract.map(function(t3) {
                    return Zt(t3);
                });
            }
        }), Object.defineProperty(e2, "node", {
            get: function() {
                if (p) {
                    var t3 = v.createElement("div");
                    return t3.innerHTML = e2.html, t3.children;
                }
            }
        }), e2;
    }

    function je(t2) {
        var e2 = t2.prefix,
            n2 = void 0 === e2 ? "fa" : e2,
            a2 = t2.iconName;
        if (a2) return Qt(Re.definitions, n2, a2) || Qt(W.styles, n2, a2);
    }
    var Le, Re = new(function() {
            function t2() {
                ! function(t3, e3) {
                    if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
                }(this, t2), this.definitions = {};
            }
            var e2, n2, a2;
            return e2 = t2, (n2 = [{
                key: "add",
                value: function() {
                    for (var e3 = this, t3 = arguments.length, n3 = new Array(t3), a3 = 0; a3 < t3; a3++) n3[a3] = arguments[a3];
                    var r2 = n3.reduce(this._pullDefinitions, {});
                    Object.keys(r2).forEach(function(t4) {
                        e3.definitions[t4] = K({}, e3.definitions[t4] || {}, r2[t4]),
                            function t5(e4, a4) {
                                var n4 = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                    r3 = void 0 !== n4 && n4,
                                    i2 = Object.keys(a4).reduce(function(t6, e5) {
                                        var n5 = a4[e5];
                                        return n5.icon ? t6[n5.iconName] = n5.icon : t6[e5] = n5, t6;
                                    }, {});
                                "function" != typeof W.hooks.addPack || r3 ? W.styles[e4] = K({}, W.styles[e4] || {}, i2) : W.hooks.addPack(e4, i2), "fas" === e4 && t5("fa", a4);
                            }(t4, r2[t4]), Bt();
                    });
                }
            }, {
                key: "reset",
                value: function() {
                    this.definitions = {};
                }
            }, {
                key: "_pullDefinitions",
                value: function(i2, t3) {
                    var o2 = t3.prefix && t3.iconName && t3.icon ? {
                        0: t3
                    } : t3;
                    return Object.keys(o2).map(function(t4) {
                        var e3 = o2[t4],
                            n3 = e3.prefix,
                            a3 = e3.iconName,
                            r2 = e3.icon;
                        i2[n3] || (i2[n3] = {}), i2[n3][a3] = r2;
                    }), i2;
                }
            }]) && r(e2.prototype, n2), a2 && r(e2, a2), t2;
        }())(),
        _e = false,
        Te = {
            i2svg: function() {
                var t2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (p) {
                    ze();
                    var e2 = t2.node,
                        n2 = void 0 === e2 ? v : e2,
                        a2 = t2.callback,
                        r2 = void 0 === a2 ? function() {} : a2;
                    return J.searchPseudoElements && Pe(n2), ke(n2, r2);
                }
                return vt.reject("Operation requires a DOM of some kind.");
            },
            css: Me,
            insertCss: function() {
                _e || (wt(Me()), _e = true);
            },
            watch: function() {
                var t2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e2 = t2.autoReplaceSvgRoot,
                    n2 = t2.observeMutationsRoot;
                false === J.autoReplaceSvg && (J.autoReplaceSvg = true), J.observeMutations = true, B(function() {
                    Fe({
                        autoReplaceSvgRoot: e2
                    }), ce({
                        treeCallback: ke,
                        nodeCallback: Ae,
                        pseudoElementsCallback: Pe,
                        observeMutationsRoot: n2
                    });
                });
            }
        },
        Ie = (Le = function(t2) {
            var e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n2 = e2.transform,
                a2 = void 0 === n2 ? yt : n2,
                r2 = e2.symbol,
                i2 = void 0 !== r2 && r2,
                o2 = e2.mask,
                c2 = void 0 === o2 ? null : o2,
                s2 = e2.title,
                l2 = void 0 === s2 ? null : s2,
                f2 = e2.classes,
                u2 = void 0 === f2 ? [] : f2,
                d2 = e2.attributes,
                m2 = void 0 === d2 ? {} : d2,
                p2 = e2.styles,
                h2 = void 0 === p2 ? {} : p2;
            if (t2) {
                var g2 = t2.prefix,
                    v2 = t2.iconName,
                    b2 = t2.icon;
                return Ee(K({
                    type: "icon"
                }, t2), function() {
                    return ze(), J.autoA11y && (l2 ? m2["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(kt()) : (m2["aria-hidden"] = "true", m2.focusable = "false")), jt({
                        icons: {
                            main: be(b2),
                            mask: c2 ? be(c2.icon) : {
                                found: false,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: g2,
                        iconName: v2,
                        transform: K({}, yt, a2),
                        symbol: i2,
                        title: l2,
                        extra: {
                            attributes: m2,
                            styles: h2,
                            classes: u2
                        }
                    });
                });
            }
        }, function(t2) {
            var e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n2 = (t2 || {}).icon ? t2 : je(t2 || {}),
                a2 = e2.mask;
            return a2 && (a2 = (a2 || {}).icon ? a2 : je(a2 || {})), Le(n2, K({}, e2, {
                mask: a2
            }));
        }),
        Ye = {
            noAuto: function() {
                J.autoReplaceSvg = false, J.observeMutations = false, oe && oe.disconnect();
            },
            config: J,
            dom: Te,
            library: Re,
            parse: {
                transform: function(t2) {
                    return le(t2);
                }
            },
            findIconDefinition: je,
            icon: Ie,
            text: function(t2) {
                var e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n2 = e2.transform,
                    a2 = void 0 === n2 ? yt : n2,
                    r2 = e2.title,
                    i2 = void 0 === r2 ? null : r2,
                    o2 = e2.classes,
                    c2 = void 0 === o2 ? [] : o2,
                    s2 = e2.attributes,
                    l2 = void 0 === s2 ? {} : s2,
                    f2 = e2.styles,
                    u2 = void 0 === f2 ? {} : f2;
                return Ee({
                    type: "text",
                    content: t2
                }, function() {
                    return ze(), Lt({
                        content: t2,
                        transform: K({}, yt, a2),
                        title: i2,
                        extra: {
                            attributes: l2,
                            styles: u2,
                            classes: ["".concat(J.familyPrefix, "-layers-text")].concat(m(c2))
                        }
                    });
                });
            },
            counter: function(t2) {
                var e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n2 = e2.title,
                    a2 = void 0 === n2 ? null : n2,
                    r2 = e2.classes,
                    i2 = void 0 === r2 ? [] : r2,
                    o2 = e2.attributes,
                    c2 = void 0 === o2 ? {} : o2,
                    s2 = e2.styles,
                    l2 = void 0 === s2 ? {} : s2;
                return Ee({
                    type: "counter",
                    content: t2
                }, function() {
                    return ze(),
                        function(t3) {
                            var e3 = t3.content,
                                n3 = t3.title,
                                a3 = t3.extra,
                                r3 = K({}, a3.attributes, n3 ? {
                                    title: n3
                                } : {}, {
                                    class: a3.classes.join(" ")
                                }),
                                i3 = Pt(a3.styles);
                            0 < i3.length && (r3.style = i3);
                            var o3 = [];
                            return o3.push({
                                tag: "span",
                                attributes: r3,
                                children: [e3]
                            }), n3 && o3.push({
                                tag: "span",
                                attributes: {
                                    class: "sr-only"
                                },
                                children: [n3]
                            }), o3;
                        }({
                            content: t2.toString(),
                            title: a2,
                            extra: {
                                attributes: c2,
                                styles: l2,
                                classes: ["".concat(J.familyPrefix, "-layers-counter")].concat(m(i2))
                            }
                        });
                });
            },
            layer: function(t2) {
                var e2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).classes,
                    n2 = void 0 === e2 ? [] : e2;
                return Ee({
                    type: "layer"
                }, function() {
                    ze();
                    var e3 = [];
                    return t2(function(t3) {
                        Array.isArray(t3) ? t3.map(function(t4) {
                            e3 = e3.concat(t4.abstract);
                        }) : e3 = e3.concat(t3.abstract);
                    }), [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(J.familyPrefix, "-layers")].concat(m(n2)).join(" ")
                        },
                        children: e3
                    }];
                });
            },
            toHtml: Zt
        },
        Fe = function() {
            var t2 = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                e2 = void 0 === t2 ? v : t2;
            (0 < Object.keys(W.styles).length || J.autoFetchSvg) && p && J.autoReplaceSvg && Ye.dom.i2svg({
                node: e2
            });
        };
    ! function(t2) {
        try {
            t2();
        } catch (t3) {
            if (!M) throw t3;
        }
    }(function() {
        u && (g.FontAwesome || (g.FontAwesome = Ye), B(function() {
            Fe(), ce({
                treeCallback: ke,
                nodeCallback: Ae,
                pseudoElementsCallback: Pe
            });
        })), W.hooks = K({}, W.hooks, {
            addPack: function(t2, e2) {
                W.styles[t2] = K({}, W.styles[t2] || {}, e2), Bt(), Fe();
            },
            addShims: function(t2) {
                var e2;
                (e2 = W.shims).push.apply(e2, m(t2)), Bt(), Fe();
            }
        });
    });
}();;
! function(e, t) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
        var n = {
            exports: {}
        };
        t(n, n.exports), e.fitty = n.exports;
    }
}(this, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var D = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
    };
    t.default = function(n) {
        if (n) {
            var i = function(e) {
                    return [].slice.call(e);
                },
                r = {
                    IDLE: 0,
                    DIRTY_CONTENT: 1,
                    DIRTY_LAYOUT: 2,
                    DIRTY: 3
                },
                o = [],
                e = null,
                u = "requestAnimationFrame" in n ? function() {
                    n.cancelAnimationFrame(e), e = n.requestAnimationFrame(function() {
                        a(o.filter(function(e) {
                            return e.dirty;
                        }));
                    });
                } : function() {},
                t = function(t) {
                    return function() {
                        o.forEach(function(e) {
                            e.dirty = t;
                        }), u();
                    };
                },
                a = function(e) {
                    e.filter(function(e) {
                        return !e.styleComputed;
                    }).forEach(function(e) {
                        e.styleComputed = f(e);
                    }), e.filter(d).forEach(p);
                    var t = e.filter(s);
                    t.forEach(c), t.forEach(function(e) {
                        p(e), l(e);
                    }), t.forEach(m);
                },
                l = function(e) {
                    return e.dirty = r.IDLE;
                },
                c = function(e) {
                    e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
                },
                s = function(e) {
                    return e.dirty !== r.DIRTY_LAYOUT || e.dirty === r.DIRTY_LAYOUT && e.element.parentNode.clientWidth !== e.availableWidth;
                },
                f = function(e) {
                    var t = n.getComputedStyle(e.element, null);
                    e.currentFontSize = parseInt(t.getPropertyValue("font-size"), 10), e.display = t.getPropertyValue("display"), e.whiteSpace = t.getPropertyValue("white-space");
                },
                d = function(e) {
                    var t = !1;
                    return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
                },
                p = function(e) {
                    e.originalStyle || (e.originalStyle = e.element.getAttribute("style") || ""), e.element.style.cssText = e.originalStyle + ";white-space:" + e.whiteSpace + ";display:" + e.display + ";font-size:" + e.currentFontSize + "px";
                },
                m = function(e) {
                    e.element.dispatchEvent(new CustomEvent("fit", {
                        detail: {
                            oldValue: e.previousFontSize,
                            newValue: e.currentFontSize,
                            scaleFactor: e.currentFontSize / e.previousFontSize
                        }
                    }));
                },
                v = function(e, t) {
                    return function() {
                        e.dirty = t, u();
                    };
                },
                y = function(e) {
                    e.newbie = !0, e.dirty = !0, o.push(e);
                },
                h = function(t) {
                    return function() {
                        o = o.filter(function(e) {
                            return e.element !== t.element;
                        }), t.observeMutations && t.observer.disconnect(), t.element.style.cssText = t.originalStyle;
                    };
                },
                S = function(e) {
                    e.observeMutations && (e.observer = new MutationObserver(v(e, r.DIRTY_CONTENT)), e.observer.observe(e.element, e.observeMutations));
                },
                b = {
                    minSize: 16,
                    maxSize: 512,
                    multiLine: !0,
                    observeMutations: "MutationObserver" in n && {
                        subtree: !0,
                        childList: !0,
                        characterData: !0
                    }
                },
                w = null,
                T = function() {
                    n.clearTimeout(w), w = n.setTimeout(t(r.DIRTY_LAYOUT), g.observeWindowDelay);
                },
                z = ["resize", "orientationchange"];
            return Object.defineProperty(g, "observeWindow", {
                set: function(e) {
                    var t = (e ? "add" : "remove") + "EventListener";
                    z.forEach(function(e) {
                        n[t](e, T);
                    });
                }
            }), g.observeWindow = !0, g.observeWindowDelay = 100, g.fitAll = t(r.DIRTY), g;
        }

        function F(e, t) {
            var n = D({}, b, t),
                i = e.map(function(e) {
                    var t = D({}, n, {
                        element: e
                    });
                    return y(t), S(t), {
                        element: e,
                        fit: v(t, r.DIRTY),
                        unsubscribe: h(t)
                    };
                });
            return u(), i;
        }

        function g(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return "string" == typeof e ? F(i(document.querySelectorAll(e)), t) : F([e], t)[0];
        }
    }("undefined" == typeof window ? null : window), e.exports = t.default;
});;
! function() {
    var c = {};
    try {
        typeof window !== "undefined" && (c = window);
    } catch (c2) {}
    var h = (c.navigator || {}).userAgent,
        v = void 0 === h ? "" : h,
        l = c,
        z = (~v.indexOf("MSIE") || v.indexOf("Trident/"), "___FONT_AWESOME___"),
        s = function() {
            try {
                return true;
            } catch (c2) {
                return false;
            }
        }(),
        M = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        m = M.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(M.map(function(c2) {
        return c2 + "x";
    })).concat(m.map(function(c2) {
        return "w-" + c2;
    }));
    var H = l || {};
    H[z] || (H[z] = {}), H[z].styles || (H[z].styles = {}), H[z].hooks || (H[z].hooks = {}), H[z].shims || (H[z].shims = []);
    var V = H[z],
        a = Object.assign || function(c2) {
            for (var _h = 1; _h < arguments.length; _h++) {
                var _v = arguments[_h];
                for (var _l in _v) Object.prototype.hasOwnProperty.call(_v, _l) && (c2[_l] = _v[_l]);
            }
            return c2;
        };
    var f = {
        "angle-double-right": [448, 512, [], "f101", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"],
        "angle-down": [320, 512, [], "f107", "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"],
        "angle-left": [256, 512, [], "f104", "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"],
        "angle-right": [256, 512, [], "f105", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"],
        "angle-up": [320, 512, [], "f106", "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"],
        "arrow-down": [448, 512, [], "f063", "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"],
        "arrow-right": [448, 512, [], "f061", "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"],
        award: [384, 512, [], "f559", "M97.12 362.63l-5.3-5.3a9.004 9.004 0 0 0-4.02-2.32L72 350.77c-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32l-15.8 4.23a9.004 9.004 0 0 0-4.02 2.32l-5.3 5.3C273.09 376.41 254.76 384 235.26 384c-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340l5.21-5.3c5-5.09 11.22-8.75 18.05-10.61l15.53-4.23c13.89-3.79 24.75-14.84 28.47-28.98l4.16-15.81a41.145 41.145 0 0 1 10.42-18.37l11.37-11.57c10.17-10.35 14.14-25.44 10.42-39.58l-4.16-15.81a41.657 41.657 0 0 1 0-21.21l4.16-15.81c3.72-14.14-.25-29.23-10.42-39.58l-11.37-11.57c-5-5.09-8.59-11.42-10.42-18.37l-4.16-15.8c-3.72-14.14-14.58-25.19-28.47-28.98l-15.53-4.24c-6.83-1.86-13.05-5.52-18.05-10.61L256.84 12c-10.17-10.35-25-14.4-38.89-10.61l-15.53 4.24a39.614 39.614 0 0 1-20.84 0L166.05 1.4c-13.89-3.79-28.72.25-38.89 10.61l-11.37 11.57c-5 5.09-11.22 8.74-18.05 10.61l-15.53 4.24c-13.89 3.79-24.75 14.84-28.47 28.98l-4.16 15.8a41.145 41.145 0 0 1-10.42 18.37l-11.37 11.57c-10.17 10.35-14.15 25.44-10.42 39.58l4.16 15.8a41.657 41.657 0 0 1 0 21.21l-4.16 15.8c-3.72 14.14.25 29.23 10.42 39.59l11.37 11.57c5 5.09 8.59 11.42 10.42 18.37l4.16 15.8c3.72 14.14 14.58 25.19 28.47 28.98l15.53 4.23c6.83 1.86 13.05 5.52 18.05 10.61L121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"],
        bars: [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
        briefcase: [512, 512, [], "f0b1", "M320 288h192v144c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V288h192v20c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12v-20zm192-112v80H0v-80c0-26.51 21.49-48 48-48h80V80c0-26.51 21.49-48 48-48h160c26.51 0 48 21.49 48 48v48h80c26.51 0 48 21.49 48 48zM320 96H192v32h128V96z"],
        building: [448, 512, [], "f1ad", "M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"],
        calendar: [448, 512, [], "f133", "M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"],
        "calendar-alt": [448, 512, [], "f073", "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z"],
        "check-circle": [512, 512, [], "f058", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"],
        "chevron-right": [320, 512, [], "f054", "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"],
        clock: [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"],
        coins: [512, 512, [], "f51e", "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"],
        comment: [512, 512, [], "f075", "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"],
        comments: [576, 512, [], "f086", "M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"],
        "dot-circle": [512, 512, [], "f192", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"],
        envelope: [512, 512, [], "f0e0", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"],
        "exclamation-circle": [512, 512, [], "f06a", "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"],
        "exclamation-triangle": [576, 512, [], "f071", "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"],
        "external-link-alt": [576, 512, [], "f35d", "M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"],
        file: [384, 512, [], "f15b", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
        "file-alt": [384, 512, [], "f15c", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
        "file-download": [384, 512, [], "f56d", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"],
        fire: [384, 512, [], "f06d", "M216 23.858c0-23.802-30.653-32.765-44.149-13.038C48 191.851 224 200 224 288c0 35.629-29.114 64.458-64.85 63.994C123.98 351.538 96 322.22 96 287.046v-85.51c0-21.703-26.471-32.225-41.432-16.504C27.801 213.158 0 261.332 0 320c0 105.869 86.131 192 192 192s192-86.131 192-192c0-170.29-168-193.003-168-296.142z"],
        globe: [496, 512, [], "f0ac", "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"],
        "graduation-cap": [640, 512, [], "f19d", "M622.884 199.005l-275.817 85.1a96 96 0 0 1-54.134 0L92.398 222.232c-8.564 11.438-11.018 23.05-11.918 38.335C89.778 266.165 96 276.355 96 288c0 11.952-6.557 22.366-16.265 27.861l16.197 123.096c.63 4.786-3.1 9.043-7.932 9.043H40c-4.828 0-8.562-4.253-7.932-9.044L48.265 315.86C38.557 310.366 32 299.952 32 288c0-12.034 6.646-22.511 16.465-27.976.947-17.951 3.974-33.231 12.152-47.597l-43.502-13.422c-22.876-6.801-22.766-39.241 0-46.01l275.817-85.1a96 96 0 0 1 54.134 0l275.817 85.1c22.877 6.801 22.767 39.241.001 46.01zM356.503 314.682l-.207.064-.207.061a127.998 127.998 0 0 1-72.177 0l-.207-.061-.207-.064-150.914-46.57L120 352c0 35.346 89.543 64 200 64s200-28.654 200-64l-12.583-83.888-150.914 46.57z"],
        home: [576, 512, [], "f015", "M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"],
        'hospital-alt': [576, 512, [], 'f47d', 'M544 96H416V32c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32v368c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16V128c0-17.7-14.3-32-32-32zM160 436c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm160 128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm16-170c0 3.3-2.7 6-6 6h-26v26c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6v-26h-26c-3.3 0-6-2.7-6-6v-20c0-3.3 2.7-6 6-6h26V86c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v26h26c3.3 0 6 2.7 6 6v20zm144 298c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z'],
        "hourglass-half": [384, 512, [], "f252", "M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z"],
        "info-circle": [512, 512, [], "f05a", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"],
        language: [640, 512, [], "f1ab", "M304 416H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h280v320zm-120.676-72.622A12 12 0 0 0 194.839 352h22.863c8.22 0 14.007-8.078 11.362-15.861L171.61 167.085a12 12 0 0 0-11.362-8.139h-32.489a12.001 12.001 0 0 0-11.362 8.139L58.942 336.139C56.297 343.922 62.084 352 70.304 352h22.805a12 12 0 0 0 11.535-8.693l9.118-31.807h60.211l9.351 31.878zm-39.051-140.42s4.32 21.061 7.83 33.21l10.8 37.531h-38.07l11.07-37.531c3.51-12.15 7.83-33.21 7.83-33.21h.54zM616 416H336V96h280c13.255 0 24 10.745 24 24v272c0 13.255-10.745 24-24 24zm-36-228h-64v-16c0-6.627-5.373-12-12-12h-16c-6.627 0-12 5.373-12 12v16h-64c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h114.106c-6.263 14.299-16.518 28.972-30.023 43.206-6.56-6.898-12.397-13.91-17.365-20.933-3.639-5.144-10.585-6.675-15.995-3.446l-7.28 4.346-6.498 3.879c-5.956 3.556-7.693 11.421-3.735 17.117 6.065 8.729 13.098 17.336 20.984 25.726-8.122 6.226-16.841 12.244-26.103 17.964-5.521 3.41-7.381 10.556-4.162 16.19l7.941 13.896c3.362 5.883 10.935 7.826 16.706 4.276 12.732-7.831 24.571-16.175 35.443-24.891 10.917 8.761 22.766 17.102 35.396 24.881 5.774 3.556 13.353 1.618 16.717-4.27l7.944-13.903c3.213-5.623 1.37-12.76-4.135-16.171a312.737 312.737 0 0 1-26.06-18.019c21.024-22.425 35.768-46.289 42.713-69.85H580c6.627 0 12-5.373 12-12v-16c0-6.625-5.373-11.998-12-11.998z"],
        link: [512, 512, [], "f0c1", "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"],
        list: [512, 512, [], "f03a", "M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z"],
        "map-marker": [384, 512, [], "f041", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"],
        "map-marker-alt": [384, 512, [], "f3c5", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"],
        minus: [448, 512, [], "f068", "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"],
        "mouse-pointer": [320, 512, [], "f245", "M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"],
        newspaper: [576, 512, [], "f1ea", "M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"],
        "pause-circle": [512, 512, [], "f28b", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"],
        phone: [512, 512, [], "f095", "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"],
        plane: [576, 512, [], "f072", "M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"],
        "play-circle": [512, 512, [], "f144", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"],
        plus: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"],
        "power-off": [512, 512, [], "f011", "M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"],
        "question-circle": [512, 512, [], "f059", "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"],
        "quote-left": [512, 512, [], "f10d", "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"],
        road: [576, 512, [], "f018", "M567.3 383.6L429.9 78.2C426 69.5 417.4 64 408 64h-96.1l1.9 18.8c.7 7.1-4.8 13.2-11.9 13.2H274c-7.1 0-12.7-6.2-11.9-13.2L264 64h-96c-9.4 0-18 5.5-21.9 14.2L8.7 383.6C3.2 395.8 0 409.6 0 424c0 13.3 10.7 24 24 24h213.6c-7.1 0-12.7-6.2-11.9-13.2l10.8-104c.6-6.1 5.8-10.8 11.9-10.8h79.2c6.1 0 11.3 4.6 11.9 10.8l10.8 104c.7 7.1-4.8 13.2-11.9 13.2H552c13.2 0 24-10.7 24-24 0-13.9-3-27.7-8.7-40.4zM254.7 154.8l3.3-32c.6-6.1 5.8-10.8 11.9-10.8h36.2c6.1 0 11.3 4.6 11.9 10.8l3.3 32c.7 7.1-4.8 13.2-11.9 13.2h-42.8c-7.1 0-12.7-6.2-11.9-13.2zM321.8 288h-67.6c-7.1 0-12.7-6.2-11.9-13.2l7.4-72c.6-6.1 5.8-10.8 11.9-10.8h52.7c6.1 0 11.3 4.6 11.9 10.8l7.4 72c.9 7-4.7 13.2-11.8 13.2z"],
        "scroll": [640, 512, [], "f70e", "M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"],
        search: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"],
        "search-plus": [512, 512, [], "f00e", "M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"],
        sitemap: [640, 512, [], "f0e8", "M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"],
        star: [576, 512, [], "f005", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"],
        "ticket-alt": [576, 512, [], "f3ff", "M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"],
        times: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"],
        "times-circle": [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"],
        university: [512, 512, [], "f19c", "M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"]
    };
    ! function(c2) {
        try {
            c2();
        } catch (c3) {
            if (!s) throw c3;
        }
    }(function() {
        ! function c2(h2, l2) {
            var v2 = Object.keys(l2).reduce(function(c3, h3) {
                var v3 = l2[h3];
                return v3.icon ? c3[v3.iconName] = v3.icon : c3[h3] = v3, c3;
            }, {});
            typeof V.hooks.addPack === "function" ? V.hooks.addPack(h2, v2) : V.styles[h2] = a({}, V.styles[h2] || {}, v2), h2 === "fas" && c2("fa", l2);
        }("fas", f);
    });
}();;
(function() {
    "use strict";
    var _WINDOW = {};
    var _DOCUMENT = {};
    try {
        if (typeof window !== "undefined") _WINDOW = window;
        if (typeof document !== "undefined") _DOCUMENT = document;
    } catch (e) {}
    var _ref = _WINDOW.navigator || {},
        _ref$userAgent = _ref.userAgent,
        userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var IS_BROWSER = !!WINDOW.document;
    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
    var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;
    var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
    var PRODUCTION = function() {
        try {
            return true;
        } catch (e) {
            return false;
        }
    }();
    var FAMILY_CLASSIC = "classic";
    var FAMILY_SHARP = "sharp";
    var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

    function familyProxy(obj) {
        return new Proxy(obj, {
            get: function get(target, prop) {
                return prop in target ? target[prop] : target[FAMILY_CLASSIC];
            }
        });
    }
    var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
        "fa": "solid",
        "fas": "solid",
        "fa-solid": "solid",
        "far": "regular",
        "fa-regular": "regular",
        "fal": "light",
        "fa-light": "light",
        "fat": "thin",
        "fa-thin": "thin",
        "fad": "duotone",
        "fa-duotone": "duotone",
        "fab": "brands",
        "fa-brands": "brands",
        "fak": "kit",
        "fa-kit": "kit"
    }), _defineProperty(_familyProxy, FAMILY_SHARP, {
        "fa": "solid",
        "fass": "solid",
        "fa-solid": "solid",
        "fasr": "regular",
        "fa-regular": "regular",
        "fasl": "light",
        "fa-light": "light"
    }), _familyProxy));
    var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
        "solid": "fas",
        "regular": "far",
        "light": "fal",
        "thin": "fat",
        "duotone": "fad",
        "brands": "fab",
        "kit": "fak"
    }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
        "solid": "fass",
        "regular": "fasr",
        "light": "fasl"
    }), _familyProxy2));
    var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
        "fab": "fa-brands",
        "fad": "fa-duotone",
        "fak": "fa-kit",
        "fal": "fa-light",
        "far": "fa-regular",
        "fas": "fa-solid",
        "fat": "fa-thin"
    }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
        "fass": "fa-solid",
        "fasr": "fa-regular",
        "fasl": "fa-light"
    }), _familyProxy3));
    var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-kit": "fak",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl"
    }), _familyProxy4));
    var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
        "900": "fas",
        "400": "far",
        "normal": "far",
        "300": "fal",
        "100": "fat"
    }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
        "900": "fass",
        "400": "fasr",
        "300": "fasl"
    }), _familyProxy5));
    var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    var DUOTONE_CLASSES = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
    };
    var prefixes = new Set();
    Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
    Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
    var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n) {
        return "".concat(n, "x");
    })).concat(oneToTwenty.map(function(n) {
        return "w-".concat(n);
    }));

    function bunker(fn) {
        try {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
            fn.apply(void 0, args);
        } catch (e) {
            if (!PRODUCTION) throw e;
        }
    }
    var w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
    var namespace = w[NAMESPACE_IDENTIFIER];

    function normalizeIcons(icons2) {
        return Object.keys(icons2).reduce(function(acc, iconName) {
            var icon = icons2[iconName];
            var expanded = !!icon.icon;
            if (expanded) acc[icon.iconName] = icon.icon;
            else acc[iconName] = icon;
            return acc;
        }, {});
    }

    function defineIcons(prefix, icons2) {
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var _params$skipHooks = params.skipHooks,
            skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
        var normalized = normalizeIcons(icons2);
        if (typeof namespace.hooks.addPack === "function" && !skipHooks) namespace.hooks.addPack(prefix, normalizeIcons(icons2));
        else namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
        if (prefix === "fas") defineIcons("fa", icons2);
    }
    var icons = {
        "monero": [496, 512, [], "f3d0", "M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"],
        "microsoft": [448, 512, [], "f3ca", "M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"],
        "orcid": [512, 512, [], "f8d2", "M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91 0-41.64-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57 19.64 19.64 0 0 1-19.57 19.57zM300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369z"],
        "vk": [448, 512, [], "f189", "M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"],
        "google-plus": [512, 512, [], "f2b3", "M256,8C119.1,8,8,119.1,8,256S119.1,504,256,504,504,392.9,504,256,392.9,8,256,8ZM185.3,380a124,124,0,0,1,0-248c31.3,0,60.1,11,83,32.3l-33.6,32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9,0-77.2,35.5-77.2,78.1S142.3,334,185.3,334c32.6,0,64.9-19.1,70.1-53.3H185.3V238.1H302.2a109.2,109.2,0,0,1,1.9,20.7c0,70.8-47.5,121.2-118.8,121.2ZM415.5,273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5Z"],
        "google": [488, 512, [], "f1a0", "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"],
        "weibo": [512, 512, [], "f18a", "M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"],
        "reddit": [512, 512, [], "f1a1", "M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"],
        "apple": [384, 512, [], "f179", "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"],
        "wordpress": [512, 512, [], "f19a", "M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"],
        "blogger": [448, 512, [], "f37c", "M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"],
        "flickr": [448, 512, [], "f16e", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z"],
        "x-twitter": [512, 512, [], "e61b", "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"],
        "linkedin": [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"],
        "vimeo": [448, 512, [], "f40a", "M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"],
        "instagram": [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"],
        "facebook": [512, 512, [62e3], "f09a", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"],
        "snapchat": [512, 512, [62124, "snapchat-ghost"], "f2ab", "M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"],
        "youtube": [576, 512, [61802], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"],
        "twitter": [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"],
        "pinterest": [496, 512, [], "f0d2", "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"],
        "tumblr": [320, 512, [], "f173", "M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"],
        "medium": [640, 512, [62407, "medium-m"], "f23a", "M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"]
    };
    bunker(function() {
        defineIcons("fab", icons);
        defineIcons("fa-brands", icons);
    });
})();;
(function(Drupal2, $, once2) {
    Drupal2.behaviors.iframeBehaviour = {
        attach: function attach(context) {
            let firstLoad = 1;

            function autoResize(iframe) {
                const iframeHeight = $(iframe).contents().find("html").height();
                $(iframe).height(iframeHeight);
                if (firstLoad === 1) $(window).scrollTop(0);
                else $(window).scrollTop($(iframe).offset().top);
                firstLoad = 0;
            }
            $("iframe.autoresize", context).each((i, e) => {
                e.onload = function iload() {
                    autoResize(this);
                    $(this).contents().find("input").css("font-size", "16px");
                    $(this).contents().find("body").css("font-size", "16px");
                };
            });
        }
    };
    Drupal2.behaviors.accordionOutsideOfCkeditor = {
        attach: function(context, settings) {
            var $standaloneAccordion = $(".ckeditor-accordion.used-outside-of-ckeditor");
            if ($standaloneAccordion.length > 0) {
                $standaloneAccordion.each(function() {
                    var $accordion = $(this);
                    if ($accordion.hasClass("styled")) return;
                    if (!drupalSettings.ckeditorAccordion.accordionStyle.collapseAll) {
                        $accordion.children("dt:first").addClass("active");
                        $accordion.children("dd:first").addClass("active");
                        $accordion.children("dd:first").css("display", "block");
                    }
                    $accordion.children("dt").each(function() {
                        var $tab = $(this);
                        var tabText = $tab.text().trim();
                        var toggleClass = $tab.hasClass("active") ? " active" : "";
                        $tab.html('<span class="ckeditor-accordion-toggle used-outside-of-ckeditor' + toggleClass + '"></span><a class="standalone-accordion-toggler" href="#">' + tabText + ' <span class="standalone-alternate-accordion-toggle"></span></a>');
                    });
                    $accordion.addClass("styled").removeClass("ckeditor-accordion used-outside-of-ckeditor").wrap('<div class="ckeditor-accordion-container used-outside-of-ckeditor"></div>');
                });
                const standAloneToggleEvent = once2("standalone-accordion-toggle-event", ".standalone-accordion-toggler", context);
                $(standAloneToggleEvent).on("click", function(e) {
                    var $t = $(this).parent();
                    if ($t.hasClass("active")) {
                        $t.removeClass("active");
                        $t.next().slideUp();
                    } else {
                        $t.addClass("active");
                        $t.next().slideDown(300).addClass("active");
                    }
                    e.preventDefault();
                });
            }
        }
    };
    Drupal2.behaviors.altTags = {
        attach: function attach(context) {
            $(".paragraph--type--para-signpost-card img, .paragraph--type--para-signpost-box img, .profilecard .thumb img, .paragraph--type--event-signposting-card img, .event-card-link img, .stap-card .profilepic img, .newscard .thumb img, .profilecard .thumb img, .teaser-thumb img, .imgbanner img, .img1 img, .img2 img, .pg-course-image img, .featured-image img, .featured-video img").attr("alt", "");
        }
    };
    Drupal2.behaviors.ckeditorAccordionAccessibility = {
        attach: function attach(context) {
            setTimeout(() => {
                const ckeditorAccordionToggler = once2("ckeditor-accordion-toggler", ".ckeditor-accordion-toggler, .standalone-accordion-toggler", context);
                $(ckeditorAccordionToggler).on("click", function(event2) {
                    setTimeout(() => {
                        $(this).attr("aria-expanded", $(this).parent(".standalone-accordion").hasClass("active") ? "true" : "false");
                    });
                });
            }, 50);
        }
    };
    Drupal2.behaviors.logos = {
        attach: function attach(context) {
            $(context).find(".logo-container").each(function() {
                var parent_width = $(this).parents(".row-width").width();
                var scroll_width = $(this).get(0).scrollWidth;
                if (scroll_width <= parent_width) $(this).siblings(".scrollarrows").css("display", "none");
            });
            $(".scrollarrows > .left").click(function() {
                var scrollPos = 145;
                var $logo_container = $(this).parents(".scrollarrows").siblings(".logo-container");
                var currScrollLeft = $logo_container.scrollLeft();
                $logo_container.animate({
                    scrollLeft: currScrollLeft - scrollPos - $logo_container.position().left
                }, 500);
            });
            $(".scrollarrows > .right").click(function() {
                var scrollPos = 145;
                var $logo_container = $(this).parents(".scrollarrows").siblings(".logo-container");
                var currScrollLeft = $logo_container.scrollLeft();
                $logo_container.animate({
                    scrollLeft: currScrollLeft + scrollPos + $logo_container.position().left
                }, 500);
            });
        }
    };
    Drupal2.behaviors.staffProfileBehaviour = {
        attach: function attach(context) {
            $(".showfull").click(function() {
                if ($(".fullcontact").css("display") == "none") {
                    $(".fullcontact").css("display", "flex");
                    $(".showfull").html('Full contact details <i class="fas fa-angle-up"></i>');
                } else {
                    $(".fullcontact").css("display", "none");
                    $(".showfull").html('Full contact details <i class="fas fa-angle-down"></i>');
                }
            });
            if ($(".teachingfocus").length) {
                if ($(".focuscustom")) $(".focuscustom").parent(".ckeditor-accordion-container").addClass("parentcustom");
                $(".ckeditor-accordion-container.used-outside-of-ckeditor:not(.parentcustom)").addClass("reorder");
                if ($(".focusteachinterests")) $(".focusteachinterests").parent(".ckeditor-accordion-container").insertAfter(".reorder:last");
                if ($(".focusteachactivities")) $(".focusteachactivities").parent(".ckeditor-accordion-container").insertAfter(".reorder:last");
                if ($(".focusresinterests")) $(".focusresinterests").parent(".ckeditor-accordion-container").insertAfter(".reorder:last");
                if ($(".focuspubs")) $(".focuspubs").parent(".ckeditor-accordion-container").insertAfter(".reorder:last");
                if ($(".focussupervisions")) $(".focussupervisions").parent(".ckeditor-accordion-container").insertAfter(".reorder:last");
                if ($(".focusgrants")) $(".focusgrants").parent(".ckeditor-accordion-container").insertAfter(".reorder:last");
                if ($(".focusprof")) $(".focusprof").parent(".ckeditor-accordion-container").insertAfter(".reorder:last");
            }
            if ($(".node--type-staff-profile")) $(".profilepic .enlarge").click(function() {
                document.addEventListener("keydown", closeModalEscapeKey);
                $("<div>&nbsp;</div>").addClass("modal-overlay").appendTo("body");
                $(".profilepic-modal").fadeIn();
                $(".modal-overlay").click(function() {
                    $(".modal-overlay").remove();
                    $(".profilepic-modal").fadeOut().stopPropagation();
                });
                $(".close").click(function() {
                    $(".modal-overlay").remove();
                    $(".profilepic-modal").fadeOut().stopPropagation();
                });
                const closeElements = document.querySelectorAll(".close, .modal-overlay");
                if (closeElements) closeElements.forEach((element) => {
                    element.addEventListener("keydown", closeModalEscapeKey);
                });
            });

            function closeModalEscapeKey(e) {
                if (e.key === "Escape") {
                    $(".profilepic-modal").fadeOut();
                    $(".modal-overlay").remove();
                    document.removeEventListener("keydown", closeModalEscapeKey);
                }
            }
        }
    };
    Drupal2.behaviors.galleryBehaviour = {
        attach(context) {
            $(".gallery-thumbs > .thumb").keypress(function(e) {
                if (e.which == 13) $(this).click();
            });
            $(".swipes > span").keypress(function(e) {
                if (e.which == 13) $(this).click();
            });
            $(".gallery-thumbs > .thumb").click(function() {
                $(this).parent(".gallery-thumbs").find(".chosen-thumb").each(function() {
                    $(this).removeClass("chosen-thumb").addClass("thumb");
                });
                $(this).addClass("chosen-thumb").removeClass("thumb");
                var outer = $(this).parent(".gallery-thumbs");
                var inner = $(".outer > div");
                var target = $(this);
                var containerWidth = outer.width();
                var targetWidth = target.outerWidth(true);
                var targetIndextotalThumbs = $(this).parent(".gallery-thumbs").children().length - 1;
                var targetIndex = target.index();
                var swipe = Math.ceil((targetIndex + 1) / 3);
                if ($(this).parent(".gallery-thumbs").siblings(".swipes").find(".active").hasClass(swipe)) {} else {
                    $(this).parent(".gallery-thumbs").siblings(".swipes").find(".active").removeClass("active");
                    $(this).parent(".gallery-thumbs").siblings(".swipes").find("." + swipe).addClass("active");
                }
                var leftScreenOffset = (containerWidth - targetWidth) / 2;
                var leftSiblingOffset = targetWidth * targetIndex;
                var scrollValue = leftSiblingOffset - leftScreenOffset;
                outer.animate({
                    scrollLeft: scrollValue
                }, 750);
                var picid = $(this).attr("title");
                if ($(this).closest(".gallery-container").siblings(".gallery-main").find(".main-img").has(".img-caption").length) {
                    if ($(this).closest(".gallery-container").siblings(".gallery-main").find("." + picid).has(".img-caption").length) {} else $(this).closest(".gallery-container").siblings(".gallery-main").find(".main-img").children(".img-caption").fadeOut(1e3);
                    setTimeout(function() {
                        $(this).closest(".gallery-container").siblings(".gallery-main").find(".main-img").removeClass("main-img").addClass("hidden-img");
                        if ($(this).closest(".gallery-container").siblings(".gallery-main").find("." + picid).has(".img-caption").length) {
                            $(this).closest(".gallery-container").siblings(".gallery-main").find(".hidden-img." + picid).children(".img-caption").css("display", "block");
                            $(this).closest(".gallery-container").siblings(".gallery-main").find(".hidden-img." + picid).removeClass("hidden-img").addClass("main-img");
                        } else $(this).closest(".gallery-container").siblings(".gallery-main").find("." + picid).removeClass("hidden-img").addClass("main-img").children(".img-caption").delay(1e3).fadeIn(1e3);
                    }.bind(this), 500);
                } else {
                    $(this).closest(".gallery-container").siblings(".gallery-main").find(".main-img").removeClass("main-img").addClass("hidden-img");
                    $(this).closest(".gallery-container").siblings(".gallery-main").find(".hidden-img." + picid).removeClass("hidden-img").addClass("main-img").children(".img-caption").delay(1e3).fadeIn(1e3);
                }
            });
            $(".swipes > span").click(function() {
                if ($(this).hasClass("active")) {} else {
                    var thumbwidth = $(this).closest(".gallery-container").find(".thumb").css("width").replace(/\D/g, "");
                    var goto = ($(this).attr("class") * 3 - 3) * 270;
                    $(this).closest(".gallery-container").find(".swipes > .active").removeClass("active");
                    $(this).addClass("active");
                    $(this).closest(".gallery-container").find(".gallery-thumbs").animate({
                        scrollLeft: goto
                    }, "slow");
                }
            });
        }
    };
    Drupal2.behaviors.sectionNavBehaviour = {
        attach: function attach(context) {
            $(document).keyup(function test(e) {
                if (e.keyCode == 27) {
                    $(".sectmenu-0.menu-open").each(function closeMenu() {
                        $(this).click();
                    });
                    $(".block-uos-globalnav > ul >li.menu-open").each(function closeMenu() {
                        $(this).click();
                    });
                }
            });
            $(".paragraph--type--para-section-nav > div ul").attr("role", "menubar");
            $(window).click(function(e) {
                $(".sectmenu-0").siblings("ul").hide();
                $(".sectmenu-0").find("svg").removeClass("fa-angle-up").addClass("fa-angle-down");
                $(".sectmenu-0").removeClass("menu-open");
                $(".sectmenu-0").removeClass("menu-closed");
                $(".sectmenu-top").removeClass("menu-closed");
                $(".nav-overlay").css("display", "none");
            });
            $(".paragraph--type--para-section-nav > div ul a").attr("role", "menuitem");
            $(".paragraph--type--para-section-nav > nav > ul > li > ul > li > a").wrap("<h3></h3>");
            $(".paragraph--type--para-section-nav").click(function(e) {
                event.stopPropagation();
            });

            function centreSectionNav() {
                var paddsides = ($(window).width() - $(".row").css("max-width").replace(/\D/g, "")) / 2;
                $(".region-banner .section-navigation ul:first").css("padding", "0 " + paddsides + "px");
                $(".region-banner .section-navigation ul:first > li > ul").css("padding", "0 " + paddsides + "px");
            }
            centreSectionNav();
            $(window).resize(() => {
                centreSectionNav();
            });
            $(".region-banner .section-navigation ul:first > li").each(function(i, navListElement) {
                $(navListElement).contents().filter(function(i2, e) {
                    return e.nodeType === 3 && e.nodeValue.trim().length;
                }).wrap("<span tabindex='0' class='sectmenu-0' role='button'></span>");
            });
            $(".region-banner .section-navigation ul:first > li > a").addClass("sectmenu-top").end();
            const sectionMenu0 = once2("js-sectmenu-0-add-arrows", ".sectmenu-0", context);
            $(sectionMenu0).contents().after('<span class="iconnowrap">&nbsp;<i class="fas fa-angle-down"></i></span>').end();
            $(sectionMenu0).attr("aria-expanded", "false");
            $(sectionMenu0).wrapInner("<span></span>");
            const $topLevelMenu = $(".region-banner .paragraph--type--para-section-nav > nav > ul");
            const $dropDownNavMenu = $("> li > ul", $topLevelMenu);
            $topLevelMenu.addClass("loaded");
            $dropDownNavMenu.addClass("section-nav-dropdown");
            setTimeout(() => {
                const d = document.querySelectorAll(".sectmenu-0");
                let i = 0;
                let w = 0;
                let width = 0;
                let height = 0;
                for (i = 0; i < d.length; i++) {
                    width = d[i].offsetWidth;
                    height = d[i].offsetHeight;
                    for (w = width; w; w--) {
                        d[i].style.width = `${w}px`;
                        if (d[i].offsetHeight !== height) break;
                    }
                    if (w < d[i].scrollWidth) {
                        d[i].style.maxWidth = `${d[i].scrollWidth}px`;
                        d[i].style.width = d[i].style.maxWidth;
                    } else d[i].style.width = `${w+1}px`;
                }
            }, 500);
            $(".region-left_off_canvas .section-navigation ul:first > li").each(function(i, e) {
                $(e).contents().filter(function(i2, e2) {
                    return e2.nodeType === 3 && e2.nodeValue.trim().length;
                }).wrap("<span class='mobmenu-0' role='button' tabindex='0' aria-expanded='false'></span>");
            });
            $(once2("js-mobmenu-0-add-arrows", ".mobmenu-0", context)).append('<i class="fas fa-angle-down"></i>').end();
            const $ocDropDownButtons = $(once2("sidebar-dropdown-menus", ".region-left_off_canvas .section-navigation ul:first-of-type > li > span", context));
            $ocDropDownButtons.click(function toggleDropdown() {
                const $parent = $(this).parent("li");
                const $ul = $parent.children("ul");
                $ul.stop().fadeToggle(150, () => {
                    $(this).attr("aria-expanded", $ul.is(":visible") ? "true" : "false");
                    if ($(this).is($ocDropDownButtons.last())) {
                        Foundation.Keyboard.releaseFocus($(".left-off-canvas-menu"));
                        Foundation.Keyboard.trapFocus($(".left-off-canvas-menu"));
                    }
                });
            });
            const offCanvas = once2("js-off-canvas-menu", "#left-off-canvas-menu", context).shift();
            $(offCanvas).on("opened.zf.offCanvas", (e) => {
                Foundation.Keyboard.trapFocus($(".left-off-canvas-menu"));
            });
            $(offCanvas).on("close.zf.offCanvas", (e) => {
                Foundation.Keyboard.releaseFocus($(".left-off-canvas-menu"));
            });
            $(".section-navigation .section-title .button.menu").keypress((event2) => {
                if ((event2.keyCode ? event2.keyCode : event2.which) === 13) $(event2.target).trigger("click");
            });
            $(".mobmenu-0").keypress((event2) => {
                if ((event2.keyCode ? event2.keyCode : event2.which) === 13) $(event2.target).trigger("click");
            });
            $(".off-canvas-wrapper .close-button").on("keypress, click", () => {
                setTimeout(() => {
                    $(".section-navigation .section-title .button.menu").focus();
                }, 150);
            });

            function updateMenus(buttonActive) {
                const parentUl = $(buttonActive).parents("ul");
                const siblingButtons = $(parentUl).find("> li > .sectmenu-0, > li > .sectmenu-top").not(buttonActive);
                buttonActive.attr("aria-expanded", buttonActive.hasClass("menu-open"));
                if ($(buttonActive).hasClass("menu-open")) {
                    $(buttonActive).removeClass("menu-closed").siblings("ul").css({
                        display: "flex",
                        visibility: "visible",
                        opacity: 1
                    });
                    $(".nav-overlay").css("display", "block");
                    $(buttonActive).find("svg").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(siblingButtons).removeClass("menu-open").addClass("menu-closed").siblings("ul").css({
                        display: "none",
                        visibility: "hidden",
                        opacity: 0
                    });
                    $(siblingButtons).find("svg").removeClass("fa-angle-up").addClass("fa-angle-down");
                } else {
                    const menuContainer = $(buttonActive).siblings("ul");
                    menuContainer.css({
                        display: "none",
                        visibility: "hidden",
                        opacity: 0
                    });
                    $(siblingButtons).removeClass("menu-closed");
                    $(buttonActive).find("svg").removeClass("fa-angle-up").addClass("fa-angle-down");
                    $(".nav-overlay").css("display", "none");
                }
            }
            $(".sectmenu-0").keypress(function(e) {
                if (e.which == 13) $(this).click();
            });

            function menuEvent(e) {
                const buttonActive = $(e.currentTarget);
                switch (e.type) {
                    case "click":
                        $(buttonActive).toggleClass("menu-open").promise().done(updateMenus(buttonActive));
                        break;
                    case "touchstart":
                        $(buttonActive).toggleClass("menu-open").promise().done(updateMenus(buttonActive));
                        break;
                    default:
                        return true;
                }
                return false;
            }
            $(".dynamic_menu_block a[data-bold]").wrap("<strong></strong>");
            $(".dynamic_menu_block a[data-blank]").css("visibility", "hidden");
            $(".off-canvas a[data-blank]").hide();
            $(".dynamic_menu_block a[data-nolink]").each((i, e) => {
                $(e).replaceWith(e.childNodes);
            });
            $(once2("toggle-nav", ".sectmenu-0", context)).on("click touchstart", menuEvent);
            $(document).on("click touchstart", (e) => {
                if (!$(e.target).closest(".dynamic_menu_block .menu-wrapper").length) $(".dynamic_menu_block .menu-open, .dynamic_menu_block .menu-closed").removeClass("menu-open").removeClass("menu-closed").siblings().css({
                    display: "none",
                    visibility: "hidden",
                    opacity: 0
                });
            });
            $(".paragraph--type--para-section-nav > nav > ul > li > ul").each(function(e) {
                $(this).on("focusout", function(e2) {
                    if ($(this).is(":focus-within")) {} else $(this).siblings(".sectmenu-0").click();
                });
            });
            $(".section-title").attr("role", "region").attr("aria-label", "Section title");
        }
    };
    Drupal2.behaviors.atozRollup = {
        attach: (context) => {
            $(once2("atoz-rollup-toggle", "[data-atozrollup=true]", context)).each(Drupal2.behaviors.atozRollup.initRollupLinks);
        },
        initRollupLinks() {
            const links = Drupal2.behaviors.atozRollup.getAtozLinks();
            if (links.length) Drupal2.behaviors.atozRollup.populateHtml(links);
        },
        getAtozLinks: () => {
            let azLinks = [];
            $("h2 > a[id], h2 > a[name], h3 > a[id],  h3 > a[name]", "main").each(function getHeaderElements() {
                let id = $(this).attr("id");
                if (!id) {
                    id = $(this).attr("name");
                    $(this).attr("id", id);
                }
                if (id.indexOf(" ") >= 0) return true;
                azLinks.push(id);
            });
            azLinks.sort((a, b) => {
                const titleA = $(`#${a}`).text();
                const titleB = $(`#${b}`).text();
                return titleA.localeCompare(titleB, "en", {
                    numeric: true
                });
            });
            return azLinks;
        },
        populateHtml: (links) => {
            const processed = [];
            const $nav = $("<nav/>", {
                class: "a-to-z-rollup-nav",
                "aria-label": "0 to 9, A to Z links to content on this page"
            });
            const $element = $("<ul/>", {
                class: "a-to-z-rollup-list"
            });
            links.forEach((link) => {
                let normalizeLink = $(`#${link}`).text().charAt(0).toUpperCase();
                if (!isNaN(normalizeLink.charAt(0))) normalizeLink = "0 to 9";
                if (processed.indexOf(normalizeLink) !== -1) return true;
                $(`<li><a href="#${link}">${normalizeLink}</a></li>`).appendTo($element);
                processed.push(normalizeLink);
            });
            $element.appendTo($nav);
            $nav.append($("<hr />")).insertBefore("[data-atozrollup=true]");
        }
    };
    Drupal2.behaviors.replaceVideoIcon = {
        attach: (context, settings) => {
            const playButtons = $("button.video-embed-field-lazy-play");
            playButtons.each((i, e) => {
                if ($(e).parent().siblings("figcaption").text() != "") var text = $(e).parent().siblings("figcaption").text();
                else {
                    var text = $(e).parents("figure").attr("name");;
                }
                $(e).html('<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>').addClass("replaced").attr("aria-label", "Play " + text);
                $(e).siblings("img").attr("alt", text);
            });
        }
    };
    Drupal2.behaviors.focus_lazy_iframe = {
        attach: function(context, settings) {
            $(".video-embed-field-lazy", context).click((e) => {
                setTimeout(() => {
                    $(e.currentTarget).children("iframe").first().focus();
                }, 100);
            });
        }
    };
    Drupal2.behaviors.hideShowMyPublications = {
        attach: (context, settings) => {
            $(".pubs-tabs").attr("role", "tab");
            $(".fave-link").click((e) => {
                $(e.target).removeClass("not-clicked");
                $(".all-link").addClass("not-clicked");
                $(".all-pubs").fadeOut();
                $(".fave-pubs").fadeIn();
                return false;
            });
            $(".all-link").click((e) => {
                $(e.target).removeClass("not-clicked");
                $(".fave-link").addClass("not-clicked");
                $(".fave-pubs").fadeOut();
                $(".all-pubs").fadeIn();
                return false;
            });
            $(".fave-link").click();
        }
    };
    Drupal2.behaviors.generateHeadingGlossary = {
        attach: (context, settings) => {
            const glossary = context.querySelector(".page-link-glossary");
            $(once2("append-glossary", ".page-link-glossary", context)).each(() => {
                if (context.body.classList.contains("node--type-staff-profile-index"))
                    if (typeof glossary !== "undefined" && glossary != null) Drupal2.behaviors.generateHeadingGlossary.buildList(glossary);
            });
        },
        buildList: (glosarryElement) => {
            const headings = document.querySelectorAll(".staff-profile-listing h2");
            const list = glosarryElement.querySelector("ul");
            headings.forEach((element) => {
                const id = element.innerHTML.replace(/[^A-Z0-9]/ig, "-").toLowerCase();
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.setAttribute("href", `#${id}`);
                anchor.innerHTML = element.innerHTML;
                element.setAttribute("id", id);
                listItem.appendChild(anchor);
                list.appendChild(listItem);
            });
        }
    };
    Drupal2.behaviors.rollUpAnchors = {
        attach: (context, settings) => {
            let onThisPage = "Off";
            const onThisPageField = $(".block-field-blocknodepagefield-show-onpage-anchors");
            if (onThisPageField.length) onThisPage = onThisPageField.first().text().replace(/\s+/g, "");
            if (onThisPage === "On") {
                $(".block-field-blocknodepagefield-show-onpage-anchors").html("<hr class='onthispage' /><h2>On this page:</h2><ul></ul><hr class='onthispage' />");
                $("a[name]:not([href])").each((_i, a) => {
                    const aText = $(a).text().replace(/\s+/g, "");
                    if (aText) $(".block-field-blocknodepagefield-show-onpage-anchors ul").append(`<li><a href="#${a.name}">${a.text}</li>`);
                });
                $("a[id]:not([href]).ck-anchor").each((_i, a) => {
                    const aText = $(a).text().replace(/\s+/g, "");
                    if (aText) $(".block-field-blocknodepagefield-show-onpage-anchors ul").append(`<li><a href="#${a.id}">${a.text}</li>`);
                });
                $(".block-field-blocknodepagefield-show-onpage-anchors").show();
            }
        }
    };
    Drupal2.behaviors.general = {
        attach: (context) => {
            $(once2("add-role-to-list", ".quicklinks ul", context)).attr("role", "list");
            const $backToTopButton = $(".backtotop");

            function toggleBackToTopButton() {
                if (window.scrollY >= 300) $backToTopButton.stop().fadeIn(200);
                else $backToTopButton.stop().fadeOut(200);
            }
            window.addEventListener("scroll", toggleBackToTopButton, Drupal2.behaviors.general.supportsPassiveListeners() ? {
                passive: true
            } : false);
            $backToTopButton.click(function scrollToTop() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            });
            if ($("div[data-showminutes=true]").length) $(".block-field-blocknodepagebody > ol > li > h2, .block-field-blocknodepagebody > ol > li > h3").each(function() {
                $(this).closest("li").addClass("ordered-list-heading");
            });
            const pauseButton = document.getElementById("pauseButton");
            const video = document.getElementById("campaignVideo");
            if (pauseButton && video) {
                pauseButton.addEventListener("click", function() {
                    if (video.paused) {
                        video.play();
                        pauseButton.innerHTML = '<i class="fas fa-lg fa-pause-circle"></i>';
                        pauseButton.setAttribute("aria-label", "Pause video");
                    } else {
                        video.pause();
                        pauseButton.innerHTML = '<i class="fas fa-lg fa-play-circle"></i>';
                        pauseButton.setAttribute("aria-label", "Play video");
                    }
                });
                const source = video.querySelector("source");
                const mediaAttr = source == null ? void 0 : source.getAttribute("media");
                if (!mediaAttr) return;
                const match = mediaAttr.match(/min-width:\s*(\d+)px/);
                const minWidth = match ? parseInt(match[1], 10) : 0;
                if (!minWidth) return;
                if (window.innerWidth < minWidth) {
                    const handleResize = Foundation.util.throttle(function(e) {
                        if (window.innerWidth >= minWidth) {
                            video.load();
                            window.removeEventListener("resize", handleResize);
                        }
                    }, 300);
                    window.addEventListener("resize", handleResize);
                }
            }
        },
        supportsPassiveListeners: () => {
            let passiveSupported = false;
            try {
                const options = {
                    get passive() {
                        passiveSupported = true;
                        return false;
                    }
                };
                window.addEventListener("test", null, options);
                window.removeEventListener("test", null, options);
            } catch (err) {
                passiveSupported = false;
            }
            return passiveSupported;
        }
    }, Drupal2.behaviors.fitTextHeading = {
        attach: (context, settings) => {
            if (window.matchMedia("screen and (min-width: 768px)").matches) {
                $(".region-banner .banner-section span > a:first").each(function(i, e) {
                    fitty(e, {
                        minSize: 16,
                        maxSize: 28
                    });
                });
                $(".lpcontent h1").each(function(i, e) {
                    var fit3 = fitty(e, {
                        minSize: 45,
                        maxSize: 60
                    });
                    fit3.observeWindow = true;
                    fit3.observeWindowDelay = 100;
                });
                $(".hubintro h1").each(function(i, e) {
                    var fit2 = fitty(e, {
                        minSize: 28,
                        maxSize: 40,
                        multiLine: true
                    });
                    fit2.observeWindow = true;
                });
            }
            $(".section-title-holder > a").each(function(i, e) {
                let sectionTitleFit = fitty(e, {
                    minSize: 16,
                    maxSize: 28,
                    multiLine: true
                });
                sectionTitleFit.observeWindow = true;
                sectionTitleFit.observeWindowDelay = 300;
            });
        }
    };
    Drupal2.behaviors.coursepage = {
        attach: (context, settings) => {
            $(".atas_link").click(function() {
                let buildContent = "";
                $(this).closest(".yearpanel").find(".ckeditor-accordion-toggler").each(function() {
                    buildContent += $(this).text() + "\n";
                });
                setTimeout(() => {
                    const textToCopy = buildContent;
                    if (navigator && navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(textToCopy).then(() => alert("Modules copied to clipboard."));
                    else {
                        const fallbackTextarea = document.createElement("textarea");
                        fallbackTextarea.value = textToCopy;
                        document.body.appendChild(fallbackTextarea);
                        fallbackTextarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(fallbackTextarea);
                        alert("Modules copied to clipboard.");
                    }
                }, 0);
            });
            if (settings.path.currentPath.startsWith("postgraduate/taught/courses") || settings.path.currentPath.startsWith("undergraduate/courses")) $(".atoz-list").find("a").each(function atoz() {
                var letter = "#" + $(this).text();
                $(this).attr("href", letter);
            });
            $(".block-field-blocknodecoursefield-course-accred-dets").insertAfter($(".block-field-blocknodecoursefield-course-descript h2"));
            $(".course-pgt-fee-lookup").each(function getFees() {
                var feeApiUrl = "https://ssd.dept.shef.ac.uk/fees/pgt/api/drupal-lookup.php?course=";
                var _this = this;
                $.getJSON(feeApiUrl + $(this).data("course-internal-code"), (data) => {
                    var curyear = $(".course-pgt-fee-lookup").data("start-year");
                    var prevyear = curyear - 1;
                    if ($(this).data("use-ugfees") == 1) var feelink = "/undergraduate/fees-funding";
                    else var feelink = "/postgraduate/taught/fees";
                    if (data[curyear]) $(this).html(`<ul><li>Home (${curyear} annual fee) : ${data[curyear]["Home"]}</li>
              <li>Overseas (${curyear} annual fee) : ${data[curyear]["Overseas"]}</li></ul>
              <p>The fee listed is for the advertised mode of study. If you're studying for an alternative qualification or via a different mode of study (eg full-time, part-time) then the fee could be different. Due to inflation, the fee for Home students could also increase after your first year of study. <a href="${feelink}">Use our fee calculator or contact the Student Fees team</a> to check.</p>
              <p><a href="https://www.sheffield.ac.uk/study/fee-status">Fee status help</a></p>`);
                    else {
                        if (data[prevyear]) $(this).html(`<p>We don't yet have the fees for ${curyear} entry. Please use the ${prevyear} fees as a guide:</p><ul><li>Home (${prevyear} annual fee) : ${data[prevyear]["Home"]}</li>
              <li>Overseas (${prevyear} annual fee) : ${data[prevyear]["Overseas"]}</li></ul>
              <p>The fee listed is for the advertised mode of study. If you're studying for an alternative qualification or via a different mode of study (eg full-time, part-time) then the fee could be different. Due to inflation, the fee for Home students could also increase after your first year of study. <a href="${feelink}">Use our fee calculator or contact the Student Fees team</a> to check.</p>
              <p><a href="https://www.sheffield.ac.uk/study/fee-status">Fee status help</a></p>`);
                    }
                }).fail((jqxhr) => {
                    if (jqxhr.status === 404) $(this).html('<p><a href="/postgraduate/taught/fees">Contact the Student Fees team</a> to check the fee for this course.</a></p>');
                    else $(this).html('<p><a href="/postgraduate/taught/fees">Contact the Student Fees team</a> to check the fee for this course.</a></p>');
                });
            });
        }
    };
    Drupal2.behaviors.coursefinder = {
        attach: (context, settings) => {
            $(".routes").click(function() {
                $(".otherways a").toggle();
            });
        }
    };
    Drupal2.behaviors.ugcourse = {
        attach: (context, settings) => {
            $(".course-ug-fee-lookup").each(function getFees() {
                var feeApiUrl = "https://ssd.dept.shef.ac.uk/fees/ug/api/fee.php?course=";
                var _this = this;
                $.getJSON(feeApiUrl + $(this).data("course-internal-code"), (data) => {
                    var curyear = $(".course-ug-fee-lookup").data("start-year");
                    var prevyear = curyear - 1;
                    var fullyear = Number(curyear.toString().slice(-2)) + 1;
                    var prevfullyear = Number(prevyear.toString().slice(-2)) + 1;
                    if (data[curyear]) {
                        if (data[curyear]["Home"]["fee"]) $(this).html(`<div class='feebox'><div class='feecost'>${data[curyear]["Home"]["fee"]}</div><strong>Home students</strong><br> ${curyear}-${fullyear} annual tuition fee<p class="feeinfo">${data[curyear]["Home"]["feeInfo"]}</p></div>`);;
                        if (data[curyear].hasOwnProperty("Overseas") && data[curyear].Overseas.hasOwnProperty("fee")) $(this).append(`<div class='feebox'><div class='feecost'>${data[curyear]["Overseas"]["fee"]}</div><strong>Overseas students</strong><br> ${curyear}-${fullyear} annual tuition fee<p class="feeinfo">${data[curyear]["Overseas"]["feeInfo"]}</p></div>`);;
                        $(".course-ug-additional-fees").html(`<p>${data[curyear]["Home"]["additionalCosts"]}</p>`);
                    } else {
                        if (data[prevyear]) {
                            $(".year-fees-unavailable").html(`<p>Tuition fees for ${curyear} entry have not been confirmed. Please use ${prevyear}-${prevfullyear} information as a guide.</p>`);
                            if (data[prevyear]["Home"]["fee"]) $(this).html(`<div class='feebox'><div class='feecost'>${data[prevyear]["Home"]["fee"]}</div><strong>Home students</strong><br> ${prevyear} annual tuition fee<p class="feeinfo">${data[prevyear]["Home"]["feeInfo"]}</p></div>`);;
                            if (data[prevyear].hasOwnProperty("Overseas") && data[prevyear].Overseas.hasOwnProperty("fee")) $(this).append(`<div class='feebox'><div class='feecost'>${data[prevyear]["Overseas"]["fee"]}</div><strong>Overseas students</strong><br> ${prevyear} annual tuition fee<p class="feeinfo">${data[prevyear]["Overseas"]["feeInfo"]}</p></div>`);;
                            $(".course-ug-additional-fees").html(`<p>${data[prevyear]["Home"]["additionalCosts"]}</p>`);
                        }
                    }
                }).fail((jqxhr) => {
                    if (jqxhr.status === 404) $(this).html('<p><a href="/undergraduate/fees-funding">Contact the Student Fees team</a> to check the fee for this course.</a></p>');
                    else $(this).html('<p><a href="/undergraduate/fees-funding">Contact the Student Fees team</a> to check the fee for this course.</a></p>');
                });
            });
            Drupal2.behaviors.ugcourse.initPillSlider();
        },
        initPillSlider: () => {
            const $offerTabButtons = $(".js-course-ereq-tabslist[role=tablist] button[role=tab]");
            const tabs = document.querySelector(".js-course-ereq-tabslist");
            if (tabs) {
                tabs.style.setProperty("--arrow-offset", tabs.offsetWidth * 0.25 + "px");
                $offerTabButtons.on("click keydown", function(evt) {
                    let buttonIndex = $offerTabButtons.index($(this));
                    if (evt.type === "keydown") {
                        const direction = event.which === 37 ? buttonIndex - 1 : event.which === 39 ? buttonIndex + 1 : null;
                        if (direction !== null && direction >= 0 && direction < $offerTabButtons.length) buttonIndex = direction;
                    }
                    tabs.style.setProperty("--arrow-offset", tabs.offsetWidth * ((25 + buttonIndex * 50) / 100) + "px");
                    tabs.style.setProperty("--pill-offset", buttonIndex * 100 + "%");
                });
            }
        }
    };
    Drupal2.behaviors.ugexplore = {
        attach: (context, settings) => {
            const $exploreBox = $(".explore-box");
            const desktopLayoutSize = 1024;
            if ($exploreBox.length === 0) return false;

            function checkOffset() {
                const mainColHeight = $(".large-8").height();
                const windowsize = $(window).width();
                const footerTop = $("footer").offset().top;
                if (windowsize >= desktopLayoutSize) $exploreBox.parent(".large-4").css("position", "relative").css("height", mainColHeight);
                if ($exploreBox.offset().top + $exploreBox.height() >= footerTop - 10) $exploreBox.css("position", "absolute").css("right", "20px").css("left", "20px").css("bottom", "0").css("top", "auto");
                if ($(document).scrollTop() + window.innerHeight < footerTop) $exploreBox.css("position", "fixed").css("right", "initial").css("left", "initial").css("bottom", "initial").css("top", $(".muse-bar-container").hasClass("stickymuse") ? $(".muse-bar-container").height() : 0);
            }
            $(".explore-item").each(function() {
                const id = $(this).attr("id");
                if (id == "department")
                    if ($(".ug-explore-menu").hasClass("school")) $(".ug-explore-menu").append('<li aria-current="false"><a href="#' + id + '" class="js-hash-disable-autoscroll">School</a></li>');
                    else $(".ug-explore-menu").append('<li aria-current="false"><a href="#' + id + '" class="js-hash-disable-autoscroll">Department</a></li>');
                else if (id == "apply") $(".ug-explore-menu").append('<li aria-current="false"><a href="#' + id + '" class="js-hash-disable-autoscroll">Apply</a></li>');
                else if (id == "moreinfo") $(".ug-explore-menu").append('<li aria-current="false"><a href="#' + id + '" class="js-hash-disable-autoscroll">More information</a></li>');
                else if (id == "contact") $(".ug-explore-menu").append('<li aria-current="false"><a href="#' + id + '" class="js-hash-disable-autoscroll">Contact</a></li>');
                else {
                    if (!id == "promo" || $(this).find("h2:first").text().trim().length) $(".ug-explore-menu").append('<li aria-current="false"><a href="#' + id + '" class="js-hash-disable-autoscroll">' + $(this).find("h2:first").text() + "</a></li>");
                }
            });
            let lastId, ugMenu = $(".ug-explore-menu"),
                ugMenuHeight = ugMenu.outerHeight() + 15,
                menuItems = ugMenu.find("a"),
                scrollItems = menuItems.map(function() {
                    var item = $($(this).attr("href"));
                    if (item.length) return item;
                });
            menuItems.click(function(e) {
                e.preventDefault();
                const href = $(this).attr("href");
                const offsetTop = href === "#" ? 0 : $(href).offset().top - (window.innerWidth < desktopLayoutSize ? ugMenuHeight + 1 : 12);
                $("html, body").stop().animate({
                    scrollTop: offsetTop
                }, 500, () => {
                    $(href).attr("tabindex", 0).focus();
                    history.pushState({}, "", href);
                });
            });
            const $exploreMenu = $(".ug-explore-menu a");
            var $courseDetailsRow = $(".explore-box").closest(".row");

            function stickSidebar() {
                const navOffsetPosition = $(".muse-bar-container").hasClass("stickymuse") ? $(".muse-bar-container").height() : 0;
                if ($courseDetailsRow.offset().top - navOffsetPosition > $(window).scrollTop()) $exploreBox.removeClass("stuck").css({
                    position: "relative",
                    width: "100%",
                    borderBottom: "none",
                    top: 0
                });
                else if ($(window).width() < desktopLayoutSize) {
                    $exploreBox.addClass("stuck").css({
                        position: "fixed",
                        width: "100%",
                        top: navOffsetPosition,
                        borderBottom: "1px solid #c1c1c1"
                    });
                    $exploreBox.parent(".large-4").css("position", "relative").css("height", "auto");
                } else checkOffset();
            }

            function showActiveNavItem() {
                const windowWidth = window.innerWidth;
                const marginGap = windowWidth > desktopLayoutSize ? 29 : 25;
                let fromTop = window.scrollY + marginGap;
                if (windowWidth < desktopLayoutSize) fromTop += ugMenuHeight;
                var cur = scrollItems.map(function() {
                    if ($(this).offset().top < fromTop) return this;
                });
                const current = cur[cur.length - 1];
                const prev = cur[cur.length - 2];
                let id = current && current.length ? [current[0].id] : null;
                if (!id) id = [String($exploreMenu.first().attr("href")).replace("#", "")];
                if (prev && $(prev).offset().top === $(current).offset().top) id.push(prev[0].id);
                if (lastId !== id) {
                    lastId = id;
                    menuItems.parent().removeClass("active").attr("aria-current", false);
                    const ids = id.map((identifier) => {
                        return "[href='#" + identifier + "']";
                    });
                    $(ids.join(",")).parent().addClass("active").attr("aria-current", true);
                    if (windowWidth < desktopLayoutSize)
                        if (id.length) {
                            var target = menuItems.filter("[href='#" + id[0] + "']");
                            var currScrollLeft = ugMenu.scrollLeft();
                            ugMenu.stop().animate({
                                scrollLeft: currScrollLeft + target.position().left - ugMenu.position().left
                            }, {
                                easing: "swing",
                                duration: 450
                            });
                        }
                }
            }
            const ugExploreMenu = document.querySelector(".ug-explore-menu");
            const lastChild = ugExploreMenu.querySelector("li:last-of-type");
            if (window.innerWidth < desktopLayoutSize && !!lastChild) ugExploreMenu.style.paddingRight = `calc(100% - ${lastChild.offsetWidth}px)`;
            window.addEventListener("scroll", () => {
                showActiveNavItem();
                stickSidebar();
            }, Drupal2.behaviors.general.supportsPassiveListeners() ? {
                passive: true
            } : false);
        }
    };
    Drupal2.behaviors.stickyctas = {
        attach: (context, settings) => {
            const $stickyctas = $(".sticky-ctas");
            const $breadcrumbs = $("#system-breadcrumb");
            const desktopLayoutSize = 768;
            const footerTop = $("footer").offset().top;
            const windowHeight = $(window).height();
            if ($stickyctas.length === 0) return false;
            $(".shrinkctas").click(function() {
                if ($(this).parents(".sticky-ctas").hasClass("shrunk")) {
                    $(this).text("Hide");
                    $(this).parents(".sticky-ctas").removeClass("shrunk");
                } else {
                    $(this).text("Show");
                    $(this).parents(".sticky-ctas").addClass("shrunk");
                }
            });

            function stickCtas() {
                if ($(window).width() >= desktopLayoutSize)
                    if ($(window).scrollTop() > $breadcrumbs.offset().top && $(window).scrollTop() + $(window).height() + $stickyctas.outerHeight() < $("footer").offset().top) $stickyctas.addClass("scrolling").removeClass("on-load");
                    else $stickyctas.removeClass("scrolling").addClass("on-load");
                else {
                    var $courseDetailsRow = $(".explore-box").closest(".row");
                    const navOffsetPosition = $(".muse-bar-container").hasClass("stickymuse") ? $(".muse-bar-container").height() : 0;
                    if ($courseDetailsRow.offset().top - navOffsetPosition < $(window).scrollTop() && $(window).scrollTop() + $(window).height() + $stickyctas.outerHeight() < $("footer").offset().top) $stickyctas.addClass("scrolling").removeClass("on-load");
                    else $stickyctas.removeClass("scrolling").addClass("on-load");
                }
            }
            let scrollTimeout;
            window.addEventListener("scroll", () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    stickCtas();
                }, 20);
            }, Drupal2.behaviors.general.supportsPassiveListeners() ? {
                passive: true
            } : false);
        }
    };
    Drupal2.behaviors.smoothScroll = {
        attach: (context, settings) => {
            jQuery(".inner .arrow").click(function(event2) {
                var target = jQuery(".region-breadcrumbs");
                jQuery("html, body").animate({
                    scrollTop: target.offset().top
                }, 650);
            });

            function getElementByHash(hash) {
                try {
                    const target = $(hash);
                    return target;
                } catch (e) {
                    console.info("anchor link invalid.");
                    return false;
                }
            }
            jQuery('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[role="tab"]').not(".ckeditor-accordion-toggler").not(".js-hash-disable-autoscroll").click(function(event2) {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    let target = getElementByHash(this.hash);
                    target = target && target.length ? target : jQuery('[name="' + decodeURI(this.hash.slice(1)) + '"]');
                    if (!target.length) {
                        const newTarget = getElementByHash(this.hash.toLowerCase());
                        target = newTarget && newTarget.length ? newTarget : jQuery('[name="' + decodeURI(this.hash.toLowerCase().slice(1)) + '"]');
                    }
                    if (target.length) {
                        history.pushState({}, "");
                        event2.preventDefault();
                        const offset = getComputedStyle(document.documentElement).getPropertyValue("--drupal-displace-offset-top");
                        const scrollTop = offset ? target.offset().top + parseInt(offset) : target.offset().top;
                        jQuery("html, body").animate({
                            "scrollTop": scrollTop
                        }, 1e3, function() {
                            var $target = jQuery(target);
                            $target.focus();
                            if ($target.is(":focus")) return false;
                            else {
                                $target.attr("tabindex", "-1");
                                $target.focus();
                            };
                            let selector = $target.attr("id") || $target.attr("name");
                            if (selector) location.replace("#" + selector);
                        });
                    }
                }
            });
        }
    };
    Drupal2.behaviors.iframeCookies = {
        attach: (context, settings) => {
            const $unloadedIframes = $("iframe[data-src][class^=optanon-category-]");
            const cookieNoticeText = `<div class="js-iframe-consent__message" role="alert">
        This component requires cookies to function.
        <button class="ot-sdk-show-settings" id="ot-sdk-btn">Adjust cookie settings</button>
      </div>`;
            if ($unloadedIframes.length > 0) {
                $(once2("unloaded-iframes", "iframe[data-src][class^=optanon-category-]", context)).each(function() {
                    const $wrapper = $("<div />", {
                        class: "js-iframe-consent"
                    });
                    const src = $(this).data("src");
                    if (src.indexOf("www.google.com/maps/d/embed") != -1) $wrapper.addClass("js-iframe-consent--map");
                    else {
                        if (src.indexOf("wvr.li") != -1) $wrapper.addClass("js-iframe-consent--360");
                    }
                    $(this).wrap($wrapper);
                    $(this).parent(".js-iframe-consent").append($(cookieNoticeText));
                });
                Drupal2.behaviors.iframeCookies.attachConsentListener();
                Drupal2.behaviors.iframeCookies.optInCallback();
            }
        },
        optInCallback: () => {
            window.OptanonWrapper = function() {
                if (typeof window.OnetrustActiveGroups !== void 0) {
                    const groupIds = window.OnetrustActiveGroups.split(",");
                    groupIds.forEach((id) => {
                        if (id.length && $(`.optanon-category-${id}`).length) $(`.optanon-category-${id}`).each(function() {
                            const $wrapper = $(this).closest(".js-iframe-consent");
                            if ($wrapper.length) $wrapper.addClass("js-iframe-consent--loaded");
                        });
                    });
                }
            };
        },
        attachConsentListener: () => {
            const iFrames = document.querySelectorAll("iframe[class^=optanon-category-]");
            iFrames.forEach((iFrame) => {
                if (iFrame.src) jQuery(iFrame).closest(".js-iframe-consent").addClass("js-iframe-consent--loaded");
            });
        }
    };
    Drupal2.behaviors.accessibility = {
        attach: () => {
            once2("event-map-accessibility", ".node--type-event .geolocation-map-wrapper").forEach((element) => {
                setTimeout(() => {
                    const location2 = document.querySelector(".ev-venue span");
                    const marker = element.querySelector(".leaflet-marker-icon");
                    if (location2 && marker) {
                        marker.setAttribute("alt", "Marker at: " + location2.innerHTML.trim());
                        marker.setAttribute("tabindex", "-1");
                    }
                }, 500);
            });
        }
    };
    Drupal2.behaviors.hideCookieBanner = {
        attach: (context, settings) => {
            if (!location.hostname.match(/^(www|sheffield.ac.uk|drupal-app|cmsprod)/)) document.styleSheets[0].insertRule("#onetrust-consent-sdk {display: none}", 0);
        }
    };
    Drupal2.behaviors.scrollToEvents = {
        attach: (context) => {
            once2("scroll-to", ".js-scroll-to", context).forEach(function(element) {
                const targetElement = document.querySelector(element.dataset.scrollto);
                if (targetElement !== null) element.addEventListener("click", function(e) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                });
            });
        }
    };
    Drupal2.behaviors.calendarBehaviour = {
        attach(context) {
            $(".add-to-cal").click(function() {
                $(this).parents(".event-time").siblings(".calendar-buttons").toggle();
            });
        }
    };
})(Drupal, jQuery, once);;
(function(Drupal2, $, once2) {
    Drupal2.behaviors.megaNavigation = {
        attach: (context, settings) => {
            $(once2("js-nav-tabindex", ".block-uos-globalnav > ul > li", context)).each(function addTabIndex() {
                $(this.firstChild).wrap("<span tabindex='0' aria-expanded='false' role='button'></span>");
            });
            $(once2("js-nav-fix-non-links", ".block-uos-globalnav > ul > li > ul > li", context)).each(function fixNonLinks() {
                if ($(this).children("a").length <= 0)
                    if ($(window).width() > 768) $(this).contents().filter(function(i, e) {
                        return e.nodeType === 3 && e.nodeValue.match(/[A-z0-9]+/g);
                    }).wrap("<a class='menunonlink'></a>");
                    else $(this).contents().filter(function(i, e) {
                        return e.nodeType === 3 && e.nodeValue.match(/[A-z0-9]+/g);
                    }).wrap("<a role='button' class='menunonlink'></a>");
            });
            $(".block-uos-globalnav ul ul").on("js-nav-add-dropdown-arrows").each(function addArrow() {
                if ($(window).width() < 768) $(this).siblings("a").append('<div class="expand"><i class="fas fa-lg fa-angle-down"></i></div>').addClass("tap").attr("tabindex", 0).attr("role", "button").attr("aria-expanded", "false");
                else $(this).siblings("a").wrap("<h2></h2>");
            });
            $(".block-uos-globalnav ul ul ul").each(function addTopLink() {
                if ($(window).width() < 769) {
                    const topLink = $(this).siblings("a");
                    if (topLink.attr("href")) {
                        $(this).prepend('<li><a class="thislink">grr</a></li>');
                        $(this).children("li").children(".thislink").attr("href", topLink.attr("href")).text(topLink.text());
                        $(topLink).removeAttr("href");
                    }
                }
            });
            $(once2("js-nav-button-keypress", ".block-uos-globalnav > ul > li > span", context)).keypress(function performClick(event) {
                if (event.which == 13) $(this).click();
            });
            $(".block-uos-globalnav > ul > li > span").on("js-nav-toplevel-click").on("click", function handleClick() {
                const $parentListItem = $(this).closest("li");
                const $l1Menu = $parentListItem.children("ul");
                const $allL1Menus = $(".block-uos-globalnav > ul > li > ul");
                const $openMenu = $(".block-uos-globalnav > ul > li.menu-open");
                if ($(window).width() < 768) {
                    const topos2 = $(".block-uos-globalnav").offset().top;
                    if ($l1Menu.css("display") !== "block") {
                        $allL1Menus.hide();
                        $l1Menu.css("display", "block");
                        if ($(".nav-overlay2").css("display") != "block") $(".nav-overlay").clone().insertAfter(".nav-overlay").addClass("nav-overlay2").removeClass("nav-overlay").css("display", "block").css("top", topos2);
                        $(".block-uos-globalnav > ul > li").not(this).removeClass("menu-open");
                    } else {
                        $(".nav-overlay2").remove();
                        $allL1Menus.hide();
                    }
                    if ($openMenu.length) $(".tap.menu-open", $openMenu).each(function updateClosedMenu() {
                        $(this).attr("aria-expanded", "false").removeClass("menu-open");
                        $(".expand", $(this)).html('<i class="fas fa-lg fa-angle-down"></i>');
                        $(this).next("ul").css("display", "none");
                    });
                } else if ($l1Menu.css("display") !== "flex") {
                    const $header = $("header.site-header");
                    var topos = $header.offset().top + $header.outerHeight() - $(".muse-bar").height();
                    $allL1Menus.css("display", "none");
                    $l1Menu.css("display", "flex");
                    if ($(".nav-overlay2").css("display") != "block") $(".nav-overlay").clone().insertAfter(".nav-overlay").addClass("nav-overlay2").removeClass("nav-overlay").css("display", "block").css("top", topos);
                } else {
                    $(".nav-overlay2").remove();
                    $l1Menu.css("display", "none");
                }
                $(".block-uos-globalnav > ul > li").each(function updateAriaAtts() {
                    const isDropdownVisible = $("> ul", $(this)).is(":visible");
                    $(this).toggleClass("menu-open", isDropdownVisible);
                    $("> span", $(this)).attr("aria-expanded", isDropdownVisible);
                });
                if ($openMenu.length) Foundation.Keyboard.releaseFocus($(parentListItem));
                else Foundation.Keyboard.trapFocus($parentListItem);
            });
            $(".tap").on("keypress", function performClick(event) {
                const keycode = event.keyCode ? event.keyCode : event.which;
                if (keycode == 13) $(this).trigger("click");
            });
            $(once2("js-mobile-dropdown-click", ".tap", context)).on("click", function expandClick(event) {
                if (window.innerWidth < 768) {
                    const $level2Menu = $(this).siblings("ul");
                    const isMenuVisible = $level2Menu.is(":visible");
                    $level2Menu.stop();
                    if (isMenuVisible) $level2Menu.fadeOut(() => {
                        $(this).children(".expand").html('<i class="fas fa-lg fa-angle-down"></i>');
                        $(this).attr("aria-expanded", "false").removeClass("menu-open");
                    });
                    else {
                        $level2Menu.fadeIn();
                        $(".expand", $(this)).html('<i class="fas fa-lg fa-angle-up"></i>');
                        $(this).attr("aria-expanded", "true").addClass("menu-open");
                    }
                }
            });
            $(once2("js-close-menu-click-outside", "body", context)).on("click touchstart", (e) => {
                if (!$(e.target).closest(".block-uos-globalnav > ul > li").length)
                    if (!$(e.target).closest(".block-uos-globalnav > ul > li > ul").length) {
                        const $openMenu = $(".block-uos-globalnav > ul > li.menu-open");
                        $openMenu.removeClass("menu-open");
                        $openMenu.children("ul").css({
                            display: "none"
                        });
                        $openMenu.children("span").attr("aria-expanded", "false");
                        $("a[aria-expanded=true]", $openMenu).each(function closeChildMenus() {
                            const $parentLi = $(this).parent("li");
                            $(this).attr("aria-expanded", "false").removeClass("menu-open");
                            $(".expand", $parentLi).html('<i class="fas fa-lg fa-angle-down"></i>');
                            $parentLi.children("ul").css({
                                display: "none"
                            });
                        });
                        $(".nav-overlay2").remove();
                    }
            });
            $(".block-uos-globalnav > ul > li > ul").each(function(e) {
                $(this).on("focusout", function(e2) {
                    if ($(this).is(":focus-within")) {} else $(this).parent("li").click();
                });
            });
        }
    };
})(Drupal, jQuery, once);;
(function(Drupal2, $, once2, drupalSettings2) {
    const Panel = {
        config: {
            ajaxSettings: {
                dataType: $.support.cors ? "json" : "jsonp",
                xhrFields: $.support.cors ? {
                    withCredentials: true
                } : void 0
            },
            analyticsCategory: "MUSE menu",
            animationSpeed: "fast",
            napHost: drupalSettings2.cms.muse_url
        },
        init: () => {
            $.ajax(`${Panel.config.napHost}/nap/panel/menu`, Panel.config.ajaxSettings).done((data) => {
                Panel.config.analyticsCategory += ` (${data.menu.name})`;
                Panel.drawPanel(data);
                document.body.dispatchEvent(new CustomEvent("museLoadEvent", {
                    detail: data
                }));
            }).fail(Panel.addLoginLink);
            $(document).keyup(Panel.keypress);
        },
        addLoginLink: () => {
            $(".muse-nav li").last().after(`<li class="muse-login"><a accesskey="m" href="${Panel.config.napHost}/nap/panel/login">Log in to MUSE <span><i class="fas fa-arrow-right"></i><span></a></li>`);
        },
        drawPanel: (data) => {
            $(".switcher-button").addClass("authorised").append('&nbsp;<span class="hideonmobile">Public website <i class="fas fa-angle-down"></i></span>');
            $(".muse-bar-container").addClass("stickymuse");
            $(".switcher-button.authorised").click(function swclick() {
                if ($(".site-switcher").css("display") === "none") $(".site-switcher").slideDown(100, () => {
                    $(".switcher-button").find(".fa-angle-down").addClass("fa-angle-up");
                    $(this).attr("aria-expanded", true);
                    $(".site-switcher").addClass("open");
                });
                else $(".site-switcher").removeClass("open").slideUp(100, () => {
                    $(this).attr("aria-expanded", false);
                    $(".switcher-button").find(".fa-angle-up").addClass("fa-angle-down");
                });
                return false;
            });
            $(".muse-nav li").last().after($("<li/>").addClass("muse-my-services").append($('<a accesskey="m" href="#" aria-expanded="false">My services</a>').on("click", Panel.togglePanel)), $(`<li class="muse-logout">
              <span class="muse-username">${data.name}</span>
              <a href="${Panel.config.napHost}/nap/logout"><span>Log out</span></a>
            </li>`));
            if (data.employeeType === "applicant") {
                $("li.muse-logout a").attr("href", `${Panel.config.napHost}/applicants/logout.php`);
                $("li.muse-my-services").off("click");
                $("li.muse-my-services a").attr("href", Panel.config.napHost + data.menu.landingPage);
            }
            if (data.employeeType === "staff") {
                $(".switcher-container").append('<div class="site-switcher"><h3>University websites</h3><ul><li><span class="current-hub"><i class="fas fa-lg fa-map-marker-alt"></i> <a href="https://www.sheffield.ac.uk/?switch">Public website </a><span>You are here</span></span></li></ul></div>');
                $(".site-switcher > ul").prepend('<li><a href="https://students.sheffield.ac.uk/?switch" title="Student hub">Student hub</a></li>');
                $(".site-switcher > ul").prepend('<li><a href="https://staff.sheffield.ac.uk/?switch" title="Staff hub">Staff hub</a></li>');
            }
            if (data.employeeType === "student") {
                $(".switcher-container").append('<div class="site-switcher"><h3>University websites</h3><ul><li><span class="current-hub"><i class="fas fa-lg fa-map-marker-alt"></i> <a href="https://www.sheffield.ac.uk/?switch">Public website </a><span> You are here</span></span></li></ul></div>');
                $(".site-switcher > ul").prepend('<li><a href="https://students.sheffield.ac.uk/?switch" title="Student hub">Student hub</a></li>');
            }
            const napPanel = $("<nav/>").addClass("muse-panel");
            napPanel.append($('<button class="close-button" aria-label="Close alert" type="button" />').append('<span aria-hidden="true">&times;</span>').on("click", Panel.togglePanel));
            const napPanelServices = $("<div/>").addClass("muse-panel-services");
            $.each(data.menu.categories, (key, category) => {
                napPanelServices.append(Panel.drawServiceGroup(category.items));
            });
            if (data.recentClicks && data.recentClicks.length > 0) napPanelServices.append(Panel.drawServiceGroup(data.recentClicks).addClass("muse-recent-services"));
            const napPanelFooter = $("<ul/>").addClass("muse-panel-footer").append($("<li/>").append($("<a/>").attr("href", `${Panel.config.napHost}/muse/all-services`).text("View all services")));
            napPanel.append(napPanelServices, napPanelFooter);
            $(".muse").append(napPanel.hide());
            dataLayer.push({
                event: "MUSEPanelLoaded",
                userType: data.employeeType
            });
        },
        drawServiceGroup: (group) => {
            const html = $("<ul/>").addClass("muse-service-group");
            $.each(group, (key, item) => {
                $("<li>").append($("<a>").attr({
                    href: `${Panel.config.napHost}/nap/service/${item.sso?"sso/":"redirect/"}${item.shortUrl}`,
                    target: "_blank"
                }).text(item.name).on("click", () => {
                    Panel.trackEvent(Panel.config.analyticsCategory, "service", item.shortUrl);
                })).appendTo(html);
            });
            return html;
        },
        keypress: (e) => {
            if (e.which === 27 && $(".muse-panel").is(":visible")) Panel.togglePanel();
        },
        togglePanel: () => {
            $(".muse-panel").stop().slideToggle(Panel.config.animationSpeed, () => {
                const state = $(".muse-panel").is(":hidden") ? "close" : "open";
                $(".muse-my-services a").toggleClass("active").attr("aria-expanded", state === "open" ? "true" : "false");
                Panel.trackEvent(Panel.config.analyticsCategory, state, void 0);
            });
            return false;
        },
        trackEvent: (category, action, label) => {
            if (typeof dataLayer === "object") dataLayer.push({
                event: "museEvent",
                museCategory: category,
                museAction: action,
                museLabel: label
            });
        }
    };
    Drupal2.behaviors.museBar = {
        attach: (context) => {
            $(once2("js-load-muse-bar", ".muse-bar", context)).each(function addMuseBar() {
                Panel.init();
            });
        }
    };
})(Drupal, jQuery, once, drupalSettings);;
(function(Drupal2, $, once2) {
    Drupal2.behaviors.responsiveTables = {
        attach: (context, settings) => {
            const tables = once2("responsive-table-behaviour", "table", context);
            const classPrefix = "responsive-table-wrapper";
            const processedTables = [];

            function initialiseTableOverflow(table) {
                const outerwrapper = document.createElement("div");
                outerwrapper.classList.add(classPrefix);
                const innerwrapper = document.createElement("div");
                innerwrapper.classList.add(`${classPrefix}__inner`);
                const fadeElement = document.createElement("div");
                table.parentNode.insertBefore(outerwrapper, table);
                innerwrapper.appendChild(table);
                outerwrapper.appendChild(innerwrapper);
                if (!document.documentMode) {
                    fadeElement.classList.add("fade");
                    innerwrapper.appendChild(fadeElement);
                    addPillHint(outerwrapper, table);
                    showOrHideFade(outerwrapper, innerwrapper);
                    initTableScroll(outerwrapper, innerwrapper);
                    setupClickEvents(table);
                }
                processedTables.push(table);
            }

            function addPillHint(outerwrapper, table) {
                const tableHeading = table.querySelector("thead tr");
                const swipeElement = document.createElement("span");
                swipeElement.innerHTML = "swipe";
                swipeElement.classList.add(`${classPrefix}__swipe-hint`);
                if (tableHeading) swipeElement.style.top = `${tableHeading.offsetHeight}px`;
                outerwrapper.appendChild(swipeElement);
            }

            function showOrHideFade(outerwrapper, innerwrapper) {
                const isOverflowing = innerwrapper.scrollWidth > innerwrapper.clientWidth;
                if (isOverflowing) innerwrapper.tabIndex = 0;
                else innerwrapper.removeAttribute("tabindex");
                outerwrapper.classList.toggle("js-is-overflowing", isOverflowing);
            }

            function initTableScroll(outerwrapper, innerwrapper) {
                const threshold = 0.6;
                const fadeElement = outerwrapper.querySelector(".fade");
                innerwrapper.addEventListener("scroll", Drupal2.debounce(() => {
                    let fadeElemOpacity = 1;
                    const maxScrollLeft = innerwrapper.scrollWidth - innerwrapper.clientWidth;
                    const scrollThreshold = maxScrollLeft * threshold;
                    if (innerwrapper.scrollLeft > scrollThreshold) fadeElemOpacity = 1 - (innerwrapper.scrollLeft - scrollThreshold) / (maxScrollLeft - scrollThreshold);
                    fadeElement.style.opacity = fadeElemOpacity;
                }, false), Drupal2.behaviors.general.supportsPassiveListeners() ? {
                    passive: true
                } : false);
            }

            function setupClickEvents(table) {
                if (!!table.closest("dd")) {
                    const dd = table.closest("dd");
                    const previousSibling = dd.previousElementSibling;
                    if (previousSibling.nodeName === "DT") previousSibling.addEventListener("click", () => {
                        setTimeout(() => {
                            showOrHideFade(table.closest(".responsive-table-wrapper"), table.closest(".responsive-table-wrapper__inner"));
                        }, 60);
                    });
                }
            }
            if (!document.documentMode) window.addEventListener("resize", Drupal2.debounce(() => {
                processedTables.forEach((table) => {
                    const outerwrapper = table.closest(`.${classPrefix}`);
                    const innerwrapper = table.closest(`.${classPrefix}__inner`);
                    showOrHideFade(outerwrapper, innerwrapper);
                });
            }, 150, false), Drupal2.behaviors.general.supportsPassiveListeners() ? {
                passive: true
            } : false);
            tables.forEach(initialiseTableOverflow);
        }
    };
})(Drupal, jQuery, once);;
"use strict";
var Globals;
(function(Globals) {
    var Global = (function() {
        function Global(url) {
            this._url = url;
        }
        Global.getInstance = function(url) {
            if (!Global._instance) Global._instance = new Global(url);
            return Global._instance;
        };
        Object.defineProperty(Global.prototype, "url", {
            get: function() {
                return this._url;
            },
            enumerable: false,
            configurable: true
        });
        return Global;
    }());
    Globals.Global = Global;
})(Globals || (Globals = {}));
var Features;
(function(Features) {
    var Feature = (function() {
        function Feature(global) {
            this.url = global.url;
        }
        return Feature;
    }());
    Features.Feature = Feature;
})(Features || (Features = {}));
var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b;
            }) || function(d, b) {
            for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Features;
(function(Features) {
    var Search;
    (function(Search) {
        var Autocomplete = (function(_super) {
            __extends(Autocomplete, _super);

            function Autocomplete(global) {
                return _super.call(this, global) || this;
            }
            Autocomplete.getInstance = function(global) {
                if (!Autocomplete._instance) Autocomplete._instance = new Autocomplete(global);
                return Autocomplete._instance;
            };
            Autocomplete.prototype.initialise = function() {
                this.onLoad();
            };
            Autocomplete.prototype.onLoad = function() {
                var $searchInput;
                var $autocompleteDropdown;
                jQuery(function($) {
                    $searchInput = $(".site-search-input");
                    $autocompleteDropdown = $(".site-search .ui-autocomplete");
                    $(once('js-search-autocomplete', '.site-search-input')).each(function() {
                        var cache = new Array();
                        $searchInput.autocomplete({
                            appendTo: '.search-autocomplete__inputs',
                            minLength: 3,
                            source: function(request, response) {
                                var term = request.term;
                                if (term in cache) {
                                    response(cache[term]);
                                    return;
                                }
                                $.ajax({
                                    url: "/find/autocompletion",
                                    dataType: "json",
                                    data: {
                                        q: term
                                    },
                                    success: function(data) {
                                        var list = data.map(function(e) {
                                            return e.label;
                                        });
                                        cache[term] = list;
                                        response(list);
                                    }
                                });
                            },
                            select: function(event, ui) {
                                var keycode = (event.keyCode ? event.keyCode : event.which);
                                if (keycode === 13 || (event.screenX && event.screenY)) {
                                    $(".site-search-input").val(ui.item.label);
                                    $(".site-search form").submit();
                                }
                            },
                            focus: function(event) {
                                $("[aria-selected=true]", event.currentTarget).removeAttr("aria-selected");
                                $(".ui-state-active", event.currentTarget).attr("aria-selected", "true");
                            },
                            open: function() {
                                $searchInput.autocomplete('widget').css('z-index', '501');
                                $searchInput.attr('aria-expanded', 'true');
                                $autocompleteDropdown.css({
                                    width: 'auto',
                                    minWidth: $searchInput.outerWidth()
                                });
                            },
                            close: function() {
                                $searchInput.attr('aria-expanded', 'false');
                            }
                        });
                    });
                });
                this.modifyAccessibility($searchInput);
            };
            Autocomplete.prototype.modifyAccessibility = function($searchInput) {
                if (!$searchInput) return false;
                else {
                    var $uiAutocomplete = $searchInput.data("ui-autocomplete");
                    var $dropDownUl = $searchInput.autocomplete("widget");
                    var dropdownId = $dropDownUl.attr("id");
                    $searchInput.attr({
                        "aria-controls": dropdownId,
                        "aria-expanded": false,
                        "aria-owns": dropdownId
                    });
                    $searchInput.on("autocompleteopen", function() {
                        $searchInput.attr("aria-expanded", "true");
                    });
                    $searchInput.on("autocompleteclose", function() {
                        $searchInput.attr("aria-expanded", "false");
                    });
                    $dropDownUl.attr("role", "listbox");
                    $uiAutocomplete._renderItem = function(ul, item) {
                        return $("<li>", {
                            role: "presentation",
                            tabindex: "-1"
                        }).append($("<a>", {
                            role: "option",
                            text: item.label,
                            id: "menu-item-".concat(Date.now(), "-").concat(item.label)
                        }).css("display", "block")).appendTo(ul);
                    };
                    return true;
                }
            };
            return Autocomplete;
        }(Features.Feature));
        Search.Autocomplete = Autocomplete;
    })(Search = Features.Search || (Features.Search = {}));
})(Features || (Features = {}));
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Features;
(function(Features) {
    var Search;
    (function(Search) {
        var Box = (function(_super) {
            __extends(Box, _super);

            function Box(global) {
                return _super.call(this, global) || this;
            }
            Box.getInstance = function(global) {
                if (!Box._instance) Box._instance = new Box(global);
                return Box._instance;
            };
            Box.prototype.initialise = function() {
                this.onLoad();
                this.onClick();
                this.onResize();
            };
            Box.prototype.onLoad = function() {
                var e_1, _a;
                var searchParams = this.url.searchParams;
                var searchBox = document.getElementById('search-page-box');
                try {
                    for (var _b = __values(searchParams.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (key.includes("Tab")) {
                            var inputHidden = document.getElementById('fbTab');
                            if (inputHidden) {
                                inputHidden.setAttribute('name', key);
                                inputHidden.setAttribute('value', searchParams.get(key));
                            }
                        }
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                if (searchParams.has("query")) searchBox.value = searchParams.get("query");
            };
            Box.prototype.onClick = function() {
                var searchBoxWrapper = Array.from(document.getElementsByClassName("site-search-wrapper"));
                if (searchBoxWrapper && searchBoxWrapper[0]) {
                    var input_1 = searchBoxWrapper[0].getElementsByTagName('input');
                    var submit = searchBoxWrapper[0].getElementsByTagName('button');
                    if (submit[0]) submit[0].addEventListener("click", function() {
                        if (input_1[0].validity.valueMissing) input_1[0].setCustomValidity('Enter search keyword here');
                        else input_1[0].setCustomValidity('');
                    });
                    var searchToggleBtn = Array.from(document.getElementsByClassName("site-search-toggle"));
                    if (searchToggleBtn[0]) searchToggleBtn[0].addEventListener('click', function(event) {
                        Box.mobileToggleClick(event, searchBoxWrapper[0]);
                    });
                }
            };
            Box.prototype.onResize = function() {
                var _this = this;
                var mediaQueryListObj = window.matchMedia("(max-width: 767px)");
                this.showHide(mediaQueryListObj);
                mediaQueryListObj.addEventListener('change', function(event) {
                    _this.showHide(event);
                });
            };
            Box.mobileToggleClick = function(event, searchBoxWrapper) {
                event.preventDefault();
                if (searchBoxWrapper.style.display == "block") searchBoxWrapper.style.display = "none";
                else {
                    var input = searchBoxWrapper.querySelector("#site-search-box");
                    searchBoxWrapper.style.display = "block";
                    input === null || input === void 0 ? void 0 : input.focus();
                }
                if (event.currentTarget instanceof Element) {
                    var expanded = searchBoxWrapper.style.display === 'block' ? true : false;
                    event.currentTarget.setAttribute('aria-label', expanded ? 'Close site search dropdown' : 'Open site search dropdown');
                    event.currentTarget.setAttribute('aria-expanded', expanded ? 'true' : 'false');
                    event.currentTarget.classList.toggle("site-search-toggle--open", expanded);
                }
            };
            Box.prototype.showHide = function(mediaQueryListObj) {
                var wrapper = Array.from(document.getElementsByClassName("site-search-wrapper"));
                var mobileIcon = Array.from(document.getElementsByClassName("site-search-toggle hide-for-medium"));
                if (wrapper[0] && mobileIcon[0])
                    if (mediaQueryListObj.matches) {
                        mobileIcon[0].style.display = "block";
                        wrapper[0].style.display = "none";
                    } else {
                        mobileIcon[0].style.display = "none";
                        wrapper[0].style.display = "block";
                    }
            };
            return Box;
        }(Features.Feature));
        Search.Box = Box;
    })(Search = Features.Search || (Features.Search = {}));
})(Features || (Features = {}));
var Helpers;
(function(Helpers) {
    var Dom = (function() {
        function Dom() {}
        Dom.toggleByClassName = function(classNameOne, classNameTwo, document) {
            var elementOne = document.getElementsByClassName(classNameOne);
            var elementTwo = document.getElementsByClassName(classNameTwo);
            if (elementOne[0] && elementTwo[0])
                if (elementOne[0].style.display == "block") {
                    elementOne[0].style.display = "none";
                    elementTwo[0].style.display = "block";
                } else {
                    elementOne[0].style.display = "block";
                    elementTwo[0].style.display = "none";
                }
        };
        Dom.getNextSibling = function(elem, selector) {
            var sibling = elem.nextElementSibling;
            if (!selector) return sibling;
            while (sibling) {
                if (sibling.matches(selector)) return sibling;
                sibling = sibling.nextElementSibling;
            }
            return false;
        };;
        Dom.getPreviousSibling = function(elem, selector) {
            var sibling = elem.previousElementSibling;
            if (!selector) return sibling;
            while (sibling) {
                if (sibling.matches(selector)) return sibling;
                sibling = sibling.previousElementSibling;
            }
            return false;
        };
        return Dom;
    }());
    Helpers.Dom = Dom;
})(Helpers || (Helpers = {}));
var Features;
(function(Features) {
    var Search;
    (function(Search) {
        var Filter = (function(_super) {
            __extends(Filter, _super);

            function Filter(global) {
                return _super.call(this, global) || this;
            }
            Filter.getInstance = function(global) {
                if (!Filter._instance) Filter._instance = new Filter(global);
                return Filter._instance;
            };
            Filter.prototype.initialise = function() {
                if (!this.checkPage()) return;
                this.onLoad();
                this.addClickEvents();
                this.initFilterStates();
            };
            Filter.prototype.checkPage = function() {
                var path = window.location.pathname.split("/");
                return path[1] === 'find';
            };
            Filter.prototype.initFilterStates = function() {
                var mobileFilter = document.querySelector(".uos-search-filter-mobile");
                if (mobileFilter) mobileFilter.inert = true;
            };
            Filter.prototype.onLoad = function() {
                var _this = this;
                var limit = 8;
                var facets = document.querySelectorAll(".facet-body ul");
                facets.forEach(function(facet) {
                    var items = facet.querySelectorAll(".list-group > li");
                    if (items) {
                        var counter_1 = 1;
                        items.forEach(function(item) {
                            if (counter_1 <= limit) item.classList.add('show');
                            else {
                                item.classList.add('add-more');
                                item.style.display = 'none';
                            }
                            if (counter_1 === limit) {
                                var div = item.closest('div');
                                var button = Helpers.Dom.getNextSibling(div, ".see-more");
                                button.style.display = 'block';
                            }
                            counter_1++;
                        });
                    }
                });
                var results = Array.from(document.getElementsByClassName("funnelback-result"));
                var result_patterns = ["h3 > a", ".summary", ".card-course--summary"];
                this.searchTermHighlight(results, result_patterns);
                var exhibit = Array.from(document.getElementsByClassName("funnelback-exhibit"));
                var exhibit_patterns = ["h3 > a", ".desc", '.summary'];
                this.searchTermHighlight(exhibit, exhibit_patterns);
                var searchParams = this.url.searchParams;
                var facetSort = Array.from(document.querySelectorAll('.facet-sort input[type="radio"]'));
                var totalNumSortInputs = facetSort.length;
                var numSortOptions = totalNumSortInputs / 2;
                var sortGroup = 1;
                var sortOptionCounter = 1;
                var currentSortOption = searchParams.get('sort');
                facetSort.forEach(function(s) {
                    s.setAttribute('name', 'sort-option' + sortGroup);
                    if ((currentSortOption == null) && (s.getAttribute('data-default') == "true")) s.setAttribute('checked', '');
                    else if (s.value == currentSortOption) s.setAttribute('checked', '');
                    else s.removeAttribute('checked');
                    s.addEventListener('click', function() {
                        var sortOption = this.value;
                        if (sortOption === "") searchParams.delete('sort');
                        else searchParams.set('sort', sortOption);
                        Filter._instance.url.search = searchParams.toString();
                        window.location.href = Filter._instance.url.href;
                    });
                    if (sortOptionCounter == numSortOptions) sortGroup++;
                    sortOptionCounter++;
                });
                var facetFiles = Array.from(document.querySelectorAll('.facet-files input[type="radio"]'));
                var totalNumFileInputs = facetFiles.length;
                var numFileOptions = totalNumFileInputs / 2;
                var fileGroup = 1;
                var fileOptionCounter = 1;
                facetFiles.forEach(function(s) {
                    s.setAttribute('name', 'file-option' + fileGroup);
                    var currentFileOption = searchParams.get('binary');
                    if ((currentFileOption == null) && (s.getAttribute('data-default') == "true")) s.setAttribute('checked', '');
                    else if ((currentFileOption == "2") && (s.value == "2")) s.setAttribute('checked', '');
                    else s.removeAttribute('checked');
                    s.addEventListener('click', function() {
                        var fileOption = this.value;
                        if (fileOption === "") searchParams.delete('binary');
                        else searchParams.set('binary', fileOption);
                        Filter._instance.url.search = searchParams.toString();
                        window.location.href = Filter._instance.url.href;
                    });
                    if (fileOptionCounter == numFileOptions) fileGroup++;
                    fileOptionCounter++;
                });
                var checkboxFacets = document.querySelectorAll(".facet-wrapper input[type='checkbox'].facet-checkbox");
                if (checkboxFacets !== null) checkboxFacets.forEach(function(facet) {
                    if (facet.getAttribute('redirect')) _this.handleFacetClick(facet, facet.getAttribute('redirect'));
                });
            };
            Filter.prototype.handleFacetClick = function(element, url) {
                element.addEventListener('click', function() {
                    window.location.href = url;
                });
                element.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') window.location.href = url;
                });
            };
            Filter.prototype.hideMobileFilter = function() {
                var _a;
                var mobileFilter = document.querySelector(".uos-search-filter-mobile");
                var button = document.querySelector("#funnelback-summary .filter-button");
                if (mobileFilter) {
                    mobileFilter.classList.remove('uos-search-filter--visible');
                    mobileFilter.inert = true;
                    button === null || button === void 0 ? void 0 : button.setAttribute('aria-expanded', 'false');
                    (_a = document.body) === null || _a === void 0 ? void 0 : _a.classList.remove('modal-overlay');
                }
                document.removeEventListener('keydown', this.hideMobileFilter);
            };
            Filter.prototype.showMobileFilter = function() {
                var _a;
                var mobileFilter = document.querySelector(".uos-search-filter-mobile");
                var button = document.querySelector("#funnelback-summary .filter-button");
                if (mobileFilter) {
                    var input = mobileFilter.querySelector('input');
                    mobileFilter.classList.add('uos-search-filter--visible');
                    mobileFilter.removeAttribute('inert');
                    button === null || button === void 0 ? void 0 : button.setAttribute('aria-expanded', 'true');
                    (_a = document.body) === null || _a === void 0 ? void 0 : _a.classList.add('modal-overlay');
                    input === null || input === void 0 ? void 0 : input.focus();
                    document.addEventListener('keydown', this.handleKeyboardEvent.bind(this));
                }
            };
            Filter.prototype.handleKeyboardEvent = function(event) {
                if (event.key === 'Escape') this.hideMobileFilter();
            };
            Filter.prototype.addClickEvents = function() {
                var _this = this;
                var seeMoreButtons = document.querySelectorAll(".facet-wrapper .see-more");
                var seeLessButtons = document.querySelectorAll(".facet-wrapper .see-less");
                seeMoreButtons.forEach(function(seeMoreButton) {
                    seeMoreButton.addEventListener('click', function(event) {
                        Filter._instance.showMoreClick(event, this);
                    });
                });
                seeLessButtons.forEach(function(seeLessButton) {
                    seeLessButton.addEventListener('click', function(event) {
                        Filter._instance.showLessClick(event, this);
                    });
                });
                var filterButton = Array.from(document.querySelectorAll("#funnelback-summary .filter-button"));
                if (filterButton[0]) filterButton[0].addEventListener('click', function() {
                    _this.showMobileFilter();
                });
                var closeButton = Array.from(document.querySelectorAll("#uos-search-filter .close-button"));
                if (closeButton[0]) closeButton[0].addEventListener('click', function() {
                    _this.hideMobileFilter();
                });
            };
            Filter.prototype.showMoreClick = function(event, button) {
                event.preventDefault();
                var list = Helpers.Dom.getPreviousSibling(button, ".facet-body");
                var items = Array.from(list.getElementsByClassName("add-more"));
                items.forEach(function(item) {
                    item.style.display = "block";
                });
                button.style.display = "none";
                var seeLessButton = Helpers.Dom.getNextSibling(button, ".see-less");
                seeLessButton.style.display = "block";
            };
            Filter.prototype.showLessClick = function(event, button) {
                event.preventDefault();
                var list = Helpers.Dom.getPreviousSibling(button, ".facet-body");
                var items = Array.from(list.getElementsByClassName("add-more"));
                items.forEach(function(item) {
                    item.style.display = "none";
                });
                button.style.display = "none";
                var seeMoreButton = Helpers.Dom.getPreviousSibling(button, ".see-more");
                seeMoreButton.style.display = "block";
            };
            Filter.prototype.searchTermHighlight = function(collection, patterns) {
                var searchParams = new URLSearchParams(window.location.search);
                var searchTerm = searchParams.get('query');
                var searchTermCaseInsensitive = new RegExp(searchTerm, "ig");
                if (!searchTerm || !searchTerm.trim().length) return;
                collection.forEach(function(c) {
                    patterns.forEach(function(p) {
                        var results = Array.from(c.querySelectorAll(p.toString()));
                        results.forEach(function(r) {
                            r.innerHTML = r.innerHTML.replace(searchTermCaseInsensitive, function(keywordMatch) {
                                return '<mark class="searchterm-found">' + keywordMatch + '</mark>';
                            });
                        });
                    });
                });
            };
            return Filter;
        }(Features.Feature));
        Search.Filter = Filter;
    })(Search = Features.Search || (Features.Search = {}));
})(Features || (Features = {}));
var Features;
(function(Features) {
    var Search;
    (function(Search) {
        var TabButtons = (function(_super) {
            __extends(TabButtons, _super);

            function TabButtons(global) {
                var _this = _super.call(this, global) || this;
                _this._tabs = Array.from(document.getElementsByClassName('search-tab'));
                _this._currentTab = "All results";
                return _this;
            }
            TabButtons.getInstance = function(global) {
                if (!TabButtons._instance) TabButtons._instance = new TabButtons(global);
                return TabButtons._instance;
            };
            TabButtons.prototype.initialise = function() {};
            TabButtons.prototype.onLoad = function() {
                var e_2, _a;
                var _this = this;
                try {
                    for (var _b = __values(this.url.searchParams.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (key.includes("Tab")) this._currentTab = this.url.searchParams.get(key);
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally {
                        if (e_2) throw e_2.error;
                    }
                }
                this._tabs.forEach(function(tab) {
                    if (tab.dataset.name == _this._currentTab) tab.setAttribute("aria-selected", "true");
                    else tab.removeAttribute("aria-selected");
                    tab.removeAttribute('aria-controls');
                });
            };
            TabButtons.prototype.onClick = function() {
                var _this = this;
                this._tabs.forEach(function(tab) {
                    tab.addEventListener('click', function(event) {
                        _this.switchTab(event.target);
                    });
                    tab.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') _this.switchTab(event.target);
                    });
                });
            };
            TabButtons.prototype.switchTab = function(target) {
                var e_3, _a;
                try {
                    for (var _b = __values(TabButtons._instance.url.searchParams.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (!key.includes("query")) TabButtons._instance.url.searchParams.delete(key);
                    }
                } catch (e_3_1) {
                    e_3 = {
                        error: e_3_1
                    };
                } finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally {
                        if (e_3) throw e_3.error;
                    }
                }
                switch (target.getAttribute('data-name')) {
                    case "Courses":
                        TabButtons._instance.url.searchParams.append('f.Tabs|sheffield-uni-courses-undergraduate-new,sheffield-uni-courses,sheffield-uni-courses-postgraduate', 'Courses');
                        break;
                    case "News":
                        TabButtons._instance.url.searchParams.append('f.Tabs|sheffield-uni-news', 'News');
                        break;
                    default:
                        TabButtons._instance.url.searchParams.append('f.Tabs|AllDocumentsFill', 'All results');
                }
                window.location.href = TabButtons._instance.url.href;
            };
            return TabButtons;
        }(Features.Feature));
        Search.TabButtons = TabButtons;
    })(Search = Features.Search || (Features.Search = {}));
})(Features || (Features = {}));
var Features;
(function(Features) {
    var Search;
    (function(Search) {
        var Temp = (function(_super) {
            __extends(Temp, _super);

            function Temp(global) {
                return _super.call(this, global) || this;
            }
            Temp.getInstance = function(global) {
                if (!Temp._instance) Temp._instance = new Temp(global);
                return Temp._instance;
            };
            Temp.prototype.initialise = function() {
                this.onLoad();
            };
            Temp.prototype.onLoad = function() {
                var placeholderText = "Title, subject or keyword";
                var currentUrl = window.location.href;
                if (/undergraduate\/courses\/search/.test(currentUrl)) {
                    var ugSearchBox = Array.from(document.querySelectorAll("form[action='/undergraduate/courses/search'] div input[type='text']"));
                    ugSearchBox[0].placeholder = placeholderText;
                } else {
                    if (/taught\/courses\/search/.test(currentUrl)) {
                        var pgtSearchBox = Array.from(document.querySelectorAll("form[action='/postgraduate/taught/courses/search'] div input[type='text']"));
                        pgtSearchBox[0].placeholder = placeholderText;
                    }
                }
            };
            return Temp;
        }(Features.Feature));
        Search.Temp = Temp;
    })(Search = Features.Search || (Features.Search = {}));
})(Features || (Features = {}));
var __read = (this && this.__read) || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r, ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
        e = {
            error
        };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function(to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++)
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Features;
(function(Features) {
    var Tabs;
    (function(Tabs) {
        var TabbedNavigation = (function() {
            function TabbedNavigation(tabList) {
                this._panels = new Array();
                this._tabs = new Array();
                this._tabList = tabList;
                this._tabs = __spreadArray([], __read(this._tabList.querySelectorAll("[role=\"tab\"]")), false);
                this.initialisePanels();
                if (this.validateTabs()) {
                    this.addEventListeners();
                    this.showHideMobileScroll();
                    this.initState();
                }
                this._tabList.classList.add("tablist-active");
            }
            TabbedNavigation.prototype.validateTabs = function() {
                return this._panels.length === this._tabs.length;
            };
            TabbedNavigation.prototype.initialisePanels = function() {
                var _this = this;
                this._tabs.forEach(function(element) {
                    var panel = document.querySelector("#".concat(element.getAttribute('aria-controls')));
                    if (panel !== null) _this._panels.push(panel);
                });
            };
            TabbedNavigation.prototype.addEventListeners = function() {
                var _this = this;
                this._tabs.forEach(function(tab) {
                    tab.addEventListener('click', function(event) {
                        _this.clickListener(event);
                    });
                    tab.addEventListener('keydown', function(event) {
                        _this.keyboardListener(event);
                    });
                });
                window.addEventListener('resize', function() {
                    _this.showHideMobileScroll();
                });
            };
            TabbedNavigation.prototype.showHideMobileScroll = function() {
                var _a;
                if ((_a = this._tabList.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('tab-gradient')) {
                    var tabsWidth_1 = 0;
                    this._tabs.forEach(function(tab) {
                        tabsWidth_1 += tab.offsetWidth;
                    });
                    this._tabList.parentElement.classList.toggle('js-hide-scroll-hint', (this._tabList.parentElement.offsetWidth > tabsWidth_1));
                }
            };
            TabbedNavigation.prototype.clickListener = function(event) {
                event.preventDefault();
                var currentTab = this._tabs.find(function(tab) {
                    return tab.getAttribute("aria-selected") === 'true';
                });
                if ((currentTab && event.currentTarget) && event.currentTarget !== currentTab) this.switchTab(currentTab, event.currentTarget);
            };
            TabbedNavigation.prototype.keyboardListener = function(event) {
                var index = this._tabs.indexOf(event.currentTarget);
                var currentTarget = event.currentTarget;
                if ([37, 39].indexOf(event.which) > -1) {
                    event.preventDefault();
                    index += event.which === 37 ? -1 : 1;
                    if (this._tabs[index]) this.switchTab(currentTarget, this._tabs[index]);
                } else {
                    if (event.which === 40) {
                        event.preventDefault();
                        this._panels[index].focus();
                    }
                }
            };
            TabbedNavigation.prototype.switchTab = function(currentTab, newTab) {
                var _this = this;
                newTab.focus();
                newTab.removeAttribute("tabindex");
                newTab.setAttribute("aria-selected", "true");
                currentTab.removeAttribute("aria-selected");
                currentTab.setAttribute("aria-selected", "false");
                this._panels.forEach(function(panel) {
                    if (panel.getAttribute("id") === newTab.getAttribute("aria-controls")) panel.removeAttribute("hidden");
                    else {
                        var tabAction = _this._tabList.querySelector("[aria-controls=".concat(panel.getAttribute("id"), "]"));
                        panel.setAttribute("hidden", "hidden");
                        if (tabAction) tabAction.setAttribute("aria-selected", "false");
                    }
                });
            };
            TabbedNavigation.prototype.initState = function() {
                var _this = this;
                var active = this._tabs.some(function(el) {
                    return el.ariaSelected;
                });
                if (!active) {
                    this._tabs[0].removeAttribute("tabindex");
                    this._tabs[0].setAttribute("aria-selected", "true");
                    this._panels[0].removeAttribute("hidden");
                    this._tabs.slice(1).forEach(function(tab, i) {
                        tab.setAttribute("tabindex", "-1");
                        _this._panels[i + 1].setAttribute("hidden", "true");
                    });
                }
            };
            return TabbedNavigation;
        }());
        Tabs.TabbedNavigation = TabbedNavigation;
    })(Tabs = Features.Tabs || (Features.Tabs = {}));
})(Features || (Features = {}));
var Features;
(function(Features) {
    var Tabs;
    (function(Tabs_1) {
        var Tabs = (function(_super) {
            __extends(Tabs, _super);

            function Tabs(global) {
                var _this = _super.call(this, global) || this;
                _this._tabLists = __spreadArray([], __read(document.querySelectorAll("[role=\"tablist\"]")), false);
                return _this;
            }
            Tabs.getInstance = function(global) {
                if (!Tabs._instance) Tabs._instance = new Tabs(global);
                return Tabs._instance;
            };
            Tabs.prototype.initialise = function() {
                this.onLoad();
            };
            Tabs.prototype.onLoad = function() {
                if (this._tabLists !== null) this._tabLists.forEach(function(tabList) {
                    if (!tabList.classList.contains("tablist-active")) new Features.Tabs.TabbedNavigation(tabList);
                });
            };
            return Tabs;
        }(Features.Feature));
        Tabs_1.Tabs = Tabs;
    })(Tabs = Features.Tabs || (Features.Tabs = {}));
})(Features || (Features = {}));;
(function initDrupal($, Drupal) {
    let url = new URL(document.location);
    let global = Globals.Global.getInstance(url);
    Drupal.behaviors.search = {
        attach: function() {
            Features.Search.Box.getInstance(global).initialise();
            Features.Search.Filter.getInstance(global).initialise();
            Features.Search.Autocomplete.getInstance(global).initialise();
        }
    };
    Drupal.behaviors.tabs = {
        attach: function() {
            Features.Tabs.Tabs.getInstance(global).initialise();
        }
    };
    Drupal.behaviors.temp = {
        attach: function() {
            Features.Search.Temp.getInstance(global).initialise();
        }
    };
})(jQuery, Drupal);;
! function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e(require("jquery"));
    else if ("function" == typeof define && define.amd) define(["jquery"], e);
    else {
        var n, i = "object" == typeof exports ? e(require("jquery")) : e(t.jQuery);
        for (n in i)("object" == typeof exports ? exports : t)[n] = i[n];
    }
}(window, function(n) {
    return i = {
        "./js/entries/foundation.js": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("jquery"),
                i = n.n(i),
                o = n("./js/foundation.core.js");
            n.d(e, "Foundation", function() {
                return o.Foundation;
            });
            var s = n("./js/foundation.core.utils.js");
            n.d(e, "CoreUtils", function() {
                return s;
            });
            var r = n("./js/foundation.util.box.js");
            n.d(e, "Box", function() {
                return r.Box;
            });
            var a = n("./js/foundation.util.imageLoader.js");
            n.d(e, "onImagesLoaded", function() {
                return a.onImagesLoaded;
            });
            var l = n("./js/foundation.util.keyboard.js");
            n.d(e, "Keyboard", function() {
                return l.Keyboard;
            });
            var u = n("./js/foundation.util.mediaQuery.js");
            n.d(e, "MediaQuery", function() {
                return u.MediaQuery;
            });
            var c = n("./js/foundation.util.motion.js");
            n.d(e, "Motion", function() {
                return c.Motion;
            });
            var f = n("./js/foundation.util.nest.js");
            n.d(e, "Nest", function() {
                return f.Nest;
            });
            var d = n("./js/foundation.util.timer.js");
            n.d(e, "Timer", function() {
                return d.Timer;
            });
            var h = n("./js/foundation.util.touch.js");
            n.d(e, "Touch", function() {
                return h.Touch;
            });
            var p = n("./js/foundation.util.triggers.js");
            n.d(e, "Triggers", function() {
                return p.Triggers;
            });
            var m = n("./js/foundation.abide.js");
            n.d(e, "Abide", function() {
                return m.Abide;
            });
            var g = n("./js/foundation.accordion.js");
            n.d(e, "Accordion", function() {
                return g.Accordion;
            });
            var v = n("./js/foundation.accordionMenu.js");
            n.d(e, "AccordionMenu", function() {
                return v.AccordionMenu;
            });
            var y = n("./js/foundation.drilldown.js");
            n.d(e, "Drilldown", function() {
                return y.Drilldown;
            });
            var b = n("./js/foundation.dropdown.js");
            n.d(e, "Dropdown", function() {
                return b.Dropdown;
            });
            var w = n("./js/foundation.dropdownMenu.js");
            n.d(e, "DropdownMenu", function() {
                return w.DropdownMenu;
            });
            var _ = n("./js/foundation.equalizer.js");
            n.d(e, "Equalizer", function() {
                return _.Equalizer;
            });
            var $ = n("./js/foundation.interchange.js");
            n.d(e, "Interchange", function() {
                return $.Interchange;
            });
            var k = n("./js/foundation.magellan.js");
            n.d(e, "Magellan", function() {
                return k.Magellan;
            });
            var j = n("./js/foundation.offcanvas.js");
            n.d(e, "OffCanvas", function() {
                return j.OffCanvas;
            });
            var O = n("./js/foundation.orbit.js");
            n.d(e, "Orbit", function() {
                return O.Orbit;
            });
            var C = n("./js/foundation.responsiveMenu.js");
            n.d(e, "ResponsiveMenu", function() {
                return C.ResponsiveMenu;
            });
            var z = n("./js/foundation.responsiveToggle.js");
            n.d(e, "ResponsiveToggle", function() {
                return z.ResponsiveToggle;
            });
            var T = n("./js/foundation.reveal.js");
            n.d(e, "Reveal", function() {
                return T.Reveal;
            });
            var S = n("./js/foundation.slider.js");
            n.d(e, "Slider", function() {
                return S.Slider;
            });
            var R = n("./js/foundation.smoothScroll.js");
            n.d(e, "SmoothScroll", function() {
                return R.SmoothScroll;
            });
            var E = n("./js/foundation.sticky.js");
            n.d(e, "Sticky", function() {
                return E.Sticky;
            });
            var x = n("./js/foundation.tabs.js");
            n.d(e, "Tabs", function() {
                return x.Tabs;
            });
            var P = n("./js/foundation.toggler.js");
            n.d(e, "Toggler", function() {
                return P.Toggler;
            });
            var A = n("./js/foundation.tooltip.js");
            n.d(e, "Tooltip", function() {
                return A.Tooltip;
            });
            var L = n("./js/foundation.responsiveAccordionTabs.js");
            n.d(e, "ResponsiveAccordionTabs", function() {
                return L.ResponsiveAccordionTabs;
            }), o.Foundation.addToJquery(i.a), o.Foundation.rtl = s.rtl, o.Foundation.GetYoDigits = s.GetYoDigits, o.Foundation.transitionend = s.transitionend, o.Foundation.RegExpEscape = s.RegExpEscape, o.Foundation.onLoad = s.onLoad, o.Foundation.Box = r.Box, o.Foundation.onImagesLoaded = a.onImagesLoaded, o.Foundation.Keyboard = l.Keyboard, o.Foundation.MediaQuery = u.MediaQuery, o.Foundation.Motion = c.Motion, o.Foundation.Move = c.Move, o.Foundation.Nest = f.Nest, o.Foundation.Timer = d.Timer, h.Touch.init(i.a), p.Triggers.init(i.a, o.Foundation), u.MediaQuery._init(), o.Foundation.plugin(m.Abide, "Abide"), o.Foundation.plugin(g.Accordion, "Accordion"), o.Foundation.plugin(v.AccordionMenu, "AccordionMenu"), o.Foundation.plugin(y.Drilldown, "Drilldown"), o.Foundation.plugin(b.Dropdown, "Dropdown"), o.Foundation.plugin(w.DropdownMenu, "DropdownMenu"), o.Foundation.plugin(_.Equalizer, "Equalizer"), o.Foundation.plugin($.Interchange, "Interchange"), o.Foundation.plugin(k.Magellan, "Magellan"), o.Foundation.plugin(j.OffCanvas, "OffCanvas"), o.Foundation.plugin(O.Orbit, "Orbit"), o.Foundation.plugin(C.ResponsiveMenu, "ResponsiveMenu"), o.Foundation.plugin(z.ResponsiveToggle, "ResponsiveToggle"), o.Foundation.plugin(T.Reveal, "Reveal"), o.Foundation.plugin(S.Slider, "Slider"), o.Foundation.plugin(R.SmoothScroll, "SmoothScroll"), o.Foundation.plugin(E.Sticky, "Sticky"), o.Foundation.plugin(x.Tabs, "Tabs"), o.Foundation.plugin(P.Toggler, "Toggler"), o.Foundation.plugin(A.Tooltip, "Tooltip"), o.Foundation.plugin(L.ResponsiveAccordionTabs, "ResponsiveAccordionTabs"), e.default = o.Foundation;
        },
        "./js/foundation.abide.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Abide", function() {
                return i;
            });
            var e = n("jquery"),
                c = n.n(e),
                s = n("./js/foundation.core.plugin.js"),
                r = n("./js/foundation.core.utils.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function u(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = f(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = f(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function f(t) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = u(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        this.$element = t, this.options = c.a.extend(!0, {}, o.defaults, this.$element.data(), e), this.isEnabled = !0, this.formnovalidate = null, this.className = "Abide", this._init();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var n = this;
                        this.$inputs = c.a.merge(this.$element.find("input").not('[type="submit"]'), this.$element.find("textarea, select")), this.$submits = this.$element.find('[type="submit"]');
                        var t = this.$element.find("[data-abide-error]");
                        this.options.a11yAttributes && (this.$inputs.each(function(t, e) {
                            return n.addA11yAttributes(c()(e));
                        }), t.each(function(t, e) {
                            return n.addGlobalErrorA11yAttributes(c()(e));
                        })), this._events();
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var e = this;
                        this.$element.off(".abide").on("reset.zf.abide", function() {
                            e.resetForm();
                        }).on("submit.zf.abide", function() {
                            return e.validateForm();
                        }), this.$submits.off("click.zf.abide keydown.zf.abide").on("click.zf.abide keydown.zf.abide", function(t) {
                            t.key && " " !== t.key && "Enter" !== t.key || (t.preventDefault(), e.formnovalidate = null !== t.target.getAttribute("formnovalidate"), e.$element.submit());
                        }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(t) {
                            e.validateInput(c()(t.target));
                        }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(t) {
                            e.validateInput(c()(t.target));
                        }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(t) {
                            e.validateInput(c()(t.target));
                        });
                    }
                }, {
                    key: "_reflow",
                    value: function() {
                        this._init();
                    }
                }, {
                    key: "_validationIsDisabled",
                    value: function() {
                        return !1 === this.isEnabled || ("boolean" == typeof this.formnovalidate ? this.formnovalidate : !!this.$submits.length && null !== this.$submits[0].getAttribute("formnovalidate"));
                    }
                }, {
                    key: "enableValidation",
                    value: function() {
                        this.isEnabled = !0;
                    }
                }, {
                    key: "disableValidation",
                    value: function() {
                        this.isEnabled = !1;
                    }
                }, {
                    key: "requiredCheck",
                    value: function(t) {
                        if (!t.attr("required")) return !0;
                        var e = !0;
                        switch (t[0].type) {
                            case "checkbox":
                                e = t[0].checked;
                                break;
                            case "select":
                            case "select-one":
                            case "select-multiple":
                                var n = t.find("option:selected");
                                n.length && n.val() || (e = !1);
                                break;
                            default:
                                t.val() && t.val().length || (e = !1);
                        }
                        return e;
                    }
                }, {
                    key: "findFormError",
                    value: function(e, t) {
                        var n = this,
                            i = e.length ? e[0].id : "",
                            o = e.siblings(this.options.formErrorSelector);
                        return o.length || (o = e.parent().find(this.options.formErrorSelector)), i && (o = o.add(this.$element.find('[data-form-error-for="'.concat(i, '"]')))), t && (o = o.not("[data-form-error-on]"), t.forEach(function(t) {
                            o = (o = o.add(e.siblings('[data-form-error-on="'.concat(t, '"]')))).add(n.$element.find('[data-form-error-for="'.concat(i, '"][data-form-error-on="').concat(t, '"]')));
                        })), o;
                    }
                }, {
                    key: "findLabel",
                    value: function(t) {
                        var e = t[0].id,
                            e = this.$element.find('label[for="'.concat(e, '"]'));
                        return e.length ? e : t.closest("label");
                    }
                }, {
                    key: "findRadioLabels",
                    value: function(t) {
                        var i = this,
                            t = t.map(function(t, e) {
                                var n = e.id,
                                    n = i.$element.find('label[for="'.concat(n, '"]'));
                                return (n = !n.length ? c()(e).closest("label") : n)[0];
                            });
                        return c()(t);
                    }
                }, {
                    key: "findCheckboxLabels",
                    value: function(t) {
                        var i = this,
                            t = t.map(function(t, e) {
                                var n = e.id,
                                    n = i.$element.find('label[for="'.concat(n, '"]'));
                                return (n = !n.length ? c()(e).closest("label") : n)[0];
                            });
                        return c()(t);
                    }
                }, {
                    key: "addErrorClasses",
                    value: function(t, e) {
                        var n = this.findLabel(t),
                            e = this.findFormError(t, e);
                        n.length && n.addClass(this.options.labelErrorClass), e.length && e.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr({
                            "data-invalid": "",
                            "aria-invalid": !0
                        });
                    }
                }, {
                    key: "addA11yAttributes",
                    value: function(t) {
                        var e, n, i = this.findFormError(t),
                            o = i.filter("label"),
                            s = i.first();
                        i.length && (void 0 === t.attr("aria-describedby") && (void 0 === (e = s.attr("id")) && (e = Object(r.GetYoDigits)(6, "abide-error"), s.attr("id", e)), t.attr("aria-describedby", e)), o.filter("[for]").length < o.length && (void 0 === (n = t.attr("id")) && (n = Object(r.GetYoDigits)(6, "abide-input"), t.attr("id", n)), o.each(function(t, e) {
                            e = c()(e);
                            void 0 === e.attr("for") && e.attr("for", n);
                        })), i.each(function(t, e) {
                            e = c()(e);
                            void 0 === e.attr("role") && e.attr("role", "alert");
                        }).end());
                    }
                }, {
                    key: "addGlobalErrorA11yAttributes",
                    value: function(t) {
                        void 0 === t.attr("aria-live") && t.attr("aria-live", this.options.a11yErrorLevel);
                    }
                }, {
                    key: "removeRadioErrorClasses",
                    value: function(t) {
                        var e = this.$element.find(':radio[name="'.concat(t, '"]')),
                            n = this.findRadioLabels(e),
                            t = this.findFormError(e);
                        n.length && n.removeClass(this.options.labelErrorClass), t.length && t.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).attr({
                            "data-invalid": null,
                            "aria-invalid": null
                        });
                    }
                }, {
                    key: "removeCheckboxErrorClasses",
                    value: function(t) {
                        var e = this.$element.find(':checkbox[name="'.concat(t, '"]')),
                            n = this.findCheckboxLabels(e),
                            t = this.findFormError(e);
                        n.length && n.removeClass(this.options.labelErrorClass), t.length && t.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).attr({
                            "data-invalid": null,
                            "aria-invalid": null
                        });
                    }
                }, {
                    key: "removeErrorClasses",
                    value: function(t) {
                        if ("radio" === t[0].type) return this.removeRadioErrorClasses(t.attr("name"));
                        if ("checkbox" === t[0].type) return this.removeCheckboxErrorClasses(t.attr("name"));
                        var e = this.findLabel(t),
                            n = this.findFormError(t);
                        e.length && e.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).attr({
                            "data-invalid": null,
                            "aria-invalid": null
                        });
                    }
                }, {
                    key: "validateInput",
                    value: function(e) {
                        var n, i = this,
                            t = this.requiredCheck(e),
                            o = e.attr("data-validator"),
                            s = [],
                            r = !0;
                        if (this._validationIsDisabled()) return !0;
                        if (e.is("[data-abide-ignore]") || e.is('[type="hidden"]') || e.is("[disabled]")) return !0;
                        switch (e[0].type) {
                            case "radio":
                                this.validateRadio(e.attr("name")) || s.push("required");
                                break;
                            case "checkbox":
                                this.validateCheckbox(e.attr("name")) || s.push("required"), r = !1;
                                break;
                            case "select":
                            case "select-one":
                            case "select-multiple":
                                t || s.push("required");
                                break;
                            default:
                                t || s.push("required"), this.validateText(e) || s.push("pattern");
                        }
                        o && (n = !!e.attr("required"), o.split(" ").forEach(function(t) {
                            i.options.validators[t](e, n, e.parent()) || s.push(t);
                        })), e.attr("data-equalto") && (this.options.validators.equalTo(e) || s.push("equalTo"));
                        var a, l = 0 === s.length,
                            u = (l ? "valid" : "invalid") + ".zf.abide";
                        return !l || (o = this.$element.find('[data-equalto="'.concat(e.attr("id"), '"]'))).length && (a = this, o.each(function() {
                            c()(this).val() && a.validateInput(c()(this));
                        })), r && (l ? this.removeErrorClasses(e) : this.addErrorClasses(e, s)), e.trigger(u, [e]), l;
                    }
                }, {
                    key: "validateForm",
                    value: function() {
                        var t, n = this,
                            e = [],
                            i = this;
                        if (this.initialized || (this.initialized = !0), this._validationIsDisabled()) return !(this.formnovalidate = null);
                        this.$inputs.each(function() {
                            if ("checkbox" === c()(this)[0].type) {
                                if (c()(this).attr("name") === t) return !0;
                                t = c()(this).attr("name");
                            }
                            e.push(i.validateInput(c()(this)));
                        });
                        var o = -1 === e.indexOf(!1);
                        return this.$element.find("[data-abide-error]").each(function(t, e) {
                            e = c()(e);
                            n.options.a11yAttributes && n.addGlobalErrorA11yAttributes(e), e.css("display", o ? "none" : "block");
                        }), this.$element.trigger((o ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), o;
                    }
                }, {
                    key: "validateText",
                    value: function(t, e) {
                        e = e || t.attr("data-pattern") || t.attr("pattern") || t.attr("type");
                        var n = t.val(),
                            i = !0;
                        return n.length && (this.options.patterns.hasOwnProperty(e) ? i = this.options.patterns[e].test(n) : e !== t.attr("type") && (i = new RegExp(e).test(n))), i;
                    }
                }, {
                    key: "validateRadio",
                    value: function(t) {
                        var t = this.$element.find(':radio[name="'.concat(t, '"]')),
                            n = !1,
                            i = !1;
                        return t.each(function(t, e) {
                            c()(e).attr("required") && (i = !0);
                        }), (n = !i ? !0 : n) || t.each(function(t, e) {
                            c()(e).prop("checked") && (n = !0);
                        }), n;
                    }
                }, {
                    key: "validateCheckbox",
                    value: function(t) {
                        var n = this,
                            t = this.$element.find(':checkbox[name="'.concat(t, '"]')),
                            i = !1,
                            o = !1,
                            s = 1,
                            r = 0;
                        return t.each(function(t, e) {
                            c()(e).attr("required") && (o = !0);
                        }), (i = !o ? !0 : i) || (t.each(function(t, e) {
                            c()(e).prop("checked") && r++, void 0 !== c()(e).attr("data-min-required") && (s = parseInt(c()(e).attr("data-min-required"), 10));
                        }), s <= r && (i = !0)), !0 !== this.initialized && 1 < s || (t.each(function(t, e) {
                            i ? n.removeErrorClasses(c()(e)) : n.addErrorClasses(c()(e), ["required"]);
                        }), i);
                    }
                }, {
                    key: "matchValidation",
                    value: function(e, t, n) {
                        var i = this;
                        return n = !!n, -1 === t.split(" ").map(function(t) {
                            return i.options.validators[t](e, n, e.parent());
                        }).indexOf(!1);
                    }
                }, {
                    key: "resetForm",
                    value: function() {
                        var t = this.$element,
                            e = this.options;
                        c()(".".concat(e.labelErrorClass), t).not("small").removeClass(e.labelErrorClass), c()(".".concat(e.inputErrorClass), t).not("small").removeClass(e.inputErrorClass), c()("".concat(e.formErrorSelector, ".").concat(e.formErrorClass)).removeClass(e.formErrorClass), t.find("[data-abide-error]").css("display", "none"), c()(":input", t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({
                            "data-invalid": null,
                            "aria-invalid": null
                        }), c()(":input:radio", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                            "data-invalid": null,
                            "aria-invalid": null
                        }), c()(":input:checkbox", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                            "data-invalid": null,
                            "aria-invalid": null
                        }), t.trigger("formreset.zf.abide", [t]);
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        var t = this;
                        this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                            t.removeErrorClasses(c()(this));
                        }), this.$submits.off(".abide");
                    }
                }]) && a(t.prototype, e), n && a(t, n), o;
            }();
            i.defaults = {
                validateOn: "fieldChange",
                labelErrorClass: "is-invalid-label",
                inputErrorClass: "is-invalid-input",
                formErrorSelector: ".form-error",
                formErrorClass: "is-visible",
                a11yAttributes: !0,
                a11yErrorLevel: "assertive",
                liveValidate: !1,
                validateOnBlur: !1,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                    url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
                    website: {
                        test: function(t) {
                            return i.defaults.patterns.domain.test(t) || i.defaults.patterns.url.test(t);
                        }
                    }
                },
                validators: {
                    equalTo: function(t) {
                        return c()("#".concat(t.attr("data-equalto"))).val() === t.val();
                    }
                }
            };
        },
        "./js/foundation.accordion.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Accordion", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.core.plugin.js"),
                a = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.util.keyboard.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function f(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = d(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = d(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e);
                }(o, r["Plugin"]);
                var t, e, n, i = f(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Accordion", this._init(), l.Keyboard.register("Accordion", {
                            ENTER: "toggle",
                            SPACE: "toggle",
                            ARROW_DOWN: "next",
                            ARROW_UP: "previous",
                            HOME: "first",
                            END: "last"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var n = this;
                        this._isInitializing = !0, this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function(t, e) {
                            var n = s()(e),
                                i = n.children("[data-tab-content]"),
                                o = i[0].id || Object(a.GetYoDigits)(6, "accordion"),
                                e = e.id ? "".concat(e.id, "-label") : "".concat(o, "-label");
                            n.find("a:first").attr({
                                "aria-controls": o,
                                id: e,
                                "aria-expanded": !1
                            }), i.attr({
                                role: "region",
                                "aria-labelledby": e,
                                "aria-hidden": !0,
                                id: o
                            });
                        });
                        var t = this.$element.find(".is-active").children("[data-tab-content]");
                        t.length && (this._initialAnchor = t.prev("a").attr("href"), this._openSingleTab(t)), this._checkDeepLink = function() {
                            var t = window.location.hash;
                            if (!t.length) {
                                if (n._isInitializing) return;
                                n._initialAnchor && (t = n._initialAnchor);
                            }
                            var e = t && s()(t),
                                t = t && n.$element.find('[href$="'.concat(t, '"]'));
                            !e.length || !t.length || (e && t && t.length ? t.parent("[data-accordion-item]").hasClass("is-active") || n._openSingleTab(e) : n._closeAllTabs(), n.options.deepLinkSmudge && Object(a.onLoad)(s()(window), function() {
                                var t = n.$element.offset();
                                s()("html, body").animate({
                                    scrollTop: t.top - n.options.deepLinkSmudgeOffset
                                }, n.options.deepLinkSmudgeDelay);
                            }), n.$element.trigger("deeplink.zf.accordion", [t, e]));
                        }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1;
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var i = this;
                        this.$tabs.each(function() {
                            var e = s()(this),
                                n = e.children("[data-tab-content]");
                            n.length && e.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(t) {
                                t.preventDefault(), i.toggle(n);
                            }).on("keydown.zf.accordion", function(t) {
                                l.Keyboard.handleKey(t, "Accordion", {
                                    toggle: function() {
                                        i.toggle(n);
                                    },
                                    next: function() {
                                        var t = e.next().find("a").focus();
                                        i.options.multiExpand || t.trigger("click.zf.accordion");
                                    },
                                    previous: function() {
                                        var t = e.prev().find("a").focus();
                                        i.options.multiExpand || t.trigger("click.zf.accordion");
                                    },
                                    first: function() {
                                        var t = i.$tabs.first().find(".accordion-title").focus();
                                        i.options.multiExpand || t.trigger("click.zf.accordion");
                                    },
                                    last: function() {
                                        var t = i.$tabs.last().find(".accordion-title").focus();
                                        i.options.multiExpand || t.trigger("click.zf.accordion");
                                    },
                                    handled: function() {
                                        t.preventDefault();
                                    }
                                });
                            });
                        }), this.options.deepLink && s()(window).on("hashchange", this._checkDeepLink);
                    }
                }, {
                    key: "toggle",
                    value: function(t) {
                        t.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot toggle an accordion that is disabled.") : (t.parent().hasClass("is-active") ? this.up(t) : this.down(t), this.options.deepLink && (t = t.prev("a").attr("href"), this.options.updateHistory ? history.pushState({}, "", t) : history.replaceState({}, "", t)));
                    }
                }, {
                    key: "down",
                    value: function(t) {
                        t.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot call down on an accordion that is disabled.") : this.options.multiExpand ? this._openTab(t) : this._openSingleTab(t);
                    }
                }, {
                    key: "up",
                    value: function(t) {
                        var e;
                        this.$element.is("[disabled]") ? console.info("Cannot call up on an accordion that is disabled.") : (e = t.parent()).hasClass("is-active") && (e = e.siblings(), (this.options.allowAllClosed || e.hasClass("is-active")) && this._closeTab(t));
                    }
                }, {
                    key: "_openSingleTab",
                    value: function(t) {
                        var e = this.$element.children(".is-active").children("[data-tab-content]");
                        e.length && this._closeTab(e.not(t)), this._openTab(t);
                    }
                }, {
                    key: "_openTab",
                    value: function(t) {
                        var e = this,
                            n = t.parent(),
                            i = t.attr("aria-labelledby");
                        t.attr("aria-hidden", !1), n.addClass("is-active"), s()("#".concat(i)).attr({
                            "aria-expanded": !0
                        }), t.finish().slideDown(this.options.slideSpeed, function() {
                            e.$element.trigger("down.zf.accordion", [t]);
                        });
                    }
                }, {
                    key: "_closeTab",
                    value: function(t) {
                        var e = this,
                            n = t.parent(),
                            i = t.attr("aria-labelledby");
                        t.attr("aria-hidden", !0), n.removeClass("is-active"), s()("#".concat(i)).attr({
                            "aria-expanded": !1
                        }), t.finish().slideUp(this.options.slideSpeed, function() {
                            e.$element.trigger("up.zf.accordion", [t]);
                        });
                    }
                }, {
                    key: "_closeAllTabs",
                    value: function() {
                        var t = this.$element.children(".is-active").children("[data-tab-content]");
                        t.length && this._closeTab(t);
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), this.options.deepLink && s()(window).off("hashchange", this._checkDeepLink);
                    }
                }]) && u(t.prototype, e), n && u(t, n), o;
            }();
            i.defaults = {
                slideSpeed: 250,
                multiExpand: !1,
                allowAllClosed: !1,
                deepLink: !1,
                deepLinkSmudge: !1,
                deepLinkSmudgeDelay: 300,
                deepLinkSmudgeOffset: 0,
                updateHistory: !1
            };
        },
        "./js/foundation.accordionMenu.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "AccordionMenu", function() {
                return i;
            });
            var e = n("jquery"),
                a = n.n(e),
                l = n("./js/foundation.util.keyboard.js"),
                r = n("./js/foundation.util.nest.js"),
                u = n("./js/foundation.core.utils.js"),
                s = n("./js/foundation.core.plugin.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function d(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = h(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = d(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = a.a.extend({}, o.defaults, this.$element.data(), e), this.className = "AccordionMenu", this._init(), l.Keyboard.register("AccordionMenu", {
                            ENTER: "toggle",
                            SPACE: "toggle",
                            ARROW_RIGHT: "open",
                            ARROW_UP: "up",
                            ARROW_DOWN: "down",
                            ARROW_LEFT: "close",
                            ESCAPE: "closeAll"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        r.Nest.Feather(this.$element, "accordion");
                        var s = this;
                        this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                            "aria-multiselectable": this.options.multiOpen
                        }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                            var t = this.id || Object(u.GetYoDigits)(6, "acc-menu-link"),
                                e = a()(this),
                                n = e.children("[data-submenu]"),
                                i = n[0].id || Object(u.GetYoDigits)(6, "acc-menu"),
                                o = n.hasClass("is-active");
                            s.options.parentLink && e.children("a").clone().prependTo(n).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>'), s.options.submenuToggle ? (e.addClass("has-submenu-toggle"), e.children("a").after('<button id="' + t + '" class="submenu-toggle" aria-controls="' + i + '" aria-expanded="' + o + '" title="' + s.options.submenuToggleText + '"><span class="submenu-toggle-text">' + s.options.submenuToggleText + "</span></button>")) : e.attr({
                                "aria-controls": i,
                                "aria-expanded": o,
                                id: t
                            }), n.attr({
                                "aria-labelledby": t,
                                "aria-hidden": !o,
                                role: "group",
                                id: i
                            });
                        });
                        var t = this.$element.find(".is-active");
                        t.length && t.each(function() {
                            s.down(a()(this));
                        }), this._events();
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var r = this;
                        this.$element.find("li").each(function() {
                            var e = a()(this).children("[data-submenu]");
                            e.length && (r.options.submenuToggle ? a()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function() {
                                r.toggle(e);
                            }) : a()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(t) {
                                t.preventDefault(), r.toggle(e);
                            }));
                        }).on("keydown.zf.accordionMenu", function(e) {
                            var n, i, o = a()(this),
                                s = o.parent("ul").children("li"),
                                t = o.children("[data-submenu]");
                            s.each(function(t) {
                                a()(this).is(o) && (n = s.eq(Math.max(0, t - 1)).find("a").first(), i = s.eq(Math.min(t + 1, s.length - 1)).find("a").first(), a()(this).children("[data-submenu]:visible").length && (i = o.find("li:first-child").find("a").first()), a()(this).is(":first-child") ? n = o.parents("li").first().find("a").first() : n.parents("li").first().children("[data-submenu]:visible").length && (n = n.parents("li").find("li:last-child").find("a").first()), a()(this).is(":last-child") && (i = o.parents("li").first().next("li").find("a").first()));
                            }), l.Keyboard.handleKey(e, "AccordionMenu", {
                                open: function() {
                                    t.is(":hidden") && (r.down(t), t.find("li").first().find("a").first().focus());
                                },
                                close: function() {
                                    t.length && !t.is(":hidden") ? r.up(t) : o.parent("[data-submenu]").length && (r.up(o.parent("[data-submenu]")), o.parents("li").first().find("a").first().focus());
                                },
                                up: function() {
                                    return n.focus(), !0;
                                },
                                down: function() {
                                    return i.focus(), !0;
                                },
                                toggle: function() {
                                    return !r.options.submenuToggle && (o.children("[data-submenu]").length ? (r.toggle(o.children("[data-submenu]")), !0) : void 0);
                                },
                                closeAll: function() {
                                    r.hideAll();
                                },
                                handled: function(t) {
                                    t && e.preventDefault();
                                }
                            });
                        });
                    }
                }, {
                    key: "hideAll",
                    value: function() {
                        this.up(this.$element.find("[data-submenu]"));
                    }
                }, {
                    key: "showAll",
                    value: function() {
                        this.down(this.$element.find("[data-submenu]"));
                    }
                }, {
                    key: "toggle",
                    value: function(t) {
                        t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t));
                    }
                }, {
                    key: "down",
                    value: function(t) {
                        var e, n = this;
                        this.options.multiOpen || (e = t.parentsUntil(this.$element).add(t).add(t.find(".is-active")), e = this.$element.find(".is-active").not(e), this.up(e)), t.addClass("is-active").attr({
                            "aria-hidden": !1
                        }), (this.options.submenuToggle ? t.prev(".submenu-toggle") : t.parent(".is-accordion-submenu-parent")).attr({
                            "aria-expanded": !0
                        }), t.slideDown(this.options.slideSpeed, function() {
                            n.$element.trigger("down.zf.accordionMenu", [t]);
                        });
                    }
                }, {
                    key: "up",
                    value: function(t) {
                        var e = this,
                            n = t.find("[data-submenu]"),
                            i = t.add(n);
                        n.slideUp(0), i.removeClass("is-active").attr("aria-hidden", !0), (this.options.submenuToggle ? i.prev(".submenu-toggle") : i.parent(".is-accordion-submenu-parent")).attr("aria-expanded", !1), t.slideUp(this.options.slideSpeed, function() {
                            e.$element.trigger("up.zf.accordionMenu", [t]);
                        });
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), this.$element.find("[data-is-parent-link]").detach(), this.options.submenuToggle && (this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"), this.$element.find(".submenu-toggle").remove()), r.Nest.Burn(this.$element, "accordion");
                    }
                }]) && c(t.prototype, e), n && c(t, n), o;
            }();
            i.defaults = {
                parentLink: !1,
                slideSpeed: 250,
                submenuToggle: !1,
                submenuToggleText: "Toggle menu",
                multiOpen: !0
            };
        },
        "./js/foundation.core.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Foundation", function() {
                return l;
            });
            var e = n("jquery"),
                s = n.n(e),
                i = n("./js/foundation.core.utils.js"),
                r = n("./js/foundation.util.mediaQuery.js");

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            var l = {
                version: "6.7.4",
                _plugins: {},
                _uuids: [],
                plugin: function(t, e) {
                    var n = e || u(t),
                        e = o(n);
                    this._plugins[e] = this[n] = t;
                },
                registerPlugin: function(t, e) {
                    e = e ? o(e) : u(t.constructor).toLowerCase();
                    t.uuid = Object(i.GetYoDigits)(6, e), t.$element.attr("data-".concat(e)) || t.$element.attr("data-".concat(e), t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf.".concat(e)), this._uuids.push(t.uuid);
                },
                unregisterPlugin: function(t) {
                    var e, n = o(u(t.$element.data("zfPlugin").constructor));
                    for (e in this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-".concat(n)).removeData("zfPlugin").trigger("destroyed.zf.".concat(n)), t) "function" == typeof t[e] && (t[e] = null);
                },
                reInit: function(t) {
                    var e, n, i = t instanceof s.a;
                    try {
                        i ? t.each(function() {
                            s()(this).data("zfPlugin")._init();
                        }) : (e = a(t), n = this, {
                            object: function(t) {
                                t.forEach(function(t) {
                                    t = o(t), s()("[data-" + t + "]").foundation("_init");
                                });
                            },
                            string: function() {
                                t = o(t), s()("[data-" + t + "]").foundation("_init");
                            },
                            undefined: function() {
                                this.object(Object.keys(n._plugins));
                            }
                        }[e](t));
                    } catch (t) {
                        console.error(t);
                    } finally {
                        return t;
                    }
                },
                reflow: function(i, t) {
                    void 0 === t ? t = Object.keys(this._plugins) : "string" == typeof t && (t = [t]);
                    var o = this;
                    s.a.each(t, function(t, e) {
                        var n = o._plugins[e];
                        s()(i).find("[data-" + e + "]").addBack("[data-" + e + "]").filter(function() {
                            return void 0 === s()(this).data("zfPlugin");
                        }).each(function() {
                            var t = s()(this),
                                e = {
                                    reflow: !0
                                };
                            t.attr("data-options") && t.attr("data-options").split(";").forEach(function(t) {
                                t = t.split(":").map(function(t) {
                                    return t.trim();
                                });
                                t[0] && (e[t[0]] = function(t) {
                                    if ("true" === t) return !0;
                                    if ("false" === t) return !1;
                                    if (!isNaN(+t)) return parseFloat(t);;
                                    return t;
                                }(t[1]));
                            });
                            try {
                                t.data("zfPlugin", new n(s()(this), e));
                            } catch (t) {
                                console.error(t);
                            } finally {
                                return;
                            }
                        });
                    });
                },
                getFnName: u,
                addToJquery: function() {
                    return s.a.fn.foundation = function(n) {
                        var t = a(n),
                            e = s()(".no-js");
                        if (e.length && e.removeClass("no-js"), "undefined" === t) r.MediaQuery._init(), l.reflow(this);
                        else {
                            if ("string" !== t) throw new TypeError("We're sorry, ".concat(t, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
                            var i = Array.prototype.slice.call(arguments, 1),
                                o = this.data("zfPlugin");
                            if (void 0 === o || void 0 === o[n]) throw new ReferenceError("We're sorry, '" + n + "' is not an available method for " + (o ? u(o) : "this element") + ".");
                            1 === this.length ? o[n].apply(o, i) : this.each(function(t, e) {
                                o[n].apply(s()(e).data("zfPlugin"), i);
                            });
                        }
                        return this;
                    }, s.a;
                }
            };

            function u(t) {
                if (void 0 !== Function.prototype.name) return (void 0 === t.prototype ? t : t.prototype).constructor.name;
                t = /function\s([^(]{1,})\(/.exec(t.toString());
                return t && 1 < t.length ? t[1].trim() : "";
            }

            function o(t) {
                return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            }
            l.util = {
                    throttle: function(n, i) {
                        var o = null;
                        return function() {
                            var t = this,
                                e = arguments;
                            null === o && (o = setTimeout(function() {
                                n.apply(t, e), o = null;
                            }, i));
                        };
                    }
                }, window.Foundation = l,
                function() {
                    Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                        return (new Date()).getTime();
                    });
                    for (var i, t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                        var n = t[e];
                        window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"];
                    }!/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame && window.cancelAnimationFrame || (i = 0, window.requestAnimationFrame = function(t) {
                        var e = Date.now(),
                            n = Math.max(i + 16, e);
                        return setTimeout(function() {
                            t(i = n);
                        }, n - e);
                    }, window.cancelAnimationFrame = clearTimeout), window.performance && window.performance.now || (window.performance = {
                        start: Date.now(),
                        now: function() {
                            return Date.now() - this.start;
                        }
                    });
                }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
                    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

                    function e() {
                        return i.apply(this instanceof o ? this : t, n.concat(Array.prototype.slice.call(arguments)));
                    }
                    var n = Array.prototype.slice.call(arguments, 1),
                        i = this,
                        o = function() {};
                    return this.prototype && (o.prototype = this.prototype), e.prototype = new o(), e;
                });
        },
        "./js/foundation.core.plugin.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Plugin", function() {
                return i;
            });
            var o = n("./js/foundation.core.utils.js");

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            var i = function() {
                function n(t, e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, n), this._setup(t, e);
                    e = r(this);
                    this.uuid = Object(o.GetYoDigits)(6, e), this.$element.attr("data-".concat(e)) || this.$element.attr("data-".concat(e), this.uuid), this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf.".concat(e));
                }
                var t, e, i;
                return t = n, (e = [{
                    key: "destroy",
                    value: function() {
                        this._destroy();
                        var t, e = r(this);
                        for (t in this.$element.removeAttr("data-".concat(e)).removeData("zfPlugin").trigger("destroyed.zf.".concat(e)), this) this.hasOwnProperty(t) && (this[t] = null);
                    }
                }]) && s(t.prototype, e), i && s(t, i), n;
            }();

            function r(t) {
                return t.className.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            }
        },
        "./js/foundation.core.utils.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "rtl", function() {
                return i;
            }), n.d(e, "GetYoDigits", function() {
                return o;
            }), n.d(e, "RegExpEscape", function() {
                return s;
            }), n.d(e, "transitionend", function() {
                return r;
            }), n.d(e, "onLoad", function() {
                return a;
            }), n.d(e, "ignoreMousedisappear", function() {
                return u;
            });
            var e = n("jquery"),
                l = n.n(e);

            function i() {
                return "rtl" === l()("html").attr("dir");
            }

            function o() {
                for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 6, e = 1 < arguments.length ? arguments[1] : void 0, n = "", i = "0123456789abcdefghijklmnopqrstuvwxyz", o = i.length, s = 0; s < t; s++) n += i[Math.floor(Math.random() * o)];
                return e ? "".concat(n, "-").concat(e) : n;
            }

            function s(t) {
                return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            }

            function r(t) {
                var e, n, i = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    o = document.createElement("div");
                for (n in i) void 0 !== o.style[n] && (e = i[n]);
                return e || (setTimeout(function() {
                    t.triggerHandler("transitionend", [t]);
                }, 1), "transitionend");
            }

            function a(t, e) {
                function n() {
                    return t.triggerHandler(o);
                }
                var i = "complete" === document.readyState,
                    o = (i ? "_didLoad" : "load") + ".zf.util.onLoad";
                return t && (e && t.one(o, e), i ? setTimeout(n) : l()(window).one("load", n)), o;
            }

            function u(s) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    e = t.ignoreLeaveWindow,
                    r = void 0 !== e && e,
                    t = t.ignoreReappear,
                    a = void 0 !== t && t;
                return function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    var o = s.bind.apply(s, [this, e].concat(n));
                    if (null !== e.relatedTarget) return o();
                    setTimeout(function() {
                        return r || !document.hasFocus || document.hasFocus() ? void(a || l()(document).one("mouseenter", function(t) {
                            l()(e.currentTarget).has(t.target).length || (e.relatedTarget = t.target, o());
                        })) : o();
                    }, 0);
                };
            }
        },
        "./js/foundation.drilldown.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Drilldown", function() {
                return i;
            });
            var e = n("jquery"),
                r = n.n(e),
                a = n("./js/foundation.util.keyboard.js"),
                s = n("./js/foundation.util.nest.js"),
                l = n("./js/foundation.core.utils.js"),
                u = n("./js/foundation.util.box.js"),
                c = n("./js/foundation.core.plugin.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function h(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = p(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = p(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e);
                }(o, c["Plugin"]);
                var t, e, n, i = h(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = r.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Drilldown", this._init(), a.Keyboard.register("Drilldown", {
                            ENTER: "open",
                            SPACE: "open",
                            ARROW_RIGHT: "next",
                            ARROW_UP: "up",
                            ARROW_DOWN: "down",
                            ARROW_LEFT: "previous",
                            ESCAPE: "close"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        s.Nest.Feather(this.$element, "drilldown"), this.options.autoApplyClass && this.$element.addClass("drilldown"), this.$element.attr({
                            "aria-multiselectable": !1
                        }), this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").find("a"), this.$currentMenu = this.$element, this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || Object(l.GetYoDigits)(6, "drilldown")), this._prepareMenu(), this._registerEvents(), this._keyboardEvents();
                    }
                }, {
                    key: "_prepareMenu",
                    value: function() {
                        var n = this;
                        this.$submenuAnchors.each(function() {
                            var t = r()(this),
                                e = t.parent();
                            n.options.parentLink && t.clone().prependTo(e.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="none"></li>'), t.data("savedHref", t.attr("href")).removeAttr("href").attr("tabindex", 0), t.children("[data-submenu]").attr({
                                "aria-hidden": !0,
                                tabindex: 0,
                                role: "group"
                            }), n._events(t);
                        }), this.$submenus.each(function() {
                            var t = r()(this);
                            if (!t.find(".js-drilldown-back").length) switch (n.options.backButtonPosition) {
                                case "bottom":
                                    t.append(n.options.backButton);
                                    break;
                                case "top":
                                    t.prepend(n.options.backButton);
                                    break;
                                default:
                                    console.error("Unsupported backButtonPosition value '" + n.options.backButtonPosition + "'");
                            }
                            n._back(t);
                        }), this.$submenus.addClass("invisible"), this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = r()(this.options.wrapper).addClass("is-drilldown"), this.options.animateHeight && this.$wrapper.addClass("animate-height"), this.$element.wrap(this.$wrapper)), this.$wrapper = this.$element.parent(), this.$wrapper.css(this._getMaxDims());
                    }
                }, {
                    key: "_resize",
                    value: function() {
                        this.$wrapper.css({
                            "max-width": "none",
                            "min-height": "none"
                        }), this.$wrapper.css(this._getMaxDims());
                    }
                }, {
                    key: "_events",
                    value: function(n) {
                        var i = this;
                        n.off("click.zf.drilldown").on("click.zf.drilldown", function(t) {
                            var e;
                            r()(t.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && t.preventDefault(), i._show(n.parent("li")), i.options.closeOnClick && (e = r()("body")).off(".zf.drilldown").on("click.zf.drilldown", function(t) {
                                t.target === i.$element[0] || r.a.contains(i.$element[0], t.target) || (t.preventDefault(), i._hideAll(), e.off(".zf.drilldown"));
                            });
                        });
                    }
                }, {
                    key: "_registerEvents",
                    value: function() {
                        this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this), this.$element.on("open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown", this._bindHandler)), this.$element.on("mutateme.zf.trigger", this._resize.bind(this));
                    }
                }, {
                    key: "_scrollTop",
                    value: function() {
                        var t = this,
                            e = "" !== t.options.scrollTopElement ? r()(t.options.scrollTopElement) : t.$element,
                            e = parseInt(e.offset().top + t.options.scrollTopOffset, 10);
                        r()("html, body").stop(!0).animate({
                            scrollTop: e
                        }, t.options.animationDuration, t.options.animationEasing, function() {
                            this === r()("html")[0] && t.$element.trigger("scrollme.zf.drilldown");
                        });
                    }
                }, {
                    key: "_keyboardEvents",
                    value: function() {
                        var t = this;
                        this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(e) {
                            var n, i, o = r()(this),
                                s = o.parent("li").parent("ul").children("li").children("a");
                            s.each(function(t) {
                                r()(this).is(o) && (n = s.eq(Math.max(0, t - 1)), i = s.eq(Math.min(t + 1, s.length - 1)));
                            }), a.Keyboard.handleKey(e, "Drilldown", {
                                next: function() {
                                    if (o.is(t.$submenuAnchors)) return t._show(o.parent("li")), o.parent("li").one(Object(l.transitionend)(o), function() {
                                        o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus();
                                    }), !0;
                                },
                                previous: function() {
                                    return t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(Object(l.transitionend)(o), function() {
                                        setTimeout(function() {
                                            o.parent("li").parent("ul").parent("li").children("a").first().focus();
                                        }, 1);
                                    }), !0;
                                },
                                up: function() {
                                    return n.focus(), !o.is(t.$element.find("> li:first-child > a"));
                                },
                                down: function() {
                                    return i.focus(), !o.is(t.$element.find("> li:last-child > a"));
                                },
                                close: function() {
                                    o.is(t.$element.find("> li > a")) || (t._hide(o.parent().parent()), o.parent().parent().siblings("a").focus());
                                },
                                open: function() {
                                    return (!t.options.parentLink || !o.attr("href")) && (o.is(t.$menuItems) ? o.is(t.$submenuAnchors) ? (t._show(o.parent("li")), o.parent("li").one(Object(l.transitionend)(o), function() {
                                        o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus();
                                    }), !0) : void 0 : (t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(Object(l.transitionend)(o), function() {
                                        setTimeout(function() {
                                            o.parent("li").parent("ul").parent("li").children("a").first().focus();
                                        }, 1);
                                    }), !0));
                                },
                                handled: function(t) {
                                    t && e.preventDefault();
                                }
                            });
                        });
                    }
                }, {
                    key: "_hideAll",
                    value: function() {
                        var t, e = this,
                            n = this.$element.find(".is-drilldown-submenu.is-active");
                        n.addClass("is-closing"), this.options.autoHeight && (t = n.parent().closest("ul").data("calcHeight"), this.$wrapper.css({
                            height: t
                        })), this.$element.trigger("close.zf.drilldown"), n.one(Object(l.transitionend)(n), function() {
                            n.removeClass("is-active is-closing"), e.$element.trigger("closed.zf.drilldown");
                        });
                    }
                }, {
                    key: "_back",
                    value: function(e) {
                        var n = this;
                        e.off("click.zf.drilldown"), e.children(".js-drilldown-back").on("click.zf.drilldown", function() {
                            n._hide(e);
                            var t = e.parent("li").parent("ul").parent("li");
                            t.length ? n._show(t) : n.$currentMenu = n.$element;
                        });
                    }
                }, {
                    key: "_menuLinkEvents",
                    value: function() {
                        var t = this;
                        this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function() {
                            setTimeout(function() {
                                t._hideAll();
                            }, 0);
                        });
                    }
                }, {
                    key: "_setShowSubMenuClasses",
                    value: function(t, e) {
                        t.addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), t.parent("li").attr("aria-expanded", !0), !0 === e && this.$element.trigger("open.zf.drilldown", [t]);
                    }
                }, {
                    key: "_setHideSubMenuClasses",
                    value: function(t, e) {
                        t.removeClass("is-active").addClass("invisible").attr("aria-hidden", !0), t.parent("li").attr("aria-expanded", !1), !0 === e && t.trigger("hide.zf.drilldown", [t]);
                    }
                }, {
                    key: "_showMenu",
                    value: function(e, n) {
                        var i = this;
                        if (this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function() {
                                i._setHideSubMenuClasses(r()(this));
                            }), (this.$currentMenu = e).is("[data-drilldown]")) return !0 === n && e.find("li > a").first().focus(), void(this.options.autoHeight && this.$wrapper.css("height", e.data("calcHeight")));
                        var o = e.children().first().parentsUntil("[data-drilldown]", "[data-submenu]");
                        o.each(function(t) {
                            0 === t && i.options.autoHeight && i.$wrapper.css("height", r()(this).data("calcHeight"));
                            t = t === o.length - 1;
                            !0 == t && r()(this).one(Object(l.transitionend)(r()(this)), function() {
                                !0 === n && e.find("li > a").first().focus();
                            }), i._setShowSubMenuClasses(r()(this), t);
                        });
                    }
                }, {
                    key: "_show",
                    value: function(t) {
                        var e = t.children("[data-submenu]");
                        t.attr("aria-expanded", !0), this.$currentMenu = e, t.parent().closest("ul").addClass("invisible"), e.addClass("is-active visible").removeClass("invisible").attr("aria-hidden", !1), this.options.autoHeight && this.$wrapper.css({
                            height: e.data("calcHeight")
                        }), this.$element.trigger("open.zf.drilldown", [t]);
                    }
                }, {
                    key: "_hide",
                    value: function(t) {
                        this.options.autoHeight && this.$wrapper.css({
                            height: t.parent().closest("ul").data("calcHeight")
                        }), t.parent().closest("ul").removeClass("invisible"), t.parent("li").attr("aria-expanded", !1), t.attr("aria-hidden", !0), t.addClass("is-closing").one(Object(l.transitionend)(t), function() {
                            t.removeClass("is-active is-closing visible"), t.blur().addClass("invisible");
                        }), t.trigger("hide.zf.drilldown", [t]);
                    }
                }, {
                    key: "_getMaxDims",
                    value: function() {
                        var e = 0,
                            t = {},
                            n = this;
                        return this.$submenus.add(this.$element).each(function() {
                            var t = u.Box.GetDimensions(this).height;
                            e = e < t ? t : e, n.options.autoHeight && r()(this).data("calcHeight", t);
                        }), this.options.autoHeight ? t.height = this.$currentMenu.data("calcHeight") : t["min-height"] = "".concat(e, "px"), t["max-width"] = "".concat(this.$element[0].getBoundingClientRect().width, "px"), t;
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        r()("body").off(".zf.drilldown"), this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler), this._hideAll(), this.$element.off("mutateme.zf.trigger"), s.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").off("transitionend otransitionend webkitTransitionEnd").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function() {
                            r()(this).off(".zf.drilldown");
                        }), this.$element.find("[data-is-parent-link]").detach(), this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"), this.$element.find("a").each(function() {
                            var t = r()(this);
                            t.removeAttr("tabindex"), t.data("savedHref") && t.attr("href", t.data("savedHref")).removeData("savedHref");
                        });
                    }
                }]) && f(t.prototype, e), n && f(t, n), o;
            }();
            i.defaults = {
                autoApplyClass: !0,
                backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
                backButtonPosition: "top",
                wrapper: "<div></div>",
                parentLink: !1,
                closeOnClick: !1,
                autoHeight: !1,
                animateHeight: !1,
                scrollTop: !1,
                scrollTopElement: "",
                scrollTopOffset: 0,
                animationDuration: 500,
                animationEasing: "swing"
            };
        },
        "./js/foundation.dropdown.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Dropdown", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.util.keyboard.js"),
                a = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.positionable.js"),
                u = n("./js/foundation.util.triggers.js"),
                c = n("./js/foundation.util.touch.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function d(t, e, n) {
                return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    t = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = m(t)););
                        return t;
                    }(t, e);
                    if (t) {
                        e = Object.getOwnPropertyDescriptor(t, e);
                        return e.get ? e.get.call(n) : e.value;
                    }
                })(t, e, n || t);
            }

            function h(t, e) {
                return (h = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function p(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = m(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = m(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && h(t, e);
                }(o, l["Positionable"]);
                var t, e, n, i = p(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Dropdown", c.Touch.init(s.a), u.Triggers.init(s.a), this._init(), r.Keyboard.register("Dropdown", {
                            ENTER: "toggle",
                            SPACE: "toggle",
                            ESCAPE: "close"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t = this.$element.attr("id");
                        this.$anchors = s()('[data-toggle="'.concat(t, '"]')).length ? s()('[data-toggle="'.concat(t, '"]')) : s()('[data-open="'.concat(t, '"]')), this.$anchors.attr({
                            "aria-controls": t,
                            "data-is-focus": !1,
                            "data-yeti-box": t,
                            "aria-haspopup": !0,
                            "aria-expanded": !1
                        }), this._setCurrentAnchor(this.$anchors.first()), this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null, void 0 === this.$element.attr("aria-labelledby") && (void 0 === this.$currentAnchor.attr("id") && this.$currentAnchor.attr("id", Object(a.GetYoDigits)(6, "dd-anchor")), this.$element.attr("aria-labelledby", this.$currentAnchor.attr("id"))), this.$element.attr({
                            "aria-hidden": "true",
                            "data-yeti-box": t,
                            "data-resize": t
                        }), d(m(o.prototype), "_init", this).call(this), this._events();
                    }
                }, {
                    key: "_getDefaultPosition",
                    value: function() {
                        var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
                        return t ? t[0] : "bottom";
                    }
                }, {
                    key: "_getDefaultAlignment",
                    value: function() {
                        var t = /float-(\S+)/.exec(this.$currentAnchor.attr("class"));
                        return t ? t[1] : d(m(o.prototype), "_getDefaultAlignment", this).call(this);
                    }
                }, {
                    key: "_setPosition",
                    value: function() {
                        this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment)), d(m(o.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent), this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
                    }
                }, {
                    key: "_setCurrentAnchor",
                    value: function(t) {
                        this.$currentAnchor = s()(t);
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var n = this,
                            e = "ontouchstart" in window || void 0 !== window.ontouchstart;
                        this.$element.on({
                            "open.zf.trigger": this.open.bind(this),
                            "close.zf.trigger": this.close.bind(this),
                            "toggle.zf.trigger": this.toggle.bind(this),
                            "resizeme.zf.trigger": this._setPosition.bind(this)
                        }), this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function(t) {
                            n._setCurrentAnchor(this), (!1 === n.options.forceFollow || e && n.options.hover && !1 === n.$element.hasClass("is-open")) && t.preventDefault();
                        }), this.options.hover && (this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                            n._setCurrentAnchor(this);
                            var t = s()("body").data();
                            void 0 !== t.whatinput && "mouse" !== t.whatinput || (clearTimeout(n.timeout), n.timeout = setTimeout(function() {
                                n.open(), n.$anchors.data("hover", !0);
                            }, n.options.hoverDelay));
                        }).on("mouseleave.zf.dropdown", Object(a.ignoreMousedisappear)(function() {
                            clearTimeout(n.timeout), n.timeout = setTimeout(function() {
                                n.close(), n.$anchors.data("hover", !1);
                            }, n.options.hoverDelay);
                        })), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                            clearTimeout(n.timeout);
                        }).on("mouseleave.zf.dropdown", Object(a.ignoreMousedisappear)(function() {
                            clearTimeout(n.timeout), n.timeout = setTimeout(function() {
                                n.close(), n.$anchors.data("hover", !1);
                            }, n.options.hoverDelay);
                        }))), this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(t) {
                            var e = s()(this);
                            r.Keyboard.handleKey(t, "Dropdown", {
                                open: function() {
                                    e.is(n.$anchors) && !e.is("input, textarea") && (n.open(), n.$element.attr("tabindex", -1).focus(), t.preventDefault());
                                },
                                close: function() {
                                    n.close(), n.$anchors.focus();
                                }
                            });
                        });
                    }
                }, {
                    key: "_addBodyHandler",
                    value: function() {
                        var e = s()(document.body).not(this.$element),
                            n = this;
                        e.off("click.zf.dropdown tap.zf.dropdown").on("click.zf.dropdown tap.zf.dropdown", function(t) {
                            n.$anchors.is(t.target) || n.$anchors.find(t.target).length || n.$element.is(t.target) || n.$element.find(t.target).length || (n.close(), e.off("click.zf.dropdown tap.zf.dropdown"));
                        });
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t;
                        this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchors.addClass("hover").attr({
                            "aria-expanded": !0
                        }), this.$element.addClass("is-opening"), this._setPosition(), this.$element.removeClass("is-opening").addClass("is-open").attr({
                            "aria-hidden": !1
                        }), !this.options.autoFocus || (t = r.Keyboard.findFocusable(this.$element)).length && t.eq(0).focus(), this.options.closeOnClick && this._addBodyHandler(), this.options.trapFocus && r.Keyboard.trapFocus(this.$element), this.$element.trigger("show.zf.dropdown", [this.$element]);
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (!this.$element.hasClass("is-open")) return !1;
                        this.$element.removeClass("is-open").attr({
                            "aria-hidden": !0
                        }), this.$anchors.removeClass("hover").attr("aria-expanded", !1), this.$element.trigger("hide.zf.dropdown", [this.$element]), this.options.trapFocus && r.Keyboard.releaseFocus(this.$element);
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.$element.hasClass("is-open") ? this.$anchors.data("hover") || this.close() : this.open();
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.off(".zf.trigger").hide(), this.$anchors.off(".zf.dropdown"), s()(document.body).off("click.zf.dropdown tap.zf.dropdown");
                    }
                }]) && f(t.prototype, e), n && f(t, n), o;
            }();
            i.defaults = {
                parentClass: null,
                hoverDelay: 250,
                hover: !1,
                hoverPane: !1,
                vOffset: 0,
                hOffset: 0,
                position: "auto",
                alignment: "auto",
                allowOverlap: !1,
                allowBottomOverlap: !0,
                trapFocus: !1,
                autoFocus: !1,
                closeOnClick: !1,
                forceFollow: !0
            };
        },
        "./js/foundation.dropdownMenu.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "DropdownMenu", function() {
                return i;
            });
            var e = n("jquery"),
                d = n.n(e),
                s = n("./js/foundation.core.plugin.js"),
                a = n("./js/foundation.core.utils.js"),
                h = n("./js/foundation.util.keyboard.js"),
                r = n("./js/foundation.util.nest.js"),
                l = n("./js/foundation.util.box.js"),
                u = n("./js/foundation.util.touch.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function p(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = m(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = m(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = p(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = d.a.extend({}, o.defaults, this.$element.data(), e), this.className = "DropdownMenu", u.Touch.init(d.a), this._init(), h.Keyboard.register("DropdownMenu", {
                            ENTER: "open",
                            SPACE: "open",
                            ARROW_RIGHT: "next",
                            ARROW_UP: "up",
                            ARROW_DOWN: "down",
                            ARROW_LEFT: "previous",
                            ESCAPE: "close"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        r.Nest.Feather(this.$element, "dropdown");
                        var t = this.$element.find("li.is-dropdown-submenu-parent");
                        this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('li[role="none"]'), this.$tabs = this.$element.children('li[role="none"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), "auto" === this.options.alignment ? this.$element.hasClass(this.options.rightClass) || Object(a.rtl)() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", t.addClass("opens-left")) : (this.options.alignment = "left", t.addClass("opens-right")) : "right" === this.options.alignment ? t.addClass("opens-left") : t.addClass("opens-right"), this.changed = !1, this._events();
                    }
                }, {
                    key: "_isVertical",
                    value: function() {
                        return "block" === this.$tabs.css("display") || "column" === this.$element.css("flex-direction");
                    }
                }, {
                    key: "_isRtl",
                    value: function() {
                        return this.$element.hasClass("align-right") || Object(a.rtl)() && !this.$element.hasClass("align-left");
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var f = this,
                            s = "ontouchstart" in window || void 0 !== window.ontouchstart,
                            r = "is-dropdown-submenu-parent";
                        (this.options.clickOpen || s) && this.$menuItems.on("click.zf.dropdownMenu touchstart.zf.dropdownMenu", function(t) {
                            var e = d()(t.target).parentsUntil("ul", ".".concat(r)),
                                n = e.hasClass(r),
                                i = "true" === e.attr("data-is-click"),
                                o = e.children(".is-dropdown-submenu");
                            n && (i ? !f.options.closeOnClick || !f.options.clickOpen && !s || f.options.forceFollow && s || (t.stopImmediatePropagation(), t.preventDefault(), f._hide(e)) : (t.stopImmediatePropagation(), t.preventDefault(), f._show(o), e.add(e.parentsUntil(f.$element, ".".concat(r))).attr("data-is-click", !0)));
                        }), f.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownMenu", function() {
                            d()(this).hasClass(r) || f._hide();
                        }), s && this.options.disableHoverOnTouch && (this.options.disableHover = !0), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownMenu", function() {
                            var t = d()(this);
                            t.hasClass(r) && (clearTimeout(t.data("_delay")), t.data("_delay", setTimeout(function() {
                                f._show(t.children(".is-dropdown-submenu"));
                            }, f.options.hoverDelay)));
                        }).on("mouseleave.zf.dropdownMenu", Object(a.ignoreMousedisappear)(function() {
                            var t = d()(this);
                            if (t.hasClass(r) && f.options.autoclose) {
                                if ("true" === t.attr("data-is-click") && f.options.clickOpen) return !1;
                                clearTimeout(t.data("_delay")), t.data("_delay", setTimeout(function() {
                                    f._hide(t);
                                }, f.options.closingTime));
                            }
                        })), this.$menuItems.on("keydown.zf.dropdownMenu", function(e) {
                            var n, i, o = d()(e.target).parentsUntil("ul", '[role="none"]'),
                                t = -1 < f.$tabs.index(o),
                                s = t ? f.$tabs : o.siblings("li").add(o);
                            s.each(function(t) {
                                d()(this).is(o) && (n = s.eq(t - 1), i = s.eq(t + 1));
                            });

                            function r() {
                                i.children("a:first").focus(), e.preventDefault();
                            }

                            function a() {
                                n.children("a:first").focus(), e.preventDefault();
                            }

                            function l() {
                                var t = o.children("ul.is-dropdown-submenu");
                                t.length && (f._show(t), o.find("li > a:first").focus(), e.preventDefault());
                            }

                            function u() {
                                var t = o.parent("ul").parent("li");
                                t.children("a:first").focus(), f._hide(t), e.preventDefault();
                            }
                            var c = {
                                open: l,
                                close: function() {
                                    f._hide(f.$element), f.$menuItems.eq(0).children("a").focus(), e.preventDefault();
                                }
                            };
                            t ? f._isVertical() ? f._isRtl() ? d.a.extend(c, {
                                down: r,
                                up: a,
                                next: u,
                                previous: l
                            }) : d.a.extend(c, {
                                down: r,
                                up: a,
                                next: l,
                                previous: u
                            }) : f._isRtl() ? d.a.extend(c, {
                                next: a,
                                previous: r,
                                down: l,
                                up: u
                            }) : d.a.extend(c, {
                                next: r,
                                previous: a,
                                down: l,
                                up: u
                            }) : f._isRtl() ? d.a.extend(c, {
                                next: u,
                                previous: l,
                                down: r,
                                up: a
                            }) : d.a.extend(c, {
                                next: l,
                                previous: u,
                                down: r,
                                up: a
                            }), h.Keyboard.handleKey(e, "DropdownMenu", c);
                        });
                    }
                }, {
                    key: "_addBodyHandler",
                    value: function() {
                        var e = this,
                            t = d()(document.body);
                        this._removeBodyHandler(), t.on("click.zf.dropdownMenu tap.zf.dropdownMenu", function(t) {
                            !d()(t.target).closest(e.$element).length && (e._hide(), e._removeBodyHandler());
                        });
                    }
                }, {
                    key: "_removeBodyHandler",
                    value: function() {
                        d()(document.body).off("click.zf.dropdownMenu tap.zf.dropdownMenu");
                    }
                }, {
                    key: "_show",
                    value: function(n) {
                        var t = this.$tabs.index(this.$tabs.filter(function(t, e) {
                                return 0 < d()(e).find(n).length;
                            })),
                            e = n.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                        this._hide(e, t), n.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active"), l.Box.ImNotTouchingYou(n, null, !0) || (e = "left" === this.options.alignment ? "-right" : "-left", (t = n.parent(".is-dropdown-submenu-parent")).removeClass("opens".concat(e)).addClass("opens-".concat(this.options.alignment)), l.Box.ImNotTouchingYou(n, null, !0) || t.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"), this.changed = !0), n.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownMenu", [n]);
                    }
                }, {
                    key: "_hide",
                    value: function(t, e) {
                        var n, i = t && t.length ? t : void 0 !== e ? this.$tabs.not(function(t) {
                            return t === e;
                        }) : this.$element;
                        (i.hasClass("is-active") || 0 < i.find(".is-active").length) && ((n = i.find("li.is-active")).add(i).attr({
                            "data-is-click": !1
                        }).removeClass("is-active"), i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), (this.changed || i.find("opens-inner").length) && (t = "left" === this.options.alignment ? "right" : "left", i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(t)), this.changed = !1), clearTimeout(n.data("_delay")), this._removeBodyHandler(), this.$element.trigger("hide.zf.dropdownMenu", [i]));
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$menuItems.off(".zf.dropdownMenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), d()(document.body).off(".zf.dropdownMenu"), r.Nest.Burn(this.$element, "dropdown");
                    }
                }]) && c(t.prototype, e), n && c(t, n), o;
            }();
            i.defaults = {
                disableHover: !1,
                disableHoverOnTouch: !0,
                autoclose: !0,
                hoverDelay: 50,
                clickOpen: !1,
                closingTime: 500,
                alignment: "auto",
                closeOnClick: !0,
                closeOnClickInside: !0,
                verticalClass: "vertical",
                rightClass: "align-right",
                forceFollow: !0
            };
        },
        "./js/foundation.equalizer.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Equalizer", function() {
                return i;
            });
            var e = n("jquery"),
                c = n.n(e),
                s = n("./js/foundation.util.mediaQuery.js"),
                r = n("./js/foundation.util.imageLoader.js"),
                a = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.core.plugin.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function d(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = h(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e);
                }(o, l["Plugin"]);
                var t, e, n, i = d(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = c.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Equalizer", this._init();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t = this.$element.attr("data-equalizer") || "",
                            e = this.$element.find('[data-equalizer-watch="'.concat(t, '"]'));
                        s.MediaQuery._init(), this.$watched = e.length ? e : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", t || Object(a.GetYoDigits)(6, "eq")), this.$element.attr("data-mutate", t || Object(a.GetYoDigits)(6, "eq")), this.hasNested = 0 < this.$element.find("[data-equalizer]").length, this.isNested = 0 < this.$element.parentsUntil(document.body, "[data-equalizer]").length, this.isOn = !1, this._bindHandler = {
                            onResizeMeBound: this._onResizeMe.bind(this),
                            onPostEqualizedBound: this._onPostEqualized.bind(this)
                        };
                        var n, t = this.$element.find("img");
                        this.options.equalizeOn ? (n = this._checkMQ(), c()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== n && !1 === n || void 0 === n) && (t.length ? Object(r.onImagesLoaded)(t, this._reflow.bind(this)) : this._reflow());
                    }
                }, {
                    key: "_pauseEvents",
                    value: function() {
                        this.isOn = !1, this.$element.off({
                            ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                            "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                            "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
                        });
                    }
                }, {
                    key: "_onResizeMe",
                    value: function() {
                        this._reflow();
                    }
                }, {
                    key: "_onPostEqualized",
                    value: function(t) {
                        t.target !== this.$element[0] && this._reflow();
                    }
                }, {
                    key: "_events",
                    value: function() {
                        this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)), this.isOn = !0;
                    }
                }, {
                    key: "_checkMQ",
                    value: function() {
                        var t = !s.MediaQuery.is(this.options.equalizeOn);
                        return t ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), t;
                    }
                }, {
                    key: "_killswitch",
                    value: function() {}
                }, {
                    key: "_reflow",
                    value: function() {
                        if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), !1;
                        this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this));
                    }
                }, {
                    key: "_isStacked",
                    value: function() {
                        return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
                    }
                }, {
                    key: "getHeights",
                    value: function(t) {
                        for (var e = [], n = 0, i = this.$watched.length; n < i; n++) this.$watched[n].style.height = "auto", e.push(this.$watched[n].offsetHeight);
                        t(e);
                    }
                }, {
                    key: "getHeightsByRow",
                    value: function(t) {
                        var e = this.$watched.length ? this.$watched.first().offset().top : 0,
                            n = [],
                            i = 0;
                        n[i] = [];
                        for (var o = 0, s = this.$watched.length; o < s; o++) {
                            this.$watched[o].style.height = "auto";
                            var r = c()(this.$watched[o]).offset().top;
                            r !== e && (n[++i] = [], e = r), n[i].push([this.$watched[o], this.$watched[o].offsetHeight]);
                        }
                        for (var a = 0, l = n.length; a < l; a++) {
                            var u = c()(n[a]).map(function() {
                                    return this[1];
                                }).get(),
                                u = Math.max.apply(null, u);
                            n[a].push(u);
                        }
                        t(n);
                    }
                }, {
                    key: "applyHeight",
                    value: function(t) {
                        t = Math.max.apply(null, t);
                        this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", t), this.$element.trigger("postequalized.zf.equalizer");
                    }
                }, {
                    key: "applyHeightByRow",
                    value: function(t) {
                        this.$element.trigger("preequalized.zf.equalizer");
                        for (var e = 0, n = t.length; e < n; e++) {
                            var i = t[e].length,
                                o = t[e][i - 1];
                            if (i <= 2) c()(t[e][0][0]).css({
                                height: "auto"
                            });
                            else {
                                this.$element.trigger("preequalizedrow.zf.equalizer");
                                for (var s = 0, r = i - 1; s < r; s++) c()(t[e][s][0]).css({
                                    height: o
                                });
                                this.$element.trigger("postequalizedrow.zf.equalizer");
                            }
                        }
                        this.$element.trigger("postequalized.zf.equalizer");
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this._pauseEvents(), this.$watched.css("height", "auto");
                    }
                }]) && u(t.prototype, e), n && u(t, n), o;
            }();
            i.defaults = {
                equalizeOnStack: !1,
                equalizeByRow: !1,
                equalizeOn: ""
            };
        },
        "./js/foundation.interchange.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Interchange", function() {
                return i;
            });
            var e = n("jquery"),
                o = n.n(e),
                r = n("./js/foundation.util.mediaQuery.js"),
                a = n("./js/foundation.core.plugin.js"),
                l = n("./js/foundation.core.utils.js"),
                u = n("./js/foundation.util.triggers.js");

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function d(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = h(n);
                    return function(t, e) {
                        if (e && ("object" === s(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e);
                }(s, a["Plugin"]);
                var t, e, n, i = d(s);

                function s() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), i.apply(this, arguments);
                }
                return t = s, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = o.a.extend({}, s.defaults, this.$element.data(), e), this.rules = [], this.currentPath = "", this.className = "Interchange", u.Triggers.init(o.a), this._init(), this._events();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        r.MediaQuery._init();
                        var t = this.$element[0].id || Object(l.GetYoDigits)(6, "interchange");
                        this.$element.attr({
                            "data-resize": t,
                            id: t
                        }), this._parseOptions(), this._addBreakpoints(), this._generateRules(), this._reflow();
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var t = this;
                        this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                            return t._reflow();
                        });
                    }
                }, {
                    key: "_reflow",
                    value: function() {
                        var t, e, n;
                        for (e in this.rules) this.rules.hasOwnProperty(e) && (n = this.rules[e], window.matchMedia(n.query).matches && (t = n));
                        t && this.replace(t.path);
                    }
                }, {
                    key: "_parseOptions",
                    value: function() {
                        void 0 === this.options.type ? this.options.type = "auto" : -1 === ["auto", "src", "background", "html"].indexOf(this.options.type) && (console.warn('Warning: invalid value "'.concat(this.options.type, '" for Interchange option "type"')), this.options.type = "auto");
                    }
                }, {
                    key: "_addBreakpoints",
                    value: function() {
                        for (var t in r.MediaQuery.queries) r.MediaQuery.queries.hasOwnProperty(t) && (t = r.MediaQuery.queries[t], s.SPECIAL_QUERIES[t.name] = t.value);
                    }
                }, {
                    key: "_generateRules",
                    value: function() {
                        var t, e, n, i = [],
                            o = this.options.rules || this.$element.data("interchange");
                        for (t in o = "string" == typeof o ? o.match(/\[.*?, .*?\]/g) : o) o.hasOwnProperty(t) && (e = (n = o[t].slice(1, -1).split(", ")).slice(0, -1).join(""), n = n[n.length - 1], s.SPECIAL_QUERIES[n] && (n = s.SPECIAL_QUERIES[n]), i.push({
                            path: e,
                            query: n
                        }));
                        this.rules = i;
                    }
                }, {
                    key: "replace",
                    value: function(e) {
                        var n, t, i = this;
                        this.currentPath !== e && (n = "replaced.zf.interchange", "src" === (t = "auto" === (t = this.options.type) ? "IMG" === this.$element[0].nodeName ? "src" : e.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i) ? "background" : "html" : t) ? this.$element.attr("src", e).on("load", function() {
                            i.currentPath = e;
                        }).trigger(n) : "background" === t ? (e = e.replace(/\(/g, "%28").replace(/\)/g, "%29"), this.$element.css({
                            "background-image": "url(" + e + ")"
                        }).trigger(n)) : "html" === t && o.a.get(e, function(t) {
                            i.$element.html(t).trigger(n), o()(t).foundation(), i.currentPath = e;
                        }));
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.off("resizeme.zf.trigger");
                    }
                }]) && c(t.prototype, e), n && c(t, n), s;
            }();
            i.defaults = {
                rules: null,
                type: "auto"
            }, i.SPECIAL_QUERIES = {
                landscape: "screen and (orientation: landscape)",
                portrait: "screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
            };
        },
        "./js/foundation.magellan.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Magellan", function() {
                return i;
            });
            var e = n("jquery"),
                a = n.n(e),
                s = n("./js/foundation.core.plugin.js"),
                r = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.smoothScroll.js"),
                u = n("./js/foundation.util.triggers.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function d(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = h(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = d(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = a.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Magellan", u.Triggers.init(a.a), this._init(), this.calcPoints();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t = this.$element[0].id || Object(r.GetYoDigits)(6, "magellan");
                        this.$targets = a()("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                            "data-resize": t,
                            "data-scroll": t,
                            id: t
                        }), this.$active = a()(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events();
                    }
                }, {
                    key: "calcPoints",
                    value: function() {
                        var n = this,
                            t = document.body,
                            e = document.documentElement;
                        this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, e.clientHeight)), this.docHeight = Math.round(Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight)), this.$targets.each(function() {
                            var t = a()(this),
                                e = Math.round(t.offset().top - n.options.threshold);
                            t.targetPoint = e, n.points.push(e);
                        });
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var e = this;
                        a()(window).one("load", function() {
                            e.options.deepLinking && location.hash && e.scrollToLoc(location.hash), e.calcPoints(), e._updateActive();
                        }), e.onLoadListener = Object(r.onLoad)(a()(window), function() {
                            e.$element.on({
                                "resizeme.zf.trigger": e.reflow.bind(e),
                                "scrollme.zf.trigger": e._updateActive.bind(e)
                            }).on("click.zf.magellan", 'a[href^="#"]', function(t) {
                                t.preventDefault();
                                t = this.getAttribute("href");
                                e.scrollToLoc(t);
                            });
                        }), this._deepLinkScroll = function() {
                            e.options.deepLinking && e.scrollToLoc(window.location.hash);
                        }, a()(window).on("hashchange", this._deepLinkScroll);
                    }
                }, {
                    key: "scrollToLoc",
                    value: function(t) {
                        this._inTransition = !0;
                        var e = this,
                            n = {
                                animationEasing: this.options.animationEasing,
                                animationDuration: this.options.animationDuration,
                                threshold: this.options.threshold,
                                offset: this.options.offset
                            };
                        l.SmoothScroll.scrollToLoc(t, n, function() {
                            e._inTransition = !1;
                        });
                    }
                }, {
                    key: "reflow",
                    value: function() {
                        this.calcPoints(), this._updateActive();
                    }
                }, {
                    key: "_updateActive",
                    value: function() {
                        var e, n, t, i, o, s, r = this;
                        this._inTransition || (e = parseInt(window.pageYOffset, 10), n = this.scrollPos > e, (this.scrollPos = e) < this.points[0] - this.options.offset - (n ? this.options.threshold : 0) || (s = e + this.winHeight === this.docHeight ? this.points.length - 1 : (o = this.points.filter(function(t) {
                            return t - r.options.offset - (n ? r.options.threshold : 0) <= e;
                        })).length ? o.length - 1 : 0), t = this.$active, i = "", void 0 !== s ? (this.$active = this.$links.filter('[href="#' + this.$targets.eq(s).data("magellan-target") + '"]'), this.$active.length && (i = this.$active[0].getAttribute("href"))) : this.$active = a()(), o = !(!this.$active.length && !t.length || this.$active.is(t)), s = i !== window.location.hash, o && (t.removeClass(this.options.activeClass), this.$active.addClass(this.options.activeClass)), this.options.deepLinking && s && (window.history.pushState ? (s = i || window.location.pathname + window.location.search, this.options.updateHistory ? window.history.pushState({}, "", s) : window.history.replaceState({}, "", s)) : window.location.hash = i), o && this.$element.trigger("update.zf.magellan", [this.$active]));
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        var t;
                        this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass), this.options.deepLinking && (t = this.$active[0].getAttribute("href"), window.location.hash.replace(t, "")), a()(window).off("hashchange", this._deepLinkScroll), this.onLoadListener && a()(window).off(this.onLoadListener);
                    }
                }]) && c(t.prototype, e), n && c(t, n), o;
            }();
            i.defaults = {
                animationDuration: 500,
                animationEasing: "linear",
                threshold: 50,
                activeClass: "is-active",
                deepLinking: !1,
                updateHistory: !1,
                offset: 0
            };
        },
        "./js/foundation.offcanvas.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "OffCanvas", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.core.plugin.js"),
                a = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.util.keyboard.js"),
                u = n("./js/foundation.util.mediaQuery.js"),
                c = n("./js/foundation.util.triggers.js");

            function f(t) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function h(t, e) {
                return (h = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function p(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = o(n);
                    return function(t, e) {
                        if (e && ("object" === f(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = o(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function o(t) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && h(t, e);
                }(o, r["Plugin"]);
                var t, e, n, i = p(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        var n = this;
                        this.className = "OffCanvas", this.$element = t, this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.contentClasses = {
                            base: [],
                            reveal: []
                        }, this.$lastTrigger = s()(), this.$triggers = s()(), this.position = "left", this.$content = s()(), this.nested = !!this.options.nested, this.$sticky = s()(), this.isInCanvas = !1, s()(["push", "overlap"]).each(function(t, e) {
                            n.contentClasses.base.push("has-transition-" + e);
                        }), s()(["left", "right", "top", "bottom"]).each(function(t, e) {
                            n.contentClasses.base.push("has-position-" + e), n.contentClasses.reveal.push("has-reveal-" + e);
                        }), c.Triggers.init(s.a), u.MediaQuery._init(), this._init(), this._events(), l.Keyboard.register("OffCanvas", {
                            ESCAPE: "close"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t = this.$element.attr("id");
                        this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = s()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")), this.$triggers = s()(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t), this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, !0 === this.options.contentOverlay && (t = document.createElement("div"), e = "fixed" === s()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute", t.setAttribute("class", "js-off-canvas-overlay " + e), this.$overlay = s()(t), "is-overlay-fixed" == e ? s()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay));
                        var e = new RegExp(Object(a.RegExpEscape)(this.options.revealClass) + "([^\\s]+)", "g").exec(this.$element[0].className);
                        e && (this.options.isRevealed = !0, this.options.revealOn = this.options.revealOn || e[1]), !0 === this.options.isRevealed && this.options.revealOn && (this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)), this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), this.$sticky = this.$content.find("[data-off-canvas-sticky]"), 0 < this.$sticky.length && "push" === this.options.transition && (this.options.contentScroll = !1);
                        e = this.$element.attr("class").match(/\bin-canvas-for-(\w+)/);
                        e && 2 === e.length ? this.options.inCanvasOn = e[1] : this.options.inCanvasOn && this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn)), this.options.inCanvasOn && this._checkInCanvas(), this._removeContentClasses();
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var t = this;
                        this.$element.off(".zf.trigger .zf.offCanvas").on({
                            "open.zf.trigger": this.open.bind(this),
                            "close.zf.trigger": this.close.bind(this),
                            "toggle.zf.trigger": this.toggle.bind(this),
                            "keydown.zf.offCanvas": this._handleKeyboard.bind(this)
                        }), !0 === this.options.closeOnClick && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                            "click.zf.offCanvas": this.close.bind(this)
                        }), this.options.inCanvasOn && s()(window).on("changed.zf.mediaquery", function() {
                            t._checkInCanvas();
                        });
                    }
                }, {
                    key: "_setMQChecker",
                    value: function() {
                        var t = this;
                        this.onLoadListener = Object(a.onLoad)(s()(window), function() {
                            u.MediaQuery.atLeast(t.options.revealOn) && t.reveal(!0);
                        }), s()(window).on("changed.zf.mediaquery", function() {
                            u.MediaQuery.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1);
                        });
                    }
                }, {
                    key: "_checkInCanvas",
                    value: function() {
                        this.isInCanvas = u.MediaQuery.atLeast(this.options.inCanvasOn), !0 === this.isInCanvas && this.close();
                    }
                }, {
                    key: "_removeContentClasses",
                    value: function(t) {
                        "boolean" != typeof t ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === t && this.$content.removeClass("has-reveal-".concat(this.position));
                    }
                }, {
                    key: "_addContentClasses",
                    value: function(t) {
                        this._removeContentClasses(t), "boolean" != typeof t ? this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position)) : !0 === t && this.$content.addClass("has-reveal-".concat(this.position));
                    }
                }, {
                    key: "_fixStickyElements",
                    value: function() {
                        this.$sticky.each(function(t, e) {
                            var n = s()(e);
                            "fixed" === n.css("position") && (e = parseInt(n.css("top"), 10), n.data("offCanvasSticky", {
                                top: e
                            }), e = s()(document).scrollTop() + e, n.css({
                                top: "".concat(e, "px"),
                                width: "100%",
                                transition: "none"
                            }));
                        });
                    }
                }, {
                    key: "_unfixStickyElements",
                    value: function() {
                        this.$sticky.each(function(t, e) {
                            var n = s()(e),
                                e = n.data("offCanvasSticky");
                            "object" === f(e) && (n.css({
                                top: "".concat(e.top, "px"),
                                width: "",
                                transition: ""
                            }), n.data("offCanvasSticky", ""));
                        });
                    }
                }, {
                    key: "reveal",
                    value: function(t) {
                        t ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                            "open.zf.trigger": this.open.bind(this),
                            "toggle.zf.trigger": this.toggle.bind(this)
                        }), this.$element.addClass("is-closed")), this._addContentClasses(t);
                    }
                }, {
                    key: "_stopScrolling",
                    value: function() {
                        return !1;
                    }
                }, {
                    key: "_recordScrollable",
                    value: function(t) {
                        this.lastY = t.touches[0].pageY;
                    }
                }, {
                    key: "_preventDefaultAtEdges",
                    value: function(t) {
                        var e = t.data,
                            n = this.lastY - t.touches[0].pageY;
                        this.lastY = t.touches[0].pageY, e._canScroll(n, this) || t.preventDefault();
                    }
                }, {
                    key: "_scrollboxTouchMoved",
                    value: function(t) {
                        var e = t.data,
                            n = this.closest("[data-off-canvas], [data-off-canvas-scrollbox-outer]"),
                            i = this.lastY - t.touches[0].pageY;
                        n.lastY = this.lastY = t.touches[0].pageY, t.stopPropagation(), e._canScroll(i, this) || (e._canScroll(i, n) ? n.scrollTop += i : t.preventDefault());
                    }
                }, {
                    key: "_canScroll",
                    value: function(t, e) {
                        var n = 0 < e.scrollTop,
                            e = e.scrollTop < e.scrollHeight - e.clientHeight;
                        return t < 0 && n || 0 < t && e;
                    }
                }, {
                    key: "open",
                    value: function(t, e) {
                        var n, i = this;
                        this.$element.hasClass("is-open") || this.isRevealed || this.isInCanvas || (n = this, e && (this.$lastTrigger = e), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false"), this.$content.addClass("is-open-" + this.position), !1 === this.options.contentScroll && (s()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this, this._preventDefaultAtEdges), this.$element.on("touchstart", "[data-off-canvas-scrollbox]", this._recordScrollable), this.$element.on("touchmove", "[data-off-canvas-scrollbox]", this, this._scrollboxTouchMoved)), !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), !0 === this.options.autoFocus && this.$element.one(Object(a.transitionend)(this.$element), function() {
                            var t;
                            n.$element.hasClass("is-open") && ((t = n.$element.find("[data-autofocus]")).length ? t : n.$element.find("a, button")).eq(0).focus();
                        }), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), l.Keyboard.trapFocus(this.$element)), "push" === this.options.transition && this._fixStickyElements(), this._addContentClasses(), this.$element.trigger("opened.zf.offCanvas"), this.$element.one(Object(a.transitionend)(this.$element), function() {
                            i.$element.trigger("openedEnd.zf.offCanvas");
                        }));
                    }
                }, {
                    key: "close",
                    value: function() {
                        var t = this;
                        this.$element.hasClass("is-open") && !this.isRevealed && (this.$element.trigger("close.zf.offCanvas"), this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true"), this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), this.$element.one(Object(a.transitionend)(this.$element), function() {
                            t.$element.addClass("is-closed"), t._removeContentClasses(), "push" === t.options.transition && t._unfixStickyElements(), !1 === t.options.contentScroll && (s()("body").removeClass("is-off-canvas-open").off("touchmove", t._stopScrolling), t.$element.off("touchstart", t._recordScrollable), t.$element.off("touchmove", t._preventDefaultAtEdges), t.$element.off("touchstart", "[data-off-canvas-scrollbox]", t._recordScrollable), t.$element.off("touchmove", "[data-off-canvas-scrollbox]", t._scrollboxTouchMoved)), !0 === t.options.trapFocus && (t.$content.removeAttr("tabindex"), l.Keyboard.releaseFocus(t.$element)), t.$element.trigger("closed.zf.offCanvas");
                        }));
                    }
                }, {
                    key: "toggle",
                    value: function(t, e) {
                        this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e);
                    }
                }, {
                    key: "_handleKeyboard",
                    value: function(t) {
                        var e = this;
                        l.Keyboard.handleKey(t, "OffCanvas", {
                            close: function() {
                                return e.close(), e.$lastTrigger.focus(), !0;
                            },
                            handled: function() {
                                t.preventDefault();
                            }
                        });
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.close(), this.$element.off(".zf.trigger .zf.offCanvas"), this.$overlay.off(".zf.offCanvas"), this.onLoadListener && s()(window).off(this.onLoadListener);
                    }
                }]) && d(t.prototype, e), n && d(t, n), o;
            }();
            i.defaults = {
                closeOnClick: !0,
                contentOverlay: !0,
                contentId: null,
                nested: null,
                contentScroll: !0,
                transitionTime: null,
                transition: "push",
                forceTo: null,
                isRevealed: !1,
                revealOn: null,
                inCanvasOn: null,
                autoFocus: !0,
                revealClass: "reveal-for-",
                trapFocus: !1
            };
        },
        "./js/foundation.orbit.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Orbit", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.util.keyboard.js"),
                c = n("./js/foundation.util.motion.js"),
                a = n("./js/foundation.util.timer.js"),
                l = n("./js/foundation.util.imageLoader.js"),
                u = n("./js/foundation.core.utils.js"),
                f = n("./js/foundation.core.plugin.js"),
                d = n("./js/foundation.util.touch.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function m(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = g(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = g(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function g(t) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && p(t, e);
                }(o, f["Plugin"]);
                var t, e, n, i = m(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Orbit", d.Touch.init(s.a), this._init(), r.Keyboard.register("Orbit", {
                            ltr: {
                                ARROW_RIGHT: "next",
                                ARROW_LEFT: "previous"
                            },
                            rtl: {
                                ARROW_LEFT: "next",
                                ARROW_RIGHT: "previous"
                            }
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        this._reset(), this.$wrapper = this.$element.find(".".concat(this.options.containerClass)), this.$slides = this.$element.find(".".concat(this.options.slideClass));
                        var t = this.$element.find("img"),
                            e = this.$slides.filter(".is-active"),
                            n = this.$element[0].id || Object(u.GetYoDigits)(6, "orbit");
                        this.$element.attr({
                            "data-resize": n,
                            id: n
                        }), e.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), t.length ? Object(l.onImagesLoaded)(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && 1 < this.$slides.length && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0);
                    }
                }, {
                    key: "_loadBullets",
                    value: function() {
                        this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find("button");
                    }
                }, {
                    key: "geoSync",
                    value: function() {
                        var t = this;
                        this.timer = new a.Timer(this.$element, {
                            duration: this.options.timerDelay,
                            infinite: !1
                        }, function() {
                            t.changeSlide(!0);
                        }), this.timer.start();
                    }
                }, {
                    key: "_prepareForOrbit",
                    value: function() {
                        this._setWrapperHeight();
                    }
                }, {
                    key: "_setWrapperHeight",
                    value: function(t) {
                        var e, n = 0,
                            i = 0,
                            o = this;
                        this.$slides.each(function() {
                            e = this.getBoundingClientRect().height, s()(this).attr("data-slide", i), /mui/g.test(s()(this)[0].className) || o.$slides.filter(".is-active")[0] === o.$slides.eq(i)[0] || s()(this).css({
                                display: "none"
                            }), n = n < e ? e : n, i++;
                        }), i === this.$slides.length && (this.$wrapper.css({
                            height: n
                        }), t && t(n));
                    }
                }, {
                    key: "_setSlideHeight",
                    value: function(t) {
                        this.$slides.each(function() {
                            s()(this).css("max-height", t);
                        });
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var i = this;
                        this.$element.off(".resizeme.zf.trigger").on({
                            "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
                        }), 1 < this.$slides.length && (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(t) {
                            t.preventDefault(), i.changeSlide(!0);
                        }).on("swiperight.zf.orbit", function(t) {
                            t.preventDefault(), i.changeSlide(!1);
                        }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                            i.$element.data("clickedOn", !i.$element.data("clickedOn")), i.timer[i.$element.data("clickedOn") ? "pause" : "start"]();
                        }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                            i.timer.pause();
                        }).on("mouseleave.zf.orbit", function() {
                            i.$element.data("clickedOn") || i.timer.start();
                        })), this.options.navButtons && this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass)).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(t) {
                            t.preventDefault(), i.changeSlide(s()(this).hasClass(i.options.nextClass));
                        }), this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                            if (/is-active/g.test(this.className)) return !1;
                            var t = s()(this).data("slide"),
                                e = t > i.$slides.filter(".is-active").data("slide"),
                                n = i.$slides.eq(t);
                            i.changeSlide(e, n, t);
                        }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(t) {
                            r.Keyboard.handleKey(t, "Orbit", {
                                next: function() {
                                    i.changeSlide(!0);
                                },
                                previous: function() {
                                    i.changeSlide(!1);
                                },
                                handled: function() {
                                    s()(t.target).is(i.$bullets) && i.$bullets.filter(".is-active").focus();
                                }
                            });
                        }));
                    }
                }, {
                    key: "_reset",
                    value: function() {
                        void 0 !== this.$slides && 1 < this.$slides.length && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"), this.options.autoPlay && this.timer.restart(), this.$slides.each(function(t) {
                            s()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide();
                        }), this.$slides.first().addClass("is-active").show(), this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]), this.options.bullets && this._updateBullets(0));
                    }
                }, {
                    key: "changeSlide",
                    value: function(t, e, n) {
                        if (this.$slides) {
                            var i = this.$slides.filter(".is-active").eq(0);
                            if (/mui/g.test(i[0].className)) return !1;
                            var o = this.$slides.first(),
                                s = this.$slides.last(),
                                r = t ? "Right" : "Left",
                                a = t ? "Left" : "Right",
                                l = this,
                                u = e || (t ? !this.options.infiniteWrap || i.next(".".concat(this.options.slideClass)).length ? i.next(".".concat(this.options.slideClass)) : o : !this.options.infiniteWrap || i.prev(".".concat(this.options.slideClass)).length ? i.prev(".".concat(this.options.slideClass)) : s);
                            u.length && (this.$element.trigger("beforeslidechange.zf.orbit", [i, u]), this.options.bullets && (n = n || this.$slides.index(u), this._updateBullets(n)), this.options.useMUI && !this.$element.is(":hidden") ? (c.Motion.animateIn(u.addClass("is-active"), this.options["animInFrom".concat(r)], function() {
                                u.css({
                                    display: "block"
                                }).attr("aria-live", "polite");
                            }), c.Motion.animateOut(i.removeClass("is-active"), this.options["animOutTo".concat(a)], function() {
                                i.removeAttr("aria-live"), l.options.autoPlay && !l.timer.isPaused && l.timer.restart();
                            })) : (i.removeClass("is-active is-in").removeAttr("aria-live").hide(), u.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [u]));
                        }
                    }
                }, {
                    key: "_updateBullets",
                    value: function(t) {
                        var e = this.$bullets.filter(".is-active"),
                            n = this.$bullets.not(".is-active"),
                            i = this.$bullets.eq(t);
                        e.removeClass("is-active").blur(), i.addClass("is-active");
                        var o, t = e.children("[data-slide-active-label]").last();
                        t.length || (o = e.children("span"), n.toArray().map(function(t) {
                            return s()(t).children("span").length;
                        }).every(function(t) {
                            return t < o.length;
                        }) && (t = o.last()).attr("data-slide-active-label", "")), t.length && (t.detach(), i.append(t));
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide();
                    }
                }]) && h(t.prototype, e), n && h(t, n), o;
            }();
            i.defaults = {
                bullets: !0,
                navButtons: !0,
                animInFromRight: "slide-in-right",
                animOutToRight: "slide-out-right",
                animInFromLeft: "slide-in-left",
                animOutToLeft: "slide-out-left",
                autoPlay: !0,
                timerDelay: 5e3,
                infiniteWrap: !0,
                swipe: !0,
                pauseOnHover: !0,
                accessible: !0,
                containerClass: "orbit-container",
                slideClass: "orbit-slide",
                boxOfBullets: "orbit-bullets",
                nextClass: "orbit-next",
                prevClass: "orbit-previous",
                useMUI: !0
            };
        },
        "./js/foundation.positionable.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Positionable", function() {
                return i;
            });
            var r = n("./js/foundation.util.box.js"),
                s = n("./js/foundation.core.plugin.js"),
                a = n("./js/foundation.core.utils.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function u(t, e) {
                return (u = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function c(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = f(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = f(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function f(t) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var d = ["left", "right", "top", "bottom"],
                e = ["top", "bottom", "center"],
                n = ["left", "right", "center"],
                h = {
                    left: e,
                    right: e,
                    top: n,
                    bottom: n
                };

            function p(t, e) {
                t = e.indexOf(t);
                return t === e.length - 1 ? e[0] : e[t + 1];
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && u(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = c(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_init",
                    value: function() {
                        this.triedPositions = {}, this.position = "auto" === this.options.position ? this._getDefaultPosition() : this.options.position, this.alignment = "auto" === this.options.alignment ? this._getDefaultAlignment() : this.options.alignment, this.originalPosition = this.position, this.originalAlignment = this.alignment;
                    }
                }, {
                    key: "_getDefaultPosition",
                    value: function() {
                        return "bottom";
                    }
                }, {
                    key: "_getDefaultAlignment",
                    value: function() {
                        switch (this.position) {
                            case "bottom":
                            case "top":
                                return Object(a.rtl)() ? "right" : "left";
                            case "left":
                            case "right":
                                return "bottom";
                        }
                    }
                }, {
                    key: "_reposition",
                    value: function() {
                        this._alignmentsExhausted(this.position) ? (this.position = p(this.position, d), this.alignment = h[this.position][0]) : this._realign();
                    }
                }, {
                    key: "_realign",
                    value: function() {
                        this._addTriedPosition(this.position, this.alignment), this.alignment = p(this.alignment, h[this.position]);
                    }
                }, {
                    key: "_addTriedPosition",
                    value: function(t, e) {
                        this.triedPositions[t] = this.triedPositions[t] || [], this.triedPositions[t].push(e);
                    }
                }, {
                    key: "_positionsExhausted",
                    value: function() {
                        for (var t = !0, e = 0; e < d.length; e++) t = t && this._alignmentsExhausted(d[e]);
                        return t;
                    }
                }, {
                    key: "_alignmentsExhausted",
                    value: function(t) {
                        return this.triedPositions[t] && this.triedPositions[t].length === h[t].length;
                    }
                }, {
                    key: "_getVOffset",
                    value: function() {
                        return this.options.vOffset;
                    }
                }, {
                    key: "_getHOffset",
                    value: function() {
                        return this.options.hOffset;
                    }
                }, {
                    key: "_setPosition",
                    value: function(t, e, n) {
                        if ("false" === t.attr("aria-expanded")) return !1;
                        if (this.options.allowOverlap || (this.position = this.originalPosition, this.alignment = this.originalAlignment), e.offset(r.Box.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset())), !this.options.allowOverlap) {
                            for (var i = 1e8, o = {
                                    position: this.position,
                                    alignment: this.alignment
                                }; !this._positionsExhausted();) {
                                var s = r.Box.OverlapArea(e, n, !1, !1, this.options.allowBottomOverlap);
                                if (0 === s) return;
                                s < i && (i = s, o = {
                                    position: this.position,
                                    alignment: this.alignment
                                }), this._reposition(), e.offset(r.Box.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
                            }
                            this.position = o.position, this.alignment = o.alignment, e.offset(r.Box.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
                        }
                    }
                }]) && l(t.prototype, e), n && l(t, n), o;
            }();
            i.defaults = {
                position: "auto",
                alignment: "auto",
                allowOverlap: !1,
                allowBottomOverlap: !0,
                vOffset: 0,
                hOffset: 0
            };
        },
        "./js/foundation.responsiveAccordionTabs.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "ResponsiveAccordionTabs", function() {
                return m;
            });
            var e = n("jquery"),
                u = n.n(e),
                s = n("./js/foundation.util.mediaQuery.js"),
                c = n("./js/foundation.core.utils.js"),
                r = n("./js/foundation.core.plugin.js"),
                e = n("./js/foundation.accordion.js");

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function f(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = o(n);
                    return d(this, i ? (t = o(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function d(t, e) {
                if (e && ("object" === i(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return h(t);
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }

            function o(t) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var p = {
                    tabs: {
                        cssClass: "tabs",
                        plugin: n("./js/foundation.tabs.js").Tabs,
                        open: function(t, e) {
                            return t.selectTab(e);
                        },
                        close: null,
                        toggle: null
                    },
                    accordion: {
                        cssClass: "accordion",
                        plugin: e.Accordion,
                        open: function(t, e) {
                            return t.down(u()(e));
                        },
                        close: function(t, e) {
                            return t.up(u()(e));
                        },
                        toggle: function(t, e) {
                            return t.toggle(u()(e));
                        }
                    }
                },
                m = function() {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && l(t, e);
                    }(o, r["Plugin"]);
                    var t, e, n, i = f(o);

                    function o(t, e) {
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }(this, o), d(e = i.call(this, t, e), e.options.reflow && e.storezfData || h(e));
                    }
                    return t = o, (e = [{
                        key: "_setup",
                        value: function(t, e) {
                            this.$element = u()(t), this.$element.data("zfPluginBase", this), this.options = u.a.extend({}, o.defaults, this.$element.data(), e), this.rules = this.$element.data("responsive-accordion-tabs"), this.currentMq = null, this.currentRule = null, this.currentPlugin = null, this.className = "ResponsiveAccordionTabs", this.$element.attr("id") || this.$element.attr("id", Object(c.GetYoDigits)(6, "responsiveaccordiontabs")), this._init(), this._events();
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            if (s.MediaQuery._init(), "string" == typeof this.rules) {
                                for (var t = {}, e = this.rules.split(" "), n = 0; n < e.length; n++) {
                                    var i = e[n].split("-"),
                                        o = 1 < i.length ? i[0] : "small",
                                        i = 1 < i.length ? i[1] : i[0];
                                    null !== p[i] && (t[o] = p[i]);
                                }
                                this.rules = t;
                            }
                            this._getAllOptions(), u.a.isEmptyObject(this.rules) || this._checkMediaQueries();
                        }
                    }, {
                        key: "_getAllOptions",
                        value: function() {
                            for (var t in this.allOptions = {}, p)
                                if (p.hasOwnProperty(t)) {
                                    var e = p[t];
                                    try {
                                        var n, i, o = u()("<ul></ul>"),
                                            s = new e.plugin(o, this.options);
                                        for (n in s.options) s.options.hasOwnProperty(n) && "zfPlugin" !== n && (i = s.options[n], this.allOptions[n] = i);
                                        s.destroy();
                                    } catch (t) {
                                        console.warn("Warning: Problems getting Accordion/Tab options: ".concat(t));
                                    }
                                }
                        }
                    }, {
                        key: "_events",
                        value: function() {
                            this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this), u()(window).on("changed.zf.mediaquery", this._changedZfMediaQueryHandler);
                        }
                    }, {
                        key: "_checkMediaQueries",
                        value: function() {
                            var e, n = this;
                            u.a.each(this.rules, function(t) {
                                s.MediaQuery.atLeast(t) && (e = t);
                            }), e && (this.currentPlugin instanceof this.rules[e].plugin || (u.a.each(p, function(t, e) {
                                n.$element.removeClass(e.cssClass);
                            }), this.$element.addClass(this.rules[e].cssClass), this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData), this.currentPlugin.destroy()), this._handleMarkup(this.rules[e].cssClass), this.currentRule = this.rules[e], this.currentPlugin = new this.currentRule.plugin(this.$element, this.options), this.storezfData = this.currentPlugin.$element.data("zfPlugin")));
                        }
                    }, {
                        key: "_handleMarkup",
                        value: function(t) {
                            var e, s, r, a, l, n = this,
                                i = "accordion",
                                o = u()("[data-tabs-content=" + this.$element.attr("id") + "]");
                            (i = o.length ? "tabs" : i) !== t && (e = n.allOptions.linkClass || "tabs-title", s = n.allOptions.panelClass || "tabs-panel", this.$element.removeAttr("role"), r = this.$element.children("." + e + ",[data-accordion-item]").removeClass(e).removeClass("accordion-item").removeAttr("data-accordion-item"), a = r.children("a").removeClass("accordion-title"), "tabs" === i ? (o = o.children("." + s).removeClass(s).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected") : o = r.children("[data-tab-content]").removeClass("accordion-content"), o.css({
                                display: "",
                                visibility: ""
                            }), r.css({
                                display: "",
                                visibility: ""
                            }), "accordion" === t ? o.each(function(t, e) {
                                u()(e).appendTo(r.get(t)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                                    height: ""
                                }), u()("[data-tabs-content=" + n.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + n.$element.attr("id") + '"></div>').detach(), r.addClass("accordion-item").attr("data-accordion-item", ""), a.addClass("accordion-title");
                            }) : "tabs" === t && (l = u()("[data-tabs-content=" + n.$element.attr("id") + "]"), (t = u()("#tabs-placeholder-" + n.$element.attr("id"))).length ? (l = u()('<div class="tabs-content"></div>').insertAfter(t).attr("data-tabs-content", n.$element.attr("id")), t.remove()) : l = u()('<div class="tabs-content"></div>').insertAfter(n.$element).attr("data-tabs-content", n.$element.attr("id")), o.each(function(t, e) {
                                var n = u()(e).appendTo(l).addClass(s),
                                    i = a.get(t).hash.slice(1),
                                    o = u()(e).attr("id") || Object(c.GetYoDigits)(6, "accordion");
                                i !== o && ("" !== i ? u()(e).attr("id", i) : (i = o, u()(e).attr("id", i), u()(a.get(t)).attr("href", u()(a.get(t)).attr("href").replace("#", "") + "#" + i))), u()(r.get(t)).hasClass("is-active") && n.addClass("is-active");
                            }), r.addClass(e)));
                        }
                    }, {
                        key: "open",
                        value: function() {
                            var t;
                            if (this.currentRule && "function" == typeof this.currentRule.open) return (t = this.currentRule).open.apply(t, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
                        }
                    }, {
                        key: "close",
                        value: function() {
                            var t;
                            if (this.currentRule && "function" == typeof this.currentRule.close) return (t = this.currentRule).close.apply(t, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
                        }
                    }, {
                        key: "toggle",
                        value: function() {
                            var t;
                            if (this.currentRule && "function" == typeof this.currentRule.toggle) return (t = this.currentRule).toggle.apply(t, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
                        }
                    }, {
                        key: "_destroy",
                        value: function() {
                            this.currentPlugin && this.currentPlugin.destroy(), u()(window).off("changed.zf.mediaquery", this._changedZfMediaQueryHandler);
                        }
                    }]) && a(t.prototype, e), n && a(t, n), o;
                }();
            m.defaults = {};
        },
        "./js/foundation.responsiveMenu.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "ResponsiveMenu", function() {
                return p;
            });
            var i = n("jquery"),
                s = n.n(i),
                r = n("./js/foundation.util.mediaQuery.js"),
                a = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.core.plugin.js"),
                e = n("./js/foundation.dropdownMenu.js"),
                i = n("./js/foundation.drilldown.js"),
                n = n("./js/foundation.accordionMenu.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function f(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = d(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = d(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var h = {
                    dropdown: {
                        cssClass: "dropdown",
                        plugin: e.DropdownMenu
                    },
                    drilldown: {
                        cssClass: "drilldown",
                        plugin: i.Drilldown
                    },
                    accordion: {
                        cssClass: "accordion-menu",
                        plugin: n.AccordionMenu
                    }
                },
                p = function() {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && c(t, e);
                    }(o, l["Plugin"]);
                    var t, e, n, i = f(o);

                    function o() {
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }(this, o), i.apply(this, arguments);
                    }
                    return t = o, (e = [{
                        key: "_setup",
                        value: function(t) {
                            this.$element = s()(t), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveMenu", this._init(), this._events();
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            if (r.MediaQuery._init(), "string" == typeof this.rules) {
                                for (var t = {}, e = this.rules.split(" "), n = 0; n < e.length; n++) {
                                    var i = e[n].split("-"),
                                        o = 1 < i.length ? i[0] : "small",
                                        i = 1 < i.length ? i[1] : i[0];
                                    null !== h[i] && (t[o] = h[i]);
                                }
                                this.rules = t;
                            }
                            s.a.isEmptyObject(this.rules) || this._checkMediaQueries(), this.$element.attr("data-mutate", this.$element.attr("data-mutate") || Object(a.GetYoDigits)(6, "responsive-menu"));
                        }
                    }, {
                        key: "_events",
                        value: function() {
                            var t = this;
                            s()(window).on("changed.zf.mediaquery", function() {
                                t._checkMediaQueries();
                            });
                        }
                    }, {
                        key: "_checkMediaQueries",
                        value: function() {
                            var e, n = this;
                            s.a.each(this.rules, function(t) {
                                r.MediaQuery.atLeast(t) && (e = t);
                            }), e && (this.currentPlugin instanceof this.rules[e].plugin || (s.a.each(h, function(t, e) {
                                n.$element.removeClass(e.cssClass);
                            }), this.$element.addClass(this.rules[e].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[e].plugin(this.$element, {})));
                        }
                    }, {
                        key: "_destroy",
                        value: function() {
                            this.currentPlugin.destroy(), s()(window).off(".zf.ResponsiveMenu");
                        }
                    }]) && u(t.prototype, e), n && u(t, n), o;
                }();
            p.defaults = {};
        },
        "./js/foundation.responsiveToggle.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "ResponsiveToggle", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.util.mediaQuery.js"),
                a = n("./js/foundation.util.motion.js"),
                l = n("./js/foundation.core.plugin.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function f(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = d(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = d(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e);
                }(o, l["Plugin"]);
                var t, e, n, i = f(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = s()(t), this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.className = "ResponsiveToggle", this._init(), this._events();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        r.MediaQuery._init();
                        var t, e = this.$element.data("responsive-toggle");
                        e || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = s()("#".concat(e)), this.$toggler = this.$element.find("[data-toggle]").filter(function() {
                            var t = s()(this).data("toggle");
                            return t === e || "" === t;
                        }), this.options = s.a.extend({}, this.options, this.$targetMenu.data()), this.options.animate && (t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null), this._update();
                    }
                }, {
                    key: "_events",
                    value: function() {
                        this._updateMqHandler = this._update.bind(this), s()(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this));
                    }
                }, {
                    key: "_update",
                    value: function() {
                        r.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide());
                    }
                }, {
                    key: "toggleMenu",
                    value: function() {
                        var t = this;
                        r.MediaQuery.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? a.Motion.animateIn(this.$targetMenu, this.animationIn, function() {
                            t.$element.trigger("toggled.zf.responsiveToggle"), t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger");
                        }) : a.Motion.animateOut(this.$targetMenu, this.animationOut, function() {
                            t.$element.trigger("toggled.zf.responsiveToggle");
                        }) : (this.$targetMenu.toggle(0), this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"), this.$element.trigger("toggled.zf.responsiveToggle")));
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), s()(window).off("changed.zf.mediaquery", this._updateMqHandler);
                    }
                }]) && u(t.prototype, e), n && u(t, n), o;
            }();
            i.defaults = {
                hideFor: "medium",
                animate: !1
            };
        },
        "./js/foundation.reveal.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Reveal", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.core.plugin.js"),
                a = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.util.keyboard.js"),
                u = n("./js/foundation.util.mediaQuery.js"),
                c = n("./js/foundation.util.motion.js"),
                f = n("./js/foundation.util.triggers.js"),
                d = n("./js/foundation.util.touch.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function m(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = g(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = g(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function g(t) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && p(t, e);
                }(o, r["Plugin"]);
                var t, e, n, i = m(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Reveal", this._init(), d.Touch.init(s.a), f.Triggers.init(s.a), l.Keyboard.register("Reveal", {
                            ESCAPE: "close"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t = this;
                        u.MediaQuery._init(), this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                            mq: u.MediaQuery.current
                        }, this.$anchor = s()('[data-open="'.concat(this.id, '"]')).length ? s()('[data-open="'.concat(this.id, '"]')) : s()('[data-toggle="'.concat(this.id, '"]')), this.$anchor.attr({
                            "aria-controls": this.id,
                            "aria-haspopup": "dialog",
                            tabindex: 0
                        }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                            role: "dialog",
                            "aria-hidden": !0,
                            "data-yeti-box": this.id,
                            "data-resize": this.id
                        }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(s()(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#".concat(this.id) && (this.onLoadListener = Object(a.onLoad)(s()(window), function() {
                            return t.open();
                        }));
                    }
                }, {
                    key: "_makeOverlay",
                    value: function() {
                        var t = "";
                        return this.options.additionalOverlayClasses && (t = " " + this.options.additionalOverlayClasses), s()("<div></div>").addClass("reveal-overlay" + t).appendTo(this.options.appendTo);
                    }
                }, {
                    key: "_updatePosition",
                    value: function() {
                        var t = this.$element.outerWidth(),
                            e = s()(window).width(),
                            n = this.$element.outerHeight(),
                            i = s()(window).height(),
                            o = null,
                            t = "auto" === this.options.hOffset ? parseInt((e - t) / 2, 10) : parseInt(this.options.hOffset, 10);
                        "auto" === this.options.vOffset ? o = i < n ? parseInt(Math.min(100, i / 10), 10) : parseInt((i - n) / 4, 10) : null !== this.options.vOffset && (o = parseInt(this.options.vOffset, 10)), null !== o && this.$element.css({
                            top: o + "px"
                        }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                            left: t + "px"
                        }), this.$element.css({
                            margin: "0px"
                        }));
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var n = this,
                            i = this;
                        this.$element.on({
                            "open.zf.trigger": this.open.bind(this),
                            "close.zf.trigger": function(t, e) {
                                if (t.target === i.$element[0] || s()(t.target).parents("[data-closable]")[0] === e) return n.close.apply(n);
                            },
                            "toggle.zf.trigger": this.toggle.bind(this),
                            "resizeme.zf.trigger": function() {
                                i._updatePosition();
                            }
                        }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.dropdown tap.zf.dropdown", function(t) {
                            t.target !== i.$element[0] && !s.a.contains(i.$element[0], t.target) && s.a.contains(document, t.target) && i.close();
                        }), this.options.deepLink && s()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
                    }
                }, {
                    key: "_handleState",
                    value: function() {
                        window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open();
                    }
                }, {
                    key: "_disableScroll",
                    value: function(t) {
                        t = t || s()(window).scrollTop(), s()(document).height() > s()(window).height() && s()("html").css("top", -t);
                    }
                }, {
                    key: "_enableScroll",
                    value: function(t) {
                        t = t || parseInt(s()("html").css("top"), 10), s()(document).height() > s()(window).height() && (s()("html").css("top", ""), s()(window).scrollTop(-t));
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t = this,
                            e = "#".concat(this.id);
                        this.options.deepLink && window.location.hash !== e && (window.history.pushState ? this.options.updateHistory ? window.history.pushState({}, "", e) : window.history.replaceState({}, "", e) : window.location.hash = e), this.$activeAnchor = s()(document.activeElement).is(this.$anchor) ? s()(document.activeElement) : this.$anchor, this.isActive = !0, this.$element.css({
                            visibility: "hidden"
                        }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                            visibility: "hidden"
                        }).show(), this._updatePosition(), this.$element.hide().css({
                            visibility: ""
                        }), this.$overlay && (this.$overlay.css({
                            visibility: ""
                        }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), 0 === s()(".reveal:visible").length && this._disableScroll();
                        var n = this;
                        this.options.animationIn ? (this.options.overlay && c.Motion.animateIn(this.$overlay, "fade-in"), c.Motion.animateIn(this.$element, this.options.animationIn, function() {
                            t.$element && (t.focusableElements = l.Keyboard.findFocusable(t.$element), n.$element.attr({
                                "aria-hidden": !1,
                                tabindex: -1
                            }).focus(), n._addGlobalClasses(), l.Keyboard.trapFocus(n.$element));
                        })) : (this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay)), this.$element.attr({
                            "aria-hidden": !1,
                            tabindex: -1
                        }).focus(), l.Keyboard.trapFocus(this.$element), this._addGlobalClasses(), this._addGlobalListeners(), this.$element.trigger("open.zf.reveal");
                    }
                }, {
                    key: "_addGlobalClasses",
                    value: function() {
                        function t() {
                            s()("html").toggleClass("zf-has-scroll", !!(s()(document).height() > s()(window).height()));
                        }
                        this.$element.on("resizeme.zf.trigger.revealScrollbarListener", t), t(), s()("html").addClass("is-reveal-open");
                    }
                }, {
                    key: "_removeGlobalClasses",
                    value: function() {
                        this.$element.off("resizeme.zf.trigger.revealScrollbarListener"), s()("html").removeClass("is-reveal-open"), s()("html").removeClass("zf-has-scroll");
                    }
                }, {
                    key: "_addGlobalListeners",
                    value: function() {
                        var e = this;
                        this.$element && (this.focusableElements = l.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || s()("body").on("click.zf.dropdown tap.zf.dropdown", function(t) {
                            t.target !== e.$element[0] && !s.a.contains(e.$element[0], t.target) && s.a.contains(document, t.target) && e.close();
                        }), this.options.closeOnEsc && s()(window).on("keydown.zf.reveal", function(t) {
                            l.Keyboard.handleKey(t, "Reveal", {
                                close: function() {
                                    e.options.closeOnEsc && e.close();
                                }
                            });
                        }));
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (!this.isActive || !this.$element.is(":visible")) return !1;
                        var t, e = this;

                        function n() {
                            var t = parseInt(s()("html").css("top"), 10);
                            0 === s()(".reveal:visible").length && e._removeGlobalClasses(), l.Keyboard.releaseFocus(e.$element), e.$element.attr("aria-hidden", !0), 0 === s()(".reveal:visible").length && e._enableScroll(t), e.$element.trigger("closed.zf.reveal");
                        }
                        this.options.animationOut ? (this.options.overlay && c.Motion.animateOut(this.$overlay, "fade-out"), c.Motion.animateOut(this.$element, this.options.animationOut, n)) : (this.$element.hide(this.options.hideDelay), this.options.overlay ? this.$overlay.hide(0, n) : n()), this.options.closeOnEsc && s()(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && s()("body").off("click.zf.dropdown tap.zf.dropdown"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, e.options.deepLink && window.location.hash === "#".concat(this.id) && (window.history.replaceState ? (t = window.location.pathname + window.location.search, this.options.updateHistory ? window.history.pushState({}, "", t) : window.history.replaceState("", document.title, t)) : window.location.hash = ""), this.$activeAnchor.focus();
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.isActive ? this.close() : this.open();
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.options.overlay && (this.$element.appendTo(s()(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), s()(window).off(".zf.reveal:".concat(this.id)), this.onLoadListener && s()(window).off(this.onLoadListener), 0 === s()(".reveal:visible").length && this._removeGlobalClasses();
                    }
                }]) && h(t.prototype, e), n && h(t, n), o;
            }();
            i.defaults = {
                animationIn: "",
                animationOut: "",
                showDelay: 0,
                hideDelay: 0,
                closeOnClick: !0,
                closeOnEsc: !0,
                multipleOpened: !1,
                vOffset: "auto",
                hOffset: "auto",
                fullScreen: !1,
                overlay: !0,
                resetOnClose: !1,
                deepLink: !1,
                updateHistory: !1,
                appendTo: "body",
                additionalOverlayClasses: ""
            };
        },
        "./js/foundation.slider.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Slider", function() {
                return i;
            });
            var e = n("jquery"),
                u = n.n(e),
                r = n("./js/foundation.util.keyboard.js"),
                h = n("./js/foundation.util.motion.js"),
                c = n("./js/foundation.core.utils.js"),
                s = n("./js/foundation.core.plugin.js"),
                a = n("./js/foundation.util.touch.js"),
                l = n("./js/foundation.util.triggers.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function p(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = m(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = m(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = p(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = u.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Slider", this.initialized = !1, a.Touch.init(u.a), l.Triggers.init(u.a), this._init(), r.Keyboard.register("Slider", {
                            ltr: {
                                ARROW_RIGHT: "increase",
                                ARROW_UP: "increase",
                                ARROW_DOWN: "decrease",
                                ARROW_LEFT: "decrease",
                                SHIFT_ARROW_RIGHT: "increaseFast",
                                SHIFT_ARROW_UP: "increaseFast",
                                SHIFT_ARROW_DOWN: "decreaseFast",
                                SHIFT_ARROW_LEFT: "decreaseFast",
                                HOME: "min",
                                END: "max"
                            },
                            rtl: {
                                ARROW_LEFT: "increase",
                                ARROW_RIGHT: "decrease",
                                SHIFT_ARROW_LEFT: "increaseFast",
                                SHIFT_ARROW_RIGHT: "decreaseFast"
                            }
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : u()("#".concat(this.$handle.attr("aria-controls"))), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0), (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = u()().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = 1 < this.inputs.length ? this.inputs.eq(1) : u()("#".concat(this.$handle2.attr("aria-controls"))), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), this._setInitAttr(1)), this.setHandles(), this._events(), this.initialized = !0;
                    }
                }, {
                    key: "setHandles",
                    value: function() {
                        var t = this;
                        this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), function() {
                            t._setHandlePos(t.$handle2, t.inputs.eq(1).val());
                        }) : this._setHandlePos(this.$handle, this.inputs.eq(0).val());
                    }
                }, {
                    key: "_reflow",
                    value: function() {
                        this.setHandles();
                    }
                }, {
                    key: "_pctOfBar",
                    value: function(t) {
                        var e = (t - this.options.start) / (this.options.end - this.options.start);
                        switch (this.options.positionValueFunction) {
                            case "pow":
                                e = this._logTransform(e);
                                break;
                            case "log":
                                e = this._powTransform(e);
                        }
                        return e.toFixed(2);
                    }
                }, {
                    key: "_value",
                    value: function(t) {
                        switch (this.options.positionValueFunction) {
                            case "pow":
                                t = this._powTransform(t);
                                break;
                            case "log":
                                t = this._logTransform(t);
                        }
                        var e = this.options.vertical ? parseFloat(this.options.end) + t * (this.options.start - this.options.end) : (this.options.end - this.options.start) * t + parseFloat(this.options.start);
                        return e;
                    }
                }, {
                    key: "_logTransform",
                    value: function(t) {
                        return e = this.options.nonLinearBase, t = t * (this.options.nonLinearBase - 1) + 1, Math.log(t) / Math.log(e);
                        var e;
                    }
                }, {
                    key: "_powTransform",
                    value: function(t) {
                        return (Math.pow(this.options.nonLinearBase, t) - 1) / (this.options.nonLinearBase - 1);
                    }
                }, {
                    key: "_setHandlePos",
                    value: function(t, e, n) {
                        var i, o, s, r, a, l, u, c, f, d;
                        this.$element.hasClass(this.options.disabledClass) || ((e = parseFloat(e)) < this.options.start ? e = this.options.start : e > this.options.end && (e = this.options.end), (c = this.options.doubleSided) && (e = 0 === this.handles.index(t) ? (f = parseFloat(this.$handle2.attr("aria-valuenow"))) <= e ? f - this.options.step : e : e <= (r = parseFloat(this.$handle.attr("aria-valuenow"))) ? r + this.options.step : e), f = (i = this).options.vertical, o = f ? "height" : "width", s = f ? "top" : "left", r = t[0].getBoundingClientRect()[o], f = this.$element[0].getBoundingClientRect()[o], a = this._pctOfBar(e), l = ((f - r) * a / f * 100).toFixed(this.options.decimal), e = parseFloat(e.toFixed(this.options.decimal)), u = {}, this._setValues(t, e), c && (c = 0 === this.handles.index(t), f = Math.floor(r / f * 100), c ? (u[s] = "".concat(l, "%"), d = parseFloat(this.$handle2[0].style[s]) - l + f, n && "function" == typeof n && n()) : (n = parseFloat(this.$handle[0].style[s]), d = l - (isNaN(n) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : n) + f), u["min-".concat(o)] = "".concat(d, "%")), d = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime, Object(h.Move)(d, t, function() {
                            isNaN(l) ? t.css(s, "".concat(100 * a, "%")) : t.css(s, "".concat(l, "%")), i.options.doubleSided ? i.$fill.css(u) : i.$fill.css(o, "".concat(100 * a, "%"));
                        }), this.initialized && (this.$element.one("finished.zf.animate", function() {
                            i.$element.trigger("moved.zf.slider", [t]);
                        }), clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                            i.$element.trigger("changed.zf.slider", [t]);
                        }, i.options.changedDelay)));
                    }
                }, {
                    key: "_setInitAttr",
                    value: function(t) {
                        var e = 0 === t ? this.options.initialStart : this.options.initialEnd,
                            n = this.inputs.eq(t).attr("id") || Object(c.GetYoDigits)(6, "slider");
                        this.inputs.eq(t).attr({
                            id: n,
                            max: this.options.end,
                            min: this.options.start,
                            step: this.options.step
                        }), this.inputs.eq(t).val(e), this.handles.eq(t).attr({
                            role: "slider",
                            "aria-controls": n,
                            "aria-valuemax": this.options.end,
                            "aria-valuemin": this.options.start,
                            "aria-valuenow": e,
                            "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                            tabindex: 0
                        });
                    }
                }, {
                    key: "_setValues",
                    value: function(t, e) {
                        var n = this.options.doubleSided ? this.handles.index(t) : 0;
                        this.inputs.eq(n).val(e), t.attr("aria-valuenow", e);
                    }
                }, {
                    key: "_handleEvent",
                    value: function(t, e, n) {
                        var i, o, s, r, a, l;
                        n ? l = this._adjustValue(null, n) : (t.preventDefault(), i = (a = this.options.vertical) ? "height" : "width", o = a ? "top" : "left", s = a ? t.pageY : t.pageX, r = this.$element[0].getBoundingClientRect()[i], n = a ? u()(window).scrollTop() : u()(window).scrollLeft(), a = this.$element.offset()[o], t.clientY === t.pageY && (s += n), l = this._value((a = (a = s - a) < 0 ? 0 : r < a ? r : a) / r), Object(c.rtl)() && !this.options.vertical && (l = this.options.end - l), l = this._adjustValue(null, l), e = e || (g(this.$handle, o, a, i) <= g(this.$handle2, o, a, i) ? this.$handle : this.$handle2)), this._setHandlePos(e, l);
                    }
                }, {
                    key: "_adjustValue",
                    value: function(t, e) {
                        var n = this.options.step,
                            i = parseFloat(n / 2),
                            o = t ? parseFloat(t.attr("aria-valuenow")) : e,
                            t = 0 <= o ? o % n : n + o % n,
                            e = o - t;
                        return 0 === t ? o : o = e + i <= o ? e + n : e;
                    }
                }, {
                    key: "_events",
                    value: function() {
                        this._eventsForHandle(this.$handle), this.handles[1] && this._eventsForHandle(this.$handle2);
                    }
                }, {
                    key: "_eventsForHandle",
                    value: function(e) {
                        function n(t) {
                            var e = s.inputs.index(u()(this));
                            s._handleEvent(t, s.handles.eq(e), u()(this).val());
                        }
                        var i, o, s = this;
                        this.inputs.off("keyup.zf.slider").on("keyup.zf.slider", function(t) {
                            13 === t.keyCode && n.call(this, t);
                        }), this.inputs.off("change.zf.slider").on("change.zf.slider", n), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(t) {
                            return !s.$element.data("dragging") && void(u()(t.target).is("[data-slider-handle]") || (s.options.doubleSided ? s._handleEvent(t) : s._handleEvent(t, s.$handle)));
                        }), this.options.draggable && (this.handles.addTouch(), o = u()("body"), e.off("mousedown.zf.slider").on("mousedown.zf.slider", function(t) {
                            e.addClass("is-dragging"), s.$fill.addClass("is-dragging"), s.$element.data("dragging", !0), i = u()(t.currentTarget), o.on("mousemove.zf.slider", function(t) {
                                t.preventDefault(), s._handleEvent(t, i);
                            }).on("mouseup.zf.slider", function(t) {
                                s._handleEvent(t, i), e.removeClass("is-dragging"), s.$fill.removeClass("is-dragging"), s.$element.data("dragging", !1), o.off("mousemove.zf.slider mouseup.zf.slider");
                            });
                        }).on("selectstart.zf.slider touchmove.zf.slider", function(t) {
                            t.preventDefault();
                        })), e.off("keydown.zf.slider").on("keydown.zf.slider", function(t) {
                            var e, n = u()(this),
                                i = s.options.doubleSided ? s.handles.index(n) : 0,
                                o = parseFloat(s.inputs.eq(i).val());
                            r.Keyboard.handleKey(t, "Slider", {
                                decrease: function() {
                                    e = o - s.options.step;
                                },
                                increase: function() {
                                    e = o + s.options.step;
                                },
                                decreaseFast: function() {
                                    e = o - 10 * s.options.step;
                                },
                                increaseFast: function() {
                                    e = o + 10 * s.options.step;
                                },
                                min: function() {
                                    e = s.options.start;
                                },
                                max: function() {
                                    e = s.options.end;
                                },
                                handled: function() {
                                    t.preventDefault(), s._setHandlePos(n, e);
                                }
                            });
                        });
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), clearTimeout(this.timeout);
                    }
                }]) && f(t.prototype, e), n && f(t, n), o;
            }();

            function g(t, e, n, i) {
                return Math.abs(t.position()[e] + t[i]() / 2 - n);
            }
            i.defaults = {
                start: 0,
                end: 100,
                step: 1,
                initialStart: 0,
                initialEnd: 100,
                binding: !1,
                clickSelect: !0,
                vertical: !1,
                draggable: !0,
                disabled: !1,
                doubleSided: !1,
                decimal: 2,
                moveTime: 200,
                disabledClass: "disabled",
                invertVertical: !1,
                changedDelay: 500,
                nonLinearBase: 5,
                positionValueFunction: "linear"
            };
        },
        "./js/foundation.smoothScroll.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "SmoothScroll", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.core.utils.js"),
                a = n("./js/foundation.core.plugin.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function u(t, e) {
                return (u = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function c(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = f(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = f(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function f(t) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && u(t, e);
                }(o, a["Plugin"]);
                var t, e, n, i = c(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, n = [{
                    key: "scrollToLoc",
                    value: function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : o.defaults,
                            n = 2 < arguments.length ? arguments[2] : void 0,
                            t = s()(t);
                        if (!t.length) return !1;
                        t = Math.round(t.offset().top - e.threshold / 2 - e.offset);
                        s()("html, body").stop(!0).animate({
                            scrollTop: t
                        }, e.animationDuration, e.animationEasing, function() {
                            "function" == typeof n && n();
                        });
                    }
                }], (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.className = "SmoothScroll", this._init();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t = this.$element[0].id || Object(r.GetYoDigits)(6, "smooth-scroll");
                        this.$element.attr({
                            id: t
                        }), this._events();
                    }
                }, {
                    key: "_events",
                    value: function() {
                        this._linkClickListener = this._handleLinkClick.bind(this), this.$element.on("click.zf.smoothScroll", this._linkClickListener), this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener);
                    }
                }, {
                    key: "_handleLinkClick",
                    value: function(t) {
                        var e, n = this;
                        s()(t.currentTarget).is('a[href^="#"]') && (e = t.currentTarget.getAttribute("href"), this._inTransition = !0, o.scrollToLoc(e, this.options, function() {
                            n._inTransition = !1;
                        }), t.preventDefault());
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.off("click.zf.smoothScroll", this._linkClickListener), this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener);
                    }
                }]) && l(t.prototype, e), n && l(t, n), o;
            }();
            i.defaults = {
                animationDuration: 500,
                animationEasing: "linear",
                threshold: 50,
                offset: 0
            };
        },
        "./js/foundation.sticky.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Sticky", function() {
                return i;
            });
            var e = n("jquery"),
                a = n.n(e),
                s = n("./js/foundation.core.plugin.js"),
                r = n("./js/foundation.core.utils.js"),
                l = n("./js/foundation.util.mediaQuery.js"),
                u = n("./js/foundation.util.triggers.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function d(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = h(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = d(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = a.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Sticky", u.Triggers.init(a.a), this._init();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        l.MediaQuery._init();
                        var t = this.$element.parent("[data-sticky-container]"),
                            e = this.$element[0].id || Object(r.GetYoDigits)(6, "sticky"),
                            n = this;
                        t.length ? this.$container = t : (this.wasWrapped = !0, this.$element.wrap(this.options.container), this.$container = this.$element.parent()), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                            "data-resize": e,
                            "data-mutate": e
                        }), "" !== this.options.anchor && a()("#" + n.options.anchor).attr({
                            "data-mutate": e
                        }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, this.onLoadListener = Object(r.onLoad)(a()(window), function() {
                            n.containerHeight = "none" === n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height, n.$container.css("height", n.containerHeight), n.elemHeight = n.containerHeight, "" !== n.options.anchor ? n.$anchor = a()("#" + n.options.anchor) : n._parsePoints(), n._setSizes(function() {
                                var t = window.pageYOffset;
                                n._calc(!1, t), n.isStuck || n._removeSticky(!(t >= n.topPoint));
                            }), n._events(e.split("-").reverse().join("-"));
                        });
                    }
                }, {
                    key: "_parsePoints",
                    value: function() {
                        for (var t, e, n, i = ["" === this.options.topAnchor ? 1 : this.options.topAnchor, "" === this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor], o = {}, s = 0, r = i.length; s < r && i[s]; s++) "number" == typeof i[s] ? n = i[s] : (t = i[s].split(":"), n = (e = a()("#".concat(t[0]))).offset().top, t[1] && "bottom" === t[1].toLowerCase() && (n += e[0].getBoundingClientRect().height)), o[s] = n;
                        this.points = o;
                    }
                }, {
                    key: "_events",
                    value: function(t) {
                        var e = this,
                            n = this.scrollListener = "scroll.zf.".concat(t);
                        this.isOn || (this.canStick && (this.isOn = !0, a()(window).off(n).on(n, function() {
                            0 === e.scrollCount ? (e.scrollCount = e.options.checkEvery, e._setSizes(function() {
                                e._calc(!1, window.pageYOffset);
                            })) : (e.scrollCount--, e._calc(!1, window.pageYOffset));
                        })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                            e._eventsHandler(t);
                        }), this.$element.on("mutateme.zf.trigger", function() {
                            e._eventsHandler(t);
                        }), this.$anchor && this.$anchor.on("mutateme.zf.trigger", function() {
                            e._eventsHandler(t);
                        }));
                    }
                }, {
                    key: "_eventsHandler",
                    value: function(t) {
                        var e = this,
                            n = this.scrollListener = "scroll.zf.".concat(t);
                        e._setSizes(function() {
                            e._calc(!1), e.canStick ? e.isOn || e._events(t) : e.isOn && e._pauseListeners(n);
                        });
                    }
                }, {
                    key: "_pauseListeners",
                    value: function(t) {
                        this.isOn = !1, a()(window).off(t), this.$element.trigger("pause.zf.sticky");
                    }
                }, {
                    key: "_calc",
                    value: function(t, e) {
                        if (t && this._setSizes(), !this.canStick) return this.isStuck && this._removeSticky(!0), !1;
                        (e = e || window.pageYOffset) >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0);
                    }
                }, {
                    key: "_setSticky",
                    value: function() {
                        var t = this,
                            e = this.options.stickTo,
                            n = "top" === e ? "marginTop" : "marginBottom",
                            i = "top" === e ? "bottom" : "top",
                            o = {};
                        o[n] = "".concat(this.options[n], "em"), o[e] = 0, o[i] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-".concat(i)).addClass("is-stuck is-at-".concat(e)).css(o).trigger("sticky.zf.stuckto:".concat(e)), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                            t._setSizes();
                        });
                    }
                }, {
                    key: "_removeSticky",
                    value: function(t) {
                        var e = this.options.stickTo,
                            n = {},
                            i = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                            o = t ? "top" : "bottom";
                        n["top" === e ? "marginTop" : "marginBottom"] = 0, n.bottom = "auto", n.top = t ? 0 : i, this.isStuck = !1, this.$element.removeClass("is-stuck is-at-".concat(e)).addClass("is-anchored is-at-".concat(o)).css(n).trigger("sticky.zf.unstuckfrom:".concat(o));
                    }
                }, {
                    key: "_setSizes",
                    value: function(t) {
                        this.canStick = l.MediaQuery.is(this.options.stickyOn), this.canStick || t && "function" == typeof t && t();
                        var e, n = this.$container[0].getBoundingClientRect().width,
                            i = window.getComputedStyle(this.$container[0]),
                            o = parseInt(i["padding-left"], 10),
                            i = parseInt(i["padding-right"], 10);
                        this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                            "max-width": "".concat(n - o - i, "px")
                        }), !this.options.dynamicHeight && this.containerHeight || (e = this.$element[0].getBoundingClientRect().height || this.containerHeight, e = "none" === this.$element.css("display") ? 0 : e, this.$container.css("height", e), this.containerHeight = e), this.elemHeight = this.containerHeight, this.isStuck || this.$element.hasClass("is-at-bottom") && (e = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight, this.$element.css("top", e)), this._setBreakPoints(this.containerHeight, function() {
                            t && "function" == typeof t && t();
                        });
                    }
                }, {
                    key: "_setBreakPoints",
                    value: function(t, e) {
                        if (!this.canStick) {
                            if (!e || "function" != typeof e) return !1;
                            e();
                        }
                        var n = p(this.options.marginTop),
                            i = p(this.options.marginBottom),
                            o = this.points ? this.points[0] : this.$anchor.offset().top,
                            s = this.points ? this.points[1] : o + this.anchorHeight,
                            r = window.innerHeight;
                        "top" === this.options.stickTo ? (o -= n, s -= t + n) : "bottom" === this.options.stickTo && (o -= r - (t + i), s -= r - i), this.topPoint = o, this.bottomPoint = s, e && "function" == typeof e && e();
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this._removeSticky(!0), this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
                            height: "",
                            top: "",
                            bottom: "",
                            "max-width": ""
                        }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), this.scrollListener && a()(window).off(this.scrollListener), this.onLoadListener && a()(window).off(this.onLoadListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                            height: ""
                        });
                    }
                }]) && c(t.prototype, e), n && c(t, n), o;
            }();

            function p(t) {
                return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t;
            }
            i.defaults = {
                container: "<div data-sticky-container></div>",
                stickTo: "top",
                anchor: "",
                topAnchor: "",
                btmAnchor: "",
                marginTop: 1,
                marginBottom: 1,
                stickyOn: "medium",
                stickyClass: "sticky",
                containerClass: "sticky-container",
                dynamicHeight: !0,
                checkEvery: -1
            };
        },
        "./js/foundation.tabs.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Tabs", function() {
                return i;
            });
            var e = n("jquery"),
                a = n.n(e),
                s = n("./js/foundation.core.plugin.js"),
                l = n("./js/foundation.core.utils.js"),
                r = n("./js/foundation.util.keyboard.js"),
                u = n("./js/foundation.util.imageLoader.js");

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function h(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = o(n);
                    return function(t, e) {
                        if (e && ("object" === c(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = o(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function o(t) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e);
                }(o, s["Plugin"]);
                var t, e, n, i = h(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = a.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Tabs", this._init(), r.Keyboard.register("Tabs", {
                            ENTER: "open",
                            SPACE: "open",
                            ARROW_RIGHT: "next",
                            ARROW_UP: "previous",
                            ARROW_DOWN: "next",
                            ARROW_LEFT: "previous"
                        });
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t, i = this,
                            r = this;
                        this._isInitializing = !0, this.$element.attr({
                            role: "tablist"
                        }), this.$tabTitles = this.$element.find(".".concat(this.options.linkClass)), this.$tabContent = a()('[data-tabs-content="'.concat(this.$element[0].id, '"]')), this.$tabTitles.each(function() {
                            var t = a()(this),
                                e = t.find("a"),
                                n = t.hasClass("".concat(r.options.linkActiveClass)),
                                i = e.attr("data-tabs-target") || e[0].hash.slice(1),
                                o = e[0].id || "".concat(i, "-label"),
                                s = a()("#".concat(i));
                            t.attr({
                                role: "presentation"
                            }), e.attr({
                                role: "tab",
                                "aria-controls": i,
                                "aria-selected": n,
                                id: o,
                                tabindex: n ? "0" : "-1"
                            }), s.attr({
                                role: "tabpanel",
                                "aria-labelledby": o
                            }), n && (r._initialAnchor = "#".concat(i)), n || s.attr("aria-hidden", "true"), n && r.options.autoFocus && (r.onLoadListener = Object(l.onLoad)(a()(window), function() {
                                a()("html, body").animate({
                                    scrollTop: t.offset().top
                                }, r.options.deepLinkSmudgeDelay, function() {
                                    e.focus();
                                });
                            }));
                        }), this.options.matchHeight && ((t = this.$tabContent.find("img")).length ? Object(u.onImagesLoaded)(t, this._setHeight.bind(this)) : this._setHeight()), this._checkDeepLink = function() {
                            var t = window.location.hash;
                            if (!t.length) {
                                if (i._isInitializing) return;
                                i._initialAnchor && (t = i._initialAnchor);
                            }
                            var e = 0 <= t.indexOf("#") ? t.slice(1) : t,
                                n = e && a()("#".concat(e)),
                                t = t && i.$element.find('[href$="'.concat(t, '"],[data-tabs-target="').concat(e, '"]')).first();
                            !n.length || !t.length || (n && n.length && t && t.length ? i.selectTab(n, !0) : i._collapse(), i.options.deepLinkSmudge && (e = i.$element.offset(), a()("html, body").animate({
                                scrollTop: e.top - i.options.deepLinkSmudgeOffset
                            }, i.options.deepLinkSmudgeDelay)), i.$element.trigger("deeplink.zf.tabs", [t, n]));
                        }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1;
                    }
                }, {
                    key: "_events",
                    value: function() {
                        this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), a()(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && a()(window).on("hashchange", this._checkDeepLink);
                    }
                }, {
                    key: "_addClickHandler",
                    value: function() {
                        var e = this;
                        this.$element.off("click.zf.tabs").on("click.zf.tabs", ".".concat(this.options.linkClass), function(t) {
                            t.preventDefault(), e._handleTabChange(a()(this));
                        });
                    }
                }, {
                    key: "_addKeyHandler",
                    value: function() {
                        var s = this;
                        this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(t) {
                            var e, n, i, o;
                            9 !== t.which && (e = a()(this), (n = e.parent("ul").children("li")).each(function(t) {
                                a()(this).is(e) && (o = s.options.wrapOnKeys ? (i = 0 === t ? n.last() : n.eq(t - 1), t === n.length - 1 ? n.first() : n.eq(t + 1)) : (i = n.eq(Math.max(0, t - 1)), n.eq(Math.min(t + 1, n.length - 1))));
                            }), r.Keyboard.handleKey(t, "Tabs", {
                                open: function() {
                                    e.find('[role="tab"]').focus(), s._handleTabChange(e);
                                },
                                previous: function() {
                                    i.find('[role="tab"]').focus(), s._handleTabChange(i);
                                },
                                next: function() {
                                    o.find('[role="tab"]').focus(), s._handleTabChange(o);
                                },
                                handled: function() {
                                    t.preventDefault();
                                }
                            }));
                        });
                    }
                }, {
                    key: "_handleTabChange",
                    value: function(t, e) {
                        var n, i, o;
                        t.hasClass("".concat(this.options.linkActiveClass)) ? this.options.activeCollapse && this._collapse() : (n = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)), i = (i = (o = t.find('[role="tab"]')).attr("data-tabs-target")) && i.length ? "#".concat(i) : o[0].hash, o = this.$tabContent.find(i), this._collapseTab(n), this._openTab(t), this.options.deepLink && !e && (this.options.updateHistory ? history.pushState({}, "", i) : history.replaceState({}, "", i)), this.$element.trigger("change.zf.tabs", [t, o]), o.find("[data-mutate]").trigger("mutateme.zf.trigger"));
                    }
                }, {
                    key: "_openTab",
                    value: function(t) {
                        var e = t.find('[role="tab"]'),
                            n = e.attr("data-tabs-target") || e[0].hash.slice(1),
                            n = this.$tabContent.find("#".concat(n));
                        t.addClass("".concat(this.options.linkActiveClass)), e.attr({
                            "aria-selected": "true",
                            tabindex: "0"
                        }), n.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden");
                    }
                }, {
                    key: "_collapseTab",
                    value: function(t) {
                        t = t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
                            "aria-selected": "false",
                            tabindex: -1
                        });
                        a()("#".concat(t.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({
                            "aria-hidden": "true"
                        });
                    }
                }, {
                    key: "_collapse",
                    value: function() {
                        var t = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));
                        t.length && (this._collapseTab(t), this.$element.trigger("collapse.zf.tabs", [t]));
                    }
                }, {
                    key: "selectTab",
                    value: function(t, e) {
                        var n, t = "object" === c(t) ? t[0].id : t;
                        t.indexOf("#") < 0 ? n = "#".concat(t) : t = (n = t).slice(1);
                        t = this.$tabTitles.has('[href$="'.concat(n, '"],[data-tabs-target="').concat(t, '"]')).first();
                        this._handleTabChange(t, e);
                    }
                }, {
                    key: "_setHeight",
                    value: function() {
                        var i = 0,
                            o = this;
                        this.$tabContent && this.$tabContent.find(".".concat(this.options.panelClass)).css("min-height", "").each(function() {
                            var t = a()(this),
                                e = t.hasClass("".concat(o.options.panelActiveClass));
                            e || t.css({
                                visibility: "hidden",
                                display: "block"
                            });
                            var n = this.getBoundingClientRect().height;
                            e || t.css({
                                visibility: "",
                                display: ""
                            }), i = i < n ? n : i;
                        }).css("min-height", "".concat(i, "px"));
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(), this.options.matchHeight && null != this._setHeightMqHandler && a()(window).off("changed.zf.mediaquery", this._setHeightMqHandler), this.options.deepLink && a()(window).off("hashchange", this._checkDeepLink), this.onLoadListener && a()(window).off(this.onLoadListener);
                    }
                }]) && f(t.prototype, e), n && f(t, n), o;
            }();
            i.defaults = {
                deepLink: !1,
                deepLinkSmudge: !1,
                deepLinkSmudgeDelay: 300,
                deepLinkSmudgeOffset: 0,
                updateHistory: !1,
                autoFocus: !1,
                wrapOnKeys: !0,
                matchHeight: !1,
                activeCollapse: !1,
                linkClass: "tabs-title",
                linkActiveClass: "is-active",
                panelClass: "tabs-panel",
                panelActiveClass: "is-active"
            };
        },
        "./js/foundation.toggler.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Toggler", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.util.motion.js"),
                a = n("./js/foundation.core.plugin.js"),
                l = n("./js/foundation.core.utils.js"),
                u = n("./js/foundation.util.triggers.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function d(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = h(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e);
                }(o, a["Plugin"]);
                var t, e, n, i = d(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = s.a.extend({}, o.defaults, t.data(), e), this.className = "", this.className = "Toggler", u.Triggers.init(s.a), this._init(), this._events();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var t, i = this.$element[0].id,
                            e = s()('[data-open~="'.concat(i, '"], [data-close~="').concat(i, '"], [data-toggle~="').concat(i, '"]'));
                        if (this.options.animate) t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null, e.attr("aria-expanded", !this.$element.is(":hidden"));
                        else {
                            if ("string" != typeof(t = this.options.toggler) || !t.length) throw new Error("The 'toggler' option containing the target class is required, got \"".concat(t, '"'));
                            this.className = "." === t[0] ? t.slice(1) : t, e.attr("aria-expanded", this.$element.hasClass(this.className));
                        }
                        e.each(function(t, e) {
                            var n = s()(e),
                                e = n.attr("aria-controls") || "";
                            new RegExp("\\b".concat(Object(l.RegExpEscape)(i), "\\b")).test(e) || n.attr("aria-controls", e ? "".concat(e, " ").concat(i) : i);
                        });
                    }
                }, {
                    key: "_events",
                    value: function() {
                        this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this));
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
                    }
                }, {
                    key: "_toggleClass",
                    value: function() {
                        this.$element.toggleClass(this.className);
                        var t = this.$element.hasClass(this.className);
                        t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(t), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger");
                    }
                }, {
                    key: "_toggleAnimate",
                    value: function() {
                        var t = this;
                        this.$element.is(":hidden") ? r.Motion.animateIn(this.$element, this.animationIn, function() {
                            t._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger");
                        }) : r.Motion.animateOut(this.$element, this.animationOut, function() {
                            t._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger");
                        });
                    }
                }, {
                    key: "_updateARIA",
                    value: function(t) {
                        var e = this.$element[0].id;
                        s()('[data-open="'.concat(e, '"], [data-close="').concat(e, '"], [data-toggle="').concat(e, '"]')).attr({
                            "aria-expanded": !!t
                        });
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.off(".zf.toggler");
                    }
                }]) && c(t.prototype, e), n && c(t, n), o;
            }();
            i.defaults = {
                toggler: void 0,
                animate: !1
            };
        },
        "./js/foundation.tooltip.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Tooltip", function() {
                return i;
            });
            var e = n("jquery"),
                s = n.n(e),
                r = n("./js/foundation.core.utils.js"),
                a = n("./js/foundation.util.mediaQuery.js"),
                l = n("./js/foundation.util.triggers.js"),
                u = n("./js/foundation.positionable.js");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }

            function f(t, e, n) {
                return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    t = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
                        return t;
                    }(t, e);
                    if (t) {
                        e = Object.getOwnPropertyDescriptor(t, e);
                        return e.get ? e.get.call(n) : e.value;
                    }
                })(t, e, n || t);
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }

            function h(n) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
                return function() {
                    var t, e = p(n);
                    return function(t, e) {
                        if (e && ("object" === o(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");;
                        return function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(t);
                    }(this, i ? (t = p(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
                };
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            var i = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e);
                }(o, u["Positionable"]);
                var t, e, n, i = h(o);

                function o() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), i.apply(this, arguments);
                }
                return t = o, (e = [{
                    key: "_setup",
                    value: function(t, e) {
                        this.$element = t, this.options = s.a.extend({}, o.defaults, this.$element.data(), e), this.className = "Tooltip", this.isActive = !1, this.isClick = !1, l.Triggers.init(s.a), this._init();
                    }
                }, {
                    key: "_init",
                    value: function() {
                        a.MediaQuery._init();
                        var t = this.$element.attr("aria-describedby") || Object(r.GetYoDigits)(6, "tooltip");
                        this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? s()(this.options.template) : this._buildTemplate(t), (this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText) : this.template.appendTo(document.body).text(this.options.tipText)).hide(), this.$element.attr({
                            title: "",
                            "aria-describedby": t,
                            "data-yeti-box": t,
                            "data-toggle": t,
                            "data-resize": t
                        }).addClass(this.options.triggerClass), f(p(o.prototype), "_init", this).call(this), this._events();
                    }
                }, {
                    key: "_getDefaultPosition",
                    value: function() {
                        var t = this.$element[0].className,
                            t = (t = this.$element[0] instanceof SVGElement ? t.baseVal : t).match(/\b(top|left|right|bottom)\b/g);
                        return t ? t[0] : "top";
                    }
                }, {
                    key: "_getDefaultAlignment",
                    value: function() {
                        return "center";
                    }
                }, {
                    key: "_getHOffset",
                    value: function() {
                        return "left" === this.position || "right" === this.position ? this.options.hOffset + this.options.tooltipWidth : this.options.hOffset;
                    }
                }, {
                    key: "_getVOffset",
                    value: function() {
                        return "top" === this.position || "bottom" === this.position ? this.options.vOffset + this.options.tooltipHeight : this.options.vOffset;
                    }
                }, {
                    key: "_buildTemplate",
                    value: function(t) {
                        var e = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
                        return s()("<div></div>").addClass(e).attr({
                            role: "tooltip",
                            "aria-hidden": !0,
                            "data-is-active": !1,
                            "data-is-focus": !1,
                            id: t
                        });
                    }
                }, {
                    key: "_setPosition",
                    value: function() {
                        f(p(o.prototype), "_setPosition", this).call(this, this.$element, this.template);
                    }
                }, {
                    key: "show",
                    value: function() {
                        if ("all" !== this.options.showOn && !a.MediaQuery.is(this.options.showOn)) return !1;
                        this.template.css("visibility", "hidden").show(), this._setPosition(), this.template.removeClass("top bottom left right").addClass(this.position), this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                            "data-is-active": !0,
                            "aria-hidden": !1
                        }), this.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip");
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var t = this;
                        this.template.stop().attr({
                            "aria-hidden": !0,
                            "data-is-active": !1
                        }).fadeOut(this.options.fadeOutDuration, function() {
                            t.isActive = !1, t.isClick = !1;
                        }), this.$element.trigger("hide.zf.tooltip");
                    }
                }, {
                    key: "_events",
                    value: function() {
                        var t = this,
                            e = "ontouchstart" in window || void 0 !== window.ontouchstart,
                            n = !1;
                        e && this.options.disableForTouch || (this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function() {
                            t.isActive || (t.timeout = setTimeout(function() {
                                t.show();
                            }, t.options.hoverDelay));
                        }).on("mouseleave.zf.tooltip", Object(r.ignoreMousedisappear)(function() {
                            clearTimeout(t.timeout), n && (!t.isClick || t.options.clickOpen) || t.hide();
                        })), e && this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function() {
                            t.isActive ? t.hide() : t.show();
                        }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function() {
                            t.isClick || (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show());
                        }) : this.$element.on("mousedown.zf.tooltip", function() {
                            t.isClick = !0;
                        }), this.$element.on({
                            "close.zf.trigger": this.hide.bind(this)
                        }), this.$element.on("focus.zf.tooltip", function() {
                            return n = !0, t.isClick ? (t.options.clickOpen || (n = !1), !1) : void t.show();
                        }).on("focusout.zf.tooltip", function() {
                            n = !1, t.isClick = !1, t.hide();
                        }).on("resizeme.zf.trigger", function() {
                            t.isActive && t._setPosition();
                        }));
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.isActive ? this.hide() : this.show();
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"), this.template.remove();
                    }
                }]) && c(t.prototype, e), n && c(t, n), o;
            }();
            i.defaults = {
                hoverDelay: 200,
                fadeInDuration: 150,
                fadeOutDuration: 150,
                disableHover: !1,
                disableForTouch: !1,
                templateClasses: "",
                tooltipClass: "tooltip",
                triggerClass: "has-tip",
                showOn: "small",
                template: "",
                tipText: "",
                touchCloseText: "Tap to close.",
                clickOpen: !0,
                position: "auto",
                alignment: "auto",
                allowOverlap: !1,
                allowBottomOverlap: !1,
                vOffset: 0,
                hOffset: 0,
                tooltipHeight: 14,
                tooltipWidth: 12,
                allowHtml: !1
            };
        },
        "./js/foundation.util.box.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Box", function() {
                return i;
            });
            var i = {
                ImNotTouchingYou: function(t, e, n, i, o) {
                    return 0 === s(t, e, n, i, o);
                },
                OverlapArea: s,
                GetDimensions: f,
                GetExplicitOffsets: function(t, e, n, i, o, s, r) {
                    var a, l, u = f(t),
                        c = e ? f(e) : null;
                    if (null !== c) {
                        switch (n) {
                            case "top":
                                a = c.offset.top - (u.height + o);
                                break;
                            case "bottom":
                                a = c.offset.top + c.height + o;
                                break;
                            case "left":
                                l = c.offset.left - (u.width + s);
                                break;
                            case "right":
                                l = c.offset.left + c.width + s;
                        }
                        switch (n) {
                            case "top":
                            case "bottom":
                                switch (i) {
                                    case "left":
                                        l = c.offset.left + s;
                                        break;
                                    case "right":
                                        l = c.offset.left - u.width + c.width - s;
                                        break;
                                    case "center":
                                        l = r ? s : c.offset.left + c.width / 2 - u.width / 2 + s;
                                }
                                break;
                            case "right":
                            case "left":
                                switch (i) {
                                    case "bottom":
                                        a = c.offset.top - o + c.height - u.height;
                                        break;
                                    case "top":
                                        a = c.offset.top + o;
                                        break;
                                    case "center":
                                        a = c.offset.top + o + c.height / 2 - u.height / 2;
                                }
                        }
                    }
                    return {
                        top: a,
                        left: l
                    };
                }
            };

            function s(t, e, n, i, o) {
                var s, r, a, t = f(t);
                return t = e ? (s = (e = f(e)).height + e.offset.top - (t.offset.top + t.height), r = t.offset.top - e.offset.top, a = t.offset.left - e.offset.left, e.width + e.offset.left - (t.offset.left + t.width)) : (s = t.windowDims.height + t.windowDims.offset.top - (t.offset.top + t.height), r = t.offset.top - t.windowDims.offset.top, a = t.offset.left - t.windowDims.offset.left, t.windowDims.width - (t.offset.left + t.width)), s = o ? 0 : Math.min(s, 0), r = Math.min(r, 0), a = Math.min(a, 0), t = Math.min(t, 0), n ? a + t : i ? r + s : Math.sqrt(r * r + s * s + a * a + t * t);
            }

            function f(t) {
                if ((t = t.length ? t[0] : t) === window || t === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
                var e = t.getBoundingClientRect(),
                    n = t.parentNode.getBoundingClientRect(),
                    i = document.body.getBoundingClientRect(),
                    o = window.pageYOffset,
                    t = window.pageXOffset;
                return {
                    width: e.width,
                    height: e.height,
                    offset: {
                        top: e.top + o,
                        left: e.left + t
                    },
                    parentDims: {
                        width: n.width,
                        height: n.height,
                        offset: {
                            top: n.top + o,
                            left: n.left + t
                        }
                    },
                    windowDims: {
                        width: i.width,
                        height: i.height,
                        offset: {
                            top: o,
                            left: t
                        }
                    }
                };
            }
        },
        "./js/foundation.util.imageLoader.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "onImagesLoaded", function() {
                return i;
            });
            var e = n("jquery"),
                o = n.n(e);

            function i(t, e) {
                var n = t.length;

                function i() {
                    0 === --n && e();
                }
                0 === n && e(), t.each(function() {
                    var t, e;
                    this.complete && void 0 !== this.naturalWidth ? i() : (t = new Image(), e = "load.zf.images error.zf.images", o()(t).one(e, function t() {
                        o()(this).off(e, t), i();
                    }), t.src = o()(this).attr("src"));
                });
            }
        },
        "./js/foundation.util.keyboard.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Keyboard", function() {
                return u;
            });
            var e = n("jquery"),
                o = n.n(e),
                s = n("./js/foundation.core.utils.js"),
                i = {
                    9: "TAB",
                    13: "ENTER",
                    27: "ESCAPE",
                    32: "SPACE",
                    35: "END",
                    36: "HOME",
                    37: "ARROW_LEFT",
                    38: "ARROW_UP",
                    39: "ARROW_RIGHT",
                    40: "ARROW_DOWN"
                },
                r = {};

            function a(t) {
                return !!t && t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                    return !(!o()(this).is(":visible") || o()(this).attr("tabindex") < 0);
                }).sort(function(t, e) {
                    if (o()(t).attr("tabindex") === o()(e).attr("tabindex")) return 0;
                    var n = parseInt(o()(t).attr("tabindex"), 10),
                        i = parseInt(o()(e).attr("tabindex"), 10);
                    return void 0 === o()(t).attr("tabindex") && 0 < i ? 1 : void 0 === o()(e).attr("tabindex") && 0 < n ? -1 : 0 === n && 0 < i ? 1 : 0 === i && 0 < n || n < i ? -1 : i < n ? 1 : void 0;
                });
            }

            function l(t) {
                var e = (e = i[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase()).replace(/\W+/, "");
                return t.shiftKey && (e = "SHIFT_".concat(e)), t.ctrlKey && (e = "CTRL_".concat(e)), e = (e = t.altKey ? "ALT_".concat(e) : e).replace(/_$/, "");
            }
            var u = {
                keys: function(t) {
                    var e, n = {};
                    for (e in t) t.hasOwnProperty(e) && (n[t[e]] = t[e]);
                    return n;
                }(i),
                parseKey: l,
                handleKey: function(t, e, n) {
                    var i = r[e],
                        e = this.parseKey(t);
                    if (!i) return console.warn("Component not defined!");
                    !0 !== t.zfIsKeyHandled && ((e = n[(void 0 === i.ltr ? i : Object(s.rtl)() ? o.a.extend({}, i.ltr, i.rtl) : o.a.extend({}, i.rtl, i.ltr))[e]]) && "function" == typeof e ? (e = e.apply(), t.zfIsKeyHandled = !0, !n.handled && "function" != typeof n.handled || n.handled(e)) : !n.unhandled && "function" != typeof n.unhandled || n.unhandled());
                },
                findFocusable: a,
                register: function(t, e) {
                    r[t] = e;
                },
                trapFocus: function(t) {
                    var e = a(t),
                        n = e.eq(0),
                        i = e.eq(-1);
                    t.on("keydown.zf.trapfocus", function(t) {
                        t.target === i[0] && "TAB" === l(t) ? (t.preventDefault(), n.focus()) : t.target === n[0] && "SHIFT_TAB" === l(t) && (t.preventDefault(), i.focus());
                    });
                },
                releaseFocus: function(t) {
                    t.off("keydown.zf.trapfocus");
                }
            };
        },
        "./js/foundation.util.mediaQuery.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "MediaQuery", function() {
                return c;
            });
            var i, o, s, e = n("jquery"),
                r = n.n(e);

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, o, s = [],
                            r = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(r = (i = n.next()).done) && (s.push(i.value), !e || s.length !== e); r = !0);
                        } catch (t) {
                            a = !0, o = t;
                        } finally {
                            try {
                                r || null == n.return || n.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return s;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            window.matchMedia || (window.matchMedia = ((s = window.styleMedia || window.media) || (i = document.createElement("style"), e = document.getElementsByTagName("script")[0], o = null, i.type = "text/css", i.id = "matchmediajs-test", e ? e.parentNode.insertBefore(i, e) : document.head.appendChild(i), o = "getComputedStyle" in window && window.getComputedStyle(i, null) || i.currentStyle, s = {
                matchMedium: function(t) {
                    t = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return i.styleSheet ? i.styleSheet.cssText = t : i.textContent = t, "1px" === o.width;
                }
            }), function(t) {
                return {
                    matches: s.matchMedium(t || "all"),
                    media: t || "all"
                };
            }));
            var c = {
                queries: [],
                current: "",
                _init: function() {
                    if (!0 === this.isInitialized) return this;
                    this.isInitialized = !0;
                    r()("meta.foundation-mq").length || r()('<meta class="foundation-mq" name="foundation-mq" content>').appendTo(document.head);
                    var t, e, n, i = r()(".foundation-mq").css("font-family");
                    for (n in e = {}, t = "string" == typeof(i = i) && (i = i.trim().slice(1, -1)) ? e = i.split("&").reduce(function(t, e) {
                            var n = e.replace(/\+/g, " ").split("="),
                                e = n[0],
                                n = n[1],
                                e = decodeURIComponent(e),
                                n = void 0 === n ? null : decodeURIComponent(n);
                            return t.hasOwnProperty(e) ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [t[e], n] : t[e] = n, t;
                        }, {}) : e, this.queries = [], t) t.hasOwnProperty(n) && this.queries.push({
                        name: n,
                        value: "only screen and (min-width: ".concat(t[n], ")")
                    });
                    this.current = this._getCurrentSize(), this._watcher();
                },
                _reInit: function() {
                    this.isInitialized = !1, this._init();
                },
                atLeast: function(t) {
                    t = this.get(t);
                    return !!t && window.matchMedia(t).matches;
                },
                only: function(t) {
                    return t === this._getCurrentSize();
                },
                upTo: function(t) {
                    t = this.next(t);
                    return !t || !this.atLeast(t);
                },
                is: function(t) {
                    var e = l(t.trim().split(" ").filter(function(t) {
                            return !!t.length;
                        }), 2),
                        n = e[0],
                        e = e[1],
                        e = void 0 === e ? "" : e;
                    if ("only" === e) return this.only(n);
                    if (!e || "up" === e) return this.atLeast(n);
                    if ("down" === e) return this.upTo(n);
                    throw new Error('\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like "<size> <modifier>", got "'.concat(t, '".\n    '));
                },
                get: function(t) {
                    for (var e in this.queries)
                        if (this.queries.hasOwnProperty(e)) {
                            e = this.queries[e];
                            if (t === e.name) return e.value;
                        }
                    return null;
                },
                next: function(e) {
                    var n = this,
                        t = this.queries.findIndex(function(t) {
                            return n._getQueryName(t) === e;
                        });
                    if (-1 === t) throw new Error('\n        Unknown breakpoint "'.concat(e, '" passed to MediaQuery.next().\n        Ensure it is present in your Sass "$breakpoints" setting.\n      '));
                    t = this.queries[t + 1];
                    return t ? t.name : null;
                },
                _getQueryName: function(t) {
                    if ("string" == typeof t) return t;
                    if ("object" === a(t)) return t.name;
                    throw new TypeError('\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got "'.concat(t, '" (').concat(a(t), ")\n    "));
                },
                _getCurrentSize: function() {
                    for (var t, e = 0; e < this.queries.length; e++) {
                        var n = this.queries[e];
                        window.matchMedia(n.value).matches && (t = n);
                    }
                    return t && this._getQueryName(t);
                },
                _watcher: function() {
                    var n = this;
                    r()(window).on("resize.zf.trigger", function() {
                        var t = n._getCurrentSize(),
                            e = n.current;
                        t !== e && (n.current = t, r()(window).trigger("changed.zf.mediaquery", [t, e]));
                    });
                }
            };
        },
        "./js/foundation.util.motion.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Move", function() {
                return o;
            }), n.d(e, "Motion", function() {
                return i;
            });
            var e = n("jquery"),
                a = n.n(e),
                l = n("./js/foundation.core.utils.js"),
                u = ["mui-enter", "mui-leave"],
                c = ["mui-enter-active", "mui-leave-active"],
                i = {
                    animateIn: function(t, e, n) {
                        s(!0, t, e, n);
                    },
                    animateOut: function(t, e, n) {
                        s(!1, t, e, n);
                    }
                };

            function o(n, i, o) {
                var s, r, a = null;
                if (0 === n) return o.apply(i), void i.trigger("finished.zf.animate", [i]).triggerHandler("finished.zf.animate", [i]);
                s = window.requestAnimationFrame(function t(e) {
                    r = e - (a = a || e), o.apply(i), r < n ? s = window.requestAnimationFrame(t, i) : (window.cancelAnimationFrame(s), i.trigger("finished.zf.animate", [i]).triggerHandler("finished.zf.animate", [i]));
                });
            }

            function s(t, e, n, i) {
                var o, s;

                function r() {
                    e[0].style.transitionDuration = 0, e.removeClass("".concat(o, " ").concat(s, " ").concat(n));
                }(e = a()(e).eq(0)).length && (o = t ? u[0] : u[1], s = t ? c[0] : c[1], r(), e.addClass(n).css("transition", "none"), requestAnimationFrame(function() {
                    e.addClass(o), t && e.show();
                }), requestAnimationFrame(function() {
                    e[0].offsetWidth, e.css("transition", "").addClass(s);
                }), e.one(Object(l.transitionend)(e), function() {
                    t || e.hide();
                    r(), i && i.apply(e);
                }));
            }
        },
        "./js/foundation.util.nest.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Nest", function() {
                return i;
            });
            var e = n("jquery"),
                a = n.n(e),
                i = {
                    Feather: function(t) {
                        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "zf";
                        t.attr("role", "menubar"), t.find("a").attr({
                            role: "menuitem"
                        });
                        var t = t.find("li").attr({
                                role: "none"
                            }),
                            i = "is-".concat(n, "-submenu"),
                            o = "".concat(i, "-item"),
                            s = "is-".concat(n, "-submenu-parent"),
                            r = "accordion" !== n;
                        t.each(function() {
                            var t = a()(this),
                                e = t.children("ul");
                            e.length && (t.addClass(s), r && (t.children("a:first").attr({
                                "aria-haspopup": !0,
                                "aria-label": t.children("a:first").text()
                            }), "drilldown" === n && t.attr({
                                "aria-expanded": !1
                            })), e.addClass("submenu ".concat(i)).attr({
                                "data-submenu": "",
                                role: "menubar"
                            }), "drilldown" === n && e.attr({
                                "aria-hidden": !0
                            })), t.parent("[data-submenu]").length && t.addClass("is-submenu-item ".concat(o));
                        });
                    },
                    Burn: function(t, e) {
                        var n = "is-".concat(e, "-submenu"),
                            i = "".concat(n, "-item"),
                            e = "is-".concat(e, "-submenu-parent");
                        t.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(n, " ").concat(i, " ").concat(e, " is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display", "");
                    }
                };
        },
        "./js/foundation.util.timer.js": function(t, e, n) {
            "use strict";

            function i(e, t, n) {
                var i, o, s = this,
                    r = t.duration,
                    a = Object.keys(e.data())[0] || "timer",
                    l = -1;
                this.isPaused = !1, this.restart = function() {
                    l = -1, clearTimeout(o), this.start();
                }, this.start = function() {
                    this.isPaused = !1, clearTimeout(o), l = l <= 0 ? r : l, e.data("paused", !1), i = Date.now(), o = setTimeout(function() {
                        t.infinite && s.restart(), n && "function" == typeof n && n();
                    }, l), e.trigger("timerstart.zf.".concat(a));
                }, this.pause = function() {
                    this.isPaused = !0, clearTimeout(o), e.data("paused", !0);
                    var t = Date.now();
                    l -= t - i, e.trigger("timerpaused.zf.".concat(a));
                };
            }
            n.r(e), n.d(e, "Timer", function() {
                return i;
            });
        },
        "./js/foundation.util.touch.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Touch", function() {
                return u;
            });
            var e = n("jquery"),
                o = n.n(e);

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            var i, r, a, l, u = {},
                c = !1,
                f = !1;

            function d(t) {
                this.removeEventListener("touchmove", h), this.removeEventListener("touchend", d), f || (t = o.a.Event("tap", l || t), o()(this).trigger(t)), l = null, f = c = !1;
            }

            function h(t) {
                var e, n;
                !0 === o.a.spotSwipe.preventDefault && t.preventDefault(), c && (e = t.touches[0].pageX, e = i - e, f = !0, a = (new Date()).getTime() - r, (n = Math.abs(e) >= o.a.spotSwipe.moveThreshold && a <= o.a.spotSwipe.timeThreshold ? 0 < e ? "left" : "right" : n) && (t.preventDefault(), d.apply(this, arguments), o()(this).trigger(o.a.Event("swipe", Object.assign({}, t)), n).trigger(o.a.Event("swipe".concat(n), Object.assign({}, t)))));
            }

            function p(t) {
                1 === t.touches.length && (i = t.touches[0].pageX, l = t, f = !(c = !0), r = (new Date()).getTime(), this.addEventListener("touchmove", h, {
                    passive: !0 === o.a.spotSwipe.preventDefault
                }), this.addEventListener("touchend", d, !1));
            }

            function m() {
                this.addEventListener && this.addEventListener("touchstart", p, {
                    passive: !0
                });
            }
            var g = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), this.version = "1.0.0", this.enabled = "ontouchstart" in document.documentElement, this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this._init();
                }
                var e, n, i;
                return e = t, (n = [{
                    key: "_init",
                    value: function() {
                        o.a.event.special.swipe = {
                            setup: m
                        }, o.a.event.special.tap = {
                            setup: m
                        }, o.a.each(["left", "up", "down", "right"], function() {
                            o.a.event.special["swipe".concat(this)] = {
                                setup: function() {
                                    o()(this).on("swipe", o.a.noop);
                                }
                            };
                        });
                    }
                }]) && s(e.prototype, n), i && s(e, i), t;
            }();
            u.setupSpotSwipe = function() {
                o.a.spotSwipe = new g(o.a);
            }, u.setupTouchHandler = function() {
                o.a.fn.addTouch = function() {
                    this.each(function(t, e) {
                        o()(e).bind("touchstart touchmove touchend touchcancel", function(t) {
                            n(t);
                        });
                    });
                    var n = function(t) {
                        var e, n = t.changedTouches[0],
                            t = {
                                touchstart: "mousedown",
                                touchmove: "mousemove",
                                touchend: "mouseup"
                            }[t.type];
                        "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(t, {
                            bubbles: !0,
                            cancelable: !0,
                            screenX: n.screenX,
                            screenY: n.screenY,
                            clientX: n.clientX,
                            clientY: n.clientY
                        }) : (e = document.createEvent("MouseEvent")).initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(e);
                    };
                };
            }, u.init = function() {
                void 0 === o.a.spotSwipe && (u.setupSpotSwipe(o.a), u.setupTouchHandler(o.a));
            };
        },
        "./js/foundation.util.triggers.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Triggers", function() {
                return u;
            });
            var e = n("jquery"),
                s = n.n(e),
                i = n("./js/foundation.core.utils.js"),
                o = n("./js/foundation.util.motion.js");

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }

            function a(e, n) {
                e.data(n).split(" ").forEach(function(t) {
                    s()("#".concat(t))["close" === n ? "trigger" : "triggerHandler"]("".concat(n, ".zf.trigger"), [e]);
                });
            }
            var l = function() {
                    for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
                        if ("".concat(t[e], "MutationObserver") in window) return window["".concat(t[e], "MutationObserver")];
                    return !1;
                }(),
                u = {
                    Listeners: {
                        Basic: {},
                        Global: {}
                    },
                    Initializers: {}
                };

            function c(t, e, n) {
                var i, o = Array.prototype.slice.call(arguments, 3);
                s()(window).on(e, function() {
                    i && clearTimeout(i), i = setTimeout(function() {
                        n.apply(null, o);
                    }, t || 10);
                });
            }
            u.Listeners.Basic = {
                openListener: function() {
                    a(s()(this), "open");
                },
                closeListener: function() {
                    s()(this).data("close") ? a(s()(this), "close") : s()(this).trigger("close.zf.trigger");
                },
                toggleListener: function() {
                    s()(this).data("toggle") ? a(s()(this), "toggle") : s()(this).trigger("toggle.zf.trigger");
                },
                closeableListener: function(t) {
                    var e = s()(this).data("closable");
                    t.stopPropagation(), "" !== e ? o.Motion.animateOut(s()(this), e, function() {
                        s()(this).trigger("closed.zf");
                    }) : s()(this).fadeOut().trigger("closed.zf");
                },
                toggleFocusListener: function() {
                    var t = s()(this).data("toggle-focus");
                    s()("#".concat(t)).triggerHandler("toggle.zf.trigger", [s()(this)]);
                }
            }, u.Initializers.addOpenListener = function(t) {
                t.off("click.zf.trigger", u.Listeners.Basic.openListener), t.on("click.zf.trigger", "[data-open]", u.Listeners.Basic.openListener);
            }, u.Initializers.addCloseListener = function(t) {
                t.off("click.zf.trigger", u.Listeners.Basic.closeListener), t.on("click.zf.trigger", "[data-close]", u.Listeners.Basic.closeListener);
            }, u.Initializers.addToggleListener = function(t) {
                t.off("click.zf.trigger", u.Listeners.Basic.toggleListener), t.on("click.zf.trigger", "[data-toggle]", u.Listeners.Basic.toggleListener);
            }, u.Initializers.addCloseableListener = function(t) {
                t.off("close.zf.trigger", u.Listeners.Basic.closeableListener), t.on("close.zf.trigger", "[data-closeable], [data-closable]", u.Listeners.Basic.closeableListener);
            }, u.Initializers.addToggleFocusListener = function(t) {
                t.off("focus.zf.trigger blur.zf.trigger", u.Listeners.Basic.toggleFocusListener), t.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", u.Listeners.Basic.toggleFocusListener);
            }, u.Listeners.Global = {
                resizeListener: function(t) {
                    l || t.each(function() {
                        s()(this).triggerHandler("resizeme.zf.trigger");
                    }), t.attr("data-events", "resize");
                },
                scrollListener: function(t) {
                    l || t.each(function() {
                        s()(this).triggerHandler("scrollme.zf.trigger");
                    }), t.attr("data-events", "scroll");
                },
                closeMeListener: function(t, e) {
                    t = t.namespace.split(".")[0];
                    s()("[data-".concat(t, "]")).not('[data-yeti-box="'.concat(e, '"]')).each(function() {
                        var t = s()(this);
                        t.triggerHandler("close.zf.trigger", [t]);
                    });
                }
            }, u.Initializers.addClosemeListener = function(t) {
                var e = s()("[data-yeti-box]"),
                    n = ["dropdown", "tooltip", "reveal"];
                t && ("string" == typeof t ? n.push(t) : "object" === r(t) && "string" == typeof t[0] ? n = n.concat(t) : console.error("Plugin names must be strings")), e.length && (n = n.map(function(t) {
                    return "closeme.zf.".concat(t);
                }).join(" "), s()(window).off(n).on(n, u.Listeners.Global.closeMeListener));
            }, u.Initializers.addResizeListener = function(t) {
                var e = s()("[data-resize]");
                e.length && c(t, "resize.zf.trigger", u.Listeners.Global.resizeListener, e);
            }, u.Initializers.addScrollListener = function(t) {
                var e = s()("[data-scroll]");
                e.length && c(t, "scroll.zf.trigger", u.Listeners.Global.scrollListener, e);
            }, u.Initializers.addMutationEventsListener = function(t) {
                if (!l) return !1;

                function e(t) {
                    var e = s()(t[0].target);
                    switch (t[0].type) {
                        case "attributes":
                            "scroll" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("scrollme.zf.trigger", [e, window.pageYOffset]), "resize" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("resizeme.zf.trigger", [e]), "style" === t[0].attributeName && (e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]));
                            break;
                        case "childList":
                            e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]);
                            break;
                        default:
                            return !1;
                    }
                }
                var n = t.find("[data-resize], [data-scroll], [data-mutate]");
                if (n.length)
                    for (var i = 0; i <= n.length - 1; i++) new l(e).observe(n[i], {
                        attributes: !0,
                        childList: !0,
                        characterData: !1,
                        subtree: !0,
                        attributeFilter: ["data-events", "style"]
                    });
            }, u.Initializers.addSimpleListeners = function() {
                var t = s()(document);
                u.Initializers.addOpenListener(t), u.Initializers.addCloseListener(t), u.Initializers.addToggleListener(t), u.Initializers.addCloseableListener(t), u.Initializers.addToggleFocusListener(t);
            }, u.Initializers.addGlobalListeners = function() {
                var t = s()(document);
                u.Initializers.addMutationEventsListener(t), u.Initializers.addResizeListener(250), u.Initializers.addScrollListener(), u.Initializers.addClosemeListener();
            }, u.init = function(t, e) {
                Object(i.onLoad)(s()(window), function() {
                    !0 !== s.a.triggersInitialized && (u.Initializers.addSimpleListeners(), u.Initializers.addGlobalListeners(), s.a.triggersInitialized = !0);
                }), e && (e.Triggers = u, e.IHearYou = u.Initializers.addGlobalListeners);
            };
        },
        0: function(t, e, n) {
            t.exports = n("./js/entries/foundation.js");
        },
        jquery: function(t, e) {
            t.exports = n;
        }
    }, s = {}, o.m = i, o.c = s, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        });
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) o.d(n, i, function(t) {
                return e[t];
            }.bind(null, i));
        return n;
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return o.d(e, "a", e), e;
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, o.p = "", o(o.s = 0);

    function o(t) {
        if (s[t]) return s[t].exports;
        var e = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
    }
    var i, s;
});;
(function($, Drupal) {
    Drupal.behaviors.foundationInit = {
        attach: function(context, settings) {
            $(context).foundation();
        }
    };
})(jQuery, Drupal);;
! function(n, i) {
    "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof exports ? module.exports = i(require("jquery")) : n.MotionUI = i(n.jQuery);
}(this, function(u) {
    "use strict";
    ! function() {
        Date.now || (Date.now = function() {
            return (new Date()).getTime();
        });
        for (var n = ["webkit", "moz"], i = 0; i < n.length && !window.requestAnimationFrame; ++i) {
            var e = n[i];
            window.requestAnimationFrame = window[e + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var t = 0;
            window.requestAnimationFrame = function(n) {
                var i = Date.now(),
                    e = Math.max(t + 16, i);
                return setTimeout(function() {
                    n(t = e);
                }, e - i);
            }, window.cancelAnimationFrame = clearTimeout;
        }
    }();
    var s = ["mui-enter", "mui-leave"],
        m = ["mui-enter-active", "mui-leave-active"],
        d = function() {
            var n = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend"
                },
                i = window.document.createElement("div");
            for (var e in n)
                if (void 0 !== i.style[e]) return n[e];
            return null;
        }();

    function t(n, i, e, t) {
        if ((i = u(i).eq(0)).length) {
            if (null === d) return n ? i.show() : i.hide(), void t();
            var o = n ? s[0] : s[1],
                a = n ? m[0] : m[1];
            r(), i.addClass(e), i.css("transition", "none"), requestAnimationFrame(function() {
                i.addClass(o), n && i.show();
            }), requestAnimationFrame(function() {
                i[0].offsetWidth, i.css("transition", ""), i.addClass(a);
            }), i.one("transitionend", function() {
                n || i.hide();
                r(), t && t.apply(i);
            });
        }

        function r() {
            i[0].style.transitionDuration = 0, i.removeClass(o + " " + a + " " + e);
        }
    }
    return {
        animateIn: function(n, i, e) {
            t(!0, n, i, e);
        },
        animateOut: function(n, i, e) {
            t(!1, n, i, e);
        }
    };
});;
(function($, Drupal) {
    Drupal.behaviors.foundationTopBarActive = {
        attach: function(context, settings) {
            var $active_links = $(context).find('.top-bar .menu-item > a.is-active');
            if ($active_links.length) $(once('foundationTopBarActive', $active_links)).each(function() {
                $(this).parent().addClass('active');
            });
        }
    };
})(jQuery, Drupal);;