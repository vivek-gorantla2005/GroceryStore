"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./app/products/page.js":
/*!******************************!*\
  !*** ./app/products/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_components/ProductCard */ \"(app-pages-browser)/./app/_components/ProductCard.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ProductsPage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Loading state\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const res = await fetch(\"/api/getproducts\");\n                if (res.ok) {\n                    const { body: data } = await res.json();\n                    console.log(JSON.stringify(data));\n                    setProducts(data);\n                } else {\n                    console.error(\"Error fetching products\");\n                }\n            } catch (err) {\n                console.error(\"An error occurred: \", err);\n            } finally{\n                setLoading(false); // Set loading to false once data is fetched\n            }\n        };\n        fetchProducts();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center mt-32 h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-spin rounded-full h-32 w-32 border-t-4 border-green-600\",\n                role: \"status\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"sr-only\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Vivek\\\\groceryStore\\\\my-app\\\\app\\\\products\\\\page.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\groceryStore\\\\my-app\\\\app\\\\products\\\\page.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Vivek\\\\groceryStore\\\\my-app\\\\app\\\\products\\\\page.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"ml-16 mt-12 text-2xl font-extrabold text-green-800\",\n                children: \"Products\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\groceryStore\\\\my-app\\\\app\\\\products\\\\page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-start ml-8 gap-10 p-4\",\n                children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: product\n                    }, index, false, {\n                        fileName: \"D:\\\\Vivek\\\\groceryStore\\\\my-app\\\\app\\\\products\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\groceryStore\\\\my-app\\\\app\\\\products\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Vivek\\\\groceryStore\\\\my-app\\\\app\\\\products\\\\page.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductsPage, \"KWid68LpBxbFhyja5dauhUIHvyY=\");\n_c = ProductsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsPage);\nvar _c;\n$RefreshReg$(_c, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9kdWN0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDRTtBQUVyRCxNQUFNSSxlQUFlOztJQUNuQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsT0FBTyxnQkFBZ0I7SUFFOURELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO2dCQUN4QixJQUFJRCxJQUFJRSxFQUFFLEVBQUU7b0JBQ1YsTUFBTSxFQUFFQyxNQUFNQyxJQUFJLEVBQUUsR0FBRyxNQUFNSixJQUFJSyxJQUFJO29CQUNyQ0MsUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNMO29CQUMzQlIsWUFBWVE7Z0JBQ2QsT0FBTztvQkFDTEUsUUFBUUksS0FBSyxDQUFDO2dCQUNoQjtZQUNGLEVBQUUsT0FBT0MsS0FBSztnQkFDWkwsUUFBUUksS0FBSyxDQUFDLHVCQUF1QkM7WUFDdkMsU0FBVTtnQkFDUmIsV0FBVyxRQUFRLDRDQUE0QztZQUNqRTtRQUNGO1FBQ0FDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUYsU0FBUztRQUNYLHFCQUNFLDhEQUFDZTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTtnQkFBa0VDLE1BQUs7MEJBQ3BGLDRFQUFDQztvQkFBS0YsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7Ozs7OztJQUlsQztJQUVBLHFCQUNFLDhEQUFDRDs7MEJBQ0MsOERBQUNJO2dCQUFFSCxXQUFVOzBCQUFxRDs7Ozs7OzBCQUNsRSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1psQixTQUFTc0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQzFCLCtEQUFXQTt3QkFBYXlCLFNBQVNBO3VCQUFoQkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUI7R0E3Q016QjtLQUFBQTtBQStDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcHJvZHVjdHMvcGFnZS5qcz80MzM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vX2NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xyXG5cclxuY29uc3QgUHJvZHVjdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBMb2FkaW5nIHN0YXRlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2dldHByb2R1Y3RzJyk7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgY29uc3QgeyBib2R5OiBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9kdWN0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZDogXCIsIGVycik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFNldCBsb2FkaW5nIHRvIGZhbHNlIG9uY2UgZGF0YSBpcyBmZXRjaGVkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTMyIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtMzIgdy0zMiBib3JkZXItdC00IGJvcmRlci1ncmVlbi02MDBcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nbWwtMTYgbXQtMTIgdGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi04MDAnPlByb2R1Y3RzPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktc3RhcnQgbWwtOCBnYXAtMTAgcC00XCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e2luZGV4fSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdENhcmQiLCJQcm9kdWN0c1BhZ2UiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFByb2R1Y3RzIiwicmVzIiwiZmV0Y2giLCJvayIsImJvZHkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIiwic3BhbiIsInAiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/products/page.js\n"));

/***/ })

});