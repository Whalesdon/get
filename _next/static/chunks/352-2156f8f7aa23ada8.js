"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [352], {
        41798: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var a = n(85893),
                i = n(67294),
                s = n(41664),
                r = n.n(s),
                l = n(31415),
                p = n(43407),
                u = n(80009);
            let o = e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "36",
                        height: "36",
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                        })
                    })
                },
                y = e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: t,
                        height: "800px",
                        width: "800px",
                        version: "1.1",
                        id: "Capa_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 189.473 189.473",
                        xmlSpace: "preserve",
                        children: (0, a.jsx)("g", {
                            children: (0, a.jsx)("path", {
                                d: "M152.531,179.476c-1.48,0-2.95-0.438-4.211-1.293l-47.641-32.316l-25.552,18.386c-2.004,1.441-4.587,1.804-6.914,0.972 c-2.324-0.834-4.089-2.759-4.719-5.146l-12.83-48.622L4.821,93.928c-2.886-1.104-4.8-3.865-4.821-6.955 c-0.021-3.09,1.855-5.877,4.727-7.02l174.312-69.36c0.791-0.336,1.628-0.53,2.472-0.582c0.302-0.018,0.605-0.018,0.906-0.001 c1.748,0.104,3.465,0.816,4.805,2.13c0.139,0.136,0.271,0.275,0.396,0.42c1.11,1.268,1.72,2.814,1.835,4.389 c0.028,0.396,0.026,0.797-0.009,1.198c-0.024,0.286-0.065,0.571-0.123,0.854L159.898,173.38c-0.473,2.48-2.161,4.556-4.493,5.523 C154.48,179.287,153.503,179.476,152.531,179.476z M104.862,130.579l42.437,28.785L170.193,39.24l-82.687,79.566l17.156,11.638 C104.731,130.487,104.797,130.533,104.862,130.579z M69.535,124.178l5.682,21.53l12.242-8.809l-16.03-10.874 C70.684,125.521,70.046,124.893,69.535,124.178z M28.136,86.782l31.478,12.035c2.255,0.862,3.957,2.758,4.573,5.092l3.992,15.129 c0.183-1.745,0.974-3.387,2.259-4.624L149.227,38.6L28.136,86.782z"
                            })
                        })
                    })
                },
                d = () => {
                    let [e, t] = (0, i.useState)(!1), {
                        darkMode: n,
                        setDarkMode: s
                    } = (0, u.vs)(), d = () => {
                        s(!n)
                    };
                    return (0, a.jsxs)("nav", {
                        className: "fixed top-0 left-0 max-w-screen w-full z-40 transition duration-500 ease-in-out pt-2 ".concat(e ? "backdrop-blur bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent bg-opacity-20 dark:bg-opacity-20 h-full" : ""),
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center justify-between h-16 mx-auto px-8",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center w-full space-x-8",
                                children: [(0, a.jsx)(r(), {
                                    href: "/",
                                    children: (0, a.jsx)("div", {
                                        className: "flex-shrink-0 cursor-pointer rounded flex items-center justify-center",
                                        children: (0, a.jsx)("img", {
                                            className: "h-10 w-12 fill-white text-white",
                                            src: "/colored_logo-min.png",
                                            alt: "Logo"
                                        })
                                    })
                                }), (0, a.jsx)(r(), {
                                    href: "https://twitter.com/duplicate",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("div", {
                                        className: "flex-shrink-0 cursor-pointer rounded px-2 py-2",
                                        children: (0, a.jsx)(o, {
                                            className: "fill-black dark:fill-white hover:fill-blue-500 h-8 w-8"
                                        })
                                    })
                                }), (0, a.jsx)(r(), {
                                    href: "https://t.me/DuplicateToken",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("div", {
                                        className: "flex-shrink-0 cursor-pointer rounded px-2 py-2",
                                        children: (0, a.jsx)(y, {
                                            className: "fill-black dark:fill-white hover:fill-blue-500 h-8 w-8"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "hidden lg:flex items-end justify-end w-full",
                                    children: (0, a.jsxs)("div", {
                                        className: "ml-10 flex items-center justify-center space-x-4",
                                        children: [(0, a.jsxs)("div", {
                                            className: "p-2 rounded-lg h-full",
                                            children: [" ", (0, a.jsxs)("button", {
                                                onClick: d,
                                                id: "theme-toggle",
                                                type: "button",
                                                className: "cursor-pointer flex items-center justify-center text-black dark:text-white rounded-lg text-sm h-full w-6",
                                                children: [(0, a.jsx)("svg", {
                                                    id: "theme-toggle-dark-icon",
                                                    className: "block dark:hidden w-6",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, a.jsx)("path", {
                                                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                                    })
                                                }), (0, a.jsx)("svg", {
                                                    id: "theme-toggle-light-icon",
                                                    className: "hidden dark:block w-6",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, a.jsx)("path", {
                                                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsx)(r(), {
                                            href: "/deploy",
                                            children: (0, a.jsx)("div", {
                                                className: "cursor-pointer text-black bg-black opacity-80 hover:bg-opacity-10 bg-opacity-[.03] dark:text-white dark:bg-gray-800 hover:dark:bg-gray-600 items-center relative h-7 items-center tracking-wider pt-0.5 first::pt-0 duration-200 uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row",
                                                children: "Deploy"
                                            })
                                        }), (0, a.jsx)(r(), {
                                            href: "/manager",
                                            children: (0, a.jsx)("div", {
                                                className: "cursor-pointer text-black bg-black opacity-80 hover:bg-opacity-10 bg-opacity-[.03] dark:text-white dark:bg-gray-800 hover:dark:bg-gray-600 items-center relative h-7 items-center tracking-wider pt-0.5 first::pt-0 duration-200 uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row",
                                                children: "Manage"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "lg:hidden",
                                children: (0, a.jsx)("button", {
                                    onClick: () => t(!e),
                                    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-600 transition duration-500 ease-in-out",
                                    children: e ? (0, a.jsx)(l.Z, {
                                        className: "block h-6 w-6"
                                    }) : (0, a.jsx)(p.Z, {
                                        className: "block h-6 w-6"
                                    })
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "px-4 pt-4 inset-0  w-full h-full transform ease-in-out transition-opacity duration-300 ".concat(e ? "opacity-100 z-40" : "opacity-0 -z-10 pointer-events-none", " lg:hidden"),
                            children: (0, a.jsxs)("ul", {
                                className: "text-xl w-full uppercase font-black",
                                children: [(0, a.jsx)("li", {
                                    className: "border-b border-black border-opacity-10 text-black dark:text-white",
                                    children: (0, a.jsxs)("button", {
                                        onClick: d,
                                        className: "uppercase py-3 w-full flex items-center text-inherit font-black",
                                        children: ["Change Theme", (0, a.jsx)("svg", {
                                            id: "theme-toggle-dark-icon",
                                            className: "block dark:hidden w-6 ml-auto",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("path", {
                                                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                            })
                                        }), (0, a.jsx)("svg", {
                                            id: "theme-toggle-light-icon",
                                            className: "hidden dark:block w-6 ml-auto",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("path", {
                                                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                                fillRule: "evenodd",
                                                clipRule: "evenodd"
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: " border-b border-black border-opacity-10 text-black dark:text-white",
                                    children: (0, a.jsx)(r(), {
                                        href: "/deploy",
                                        children: (0, a.jsx)("div", {
                                            className: "py-3 w-full items-center block relative flex",
                                            children: "Deploy New Token"
                                        })
                                    })
                                }), (0, a.jsx)("li", {
                                    className: " border-b border-black border-opacity-10 text-black dark:text-white",
                                    children: (0, a.jsx)(r(), {
                                        href: "/manager",
                                        children: (0, a.jsx)("div", {
                                            className: "py-3 w-full items-center block relative flex ",
                                            children: "Manager"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                };
            var c = d
        },
        81626: function(e, t, n) {
            n.d(t, {
                P: function() {
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
                    }, {
                        internalType: "uint8",
                        name: "_devFee",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "_buyTax",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "_sellTax",
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
                    name: "NotExternalToken",
                    type: "error"
                }, {
                    inputs: [],
                    name: "PercentOutOfRange",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ReentrancyGuardReentrantCall",
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
                    inputs: [],
                    name: "TransferFailed",
                    type: "error"
                }, {
                    inputs: [],
                    name: "UnknownCaller",
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
                    stateMutability: "payable",
                    type: "fallback"
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
                    name: "buyTax",
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
                        name: "tokenAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokens",
                        type: "uint256"
                    }],
                    name: "clearStuckToken",
                    outputs: [{
                        internalType: "bool",
                        name: "success",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
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
                    }, {
                        internalType: "uint8",
                        name: "devFee",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "buyTax",
                        type: "uint8"
                    }, {
                        internalType: "uint8",
                        name: "sellTax",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "devFee",
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
                    name: "marketingFeeReceiver",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
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
                    inputs: [],
                    name: "sellTax",
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
                        name: "addr",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "value",
                        type: "bool"
                    }],
                    name: "setExemptFromFee",
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
                        internalType: "address",
                        name: "_marketingFeeReceiver",
                        type: "address"
                    }],
                    name: "setMarketingWallet",
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
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "setSwapBackSettings",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_buyTax",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_sellTax",
                        type: "uint256"
                    }],
                    name: "setTaxes",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "swapThreshold",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
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
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }]
            }
        }
    }
]);