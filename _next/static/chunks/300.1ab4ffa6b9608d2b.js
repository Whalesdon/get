(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [300], {
        37946: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                detectEnv: function() {
                    return g
                },
                detectOS: function() {
                    return _
                },
                formatIOSMobile: function() {
                    return W
                },
                formatMobileRegistry: function() {
                    return Q
                },
                formatMobileRegistryEntry: function() {
                    return K
                },
                getClientMeta: function() {
                    return L
                },
                getCrypto: function() {
                    return T
                },
                getCryptoOrThrow: function() {
                    return O
                },
                getDappRegistryUrl: function() {
                    return Y
                },
                getDocument: function() {
                    return S
                },
                getDocumentOrThrow: function() {
                    return k
                },
                getFromWindow: function() {
                    return x
                },
                getFromWindowOrThrow: function() {
                    return E
                },
                getLocal: function() {
                    return j
                },
                getLocalStorage: function() {
                    return N
                },
                getLocalStorageOrThrow: function() {
                    return P
                },
                getLocation: function() {
                    return A
                },
                getLocationOrThrow: function() {
                    return R
                },
                getMobileLinkRegistry: function() {
                    return H
                },
                getMobileRegistryEntry: function() {
                    return $
                },
                getNavigator: function() {
                    return I
                },
                getNavigatorOrThrow: function() {
                    return C
                },
                getWalletRegistryUrl: function() {
                    return V
                },
                isAndroid: function() {
                    return v
                },
                isBrowser: function() {
                    return M
                },
                isIOS: function() {
                    return y
                },
                isMobile: function() {
                    return w
                },
                isNode: function() {
                    return b
                },
                mobileLinkChoiceKey: function() {
                    return F
                },
                removeLocal: function() {
                    return D
                },
                safeJsonParse: function() {
                    return B
                },
                safeJsonStringify: function() {
                    return q
                },
                saveMobileLinkInfo: function() {
                    return z
                },
                setLocal: function() {
                    return U
                }
            });
            var r = n(65755),
                i = n(62873),
                o = n(34155),
                s = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    for (var r = Array(t), i = 0, e = 0; e < n; e++)
                        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                    return r
                },
                a = function(t, e, n) {
                    this.name = t, this.version = e, this.os = n, this.type = "browser"
                },
                l = function(t) {
                    this.version = t, this.type = "node", this.name = "node", this.os = o.platform
                },
                u = function(t, e, n, r) {
                    this.name = t, this.version = e, this.os = n, this.bot = r, this.type = "bot-device"
                },
                c = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                h = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                d = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                f = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FBAV\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                p = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function m(t) {
                var e = "" !== t && f.reduce(function(e, n) {
                    var r = n[0],
                        i = n[1];
                    if (e) return e;
                    var o = i.exec(t);
                    return !!o && [r, o]
                }, !1);
                if (!e) return null;
                var n = e[0],
                    r = e[1];
                if ("searchbot" === n) return new c;
                var i = r[1] && r[1].split(/[._]/).slice(0, 3);
                i ? i.length < 3 && (i = s(i, function(t) {
                    for (var e = [], n = 0; n < t; n++) e.push("0");
                    return e
                }(3 - i.length))) : i = [];
                var o = i.join("."),
                    l = function(t) {
                        for (var e = 0, n = p.length; e < n; e++) {
                            var r = p[e],
                                i = r[0];
                            if (r[1].exec(t)) return i
                        }
                        return null
                    }(t),
                    h = d.exec(t);
                return h && h[1] ? new u(n, o, l, h[1]) : new a(n, o, l)
            }

            function g(t) {
                return t ? m(t) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new h : "undefined" != typeof navigator ? m(navigator.userAgent) : void 0 !== o && o.version ? new l(o.version.slice(1)) : null
            }

            function _() {
                let t = g();
                return t && t.os ? t.os : void 0
            }

            function v() {
                let t = _();
                return !!t && t.toLowerCase().includes("android")
            }

            function y() {
                let t = _();
                return !!t && (t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
            }

            function w() {
                let t = _();
                return !!t && (v() || y())
            }

            function b() {
                let t = g(),
                    e = !!t && !!t.name && "node" === t.name.toLowerCase();
                return e
            }

            function M() {
                let t = !b() && !!I();
                return t
            }
            let x = i.sD,
                E = i.$2,
                k = i.uT,
                S = i.Me,
                C = i.Gw,
                I = i.jW,
                R = i.UO,
                A = i.k$,
                O = i.VQ,
                T = i.MX,
                P = i.xP,
                N = i.$o;

            function L() {
                return r.D()
            }
            let B = function(t) {
                    if ("string" != typeof t) throw Error(`Cannot safe json parse value of type ${typeof t}`);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                },
                q = function(t) {
                    return "string" == typeof t ? t : JSON.stringify(t)
                };

            function U(t, e) {
                let n = q(e),
                    r = N();
                r && r.setItem(t, n)
            }

            function j(t) {
                let e = null,
                    n = N();
                return n && (e = n.getItem(t)), e ? B(e) : e
            }

            function D(t) {
                let e = N();
                e && e.removeItem(t)
            }
            let F = "WALLETCONNECT_DEEPLINK_CHOICE";

            function W(t, e) {
                let n = encodeURIComponent(t);
                return e.universalLink ? `${e.universalLink}/wc?uri=${n}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}` : ""
            }

            function z(t) {
                let e = t.href.split("?")[0];
                U(F, Object.assign(Object.assign({}, t), {
                    href: e
                }))
            }

            function $(t, e) {
                return t.filter(t => t.name.toLowerCase().includes(e.toLowerCase()))[0]
            }

            function H(t, e) {
                let n = t;
                return e && (n = e.map(e => $(t, e)).filter(Boolean)), n
            }
            let J = "https://registry.walletconnect.com";

            function V() {
                return J + "/api/v2/wallets"
            }

            function Y() {
                return J + "/api/v2/dapps"
            }

            function K(t, e = "mobile") {
                var n;
                return {
                    name: t.name || "",
                    shortName: t.metadata.shortName || "",
                    color: t.metadata.colors.primary || "",
                    logo: null !== (n = t.image_url.sm) && void 0 !== n ? n : "",
                    universalLink: t[e].universal || "",
                    deepLink: t[e].native || ""
                }
            }

            function Q(t, e = "mobile") {
                return Object.values(t).filter(t => !!t[e].universal || !!t[e].native).map(t => K(t, e))
            }
        },
        40926: function(t, e, n) {
            "use strict";

            function r() {
                return (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) || (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) || {}
            }

            function i() {
                let t = r();
                return t.subtle || t.webkitSubtle
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = r, e.getSubtleCrypto = i, e.isBrowserCryptoAvailable = function() {
                return !!r() && !!i()
            }
        },
        88618: function(t, e, n) {
            "use strict";
            var r = n(34155);

            function i() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function o() {
                return void 0 !== r && void 0 !== r.versions && void 0 !== r.versions.node
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = i, e.isNode = o, e.isBrowser = function() {
                return !i() && !o()
            }
        },
        1468: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let r = n(34308);
            r.__exportStar(n(40926), e), r.__exportStar(n(88618), e)
        },
        34308: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return y
                },
                __asyncValues: function() {
                    return b
                },
                __await: function() {
                    return v
                },
                __awaiter: function() {
                    return c
                },
                __classPrivateFieldGet: function() {
                    return k
                },
                __classPrivateFieldSet: function() {
                    return S
                },
                __createBinding: function() {
                    return d
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return E
                },
                __importStar: function() {
                    return x
                },
                __makeTemplateObject: function() {
                    return M
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return l
                },
                __read: function() {
                    return m
                },
                __rest: function() {
                    return s
                },
                __spread: function() {
                    return g
                },
                __spreadArrays: function() {
                    return _
                },
                __values: function() {
                    return p
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
            };

            function i(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var o = function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function s(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                return n
            }

            function a(t, e, n, r) {
                var i, o = arguments.length,
                    s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                else
                    for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                return o > 3 && s && Object.defineProperty(e, n, s), s
            }

            function l(t, e) {
                return function(n, r) {
                    e(n, r, t)
                }
            }

            function u(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function c(t, e, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            l(r.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            l(r.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    l((r = r.apply(t, e || [])).next())
                })
            }

            function h(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (a) {
                                o = [6, a], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }

            function d(t, e, n, r) {
                void 0 === r && (r = n), t[r] = e[n]
            }

            function f(t, e) {
                for (var n in t) "default" === n || e.hasOwnProperty(n) || (e[n] = t[n])
            }

            function p(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function m(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, i, o = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function g() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(m(arguments[e]));
                return t
            }

            function _() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                for (var r = Array(t), i = 0, e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                return r
            }

            function v(t) {
                return this instanceof v ? (this.v = t, this) : new v(t)
            }

            function y(t, e, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(t, e || []),
                    o = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(t) {
                    i[t] && (r[t] = function(e) {
                        return new Promise(function(n, r) {
                            o.push([t, e, n, r]) > 1 || a(t, e)
                        })
                    })
                }

                function a(t, e) {
                    try {
                        var n;
                        (n = i[t](e)).value instanceof v ? Promise.resolve(n.value.v).then(l, u) : c(o[0][2], n)
                    } catch (r) {
                        c(o[0][3], r)
                    }
                }

                function l(t) {
                    a("next", t)
                }

                function u(t) {
                    a("throw", t)
                }

                function c(t, e) {
                    t(e), o.shift(), o.length && a(o[0][0], o[0][1])
                }
            }

            function w(t) {
                var e, n;
                return e = {}, r("next"), r("throw", function(t) {
                    throw t
                }), r("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function r(r, i) {
                    e[r] = t[r] ? function(e) {
                        return (n = !n) ? {
                            value: v(t[r](e)),
                            done: "return" === r
                        } : i ? i(e) : e
                    } : i
                }
            }

            function b(t) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var e, n = t[Symbol.asyncIterator];
                return n ? n.call(t) : (t = p(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function r(n) {
                    e[n] = t[n] && function(e) {
                        return new Promise(function(r, i) {
                            ! function(t, e, n, r) {
                                Promise.resolve(r).then(function(e) {
                                    t({
                                        value: e,
                                        done: n
                                    })
                                }, e)
                            }(r, i, (e = t[n](e)).done, e.value)
                        })
                    }
                }
            }

            function M(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }

            function x(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }

            function E(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function k(t, e) {
                if (!e.has(t)) throw TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }

            function S(t, e, n) {
                if (!e.has(t)) throw TypeError("attempted to set private field on non-instance");
                return e.set(t, n), n
            }
        },
        82300: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return tT
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                decrypt: function() {
                    return tC
                },
                encrypt: function() {
                    return tS
                },
                generateKey: function() {
                    return tE
                },
                verifyHmac: function() {
                    return tk
                }
            });
            var i = n(26729),
                o = n.n(i),
                s = n(17187);
            let a = "INTERNAL_ERROR",
                l = "SERVER_ERROR",
                u = [-32700, -32600, -32601, -32602, -32603],
                c = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [a]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [l]: {
                        code: -32e3,
                        message: "Server error"
                    }
                };

            function h(t) {
                return Object.keys(c).includes(t) ? c[t] : c[l]
            }
            var d = n(1468);

            function f(t = 3) {
                let e = Date.now() * Math.pow(10, t);
                return e + Math.floor(Math.random() * Math.pow(10, t))
            }

            function p(t, e, n) {
                var r, i;
                return {
                    id: t,
                    jsonrpc: "2.0",
                    error: void 0 === (r = e) ? h(a) : ("string" == typeof r && (r = Object.assign(Object.assign({}, h(l)), {
                        message: r
                    })), void 0 !== n && (r.data = n), i = r.code, u.includes(i) && (r = function(t) {
                        let e = Object.values(c).find(e => e.code === t);
                        return e || c[l]
                    }(r.code)), r)
                }
            }
            class m {}
            class g extends m {
                constructor(t) {
                    super()
                }
            }
            class _ extends m {
                constructor() {
                    super()
                }
            }
            class v extends _ {
                constructor(t) {
                    super()
                }
            }

            function y(t) {
                return function(t, e) {
                    let n = function(t) {
                        let e = t.match(RegExp(/^\w+:/, "gi"));
                        if (e && e.length) return e[0]
                    }(t);
                    return void 0 !== n && RegExp(e).test(n)
                }(t, "^https?:")
            }

            function w(t) {
                return "error" in t
            }
            class b extends v {
                constructor(t) {
                    super(t), this.events = new s.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                async connect(t = this.connection) {
                    await this.open(t)
                }
                async disconnect() {
                    await this.close()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async request(t, e) {
                    var n, r;
                    return this.requestStrict((n = t.method, r = t.params || [], {
                        id: t.id || (function(t = 6) {
                            return BigInt(f(t))
                        })().toString() || f(),
                        jsonrpc: "2.0",
                        method: n,
                        params: r
                    }), e)
                }
                async requestStrict(t, e) {
                    return new Promise(async (n, r) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (i) {
                            r(i)
                        }
                        this.events.on(`${t.id}`, t => {
                            w(t) ? r(t.error) : n(t.result)
                        });
                        try {
                            await this.connection.send(t, e)
                        } catch (o) {
                            r(o)
                        }
                    })
                }
                setConnection(t = this.connection) {
                    return t
                }
                onPayload(t) {
                    (this.events.emit("payload", t), "object" == typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc && ("result" in t || w(t))) ? this.events.emit(`${t.id}`, t): this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(t = this.connection) {
                    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof t && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            var M = n(54098),
                x = n.n(M);
            let E = t => JSON.stringify(t, (t, e) => "bigint" == typeof e ? e.toString() + "n" : e),
                k = t => {
                    let e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(e, (t, e) => {
                        let n = "string" == typeof e && e.match(/^\d+n$/);
                        return n ? BigInt(e.substring(0, e.length - 1)) : e
                    })
                };

            function S(t) {
                return "string" == typeof t ? t : E(t) || ""
            }
            let C = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class I {
                constructor(t, e = !1) {
                    if (this.url = t, this.disableProviderPing = e, this.events = new s.EventEmitter, this.isAvailable = !1, this.registering = !1, !y(t)) throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    this.url = t, this.disableProviderPing = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t = this.url) {
                    await this.register(t)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(t, e) {
                    this.isAvailable || await this.register();
                    try {
                        let n = S(t),
                            r = await x()(this.url, Object.assign(Object.assign({}, C), {
                                body: n
                            })),
                            i = await r.json();
                        this.onPayload({
                            data: i
                        })
                    } catch (o) {
                        this.onError(t.id, o)
                    }
                }
                async register(t = this.url) {
                    if (!y(t)) throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((t, e) => {
                            this.events.once("register_error", t => {
                                this.resetMaxListeners(), e(t)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return e(Error("HTTP connection is missing or invalid"));
                                t()
                            })
                        })
                    }
                    this.url = t, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let n = S({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await x()(t, Object.assign(Object.assign({}, C), {
                                body: n
                            }))
                        }
                        this.onOpen()
                    } catch (i) {
                        let r = this.parseError(i);
                        throw this.events.emit("register_error", r), this.onClose(), r
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(t) {
                    if (void 0 === t.data) return;
                    let e = "string" == typeof t.data ? function(t) {
                        if ("string" != typeof t) throw Error(`Cannot safe json parse value of type ${typeof t}`);
                        try {
                            return k(t)
                        } catch (e) {
                            return t
                        }
                    }(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    let n = this.parseError(e),
                        r = n.message || n.toString(),
                        i = p(t, r);
                    this.events.emit("payload", i)
                }
                parseError(t, e = this.url) {
                    return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? Error(`Unavailable HTTP RPC url at ${e}`) : t
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            var R = n(37946);
            let A = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
                O = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                T = {
                    1: "mainnet",
                    3: "ropsten",
                    4: "rinkeby",
                    5: "goerli",
                    42: "kovan"
                };
            var P = n(11460),
                N = n.n(P);
            n(4501);
            var L = n(65054),
                B = n.n(L),
                q = n(48764).Buffer;
            let U = "utf8";

            function j(t) {
                return new Uint8Array(t)
            }

            function D(t, e = !1) {
                let n = t.toString("hex");
                return e ? J(n) : n
            }

            function F(t, e = !1) {
                return D(B()(t), e)
            }

            function W(t) {
                return j(q.from(H(t), "hex"))
            }

            function z(t) {
                return q.from(t, U)
            }

            function $(...t) {
                let e = [];
                return t.forEach(t => e = e.concat(Array.from(t))), new Uint8Array([...e])
            }

            function H(t) {
                return t.replace(/^0x/, "")
            }

            function J(t) {
                return t.startsWith("0x") ? t : `0x${t}`
            }

            function V(t) {
                return (t = function(t, e = 8, n = "0") {
                    return function(t, e, n = "0") {
                        return function(t, e, n, r = "0") {
                            let i = e - t.length,
                                o = t;
                            if (i > 0) {
                                let s = r.repeat(i);
                                o = n ? s + t : t + s
                            }
                            return o
                        }(t, e, !0, n)
                    }(t, function(t, e = 8) {
                        let n = t % e;
                        return n ? (t - n) / e * e + e : t
                    }(t.length, e), n)
                }(t = H(t), 2)) && (t = J(t)), t
            }

            function Y(t) {
                var e;
                return e = new Uint8Array(t), B()(e)
            }

            function K(t, e) {
                let n = H(V(new(N())(t).toString(16)));
                return e ? n : J(n)
            }
            var Q = n(91094);

            function Z() {
                let t = ((t, e) => {
                    for (e = t = ""; t++ < 36; e += 51 * t & 52 ? (15 ^ t ? 8 ^ Math.random() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-");
                    return e
                })();
                return t
            }

            function G(t, e) {
                return "string" == typeof t && !!t.match(/^0x[0-9A-Fa-f]*$/) && (!e || t.length === 2 + 2 * e)
            }

            function X(t) {
                return void 0 !== t.result
            }

            function tt(t) {
                return void 0 !== t.error
            }

            function te(t) {
                return void 0 !== t.event
            }
            let tn = t => !!t && "0x" === t.toLowerCase().substring(0, 2) && !!/^(0x)?[0-9a-f]{40}$/i.test(t) && (!!(/^(0x)?[0-9a-f]{40}$/.test(t) || /^(0x)?[0-9A-F]{40}$/.test(t)) || t === function(t) {
                t = H(t.toLowerCase());
                let e = H((0, Q.keccak_256)(z(t))),
                    n = "";
                for (let r = 0; r < t.length; r++) parseInt(e[r], 16) > 7 ? n += t[r].toUpperCase() : n += t[r];
                return J(n)
            }(t));

            function tr(t) {
                return t && t.length && !G(t[0]) && (t[0] = function(t, e = !1) {
                    return D(z(t), e)
                }(t[0], !0)), t
            }

            function ti(t) {
                if (void 0 !== t.type && "0" !== t.type) return t;
                if (void 0 === t.from || !tn(t.from)) throw Error("Transaction object must include a valid 'from' value.");

                function e(t) {
                    let e = t;
                    return "number" != typeof t && ("string" != typeof t || "" === t || "string" == typeof t && "" === t.trim()) || (G(t) ? "string" == typeof t && (e = V(t)) : e = K(t)), "string" == typeof e && (e = function(t) {
                        let e = t.startsWith("0x");
                        return t = (t = H(t)).startsWith("0") ? t.substring(1) : t, e ? J(t) : t
                    }(J(e))), e
                }
                let n = {
                        from: V(t.from),
                        to: void 0 === t.to ? void 0 : V(t.to),
                        gasPrice: void 0 === t.gasPrice ? "" : e(t.gasPrice),
                        gas: void 0 === t.gas ? void 0 === t.gasLimit ? "" : e(t.gasLimit) : e(t.gas),
                        value: void 0 === t.value ? "" : e(t.value),
                        nonce: void 0 === t.nonce ? "" : e(t.nonce),
                        data: void 0 === t.data ? "" : V(t.data) || "0x"
                    },
                    r = ["gasPrice", "gas", "value", "nonce"];
                return Object.keys(n).forEach(t => {
                    (void 0 === n[t] || "string" == typeof n[t] && !n[t].trim().length) && r.includes(t) && delete n[t]
                }), n
            }
            var to = n(17563),
                ts = class {
                    constructor() {
                        this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")))
                    }
                    on(t, e) {
                        this._eventEmitters.push({
                            event: t,
                            callback: e
                        })
                    }
                    trigger(t) {
                        let e = [];
                        t && (e = this._eventEmitters.filter(e => e.event === t)), e.forEach(t => {
                            t.callback()
                        })
                    }
                };
            let ta = void 0 !== n.g.WebSocket ? n.g.WebSocket : n(68007);
            var tl = class {
                constructor(t) {
                    if (this.opts = t, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = t.protocol, this._version = t.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = t.subscriptions || [], this._netMonitor = t.netMonitor || new ts, !t.url || "string" != typeof t.url) throw Error("Missing or invalid WebSocket url");
                    this._url = t.url, this._netMonitor.on("online", () => this._socketCreate())
                }
                set readyState(t) {}
                get readyState() {
                    return this._socket ? this._socket.readyState : -1
                }
                set connecting(t) {}
                get connecting() {
                    return 0 === this.readyState
                }
                set connected(t) {}
                get connected() {
                    return 1 === this.readyState
                }
                set closing(t) {}
                get closing() {
                    return 2 === this.readyState
                }
                set closed(t) {}
                get closed() {
                    return 3 === this.readyState
                }
                open() {
                    this._socketCreate()
                }
                close() {
                    this._socketClose()
                }
                send(t, e, n) {
                    if (!e || "string" != typeof e) throw Error("Missing or invalid topic field");
                    this._socketSend({
                        topic: e,
                        type: "pub",
                        payload: t,
                        silent: !!n
                    })
                }
                subscribe(t) {
                    this._socketSend({
                        topic: t,
                        type: "sub",
                        payload: "",
                        silent: !0
                    })
                }
                on(t, e) {
                    this._events.push({
                        event: t,
                        callback: e
                    })
                }
                _socketCreate() {
                    if (this._nextSocket) return;
                    let t = function(t, e, n) {
                        var r, i, o, s, a;
                        let l;
                        let u = t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t,
                            c = u.split("?"),
                            h = (0, R.isBrowser)() ? {
                                protocol: e,
                                version: n,
                                env: "browser",
                                host: (null === (r = (0, R.getLocation)()) || void 0 === r ? void 0 : r.host) || ""
                            } : {
                                protocol: e,
                                version: n,
                                env: (null === (i = (0, R.detectEnv)()) || void 0 === i ? void 0 : i.name) || ""
                            },
                            d = (a = Object.assign(Object.assign({}, (s = function(t) {
                                let e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                                    n = void 0 !== e ? t.substr(e) : "";
                                return n
                            }(c[1] || ""), to.parse(s))), h), to.stringify(a));
                        return c[0] + "?" + d
                    }(this._url, this._protocol, this._version);
                    if (this._nextSocket = new ta(t), !this._nextSocket) throw Error("Failed to create socket");
                    this._nextSocket.onmessage = t => this._socketReceive(t), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = t => this._socketError(t), this._nextSocket.onclose = () => {
                        setTimeout(() => {
                            this._nextSocket = null, this._socketCreate()
                        }, 1e3)
                    }
                }
                _socketOpen() {
                    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                }
                _socketClose() {
                    this._socket && (this._socket.onclose = () => {}, this._socket.close())
                }
                _socketSend(t) {
                    let e = JSON.stringify(t);
                    this._socket && 1 === this._socket.readyState ? this._socket.send(e) : (this._setToQueue(t), this._socketCreate())
                }
                async _socketReceive(t) {
                    let e;
                    try {
                        e = JSON.parse(t.data)
                    } catch (n) {
                        return
                    }
                    if (this._socketSend({
                            topic: e.topic,
                            type: "ack",
                            payload: "",
                            silent: !0
                        }), this._socket && 1 === this._socket.readyState) {
                        let r = this._events.filter(t => "message" === t.event);
                        r && r.length && r.forEach(t => t.callback(e))
                    }
                }
                _socketError(t) {
                    let e = this._events.filter(t => "error" === t.event);
                    e && e.length && e.forEach(e => e.callback(t))
                }
                _queueSubscriptions() {
                    let t = this._subscriptions;
                    t.forEach(t => this._queue.push({
                        topic: t,
                        type: "sub",
                        payload: "",
                        silent: !0
                    })), this._subscriptions = this.opts.subscriptions || []
                }
                _setToQueue(t) {
                    this._queue.push(t)
                }
                _pushQueue() {
                    let t = this._queue;
                    t.forEach(t => this._socketSend(t)), this._queue = []
                }
            };
            let tu = "Session currently connected",
                tc = "Session currently disconnected",
                th = "JSON RPC response format is invalid",
                td = "User close QRCode Modal";
            var tf = class {
                    constructor() {
                        this._eventEmitters = []
                    }
                    subscribe(t) {
                        this._eventEmitters.push(t)
                    }
                    unsubscribe(t) {
                        this._eventEmitters = this._eventEmitters.filter(e => e.event !== t)
                    }
                    trigger(t) {
                        let e, n = [];
                        (e = void 0 !== t.method ? t.method : X(t) || tt(t) ? `response:${t.id}` : te(t) ? t.event : "") && (n = this._eventEmitters.filter(t => t.event === e)), n && n.length || A.includes(e) || e.startsWith("wc_") || te(e) || (n = this._eventEmitters.filter(t => "call_request" === t.event)), n.forEach(e => {
                            if (tt(t)) {
                                let n = Error(t.error.message);
                                e.callback(n, null)
                            } else e.callback(null, t)
                        })
                    }
                },
                tp = class {
                    constructor(t = "walletconnect") {
                        this.storageId = t
                    }
                    getSession() {
                        let t = null,
                            e = (0, R.getLocal)(this.storageId);
                        return e && void 0 !== e.bridge && (t = e), t
                    }
                    setSession(t) {
                        return (0, R.setLocal)(this.storageId, t), t
                    }
                    removeSession() {
                        (0, R.removeLocal)(this.storageId)
                    }
                };
            let tm = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(t => `https://${t}.bridge.walletconnect.org`);
            var tg = class {
                constructor(t) {
                    if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new tf, this._clientMeta = (0, R.getClientMeta)() || t.connectorOpts.clientMeta || null, this._cryptoLib = t.cryptoLib, this._sessionStorage = t.sessionStorage || new tp(t.connectorOpts.storageId), this._qrcodeModal = t.connectorOpts.qrcodeModal, this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions, this._signingMethods = [...O, ...t.connectorOpts.signingMethods || []], !t.connectorOpts.bridge && !t.connectorOpts.uri && !t.connectorOpts.session) throw Error("Missing one of the required parameters: bridge / uri / session");
                    if (t.connectorOpts.bridge) {
                        var e, n;
                        this.bridge = "walletconnect.org" !== (0, (0, ((n = e = t.connectorOpts.bridge).indexOf("//") > -1 ? n.split("/")[2] : n.split("/")[0]).split(":")[0]).split("?")[0]).split(".").slice(-2).join(".") ? e : tm[Math.floor(Math.random() * tm.length)]
                    }
                    t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
                    let r = t.connectorOpts.session || this._getStorageSession();
                    r && (this.session = r), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = t.transport || new tl({
                        protocol: this.protocol,
                        version: this.version,
                        url: this.bridge,
                        subscriptions: [this.clientId]
                    }), this._subscribeToInternalEvents(), this._initTransport(), t.connectorOpts.uri && this._subscribeToSessionRequest(), t.pushServerOpts && this._registerPushServer(t.pushServerOpts)
                }
                set bridge(t) {
                    t && (this._bridge = t)
                }
                get bridge() {
                    return this._bridge
                }
                set key(t) {
                    if (!t) return;
                    let e = W(t).buffer;
                    this._key = e
                }
                get key() {
                    if (this._key) {
                        var t;
                        let e = (t = this._key, F(new Uint8Array(t), !1));
                        return e
                    }
                    return ""
                }
                set clientId(t) {
                    t && (this._clientId = t)
                }
                get clientId() {
                    let t = this._clientId;
                    return t || (t = this._clientId = Z()), this._clientId
                }
                set peerId(t) {
                    t && (this._peerId = t)
                }
                get peerId() {
                    return this._peerId
                }
                set clientMeta(t) {}
                get clientMeta() {
                    let t = this._clientMeta;
                    return t || (t = this._clientMeta = (0, R.getClientMeta)()), t
                }
                set peerMeta(t) {
                    this._peerMeta = t
                }
                get peerMeta() {
                    let t = this._peerMeta;
                    return t
                }
                set handshakeTopic(t) {
                    t && (this._handshakeTopic = t)
                }
                get handshakeTopic() {
                    return this._handshakeTopic
                }
                set handshakeId(t) {
                    t && (this._handshakeId = t)
                }
                get handshakeId() {
                    return this._handshakeId
                }
                get uri() {
                    let t = this._formatUri();
                    return t
                }
                set uri(t) {
                    if (!t) return;
                    let {
                        handshakeTopic: e,
                        bridge: n,
                        key: r
                    } = this._parseUri(t);
                    this.handshakeTopic = e, this.bridge = n, this.key = r
                }
                set chainId(t) {
                    this._chainId = t
                }
                get chainId() {
                    let t = this._chainId;
                    return t
                }
                set networkId(t) {
                    this._networkId = t
                }
                get networkId() {
                    let t = this._networkId;
                    return t
                }
                set accounts(t) {
                    this._accounts = t
                }
                get accounts() {
                    let t = this._accounts;
                    return t
                }
                set rpcUrl(t) {
                    this._rpcUrl = t
                }
                get rpcUrl() {
                    let t = this._rpcUrl;
                    return t
                }
                set connected(t) {}
                get connected() {
                    return this._connected
                }
                set pending(t) {}
                get pending() {
                    return !!this._handshakeTopic
                }
                get session() {
                    return {
                        connected: this.connected,
                        accounts: this.accounts,
                        chainId: this.chainId,
                        bridge: this.bridge,
                        key: this.key,
                        clientId: this.clientId,
                        clientMeta: this.clientMeta,
                        peerId: this.peerId,
                        peerMeta: this.peerMeta,
                        handshakeId: this.handshakeId,
                        handshakeTopic: this.handshakeTopic
                    }
                }
                set session(t) {
                    t && (this._connected = t.connected, this.accounts = t.accounts, this.chainId = t.chainId, this.bridge = t.bridge, this.key = t.key, this.clientId = t.clientId, this.clientMeta = t.clientMeta, this.peerId = t.peerId, this.peerMeta = t.peerMeta, this.handshakeId = t.handshakeId, this.handshakeTopic = t.handshakeTopic)
                }
                on(t, e) {
                    this._eventManager.subscribe({
                        event: t,
                        callback: e
                    })
                }
                off(t) {
                    this._eventManager.unsubscribe(t)
                }
                async createInstantRequest(t) {
                    this._key = await this._generateKey();
                    let e = this._formatRequest({
                        method: "wc_instantRequest",
                        params: [{
                            peerId: this.clientId,
                            peerMeta: this.clientMeta,
                            request: this._formatRequest(t)
                        }]
                    });
                    this.handshakeId = e.id, this.handshakeTopic = Z(), this._eventManager.trigger({
                        event: "display_uri",
                        params: [this.uri]
                    }), this.on("modal_closed", () => {
                        throw Error(td)
                    });
                    let n = () => {
                        this.killSession()
                    };
                    try {
                        let r = await this._sendCallRequest(e);
                        return r && n(), r
                    } catch (i) {
                        throw n(), i
                    }
                }
                async connect(t) {
                    if (!this._qrcodeModal) throw Error("QRCode Modal not provided");
                    return this.connected ? {
                        chainId: this.chainId,
                        accounts: this.accounts
                    } : (await this.createSession(t), new Promise(async (t, e) => {
                        this.on("modal_closed", () => e(Error(td))), this.on("connect", (n, r) => {
                            if (n) return e(n);
                            t(r.params[0])
                        })
                    }))
                }
                async createSession(t) {
                    if (this._connected) throw Error(tu);
                    if (this.pending) return;
                    this._key = await this._generateKey();
                    let e = this._formatRequest({
                        method: "wc_sessionRequest",
                        params: [{
                            peerId: this.clientId,
                            peerMeta: this.clientMeta,
                            chainId: t && t.chainId ? t.chainId : null
                        }]
                    });
                    this.handshakeId = e.id, this.handshakeTopic = Z(), this._sendSessionRequest(e, "Session update rejected", {
                        topic: this.handshakeTopic
                    }), this._eventManager.trigger({
                        event: "display_uri",
                        params: [this.uri]
                    })
                }
                approveSession(t) {
                    if (this._connected) throw Error(tu);
                    this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
                    let e = {
                            approved: !0,
                            chainId: this.chainId,
                            networkId: this.networkId,
                            accounts: this.accounts,
                            rpcUrl: this.rpcUrl,
                            peerId: this.clientId,
                            peerMeta: this.clientMeta
                        },
                        n = {
                            id: this.handshakeId,
                            jsonrpc: "2.0",
                            result: e
                        };
                    this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                        event: "connect",
                        params: [{
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    })
                }
                rejectSession(t) {
                    if (this._connected) throw Error(tu);
                    let e = t && t.message ? t.message : "Session Rejected",
                        n = this._formatResponse({
                            id: this.handshakeId,
                            error: {
                                message: e
                            }
                        });
                    this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
                        event: "disconnect",
                        params: [{
                            message: e
                        }]
                    }), this._removeStorageSession()
                }
                updateSession(t) {
                    if (!this._connected) throw Error(tc);
                    this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
                    let e = {
                            approved: !0,
                            chainId: this.chainId,
                            networkId: this.networkId,
                            accounts: this.accounts,
                            rpcUrl: this.rpcUrl
                        },
                        n = this._formatRequest({
                            method: "wc_sessionUpdate",
                            params: [e]
                        });
                    this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
                        event: "session_update",
                        params: [{
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    }), this._manageStorageSession()
                }
                async killSession(t) {
                    let e = t ? t.message : "Session Disconnected",
                        n = this._formatRequest({
                            method: "wc_sessionUpdate",
                            params: [{
                                approved: !1,
                                chainId: null,
                                networkId: null,
                                accounts: null
                            }]
                        });
                    await this._sendRequest(n), this._handleSessionDisconnect(e)
                }
                async sendTransaction(t) {
                    if (!this._connected) throw Error(tc);
                    let e = ti(t),
                        n = this._formatRequest({
                            method: "eth_sendTransaction",
                            params: [e]
                        }),
                        r = await this._sendCallRequest(n);
                    return r
                }
                async signTransaction(t) {
                    if (!this._connected) throw Error(tc);
                    let e = ti(t),
                        n = this._formatRequest({
                            method: "eth_signTransaction",
                            params: [e]
                        }),
                        r = await this._sendCallRequest(n);
                    return r
                }
                async signMessage(t) {
                    if (!this._connected) throw Error(tc);
                    let e = this._formatRequest({
                            method: "eth_sign",
                            params: t
                        }),
                        n = await this._sendCallRequest(e);
                    return n
                }
                async signPersonalMessage(t) {
                    if (!this._connected) throw Error(tc);
                    t = tr(t);
                    let e = this._formatRequest({
                            method: "personal_sign",
                            params: t
                        }),
                        n = await this._sendCallRequest(e);
                    return n
                }
                async signTypedData(t) {
                    if (!this._connected) throw Error(tc);
                    let e = this._formatRequest({
                            method: "eth_signTypedData",
                            params: t
                        }),
                        n = await this._sendCallRequest(e);
                    return n
                }
                async updateChain(t) {
                    if (!this._connected) throw Error("Session currently disconnected");
                    let e = this._formatRequest({
                            method: "wallet_updateChain",
                            params: [t]
                        }),
                        n = await this._sendCallRequest(e);
                    return n
                }
                unsafeSend(t, e) {
                    return this._sendRequest(t, e), this._eventManager.trigger({
                        event: "call_request_sent",
                        params: [{
                            request: t,
                            options: e
                        }]
                    }), new Promise((e, n) => {
                        this._subscribeToResponse(t.id, (t, r) => {
                            if (t) {
                                n(t);
                                return
                            }
                            if (!r) throw Error("Missing JSON RPC response");
                            e(r)
                        })
                    })
                }
                async sendCustomRequest(t, e) {
                    if (!this._connected) throw Error(tc);
                    switch (t.method) {
                        case "eth_accounts":
                            return this.accounts;
                        case "eth_chainId":
                            return K(this.chainId);
                        case "eth_sendTransaction":
                        case "eth_signTransaction":
                            t.params && (t.params[0] = ti(t.params[0]));
                            break;
                        case "personal_sign":
                            t.params && (t.params = tr(t.params))
                    }
                    let n = this._formatRequest(t),
                        r = await this._sendCallRequest(n, e);
                    return r
                }
                approveRequest(t) {
                    if (X(t)) {
                        let e = this._formatResponse(t);
                        this._sendResponse(e)
                    } else throw Error('JSON-RPC success response must include "result" field')
                }
                rejectRequest(t) {
                    if (tt(t)) {
                        let e = this._formatResponse(t);
                        this._sendResponse(e)
                    } else throw Error('JSON-RPC error response must include "error" field')
                }
                transportClose() {
                    this._transport.close()
                }
                async _sendRequest(t, e) {
                    let n = this._formatRequest(t),
                        r = await this._encrypt(n),
                        i = void 0 !== (null == e ? void 0 : e.topic) ? e.topic : this.peerId,
                        o = JSON.stringify(r),
                        s = void 0 !== (null == e ? void 0 : e.forcePushNotification) ? !e.forcePushNotification : !!n.method.startsWith("wc_") || !O.includes(n.method);
                    this._transport.send(o, i, s)
                }
                async _sendResponse(t) {
                    let e = await this._encrypt(t),
                        n = this.peerId,
                        r = JSON.stringify(e);
                    this._transport.send(r, n, !0)
                }
                async _sendSessionRequest(t, e, n) {
                    this._sendRequest(t, n), this._subscribeToSessionResponse(t.id, e)
                }
                _sendCallRequest(t, e) {
                    return this._sendRequest(t, e), this._eventManager.trigger({
                        event: "call_request_sent",
                        params: [{
                            request: t,
                            options: e
                        }]
                    }), this._subscribeToCallResponse(t.id)
                }
                _formatRequest(t) {
                    if (void 0 === t.method) throw Error('JSON RPC request must have valid "method" value');
                    let e = {
                        id: void 0 === t.id ? f() : t.id,
                        jsonrpc: "2.0",
                        method: t.method,
                        params: void 0 === t.params ? [] : t.params
                    };
                    return e
                }
                _formatResponse(t) {
                    if (void 0 === t.id) throw Error('JSON RPC request must have valid "id" value');
                    let e = {
                        id: t.id,
                        jsonrpc: "2.0"
                    };
                    if (tt(t)) {
                        let n = function(t) {
                                let e = t.message || "Failed or Rejected Request",
                                    n = -32e3;
                                if (t && !t.code) switch (e) {
                                    case "Parse error":
                                        n = -32700;
                                        break;
                                    case "Invalid request":
                                        n = -32600;
                                        break;
                                    case "Method not found":
                                        n = -32601;
                                        break;
                                    case "Invalid params":
                                        n = -32602;
                                        break;
                                    case "Internal error":
                                        n = -32603;
                                        break;
                                    default:
                                        n = -32e3
                                }
                                let r = {
                                    code: n,
                                    message: e
                                };
                                return t.data && (r.data = t.data), r
                            }(t.error),
                            r = Object.assign(Object.assign(Object.assign({}, e), t), {
                                error: n
                            });
                        return r
                    }
                    if (X(t)) {
                        let i = Object.assign(Object.assign({}, e), t);
                        return i
                    }
                    throw Error(th)
                }
                _handleSessionDisconnect(t) {
                    this._connected || (this._qrcodeModal && this._qrcodeModal.close(), (0, R.removeLocal)(R.mobileLinkChoiceKey)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
                        event: "disconnect",
                        params: [{
                            message: t || "Session Disconnected"
                        }]
                    }), this._removeStorageSession(), this.transportClose()
                }
                _handleSessionResponse(t, e) {
                    e && e.approved ? (this._connected ? (e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), this._eventManager.trigger({
                        event: "session_update",
                        params: [{
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    })) : (this._connected = !0, e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), e.peerId && !this.peerId && (this.peerId = e.peerId), e.peerMeta && !this.peerMeta && (this.peerMeta = e.peerMeta), this._eventManager.trigger({
                        event: "connect",
                        params: [{
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    })), this._manageStorageSession()) : this._handleSessionDisconnect(t)
                }
                async _handleIncomingMessages(t) {
                    let e;
                    let n = [this.clientId, this.handshakeTopic];
                    if (!n.includes(t.topic)) return;
                    try {
                        e = JSON.parse(t.payload)
                    } catch (r) {
                        return
                    }
                    let i = await this._decrypt(e);
                    i && this._eventManager.trigger(i)
                }
                _subscribeToSessionRequest() {
                    this._transport.subscribe(this.handshakeTopic)
                }
                _subscribeToResponse(t, e) {
                    this.on(`response:${t}`, e)
                }
                _subscribeToSessionResponse(t, e) {
                    this._subscribeToResponse(t, (t, n) => {
                        if (t) {
                            this._handleSessionResponse(t.message);
                            return
                        }
                        X(n) ? this._handleSessionResponse(e, n.result) : n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(e)
                    })
                }
                _subscribeToCallResponse(t) {
                    return new Promise((e, n) => {
                        this._subscribeToResponse(t, (t, r) => {
                            if (t) {
                                n(t);
                                return
                            }
                            X(r) ? e(r.result) : r.error && r.error.message ? n(r.error) : n(Error(th))
                        })
                    })
                }
                _subscribeToInternalEvents() {
                    this.on("display_uri", () => {
                        this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
                            this._eventManager.trigger({
                                event: "modal_closed",
                                params: []
                            })
                        }, this._qrcodeModalOptions)
                    }), this.on("connect", () => {
                        this._qrcodeModal && this._qrcodeModal.close()
                    }), this.on("call_request_sent", (t, e) => {
                        let {
                            request: n
                        } = e.params[0];
                        if ((0, R.isMobile)() && this._signingMethods.includes(n.method)) {
                            let r = (0, R.getLocal)(R.mobileLinkChoiceKey);
                            r && (window.location.href = r.href)
                        }
                    }), this.on("wc_sessionRequest", (t, e) => {
                        t && this._eventManager.trigger({
                            event: "error",
                            params: [{
                                code: "SESSION_REQUEST_ERROR",
                                message: t.toString()
                            }]
                        }), this.handshakeId = e.id, this.peerId = e.params[0].peerId, this.peerMeta = e.params[0].peerMeta;
                        let n = Object.assign(Object.assign({}, e), {
                            method: "session_request"
                        });
                        this._eventManager.trigger(n)
                    }), this.on("wc_sessionUpdate", (t, e) => {
                        t && this._handleSessionResponse(t.message), this._handleSessionResponse("Session disconnected", e.params[0])
                    })
                }
                _initTransport() {
                    this._transport.on("message", t => this._handleIncomingMessages(t)), this._transport.on("open", () => this._eventManager.trigger({
                        event: "transport_open",
                        params: []
                    })), this._transport.on("close", () => this._eventManager.trigger({
                        event: "transport_close",
                        params: []
                    })), this._transport.on("error", () => this._eventManager.trigger({
                        event: "transport_error",
                        params: ["Websocket connection failed"]
                    })), this._transport.open()
                }
                _formatUri() {
                    let t = this.protocol,
                        e = this.handshakeTopic,
                        n = this.version,
                        r = encodeURIComponent(this.bridge),
                        i = this.key,
                        o = `${t}:${e}@${n}?bridge=${r}&key=${i}`;
                    return o
                }
                _parseUri(t) {
                    let e = function(t) {
                        let e = t.indexOf(":"),
                            n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                            r = t.substring(0, e),
                            i = t.substring(e + 1, n),
                            o = function(t) {
                                let e = t.split("@"),
                                    n = {
                                        handshakeTopic: e[0],
                                        version: parseInt(e[1], 10)
                                    };
                                return n
                            }(i),
                            s = void 0 !== n ? t.substr(n) : "",
                            a = function(t) {
                                let e = to.parse(t),
                                    n = {
                                        key: e.key || "",
                                        bridge: e.bridge || ""
                                    };
                                return n
                            }(s),
                            l = Object.assign(Object.assign({
                                protocol: r
                            }, o), a);
                        return l
                    }(t);
                    if (e.protocol === this.protocol) {
                        if (!e.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                        let n = e.handshakeTopic;
                        if (!e.bridge) throw Error("Invalid or missing bridge url parameter value");
                        let r = decodeURIComponent(e.bridge);
                        if (!e.key) throw Error("Invalid or missing key parameter value");
                        let i = e.key;
                        return {
                            handshakeTopic: n,
                            bridge: r,
                            key: i
                        }
                    }
                    throw Error("URI format is invalid")
                }
                async _generateKey() {
                    if (this._cryptoLib) {
                        let t = await this._cryptoLib.generateKey();
                        return t
                    }
                    return null
                }
                async _encrypt(t) {
                    let e = this._key;
                    if (this._cryptoLib && e) {
                        let n = await this._cryptoLib.encrypt(t, e);
                        return n
                    }
                    return null
                }
                async _decrypt(t) {
                    let e = this._key;
                    if (this._cryptoLib && e) {
                        let n = await this._cryptoLib.decrypt(t, e);
                        return n
                    }
                    return null
                }
                _getStorageSession() {
                    let t = null;
                    return this._sessionStorage && (t = this._sessionStorage.getSession()), t
                }
                _setStorageSession() {
                    this._sessionStorage && this._sessionStorage.setSession(this.session)
                }
                _removeStorageSession() {
                    this._sessionStorage && this._sessionStorage.removeSession()
                }
                _manageStorageSession() {
                    this._connected ? this._setStorageSession() : this._removeStorageSession()
                }
                _registerPushServer(t) {
                    if (!t.url || "string" != typeof t.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                    if (!t.type || "string" != typeof t.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                    if (!t.token || "string" != typeof t.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                    let e = {
                        bridge: this.bridge,
                        topic: this.clientId,
                        type: t.type,
                        token: t.token,
                        peerName: "",
                        language: t.language || ""
                    };
                    this.on("connect", async (n, r) => {
                        if (n) throw n;
                        if (t.peerMeta) {
                            let i = r.params[0].peerMeta.name;
                            e.peerName = i
                        }
                        try {
                            let o = await fetch(`${t.url}/new`, {
                                    method: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(e)
                                }),
                                s = await o.json();
                            if (!s.success) throw Error("Failed to register in Push Server")
                        } catch (a) {
                            throw Error("Failed to register in Push Server")
                        }
                    })
                }
            };
            let t_ = "AES-CBC",
                tv = "HMAC";
            async function ty(t, e = t_) {
                return d.getSubtleCrypto().importKey("raw", t, e === t_ ? {
                    length: 256,
                    name: t_
                } : {
                    hash: {
                        name: "SHA-256"
                    },
                    name: tv
                }, !0, e === t_ ? ["encrypt", "decrypt"] : ["sign", "verify"])
            }
            async function tw(t, e, n) {
                let r = d.getSubtleCrypto(),
                    i = await ty(e, t_),
                    o = await r.encrypt({
                        iv: t,
                        name: t_
                    }, i, n);
                return new Uint8Array(o)
            }
            async function tb(t, e, n) {
                let r = d.getSubtleCrypto(),
                    i = await ty(e, t_),
                    o = await r.decrypt({
                        iv: t,
                        name: t_
                    }, i, n);
                return new Uint8Array(o)
            }
            async function tM(t, e) {
                let n = d.getSubtleCrypto(),
                    r = await ty(t, tv),
                    i = await n.sign({
                        length: 256,
                        name: tv
                    }, r, e);
                return new Uint8Array(i)
            }
            async function tx(t, e) {
                let n = await tM(t, e);
                return n
            }
            async function tE(t) {
                let e = function(t) {
                        let e = d.getBrowerCrypto();
                        return e.getRandomValues(new Uint8Array(t))
                    }((t || 256) / 8),
                    n = j(B()(e)).buffer;
                return n
            }
            async function tk(t, e) {
                let n = W(t.data),
                    r = W(t.iv),
                    i = W(t.hmac),
                    o = F(i, !1),
                    s = $(n, r),
                    a = await tx(e, s),
                    l = F(a, !1);
                return H(o) === H(l)
            }
            async function tS(t, e, n) {
                let r = j(Y(e)),
                    i = n || await tE(128),
                    o = j(Y(i)),
                    s = F(o, !1),
                    a = JSON.stringify(t),
                    l = j(z(a)),
                    u = await tw(o, r, l),
                    c = F(u, !1),
                    h = $(u, o),
                    d = await tx(r, h),
                    f = F(d, !1);
                return {
                    data: c,
                    hmac: f,
                    iv: s
                }
            }
            async function tC(t, e) {
                var n;
                let r;
                let i = j(Y(e));
                if (!i) throw Error("Missing key: required for decryption");
                let o = await tk(t, i);
                if (!o) return null;
                let s = W(t.data),
                    a = W(t.iv),
                    l = await tb(a, i, s),
                    u = (n = l, B()(n).toString(U));
                try {
                    r = JSON.parse(u)
                } catch (c) {
                    return null
                }
                return r
            }
            var tI = class extends tg {
                    constructor(t, e) {
                        super({
                            cryptoLib: r,
                            connectorOpts: t,
                            pushServerOpts: e
                        })
                    }
                },
                tR = n(4337),
                tA = n.n(tR);
            class tO extends g {
                constructor(t) {
                    super(), this.events = new(o()), this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = t, this.chainId = (null == t ? void 0 : t.chainId) || this.chainId, this.wc = this.register(t)
                }
                get connected() {
                    return void 0 !== this.wc && this.wc.connected
                }
                get connecting() {
                    return this.pending
                }
                get connector() {
                    return this.wc = this.register(this.opts), this.wc
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t) {
                    if (this.connected) {
                        this.onOpen();
                        return
                    }
                    return new Promise((e, n) => {
                        this.on("error", t => {
                            n(t)
                        }), this.on("open", () => {
                            e()
                        }), this.create(t)
                    })
                }
                async close() {
                    void 0 !== this.wc && (this.wc.connected && this.wc.killSession(), this.onClose())
                }
                async send(t) {
                    this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(t).then(t => this.events.emit("payload", t)).catch(e => this.events.emit("payload", p(t.id, e.message)))
                }
                register(t) {
                    if (this.wc) return this.wc;
                    this.opts = t || this.opts, this.bridge = (null == t ? void 0 : t.connector) ? t.connector.bridge : (null == t ? void 0 : t.bridge) || "https://bridge.walletconnect.org", this.qrcode = void 0 === (null == t ? void 0 : t.qrcode) || !1 !== t.qrcode, this.chainId = void 0 !== (null == t ? void 0 : t.chainId) ? t.chainId : this.chainId, this.qrcodeModalOptions = null == t ? void 0 : t.qrcodeModalOptions;
                    let e = {
                        bridge: this.bridge,
                        qrcodeModal: this.qrcode ? tA() : void 0,
                        qrcodeModalOptions: this.qrcodeModalOptions,
                        storageId: null == t ? void 0 : t.storageId,
                        signingMethods: null == t ? void 0 : t.signingMethods,
                        clientMeta: null == t ? void 0 : t.clientMeta
                    };
                    if (this.wc = void 0 !== (null == t ? void 0 : t.connector) ? t.connector : new tI(e), void 0 === this.wc) throw Error("Failed to register WalletConnect connector");
                    return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc
                }
                onOpen(t) {
                    this.pending = !1, t && (this.wc = t), this.events.emit("open")
                }
                onClose() {
                    this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close")
                }
                onError(t, e = "Failed or Rejected Request", n = -32e3, r) {
                    let i = {
                        id: t.id,
                        jsonrpc: t.jsonrpc,
                        error: {
                            code: n,
                            message: e
                        }
                    };
                    return void 0 !== r && (i.error.data = r), this.events.emit("payload", i), i
                }
                create(t) {
                    this.wc = this.register(this.opts), this.chainId = t || this.chainId, this.connected || this.pending || (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
                        chainId: this.chainId
                    }).then(() => this.events.emit("created")).catch(t => this.events.emit("error", t)))
                }
                registerConnectorEvents() {
                    this.wc = this.register(this.opts), this.wc.on("connect", t => {
                        var e, n;
                        if (t) {
                            this.events.emit("error", t);
                            return
                        }
                        this.accounts = (null === (e = this.wc) || void 0 === e ? void 0 : e.accounts) || [], this.chainId = (null === (n = this.wc) || void 0 === n ? void 0 : n.chainId) || this.chainId, this.onOpen()
                    }), this.wc.on("disconnect", t => {
                        if (t) {
                            this.events.emit("error", t);
                            return
                        }
                        this.onClose()
                    }), this.wc.on("modal_closed", () => {
                        this.events.emit("error", Error("User closed modal"))
                    }), this.wc.on("session_update", (t, e) => {
                        let {
                            accounts: n,
                            chainId: r
                        } = e.params[0];
                        (!this.accounts || n && this.accounts !== n) && (this.accounts = n, this.events.emit("accountsChanged", n)), (!this.chainId || r && this.chainId !== r) && (this.chainId = r, this.events.emit("chainChanged", r))
                    })
                }
                async sendPayload(t) {
                    this.wc = this.register(this.opts);
                    try {
                        let e = await this.wc.unsafeSend(t);
                        return this.sanitizeResponse(e)
                    } catch (n) {
                        return this.onError(t, n.message)
                    }
                }
                sanitizeResponse(t) {
                    return void 0 !== t.error && void 0 === t.error.code ? p(t.id, t.error.message, t.error.data) : t
                }
            }
            var tT = class {
                constructor(t) {
                    this.events = new(o()), this.rpc = {
                        infuraId: null == t ? void 0 : t.infuraId,
                        custom: null == t ? void 0 : t.rpc
                    }, this.signer = new b(new tO(t));
                    let e = this.signer.connection.chainId || (null == t ? void 0 : t.chainId) || 1;
                    this.http = this.setHttpProvider(e), this.registerEventListeners()
                }
                get connected() {
                    return this.signer.connection.connected
                }
                get connector() {
                    return this.signer.connection.connector
                }
                get accounts() {
                    return this.signer.connection.accounts
                }
                get chainId() {
                    return this.signer.connection.chainId
                }
                get rpcUrl() {
                    var t;
                    return (null === (t = this.http) || void 0 === t ? void 0 : t.connection).url || ""
                }
                async request(t) {
                    switch (t.method) {
                        case "eth_requestAccounts":
                            return await this.connect(), this.signer.connection.accounts;
                        case "eth_accounts":
                            return this.signer.connection.accounts;
                        case "eth_chainId":
                            return this.signer.connection.chainId
                    }
                    if (O.includes(t.method)) return this.signer.request(t);
                    if (void 0 === this.http) throw Error(`Cannot request JSON-RPC method (${t.method}) without provided rpc url`);
                    return this.http.request(t)
                }
                sendAsync(t, e) {
                    this.request(t).then(t => e(null, t)).catch(t => e(t, void 0))
                }
                async enable() {
                    let t = await this.request({
                        method: "eth_requestAccounts"
                    });
                    return t
                }
                async connect() {
                    this.signer.connection.connected || await this.signer.connect()
                }
                async disconnect() {
                    this.signer.connection.connected && await this.signer.disconnect()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                get isWalletConnect() {
                    return !0
                }
                registerEventListeners() {
                    this.signer.connection.on("accountsChanged", t => {
                        this.events.emit("accountsChanged", t)
                    }), this.signer.connection.on("chainChanged", t => {
                        this.http = this.setHttpProvider(t), this.events.emit("chainChanged", t)
                    }), this.signer.on("disconnect", () => {
                        this.events.emit("disconnect")
                    })
                }
                setHttpProvider(t) {
                    let e = function(t, e) {
                        let n;
                        let r = function(t, e) {
                            let n;
                            let r = T[t];
                            return r && (n = `https://${r}.infura.io/v3/${e}`), n
                        }(t, e.infuraId);
                        return e.custom && e.custom[t] ? n = e.custom[t] : r && (n = r), n
                    }(t, this.rpc);
                    if (void 0 === e) return;
                    let n = new b(new I(e));
                    return n
                }
            }
        },
        4337: function(t, e, n) {
            var r = n(34155);

            function i(t) {
                return t && "object" == typeof t && "default" in t ? t.default : t
            }
            var o = n(37946),
                s = i(n(33133)),
                a = i(n(20640)),
                l = n(89714);
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var u = "walletconnect-wrapper",
                c = "walletconnect-style-sheet",
                h = "walletconnect-qrcode-modal",
                d = "walletconnect-qrcode-text";

            function f(t) {
                return l.createElement("div", {
                    className: "walletconnect-modal__header"
                }, l.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
                    className: "walletconnect-modal__headerLogo"
                }), l.createElement("p", null, "WalletConnect"), l.createElement("div", {
                    className: "walletconnect-modal__close__wrapper",
                    onClick: t.onClose
                }, l.createElement("div", {
                    id: "walletconnect-qrcode-close",
                    className: "walletconnect-modal__close__icon"
                }, l.createElement("div", {
                    className: "walletconnect-modal__close__line1"
                }), l.createElement("div", {
                    className: "walletconnect-modal__close__line2"
                }))))
            }

            function p(t) {
                return l.createElement("a", {
                    className: "walletconnect-connect__button",
                    href: t.href,
                    id: "walletconnect-connect-button-" + t.name,
                    onClick: t.onClick,
                    rel: "noopener noreferrer",
                    style: {
                        backgroundColor: t.color
                    },
                    target: "_blank"
                }, t.name)
            }

            function m(t) {
                var e = t.color,
                    n = t.href,
                    r = t.name,
                    i = t.logo,
                    o = t.onClick;
                return l.createElement("a", {
                    className: "walletconnect-modal__base__row",
                    href: n,
                    onClick: o,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, l.createElement("h3", {
                    className: "walletconnect-modal__base__row__h3"
                }, r), l.createElement("div", {
                    className: "walletconnect-modal__base__row__right"
                }, l.createElement("div", {
                    className: "walletconnect-modal__base__row__right__app-icon",
                    style: {
                        background: "url('" + i + "') " + e,
                        backgroundSize: "100%"
                    }
                }), l.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
                    className: "walletconnect-modal__base__row__right__caret"
                })))
            }

            function g(t) {
                var e = t.color,
                    n = t.href,
                    r = t.name,
                    i = t.logo,
                    o = t.onClick,
                    s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
                return l.createElement("a", {
                    className: "walletconnect-connect__button__icon_anchor",
                    href: n,
                    onClick: o,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, l.createElement("div", {
                    className: "walletconnect-connect__button__icon",
                    style: {
                        background: "url('" + i + "') " + e,
                        backgroundSize: "100%"
                    }
                }), l.createElement("div", {
                    style: {
                        fontSize: s
                    },
                    className: "walletconnect-connect__button__text"
                }, r))
            }

            function _(t) {
                var e = o.isAndroid(),
                    n = l.useState(""),
                    r = n[0],
                    i = n[1],
                    s = l.useState(""),
                    a = s[0],
                    u = s[1],
                    c = l.useState(1),
                    h = c[0],
                    f = c[1],
                    _ = a ? t.links.filter(function(t) {
                        return t.name.toLowerCase().includes(a.toLowerCase())
                    }) : t.links,
                    v = t.errorMessage,
                    y = a || _.length > 5,
                    w = Math.ceil(_.length / 12),
                    b = [(h - 1) * 12 + 1, 12 * h],
                    M = _.length ? _.filter(function(t, e) {
                        return e + 1 >= b[0] && e + 1 <= b[1]
                    }) : [],
                    x = void 0;
                return l.createElement("div", null, l.createElement("p", {
                    id: d,
                    className: "walletconnect-qrcode__text"
                }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && l.createElement("input", {
                    className: "walletconnect-search__input",
                    placeholder: "Search",
                    value: r,
                    onChange: function(t) {
                        i(t.target.value), clearTimeout(x), t.target.value ? x = setTimeout(function() {
                            u(t.target.value), f(1)
                        }, 1e3) : (i(""), u(""), f(1))
                    }
                }), l.createElement("div", {
                    className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : y && _.length ? "__wrap" : "")
                }, e ? l.createElement(p, {
                    name: t.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: t.uri,
                    onClick: l.useCallback(function() {
                        o.saveMobileLinkInfo({
                            name: "Unknown",
                            href: t.uri
                        })
                    }, [])
                }) : M.length ? M.map(function(e) {
                    var n = e.color,
                        r = e.name,
                        i = e.shortName,
                        s = e.logo,
                        a = o.formatIOSMobile(t.uri, e),
                        u = l.useCallback(function() {
                            o.saveMobileLinkInfo({
                                name: r,
                                href: a
                            })
                        }, [M]);
                    return y ? l.createElement(g, {
                        color: n,
                        href: a,
                        name: i || r,
                        logo: s,
                        onClick: u
                    }) : l.createElement(m, {
                        color: n,
                        href: a,
                        name: r,
                        logo: s,
                        onClick: u
                    })
                }) : l.createElement(l.Fragment, null, l.createElement("p", null, v.length ? t.errorMessage : t.links.length && !_.length ? t.text.no_wallets_found : t.text.loading))), !!(!e && w > 1) && l.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, Array(w).fill(0).map(function(t, e) {
                    var n = e + 1;
                    return l.createElement("a", {
                        style: {
                            margin: "auto 10px",
                            fontWeight: h === n ? "bold" : "normal"
                        },
                        onClick: function() {
                            return f(n)
                        }
                    }, n)
                })))
            }

            function v(t) {
                var e = !!t.message.trim();
                return l.createElement("div", {
                    className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
                }, t.message)
            }
            var y = function(t) {
                try {
                    var e = "";
                    return Promise.resolve(s.toString(t, {
                        margin: 0,
                        type: "svg"
                    })).then(function(t) {
                        return "string" == typeof t && (e = t.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e
                    })
                } catch (n) {
                    return Promise.reject(n)
                }
            };

            function w(t) {
                var e = l.useState(""),
                    n = e[0],
                    r = e[1],
                    i = l.useState(""),
                    o = i[0],
                    s = i[1];
                return l.useEffect(function() {
                    try {
                        return Promise.resolve(y(t.uri)).then(function(t) {
                            s(t)
                        })
                    } catch (e) {
                        Promise.reject(e)
                    }
                }, []), l.createElement("div", null, l.createElement("p", {
                    id: d,
                    className: "walletconnect-qrcode__text"
                }, t.text.scan_qrcode_with_wallet), l.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                }), l.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, l.createElement("a", {
                    onClick: function() {
                        a(t.uri) ? (r(t.text.copied_to_clipboard), setInterval(function() {
                            return r("")
                        }, 1200)) : (r("Error"), setInterval(function() {
                            return r("")
                        }, 1200))
                    }
                }, t.text.copy_to_clipboard)), l.createElement(v, {
                    message: n
                }))
            }

            function b(t) {
                var e = o.isAndroid(),
                    n = o.isMobile(),
                    r = n ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0,
                    i = l.useState(!1),
                    s = i[0],
                    a = i[1],
                    u = l.useState(!1),
                    c = u[0],
                    d = u[1],
                    p = l.useState(!n),
                    m = p[0],
                    g = p[1],
                    v = {
                        mobile: n,
                        text: t.text,
                        uri: t.uri,
                        qrcodeModalOptions: t.qrcodeModalOptions
                    },
                    y = l.useState(""),
                    b = y[0],
                    M = y[1],
                    x = l.useState(!1),
                    E = x[0],
                    k = x[1],
                    S = l.useState([]),
                    C = S[0],
                    I = S[1],
                    R = l.useState(""),
                    A = R[0],
                    O = R[1],
                    T = function() {
                        c || s || r && !r.length || C.length > 0 || l.useEffect(function() {
                            ! function() {
                                try {
                                    if (e) return Promise.resolve();
                                    a(!0);
                                    var i = function(t, e) {
                                        try {
                                            var n = t()
                                        } catch (r) {
                                            return e(r)
                                        }
                                        return n && n.then ? n.then(void 0, e) : n
                                    }(function() {
                                        var e = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : o.getWalletRegistryUrl();
                                        return Promise.resolve(fetch(e)).then(function(e) {
                                            return Promise.resolve(e.json()).then(function(e) {
                                                var i = e.listings,
                                                    s = o.getMobileLinkRegistry(o.formatMobileRegistry(i, n ? "mobile" : "desktop"), r);
                                                a(!1), d(!0), O(s.length ? "" : t.text.no_supported_wallets), I(s);
                                                var l = 1 === s.length;
                                                l && (M(o.formatIOSMobile(t.uri, s[0])), g(!0)), k(l)
                                            })
                                        })
                                    }, function(e) {
                                        a(!1), d(!0), O(t.text.something_went_wrong), console.error(e)
                                    });
                                    Promise.resolve(i && i.then ? i.then(function() {}) : void 0)
                                } catch (s) {
                                    return Promise.reject(s)
                                }
                            }()
                        })
                    };
                return T(), l.createElement("div", {
                    id: h,
                    className: "walletconnect-qrcode__base animated fadeIn"
                }, l.createElement("div", {
                    className: "walletconnect-modal__base"
                }, l.createElement(f, {
                    onClose: t.onClose
                }), E && m ? l.createElement("div", {
                    className: "walletconnect-modal__single_wallet"
                }, l.createElement("a", {
                    onClick: function() {
                        return o.saveMobileLinkInfo({
                            name: C[0].name,
                            href: b
                        })
                    },
                    href: b,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, t.text.connect_with + " " + (E ? C[0].name : "") + " ›")) : e || s || !s && C.length ? l.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle" + ((n ? m : !m) ? " right__selected" : "")
                }, l.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector"
                }), n ? l.createElement(l.Fragment, null, l.createElement("a", {
                    onClick: function() {
                        return g(!1), T()
                    }
                }, t.text.mobile), l.createElement("a", {
                    onClick: function() {
                        return g(!0)
                    }
                }, t.text.qrcode)) : l.createElement(l.Fragment, null, l.createElement("a", {
                    onClick: function() {
                        return g(!0)
                    }
                }, t.text.qrcode), l.createElement("a", {
                    onClick: function() {
                        return g(!1), T()
                    }
                }, t.text.desktop))) : null, l.createElement("div", null, !m && (e || s || C.length) ? l.createElement(_, Object.assign({}, v, {
                    links: C,
                    errorMessage: A
                })) : l.createElement(w, Object.assign({}, v)))))
            }
            var M = {
                de: {
                    choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
                    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                    connect: "Verbinden",
                    qrcode: "QR-Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "In die Zwischenablage kopieren",
                    copied_to_clipboard: "In die Zwischenablage kopiert!",
                    connect_with: "Verbinden mit Hilfe von",
                    loading: "Laden...",
                    something_went_wrong: "Etwas ist schief gelaufen",
                    no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
                    no_wallets_found: "keine Wallet gefunden"
                },
                en: {
                    choose_preferred_wallet: "Choose your preferred wallet",
                    connect_mobile_wallet: "Connect to Mobile Wallet",
                    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                    connect: "Connect",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copy to clipboard",
                    copied_to_clipboard: "Copied to clipboard!",
                    connect_with: "Connect with",
                    loading: "Loading...",
                    something_went_wrong: "Something went wrong",
                    no_supported_wallets: "There are no supported wallets yet",
                    no_wallets_found: "No wallets found"
                },
                es: {
                    choose_preferred_wallet: "Elige tu billetera preferida",
                    connect_mobile_wallet: "Conectar a billetera m\xf3vil",
                    scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vil",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Conectar mediante",
                    loading: "Cargando...",
                    something_went_wrong: "Algo sali\xf3 mal",
                    no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
                    no_wallets_found: "No se encontraron billeteras"
                },
                fr: {
                    choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
                    connect_mobile_wallet: "Se connecter au portefeuille mobile",
                    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                    connect: "Se connecter",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copier",
                    copied_to_clipboard: "Copi\xe9!",
                    connect_with: "Connectez-vous \xe0 l'aide de",
                    loading: "Chargement...",
                    something_went_wrong: "Quelque chose a mal tourn\xe9",
                    no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
                    no_wallets_found: "Aucun portefeuille trouv\xe9"
                },
                ko: {
                    choose_preferred_wallet: "원하는 지갑을 선택하세요",
                    connect_mobile_wallet: "모바일 지갑과 연결",
                    scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
                    connect: "연결",
                    qrcode: "QR 코드",
                    mobile: "모바일",
                    desktop: "데스크탑",
                    copy_to_clipboard: "클립보드에 복사",
                    copied_to_clipboard: "클립보드에 복사되었습니다!",
                    connect_with: "와 연결하다",
                    loading: "로드 중...",
                    something_went_wrong: "문제가 발생했습니다.",
                    no_supported_wallets: "아직 지원되는 지갑이 없습니다",
                    no_wallets_found: "지갑을 찾을 수 없습니다"
                },
                pt: {
                    choose_preferred_wallet: "Escolha sua carteira preferida",
                    connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
                    scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vel",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Ligar por meio de",
                    loading: "Carregamento...",
                    something_went_wrong: "Algo correu mal",
                    no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
                    no_wallets_found: "Nenhuma carteira encontrada"
                },
                zh: {
                    choose_preferred_wallet: "选择你的钱包",
                    connect_mobile_wallet: "连接至移动端钱包",
                    scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
                    connect: "连接",
                    qrcode: "二维码",
                    mobile: "移动",
                    desktop: "桌面",
                    copy_to_clipboard: "复制到剪贴板",
                    copied_to_clipboard: "复制到剪贴板成功！",
                    connect_with: "通过以下方式连接",
                    loading: "正在加载...",
                    something_went_wrong: "出了问题",
                    no_supported_wallets: "目前还没有支持的钱包",
                    no_wallets_found: "没有找到钱包"
                },
                fa: {
                    choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
                    connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
                    scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
                    connect: "اتصال",
                    qrcode: "کد QR",
                    mobile: "سیار",
                    desktop: "دسکتاپ",
                    copy_to_clipboard: "کپی به کلیپ بورد",
                    copied_to_clipboard: "در کلیپ بورد کپی شد!",
                    connect_with: "ارتباط با",
                    loading: "...بارگذاری",
                    something_went_wrong: "مشکلی پیش آمد",
                    no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
                    no_wallets_found: "هیچ کیف پولی پیدا نشد"
                }
            };

            function x() {
                var t = o.getDocumentOrThrow(),
                    e = t.getElementById(h);
                e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
                    var e = t.getElementById(u);
                    e && t.body.removeChild(e)
                }, 300))
            }
            var E = function() {
                return void 0 !== r && void 0 !== r.versions && void 0 !== r.versions.node
            };
            t.exports = {
                open: function(t, e, n) {
                    if (console.log(t), E()) ! function(t) {
                        s.toString(t, {
                            type: "terminal"
                        }).then(console.log)
                    }(t);
                    else {
                        var r, i, a, h, d;
                        (i = (r = o.getDocumentOrThrow()).getElementById(c)) && r.head.removeChild(i), (a = r.createElement("style")).setAttribute("id", c), a.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n', r.head.appendChild(a), (d = (h = o.getDocumentOrThrow()).createElement("div")).setAttribute("id", u), h.body.appendChild(d), l.render(l.createElement(b, {
                            text: M[o.getNavigatorOrThrow().language.split("-")[0] || "en"] || M.en,
                            uri: t,
                            onClose: function() {
                                x(), e && e()
                            },
                            qrcodeModalOptions: n
                        }), d)
                    }
                },
                close: function() {
                    E() || x()
                }
            }
        },
        89714: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Children: function() {
                    return tm
                },
                Component: function() {
                    return y
                },
                Fragment: function() {
                    return v
                },
                PureComponent: function() {
                    return tc
                },
                Suspense: function() {
                    return t_
                },
                SuspenseList: function() {
                    return tw
                },
                cloneElement: function() {
                    return tB
                },
                createContext: function() {
                    return L
                },
                createElement: function() {
                    return m
                },
                createFactory: function() {
                    return tN
                },
                createPortal: function() {
                    return tE
                },
                createRef: function() {
                    return _
                },
                default: function() {
                    return tD
                },
                findDOMNode: function() {
                    return tU
                },
                forwardRef: function() {
                    return tf
                },
                hydrate: function() {
                    return tI
                },
                isValidElement: function() {
                    return tL
                },
                lazy: function() {
                    return ty
                },
                memo: function() {
                    return th
                },
                render: function() {
                    return tC
                },
                unmountComponentAtNode: function() {
                    return tq
                },
                unstable_batchedUpdates: function() {
                    return tj
                },
                useCallback: function() {
                    return X
                },
                useContext: function() {
                    return tt
                },
                useDebugValue: function() {
                    return te
                },
                useEffect: function() {
                    return Y
                },
                useErrorBoundary: function() {
                    return tn
                },
                useImperativeHandle: function() {
                    return Z
                },
                useLayoutEffect: function() {
                    return K
                },
                useMemo: function() {
                    return G
                },
                useReducer: function() {
                    return V
                },
                useRef: function() {
                    return Q
                },
                useState: function() {
                    return J
                },
                version: function() {
                    return tP
                }
            });
            var r, i, o, s, a, l, u, c = {},
                h = [],
                d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

            function f(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function p(t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }

            function m(t, e, n) {
                var r, i = arguments,
                    o = {};
                for (r in e) "key" !== r && "ref" !== r && (o[r] = e[r]);
                if (arguments.length > 3)
                    for (n = [n], r = 3; r < arguments.length; r++) n.push(i[r]);
                if (null != n && (o.children = n), "function" == typeof t && null != t.defaultProps)
                    for (r in t.defaultProps) void 0 === o[r] && (o[r] = t.defaultProps[r]);
                return g(t, o, e && e.key, e && e.ref, null)
            }

            function g(t, e, n, i, o) {
                var s = {
                    type: t,
                    props: e,
                    key: n,
                    ref: i,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: o
                };
                return null == o && (s.__v = s), r.vnode && r.vnode(s), s
            }

            function _() {
                return {}
            }

            function v(t) {
                return t.children
            }

            function y(t, e) {
                this.props = t, this.context = e
            }

            function w(t, e) {
                if (null == e) return t.__ ? w(t.__, t.__.__k.indexOf(t) + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? w(t) : null
            }

            function b(t) {
                (!t.__d && (t.__d = !0) && i.push(t) && !o++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || s)(M)
            }

            function M() {
                for (var t; o = i.length;) t = i.sort(function(t, e) {
                    return t.__v.__b - e.__v.__b
                }), i = [], t.some(function(t) {
                    var e, n, r, i, o, s;
                    t.__d && (o = (i = t.__v).__e, (s = t.__P) && (e = [], (n = f({}, i)).__v = n, r = I(s, i, n, t.__n, void 0 !== s.ownerSVGElement, null, e, null == o ? w(i) : o), R(e, i), r != o && function t(e) {
                        var n, r;
                        if (null != (e = e.__) && null != e.__c) {
                            for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
                                if (null != (r = e.__k[n]) && null != r.__e) {
                                    e.__e = e.__c.base = r.__e;
                                    break
                                }
                            return t(e)
                        }
                    }(i)))
                })
            }

            function x(t, e, n, r, i, o, s, a, l) {
                var u, d, f, m, g, _, v, y = n && n.__k || h,
                    b = y.length;
                if (a == c && (a = null != o ? o[0] : b ? w(n, 0) : null), u = 0, e.__k = E(e.__k, function(n) {
                        if (null != n) {
                            if (n.__ = e, n.__b = e.__b + 1, null === (f = y[u]) || f && n.key == f.key && n.type === f.type) y[u] = void 0;
                            else
                                for (d = 0; d < b; d++) {
                                    if ((f = y[d]) && n.key == f.key && n.type === f.type) {
                                        y[d] = void 0;
                                        break
                                    }
                                    f = null
                                }
                            if (m = I(t, n, f = f || c, r, i, o, s, a, l), (d = n.ref) && f.ref != d && (v || (v = []), f.ref && v.push(f.ref, null, n), v.push(d, n.__c || m, n)), null != m) {
                                var h;
                                if (null == _ && (_ = m), void 0 !== n.__d) h = n.__d, n.__d = void 0;
                                else if (o == f || m != a || null == m.parentNode) {
                                    t: if (null == a || a.parentNode !== t) t.appendChild(m), h = null;
                                        else {
                                            for (g = a, d = 0;
                                                (g = g.nextSibling) && d < b; d += 2)
                                                if (g == m) break t;
                                            t.insertBefore(m, a), h = a
                                        }
                                    "option" == e.type && (t.value = "")
                                }
                                a = void 0 !== h ? h : m.nextSibling, "function" == typeof e.type && (e.__d = a)
                            } else a && f.__e == a && a.parentNode != t && (a = w(f))
                        }
                        return u++, n
                    }), e.__e = _, null != o && "function" != typeof e.type)
                    for (u = o.length; u--;) null != o[u] && p(o[u]);
                for (u = b; u--;) null != y[u] && O(y[u], y[u]);
                if (v)
                    for (u = 0; u < v.length; u++) A(v[u], v[++u], v[++u])
            }

            function E(t, e, n) {
                if (null == n && (n = []), null == t || "boolean" == typeof t) e && n.push(e(null));
                else if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++) E(t[r], e, n);
                else n.push(e ? e("string" == typeof t || "number" == typeof t ? g(null, t, null, null, t) : null != t.__e || null != t.__c ? g(t.type, t.props, t.key, null, t.__v) : t) : t);
                return n
            }

            function k(t, e, n) {
                "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === d.test(e) ? n + "px" : null == n ? "" : n
            }

            function S(t, e, n, r, i) {
                var o, s, a, l, u;
                if (i ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e) {
                    if (o = t.style, "string" == typeof n) o.cssText = n;
                    else {
                        if ("string" == typeof r && (o.cssText = "", r = null), r)
                            for (l in r) n && l in n || k(o, l, "");
                        if (n)
                            for (u in n) r && n[u] === r[u] || k(o, u, n[u])
                    }
                } else "o" === e[0] && "n" === e[1] ? (s = e !== (e = e.replace(/Capture$/, "")), e = ((a = e.toLowerCase()) in t ? a : e).slice(2), n ? (r || t.addEventListener(e, C, s), (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, C, s)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !i && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null != n && (!1 !== n || /^ar/.test(e)) ? t.setAttribute(e, n) : t.removeAttribute(e))
            }

            function C(t) {
                this.l[t.type](r.event ? r.event(t) : t)
            }

            function I(t, e, n, i, o, s, a, l, u) {
                var d, p, m, g, _, w, b, M, E, k, C = e.type;
                if (void 0 !== e.constructor) return null;
                (d = r.__b) && d(e);
                try {
                    t: if ("function" == typeof C) {
                        if (M = e.props, E = (d = C.contextType) && i[d.__c], k = d ? E ? E.props.value : d.__ : i, n.__c ? b = (p = e.__c = n.__c).__ = p.__E : ("prototype" in C && C.prototype.render ? e.__c = p = new C(M, k) : (e.__c = p = new y(M, k), p.constructor = C, p.render = T), E && E.sub(p), p.props = M, p.state || (p.state = {}), p.context = k, p.__n = i, m = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != C.getDerivedStateFromProps && (p.__s == p.state && (p.__s = f({}, p.__s)), f(p.__s, C.getDerivedStateFromProps(M, p.__s))), g = p.props, _ = p.state, m) null == C.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
                        else {
                            if (null == C.getDerivedStateFromProps && M !== g && null != p.componentWillReceiveProps && p.componentWillReceiveProps(M, k), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(M, p.__s, k) || e.__v === n.__v && !p.__) {
                                for (p.props = M, p.state = p.__s, e.__v !== n.__v && (p.__d = !1), p.__v = e, e.__e = n.__e, e.__k = n.__k, p.__h.length && a.push(p), d = 0; d < e.__k.length; d++) e.__k[d] && (e.__k[d].__ = e);
                                break t
                            }
                            null != p.componentWillUpdate && p.componentWillUpdate(M, p.__s, k), null != p.componentDidUpdate && p.__h.push(function() {
                                p.componentDidUpdate(g, _, w)
                            })
                        }
                        p.context = k, p.props = M, p.state = p.__s, (d = r.__r) && d(e), p.__d = !1, p.__v = e, p.__P = t, d = p.render(p.props, p.state, p.context), e.__k = null != d && d.type == v && null == d.key ? d.props.children : Array.isArray(d) ? d : [d], null != p.getChildContext && (i = f(f({}, i), p.getChildContext())), m || null == p.getSnapshotBeforeUpdate || (w = p.getSnapshotBeforeUpdate(g, _)), x(t, e, n, i, o, s, a, l, u), p.base = e.__e, p.__h.length && a.push(p), b && (p.__E = p.__ = null), p.__e = !1
                    } else null == s && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = function(t, e, n, r, i, o, s, a) {
                        var l, u, d, f, p, m = n.props,
                            g = e.props;
                        if (i = "svg" === e.type || i, null != o) {
                            for (l = 0; l < o.length; l++)
                                if (null != (u = o[l]) && ((null === e.type ? 3 === u.nodeType : u.localName === e.type) || t == u)) {
                                    t = u, o[l] = null;
                                    break
                                }
                        }
                        if (null == t) {
                            if (null === e.type) return document.createTextNode(g);
                            t = i ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, g.is && {
                                is: g.is
                            }), o = null, a = !1
                        }
                        if (null === e.type) m !== g && t.data != g && (t.data = g);
                        else {
                            if (null != o && (o = h.slice.call(t.childNodes)), d = (m = n.props || c).dangerouslySetInnerHTML, f = g.dangerouslySetInnerHTML, !a) {
                                if (m === c)
                                    for (m = {}, p = 0; p < t.attributes.length; p++) m[t.attributes[p].name] = t.attributes[p].value;
                                (f || d) && (f && d && f.__html == d.__html || (t.innerHTML = f && f.__html || ""))
                            }(function(t, e, n, r, i) {
                                var o;
                                for (o in n) "children" === o || "key" === o || o in e || S(t, o, null, n[o], r);
                                for (o in e) i && "function" != typeof e[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === e[o] || S(t, o, e[o], n[o], r)
                            })(t, g, m, i, a), f ? e.__k = [] : (e.__k = e.props.children, x(t, e, n, r, "foreignObject" !== e.type && i, o, s, c, a)), a || ("value" in g && void 0 !== (l = g.value) && l !== t.value && S(t, "value", l, m.value, !1), "checked" in g && void 0 !== (l = g.checked) && l !== t.checked && S(t, "checked", l, m.checked, !1))
                        }
                        return t
                    }(n.__e, e, n, i, o, s, a, u);
                    (d = r.diffed) && d(e)
                }
                catch (I) {
                    e.__v = null, r.__e(I, e, n)
                }
                return e.__e
            }

            function R(t, e) {
                r.__c && r.__c(e, t), t.some(function(e) {
                    try {
                        t = e.__h, e.__h = [], t.some(function(t) {
                            t.call(e)
                        })
                    } catch (n) {
                        r.__e(n, e.__v)
                    }
                })
            }

            function A(t, e, n) {
                try {
                    "function" == typeof t ? t(e) : t.current = e
                } catch (i) {
                    r.__e(i, n)
                }
            }

            function O(t, e, n) {
                var i, o, s;
                if (r.unmount && r.unmount(t), (i = t.ref) && (i.current && i.current !== t.__e || A(i, null, e)), n || "function" == typeof t.type || (n = null != (o = t.__e)), t.__e = t.__d = void 0, null != (i = t.__c)) {
                    if (i.componentWillUnmount) try {
                        i.componentWillUnmount()
                    } catch (a) {
                        r.__e(a, e)
                    }
                    i.base = i.__P = null
                }
                if (i = t.__k)
                    for (s = 0; s < i.length; s++) i[s] && O(i[s], e, n);
                null != o && p(o)
            }

            function T(t, e, n) {
                return this.constructor(t, n)
            }

            function P(t, e, n) {
                var i, o, s;
                r.__ && r.__(t, e), o = (i = n === l) ? null : n && n.__k || e.__k, t = m(v, null, [t]), s = [], I(e, (i ? e : n || e).__k = t, o || c, c, void 0 !== e.ownerSVGElement, n && !i ? [n] : o ? null : h.slice.call(e.childNodes), s, n || c, i), R(s, t)
            }

            function N(t, e) {
                var n, r;
                for (r in e = f(f({}, t.props), e), arguments.length > 2 && (e.children = h.slice.call(arguments, 2)), n = {}, e) "key" !== r && "ref" !== r && (n[r] = e[r]);
                return g(t.type, n, e.key || t.key, e.ref || t.ref, null)
            }

            function L(t) {
                var e = {},
                    n = {
                        __c: "__cC" + u++,
                        __: t,
                        Consumer: function(t, e) {
                            return t.children(e)
                        },
                        Provider: function(t) {
                            var r, i = this;
                            return this.getChildContext || (r = [], this.getChildContext = function() {
                                return e[n.__c] = i, e
                            }, this.shouldComponentUpdate = function(t) {
                                i.props.value !== t.value && r.some(function(e) {
                                    e.context = t.value, b(e)
                                })
                            }, this.sub = function(t) {
                                r.push(t);
                                var e = t.componentWillUnmount;
                                t.componentWillUnmount = function() {
                                    r.splice(r.indexOf(t), 1), e && e.call(t)
                                }
                            }), t.children
                        }
                    };
                return n.Consumer.contextType = n, n.Provider.__ = n, n
            }
            r = {
                __e: function(t, e) {
                    for (var n, r; e = e.__;)
                        if ((n = e.__c) && !n.__) try {
                            if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(t))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(t)), r) return b(n.__E = n)
                        } catch (i) {
                            t = i
                        }
                    throw t
                }
            }, y.prototype.setState = function(t, e) {
                var n;
                n = this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof t && (t = t(n, this.props)), t && f(n, t), null != t && this.__v && (e && this.__h.push(e), b(this))
            }, y.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), b(this))
            }, y.prototype.render = v, i = [], o = 0, s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, l = c, u = 0;
            var B, q, U, j = 0,
                D = [],
                F = r.__r,
                W = r.diffed,
                z = r.__c,
                $ = r.unmount;

            function H(t, e) {
                r.__h && r.__h(q, t, j || e), j = 0;
                var n = q.__H || (q.__H = {
                    __: [],
                    __h: []
                });
                return t >= n.__.length && n.__.push({}), n.__[t]
            }

            function J(t) {
                return j = 1, V(ta, t)
            }

            function V(t, e, n) {
                var r = H(B++, 2);
                return r.__c || (r.__c = q, r.__ = [n ? n(e) : ta(void 0, e), function(e) {
                    var n = t(r.__[0], e);
                    r.__[0] !== n && (r.__[0] = n, r.__c.setState({}))
                }]), r.__
            }

            function Y(t, e) {
                var n = H(B++, 3);
                !r.__s && ts(n.__H, e) && (n.__ = t, n.__H = e, q.__H.__h.push(n))
            }

            function K(t, e) {
                var n = H(B++, 4);
                !r.__s && ts(n.__H, e) && (n.__ = t, n.__H = e, q.__h.push(n))
            }

            function Q(t) {
                return j = 5, G(function() {
                    return {
                        current: t
                    }
                }, [])
            }

            function Z(t, e, n) {
                j = 6, K(function() {
                    "function" == typeof t ? t(e()) : t && (t.current = e())
                }, null == n ? n : n.concat(t))
            }

            function G(t, e) {
                var n = H(B++, 7);
                return ts(n.__H, e) ? (n.__H = e, n.__h = t, n.__ = t()) : n.__
            }

            function X(t, e) {
                return j = 8, G(function() {
                    return t
                }, e)
            }

            function tt(t) {
                var e = q.context[t.__c],
                    n = H(B++, 9);
                return n.__c = t, e ? (null == n.__ && (n.__ = !0, e.sub(q)), e.props.value) : t.__
            }

            function te(t, e) {
                r.useDebugValue && r.useDebugValue(e ? e(t) : t)
            }

            function tn(t) {
                var e = H(B++, 10),
                    n = J();
                return e.__ = t, q.componentDidCatch || (q.componentDidCatch = function(t) {
                    e.__ && e.__(t), n[1](t)
                }), [n[0], function() {
                    n[1](void 0)
                }]
            }

            function tr() {
                D.some(function(t) {
                    if (t.__P) try {
                        t.__H.__h.forEach(ti), t.__H.__h.forEach(to), t.__H.__h = []
                    } catch (e) {
                        return t.__H.__h = [], r.__e(e, t.__v), !0
                    }
                }), D = []
            }

            function ti(t) {
                t.t && t.t()
            }

            function to(t) {
                var e = t.__();
                "function" == typeof e && (t.t = e)
            }

            function ts(t, e) {
                return !t || e.some(function(e, n) {
                    return e !== t[n]
                })
            }

            function ta(t, e) {
                return "function" == typeof e ? e(t) : e
            }

            function tl(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function tu(t, e) {
                for (var n in t)
                    if ("__source" !== n && !(n in e)) return !0;
                for (var r in e)
                    if ("__source" !== r && t[r] !== e[r]) return !0;
                return !1
            }
            r.__r = function(t) {
                F && F(t), B = 0, (q = t.__c).__H && (q.__H.__h.forEach(ti), q.__H.__h.forEach(to), q.__H.__h = [])
            }, r.diffed = function(t) {
                W && W(t);
                var e = t.__c;
                if (e) {
                    var n = e.__H;
                    n && n.__h.length && (1 !== D.push(e) && U === r.requestAnimationFrame || ((U = r.requestAnimationFrame) || function(t) {
                        var e, n = function() {
                                clearTimeout(r), cancelAnimationFrame(e), setTimeout(t)
                            },
                            r = setTimeout(n, 100);
                        "undefined" != typeof window && (e = requestAnimationFrame(n))
                    })(tr))
                }
            }, r.__c = function(t, e) {
                e.some(function(t) {
                    try {
                        t.__h.forEach(ti), t.__h = t.__h.filter(function(t) {
                            return !t.__ || to(t)
                        })
                    } catch (n) {
                        e.some(function(t) {
                            t.__h && (t.__h = [])
                        }), e = [], r.__e(n, t.__v)
                    }
                }), z && z(t, e)
            }, r.unmount = function(t) {
                $ && $(t);
                var e = t.__c;
                if (e) {
                    var n = e.__H;
                    if (n) try {
                        n.__.forEach(function(t) {
                            return t.t && t.t()
                        })
                    } catch (i) {
                        r.__e(i, e.__v)
                    }
                }
            };
            var tc = function(t) {
                var e;

                function n(e) {
                    var n;
                    return (n = t.call(this, e) || this).isPureReactComponent = !0, n
                }
                return (e = n).prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t, n.prototype.shouldComponentUpdate = function(t, e) {
                    return tu(this.props, t) || tu(this.state, e)
                }, n
            }(y);

            function th(t, e) {
                function n(t) {
                    var n = this.props.ref,
                        r = n == t.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), e ? !e(this.props, t) || !r : tu(this.props, t)
                }

                function r(e) {
                    return this.shouldComponentUpdate = n, m(t, tl({}, e))
                }
                return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.t = !0, r
            }
            var td = r.__b;

            function tf(t) {
                function e(e) {
                    var n = tl({}, e);
                    return delete n.ref, t(n, e.ref)
                }
                return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
            }
            r.__b = function(t) {
                t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), td && td(t)
            };
            var tp = function(t, e) {
                    return t ? E(t).reduce(function(t, n, r) {
                        return t.concat(e(n, r))
                    }, []) : null
                },
                tm = {
                    map: tp,
                    forEach: tp,
                    count: function(t) {
                        return t ? E(t).length : 0
                    },
                    only: function(t) {
                        if (1 !== (t = E(t)).length) throw Error("Children.only() expects only one child.");
                        return t[0]
                    },
                    toArray: E
                },
                tg = r.__e;

            function t_() {
                this.__u = 0, this.o = null, this.__b = null
            }

            function tv(t) {
                var e = t.__.__c;
                return e && e.u && e.u(t)
            }

            function ty(t) {
                var e, n, r;

                function i(i) {
                    if (e || (e = t()).then(function(t) {
                            n = t.default || t
                        }, function(t) {
                            r = t
                        }), r) throw r;
                    if (!n) throw e;
                    return m(n, i)
                }
                return i.displayName = "Lazy", i.t = !0, i
            }

            function tw() {
                this.i = null, this.l = null
            }
            r.__e = function(t, e, n) {
                if (t.then) {
                    for (var r, i = e; i = i.__;)
                        if ((r = i.__c) && r.__c) return r.__c(t, e.__c)
                }
                tg(t, e, n)
            }, (t_.prototype = new y).__c = function(t, e) {
                var n = this;
                null == n.o && (n.o = []), n.o.push(e);
                var r = tv(n.__v),
                    i = !1,
                    o = function() {
                        i || (i = !0, r ? r(s) : s())
                    };
                e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
                    o(), e.__c && e.__c()
                };
                var s = function() {
                    var t;
                    if (!--n.__u)
                        for (n.__v.__k[0] = n.state.u, n.setState({
                                u: n.__b = null
                            }); t = n.o.pop();) t.forceUpdate()
                };
                n.__u++ || n.setState({
                    u: n.__b = n.__v.__k[0]
                }), t.then(o, o)
            }, t_.prototype.render = function(t, e) {
                return this.__b && (this.__v.__k[0] = function t(e) {
                    return e && ((e = tl({}, e)).__c = null, e.__k = e.__k && e.__k.map(t)), e
                }(this.__b), this.__b = null), [m(y, null, e.u ? null : t.children), e.u && t.fallback]
            };
            var tb = function(t, e, n) {
                if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
                    for (n = t.i; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        t.i = n = n[2]
                    }
            };
            (tw.prototype = new y).u = function(t) {
                var e = this,
                    n = tv(e.__v),
                    r = e.l.get(t);
                return r[0]++,
                    function(i) {
                        var o = function() {
                            e.props.revealOrder ? (r.push(i), tb(e, t, r)) : i()
                        };
                        n ? n(o) : o()
                    }
            }, tw.prototype.render = function(t) {
                this.i = null, this.l = new Map;
                var e = E(t.children);
                t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
                for (var n = e.length; n--;) this.l.set(e[n], this.i = [1, 0, this.i]);
                return t.children
            }, tw.prototype.componentDidUpdate = tw.prototype.componentDidMount = function() {
                var t = this;
                t.l.forEach(function(e, n) {
                    tb(t, n, e)
                })
            };
            var tM = function() {
                function t() {}
                var e = t.prototype;
                return e.getChildContext = function() {
                    return this.props.context
                }, e.render = function(t) {
                    return t.children
                }, t
            }();

            function tx(t) {
                var e = this,
                    n = t.container,
                    r = m(tM, {
                        context: e.context
                    }, t.vnode);
                return e.s && e.s !== n && (e.v.parentNode && e.s.removeChild(e.v), O(e.h), e.p = !1), t.vnode ? e.p ? (n.__k = e.__k, P(r, n), e.__k = n.__k) : (e.v = document.createTextNode(""), P("", n, l), n.appendChild(e.v), e.p = !0, e.s = n, P(r, n, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), O(e.h)), e.h = r, e.componentWillUnmount = function() {
                    e.v.parentNode && e.s.removeChild(e.v), O(e.h)
                }, null
            }

            function tE(t, e) {
                return m(tx, {
                    vnode: t,
                    container: e
                })
            }
            var tk = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
            y.prototype.isReactComponent = {};
            var tS = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

            function tC(t, e, n) {
                if (null == e.__k)
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                return P(t, e), "function" == typeof n && n(), t ? t.__c : null
            }

            function tI(t, e, n) {
                return P(t, e, l), "function" == typeof n && n(), t ? t.__c : null
            }
            var tR = r.event;

            function tA(t, e) {
                t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
                    configurable: !1,
                    get: function() {
                        return this["UNSAFE_" + e]
                    },
                    set: function(t) {
                        this["UNSAFE_" + e] = t
                    }
                })
            }
            r.event = function(t) {
                tR && (t = tR(t)), t.persist = function() {};
                var e = !1,
                    n = !1,
                    r = t.stopPropagation;
                t.stopPropagation = function() {
                    r.call(t), e = !0
                };
                var i = t.preventDefault;
                return t.preventDefault = function() {
                    i.call(t), n = !0
                }, t.isPropagationStopped = function() {
                    return e
                }, t.isDefaultPrevented = function() {
                    return n
                }, t.nativeEvent = t
            };
            var tO = {
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                tT = r.vnode;
            r.vnode = function(t) {
                t.$$typeof = tS;
                var e, n, r, i = t.type,
                    o = t.props;
                if (i) {
                    if (o.class != o.className && (tO.enumerable = "className" in o, null != o.className && (o.class = o.className), Object.defineProperty(o, "className", tO)), "function" != typeof i) {
                        for (r in o.defaultValue && void 0 !== o.value && (o.value || 0 === o.value || (o.value = o.defaultValue), delete o.defaultValue), Array.isArray(o.value) && o.multiple && "select" === i && (E(o.children).forEach(function(t) {
                                -1 != o.value.indexOf(t.props.value) && (t.props.selected = !0)
                            }), delete o.value), o)
                            if (e = tk.test(r)) break;
                        if (e)
                            for (r in n = t.props = {}, o) n[tk.test(r) ? r.replace(/[A-Z0-9]/, "-$&").toLowerCase() : r] = o[r]
                    }! function() {
                        var e = t.type,
                            n = t.props;
                        if (n && "string" == typeof e) {
                            var r = {};
                            for (var i in n) /^on(Ani|Tra|Tou)/.test(i) && (n[i.toLowerCase()] = n[i], delete n[i]), r[i.toLowerCase()] = i;
                            if (r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]), r.onbeforeinput && (n.onbeforeinput = n[r.onbeforeinput], delete n[r.onbeforeinput]), r.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(n.type))) {
                                var o = r.oninput || "oninput";
                                n[o] || (n[o] = n[r.onchange], delete n[r.onchange])
                            }
                        }
                    }(), "function" == typeof i && !i.m && i.prototype && (tA(i.prototype, "componentWillMount"), tA(i.prototype, "componentWillReceiveProps"), tA(i.prototype, "componentWillUpdate"), i.m = !0)
                }
                tT && tT(t)
            };
            var tP = "16.8.0";

            function tN(t) {
                return m.bind(null, t)
            }

            function tL(t) {
                return !!t && t.$$typeof === tS
            }

            function tB(t) {
                return tL(t) ? N.apply(null, arguments) : t
            }

            function tq(t) {
                return !!t.__k && (P(null, t), !0)
            }

            function tU(t) {
                return t && (t.base || 1 === t.nodeType && t) || null
            }
            var tj = function(t, e) {
                    return t(e)
                },
                tD = {
                    useState: J,
                    useReducer: V,
                    useEffect: Y,
                    useLayoutEffect: K,
                    useRef: Q,
                    useImperativeHandle: Z,
                    useMemo: G,
                    useCallback: X,
                    useContext: tt,
                    useDebugValue: te,
                    version: "16.8.0",
                    Children: tm,
                    render: tC,
                    hydrate: tC,
                    unmountComponentAtNode: tq,
                    createPortal: tE,
                    createElement: m,
                    createContext: L,
                    createFactory: tN,
                    cloneElement: tB,
                    createRef: _,
                    Fragment: v,
                    isValidElement: tL,
                    findDOMNode: tU,
                    Component: y,
                    PureComponent: tc,
                    memo: th,
                    forwardRef: tf,
                    unstable_batchedUpdates: tj,
                    Suspense: t_,
                    SuspenseList: tw,
                    lazy: ty
                }
        },
        33133: function(t, e, n) {
            var r = n(7708),
                i = n(34730),
                o = n(16949),
                s = n(77665);

            function a(t, e, n, o, s) {
                var a = [].slice.call(arguments, 1),
                    l = a.length,
                    u = "function" == typeof a[l - 1];
                if (!u && !r()) throw Error("Callback required as last argument");
                if (u) {
                    if (l < 2) throw Error("Too few arguments provided");
                    2 === l ? (s = n, n = e, e = o = void 0) : 3 === l && (e.getContext && void 0 === s ? (s = o, o = void 0) : (s = o, o = n, n = e, e = void 0))
                } else {
                    if (l < 1) throw Error("Too few arguments provided");
                    return 1 === l ? (n = e, e = o = void 0) : 2 !== l || e.getContext || (o = n, n = e, e = void 0), new Promise(function(r, s) {
                        try {
                            var a = i.create(n, o);
                            r(t(a, e, o))
                        } catch (l) {
                            s(l)
                        }
                    })
                }
                try {
                    var c = i.create(n, o);
                    s(null, t(c, e, o))
                } catch (h) {
                    s(h)
                }
            }
            e.create = i.create, e.toCanvas = a.bind(null, o.render), e.toDataURL = a.bind(null, o.renderToDataURL), e.toString = a.bind(null, function(t, e, n) {
                return s.render(t, n)
            })
        },
        7708: function(t) {
            t.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        13493: function(t, e, n) {
            var r = n(5351).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                for (var e = Math.floor(t / 7) + 2, n = r(t), i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)), o = [n - 7], s = 1; s < e - 1; s++) o[s] = o[s - 1] - i;
                return o.push(6), o.reverse()
            }, e.getPositions = function(t) {
                for (var n = [], r = e.getRowColCoords(t), i = r.length, o = 0; o < i; o++)
                    for (var s = 0; s < i; s++)(0 !== o || 0 !== s) && (0 !== o || s !== i - 1) && (o !== i - 1 || 0 !== s) && n.push([r[o], r[s]]);
                return n
            }
        },
        17916: function(t, e, n) {
            var r = n(89656),
                i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function o(t) {
                this.mode = r.ALPHANUMERIC, this.data = t
            }
            o.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + 6 * (t % 2)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                var e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    var n = 45 * i.indexOf(this.data[e]);
                    n += i.indexOf(this.data[e + 1]), t.put(n, 11)
                }
                this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6)
            }, t.exports = o
        },
        32626: function(t) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(t) {
                    return (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
                },
                put: function(t, e) {
                    for (var n = 0; n < e; n++) this.putBit((t >>> e - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = e
        },
        74739: function(t, e, n) {
            var r = n(19810);

            function i(t) {
                if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = r.alloc(t * t), this.reservedBit = r.alloc(t * t)
            }
            i.prototype.set = function(t, e, n, r) {
                var i = t * this.size + e;
                this.data[i] = n, r && (this.reservedBit[i] = !0)
            }, i.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, i.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }, i.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = i
        },
        77741: function(t, e, n) {
            var r = n(19810),
                i = n(89656);

            function o(t) {
                this.mode = i.BYTE, this.data = r.from(t)
            }
            o.getBitsLength = function(t) {
                return 8 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
            }, t.exports = o
        },
        48853: function(t, e, n) {
            var r = n(61250),
                i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return i[(t - 1) * 4 + 0];
                    case r.M:
                        return i[(t - 1) * 4 + 1];
                    case r.Q:
                        return i[(t - 1) * 4 + 2];
                    case r.H:
                        return i[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return o[(t - 1) * 4 + 0];
                    case r.M:
                        return o[(t - 1) * 4 + 1];
                    case r.Q:
                        return o[(t - 1) * 4 + 2];
                    case r.H:
                        return o[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        61250: function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (r) {
                    return n
                }
            }
        },
        55949: function(t, e, n) {
            var r = n(5351).getSymbolSize;
            e.getPositions = function(t) {
                var e = r(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        69977: function(t, e, n) {
            var r = n(5351),
                i = r.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                for (var n = t.bit << 3 | e, o = n << 10; r.getBCHDigit(o) - i >= 0;) o ^= 1335 << r.getBCHDigit(o) - i;
                return (n << 10 | o) ^ 21522
            }
        },
        68423: function(t, e, n) {
            var r = n(19810),
                i = r.alloc(512),
                o = r.alloc(256);
            ! function() {
                for (var t = 1, e = 0; e < 255; e++) i[e] = t, o[t] = e, 256 & (t <<= 1) && (t ^= 285);
                for (e = 255; e < 512; e++) i[e] = i[e - 255]
            }(), e.log = function(t) {
                if (t < 1) throw Error("log(" + t + ")");
                return o[t]
            }, e.exp = function(t) {
                return i[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : i[o[t] + o[e]]
            }
        },
        5558: function(t, e, n) {
            var r = n(89656),
                i = n(5351);

            function o(t) {
                this.mode = r.KANJI, this.data = t
            }
            o.getBitsLength = function(t) {
                return 13 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                var e;
                for (e = 0; e < this.data.length; e++) {
                    var n = i.toSJIS(this.data[e]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), t.put(n, 13)
                }
            }, t.exports = o
        },
        46280: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            var n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                for (var e = t.size, r = 0, i = 0, o = 0, s = null, a = null, l = 0; l < e; l++) {
                    i = o = 0, s = a = null;
                    for (var u = 0; u < e; u++) {
                        var c = t.get(l, u);
                        c === s ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), s = c, i = 1), (c = t.get(u, l)) === a ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), a = c, o = 1)
                    }
                    i >= 5 && (r += n.N1 + (i - 5)), o >= 5 && (r += n.N1 + (o - 5))
                }
                return r
            }, e.getPenaltyN2 = function(t) {
                for (var e = t.size, r = 0, i = 0; i < e - 1; i++)
                    for (var o = 0; o < e - 1; o++) {
                        var s = t.get(i, o) + t.get(i, o + 1) + t.get(i + 1, o) + t.get(i + 1, o + 1);
                        (4 === s || 0 === s) && r++
                    }
                return r * n.N2
            }, e.getPenaltyN3 = function(t) {
                for (var e = t.size, r = 0, i = 0, o = 0, s = 0; s < e; s++) {
                    i = o = 0;
                    for (var a = 0; a < e; a++) i = i << 1 & 2047 | t.get(s, a), a >= 10 && (1488 === i || 93 === i) && r++, o = o << 1 & 2047 | t.get(a, s), a >= 10 && (1488 === o || 93 === o) && r++
                }
                return r * n.N3
            }, e.getPenaltyN4 = function(t) {
                for (var e = 0, r = t.data.length, i = 0; i < r; i++) e += t.data[i];
                return Math.abs(Math.ceil(100 * e / r / 5) - 10) * n.N4
            }, e.applyMask = function(t, n) {
                for (var r = n.size, i = 0; i < r; i++)
                    for (var o = 0; o < r; o++) n.isReserved(o, i) || n.xor(o, i, function(t, n, r) {
                        switch (t) {
                            case e.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case e.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case e.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case e.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case e.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case e.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case e.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case e.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + t)
                        }
                    }(t, o, i))
            }, e.getBestMask = function(t, n) {
                for (var r = Object.keys(e.Patterns).length, i = 0, o = 1 / 0, s = 0; s < r; s++) {
                    n(s), e.applyMask(s, t);
                    var a = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(s, t), a < o && (o = a, i = s)
                }
                return i
            }
        },
        89656: function(t, e, n) {
            var r = n(42752),
                i = n(54503);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw Error("Invalid mode: " + t);
                if (!r.isValid(e)) throw Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return i.testNumeric(t) ? e.NUMERIC : i.testAlphanumeric(t) ? e.ALPHANUMERIC : i.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (r) {
                    return n
                }
            }
        },
        59262: function(t, e, n) {
            var r = n(89656);

            function i(t) {
                this.mode = r.NUMERIC, this.data = t.toString()
            }
            i.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                for (e = 0; e + 3 <= this.data.length; e += 3) n = parseInt(this.data.substr(e, 3), 10), t.put(n, 10);
                var e, n, r = this.data.length - e;
                r > 0 && (n = parseInt(this.data.substr(e), 10), t.put(n, 3 * r + 1))
            }, t.exports = i
        },
        47282: function(t, e, n) {
            var r = n(19810),
                i = n(68423);
            e.mul = function(t, e) {
                for (var n = r.alloc(t.length + e.length - 1), o = 0; o < t.length; o++)
                    for (var s = 0; s < e.length; s++) n[o + s] ^= i.mul(t[o], e[s]);
                return n
            }, e.mod = function(t, e) {
                for (var n = r.from(t); n.length - e.length >= 0;) {
                    for (var o = n[0], s = 0; s < e.length; s++) n[s] ^= i.mul(e[s], o);
                    for (var a = 0; a < n.length && 0 === n[a];) a++;
                    n = n.slice(a)
                }
                return n
            }, e.generateECPolynomial = function(t) {
                for (var n = r.from([1]), o = 0; o < t; o++) n = e.mul(n, [1, i.exp(o)]);
                return n
            }
        },
        34730: function(t, e, n) {
            var r = n(19810),
                i = n(5351),
                o = n(61250),
                s = n(32626),
                a = n(74739),
                l = n(13493),
                u = n(55949),
                c = n(46280),
                h = n(48853),
                d = n(23371),
                f = n(73166),
                p = n(69977),
                m = n(89656),
                g = n(16027),
                _ = n(5826);

            function v(t, e, n) {
                var r, i, o = t.size,
                    s = p.getEncodedBits(e, n);
                for (r = 0; r < 15; r++) i = (s >> r & 1) == 1, r < 6 ? t.set(r, 8, i, !0) : r < 8 ? t.set(r + 1, 8, i, !0) : t.set(o - 15 + r, 8, i, !0), r < 8 ? t.set(8, o - r - 1, i, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, i, !0) : t.set(8, 15 - r - 1, i, !0);
                t.set(o - 8, 8, 1, !0)
            }
            e.create = function(t, e) {
                if (void 0 === t || "" === t) throw Error("No input text");
                var n, p, y = o.M;
                return void 0 !== e && (y = o.from(e.errorCorrectionLevel, o.M), n = f.from(e.version), p = c.from(e.maskPattern), e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)),
                    function(t, e, n, o) {
                        if (_(t)) p = g.fromArray(t);
                        else if ("string" == typeof t) {
                            var p, y = e;
                            if (!y) {
                                var w = g.rawSplit(t);
                                y = f.getBestVersionForData(w, n)
                            }
                            p = g.fromString(t, y || 40)
                        } else throw Error("Invalid data");
                        var b = f.getBestVersionForData(p, n);
                        if (!b) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (e) {
                            if (e < b) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + b + ".\n")
                        } else e = b;
                        var M = function(t, e, n) {
                                var o = new s;
                                n.forEach(function(e) {
                                    o.put(e.mode.bit, 4), o.put(e.getLength(), m.getCharCountIndicator(e.mode, t)), e.write(o)
                                });
                                var a = (i.getSymbolTotalCodewords(t) - h.getTotalCodewordsCount(t, e)) * 8;
                                for (o.getLengthInBits() + 4 <= a && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                for (var l = (a - o.getLengthInBits()) / 8, u = 0; u < l; u++) o.put(u % 2 ? 17 : 236, 8);
                                return function(t, e, n) {
                                    for (var o, s, a = i.getSymbolTotalCodewords(e), l = h.getTotalCodewordsCount(e, n), u = h.getBlocksCount(e, n), c = u - a % u, f = Math.floor((a - l) / u), p = f + 1, m = Math.floor(a / u) - f, g = new d(m), _ = 0, v = Array(u), y = Array(u), w = 0, b = r.from(t.buffer), M = 0; M < u; M++) {
                                        var x = M < c ? f : p;
                                        v[M] = b.slice(_, _ + x), y[M] = g.encode(v[M]), _ += x, w = Math.max(w, x)
                                    }
                                    var E = r.alloc(a),
                                        k = 0;
                                    for (o = 0; o < w; o++)
                                        for (s = 0; s < u; s++) o < v[s].length && (E[k++] = v[s][o]);
                                    for (o = 0; o < m; o++)
                                        for (s = 0; s < u; s++) E[k++] = y[s][o];
                                    return E
                                }(o, t, e)
                            }(e, n, p),
                            x = i.getSymbolSize(e),
                            E = new a(x);
                        return function(t, e) {
                                for (var n = t.size, r = u.getPositions(e), i = 0; i < r.length; i++)
                                    for (var o = r[i][0], s = r[i][1], a = -1; a <= 7; a++)
                                        if (!(o + a <= -1) && !(n <= o + a))
                                            for (var l = -1; l <= 7; l++) s + l <= -1 || n <= s + l || (a >= 0 && a <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && l >= 2 && l <= 4 ? t.set(o + a, s + l, !0, !0) : t.set(o + a, s + l, !1, !0))
                            }(E, e),
                            function(t) {
                                for (var e = t.size, n = 8; n < e - 8; n++) {
                                    var r = n % 2 == 0;
                                    t.set(n, 6, r, !0), t.set(6, n, r, !0)
                                }
                            }(E),
                            function(t, e) {
                                for (var n = l.getPositions(e), r = 0; r < n.length; r++)
                                    for (var i = n[r][0], o = n[r][1], s = -2; s <= 2; s++)
                                        for (var a = -2; a <= 2; a++) - 2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? t.set(i + s, o + a, !0, !0) : t.set(i + s, o + a, !1, !0)
                            }(E, e), v(E, n, 0), e >= 7 && function(t, e) {
                                for (var n, r, i, o = t.size, s = f.getEncodedBits(e), a = 0; a < 18; a++) n = Math.floor(a / 3), r = a % 3 + o - 8 - 3, i = (s >> a & 1) == 1, t.set(n, r, i, !0), t.set(r, n, i, !0)
                            }(E, e),
                            function(t, e) {
                                for (var n = t.size, r = -1, i = n - 1, o = 7, s = 0, a = n - 1; a > 0; a -= 2)
                                    for (6 === a && a--;;) {
                                        for (var l = 0; l < 2; l++)
                                            if (!t.isReserved(i, a - l)) {
                                                var u = !1;
                                                s < e.length && (u = (e[s] >>> o & 1) == 1), t.set(i, a - l, u), -1 == --o && (s++, o = 7)
                                            }
                                        if ((i += r) < 0 || n <= i) {
                                            i -= r, r = -r;
                                            break
                                        }
                                    }
                            }(E, M), isNaN(o) && (o = c.getBestMask(E, v.bind(null, E, n))), c.applyMask(o, E), v(E, n, o), {
                                modules: E,
                                version: e,
                                errorCorrectionLevel: n,
                                maskPattern: o,
                                segments: p
                            }
                    }(t, n, y, p)
            }
        },
        23371: function(t, e, n) {
            var r = n(19810),
                i = n(47282),
                o = n(48764).Buffer;

            function s(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            s.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = i.generateECPolynomial(this.degree)
            }, s.prototype.encode = function(t) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                var e = r.alloc(this.degree),
                    n = o.concat([t, e], t.length + this.degree),
                    s = i.mod(n, this.genPoly),
                    a = this.degree - s.length;
                if (a > 0) {
                    var l = r.alloc(this.degree);
                    return s.copy(l, a), l
                }
                return s
            }, t.exports = s
        },
        54503: function(t, e) {
            var n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            e.KANJI = RegExp(r, "g"), e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = RegExp(i, "g"), e.NUMERIC = RegExp(n, "g"), e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            var o = RegExp("^" + r + "$"),
                s = RegExp("^" + n + "$"),
                a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return o.test(t)
            }, e.testNumeric = function(t) {
                return s.test(t)
            }, e.testAlphanumeric = function(t) {
                return a.test(t)
            }
        },
        16027: function(t, e, n) {
            var r = n(89656),
                i = n(59262),
                o = n(17916),
                s = n(77741),
                a = n(5558),
                l = n(54503),
                u = n(5351),
                c = n(65987);

            function h(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function d(t, e, n) {
                for (var r, i = []; null !== (r = t.exec(n));) i.push({
                    data: r[0],
                    index: r.index,
                    mode: e,
                    length: r[0].length
                });
                return i
            }

            function f(t) {
                var e, n, i = d(l.NUMERIC, r.NUMERIC, t),
                    o = d(l.ALPHANUMERIC, r.ALPHANUMERIC, t);
                return u.isKanjiModeEnabled() ? (e = d(l.BYTE, r.BYTE, t), n = d(l.KANJI, r.KANJI, t)) : (e = d(l.BYTE_KANJI, r.BYTE, t), n = []), i.concat(o, e, n).sort(function(t, e) {
                    return t.index - e.index
                }).map(function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                })
            }

            function p(t, e) {
                switch (e) {
                    case r.NUMERIC:
                        return i.getBitsLength(t);
                    case r.ALPHANUMERIC:
                        return o.getBitsLength(t);
                    case r.KANJI:
                        return a.getBitsLength(t);
                    case r.BYTE:
                        return s.getBitsLength(t)
                }
            }

            function m(t, e) {
                var n, l = r.getBestModeForData(t);
                if ((n = r.from(e, l)) !== r.BYTE && n.bit < l.bit) throw Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(l));
                switch (n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new i(t);
                    case r.ALPHANUMERIC:
                        return new o(t);
                    case r.KANJI:
                        return new a(t);
                    case r.BYTE:
                        return new s(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce(function(t, e) {
                    return "string" == typeof e ? t.push(m(e, null)) : e.data && t.push(m(e.data, e.mode)), t
                }, [])
            }, e.fromString = function(t, n) {
                for (var i = function(t, e) {
                        for (var n = {}, i = {
                                start: {}
                            }, o = ["start"], s = 0; s < t.length; s++) {
                            for (var a = t[s], l = [], u = 0; u < a.length; u++) {
                                var c = a[u],
                                    h = "" + s + u;
                                l.push(h), n[h] = {
                                    node: c,
                                    lastCount: 0
                                }, i[h] = {};
                                for (var d = 0; d < o.length; d++) {
                                    var f = o[d];
                                    n[f] && n[f].node.mode === c.mode ? (i[f][h] = p(n[f].lastCount + c.length, c.mode) - p(n[f].lastCount, c.mode), n[f].lastCount += c.length) : (n[f] && (n[f].lastCount = c.length), i[f][h] = p(c.length, c.mode) + 4 + r.getCharCountIndicator(c.mode, e))
                                }
                            }
                            o = l
                        }
                        for (d = 0; d < o.length; d++) i[o[d]].end = 0;
                        return {
                            map: i,
                            table: n
                        }
                    }(function(t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var i = t[n];
                            switch (i.mode) {
                                case r.NUMERIC:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.ALPHANUMERIC,
                                        length: i.length
                                    }, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: h(i.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    e.push([{
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: h(i.data)
                                    }])
                            }
                        }
                        return e
                    }(f(t, u.isKanjiModeEnabled())), n), o = c.find_path(i.map, "start", "end"), s = [], a = 1; a < o.length - 1; a++) s.push(i.table[o[a]].node);
                return e.fromArray(s.reduce(function(t, e) {
                    var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return n && n.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
                }, []))
            }, e.rawSplit = function(t) {
                return e.fromArray(f(t, u.isKanjiModeEnabled()))
            }
        },
        5351: function(t, e) {
            var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return r[t]
            }, e.getBCHDigit = function(t) {
                for (var e = 0; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" != typeof t) throw Error('"toSJISFunc" is not a valid function.');
                n = t
            }, e.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, e.toSJIS = function(t) {
                return n(t)
            }
        },
        42752: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        73166: function(t, e, n) {
            var r = n(5351),
                i = n(48853),
                o = n(61250),
                s = n(89656),
                a = n(42752),
                l = n(5826),
                u = r.getBCHDigit(7973);

            function c(t, e) {
                return s.getCharCountIndicator(t, e) + 4
            }
            e.from = function(t, e) {
                return a.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, n) {
                if (!a.isValid(t)) throw Error("Invalid QR Code version");
                void 0 === n && (n = s.BYTE);
                var o = (r.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e)) * 8;
                if (n === s.MIXED) return o;
                var l = o - c(n, t);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(l / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(l / 11 * 2);
                    case s.KANJI:
                        return Math.floor(l / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(l / 8)
                }
            }, e.getBestVersionForData = function(t, n) {
                var r, i = o.from(n, o.M);
                if (l(t)) {
                    if (t.length > 1) return function(t, n) {
                        for (var r = 1; r <= 40; r++)
                            if (function(t, e) {
                                    var n = 0;
                                    return t.forEach(function(t) {
                                        n += c(t.mode, e) + t.getBitsLength()
                                    }), n
                                }(t, r) <= e.getCapacity(r, n, s.MIXED)) return r
                    }(t, i);
                    if (0 === t.length) return 1;
                    r = t[0]
                } else r = t;
                return function(t, n, r) {
                    for (var i = 1; i <= 40; i++)
                        if (n <= e.getCapacity(i, r, t)) return i
                }(r.mode, r.getLength(), i)
            }, e.getEncodedBits = function(t) {
                if (!a.isValid(t) || t < 7) throw Error("Invalid QR Code version");
                for (var e = t << 12; r.getBCHDigit(e) - u >= 0;) e ^= 7973 << r.getBCHDigit(e) - u;
                return t << 12 | e
            }
        },
        16949: function(t, e, n) {
            var r = n(77067);
            e.render = function(t, e, n) {
                var i, o = n,
                    s = e;
                void 0 !== o || e && e.getContext || (o = e, e = void 0), e || (s = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), o = r.getOptions(o);
                var a = r.getImageWidth(t.modules.size, o),
                    l = s.getContext("2d"),
                    u = l.createImageData(a, a);
                return r.qrToImageData(u.data, t, o), i = s, l.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = a, i.width = a, i.style.height = a + "px", i.style.width = a + "px", l.putImageData(u, 0, 0), s
            }, e.renderToDataURL = function(t, n, r) {
                var i = r;
                void 0 !== i || n && n.getContext || (i = n, n = void 0), i || (i = {});
                var o = e.render(t, n, i),
                    s = i.type || "image/png",
                    a = i.rendererOpts || {};
                return o.toDataURL(s, a.quality)
            }
        },
        77665: function(t, e, n) {
            var r = n(77067);

            function i(t, e) {
                var n = t.a / 255,
                    r = e + '="' + t.hex + '"';
                return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function o(t, e, n) {
                var r = t + e;
                return void 0 !== n && (r += " " + n), r
            }
            e.render = function(t, e, n) {
                var s = r.getOptions(e),
                    a = t.modules.size,
                    l = t.modules.data,
                    u = a + 2 * s.margin,
                    c = s.color.light.a ? "<path " + i(s.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                    h = "<path " + i(s.color.dark, "stroke") + ' d="' + function(t, e, n) {
                        for (var r = "", i = 0, s = !1, a = 0, l = 0; l < t.length; l++) {
                            var u = Math.floor(l % e),
                                c = Math.floor(l / e);
                            u || s || (s = !0), t[l] ? (a++, l > 0 && u > 0 && t[l - 1] || (r += s ? o("M", u + n, .5 + c + n) : o("m", i, 0), i = 0, s = !1), u + 1 < e && t[l + 1] || (r += o("h", a), a = 0)) : i++
                        }
                        return r
                    }(l, a, s.margin) + '"/>',
                    d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + ('viewBox="0 0 ' + u) + " " + u + '" shape-rendering="crispEdges">' + c + h + "</svg>\n";
                return "function" == typeof n && n(null, d), d
            }
        },
        77067: function(t, e) {
            function n(t) {
                if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw Error("Color should be defined as hex string");
                var e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw Error("Invalid hex color: " + t);
                (3 === e.length || 4 === e.length) && (e = Array.prototype.concat.apply([], e.map(function(t) {
                    return [t, t]
                }))), 6 === e.length && e.push("F", "F");
                var n = parseInt(e.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    r = t.width && t.width >= 21 ? t.width : void 0,
                    i = t.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : i,
                    margin: e,
                    color: {
                        dark: n(t.color.dark || "#000000ff"),
                        light: n(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, n) {
                var r = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * r)
            }, e.qrToImageData = function(t, n, r) {
                for (var i = n.modules.size, o = n.modules.data, s = e.getScale(i, r), a = Math.floor((i + 2 * r.margin) * s), l = r.margin * s, u = [r.color.light, r.color.dark], c = 0; c < a; c++)
                    for (var h = 0; h < a; h++) {
                        var d = (c * a + h) * 4,
                            f = r.color.light;
                        c >= l && h >= l && c < a - l && h < a - l && (f = u[o[Math.floor((c - l) / s) * i + Math.floor((h - l) / s)] ? 1 : 0]), t[d++] = f.r, t[d++] = f.g, t[d++] = f.b, t[d] = f.a
                    }
            }
        },
        19810: function(t, e, n) {
            "use strict";
            var r = n(5826);
            o.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === t.foo()
                } catch (e) {
                    return !1
                }
            }();
            var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

            function o(t, e, n) {
                return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" == typeof t ? l(this, t) : function(t, e, n, r) {
                    if ("number" == typeof e) throw TypeError('"value" argument must not be a number');
                    if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return function(t, e, n, r) {
                        var i;
                        if (n < 0 || e.byteLength < n) throw RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0)) throw RangeError("'length' is out of bounds");
                        return i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), o.TYPED_ARRAY_SUPPORT ? i.__proto__ = o.prototype : i = u(t, i), i
                    }(t, e, n, r);
                    if ("string" == typeof e) {
                        var i, l, c;
                        return (c = (l = a(t, i = 0 | h(e))).write(e)) !== i && (l = l.slice(0, c)), l
                    }
                    return function(t, e) {
                        if (o.isBuffer(e)) {
                            var n, r = 0 | s(e.length),
                                i = a(t, r);
                            return 0 === i.length || e.copy(i, 0, 0, r), i
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : u(t, e);
                            if ("Buffer" === e.type && Array.isArray(e.data)) return u(t, e.data)
                        }
                        throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }(this, t, e, n) : new o(t, e, n)
            }

            function s(t) {
                if (t >= i) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | t
            }

            function a(t, e) {
                var n;
                return o.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(e)).__proto__ = o.prototype : (null === (n = t) && (n = new o(e)), n.length = e), n
            }

            function l(t, e) {
                var n = a(t, e < 0 ? 0 : 0 | s(e));
                if (!o.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < e; ++r) n[r] = 0;
                return n
            }

            function u(t, e) {
                for (var n = e.length < 0 ? 0 : 0 | s(e.length), r = a(t, n), i = 0; i < n; i += 1) r[i] = 255 & e[i];
                return r
            }

            function c(t, e) {
                e = e || 1 / 0;
                for (var n, r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                    if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319 || s + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = (i - 55296 << 10 | n - 56320) + 65536
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else if (n < 1114112) {
                        if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    } else throw Error("Invalid code point")
                }
                return o
            }

            function h(t) {
                return o.isBuffer(t) ? t.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" != typeof t && (t = "" + t), 0 === t.length) ? 0 : c(t).length
            }
            o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            })), o.prototype.write = function(t, e, n) {
                void 0 === e ? (n = this.length, e = 0) : void 0 === n && "string" == typeof e ? (n = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(n) ? n |= 0 : n = void 0);
                var r, i, o = this.length - e;
                if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                return r = e, i = n,
                    function(t, e, n, r) {
                        for (var i = 0; i < r && !(i + n >= e.length) && !(i >= t.length); ++i) e[i + n] = t[i];
                        return i
                    }(c(t, this.length - r), this, r, i)
            }, o.prototype.slice = function(t, e) {
                var n, r = this.length;
                if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), o.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = o.prototype;
                else {
                    var i = e - t;
                    n = new o(i, void 0);
                    for (var s = 0; s < i; ++s) n[s] = this[s + t]
                }
                return n
            }, o.prototype.copy = function(t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n || 0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw RangeError("sourceStart out of bounds");
                if (r < 0) throw RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var i, s = r - n;
                if (this === t && n < e && e < r)
                    for (i = s - 1; i >= 0; --i) t[i + e] = this[i + n];
                else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < s; ++i) t[i + e] = this[i + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
                return s
            }, o.prototype.fill = function(t, e, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (e = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === t.length) {
                        var r, i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw RangeError("Out of range index");
                if (n <= e) return this;
                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                    for (r = e; r < n; ++r) this[r] = t;
                else {
                    var s = o.isBuffer(t) ? t : new o(t),
                        a = s.length;
                    for (r = 0; r < n - e; ++r) this[r + e] = s[r % a]
                }
                return this
            }, o.concat = function(t, e) {
                if (!r(t)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return a(null, 0);
                if (void 0 === e)
                    for (n = 0, e = 0; n < t.length; ++n) e += t[n].length;
                var n, i = l(null, e),
                    s = 0;
                for (n = 0; n < t.length; ++n) {
                    var u = t[n];
                    if (!o.isBuffer(u)) throw TypeError('"list" argument must be an Array of Buffers');
                    u.copy(i, s), s += u.length
                }
                return i
            }, o.byteLength = h, o.prototype._isBuffer = !0, o.isBuffer = function(t) {
                return !!(null != t && t._isBuffer)
            }, t.exports.alloc = function(t) {
                var e = new o(t);
                return e.fill(0), e
            }, t.exports.from = function(t) {
                return new o(t)
            }
        },
        68007: function(t) {
            "use strict";
            t.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        11460: function(t, e, n) {
            ! function(t, e) {
                "use strict";

                function r(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var n = function() {};
                    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                }

                function o(t, e, n) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (n = e, e = 10), this._init(t || 0, e || 10, n || "be"))
                }
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    u = n(36563).Buffer
                } catch (s) {}

                function a(t, e, n) {
                    for (var r = 0, i = Math.min(t.length, n), o = e; o < i; o++) {
                        var s = t.charCodeAt(o) - 48;
                        r <<= 4, s >= 49 && s <= 54 ? r |= s - 49 + 10 : s >= 17 && s <= 22 ? r |= s - 17 + 10 : r |= 15 & s
                    }
                    return r
                }

                function l(t, e, n, r) {
                    for (var i = 0, o = Math.min(t.length, n), s = e; s < o; s++) {
                        var a = t.charCodeAt(s) - 48;
                        i *= r, a >= 49 ? i += a - 49 + 10 : a >= 17 ? i += a - 17 + 10 : i += a
                    }
                    return i
                }
                o.isBN = function(t) {
                    return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function(t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function(t, e) {
                    return 0 > t.cmp(e) ? t : e
                }, o.prototype._init = function(t, e, n) {
                    if ("number" == typeof t) return this._initNumber(t, e, n);
                    if ("object" == typeof t) return this._initArray(t, e, n);
                    "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), e, n)
                }, o.prototype._initNumber = function(t, e, n) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n)
                }, o.prototype._initArray = function(t, e, n) {
                    if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                    for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
                    var a = 0;
                    if ("be" === n)
                        for (s = t.length - 1, i = 0; s >= 0; s -= 3) o = t[s] | t[s - 1] << 8 | t[s - 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
                    else if ("le" === n)
                        for (s = 0, i = 0; s < t.length; s += 3) o = t[s] | t[s + 1] << 8 | t[s + 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
                    return this.strip()
                }, o.prototype._parseHex = function(t, e) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                    for (var n, r, i = 0; i < this.length; i++) this.words[i] = 0;
                    var o = 0;
                    for (i = t.length - 6, n = 0; i >= e; i -= 6) r = a(t, i, i + 6), this.words[n] |= r << o & 67108863, this.words[n + 1] |= r >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                    i + 6 !== e && (r = a(t, e, i + 6), this.words[n] |= r << o & 67108863, this.words[n + 1] |= r >>> 26 - o & 4194303), this.strip()
                }, o.prototype._parseBase = function(t, e, n) {
                    this.words = [0], this.length = 1;
                    for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
                    r--, i = i / e | 0;
                    for (var o = t.length - n, s = o % r, a = Math.min(o, o - s) + n, u = 0, c = n; c < a; c += r) u = l(t, c, c + r, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                    if (0 !== s) {
                        var h = 1;
                        for (u = l(t, c, t.length, e), c = 0; c < s; c++) h *= e;
                        this.imuln(h), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                    }
                }, o.prototype.copy = function(t) {
                    t.words = Array(this.length);
                    for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                    t.length = this.length, t.negative = this.negative, t.red = this.red
                }, o.prototype.clone = function() {
                    var t = new o(null);
                    return this.copy(t), t
                }, o.prototype._expand = function(t) {
                    for (; this.length < t;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var u, c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function f(t, e, n) {
                    n.negative = e.negative ^ t.negative;
                    var r = t.length + e.length | 0;
                    n.length = r, r = r - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = i * o,
                        a = 67108863 & s,
                        l = s / 67108864 | 0;
                    n.words[0] = a;
                    for (var u = 1; u < r; u++) {
                        for (var c = l >>> 26, h = 67108863 & l, d = Math.min(u, e.length - 1), f = Math.max(0, u - t.length + 1); f <= d; f++) {
                            var p = u - f | 0;
                            c += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[f]) + h) / 67108864 | 0, h = 67108863 & s
                        }
                        n.words[u] = 0 | h, l = 0 | c
                    }
                    return 0 !== l ? n.words[u] = 0 | l : n.length--, n.strip()
                }
                o.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        n = "";
                        for (var n, i = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s],
                                l = ((a << i | o) & 16777215).toString(16);
                            n = 0 != (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? c[6 - l.length] + l + n : l + n, (i += 2) >= 26 && (i -= 26, s--)
                        }
                        for (0 !== o && (n = o.toString(16) + n); n.length % e != 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var u = h[t],
                            f = d[t];
                        n = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modn(f).toString(t);
                            n = (p = p.idivn(f)).isZero() ? m + n : c[u - m.length] + m + n
                        }
                        for (this.isZero() && (n = "0" + n); n.length % e != 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    r(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(t, e) {
                    return r(void 0 !== u), this.toArrayLike(u, t, e)
                }, o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, n) {
                    var i, o, s = this.byteLength(),
                        a = n || Math.max(1, s);
                    r(s <= a, "byte array longer than desired length"), r(a > 0, "Requested array length <= 0"), this.strip();
                    var l = new t(a),
                        u = this.clone();
                    if ("le" === e) {
                        for (o = 0; !u.isZero(); o++) i = u.andln(255), u.iushrn(8), l[o] = i;
                        for (; o < a; o++) l[o] = 0
                    } else {
                        for (o = 0; o < a - s; o++) l[o] = 0;
                        for (o = 0; !u.isZero(); o++) i = u.andln(255), u.iushrn(8), l[a - o - 1] = i
                    }
                    return l
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        n = 0;
                    return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        n = 0;
                    return (8191 & e) == 0 && (n += 13, e >>>= 13), (127 & e) == 0 && (n += 7, e >>>= 7), (15 & e) == 0 && (n += 4, e >>>= 4), (3 & e) == 0 && (n += 2, e >>>= 2), (1 & e) == 0 && n++, n
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var n = this._zeroBits(this.words[e]);
                        if (t += n, 26 !== n) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this.strip()
                }, o.prototype.ior = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] & t.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                    for (var e, n, r = 0; r < n.length; r++) this.words[r] = e.words[r] ^ n.words[r];
                    if (this !== e)
                        for (; r < e.length; r++) this.words[r] = e.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        n = t % 26;
                    this._expand(e), n > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    r("number" == typeof t && t >= 0);
                    var n = t / 26 | 0,
                        i = t % 26;
                    return this._expand(n + 1), e ? this.words[n] = this.words[n] | 1 << i : this.words[n] = this.words[n] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (n = this, r = t) : (n = t, r = this);
                    for (var e, n, r, i = 0, o = 0; o < r.length; o++) e = (0 | n.words[o]) + (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < n.length; o++) e = (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (n !== this)
                        for (; o < n.length; o++) this.words[o] = n.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, n, r = this.iadd(t);
                        return t.negative = 1, r._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (e = this, n = t) : (e = t, n = this);
                    for (var o = 0, s = 0; s < n.length; s++) o = (r = (0 | e.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
                    for (; 0 !== o && s < e.length; s++) o = (r = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
                    if (0 === o && s < e.length && e !== this)
                        for (; s < e.length; s++) this.words[s] = e.words[s];
                    return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var p = function(t, e, n) {
                    var r, i, o, s = t.words,
                        a = e.words,
                        l = n.words,
                        u = 0,
                        c = 0 | s[0],
                        h = 8191 & c,
                        d = c >>> 13,
                        f = 0 | s[1],
                        p = 8191 & f,
                        m = f >>> 13,
                        g = 0 | s[2],
                        _ = 8191 & g,
                        v = g >>> 13,
                        y = 0 | s[3],
                        w = 8191 & y,
                        b = y >>> 13,
                        M = 0 | s[4],
                        x = 8191 & M,
                        E = M >>> 13,
                        k = 0 | s[5],
                        S = 8191 & k,
                        C = k >>> 13,
                        I = 0 | s[6],
                        R = 8191 & I,
                        A = I >>> 13,
                        O = 0 | s[7],
                        T = 8191 & O,
                        P = O >>> 13,
                        N = 0 | s[8],
                        L = 8191 & N,
                        B = N >>> 13,
                        q = 0 | s[9],
                        U = 8191 & q,
                        j = q >>> 13,
                        D = 0 | a[0],
                        F = 8191 & D,
                        W = D >>> 13,
                        z = 0 | a[1],
                        $ = 8191 & z,
                        H = z >>> 13,
                        J = 0 | a[2],
                        V = 8191 & J,
                        Y = J >>> 13,
                        K = 0 | a[3],
                        Q = 8191 & K,
                        Z = K >>> 13,
                        G = 0 | a[4],
                        X = 8191 & G,
                        tt = G >>> 13,
                        te = 0 | a[5],
                        tn = 8191 & te,
                        tr = te >>> 13,
                        ti = 0 | a[6],
                        to = 8191 & ti,
                        ts = ti >>> 13,
                        ta = 0 | a[7],
                        tl = 8191 & ta,
                        tu = ta >>> 13,
                        tc = 0 | a[8],
                        th = 8191 & tc,
                        td = tc >>> 13,
                        tf = 0 | a[9],
                        tp = 8191 & tf,
                        tm = tf >>> 13;
                    n.negative = t.negative ^ e.negative, n.length = 19;
                    var tg = (u + (r = Math.imul(h, F)) | 0) + ((8191 & (i = (i = Math.imul(h, W)) + Math.imul(d, F) | 0)) << 13) | 0;
                    u = ((o = Math.imul(d, W)) + (i >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, r = Math.imul(p, F), i = (i = Math.imul(p, W)) + Math.imul(m, F) | 0, o = Math.imul(m, W);
                    var t_ = (u + (r = r + Math.imul(h, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, H) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, H) | 0) + (i >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, r = Math.imul(_, F), i = (i = Math.imul(_, W)) + Math.imul(v, F) | 0, o = Math.imul(v, W), r = r + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, H) | 0;
                    var tv = (u + (r = r + Math.imul(h, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, Y) | 0) + (i >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, r = Math.imul(w, F), i = (i = Math.imul(w, W)) + Math.imul(b, F) | 0, o = Math.imul(b, W), r = r + Math.imul(_, $) | 0, i = (i = i + Math.imul(_, H) | 0) + Math.imul(v, $) | 0, o = o + Math.imul(v, H) | 0, r = r + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, Y) | 0;
                    var ty = (u + (r = r + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Z) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, Z) | 0) + (i >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, r = Math.imul(x, F), i = (i = Math.imul(x, W)) + Math.imul(E, F) | 0, o = Math.imul(E, W), r = r + Math.imul(w, $) | 0, i = (i = i + Math.imul(w, H) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, H) | 0, r = r + Math.imul(_, V) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(v, V) | 0, o = o + Math.imul(v, Y) | 0, r = r + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, Z) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, Z) | 0;
                    var tw = (u + (r = r + Math.imul(h, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tt) | 0) + Math.imul(d, X) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, r = Math.imul(S, F), i = (i = Math.imul(S, W)) + Math.imul(C, F) | 0, o = Math.imul(C, W), r = r + Math.imul(x, $) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(E, $) | 0, o = o + Math.imul(E, H) | 0, r = r + Math.imul(w, V) | 0, i = (i = i + Math.imul(w, Y) | 0) + Math.imul(b, V) | 0, o = o + Math.imul(b, Y) | 0, r = r + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, Z) | 0) + Math.imul(v, Q) | 0, o = o + Math.imul(v, Z) | 0, r = r + Math.imul(p, X) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, X) | 0, o = o + Math.imul(m, tt) | 0;
                    var tb = (u + (r = r + Math.imul(h, tn) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tr) | 0) + Math.imul(d, tn) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, tr) | 0) + (i >>> 13) | 0) + (tb >>> 26) | 0, tb &= 67108863, r = Math.imul(R, F), i = (i = Math.imul(R, W)) + Math.imul(A, F) | 0, o = Math.imul(A, W), r = r + Math.imul(S, $) | 0, i = (i = i + Math.imul(S, H) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, H) | 0, r = r + Math.imul(x, V) | 0, i = (i = i + Math.imul(x, Y) | 0) + Math.imul(E, V) | 0, o = o + Math.imul(E, Y) | 0, r = r + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, Z) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, Z) | 0, r = r + Math.imul(_, X) | 0, i = (i = i + Math.imul(_, tt) | 0) + Math.imul(v, X) | 0, o = o + Math.imul(v, tt) | 0, r = r + Math.imul(p, tn) | 0, i = (i = i + Math.imul(p, tr) | 0) + Math.imul(m, tn) | 0, o = o + Math.imul(m, tr) | 0;
                    var tM = (u + (r = r + Math.imul(h, to) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ts) | 0) + Math.imul(d, to) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, ts) | 0) + (i >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, r = Math.imul(T, F), i = (i = Math.imul(T, W)) + Math.imul(P, F) | 0, o = Math.imul(P, W), r = r + Math.imul(R, $) | 0, i = (i = i + Math.imul(R, H) | 0) + Math.imul(A, $) | 0, o = o + Math.imul(A, H) | 0, r = r + Math.imul(S, V) | 0, i = (i = i + Math.imul(S, Y) | 0) + Math.imul(C, V) | 0, o = o + Math.imul(C, Y) | 0, r = r + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, Z) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, Z) | 0, r = r + Math.imul(w, X) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(b, X) | 0, o = o + Math.imul(b, tt) | 0, r = r + Math.imul(_, tn) | 0, i = (i = i + Math.imul(_, tr) | 0) + Math.imul(v, tn) | 0, o = o + Math.imul(v, tr) | 0, r = r + Math.imul(p, to) | 0, i = (i = i + Math.imul(p, ts) | 0) + Math.imul(m, to) | 0, o = o + Math.imul(m, ts) | 0;
                    var tx = (u + (r = r + Math.imul(h, tl) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tu) | 0) + Math.imul(d, tl) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, tu) | 0) + (i >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, r = Math.imul(L, F), i = (i = Math.imul(L, W)) + Math.imul(B, F) | 0, o = Math.imul(B, W), r = r + Math.imul(T, $) | 0, i = (i = i + Math.imul(T, H) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, H) | 0, r = r + Math.imul(R, V) | 0, i = (i = i + Math.imul(R, Y) | 0) + Math.imul(A, V) | 0, o = o + Math.imul(A, Y) | 0, r = r + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, Z) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, Z) | 0, r = r + Math.imul(x, X) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(E, X) | 0, o = o + Math.imul(E, tt) | 0, r = r + Math.imul(w, tn) | 0, i = (i = i + Math.imul(w, tr) | 0) + Math.imul(b, tn) | 0, o = o + Math.imul(b, tr) | 0, r = r + Math.imul(_, to) | 0, i = (i = i + Math.imul(_, ts) | 0) + Math.imul(v, to) | 0, o = o + Math.imul(v, ts) | 0, r = r + Math.imul(p, tl) | 0, i = (i = i + Math.imul(p, tu) | 0) + Math.imul(m, tl) | 0, o = o + Math.imul(m, tu) | 0;
                    var tE = (u + (r = r + Math.imul(h, th) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, td) | 0) + Math.imul(d, th) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, td) | 0) + (i >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, r = Math.imul(U, F), i = (i = Math.imul(U, W)) + Math.imul(j, F) | 0, o = Math.imul(j, W), r = r + Math.imul(L, $) | 0, i = (i = i + Math.imul(L, H) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, H) | 0, r = r + Math.imul(T, V) | 0, i = (i = i + Math.imul(T, Y) | 0) + Math.imul(P, V) | 0, o = o + Math.imul(P, Y) | 0, r = r + Math.imul(R, Q) | 0, i = (i = i + Math.imul(R, Z) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, Z) | 0, r = r + Math.imul(S, X) | 0, i = (i = i + Math.imul(S, tt) | 0) + Math.imul(C, X) | 0, o = o + Math.imul(C, tt) | 0, r = r + Math.imul(x, tn) | 0, i = (i = i + Math.imul(x, tr) | 0) + Math.imul(E, tn) | 0, o = o + Math.imul(E, tr) | 0, r = r + Math.imul(w, to) | 0, i = (i = i + Math.imul(w, ts) | 0) + Math.imul(b, to) | 0, o = o + Math.imul(b, ts) | 0, r = r + Math.imul(_, tl) | 0, i = (i = i + Math.imul(_, tu) | 0) + Math.imul(v, tl) | 0, o = o + Math.imul(v, tu) | 0, r = r + Math.imul(p, th) | 0, i = (i = i + Math.imul(p, td) | 0) + Math.imul(m, th) | 0, o = o + Math.imul(m, td) | 0;
                    var tk = (u + (r = r + Math.imul(h, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tm) | 0) + Math.imul(d, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(d, tm) | 0) + (i >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, r = Math.imul(U, $), i = (i = Math.imul(U, H)) + Math.imul(j, $) | 0, o = Math.imul(j, H), r = r + Math.imul(L, V) | 0, i = (i = i + Math.imul(L, Y) | 0) + Math.imul(B, V) | 0, o = o + Math.imul(B, Y) | 0, r = r + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, Z) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, Z) | 0, r = r + Math.imul(R, X) | 0, i = (i = i + Math.imul(R, tt) | 0) + Math.imul(A, X) | 0, o = o + Math.imul(A, tt) | 0, r = r + Math.imul(S, tn) | 0, i = (i = i + Math.imul(S, tr) | 0) + Math.imul(C, tn) | 0, o = o + Math.imul(C, tr) | 0, r = r + Math.imul(x, to) | 0, i = (i = i + Math.imul(x, ts) | 0) + Math.imul(E, to) | 0, o = o + Math.imul(E, ts) | 0, r = r + Math.imul(w, tl) | 0, i = (i = i + Math.imul(w, tu) | 0) + Math.imul(b, tl) | 0, o = o + Math.imul(b, tu) | 0, r = r + Math.imul(_, th) | 0, i = (i = i + Math.imul(_, td) | 0) + Math.imul(v, th) | 0, o = o + Math.imul(v, td) | 0;
                    var tS = (u + (r = r + Math.imul(p, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, tm) | 0) + Math.imul(m, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(m, tm) | 0) + (i >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, r = Math.imul(U, V), i = (i = Math.imul(U, Y)) + Math.imul(j, V) | 0, o = Math.imul(j, Y), r = r + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, Z) | 0) + Math.imul(B, Q) | 0, o = o + Math.imul(B, Z) | 0, r = r + Math.imul(T, X) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(P, X) | 0, o = o + Math.imul(P, tt) | 0, r = r + Math.imul(R, tn) | 0, i = (i = i + Math.imul(R, tr) | 0) + Math.imul(A, tn) | 0, o = o + Math.imul(A, tr) | 0, r = r + Math.imul(S, to) | 0, i = (i = i + Math.imul(S, ts) | 0) + Math.imul(C, to) | 0, o = o + Math.imul(C, ts) | 0, r = r + Math.imul(x, tl) | 0, i = (i = i + Math.imul(x, tu) | 0) + Math.imul(E, tl) | 0, o = o + Math.imul(E, tu) | 0, r = r + Math.imul(w, th) | 0, i = (i = i + Math.imul(w, td) | 0) + Math.imul(b, th) | 0, o = o + Math.imul(b, td) | 0;
                    var tC = (u + (r = r + Math.imul(_, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, tm) | 0) + Math.imul(v, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(v, tm) | 0) + (i >>> 13) | 0) + (tC >>> 26) | 0, tC &= 67108863, r = Math.imul(U, Q), i = (i = Math.imul(U, Z)) + Math.imul(j, Q) | 0, o = Math.imul(j, Z), r = r + Math.imul(L, X) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(B, X) | 0, o = o + Math.imul(B, tt) | 0, r = r + Math.imul(T, tn) | 0, i = (i = i + Math.imul(T, tr) | 0) + Math.imul(P, tn) | 0, o = o + Math.imul(P, tr) | 0, r = r + Math.imul(R, to) | 0, i = (i = i + Math.imul(R, ts) | 0) + Math.imul(A, to) | 0, o = o + Math.imul(A, ts) | 0, r = r + Math.imul(S, tl) | 0, i = (i = i + Math.imul(S, tu) | 0) + Math.imul(C, tl) | 0, o = o + Math.imul(C, tu) | 0, r = r + Math.imul(x, th) | 0, i = (i = i + Math.imul(x, td) | 0) + Math.imul(E, th) | 0, o = o + Math.imul(E, td) | 0;
                    var tI = (u + (r = r + Math.imul(w, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, tm) | 0) + Math.imul(b, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(b, tm) | 0) + (i >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, r = Math.imul(U, X), i = (i = Math.imul(U, tt)) + Math.imul(j, X) | 0, o = Math.imul(j, tt), r = r + Math.imul(L, tn) | 0, i = (i = i + Math.imul(L, tr) | 0) + Math.imul(B, tn) | 0, o = o + Math.imul(B, tr) | 0, r = r + Math.imul(T, to) | 0, i = (i = i + Math.imul(T, ts) | 0) + Math.imul(P, to) | 0, o = o + Math.imul(P, ts) | 0, r = r + Math.imul(R, tl) | 0, i = (i = i + Math.imul(R, tu) | 0) + Math.imul(A, tl) | 0, o = o + Math.imul(A, tu) | 0, r = r + Math.imul(S, th) | 0, i = (i = i + Math.imul(S, td) | 0) + Math.imul(C, th) | 0, o = o + Math.imul(C, td) | 0;
                    var tR = (u + (r = r + Math.imul(x, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, tm) | 0) + Math.imul(E, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(E, tm) | 0) + (i >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, r = Math.imul(U, tn), i = (i = Math.imul(U, tr)) + Math.imul(j, tn) | 0, o = Math.imul(j, tr), r = r + Math.imul(L, to) | 0, i = (i = i + Math.imul(L, ts) | 0) + Math.imul(B, to) | 0, o = o + Math.imul(B, ts) | 0, r = r + Math.imul(T, tl) | 0, i = (i = i + Math.imul(T, tu) | 0) + Math.imul(P, tl) | 0, o = o + Math.imul(P, tu) | 0, r = r + Math.imul(R, th) | 0, i = (i = i + Math.imul(R, td) | 0) + Math.imul(A, th) | 0, o = o + Math.imul(A, td) | 0;
                    var tA = (u + (r = r + Math.imul(S, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, tm) | 0) + Math.imul(C, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(C, tm) | 0) + (i >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, r = Math.imul(U, to), i = (i = Math.imul(U, ts)) + Math.imul(j, to) | 0, o = Math.imul(j, ts), r = r + Math.imul(L, tl) | 0, i = (i = i + Math.imul(L, tu) | 0) + Math.imul(B, tl) | 0, o = o + Math.imul(B, tu) | 0, r = r + Math.imul(T, th) | 0, i = (i = i + Math.imul(T, td) | 0) + Math.imul(P, th) | 0, o = o + Math.imul(P, td) | 0;
                    var tO = (u + (r = r + Math.imul(R, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, tm) | 0) + Math.imul(A, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(A, tm) | 0) + (i >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, r = Math.imul(U, tl), i = (i = Math.imul(U, tu)) + Math.imul(j, tl) | 0, o = Math.imul(j, tu), r = r + Math.imul(L, th) | 0, i = (i = i + Math.imul(L, td) | 0) + Math.imul(B, th) | 0, o = o + Math.imul(B, td) | 0;
                    var tT = (u + (r = r + Math.imul(T, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, tm) | 0) + Math.imul(P, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(P, tm) | 0) + (i >>> 13) | 0) + (tT >>> 26) | 0, tT &= 67108863, r = Math.imul(U, th), i = (i = Math.imul(U, td)) + Math.imul(j, th) | 0, o = Math.imul(j, td);
                    var tP = (u + (r = r + Math.imul(L, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, tm) | 0) + Math.imul(B, tp) | 0)) << 13) | 0;
                    u = ((o = o + Math.imul(B, tm) | 0) + (i >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863;
                    var tN = (u + (r = Math.imul(U, tp)) | 0) + ((8191 & (i = (i = Math.imul(U, tm)) + Math.imul(j, tp) | 0)) << 13) | 0;
                    return u = ((o = Math.imul(j, tm)) + (i >>> 13) | 0) + (tN >>> 26) | 0, tN &= 67108863, l[0] = tg, l[1] = t_, l[2] = tv, l[3] = ty, l[4] = tw, l[5] = tb, l[6] = tM, l[7] = tx, l[8] = tE, l[9] = tk, l[10] = tS, l[11] = tC, l[12] = tI, l[13] = tR, l[14] = tA, l[15] = tO, l[16] = tT, l[17] = tP, l[18] = tN, 0 !== u && (l[19] = u, n.length++), n
                };

                function m(t, e, n) {
                    return new g().mulp(t, e, n)
                }

                function g(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (p = f), o.prototype.mulTo = function(t, e) {
                    var n = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? f(this, t, e) : n < 1024 ? function(t, e, n) {
                        n.negative = e.negative ^ t.negative, n.length = t.length + e.length;
                        for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & r, l = Math.min(o, e.length - 1), u = Math.max(0, o - t.length + 1); u <= l; u++) {
                                var c = o - u,
                                    h = (0 | t.words[c]) * (0 | e.words[u]),
                                    d = 67108863 & h;
                                s = s + (h / 67108864 | 0) | 0, a = 67108863 & (d = d + a | 0), i += (s = s + (d >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            n.words[o] = a, r = s, s = i
                        }
                        return 0 !== r ? n.words[o] = r : n.length--, n.strip()
                    }(this, t, e) : m(this, t, e)
                }, g.prototype.makeRBT = function(t) {
                    for (var e = Array(t), n = o.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, n, t);
                    return e
                }, g.prototype.revBin = function(t, e, n) {
                    if (0 === t || t === n - 1) return t;
                    for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1;
                    return r
                }, g.prototype.permute = function(t, e, n, r, i, o) {
                    for (var s = 0; s < o; s++) r[s] = e[t[s]], i[s] = n[t[s]]
                }, g.prototype.transform = function(t, e, n, r, i, o) {
                    this.permute(o, t, e, n, r, i);
                    for (var s = 1; s < i; s <<= 1)
                        for (var a = s << 1, l = Math.cos(2 * Math.PI / a), u = Math.sin(2 * Math.PI / a), c = 0; c < i; c += a)
                            for (var h = l, d = u, f = 0; f < s; f++) {
                                var p = n[c + f],
                                    m = r[c + f],
                                    g = n[c + f + s],
                                    _ = r[c + f + s],
                                    v = h * g - d * _;
                                _ = h * _ + d * g, g = v, n[c + f] = p + g, r[c + f] = m + _, n[c + f + s] = p - g, r[c + f + s] = m - _, f !== a && (v = l * h - u * d, d = l * d + u * h, h = v)
                            }
                }, g.prototype.guessLen13b = function(t, e) {
                    var n = 1 | Math.max(e, t),
                        r = 1 & n,
                        i = 0;
                    for (n = n / 2 | 0; n; n >>>= 1) i++;
                    return 1 << i + 1 + r
                }, g.prototype.conjugate = function(t, e, n) {
                    if (!(n <= 1))
                        for (var r = 0; r < n / 2; r++) {
                            var i = t[r];
                            t[r] = t[n - r - 1], t[n - r - 1] = i, i = e[r], e[r] = -e[n - r - 1], e[n - r - 1] = -i
                        }
                }, g.prototype.normalize13b = function(t, e) {
                    for (var n = 0, r = 0; r < e / 2; r++) {
                        var i = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + n;
                        t[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, g.prototype.convert13b = function(t, e, n, i) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], n[2 * s] = 8191 & o, o >>>= 13, n[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < i; ++s) n[s] = 0;
                    r(0 === o), r((-8192 & o) == 0)
                }, g.prototype.stub = function(t) {
                    for (var e = Array(t), n = 0; n < t; n++) e[n] = 0;
                    return e
                }, g.prototype.mulp = function(t, e, n) {
                    var r = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(r),
                        o = this.stub(r),
                        s = Array(r),
                        a = Array(r),
                        l = Array(r),
                        u = Array(r),
                        c = Array(r),
                        h = Array(r),
                        d = n.words;
                    d.length = r, this.convert13b(t.words, t.length, s, r), this.convert13b(e.words, e.length, u, r), this.transform(s, o, a, l, r, i), this.transform(u, o, c, h, r, i);
                    for (var f = 0; f < r; f++) {
                        var p = a[f] * c[f] - l[f] * h[f];
                        l[f] = a[f] * h[f] + l[f] * c[f], a[f] = p
                    }
                    return this.conjugate(a, l, r), this.transform(a, l, d, o, r, i), this.conjugate(d, o, r), this.normalize13b(d, r), n.negative = t.negative ^ e.negative, n.length = t.length + e.length, n.strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), m(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    r("number" == typeof t), r(t < 67108864);
                    for (var e = 0, n = 0; n < this.length; n++) {
                        var i = (0 | this.words[n]) * t,
                            o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += (i / 67108864 | 0) + (o >>> 26), this.words[n] = 67108863 & o
                    }
                    return 0 !== e && (this.words[n] = e, this.length++), this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), n = 0; n < e.length; n++) {
                            var r = n / 26 | 0,
                                i = n % 26;
                            e[n] = (t.words[r] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var n = this, r = 0; r < e.length && 0 === e[r]; r++, n = n.sqr());
                    if (++r < e.length)
                        for (var i = n.sqr(); r < e.length; r++, i = i.sqr()) 0 !== e[r] && (n = n.mul(i));
                    return n
                }, o.prototype.iushln = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e, n = t % 26,
                        i = (t - n) / 26,
                        o = 67108863 >>> 26 - n << 26 - n;
                    if (0 !== n) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var a = this.words[e] & o,
                                l = (0 | this.words[e]) - a << n;
                            this.words[e] = l | s, s = a >>> 26 - n
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(t) {
                    return r(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, n) {
                    r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var i, o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        a = 67108863 ^ 67108863 >>> o << o,
                        l = n;
                    if (i -= s, i = Math.max(0, i), l) {
                        for (var u = 0; u < s; u++) l.words[u] = this.words[u];
                        l.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                    else this.words[0] = 0, this.length = 1;
                    var c = 0;
                    for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                        var h = 0 | this.words[u];
                        this.words[u] = c << 26 - o | h >>> o, c = h & a
                    }
                    return l && 0 !== c && (l.words[l.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(t, e, n) {
                    return r(0 === this.negative), this.iushrn(t, e, n)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        n = (t - e) / 26;
                    return !(this.length <= n) && !!(this.words[n] & 1 << e)
                }, o.prototype.imaskn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        n = (t - e) / 26;
                    return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) ? this : (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this.strip())
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return (r("number" == typeof t), r(t < 67108864), t < 0) ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, n) {
                    var i, o, s = t.length + n;
                    this._expand(s);
                    var a = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + n]) + a;
                        var l = (0 | t.words[i]) * e;
                        o -= 67108863 & l, a = (o >> 26) - (l / 67108864 | 0), this.words[i + n] = 67108863 & o
                    }
                    for (; i < this.length - n; i++) a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;
                    if (0 === a) return this.strip();
                    for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var n, r = this.length - t.length,
                        i = this.clone(),
                        s = t,
                        a = 0 | s.words[s.length - 1];
                    0 != (r = 26 - this._countBits(a)) && (s = s.ushln(r), i.iushln(r), a = 0 | s.words[s.length - 1]);
                    var l = i.length - s.length;
                    if ("mod" !== e) {
                        (n = new o(null)).length = l + 1, n.words = Array(n.length);
                        for (var u = 0; u < n.length; u++) n.words[u] = 0
                    }
                    var c = i.clone()._ishlnsubmul(s, 1, l);
                    0 === c.negative && (i = c, n && (n.words[l] = 1));
                    for (var h = l - 1; h >= 0; h--) {
                        var d = (0 | i.words[s.length + h]) * 67108864 + (0 | i.words[s.length + h - 1]);
                        for (d = Math.min(d / a | 0, 67108863), i._ishlnsubmul(s, d, h); 0 !== i.negative;) d--, i.negative = 0, i._ishlnsubmul(s, 1, h), i.isZero() || (i.negative ^= 1);
                        n && (n.words[h] = d)
                    }
                    return n && n.strip(), i.strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                        div: n || null,
                        mod: i
                    }
                }, o.prototype.divmod = function(t, e, n) {
                    var i, s, a;
                    return (r(!t.isZero()), this.isZero()) ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(t)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
                        div: i,
                        mod: a.mod
                    }) : (this.negative & t.negative) != 0 ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(t)), {
                        div: a.div,
                        mod: s
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        r = t.ushrn(1),
                        i = t.andln(1),
                        o = n.cmp(r);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function(t) {
                    r(t <= 67108863);
                    for (var e = 67108864 % t, n = 0, i = this.length - 1; i >= 0; i--) n = (e * n + (0 | this.words[i])) % t;
                    return n
                }, o.prototype.idivn = function(t) {
                    r(t <= 67108863);
                    for (var e = 0, n = this.length - 1; n >= 0; n--) {
                        var i = (0 | this.words[n]) + 67108864 * e;
                        this.words[n] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e = this,
                        n = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), s = new o(0), a = new o(0), l = new o(1), u = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++u;
                    for (var c = n.clone(), h = e.clone(); !e.isZero();) {
                        for (var d = 0, f = 1;
                            (e.words[0] & f) == 0 && d < 26; ++d, f <<= 1);
                        if (d > 0)
                            for (e.iushrn(d); d-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(h)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, m = 1;
                            (n.words[0] & m) == 0 && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (n.iushrn(p); p-- > 0;)(a.isOdd() || l.isOdd()) && (a.iadd(c), l.isub(h)), a.iushrn(1), l.iushrn(1);
                        e.cmp(n) >= 0 ? (e.isub(n), i.isub(a), s.isub(l)) : (n.isub(e), a.isub(i), l.isub(s))
                    }
                    return {
                        a: a,
                        b: l,
                        gcd: n.iushln(u)
                    }
                }, o.prototype._invmp = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e, n = this,
                        i = t.clone();
                    n = 0 !== n.negative ? n.umod(t) : n.clone();
                    for (var s = new o(1), a = new o(0), l = i.clone(); n.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var u = 0, c = 1;
                            (n.words[0] & c) == 0 && u < 26; ++u, c <<= 1);
                        if (u > 0)
                            for (n.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(l), s.iushrn(1);
                        for (var h = 0, d = 1;
                            (i.words[0] & d) == 0 && h < 26; ++h, d <<= 1);
                        if (h > 0)
                            for (i.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(l), a.iushrn(1);
                        n.cmp(i) >= 0 ? (n.isub(i), s.isub(a)) : (i.isub(n), a.isub(s))
                    }
                    return 0 > (e = 0 === n.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        n = t.clone();
                    e.negative = 0, n.negative = 0;
                    for (var r = 0; e.isEven() && n.isEven(); r++) e.iushrn(1), n.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; n.isEven();) n.iushrn(1);
                        var i = e.cmp(n);
                        if (i < 0) {
                            var o = e;
                            e = n, n = o
                        } else if (0 === i || 0 === n.cmpn(1)) break;
                        e.isub(n)
                    }
                    return n.iushln(r)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, o.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    r("number" == typeof t);
                    var e = t % 26,
                        n = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                    for (var o = i, s = n; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        a += o, o = a >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, n = t < 0;
                    if (0 !== this.negative && !n) return -1;
                    if (0 === this.negative && n) return 1;
                    if (this.strip(), this.length > 1) e = 1;
                    else {
                        n && (t = -t), r(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, n = this.length - 1; n >= 0; n--) {
                        var r = 0 | this.words[n],
                            i = 0 | t.words[n];
                        if (r !== i) {
                            r < i ? e = -1 : r > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, o.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new x(t)
                }, o.prototype.toRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var _ = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function v(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function y() {
                    v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function w() {
                    v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function b() {
                    v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function M() {
                    v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function x(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function E(t) {
                    x.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                v.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, v.prototype.ireduce = function(t) {
                    var e, n = t;
                    do this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var r = e < this.n ? -1 : n.ucmp(this.p);
                    return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : n.strip(), n
                }, v.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, v.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(y, v), y.prototype.split = function(t, e) {
                    for (var n = Math.min(t.length, 9), r = 0; r < n; r++) e.words[r] = t.words[r];
                    if (e.length = n, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var i = t.words[9];
                    for (r = 10, e.words[e.length++] = 4194303 & i; r < t.length; r++) {
                        var o = 0 | t.words[r];
                        t.words[r - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, t.words[r - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, y.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var r = 0 | t.words[n];
                        e += 977 * r, t.words[n] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(w, v), i(b, v), i(M, v), M.prototype.imulK = function(t) {
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var r = (0 | t.words[n]) * 19 + e,
                            i = 67108863 & r;
                        r >>>= 26, t.words[n] = i, e = r
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    var e;
                    if (_[t]) return _[t];
                    if ("k256" === t) e = new y;
                    else if ("p224" === t) e = new w;
                    else if ("p192" === t) e = new b;
                    else if ("p25519" === t) e = new M;
                    else throw Error("Unknown prime " + t);
                    return _[t] = e, e
                }, x.prototype._verify1 = function(t) {
                    r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                }, x.prototype._verify2 = function(t, e) {
                    r((t.negative | e.negative) == 0, "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                }, x.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, x.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, x.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var n = t.add(e);
                    return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
                }, x.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var n = t.iadd(e);
                    return n.cmp(this.m) >= 0 && n.isub(this.m), n
                }, x.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var n = t.sub(e);
                    return 0 > n.cmpn(0) && n.iadd(this.m), n._forceRed(this)
                }, x.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var n = t.isub(e);
                    return 0 > n.cmpn(0) && n.iadd(this.m), n
                }, x.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, x.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, x.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, x.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, x.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, x.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (r(e % 2 == 1), 3 === e) {
                        var n = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, n)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    r(!i.isZero());
                    var a = new o(1).toRed(this),
                        l = a.redNeg(),
                        u = this.m.subn(1).iushrn(1),
                        c = this.m.bitLength();
                    for (c = new o(2 * c * c).toRed(this); 0 !== this.pow(c, u).cmp(l);) c.redIAdd(l);
                    for (var h = this.pow(c, i), d = this.pow(t, i.addn(1).iushrn(1)), f = this.pow(t, i), p = s; 0 !== f.cmp(a);) {
                        for (var m = f, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                        r(g < p);
                        var _ = this.pow(h, new o(1).iushln(p - g - 1));
                        d = d.redMul(_), h = _.redSqr(), f = f.redMul(h), p = g
                    }
                    return d
                }, x.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, x.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var n = Array(16);
                    n[0] = new o(1).toRed(this), n[1] = t;
                    for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
                    var i = n[0],
                        s = 0,
                        a = 0,
                        l = e.bitLength() % 26;
                    for (0 === l && (l = 26), r = e.length - 1; r >= 0; r--) {
                        for (var u = e.words[r], c = l - 1; c >= 0; c--) {
                            var h = u >> c & 1;
                            if (i !== n[0] && (i = this.sqr(i)), 0 === h && 0 === s) {
                                a = 0;
                                continue
                            }
                            s <<= 1, s |= h, (4 == ++a || 0 === r && 0 === c) && (i = this.mul(i, n[s]), a = 0, s = 0)
                        }
                        l = 26
                    }
                    return i
                }, x.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, x.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new E(t)
                }, i(E, x), E.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, E.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, E.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var n = t.imul(e),
                        r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = n.isub(r).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, E.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var n = t.mul(e),
                        r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = n.isub(r).iushrn(this.shift),
                        s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : 0 > i.cmpn(0) && (s = i.iadd(this.m)), s._forceRed(this)
                }, E.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = n.nmd(t), this)
        },
        62873: function(t, e) {
            "use strict";

            function n(t) {
                let e;
                return "undefined" != typeof window && void 0 !== window[t] && (e = window[t]), e
            }

            function r(t) {
                let e = n(t);
                if (!e) throw Error(`${t} is not defined in Window`);
                return e
            }
            e.$o = e.xP = e.MX = e.VQ = e.k$ = e.UO = e.jW = e.Gw = e.Me = e.uT = e.$2 = e.sD = void 0, e.sD = n, e.$2 = r, e.uT = function() {
                return r("document")
            }, e.Me = function() {
                return n("document")
            }, e.Gw = function() {
                return r("navigator")
            }, e.jW = function() {
                return n("navigator")
            }, e.UO = function() {
                return r("location")
            }, e.k$ = function() {
                return n("location")
            }, e.VQ = function() {
                return r("crypto")
            }, e.MX = function() {
                return n("crypto")
            }, e.xP = function() {
                return r("localStorage")
            }, e.$o = function() {
                return n("localStorage")
            }
        },
        65755: function(t, e, n) {
            "use strict";
            e.D = void 0;
            let r = n(42269);
            e.D = function() {
                let t, e, n;
                try {
                    t = r.getDocumentOrThrow(), e = r.getLocationOrThrow()
                } catch (i) {
                    return null
                }

                function o(...e) {
                    let n = t.getElementsByTagName("meta");
                    for (let r = 0; r < n.length; r++) {
                        let i = n[r],
                            o = ["itemprop", "property", "name"].map(t => i.getAttribute(t)).filter(t => !!t && e.includes(t));
                        if (o.length && o) {
                            let s = i.getAttribute("content");
                            if (s) return s
                        }
                    }
                    return ""
                }
                let s = ((n = o("name", "og:site_name", "og:title", "twitter:title")) || (n = t.title), n),
                    a = function() {
                        let t = o("description", "og:description", "twitter:description", "keywords");
                        return t
                    }(),
                    l = e.origin,
                    u = function() {
                        let n = t.getElementsByTagName("link"),
                            r = [];
                        for (let i = 0; i < n.length; i++) {
                            let o = n[i],
                                s = o.getAttribute("rel");
                            if (s && s.toLowerCase().indexOf("icon") > -1) {
                                let a = o.getAttribute("href");
                                if (a) {
                                    if (-1 === a.toLowerCase().indexOf("https:") && -1 === a.toLowerCase().indexOf("http:") && 0 !== a.indexOf("//")) {
                                        let l = e.protocol + "//" + e.host;
                                        if (0 === a.indexOf("/")) l += a;
                                        else {
                                            let u = e.pathname.split("/");
                                            u.pop();
                                            let c = u.join("/");
                                            l += c + "/" + a
                                        }
                                        r.push(l)
                                    } else if (0 === a.indexOf("//")) {
                                        let h = e.protocol + a;
                                        r.push(h)
                                    } else r.push(a)
                                }
                            }
                        }
                        return r
                    }();
                return {
                    description: a,
                    url: l,
                    icons: u,
                    name: s
                }
            }
        },
        42269: function(t, e) {
            "use strict";

            function n(t) {
                let e;
                return "undefined" != typeof window && void 0 !== window[t] && (e = window[t]), e
            }

            function r(t) {
                let e = n(t);
                if (!e) throw Error(`${t} is not defined in Window`);
                return e
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0, e.getFromWindow = n, e.getFromWindowOrThrow = r, e.getDocumentOrThrow = function() {
                return r("document")
            }, e.getDocument = function() {
                return n("document")
            }, e.getNavigatorOrThrow = function() {
                return r("navigator")
            }, e.getNavigator = function() {
                return n("navigator")
            }, e.getLocationOrThrow = function() {
                return r("location")
            }, e.getLocation = function() {
                return n("location")
            }, e.getCryptoOrThrow = function() {
                return r("crypto")
            }, e.getCrypto = function() {
                return n("crypto")
            }, e.getLocalStorageOrThrow = function() {
                return r("localStorage")
            }, e.getLocalStorage = function() {
                return n("localStorage")
            }
        },
        20640: function(t, e, n) {
            "use strict";
            var r = n(11742),
                i = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            t.exports = function(t, e) {
                var n, o, s, a, l, u, c, h, d = !1;
                e || (e = {}), s = e.debug || !1;
                try {
                    if (l = r(), u = document.createRange(), c = document.getSelection(), (h = document.createElement("span")).textContent = t, h.ariaHidden = "true", h.style.all = "unset", h.style.position = "fixed", h.style.top = 0, h.style.clip = "rect(0, 0, 0, 0)", h.style.whiteSpace = "pre", h.style.webkitUserSelect = "text", h.style.MozUserSelect = "text", h.style.msUserSelect = "text", h.style.userSelect = "text", h.addEventListener("copy", function(n) {
                            if (n.stopPropagation(), e.format) {
                                if (n.preventDefault(), void 0 === n.clipboardData) {
                                    s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var r = i[e.format] || i.default;
                                    window.clipboardData.setData(r, t)
                                } else n.clipboardData.clearData(), n.clipboardData.setData(e.format, t)
                            }
                            e.onCopy && (n.preventDefault(), e.onCopy(n.clipboardData))
                        }), document.body.appendChild(h), u.selectNodeContents(h), c.addRange(u), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    d = !0
                } catch (p) {
                    s && console.error("unable to copy using execCommand: ", p), s && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), d = !0
                    } catch (f) {
                        s && console.error("unable to copy using clipboardData: ", f), s && console.error("falling back to prompt"), n = "message" in e ? e.message : "Copy to clipboard: #{key}, Enter", o = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", a = n.replace(/#{\s*key\s*}/g, o), window.prompt(a, t)
                    }
                } finally {
                    c && ("function" == typeof c.removeRange ? c.removeRange(u) : c.removeAllRanges()), h && document.body.removeChild(h), l()
                }
                return d
            }
        },
        54098: function(t, e) {
            var n, r = "undefined" != typeof self ? self : this,
                i = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return t.prototype = r, new t
                }();
            n = i,
                function(t) {
                    var e = {
                        searchParams: "URLSearchParams" in n,
                        iterable: "Symbol" in n && "iterator" in Symbol,
                        blob: "FileReader" in n && "Blob" in n && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in n,
                        arrayBuffer: "ArrayBuffer" in n
                    };
                    if (e.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        i = ArrayBuffer.isView || function(t) {
                            return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                        };

                    function o(t) {
                        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw TypeError("Invalid character in header field name");
                        return t.toLowerCase()
                    }

                    function s(t) {
                        return "string" != typeof t && (t = String(t)), t
                    }

                    function a(t) {
                        var n = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return e.iterable && (n[Symbol.iterator] = function() {
                            return n
                        }), n
                    }

                    function l(t) {
                        this.map = {}, t instanceof l ? t.forEach(function(t, e) {
                            this.append(e, t)
                        }, this) : Array.isArray(t) ? t.forEach(function(t) {
                            this.append(t[0], t[1])
                        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                            this.append(e, t[e])
                        }, this)
                    }

                    function u(t) {
                        if (t.bodyUsed) return Promise.reject(TypeError("Already read"));
                        t.bodyUsed = !0
                    }

                    function c(t) {
                        return new Promise(function(e, n) {
                            t.onload = function() {
                                e(t.result)
                            }, t.onerror = function() {
                                n(t.error)
                            }
                        })
                    }

                    function h(t) {
                        var e = new FileReader,
                            n = c(e);
                        return e.readAsArrayBuffer(t), n
                    }

                    function d(t) {
                        if (t.slice) return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)), e.buffer
                    }

                    function f() {
                        return this.bodyUsed = !1, this._initBody = function(t) {
                            if (this._bodyInit = t, t) {
                                if ("string" == typeof t) this._bodyText = t;
                                else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                                else {
                                    var n;
                                    e.arrayBuffer && e.blob && (n = t) && DataView.prototype.isPrototypeOf(n) ? (this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : e.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t)) ? this._bodyArrayBuffer = d(t) : this._bodyText = t = Object.prototype.toString.call(t)
                                }
                            } else this._bodyText = "";
                            !this.headers.get("content-type") && ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, e.blob && (this.blob = function() {
                            var t = u(this);
                            if (t) return t;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                            throw Error("could not read FormData body as blob")
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
                        }), this.text = function() {
                            var t, e, n, r = u(this);
                            if (r) return r;
                            if (this._bodyBlob) return t = this._bodyBlob, n = c(e = new FileReader), e.readAsText(t), n;
                            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), n = Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                            if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                            throw Error("could not read FormData body as text")
                        }, e.formData && (this.formData = function() {
                            return this.text().then(g)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    l.prototype.append = function(t, e) {
                        t = o(t), e = s(e);
                        var n = this.map[t];
                        this.map[t] = n ? n + ", " + e : e
                    }, l.prototype.delete = function(t) {
                        delete this.map[o(t)]
                    }, l.prototype.get = function(t) {
                        return t = o(t), this.has(t) ? this.map[t] : null
                    }, l.prototype.has = function(t) {
                        return this.map.hasOwnProperty(o(t))
                    }, l.prototype.set = function(t, e) {
                        this.map[o(t)] = s(e)
                    }, l.prototype.forEach = function(t, e) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                    }, l.prototype.keys = function() {
                        var t = [];
                        return this.forEach(function(e, n) {
                            t.push(n)
                        }), a(t)
                    }, l.prototype.values = function() {
                        var t = [];
                        return this.forEach(function(e) {
                            t.push(e)
                        }), a(t)
                    }, l.prototype.entries = function() {
                        var t = [];
                        return this.forEach(function(e, n) {
                            t.push([n, e])
                        }), a(t)
                    }, e.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
                    var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function m(t, e) {
                        var n, r, i = (e = e || {}).body;
                        if (t instanceof m) {
                            if (t.bodyUsed) throw TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                        } else this.url = String(t);
                        if (this.credentials = e.credentials || this.credentials || "same-origin", (e.headers || !this.headers) && (this.headers = new l(e.headers)), this.method = (r = (n = e.method || this.method || "GET").toUpperCase(), p.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(i)
                    }

                    function g(t) {
                        var e = new FormData;
                        return t.trim().split("&").forEach(function(t) {
                            if (t) {
                                var n = t.split("="),
                                    r = n.shift().replace(/\+/g, " "),
                                    i = n.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(r), decodeURIComponent(i))
                            }
                        }), e
                    }

                    function _(t, e) {
                        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t)
                    }
                    m.prototype.clone = function() {
                        return new m(this, {
                            body: this._bodyInit
                        })
                    }, f.call(m.prototype), f.call(_.prototype), _.prototype.clone = function() {
                        return new _(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new l(this.headers),
                            url: this.url
                        })
                    }, _.error = function() {
                        var t = new _(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var v = [301, 302, 303, 307, 308];
                    _.redirect = function(t, e) {
                        if (-1 === v.indexOf(e)) throw RangeError("Invalid status code");
                        return new _(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }, t.DOMException = n.DOMException;
                    try {
                        new t.DOMException
                    } catch (y) {
                        t.DOMException = function(t, e) {
                            this.message = t, this.name = e;
                            var n = Error(t);
                            this.stack = n.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function w(n, r) {
                        return new Promise(function(i, o) {
                            var s = new m(n, r);
                            if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                            var a = new XMLHttpRequest;

                            function u() {
                                a.abort()
                            }
                            a.onload = function() {
                                var t, e, n = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: (t = a.getAllResponseHeaders() || "", e = new l, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                        var n = t.split(":"),
                                            r = n.shift().trim();
                                        if (r) {
                                            var i = n.join(":").trim();
                                            e.append(r, i)
                                        }
                                    }), e)
                                };
                                n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                                var r = "response" in a ? a.response : a.responseText;
                                i(new _(r, n))
                            }, a.onerror = function() {
                                o(TypeError("Network request failed"))
                            }, a.ontimeout = function() {
                                o(TypeError("Network request failed"))
                            }, a.onabort = function() {
                                o(new t.DOMException("Aborted", "AbortError"))
                            }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && e.blob && (a.responseType = "blob"), s.headers.forEach(function(t, e) {
                                a.setRequestHeader(e, t)
                            }), s.signal && (s.signal.addEventListener("abort", u), a.onreadystatechange = function() {
                                4 === a.readyState && s.signal.removeEventListener("abort", u)
                            }), a.send(void 0 === s._bodyInit ? null : s._bodyInit)
                        })
                    }
                    w.polyfill = !0, n.fetch || (n.fetch = w, n.Headers = l, n.Request = m, n.Response = _), t.Headers = l, t.Request = m, t.Response = _, t.fetch = w, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (e = i.fetch).default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
        },
        44020: function(t) {
            "use strict";
            var e = "%[a-f0-9]{2}",
                n = RegExp("(" + e + ")|([^%]+?)", "gi"),
                r = RegExp("(" + e + ")+", "gi");
            t.exports = function(t) {
                if ("string" != typeof t) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
                try {
                    return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                } catch (e) {
                    return function(t) {
                        for (var e = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, i = r.exec(t); i;) {
                            try {
                                e[i[0]] = decodeURIComponent(i[0])
                            } catch (s) {
                                var o = function(t) {
                                    try {
                                        return decodeURIComponent(t)
                                    } catch (i) {
                                        for (var e = t.match(n) || [], r = 1; r < e.length; r++) e = (t = (function t(e, n) {
                                            try {
                                                return [decodeURIComponent(e.join(""))]
                                            } catch (r) {}
                                            if (1 === e.length) return e;
                                            n = n || 1;
                                            var i = e.slice(0, n),
                                                o = e.slice(n);
                                            return Array.prototype.concat.call([], t(i), t(o))
                                        })(e, r).join("")).match(n) || [];
                                        return t
                                    }
                                }(i[0]);
                                o !== i[0] && (e[i[0]] = o)
                            }
                            i = r.exec(t)
                        }
                        e["%C2"] = "�";
                        for (var a = Object.keys(e), l = 0; l < a.length; l++) {
                            var u = a[l];
                            t = t.replace(RegExp(u, "g"), e[u])
                        }
                        return t
                    }(t)
                }
            }
        },
        4501: function(t) {
            t.exports = r, r.strict = i, r.loose = o;
            var e = Object.prototype.toString,
                n = {
                    "[object Int8Array]": !0,
                    "[object Int16Array]": !0,
                    "[object Int32Array]": !0,
                    "[object Uint8Array]": !0,
                    "[object Uint8ClampedArray]": !0,
                    "[object Uint16Array]": !0,
                    "[object Uint32Array]": !0,
                    "[object Float32Array]": !0,
                    "[object Float64Array]": !0
                };

            function r(t) {
                return i(t) || o(t)
            }

            function i(t) {
                return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array
            }

            function o(t) {
                return n[e.call(t)]
            }
        },
        5826: function(t) {
            var e = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == e.call(t)
            }
        },
        17563: function(t, e, n) {
            "use strict";
            let r = n(70610),
                i = n(44020),
                o = n(80500),
                s = t => null == t;

            function a(t) {
                if ("string" != typeof t || 1 !== t.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(t, e) {
                return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t
            }

            function u(t, e) {
                return e.decode ? i(t) : t
            }

            function c(t) {
                let e = t.indexOf("#");
                return -1 !== e && (t = t.slice(0, e)), t
            }

            function h(t) {
                t = c(t);
                let e = t.indexOf("?");
                return -1 === e ? "" : t.slice(e + 1)
            }

            function d(t, e) {
                return e.parseNumbers && !Number.isNaN(Number(t)) && "string" == typeof t && "" !== t.trim() ? t = Number(t) : e.parseBooleans && null !== t && ("true" === t.toLowerCase() || "false" === t.toLowerCase()) && (t = "true" === t.toLowerCase()), t
            }

            function f(t, e) {
                a((e = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, e)).arrayFormatSeparator);
                let n = function(t) {
                        let e;
                        switch (t.arrayFormat) {
                            case "index":
                                return (t, n, r) => {
                                    if (e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), !e) {
                                        r[t] = n;
                                        return
                                    }
                                    void 0 === r[t] && (r[t] = {}), r[t][e[1]] = n
                                };
                            case "bracket":
                                return (t, n, r) => {
                                    if (e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), !e) {
                                        r[t] = n;
                                        return
                                    }
                                    if (void 0 === r[t]) {
                                        r[t] = [n];
                                        return
                                    }
                                    r[t] = [].concat(r[t], n)
                                };
                            case "comma":
                            case "separator":
                                return (e, n, r) => {
                                    let i = "string" == typeof n && n.split("").indexOf(t.arrayFormatSeparator) > -1,
                                        o = i ? n.split(t.arrayFormatSeparator).map(e => u(e, t)) : null === n ? n : u(n, t);
                                    r[e] = o
                                };
                            default:
                                return (t, e, n) => {
                                    if (void 0 === n[t]) {
                                        n[t] = e;
                                        return
                                    }
                                    n[t] = [].concat(n[t], e)
                                }
                        }
                    }(e),
                    r = Object.create(null);
                if ("string" != typeof t || !(t = t.trim().replace(/^[?#&]/, ""))) return r;
                for (let i of t.split("&")) {
                    let [s, l] = o(e.decode ? i.replace(/\+/g, " ") : i, "=");
                    l = void 0 === l ? null : ["comma", "separator"].includes(e.arrayFormat) ? l : u(l, e), n(u(s, e), l, r)
                }
                for (let c of Object.keys(r)) {
                    let h = r[c];
                    if ("object" == typeof h && null !== h)
                        for (let f of Object.keys(h)) h[f] = d(h[f], e);
                    else r[c] = d(h, e)
                }
                return !1 === e.sort ? r : (!0 === e.sort ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce((t, e) => {
                    let n = r[e];
                    return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? t[e] = function t(e) {
                        return Array.isArray(e) ? e.sort() : "object" == typeof e ? t(Object.keys(e)).sort((t, e) => Number(t) - Number(e)).map(t => e[t]) : e
                    }(n) : t[e] = n, t
                }, Object.create(null))
            }
            e.extract = h, e.parse = f, e.stringify = (t, e) => {
                if (!t) return "";
                a((e = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, e)).arrayFormatSeparator);
                let n = n => e.skipNull && s(t[n]) || e.skipEmptyString && "" === t[n],
                    r = function(t) {
                        switch (t.arrayFormat) {
                            case "index":
                                return e => (n, r) => {
                                    let i = n.length;
                                    return void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [l(e, t), "[", i, "]"].join("")] : [...n, [l(e, t), "[", l(i, t), "]=", l(r, t)].join("")]
                                };
                            case "bracket":
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [l(e, t), "[]"].join("")] : [...n, [l(e, t), "[]=", l(r, t)].join("")];
                            case "comma":
                            case "separator":
                                return e => (n, r) => null == r || 0 === r.length ? n : 0 === n.length ? [
                                    [l(e, t), "=", l(r, t)].join("")
                                ] : [
                                    [n, l(r, t)].join(t.arrayFormatSeparator)
                                ];
                            default:
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, l(e, t)] : [...n, [l(e, t), "=", l(r, t)].join("")]
                        }
                    }(e),
                    i = {};
                for (let o of Object.keys(t)) n(o) || (i[o] = t[o]);
                let u = Object.keys(i);
                return !1 !== e.sort && u.sort(e.sort), u.map(n => {
                    let i = t[n];
                    return void 0 === i ? "" : null === i ? l(n, e) : Array.isArray(i) ? i.reduce(r(n), []).join("&") : l(n, e) + "=" + l(i, e)
                }).filter(t => t.length > 0).join("&")
            }, e.parseUrl = (t, e) => {
                e = Object.assign({
                    decode: !0
                }, e);
                let [n, r] = o(t, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: f(h(t), e)
                }, e && e.parseFragmentIdentifier && r ? {
                    fragmentIdentifier: u(r, e)
                } : {})
            }, e.stringifyUrl = (t, n) => {
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                let r = c(t.url).split("?")[0] || "",
                    i = e.extract(t.url),
                    o = e.parse(i, {
                        sort: !1
                    }),
                    s = Object.assign(o, t.query),
                    a = e.stringify(s, n);
                a && (a = `?${a}`);
                let u = function(t) {
                    let e = "",
                        n = t.indexOf("#");
                    return -1 !== n && (e = t.slice(n)), e
                }(t.url);
                return t.fragmentIdentifier && (u = `#${l(t.fragmentIdentifier,n)}`), `${r}${a}${u}`
            }
        },
        80500: function(t) {
            "use strict";
            t.exports = (t, e) => {
                if (!("string" == typeof t && "string" == typeof e)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === e) return [t];
                let n = t.indexOf(e);
                return -1 === n ? [t] : [t.slice(0, n), t.slice(n + e.length)]
            }
        },
        70610: function(t) {
            "use strict";
            t.exports = t => encodeURIComponent(t).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        11742: function(t) {
            t.exports = function() {
                var t = document.getSelection();
                if (!t.rangeCount) return function() {};
                for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++) n.push(t.getRangeAt(r));
                switch (e.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        e.blur();
                        break;
                    default:
                        e = null
                }
                return t.removeAllRanges(),
                    function() {
                        "Caret" === t.type && t.removeAllRanges(), t.rangeCount || n.forEach(function(e) {
                            t.addRange(e)
                        }), e && e.focus()
                    }
            }
        },
        65054: function(t, e, n) {
            var r = n(48764).Buffer,
                i = n(4501).strict;
            t.exports = function(t) {
                if (!i(t)) return r.from(t);
                var e = r.from(t.buffer);
                return t.byteLength !== t.buffer.byteLength && (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)), e
            }
        }
    }
]);