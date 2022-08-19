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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Orders.js":
/*!**************************!*\
  !*** ./models/Orders.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: Number,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    address1: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    address2: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    country: {\n        type: String,\n        required: true\n    },\n    state: {\n        type: String,\n        required: true\n    },\n    pincode: {\n        type: Number,\n        required: true\n    },\n    total: [],\n    product_Orders: [],\n    status: {\n        type: Number,\n        default: 0\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order2) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order2\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxXQUFXLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUNwQ0csSUFBSSxFQUFFO1FBQ0ZDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUVqQjtJQUNEQyxLQUFLLEVBQUU7UUFDSEgsSUFBSSxFQUFFSSxNQUFNO1FBQ1pGLFFBQVEsRUFBRSxJQUFJO0tBRWpCO0lBQ0RHLEtBQUssRUFBRTtRQUNITCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FFakI7SUFFREksUUFBUSxFQUFFO1FBQ05OLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkSyxTQUFTLEVBQUUsR0FBRztLQUNqQjtJQUNEQyxRQUFRLEVBQUU7UUFDTlIsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RLLFNBQVMsRUFBRSxHQUFHO0tBQ2pCO0lBQ0RFLE9BQU8sRUFBRTtRQUNMVCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FFakI7SUFFRFEsS0FBSyxFQUFFO1FBQ0hWLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUVqQjtJQUNEUyxPQUFPLEVBQUU7UUFDTFgsSUFBSSxFQUFFSSxNQUFNO1FBQ1pGLFFBQVEsRUFBRSxJQUFJO0tBRWpCO0lBQ0RVLEtBQUssRUFBRSxFQUFFO0lBQ1RDLGNBQWMsRUFBRSxFQUFFO0lBQ2xCQyxNQUFNLEVBQUU7UUFDSmQsSUFBSSxFQUFFSSxNQUFNO1FBQ1pXLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSixFQUFFO0lBQUVDLFVBQVUsRUFBRSxJQUFJO0NBQUUsQ0FBQztBQUV4QixpRUFBZXBCLCtEQUFzQixJQUFJQSxxREFBYyxDQUFDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YS1hcHAvLi9tb2RlbHMvT3JkZXJzLmpzPzljNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgT3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcblxyXG4gICAgfSxcclxuICAgIHBob25lOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG5cclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZHJlc3MxOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogMjAwLFxyXG4gICAgfSxcclxuICAgIGFkZHJlc3MyOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogMjAwLFxyXG4gICAgfSxcclxuICAgIGNvdW50cnk6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuXHJcbiAgICB9LFxyXG4gICAgcGluY29kZToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuXHJcbiAgICB9LFxyXG4gICAgdG90YWw6IFtdLFxyXG4gICAgcHJvZHVjdF9PcmRlcnM6IFtdLFxyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICB9LFxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuT3JkZXIyIHx8IG1vbmdvb3NlLm1vZGVsKFwiT3JkZXIyXCIsIE9yZGVyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJPcmRlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwaG9uZSIsIk51bWJlciIsImVtYWlsIiwiYWRkcmVzczEiLCJtYXhsZW5ndGgiLCJhZGRyZXNzMiIsImNvdW50cnkiLCJzdGF0ZSIsInBpbmNvZGUiLCJ0b3RhbCIsInByb2R1Y3RfT3JkZXJzIiwic3RhdHVzIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJPcmRlcjIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Orders.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/index.jsx":
/*!************************************!*\
  !*** ./pages/api/orders/index.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/mongo */ \"(api)/./util/mongo.js\");\n/* harmony import */ var _models_Orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Orders */ \"(api)/./models/Orders.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst handler = async (req, res)=>{\n    const { method  } = req;\n    const data = req.body;\n    await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const orders = await _models_Orders__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(orders);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            console.log(req.body);\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize(\"Ordered_Id\", data.product_Orders[0]._id, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            const creates = new _models_Orders__WEBPACK_IMPORTED_MODULE_1__[\"default\"](req.body);\n            await creates.save().then(()=>res.status(200).json(creates)\n            );\n        // res.status(200).json(creates);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNBO0FBQ2hCO0FBRzVCLE1BQU1HLE9BQU8sR0FBRyxPQUFNQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMvQixNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHO0lBQ3RCLE1BQU1HLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBR3JCLE1BQU1SLHVEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJTSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ2xCLElBQUk7WUFDQSxNQUFNRyxNQUFNLEdBQUcsTUFBTVIsMkRBQVcsRUFBRTtZQUNsQ0ksR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsTUFBTSxDQUFDLENBQUM7U0FDaEMsQ0FBQyxPQUFPSSxHQUFHLEVBQUU7WUFDVlIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDN0I7S0FDSjtJQUVELElBQUlQLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDbkIsSUFBSTtZQUNBUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztZQUd0QkgsR0FBRyxDQUFDVyxTQUFTLENBQ1QsWUFBWSxFQUNaZCx1REFBZ0IsQ0FBQyxZQUFZLEVBQUVLLElBQUksQ0FBQ1csY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEVBQUU7Z0JBQ3ZEQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ2ZDLFFBQVEsRUFBRSxRQUFRO2dCQUNsQkMsSUFBSSxFQUFFLEdBQUc7YUFDWixDQUFDLENBQ0wsQ0FBQztZQUVGLE1BQU1DLE9BQU8sR0FBRyxJQUFJdEIsc0RBQU0sQ0FBQ0csR0FBRyxDQUFDSSxJQUFJLENBQUM7WUFDcEMsTUFBTWUsT0FBTyxDQUFDQyxJQUFJLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQU1wQixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVyxPQUFPLENBQUM7WUFBQSxDQUFDLENBQUM7UUFDL0QsaUNBQWlDO1NBQ3BDLENBQUMsT0FBT1YsR0FBRyxFQUFFO1lBQ1ZSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0tBQ0o7Q0FDSjtBQUVELGlFQUFlVixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YS1hcHAvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzeD9mNDg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29cIjtcclxuaW1wb3J0IE9yZGVyMiBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL09yZGVyc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG5cclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBPcmRlcjIuZmluZCgpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcnMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgICAgICAgICAgXCJTZXQtQ29va2llXCIsXHJcbiAgICAgICAgICAgICAgICBjb29raWUuc2VyaWFsaXplKFwiT3JkZXJlZF9JZFwiLCBkYXRhLnByb2R1Y3RfT3JkZXJzWzBdLl9pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVzID0gbmV3IE9yZGVyMihyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZXMuc2F2ZSgpLnRoZW4oKCkgPT4gcmVzLnN0YXR1cygyMDApLmpzb24oY3JlYXRlcykpO1xyXG4gICAgICAgICAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbihjcmVhdGVzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJPcmRlcjIiLCJjb29raWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJvcmRlcnMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJwcm9kdWN0X09yZGVycyIsIl9pZCIsIm1heEFnZSIsInNhbWVTaXRlIiwicGF0aCIsImNyZWF0ZXMiLCJzYXZlIiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.jsx\n");

