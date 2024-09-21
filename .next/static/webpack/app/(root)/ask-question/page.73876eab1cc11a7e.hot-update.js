"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/ask-question/page",{

/***/ "(app-pages-browser)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignBadges: function() { return /* binding */ assignBadges; },\n/* harmony export */   cn: function() { return /* binding */ cn; },\n/* harmony export */   formUrlQuery: function() { return /* binding */ formUrlQuery; },\n/* harmony export */   formatAndDivideNumber: function() { return /* binding */ formatAndDivideNumber; },\n/* harmony export */   getJoinedDate: function() { return /* binding */ getJoinedDate; },\n/* harmony export */   getTimestamp: function() { return /* binding */ getTimestamp; },\n/* harmony export */   removeKeysFromQuery: function() { return /* binding */ removeKeysFromQuery; }\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"(app-pages-browser)/./node_modules/query-string/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){\n        inputs[_key] = arguments[_key];\n    }\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_3__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\nconst getTimestamp = (createdAt)=>{\n    const now = new Date();\n    const timeDifference = now.getTime() - createdAt.getTime();\n    // Define time intervals in milliseconds\n    const minute = 60 * 1000;\n    const hour = 60 * minute;\n    const day = 24 * hour;\n    const week = 7 * day;\n    const month = 30 * day;\n    const year = 365 * day;\n    if (timeDifference < minute) {\n        const seconds = Math.floor(timeDifference / 1000);\n        return \"\".concat(seconds, \" \").concat(seconds === 1 ? \"second\" : \"seconds\", \" ago\");\n    } else if (timeDifference < hour) {\n        const minutes = Math.floor(timeDifference / minute);\n        return \"\".concat(minutes, \" \").concat(minutes === 1 ? \"minute\" : \"minutes\", \" ago\");\n    } else if (timeDifference < day) {\n        const hours = Math.floor(timeDifference / hour);\n        return \"\".concat(hours, \" \").concat(hours === 1 ? \"hour\" : \"hours\", \" ago\");\n    } else if (timeDifference < week) {\n        const days = Math.floor(timeDifference / day);\n        return \"\".concat(days, \" \").concat(days === 1 ? \"day\" : \"days\", \" ago\");\n    } else if (timeDifference < month) {\n        const weeks = Math.floor(timeDifference / week);\n        return \"\".concat(weeks, \" \").concat(weeks === 1 ? \"week\" : \"weeks\", \" ago\");\n    } else if (timeDifference < year) {\n        const months = Math.floor(timeDifference / month);\n        return \"\".concat(months, \" \").concat(months === 1 ? \"month\" : \"months\", \" ago\");\n    } else {\n        const years = Math.floor(timeDifference / year);\n        return \"\".concat(years, \" \").concat(years === 1 ? \"year\" : \"years\", \" ago\");\n    }\n};\n// export const formatAndDivideNumber = (num: number): string => {\n//   if (num >= 1000000) {\n//     const formattedNum = (num / 1000000).toFixed(1);\n//     return `${formattedNum}M`;\n//   } else if (num >= 1000) {\n//     const formattedNum = (num / 1000).toFixed(1);\n//     return `${formattedNum}K`;\n//   } else {\n//     return num.toString();\n//   }\n// };\nconst formatAndDivideNumber = (num)=>{\n    if (num == null) {\n        // Handle the case where num is undefined or null\n        return \"0\"; // or any default value you prefer\n    } else if (num >= 1000000) {\n        const formattedNum = (num / 1000000).toFixed(1);\n        return \"\".concat(formattedNum, \"M\");\n    } else if (num >= 1000) {\n        const formattedNum = (num / 1000).toFixed(1);\n        return \"\".concat(formattedNum, \"K\");\n    } else {\n        return num.toString();\n    }\n};\nconst getJoinedDate = (date)=>{\n    // Extract the month and year from the Date object\n    const month = date.toLocaleString(\"default\", {\n        month: \"long\"\n    });\n    const year = date.getFullYear();\n    // Create the joined date string (e.g., \"September 2023\")\n    const joinedDate = \"\".concat(month, \" \").concat(year);\n    return joinedDate;\n};\nconst formUrlQuery = (param)=>{\n    let { params, key, value } = param;\n    const currentUrl = query_string__WEBPACK_IMPORTED_MODULE_1__[\"default\"].parse(params);\n    currentUrl[key] = value;\n    return query_string__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stringifyUrl({\n        url: window.location.pathname,\n        query: currentUrl\n    }, {\n        skipNull: true\n    });\n};\nconst removeKeysFromQuery = (param)=>{\n    let { params, keysToRemove } = param;\n    const currentUrl = query_string__WEBPACK_IMPORTED_MODULE_1__[\"default\"].parse(params);\n    keysToRemove.forEach((key)=>{\n        delete currentUrl[key];\n    });\n    return query_string__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stringifyUrl({\n        url: window.location.pathname,\n        query: currentUrl\n    }, {\n        skipNull: true\n    });\n};\nconst assignBadges = (params)=>{\n    const badgeCounts = {\n        GOLD: 0,\n        SILVER: 0,\n        BRONZE: 0\n    };\n    const { criteria } = params;\n    criteria.forEach((item)=>{\n        const { type, count } = item;\n        const badgeLevels = _constants__WEBPACK_IMPORTED_MODULE_2__.BADGE_CRITERIA[type];\n        Object.keys(badgeLevels).forEach((level)=>{\n            if (count >= badgeLevels[level]) {\n                badgeCounts[level] += 1;\n            }\n        });\n    });\n    return badgeCounts;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDTztRQUNoQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGO1FBQ3hCLE1BQU1HLGNBQW1CM0Qsc0RBQWMsQ0FBQ3lELEtBQUs7UUFFN0NHLE9BQU9DLElBQUksQ0FBQ0YsYUFBYVYsT0FBTyxDQUFDLENBQUNhO1lBQ2hDLElBQUlKLFNBQVNDLFdBQVcsQ0FBQ0csTUFBTSxFQUFFO2dCQUMvQlgsV0FBVyxDQUFDVyxNQUEyQixJQUFJO1lBQzdDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9YO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdXRpbHMudHM/Zjc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIENsYXNzVmFsdWUsIGNsc3ggfSBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gJ3RhaWx3aW5kLW1lcmdlJztcclxuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCB7IEJhZGdlQ291bnRzIH0gZnJvbSAnQC90eXBlcyc7XHJcbmltcG9ydCB7IEJBREdFX0NSSVRFUklBIH0gZnJvbSAnQC9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XHJcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0VGltZXN0YW1wID0gKGNyZWF0ZWRBdDogRGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0aW1lRGlmZmVyZW5jZSA9IG5vdy5nZXRUaW1lKCkgLSBjcmVhdGVkQXQuZ2V0VGltZSgpO1xyXG5cclxuICAvLyBEZWZpbmUgdGltZSBpbnRlcnZhbHMgaW4gbWlsbGlzZWNvbmRzXHJcbiAgY29uc3QgbWludXRlID0gNjAgKiAxMDAwO1xyXG4gIGNvbnN0IGhvdXIgPSA2MCAqIG1pbnV0ZTtcclxuICBjb25zdCBkYXkgPSAyNCAqIGhvdXI7XHJcbiAgY29uc3Qgd2VlayA9IDcgKiBkYXk7XHJcbiAgY29uc3QgbW9udGggPSAzMCAqIGRheTtcclxuICBjb25zdCB5ZWFyID0gMzY1ICogZGF5O1xyXG5cclxuICBpZiAodGltZURpZmZlcmVuY2UgPCBtaW51dGUpIHtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gMTAwMCk7XHJcbiAgICByZXR1cm4gYCR7c2Vjb25kc30gJHtzZWNvbmRzID09PSAxID8gJ3NlY29uZCcgOiAnc2Vjb25kcyd9IGFnb2A7XHJcbiAgfSBlbHNlIGlmICh0aW1lRGlmZmVyZW5jZSA8IGhvdXIpIHtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gbWludXRlKTtcclxuICAgIHJldHVybiBgJHttaW51dGVzfSAke21pbnV0ZXMgPT09IDEgPyAnbWludXRlJyA6ICdtaW51dGVzJ30gYWdvYDtcclxuICB9IGVsc2UgaWYgKHRpbWVEaWZmZXJlbmNlIDwgZGF5KSB7XHJcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodGltZURpZmZlcmVuY2UgLyBob3VyKTtcclxuICAgIHJldHVybiBgJHtob3Vyc30gJHtob3VycyA9PT0gMSA/ICdob3VyJyA6ICdob3Vycyd9IGFnb2A7XHJcbiAgfSBlbHNlIGlmICh0aW1lRGlmZmVyZW5jZSA8IHdlZWspIHtcclxuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gZGF5KTtcclxuICAgIHJldHVybiBgJHtkYXlzfSAke2RheXMgPT09IDEgPyAnZGF5JyA6ICdkYXlzJ30gYWdvYDtcclxuICB9IGVsc2UgaWYgKHRpbWVEaWZmZXJlbmNlIDwgbW9udGgpIHtcclxuICAgIGNvbnN0IHdlZWtzID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvIHdlZWspO1xyXG4gICAgcmV0dXJuIGAke3dlZWtzfSAke3dlZWtzID09PSAxID8gJ3dlZWsnIDogJ3dlZWtzJ30gYWdvYDtcclxuICB9IGVsc2UgaWYgKHRpbWVEaWZmZXJlbmNlIDwgeWVhcikge1xyXG4gICAgY29uc3QgbW9udGhzID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvIG1vbnRoKTtcclxuICAgIHJldHVybiBgJHttb250aHN9ICR7bW9udGhzID09PSAxID8gJ21vbnRoJyA6ICdtb250aHMnfSBhZ29gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB5ZWFycyA9IE1hdGguZmxvb3IodGltZURpZmZlcmVuY2UgLyB5ZWFyKTtcclxuICAgIHJldHVybiBgJHt5ZWFyc30gJHt5ZWFycyA9PT0gMSA/ICd5ZWFyJyA6ICd5ZWFycyd9IGFnb2A7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGZvcm1hdEFuZERpdmlkZU51bWJlciA9IChudW06IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbi8vICAgaWYgKG51bSA+PSAxMDAwMDAwKSB7XHJcbi8vICAgICBjb25zdCBmb3JtYXR0ZWROdW0gPSAobnVtIC8gMTAwMDAwMCkudG9GaXhlZCgxKTtcclxuLy8gICAgIHJldHVybiBgJHtmb3JtYXR0ZWROdW19TWA7XHJcbi8vICAgfSBlbHNlIGlmIChudW0gPj0gMTAwMCkge1xyXG4vLyAgICAgY29uc3QgZm9ybWF0dGVkTnVtID0gKG51bSAvIDEwMDApLnRvRml4ZWQoMSk7XHJcbi8vICAgICByZXR1cm4gYCR7Zm9ybWF0dGVkTnVtfUtgO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdEFuZERpdmlkZU51bWJlciA9IChudW06IG51bWJlciB8IHVuZGVmaW5lZCk6IHN0cmluZyA9PiB7XHJcbiAgaWYgKG51bSA9PSBudWxsKSB7XHJcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgbnVtIGlzIHVuZGVmaW5lZCBvciBudWxsXHJcbiAgICByZXR1cm4gJzAnOyAvLyBvciBhbnkgZGVmYXVsdCB2YWx1ZSB5b3UgcHJlZmVyXHJcbiAgfSBlbHNlIGlmIChudW0gPj0gMTAwMDAwMCkge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkTnVtID0gKG51bSAvIDEwMDAwMDApLnRvRml4ZWQoMSk7XHJcbiAgICByZXR1cm4gYCR7Zm9ybWF0dGVkTnVtfU1gO1xyXG4gIH0gZWxzZSBpZiAobnVtID49IDEwMDApIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZE51bSA9IChudW0gLyAxMDAwKS50b0ZpeGVkKDEpO1xyXG4gICAgcmV0dXJuIGAke2Zvcm1hdHRlZE51bX1LYDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRKb2luZWREYXRlID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xyXG4gIC8vIEV4dHJhY3QgdGhlIG1vbnRoIGFuZCB5ZWFyIGZyb20gdGhlIERhdGUgb2JqZWN0XHJcbiAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgam9pbmVkIGRhdGUgc3RyaW5nIChlLmcuLCBcIlNlcHRlbWJlciAyMDIzXCIpXHJcbiAgY29uc3Qgam9pbmVkRGF0ZSA9IGAke21vbnRofSAke3llYXJ9YDtcclxuXHJcbiAgcmV0dXJuIGpvaW5lZERhdGU7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgVXJsUXVlcnlQYXJhbXMge1xyXG4gIHBhcmFtczogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybVVybFF1ZXJ5ID0gKHsgcGFyYW1zLCBrZXksIHZhbHVlIH06IFVybFF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFVybCA9IHFzLnBhcnNlKHBhcmFtcyk7XHJcblxyXG4gIGN1cnJlbnRVcmxba2V5XSA9IHZhbHVlO1xyXG5cclxuICByZXR1cm4gcXMuc3RyaW5naWZ5VXJsKFxyXG4gICAge1xyXG4gICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgcXVlcnk6IGN1cnJlbnRVcmwsXHJcbiAgICB9LFxyXG4gICAgeyBza2lwTnVsbDogdHJ1ZSB9XHJcbiAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBSZW1vdmVVcmxRdWVyeVBhcmFtcyB7XHJcbiAgcGFyYW1zOiBzdHJpbmc7XHJcbiAga2V5c1RvUmVtb3ZlOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUtleXNGcm9tUXVlcnkgPSAoe1xyXG4gIHBhcmFtcyxcclxuICBrZXlzVG9SZW1vdmUsXHJcbn06IFJlbW92ZVVybFF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFVybCA9IHFzLnBhcnNlKHBhcmFtcyk7XHJcblxyXG4gIGtleXNUb1JlbW92ZS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGRlbGV0ZSBjdXJyZW50VXJsW2tleV07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBxcy5zdHJpbmdpZnlVcmwoXHJcbiAgICB7XHJcbiAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICBxdWVyeTogY3VycmVudFVybCxcclxuICAgIH0sXHJcbiAgICB7IHNraXBOdWxsOiB0cnVlIH1cclxuICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEJhZGdlUGFyYW0ge1xyXG4gIGNyaXRlcmlhOiB7XHJcbiAgICB0eXBlOiBrZXlvZiB0eXBlb2YgQkFER0VfQ1JJVEVSSUE7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFzc2lnbkJhZGdlcyA9IChwYXJhbXM6IEJhZGdlUGFyYW0pID0+IHtcclxuICBjb25zdCBiYWRnZUNvdW50czogQmFkZ2VDb3VudHMgPSB7XHJcbiAgICBHT0xEOiAwLFxyXG4gICAgU0lMVkVSOiAwLFxyXG4gICAgQlJPTlpFOiAwLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgY3JpdGVyaWEgfSA9IHBhcmFtcztcclxuXHJcbiAgY3JpdGVyaWEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgeyB0eXBlLCBjb3VudCB9ID0gaXRlbTtcclxuICAgIGNvbnN0IGJhZGdlTGV2ZWxzOiBhbnkgPSBCQURHRV9DUklURVJJQVt0eXBlXTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhiYWRnZUxldmVscykuZm9yRWFjaCgobGV2ZWw6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY291bnQgPj0gYmFkZ2VMZXZlbHNbbGV2ZWxdKSB7XHJcbiAgICAgICAgYmFkZ2VDb3VudHNbbGV2ZWwgYXMga2V5b2YgQmFkZ2VDb3VudHNdICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYmFkZ2VDb3VudHM7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwidHdNZXJnZSIsInFzIiwiQkFER0VfQ1JJVEVSSUEiLCJjbiIsImlucHV0cyIsImdldFRpbWVzdGFtcCIsImNyZWF0ZWRBdCIsIm5vdyIsIkRhdGUiLCJ0aW1lRGlmZmVyZW5jZSIsImdldFRpbWUiLCJtaW51dGUiLCJob3VyIiwiZGF5Iiwid2VlayIsIm1vbnRoIiwieWVhciIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwid2Vla3MiLCJtb250aHMiLCJ5ZWFycyIsImZvcm1hdEFuZERpdmlkZU51bWJlciIsIm51bSIsImZvcm1hdHRlZE51bSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImdldEpvaW5lZERhdGUiLCJkYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJnZXRGdWxsWWVhciIsImpvaW5lZERhdGUiLCJmb3JtVXJsUXVlcnkiLCJwYXJhbXMiLCJrZXkiLCJ2YWx1ZSIsImN1cnJlbnRVcmwiLCJwYXJzZSIsInN0cmluZ2lmeVVybCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSIsInNraXBOdWxsIiwicmVtb3ZlS2V5c0Zyb21RdWVyeSIsImtleXNUb1JlbW92ZSIsImZvckVhY2giLCJhc3NpZ25CYWRnZXMiLCJiYWRnZUNvdW50cyIsIkdPTEQiLCJTSUxWRVIiLCJCUk9OWkUiLCJjcml0ZXJpYSIsIml0ZW0iLCJ0eXBlIiwiY291bnQiLCJiYWRnZUxldmVscyIsIk9iamVjdCIsImtleXMiLCJsZXZlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/utils.ts\n"));

/***/ })

});