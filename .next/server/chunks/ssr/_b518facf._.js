module.exports = {

"[project]/.next-internal/server/app/post/[postId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/post/Category.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Category)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Category({ name }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-blue-300 py-2 px-4 rounded-3xl text-sm md:text-base",
        children: name
    }, void 0, false, {
        fileName: "[project]/src/components/post/Category.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/post/PostCategories.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$Category$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/Category.tsx [app-rsc] (ecmascript)");
;
;
function PostCategories({ categoriesList }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row flex-wrap gap-3",
        children: categoriesList.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$Category$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                name: cat.name
            }, cat.id, false, {
                fileName: "[project]/src/components/post/PostCategories.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/post/PostCategories.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/utils/dateFunctions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/components/post/PostStamp.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostStamp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appTexts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateFunctions.ts [app-rsc] (ecmascript)");
;
;
;
function PostStamp({ author, date, className }) {
    const fullDate = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMonthName"])(date)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDayNumber"])(date)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getYear"])(date)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex gap-2 flex-wrap ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-gray-300",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHED_BY"]
            }, void 0, false, {
                fileName: "[project]/src/components/post/PostStamp.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-gray-500",
                children: author
            }, void 0, false, {
                fileName: "[project]/src/components/post/PostStamp.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-gray-300",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHED_ON"],
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
}}),
"[project]/src/components/post/RelatedPost.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RelatedPost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function RelatedPost({ post, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center gap-2 h-full w-4/5 sm:w-3/4 md:w-1/2 lg:h-1/4 lg:w-full lg:flex-row 
     ${index > 1 ? "hidden lg:flex" : ""} ${index > 2 ? "lg:hidden" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-3/4 lg:w-1/2 lg:h-26",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: post.primaryImageUrl,
                    alt: post.title,
                    className: "w-full object-cover h-full rounded-lg"
                }, void 0, false, {
                    fileName: "[project]/src/components/post/RelatedPost.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/post/RelatedPost.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-1/4 lg:w-1/2 lg:h-full items-center pl-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "w-full break-words",
                    children: post.title
                }, void 0, false, {
                    fileName: "[project]/src/components/post/RelatedPost.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/post/RelatedPost.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/post/RelatedPost.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/post/RelatedPostsList.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RelatedPostsList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$RelatedPost$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/RelatedPost.tsx [app-rsc] (ecmascript)");
