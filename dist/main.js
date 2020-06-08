/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n}\\n\\n.title {\\n  text-align: center;\\n  margin-top: 5px;\\n  margin-bottom: 5px;\\n}\\n\\n.grid-container {\\n  border: 1px solid red;\\n  display: grid;\\n  grid-template-columns: 2fr 3fr;\\n  grid-template-rows: minmax(93vh, auto);\\n}\\n.grid-container .left-side {\\n  text-align: center;\\n}\\n.grid-container .left-side .list-info {\\n  display: flex;\\n  justify-content: center;\\n}\\n.grid-container .left-side .list-info .list-count {\\n  margin-left: 25px;\\n}\\n.grid-container .left-side .newBtn button {\\n  height: 30px;\\n  background: blue;\\n  color: #fff;\\n  cursor: pointer;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  border: none;\\n  padding: 3px;\\n  border-radius: 4px;\\n}\\n.grid-container .items {\\n  border: 1px solid blue;\\n}\\n.grid-container .middle-side {\\n  position: relative;\\n}\\n.grid-container .middle-side .todo-display {\\n  border-radius: 5px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  width: 70%;\\n  margin: 0 auto;\\n  background: rgba(0, 0, 0, 0.6);\\n  padding: 15px;\\n}\\n.grid-container .middle-side .todo-display .todoTitle {\\n  font-weight: bold;\\n  font-size: 1.4rem;\\n  margin-right: 25px;\\n}\\n.grid-container .middle-side .todo-display button {\\n  background: lightgreen;\\n  border: none;\\n  padding: 4px;\\n  font-weight: bold;\\n  cursor: pointer;\\n  border-radius: 3px;\\n}\\n.grid-container .middle-side .todo-display button:hover {\\n  background: #5cb1ce;\\n  color: #fff;\\n}\\n.grid-container .middle-side .todo-display input[type=checkbox] {\\n  margin-right: 20px;\\n  height: 15px;\\n  width: 15px;\\n}\\n.grid-container .middle-side .more-info {\\n  margin-top: 15px;\\n}\\n.grid-container .middle-side .more-info .info-title {\\n  font-weight: bold;\\n  font-size: 1.2rem;\\n  margin-bottom: 10px;\\n}\\n.grid-container .middle-side .more-info div:last-child {\\n  text-align: center;\\n}\\n.grid-container .newTodoBtn {\\n  text-align: center;\\n  margin-top: 35px;\\n}\\n.grid-container .newTodoBtn button {\\n  padding: 10px;\\n  border: none;\\n  background: #00b4d8;\\n  border-radius: 3px;\\n  color: #fff;\\n  cursor: pointer;\\n}\\n.grid-container .newTodoBtn button:hover {\\n  background: #48cae4;\\n  border: 1px solid #00b4d8;\\n}\\n.grid-container .new-todo {\\n  border: 1px solid yellow;\\n  background: rgba(0, 0, 0, 0.5);\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  display: none;\\n}\\n.grid-container .new-todo form {\\n  width: 90%;\\n  margin: 0 auto;\\n  padding: 35px;\\n  border-radius: 9px;\\n  background: rgba(247, 247, 247, 0.5);\\n}\\n.grid-container .new-todo form label {\\n  color: #000;\\n  font-weight: bold;\\n}\\n.grid-container .new-todo form input:not([type=submit]),\\n.grid-container .new-todo form select {\\n  width: 100%;\\n  padding: 10px;\\n  margin-bottom: 15px;\\n  margin-top: 5px;\\n}\\n.grid-container .new-todo form .cta-btns {\\n  text-align: center;\\n  margin-top: 10px;\\n}\\n.grid-container .new-todo form .cta-btns .save-btn {\\n  background: teal;\\n}\\n.grid-container .new-todo form .cta-btns .save-btn:hover {\\n  background: #78e9e9;\\n  border: 1px solid teal;\\n}\\n.grid-container .new-todo form .cta-btns .cancel-btn {\\n  background: #fc4848;\\n}\\n.grid-container .new-todo form .cta-btns .cancel-btn:hover {\\n  background: #f36b6b;\\n  border: 1px solid #fc4848;\\n}\\n.grid-container .new-todo form .cta-btns button {\\n  height: 30px;\\n  cursor: pointer;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  border: none;\\n  padding: 3px;\\n  border-radius: 4px;\\n}\\n.grid-container .new-list {\\n  border: 1px solid yellow;\\n  background: rgba(0, 0, 0, 0.8);\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  display: none;\\n}\\n.grid-container .new-list form {\\n  width: 90%;\\n  margin: 0 auto;\\n  padding: 35px;\\n  border-radius: 9px;\\n  background: rgba(247, 247, 247, 0.5);\\n}\\n.grid-container .new-list form label {\\n  color: #000;\\n  font-weight: bold;\\n}\\n.grid-container .new-list form input:not([type=submit]) {\\n  width: 100%;\\n  padding: 10px;\\n  margin-bottom: 15px;\\n  margin-top: 5px;\\n}\\n.grid-container .new-list form input:not([type=submit]),\\n.grid-container .new-list form .cta-btns {\\n  text-align: center;\\n  margin-top: 10px;\\n}\\n.grid-container .new-list form input:not([type=submit]) .save-btn,\\n.grid-container .new-list form .cta-btns .save-btn {\\n  background: teal;\\n}\\n.grid-container .new-list form input:not([type=submit]) .save-btn:hover,\\n.grid-container .new-list form .cta-btns .save-btn:hover {\\n  background: #78e9e9;\\n  border: 1px solid teal;\\n}\\n.grid-container .new-list form input:not([type=submit]) .cancel-btn,\\n.grid-container .new-list form .cta-btns .cancel-btn {\\n  background: #fc4848;\\n}\\n.grid-container .new-list form input:not([type=submit]) .cancel-btn:hover,\\n.grid-container .new-list form .cta-btns .cancel-btn:hover {\\n  background: #f36b6b;\\n  border: 1px solid #fc4848;\\n}\\n.grid-container .new-list form input:not([type=submit]) button,\\n.grid-container .new-list form .cta-btns button {\\n  height: 30px;\\n  cursor: pointer;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  border: none;\\n  padding: 3px;\\n  border-radius: 4px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// DOM manipulation\r\nlet addNewList = document.getElementById(\"addNewList\");\r\nlet addNewTodo = document.getElementById(\"addNewTodo\");\r\nlet newListSaveBtn = document.getElementById(\"newListSaveBtn\");\r\nlet listGroup = document.getElementById(\"listName\");\r\nlet btns = [addNewList, addNewTodo];\r\n\r\naddNewList.addEventListener('click', e => {\r\n    // document.querySelector('new-list')[0].style.visibility = 'visible';\r\n    document.getElementsByClassName('new-list')[0].style.display = \"block\";\r\n})\r\n\r\naddNewTodo.addEventListener('click', e => {\r\n    document.getElementsByClassName('new-todo')[0].style.display = 'block';\r\n})\r\n\r\n// function displayForm(e) {\r\n//   console.log(e.target.className);\r\n// }\r\n// addNewTodo.addEventListener('click', displayForm);\r\n\r\n// Creating Groups and Group Logic\r\n\r\nconst groups = {\r\n    1: {\r\n        id: 1,\r\n        title: \"My Travel List\",\r\n        description: \"Thing I need to buy\",\r\n        todos: {\r\n            12: { title: \"swim\", description: \"Buy Swimsuit\", dueDate: \"Tomorrow\", priority: \"High\" },\r\n            13: { title: \"run\", description: \"Buy Swimsuit\", dueDate: \"Tomorrow\", priority: \"High\" },\r\n        }\r\n    }\r\n}\r\n\r\nconst generateId = () => {\r\n    const generatedNumber = Math.floor(Math.random() * 100);\r\n    if (groups.hasOwnProperty(generatedNumber)) {\r\n        return generatedNumber + 1;\r\n    }\r\n    return generatedNumber;\r\n}\r\n\r\nconst group = (title, description, todos = {}) => {\r\n    const id = generateId();\r\n    groups[id] = {\r\n        id,\r\n        title,\r\n        description,\r\n        todos,\r\n    }\r\n}\r\n\r\nconst addTodo = (projectId, title, description, dueDate, priority) => {\r\n    const id = generateId();\r\n    groups[projectId].todos[id] = { title, description, dueDate, priority };\r\n}\r\n\r\nconst displayTodos = (projectId) => {\r\n    for (let todo in groups[projectId].todos) {\r\n        const todos = groups[projectId].todos\r\n            // todos[todo]\r\n\r\n        // Add todo stuff to the Dom\r\n        console.log(todos[todo]);\r\n    }\r\n    // console.log(let todo of groups[projectId].todos)\r\n    // Add todo stuff to the Dom\r\n}\r\n\r\nconst displayGroups = () => {\r\n    for (let group in groups) {\r\n        let newDiv = document.createElement(\"a\");\r\n        newDiv.textContent = groups[group].title;\r\n        newDiv.href = \"#\";\r\n        document.getElementsByClassName(\"list-info\")[0].appendChild(newDiv);\r\n        // console.log(\"test\");\r\n    }\r\n}\r\nlet newListForm = document.getElementById(\"newListForm\");\r\nnewListForm.addEventListener(\"submit\", addToTheDom);\r\n\r\nfunction addToTheDom(e) {\r\n    e.preventDefault();\r\n    let listTitle = document.getElementById(\"new-list-title\").value;\r\n    let listDescription = document.getElementById(\"list-description\").value;\r\n    group(listTitle, listDescription);\r\n    // listGroup.appendChild = displayGroups();\r\n    displayGroups();\r\n    document.getElementsByClassName('new-list')[0].style.display = \"none\";\r\n    newListForm.reset();\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });