"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/login.jsx":
/*!*****************************!*\
  !*** ./pages/api/login.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        // console.log(req.body);\n        // console.log(process.env.ADMIN_USER_NAME);\n        if (username === process.env.ADMIN_USER_NAME && password === process.env.ADMIN_PASSWORD) {\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", process.env.ADMIN_TOKEN, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json(\"Succesfull\");\n        } else {\n            res.status(400).json(\"Wrong Credentials!\");\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDNUIsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO1FBQ3ZDLHlCQUF5QjtRQUN6Qiw0Q0FBNEM7UUFDNUMsSUFDRUYsUUFBUSxLQUFLRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZSxJQUN4Q0osUUFBUSxLQUFLRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsY0FBYyxFQUN2QztZQUNBUixHQUFHLENBQUNTLFNBQVMsQ0FDWCxZQUFZLEVBQ1paLHVEQUFnQixDQUFDLE9BQU8sRUFBRVEsT0FBTyxDQUFDQyxHQUFHLENBQUNLLFdBQVcsRUFBRTtnQkFDakRDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDZkMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCQyxJQUFJLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FDSCxDQUFDO1lBQ0ZkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEMsTUFBTTtZQUNMaEIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQzVDO0tBQ0Y7Q0FDRjtBQUVELGlFQUFlbEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emEtYXBwLy4vcGFnZXMvYXBpL2xvZ2luLmpzeD9hZjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuQURNSU5fVVNFUl9OQU1FKTtcclxuICAgIGlmIChcclxuICAgICAgdXNlcm5hbWUgPT09IHByb2Nlc3MuZW52LkFETUlOX1VTRVJfTkFNRSAmJlxyXG4gICAgICBwYXNzd29yZCA9PT0gcHJvY2Vzcy5lbnYuQURNSU5fUEFTU1dPUkRcclxuICAgICkge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiLFxyXG4gICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXCJ0b2tlblwiLCBwcm9jZXNzLmVudi5BRE1JTl9UT0tFTiwge1xyXG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxyXG4gICAgICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXHJcbiAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIlN1Y2Nlc2Z1bGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihcIldyb25nIENyZWRlbnRpYWxzIVwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiY29va2llIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwicHJvY2VzcyIsImVudiIsIkFETUlOX1VTRVJfTkFNRSIsIkFETUlOX1BBU1NXT1JEIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiQURNSU5fVE9LRU4iLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.jsx"));
module.exports = __webpack_exports__;

})();