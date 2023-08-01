(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [979], {
        10227: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, o, n) {
                return !1
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        31551: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(92648).Z,
                r = o(17273).Z,
                l = n(o(67294)),
                u = o(41003),
                a = o(67795),
                i = o(54465),
                f = o(72692),
                c = o(48245),
                s = o(69246),
                d = o(10227),
                p = o(33468);
            let h = new Set;

            function v(e, t, o, n) {
                if (u.isLocalURL(t)) {
                    if (!n.bypassPrefetchedCheck) {
                        let r = void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0,
                            l = t + "%" + o + "%" + r;
                        if (h.has(l)) return;
                        h.add(l)
                    }
                    Promise.resolve(e.prefetch(t, o, n)).catch(e => {})
                }
            }

            function y(e) {
                return "string" == typeof e ? e : a.formatUrl(e)
            }
            let b = l.default.forwardRef(function(e, t) {
                let o, n;
                let {
                    href: a,
                    as: h,
                    children: b,
                    prefetch: g,
                    passHref: m,
                    replace: k,
                    shallow: M,
                    scroll: _,
                    locale: w,
                    onClick: C,
                    onMouseEnter: E,
                    onTouchStart: j,
                    legacyBehavior: L = !1
                } = e, O = r(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                o = b, L && ("string" == typeof o || "number" == typeof o) && (o = l.default.createElement("a", null, o));
                let x = !1 !== g,
                    P = l.default.useContext(f.RouterContext),
                    R = l.default.useContext(c.AppRouterContext),
                    S = null != P ? P : R,
                    I = !P,
                    {
                        href: T,
                        as: B
                    } = l.default.useMemo(() => {
                        if (!P) {
                            let e = y(a);
                            return {
                                href: e,
                                as: h ? y(h) : e
                            }
                        }
                        let [t, o] = u.resolveHref(P, a, !0);
                        return {
                            href: t,
                            as: h ? u.resolveHref(P, h) : o || t
                        }
                    }, [P, a, h]),
                    D = l.default.useRef(T),
                    K = l.default.useRef(B);
                L && (n = l.default.Children.only(o));
                let N = L ? n && "object" == typeof n && n.ref : t,
                    [U, Z, H] = s.useIntersection({
                        rootMargin: "200px"
                    }),
                    A = l.default.useCallback(e => {
                        (K.current !== B || D.current !== T) && (H(), K.current = B, D.current = T), U(e), N && ("function" == typeof N ? N(e) : "object" == typeof N && (N.current = e))
                    }, [B, N, T, H, U]);
                l.default.useEffect(() => {
                    S && Z && x && v(S, T, B, {
                        locale: w
                    })
                }, [B, T, Z, w, x, null == P ? void 0 : P.locale, S]);
                let W = {
                    ref: A,
                    onClick(e) {
                        L || "function" != typeof C || C(e), L && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), S && !e.defaultPrevented && function(e, t, o, n, r, a, i, f, c, s) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function(e) {
                                    let {
                                        target: t
                                    } = e.currentTarget;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !u.isLocalURL(o))) return;
                            e.preventDefault();
                            let h = () => {
                                "beforePopState" in t ? t[r ? "replace" : "push"](o, n, {
                                    shallow: a,
                                    locale: f,
                                    scroll: i
                                }) : t[r ? "replace" : "push"](n || o, {
                                    forceOptimisticNavigation: !s
                                })
                            };
                            c ? l.default.startTransition(h) : h()
                        }(e, S, T, B, k, M, _, w, I, x)
                    },
                    onMouseEnter(e) {
                        L || "function" != typeof E || E(e), L && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), S && (x || !I) && v(S, T, B, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        L || "function" != typeof j || j(e), L && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), S && (x || !I) && v(S, T, B, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!L || m || "a" === n.type && !("href" in n.props)) {
                    let q = void 0 !== w ? w : null == P ? void 0 : P.locale,
                        z = (null == P ? void 0 : P.isLocaleDomain) && d.getDomainLocale(B, q, null == P ? void 0 : P.locales, null == P ? void 0 : P.domainLocales);
                    W.href = z || p.addBasePath(i.addLocale(B, q, null == P ? void 0 : P.defaultLocale))
                }
                return L ? l.default.cloneElement(n, W) : l.default.createElement("a", Object.assign({}, O, W), o)
            });
            t.default = b, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        69246: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                let {
                    rootRef: t,
                    rootMargin: o,
                    disabled: i
                } = e, f = i || !l, [c, s] = n.useState(!1), [d, p] = n.useState(null);
                n.useEffect(() => {
                    if (l) {
                        if (!f && !c && d && d.tagName) {
                            let e = function(e, t, o) {
                                let {
                                    id: n,
                                    observer: r,
                                    elements: l
                                } = function(e) {
                                    let t;
                                    let o = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = a.find(e => e.root === o.root && e.margin === o.margin);
                                    if (n && (t = u.get(n))) return t;
                                    let r = new Map,
                                        l = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = r.get(e.target),
                                                    o = e.isIntersecting || e.intersectionRatio > 0;
                                                t && o && t(o)
                                            })
                                        }, e);
                                    return t = {
                                        id: o,
                                        observer: l,
                                        elements: r
                                    }, a.push(o), u.set(o, t), t
                                }(o);
                                return l.set(e, t), r.observe(e),
                                    function() {
                                        if (l.delete(e), r.unobserve(e), 0 === l.size) {
                                            r.disconnect(), u.delete(n);
                                            let t = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                                            t > -1 && a.splice(t, 1)
                                        }
                                    }
                            }(d, e => e && s(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: o
                            });
                            return e
                        }
                    } else if (!c) {
                        let n = r.requestIdleCallback(() => s(!0));
                        return () => r.cancelIdleCallback(n)
                    }
                }, [d, f, o, t, c]);
                let h = n.useCallback(() => {
                    s(!1)
                }, []);
                return [p, c, h]
            };
            var n = o(67294),
                r = o(44686);
            let l = "function" == typeof IntersectionObserver,
                u = new Map,
                a = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        41664: function(e, t, o) {
            e.exports = o(31551)
        },
        43407: function(e, t, o) {
            "use strict";
            var n = o(67294);
            let r = n.forwardRef(function({
                title: e,
                titleId: t,
                ...o
            }, r) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: r,
                    "aria-labelledby": t
                }, o), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }))
            });
            t.Z = r
        },
        31415: function(e, t, o) {
            "use strict";
            var n = o(67294);
            let r = n.forwardRef(function({
                title: e,
                titleId: t,
                ...o
            }, r) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: r,
                    "aria-labelledby": t
                }, o), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18L18 6M6 6l12 12"
                }))
            });
            t.Z = r
        }
    }
]);