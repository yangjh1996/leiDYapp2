"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // C:/Users/curry/Desktop/uni-weLive/unpackage/dist/dev/.nvue/uimg3.js
  var import_vue = __toESM(require_vue());
  var _e;
  var _f;
  var _g;
  var _h;
  var _i;
  var _j;
  var _k;
  var _l;
  var _m;
  var _n;
  var _o;
  var _p;
  var _q;
  var _r;
  var _s;
  var _t;
  var ON_SHOW = "onShow";
  var ON_HIDE = "onHide";
  var ON_LOAD = "onLoad";
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  var createHook = (lifecycle) => (hook, target = (0, import_vue.getCurrentInstance)()) => {
    !import_vue.isInSSRComponentSetup && (0, import_vue.injectHook)(lifecycle, hook, target);
  };
  var onShow = /* @__PURE__ */ createHook(ON_SHOW);
  var onHide = /* @__PURE__ */ createHook(ON_HIDE);
  var onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  var mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount,
    array,
    carNo,
    chinese,
    code,
    contains,
    date,
    dateISO,
    digits,
    email,
    empty,
    enOrNum,
    func,
    idCard,
    image,
    jsonString,
    landline,
    letter,
    mobile,
    number,
    object,
    promise,
    range: range$1,
    rangeLength,
    regExp,
    string,
    url,
    video
  }, Symbol.toStringTag, { value: "Module" }));
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uv-ui-tools/libs/function/digit.js:45", `${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b2) => (_b2 = ((_a2) => (_a2 = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a2.config)()) == null ? void 0 : _b2.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uv-ui-tools/libs/function/index.js:250", `uvui\u63D0\u793A\uFF1A${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "uv-form-item");
    const form = $parent.call(instance, "uv-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a2;
    const pages2 = getCurrentPages();
    const route2 = (_a2 = pages2[pages2.length - 1]) == null ? void 0 : _a2.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props22 = {},
    config = {},
    color = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$uv;
    uni.$uv.config = deepMerge2(uni.$uv.config, config);
    uni.$uv.props = deepMerge2(uni.$uv.props, props22);
    uni.$uv.color = deepMerge2(uni.$uv.color, color);
    uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex);
  }
  var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid,
    os,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams,
    random,
    randomArray,
    range,
    setConfig,
    setProperty,
    sleep,
    sys,
    timeFormat,
    timeFrom,
    toast,
    trim,
    type2icon
  }, Symbol.toStringTag, { value: "Module" }));
  var Router = class {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false,
        // 是否需要拦截
        events: {}
        // 页面间通信接口，用于监听被打开页面发送到当前页面的数据。hbuilderx 2.8.9+ 开始支持。
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    route() {
      return __async(this, arguments, function* (options = {}, params = {}) {
        let mergeConfig = {};
        if (typeof options === "string") {
          mergeConfig.url = this.mixinParam(options, params);
          mergeConfig.type = "navigateTo";
        } else {
          mergeConfig = deepMerge(this.config, options);
          mergeConfig.url = this.mixinParam(options.url, options.params);
        }
        if (mergeConfig.url === page())
          return;
        if (params.intercept) {
          mergeConfig.intercept = params.intercept;
        }
        mergeConfig.params = params;
        mergeConfig = deepMerge(this.config, mergeConfig);
        if (typeof mergeConfig.intercept === "function") {
          const isNext = yield new Promise((resolve, reject) => {
            mergeConfig.intercept(mergeConfig, resolve);
          });
          isNext && this.openPage(mergeConfig);
        } else {
          this.openPage(mergeConfig);
        }
      });
    }
    // 执行路由跳转
    openPage(config) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
        events
      } = config;
      if (config.type == "navigateTo" || config.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration,
          events
        });
      }
      if (config.type == "redirectTo" || config.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config.type == "switchTab" || config.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config.type == "reLaunch" || config.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config.type == "navigateBack" || config.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  };
  var route = new Router().route;
  var timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  var flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  var mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$uv.getRect = this.$uvGetRect;
    },
    created() {
      this.$uv.getRect = this.$uvGetRect;
    },
    computed: {
      $uv() {
        var _a2, _b2;
        return __spreadProps(__spreadValues({}, index), {
          test,
          route,
          debounce,
          throttle,
          unit: (_b2 = (_a2 = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a2.config) == null ? void 0 : _b2.unit
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `uv-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uvGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$uv.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uvOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    },
    // 兼容vue3
    unmounted() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  var iconUrl = "/assets/uvicons.04d281cc.ttf";
  var icons = {
    "uvicon-level": "e68f",
    "uvicon-checkbox-mark": "e659",
    "uvicon-folder": "e694",
    "uvicon-movie": "e67c",
    "uvicon-star-fill": "e61e",
    "uvicon-star": "e618",
    "uvicon-phone-fill": "e6ac",
    "uvicon-phone": "e6ba",
    "uvicon-apple-fill": "e635",
    "uvicon-backspace": "e64d",
    "uvicon-attach": "e640",
    "uvicon-empty-data": "e671",
    "uvicon-empty-address": "e68a",
    "uvicon-empty-favor": "e662",
    "uvicon-empty-car": "e657",
    "uvicon-empty-order": "e66b",
    "uvicon-empty-list": "e672",
    "uvicon-empty-search": "e677",
    "uvicon-empty-permission": "e67d",
    "uvicon-empty-news": "e67e",
    "uvicon-empty-history": "e685",
    "uvicon-empty-coupon": "e69b",
    "uvicon-empty-page": "e60e",
    "uvicon-empty-wifi-off": "e6cc",
    "uvicon-reload": "e627",
    "uvicon-order": "e695",
    "uvicon-server-man": "e601",
    "uvicon-search": "e632",
    "uvicon-more-dot-fill": "e66f",
    "uvicon-scan": "e631",
    "uvicon-map": "e665",
    "uvicon-map-fill": "e6a8",
    "uvicon-tags": "e621",
    "uvicon-tags-fill": "e613",
    "uvicon-eye": "e664",
    "uvicon-eye-fill": "e697",
    "uvicon-eye-off": "e69c",
    "uvicon-eye-off-outline": "e688",
    "uvicon-mic": "e66d",
    "uvicon-mic-off": "e691",
    "uvicon-calendar": "e65c",
    "uvicon-trash": "e623",
    "uvicon-trash-fill": "e6ce",
    "uvicon-play-left": "e6bf",
    "uvicon-play-right": "e6b3",
    "uvicon-minus": "e614",
    "uvicon-plus": "e625",
    "uvicon-info-circle": "e69f",
    "uvicon-info-circle-fill": "e6a7",
    "uvicon-question-circle": "e622",
    "uvicon-question-circle-fill": "e6bc",
    "uvicon-close": "e65a",
    "uvicon-checkmark": "e64a",
    "uvicon-checkmark-circle": "e643",
    "uvicon-checkmark-circle-fill": "e668",
    "uvicon-setting": "e602",
    "uvicon-setting-fill": "e6d0",
    "uvicon-heart": "e6a2",
    "uvicon-heart-fill": "e68b",
    "uvicon-camera": "e642",
    "uvicon-camera-fill": "e650",
    "uvicon-more-circle": "e69e",
    "uvicon-more-circle-fill": "e684",
    "uvicon-chat": "e656",
    "uvicon-chat-fill": "e63f",
    "uvicon-bag": "e647",
    "uvicon-error-circle": "e66e",
    "uvicon-error-circle-fill": "e655",
    "uvicon-close-circle": "e64e",
    "uvicon-close-circle-fill": "e666",
    "uvicon-share": "e629",
    "uvicon-share-fill": "e6bb",
    "uvicon-share-square": "e6c4",
    "uvicon-shopping-cart": "e6cb",
    "uvicon-shopping-cart-fill": "e630",
    "uvicon-bell": "e651",
    "uvicon-bell-fill": "e604",
    "uvicon-list": "e690",
    "uvicon-list-dot": "e6a9",
    "uvicon-zhifubao-circle-fill": "e617",
    "uvicon-weixin-circle-fill": "e6cd",
    "uvicon-weixin-fill": "e620",
    "uvicon-qq-fill": "e608",
    "uvicon-qq-circle-fill": "e6b9",
    "uvicon-moments-circel-fill": "e6c2",
    "uvicon-moments": "e6a0",
    "uvicon-car": "e64f",
    "uvicon-car-fill": "e648",
    "uvicon-warning-fill": "e6c7",
    "uvicon-warning": "e6c1",
    "uvicon-clock-fill": "e64b",
    "uvicon-clock": "e66c",
    "uvicon-edit-pen": "e65d",
    "uvicon-edit-pen-fill": "e679",
    "uvicon-email": "e673",
    "uvicon-email-fill": "e683",
    "uvicon-minus-circle": "e6a5",
    "uvicon-plus-circle": "e603",
    "uvicon-plus-circle-fill": "e611",
    "uvicon-file-text": "e687",
    "uvicon-file-text-fill": "e67f",
    "uvicon-pushpin": "e6d1",
    "uvicon-pushpin-fill": "e6b6",
    "uvicon-grid": "e68c",
    "uvicon-grid-fill": "e698",
    "uvicon-play-circle": "e6af",
    "uvicon-play-circle-fill": "e62a",
    "uvicon-pause-circle-fill": "e60c",
    "uvicon-pause": "e61c",
    "uvicon-pause-circle": "e696",
    "uvicon-gift-fill": "e6b0",
    "uvicon-gift": "e680",
    "uvicon-kefu-ermai": "e660",
    "uvicon-server-fill": "e610",
    "uvicon-coupon-fill": "e64c",
    "uvicon-coupon": "e65f",
    "uvicon-integral": "e693",
    "uvicon-integral-fill": "e6b1",
    "uvicon-home-fill": "e68e",
    "uvicon-home": "e67b",
    "uvicon-account": "e63a",
    "uvicon-account-fill": "e653",
    "uvicon-thumb-down-fill": "e628",
    "uvicon-thumb-down": "e60a",
    "uvicon-thumb-up": "e612",
    "uvicon-thumb-up-fill": "e62c",
    "uvicon-lock-fill": "e6a6",
    "uvicon-lock-open": "e68d",
    "uvicon-lock-opened-fill": "e6a1",
    "uvicon-lock": "e69d",
    "uvicon-red-packet": "e6c3",
    "uvicon-photo-fill": "e6b4",
    "uvicon-photo": "e60d",
    "uvicon-volume-off-fill": "e6c8",
    "uvicon-volume-off": "e6bd",
    "uvicon-volume-fill": "e624",
    "uvicon-volume": "e605",
    "uvicon-download": "e670",
    "uvicon-arrow-up-fill": "e636",
    "uvicon-arrow-down-fill": "e638",
    "uvicon-play-left-fill": "e6ae",
    "uvicon-play-right-fill": "e6ad",
    "uvicon-arrow-downward": "e634",
    "uvicon-arrow-leftward": "e63b",
    "uvicon-arrow-rightward": "e644",
    "uvicon-arrow-upward": "e641",
    "uvicon-arrow-down": "e63e",
    "uvicon-arrow-right": "e63c",
    "uvicon-arrow-left": "e646",
    "uvicon-arrow-up": "e633",
    "uvicon-skip-back-left": "e6c5",
    "uvicon-skip-forward-right": "e61f",
    "uvicon-arrow-left-double": "e637",
    "uvicon-man": "e675",
    "uvicon-woman": "e626",
    "uvicon-en": "e6b8",
    "uvicon-twitte": "e607",
    "uvicon-twitter-circle-fill": "e6cf"
  };
  var props$6 = {
    props: __spreadValues({
      // 图标类名
      name: {
        type: String,
        default: ""
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: "#606266"
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: "16px"
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: false
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: null
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: ""
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: "uvicon"
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: ""
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: "right"
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: "15px"
      },
      // label的颜色
      labelColor: {
        type: String,
        default: "#606266"
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: "3px"
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: "aspectFit"
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: ""
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: ""
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: 0
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: false
      }
    }, (_f = (_e = uni.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.icon)
  };
  var _style_0$9 = { "uv-icon": { "": { "alignItems": "center" } }, "uv-icon--left": { "": { "flexDirection": "row-reverse", "alignItems": "center" } }, "uv-icon--right": { "": { "flexDirection": "row", "alignItems": "center" } }, "uv-icon--top": { "": { "flexDirection": "column-reverse", "justifyContent": "center" } }, "uv-icon--bottom": { "": { "flexDirection": "column", "justifyContent": "center" } }, "uv-icon__icon": { "": { "fontFamily": "uvicon-iconfont", "position": "relative", "flexDirection": "row", "alignItems": "center" } }, "uv-icon__icon--primary": { "": { "color": "#3c9cff" } }, "uv-icon__icon--success": { "": { "color": "#5ac725" } }, "uv-icon__icon--error": { "": { "color": "#f56c6c" } }, "uv-icon__icon--warning": { "": { "color": "#f9ae3d" } }, "uv-icon__icon--info": { "": { "color": "#909399" } } };
  var _export_sfc = (sfc, props22) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props22) {
      target[key] = val;
    }
    return target;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uvicon-iconfont",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main$c = {
    name: "uv-icon",
    emits: ["click"],
    mixins: [mpMixin, mixin, props$6],
    data() {
      return {
        colorType: [
          "primary",
          "success",
          "info",
          "error",
          "warning"
        ]
      };
    },
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix);
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && this.colorType.includes(this.color))
          classes.push("uv-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.$uv.addUnit(this.size),
          lineHeight: this.$uv.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: this.$uv.addUnit(this.top)
        };
        if (this.color && !this.colorType.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        const isBase64 = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
        return this.name.indexOf("/") !== -1 || isBase64;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$uv.addUnit(this.width) : this.$uv.addUnit(this.size);
        style.height = this.height ? this.$uv.addUnit(this.height) : this.$uv.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        const code2 = icons["uvicon-" + this.name];
        if (!code2) {
          return code2 ? unescape(`%u${code2}`) : ["uvicon"].indexOf(this.customPrefix) > -1 ? unescape(`%u${this.name}`) : "";
        }
        return code2 ? unescape(`%u${code2}`) : ["uvicon"].indexOf(this.customPrefix) > -1 ? this.name : "";
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: (0, import_vue.normalizeClass)(["uv-icon", ["uv-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
        renderWhole: true
      },
      [
        $options.isImg ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
          key: 0,
          class: "uv-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: (0, import_vue.normalizeStyle)([$options.imgStyle, _ctx.$uv.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
          key: 1,
          class: (0, import_vue.normalizeClass)(["uv-icon__icon", $options.uClasses]),
          style: (0, import_vue.normalizeStyle)([$options.iconStyle, _ctx.$uv.addStyle(_ctx.customStyle)]),
          hoverClass: _ctx.hoverClass
        }, (0, import_vue.toDisplayString)($options.icon), 15, ["hoverClass"])),
        (0, import_vue.createCommentVNode)(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
        _ctx.label !== "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "u-text",
          {
            key: 2,
            class: "uv-icon__label",
            style: (0, import_vue.normalizeStyle)({
              color: _ctx.labelColor,
              fontSize: _ctx.$uv.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? _ctx.$uv.addUnit(_ctx.space) : 0
            })
          },
          (0, import_vue.toDisplayString)(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : (0, import_vue.createCommentVNode)("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["styles", [_style_0$9]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-icon/components/uv-icon/uv-icon.vue"]]);
  var uvBadgeProps = {
    props: __spreadValues({
      // 是否显示圆点
      isDot: {
        type: Boolean,
        default: false
      },
      // 显示的内容
      value: {
        type: [Number, String],
        default: ""
      },
      // 是否显示
      show: {
        type: Boolean,
        default: true
      },
      // 最大值，超过最大值会显示 '{max}+'
      max: {
        type: [Number, String],
        default: 999
      },
      // 主题类型，error|warning|success|primary
      type: {
        type: [String, void 0, null],
        default: "error"
      },
      // 当数值为 0 时，是否展示 Badge
      showZero: {
        type: Boolean,
        default: false
      },
      // 背景颜色，优先级比type高，如设置，type参数会失效
      bgColor: {
        type: [String, null],
        default: null
      },
      // 字体颜色
      color: {
        type: [String, null],
        default: null
      },
      // 徽标形状，circle-四角均为圆角，horn-左下角为直角
      shape: {
        type: [String, void 0, null],
        default: "circle"
      },
      // 设置数字的显示方式，overflow|ellipsis|limit
      // overflow会根据max字段判断，超出显示`${max}+`
      // ellipsis会根据max判断，超出显示`${max}...`
      // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
      numberType: {
        type: [String, void 0, null],
        default: "overflow"
      },
      // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
      offset: {
        type: Array,
        default: () => []
      },
      // 是否反转背景和字体颜色
      inverted: {
        type: Boolean,
        default: false
      },
      // 是否绝对定位
      absolute: {
        type: Boolean,
        default: false
      }
    }, (_h = (_g = uni.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.badge)
  };
  var _style_0$8 = { "uv-badge": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "flexDirection": "row", "lineHeight": 11, "textAlign": "center", "fontSize": 11, "color": "#FFFFFF" } }, "uv-badge--dot": { "": { "height": 8, "width": 8 } }, "uv-badge--inverted": { "": { "fontSize": 13 } }, "uv-badge--not-dot": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5 } }, "uv-badge--horn": { "": { "borderBottomLeftRadius": 0 } }, "uv-badge--primary": { "": { "backgroundColor": "#3c9cff" } }, "uv-badge--primary--inverted": { "": { "color": "#3c9cff" } }, "uv-badge--error": { "": { "backgroundColor": "#f56c6c" } }, "uv-badge--error--inverted": { "": { "color": "#f56c6c" } }, "uv-badge--success": { "": { "backgroundColor": "#5ac725" } }, "uv-badge--success--inverted": { "": { "color": "#5ac725" } }, "uv-badge--info": { "": { "backgroundColor": "#909399" } }, "uv-badge--info--inverted": { "": { "color": "#909399" } }, "uv-badge--warning": { "": { "backgroundColor": "#f9ae3d" } }, "uv-badge--warning--inverted": { "": { "color": "#f9ae3d" } } };
  var _sfc_main$b = {
    name: "uv-badge",
    mixins: [mpMixin, mixin, uvBadgeProps],
    computed: {
      // 是否将badge中心与父组件右上角重合
      boxStyle() {
        let style = {};
        return style;
      },
      // 整个组件的样式
      badgeStyle() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        if (this.bgColor && !this.inverted) {
          style.backgroundColor = this.bgColor;
        }
        if (this.absolute) {
          style.position = "absolute";
          if (this.offset.length) {
            const top = this.offset[0];
            const right = this.offset[1] || top;
            style.top = this.$uv.addUnit(top);
            style.right = this.$uv.addUnit(right);
          }
        }
        return style;
      },
      showValue() {
        switch (this.numberType) {
          case "overflow":
            return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
          case "ellipsis":
            return Number(this.value) > Number(this.max) ? "..." : this.value;
          case "limit":
            return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
          default:
            return Number(this.value);
        }
      },
      propsType() {
        return this.type || "error";
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "u-text",
      {
        key: 0,
        class: (0, import_vue.normalizeClass)([[_ctx.isDot ? "uv-badge--dot" : "uv-badge--not-dot", _ctx.inverted && "uv-badge--inverted", _ctx.shape === "horn" && "uv-badge--horn", `uv-badge--${$options.propsType}${_ctx.inverted ? "--inverted" : ""}`], "uv-badge"]),
        style: (0, import_vue.normalizeStyle)([_ctx.$uv.addStyle(_ctx.customStyle), $options.badgeStyle])
      },
      (0, import_vue.toDisplayString)(_ctx.isDot ? "" : $options.showValue),
      7
      /* TEXT, CLASS, STYLE */
    )) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["styles", [_style_0$8]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-badge/components/uv-badge/uv-badge.vue"]]);
  var props$5 = {
    props: __spreadValues({
      // 滑块的移动过渡时间，单位ms
      duration: {
        type: Number,
        default: 300
      },
      // tabs标签数组
      list: {
        type: Array,
        default: () => []
      },
      // 滑块颜色
      lineColor: {
        type: String,
        default: "#3c9cff"
      },
      // 菜单选择中时的样式
      activeStyle: {
        type: [String, Object],
        default: () => ({
          color: "#303133"
        })
      },
      // 菜单非选中时的样式
      inactiveStyle: {
        type: [String, Object],
        default: () => ({
          color: "#606266"
        })
      },
      // 滑块长度
      lineWidth: {
        type: [String, Number],
        default: 20
      },
      // 滑块高度
      lineHeight: {
        type: [String, Number],
        default: 3
      },
      // 滑块背景显示大小，当滑块背景设置为图片时使用
      lineBgSize: {
        type: String,
        default: "cover"
      },
      // 菜单item的样式
      itemStyle: {
        type: [String, Object],
        default: () => ({
          height: "44px"
        })
      },
      // 菜单是否可滚动
      scrollable: {
        type: Boolean,
        default: true
      },
      // 当前选中标签的索引
      current: {
        type: [Number, String],
        default: 0
      },
      // 默认读取的键名
      keyName: {
        type: String,
        default: "name"
      }
    }, (_j = (_i = uni.$uv) == null ? void 0 : _i.props) == null ? void 0 : _j.tabs)
  };
  var _style_0$7 = { "uv-tabs__wrapper": { "": { "flexDirection": "row", "alignItems": "center" } }, "uv-tabs__wrapper__scroll-view-wrapper": { "": { "flex": 1 } }, "uv-tabs__wrapper__scroll-view": { "": { "flexDirection": "row", "flex": 1 } }, "uv-tabs__wrapper__nav": { "": { "flexDirection": "row", "position": "relative" } }, "uv-tabs__wrapper__nav__item": { "": { "paddingTop": 0, "paddingRight": 11, "paddingBottom": 0, "paddingLeft": 11, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "uv-tabs__wrapper__nav__item__text": { "": { "fontSize": 15, "color": "#606266" } }, "uv-tabs__wrapper__nav__item__text--disabled": { "": { "!color": "#c8c9cc" } }, "uv-tabs__wrapper__nav__line": { "": { "height": 3, "backgroundColor": "#3c9cff", "width": 30, "position": "absolute", "bottom": 2, "borderRadius": 100, "transitionProperty": "transform", "transitionDuration": 300 } }, "@TRANSITION": { "uv-tabs__wrapper__nav__line": { "property": "transform", "duration": 300 } } };
  var animation$1 = requireNativePlugin("animation");
  var dom = requireNativePlugin("dom");
  var _sfc_main$a = {
    name: "uv-tabs",
    emits: ["click", "change"],
    mixins: [mpMixin, mixin, props$5],
    data() {
      return {
        firstTime: true,
        scrollLeft: 0,
        scrollViewWidth: 0,
        lineOffsetLeft: 0,
        tabsRect: {
          left: 0
        },
        innerCurrent: 0,
        moving: false
      };
    },
    watch: {
      current: {
        immediate: true,
        handler(newValue, oldValue) {
          if (newValue !== this.innerCurrent) {
            this.innerCurrent = newValue;
            this.$nextTick(() => {
              this.resize();
            });
          }
        }
      },
      // list变化时，重新渲染list各项信息
      list() {
        this.$nextTick(() => {
          this.resize();
        });
      }
    },
    computed: {
      textStyle() {
        return (index2) => {
          const style = {};
          const customeStyle = index2 == this.innerCurrent ? this.$uv.addStyle(this.activeStyle) : this.$uv.addStyle(
            this.inactiveStyle
          );
          if (this.list[index2].disabled) {
            style.color = "#c8c9cc";
          }
          return this.$uv.deepMerge(customeStyle, style);
        };
      },
      propsBadge() {
        return uvBadgeProps;
      }
    },
    mounted() {
      return __async(this, null, function* () {
        this.init();
      });
    },
    methods: {
      setLineLeft() {
        const tabItem = this.list[this.innerCurrent];
        if (!tabItem) {
          return;
        }
        let lineOffsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => total + curr.rect.width, 0);
        let lineWidth = this.$uv.getPx(this.lineWidth);
        if (this.$uv.test.number(this.lineWidth) && this.$uv.unit) {
          lineWidth = this.$uv.getPx(`${this.lineWidth}${this.$uv.unit}`);
        }
        this.lineOffsetLeft = lineOffsetLeft + (tabItem.rect.width - lineWidth) / 2;
        this.animation(this.lineOffsetLeft, this.firstTime ? 0 : parseInt(this.duration));
        if (this.firstTime) {
          setTimeout(() => {
            this.firstTime = false;
          }, 20);
        }
      },
      // nvue下设置滑块的位置
      animation(x, duration = 0) {
        const ref22 = this.$refs["uv-tabs__wrapper__nav__line"];
        animation$1.transition(ref22, {
          styles: {
            transform: `translateX(${x}px)`
          },
          duration
        });
      },
      // 点击某一个标签
      clickHandler(item, index2) {
        this.$emit("click", __spreadProps(__spreadValues({}, item), {
          index: index2
        }));
        if (item.disabled)
          return;
        if (this.innerCurrent != index2) {
          this.$emit("change", __spreadProps(__spreadValues({}, item), {
            index: index2
          }));
        }
        this.innerCurrent = index2;
        this.$nextTick(() => {
          this.$uv.sleep(30).then((res) => {
            this.resize();
          });
        });
      },
      init() {
        this.$uv.sleep().then(() => {
          this.resize();
        });
      },
      setScrollLeft() {
        const tabRect = this.list[this.innerCurrent];
        const offsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => {
          return total + curr.rect.width;
        }, 0);
        const windowWidth = this.$uv.sys().windowWidth;
        let scrollLeft = offsetLeft - (this.tabsRect.width - tabRect.rect.width) / 2 - (windowWidth - this.tabsRect.right) / 2 + this.tabsRect.left / 2;
        scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - this.tabsRect.width);
        this.scrollLeft = Math.max(0, scrollLeft);
      },
      // 获取所有标签的尺寸
      resize() {
        if (this.list.length === 0) {
          return;
        }
        Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(([tabsRect, itemRect = []]) => {
          this.tabsRect = tabsRect;
          this.scrollViewWidth = 0;
          itemRect.map((item, index2) => {
            this.scrollViewWidth += item.width;
            this.list[index2].rect = item;
          });
          this.setLineLeft();
          this.setScrollLeft();
        });
      },
      // 获取导航菜单的尺寸
      getTabsRect() {
        return new Promise((resolve) => {
          this.queryRect("uv-tabs__wrapper__scroll-view").then((size) => resolve(size));
        });
      },
      // 获取所有标签的尺寸
      getAllItemRect() {
        return new Promise((resolve) => {
          const promiseAllArr = this.list.map((item, index2) => this.queryRect(
            `uv-tabs__wrapper__nav__item-${index2}`,
            true
          ));
          Promise.all(promiseAllArr).then((sizes) => resolve(sizes));
        });
      },
      // 获取各个标签的尺寸
      queryRect(el, item) {
        return new Promise((resolve) => {
          dom.getComponentRect(item ? this.$refs[el][0] : this.$refs[el], (res) => {
            resolve(res.size);
          });
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_badge = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-badge"), __easycom_1$2);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: "uv-tabs",
        style: (0, import_vue.normalizeStyle)([_ctx.$uv.addStyle(_ctx.customStyle)]),
        renderWhole: true
      },
      [
        (0, import_vue.createElementVNode)("view", { class: "uv-tabs__wrapper" }, [
          (0, import_vue.renderSlot)(_ctx.$slots, "left"),
          (0, import_vue.createElementVNode)("view", { class: "uv-tabs__wrapper__scroll-view-wrapper" }, [
            (0, import_vue.createElementVNode)("scroll-view", {
              scrollX: _ctx.scrollable,
              scrollLeft: $data.scrollLeft,
              scrollWithAnimation: "",
              class: "uv-tabs__wrapper__scroll-view",
              showScrollbar: false,
              ref: "uv-tabs__wrapper__scroll-view"
            }, [
              (0, import_vue.createElementVNode)(
                "view",
                {
                  class: "uv-tabs__wrapper__nav",
                  ref: "uv-tabs__wrapper__nav",
                  style: (0, import_vue.normalizeStyle)({
                    flex: _ctx.scrollable ? "" : 1
                  })
                },
                [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)(_ctx.list, (item, index2) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                        class: (0, import_vue.normalizeClass)(["uv-tabs__wrapper__nav__item", [`uv-tabs__wrapper__nav__item-${index2}`, item.disabled && "uv-tabs__wrapper__nav__item--disabled"]]),
                        key: index2,
                        onClick: ($event) => $options.clickHandler(item, index2),
                        ref_for: true,
                        ref: `uv-tabs__wrapper__nav__item-${index2}`,
                        style: (0, import_vue.normalizeStyle)([{ flex: _ctx.scrollable ? "" : 1 }, _ctx.$uv.addStyle(_ctx.itemStyle)])
                      }, [
                        (0, import_vue.createElementVNode)(
                          "u-text",
                          {
                            class: (0, import_vue.normalizeClass)([[item.disabled && "uv-tabs__wrapper__nav__item__text--disabled"], "uv-tabs__wrapper__nav__item__text"]),
                            style: (0, import_vue.normalizeStyle)([$options.textStyle(index2)])
                          },
                          (0, import_vue.toDisplayString)(item[_ctx.keyName]),
                          7
                          /* TEXT, CLASS, STYLE */
                        ),
                        (0, import_vue.createVNode)(_component_uv_badge, {
                          show: !!(item.badge && (item.badge.show || item.badge.isDot || item.badge.value)),
                          isDot: item.badge && item.badge.isDot || $options.propsBadge.isDot,
                          value: item.badge && item.badge.value || $options.propsBadge.value,
                          max: item.badge && item.badge.max || $options.propsBadge.max,
                          type: item.badge && item.badge.type || $options.propsBadge.type,
                          showZero: item.badge && item.badge.showZero || $options.propsBadge.showZero,
                          bgColor: item.badge && item.badge.bgColor || $options.propsBadge.bgColor,
                          color: item.badge && item.badge.color || $options.propsBadge.color,
                          shape: item.badge && item.badge.shape || $options.propsBadge.shape,
                          numberType: item.badge && item.badge.numberType || $options.propsBadge.numberType,
                          inverted: item.badge && item.badge.inverted || $options.propsBadge.inverted,
                          customStyle: "margin-left: 4px;"
                        }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                      ], 14, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  (0, import_vue.createElementVNode)(
                    "view",
                    {
                      class: "uv-tabs__wrapper__nav__line",
                      ref: "uv-tabs__wrapper__nav__line",
                      style: (0, import_vue.normalizeStyle)([{
                        width: _ctx.$uv.addUnit(_ctx.lineWidth),
                        height: $data.firstTime ? 0 : _ctx.$uv.addUnit(_ctx.lineHeight),
                        background: _ctx.lineColor,
                        backgroundSize: _ctx.lineBgSize
                      }])
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ],
                4
                /* STYLE */
              )
            ], 8, ["scrollX", "scrollLeft"])
          ]),
          (0, import_vue.renderSlot)(_ctx.$slots, "right")
        ])
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["styles", [_style_0$7]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-tabs/components/uv-tabs/uv-tabs.vue"]]);
  var _style_0$6 = { "nvueicon": { "": { "fontFamily": "nvueicon" } }, "ua__tabbar": { "": { "flexDirection": "row" }, ".fixed": { "paddingTop": "110rpx" }, ".transparent": { "paddingTop": 0 } }, "ua__tabbar-wrap": { "": { "flex": 1, "flexDirection": "row", "backgroundColor": "#ffffff", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)", "color": "#333333", "height": "110rpx", "position": "relative", "zIndex": 2023, "content:after": "''", "height:after": 100, "width:after": 100, "position:after": "absolute", "left:after": 0, "right:after": 0, "zIndex:after": -1 }, ".is-border": { "borderTopColor": "rgba(171,171,171,0.1)", "boxShadow": "0 -1px 2px rgba(171,171,171,.05)" }, ".ua__tabbar.fixed ": { "left": 0, "right": 0, "maxWidth": "750px", "position": "fixed", "bottom": 0 } }, "ua__tabbar-item": { "": { "flex": 1, "alignItems": "center", "justifyContent": "center", "height": "110rpx", "position": "relative" } }, "ua__tabbar-icon": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": 0, "marginBottom": 0, "minHeight": "50rpx", "position": "relative" }, ".dock": { "flex": 1 } }, "dock-bg": { ".ua__tabbar-icon.dock ": { "borderRadius": "1000rpx", "alignItems": "center", "justifyContent": "center", "height": "100rpx", "width": "100rpx" } }, "dock-cover": { ".ua__tabbar-icon.dock ": { "backgroundColor": "#2979ff", "borderRadius": "1000rpx", "alignItems": "center", "justifyContent": "center", "height": 0, "width": "100rpx" }, ".ua__tabbar-icon.dock .is-border": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "rgba(171,171,171,0.1)", "boxShadow": "0 -1px 2px rgba(171,171,171,.1)" } }, "iconfont": { ".ua__tabbar-item ": { "color": "#9d9ea5", "fontSize": "40rpx", "transitionProperty": "color", "transitionDuration": 300 }, ".ua__tabbar-item.on ": { "color": "#2979ff" } }, "iconimg": { ".ua__tabbar-item ": { "fontSize": "36rpx", "height": "36rpx", "width": "36rpx" } }, "ua__tabbar-title": { "": { "position": "relative", "transitionProperty": "color", "transitionDuration": 300 } }, "ua__tabbar-title__text": { "": { "color": "#9d9ea5", "fontSize": "24rpx" }, ".ua__tabbar-item.on ": { "color": "#2979ff" } }, "ua__tabbar-badge": { "": { "position": "absolute", "top": "5rpx", "left": 50, "marginLeft": "-10rpx" } }, "ua__tabbar-badgeDot": { "": { "position": "absolute", "top": "10rpx", "left": 50, "marginLeft": "-15rpx" } }, "ua__tabbar-only__badge": { "": { "position": "absolute", "top": 50, "left": 50, "marginLeft": "-10rpx", "marginTop": "-80rpx" } }, "ua__tabbar-only__badgeDot": { "": { "position": "absolute", "top": 50, "left": 50, "marginLeft": "-15rpx", "marginTop": "-60rpx" } }, "@TRANSITION": { "iconfont": { "property": "color", "duration": 300 }, "ua__tabbar-title": { "property": "color", "duration": 300 } } };
  var _sfc_main$9 = {
    __name: "ua-tabbar",
    props: {
      current: { type: [Number, String], default: 0 },
      bgcolor: { type: String, default: "#fff" },
      color: { type: String, default: "#9d9ea5" },
      // 激活颜色
      activeColor: { type: String, default: "#2979ff" },
      fixed: { type: [Boolean, String], default: false },
      transparent: { type: [Boolean, String], default: false },
      // 是否中间凸起按钮
      dock: { type: [Boolean, String], default: true },
      zIndex: { type: [Number, String], default: "2023" },
      customPrefix: { type: String, default: "welive-icon" },
      border: { type: [Boolean, String], default: true },
      // 是否隐藏原生tabbar
      hideTabBar: { type: Boolean, default: true },
      // tab选项
      tabs: {
        type: Array,
        default: () => [
          {
            path: `/pages/index/index`,
            icon: `\uE76E`,
            title: `\u9996\u9875`
          },
          {
            path: `/pages/video/index`,
            icon: `\uE87B`,
            title: `\u77ED\u89C6\u9891`
          },
          {
            path: `/pages/live/index`,
            icon: `/static/logo.png`,
            dock: true,
            iconSize: `70rpx`
          },
          {
            path: `/pages/cart/index`,
            icon: `\uE734`,
            title: `\u8D2D\u7269\u8F66`,
            badge: 3
          },
          {
            path: `/pages/my/index`,
            icon: `\uE712`,
            title: `\u6211\u7684`,
            dot: true
          }
        ]
      }
    },
    emits: ["change"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props22 = __props;
      const emit = __emit;
      var domModule2 = weex.requireModule("dom");
      domModule2.addRule("fontFace", {
        "fontFamily": "nvueicon",
        "src": "url('/static/fonts/iconfont.ttf')"
      });
      if (props22.hideTabBar)
        uni.hideTabBar();
      const currentTabIndex = (0, import_vue.ref)(props22.current);
      const isImg = (0, import_vue.computed)(() => {
        return (str) => {
          if (typeof str !== "string")
            return;
          return /\.(gif|jpg|jpeg|png|bmp|webp|svg|tiff|psd)$/i.test(str);
        };
      });
      const tabIcon = (0, import_vue.computed)(() => {
        return (index2) => {
          const item = props22.tabs[index2];
          return currentTabIndex.value === index2 ? item.activeIcon || item.icon : item.icon;
        };
      });
      const tabIconUnicode = (0, import_vue.computed)(() => {
        return (index2) => {
          const item = props22.tabs[index2];
          return currentTabIndex.value === index2 && item.activeIcon ? item.activeIcon.charAt(1) == "" ? item.activeIcon : "" : item.icon.charAt(1) == "" ? item.icon : "";
        };
      });
      const tabColor = (0, import_vue.computed)(() => {
        return (index2) => {
          const item = props22.tabs[index2];
          return currentTabIndex.value === index2 ? item.activeColor || props22.activeColor : item.color || props22.color;
        };
      });
      const route2 = (0, import_vue.computed)(() => {
        let pages2 = getCurrentPages();
        return pages2[pages2.length - 1].route;
      });
      (0, import_vue.onMounted)(() => {
        selectRoute(route2.value);
      });
      (0, import_vue.onUnmounted)(() => {
        uni.removeInterceptor("switchTab");
      });
      uni.addInterceptor("switchTab", {
        success(e) {
          selectRoute(route2.value);
        }
      });
      const selectRoute = (curPath) => {
        curPath = curPath.substr(0, 1) == "/" ? curPath : "/" + curPath;
        props22.tabs.map((item, index2) => {
          if (item.path == curPath) {
            currentTabIndex.value = index2;
          }
        });
      };
      const switchTabs = (index2, item) => {
        emit("change", index2);
        if (item.path) {
          uni.switchTab({
            url: item.path
          });
        } else {
          currentTabIndex.value = index2;
        }
      };
      const __returned__ = { props: props22, emit, get domModule() {
        return domModule2;
      }, set domModule(v) {
        domModule2 = v;
      }, currentTabIndex, isImg, tabIcon, tabIconUnicode, tabColor, route: route2, selectRoute, switchTabs, onMounted: import_vue.onMounted, onUnmounted: import_vue.onUnmounted, ref: import_vue.ref, computed: import_vue.computed, watch: import_vue.watch, nextTick: import_vue.nextTick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: (0, import_vue.normalizeClass)(["ua__tabbar", { "fixed": $props.fixed || $props.transparent, "transparent": $props.transparent }]),
        renderWhole: true
      },
      [
        (0, import_vue.createElementVNode)(
          "view",
          {
            class: (0, import_vue.normalizeClass)(["ua__tabbar-wrap flexbox flex-alignc", { "is-border": $props.border }]),
            style: (0, import_vue.normalizeStyle)({ "background": $props.bgcolor, "z-index": $props.zIndex })
          },
          [
            ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              null,
              (0, import_vue.renderList)($props.tabs, (item, index2) => {
                return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  key: index2,
                  class: (0, import_vue.normalizeClass)(["ua__tabbar-item flexbox flex-col", $setup.currentTabIndex == index2 ? "on" : ""]),
                  onClick: ($event) => $setup.switchTabs(index2, item)
                }, [
                  item.icon ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "view",
                    {
                      key: 0,
                      class: (0, import_vue.normalizeClass)(["ua__tabbar-icon", { "dock": item.dock }])
                    },
                    [
                      $props.dock && item.dock ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                        import_vue.Fragment,
                        { key: 0 },
                        [
                          (0, import_vue.createElementVNode)(
                            "view",
                            {
                              class: "dock-bg flexbox",
                              style: (0, import_vue.normalizeStyle)({ "z-index": item.zIndex + 1 })
                            },
                            [
                              $setup.isImg(item.icon) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
                                key: 0,
                                class: "iconimg",
                                src: $setup.tabIcon(index2),
                                style: (0, import_vue.normalizeStyle)({ "height": item.iconSize, "width": item.iconSize }),
                                mode: "widthFix"
                              }, null, 12, ["src"])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                                "u-text",
                                {
                                  key: 1,
                                  class: (0, import_vue.normalizeClass)(["nvueicon iconfont", [$props.customPrefix, $setup.tabIcon(index2)]]),
                                  style: (0, import_vue.normalizeStyle)({ "color": $setup.tabColor(index2), "font-size": item.iconSize })
                                },
                                (0, import_vue.toDisplayString)($setup.tabIconUnicode(index2)),
                                7
                                /* TEXT, CLASS, STYLE */
                              ))
                            ],
                            4
                            /* STYLE */
                          ),
                          (0, import_vue.createElementVNode)(
                            "view",
                            {
                              class: (0, import_vue.normalizeClass)(["dock-cover flexbox", { "is-border": $props.border }]),
                              style: (0, import_vue.normalizeStyle)({ "background": item.bgcolor || $props.bgcolor, "z-index": item.zIndex })
                            },
                            null,
                            6
                            /* CLASS, STYLE */
                          )
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                        import_vue.Fragment,
                        { key: 1 },
                        [
                          $setup.isImg(item.icon) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
                            key: 0,
                            class: "iconimg",
                            src: $setup.tabIcon(index2),
                            style: (0, import_vue.normalizeStyle)({ "height": item.iconSize, "width": item.iconSize }),
                            mode: "widthFix"
                          }, null, 12, ["src"])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                            "u-text",
                            {
                              key: 1,
                              class: (0, import_vue.normalizeClass)(["nvueicon iconfont", [$props.customPrefix, $setup.tabIcon(index2)]]),
                              style: (0, import_vue.normalizeStyle)({ "color": $setup.tabColor(index2), "font-size": item.iconSize })
                            },
                            (0, import_vue.toDisplayString)($setup.tabIconUnicode(index2)),
                            7
                            /* TEXT, CLASS, STYLE */
                          ))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ],
                    2
                    /* CLASS */
                  )) : (0, import_vue.createCommentVNode)("v-if", true),
                  item.title ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                    key: 1,
                    class: "ua__tabbar-title"
                  }, [
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      {
                        class: "ua__tabbar-title__text",
                        style: (0, import_vue.normalizeStyle)({ "color": $setup.tabColor(index2) })
                      },
                      (0, import_vue.toDisplayString)(item.title),
                      5
                      /* TEXT, STYLE */
                    )
                  ])) : (0, import_vue.createCommentVNode)("v-if", true),
                  (0, import_vue.createCommentVNode)(" \u5706\u70B9 "),
                  item.icon && item.title ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    { key: 2 },
                    [
                      item.badge ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                        "u-text",
                        {
                          key: 0,
                          class: "ua__badge ua__tabbar-badge"
                        },
                        (0, import_vue.toDisplayString)(item.badge),
                        1
                        /* TEXT */
                      )) : (0, import_vue.createCommentVNode)("v-if", true),
                      item.dot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                        key: 1,
                        class: "ua__badge-dot ua__tabbar-badgeDot"
                      })) : (0, import_vue.createCommentVNode)("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    { key: 3 },
                    [
                      item.badge ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                        "u-text",
                        {
                          key: 0,
                          class: "ua__badge ua__tabbar-only__badge"
                        },
                        (0, import_vue.toDisplayString)(item.badge),
                        1
                        /* TEXT */
                      )) : (0, import_vue.createCommentVNode)("v-if", true),
                      item.dot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                        key: 1,
                        class: "ua__badge-dot ua__tabbar-only__badgeDot"
                      })) : (0, import_vue.createCommentVNode)("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ], 10, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["styles", [_style_0$6]], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-tabbar/ua-tabbar.vue"]]);
  var _sfc_main$8 = {
    __name: "ua-layout",
    props: {
      tabbar: { type: [Boolean, String], default: true }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props22 = __props;
      const __returned__ = { props: props22 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_tabbar = resolveEasycom((0, import_vue.resolveDynamicComponent)("ua-tabbar"), __easycom_2$2);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "ulive__container flexbox flex-col flex1",
      renderWhole: true
    }, [
      (0, import_vue.renderSlot)(_ctx.$slots, "header"),
      (0, import_vue.createCommentVNode)(" \u5185\u5BB9\u533A "),
      (0, import_vue.createElementVNode)("view", { class: "ulive__scrollview flex1" }, [
        (0, import_vue.renderSlot)(_ctx.$slots, "default")
      ]),
      (0, import_vue.renderSlot)(_ctx.$slots, "footer"),
      (0, import_vue.createCommentVNode)(" tabbar\u680F "),
      $props.tabbar ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_ua_tabbar, {
        key: 0,
        fixed: "",
        "z-index": "1000"
      })) : (0, import_vue.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-layout/ua-layout.vue"]]);
  var props$4 = {
    props: __spreadValues({
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      // 输入框类型
      // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
      // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
      // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
      // text-文本输入键盘
      type: {
        type: String,
        default: "text"
      },
      // 是否禁用输入框
      disabled: {
        type: Boolean,
        default: false
      },
      // 禁用状态时的背景色
      disabledColor: {
        type: String,
        default: "#f5f7fa"
      },
      // 是否显示清除控件
      clearable: {
        type: Boolean,
        default: false
      },
      // 是否密码类型
      password: {
        type: Boolean,
        default: false
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: -1
      },
      // 	输入框为空时的占位符
      placeholder: {
        type: String,
        default: null
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: "input-placeholder"
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: "color: #c0c4cc"
      },
      // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
      // https://uniapp.dcloud.io/component/input
      // https://uniapp.dcloud.io/component/textarea
      confirmType: {
        type: String,
        default: "done"
      },
      // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
      confirmHold: {
        type: Boolean,
        default: false
      },
      // focus时，点击页面的时候不收起键盘，微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: false
      },
      // 自动获取焦点
      // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
      focus: {
        type: Boolean,
        default: false
      },
      // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
      autoBlur: {
        type: Boolean,
        default: false
      },
      // 指定focus时光标的位置
      cursor: {
        type: [String, Number],
        default: -1
      },
      // 输入框聚焦时底部与键盘的距离
      cursorSpacing: {
        type: [String, Number],
        default: 30
      },
      // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
      selectionStart: {
        type: [String, Number],
        default: -1
      },
      // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
      selectionEnd: {
        type: [String, Number],
        default: -1
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: true
      },
      // 输入框内容对齐方式，可选值为：left|center|right
      inputAlign: {
        type: String,
        default: "left"
      },
      // 输入框字体的大小
      fontSize: {
        type: [String, Number],
        default: "14px"
      },
      // 输入框字体颜色
      color: {
        type: String,
        default: "#303133"
      },
      // 输入框前置图标
      prefixIcon: {
        type: String,
        default: ""
      },
      // 前置图标样式，对象或字符串
      prefixIconStyle: {
        type: [String, Object],
        default: ""
      },
      // 输入框后置图标
      suffixIcon: {
        type: String,
        default: ""
      },
      // 后置图标样式，对象或字符串
      suffixIconStyle: {
        type: [String, Object],
        default: ""
      },
      // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
      border: {
        type: String,
        default: "surround"
      },
      // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
      readonly: {
        type: Boolean,
        default: false
      },
      // 输入框形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: "square"
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: null
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }, (_l = (_k = uni.$uv) == null ? void 0 : _k.props) == null ? void 0 : _l.input)
  };
  var _style_0$5 = { "uv-border": { "": { "!borderWidth": 0.5, "!borderColor": "#dadbde", "borderStyle": "solid" } }, "uv-border-bottom": { "": { "!borderBottomWidth": 0.5, "!borderColor": "#dadbde", "borderBottomStyle": "solid" } }, "uv-input": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "flex": 1 } }, "uv-input--radius": { "": { "borderRadius": 4 } }, "uv-input--square": { "": { "borderRadius": 4 } }, "uv-input--no-radius": { "": { "borderRadius": 0 } }, "uv-input--circle": { "": { "borderRadius": 100 } }, "uv-input__content": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "uv-input__content__field-wrapper": { "": { "position": "relative", "flexDirection": "row", "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "flex": 1 } }, "uv-input__content__field-wrapper__field": { "": { "lineHeight": 26, "textAlign": "left", "color": "#303133", "height": 24, "fontSize": 15, "flex": 1 } }, "uv-input__content__clear": { "": { "width": 20, "height": 20, "borderRadius": 100, "backgroundColor": "#c6c7cb", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.82)", "marginLeft": 15 } }, "uv-input__content__subfix-icon": { "": { "marginLeft": 4 } }, "uv-input__content__prefix-icon": { "": { "marginRight": 4 } } };
  var _sfc_main$7 = {
    name: "uv-input",
    mixins: [mpMixin, mixin, props$4],
    data() {
      return {
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // 过滤处理方法
        innerFormatter: (value) => value
      };
    },
    created() {
      this.innerValue = this.modelValue;
    },
    watch: {
      value(newVal) {
        this.innerValue = newVal;
      },
      modelValue(newVal) {
        this.innerValue = newVal;
      }
    },
    computed: {
      // 是否显示清除控件
      isShowClear() {
        const { clearable, readonly, focused, innerValue } = this;
        return !!clearable && !readonly && !!focused && innerValue !== "";
      },
      // 组件的类名
      inputClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["uv-border", "uv-input--radius"]));
        classes.push(`uv-input--${shape}`);
        border === "bottom" && (classes = classes.concat([
          "uv-border-bottom",
          "uv-input--no-radius"
        ]));
        return classes.join(" ");
      },
      // 组件的样式
      wrapperStyle() {
        const style = {};
        if (this.disabled) {
          style.backgroundColor = this.disabledColor;
        }
        if (this.border === "none") {
          style.padding = "0";
        } else {
          style.paddingTop = "6px";
          style.paddingBottom = "6px";
          style.paddingLeft = "9px";
          style.paddingRight = "9px";
        }
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      },
      // 输入框的样式
      inputStyle() {
        const style = {
          color: this.color,
          fontSize: this.$uv.addUnit(this.fontSize),
          textAlign: this.inputAlign
        };
        return style;
      }
    },
    methods: {
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e) {
        this.innerFormatter = e;
      },
      // 当键盘输入时，触发input事件
      onInput(e) {
        let { value = "" } = e.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value);
        this.innerValue = value;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      // 输入框失去焦点时触发
      onBlur(event) {
        this.$emit("blur", event.detail.value);
        this.$uv.sleep(100).then(() => {
          this.focused = false;
        });
        this.$uv.formValidate(this, "blur");
      },
      // 输入框聚焦时触发
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      // 点击完成按钮时触发
      onConfirm(event) {
        this.$emit("confirm", this.innerValue);
      },
      // 键盘高度发生变化的时候触发此事件
      // 兼容性：微信小程序2.7.0+、App 3.1.0+
      onkeyboardheightchange(e) {
        this.$emit("keyboardheightchange", e);
      },
      // 内容发生变化，进行处理
      valueChange() {
        if (this.isClear)
          this.innerValue = "";
        const value = this.innerValue;
        this.$nextTick(() => {
          this.$emit("input", value);
          this.$emit("update:modelValue", value);
          this.$emit("change", value);
          this.$uv.formValidate(this, "change");
        });
      },
      // 点击清除控件
      onClear() {
        this.innerValue = "";
        this.isClear = true;
        this.$uv.sleep(200).then((res) => {
          this.isClear = false;
        });
        this.$nextTick(() => {
          this.$emit("clear");
          this.valueChange();
        });
      },
      /**
       * 在安卓nvue上，事件无法冒泡
       * 在某些时间，我们希望监听uv-from-item的点击事件，此时会导致点击uv-form-item内的uv-input后
       * 无法触发uv-form-item的点击事件，这里通过手动调用uv-form-item的方法进行触发
       */
      clickHandler() {
        if (this.$uv.os() === "android") {
          const formItem = this.$uv.$parent.call(this, "uv-form-item");
          if (formItem) {
            formItem.clickHandler();
          }
        }
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_icon = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-icon"), __easycom_0$2);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: (0, import_vue.normalizeClass)(["uv-input", $options.inputClass]),
        style: (0, import_vue.normalizeStyle)([$options.wrapperStyle]),
        renderWhole: true
      },
      [
        (0, import_vue.createElementVNode)("view", { class: "uv-input__content" }, [
          (0, import_vue.createElementVNode)("view", { class: "uv-input__content__prefix-icon" }, [
            (0, import_vue.renderSlot)(_ctx.$slots, "prefix", {}, () => [
              _ctx.prefixIcon ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uv_icon, {
                key: 0,
                name: _ctx.prefixIcon,
                size: "18",
                customStyle: _ctx.prefixIconStyle
              }, null, 8, ["name", "customStyle"])) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ]),
          (0, import_vue.createElementVNode)("view", {
            class: "uv-input__content__field-wrapper",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
          }, [
            (0, import_vue.createCommentVNode)(" \u6839\u636Euni-app\u7684input\u7EC4\u4EF6\u6587\u6863\uFF0CH5\u548CAPP\u4E2D\u53EA\u8981\u58F0\u660E\u4E86password\u53C2\u6570(\u65E0\u8BBAtrue\u8FD8\u662Ffalse)\uFF0Ctype\u5747\u5931\u6548\uFF0C\u6B64\u65F6\r\n				\u4E3A\u4E86\u9632\u6B62type=number\u65F6\uFF0C\u53C8\u5B58\u5728password\u5C5E\u6027\uFF0Ctype\u65E0\u6548\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6Epassword\u4E3Aundefined\r\n			 "),
            (0, import_vue.createElementVNode)("u-input", {
              class: "uv-input__content__field-wrapper__field",
              style: (0, import_vue.normalizeStyle)([$options.inputStyle]),
              type: _ctx.type,
              focus: _ctx.focus,
              cursor: _ctx.cursor,
              value: $data.innerValue,
              autoBlur: _ctx.autoBlur,
              disabled: _ctx.disabled || _ctx.readonly,
              maxlength: _ctx.maxlength,
              placeholder: _ctx.placeholder,
              placeholderStyle: _ctx.placeholderStyle,
              placeholderClass: _ctx.placeholderClass,
              confirmType: _ctx.confirmType,
              confirmHold: _ctx.confirmHold,
              holdKeyboard: _ctx.holdKeyboard,
              cursorSpacing: _ctx.cursorSpacing,
              adjustPosition: _ctx.adjustPosition,
              selectionEnd: _ctx.selectionEnd,
              selectionStart: _ctx.selectionStart,
              password: _ctx.password || _ctx.type === "password" || void 0,
              ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
              onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "focus", "cursor", "value", "autoBlur", "disabled", "maxlength", "placeholder", "placeholderStyle", "placeholderClass", "confirmType", "confirmHold", "holdKeyboard", "cursorSpacing", "adjustPosition", "selectionEnd", "selectionStart", "password", "ignoreCompositionEvent"])
          ]),
          $options.isShowClear ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
            key: 0,
            class: "uv-input__content__clear",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
          }, [
            (0, import_vue.createVNode)(_component_uv_icon, {
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            })
          ])) : (0, import_vue.createCommentVNode)("v-if", true),
          (0, import_vue.createElementVNode)("view", { class: "uv-input__content__subfix-icon" }, [
            (0, import_vue.renderSlot)(_ctx.$slots, "suffix", {}, () => [
              _ctx.suffixIcon ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uv_icon, {
                key: 0,
                name: _ctx.suffixIcon,
                size: "18",
                customStyle: _ctx.suffixIconStyle
              }, null, 8, ["name", "customStyle"])) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["styles", [_style_0$5]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-input/components/uv-input/uv-input.vue"]]);
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  var props$3 = {
    props: __spreadValues({
      // 是否显示组件
      show: {
        type: Boolean,
        default: true
      },
      // 颜色
      color: {
        type: String,
        default: "#909193"
      },
      // 提示文字颜色
      textColor: {
        type: String,
        default: "#909193"
      },
      // 文字和图标是否垂直排列
      vertical: {
        type: Boolean,
        default: false
      },
      // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
      mode: {
        type: String,
        default: "spinner"
      },
      // 图标大小，单位默认px
      size: {
        type: [String, Number],
        default: 24
      },
      // 文字大小
      textSize: {
        type: [String, Number],
        default: 15
      },
      // 文字样式
      textStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 文字内容
      text: {
        type: [String, Number],
        default: ""
      },
      // 动画模式 https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
      timingFunction: {
        type: String,
        default: "linear"
      },
      // 动画执行周期时间
      duration: {
        type: [String, Number],
        default: 1200
      },
      // mode=circle时的暗边颜色
      inactiveColor: {
        type: String,
        default: ""
      }
    }, (_n = (_m = uni.$uv) == null ? void 0 : _m.props) == null ? void 0 : _n.loadingIcon)
  };
  var _style_0$4 = { "uv-loading-icon": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "color": "#c8c9cc" } }, "uv-loading-icon__text": { "": { "marginLeft": 4, "color": "#606266", "fontSize": 14, "lineHeight": 20 } }, "uv-loading-icon__spinner": { "": { "width": 30, "height": 30, "position": "relative" } }, "uv-loading-icon__spinner--semicircle": { "": { "borderWidth": 2, "borderColor": "rgba(0,0,0,0)", "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderStyle": "solid" } }, "uv-loading-icon__spinner--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderWidth": 2, "borderTopColor": "#e5e5e5", "borderRightColor": "#e5e5e5", "borderBottomColor": "#e5e5e5", "borderLeftColor": "#e5e5e5", "borderStyle": "solid" } }, "uv-loading-icon--vertical": { "": { "flexDirection": "column" } } };
  var animation = weex.requireModule("animation");
  var _sfc_main$6 = {
    name: "uv-loading-icon",
    mixins: [mpMixin, mixin, props$3],
    data() {
      return {
        // Array.form可以通过一个伪数组对象创建指定长度的数组
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        array12: Array.from({
          length: 12
        }),
        // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
        // 在iOS nvue上，则会一开始默认执行两个周期的动画
        aniAngel: 360,
        // 动画旋转角度
        webviewHide: false,
        // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
        loading: false
        // 是否运行中，针对nvue使用
      };
    },
    computed: {
      // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
      // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
      // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
      otherBorderColor() {
        const lightColor = colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
        if (n && !this.loading) {
          setTimeout(() => {
            this.startAnimate();
          }, 30);
        }
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          this.show && this.nvueAnimate();
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      // 监听webview的显示与隐藏
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      },
      nvueAnimate() {
        this.mode !== "spinner" && this.startAnimate();
      },
      // 执行nvue的animate模块动画
      startAnimate() {
        this.loading = true;
        const ani = this.$refs.ani;
        if (!ani)
          return;
        animation.transition(ani, {
          // 进行角度旋转
          styles: {
            transform: `rotate(${this.aniAngel}deg)`,
            transformOrigin: "center center"
          },
          duration: this.duration,
          timingFunction: this.timingFunction
          // delay: 10
        }, () => {
          this.aniAngel += 360;
          this.show && !this.webviewHide ? this.startAnimate() : this.loading = false;
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        key: 0,
        class: (0, import_vue.normalizeClass)(["uv-loading-icon", [_ctx.vertical && "uv-loading-icon--vertical"]]),
        style: (0, import_vue.normalizeStyle)([_ctx.$uv.addStyle(_ctx.customStyle)]),
        renderWhole: true
      },
      [
        !$data.webviewHide ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue.normalizeClass)(["uv-loading-icon__spinner", [`uv-loading-icon__spinner--${_ctx.mode}`]]),
            ref: "ani",
            style: (0, import_vue.normalizeStyle)({
              color: _ctx.color,
              width: _ctx.$uv.addUnit(_ctx.size),
              height: _ctx.$uv.addUnit(_ctx.size),
              borderTopColor: _ctx.color,
              borderBottomColor: $options.otherBorderColor,
              borderLeftColor: $options.otherBorderColor,
              borderRightColor: $options.otherBorderColor,
              "animation-duration": `${_ctx.duration}ms`,
              "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
            })
          },
          [
            _ctx.mode === "spinner" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              { key: 0 },
              [
                (0, import_vue.createCommentVNode)(" \u6B64\u7EC4\u4EF6\u5185\u90E8\u56FE\u6807\u90E8\u5206\u65E0\u6CD5\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u5373\u4F7F\u901A\u8FC7width\u548Cheight\u914D\u7F6E\u4E86\u4E5F\u65E0\u6548 "),
                !$data.webviewHide ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                  "loading-indicator",
                  {
                    key: 0,
                    class: "uv-loading-indicator",
                    animating: true,
                    style: (0, import_vue.normalizeStyle)({
                      color: _ctx.color,
                      width: _ctx.$uv.addUnit(_ctx.size),
                      height: _ctx.$uv.addUnit(_ctx.size)
                    })
                  },
                  null,
                  4
                  /* STYLE */
                )) : (0, import_vue.createCommentVNode)("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (0, import_vue.createCommentVNode)("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : (0, import_vue.createCommentVNode)("v-if", true),
        _ctx.text ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "u-text",
          {
            key: 1,
            class: "uv-loading-icon__text",
            style: (0, import_vue.normalizeStyle)([{
              fontSize: _ctx.$uv.addUnit(_ctx.textSize),
              color: _ctx.textColor
            }, _ctx.$uv.addStyle(_ctx.textStyle)])
          },
          (0, import_vue.toDisplayString)(_ctx.text),
          5
          /* TEXT, STYLE */
        )) : (0, import_vue.createCommentVNode)("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["styles", [_style_0$4]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon.vue"]]);
  var props$2 = {
    props: __spreadValues({
      // 是否细边框
      hairline: {
        type: Boolean,
        default: true
      },
      // 按钮的预置样式，info，primary，error，warning，success
      type: {
        type: String,
        default: "info"
      },
      // 按钮尺寸，large，normal，small，mini
      size: {
        type: String,
        default: "normal"
      },
      // 按钮形状，circle（两边为半圆），square（带圆角）
      shape: {
        type: String,
        default: "square"
      },
      // 按钮是否镂空
      plain: {
        type: Boolean,
        default: false
      },
      // 是否禁止状态
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: false
      },
      // 加载中提示文字
      loadingText: {
        type: [String, Number],
        default: ""
      },
      // 加载状态图标类型
      loadingMode: {
        type: String,
        default: "spinner"
      },
      // 加载图标大小
      loadingSize: {
        type: [String, Number],
        default: 14
      },
      // 开放能力，具体请看uniapp稳定关于button组件部分说明
      // https://uniapp.dcloud.io/component/button
      openType: {
        type: String,
        default: ""
      },
      // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
      // 取值为submit（提交表单），reset（重置表单）
      formType: {
        type: String,
        default: ""
      },
      // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
      // 只微信小程序、QQ小程序有效
      appParameter: {
        type: String,
        default: ""
      },
      // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
      hoverStopPropagation: {
        type: Boolean,
        default: true
      },
      // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
      lang: {
        type: String,
        default: "en"
      },
      // 会话来源，open-type="contact"时有效。只微信小程序有效
      sessionFrom: {
        type: String,
        default: ""
      },
      // 会话内消息卡片标题，open-type="contact"时有效
      // 默认当前标题，只微信小程序有效
      sendMessageTitle: {
        type: String,
        default: ""
      },
      // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
      // 默认当前分享路径，只微信小程序有效
      sendMessagePath: {
        type: String,
        default: ""
      },
      // 会话内消息卡片图片，open-type="contact"时有效
      // 默认当前页面截图，只微信小程序有效
      sendMessageImg: {
        type: String,
        default: ""
      },
      // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
      // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
      showMessageCard: {
        type: Boolean,
        default: true
      },
      // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
      dataName: {
        type: String,
        default: ""
      },
      // 节流，一定时间内只能触发一次
      throttleTime: {
        type: [String, Number],
        default: 0
      },
      // 按住后多久出现点击态，单位毫秒
      hoverStartTime: {
        type: [String, Number],
        default: 0
      },
      // 手指松开后点击态保留时间，单位毫秒
      hoverStayTime: {
        type: [String, Number],
        default: 200
      },
      // 按钮文字，之所以通过props传入，是因为slot传入的话
      // nvue中无法控制文字的样式
      text: {
        type: [String, Number],
        default: ""
      },
      // 按钮图标
      icon: {
        type: String,
        default: ""
      },
      // 按钮图标大小
      iconSize: {
        type: [String, Number],
        default: ""
      },
      // 按钮图标颜色
      iconColor: {
        type: String,
        default: "#000000"
      },
      // 按钮颜色，支持传入linear-gradient渐变色
      color: {
        type: String,
        default: ""
      },
      // 自定义按钮文本样式
      customTextStyle: {
        type: [Object, String],
        default: () => {
        }
      }
    }, (_p = (_o = uni.$uv) == null ? void 0 : _o.props) == null ? void 0 : _p.button)
  };
  var _style_0$3 = { "uv-reset-button": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 0 } }, "uv-button--active": { "": { "opacity": 0.75 } }, "uv-button--active--plain": { "": { "backgroundColor": "#d9d9d9" } }, "uv-button__loading-text": { "": { "marginLeft": 4, "color": "#FFFFFF", "fontSize": 15 } }, "uv-button__text": { "": { "color": "#FFFFFF", "fontSize": 15 } }, "uv-button__text--plain--error": { "": { "color": "#f56c6c" } }, "uv-button__text--plain--warning": { "": { "color": "#f9ae3d" } }, "uv-button__text--plain--success": { "": { "color": "#5ac725" } }, "uv-button__text--plain--info": { "": { "color": "#909399" } }, "uv-button__text--plain--primary": { "": { "color": "#3c9cff" } }, "uv-button": { "": { "height": 40, "position": "relative", "alignItems": "center", "justifyContent": "center", "flexDirection": "row" } }, "uv-button--large": { "": { "height": 50, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "uv-button--normal": { "": { "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12, "fontSize": 14 } }, "uv-button--small": { "": { "height": 30, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "fontSize": 12 } }, "uv-button--mini": { "": { "height": 22, "fontSize": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "uv-button--disabled": { "": { "opacity": 0.5 } }, "uv-button--info": { "": { "color": "#323233", "backgroundColor": "#ffffff", "borderColor": "#ebedf0", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--success": { "": { "color": "#ffffff", "backgroundColor": "#5ac725", "borderColor": "#5ac725", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--primary": { "": { "color": "#ffffff", "backgroundColor": "#3c9cff", "borderColor": "#3c9cff", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--error": { "": { "color": "#ffffff", "backgroundColor": "#f56c6c", "borderColor": "#f56c6c", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--warning": { "": { "color": "#ffffff", "backgroundColor": "#f9ae3d", "borderColor": "#f9ae3d", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--block": { "": { "flexDirection": "row", "width": 100 } }, "uv-button--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100 } }, "uv-button--square": { "": { "borderBottomLeftRadius": 3, "borderBottomRightRadius": 3, "borderTopLeftRadius": 3, "borderTopRightRadius": 3 } }, "uv-button--plain": { "": { "backgroundColor": "#ffffff" } }, "uv-button--hairline": { "": { "!borderWidth": 0.5 } } };
  var _sfc_main$5 = {
    name: "uv-button",
    mixins: [mpMixin, mixin, props$2],
    emits: ["click"],
    data() {
      return {};
    },
    computed: {
      // 生成bem风格的类名
      bemClass() {
        if (!this.color) {
          return this.bem(
            "button",
            ["type", "shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        } else {
          return this.bem(
            "button",
            ["shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : "#3c9cff";
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      // 字体大小
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      },
      // 设置图标大小
      getIconSize() {
        const size = this.iconSize ? this.iconSize : this.textSize * 1.35;
        return this.$uv.addUnit(size);
      },
      // 设置外层盒子的宽度，其他样式不需要
      btnWrapperStyle() {
        const style = {};
        const customStyle = this.$uv.addStyle(this.customStyle);
        if (customStyle.width)
          style.width = customStyle.width;
        return style;
      }
    },
    methods: {
      clickHandler() {
        if (!this.disabled && !this.loading) {
          throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_loading_icon = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-loading-icon"), __easycom_0$1);
    const _component_uv_icon = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-icon"), __easycom_0$2);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: "uv-button-wrapper",
        style: (0, import_vue.normalizeStyle)([$options.btnWrapperStyle]),
        renderWhole: true
      },
      [
        (0, import_vue.createElementVNode)("view", {
          hoverStartTime: Number(_ctx.hoverStartTime),
          hoverStayTime: Number(_ctx.hoverStayTime),
          class: (0, import_vue.normalizeClass)(["uv-button", $options.bemClass]),
          hoverClass: !_ctx.disabled && !_ctx.loading && !_ctx.color && (_ctx.plain || _ctx.type === "info") ? "uv-button--active--plain" : !_ctx.disabled && !_ctx.loading && !_ctx.plain ? "uv-button--active" : "",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
          style: (0, import_vue.normalizeStyle)([$options.baseColor, _ctx.$uv.addStyle(_ctx.customStyle)])
        }, [
          _ctx.loading ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            { key: 0 },
            [
              (0, import_vue.createVNode)(_component_uv_loading_icon, {
                mode: _ctx.loadingMode,
                size: _ctx.loadingSize * 1.15,
                color: $options.loadingColor
              }, null, 8, ["mode", "size", "color"]),
              (0, import_vue.createElementVNode)(
                "u-text",
                {
                  class: (0, import_vue.normalizeClass)(["uv-button__loading-text", [_ctx.plain && `uv-button__text--plain--${_ctx.type}`]]),
                  style: (0, import_vue.normalizeStyle)([$options.nvueTextStyle, _ctx.$uv.addStyle(_ctx.customTextStyle)])
                },
                (0, import_vue.toDisplayString)(_ctx.loadingText || _ctx.text),
                7
                /* TEXT, CLASS, STYLE */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            { key: 1 },
            [
              _ctx.icon ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uv_icon, {
                key: 0,
                name: _ctx.icon,
                color: $options.iconColorCom,
                size: $options.getIconSize
              }, null, 8, ["name", "color", "size"])) : (0, import_vue.createCommentVNode)("v-if", true),
              (0, import_vue.createElementVNode)(
                "u-text",
                {
                  class: (0, import_vue.normalizeClass)(["uv-button__text", [_ctx.plain && `uv-button__text--plain--${_ctx.type}`]]),
                  style: (0, import_vue.normalizeStyle)([
                    {
                      marginLeft: _ctx.icon ? "2px" : 0
                    },
                    $options.nvueTextStyle,
                    _ctx.$uv.addStyle(_ctx.customTextStyle)
                  ])
                },
                (0, import_vue.toDisplayString)(_ctx.text),
                7
                /* TEXT, CLASS, STYLE */
              ),
              (0, import_vue.renderSlot)(_ctx.$slots, "suffix")
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ], 14, ["hoverStartTime", "hoverStayTime", "hoverClass"])
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$3]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-button/components/uv-button/uv-button.vue"]]);
  var nvueAnimation = requireNativePlugin("animation");
  var MPAnimation = class {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(__spreadValues({}, options));
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref22 = this.$.$refs["ani"].ref;
      if (!ref22)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref22, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);
      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;
      this.next++;
      return this;
    }
    run(fn) {
      this.isEnd = false;
      let ref22 = this.$.$refs["ani"] && this.$.$refs["ani"].ref;
      if (!ref22)
        return;
      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);
      this.next = 0;
    }
  };
  var animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  var animateTypes2 = ["opacity", "backgroundColor"];
  var animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this._nvuePushAnimates(type, args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  var _sfc_main$4 = {
    name: "uv-transition",
    mixins: [mpMixin, mixin],
    emits: ["click", "change"],
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: false
      },
      // 使用的动画模式
      mode: {
        type: [Array, String, null],
        default() {
          return "fade";
        }
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: 300
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: "ease-out"
      },
      customClass: {
        type: String,
        default: ""
      },
      // nvue模式下 是否直接显示，在uv-list等cell下面使用就需要设置
      cellChild: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 初始化动画条件
      transformStyles() {
        const style = __spreadProps(__spreadValues({
          transform: this.transform,
          opacity: this.opacity
        }, this.$uv.addStyle(this.customStyle)), {
          "transition-duration": `${this.duration / 1e3}s`
        });
        return this.$uv.addStyle(style, "string");
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: this.timingFunction,
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uv-transition/components/uv-transition/uv-transition.vue:166", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            if (this.cellChild) {
              this.opacity = 1;
            } else {
              this.animation.run();
            }
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过渡动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.mode === "string") {
          buildStyle(type, this.mode);
        } else {
          this.mode.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.mode === "string") {
          buildTranfrom(type, this.mode);
        } else {
          this.mode.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: (0, import_vue.normalizeClass)($props.customClass),
      style: (0, import_vue.normalizeStyle)($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      renderWhole: true
    }, [
      (0, import_vue.renderSlot)(_ctx.$slots, "default")
    ], 14, ["animation"])) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-transition/components/uv-transition/uv-transition.vue"]]);
  var props$1 = {
    props: __spreadValues({
      // 是否显示遮罩
      show: {
        type: Boolean,
        default: false
      },
      // 层级z-index
      zIndex: {
        type: [String, Number],
        default: 10070
      },
      // 遮罩的过渡时间，单位为ms
      duration: {
        type: [String, Number],
        default: 300
      },
      // 不透明度值，当做rgba的第四个参数
      opacity: {
        type: [String, Number],
        default: 0.5
      }
    }, (_r = (_q = uni.$uv) == null ? void 0 : _q.props) == null ? void 0 : _r.overlay)
  };
  var _sfc_main$3 = {
    name: "uv-overlay",
    emits: ["click"],
    mixins: [mpMixin, mixin, props$1],
    watch: {
      show(newVal) {
      }
    },
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    },
    methods: {
      clickHandler() {
        this.$emit("click");
      },
      clear() {
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_transition = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-transition"), __easycom_4$1);
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uv_transition, {
      show: _ctx.show,
      mode: "fade",
      "custom-class": "uv-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler,
      onTouchmove: (0, import_vue.withModifiers)($options.clear, ["stop", "prevent"])
    }, {
      default: (0, import_vue.withCtx)(() => [
        (0, import_vue.renderSlot)(_ctx.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration", "custom-style", "onClick", "onTouchmove"]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-overlay/components/uv-overlay/uv-overlay.vue"]]);
  var props = {
    props: {
      bgColor: {
        type: String,
        default: "transparent"
      }
    }
  };
  var _style_0$2 = {};
  var _sfc_main$2 = {
    name: "uv-status-bar",
    mixins: [mpMixin, mixin, props],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = this.$uv.addUnit(this.$uv.sys().statusBarHeight, "px");
        if (this.bgColor) {
          if (this.bgColor.indexOf("gradient") > -1) {
            style.backgroundImage = this.bgColor;
          } else {
            style.background = this.bgColor;
          }
        }
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        style: (0, import_vue.normalizeStyle)([$options.style]),
        class: "uv-status-bar",
        renderWhole: true
      },
      [
        (0, import_vue.renderSlot)(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.vue"]]);
  var _style_0$1 = {};
  var _sfc_main$1 = {
    name: "uv-safe-bottom",
    mixins: [mpMixin, mixin],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        var _a2, _b2;
        const style = {};
        style.height = this.$uv.addUnit((_b2 = (_a2 = this.$uv.sys()) == null ? void 0 : _a2.safeAreaInsets) == null ? void 0 : _b2.bottom, "px");
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    },
    mounted() {
      this.isNvue = true;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: (0, import_vue.normalizeClass)(["uv-safe-bottom", [!$data.isNvue && "uv-safe-area-inset-bottom"]]),
        style: (0, import_vue.normalizeStyle)([$options.style]),
        renderWhole: true
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.vue"]]);
  var _style_0 = { "uv-popup": { "": { "position": "fixed" }, ".top": { "top": 0 }, ".left": { "top": 0 }, ".right": { "top": 0 } }, "uv-popup__content": { ".uv-popup ": { "position": "relative" }, ".uv-popup .left": { "paddingTop": 0, "flex": 1 }, ".uv-popup .right": { "paddingTop": 0, "flex": 1 } }, "uv-popup__content__close": { ".uv-popup ": { "position": "absolute" } }, "uv-popup__content__close--hover": { ".uv-popup ": { "opacity": 0.4 } }, "uv-popup__content__close--top-left": { ".uv-popup ": { "top": 15, "left": 15 } }, "uv-popup__content__close--top-right": { ".uv-popup ": { "top": 15, "right": 15 } }, "uv-popup__content__close--bottom-left": { ".uv-popup ": { "bottom": 15, "left": 15 } }, "uv-popup__content__close--bottom-right": { ".uv-popup ": { "right": 15, "bottom": 15 } }, "fixforpc-top": { "": { "top": 0 } } };
  var _sfc_main = {
    name: "uv-popup",
    components: {},
    mixins: [mpMixin, mixin],
    emits: ["change", "maskClick"],
    props: __spreadValues({
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      mode: {
        type: String,
        default: "center"
      },
      // 动画时长，单位ms
      duration: {
        type: [String, Number],
        default: 300
      },
      // 层级
      zIndex: {
        type: [String, Number],
        default: 10075
      },
      bgColor: {
        type: String,
        default: "#ffffff"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      // 是否显示遮罩
      overlay: {
        type: Boolean,
        default: true
      },
      // 点击遮罩是否关闭弹窗
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      // 遮罩的透明度，0-1之间
      overlayOpacity: {
        type: [Number, String],
        default: 0.4
      },
      // 自定义遮罩的样式
      overlayStyle: {
        type: [Object, String],
        default: ""
      },
      // 是否为iPhoneX留出底部安全距离
      safeAreaInsetBottom: {
        type: Boolean,
        default: true
      },
      // 是否留出顶部安全距离（状态栏高度）
      safeAreaInsetTop: {
        type: Boolean,
        default: false
      },
      // 是否显示关闭图标
      closeable: {
        type: Boolean,
        default: false
      },
      // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
      closeIconPos: {
        type: String,
        default: "top-right"
      },
      // mode=center，也即中部弹出时，是否使用缩放模式
      zoom: {
        type: Boolean,
        default: true
      },
      round: {
        type: [Number, String],
        default: 0
      }
    }, (_t = (_s = uni.$uv) == null ? void 0 : _s.props) == null ? void 0 : _t.popup),
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.mode]](true);
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        transitionStyle: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupClass: this.isDesktop ? "fixforpc-top" : "top",
        direction: ""
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.bgColor === "" || this.bgColor === "none" || this.$uv.getPx(this.round) > 0) {
          return "transparent";
        }
        return this.bgColor;
      },
      contentStyle() {
        const style = {};
        if (this.bgColor) {
          style.backgroundColor = this.bg;
        }
        if (this.round) {
          const value = this.$uv.addUnit(this.round);
          const mode = this.direction ? this.direction : this.mode;
          style.backgroundColor = this.bgColor;
          if (mode === "top") {
            style.borderBottomLeftRadius = value;
            style.borderBottomRightRadius = value;
          } else if (mode === "bottom") {
            style.borderTopLeftRadius = value;
            style.borderTopRightRadius = value;
          } else if (mode === "center") {
            style.borderRadius = value;
          }
        }
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      this.messageChild = null;
      this.clearPropagation = false;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.mode;
        } else {
          this.direction = direction;
        }
        if (!this.config[direction]) {
          return this.$uv.error(`\u7F3A\u5C11\u7C7B\u578B\uFF1A${direction}`);
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.mode
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.closeOnClickOverlay)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupClass = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.mode === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupClass = "bottom";
        this.ani = ["slide-bottom"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupClass = "center";
        this.ani = this.zoom ? ["zoom-in", "fade"] : ["fade"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupClass = "left";
        this.ani = ["slide-left"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupClass = "right";
        this.ani = ["slide-right"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_overlay = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-overlay"), __easycom_0);
    const _component_uv_status_bar = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-status-bar"), __easycom_1);
    const _component_uv_safe_bottom = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-safe-bottom"), __easycom_2);
    const _component_uv_icon = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-icon"), __easycom_0$2);
    const _component_uv_transition = resolveEasycom((0, import_vue.resolveDynamicComponent)("uv-transition"), __easycom_4$1);
    return $data.showPopup ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        key: 0,
        class: (0, import_vue.normalizeClass)(["uv-popup", [$data.popupClass, $options.isDesktop ? "fixforpc-z-index" : ""]]),
        style: (0, import_vue.normalizeStyle)([{ zIndex: $props.zIndex }]),
        renderWhole: true
      },
      [
        (0, import_vue.createElementVNode)(
          "view",
          {
            onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            (0, import_vue.createCommentVNode)(" \u906E\u7F69\u5C42 "),
            $data.maskShow && $props.overlay ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uv_overlay, {
              key: "1",
              show: $data.showTrans,
              duration: $props.duration,
              "custom-style": $props.overlayStyle,
              opacity: $props.overlayOpacity,
              zIndex: $props.zIndex,
              onClick: $options.onTap
            }, null, 8, ["show", "duration", "custom-style", "opacity", "zIndex", "onClick"])) : (0, import_vue.createCommentVNode)("v-if", true),
            (0, import_vue.createVNode)(_component_uv_transition, {
              key: "2",
              mode: $data.ani,
              name: "content",
              "custom-style": $data.transitionStyle,
              duration: $props.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: (0, import_vue.withCtx)(() => [
                (0, import_vue.createElementVNode)(
                  "view",
                  {
                    class: (0, import_vue.normalizeClass)(["uv-popup__content", [$data.popupClass]]),
                    style: (0, import_vue.normalizeStyle)([$options.contentStyle]),
                    onClick: _cache[1] || (_cache[1] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    $props.safeAreaInsetTop ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uv_status_bar, { key: 0 })) : (0, import_vue.createCommentVNode)("v-if", true),
                    (0, import_vue.renderSlot)(_ctx.$slots, "default"),
                    $props.safeAreaInsetBottom ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uv_safe_bottom, { key: 1 })) : (0, import_vue.createCommentVNode)("v-if", true),
                    $props.closeable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                      "view",
                      {
                        key: 2,
                        onClick: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => $options.close && $options.close(...args), ["stop"])),
                        class: (0, import_vue.normalizeClass)(["uv-popup__content__close", ["uv-popup__content__close--" + $props.closeIconPos]]),
                        hoverClass: "uv-popup__content__close--hover",
                        hoverStayTime: "150"
                      },
                      [
                        (0, import_vue.createVNode)(_component_uv_icon, {
                          name: "close",
                          color: "#909399",
                          size: "18",
                          bold: ""
                        })
                      ],
                      2
                      /* CLASS */
                    )) : (0, import_vue.createCommentVNode)("v-if", true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode", "custom-style", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      6
      /* CLASS, STYLE */
    )) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-popup/components/uv-popup/uv-popup.vue"]]);
  function isNumber(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
  }
  function isEmpty(val) {
    if (val == null)
      return true;
    if (typeof val == "boolean")
      return false;
    if (typeof val == "number")
      return !isNumber(val);
    if (val instanceof Error)
      return val.message == "";
    switch (Object.prototype.toString.call(val)) {
      case "[object String]":
      case "[object Array]":
        return !val.length;
      case "[object File]":
      case "[object Map]":
      case "[object Set]":
        return !val.size;
      case "[object Object]":
        return !Object.keys(val).length;
    }
    return false;
  }
  var _imports_5 = "/static/avatar/uimg3.jpeg";

  // C:/Users/curry/Desktop/uni-weLive/unpackage/dist/dev/.nvue/pages/live/live.js
  var import_vue2 = __toESM(require_vue());
  var _a;
  var _b;
  var props2 = {
    props: __spreadValues({
      // 激活部分的颜色
      activeColor: {
        type: String,
        default: "#19be6b"
      },
      inactiveColor: {
        type: String,
        default: "#ececec"
      },
      // 进度百分比，数值
      percentage: {
        type: [String, Number],
        default: 0
      },
      // 是否在进度条内部显示百分比的值
      showText: {
        type: Boolean,
        default: true
      },
      // 进度条的高度，单位px
      height: {
        type: [String, Number],
        default: 12
      }
    }, (_b = (_a = uni.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.lineProgress)
  };
  var _style_0$12 = { "uv-line-progress": { "": { "alignItems": "stretch", "position": "relative", "flexDirection": "row", "flex": 1, "overflow": "hidden", "borderRadius": 100 } }, "uv-line-progress__background": { "": { "backgroundColor": "#ececec", "borderRadius": 100, "flex": 1 } }, "uv-line-progress__line": { "": { "position": "absolute", "top": 0, "left": 0, "bottom": 0, "alignItems": "center", "flexDirection": "row", "color": "#ffffff", "borderRadius": 100, "transitionProperty": "width", "transitionDuration": 500, "transitionTimingFunction": "ease", "justifyContent": "flex-end" } }, "uv-line-progress__text": { "": { "fontSize": 10, "alignItems": "center", "textAlign": "right", "color": "#FFFFFF", "marginRight": 5, "transform": "scale(0.9)" } }, "@TRANSITION": { "uv-line-progress__line": { "property": "width", "duration": 500, "timingFunction": "ease" } } };
  var dom2 = requireNativePlugin("dom");
  var _sfc_main$12 = {
    name: "uv-line-progress",
    mixins: [mpMixin, mixin, props2],
    data() {
      return {
        lineWidth: 0
      };
    },
    watch: {
      percentage(n) {
        this.resizeProgressWidth();
      }
    },
    computed: {
      progressStyle() {
        let style = {};
        style.width = this.lineWidth;
        style.backgroundColor = this.activeColor;
        style.height = this.$uv.addUnit(this.$uv.getPx(this.height));
        return style;
      },
      innserPercentage() {
        return this.$uv.range(0, 100, this.percentage);
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.$uv.sleep(20).then(() => {
          this.resizeProgressWidth();
        });
      },
      getProgressWidth() {
        return new Promise((resolve) => {
          dom2.getComponentRect(this.$refs["uv-line-progress__background"], (res) => {
            resolve(res.size);
          });
        });
      },
      resizeProgressWidth() {
        this.getProgressWidth().then((size) => {
          const {
            width
          } = size;
          this.lineWidth = width * this.innserPercentage / 100 + "px";
        });
      }
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: "uv-line-progress",
        style: (0, import_vue2.normalizeStyle)([_ctx.$uv.addStyle(_ctx.customStyle)]),
        renderWhole: true
      },
      [
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: "uv-line-progress__background",
            ref: "uv-line-progress__background",
            style: (0, import_vue2.normalizeStyle)([{
              backgroundColor: _ctx.inactiveColor,
              height: _ctx.$uv.addUnit(_ctx.$uv.getPx(_ctx.height))
            }])
          },
          null,
          4
          /* STYLE */
        ),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: "uv-line-progress__line",
            style: (0, import_vue2.normalizeStyle)([$options.progressStyle])
          },
          [
            (0, import_vue2.renderSlot)(_ctx.$slots, "default", {}, () => [
              _ctx.showText && _ctx.percentage >= 10 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                "u-text",
                {
                  key: 0,
                  class: "uv-line-progress__text"
                },
                (0, import_vue2.toDisplayString)($options.innserPercentage + "%"),
                1
                /* TEXT */
              )) : (0, import_vue2.createCommentVNode)("v-if", true)
            ])
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$12]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.vue"]]);
  var liveJson = [
    {
      id: 20230101,
      logo: "https://tx2.a.yximgs.com/uhead/AB/2020/07/21/22/BMjAyMDA3MjEyMjQ0NTRfMTY5OTAxODYxMF8yX2hkMTM4Xzc4_s.jpg",
      name: "\u5C0F\u732A\u62A4\u80A4",
      src: "/static/video/video1.mp4",
      poster: "https://img.zcool.cn/community/01r26g1cgctgqbdgkk3cpw3835.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
      desc: "\u6A21\u7279\u51FA\u955C\u53E3\u64AD\u77ED\u89C6\u9891\uFF0C\u5316\u5986\u54C1\u79CD\u8349\u89C6\u9891",
      // 话题
      topic: ["\u53E3\u64AD", "\u79CD\u8349\u5E26\u8D27"],
      playNum: 9217,
      likeNum: 2176,
      replyNum: 625,
      shareNum: 317,
      saleNum: 12,
      isLike: true,
      isFollow: true,
      // 广告
      ads: "",
      // 视频合集
      collectionLs: [],
      // 商品
      goods: [],
      message: [
        { id: 2023001, type: "notice", content: `\u6B22\u8FCE\u6765\u5230\u76F4\u64AD\u95F4\uFF01\u672C\u5E73\u53F0\u63D0\u5021\u7EFF\u8272\u5065\u5EB7\u76F4\u64AD\uFF0C\u76F4\u64AD\u5185\u5BB9\u548C\u8BC4\u8BBA\u4E25\u7981\u51FA\u73B0\u8FDD\u6CD5\u8FDD\u89C4\u3001\u8272\u60C5\u4F4E\u4FD7\u3001\u8BF1\u5BFC\u8BC8\u9A97\u3001\u62BD\u70DF\u9157\u9152\u7B49\u5185\u5BB9\u3002` },
        { id: 2023002, user: "\u591C\u7684\u8FF7\u8FED\u9999", content: `\u771F\u662F\u592A\u7F8E\u4E86\uFF0C\u5FC5\u987B\u652F\u6301\u4E00\u4E0B\u5440\u{1F525}\u{1F44D}` },
        { id: 2023003, user: "\u9E21\u54E5", content: `\u8FD9\u4E5F\u592A\u5389\u5BB3\u4E86\u5427\u3002` },
        { id: 2023004, type: "gift", user: "Jack", content: `\u5C0F\u5FC3\u5FC3`, img: "/static/gift/gift1.png", num: 23 },
        { id: 2023005, type: "gift", user: "Andy", content: `\u68D2\u68D2\u7CD6`, img: "/static/gift/gift2.png", num: 6 },
        { id: 2023006, user: "Hisen", content: `\u7F8E\u5973\uFF0C\u53EF\u4EE5\u8BA4\u8BC6\u4E00\u4E0B\u5417\u{1F610}` },
        { id: 2023007, user: "\u676F\u9152\u4EBA\u751F", content: `\u8FD9\u4E5F\u62CD\u7684\u592A\u597D\u770B\u4E86\u5427\uFF0C\u5468\u672B\u6B63\u597D\u5E26\u7740\u5973\u670B\u53CB\u53BB\u8BD5\u4E00\u8BD5\u554A \u{1F46C}` },
        { id: 2023008, user: "Mike", isbuy: true },
        { id: 2023009, user: "\u4E00\u8DEF\u5411\u5317", content: `\u5FC5\u987B\u4E00\u6735\u7EA2\u82B1\u3002`, tag: "\u603B\u7BA1\u7406" },
        { id: 2023010, user: "Yon", content: `\u652F\u6301\u4E00\u4E0B~` }
      ]
    },
    {
      id: 20230103,
      logo: "https://ali2.a.yximgs.com/uhead/AB/2020/08/12/23/BMjAyMDA4MTIyMzUyMDJfMjA1MTk0ODc2Ml8yX2hkNzc0Xzg4OA==_s.jpg",
      name: "\u5C55\u671B\u672A\u6765",
      src: "https://video-js.51miz.com/preview/video/00/00/18/07/V-180745-5B4706CF.mp4",
      poster: "https://img-qn-0.51miz.com/preview/video/00/00/18/07/V-180745-8B5B1CD5.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fw/400",
      desc: "2024\u9A6C\u4E0A\u5230\u4E86\uFF0C\u5723\u8BDE\u5143\u65E6\u4E00\u8D77\u8FC7\u3002",
      // 话题
      topic: ["\u5723\u8BDE\u8282", "\u5143\u65E6"],
      playNum: 1873,
      likeNum: 217,
      replyNum: 88,
      shareNum: 30,
      saleNum: 24,
      isLike: true,
      isFollow: false,
      // 广告
      ads: "https://m.suning.com/product/0000000000/10971963141.html",
      adstitle: "\u5F97\u529B-\u67D4\u8F6F\u6BDB\u7B14",
      // 视频合集
      collectionLs: [],
      // 商品
      goods: [
        {
          name: "50\u652F\u5F97\u529B\u94C5\u7B14\u516D\u89D2\u6746",
          pic: "https://imgservice.suning.cn/uimg1/b2c/image/4Ad9rVUgsf_x3VgB9AzzWQ.jpg_180w_180h_4e",
          price: 12.9
        },
        {
          name: "\u5E7C\u513F\u56ED2b\u513F\u7AE5\u5E26\u6A61\u76AE\u64E6\u5934",
          pic: "https://imgservice.suning.cn/uimg1/b2c/image/mt5W89NKkixG4DXaN5-5Jw.jpg_180w_180h_4e",
          price: 9.9
        }
      ],
      // 滚动消息
      message: [
        { id: 2021001, type: "notice", content: `\u6B22\u8FCE\u6765\u5230\u76F4\u64AD\u95F4\uFF01\u672C\u5E73\u53F0\u63D0\u5021\u7EFF\u8272\u5065\u5EB7\u76F4\u64AD\uFF0C\u76F4\u64AD\u5185\u5BB9\u548C\u8BC4\u8BBA\u4E25\u7981\u51FA\u73B0\u8FDD\u6CD5\u8FDD\u89C4\u3001\u8272\u60C5\u4F4E\u4FD7\u3001\u8BF1\u5BFC\u8BC8\u9A97\u3001\u62BD\u70DF\u9157\u9152\u7B49\u5185\u5BB9\u3002` },
        { id: 2021002, user: "\u7D20\u989C\u81EA\u7136\u7F8E", content: `\u8FD9\u4E2A\u5389\u5BB3\u4E86\u54DF\u{1F44D}` },
        { id: 2021003, user: "\u9E21\u54E5", content: `\u600E\u4E48\u53EF\u4EE5\u62CD\u7684\u8FD9\u4E48\u597D\u3002\u{1F525}\u{1F525}` },
        { id: 2021004, user: "\u591C\u7684\u8FF7\u8FED\u9999", content: `\u6765\u4E00\u9996\u6B4C\u542C\u542C` },
        { id: 2021005, user: "\u676F\u9152\u4EBA\u751F", content: `\u611F\u89C9\u597D\u9177 \u{1F60E}` },
        { id: 2021006, user: "\u5C0F\u9A6C", content: `\u600E\u4E48\u53EF\u4EE5\u8FD9\u4E48\u7F8E\uFF01` },
        { id: 2021007, user: "\u66FE\u7ECF\u662F\u738B\u8005", content: `\u5927\u54E5\uFF0C\u7ED9\u4F60\u70B9\u8D5E\uFF01\u{1F62C}` },
        { id: 2021008, user: "\u4E00\u8DEF\u5411\u5317", content: `\u725B\u903C666` }
      ]
    },
    {
      id: 20230106,
      logo: "https://p2-pro.a.yximgs.com/uhead/AB/2019/10/04/10/BMjAxOTEwMDQxMDQxNTlfNjkxNjI1NzU0XzJfaGQ4MTFfMzQz_s.jpg",
      name: "\u7231\u751F\u6D3B",
      src: "/static/video/video2.mp4",
      poster: "https://img.zcool.cn/community/01jvls1sozrcs49zwqt9sk3035.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
      desc: "zectron \u7535\u52A8\u81EA\u884C\u8F66\uFF0C\u4F11\u95F2\u81EA\u884C\u8F66~",
      // 话题
      topic: ["\u7535\u52A8\u8F66", "\u4F11\u95F2\u81EA\u884C\u8F66\u2665"],
      playNum: 6173,
      likeNum: 825,
      replyNum: 519,
      shareNum: 399,
      saleNum: 37,
      isLike: false,
      isFollow: true,
      // 广告
      ads: "",
      // 视频合集
      collectionLs: [],
      // 商品
      goods: [],
      message: [
        { id: 2021002, user: "\u5927\u5175", content: `\u8FD9\u4E48\u5C0F\u5DE7\u7CBE\u81F4\uFF0C\u8FD9\u4E48\u6F02\u4EAE\u7684\u5916\u5F62\uFF0C\u771F\u662F\u8BA9\u4EBA\u592A\u7231\u4E86\u3002\u{1F48B}\u{1F48B}` },
        { id: 2021003, user: "\u9E21\u54E5", content: `\u771F\u7684\u4E0D\u9519\u554A\uFF01\u{1F451}` },
        { id: 2021004, user: "Yaya", content: `\u8BA4\u8BC6\u4F60\u771F\u597D\uFF01` },
        { id: 2021005, user: "\u6D41\u6D6A\u5730\u7403", content: `\u5567\u5567\uFF0C\u7ED9\u4F60\u6BD4\u4E2A\u5FC3\u3002\u{1F91E}` },
        { id: 2021006, user: "\u731B\u54E5", content: `\u600E\u4E48\u53EF\u4EE5\u8BA4\u8BC6\u5230\u4F60\u3002\u{1F460}` },
        { id: 2021007, user: "\u66FE\u7ECF\u662F\u738B\u8005", content: `\u54B1\u4EEC\u53EF\u4EE5\u4E00\u8D77\u62CD\u4E00\u4E2A\u5417\uFF1F` },
        { id: 2021008, user: "\u658C\u54E5", content: `\u54C7\u54C7\u54C7\uFF0C\u62CD\u7684\u8FD9\u4E48\u597D\u770B\u554A\uFF01` },
        { id: 2021009, user: "\u5C0F\u864E\u5B50", content: `\u771F\u7684\u662F\u592A\u7ED9\u529B\u5566\uFF01\u{1F60E}` }
      ]
    },
    {
      id: 20230107,
      logo: "https://ali2.a.kwimgs.com/uhead/AB/2020/08/06/08/BMjAyMDA4MDYwODA3MzNfNDUyNDA0MjE3XzFfaGQzNTZfNzk2_s.jpg",
      name: "\u4E1C\u5317\u4E2B\u5934",
      src: "https://txmov2.a.yximgs.com/upic/2021/03/15/07/BMjAyMTAzMTUwNzM2MjFfMTcwOTE1MzI1NV80NjAyNDkwODMxM18yXzM=_b_B28bed5de3a81a302d79f76e1e938e257.mp4",
      poster: "https://js2.a.yximgs.com/upic/2021/03/15/07/BMjAyMTAzMTUwNzM2MjFfMTcwOTE1MzI1NV80NjAyNDkwODMxM18yXzM=_B4d822757a2f9754a5393b181d2c28db8.jpg",
      desc: "\u8FFD\u6C42\u8BD7\u4E0E\u8FDC\u65B9\uFF0C\u4E00\u8D77\u53BB\u65C5\u884C\u5427\uFF01",
      // 话题
      topic: ["\u65C5\u884C", "\u8BD7\u4E0E\u8FDC\u65B9"],
      playNum: 8135,
      likeNum: 2716,
      replyNum: 839,
      shareNum: 317,
      saleNum: 89,
      isLike: true,
      isFollow: false,
      // 广告
      ads: "",
      // 视频合集
      collectionLs: [],
      // 商品
      goods: [
        {
          name: "\u76F4\u98DE\u6606\u660E\u5927\u7406\u4E3D\u6C5F6\u59295\u665A",
          pic: "https://img.alicdn.com/bao/uploaded/i1/2939694477/O1CN01HYJuPP1iwVjCp5YPD_!!2939694477.jpg_400x400.jpg",
          price: 600
        },
        {
          name: "\u4E91\u5357\u5305\u8F66\u7389\u9F99\u96EA\u5C71\u542B\u5F80\u8FD4\u673A\u7968",
          pic: "https://img.alicdn.com/bao/uploaded/i3/2939694477/O1CN01AECxOh1iwVhfd0BnZ_!!2939694477.jpg_400x400.jpg",
          price: 688
        },
        {
          name: "\u6B66\u6C49-\u6606\u5927\u4E3D6\u59295\u665A",
          pic: "https://img.alicdn.com/bao/uploaded/i3/2939694477/O1CN01J7QfhB1iwVjDANUEC_!!2939694477.jpg_400x400.jpg",
          price: 568.9
        }
      ],
      message: [
        { id: 2021002, user: "\u6D9B\u54E5", content: `\u8FD9\u4E2A\u62CD\u7684\u633A\u4E0D\u9519\u7684\u3002` },
        { id: 2021003, user: "\u963F\u6885", content: `\u6709\u4E00\u79CD\u6DE1\u6DE1\u7684\u5FE7\u4F24\u611F\uFF01` },
        { id: 2021004, user: "King", content: `\u7ED9\u5B69\u5B50\u4E5F\u4E70\u4E00\u4E2A\u5C5E\u4E8E\u5979\u7684\u7AE5\u8BDD\u4E16\u754C\uFF01` },
        { id: 2021005, user: "\u6D41\u6D6A\u5730\u7403", content: `\u592A\u559C\u6B22\u8FD9\u4E2A\u4E86\u3002\u{1F91E}` },
        { id: 2021009, user: "\u4E2B\u4ED4", content: `\u7ED9\u4F60\u70B9\u8D5E\uFF0C666 \u{1F60E}` }
      ]
    },
    {
      id: 20230112,
      logo: "https://ali2.a.yximgs.com/uhead/AB/2020/10/30/17/BMjAyMDEwMzAxNzUwMzJfMjEyNTMxNzU2MF8yX2hkODQwXzI3Mw==_s.jpg",
      name: "\u5C0F\u738B\u5403\u64AD",
      src: "https://txmov2.a.yximgs.com/upic/2021/03/20/13/BMjAyMTAzMjAxMzA3MzNfMjEyNTMxNzU2MF80NjMwNzU0NTMxNV8wXzM=_b_B6717ec232dac71a529a19a0e4ac64b97.mp4",
      poster: "https://tx2.a.yximgs.com/upic/2021/03/20/13/BMjAyMTAzMjAxMzA3MzNfMjEyNTMxNzU2MF80NjMwNzU0NTMxNV8wXzM=_B0d63175c0501238e74115ebae1a69236.jpg",
      desc: "\u5206\u4EAB\u751F\u6D3B\u7F8E\u98DF\uFF0C\u7F8E\u98DF\u827A\u672F\uFF0C\u7F8E\u98DF\u89C6\u9891\u8BB0\u5F55\u3002",
      // 话题
      topic: ["\u7F8E\u98DF\u827A\u672F", "\u5403\u64AD", "\u7F8E\u98DF"],
      playNum: 5436,
      likeNum: 364,
      replyNum: 235,
      shareNum: 128,
      saleNum: 92,
      isLike: true,
      isFollow: false,
      // 广告
      ads: "",
      // 视频合集
      collectionLs: [],
      // 商品
      goods: [],
      message: [
        { id: 2021002, user: "\u676F\u9152\u4EBA\u751F", content: `\u8FC7\u5206, \u770B\u5B8C\u90FD\u6D41\u53E3\u6C34\u4E86\uFF01` },
        { id: 2021003, user: "\u9E21\u54E5", content: `\u554A\u554A\u554A\uFF0C\u597D\u60F3\u5403\u554A\u3002` },
        { id: 2021004, user: "Ring", content: `\u53EF\u4EE5\u8BA4\u8BC6\u4E00\u4E0B\u5417\uFF1F` },
        { id: 2021005, user: "Null", content: `\u770B\u7740\u597D\u597D\u5403\u554A \u{1F91E}\u{1F91E}` },
        { id: 2021006, user: "\u6697\u9ED1\u4E16\u754C", content: `\u4EE5\u540E\u8981\u591A\u5411\u4F60\u5B66\u4E60\u5566\uFF01` },
        { id: 2021007, user: "\u66FE\u7ECF\u662F\u738B\u8005", content: `\u70B9\u8D5E\uFF0C666\uFF01\u{1F460}` }
      ]
    },
    {
      id: 20230116,
      logo: "https://js2.a.yximgs.com/uhead/AB/2020/01/24/19/BMjAyMDAxMjQxOTUyMTBfMTcwOTE1MzI1NV8yX2hkMTIyXzEwNg==_s.jpg",
      name: "\u5FC3\u5982\u6B62\u6C34",
      src: "https://jsmov2.a.yximgs.com/upic/2020/08/22/06/BMjAyMDA4MjIwNjU0MjhfNzU4OTU3ODI0XzM0NzcyNTYyNTI1XzFfMw==_b_B02dceb0bc91b376ee1337df632e2821b.mp4",
      poster: "https://ali2.a.yximgs.com/upic/2020/08/22/06/BMjAyMDA4MjIwNjU0MjhfNzU4OTU3ODI0XzM0NzcyNTYyNTI1XzFfMw==_Bd7c907dc5118e78e44356793daef1c7f.jpg",
      desc: "\u4E16\u754C\u5982\u6B64\u4E4B\u5927\uFF0C\u5403\u904D\u5404\u5730\u7F8E\u98DF\uFF0C\u5E0C\u671B\u5728\u67D0\u4E2A\u5730\u65B9\u80FD\u548C\u4F60\u4E0D\u671F\u800C\u9047\uFF01",
      // 话题
      topic: ["\u7F8E\u98DF", "\u65C5\u6E38"],
      playNum: 2147,
      likeNum: 812,
      replyNum: 563,
      shareNum: 432,
      saleNum: 18,
      isLike: true,
      isFollow: false,
      // 广告
      ads: "",
      // 视频合集
      collectionLs: [],
      // 商品
      goods: [],
      message: [
        { id: 2021002, user: "\u5218\u7F8E\u4E3D", content: `\u771F\u662F\u592A\u597D\u5403\u4E86\u554A\uFF01` },
        { id: 2021003, user: "\u9E21\u54E5", content: `\u4E16\u754C\u8FD9\u4E48\u5927\uFF0C\u597D\u60F3\u53BB\u770B\u770B\uFF01\u{1F451}` },
        { id: 2021004, user: "Pink", content: `\u8FD9\u662F\u5728\u4EC0\u4E48\u5730\u65B9\u5440\uFF1F` },
        { id: 2021005, user: "\u5927\u96C4", content: `\u4E0B\u6B21\u6211\u4E5F\u60F3\u53BB\u5403 \u{1F91E}\u{1F91E}` },
        { id: 2021006, user: "Mimi", content: `\u54C8\u54C8~ \u7F8E\u98DF\u7F8E\u5973\u554A\uFF01` },
        { id: 2021007, user: "\u66FE\u7ECF\u662F\u738B\u8005", content: `666\uFF01\u{1F60E}` }
      ]
    }
  ];
  var giftJson = [
    { title: "\u5C0F\u5FC3\u5FC3", pic: "/static/gift/gift1.png", coins: 10 },
    { title: "\u68D2\u68D2\u7CD6", pic: "/static/gift/gift2.png", coins: 399 },
    { title: "\u5927\u5564\u9152", pic: "/static/gift/gift3.png", coins: 69 },
    { title: "\u4EBA\u6C14\u7968", pic: "/static/gift/gift4.png", coins: 99 },
    { title: "\u9C9C\u82B1", pic: "/static/gift/gift5.png", coins: 520 },
    { title: "\u634F\u634F\u5C0F\u8138", pic: "/static/gift/gift6.png", coins: 99 },
    { title: "\u4F60\u771F\u597D\u770B", pic: "/static/gift/gift7.png", coins: 39 },
    { title: "\u4EB2\u543B", pic: "/static/gift/gift8.png", coins: 79 },
    { title: "\u52A0\u6CB9\u9E2D", pic: "/static/gift/gift9.png", coins: 19 },
    { title: "\u4FDD\u65F6\u6377", pic: "/static/gift/gift10.png", coins: 9 },
    { title: "\u70ED\u6C14\u7403", pic: "/static/gift/gift11.png", coins: 29 },
    { title: "\u73AB\u7470", pic: "/static/gift/gift12.png", coins: 666 },
    { title: "\u6BD4\u5FC3", pic: "/static/gift/gift13.png", coins: 29 },
    { title: "\u6D6A\u6F2B\u70DF\u82B1", pic: "/static/gift/gift14.png", coins: 399 },
    { title: "\u771F\u7684\u7231\u4F60", pic: "/static/gift/gift15.png", coins: 219 },
    { title: "\u79C1\u4EBA\u98DE\u673A", pic: "/static/gift/gift16.png", coins: 168 },
    { title: "\u8C6A\u534E\u90AE\u8F6E", pic: "/static/gift/gift17.png", coins: 39 },
    { title: "\u5609\u5E74\u534E", pic: "/static/gift/gift18.png", coins: 999 },
    { title: "\u60C5\u5B9A\u4E09\u751F", pic: "/static/gift/gift19.png", coins: 1314 },
    { title: "\u6469\u5929\u5927\u53A6", pic: "/static/gift/gift20.png", coins: 2999 }
  ];
  var _imports_0 = "/static/icon-fudai.png";
  var _imports_1 = "/static/icon-hb.png";
  var _imports_2 = "/static/icon-rotate.png";
  var _imports_3 = "/static/icon-hot.png";
  var _imports_4 = "/static/redpacket.png";
  var _imports_6 = "/static/redpacket-over.png";
  var _imports_7 = "/static/avatar/uimg7.jpeg";
  var _style_02 = { "ua__swipervideo": { "": { "height": 100 } }, "ua__swipervideo-wrap": { "": { "height": 100 } }, "ua__swipervideo-player": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0 } }, "ulive__swiperscreen": { "": { "height": 100 } }, "ulive__headlayer": { "": { "maxWidth": "750px", "!position": "absolute", "left": 0, "right": 0, "top": 0 } }, "ulive__mask": { "": { "backgroundColor": "rgba(0,0,0,0.3)", "borderRadius": "50rpx", "alignItems": "center", "flexDirection": "row", "maxWidth": "fit-content" } }, "ulive__roundwrap": { "": { "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" } }, "ulive__roundtext": { "": { "color": "#ffffff", "fontSize": "24rpx" } }, "ulive__hd-liveinfo": { "": { "paddingTop": "15rpx", "paddingRight": "20rpx", "paddingBottom": "15rpx", "paddingLeft": "20rpx" } }, "ulive__hd-avatar": { ".ulive__hd-liveinfo ": { "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx" } }, "logo": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "borderRadius": 50, "height": "60rpx", "width": "60rpx" }, ".ulive__popup-redpacket__wrap .redpacket-infos ": { "borderRadius": "10rpx", "height": "90rpx", "width": "90rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-head ": { "borderRadius": 50, "height": "80rpx", "width": "80rpx" } }, "name": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "color": "#ffffff", "fontSize": "24rpx" }, ".ulive__ft-livewrap-activegift ": { "color": "#ffffff", "fontSize": "28rpx" }, ".ulive__popup-redpacket__wrap .redpacket-infos ": { "color": "#f7e1ad", "fontSize": "28rpx", "marginTop": "20rpx" } }, "zan": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "color": "rgba(255,255,255,0.7)", "fontSize": "20rpx" } }, "btn": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "backgroundColor": "#ff007f", "borderRadius": "50rpx", "marginLeft": "10rpx", "paddingTop": 0, "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "height": "60rpx" }, ".ulive__hd-liveinfo .ulive__hd-avatar .active": { "backgroundColor": "#ffffff" }, ".ulive__ft-livewrap-hotbuy ": { "backgroundColor": "#ffffff", "borderRadius": "30rpx", "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "backgroundColor": "#ff007f", "borderRadius": "10rpx", "alignItems": "center", "paddingTop": 0, "paddingRight": "10rpx", "paddingBottom": 0, "paddingLeft": "10rpx", "height": "50rpx" }, ".ulive__ft-livewrap-toolbar .btnwrap ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderRadius": 50, "alignItems": "center", "justifyContent": "center", "marginLeft": "20rpx", "height": "70rpx", "width": "70rpx", "position": "relative" }, ".ulive__popup-menus__wrap .withdraw ": { "borderRadius": "50rpx", "fontSize": "24rpx", "marginLeft": "20rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-head ": { "alignItems": "center", "marginLeft": "20rpx" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-head .infowrap ": { "backgroundColor": "#333a48", "borderRadius": "5rpx", "marginLeft": "20rpx", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" } }, "btntext": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "color": "#ffffff", "fontSize": "28rpx" }, ".ulive__hd-liveinfo .ulive__hd-avatar .active": { "color": "#ff007f" }, ".ulive__ft-livewrap-hotbuy .btn ": { "color": "#cd910a", "fontSize": "28rpx" } }, "ulive__hd-onlineuser": { ".ulive__hd-liveinfo ": { "alignItems": "flex-end", "justifyContent": "center" } }, "ulive__hd-livewrap__left": { ".ulive__hd-livewrap ": { "marginLeft": "20rpx" } }, "ulive__hd-livewrap__right": { ".ulive__hd-livewrap ": { "alignItems": "flex-end" } }, "ulive__hd-livewrap__redpacket": { ".ulive__hd-livewrap ": { "marginTop": "15rpx" } }, "ulive__redpacket-item": { ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket ": { "alignItems": "flex-end", "justifyContent": "center", "borderRadius": "20rpx", "marginRight": "10rpx", "height": "76rpx", "width": "76rpx", "position": "relative" }, ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket .center": { "alignItems": "center" } }, "ulive__redpacket-image": { ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket ": { "width": "76rpx" } }, "ulive__redpacket-time": { ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket ": { "backgroundColor": "rgba(0,0,0,0.5)", "borderRadius": "20rpx", "color": "#ffffff", "fontSize": "24rpx", "position": "absolute", "bottom": 0 } }, "ulive__footlayer": { "": { "maxWidth": "750px", "!position": "absolute", "left": 0, "right": 0, "bottom": 0 } }, "ulive__ft-livewrap-placeholder": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "alignItems": "center", "flexDirection": "row", "maxWidth": "fit-content" } }, "ulive__ft-livewrap-hotbuy": { "": { "backgroundImage": "linear-gradient(to right, rgba(205, 145, 10, 0.7) 20%, transparent)", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(255,255,255,0.5)", "borderRadius": "20rpx", "alignItems": "center", "maxWidth": "fit-content" } }, "gimg": { ".ulive__ft-livewrap-hotbuy ": { "borderRadius": "20rpx", "marginRight": "10rpx", "height": "100rpx", "width": "100rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "height": "200rpx", "width": "200rpx" } }, "ginfo": { ".ulive__ft-livewrap-hotbuy ": { "color": "#ffffff", "maxWidth": "375rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item ": { "marginLeft": "20rpx" } }, "gdesc": { ".ulive__ft-livewrap-hotbuy ": { "color": "#ffffff", "fontSize": "24rpx" } }, "ulive__ft-livewrap-animateview": { "": { "minHeight": "180rpx" } }, "ulive__ft-livewrap-animatejoin": { "": { "minHeight": "80rpx" } }, "ulive__ft-livewrap-animategift": { "": { "minHeight": "100rpx" } }, "ulive__ft-livewrap-joinroom": { "": { "backgroundImage": "linear-gradient(to right, #ab29fd, transparent)", "borderRadius": "30rpx", "maxWidth": "fit-content", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx", "minWidth": "500rpx", "animation": "ulive__animSlideInRight 2s" } }, "ulive__ft-livewrap-joinroom__text": { ".ulive__ft-livewrap-joinroom ": { "color": "#ffffff", "fontSize": "28rpx" } }, "ulive__ft-livewrap-activegift": { "": { "backgroundImage": "linear-gradient(to right, #ff63b1, transparent)", "borderRadius": "50rpx", "maxWidth": "fit-content", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx", "position": "relative", "animation": "ulive__animSlideInLeft 0.3s" } }, "avatar": { ".ulive__ft-livewrap-activegift ": { "borderRadius": 50, "height": "60rpx", "width": "60rpx" } }, "info": { ".ulive__ft-livewrap-activegift ": { "paddingTop": 0, "paddingRight": "90rpx", "paddingBottom": 0, "paddingLeft": "20rpx" } }, "desc": { ".ulive__ft-livewrap-activegift ": { "color": "#ffffff", "fontSize": "24rpx" }, ".ulive__popup-redpacket__wrap .redpacket-infos ": { "color": "#f7e1ad", "fontSize": "36rpx", "marginTop": "20rpx" } }, "gift": { ".ulive__ft-livewrap-activegift ": { "height": "50rpx", "width": "50rpx", "position": "absolute", "top": "10rpx", "right": "20rpx", "transform": "scale(1.5)" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "display": "flex", "alignItems": "flex-start", "marginBottom": "10rpx" } }, "ulive__ft-livewrap-mixinview": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "alignItems": "flex-end" } }, "ulive__ft-livewrap-chats": { ".ulive__ft-livewrap-mixinview ": { "height": "400rpx", "maxWidth": "600rpx", "pointerEvents": "auto", "position": "relative" } }, "ulive__ft-livewrap-chats__scrollview": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "height": "400rpx" } }, "notice": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "marginBottom": "10rpx" } }, "msg": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "display": "flex", "alignItems": "flex-start", "marginBottom": "10rpx" } }, "item": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderRadius": "30rpx", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats .msg ": { "flexDirection": "row" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats .gift ": { "flexDirection": "row" } }, "noticetext": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#77e8e1", "fontSize": "28rpx" } }, "user": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#77e8e1", "fontSize": "24rpx", "marginRight": "10rpx" } }, "text": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ffffff", "fontSize": "28rpx" } }, "giftuser": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ffdd1a", "marginRight": "15rpx" } }, "gifttext": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ff0ad3" } }, "giftimg": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx", "width": "50rpx", "transform": "scale(1.2)" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "height": "90rpx", "width": "90rpx", "objectFit": "cover" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item.on ": { "transform": "scale(1.3)", "transitionDuration": 300 } }, "giftnum": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ff0ad3", "fontSize": "32rpx", "fontStyle": "italic" } }, "tag": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "backgroundImage": "linear-gradient(45deg, #f4bc61, #da8300)", "borderRadius": "30rpx", "color": "#ffffff", "verticalAlign": "top", "fontSize": "24rpx", "marginRight": "10rpx", "paddingTop": "3rpx", "paddingRight": "10rpx", "paddingBottom": "3rpx", "paddingLeft": "10rpx" } }, "tag-buy": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "backgroundColor": "#ff007f", "marginLeft": "10rpx", "marginRight": 0 } }, "ulive__ft-livewrap-chats__unread": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "alignItems": "center", "backgroundColor": "#ffffff", "borderRadius": "30rpx", "paddingTop": "7rpx", "paddingRight": 0, "paddingBottom": "7rpx", "paddingLeft": 0, "width": "160rpx", "position": "absolute", "left": 0, "bottom": 0 } }, "ulive__ft-livewrap-activegoods": { ".ulive__ft-livewrap-mixinview ": { "marginLeft": "20rpx", "height": "400rpx", "width": "200rpx" } }, "ulive__ft-livewrap-activegoods__hotsale": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods ": { "backgroundImage": "linear-gradient(to right, #ff9900, rgba(255, 153, 0, 0.1))", "borderRadius": "30rpx", "alignItems": "center", "marginBottom": "10rpx", "paddingLeft": "20rpx" } }, "fimg": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__hotsale ": { "height": "30rpx", "width": "30rpx", "marginRight": "10rpx" } }, "ulive__ft-livewrap-activegoods__swiper": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods ": { "height": "375rpx" } }, "ulive__ft-livewrap-activegoods__card": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods ": { "backgroundColor": "#ffffff", "borderRadius": "10rpx", "overflow": "hidden", "width": "200rpx", "position": "relative", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#ffffff" } }, "gwrap": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "height": "200rpx", "position": "relative" } }, "waves": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderTopLeftRadius": 0, "borderTopRightRadius": "20rpx", "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": 0, "paddingTop": "5rpx", "paddingRight": "10rpx", "paddingBottom": "5rpx", "paddingLeft": "10rpx", "position": "absolute", "top": 0 }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .gpic ": { "backgroundColor": "rgba(235,72,104,0.9)", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": "20rpx", "alignItems": "center", "justifyContent": "center", "paddingTop": "5rpx", "paddingRight": 0, "paddingBottom": "5rpx", "paddingLeft": 0, "textAlign": "center", "position": "absolute", "bottom": 0, "left": 0, "right": 0 } }, "close": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "position": "absolute", "top": "10rpx", "right": "10rpx" } }, "qiang": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "color": "#ffdd1a", "fontSize": "36rpx", "fontStyle": "italic", "marginRight": "10rpx" } }, "ulive__ft-livewrap-toolbar": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "15rpx", "paddingLeft": "20rpx" } }, "editorwrap": { ".ulive__ft-livewrap-toolbar ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderWidth": 0, "borderStyle": "solid", "borderColor": "#000000", "borderRadius": "50rpx", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx", "height": "70rpx", "position": "relative" } }, "editorwrap-text": { ".ulive__ft-livewrap-toolbar ": { "color": "rgba(255,255,255,0.8)", "fontSize": "28rpx" } }, "btnwrap": { ".ulive__ft-livewrap-toolbar ": { "justifyContent": "flex-end" } }, "ulive__video-chat__wrap": { "": { "maxWidth": "750px", "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "zIndex": 2023 } }, "ulive__video-chat__mask": { "": { "backgroundColor": "rgba(0,0,0,0.4)", "position": "fixed", "top": 0, "left": 0, "right": 0, "bottom": 0, "animation": "animMask 0.5s" } }, "ulive__video-chat__body": { "": { "backgroundColor": "rgba(0,0,0,0)", "position": "fixed", "left": 0, "right": 0, "bottom": 0 } }, "ulive__video-chat__editor": { "": { "backgroundColor": "#ffffff", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__popup-redpacket__wrap": { "": { "height": "756rpx", "width": "560rpx", "position": "relative" } }, "redpacket-cover": { ".ulive__popup-redpacket__wrap ": { "height": "756rpx", "width": "560rpx", "position": "absolute", "left": 0, "top": 0 } }, "redpacket-infos": { ".ulive__popup-redpacket__wrap ": { "alignItems": "center", "justifyContent": "center", "position": "absolute", "top": "100rpx", "left": 0, "right": 0 } }, "redpacket-btn": { ".ulive__popup-redpacket__wrap ": { "borderRadius": 50, "display": "flex", "alignItems": "center", "justifyContent": "center", "height": "120rpx", "width": "120rpx", "position": "absolute", "top": "395rpx", "left": "220rpx" } }, "redpacket-btntxt": { ".ulive__popup-redpacket__wrap ": { "color": "#eb4868", "fontSize": "70rpx" } }, "redpacket-more": { ".ulive__popup-redpacket__wrap ": { "alignItems": "center", "justifyContent": "center", "position": "absolute", "bottom": "100rpx", "left": 0, "right": 0 } }, "redpacket-endtime": { ".ulive__popup-redpacket__wrap ": { "alignItems": "center", "justifyContent": "center", "position": "absolute", "bottom": "150rpx", "left": 0, "right": 0 } }, "withdraw": { ".ulive__popup-menus__wrap ": { "backgroundColor": "#ffffff", "boxShadow": "0 1px 3px #eee", "borderRadius": "30rpx", "marginTop": "25rpx", "marginRight": "25rpx", "marginBottom": "25rpx", "marginLeft": "25rpx", "paddingTop": "25rpx", "paddingRight": "25rpx", "paddingBottom": "25rpx", "paddingLeft": "25rpx" } }, "ulive__popup-menus__wrap-scrollbox": { ".ulive__popup-menus__wrap ": { "backgroundColor": "#ffffff", "boxShadow": "0 1px 3px #eee", "borderRadius": "30rpx", "marginTop": 0, "marginRight": "25rpx", "marginBottom": "25rpx", "marginLeft": "25rpx", "paddingTop": "15rpx", "paddingRight": 0, "paddingBottom": "25rpx", "paddingLeft": 0 } }, "ulive__popup-menus__wrap-body": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox ": { "flexWrap": "wrap" } }, "ulive__popup-menus__item": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox .ulive__popup-menus__wrap-body ": { "alignItems": "center", "justifyContent": "center", "paddingTop": "20rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": 0, "width": "175rpx" } }, "icoimg": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox .ulive__popup-menus__wrap-body .ulive__popup-menus__item ": { "height": "50rpx", "width": "50rpx", "objectFit": "cover" } }, "label": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox .ulive__popup-menus__wrap-body .ulive__popup-menus__item ": { "fontSize": "24rpx", "marginTop": "20rpx" } }, "ulive__popup-goods__wrap-head": { ".ulive__popup-goods__wrap ": { "alignItems": "center", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__popup-goods__wrap-cate": { ".ulive__popup-goods__wrap ": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#eeeeee", "paddingTop": "20rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": 0 } }, "cateitem": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate ": { "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#dddddd", "borderRadius": "50rpx", "marginLeft": "20rpx", "paddingTop": "5rpx", "paddingRight": "20rpx", "paddingBottom": "5rpx", "paddingLeft": "20rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate .on": { "borderColor": "#eb4868" } }, "catetxt": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate ": { "color": "#999999", "fontSize": "24rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate .cateitem.on ": { "color": "#eb4868" } }, "ulive__popup-goods__wrap-body": { ".ulive__popup-goods__wrap ": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__popup-goods__item": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body ": { "marginBottom": "20rpx", "paddingBottom": "20rpx" } }, "gpic": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item ": { "borderRadius": "20rpx", "overflow": "hidden", "height": "200rpx", "width": "200rpx", "position": "relative" } }, "img": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .gpic ": { "borderRadius": "20rpx", "height": "200rpx", "width": "200rpx" } }, "num": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .gpic ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderTopLeftRadius": "20rpx", "borderTopRightRadius": 0, "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": 0, "paddingTop": "5rpx", "paddingRight": "20rpx", "paddingBottom": "5rpx", "paddingLeft": "20rpx", "position": "absolute", "top": 0 } }, "title": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "fontSize": "32rpx" } }, "subtit": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "alignItems": "center", "marginTop": "5rpx" } }, "tags": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "marginTop": "10rpx" } }, "tagsitem": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .tags ": { "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#fde7eb", "borderRadius": "5rpx", "marginRight": "5rpx", "paddingTop": "2rpx", "paddingRight": "8rpx", "paddingBottom": "2rpx", "paddingLeft": "8rpx" } }, "tagstext": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .tags ": { "color": "#eb4868", "fontSize": "20rpx" } }, "foot": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "marginTop": "20rpx" } }, "price": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .foot ": { "alignItems": "center" } }, "del": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .foot ": { "marginLeft": "5rpx" } }, "deltxt": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .foot ": { "color": "#aaaaaa", "fontSize": "24rpx", "textDecoration": "line-through" } }, "infowrap": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-head ": { "paddingTop": "30rpx", "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "ulive__popup-gifts__wrap-body": { ".ulive__popup-gifts__wrap ": { "flexWrap": "wrap", "paddingTop": 0, "paddingRight": "25rpx", "paddingBottom": "25rpx", "paddingLeft": "25rpx" } }, "ulive__popup-gifts__item": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body ": { "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)", "borderRadius": "15rpx", "alignItems": "center", "justifyContent": "center", "height": "250rpx", "width": "175rpx" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .on": { "backgroundColor": "#333a48", "borderColor": "#3f4859" } }, "giftname": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "color": "#ffffff", "fontSize": "28rpx", "marginTop": "10rpx" } }, "giftcoin": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "marginTop": "5rpx" } }, "giftcoin-text": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "color": "#ffffff", "fontSize": "24rpx" } }, "giftbtn": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "backgroundColor": "#eb4868", "borderRadius": "5rpx", "marginTop": "5rpx", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" } }, "giftbtn-text": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "color": "#ffffff", "fontSize": "24rpx" } }, "ulive__modal-gifts__content": { "": { "paddingTop": "50rpx", "paddingRight": "50rpx", "paddingBottom": "50rpx", "paddingLeft": "50rpx" } }, "ulive__modal-gifts__btns": { "": { "justifyContent": "flex-end", "paddingTop": "50rpx", "paddingRight": "50rpx", "paddingBottom": "50rpx", "paddingLeft": "50rpx" } }, "@FONT-FACE": [{}, {}, {}, {}], "@TRANSITION": { "giftimg": { "duration": 300 } } };
  var _sfc_main2 = {
    __name: "live",
    props: {
      // 直播id
      roomid: { type: [Number, String] }
    },
    setup(__props, { expose: __expose }) {
      var _a2;
      __expose();
      const props22 = __props;
      onLoad((option) => {
        liveJson.map((item, index2) => {
          if (parseInt(item.id) == parseInt(props22.roomid)) {
            currentLive.value = index2;
            scrollBottom();
          }
        });
      });
      (0, import_vue2.onMounted)(() => {
        mockJoinRoom();
        mockSendGift();
      });
      const { globalData } = getApp();
      formatAppLog("log", "at pages/live/live.nvue:27", globalData);
      const menuBarT = (0, import_vue2.ref)(((_a2 = globalData.menu) == null ? void 0 : _a2.top) || globalData.statusBarH);
      const winWidth = (0, import_vue2.ref)(globalData.screenWidth);
      const winHeight = (0, import_vue2.ref)(globalData.screenHeight);
      const liveList = (0, import_vue2.ref)(liveJson);
      const currentLive = (0, import_vue2.ref)(0);
      const giftList = (0, import_vue2.ref)(giftJson);
      const giftCur = (0, import_vue2.ref)(0);
      const giftCoins = (0, import_vue2.ref)(0);
      const joinRoomData = (0, import_vue2.ref)(null);
      const sendGiftData = (0, import_vue2.ref)([]);
      const isVisibleChatbox = (0, import_vue2.ref)(false);
      const chatEditor = (0, import_vue2.ref)("");
      const isScrolltolower = (0, import_vue2.ref)(false);
      const scrollToView = (0, import_vue2.ref)("");
      const msgUnread = (0, import_vue2.ref)([]);
      const isVisibleGoodsTalk = (0, import_vue2.ref)(true);
      const goodsTalkWidth = (0, import_vue2.ref)(0);
      const redpacketRef = (0, import_vue2.ref)(null);
      const isVisibleRedpacketRecieve = (0, import_vue2.ref)(false);
      const isVisibleRedpacketWait = (0, import_vue2.ref)(false);
      const menuList = (0, import_vue2.ref)([
        { label: "\u63D0\u73B0", img: "/static/menu/menu1.png" },
        { label: "\u6211\u7684\u8BA2\u5355", img: "/static/menu/menu2.png" },
        { label: "\u8054\u7CFB\u5BA2\u670D", img: "/static/menu/menu3.png" },
        { label: "\u6392\u884C\u699C", img: "/static/menu/menu4.png" },
        { label: "\u8F6C\u76D8\u62BD\u5956", img: "/static/menu/menu5.png" },
        { label: "\u4E2D\u5956\u8BB0\u5F55", img: "/static/menu/menu6.png" },
        { label: "\u6211\u7684\u4F18\u60E0\u5238", img: "/static/menu/menu7.png" },
        { label: "\u8BC4\u8BBA\u8BB0\u5F55\u677F", img: "/static/menu/menu8.png" },
        { label: "\u63A8\u5E7F\u5458", img: "/static/menu/menu9.png" },
        { label: "\u4E3E\u62A5", img: "/static/menu/menu10.png" },
        { label: "\u7279\u6548", img: "/static/menu/menu11.png" },
        { label: "\u5206\u4EAB", img: "/static/menu/menu12.png" }
      ]);
      const menusRef = (0, import_vue2.ref)(null);
      const goodsRef = (0, import_vue2.ref)(null);
      const goodsData = (0, import_vue2.ref)({});
      const giftsRef = (0, import_vue2.ref)(null);
      const giftModalRef = (0, import_vue2.ref)(null);
      const giftsTabList = (0, import_vue2.ref)([
        { name: "\u793C\u7269" },
        { name: "\u4E92\u52A8" },
        { name: "\u7C89\u4E1D\u56E2" },
        { name: "\u7B49\u7EA7" }
      ]);
      const giftsTabCurrent = (0, import_vue2.ref)(0);
      const keyboardHeight = (0, import_vue2.ref)(0);
      const fixKeyboardHeight = (0, import_vue2.computed)(() => {
        let keyboardH = keyboardHeight.value > 0 ? keyboardHeight.value + 56 : keyboardHeight.value;
        return keyboardH ? keyboardH + "px" : null;
      });
      const fixTextStyle = (0, import_vue2.computed)(() => {
        return { "max-width": globalData.screenWidth - goodsTalkWidth.value - 100 + "px" };
      });
      uni.onKeyboardHeightChange((e) => {
        keyboardHeight.value = e.height;
        if (e.height <= 0) {
          handleCloseChatbox();
        }
      });
      (0, import_vue2.watch)(() => isVisibleGoodsTalk.value, (val) => {
        if (val) {
          (0, import_vue2.nextTick)(() => {
            let query = uni.createSelectorQuery();
            query.select("#goodsTalkID").boundingClientRect();
            query.exec((res) => {
              var _a3;
              if (res) {
                goodsTalkWidth.value = ((_a3 = res[0]) == null ? void 0 : _a3.width) || 0;
              }
            });
          });
        } else {
          goodsTalkWidth.value = 30;
        }
      }, { immediate: true });
      const getVideoContext = () => {
        return uni.createVideoContext(`uplayer${currentLive.value}`, (0, import_vue2.getCurrentInstance)());
      };
      const handleChange = (e) => {
        const index2 = e.detail.current;
        handleReset();
        currentLive.value = index2;
        handlePlay();
        scrollBottom();
      };
      const handleTransition = (e) => {
      };
      const handlePlay = () => {
        formatAppLog("log", "at pages/live/live.nvue:131", "video play");
        let video2 = getVideoContext();
        if (!video2)
          return;
        video2.play();
      };
      const handlePause = () => {
        let video2 = getVideoContext();
        if (!video2)
          return;
        video2.pause();
      };
      const handleReset = () => {
        let video2 = getVideoContext();
        if (!video2)
          return;
        video2.pause();
        video2.seek(0);
        video2.stop();
      };
      onShow(() => {
        handlePlay();
      });
      onHide(() => {
        handleReset();
      });
      const mockJoinRoom = () => {
        setInterval(() => {
          let joinArr = ["Jack", "\u963Fsir", "Andy", "Hisen", "\u738B\u4E8C\u5B9D", "\u5C0F\u674E\u5B50", "Alice", "\u5927\u98DE", "\u7490\u7490", "\u5B87\u8F89"];
          joinRoomData.value = joinArr[Math.floor(Math.random() * joinArr.length)];
          if (joinRoomData.value) {
            setTimeout(() => {
              joinRoomData.value = null;
            }, 7e3);
          }
        }, 5e3);
      };
      const mockSendGift = () => {
        setInterval(() => {
          let giftArr = [
            { title: "\u5C0F\u5FC3\u5FC3", pic: "/static/gift/gift1.png", user: "Jack", avatar: "/static/avatar/uimg1.jpeg" },
            { title: "\u68D2\u68D2\u7CD6", pic: "/static/gift/gift2.png", user: "Andy", avatar: "/static/avatar/uimg2.jpeg" },
            { title: "\u5927\u5564\u9152", pic: "/static/gift/gift3.png", user: "Hisen", avatar: "/static/avatar/uimg3.jpeg" },
            { title: "\u4EBA\u6C14\u7968", pic: "/static/gift/gift4.png", user: "\u7490\u7490", avatar: "/static/avatar/uimg4.jpeg" },
            { title: "\u9C9C\u82B1", pic: "/static/gift/gift5.png", user: "\u5C0F\u9A6C", avatar: "/static/avatar/uimg5.jpeg" },
            { title: "\u634F\u634F\u5C0F\u8138", pic: "/static/gift/gift6.png", user: "Alice", avatar: "/static/avatar/uimg6.jpeg" },
            { title: "\u4F60\u771F\u597D\u770B", pic: "/static/gift/gift7.png", user: "\u8D75\u51AC\u6885", avatar: "/static/avatar/uimg7.jpeg" },
            { title: "\u4EB2\u543B", pic: "/static/gift/gift8.png", user: "YOYO", avatar: "/static/avatar/uimg3.jpeg" },
            { title: "\u73AB\u7470", pic: "/static/gift/gift12.png", user: "\u5B87\u8F89", avatar: "/static/avatar/uimg2.jpeg" },
            { title: "\u6BD4\u5FC3", pic: "/static/gift/gift13.png", user: "Len", avatar: "/static/avatar/uimg1.jpeg" },
            { title: "\u6D6A\u6F2B\u70DF\u82B1", pic: "/static/gift/gift14.png", user: "Apple", avatar: "/static/avatar/uimg5.jpeg" },
            { title: "\u771F\u7684\u7231\u4F60", pic: "/static/gift/gift15.png", user: "\u5C0F\u5B59", avatar: "/static/avatar/uimg6.jpeg" },
            { title: "\u79C1\u4EBA\u98DE\u673A", pic: "/static/gift/gift16.png", user: "\u963F\u4F1F", avatar: "/static/avatar/uimg7.jpeg" }
          ];
          sendGiftData.value = giftArr[Math.floor(Math.random() * giftArr.length)];
          if (!isEmpty(sendGiftData.value)) {
            setTimeout(() => {
              sendGiftData.value = [];
            }, 5e3);
          }
        }, 3e3);
      };
      const handleOpenChatbox = () => {
        isVisibleChatbox.value = true;
      };
      const handleCloseChatbox = () => {
        uni.hideKeyboard();
        isVisibleChatbox.value = false;
        chatEditor.value = "";
      };
      const handleSendChatmsg = () => {
        if (!chatEditor.value)
          return;
        let msglist = liveList.value[currentLive.value].message;
        let len = msglist.length;
        let data = {
          id: `202312${++len}`,
          user: "Andy",
          content: chatEditor.value
        };
        msglist = msglist.concat(data);
        liveList.value[currentLive.value].message = msglist;
        if (isScrolltolower.value) {
          scrollBottom();
        } else {
          msgUnread.value.push("unread");
        }
        handleCloseChatbox();
      };
      const handleMsgScroll = (e) => {
        isScrolltolower.value = false;
      };
      const handleMsgScrollLower = (e) => {
        setTimeout(() => {
          if (e.detail.direction == "bottom") {
            handleMsgIsRead();
          }
        }, 100);
      };
      const handleMsgIsRead = () => {
        msgUnread.value = [];
        scrollBottom();
      };
      const scrollBottom = () => {
        scrollToView.value = "";
        isScrolltolower.value = true;
        (0, import_vue2.nextTick)(() => {
          let msglist = liveList.value[currentLive.value].message;
          let msgnew = msglist[msglist.length - 1];
          scrollToView.value = "msg-" + msgnew.id;
        });
      };
      const handleOpenRedpacket = (type) => {
        redpacketRef.value.open();
        if (type == 1) {
          isVisibleRedpacketRecieve.value = true;
        } else if (type == 2) {
          isVisibleRedpacketWait.value = true;
        }
      };
      const handleCloseRedpacket = () => {
        redpacketRef.value.close();
        isVisibleRedpacketRecieve.value = false;
        isVisibleRedpacketWait.value = false;
      };
      const handleOpenMenus = () => {
        menusRef.value.open();
      };
      const handleOpenGoods = (item) => {
        goodsData.value = item;
        goodsRef.value.open();
      };
      const toGoodsDetail = () => {
        let id = liveList.value[currentLive.value].id;
        uni.navigateTo({
          url: "/pages/goods/detail?rid=" + id
        });
      };
      const handleOpenGifts = () => {
        giftsRef.value.open();
      };
      const handleCheckGift = (item, index2) => {
        giftCur.value = index2;
        giftCoins.value = item.coins;
      };
      const handleSendGift = (item) => {
        giftModalRef.value.open();
      };
      const handleSendGiftClose = () => {
        giftModalRef.value.close();
      };
      const handleFollow = (index2) => {
        liveList.value[index2].isFollow = !liveList.value[index2].isFollow;
      };
      const handleLiveQuit = () => {
        uni.navigateBack();
      };
      const __returned__ = { props: props22, globalData, menuBarT, winWidth, winHeight, liveList, currentLive, giftList, giftCur, giftCoins, joinRoomData, sendGiftData, isVisibleChatbox, chatEditor, isScrolltolower, scrollToView, msgUnread, isVisibleGoodsTalk, goodsTalkWidth, redpacketRef, isVisibleRedpacketRecieve, isVisibleRedpacketWait, menuList, menusRef, goodsRef, goodsData, giftsRef, giftModalRef, giftsTabList, giftsTabCurrent, keyboardHeight, fixKeyboardHeight, fixTextStyle, getVideoContext, handleChange, handleTransition, handlePlay, handlePause, handleReset, mockJoinRoom, mockSendGift, handleOpenChatbox, handleCloseChatbox, handleSendChatmsg, handleMsgScroll, handleMsgScrollLower, handleMsgIsRead, scrollBottom, handleOpenRedpacket, handleCloseRedpacket, handleOpenMenus, handleOpenGoods, toGoodsDetail, handleOpenGifts, handleCheckGift, handleSendGift, handleSendGiftClose, handleFollow, handleLiveQuit, onMounted: import_vue2.onMounted, nextTick: import_vue2.nextTick, ref: import_vue2.ref, computed: import_vue2.computed, watch: import_vue2.watch, getCurrentInstance: import_vue2.getCurrentInstance, get onLoad() {
        return onLoad;
      }, get onShow() {
        return onShow;
      }, get onHide() {
        return onHide;
      }, get isEmpty() {
        return isEmpty;
      }, get liveJson() {
        return liveJson;
      }, get giftJson() {
        return giftJson;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_swiper_item = (0, import_vue2.resolveComponent)("swiper-item");
    const _component_uv_icon = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uv-icon"), __easycom_0$2);
    const _component_swiper = (0, import_vue2.resolveComponent)("swiper");
    const _component_ua_layout = resolveEasycom((0, import_vue2.resolveDynamicComponent)("ua-layout"), __easycom_1$1);
    const _component_uv_input = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uv-input"), __easycom_2$1);
    const _component_uv_button = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uv-button"), __easycom_3);
    const _component_uv_popup = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uv-popup"), __easycom_4);
    const _component_button = (0, import_vue2.resolveComponent)("button");
    const _component_navigator = (0, import_vue2.resolveComponent)("navigator");
    const _component_uv_line_progress = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uv-line-progress"), __easycom_5);
    const _component_uv_tabs = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uv-tabs"), __easycom_6);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createVNode)(_component_ua_layout, { tabbar: false }, {
        default: (0, import_vue2.withCtx)(() => [
          (0, import_vue2.createElementVNode)("view", { class: "ua__swipervideo flex1" }, [
            (0, import_vue2.createVNode)(_component_swiper, {
              class: "ua__swipervideo-wrap flex1",
              current: $setup.currentLive,
              vertical: "",
              circular: true,
              duration: 200,
              onChange: $setup.handleChange,
              onTransition: $setup.handleTransition
            }, {
              default: (0, import_vue2.withCtx)(() => [
                ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                  import_vue2.Fragment,
                  null,
                  (0, import_vue2.renderList)($setup.liveList, (item, index2) => {
                    return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(
                      _component_swiper_item,
                      { key: index2 },
                      {
                        default: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createElementVNode)("u-video", {
                            class: "ua__swipervideo-player flex1",
                            id: "uplayer" + index2,
                            src: item.src,
                            controls: false,
                            loop: true,
                            autoplay: index2 == $setup.currentLive,
                            showCenterPlayBtn: false,
                            objectFit: "cover",
                            style: (0, import_vue2.normalizeStyle)({ "width": `${$setup.winWidth}px`, "height": `${$setup.winHeight}px` })
                          }, null, 12, ["id", "src", "autoplay"]),
                          (0, import_vue2.createVNode)(
                            _component_swiper,
                            {
                              class: "ulive__swiperscreen flex1",
                              current: 1
                            },
                            {
                              default: (0, import_vue2.withCtx)(() => [
                                (0, import_vue2.createCommentVNode)(" \u6E05\u5C4F "),
                                (0, import_vue2.createVNode)(_component_swiper_item, null, {
                                  default: (0, import_vue2.withCtx)(() => [
                                    (0, import_vue2.createElementVNode)("u-text", null, " \u7B2C\u4E00\u5C4F ")
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                (0, import_vue2.createVNode)(
                                  _component_swiper_item,
                                  null,
                                  {
                                    default: (0, import_vue2.withCtx)(() => [
                                      (0, import_vue2.createElementVNode)(
                                        "view",
                                        {
                                          class: "ulive__headlayer",
                                          style: (0, import_vue2.normalizeStyle)({ "top": $setup.menuBarT + "px" })
                                        },
                                        [
                                          (0, import_vue2.createCommentVNode)(" logo+\u5173\u6CE8 "),
                                          (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-liveinfo flexbox flex-row flex-alignc" }, [
                                            (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-avatar ulive__mask flex-alignc" }, [
                                              (0, import_vue2.createElementVNode)("u-image", {
                                                class: "logo",
                                                src: item.logo,
                                                mode: "widthFix"
                                              }, null, 8, ["src"]),
                                              (0, import_vue2.createElementVNode)("view", { class: "flex1 flexbox flex-col ml-10" }, [
                                                (0, import_vue2.createElementVNode)(
                                                  "u-text",
                                                  { class: "name" },
                                                  (0, import_vue2.toDisplayString)(item.name),
                                                  1
                                                  /* TEXT */
                                                ),
                                                (0, import_vue2.createElementVNode)(
                                                  "u-text",
                                                  { class: "zan" },
                                                  (0, import_vue2.toDisplayString)(item.likeNum) + "\u672C\u573A\u70B9\u8D5E",
                                                  1
                                                  /* TEXT */
                                                )
                                              ]),
                                              (0, import_vue2.createElementVNode)("view", {
                                                class: (0, import_vue2.normalizeClass)(["btn flexbox flex-row flex-alignc", { "active": item.isFollow }]),
                                                onClick: ($event) => $setup.handleFollow(index2)
                                              }, [
                                                (0, import_vue2.createElementVNode)(
                                                  "u-text",
                                                  {
                                                    class: (0, import_vue2.normalizeClass)(["btntext", { "active": item.isFollow }])
                                                  },
                                                  (0, import_vue2.toDisplayString)(item.isFollow ? "\u5DF2\u5173\u6CE8" : "\u5173\u6CE8"),
                                                  3
                                                  /* TEXT, CLASS */
                                                )
                                              ], 10, ["onClick"])
                                            ]),
                                            (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-onlineuser flex1" }, [
                                              (0, import_vue2.createVNode)(_component_uv_icon, {
                                                name: "close",
                                                color: "#fff",
                                                onClick: $setup.handleLiveQuit
                                              })
                                            ])
                                          ]),
                                          (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-livewrap flexbox flex-row" }, [
                                            (0, import_vue2.createCommentVNode)(" \u5DE6\u8FB9 "),
                                            (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-livewrap__left flex1 flexbox flex-col" }, [
                                              (0, import_vue2.createCommentVNode)(' <view class="ulive__roundwrap ulive__mask">\r\n								<text class="ulive__roundtext">\u56DE\u653E</text>\r\n								</view> '),
                                              (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-livewrap__tags flexbox flex-row" }, [
                                                (0, import_vue2.createElementVNode)("view", { class: "ulive__roundwrap ulive__mask" }, [
                                                  (0, import_vue2.createVNode)(_component_uv_icon, {
                                                    name: "shopping-cart",
                                                    color: "#ffdd1a"
                                                  }),
                                                  (0, import_vue2.createElementVNode)("u-text", { class: "ulive__roundtext" }, "\u670D\u9970\u978B\u5305\u699C\u7B2C1\u540D")
                                                ]),
                                                (0, import_vue2.createElementVNode)("view", { class: "ulive__roundwrap ulive__mask ml-10" }, [
                                                  (0, import_vue2.createVNode)(_component_uv_icon, {
                                                    name: "level",
                                                    color: "#ffdd1a"
                                                  }),
                                                  (0, import_vue2.createElementVNode)("u-text", { class: "ulive__roundtext" }, "\u5C0F\u65F6\u699C")
                                                ])
                                              ]),
                                              (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-livewrap__redpacket flexbox flex-row" }, [
                                                (0, import_vue2.createElementVNode)("view", {
                                                  class: "ulive__redpacket-item ulive__mask",
                                                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleOpenRedpacket(1))
                                                }, [
                                                  (0, import_vue2.createElementVNode)("u-image", {
                                                    class: "ulive__redpacket-image",
                                                    src: _imports_0,
                                                    mode: "widthFix"
                                                  }),
                                                  (0, import_vue2.createElementVNode)("u-text", { class: "ulive__redpacket-time" }, "04:49")
                                                ]),
                                                (0, import_vue2.createElementVNode)("view", {
                                                  class: "ulive__redpacket-item ulive__mask",
                                                  onClick: _cache[1] || (_cache[1] = ($event) => $setup.handleOpenRedpacket(2))
                                                }, [
                                                  (0, import_vue2.createElementVNode)("u-image", {
                                                    class: "ulive__redpacket-image",
                                                    src: _imports_1,
                                                    mode: "widthFix"
                                                  }),
                                                  (0, import_vue2.createElementVNode)("u-text", { class: "ulive__redpacket-time" }, "04:49")
                                                ]),
                                                (0, import_vue2.createElementVNode)("view", { class: "ulive__redpacket-item ulive__mask center" }, [
                                                  (0, import_vue2.createElementVNode)("u-image", {
                                                    class: "ulive__redpacket-image",
                                                    src: _imports_2,
                                                    mode: "widthFix"
                                                  }),
                                                  (0, import_vue2.createElementVNode)("u-text", { class: "ulive__redpacket-time" }, "04:49")
                                                ])
                                              ])
                                            ]),
                                            (0, import_vue2.createElementVNode)("view", { class: "ulive__hd-livewrap__right flexbox flex-col" }, [
                                              (0, import_vue2.createElementVNode)("view", { class: "ulive__roundwrap ulive__mask mr-20" }, [
                                                (0, import_vue2.createVNode)(_component_uv_icon, {
                                                  name: "kefu-ermai",
                                                  color: "#fff"
                                                }),
                                                (0, import_vue2.createElementVNode)("u-text", { class: "ulive__roundtext ml-5" }, "\u540E\u53F0")
                                              ])
                                            ])
                                          ])
                                        ],
                                        4
                                        /* STYLE */
                                      ),
                                      (0, import_vue2.createElementVNode)("view", { class: "ulive__footlayer" }, [
                                        (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-placeholder animated fadeIn" }, [
                                          (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-hotbuy flexbox flex-row" }, [
                                            (0, import_vue2.createElementVNode)("u-image", {
                                              class: "gimg",
                                              src: item.poster,
                                              mode: "aspectFill"
                                            }, null, 8, ["src"]),
                                            (0, import_vue2.createElementVNode)("view", { class: "ginfo flex1" }, [
                                              (0, import_vue2.createElementVNode)("view", { class: "flexbox flex-row" }, [
                                                (0, import_vue2.createElementVNode)("u-text", { class: "user c-ffdd1a" }, "Andy"),
                                                (0, import_vue2.createElementVNode)(
                                                  "u-text",
                                                  { class: "c-fff" },
                                                  "\u7B49" + (0, import_vue2.toDisplayString)(item.saleNum) + "\u4EBA\u5728\u8D2D\u4E70",
                                                  1
                                                  /* TEXT */
                                                )
                                              ]),
                                              (0, import_vue2.createElementVNode)(
                                                "u-text",
                                                { class: "gdesc clamp1" },
                                                (0, import_vue2.toDisplayString)(item.desc),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            (0, import_vue2.createElementVNode)("view", { class: "btn" }, [
                                              (0, import_vue2.createElementVNode)("u-text", { class: "btntext" }, "\u53BB\u8D2D\u4E70")
                                            ])
                                          ])
                                        ]),
                                        (0, import_vue2.createCommentVNode)(" \u52A0\u5165\u76F4\u64AD\u95F4/\u9001\u793C\u7269\u63D0\u793A "),
                                        (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-animateview flexbox flex-col" }, [
                                          (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-animatejoin ulive__ft-livewrap-placeholder" }, [
                                            $setup.joinRoomData ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                              key: 0,
                                              class: "ulive__ft-livewrap-joinroom"
                                            }, [
                                              (0, import_vue2.createElementVNode)(
                                                "u-text",
                                                { class: "ulive__ft-livewrap-joinroom__text" },
                                                "\u6B22\u8FCE" + (0, import_vue2.toDisplayString)($setup.joinRoomData) + "\u52A0\u5165\u4E86\u76F4\u64AD\u95F4",
                                                1
                                                /* TEXT */
                                              )
                                            ])) : (0, import_vue2.createCommentVNode)("v-if", true)
                                          ]),
                                          (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-animategift ulive__ft-livewrap-placeholder" }, [
                                            !$setup.isEmpty($setup.sendGiftData) ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                              key: 0,
                                              class: "ulive__ft-livewrap-activegift flexbox flex-row flex-alignc"
                                            }, [
                                              (0, import_vue2.createElementVNode)("u-image", {
                                                class: "avatar",
                                                src: $setup.sendGiftData.avatar
                                              }, null, 8, ["src"]),
                                              (0, import_vue2.createElementVNode)("view", { class: "info flex1" }, [
                                                (0, import_vue2.createElementVNode)(
                                                  "u-text",
                                                  { class: "name" },
                                                  (0, import_vue2.toDisplayString)($setup.sendGiftData.user),
                                                  1
                                                  /* TEXT */
                                                ),
                                                (0, import_vue2.createElementVNode)("u-text", { class: "desc" }, "\u9001\u51FA")
                                              ]),
                                              (0, import_vue2.createElementVNode)("u-image", {
                                                class: "gift",
                                                src: $setup.sendGiftData.pic
                                              }, null, 8, ["src"])
                                            ])) : (0, import_vue2.createCommentVNode)("v-if", true)
                                          ])
                                        ]),
                                        (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-mixinview flexbox flex-row" }, [
                                          (0, import_vue2.createCommentVNode)(" \u804A\u5929\u6D88\u606F "),
                                          (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-chats flex1" }, [
                                            (0, import_vue2.createElementVNode)("scroll-view", {
                                              class: "ulive__ft-livewrap-chats__scrollview flex1",
                                              scrollY: "",
                                              showScrollbar: "false",
                                              scrollIntoView: $setup.scrollToView,
                                              lowerThreshold: 5,
                                              onScroll: $setup.handleMsgScroll,
                                              onScrolltolower: $setup.handleMsgScrollLower
                                            }, [
                                              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                                                import_vue2.Fragment,
                                                null,
                                                (0, import_vue2.renderList)(item.message, (msgitem, msgidx) => {
                                                  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                                                    import_vue2.Fragment,
                                                    { key: msgidx },
                                                    [
                                                      msgitem.type == "notice" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                                        key: 0,
                                                        class: "notice",
                                                        id: `msg-${msgitem.id}`
                                                      }, [
                                                        (0, import_vue2.createElementVNode)("view", { class: "item" }, [
                                                          (0, import_vue2.createElementVNode)(
                                                            "u-text",
                                                            { class: "noticetext" },
                                                            (0, import_vue2.toDisplayString)(msgitem.content),
                                                            1
                                                            /* TEXT */
                                                          )
                                                        ])
                                                      ], 8, ["id"])) : msgitem.type == "gift" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                                        key: 1,
                                                        class: "gift",
                                                        id: `msg-${msgitem.id}`
                                                      }, [
                                                        (0, import_vue2.createElementVNode)("view", { class: "item" }, [
                                                          (0, import_vue2.createElementVNode)(
                                                            "u-text",
                                                            { class: "giftuser" },
                                                            (0, import_vue2.toDisplayString)(msgitem.user),
                                                            1
                                                            /* TEXT */
                                                          ),
                                                          (0, import_vue2.createElementVNode)(
                                                            "u-text",
                                                            { class: "gifttext" },
                                                            "\u9001\u51FA\u4E86" + (0, import_vue2.toDisplayString)(msgitem.content),
                                                            1
                                                            /* TEXT */
                                                          ),
                                                          (0, import_vue2.createElementVNode)("u-image", {
                                                            class: "giftimg",
                                                            src: msgitem.img,
                                                            mode: "widthFix"
                                                          }, null, 8, ["src"]),
                                                          (0, import_vue2.createElementVNode)(
                                                            "u-text",
                                                            { class: "giftnum" },
                                                            "x" + (0, import_vue2.toDisplayString)(msgitem.num),
                                                            1
                                                            /* TEXT */
                                                          )
                                                        ])
                                                      ], 8, ["id"])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                                        key: 2,
                                                        class: "msg",
                                                        id: `msg-${msgitem.id}`
                                                      }, [
                                                        (0, import_vue2.createElementVNode)("view", { class: "item" }, [
                                                          msgitem.tag ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                                                            "u-text",
                                                            {
                                                              key: 0,
                                                              class: "tag"
                                                            },
                                                            (0, import_vue2.toDisplayString)(msgitem.tag),
                                                            1
                                                            /* TEXT */
                                                          )) : (0, import_vue2.createCommentVNode)("v-if", true),
                                                          (0, import_vue2.createElementVNode)(
                                                            "u-text",
                                                            { class: "user" },
                                                            (0, import_vue2.toDisplayString)(msgitem.user),
                                                            1
                                                            /* TEXT */
                                                          ),
                                                          (0, import_vue2.createElementVNode)(
                                                            "u-text",
                                                            {
                                                              class: "text",
                                                              style: (0, import_vue2.normalizeStyle)([$setup.fixTextStyle])
                                                            },
                                                            (0, import_vue2.toDisplayString)(msgitem.isbuy ? "\u6B63\u5728\u8D2D\u4E70" : msgitem.content),
                                                            5
                                                            /* TEXT, STYLE */
                                                          ),
                                                          msgitem.isbuy ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                                                            key: 1,
                                                            class: "tag tag-buy"
                                                          }, "\u53BB\u8D2D\u4E70")) : (0, import_vue2.createCommentVNode)("v-if", true)
                                                        ])
                                                      ], 8, ["id"]))
                                                    ],
                                                    64
                                                    /* STABLE_FRAGMENT */
                                                  );
                                                }),
                                                128
                                                /* KEYED_FRAGMENT */
                                              ))
                                            ], 40, ["scrollIntoView"]),
                                            !$setup.isEmpty($setup.msgUnread) ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                              key: 0,
                                              class: "ulive__ft-livewrap-chats__unread",
                                              onClick: $setup.handleMsgIsRead
                                            }, [
                                              (0, import_vue2.createElementVNode)(
                                                "u-text",
                                                { class: "c-eb4868 fs-24" },
                                                (0, import_vue2.toDisplayString)($setup.msgUnread.length) + "\u6761\u65B0\u6D88\u606F",
                                                1
                                                /* TEXT */
                                              )
                                            ])) : (0, import_vue2.createCommentVNode)("v-if", true)
                                          ]),
                                          (0, import_vue2.createCommentVNode)(" \u5546\u54C1\u8BB2\u89E3 "),
                                          $setup.isVisibleGoodsTalk ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                                            key: 0,
                                            class: "ulive__ft-livewrap-activegoods animated fadeInRight",
                                            id: "goodsTalkID"
                                          }, [
                                            (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-activegoods__hotsale flexbox flex-row" }, [
                                              (0, import_vue2.createElementVNode)("u-image", {
                                                class: "fimg",
                                                src: _imports_3,
                                                mode: "widthFix"
                                              }),
                                              (0, import_vue2.createElementVNode)(
                                                "u-text",
                                                { class: "c-fff fs-32" },
                                                "\u70ED\u5356 x" + (0, import_vue2.toDisplayString)(item.saleNum),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            (0, import_vue2.createVNode)(
                                              _component_swiper,
                                              { class: "ulive__ft-livewrap-activegoods__swiper" },
                                              {
                                                default: (0, import_vue2.withCtx)(() => [
                                                  (0, import_vue2.createVNode)(
                                                    _component_swiper_item,
                                                    null,
                                                    {
                                                      default: (0, import_vue2.withCtx)(() => [
                                                        (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-activegoods__card" }, [
                                                          (0, import_vue2.createElementVNode)("view", {
                                                            class: "gwrap",
                                                            onClick: $setup.toGoodsDetail
                                                          }, [
                                                            (0, import_vue2.createElementVNode)("u-image", {
                                                              class: "gimg",
                                                              src: item.poster,
                                                              mode: "aspectFill"
                                                            }, null, 8, ["src"]),
                                                            (0, import_vue2.createElementVNode)("view", { class: "waves" }, [
                                                              (0, import_vue2.createElementVNode)("u-text", { class: "c-fff fs-24" }, "\u8BB2\u89E3\u4E2D")
                                                            ]),
                                                            (0, import_vue2.createElementVNode)("view", {
                                                              class: "close",
                                                              onClick: _cache[2] || (_cache[2] = (0, import_vue2.withModifiers)(($event) => $setup.isVisibleGoodsTalk = false, ["stop"]))
                                                            }, [
                                                              (0, import_vue2.createVNode)(_component_uv_icon, {
                                                                name: "close-circle-fill",
                                                                color: "rgba(0, 0, 0, .3)",
                                                                size: "14"
                                                              })
                                                            ])
                                                          ]),
                                                          (0, import_vue2.createElementVNode)("view", { class: "ginfo flexbox flex-col" }, [
                                                            (0, import_vue2.createElementVNode)(
                                                              "u-text",
                                                              { class: "clamp1 fs-24" },
                                                              (0, import_vue2.toDisplayString)(item.desc),
                                                              1
                                                              /* TEXT */
                                                            ),
                                                            (0, import_vue2.createElementVNode)("u-text", { class: "clamp1 fs-24 c-eb4868" }, "7\u5929\u65E0\u7406\u7531\u9000\u8D27")
                                                          ]),
                                                          (0, import_vue2.createElementVNode)("view", { class: "btn flexbox flex-row" }, [
                                                            (0, import_vue2.createElementVNode)("u-text", { class: "flex1 c-fff fs-28" }, "\uFFE579.00"),
                                                            (0, import_vue2.createElementVNode)("u-text", { class: "qiang" }, "\u62A2")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 2
                                                      /* DYNAMIC */
                                                    },
                                                    1024
                                                    /* DYNAMIC_SLOTS */
                                                  )
                                                ]),
                                                _: 2
                                                /* DYNAMIC */
                                              },
                                              1024
                                              /* DYNAMIC_SLOTS */
                                            )
                                          ])) : (0, import_vue2.createCommentVNode)("v-if", true)
                                        ]),
                                        (0, import_vue2.createElementVNode)("view", { class: "ulive__ft-livewrap-toolbar flexbox flex-row" }, [
                                          (0, import_vue2.createElementVNode)("view", { class: "editorwrap flex1 flexbox flex-row flex-alignc" }, [
                                            (0, import_vue2.createElementVNode)("view", {
                                              class: "flex1",
                                              onClick: $setup.handleOpenChatbox
                                            }, [
                                              (0, import_vue2.createElementVNode)("u-text", { class: "editorwrap-text" }, "\u8BF4\u70B9\u4EC0\u4E48...")
                                            ])
                                          ]),
                                          (0, import_vue2.createElementVNode)("view", { class: "btnwrap flexbox flex-row" }, [
                                            (0, import_vue2.createElementVNode)("view", {
                                              class: "btn flexbox",
                                              onClick: $setup.handleOpenMenus
                                            }, [
                                              (0, import_vue2.createVNode)(_component_uv_icon, {
                                                name: "grid",
                                                color: "#3c9cff",
                                                size: "22"
                                              })
                                            ]),
                                            (0, import_vue2.createElementVNode)("view", {
                                              class: "btn flexbox",
                                              onClick: ($event) => $setup.handleOpenGoods(item)
                                            }, [
                                              (0, import_vue2.createVNode)(_component_uv_icon, {
                                                name: "shopping-cart-fill",
                                                color: "#ffaa00",
                                                size: "24"
                                              })
                                            ], 8, ["onClick"]),
                                            (0, import_vue2.createElementVNode)("view", {
                                              class: "btn flexbox",
                                              onClick: $setup.handleOpenGifts
                                            }, [
                                              (0, import_vue2.createVNode)(_component_uv_icon, {
                                                name: "gift",
                                                color: "#ff0ad3",
                                                size: "22"
                                              })
                                            ]),
                                            (0, import_vue2.createElementVNode)("view", { class: "btn flexbox" }, [
                                              (0, import_vue2.createVNode)(_component_uv_icon, {
                                                name: "more-dot-fill",
                                                color: "#efe9ff",
                                                size: "18"
                                              })
                                            ])
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["current"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      $setup.isVisibleChatbox ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
        key: 0,
        class: "ulive__video-chat__wrap"
      }, [
        (0, import_vue2.createElementVNode)("view", {
          class: "ulive__video-chat__mask",
          onClick: $setup.handleCloseChatbox
        }),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: "ulive__video-chat__body",
            style: (0, import_vue2.normalizeStyle)({ "height": $setup.fixKeyboardHeight })
          },
          [
            (0, import_vue2.createCommentVNode)(" \u7F16\u8F91\u6846 "),
            (0, import_vue2.createElementVNode)("view", { class: "ulive__video-chat__editor flexbox flex-row flex-alignc" }, [
              (0, import_vue2.createVNode)(_component_uv_input, {
                modelValue: $setup.chatEditor,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.chatEditor = $event),
                shape: "circle",
                focus: "",
                adjustPosition: false,
                placeholder: "\u6587\u660E\u53D1\u8A00,\u7406\u6027\u8D2D\u7269",
                customStyle: { background: "#f3f3f3", border: "none", "margin-right": "20rpx" }
              }, {
                suffix: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createVNode)(_component_uv_icon, {
                    name: "/static/emoj.png",
                    color: "#777",
                    size: "20"
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue2.createVNode)(_component_uv_button, {
                text: "\u53D1\u9001",
                type: "primary",
                shape: "circle",
                customStyle: { background: "#ff007f", border: "none", padding: "0 20rpx", height: "70rpx" },
                onClick: $setup.handleSendChatmsg
              })
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "ulive__video-chat__emojs" })
          ],
          4
          /* STYLE */
        )
      ])) : (0, import_vue2.createCommentVNode)("v-if", true),
      (0, import_vue2.createCommentVNode)(" \u7EA2\u5305\u5F39\u51FA\u6846 "),
      (0, import_vue2.createVNode)(
        _component_uv_popup,
        {
          ref: "redpacketRef",
          mode: "center",
          round: "25",
          zIndex: "2023",
          onMaskClick: $setup.handleCloseRedpacket
        },
        {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createCommentVNode)(" \u9886\u53D6\u7EA2\u5305 "),
            $setup.isVisibleRedpacketRecieve ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              key: 0,
              class: "ulive__popup-redpacket__wrap"
            }, [
              (0, import_vue2.createElementVNode)("u-image", {
                class: "redpacket-cover",
                src: _imports_4
              }),
              (0, import_vue2.createElementVNode)("view", { class: "redpacket-infos flexbox flex-col" }, [
                (0, import_vue2.createElementVNode)("u-image", {
                  class: "logo",
                  src: _imports_5,
                  mode: "widthFix"
                }),
                (0, import_vue2.createElementVNode)("u-text", { class: "name" }, "\u4E50\u8D2D\u7684\u7EA2\u5305"),
                (0, import_vue2.createElementVNode)("u-text", { class: "desc" }, "\u798F\u5229\u56DE\u9988\uFF0C\u611F\u6069\u6709\u60A8")
              ]),
              (0, import_vue2.createElementVNode)("view", {
                class: "redpacket-btn",
                onClick: $setup.handleCloseRedpacket
              }, [
                (0, import_vue2.createElementVNode)("u-text", { class: "redpacket-btntxt" }, "\u62C6")
              ]),
              (0, import_vue2.createElementVNode)("view", { class: "redpacket-more flexbox flex-row" }, [
                (0, import_vue2.createElementVNode)("u-text", { class: "c-fff fs-24" }, "\u67E5\u770B\u9886\u53D6\u8BE6\u60C5"),
                (0, import_vue2.createVNode)(_component_uv_icon, {
                  name: "arrow-right",
                  color: "#fff",
                  size: "12"
                })
              ])
            ])) : (0, import_vue2.createCommentVNode)("v-if", true),
            (0, import_vue2.createCommentVNode)(" \u7EA2\u5305\u96E8 "),
            $setup.isVisibleRedpacketWait ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              key: 1,
              class: "ulive__popup-redpacket__wrap"
            }, [
              (0, import_vue2.createElementVNode)("u-image", {
                class: "redpacket-cover",
                src: _imports_6
              }),
              (0, import_vue2.createElementVNode)("view", { class: "redpacket-infos flexbox flex-col" }, [
                (0, import_vue2.createElementVNode)("u-image", {
                  class: "logo",
                  src: _imports_7,
                  mode: "widthFix"
                }),
                (0, import_vue2.createElementVNode)("u-text", { class: "name" }, "\u4E50\u8D2D\u8463\u8001\u5E08\u5C06\u4E8E"),
                (0, import_vue2.createElementVNode)("u-text", { class: "name" }, "12\u670830\u65E512\u65F600\u5206\u53D1\u9001\u7EA2\u5305\u96E8")
              ]),
              (0, import_vue2.createElementVNode)("view", { class: "redpacket-endtime flexbox flex-col" }, [
                (0, import_vue2.createElementVNode)("u-text", { class: "c-f7e1ad fs-28" }, "\u5012\u8BA1\u65F624\u65F655\u520612\u79D2"),
                (0, import_vue2.createElementVNode)("u-text", { class: "c-f7e1ad fs-24 mt-10" }, "\u5012\u8BA1\u65F6\u7ED3\u675F\u53EF\u62A2")
              ])
            ])) : (0, import_vue2.createCommentVNode)("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      (0, import_vue2.createVNode)(
        _component_uv_popup,
        {
          ref: "menusRef",
          mode: "bottom",
          round: "10",
          zIndex: "2023",
          customStyle: { "background": "#f7fbff" }
        },
        {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-menus__wrap" }, [
              (0, import_vue2.createElementVNode)("view", { class: "withdraw flexbox flex-row flex-alignc" }, [
                (0, import_vue2.createElementVNode)("view", { class: "flex1 flexbox flex-col" }, [
                  (0, import_vue2.createElementVNode)("u-text", { class: "c-999 fs-24" }, "\u53EF\u63D0\u73B0\u91D1\u989D"),
                  (0, import_vue2.createElementVNode)("u-text", { class: "c-eb4868 fs-40" }, "\uFFE5638.00")
                ]),
                (0, import_vue2.createVNode)(_component_button, {
                  type: "primary",
                  size: "mini",
                  class: "btn"
                }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createTextVNode)("\u7ACB\u5373\u63D0\u73B0")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue2.createVNode)(_component_button, {
                  type: "primary",
                  plain: "",
                  size: "mini",
                  class: "btn"
                }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createTextVNode)("\u63D0\u73B0\u8BB0\u5F55")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-menus__wrap-scrollbox flexbox flex-col" }, [
                (0, import_vue2.createElementVNode)("view", { class: "pad25" }, [
                  (0, import_vue2.createElementVNode)("u-text", { class: "fs-28" }, "\u83DC\u5355\u529F\u80FD")
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-menus__wrap-body flexbox flex-row" }, [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($setup.menuList, (item, index2) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                        key: index2,
                        class: "ulive__popup-menus__item flexbox flex-col"
                      }, [
                        (0, import_vue2.createElementVNode)("u-image", {
                          class: "icoimg",
                          src: item.img,
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        (0, import_vue2.createElementVNode)(
                          "u-text",
                          { class: "label" },
                          (0, import_vue2.toDisplayString)(item.label),
                          1
                          /* TEXT */
                        )
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      (0, import_vue2.createVNode)(
        _component_uv_popup,
        {
          ref: "goodsRef",
          mode: "bottom",
          round: "10",
          zIndex: "2023"
        },
        {
          default: (0, import_vue2.withCtx)(() => {
            var _a2, _b2;
            return [
              (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-goods__wrap" }, [
                (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-goods__wrap-head flexbox flex-row" }, [
                  (0, import_vue2.createElementVNode)("u-image", {
                    class: "logo",
                    src: $setup.goodsData.logo,
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  (0, import_vue2.createElementVNode)("view", { class: "flex1 flexbox flex-col ml-10" }, [
                    (0, import_vue2.createElementVNode)("view", { class: "flexbox flex-row" }, [
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        null,
                        (0, import_vue2.toDisplayString)($setup.goodsData.name) + "\u76F4\u64AD\u95F4",
                        1
                        /* TEXT */
                      ),
                      (0, import_vue2.createVNode)(_component_uv_icon, {
                        name: "arrow-right",
                        size: "12"
                      })
                    ]),
                    (0, import_vue2.createElementVNode)("view", { class: "flexbox flex-row" }, [
                      (0, import_vue2.createElementVNode)("u-text", { class: "c-eb4868 fs-24" }, "\u5E26\u8D27\u53E3\u7891"),
                      (0, import_vue2.createElementVNode)("u-text", { class: "c-2979ff fs-24 ml-15" }, "4.78 \u9AD8")
                    ])
                  ]),
                  (0, import_vue2.createVNode)(_component_navigator, {
                    url: "/pages/cart/index",
                    "hover-class": "none",
                    "open-type": "switchTab"
                  }, {
                    default: (0, import_vue2.withCtx)(() => [
                      (0, import_vue2.createElementVNode)("view", { class: "btn flexbox flex-col" }, [
                        (0, import_vue2.createVNode)(_component_uv_icon, {
                          name: "shopping-cart",
                          size: "18"
                        }),
                        (0, import_vue2.createElementVNode)("u-text", { class: "fs-28" }, "\u8D2D\u7269\u8F66")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue2.createVNode)(_component_navigator, {
                    url: "/pages/order/list",
                    "hover-class": "none"
                  }, {
                    default: (0, import_vue2.withCtx)(() => [
                      (0, import_vue2.createElementVNode)("view", { class: "btn flexbox flex-col" }, [
                        (0, import_vue2.createVNode)(_component_uv_icon, {
                          name: "order",
                          size: "18"
                        }),
                        (0, import_vue2.createElementVNode)("u-text", { class: "fs-28" }, "\u8BA2\u5355")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-goods__wrap-cate flexbox flex-row" }, [
                  (0, import_vue2.createElementVNode)("view", { class: "cateitem on" }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "catetxt" }, "\u5168\u90E8")
                  ]),
                  (0, import_vue2.createElementVNode)("view", { class: "cateitem" }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "catetxt" }, "\u96F6\u98DF\u7279\u4EA7")
                  ]),
                  (0, import_vue2.createElementVNode)("view", { class: "cateitem" }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "catetxt" }, "\u9152\u7C7B")
                  ]),
                  (0, import_vue2.createElementVNode)("view", { class: "cateitem" }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "catetxt" }, "\u53A8\u623F\u7535\u5668")
                  ])
                ]),
                (0, import_vue2.createElementVNode)("scroll-view", {
                  scrollY: "true",
                  style: { "height": "900rpx" }
                }, [
                  (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-goods__wrap-body" }, [
                    (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-goods__item flexbox flex-row" }, [
                      (0, import_vue2.createElementVNode)("view", {
                        class: "gpic",
                        onClick: $setup.toGoodsDetail
                      }, [
                        (0, import_vue2.createElementVNode)("u-image", {
                          class: "img",
                          src: $setup.goodsData.poster,
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        (0, import_vue2.createElementVNode)("view", { class: "num" }, [
                          (0, import_vue2.createElementVNode)("u-text", { class: "c-fff fs-24" }, "1")
                        ]),
                        (0, import_vue2.createElementVNode)("view", {
                          class: "waves",
                          onClick: _cache[4] || (_cache[4] = (0, import_vue2.withModifiers)(($event) => $setup.isVisibleGoodsTalk = true, ["stop"]))
                        }, [
                          (0, import_vue2.createElementVNode)("u-text", { class: "c-fff fs-24" }, "\u8BB2\u89E3\u4E2D")
                        ])
                      ]),
                      (0, import_vue2.createElementVNode)("view", {
                        class: "ginfo flex1",
                        onClick: $setup.toGoodsDetail
                      }, [
                        (0, import_vue2.createElementVNode)("view", { class: "title flexbox flex-row" }, [
                          (0, import_vue2.createElementVNode)(
                            "u-text",
                            { class: "fs-32 clamp1" },
                            (0, import_vue2.toDisplayString)($setup.goodsData.desc),
                            1
                            /* TEXT */
                          )
                        ]),
                        (0, import_vue2.createElementVNode)("view", { class: "subtit flexbox flex-row" }, [
                          (0, import_vue2.createElementVNode)(
                            "u-text",
                            { class: "c-eb4868 fs-24" },
                            (0, import_vue2.toDisplayString)((_b2 = (_a2 = $setup.goodsData) == null ? void 0 : _a2.topic) == null ? void 0 : _b2.join(" ")),
                            1
                            /* TEXT */
                          )
                        ]),
                        (0, import_vue2.createElementVNode)("view", { class: "tags flexbox flex-row" }, [
                          (0, import_vue2.createElementVNode)("view", { class: "tagsitem" }, [
                            (0, import_vue2.createElementVNode)("u-text", { class: "tagstext" }, "\u987A\u4E30\u5305\u90AE")
                          ]),
                          (0, import_vue2.createElementVNode)("view", { class: "tagsitem" }, [
                            (0, import_vue2.createElementVNode)("u-text", { class: "tagstext" }, "\u8FD42\u5143\u5238")
                          ])
                        ]),
                        (0, import_vue2.createElementVNode)("view", { class: "foot flexbox flex-row" }, [
                          (0, import_vue2.createElementVNode)("view", { class: "price flex1 flexbox flex-row" }, [
                            (0, import_vue2.createElementVNode)("view", { class: "real" }, [
                              (0, import_vue2.createElementVNode)("u-text", { class: "c-eb4868 sfs-32" }, "\uFFE522.90")
                            ]),
                            (0, import_vue2.createElementVNode)("view", { class: "del" }, [
                              (0, import_vue2.createElementVNode)("u-text", { class: "deltxt" }, "\uFFE529.00")
                            ])
                          ]),
                          (0, import_vue2.createElementVNode)("view", { class: "btn" }, [
                            (0, import_vue2.createVNode)(_component_uv_button, {
                              color: "#ff007f",
                              text: "\u53BB\u62A2\u8D2D",
                              size: "small",
                              shape: "circle",
                              customStyle: { "height": "60rpx" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      (0, import_vue2.createVNode)(
        _component_uv_popup,
        {
          ref: "giftsRef",
          mode: "bottom",
          round: "10",
          zIndex: "2023",
          customStyle: { "background": "#232831" }
        },
        {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-gifts__wrap flexbox flex-col" }, [
              (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-gifts__wrap-head flexbox flex-col" }, [
                (0, import_vue2.createElementVNode)("view", { class: "infowrap flexbox flex-row" }, [
                  (0, import_vue2.createElementVNode)("view", { class: "level flex1 flexbox flex-col" }, [
                    (0, import_vue2.createVNode)(_component_uv_line_progress, {
                      percentage: 75,
                      height: "5",
                      showText: false,
                      inactiveColor: "#16191f",
                      activeColor: "#eb48ca"
                    }),
                    (0, import_vue2.createElementVNode)("u-text", {
                      class: "fs-20",
                      style: { "color": "rgba(255,255,255,.7)" }
                    }, "\u8DDD\u79BB3\u7EA7\u8FD8\u5DEE12\u91D1\u5E01")
                  ]),
                  (0, import_vue2.createElementVNode)("view", { class: "btn flexbox flex-row" }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "c-ffdd1a fs-26" }, "\u5145\u503C"),
                    (0, import_vue2.createVNode)(_component_uv_icon, {
                      name: "arrow-right",
                      color: "#fff",
                      size: "12"
                    })
                  ]),
                  (0, import_vue2.createElementVNode)("view", { class: "btn" }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "c-fff fs-26" }, "\u4E2A\u4EBA\u4E2D\u5FC3")
                  ])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "tabwrap flexbox flex-row" }, [
                  (0, import_vue2.createVNode)(_component_uv_tabs, {
                    current: $setup.giftsTabCurrent,
                    list: $setup.giftsTabList,
                    "bg-color": "transparent",
                    lineHeight: "0",
                    inactiveStyle: { color: "rgba(255,255,255,.7)", "font-size": "28rpx" },
                    activeStyle: { color: "#ffdd1a", "font-size": "28rpx" }
                  }, null, 8, ["current", "list", "inactiveStyle"])
                ])
              ]),
              (0, import_vue2.createElementVNode)("scroll-view", {
                scrollY: "",
                style: { "height": "600rpx" }
              }, [
                (0, import_vue2.createElementVNode)("view", { class: "ulive__popup-gifts__wrap-body flexbox flex-row" }, [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($setup.giftList, (giftitem, giftindex) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                        key: giftindex,
                        class: (0, import_vue2.normalizeClass)(["ulive__popup-gifts__item flexbox flex-col", $setup.giftCur == giftindex ? "on" : ""]),
                        onClick: ($event) => $setup.handleCheckGift(giftitem, giftindex)
                      }, [
                        (0, import_vue2.createElementVNode)("u-image", {
                          class: "giftimg",
                          src: giftitem.pic,
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        (0, import_vue2.createElementVNode)(
                          "u-text",
                          { class: "giftname" },
                          (0, import_vue2.toDisplayString)(giftitem.title),
                          1
                          /* TEXT */
                        ),
                        $setup.giftCur != giftindex ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                          key: 0,
                          class: "giftcoin flexbox flex-row"
                        }, [
                          (0, import_vue2.createVNode)(_component_uv_icon, {
                            name: "integral",
                            color: "#fff",
                            size: "14"
                          }),
                          (0, import_vue2.createElementVNode)(
                            "u-text",
                            { class: "giftcoin-text" },
                            (0, import_vue2.toDisplayString)(giftitem.coins),
                            1
                            /* TEXT */
                          )
                        ])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                          key: 1,
                          class: "giftbtn",
                          onClick: ($event) => $setup.handleSendGift(giftitem)
                        }, [
                          (0, import_vue2.createElementVNode)("u-text", { class: "giftbtn-text" }, "\u8D60\u9001")
                        ], 8, ["onClick"]))
                      ], 10, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      (0, import_vue2.createVNode)(
        _component_uv_popup,
        {
          ref: "giftModalRef",
          mode: "center",
          round: "3",
          zIndex: "2023",
          customStyle: { "width": "500rpx" }
        },
        {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createElementVNode)("view", { class: "ulive__modal-gifts__content" }, [
              (0, import_vue2.createElementVNode)(
                "u-text",
                { class: "fs-30" },
                "\u786E\u5B9A\u8981\u652F\u4ED8" + (0, import_vue2.toDisplayString)($setup.giftCoins) + "\u91D1\u5E01\u5417?",
                1
                /* TEXT */
              )
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "ulive__modal-gifts__btns flexbox flex-row" }, [
              (0, import_vue2.createElementVNode)("u-text", {
                class: "fs-28 c-999 mr-20",
                onClick: $setup.handleSendGiftClose
              }, "\u53D6\u6D88"),
              (0, import_vue2.createElementVNode)("u-text", { class: "fs-28 c-eb4868 ml-20" }, "\u53BB\u652F\u4ED8")
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  var live = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/live/live.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/live/live";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    live.mpType = "page";
    const app = Vue.createPageApp(live, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...live.styles || []]));
    app.mount("#root");
  }
})();