/***/ }),

/***/ "(api)/./util/mongo.js":
/*!***********************!*\
  !*** ./util/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n//const MONGODB_URL = \"mongodb+srv://softman:softman@cluster0.fmrkcad.mongodb.net/pizza?retryWrites=true&w=majority\";\nconst dbUrl = process.env.MONGODB_URL;\nconst dbConn = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(dbUrl);\n    console.log(\"Database connected..\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixxSEFBcUg7QUFDckgsTUFBTUMsS0FBSyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNyQyxNQUFNQyxNQUFNLEdBQUcsVUFBVztJQUN0QixNQUFNTCx1REFBZ0IsQ0FBQ0MsS0FBSyxDQUFDO0lBQzdCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0NBQ3ZDO0FBQ0QsaUVBQWVILE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLWFwcC8uL3V0aWwvbW9uZ28uanM/YzBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG4vL2NvbnN0IE1PTkdPREJfVVJMID0gXCJtb25nb2RiK3NydjovL3NvZnRtYW46c29mdG1hbkBjbHVzdGVyMC5mbXJrY2FkLm1vbmdvZGIubmV0L3BpenphP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xyXG5jb25zdCBkYlVybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMO1xyXG5jb25zdCBkYkNvbm4gPSBhc3luYygpID0+IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoZGJVcmwpXHJcbiAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3RlZC4uXCIpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYlVybCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsImRiQ29ubiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./util/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.jsx"));
module.exports = __webpack_exports__;

})();