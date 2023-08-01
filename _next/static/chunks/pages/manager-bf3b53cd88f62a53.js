(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [543], {
        86084: function(e) {
            ! function() {
                var t = [, , , , ];

                function n() {
                    var e = t[0] ^ t[0] << 11;
                    return t[0] = t[1], t[1] = t[2], t[2] = t[3], t[3] = t[3] ^ t[3] >> 19 ^ e ^ e >> 8, (t[3] >>> 0) / 2147483648
                }

                function a() {
                    return "hsl(" + Math.floor(360 * n()) + "," + (60 * n() + 40) + "%," + (n() + n() + n() + n()) * 25 + "%)"
                }

                function i(e) {
                    var n = {};
                    return n.size = e.size || 8, n.scale = e.scale || 4, n.seed = e.seed || Math.floor(1e16 * Math.random()).toString(16), n.color = e.color || a(), n.bgcolor = e.bgcolor || a(), n.spotcolor = e.spotcolor || a(), ! function(e) {
                        for (var n = 0; n < t.length; n++) t[n] = 0;
                        for (var n = 0; n < e.length; n++) t[n % 4] = (t[n % 4] << 5) - t[n % 4] + e.charCodeAt(n)
                    }(n.seed), n
                }

                function s(e, t) {
                    var e = i(e || {}),
                        a = function(e) {
                            for (var t = Math.ceil(e / 2), a = e - t, i = [], s = 0; s < e; s++) {
                                for (var r = [], p = 0; p < t; p++) r[p] = Math.floor(2.3 * n());
                                var u = r.slice(0, a);
                                u.reverse(), r = r.concat(u);
                                for (var l = 0; l < r.length; l++) i.push(r[l])
                            }
                            return i
                        }(e.size),
                        s = Math.sqrt(a.length);
                    t.width = t.height = e.size * e.scale;
                    var r = t.getContext("2d");
                    r.fillStyle = e.bgcolor, r.fillRect(0, 0, t.width, t.height), r.fillStyle = e.color;
                    for (var p = 0; p < a.length; p++)
                        if (a[p]) {
                            var u = Math.floor(p / s),
                                l = p % s;
                            r.fillStyle = 1 == a[p] ? e.color : e.spotcolor, r.fillRect(l * e.scale, u * e.scale, e.scale, e.scale)
                        }
                    return t
                }
                var r = {
                    create: function(e) {
                        var e = i(e || {}),
                            t = document.createElement("canvas");
                        return s(e, t), t
                    },
                    render: s
                };
                e.exports = r, "undefined" != typeof window && (window.blockies = r)
            }()
        },
        69938: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/manager", function() {
                return n(5256)
            }])
        },
        3444: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return a
                }
            });
            let a = {
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
        10714: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return a
                }
            });
            let a = {
                abi: [{
                    inputs: [{
                        internalType: "string",
                        name: "_name",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "_symbol",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "_tokenSupply",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "_maxWalletPercent",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "_maxTxPercent",
                        type: "uint8"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [],
                    name: "MathOverflowedMulDiv",
                    type: "error"
                }, {
                    inputs: [],
                    name: "MaxBalanceExceeded",
                    type: "error"
                }, {
                    inputs: [],
                    name: "PercentOutOfRange",
                    type: "error"
                }, {
                    inputs: [],
                    name: "TradingClosed",
                    type: "error"
                }, {
                    inputs: [],
                    name: "TransactionTooLarge",
                    type: "error"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
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
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
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
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }],
                    name: "allowance",
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
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "subtractedValue",
                        type: "uint256"
                    }],
                    name: "decreaseAllowance",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "detail",
                    outputs: [{
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
                        internalType: "uint8",
                        name: "maxWallet",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "maxTransaction",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "addedValue",
                        type: "uint256"
                    }],
                    name: "increaseAllowance",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxTxAmount",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxWalletBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "openTrading",
                    outputs: [],
                    stateMutability: "nonpayable",
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
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "addr",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "value",
                        type: "bool"
                    }],
                    name: "setExemptFromMaxTx",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_maxWalletPercent",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_maxTxPercent",
                        type: "uint256"
                    }],
                    name: "setMaxWalletAndTxPercent",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "tradingOpen",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
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
                    inputs: [],
                    name: "uniswapV2Pair",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }]
            }
        },
        5256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n(85893),
                i = n(41798),
                s = n(67294),
                r = n(41664),
                p = n.n(r),
                u = n(82169),
                l = n(64146),
                y = n(69077),
                o = n(50638),
                d = n(86084),
                m = n(3444),
                c = n(81626),
                T = n(10714);
            let b = new u.r("".concat("https://eth.llamarpc.com")),
                f = new l.CH("".concat("0x405998BF0b44587f66CD0F2763c6890cFe14cBa9"), m._.abi, b),
                x = new l.CH("".concat("0xFcEA320C85d3393605b656f3A725DC1d05DEd6B1"), m._.abi, b);

            function w(e) {
                let {
                    data: t,
                    isError: n
                } = (0, y.mx)(), [i, r] = (0, s.useState)([]), [u, m] = (0, s.useState)(null), [b, w] = (0, s.useState)(!0);
                (0, s.useEffect)(() => {
                    let e = async () => {
                        if (!t) return;
                        w(!0);
                        let e = await t.getAddress(),
                            n = await f.getContractsByDeployer(e),
                            a = await x.getContractsByDeployer(e);
                        console.log({
                            contractAddressesFactory1: n
                        });
                        let i = [];
                        for (let s of n) {
                            let p;
                            if (0 == s[1]) {
                                let u = new l.CH(s[0], T.$.abi, t),
                                    y = await u.detail();
                                console.log({
                                    details: y
                                }), p = {
                                    factory: 1,
                                    address: s[0],
                                    type: s[1],
                                    symbol: y.symbol,
                                    name: y.name.toString(),
                                    supply: y.supply.toNumber(),
                                    maxWallet: y.maxWallet,
                                    maxTransaction: y.maxTransaction,
                                    devFee: 0,
                                    buyTax: 0,
                                    sellTax: 0
                                }
                            } else {
                                let o = new l.CH(s[0], c.P.abi, t),
                                    d = await o.detail();
                                console.log({
                                    details: d
                                }), p = {
                                    address: s[0],
                                    type: s[1],
                                    symbol: d.symbol,
                                    name: d.name.toString(),
                                    supply: d.supply.toNumber(),
                                    maxWallet: d.maxWallet,
                                    maxTransaction: d.maxTransaction,
                                    devFee: d.devFee,
                                    buyTax: d.buyTax,
                                    sellTax: d.sellTax
                                }
                            }
                            i.push(p)
                        }
                        let b = [];
                        for (let v of a) {
                            let g;
                            if (0 == v[1]) {
                                let h = new l.CH(v[0], T.$.abi, t),
                                    M = await h.detail();
                                console.log({
                                    details: M
                                }), g = {
                                    factory: 2,
                                    address: v[0],
                                    type: v[1],
                                    symbol: M.symbol,
                                    name: M.name.toString(),
                                    supply: M.supply.toNumber(),
                                    maxWallet: M.maxWallet,
                                    maxTransaction: M.maxTransaction,
                                    devFee: 0,
                                    buyTax: 0,
                                    sellTax: 0
                                }
                            } else {
                                let C = new l.CH(v[0], c.P.abi, t),
                                    _ = await C.detail();
                                console.log({
                                    details: _
                                }), g = {
                                    address: v[0],
                                    type: v[1],
                                    symbol: _.symbol,
                                    name: _.name.toString(),
                                    supply: _.supply.toNumber(),
                                    maxWallet: _.maxWallet,
                                    maxTransaction: _.maxTransaction,
                                    devFee: _.devFee,
                                    buyTax: _.buyTax,
                                    sellTax: _.sellTax
                                }
                            }
                            b.push(g)
                        }
                        console.log({
                            contractsFactory2: b
                        }), m(e), r(b.reverse().concat(i.reverse())), w(!1)
                    };
                    e()
                }, [t]);
                let v = e => "".concat(e.slice(0, 8), "...").concat(e.slice(-6));
                return (0, a.jsx)("div", {
                    className: "backdrop-blur bg-white dark:bg-black bg-opacity-80 min-h-screen flex items-center justify-center",
                    children: (0, a.jsx)("div", {
                        className: "p-8 rounded-lg w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl",
                        children: t ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("h1", {
                                className: " pb-8 text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600",
                                children: "Manager"
                            }), (0, a.jsx)("div", {
                                className: "w-full flex items-center justify-center",
                                children: (0, a.jsx)(o.NL, {})
                            }), (null == i ? void 0 : i.length) ? (0, a.jsx)("div", {
                                className: "grid grid-cols-1 gap-4 mt-4",
                                children: i.map((e, t) => (0, a.jsx)(p(), {
                                    href: {
                                        pathname: "/manage",
                                        query: {
                                            data: JSON.stringify(e)
                                        }
                                    },
                                    children: (0, a.jsx)("div", {
                                        className: " transition-all duration-200 ease-in-out hover:scale-105 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 hover:dark:bg-gray-700",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-4",
                                            children: [(0, a.jsx)("div", {
                                                className: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden bg-gray-100",
                                                children: (0, a.jsx)("img", {
                                                    src: function(e) {
                                                        let t = (0, d.create)({
                                                            seed: e,
                                                            size: 8,
                                                            scale: 16
                                                        }).toDataURL();
                                                        return t
                                                    }(i[t].address),
                                                    alt: "Blockie"
                                                })
                                            }), (0, a.jsxs)("div", {
                                                children: [(0, a.jsx)("h5", {
                                                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                                                    children: e.symbol
                                                }), (0, a.jsx)("span", {
                                                    className: "text-gray-500",
                                                    children: v(e.address)
                                                })]
                                            })]
                                        })
                                    }, e.address)
                                }, e.address))
                            }) : b ? (0, a.jsxs)("div", {
                                className: "mt-8 flex items-center justify-center",
                                children: [" ", (0, a.jsxs)("div", {
                                    role: "status",
                                    children: [(0, a.jsxs)("svg", {
                                        "aria-hidden": "true",
                                        className: "w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700 dark:fill-blue-200",
                                        viewBox: "0 0 100 101",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, a.jsx)("path", {
                                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                            fill: "currentColor"
                                        }), (0, a.jsx)("path", {
                                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                            fill: "currentFill"
                                        })]
                                    }), (0, a.jsx)("span", {
                                        className: "sr-only",
                                        children: "Loading..."
                                    })]
                                })]
                            }) : (0, a.jsx)("p", {
                                className: "text-center mt-4 text-gray-700 dark:text-gray-200",
                                children: "No contracts have been deployed by this address."
                            })]
                        }) : (0, a.jsx)(o.NL, {})
                    })
                })
            }

            function v(e) {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.Z, {}), (0, a.jsx)(w, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [979, 352, 774, 888, 179], function() {
            return e(e.s = 69938)
        }), _N_E = e.O()
    }
]);