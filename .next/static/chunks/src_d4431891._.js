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
"[project]/src/components/layout/NavButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NavButton({ label, href, // isActive,
onClick }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: `cursor-pointer transition-colors
        ${isActive ? "text-[#2463eb]" : "text-black"}
      `,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/layout/NavButton.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/NavButton.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(NavButton, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavButton;
var _c;
__turbopack_context__.k.register(_c, "NavButton");
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
    Route["HOME"] = "home";
    Route["POSTS"] = "posts";
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
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appTexts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$NavButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/NavButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appConstants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Header() {
    _s();
    const [activeButton, setActiveButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center h-16 text-lg sm:text-xl fixed top-0 left-0 w-full z-1 bg-white shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/PostimLogo.png",
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGO_IMAGE_ALT"],
                width: 120,
                height: 120,
                className: "pl-6"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 pr-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$NavButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME_NAV_BUTTON"],
                        isActive: activeButton === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"].HOME,
                        onClick: ()=>setActiveButton(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"].HOME)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$NavButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MY_POSTS_NAV_BUTTON"],
                        isActive: activeButton === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"].POSTS,
                        onClick: ()=>setActiveButton(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"].POSTS)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Header, "2IlxFF4hDMq20XkKpqpiCEEIzsY=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d4431891._.js.map