var _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
import { isInSSRComponentSetup, injectHook, getCurrentInstance, openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, resolveDynamicComponent, createElementVNode, renderSlot, Fragment, renderList, createVNode, ref, computed, onMounted, onUnmounted, watch, nextTick, createBlock, withModifiers, withCtx } from "vue";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LOAD = "onLoad";
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
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createHook(ON_SHOW);
const onHide = /* @__PURE__ */ createHook(ON_HIDE);
const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
const mpMixin = {};
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
const test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      formatAppLog("warn", "at uni_modules/uv-ui-tools/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
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
function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
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
    formatAppLog("error", "at uni_modules/uv-ui-tools/libs/function/index.js:250", `uvui提示：${err}`);
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
      tips = "刚刚";
      break;
    case (timer >= 300 && timer < 3600):
      tips = `${parseInt(timer / 60)}分钟前`;
      break;
    case (timer >= 3600 && timer < 86400):
      tips = `${parseInt(timer / 3600)}小时前`;
      break;
    case (timer >= 86400 && timer < 2592e3):
      tips = `${parseInt(timer / 86400)}天前`;
      break;
    default:
      if (format === false) {
        if (timer >= 2592e3 && timer < 365 * 86400) {
          tips = `${parseInt(timer / (86400 * 30))}个月前`;
        } else {
          tips = `${parseInt(timer / (86400 * 365))}年前`;
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
  var _a;
  const pages2 = getCurrentPages();
  const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
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
  props: props2 = {},
  config = {},
  color = {},
  zIndex = {}
}) {
  const {
    deepMerge: deepMerge2
  } = uni.$uv;
  uni.$uv.config = deepMerge2(uni.$uv.config, config);
  uni.$uv.props = deepMerge2(uni.$uv.props, props2);
  uni.$uv.color = deepMerge2(uni.$uv.color, color);
  uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex);
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
class Router {
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
  async route(options = {}, params = {}) {
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
      const isNext = await new Promise((resolve, reject) => {
        mergeConfig.intercept(mergeConfig, resolve);
      });
      isNext && this.openPage(mergeConfig);
    } else {
      this.openPage(mergeConfig);
    }
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
}
const route = new Router().route;
let timeout = null;
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
let flag;
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
const mixin = {
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
      var _a, _b;
      return {
        ...index,
        test,
        route,
        debounce,
        throttle,
        unit: (_b = (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
      };
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
const iconUrl = "/assets/uvicons.04d281cc.ttf";
const icons = {
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
const props$6 = {
  props: {
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
    },
    ...(_f = (_e = uni.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.icon
  }
};
const _style_0$9 = { "uv-icon": { "": { "alignItems": "center" } }, "uv-icon--left": { "": { "flexDirection": "row-reverse", "alignItems": "center" } }, "uv-icon--right": { "": { "flexDirection": "row", "alignItems": "center" } }, "uv-icon--top": { "": { "flexDirection": "column-reverse", "justifyContent": "center" } }, "uv-icon--bottom": { "": { "flexDirection": "column", "justifyContent": "center" } }, "uv-icon__icon": { "": { "fontFamily": "uvicon-iconfont", "position": "relative", "flexDirection": "row", "alignItems": "center" } }, "uv-icon__icon--primary": { "": { "color": "#3c9cff" } }, "uv-icon__icon--success": { "": { "color": "#5ac725" } }, "uv-icon__icon--error": { "": { "color": "#f56c6c" } }, "uv-icon__icon--warning": { "": { "color": "#f9ae3d" } }, "uv-icon__icon--info": { "": { "color": "#909399" } } };
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "uvicon-iconfont",
  "src": "url('" + iconUrl + "')"
});
const _sfc_main$c = {
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
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["uv-icon", ["uv-icon--" + _ctx.labelPos]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      renderWhole: true
    },
    [
      $options.isImg ? (openBlock(), createElementBlock("u-image", {
        key: 0,
        class: "uv-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: normalizeStyle([$options.imgStyle, _ctx.$uv.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (openBlock(), createElementBlock("u-text", {
        key: 1,
        class: normalizeClass(["uv-icon__icon", $options.uClasses]),
        style: normalizeStyle([$options.iconStyle, _ctx.$uv.addStyle(_ctx.customStyle)]),
        hoverClass: _ctx.hoverClass
      }, toDisplayString($options.icon), 15, ["hoverClass"])),
      createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
      _ctx.label !== "" ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 2,
          class: "uv-icon__label",
          style: normalizeStyle({
            color: _ctx.labelColor,
            fontSize: _ctx.$uv.addUnit(_ctx.labelSize),
            marginLeft: _ctx.labelPos == "right" ? _ctx.$uv.addUnit(_ctx.space) : 0,
            marginTop: _ctx.labelPos == "bottom" ? _ctx.$uv.addUnit(_ctx.space) : 0,
            marginRight: _ctx.labelPos == "left" ? _ctx.$uv.addUnit(_ctx.space) : 0,
            marginBottom: _ctx.labelPos == "top" ? _ctx.$uv.addUnit(_ctx.space) : 0
          })
        },
        toDisplayString(_ctx.label),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["styles", [_style_0$9]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-icon/components/uv-icon/uv-icon.vue"]]);
const uvBadgeProps = {
  props: {
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
    },
    ...(_h = (_g = uni.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.badge
  }
};
const _style_0$8 = { "uv-badge": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "flexDirection": "row", "lineHeight": 11, "textAlign": "center", "fontSize": 11, "color": "#FFFFFF" } }, "uv-badge--dot": { "": { "height": 8, "width": 8 } }, "uv-badge--inverted": { "": { "fontSize": 13 } }, "uv-badge--not-dot": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5 } }, "uv-badge--horn": { "": { "borderBottomLeftRadius": 0 } }, "uv-badge--primary": { "": { "backgroundColor": "#3c9cff" } }, "uv-badge--primary--inverted": { "": { "color": "#3c9cff" } }, "uv-badge--error": { "": { "backgroundColor": "#f56c6c" } }, "uv-badge--error--inverted": { "": { "color": "#f56c6c" } }, "uv-badge--success": { "": { "backgroundColor": "#5ac725" } }, "uv-badge--success--inverted": { "": { "color": "#5ac725" } }, "uv-badge--info": { "": { "backgroundColor": "#909399" } }, "uv-badge--info--inverted": { "": { "color": "#909399" } }, "uv-badge--warning": { "": { "backgroundColor": "#f9ae3d" } }, "uv-badge--warning--inverted": { "": { "color": "#f9ae3d" } } };
const _sfc_main$b = {
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
  return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? (openBlock(), createElementBlock(
    "u-text",
    {
      key: 0,
      class: normalizeClass([[_ctx.isDot ? "uv-badge--dot" : "uv-badge--not-dot", _ctx.inverted && "uv-badge--inverted", _ctx.shape === "horn" && "uv-badge--horn", `uv-badge--${$options.propsType}${_ctx.inverted ? "--inverted" : ""}`], "uv-badge"]),
      style: normalizeStyle([_ctx.$uv.addStyle(_ctx.customStyle), $options.badgeStyle])
    },
    toDisplayString(_ctx.isDot ? "" : $options.showValue),
    7
    /* TEXT, CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["styles", [_style_0$8]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-badge/components/uv-badge/uv-badge.vue"]]);
const props$5 = {
  props: {
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
    },
    ...(_j = (_i = uni.$uv) == null ? void 0 : _i.props) == null ? void 0 : _j.tabs
  }
};
const _style_0$7 = { "uv-tabs__wrapper": { "": { "flexDirection": "row", "alignItems": "center" } }, "uv-tabs__wrapper__scroll-view-wrapper": { "": { "flex": 1 } }, "uv-tabs__wrapper__scroll-view": { "": { "flexDirection": "row", "flex": 1 } }, "uv-tabs__wrapper__nav": { "": { "flexDirection": "row", "position": "relative" } }, "uv-tabs__wrapper__nav__item": { "": { "paddingTop": 0, "paddingRight": 11, "paddingBottom": 0, "paddingLeft": 11, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "uv-tabs__wrapper__nav__item__text": { "": { "fontSize": 15, "color": "#606266" } }, "uv-tabs__wrapper__nav__item__text--disabled": { "": { "!color": "#c8c9cc" } }, "uv-tabs__wrapper__nav__line": { "": { "height": 3, "backgroundColor": "#3c9cff", "width": 30, "position": "absolute", "bottom": 2, "borderRadius": 100, "transitionProperty": "transform", "transitionDuration": 300 } }, "@TRANSITION": { "uv-tabs__wrapper__nav__line": { "property": "transform", "duration": 300 } } };
const animation$1 = requireNativePlugin("animation");
const dom = requireNativePlugin("dom");
const _sfc_main$a = {
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
  async mounted() {
    this.init();
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
      const ref2 = this.$refs["uv-tabs__wrapper__nav__line"];
      animation$1.transition(ref2, {
        styles: {
          transform: `translateX(${x}px)`
        },
        duration
      });
    },
    // 点击某一个标签
    clickHandler(item, index2) {
      this.$emit("click", {
        ...item,
        index: index2
      });
      if (item.disabled)
        return;
      if (this.innerCurrent != index2) {
        this.$emit("change", {
          ...item,
          index: index2
        });
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
  const _component_uv_badge = resolveEasycom(resolveDynamicComponent("uv-badge"), __easycom_1$2);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "uv-tabs",
      style: normalizeStyle([_ctx.$uv.addStyle(_ctx.customStyle)]),
      renderWhole: true
    },
    [
      createElementVNode("view", { class: "uv-tabs__wrapper" }, [
        renderSlot(_ctx.$slots, "left"),
        createElementVNode("view", { class: "uv-tabs__wrapper__scroll-view-wrapper" }, [
          createElementVNode("scroll-view", {
            scrollX: _ctx.scrollable,
            scrollLeft: $data.scrollLeft,
            scrollWithAnimation: "",
            class: "uv-tabs__wrapper__scroll-view",
            showScrollbar: false,
            ref: "uv-tabs__wrapper__scroll-view"
          }, [
            createElementVNode(
              "view",
              {
                class: "uv-tabs__wrapper__nav",
                ref: "uv-tabs__wrapper__nav",
                style: normalizeStyle({
                  flex: _ctx.scrollable ? "" : 1
                })
              },
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.list, (item, index2) => {
                    return openBlock(), createElementBlock("view", {
                      class: normalizeClass(["uv-tabs__wrapper__nav__item", [`uv-tabs__wrapper__nav__item-${index2}`, item.disabled && "uv-tabs__wrapper__nav__item--disabled"]]),
                      key: index2,
                      onClick: ($event) => $options.clickHandler(item, index2),
                      ref_for: true,
                      ref: `uv-tabs__wrapper__nav__item-${index2}`,
                      style: normalizeStyle([{ flex: _ctx.scrollable ? "" : 1 }, _ctx.$uv.addStyle(_ctx.itemStyle)])
                    }, [
                      createElementVNode(
                        "u-text",
                        {
                          class: normalizeClass([[item.disabled && "uv-tabs__wrapper__nav__item__text--disabled"], "uv-tabs__wrapper__nav__item__text"]),
                          style: normalizeStyle([$options.textStyle(index2)])
                        },
                        toDisplayString(item[_ctx.keyName]),
                        7
                        /* TEXT, CLASS, STYLE */
                      ),
                      createVNode(_component_uv_badge, {
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
                createElementVNode(
                  "view",
                  {
                    class: "uv-tabs__wrapper__nav__line",
                    ref: "uv-tabs__wrapper__nav__line",
                    style: normalizeStyle([{
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
        renderSlot(_ctx.$slots, "right")
      ])
    ],
    4
    /* STYLE */
  );
}
const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["styles", [_style_0$7]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-tabs/components/uv-tabs/uv-tabs.vue"]]);
const _style_0$6 = { "nvueicon": { "": { "fontFamily": "nvueicon" } }, "ua__tabbar": { "": { "flexDirection": "row" }, ".fixed": { "paddingTop": "110rpx" }, ".transparent": { "paddingTop": 0 } }, "ua__tabbar-wrap": { "": { "flex": 1, "flexDirection": "row", "backgroundColor": "#ffffff", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)", "color": "#333333", "height": "110rpx", "position": "relative", "zIndex": 2023, "content:after": "''", "height:after": 100, "width:after": 100, "position:after": "absolute", "left:after": 0, "right:after": 0, "zIndex:after": -1 }, ".is-border": { "borderTopColor": "rgba(171,171,171,0.1)", "boxShadow": "0 -1px 2px rgba(171,171,171,.05)" }, ".ua__tabbar.fixed ": { "left": 0, "right": 0, "maxWidth": "750px", "position": "fixed", "bottom": 0 } }, "ua__tabbar-item": { "": { "flex": 1, "alignItems": "center", "justifyContent": "center", "height": "110rpx", "position": "relative" } }, "ua__tabbar-icon": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": 0, "marginBottom": 0, "minHeight": "50rpx", "position": "relative" }, ".dock": { "flex": 1 } }, "dock-bg": { ".ua__tabbar-icon.dock ": { "borderRadius": "1000rpx", "alignItems": "center", "justifyContent": "center", "height": "100rpx", "width": "100rpx" } }, "dock-cover": { ".ua__tabbar-icon.dock ": { "backgroundColor": "#2979ff", "borderRadius": "1000rpx", "alignItems": "center", "justifyContent": "center", "height": 0, "width": "100rpx" }, ".ua__tabbar-icon.dock .is-border": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "rgba(171,171,171,0.1)", "boxShadow": "0 -1px 2px rgba(171,171,171,.1)" } }, "iconfont": { ".ua__tabbar-item ": { "color": "#9d9ea5", "fontSize": "40rpx", "transitionProperty": "color", "transitionDuration": 300 }, ".ua__tabbar-item.on ": { "color": "#2979ff" } }, "iconimg": { ".ua__tabbar-item ": { "fontSize": "36rpx", "height": "36rpx", "width": "36rpx" } }, "ua__tabbar-title": { "": { "position": "relative", "transitionProperty": "color", "transitionDuration": 300 } }, "ua__tabbar-title__text": { "": { "color": "#9d9ea5", "fontSize": "24rpx" }, ".ua__tabbar-item.on ": { "color": "#2979ff" } }, "ua__tabbar-badge": { "": { "position": "absolute", "top": "5rpx", "left": 50, "marginLeft": "-10rpx" } }, "ua__tabbar-badgeDot": { "": { "position": "absolute", "top": "10rpx", "left": 50, "marginLeft": "-15rpx" } }, "ua__tabbar-only__badge": { "": { "position": "absolute", "top": 50, "left": 50, "marginLeft": "-10rpx", "marginTop": "-80rpx" } }, "ua__tabbar-only__badgeDot": { "": { "position": "absolute", "top": 50, "left": 50, "marginLeft": "-15rpx", "marginTop": "-60rpx" } }, "@TRANSITION": { "iconfont": { "property": "color", "duration": 300 }, "ua__tabbar-title": { "property": "color", "duration": 300 } } };
const _sfc_main$9 = {
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
          icon: ``,
          title: `首页`
        },
        {
          path: `/pages/video/index`,
          icon: ``,
          title: `短视频`
        },
        {
          path: `/pages/live/index`,
          icon: `/static/logo.png`,
          dock: true,
          iconSize: `70rpx`
        },
        {
          path: `/pages/cart/index`,
          icon: ``,
          title: `购物车`,
          badge: 3
        },
        {
          path: `/pages/my/index`,
          icon: ``,
          title: `我的`,
          dot: true
        }
      ]
    }
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props2 = __props;
    const emit = __emit;
    var domModule2 = weex.requireModule("dom");
    domModule2.addRule("fontFace", {
      "fontFamily": "nvueicon",
      "src": "url('/static/fonts/iconfont.ttf')"
    });
    if (props2.hideTabBar)
      uni.hideTabBar();
    const currentTabIndex = ref(props2.current);
    const isImg = computed(() => {
      return (str) => {
        if (typeof str !== "string")
          return;
        return /\.(gif|jpg|jpeg|png|bmp|webp|svg|tiff|psd)$/i.test(str);
      };
    });
    const tabIcon = computed(() => {
      return (index2) => {
        const item = props2.tabs[index2];
        return currentTabIndex.value === index2 ? item.activeIcon || item.icon : item.icon;
      };
    });
    const tabIconUnicode = computed(() => {
      return (index2) => {
        const item = props2.tabs[index2];
        return currentTabIndex.value === index2 && item.activeIcon ? item.activeIcon.charAt(1) == "" ? item.activeIcon : "" : item.icon.charAt(1) == "" ? item.icon : "";
      };
    });
    const tabColor = computed(() => {
      return (index2) => {
        const item = props2.tabs[index2];
        return currentTabIndex.value === index2 ? item.activeColor || props2.activeColor : item.color || props2.color;
      };
    });
    const route2 = computed(() => {
      let pages2 = getCurrentPages();
      return pages2[pages2.length - 1].route;
    });
    onMounted(() => {
      selectRoute(route2.value);
    });
    onUnmounted(() => {
      uni.removeInterceptor("switchTab");
    });
    uni.addInterceptor("switchTab", {
      success(e) {
        selectRoute(route2.value);
      }
    });
    const selectRoute = (curPath) => {
      curPath = curPath.substr(0, 1) == "/" ? curPath : "/" + curPath;
      props2.tabs.map((item, index2) => {
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
    const __returned__ = { props: props2, emit, get domModule() {
      return domModule2;
    }, set domModule(v) {
      domModule2 = v;
    }, currentTabIndex, isImg, tabIcon, tabIconUnicode, tabColor, route: route2, selectRoute, switchTabs, onMounted, onUnmounted, ref, computed, watch, nextTick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["ua__tabbar", { "fixed": $props.fixed || $props.transparent, "transparent": $props.transparent }]),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["ua__tabbar-wrap flexbox flex-alignc", { "is-border": $props.border }]),
          style: normalizeStyle({ "background": $props.bgcolor, "z-index": $props.zIndex })
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.tabs, (item, index2) => {
              return openBlock(), createElementBlock("view", {
                key: index2,
                class: normalizeClass(["ua__tabbar-item flexbox flex-col", $setup.currentTabIndex == index2 ? "on" : ""]),
                onClick: ($event) => $setup.switchTabs(index2, item)
              }, [
                item.icon ? (openBlock(), createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: normalizeClass(["ua__tabbar-icon", { "dock": item.dock }])
                  },
                  [
                    $props.dock && item.dock ? (openBlock(), createElementBlock(
                      Fragment,
                      { key: 0 },
                      [
                        createElementVNode(
                          "view",
                          {
                            class: "dock-bg flexbox",
                            style: normalizeStyle({ "z-index": item.zIndex + 1 })
                          },
                          [
                            $setup.isImg(item.icon) ? (openBlock(), createElementBlock("u-image", {
                              key: 0,
                              class: "iconimg",
                              src: $setup.tabIcon(index2),
                              style: normalizeStyle({ "height": item.iconSize, "width": item.iconSize }),
                              mode: "widthFix"
                            }, null, 12, ["src"])) : (openBlock(), createElementBlock(
                              "u-text",
                              {
                                key: 1,
                                class: normalizeClass(["nvueicon iconfont", [$props.customPrefix, $setup.tabIcon(index2)]]),
                                style: normalizeStyle({ "color": $setup.tabColor(index2), "font-size": item.iconSize })
                              },
                              toDisplayString($setup.tabIconUnicode(index2)),
                              7
                              /* TEXT, CLASS, STYLE */
                            ))
                          ],
                          4
                          /* STYLE */
                        ),
                        createElementVNode(
                          "view",
                          {
                            class: normalizeClass(["dock-cover flexbox", { "is-border": $props.border }]),
                            style: normalizeStyle({ "background": item.bgcolor || $props.bgcolor, "z-index": item.zIndex })
                          },
                          null,
                          6
                          /* CLASS, STYLE */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : (openBlock(), createElementBlock(
                      Fragment,
                      { key: 1 },
                      [
                        $setup.isImg(item.icon) ? (openBlock(), createElementBlock("u-image", {
                          key: 0,
                          class: "iconimg",
                          src: $setup.tabIcon(index2),
                          style: normalizeStyle({ "height": item.iconSize, "width": item.iconSize }),
                          mode: "widthFix"
                        }, null, 12, ["src"])) : (openBlock(), createElementBlock(
                          "u-text",
                          {
                            key: 1,
                            class: normalizeClass(["nvueicon iconfont", [$props.customPrefix, $setup.tabIcon(index2)]]),
                            style: normalizeStyle({ "color": $setup.tabColor(index2), "font-size": item.iconSize })
                          },
                          toDisplayString($setup.tabIconUnicode(index2)),
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
                )) : createCommentVNode("v-if", true),
                item.title ? (openBlock(), createElementBlock("view", {
                  key: 1,
                  class: "ua__tabbar-title"
                }, [
                  createElementVNode(
                    "u-text",
                    {
                      class: "ua__tabbar-title__text",
                      style: normalizeStyle({ "color": $setup.tabColor(index2) })
                    },
                    toDisplayString(item.title),
                    5
                    /* TEXT, STYLE */
                  )
                ])) : createCommentVNode("v-if", true),
                createCommentVNode(" 圆点 "),
                item.icon && item.title ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 2 },
                  [
                    item.badge ? (openBlock(), createElementBlock(
                      "u-text",
                      {
                        key: 0,
                        class: "ua__badge ua__tabbar-badge"
                      },
                      toDisplayString(item.badge),
                      1
                      /* TEXT */
                    )) : createCommentVNode("v-if", true),
                    item.dot ? (openBlock(), createElementBlock("u-text", {
                      key: 1,
                      class: "ua__badge-dot ua__tabbar-badgeDot"
                    })) : createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (openBlock(), createElementBlock(
                  Fragment,
                  { key: 3 },
                  [
                    item.badge ? (openBlock(), createElementBlock(
                      "u-text",
                      {
                        key: 0,
                        class: "ua__badge ua__tabbar-only__badge"
                      },
                      toDisplayString(item.badge),
                      1
                      /* TEXT */
                    )) : createCommentVNode("v-if", true),
                    item.dot ? (openBlock(), createElementBlock("u-text", {
                      key: 1,
                      class: "ua__badge-dot ua__tabbar-only__badgeDot"
                    })) : createCommentVNode("v-if", true)
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
const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["styles", [_style_0$6]], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-tabbar/ua-tabbar.vue"]]);
const _sfc_main$8 = {
  __name: "ua-layout",
  props: {
    tabbar: { type: [Boolean, String], default: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props2 = __props;
    const __returned__ = { props: props2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ua_tabbar = resolveEasycom(resolveDynamicComponent("ua-tabbar"), __easycom_2$2);
  return openBlock(), createElementBlock("view", {
    class: "ulive__container flexbox flex-col flex1",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "header"),
    createCommentVNode(" 内容区 "),
    createElementVNode("view", { class: "ulive__scrollview flex1" }, [
      renderSlot(_ctx.$slots, "default")
    ]),
    renderSlot(_ctx.$slots, "footer"),
    createCommentVNode(" tabbar栏 "),
    $props.tabbar ? (openBlock(), createBlock(_component_ua_tabbar, {
      key: 0,
      fixed: "",
      "z-index": "1000"
    })) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-layout/ua-layout.vue"]]);
const props$4 = {
  props: {
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
    },
    ...(_l = (_k = uni.$uv) == null ? void 0 : _k.props) == null ? void 0 : _l.input
  }
};
const _style_0$5 = { "uv-border": { "": { "!borderWidth": 0.5, "!borderColor": "#dadbde", "borderStyle": "solid" } }, "uv-border-bottom": { "": { "!borderBottomWidth": 0.5, "!borderColor": "#dadbde", "borderBottomStyle": "solid" } }, "uv-input": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "flex": 1 } }, "uv-input--radius": { "": { "borderRadius": 4 } }, "uv-input--square": { "": { "borderRadius": 4 } }, "uv-input--no-radius": { "": { "borderRadius": 0 } }, "uv-input--circle": { "": { "borderRadius": 100 } }, "uv-input__content": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "uv-input__content__field-wrapper": { "": { "position": "relative", "flexDirection": "row", "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "flex": 1 } }, "uv-input__content__field-wrapper__field": { "": { "lineHeight": 26, "textAlign": "left", "color": "#303133", "height": 24, "fontSize": 15, "flex": 1 } }, "uv-input__content__clear": { "": { "width": 20, "height": 20, "borderRadius": 100, "backgroundColor": "#c6c7cb", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.82)", "marginLeft": 15 } }, "uv-input__content__subfix-icon": { "": { "marginLeft": 4 } }, "uv-input__content__prefix-icon": { "": { "marginRight": 4 } } };
const _sfc_main$7 = {
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
  const _component_uv_icon = resolveEasycom(resolveDynamicComponent("uv-icon"), __easycom_0$2);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["uv-input", $options.inputClass]),
      style: normalizeStyle([$options.wrapperStyle]),
      renderWhole: true
    },
    [
      createElementVNode("view", { class: "uv-input__content" }, [
        createElementVNode("view", { class: "uv-input__content__prefix-icon" }, [
          renderSlot(_ctx.$slots, "prefix", {}, () => [
            _ctx.prefixIcon ? (openBlock(), createBlock(_component_uv_icon, {
              key: 0,
              name: _ctx.prefixIcon,
              size: "18",
              customStyle: _ctx.prefixIconStyle
            }, null, 8, ["name", "customStyle"])) : createCommentVNode("v-if", true)
          ])
        ]),
        createElementVNode("view", {
          class: "uv-input__content__field-wrapper",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
        }, [
          createCommentVNode(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\r\n				为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\r\n			 "),
          createElementVNode("u-input", {
            class: "uv-input__content__field-wrapper__field",
            style: normalizeStyle([$options.inputStyle]),
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
        $options.isShowClear ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uv-input__content__clear",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
        }, [
          createVNode(_component_uv_icon, {
            name: "close",
            size: "11",
            color: "#ffffff",
            customStyle: "line-height: 12px"
          })
        ])) : createCommentVNode("v-if", true),
        createElementVNode("view", { class: "uv-input__content__subfix-icon" }, [
          renderSlot(_ctx.$slots, "suffix", {}, () => [
            _ctx.suffixIcon ? (openBlock(), createBlock(_component_uv_icon, {
              key: 0,
              name: _ctx.suffixIcon,
              size: "18",
              customStyle: _ctx.suffixIconStyle
            }, null, 8, ["name", "customStyle"])) : createCommentVNode("v-if", true)
          ])
        ])
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["styles", [_style_0$5]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-input/components/uv-input/uv-input.vue"]]);
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
const props$3 = {
  props: {
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
    },
    ...(_n = (_m = uni.$uv) == null ? void 0 : _m.props) == null ? void 0 : _n.loadingIcon
  }
};
const _style_0$4 = { "uv-loading-icon": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "color": "#c8c9cc" } }, "uv-loading-icon__text": { "": { "marginLeft": 4, "color": "#606266", "fontSize": 14, "lineHeight": 20 } }, "uv-loading-icon__spinner": { "": { "width": 30, "height": 30, "position": "relative" } }, "uv-loading-icon__spinner--semicircle": { "": { "borderWidth": 2, "borderColor": "rgba(0,0,0,0)", "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderStyle": "solid" } }, "uv-loading-icon__spinner--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderWidth": 2, "borderTopColor": "#e5e5e5", "borderRightColor": "#e5e5e5", "borderBottomColor": "#e5e5e5", "borderLeftColor": "#e5e5e5", "borderStyle": "solid" } }, "uv-loading-icon--vertical": { "": { "flexDirection": "column" } } };
const animation = weex.requireModule("animation");
const _sfc_main$6 = {
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
  return _ctx.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["uv-loading-icon", [_ctx.vertical && "uv-loading-icon--vertical"]]),
      style: normalizeStyle([_ctx.$uv.addStyle(_ctx.customStyle)]),
      renderWhole: true
    },
    [
      !$data.webviewHide ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["uv-loading-icon__spinner", [`uv-loading-icon__spinner--${_ctx.mode}`]]),
          ref: "ani",
          style: normalizeStyle({
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
          _ctx.mode === "spinner" ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createCommentVNode(" 此组件内部图标部分无法设置宽高，即使通过width和height配置了也无效 "),
              !$data.webviewHide ? (openBlock(), createElementBlock(
                "loading-indicator",
                {
                  key: 0,
                  class: "uv-loading-indicator",
                  animating: true,
                  style: normalizeStyle({
                    color: _ctx.color,
                    width: _ctx.$uv.addUnit(_ctx.size),
                    height: _ctx.$uv.addUnit(_ctx.size)
                  })
                },
                null,
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      _ctx.text ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 1,
          class: "uv-loading-icon__text",
          style: normalizeStyle([{
            fontSize: _ctx.$uv.addUnit(_ctx.textSize),
            color: _ctx.textColor
          }, _ctx.$uv.addStyle(_ctx.textStyle)])
        },
        toDisplayString(_ctx.text),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["styles", [_style_0$4]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon.vue"]]);
const props$2 = {
  props: {
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
    },
    ...(_p = (_o = uni.$uv) == null ? void 0 : _o.props) == null ? void 0 : _p.button
  }
};
const _style_0$3 = { "uv-reset-button": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 0 } }, "uv-button--active": { "": { "opacity": 0.75 } }, "uv-button--active--plain": { "": { "backgroundColor": "#d9d9d9" } }, "uv-button__loading-text": { "": { "marginLeft": 4, "color": "#FFFFFF", "fontSize": 15 } }, "uv-button__text": { "": { "color": "#FFFFFF", "fontSize": 15 } }, "uv-button__text--plain--error": { "": { "color": "#f56c6c" } }, "uv-button__text--plain--warning": { "": { "color": "#f9ae3d" } }, "uv-button__text--plain--success": { "": { "color": "#5ac725" } }, "uv-button__text--plain--info": { "": { "color": "#909399" } }, "uv-button__text--plain--primary": { "": { "color": "#3c9cff" } }, "uv-button": { "": { "height": 40, "position": "relative", "alignItems": "center", "justifyContent": "center", "flexDirection": "row" } }, "uv-button--large": { "": { "height": 50, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "uv-button--normal": { "": { "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12, "fontSize": 14 } }, "uv-button--small": { "": { "height": 30, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "fontSize": 12 } }, "uv-button--mini": { "": { "height": 22, "fontSize": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "uv-button--disabled": { "": { "opacity": 0.5 } }, "uv-button--info": { "": { "color": "#323233", "backgroundColor": "#ffffff", "borderColor": "#ebedf0", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--success": { "": { "color": "#ffffff", "backgroundColor": "#5ac725", "borderColor": "#5ac725", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--primary": { "": { "color": "#ffffff", "backgroundColor": "#3c9cff", "borderColor": "#3c9cff", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--error": { "": { "color": "#ffffff", "backgroundColor": "#f56c6c", "borderColor": "#f56c6c", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--warning": { "": { "color": "#ffffff", "backgroundColor": "#f9ae3d", "borderColor": "#f9ae3d", "borderWidth": 1, "borderStyle": "solid" } }, "uv-button--block": { "": { "flexDirection": "row", "width": 100 } }, "uv-button--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100 } }, "uv-button--square": { "": { "borderBottomLeftRadius": 3, "borderBottomRightRadius": 3, "borderTopLeftRadius": 3, "borderTopRightRadius": 3 } }, "uv-button--plain": { "": { "backgroundColor": "#ffffff" } }, "uv-button--hairline": { "": { "!borderWidth": 0.5 } } };
const _sfc_main$5 = {
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
  const _component_uv_loading_icon = resolveEasycom(resolveDynamicComponent("uv-loading-icon"), __easycom_0$1);
  const _component_uv_icon = resolveEasycom(resolveDynamicComponent("uv-icon"), __easycom_0$2);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "uv-button-wrapper",
      style: normalizeStyle([$options.btnWrapperStyle]),
      renderWhole: true
    },
    [
      createElementVNode("view", {
        hoverStartTime: Number(_ctx.hoverStartTime),
        hoverStayTime: Number(_ctx.hoverStayTime),
        class: normalizeClass(["uv-button", $options.bemClass]),
        hoverClass: !_ctx.disabled && !_ctx.loading && !_ctx.color && (_ctx.plain || _ctx.type === "info") ? "uv-button--active--plain" : !_ctx.disabled && !_ctx.loading && !_ctx.plain ? "uv-button--active" : "",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
        style: normalizeStyle([$options.baseColor, _ctx.$uv.addStyle(_ctx.customStyle)])
      }, [
        _ctx.loading ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createVNode(_component_uv_loading_icon, {
              mode: _ctx.loadingMode,
              size: _ctx.loadingSize * 1.15,
              color: $options.loadingColor
            }, null, 8, ["mode", "size", "color"]),
            createElementVNode(
              "u-text",
              {
                class: normalizeClass(["uv-button__loading-text", [_ctx.plain && `uv-button__text--plain--${_ctx.type}`]]),
                style: normalizeStyle([$options.nvueTextStyle, _ctx.$uv.addStyle(_ctx.customTextStyle)])
              },
              toDisplayString(_ctx.loadingText || _ctx.text),
              7
              /* TEXT, CLASS, STYLE */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            _ctx.icon ? (openBlock(), createBlock(_component_uv_icon, {
              key: 0,
              name: _ctx.icon,
              color: $options.iconColorCom,
              size: $options.getIconSize
            }, null, 8, ["name", "color", "size"])) : createCommentVNode("v-if", true),
            createElementVNode(
              "u-text",
              {
                class: normalizeClass(["uv-button__text", [_ctx.plain && `uv-button__text--plain--${_ctx.type}`]]),
                style: normalizeStyle([
                  {
                    marginLeft: _ctx.icon ? "2px" : 0
                  },
                  $options.nvueTextStyle,
                  _ctx.$uv.addStyle(_ctx.customTextStyle)
                ])
              },
              toDisplayString(_ctx.text),
              7
              /* TEXT, CLASS, STYLE */
            ),
            renderSlot(_ctx.$slots, "suffix")
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
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$3]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-button/components/uv-button/uv-button.vue"]]);
const nvueAnimation = requireNativePlugin("animation");
class MPAnimation {
  constructor(options, _this) {
    this.options = options;
    this.animation = uni.createAnimation({
      ...options
    });
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
    let ref2 = this.$.$refs["ani"].ref;
    if (!ref2)
      return;
    return new Promise((resolve, reject) => {
      nvueAnimation.transition(ref2, {
        styles,
        ...config
      }, (res) => {
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
    let ref2 = this.$.$refs["ani"] && this.$.$refs["ani"].ref;
    if (!ref2)
      return;
    this._nvueNextAnimate(this.currentStepAnimates, 0, fn);
    this.next = 0;
  }
}
const animateTypes1 = [
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
const animateTypes2 = ["opacity", "backgroundColor"];
const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
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
const _sfc_main$4 = {
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
      const style = {
        transform: this.transform,
        opacity: this.opacity,
        ...this.$uv.addStyle(this.customStyle),
        "transition-duration": `${this.duration / 1e3}s`
      };
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
          formatAppLog("error", "at uni_modules/uv-transition/components/uv-transition/uv-transition.vue:166", `方法 ${i} 不存在`);
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
  return $data.isShow ? (openBlock(), createElementBlock("view", {
    key: 0,
    ref: "ani",
    animation: $data.animationData,
    class: normalizeClass($props.customClass),
    style: normalizeStyle($options.transformStyles),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 14, ["animation"])) : createCommentVNode("v-if", true);
}
const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-transition/components/uv-transition/uv-transition.vue"]]);
const props$1 = {
  props: {
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
    },
    ...(_r = (_q = uni.$uv) == null ? void 0 : _q.props) == null ? void 0 : _r.overlay
  }
};
const _sfc_main$3 = {
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
  const _component_uv_transition = resolveEasycom(resolveDynamicComponent("uv-transition"), __easycom_4$1);
  return openBlock(), createBlock(_component_uv_transition, {
    show: _ctx.show,
    mode: "fade",
    "custom-class": "uv-overlay",
    duration: _ctx.duration,
    "custom-style": $options.overlayStyle,
    onClick: $options.clickHandler,
    onTouchmove: withModifiers($options.clear, ["stop", "prevent"])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "duration", "custom-style", "onClick", "onTouchmove"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-overlay/components/uv-overlay/uv-overlay.vue"]]);
const props = {
  props: {
    bgColor: {
      type: String,
      default: "transparent"
    }
  }
};
const _style_0$2 = {};
const _sfc_main$2 = {
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
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle([$options.style]),
      class: "uv-status-bar",
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.vue"]]);
const _style_0$1 = {};
const _sfc_main$1 = {
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
      var _a, _b;
      const style = {};
      style.height = this.$uv.addUnit((_b = (_a = this.$uv.sys()) == null ? void 0 : _a.safeAreaInsets) == null ? void 0 : _b.bottom, "px");
      return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.isNvue = true;
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["uv-safe-bottom", [!$data.isNvue && "uv-safe-area-inset-bottom"]]),
      style: normalizeStyle([$options.style]),
      renderWhole: true
    },
    null,
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.vue"]]);
const _style_0 = { "uv-popup": { "": { "position": "fixed" }, ".top": { "top": 0 }, ".left": { "top": 0 }, ".right": { "top": 0 } }, "uv-popup__content": { ".uv-popup ": { "position": "relative" }, ".uv-popup .left": { "paddingTop": 0, "flex": 1 }, ".uv-popup .right": { "paddingTop": 0, "flex": 1 } }, "uv-popup__content__close": { ".uv-popup ": { "position": "absolute" } }, "uv-popup__content__close--hover": { ".uv-popup ": { "opacity": 0.4 } }, "uv-popup__content__close--top-left": { ".uv-popup ": { "top": 15, "left": 15 } }, "uv-popup__content__close--top-right": { ".uv-popup ": { "top": 15, "right": 15 } }, "uv-popup__content__close--bottom-left": { ".uv-popup ": { "bottom": 15, "left": 15 } }, "uv-popup__content__close--bottom-right": { ".uv-popup ": { "right": 15, "bottom": 15 } }, "fixforpc-top": { "": { "top": 0 } } };
const _sfc_main = {
  name: "uv-popup",
  components: {},
  mixins: [mpMixin, mixin],
  emits: ["change", "maskClick"],
  props: {
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
    },
    ...(_t = (_s = uni.$uv) == null ? void 0 : _s.props) == null ? void 0 : _t.popup
  },
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
        return this.$uv.error(`缺少类型：${direction}`);
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
  const _component_uv_overlay = resolveEasycom(resolveDynamicComponent("uv-overlay"), __easycom_0);
  const _component_uv_status_bar = resolveEasycom(resolveDynamicComponent("uv-status-bar"), __easycom_1);
  const _component_uv_safe_bottom = resolveEasycom(resolveDynamicComponent("uv-safe-bottom"), __easycom_2);
  const _component_uv_icon = resolveEasycom(resolveDynamicComponent("uv-icon"), __easycom_0$2);
  const _component_uv_transition = resolveEasycom(resolveDynamicComponent("uv-transition"), __easycom_4$1);
  return $data.showPopup ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["uv-popup", [$data.popupClass, $options.isDesktop ? "fixforpc-z-index" : ""]]),
      style: normalizeStyle([{ zIndex: $props.zIndex }]),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.touchstart && $options.touchstart(...args))
        },
        [
          createCommentVNode(" 遮罩层 "),
          $data.maskShow && $props.overlay ? (openBlock(), createBlock(_component_uv_overlay, {
            key: "1",
            show: $data.showTrans,
            duration: $props.duration,
            "custom-style": $props.overlayStyle,
            opacity: $props.overlayOpacity,
            zIndex: $props.zIndex,
            onClick: $options.onTap
          }, null, 8, ["show", "duration", "custom-style", "opacity", "zIndex", "onClick"])) : createCommentVNode("v-if", true),
          createVNode(_component_uv_transition, {
            key: "2",
            mode: $data.ani,
            name: "content",
            "custom-style": $data.transitionStyle,
            duration: $props.duration,
            show: $data.showTrans,
            onClick: $options.onTap
          }, {
            default: withCtx(() => [
              createElementVNode(
                "view",
                {
                  class: normalizeClass(["uv-popup__content", [$data.popupClass]]),
                  style: normalizeStyle([$options.contentStyle]),
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.clear && $options.clear(...args))
                },
                [
                  $props.safeAreaInsetTop ? (openBlock(), createBlock(_component_uv_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
                  renderSlot(_ctx.$slots, "default"),
                  $props.safeAreaInsetBottom ? (openBlock(), createBlock(_component_uv_safe_bottom, { key: 1 })) : createCommentVNode("v-if", true),
                  $props.closeable ? (openBlock(), createElementBlock(
                    "view",
                    {
                      key: 2,
                      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
                      class: normalizeClass(["uv-popup__content__close", ["uv-popup__content__close--" + $props.closeIconPos]]),
                      hoverClass: "uv-popup__content__close--hover",
                      hoverStayTime: "150"
                    },
                    [
                      createVNode(_component_uv_icon, {
                        name: "close",
                        color: "#909399",
                        size: "18",
                        bold: ""
                      })
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true)
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
  )) : createCommentVNode("v-if", true);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-popup/components/uv-popup/uv-popup.vue"]]);
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
function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? "0" + color : color;
    rgb.push(color);
  }
  return "#" + rgb.join("");
}
const _imports_5 = "/static/avatar/uimg3.jpeg";
export {
  _export_sfc as _,
  mixin as a,
  __easycom_0$1 as b,
  __easycom_0$2 as c,
  __easycom_1$2 as d,
  onHide as e,
  formatAppLog as f,
  _imports_5 as g,
  getRandomColor as h,
  __easycom_6 as i,
  __easycom_2$2 as j,
  __easycom_1$1 as k,
  __easycom_2$1 as l,
  mpMixin as m,
  __easycom_3 as n,
  onShow as o,
  __easycom_4 as p,
  requireNativePlugin as q,
  resolveEasycom as r,
  onLoad as s,
  isEmpty as t
};
