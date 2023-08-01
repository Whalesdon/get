(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [523], {
        9210: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/deploy", function() {
                return a(99502)
            }])
        },
        67575: function(e, t, a) {
            "use strict";
            var r = a(85893),
                s = a(67294);
            let n = e => {
                let {
                    className: t,
                    content: a,
                    name: n
                } = e, [l, i] = (0, s.useState)(!1);
                return (0, r.jsxs)("div", {
                    className: "relative inline-block",
                    onMouseEnter: () => i(!0),
                    onMouseLeave: () => i(!1),
                    children: [l && (0, r.jsx)("div", {
                        className: "absolute w-36 top-0 left-0 mt-[-20px] text-black dark:text-white px-1 py-1 bg-white border border-black dark:border-white rounded-lg shadow-sm dark:bg-gray-800",
                        children: (0, r.jsx)("span", {
                            className: "normal-case",
                            children: a
                        })
                    }), (0, r.jsx)("svg", {
                        "data-tooltip-target": n,
                        "data-tooltip-placement": "top",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "1em",
                        viewBox: "0 0 512 512",
                        children: (0, r.jsx)("path", {
                            d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        })
                    })]
                })
            };
            t.Z = n
        },
        3444: function(e, t, a) {
            "use strict";
            a.d(t, {
                _: function() {
                    return r
                }
            });
            let r = {
                abi: [{
                    inputs: [],
                    name: "IncorrectPaymentPlan",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InsufficientPayment",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidContractType",
                    type: "error"
                }, {
                    inputs: [],
                    name: "MathOverflowedMulDiv",
                    type: "error"
                }, {
                    inputs: [],
                    name: "PercentOutOfRange",
                    type: "error"
                }, {
                    inputs: [],
                    name: "TransferFailed",
                    type: "error"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "string",
                        name: "name",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "symbol",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "supply",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "referrer",
                        type: "address"
                    }, {
                        internalType: "uint8",
                        name: "maxWallet",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "maxTransaction",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "buyTax",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "sellTax",
                        type: "uint8"
                    }, {
                        internalType: "enum FactoryV2.PaymentPlan",
                        name: "plan",
                        type: "uint8"
                    }, {
                        internalType: "enum FactoryV2.ContractType",
                        name: "contractType",
                        type: "uint8"
                    }],
                    name: "deployContract",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_newPlatformAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_discountBalance",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_price1",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_price2",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_price3",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_dPrice1",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_dPrice2",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_dPrice3",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "_revShare",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "_devFeeTier1",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "_devFeeTier2",
                        type: "uint8"
                    }],
                    name: "updateContractParameters",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_discountToken",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [],
                    name: "_owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "contractsByDeployer",
                    outputs: [{
                        internalType: "address",
                        name: "contractAddress",
                        type: "address"
                    }, {
                        internalType: "enum FactoryV2.ContractType",
                        name: "contractType",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "devFeeTier1",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "devFeeTier2",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "discountToken",
                    outputs: [{
                        internalType: "contract IERC20",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dPrice1",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dPrice2",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dPrice3",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "deployer",
                        type: "address"
                    }],
                    name: "getContractsByDeployer",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "contractAddress",
                            type: "address"
                        }, {
                            internalType: "enum FactoryV2.ContractType",
                            name: "contractType",
                            type: "uint8"
                        }],
                        internalType: "struct FactoryV2.DeployedContract[]",
                        name: "",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "user",
                        type: "address"
                    }],
                    name: "getPoints",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getReferrers",
                    outputs: [{
                        internalType: "address[]",
                        name: "",
                        type: "address[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "platformAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "price1",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "price2",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "price3",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "referralPoints",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "requiredDiscountTokenBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "revenueShare",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }]
            }
        },
        99502: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return v
                }
            });
            var r = a(85893),
                s = a(41798),
                n = a(67294),
                l = a(11163),
                i = a(82169),
                d = a(64146),
                c = a(35553),
                o = a(19485),
                x = a(69077),
                u = a(50638),
                m = a(86501),
                p = a(67575);
            let y = e => {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("svg", {
                    className: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "1em",
                    viewBox: "0 0 320 512",
                    children: (0, r.jsx)("path", {
                        d: "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                    })
                })
            };
            var b = a(3444),
                g = a(81626),
                h = a(41664),
                f = a.n(h);
            let w = new i.r("".concat("https://eth.llamarpc.com")),
                j = new d.CH("".concat("0xFcEA320C85d3393605b656f3A725DC1d05DEd6B1"), b._.abi, w),
                k = new d.CH("".concat("0x4eCfC56672C7630B84dAc9C1f7407579715DE155"), g.P.abi, w),
                N = () => {
                    let e = (0, l.useRouter)(),
                        [t, a] = (0, n.useState)(""),
                        [s, i] = (0, n.useState)(""),
                        [d, b] = (0, n.useState)("");
                    (0, n.useEffect)(() => {
                        if (e.isReady) {
                            let t = e.query.ref;
                            console.log(t), t && (a(t), ew(t))
                        }
                    }, [e.isReady]);
                    let {
                        data: g,
                        isError: h
                    } = (0, x.mx)(), [w, N] = (0, n.useState)(1), [T, v] = (0, n.useState)("NoTax"), [C, M] = (0, n.useState)("Pepe"), [P, S] = (0, n.useState)("PEPE"), [F, _] = (0, n.useState)("420690000"), [E, A] = (0, n.useState)("1"), [B, D] = (0, n.useState)("1"), [Z, q] = (0, n.useState)(""), [O, L] = (0, n.useState)(""), [R, G] = (0, n.useState)(""), [I, V] = (0, n.useState)(""), [W, z] = (0, n.useState)(""), [H, U] = (0, n.useState)("5"), [X, $] = (0, n.useState)(""), [J, K] = (0, n.useState)("5"), [Q, Y] = (0, n.useState)(""), [ee, et] = (0, n.useState)("2"), [ea, er] = (0, n.useState)(0), [es, en] = (0, n.useState)(["0", "0", "0", "0", "0", "0"]), [el, ei] = (0, n.useState)(["0", "0"]), [ed, ec] = (0, n.useState)(!1), [eo, ex] = (0, n.useState)(null), [eu, em] = (0, n.useState)(null), [ep, ey] = (0, n.useState)(0), [eb, eg] = (0, n.useState)(0);
                    (0, n.useEffect)(() => {
                        let e = async () => {
                            let e = c.formatEther(await j.price1()),
                                t = c.formatEther(await j.price2()),
                                a = c.formatEther(await j.price3()),
                                r = c.formatEther(await j.dPrice1()),
                                s = c.formatEther(await j.dPrice2()),
                                n = c.formatEther(await j.dPrice3());
                            en([e, t, a, r, s, n]);
                            let l = await j.devFeeTier1(),
                                i = await j.devFeeTier2();
                            ei([l, i]);
                            let d = c.formatEther(await j.requiredDiscountTokenBalance());
                            console.log(d), ey(Number(d))
                        };
                        e()
                    }, []);
                    let eh = e => {
                            let t = !0;
                            C ? q("") : (q("Token name is required"), t = !1), P ? L("") : (L("Symbol is required"), t = !1), F ? G("") : (G("Supply is required"), t = !1), E ? V("") : (V("Max wallet is required"), t = !1), B ? z("") : (z("Max transaction is required"), t = !1), "TaxToken" === T && (H ? $("") : ($("Buy tax is required"), t = !1), J ? Y("") : (Y("Sell tax is required"), t = !1)), e.preventDefault(), t && ef(), "1" == ee ? er(5) : "2" == ee ? er(3) : er(0)
                        },
                        ef = async () => {
                            N(w + 1)
                        },
                        ew = async e => {
                            if (console.log(e), o.isAddress(e) || "" == e) {
                                if ("" != e) {
                                    a(e), i("");
                                    let t = await k.balanceOf(e),
                                        r = c.formatEther(t),
                                        s = await j.platformAddress();
                                    console.log(e, s), eg(Number(r)), Number(r) >= ep && 0 != Number(r) && e != s ? b("This wallet gives you a discount on all deployments!") : b("")
                                } else eg(0), a(e), i(""), b("")
                            } else i("Invalid Ethereum address"), a(e), b(""), eg(0)
                        },
                        ej = e => {
                            et("2"), v(e)
                        },
                        ek = async () => {
                            if (!g) {
                                console.log("Signer not connected"), m.Am.error("No connected wallet");
                                return
                            }
                            ec(!0);
                            try {
                                let e = j.connect(g),
                                    a = "NoTax" === T ? 0 : 1,
                                    s = Number(ee) - 1,
                                    n = await j.platformAddress(),
                                    l = n;
                                o.isAddress(t) && (l = t);
                                let i = es[s];
                                eb >= ep && 0 != Number(eb) && (i = es[s + 3]);
                                let d = {
                                    name: C,
                                    symbol: P,
                                    supply: Number(F),
                                    referrer: l,
                                    maxWallet: Number(E),
                                    maxTransaction: Number(B),
                                    buyTax: Number(H),
                                    sellTax: Number(J),
                                    plan: Number(s),
                                    contractType: Number(a)
                                };
                                console.log(d, c.parseEther(i));
                                let x = await e.deployContract(C, P, Number(F), l, Number(E), Number(B), Number(H), Number(J), Number(s), Number(a), {
                                    value: c.parseEther(i)
                                });
                                console.log("Transaction:", x);
                                let u = await x.wait();
                                console.log("Transaction receipt:", u), m.Am.success((0, r.jsxs)(f(), {
                                    href: "/manager",
                                    children: ["Successfully Deployed ", P, (0, r.jsx)("br", {}), (0, r.jsx)("span", {
                                        className: "text-blue-500",
                                        children: "Click to manage"
                                    })]
                                }), {
                                    duration: 1e4
                                })
                            } catch (p) {
                                console.error("Failed to deploy:", p), m.Am.error("Failed to deploy. Check if you have enough funds for deploying + gas."), ec(!1)
                            }
                            ec(!1)
                        },
                        eN = () => {
                            N(w - 1)
                        },
                        eT = e => {
                            let t = e.target.value;
                            t < 0 ? $("Base marketing tax should be greater than or equal to 0.") : $(""), U(t)
                        },
                        ev = e => {
                            let t = e.target.value;
                            t < 0 ? Y("Base marketing tax should be greater than or equal to 0.") : Y(""), K(t)
                        },
                        eC = e => {
                            let t = e.target.value;
                            "" === t ? q("Token name cannot be empty.") : q(""), M(t)
                        },
                        eM = e => {
                            let t = e.target.value;
                            "" === t ? L("Symbol cannot be empty.") : L(""), S(t)
                        },
                        eP = e => {
                            let t = e.target.value;
                            t <= 0 ? G("Supply should be greater than 0.") : G(""), _(t)
                        },
                        eS = e => {
                            let t = e.target.value;
                            t < 1 || t > 10 ? V("Max Wallet should be between 1 and 10.") : V(""), A(t)
                        },
                        eF = e => {
                            let t = e.target.value;
                            t < 1 || t > 10 ? z("Max Transaction should be between 1 and 10.") : z(""), D(t)
                        };
                    return (0, n.useEffect)(() => {
                        let e = async () => {
                            if (g) {
                                let e = await g.getAddress();
                                ex(e);
                                let t = await g.getBalance(),
                                    a = c.formatEther(t);
                                console.log(a), em(a), N(2)
                            }
                        };
                        e()
                    }, [g]), (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center space-y-4",
                        children: [(0, r.jsxs)("ol", {
                            className: "mb-8 flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base",
                            children: [(0, r.jsx)("li", {
                                className: "flex md:w-full items-center ".concat(w >= 1 ? "text-blue-600 dark:text-blue-500" : "text-gray-200 dark:text-gray-500", " sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-").concat(w >= 1 ? "blue-600" : "gray-200", " after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-").concat(w >= 1 ? "blue-500" : "gray-700"),
                                children: (0, r.jsxs)("span", {
                                    className: "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500",
                                    children: [w < 2 ? (0, r.jsx)("span", {
                                        className: "mr-2",
                                        children: "1."
                                    }) : (0, r.jsx)("svg", {
                                        className: "w-2 h-2 sm:w-4 sm:h-4 mr-2.5",
                                        "aria-hidden": "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: (0, r.jsx)("path", {
                                            d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                        })
                                    }), (0, r.jsx)("span", {
                                        className: "hidden sm:inline-flex sm:ml-2",
                                        children: "Connect Wallet"
                                    })]
                                })
                            }), (0, r.jsx)("li", {
                                className: "flex md:w-full items-center ".concat(w >= 2 ? "text-blue-600 dark:text-blue-500" : "text-gray-200 dark:text-gray-500", " sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-").concat(w >= 2 ? "blue-600" : "gray-200", " after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-").concat(w >= 2 ? "blue-500" : "gray-700"),
                                children: (0, r.jsxs)("span", {
                                    className: "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500",
                                    children: [w < 3 ? (0, r.jsx)("span", {
                                        className: "mr-2",
                                        children: "2."
                                    }) : (0, r.jsx)("svg", {
                                        className: "w-2 h-2 sm:w-4 sm:h-4 mr-2.5",
                                        "aria-hidden": "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: (0, r.jsx)("path", {
                                            d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                        })
                                    }), (0, r.jsx)("span", {
                                        className: "hidden sm:inline-flex sm:ml-2",
                                        children: "Info"
                                    })]
                                })
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center ".concat(w >= 3 ? "text-blue-600 dark:text-blue-500" : "text-gray-200 dark:text-gray-500"),
                                children: [(0, r.jsx)("span", {
                                    className: "mr-2",
                                    children: "3."
                                }), "Confirmation"]
                            })]
                        }), 1 === w && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.NL, {}), (0, r.jsx)("p", {
                                className: "text-sm text-gray-700 dark:text-gray-200",
                                children: "Connect with the desired deployer wallet"
                            })]
                        }), 2 === w && (0, r.jsxs)("div", {
                            className: "space-y-6 flex flex-col items-center w-full",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-wrap justify-between space-y-6",
                                children: [(0, r.jsx)(u.NL, {}), (0, r.jsxs)("div", {
                                    className: "w-full px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsxs)("label", {
                                        className: "flex items-center-justify-center block uppercase tracking-wide text-gray-700 dark:text-gray-400 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: ["Referrer Address", " ", (0, r.jsx)(p.Z, {
                                            name: "ref_address",
                                            content: "A referrer address can gives you discount on deployment if it holds at least ".concat(ep, " $DUPE"),
                                            className: "ml-4 fill-black dark:fill-white cursor-pointer"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "text",
                                        placeholder: "0x..",
                                        value: t,
                                        onChange: e => {
                                            let t = e.target.value;
                                            ew(t)
                                        },
                                        className: "disabled:opacity-50 appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ".concat("" != s ? "border-red-600 mb-0" : "", " ").concat("" != d ? "border-green-500 mb-0" : "", " ")
                                    }), s && (0, r.jsx)("p", {
                                        className: "text-red-600 text-sm",
                                        children: s
                                    }), d && (0, r.jsx)("p", {
                                        className: "text-green-500 text-sm",
                                        children: d
                                    }), (0, r.jsx)("label", {
                                        className: "block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2 mt-4",
                                        children: "Template"
                                    }), (0, r.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [(0, r.jsxs)("div", {
                                            onClick: () => ej("NoTax"),
                                            className: "cursor-pointer text-center p-2 rounded text-gray-800 dark:text-gray-200 ".concat("NoTax" === T ? "bg-blue-500 border-blue-500 dark:bg-blue-500 text-white" : "border dark:border-gray-700 dark:bg-gray-800"),
                                            children: [(0, r.jsx)("h3", {
                                                className: "text-lg font-bold",
                                                children: "No Tax Token"
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsx)("span", {
                                                className: "text-sm",
                                                children: "This token contract will not include taxes and have less deployment costs."
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            onClick: () => ej("TaxToken"),
                                            className: "cursor-pointer text-center p-2 rounded text-gray-800 dark:text-gray-200 ".concat("TaxToken" === T ? "bg-blue-500 border-blue-500 dark:bg-blue-500 text-white" : "border dark:border-gray-700 dark:bg-gray-800"),
                                            children: [(0, r.jsx)("h3", {
                                                className: "text-lg font-bold",
                                                children: "Tax Token"
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsx)("span", {
                                                className: "text-sm",
                                                children: "Get taxes from volume as a marketing tax."
                                            })]
                                        })]
                                    })]
                                }), T && (0, r.jsxs)("div", {
                                    className: "w-full px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsx)("label", {
                                        className: "block uppercase tracking-wide text-gray-700 dark:text-gray-400 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: "Name of Project"
                                    }), (0, r.jsx)("input", {
                                        type: "text",
                                        value: C,
                                        onChange: eC,
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border ".concat(Z ? "border-red-600" : "", " rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white")
                                    }), Z && (0, r.jsx)("p", {
                                        className: "text-red-600 text-xs",
                                        children: Z
                                    })]
                                }), T && (0, r.jsxs)("div", {
                                    className: "w-full px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsx)("label", {
                                        className: "block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: "Symbol / Ticker"
                                    }), (0, r.jsx)("input", {
                                        type: "text",
                                        value: P,
                                        onChange: eM,
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border ".concat(O ? "border-red-600" : "", " rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white")
                                    }), O && (0, r.jsx)("p", {
                                        className: "text-red-600 text-xs",
                                        children: O
                                    })]
                                }), T && (0, r.jsxs)("div", {
                                    className: "w-full px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsx)("label", {
                                        className: "block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: "Token Supply"
                                    }), (0, r.jsx)("input", {
                                        type: "number",
                                        value: F,
                                        onChange: eP,
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border ".concat(R ? "border-red-600" : "", " rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white")
                                    }), R && (0, r.jsx)("p", {
                                        className: "text-red-600 text-xs",
                                        children: R
                                    })]
                                }), T && (0, r.jsxs)("div", {
                                    className: "w-full md:w-1/2 px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsxs)("label", {
                                        className: "block flex flex-row items-center uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: ["Max Wallet %", (0, r.jsx)(p.Z, {
                                            name: "max_wallet",
                                            content: "Max wallet is the max allowed % of supply a wallet is allowed to hold",
                                            className: "ml-4 fill-black dark:fill-white cursor-pointer"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "number",
                                        min: "1",
                                        max: "10",
                                        value: E,
                                        onChange: eS,
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border ".concat(I ? "border-red-600" : "", " rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white")
                                    }), I && (0, r.jsx)("p", {
                                        className: "text-red-600 text-xs",
                                        children: I
                                    })]
                                }), T && (0, r.jsxs)("div", {
                                    className: "w-full md:w-1/2 px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsxs)("label", {
                                        className: "flex flex-row items-center block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: ["Max Transaction %", " ", (0, r.jsx)(p.Z, {
                                            name: "max_tx",
                                            content: "Max Transaction is the max allowed % of supply a wallet can buy in one transaction",
                                            className: "ml-4 fill-black dark:fill-white cursor-pointer"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "number",
                                        min: "1",
                                        max: "10",
                                        value: B,
                                        onChange: eF,
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border ".concat(W ? "border-red-600" : "", " rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white")
                                    }), W && (0, r.jsx)("p", {
                                        className: "text-red-600 text-xs",
                                        children: W
                                    })]
                                }), "TaxToken" === T && (0, r.jsxs)("div", {
                                    className: "w-1/2 px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsxs)("label", {
                                        className: " flex flex-row items-center block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: ["Buy Tax %", (0, r.jsx)(p.Z, {
                                            name: "buy_tax",
                                            content: "% of taxes on buys",
                                            className: "ml-4 fill-black dark:fill-white cursor-pointer"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "number",
                                        min: "0",
                                        value: H,
                                        onChange: eT,
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border ".concat(X ? "border-red-600" : "", " rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white")
                                    }), X && (0, r.jsx)("p", {
                                        className: "text-red-600 text-xs",
                                        children: X
                                    })]
                                }), "TaxToken" === T && (0, r.jsxs)("div", {
                                    className: "w-1/2 px-3 mb-6 md:mb-0",
                                    children: [(0, r.jsxs)("label", {
                                        className: " flex flex-row items-center block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                        children: ["Sell Tax %", (0, r.jsx)(p.Z, {
                                            name: "sell_tax",
                                            content: "% of taxes on sells",
                                            className: "ml-4 fill-black dark:fill-white cursor-pointer"
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "number",
                                        min: "0",
                                        value: J,
                                        onChange: ev,
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border ".concat(Q ? "border-red-600" : "", " rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white")
                                    }), Q && (0, r.jsx)("p", {
                                        className: "text-red-600 text-xs",
                                        children: Q
                                    })]
                                })]
                            }), "TaxToken" == T && (0, r.jsxs)("div", {
                                className: "w-full px-3 mb-6 md:mb-0",
                                children: [(0, r.jsxs)("label", {
                                    className: " block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                    children: ["Payment Plan", " ", eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                        className: "ml-2 text-green-500",
                                        children: "Discount Added"
                                    }) : (0, r.jsx)(r.Fragment, {})]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-2",
                                    children: [(0, r.jsx)("input", {
                                        type: "range",
                                        min: "1",
                                        max: "3",
                                        value: ee,
                                        onChange: e => et(e.target.value),
                                        className: "w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 mb-4"
                                    }), (0, r.jsxs)("div", {
                                        className: "grid grid-cols-3 gap-x-2",
                                        children: [(0, r.jsxs)("div", {
                                            onClick: () => et("1"),
                                            className: "cursor-pointer w-full text-center p-2 rounded text-gray-800 dark:text-gray-200 ".concat("1" === ee ? "bg-blue-500 border-blue-500 dark:bg-blue-500 text-white" : "border dark:border-gray-700 dark:bg-gray-800"),
                                            children: [(0, r.jsx)("h3", {
                                                className: "text-lg font-bold",
                                                children: "Plan 1 "
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsxs)("span", {
                                                className: "text-sm flex flex-row items-center justify-center",
                                                children: [eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                                    className: "font-bold text-lg outline-green-500",
                                                    children: es[3]
                                                }) : es[0], " ", (0, r.jsx)(y, {
                                                    className: "fill-black dark:fill-white h-4 w-4"
                                                }), " + Gas"]
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsxs)("span", {
                                                className: "text-sm",
                                                children: [el[0], "% Platform Tax Fee"]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            onClick: () => et("2"),
                                            className: "cursor-pointer w-full text-center p-2 rounded text-gray-800 dark:text-gray-200 ".concat("2" === ee ? "bg-blue-500 border-blue-500 dark:bg-blue-500 text-white" : "border dark:border-gray-700 dark:bg-gray-800"),
                                            children: [(0, r.jsx)("h3", {
                                                className: "text-lg font-bold",
                                                children: "Plan 2 "
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsxs)("span", {
                                                className: "text-sm flex flex-row items-center justify-center",
                                                children: [eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                                    className: "font-bold text-lg outline-green-500",
                                                    children: es[4]
                                                }) : es[1], " ", (0, r.jsx)(y, {
                                                    className: "fill-black dark:fill-white h-4 w-4"
                                                }), "+ Gas"]
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsxs)("span", {
                                                className: "text-sm",
                                                children: [el[1], "% Platform Tax Fee"]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            onClick: () => et("3"),
                                            className: "cursor-pointer w-full text-center p-2 rounded text-gray-800 dark:text-gray-200 ".concat("3" === ee ? "bg-blue-500 border-blue-500 dark:bg-blue-500 text-white" : "border dark:border-gray-700 dark:bg-gray-800"),
                                            children: [(0, r.jsx)("h3", {
                                                className: "text-lg font-bold",
                                                children: "Plan 3 "
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsxs)("span", {
                                                className: "text-sm flex flex-row items-center justify-center",
                                                children: [eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                                    className: "font-bold text-lg outline-green-500",
                                                    children: es[5]
                                                }) : es[2], " ", (0, r.jsx)(y, {
                                                    className: "fill-black dark:fill-white h-4 w-4"
                                                }), "+ Gas"]
                                            }), (0, r.jsx)("br", {}), " ", (0, r.jsx)("span", {
                                                className: "text-sm",
                                                children: "0% Platform Tax Fee"
                                            })]
                                        })]
                                    })]
                                })]
                            }), "NoTax" == T && (0, r.jsxs)("div", {
                                className: "w-full px-3 mb-6 md:mb-0",
                                children: [(0, r.jsxs)("label", {
                                    className: " block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2",
                                    children: ["Payment Plan", " ", eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                        className: "ml-2 text-green-500",
                                        children: "Discount Added"
                                    }) : (0, r.jsx)(r.Fragment, {})]
                                }), (0, r.jsx)("div", {
                                    className: "mt-2",
                                    children: (0, r.jsxs)("div", {
                                        onClick: () => et("2"),
                                        className: "cursor-pointer w-full text-center p-2 rounded text-gray-800 dark:text-gray-200 ".concat("2" === ee ? "bg-blue-500 border-blue-500 dark:bg-blue-500 text-white" : "border dark:border-gray-700 dark:bg-gray-800"),
                                        children: [(0, r.jsx)("h3", {
                                            className: "text-lg font-bold",
                                            children: "Unique Plan "
                                        }), (0, r.jsx)("br", {}), " ", (0, r.jsxs)("span", {
                                            className: "text-sm flex flex-row items-center justify-center",
                                            children: [eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                                className: "font-bold text-lg outline-green-500",
                                                children: es[4]
                                            }) : es[1], " ", (0, r.jsx)(y, {
                                                className: "fill-black dark:fill-white h-4 w-4"
                                            }), "+ Gas"]
                                        })]
                                    })
                                })]
                            }), (0, r.jsx)("button", {
                                disabled: "" != Q || "" != X || "" != Z || "" != O || "" != W || "" != I,
                                onClick: eh,
                                className: "disabled:opacity-50 p-2 mt-4 w-1/3 max-w-md bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-700 hover:bg-blue-700 font-bold text-white rounded",
                                children: "Next"
                            })]
                        }), 3 === w && (0, r.jsxs)("div", {
                            className: "space-y-6 flex flex-col items-center w-full",
                            children: [(0, r.jsx)(u.NL, {}), (0, r.jsx)("h2", {
                                className: "text-3xl font-bold mb-4 text-black dark:text-white",
                                children: "Token Configuration Review"
                            }), (0, r.jsxs)("table", {
                                className: "w-full table-auto shadow-md rounded-lg border borde-white",
                                children: [(0, r.jsx)("thead", {
                                    className: "text-gray-700 dark:text-gray-200 rounded-t-lg",
                                    children: (0, r.jsxs)("tr", {
                                        className: "rounded-lg",
                                        children: [(0, r.jsx)("th", {
                                            className: "px-4 py-2",
                                            children: "Parameter"
                                        }), (0, r.jsx)("th", {
                                            className: "px-4 py-2",
                                            children: "Value"
                                        })]
                                    })
                                }), (0, r.jsxs)("tbody", {
                                    children: [(0, r.jsxs)("tr", {
                                        className: "bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Referrer Address"
                                        }), (0, r.jsx)("td", {
                                            className: "border px-4 py-2 ".concat("" != s ? "text-red-500" : ""),
                                            children: t
                                        })]
                                    }), (0, r.jsxs)("tr", {
                                        className: "bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Template"
                                        }), (0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: T
                                        })]
                                    }), (0, r.jsxs)("tr", {
                                        className: "bg-gray-300 text-gray-700 dark:text-gray-200 dark:bg-gray-600",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Name of Project "
                                        }), (0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: C
                                        })]
                                    }), (0, r.jsxs)("tr", {
                                        className: "bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Symbol / Ticker"
                                        }), (0, r.jsxs)("td", {
                                            className: "border px-4 py-2",
                                            children: ["$", P]
                                        })]
                                    }), (0, r.jsxs)("tr", {
                                        className: "bg-gray-300 text-gray-700 dark:text-gray-200 dark:bg-gray-600",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Token Supply"
                                        }), (0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: F
                                        })]
                                    }), (0, r.jsxs)("tr", {
                                        className: "bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Max Wallet %"
                                        }), (0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: E
                                        })]
                                    }), (0, r.jsxs)("tr", {
                                        className: "bg-gray-300 text-gray-700 dark:text-gray-200 dark:bg-gray-600",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Max Transaction %"
                                        }), (0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: B
                                        })]
                                    }), "TaxToken" === T && (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsxs)("tr", {
                                            className: "bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700",
                                            children: [(0, r.jsx)("td", {
                                                className: "border px-4 py-2",
                                                children: "Initial Buy Tax %"
                                            }), (0, r.jsxs)("td", {
                                                className: "border px-4 py-2",
                                                children: [Number(H) + Number(ea), "% (includes the ", ea, " ", "% Platform Fees)"]
                                            })]
                                        })
                                    }), "TaxToken" === T && (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsxs)("tr", {
                                            className: "bg-gray-300 text-gray-700 dark:text-gray-200 dark:bg-gray-600",
                                            children: [(0, r.jsx)("td", {
                                                className: "border px-4 py-2",
                                                children: "Sell Tax %"
                                            }), (0, r.jsxs)("td", {
                                                className: "border px-4 py-2",
                                                children: [Number(J) + Number(ea), "% (includes the ", ea, " ", "% Platform Fees)"]
                                            })]
                                        })
                                    }), (0, r.jsxs)("tr", {
                                        className: "bg-gray-100 text-gray-700 dark:text-gray-200 dark:bg-gray-500",
                                        children: [(0, r.jsx)("td", {
                                            className: "border px-4 py-2",
                                            children: "Payment Plan"
                                        }), (0, r.jsxs)("td", {
                                            className: "border px-4 py-2",
                                            children: ["1" === ee && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsxs)("span", {
                                                    className: "text-sm flex flex-row items-center",
                                                    children: [eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                                        className: "font-bold text-lg text-green-500",
                                                        children: es[3]
                                                    }) : es[0], " ", (0, r.jsx)(y, {
                                                        className: "fill-black dark:fill-white h-4 w-4"
                                                    }), " + Gas"]
                                                }), (0, r.jsx)("span", {
                                                    className: "text-sm",
                                                    children: "5% Platform Tax Fee"
                                                })]
                                            }), "2" === ee && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsxs)("span", {
                                                    className: "text-sm flex flex-row items-center",
                                                    children: [eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                                        className: "font-bold text-lg text-green-500",
                                                        children: es[4]
                                                    }) : es[1], " ", (0, r.jsx)(y, {
                                                        className: "fill-black dark:fill-white h-4 w-4"
                                                    }), " + Gas"]
                                                }), "TaxToken" == T && (0, r.jsx)("span", {
                                                    className: "text-sm",
                                                    children: "3% Platform Tax Fee"
                                                })]
                                            }), "3" === ee && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsxs)("span", {
                                                    className: "text-sm flex flex-row items-center",
                                                    children: [eb >= ep && 0 != eb ? (0, r.jsx)("span", {
                                                        className: "font-bold text-lg text-green-500",
                                                        children: es[5]
                                                    }) : es[2], " ", (0, r.jsx)(y, {
                                                        className: "fill-black dark:fill-white h-4 w-4"
                                                    }), " + Gas"]
                                                }), (0, r.jsx)("span", {
                                                    className: "text-sm",
                                                    children: "0% Platform Tax Fee"
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-row items-center justify-center w-full space-x-4 ",
                                children: [(0, r.jsx)("button", {
                                    onClick: eN,
                                    className: "p-2 mt-4 w-1/3 max-w-md bg-transparent border-2 border-black text-black dark:border-white font-bold dark:text-white rounded",
                                    children: "Back"
                                }), (0, r.jsx)("button", {
                                    onClick: ek,
                                    className: "p-2 mt-4 w-1/3 max-w-md bg-blue-500 hover:bg-blue-700 font-bold text-white rounded flex items-center justify-center",
                                    children: ed ? (0, r.jsxs)("div", {
                                        role: "status",
                                        children: [(0, r.jsxs)("svg", {
                                            "aria-hidden": "true",
                                            className: "w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700 dark:fill-blue-200",
                                            viewBox: "0 0 100 101",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, r.jsx)("path", {
                                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                fill: "currentColor"
                                            }), (0, r.jsx)("path", {
                                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                fill: "currentFill"
                                            })]
                                        }), (0, r.jsx)("span", {
                                            className: "sr-only",
                                            children: "Loading..."
                                        })]
                                    }) : (0, r.jsx)("span", {
                                        children: "Deploy"
                                    })
                                })]
                            })]
                        })]
                    })
                };

            function T(e) {
                return (0, r.jsx)("div", {
                    className: "backdrop-blur bg-white dark:bg-black bg-opacity-80 min-h-screen flex items-center justify-center",
                    children: (0, r.jsxs)("div", {
                        className: "p-8 rounded-lg w-full max-w-2xl",
                        children: [(0, r.jsx)("h1", {
                            className: "pb-8 text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600",
                            children: "Duplicate"
                        }), (0, r.jsx)(N, {})]
                    })
                })
            }

            function v(e) {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Z, {}), (0, r.jsx)(T, {})]
                })
            }
        },
        11163: function(e, t, a) {
            e.exports = a(80880)
        }
    },
    function(e) {
        e.O(0, [979, 352, 774, 888, 179], function() {
            return e(e.s = 9210)
        }), _N_E = e.O()
    }
]);