"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Parent_Declarations_ts";
exports.ids = ["components_Parent_Declarations_ts"];
exports.modules = {

/***/ "./components/Parent/Declarations.ts":
/*!*******************************************!*\
  !*** ./components/Parent/Declarations.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Runner: () => (/* binding */ Runner)\n/* harmony export */ });\n/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js/md5 */ \"crypto-js/md5\");\n/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__);\nclass QeHeaders extends Headers {\n    get(key) {\n        return this.headers.find((h)=>h.key == key)?.value;\n    }\n    append(key, value) {\n        this.headers.push({\n            key,\n            value\n        });\n    }\n    delete(key) {\n        this.headers = this.headers.filter((h)=>h.key != key);\n    }\n    forEach(callbackfn, thisArg) {\n        for (let o of this.headers){\n            callbackfn?.(o.value, o.key, null);\n        }\n    }\n    has(key) {\n        return !!this.get(key);\n    }\n    keys() {\n        return this.headers.map((h)=>h.key);\n    }\n    values() {\n        return this.headers.map((h)=>h.value);\n    }\n    set(name, value) {\n        for(let i in this.headers){\n            if (this.headers[i].key == name) {\n                this.headers[i].value = value;\n                return;\n            }\n        }\n        this.append(name, value);\n    }\n    constructor(...args){\n        super(...args);\n        this.headers = [];\n    }\n}\n\nconst Runner = ()=>{\n    global.sss = (arg1, arg2)=>arg2 ? console.log(arg1, arg2) : console.log(arg1);\n    console.log(\"start front-end declaration...\");\n    String.prototype.betweenxy = function(str1, str2, startindex = 0) {\n        const startIndex = this.indexOf(str1, startindex);\n        if (startIndex === -1) return \"\";\n        const endIndex = this.indexOf(str2, startIndex + str1.length);\n        if (endIndex === -1) return \"\";\n        return this.substring(startIndex + str1.length, endIndex);\n    };\n    if (!process?.env?.DOMAIN) {\n        global.MD5 = (input)=>{\n            return crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(input).toString();\n        };\n    }\n    global.Round = (number, digits)=>{\n        if (digits >= 0) {\n            return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);\n        }\n        var factor = Math.pow(10, -digits);\n        var rounded = Math.round(number / factor) * factor;\n        if (digits == -1) {\n            return Math.floor(rounded);\n        } else {\n            return Math.floor(rounded / 10) * 10;\n        }\n    };\n    global.fetchv2 = async (url, options = {})=>{\n        // Set the \"Target-URL\" header to the URL we want to fetch\n        options.headers = options.headers || {};\n        // Add \"zqe-\" prefix to user's headers\n        const zqeHeaders = {};\n        for (const [key, value] of Object.entries(options.headers)){\n            if (key.startsWith(\"zqe-\")) {\n                zqeHeaders[key] = value;\n            } else {\n                zqeHeaders[`zqe-${key}`] = value;\n            }\n        }\n        options.headers = zqeHeaders;\n        options.headers[\"target-url\"] = url;\n        options.headers[\"Access-Control-Allow-Origin\"] = \"*\";\n        options.headers[\"Access-Control-Allow-Headers\"] = \"*\";\n        options.headers[\"Access-Control-Allow-Methods\"] = \"*\";\n        options.headers[\"Access-Control-Expose-Headers\"] = \"*\";\n        const proxyUrl = \"http://127.0.0.1:8888/\";\n        let res = await fetch(proxyUrl, options);\n        let rh = new QeHeaders();\n        let status = -1;\n        res.headers.forEach((v, k)=>{\n            // console.log(k+\":\"+v)\n            if (k.toLowerCase() == \"zstatusz\") {\n                status = parseInt(v);\n            } else {\n                k = k.replace(/-xmlx\\d+/i, \"\");\n                if (k.startsWith(\"zqe-\")) {\n                    let newk = k.substring(4);\n                    rh.append(newk, v);\n                }\n            }\n        });\n        return {\n            ...res,\n            arrayBuffer: async ()=>await res.arrayBuffer(),\n            blob: async ()=>await res.blob(),\n            status: status,\n            statusText: \"\",\n            body: res.body,\n            bodyUsed: res.bodyUsed,\n            // clone: async () => await res.clone(),\n            formData: async ()=>await res.formData(),\n            json: async ()=>await res.json(),\n            ok: res.ok,\n            redirected: res.redirected,\n            text: async ()=>await res.text(),\n            type: res.type,\n            url: res.url,\n            headers: rh\n        };\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1QjtZQUN2QixJQUFJQSxFQUFFQyxXQUFXLE1BQU0sWUFBWTtnQkFDakNILFNBQVNJLFNBQVNIO1lBQ3BCLE9BQ0s7Z0JBRUhDLElBQUlBLEVBQUVHLE9BQU8sQ0FBQyxhQUFhO2dCQUMzQixJQUFJSCxFQUFFUCxVQUFVLENBQUMsU0FBUztvQkFDeEIsSUFBSVcsT0FBT0osRUFBRTdCLFNBQVMsQ0FBQztvQkFDdkIwQixHQUFHM0QsTUFBTSxDQUFDa0UsTUFBTUw7Z0JBQ2xCO1lBQ0Y7UUFDRjtRQUdBLE9BQU87WUFDTCxHQUFHSixHQUFHO1lBQ05VLGFBQWEsVUFBWSxNQUFNVixJQUFJVSxXQUFXO1lBQzlDQyxNQUFNLFVBQVksTUFBTVgsSUFBSVcsSUFBSTtZQUNoQ1IsUUFBUUE7WUFDUlMsWUFBWTtZQUNaQyxNQUFNYixJQUFJYSxJQUFJO1lBQ2RDLFVBQVVkLElBQUljLFFBQVE7WUFDdEIsd0NBQXdDO1lBQ3hDQyxVQUFVLFVBQVksTUFBTWYsSUFBSWUsUUFBUTtZQUN4Q0MsTUFBTSxVQUFZLE1BQU1oQixJQUFJZ0IsSUFBSTtZQUNoQ0MsSUFBSWpCLElBQUlpQixFQUFFO1lBQ1ZDLFlBQVlsQixJQUFJa0IsVUFBVTtZQUMxQkMsTUFBTSxVQUFZLE1BQU1uQixJQUFJbUIsSUFBSTtZQUNoQ0MsTUFBTXBCLElBQUlvQixJQUFJO1lBQ2QzQixLQUFLTyxJQUFJUCxHQUFHO1lBQ1p0RCxTQUFTK0Q7UUFDWDtJQUNGO0FBRUYsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9jb21wb25lbnRzL1BhcmVudC9EZWNsYXJhdGlvbnMudHM/M2M2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRZUhlYWRlcnMgZXh0ZW5kcyBIZWFkZXJzIHtcclxuICBoZWFkZXJzID0gW11cclxuICBnZXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmhlYWRlcnMuZmluZChoID0+IGgua2V5ID09IGtleSk/LnZhbHVlXHJcbiAgfVxyXG5cclxuICBhcHBlbmQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaGVhZGVycy5wdXNoKHsga2V5LCB2YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlKGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmhlYWRlcnMgPSB0aGlzLmhlYWRlcnMuZmlsdGVyKGggPT4gaC5rZXkgIT0ga2V5KVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjYWxsYmFja2ZuOiAodmFsdWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHBhcmVudDogSGVhZGVycykgPT4gdm9pZCwgdGhpc0FyZz86IGFueSk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgbyBvZiB0aGlzLmhlYWRlcnMpIHtcclxuICAgICAgY2FsbGJhY2tmbj8uKG8udmFsdWUsIG8ua2V5LCBudWxsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmdldChrZXkpXHJcbiAgfVxyXG5cclxuICBrZXlzKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWFkZXJzLm1hcChoID0+IGgua2V5KVxyXG4gIH1cclxuICB2YWx1ZXMoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmhlYWRlcnMubWFwKGggPT4gaC52YWx1ZSlcclxuICB9XHJcbiAgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLmhlYWRlcnMpIHtcclxuICAgICAgaWYgKHRoaXMuaGVhZGVyc1tpXS5rZXkgPT0gbmFtZSkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyc1tpXS52YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IG1kNSBmcm9tICdjcnlwdG8tanMvbWQ1JztcclxuXHJcbmV4cG9ydCBjb25zdCBSdW5uZXIgPSAoKSA9PiB7XHJcblxyXG4gIGdsb2JhbC5zc3MgPSAoYXJnMSwgYXJnMik9PiBhcmcyP2NvbnNvbGUubG9nKGFyZzEsIGFyZzIpOmNvbnNvbGUubG9nKGFyZzEpXHJcbiAgXHJcbiAgY29uc29sZS5sb2coXCJzdGFydCBmcm9udC1lbmQgZGVjbGFyYXRpb24uLi5cIilcclxuICBTdHJpbmcucHJvdG90eXBlLmJldHdlZW54eSA9IGZ1bmN0aW9uIChzdHIxLCBzdHIyLCBzdGFydGluZGV4ID0gMCkge1xyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuaW5kZXhPZihzdHIxLCBzdGFydGluZGV4KTtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSAtMSkgcmV0dXJuICcnO1xyXG5cclxuICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5pbmRleE9mKHN0cjIsIHN0YXJ0SW5kZXggKyBzdHIxLmxlbmd0aCk7XHJcbiAgICBpZiAoZW5kSW5kZXggPT09IC0xKSByZXR1cm4gJyc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyBzdHIxLmxlbmd0aCwgZW5kSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwcm9jZXNzPy5lbnY/LkRPTUFJTikgey8vIG9ubHkgZGVjbGFyZSBpbiA8PGZyb250ZW5kPj5cclxuXHJcblxyXG4gICAgZ2xvYmFsLk1ENSA9IChpbnB1dDogc3RyaW5nIHwgQnVmZmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIG1kNShpbnB1dCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGdsb2JhbC5Sb3VuZCA9IChudW1iZXIsIGRpZ2l0cykgPT4ge1xyXG4gICAgaWYgKGRpZ2l0cyA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIE1hdGgucG93KDEwLCBkaWdpdHMpKSAvIE1hdGgucG93KDEwLCBkaWdpdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgLWRpZ2l0cyk7XHJcbiAgICB2YXIgcm91bmRlZCA9IE1hdGgucm91bmQobnVtYmVyIC8gZmFjdG9yKSAqIGZhY3RvcjtcclxuXHJcbiAgICBpZiAoZGlnaXRzID09IC0xKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHJvdW5kZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3Iocm91bmRlZCAvIDEwKSAqIDEwO1xyXG4gICAgfVxyXG4gIH1cclxuICBnbG9iYWwuZmV0Y2h2MiA9IGFzeW5jICh1cmwsIG9wdGlvbnMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcclxuICAgIC8vIFNldCB0aGUgXCJUYXJnZXQtVVJMXCIgaGVhZGVyIHRvIHRoZSBVUkwgd2Ugd2FudCB0byBmZXRjaFxyXG4gICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xyXG4gICAgLy8gQWRkIFwienFlLVwiIHByZWZpeCB0byB1c2VyJ3MgaGVhZGVyc1xyXG4gICAgY29uc3QgenFlSGVhZGVyczogYW55ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLmhlYWRlcnMpKSB7XHJcblxyXG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ3pxZS0nKSkge1xyXG4gICAgICAgIHpxZUhlYWRlcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHpxZUhlYWRlcnNbYHpxZS0ke2tleX1gXSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucy5oZWFkZXJzID0genFlSGVhZGVycztcclxuICAgIG9wdGlvbnMuaGVhZGVyc1sndGFyZ2V0LXVybCddID0gdXJsO1xyXG4gICAgb3B0aW9ucy5oZWFkZXJzW1wiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCJdID0gXCIqXCJcclxuICAgIG9wdGlvbnMuaGVhZGVyc1snQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyddID0gJyonXHJcbiAgICBvcHRpb25zLmhlYWRlcnNbJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnXSA9ICcqJ1xyXG4gICAgb3B0aW9ucy5oZWFkZXJzWydBY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVycyddID0gJyonXHJcblxyXG4gICAgY29uc3QgcHJveHlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4ODg4Lyc7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2gocHJveHlVcmwsIG9wdGlvbnMpO1xyXG4gICAgbGV0IHJoID0gbmV3IFFlSGVhZGVycygpO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IHN0YXR1cyA9IC0xO1xyXG4gICAgcmVzLmhlYWRlcnMuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhrK1wiOlwiK3YpXHJcbiAgICAgIGlmIChrLnRvTG93ZXJDYXNlKCkgPT0gXCJ6c3RhdHVzelwiKSB7XHJcbiAgICAgICAgc3RhdHVzID0gcGFyc2VJbnQodilcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgayA9IGsucmVwbGFjZSgvLXhtbHhcXGQrL2ksIFwiXCIpO1xyXG4gICAgICAgIGlmIChrLnN0YXJ0c1dpdGgoXCJ6cWUtXCIpKSB7XHJcbiAgICAgICAgICBsZXQgbmV3ayA9IGsuc3Vic3RyaW5nKDQpXHJcbiAgICAgICAgICByaC5hcHBlbmQobmV3aywgdilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcyxcclxuICAgICAgYXJyYXlCdWZmZXI6IGFzeW5jICgpID0+IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpLFxyXG4gICAgICBibG9iOiBhc3luYyAoKSA9PiBhd2FpdCByZXMuYmxvYigpLFxyXG4gICAgICBzdGF0dXM6IHN0YXR1cyxcclxuICAgICAgc3RhdHVzVGV4dDogXCJcIixcclxuICAgICAgYm9keTogcmVzLmJvZHksXHJcbiAgICAgIGJvZHlVc2VkOiByZXMuYm9keVVzZWQsXHJcbiAgICAgIC8vIGNsb25lOiBhc3luYyAoKSA9PiBhd2FpdCByZXMuY2xvbmUoKSxcclxuICAgICAgZm9ybURhdGE6IGFzeW5jICgpID0+IGF3YWl0IHJlcy5mb3JtRGF0YSgpLFxyXG4gICAgICBqc29uOiBhc3luYyAoKSA9PiBhd2FpdCByZXMuanNvbigpLFxyXG4gICAgICBvazogcmVzLm9rLFxyXG4gICAgICByZWRpcmVjdGVkOiByZXMucmVkaXJlY3RlZCxcclxuICAgICAgdGV4dDogYXN5bmMgKCkgPT4gYXdhaXQgcmVzLnRleHQoKSxcclxuICAgICAgdHlwZTogcmVzLnR5cGUsXHJcbiAgICAgIHVybDogcmVzLnVybCxcclxuICAgICAgaGVhZGVyczogcmhcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJRZUhlYWRlcnMiLCJIZWFkZXJzIiwiZ2V0Iiwia2V5IiwiaGVhZGVycyIsImZpbmQiLCJoIiwidmFsdWUiLCJhcHBlbmQiLCJwdXNoIiwiZGVsZXRlIiwiZmlsdGVyIiwiZm9yRWFjaCIsImNhbGxiYWNrZm4iLCJ0aGlzQXJnIiwibyIsImhhcyIsImtleXMiLCJtYXAiLCJ2YWx1ZXMiLCJzZXQiLCJuYW1lIiwiaSIsIm1kNSIsIlJ1bm5lciIsImdsb2JhbCIsInNzcyIsImFyZzEiLCJhcmcyIiwiY29uc29sZSIsImxvZyIsIlN0cmluZyIsInByb3RvdHlwZSIsImJldHdlZW54eSIsInN0cjEiLCJzdHIyIiwic3RhcnRpbmRleCIsInN0YXJ0SW5kZXgiLCJpbmRleE9mIiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiRE9NQUlOIiwiTUQ1IiwiaW5wdXQiLCJ0b1N0cmluZyIsIlJvdW5kIiwibnVtYmVyIiwiZGlnaXRzIiwiTWF0aCIsInJvdW5kIiwicG93IiwiZmFjdG9yIiwicm91bmRlZCIsImZsb29yIiwiZmV0Y2h2MiIsInVybCIsIm9wdGlvbnMiLCJ6cWVIZWFkZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsInN0YXJ0c1dpdGgiLCJwcm94eVVybCIsInJlcyIsImZldGNoIiwicmgiLCJzdGF0dXMiLCJ2IiwiayIsInRvTG93ZXJDYXNlIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwibmV3ayIsImFycmF5QnVmZmVyIiwiYmxvYiIsInN0YXR1c1RleHQiLCJib2R5IiwiYm9keVVzZWQiLCJmb3JtRGF0YSIsImpzb24iLCJvayIsInJlZGlyZWN0ZWQiLCJ0ZXh0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Parent/Declarations.ts\n");

/***/ })

};
;