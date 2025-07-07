(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/appTexts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
//  --- Footer.tsx  ---
__turbopack_context__.s({
    "HERO_IMAGE_ALT": (()=>HERO_IMAGE_ALT),
    "HOME_NAV_BUTTON": (()=>HOME_NAV_BUTTON),
    "LOGO_IMAGE_ALT": (()=>LOGO_IMAGE_ALT),
    "MY_POSTS_NAV_BUTTON": (()=>MY_POSTS_NAV_BUTTON),
    "NEWEST_POSTS_HEADER": (()=>NEWEST_POSTS_HEADER),
    "POLICY_BUTTON": (()=>POLICY_BUTTON),
    "PUBLISHED_BY": (()=>PUBLISHED_BY),
    "PUBLISHED_ON": (()=>PUBLISHED_ON),
    "READ_MORE_BUTTON": (()=>READ_MORE_BUTTON),
    "RELEATED_POST_HEADER": (()=>RELEATED_POST_HEADER),
    "RIGHTS_RESERVED": (()=>RIGHTS_RESERVED),
    "SEARCH_BUTTON_LABEL": (()=>SEARCH_BUTTON_LABEL),
    "SEARCH_INPUT_PLACEHOLDER": (()=>SEARCH_INPUT_PLACEHOLDER),
    "TERMS_BUTTON": (()=>TERMS_BUTTON)
});
const RIGHTS_RESERVED = "© 2023 PostCreator. All rights reserved.";
const POLICY_BUTTON = "Privacy Policy";
const TERMS_BUTTON = "Terms of Service";
const HOME_NAV_BUTTON = "Home";
const MY_POSTS_NAV_BUTTON = "My Posts";
const LOGO_IMAGE_ALT = "Logo Image";
const HERO_IMAGE_ALT = "Hero Image";
const SEARCH_INPUT_PLACEHOLDER = "Search blogs or posts";
const SEARCH_BUTTON_LABEL = "Search";
const PUBLISHED_BY = "By";
const PUBLISHED_ON = "Published on";
const READ_MORE_BUTTON = "Read More";
const NEWEST_POSTS_HEADER = "Newest Posts";
const RELEATED_POST_HEADER = "Related Posts";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/dateFunctions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDayNumber": (()=>getDayNumber),
    "getMonthName": (()=>getMonthName),
    "getYear": (()=>getYear)
});
const getMonthName = (dateInput, locale = "en-US")=>{
    const date = new Date(dateInput);
    return new Intl.DateTimeFormat(locale, {
        month: "long"
    }).format(date);
};
const getDayNumber = (dateInput, locale = "en-US")=>{
    const date = new Date(dateInput);
    return new Intl.DateTimeFormat(locale, {
        day: "numeric"
    }).format(date);
};
const getYear = (dateInput, locale = "en-US")=>{
    const date = new Date(dateInput);
    return new Intl.DateTimeFormat(locale, {
        year: "numeric"
    }).format(date);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/post/PostStamp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostStamp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appTexts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateFunctions.ts [app-client] (ecmascript)");
;
;
;
function PostStamp({ author, date, className }) {
    const fullDate = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthName"])(date)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayNumber"])(date)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex gap-2 flex-wrap ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-gray-300",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHED_BY"]
            }, void 0, false, {
                fileName: "[project]/src/components/post/PostStamp.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-gray-500",
                children: author
            }, void 0, false, {
                fileName: "[project]/src/components/post/PostStamp.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-gray-300",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHED_ON"],
                    " ",
                    fullDate
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/post/PostStamp.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/post/PostStamp.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = PostStamp;
var _c;
__turbopack_context__.k.register(_c, "PostStamp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/appConstants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
//  --- Header.tsx  ---
__turbopack_context__.s({
    "ButtonTypes": (()=>ButtonTypes),
    "Route": (()=>Route)
});
var Route = /*#__PURE__*/ function(Route) {
    Route["HOME"] = "/";
    Route["POSTS"] = "/myPosts";
    return Route;
}({});
var ButtonTypes = /*#__PURE__*/ function(ButtonTypes) {
    ButtonTypes["PRIMARY"] = "primary";
    ButtonTypes["TRANSPARENT"] = "transparent";
    return ButtonTypes;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/homePage/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appConstants.ts [app-client] (ecmascript)");
;
;
const typeClasses = {
    primary: "bg-[#2463eb] text-white",
    transparent: "bg-transparent text-black hover:bg-[#2463eb] hover:text-white transition-colors duration-300 ease-in-out"
};
function Button({ type = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonTypes"].PRIMARY, label, onClick, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `${typeClasses[type]} ${className}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/homePage/Button.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/homePage/PostSummary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostStamp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/PostStamp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$homePage$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/homePage/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appTexts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function PostSummary({ post }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-100 max-h-120 w-85 rounded-lg bg-white shadow-xl flex flex-col sm:w-130 md:w-90 lg:w-80 xl:w-102 2xl:w-120",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-35 max-h-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: post.primaryImageUrl,
                    alt: post.title,
                    className: "w-full h-full object-cover rounded-lg"
                }, void 0, false, {
                    fileName: "[project]/src/components/homePage/PostSummary.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/homePage/PostSummary.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4 py-4 sm:p-4 flex flex-col flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/homePage/PostSummary.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-gray-600 mt-2",
                                children: post.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/homePage/PostSummary.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/homePage/PostSummary.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-between sm:flex-row md:flex-col gap-3 pt-2 pr-1 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex sm:items-center md:items-start xl:items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostStamp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    author: post.author,
                                    date: post.publishedAt,
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/homePage/PostSummary.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/homePage/PostSummary.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center sm:justify-end md:justify-center xl:justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/post/${post.id}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$homePage$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonTypes"].TRANSPARENT,
                                        className: "rounded-sm text-xs py-2 px-3",
                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READ_MORE_BUTTON"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/homePage/PostSummary.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/homePage/PostSummary.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/homePage/PostSummary.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/homePage/PostSummary.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/homePage/PostSummary.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/homePage/PostSummary.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = PostSummary;
var _c;
__turbopack_context__.k.register(_c, "PostSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_7e082197._.js.map