;
;
function RelatedPostsList({ relatedList }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row justify-center gap-4 h-10/12 lg:flex-col lg:justify-start",
        children: relatedList.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$RelatedPost$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                post: post,
                index: index
            }, post.id, false, {
                fileName: "[project]/src/components/post/RelatedPostsList.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/post/RelatedPostsList.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/data/mockDB.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fullPosts": (()=>fullPosts),
    "summaryPosts": (()=>summaryPosts)
});
const summaryPosts = [
    {
        id: 1,
        title: "Exploring City Life",
        description: "Discover the vibrancy of urban living with insights into city culture and landmarks.",
        primaryImageUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
        author: "Emily Johnson",
        publishedAt: "2023-10-26"
    },
    {
        id: 2,
        title: "Beachside Escapes",
        description: "Unwind at beautiful beaches with our guide to the best coastal retreats.",
        primaryImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        author: "Emily Johnson",
        publishedAt: "2023-10-12"
    },
    {
        id: 3,
        title: "Nature’s Pathways",
        description: "Explore the tranquility of nature with trails and parks that offer a peaceful escape.",
        primaryImageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        author: "Emily Johnson",
        publishedAt: "2023-10-01"
    },
    {
        id: 4,
        title: "Sunset Serenity",
        description: "Relax with our curated list of destinations offering breathtaking sunsets.",
        primaryImageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        author: "Liam Turner",
        publishedAt: "2023-09-20"
    },
    {
        id: 5,
        title: "Mountain Adventures",
        description: "Take your breath away with thrilling treks and scenic mountain views.",
        primaryImageUrl: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b",
        author: "Sophie Lee",
        publishedAt: "2023-09-15"
    },
    {
        id: 6,
        title: "Forest Retreat",
        description: "Reconnect with nature in quiet forest cabins and green escapes.",
        primaryImageUrl: "https://picsum.photos/id/1043/800/500",
        author: "Daniel Kim",
        publishedAt: "2023-09-10"
    },
    {
        id: 7,
        title: "Rural Reflections",
        description: "Find peace and simplicity in rural life and countryside living.",
        primaryImageUrl: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        author: "Rachel Adams",
        publishedAt: "2023-09-05"
    },
    {
        id: 8,
        title: "Urban Art Scenes",
        description: "Discover the best of street art and urban creativity around the world.",
        primaryImageUrl: "https://picsum.photos/id/1033/800/500",
        author: "Alex Green",
        publishedAt: "2023-08-30"
    }
];
const fullPosts = [
    {
        id: 1,
        title: "Exploring City Life",
        description: "Discover the vibrancy of urban living with insights into city culture and landmarks.",
        primaryImageUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
        author: "Emily Johnson",
        publishedAt: "2023-10-26",
        body: "Discover the vibrancy of urban living with insights into city culture and landmarks. Urban areas offer an exciting blend of architecture, cuisine, entertainment, and lifestyle. From towering skyscrapers to cozy cafés, the city is alive with energy at every corner. In this article, we dive deep into the cultural heartbeat of major metropolises, explore hidden gems in back alleys, and offer practical tips for enjoying city life without feeling overwhelmed. Whether you're a tourist or a local, there's always more to explore in the urban jungle.",
        categories: [
            {
                id: 1,
                name: "Urban"
            },
            {
                id: 2,
                name: "Culture"
            }
        ],
        relatedPosts: [
            {
                id: 2,
                title: "Beachside Escapes",
                primaryImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            },
            {
                id: 8,
                title: "Urban Art Scenes",
                primaryImageUrl: "https://picsum.photos/id/1033/800/500"
            }
        ]
    },
    {
        id: 2,
        title: "Beachside Escapes",
        description: "Unwind at beautiful beaches with our guide to the best coastal retreats.",
        primaryImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        author: "Emily Johnson",
        publishedAt: "2023-10-12",
        body: "Unwind at beautiful beaches with our guide to the best coastal retreats. From tropical paradises to rugged shorelines, beach destinations offer a unique kind of escape from the everyday hustle. We’ll explore lesser-known seaside towns, tips for affordable travel, and activities to enjoy beyond sunbathing. This guide is perfect for solo travelers, couples, and families seeking both relaxation and adventure.",
        categories: [
            {
                id: 2,
                name: "Travel"
            },
            {
                id: 3,
                name: "Relaxation"
            }
        ],
        relatedPosts: [
            {
                id: 1,
                title: "Exploring City Life",
                primaryImageUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
            },
            {
                id: 4,
                title: "Sunset Serenity",
                primaryImageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            }
        ]
    },
    {
        id: 3,
        title: "Nature’s Pathways",
        description: "Explore the tranquility of nature with trails and parks that offer a peaceful escape.",
        primaryImageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        author: "Emily Johnson",
        publishedAt: "2023-10-01",
        body: "Explore the tranquility of nature with trails and parks that offer a peaceful escape. Nature paths are not only soothing for the soul but also beneficial for physical and mental health. This post covers serene hiking trails, safety tips for beginners, and how to prepare for your next outdoor journey. Whether you're hiking through forests or walking a coastal trail, nature has something to offer everyone. Don't forget to pack your essentials and take moments to truly breathe.",
        categories: [
            {
                id: 3,
                name: "Nature"
            },
            {
                id: 4,
                name: "Adventure"
            }
        ],
        relatedPosts: [
            {
                id: 2,
                title: "Beachside Escapes",
                primaryImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            },
            {
                id: 4,
                title: "Sunset Serenity",
                primaryImageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            },
            {
                id: 5,
                title: "Mountain Adventures",
                primaryImageUrl: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b"
            },
            {
                id: 6,
                title: "Forest Retreat",
                primaryImageUrl: "https://picsum.photos/id/1043/800/500"
            }
        ]
    },
    {
        id: 4,
        title: "Sunset Serenity",
        description: "Relax with our curated list of destinations offering breathtaking sunsets.",
        primaryImageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        author: "Liam Turner",
        publishedAt: "2023-09-20",
        body: "Relax with our curated list of destinations offering breathtaking sunsets. Sunset watching is more than a photo opportunity — it's a moment to slow down and reflect. We'll take you to some of the world's most stunning sunset locations, share photography tips, and suggest cozy spots to enjoy the view with loved ones. Sunset chasing is a soul-filling habit worth building into your travels.",
        categories: [
            {
                id: 2,
                name: "Travel"
            },
            {
                id: 5,
                name: "Photography"
            }
        ],
        relatedPosts: [
            {
                id: 2,
                title: "Beachside Escapes",
                primaryImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            },
            {
                id: 3,
                title: "Nature’s Pathways",
                primaryImageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            }
        ]
    },
    {
        id: 5,
        title: "Mountain Adventures",
        description: "Take your breath away with thrilling treks and scenic mountain views.",
        primaryImageUrl: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b",
        author: "Sophie Lee",
        publishedAt: "2023-09-15",
        body: "Take your breath away with thrilling treks and scenic mountain views. Mountains invite us to challenge ourselves, connect with nature, and gain new perspectives. This article highlights both popular and off-the-beaten-path hikes, how to prepare for high-altitude adventures, and why mountains have a timeless allure for adventurers around the world. From the Rockies to the Alps, each range has its own personality. We’ll also explore gear essentials, weather planning, and mental preparation. Whether you're a seasoned climber or a weekend explorer, there's something magical about reaching the summit and seeing the world below. Our guide includes elevation maps, trail tips, and testimonials from hikers who’ve walked these trails before you.",
        categories: [
            {
                id: 4,
                name: "Adventure"
            },
            {
                id: 6,
                name: "Hiking"
            }
        ],
        relatedPosts: [
            {
                id: 3,
                title: "Nature’s Pathways",
                primaryImageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            },
            {
                id: 6,
                title: "Forest Retreat",
                primaryImageUrl: "https://picsum.photos/id/1043/800/500"
            }
        ]
    },
    {
        id: 6,
        title: "Forest Retreat",
        description: "Reconnect with nature in quiet forest cabins and green escapes.",
        primaryImageUrl: "https://picsum.photos/id/1043/800/500",
        author: "Daniel Kim",
        publishedAt: "2023-09-10",
        body: "Reconnect with nature in quiet forest cabins and green escapes. Forests offer solitude, fresh air, and a chance to disconnect from digital noise. From choosing the right cabin to planning campfire meals, we cover everything you need to plan a forest retreat that truly refreshes. Whether alone or with company, the forest welcomes you.",
        categories: [
            {
                id: 3,
                name: "Nature"
            },
            {
                id: 7,
                name: "Wellness"
            }
        ],
        relatedPosts: [
            {
                id: 5,
                title: "Mountain Adventures",
                primaryImageUrl: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b"
            },
            {
                id: 7,
                title: "Rural Reflections",
                primaryImageUrl: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
            }
        ]
    },
    {
        id: 7,
        title: "Rural Reflections",
        description: "Find peace and simplicity in rural life and countryside living.",
        primaryImageUrl: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        author: "Rachel Adams",
        publishedAt: "2023-09-05",
        body: "Find peace and simplicity in rural life and countryside living. Rural areas remind us of slower rhythms, meaningful connections, and the charm of simplicity. We explore life in small towns, the benefits of countryside retreats, and how to embrace a minimalist, peaceful lifestyle — even if just for a weekend getaway. This piece includes tips for finding local farm stays, exploring country markets, and blending into the pace of village life.",
        categories: [
            {
                id: 1,
                name: "Lifestyle"
            },
            {
                id: 8,
                name: "Countryside"
            }
        ],
        relatedPosts: [
            {
                id: 6,
                title: "Forest Retreat",
                primaryImageUrl: "https://picsum.photos/id/1043/800/500"
            },
            {
                id: 8,
                title: "Urban Art Scenes",
                primaryImageUrl: "https://picsum.photos/id/1033/800/500"
            }
        ]
    },
    {
        id: 8,
        title: "Urban Art Scenes",
        description: "Discover the best of street art and urban creativity around the world.",
        primaryImageUrl: "https://picsum.photos/id/1033/800/500",
        author: "Alex Green",
        publishedAt: "2023-08-30",
        body: "Discover the best of street art and urban creativity around the world. Street art reflects the soul of a city — vibrant, raw, and constantly evolving. In this post, we spotlight famous street art hubs and interview artists shaping the visual stories of our streets.",
        categories: [
            {
                id: 2,
                name: "Culture"
            },
            {
                id: 9,
                name: "Art"
            }
        ],
        relatedPosts: [
            {
                id: 1,
                title: "Exploring City Life",
                primaryImageUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
            },
            {
                id: 7,
                title: "Rural Reflections",
                primaryImageUrl: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
            }
        ]
    }
];
}}),
"[project]/src/app/post/[postId]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostCategories$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/PostCategories.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostStamp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/PostStamp.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$RelatedPostsList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post/RelatedPostsList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/appTexts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDB$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockDB.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function PostPage({ params }) {
    const { postId } = await params;
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDB$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fullPosts"].find((p)=>p.id === Number(postId));
    if (!post) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col lg:flex-row bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-5 p-4 w-full lg:h-full lg:w-3/4 xl:w-4/5 pt-6 pl-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-3xl",
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[postId]/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostStamp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                author: post.author,
                                date: post.publishedAt,
                                className: "text-base"
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[postId]/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/post/[postId]/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$PostCategories$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        categoriesList: post.categories
                    }, void 0, false, {
                        fileName: "[project]/src/app/post/[postId]/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-40 mt-1 sm:h-50 md-h-65 xl:h-70",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: post.primaryImageUrl,
                            alt: post.title,
                            className: "object-cover h-full w-full rounded-md"
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[postId]/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/post/[postId]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mt-2 sm:text-lg",
                            children: post.body
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[postId]/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/post/[postId]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/post/[postId]/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center w-full lg:h-full lg:w-1/4 xl:w-1/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 bg-white w-5/6 h-80 my-10 shadow-lg py-4 px-3 rounded-md lg:mr-6 lg:h-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-lg h-1/12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$appTexts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RELEATED_POST_HEADER"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[postId]/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2f$RelatedPostsList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            relatedList: post.relatedPosts
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[postId]/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/post/[postId]/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/post/[postId]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/post/[postId]/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/post/[postId]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/post/[postId]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_b518facf._.js.map