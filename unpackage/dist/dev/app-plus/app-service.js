if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  var _e, _f;
  const ON_LOAD = "onLoad";
  const ON_PAGE_SCROLL = "onPageScroll";
  const ON_REACH_BOTTOM = "onReachBottom";
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
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$G = {
    __name: "ua-navbar",
    props: {
      custom: { type: [Boolean, String], default: false },
      back: { type: [Boolean, String], default: true },
      title: { type: String, default: "" },
      // 标题颜色
      color: { type: String, default: "#fff" },
      bgcolor: { type: String, default: "#42b983" },
      size: { type: String, default: null },
      center: { type: [Boolean, String], default: false },
      // 是否搜索
      search: { type: [Boolean, String], default: false },
      // 是否固定
      fixed: { type: [Boolean, String], default: false },
      transparent: { type: [Boolean, String], default: false },
      // 设置层级
      zIndex: { type: [Number, String], default: "2023" }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props2 = __props;
      const { globalData } = getApp();
      const statusBarH = vue.ref(0);
      const customBarH = vue.ref(0);
      statusBarH.value = globalData.statusBarH;
      customBarH.value = props2.custom ? globalData.customBarH : globalData.customBarH - statusBarH.value;
      const navH = vue.computed(() => `height: ${customBarH.value}px;`);
      const onBack = () => {
        uni.navigateBack({
          delta: 1
        });
      };
      const __returned__ = { props: props2, globalData, statusBarH, customBarH, navH, onBack, ref: vue.ref, computed: vue.computed, inject: vue.inject };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "ua__navbar",
        style: vue.normalizeStyle(!$props.transparent ? $setup.navH : "")
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["ua__navbar-wrap flexbox flex-alignc", { "custom": $props.custom, "fixed": $props.fixed || $props.transparent }]),
            style: vue.normalizeStyle({ "height": $setup.customBarH + "px", "padding-top": ($props.custom ? $setup.statusBarH : 0) + "px", "background": $props.bgcolor, "color": $props.color, "z-index": $props.zIndex })
          },
          [
            $props.back && $props.back != "false" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "action navbar-action__left",
              onClick: $setup.onBack
            }, [
              _ctx.$slots.back ? vue.renderSlot(_ctx.$slots, "back", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 1,
                  class: "iconfont nvuefont",
                  style: vue.normalizeStyle({ "color": $props.color })
                },
                vue.toDisplayString(""),
                4
                /* STYLE */
              )),
              vue.renderSlot(_ctx.$slots, "backText", {}, void 0, true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
            !$props.search ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: vue.normalizeClass(["navbar-title", { "center": $props.center, "notback": !$props.back }])
              },
              [
                _ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    style: vue.normalizeStyle({ "color": $props.color, "font-size": $props.size })
                  },
                  vue.toDisplayString($props.title),
                  5
                  /* TEXT, STYLE */
                ))
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true),
            $props.search ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "action navbar-action__search"
            }, [
              vue.renderSlot(_ctx.$slots, "search", {}, void 0, true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "action navbar-action__right" }, [
              vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-5a94348c"], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-navbar/ua-navbar.vue"]]);
  function formatCls(props2, prefix, prefixCls) {
    const mergeClass = vue.computed(() => {
      let mergeCls = vue.ref([]);
      let preCls;
      for (let key in props2) {
        if (isArray$1(prefixCls) && prefixCls.includes(key) && props2[key]) {
          if (isBool(props2[key])) {
            if (JSON.parse(props2[key])) {
              preCls = `${prefix}${key}`;
            }
          } else {
            preCls = `${prefix}${props2[key]}`;
          }
          const index2 = mergeCls.value.findIndex((v) => v == preCls);
          if (index2 == -1) {
            mergeCls.value.push(preCls);
          } else {
            mergeCls.value.splice(index2, 1);
          }
        }
      }
      return [...mergeCls.value].join(" ");
    });
    return mergeClass;
  }
  function isBool(str) {
    return /^true|false$/i.test(str);
  }
  function isTrue(str) {
    return /^true$/i.test(str);
  }
  function isNumber(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
  }
  function isArray$1(str) {
    return isObject$2(str) || Array.isArray(str);
  }
  function isObject$2(str) {
    return str != null && typeof str == "object";
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
  function getStyle(el, style) {
    if (!el || !style)
      return;
    return el.currentStyle ? el.currentStyle[style] : document.defaultView.getComputedStyle(el, null)[style];
  }
  const _sfc_main$F = {
    __name: "ua-input",
    props: {
      modelValue: String | Number,
      // 文本框类型(text | password | textarea)
      type: String,
      // 尺寸(large | default | small)
      size: String,
      readonly: { type: [Boolean, String], default: false },
      disabled: { type: [Boolean, String] },
      clearable: { type: [Boolean, String] },
      // 是否切换密码
      showPassword: { type: [Boolean, String] },
      circle: { type: [Boolean, String] },
      // 搜索框(带搜索按钮输入框)
      search: { type: [Boolean, String], default: false },
      // 输入框左侧图标
      prefixIcon: String,
      // 输入框右侧图标
      suffixIcon: String,
      // 输入框占位文本
      placeholder: String,
      // 最大输入长度
      maxlength: { type: [String, Number], default: -1 },
      // 最大输入长度
      showCount: Boolean,
      // 原生name属性
      name: String,
      autofocus: Boolean,
      autosize: { type: [Boolean, Object] }
    },
    emits: [
      "update:modelValue",
      "change",
      "input",
      "focus",
      "blur",
      "clear",
      "search",
      "enter",
      "mouseenter",
      "mouseleave"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props2 = __props;
      const emit = __emit;
      const slots = vue.useSlots();
      const isDisabled = vue.computed(() => isTrue(props2.disabled));
      const preClass = formatCls(props2, "ve__input--", ["type"]);
      const isClass = formatCls(props2, "is-", ["search", "readonly", "clearable", "circle"]);
      const sizeClass = vue.computed(() => props2.size ? `ve__input--${props2.size}` : "");
      const inputRef = vue.ref();
      const textareaRef = vue.ref();
      const textareaCalcStyle = vue.ref(null);
      const focused = vue.ref(false);
      const hovering = vue.ref(false);
      const passwordVisible = vue.ref(false);
      const _ref = vue.computed(() => inputRef.value || textareaRef.value);
      const showClear = vue.computed(
        () => props2.clearable && !isDisabled.value && !props2.readonly && props2.modelValue && (focused.value || hovering.value)
      );
      const showPwdVisible = vue.computed(
        () => props2.showPassword && !isDisabled.value && !props2.readonly && (props2.modelValue || focused.value)
      );
      const showSuffixVisible = vue.computed(
        () => slots.suffix || props2.suffixIcon || showClear.value || props2.showPassword || showLimitWordVisible.value
      );
      const showLimitWordVisible = vue.computed(
        () => props2.showCount && props2.maxlength && !isDisabled.value && !props2.readonly && !props2.showPassword
      );
      const textareaStyle = vue.computed(() => [
        textareaCalcStyle.value
      ]);
      const inputLength = vue.computed(() => props2.modelValue.length);
      const handleMouseEnter = (e) => {
        hovering.value = true;
        emit("mouseenter", e);
      };
      const handleMouseLeave = (e) => {
        hovering.value = false;
        emit("mouseleave", e);
      };
      const handleFocus = (e) => {
        focused.value = true;
        emit("focus", e);
      };
      const handleBlur = (e) => {
        focused.value = false;
        emit("blur", e);
      };
      const handleInput = (e) => {
        const val = e.detail.value;
        emit("update:modelValue", val);
        emit("input", val);
      };
      const handleChange = (e) => {
        emit("change", e.detail.value);
      };
      const handleKeydown = (e) => {
        if (e.key == "Enter" || e.keyCode == 13) {
          emit("enter", e);
        }
      };
      const handleClear = () => {
        emit("update:modelValue", "");
        emit("input", "");
        emit("change", "");
        emit("clear");
      };
      const handlePwdVisible = () => {
        passwordVisible.value = !passwordVisible.value;
      };
      const handleSearch = (e) => {
        if (props2.search) {
          emit("search", props2.modelValue);
        }
      };
      const textareaAutoHeight = () => {
        if (!_ref.value)
          return;
        if (!props2.autosize)
          return;
        if (isObject$2(props2.autosize)) {
          textareaCalcStyle.value = {
            maxHeight: props2.autosize.maxRows * 28 + "px",
            overflow: "auto"
          };
        }
      };
      vue.onMounted(() => {
        vue.nextTick(() => textareaAutoHeight());
      });
      vue.watch(() => props2.modelValue, () => {
        vue.nextTick(() => textareaAutoHeight());
      });
      const __returned__ = { props: props2, emit, slots, isDisabled, preClass, isClass, sizeClass, inputRef, textareaRef, textareaCalcStyle, focused, hovering, passwordVisible, _ref, showClear, showPwdVisible, showSuffixVisible, showLimitWordVisible, textareaStyle, inputLength, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur, handleInput, handleChange, handleKeydown, handleClear, handlePwdVisible, handleSearch, textareaAutoHeight, ref: vue.ref, computed: vue.computed, useSlots: vue.useSlots, nextTick: vue.nextTick, onMounted: vue.onMounted, watch: vue.watch, get formatCls() {
        return formatCls;
      }, get isObject() {
        return isObject$2;
      }, get getStyle() {
        return getStyle;
      }, get isTrue() {
        return isTrue;
      }, get isEmpty() {
        return isEmpty;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(["ve__input", [
          $setup.preClass,
          $setup.isClass,
          $setup.sizeClass,
          { "is-disabled": $setup.isDisabled },
          { "is-resizable": $props.type == "textarea" && !$props.autosize },
          { "ve__input--group": _ctx.$slots.prepend || _ctx.$slots.append },
          { "ve__input--group__prepend": _ctx.$slots.prepend },
          { "ve__input--group__append": _ctx.$slots.append }
        ]]),
        onMouseenter: $setup.handleMouseEnter,
        onMouseleave: $setup.handleMouseLeave
      },
      [
        _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "ve__input--prepend"
        }, [
          vue.renderSlot(_ctx.$slots, "prepend", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", { class: "ve__input-wrapper" }, [
          _ctx.$slots.prefix || $props.prefixIcon ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "ve__input--prefix"
          }, [
            vue.createElementVNode("span", { class: "ve__input--prefix__inner" }, [
              vue.renderSlot(_ctx.$slots, "prefix", {}, void 0, true),
              $props.prefixIcon ? (vue.openBlock(), vue.createElementBlock(
                "i",
                {
                  key: 0,
                  class: vue.normalizeClass(["iconfont", $props.prefixIcon])
                },
                null,
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ])) : vue.createCommentVNode("v-if", true),
          $props.type != "textarea" ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            class: "ve__input-inner",
            ref: "inputRef",
            type: $props.showPassword ? $setup.passwordVisible ? "text" : "password" : $props.type,
            value: $props.modelValue,
            name: $props.name,
            maxlength: $props.maxlength,
            readonly: $props.readonly,
            disabled: $setup.isDisabled,
            placeholder: $props.placeholder,
            "cursor-spacing": 15,
            focus: $props.autofocus,
            onFocus: $setup.handleFocus,
            onBlur: $setup.handleBlur,
            onInput: $setup.handleInput,
            onChange: $setup.handleChange,
            onKeydown: $setup.handleKeydown
          }, null, 40, ["type", "value", "name", "maxlength", "readonly", "disabled", "placeholder", "focus"])) : (vue.openBlock(), vue.createElementBlock("textarea", {
            key: 2,
            class: "ve__input-inner ve__textarea-inner",
            ref: "textareaRef",
            value: $props.modelValue,
            maxlength: $props.maxlength,
            readonly: $props.readonly,
            disabled: $setup.isDisabled,
            placeholder: $props.placeholder,
            "show-confirm-bar": false,
            "adjust-position": false,
            "cursor-spacing": 15,
            focus: $props.autofocus,
            "auto-height": $setup.isTrue($props.autosize) || $setup.isObject($props.autosize),
            style: vue.normalizeStyle($setup.textareaStyle),
            onFocus: $setup.handleFocus,
            onBlur: $setup.handleBlur,
            onInput: $setup.handleInput,
            onChange: $setup.handleChange,
            onKeydown: $setup.handleKeydown
          }, null, 44, ["value", "maxlength", "readonly", "disabled", "placeholder", "focus", "auto-height"])),
          $setup.showSuffixVisible ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 3,
              class: "ve__input--suffix",
              onClick: $setup.handleSearch,
              onMousedown: _cache[3] || (_cache[3] = vue.withModifiers(() => {
              }, ["prevent"]))
            },
            [
              vue.createElementVNode("span", { class: "ve__input--suffix__inner" }, [
                !$setup.showClear || !$setup.showPwdVisible ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.renderSlot(_ctx.$slots, "suffix", {}, void 0, true),
                    $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
                      "i",
                      {
                        key: 0,
                        class: vue.normalizeClass(["iconfont", $props.suffixIcon])
                      },
                      null,
                      2
                      /* CLASS */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : vue.createCommentVNode("v-if", true),
                $setup.showClear ? (vue.openBlock(), vue.createElementBlock(
                  "i",
                  {
                    key: 1,
                    class: "iconfont ve-icon-close-circle ve__input-clear",
                    onClick: $setup.handleClear,
                    onMousedown: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                    }, ["prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                )) : vue.createCommentVNode("v-if", true),
                $setup.showPwdVisible ? (vue.openBlock(), vue.createElementBlock(
                  "i",
                  {
                    key: 2,
                    class: vue.normalizeClass(["iconfont ve-icon-hide ve__input-password", { "ve-icon-eye1": $setup.passwordVisible }]),
                    onClick: $setup.handlePwdVisible,
                    onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                    }, ["prevent"])),
                    onMouseup: _cache[2] || (_cache[2] = vue.withModifiers(() => {
                    }, ["prevent"]))
                  },
                  null,
                  34
                  /* CLASS, NEED_HYDRATION */
                )) : vue.createCommentVNode("v-if", true),
                $setup.showLimitWordVisible ? (vue.openBlock(), vue.createElementBlock(
                  "em",
                  {
                    key: 3,
                    class: "ve__input-limitword"
                  },
                  vue.toDisplayString($setup.inputLength) + " / " + vue.toDisplayString($props.maxlength),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ],
            32
            /* NEED_HYDRATION */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 1,
            class: "ve__input--append",
            onClick: $setup.handleSearch,
            onMousedown: _cache[4] || (_cache[4] = vue.withModifiers(() => {
            }, ["prevent"]))
          },
          [
            vue.renderSlot(_ctx.$slots, "append", {}, void 0, true)
          ],
          32
          /* NEED_HYDRATION */
        )) : vue.createCommentVNode("v-if", true)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    );
  }
  const __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-cfe0ef35"], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-input/ua-input.vue"]]);
  const _sfc_main$E = {
    name: "u-badge",
    props: {
      // primary,warning,success,error,info
      type: {
        type: String,
        default: "error"
      },
      // default, mini
      size: {
        type: String,
        default: "default"
      },
      //是否是圆点
      isDot: {
        type: Boolean,
        default: false
      },
      // 显示的数值内容
      count: {
        type: [Number, String]
      },
      // 展示封顶的数字值
      overflowCount: {
        type: Number,
        default: 99
      },
      // 当数值为 0 时，是否展示 Badge
      showZero: {
        type: Boolean,
        default: false
      },
      // 位置偏移
      offset: {
        type: Array,
        default: () => {
          return [20, 20];
        }
      },
      // 是否开启绝对定位，开启了offset才会起作用
      absolute: {
        type: Boolean,
        default: true
      },
      // 字体大小
      fontSize: {
        type: [String, Number],
        default: "24"
      },
      // 字体演示
      color: {
        type: String,
        default: "#ffffff"
      },
      // badge的背景颜色
      bgColor: {
        type: String,
        default: ""
      },
      // 是否让badge组件的中心点和父组件右上角重合，配置的话，offset将会失效
      isCenter: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      // 是否将badge中心与父组件右上角重合
      boxStyle() {
        let style = {};
        if (this.isCenter) {
          style.top = 0;
          style.right = 0;
          style.transform = "translateY(-50%) translateX(50%)";
        } else {
          style.top = this.offset[0] + "rpx";
          style.right = this.offset[1] + "rpx";
          style.transform = "translateY(0) translateX(0)";
        }
        if (this.size == "mini") {
          style.transform = style.transform + " scale(0.8)";
        }
        return style;
      },
      // isDot类型时，不显示文字
      showText() {
        if (this.isDot)
          return "";
        else {
          if (this.count > this.overflowCount)
            return `${this.overflowCount}+`;
          else
            return this.count;
        }
      },
      // 是否显示组件
      show() {
        if (this.count == 0 && this.showZero == false)
          return false;
        else
          return true;
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return $options.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-badge", [
          $props.isDot ? "u-badge-dot" : "",
          $props.size == "mini" ? "u-badge-mini" : "",
          $props.type ? "u-badge--bg--" + $props.type : ""
        ]]),
        style: vue.normalizeStyle([{
          top: $props.offset[0] + "rpx",
          right: $props.offset[1] + "rpx",
          fontSize: $props.fontSize + "rpx",
          position: $props.absolute ? "absolute" : "static",
          color: $props.color,
          backgroundColor: $props.bgColor
        }, $options.boxStyle])
      },
      vue.toDisplayString($options.showText),
      7
      /* TEXT, CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-f84de764"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-badge/u-badge.vue"]]);
  const _sfc_main$D = {
    name: "u-icon",
    emits: ["click", "touchstart"],
    props: {
      // 图标类名
      name: {
        type: String,
        default: ""
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: ""
      },
      // 字体大小，单位rpx
      size: {
        type: [Number, String],
        default: "inherit"
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: false
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [Number, String],
        default: ""
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: ""
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: "uicon"
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
        default: "28"
      },
      // label的颜色
      labelColor: {
        type: String,
        default: "#606266"
      },
      // label与图标的距离(横向排列)
      marginLeft: {
        type: [String, Number],
        default: "6"
      },
      // label与图标的距离(竖向排列)
      marginTop: {
        type: [String, Number],
        default: "6"
      },
      // label与图标的距离(竖向排列)
      marginRight: {
        type: [String, Number],
        default: "6"
      },
      // label与图标的距离(竖向排列)
      marginBottom: {
        type: [String, Number],
        default: "6"
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: "widthFix"
      },
      // 自定义样式
      customStyle: {
        type: Object,
        default() {
          return {};
        }
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
      // 是否为DecimalIcon
      showDecimalIcon: {
        type: Boolean,
        default: false
      },
      // 背景颜色，可接受主题色，仅Decimal时有效
      inactiveColor: {
        type: String,
        default: "#ececec"
      },
      // 显示的百分比，仅Decimal时有效
      percent: {
        type: [Number, String],
        default: "50"
      }
    },
    computed: {
      customClass() {
        let classes = [];
        let { customPrefix, name } = this;
        let index2 = name.indexOf("-icon-");
        if (index2 > -1) {
          customPrefix = name.substring(0, index2 + 5);
          classes.push(name);
        } else {
          classes.push(`${customPrefix}-${name}`);
        }
        if (customPrefix === "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(customPrefix);
        }
        if (this.showDecimalIcon && this.inactiveColor && this.$u.config.type.includes(this.inactiveColor)) {
          classes.push("u-icon__icon--" + this.inactiveColor);
        } else if (this.color && this.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.size == "inherit" ? "inherit" : this.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: this.$u.addUnit(this.top)
        };
        if (this.showDecimalIcon && this.inactiveColor && !this.$u.config.type.includes(this.inactiveColor)) {
          style.color = this.inactiveColor;
        } else if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$u.addUnit(this.width) : this.$u.addUnit(this.size);
        style.height = this.height ? this.$u.addUnit(this.height) : this.$u.addUnit(this.size);
        return style;
      },
      decimalIconStyle() {
        let style = {};
        style = {
          fontSize: this.size == "inherit" ? "inherit" : this.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: this.$u.addUnit(this.top),
          width: this.percent + "%"
        };
        if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      decimalIconClass() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.customPrefix == "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && this.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        else
          classes.push("u-icon__icon--primary");
        return classes;
      }
    },
    methods: {
      click() {
        this.$emit("click", this.index);
      },
      touchstart() {
        this.$emit("touchstart", this.index);
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$props.customStyle]),
        class: vue.normalizeClass(["u-icon", ["u-icon--" + $props.labelPos]]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.click && $options.click(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "u-icon__img",
          src: $props.name,
          mode: $props.imgMode,
          style: vue.normalizeStyle([$options.imgStyle])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: vue.normalizeClass(["u-icon__icon", $options.customClass]),
          style: vue.normalizeStyle([$options.iconStyle]),
          "hover-class": $props.hoverClass,
          onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchstart && $options.touchstart(...args))
        }, [
          $props.showDecimalIcon ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            style: vue.normalizeStyle([$options.decimalIconStyle]),
            class: vue.normalizeClass([$options.decimalIconClass, "u-icon__decimal"]),
            "hover-class": $props.hoverClass
          }, null, 14, ["hover-class"])) : vue.createCommentVNode("v-if", true)
        ], 46, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示，微信小程序不传值默认为null，故需要增加null的判断 '),
        $props.label !== "" && $props.label !== null ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "u-icon__label",
            style: vue.normalizeStyle({
              color: $props.labelColor,
              fontSize: _ctx.$u.addUnit($props.labelSize),
              marginLeft: $props.labelPos == "right" ? _ctx.$u.addUnit($props.marginLeft) : 0,
              marginTop: $props.labelPos == "bottom" ? _ctx.$u.addUnit($props.marginTop) : 0,
              marginRight: $props.labelPos == "left" ? _ctx.$u.addUnit($props.marginRight) : 0,
              marginBottom: $props.labelPos == "top" ? _ctx.$u.addUnit($props.marginBottom) : 0
            })
          },
          vue.toDisplayString($props.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-5de67484"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-icon/u-icon.vue"]]);
  const _sfc_main$C = {
    name: "u-grid-item",
    emits: ["click"],
    props: {
      // 背景颜色
      bgColor: {
        type: String,
        default: "#ffffff"
      },
      // 点击时返回的index
      index: {
        type: [Number, String],
        default: ""
      },
      // 自定义样式，对象形式
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "30rpx 0"
          };
        }
      }
    },
    data() {
      return {
        parentData: {
          hoverClass: "",
          // 按下去的时候，是否显示背景灰色
          col: 3,
          // 父组件划分的宫格数
          border: true
          // 是否显示边框，根据父组件决定
        }
      };
    },
    created() {
      this.updateParentData();
      this.parent.children.push(this);
    },
    computed: {
      // 每个grid-item的宽度
      width() {
        return 100 / Number(this.parentData.col) + "%";
      }
    },
    methods: {
      // 获取父组件的参数
      updateParentData() {
        this.getParentData("u-grid");
      },
      click() {
        this.$emit("click", this.index);
        this.parent && this.parent.click(this.index);
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-grid-item",
      "hover-class": $data.parentData.hoverClass,
      "hover-stay-time": 200,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args)),
      style: vue.normalizeStyle({
        background: $props.bgColor,
        width: $options.width
      })
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-grid-item-box", [$data.parentData.border ? "u-border-right u-border-bottom" : ""]]),
          style: vue.normalizeStyle([$props.customStyle])
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        6
        /* CLASS, STYLE */
      )
    ], 12, ["hover-class"]);
  }
  const __easycom_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-60e229e5"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.vue"]]);
  const _sfc_main$B = {
    name: "u-grid",
    emits: ["click"],
    props: {
      // 分成几列
      col: {
        type: [Number, String],
        default: 3
      },
      // 是否显示边框
      border: {
        type: Boolean,
        default: true
      },
      // 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
      align: {
        type: String,
        default: "left"
      },
      // 宫格按压时的样式类，"none"为无效果
      hoverClass: {
        type: String,
        default: "u-hover-class"
      }
    },
    data() {
      return {
        index: 0
      };
    },
    watch: {
      // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
      parentData() {
        if (this.children.length) {
          this.children.map((child) => {
            typeof child.updateParentData == "function" && child.updateParentData();
          });
        }
      }
    },
    created() {
      this.children = [];
    },
    computed: {
      // 计算父组件的值是否发生变化
      parentData() {
        return [this.hoverClass, this.col, this.size, this.border];
      },
      // 宫格对齐方式
      gridStyle() {
        let style = {};
        switch (this.align) {
          case "left":
            style.justifyContent = "flex-start";
            break;
          case "center":
            style.justifyContent = "center";
            break;
          case "right":
            style.justifyContent = "flex-end";
            break;
          default:
            style.justifyContent = "flex-start";
        }
        return style;
      }
    },
    methods: {
      click(index2) {
        this.$emit("click", index2);
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-grid", { "u-border-top u-border-left": $props.border }]),
        style: vue.normalizeStyle([$options.gridStyle])
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-897c440a"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-grid/u-grid.vue"]]);
  const _sfc_main$A = {
    name: "u-tabs",
    emits: ["update:modelValue", "input", "change"],
    props: {
      // 通过双向绑定控制组件的弹出与收起
      value: {
        type: [Number, String],
        default: 0
      },
      modelValue: {
        type: [Number, String],
        default: 0
      },
      // 当前活动tab的索引（请使用 v-model="current" 代替 :current="current" @change="change" 其他不变）
      current: {
        type: [Number, String],
        default: 0
      },
      // 导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度
      isScroll: {
        type: Boolean,
        default: true
      },
      //需循环的标签列表
      list: {
        type: Array,
        default() {
          return [];
        }
      },
      // 导航栏的高度和行高
      height: {
        type: [String, Number],
        default: 80
      },
      // 字体大小
      fontSize: {
        type: [String, Number],
        default: 30
      },
      // 过渡动画时长, 单位ms
      duration: {
        type: [String, Number],
        default: 0.5
      },
      // 选中项的主题颜色
      activeColor: {
        type: String,
        default: "#2979ff"
      },
      // 未选中项的颜色
      inactiveColor: {
        type: String,
        default: "#303133"
      },
      // 菜单底部移动的bar的宽度，单位rpx
      barWidth: {
        type: [String, Number],
        default: 40
      },
      // 移动bar的高度
      barHeight: {
        type: [String, Number],
        default: 6
      },
      // 单个tab的左或有内边距（左右相同）
      gutter: {
        type: [String, Number],
        default: 30
      },
      // 导航栏的背景颜色
      bgColor: {
        type: String,
        default: "#ffffff"
      },
      // 读取传入的数组对象的属性(tab名称)
      name: {
        type: String,
        default: "name"
      },
      // 读取传入的数组对象的属性(徽标数)
      count: {
        type: String,
        default: "count"
      },
      // 徽标数位置偏移
      offset: {
        type: Array,
        default: () => {
          return [5, 20];
        }
      },
      // 活动tab字体是否加粗
      bold: {
        type: Boolean,
        default: true
      },
      // 当前活动tab item的样式
      activeItemStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 是否显示底部的滑块
      showBar: {
        type: Boolean,
        default: true
      },
      // 底部滑块的自定义样式
      barStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 标签的宽度
      itemWidth: {
        type: [Number, String],
        default: "auto"
      }
    },
    data() {
      return {
        scrollLeft: 0,
        // 滚动scroll-view的左边滚动距离
        tabQueryInfo: [],
        // 存放对tab菜单查询后的节点信息
        componentWidth: 0,
        // 屏幕宽度，单位为px
        scrollBarLeft: 0,
        // 移动bar需要通过translateX()移动的距离
        parentLeft: 0,
        // 父元素(tabs组件)到屏幕左边的距离
        id: this.$u.guid(),
        // id值
        currentIndex: this.current,
        barFirstTimeMove: true
        // 滑块第一次移动时(页面刚生成时)，无需动画，否则给人怪异的感觉
      };
    },
    watch: {
      // 监听tab的变化，重新计算tab菜单的布局信息，因为实际使用中菜单可能是通过
      // 后台获取的（如新闻app顶部的菜单），获取返回需要一定时间，所以list变化时，重新获取布局信息
      list(n, o) {
        if (n.length !== o.length)
          this.currentIndex = 0;
        this.$nextTick(() => {
          this.init();
        });
      },
      current: {
        immediate: true,
        handler(nVal, oVal) {
          this.$nextTick(() => {
            this.currentIndex = nVal;
            this.scrollByIndex();
          });
        }
      },
      valueCom: {
        immediate: true,
        handler(nVal, oVal) {
          this.$nextTick(() => {
            this.currentIndex = nVal;
            this.scrollByIndex();
          });
        }
      }
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      // 移动bar的样式
      tabBarStyle() {
        let style = {
          width: this.barWidth + "rpx",
          transform: `translate(${this.scrollBarLeft}px, -100%)`,
          // 滑块在页面渲染后第一次滑动时，无需动画效果
          "transition-duration": `${this.barFirstTimeMove ? 0 : this.duration}s`,
          "background-color": this.activeColor,
          height: this.barHeight + "rpx",
          // 设置一个很大的值，它会自动取能用的最大值，不用高度的一半，是因为高度可能是单数，会有小数出现
          "border-radius": `${this.barHeight / 2}px`
        };
        Object.assign(style, this.barStyle);
        return style;
      },
      // tab的样式
      tabItemStyle() {
        return (index2) => {
          let style = {
            height: this.height + "rpx",
            "line-height": this.height + "rpx",
            "font-size": this.fontSize + "rpx",
            "transition-duration": `${this.duration}s`,
            padding: this.isScroll ? `0 ${this.gutter}rpx` : "",
            flex: this.isScroll ? "auto" : "1",
            width: this.$u.addUnit(this.itemWidth)
          };
          if (index2 == this.currentIndex && this.bold)
            style.fontWeight = "bold";
          if (index2 == this.currentIndex) {
            style.color = this.activeColor;
            style = Object.assign(style, this.activeItemStyle);
          } else {
            style.color = this.inactiveColor;
          }
          return style;
        };
      }
    },
    methods: {
      // 设置一个init方法，方便多处调用
      async init() {
        let tabRect = await this.$uGetRect("#" + this.id);
        this.parentLeft = tabRect.left;
        this.componentWidth = tabRect.width;
        this.getTabRect();
      },
      // 点击某一个tab菜单
      clickTab(index2) {
        if (index2 == this.currentIndex)
          return;
        this.$emit("change", index2);
        this.$emit("input", index2);
        this.$emit("update:modelValue", index2);
      },
      // 查询tab的布局信息
      getTabRect() {
        let query = uni.createSelectorQuery().in(this);
        for (let i = 0; i < this.list.length; i++) {
          query.select(`#u-tab-item-${i}`).fields({
            size: true,
            rect: true
          });
        }
        query.exec(
          (function(res) {
            this.tabQueryInfo = res;
            this.scrollByIndex();
          }).bind(this)
        );
      },
      // 滚动scroll-view，让活动的tab处于屏幕的中间位置
      scrollByIndex() {
        let tabInfo = this.tabQueryInfo[this.currentIndex];
        if (!tabInfo)
          return;
        let tabWidth = tabInfo.width;
        let offsetLeft = tabInfo.left - this.parentLeft;
        let scrollLeft = offsetLeft - (this.componentWidth - tabWidth) / 2;
        this.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
        let left = tabInfo.left + tabInfo.width / 2 - this.parentLeft;
        this.scrollBarLeft = left - uni.upx2px(this.barWidth) / 2;
        if (this.barFirstTimeMove == true) {
          setTimeout(() => {
            this.barFirstTimeMove = false;
          }, 100);
        }
      }
    },
    mounted() {
      this.init();
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-tabs",
        style: vue.normalizeStyle({
          background: $props.bgColor
        })
      },
      [
        vue.createCommentVNode(" $u.getRect()对组件根节点无效，因为写了.in(this)，故这里获取内层接点尺寸 "),
        vue.createElementVNode("view", { id: $data.id }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": "",
            class: "u-scroll-view",
            "scroll-left": $data.scrollLeft,
            "scroll-with-animation": ""
          }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["u-scroll-box", { "u-tabs-scroll-flex": !$props.isScroll }]),
              id: $data.id
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.list, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-tab-item u-line-1",
                    id: "u-tab-item-" + index2,
                    key: index2,
                    onClick: ($event) => $options.clickTab(index2),
                    style: vue.normalizeStyle([$options.tabItemStyle(index2)])
                  }, [
                    vue.createVNode(_component_u_badge, {
                      count: item[$props.count] || item["count"] || 0,
                      offset: $props.offset,
                      size: "mini"
                    }, null, 8, ["count", "offset"]),
                    vue.createTextVNode(
                      " " + vue.toDisplayString(item[$props.name] || item["name"]),
                      1
                      /* TEXT */
                    )
                  ], 12, ["id", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $props.showBar ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "u-tab-bar",
                  style: vue.normalizeStyle([$options.tabBarStyle])
                },
                null,
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ], 10, ["id"])
          ], 8, ["scroll-left"])
        ], 8, ["id"])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-750d9d75"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-tabs/u-tabs.vue"]]);
  const _sfc_main$z = {
    name: "u-back-top",
    props: {
      // 返回顶部的形状，circle-圆形，square-方形
      mode: {
        type: String,
        default: "circle"
      },
      // 自定义图标
      icon: {
        type: String,
        default: "arrow-upward"
      },
      // 提示文字
      tips: {
        type: String,
        default: ""
      },
      // 返回顶部滚动时间
      duration: {
        type: [Number, String],
        default: 100
      },
      // 滚动距离
      scrollTop: {
        type: [Number, String],
        default: 0
      },
      // 距离顶部多少距离显示，单位rpx
      top: {
        type: [Number, String],
        default: 400
      },
      // 返回顶部按钮到底部的距离，单位rpx
      bottom: {
        type: [Number, String],
        default: 200
      },
      // 返回顶部按钮到右边的距离，单位rpx
      right: {
        type: [Number, String],
        default: 40
      },
      // 层级
      zIndex: {
        type: [Number, String],
        default: "9"
      },
      // 图标的样式，对象形式
      iconStyle: {
        type: Object,
        default() {
          return {
            color: "#909399",
            fontSize: "38rpx"
          };
        }
      },
      // 整个组件的样式
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    watch: {
      showBackTop(nVal, oVal) {
        if (nVal) {
          this.uZIndex = this.zIndex;
          this.opacity = 1;
        } else {
          this.uZIndex = -1;
          this.opacity = 0;
        }
      }
    },
    computed: {
      showBackTop() {
        return this.scrollTop > uni.upx2px(this.top);
      }
    },
    data() {
      return {
        // 不透明度，为了让组件有一个显示和隐藏的过渡动画
        opacity: 0,
        // 组件的z-index值，隐藏时设置为-1，就会看不到
        uZIndex: -1
      };
    },
    methods: {
      backToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: this.duration
        });
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.backToTop && $options.backToTop(...args)),
        class: vue.normalizeClass(["u-back-top", ["u-back-top--mode--" + $props.mode]]),
        style: vue.normalizeStyle([{
          bottom: $props.bottom + "rpx",
          right: $props.right + "rpx",
          borderRadius: $props.mode == "circle" ? "10000rpx" : "8rpx",
          zIndex: $data.uZIndex,
          opacity: $data.opacity
        }, $props.customStyle])
      },
      [
        !_ctx.$slots.default && !_ctx.$slots.$default ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-back-top__content"
        }, [
          vue.createVNode(_component_u_icon, {
            onClick: $options.backToTop,
            name: $props.icon,
            "custom-style": $props.iconStyle
          }, null, 8, ["onClick", "name", "custom-style"]),
          vue.createElementVNode(
            "view",
            { class: "u-back-top__content__tips" },
            vue.toDisplayString($props.tips),
            1
            /* TEXT */
          )
        ])) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-6976d1a0"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-back-top/u-back-top.vue"]]);
  const _sfc_main$y = {
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
      if (props2.hideTabBar)
        uni.hideTabBar();
      const currentTabIndex = vue.ref(props2.current);
      const isImg = vue.computed(() => {
        return (str) => {
          if (typeof str !== "string")
            return;
          return /\.(gif|jpg|jpeg|png|bmp|webp|svg|tiff|psd)$/i.test(str);
        };
      });
      const tabIcon = vue.computed(() => {
        return (index2) => {
          const item = props2.tabs[index2];
          return currentTabIndex.value === index2 ? item.activeIcon || item.icon : item.icon;
        };
      });
      const tabIconUnicode = vue.computed(() => {
        return (index2) => {
          const item = props2.tabs[index2];
          return currentTabIndex.value === index2 && item.activeIcon ? item.activeIcon.charAt(1) == "" ? item.activeIcon : "" : item.icon.charAt(1) == "" ? item.icon : "";
        };
      });
      const tabColor = vue.computed(() => {
        return (index2) => {
          const item = props2.tabs[index2];
          return currentTabIndex.value === index2 ? item.activeColor || props2.activeColor : item.color || props2.color;
        };
      });
      const route2 = vue.computed(() => {
        let pages2 = getCurrentPages();
        return pages2[pages2.length - 1].route;
      });
      vue.onMounted(() => {
        selectRoute(route2.value);
      });
      vue.onUnmounted(() => {
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
      const __returned__ = { props: props2, emit, currentTabIndex, isImg, tabIcon, tabIconUnicode, tabColor, route: route2, selectRoute, switchTabs, onMounted: vue.onMounted, onUnmounted: vue.onUnmounted, ref: vue.ref, computed: vue.computed, watch: vue.watch, nextTick: vue.nextTick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["ua__tabbar", { "fixed": $props.fixed || $props.transparent, "transparent": $props.transparent }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["ua__tabbar-wrap flexbox flex-alignc", { "is-border": $props.border }]),
            style: vue.normalizeStyle({ "background": $props.bgcolor, "z-index": $props.zIndex })
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.tabs, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  class: vue.normalizeClass(["ua__tabbar-item flexbox flex-col", $setup.currentTabIndex == index2 ? "on" : ""]),
                  onClick: ($event) => $setup.switchTabs(index2, item)
                }, [
                  item.icon ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: vue.normalizeClass(["ua__tabbar-icon", { "dock": item.dock }])
                    },
                    [
                      $props.dock && item.dock ? (vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        { key: 0 },
                        [
                          vue.createElementVNode(
                            "view",
                            {
                              class: "dock-bg flexbox",
                              style: vue.normalizeStyle({ "z-index": item.zIndex + 1 })
                            },
                            [
                              $setup.isImg(item.icon) ? (vue.openBlock(), vue.createElementBlock("image", {
                                key: 0,
                                class: "iconimg",
                                src: $setup.tabIcon(index2),
                                style: vue.normalizeStyle({ "font-size": item.iconSize })
                              }, null, 12, ["src"])) : (vue.openBlock(), vue.createElementBlock(
                                "text",
                                {
                                  key: 1,
                                  class: vue.normalizeClass(["nvueicon iconfont", [$props.customPrefix, $setup.tabIcon(index2)]]),
                                  style: vue.normalizeStyle({ "color": $setup.tabColor(index2), "font-size": item.iconSize })
                                },
                                vue.toDisplayString($setup.tabIconUnicode(index2)),
                                7
                                /* TEXT, CLASS, STYLE */
                              ))
                            ],
                            4
                            /* STYLE */
                          ),
                          vue.createElementVNode(
                            "view",
                            {
                              class: vue.normalizeClass(["dock-cover flexbox", { "is-border": $props.border }]),
                              style: vue.normalizeStyle({ "background": item.bgcolor || $props.bgcolor, "z-index": item.zIndex })
                            },
                            null,
                            6
                            /* CLASS, STYLE */
                          )
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      )) : (vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        { key: 1 },
                        [
                          $setup.isImg(item.icon) ? (vue.openBlock(), vue.createElementBlock("image", {
                            key: 0,
                            class: "iconimg",
                            src: $setup.tabIcon(index2),
                            style: vue.normalizeStyle({ "font-size": item.iconSize })
                          }, null, 12, ["src"])) : (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 1,
                              class: vue.normalizeClass(["nvueicon iconfont", [$props.customPrefix, $setup.tabIcon(index2)]]),
                              style: vue.normalizeStyle({ "color": $setup.tabColor(index2), "font-size": item.iconSize })
                            },
                            vue.toDisplayString($setup.tabIconUnicode(index2)),
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
                  )) : vue.createCommentVNode("v-if", true),
                  item.title ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "ua__tabbar-title"
                  }, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: "ua__tabbar-title__text",
                        style: vue.normalizeStyle({ "color": $setup.tabColor(index2) })
                      },
                      vue.toDisplayString(item.title),
                      5
                      /* TEXT, STYLE */
                    )
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode(" 圆点 "),
                  item.icon && item.title ? (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 2 },
                    [
                      item.badge ? (vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          key: 0,
                          class: "ua__badge ua__tabbar-badge"
                        },
                        vue.toDisplayString(item.badge),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      item.dot ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 1,
                        class: "ua__badge-dot ua__tabbar-badgeDot"
                      })) : vue.createCommentVNode("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 3 },
                    [
                      item.badge ? (vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          key: 0,
                          class: "ua__badge ua__tabbar-only__badge"
                        },
                        vue.toDisplayString(item.badge),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      item.dot ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 1,
                        class: "ua__badge-dot ua__tabbar-only__badgeDot"
                      })) : vue.createCommentVNode("v-if", true)
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
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-23f5da10"], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-tabbar/ua-tabbar.vue"]]);
  const _sfc_main$x = {
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
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_tabbar = resolveEasycom(vue.resolveDynamicComponent("ua-tabbar"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "ulive__container flexbox flex-col flex1" }, [
      vue.renderSlot(_ctx.$slots, "header"),
      vue.createCommentVNode(" 内容区 "),
      vue.createElementVNode("view", { class: "ulive__scrollview flex1" }, [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      vue.renderSlot(_ctx.$slots, "footer"),
      vue.createCommentVNode(" tabbar栏 "),
      $props.tabbar ? (vue.openBlock(), vue.createBlock(_component_ua_tabbar, {
        key: 0,
        fixed: "",
        "z-index": "1000"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-layout/ua-layout.vue"]]);
  const _sfc_main$w = {
    name: "u-lazy-load",
    emits: ["click", "load", "error"],
    props: {
      index: {
        type: [Number, String]
      },
      // 要显示的图片
      image: {
        type: String,
        default: ""
      },
      // 图片裁剪模式
      imgMode: {
        type: String,
        default: "widthFix"
      },
      // 占位图片路径
      loadingImg: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM0QjNBQjkyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM0QjNBQkEyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzRCM0FCNzJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzRCM0FCODJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtRHfPcAAAAzUExURZWVldfX18PDw62trZubm9zc3Li4uKGhoebm5tLS0uHh4c3Nzaenp729vcjIyLKysuvr6141L40AAAcXSURBVHja7NzZlqpGAEBR5lG0//9rIw7IJKJi4or7PGTdtN10wr5SVAEGf/qqArsAiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAg+nmQFMi5Jis+sIniED23jSzIgLTtg2D//iYme/8QBM/9lQ+CAEhbNLM3N9hEHAThX7GPCiBfAxK1b51kD+R7QMLjXg7iCsgWIPUh7pfVozG791oeBPngm48G583uW5GkBvI+SBaM2xXDn1oqum423bX/mgF5FySc2cv93Voug9TdZotsggnkBZB2NzbhrSY5HnoG07jei8dvzsJB/c3W60SALILE46+WCztsbhPR7R2VJq0ukEcT49nyy8QhaKcRa3fYHZD4+ufqOJAcgDz8/59vtw1I3QP5K6JsOG0vm3hce4I8LQp/BaRZGJC3AAn7IKOKXbC+7EdA5vdmmVwOLksgRThqOqiH4XEGsht+peoPUE8U/jJIO5OLH4GEwUslV5G0PTBG5Uiw/Y2jyigO3l9HAHKv9PYb82LloH74dZBoBUgar+l48NsNvtD0fkez9iwrAvIYZDRCl+Xs149Hm/KZmQ+QjUCiO1ei4ru7EsgnQYrkznlQb7thCuRfAzlOAPN72427P4VA/i2Q/DKT/Ls/VR8fvIBsDZIuz7TPF6TCbnk4GJkB2RokejTjuE7/unlgCuSTIO0Cy+Plp6vDfnQlBchy8QtjSHVd3EgmK1bHLm+H6+nXYbz2DuQRSPnqoL7vvq0u70on4zvxgCyWD3b9UyDVdW24PaWaiGTnFZJwPIQAebDpIKheBIm7n124ZthMJipAlkqHO+IZkP1tbfzOJark/A7MgKyvvl60fRqkvXfhuow+t9+q00+0/yyBrK8ZngOtBzldhw2X9tvpNGty0gvkmbPeJ0Cy/r09s/stbmfo0yMWkEdjevgKyOn2t2pxv7UXoibTdCDLje9/Ww1ymqzn87dbp92242ZmMRjI8hASvwKSLq4udqN6ksw8nxXN3tszD9L8Gkg+2mFrQYql5az4tvFj5xOx4VwnSdeBtGdyPwUytxK77pBVlNHdO7OK3rh/eTPUvdutT3fO52tuHMqD4N7llv8pyOQQ//w19YVDfX27+Sfuby9/6nau4pdA8vEdOZuChEH/quHt0Jg+IRJ/5+PrHwKZXfjbDiS73Zo7mu5UkzX7uTsXe0e/7nC3ePf1O69+BUg2XDfZCqSqOu7rGVf8cHBe8zhC2b61dtUHXv0OkGo6ZL4JkpbRYXdUaFevivx2M/1GIOctNh949TtAoumQ+TpIHMX54CJu+8BDd8FkE5BqcZh/59XvAClmTvKfB0nDqIlHo3T70SftyW1eX9dXtgQJqs1f/Q6QaOa/7wmQKtxH8eiGoCRuovODIO3VxOMmruZbHrLyD7z6DSDtGyT7ew1kf9hNn07c986JTovzzem0Id9wUG+Vk/IDr34DSNR7huZJkMFT6vEhqrPx/j5cnlZML8N6/PAzh9Y99Flm5Yde/c9BquDOkvkKkMP58dA4qi9vivE8JOvGz/j8FokfPpr288+pH2ZPOZrLmeGD+7KOh6dqYWJ48ki7yUg0tz0go/fv/LLddfV3sgOLJyaGPY/zrSlh1a36Arkzoue9CyG35ze6E6/dzO2Ga0EGHqdRJIkfn9/8OEjTW8Vq91ZWh39FeehWA7Nu9ft8CpUEk1WWOyDF0OPyEU2Pnzf/bZC0P6IPzmAvu7KauQBVrgKpJ0tG2arHzX8e5Pb3PezNs/PrX+3JMyCLn9XXf37tPFHvt09WfCDDjx+yyn1/p1V11j7GnB/q3leLuVva79S/tzed+db08YpF4uOZtmz/9oXWMq6BCAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiAALELvqt/BBgACqVeUBXxcCkAAAAASUVORK5CYII="
      },
      // 加载失败的错误占位图
      errorImg: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdDMjhENDYyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDMjhENDcyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0MyOEQ0NDJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0MyOEQ0NTJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhLwhikAAAAzUExURZWVldfX162trcPDw5ubm7i4uNzc3Obm5s3NzaGhoeHh4cjIyKenp9LS0r29vbKysuvr67sDMEkAAAlpSURBVHja7NzpYqMgAIVRUVHc8/5PO66R1WAbOzX97q+ZtDEpR0AWTR7kVyWhCAAhgABCAAGEAAIIAQQQAggBBBACCCAEEEAIIIAQQAgggBBAACGAAEIAAYQAQgABhAACCAEEEAIIIAQQAgggBBBACCCAEEAAIYAQQAAhgABCAAGEAAIIAYQAAggBBBACCCAEEEAIIAQQQAgggBBAACGAAEIAIYAAQgABhAACCAEEEAIIAQQQAgggBBBACCCAEEAAIYAQQAAhgABCAAGEAAIIAYQAAggBBBACCCAEEEAIIAQQQAgggBBAACGAAEIAIYAAQgABhAACCAEEEAIIAQQQAgggBBBACCCAEEAIIIAQQAAhgABCAAGEAEIAAYQAAggBBBACCCAEEAIIIAQQQAgggBBAACGAEEAAIYAAsqeX5QWHKIcs/Ptl03lfL4zDFPWfBGmSpPn+IZzSH5KkCL5B+n+oklwz6Iz//R2QzFOabzhEmiRirAmZt/bl0w/dpMbLqeeo4wEdpC7zR5WAPKziHKtO7ql+ReKvIa9BxgNaL5ZtEkpeAGIVp5jKJa09xVo9vgSSzQcszdYvmOqjQNSQ6pHK6rO1n1Xj32788miwHLaZz1Tl9i/yayDlYJ/60/+lp8GSY7OY1B8E4p55bWmfquFk22GLuUUxi78cX+m+BjL2GLkhMrV+/muS6Sfic0CEp5T1Yu2OQdTzsKV0MJV73KVjroyTffxfuv5Tf3fd6iLT9wz8YdVHgUzF2Is9/Xhi5sYJqP1w/GUpjOiHVbaI0w2L+pg3GZzvtokcgHxWDXHaiy78l3sPke01qphamT5c+dqyeAGSumdL/mkggauTam0e3L/mPEiqtzKDbl0Z1Wn8xOa4ySo8X/7TQIJnY/seEKWf12UmC72CKP9xYjr19RPT7NNA+oMO+R0gwmlotAry+C6I0f59ch8yXVQOr0BKYcXt1IUYRyCt+Ur9HGsrQKI79WY9sY9ARPKlzFOFdb41ioD8b5Bp+mqeeRKAxINkESBFGpOpKhgv9OuYpH8A8l4Qa3qp60Kl2/k+rG2sWafuuyCBafb2j4JkgZUob3nWcmicpkxEgmTLLGejTxnWSWCi8lPmsk6DlIHFJv24ojiYyYoGacwL8zXTLEAVaDI/Ybb3NIgKDSv2oXpmHkvNs+PTpMASEdlk7fOZeRk37fwJ6yGnQarQsGIfqqcvx43rTOXY6jf7uKXdRzdLDRPbjIrx1cIj3Kr4KyBFezzgUGuR5893qkOQ19fR2uVBaU+r16LphJNOiatK7PeBZK/Kb+tUn71rcQjSvARpghfH/yG/D2RetTuI3N5QrMWdP46brP7FmKZ//CGQ9At9SL01DLkzY/Vs8Z97fQZ7gelw7jHqCz+/Wile5J4g3Vc79eb5a6oLSue+Ve83gaSv2jp5PxCzjzwFUm9zw9MllSMil1kS4d2E9SaQ1xNo9wMxx0+nQNLnew/WDHvveMAHYm08mofl3TFI/8pD3Q6kMAv6DIi2jTCwRJUvNdDYrrJum9oHhusCbWALonwxBRk1vXMnEGWuT5wAmfYuVGUYpJ7fUZujCN92hvzwWlrFgxSfANKb10DxIMbShnfrynyZZV30imA7P43ArXXHbvBVkTCIuGy25AdBrHmNeBCpL214QdLp9LZarG3IMWrmW0ehtuO7F2PS09UcgqS3B7FKPhpknrStD0HGF/vQRne37LwLG8EbHT4WxN7/Fg0yD9Yr/3br4nnstA+0Il6QxzdBmg8A6a2/IRbkcK9h/uzV8zywF/oSkOyageCPglRWgcWClHnEzs9q/t/SENVXgFijlsq3VtXdCsRp4qObrLLLgjuzSq3fX89ZZW6AfxNIzF6X9FYgThN/fk093KkvHX/hbWd+DqS/FUhlf+G3gohEXzVs3g9iDluWoaW8fL73QhB34u+tIHIf19nLuF4Q98a09Eynnl56q+ePgEhnX+dbQOp6H5XnJ0ACd8dFgkwf12nTOTcEqd2pom+CFF02TIPw6dKmrLS5qOtBpo8b5quUtrwrSGbuqPkeSJqllTFHO02NPxdMrm+y5LKdWyWXjw4vA5nGEtnjuyCFyHqNYvEolzmASm3zK1Eg5zr13lhqV1tlksnVw8Pkwgri7O07AVKLJkutRYw87bPlRpBpNXE8xGb+fhBlvEGrGPLqViu5sILIx9dAmqF1705sxF4M8+R8P5dOdQwi12fMnATpjJ2JSt/POIvU9wPJEs/jduJAjLvU0yFT0i64Yb1bsVi79dA4pEy3TzoHMq2O7Re4vXm5O9+l290NpE4CU+YRIMNye2iaqbVS2AUnn2fsekthYKReVNutVedA5juttyIXrT38mOds+ps9DWhwL7GWc61/DVKPzVN9UHDarf1icU98IOU8tm6L031Iq63t1tKzj3fe/FCpO4F0/i0Z2+yvA1KeGBjqj1qYx8/zoxpKZ1Yl367I1k+sfcft/QPy9csXy/32qX1qLZsrryG5BGQaRj0vc/b7N54XXq293TCLB5HO42Fy517obW19b+qjl3CHp0fdLJcWvmdy1etESi/uAdJrs1hTaUklHuW8qSDdC3UfXVR5cnD3rAFSSqtFb7z7eapErx7rC739jCXfbK3aWiipjXo8UbmxXPa7QQq9R289j2Gr88N7Ag5AlHPRKc37pNZv0CZtX1tVMG6rm8qW1/KlCgQvcMss933ybwXZz3dReW5yce4ByZtHFIhwT9kmjxg8BzbKDUe1PB9edBJqSN7/KM1LmqyuMZ5BpeTUw1aD/uDI0relPfSHa/Wn8Pxq1BNfxy/h3IdwOJqIKumb9CHvTqMefyY82RoQAgggBBBACCCAEEAAIYAQQAAhgABCAAGEAAIIAYQAAggBBBACCCAEEEAIIAQQQAgggBBAACGAAEIAIYAAQgABhAACCAEEEAIIAQQQAgggBBBACCCAEEAIIIAQQAAhgABCAAGEAEIAAYQAAggBBBACCCAEEAIIIAQQQAgggBBAACGAEEAAIYAAQgABhAACCAEEEAIIAQQQAgggBBBACCCAEEAIIIAQQAAhgABCAAGEAEIAAYQAAggBBBACCCAEEAIIIAQQQAgggBBAACGAEEAAIYAAQgABhAACCAGEAAIIAQQQAgggBBBACCAEEEAIIIAQQAAhgABCACGAAEIAAYQAAggBBBACCAEEEAIIIAQQQAggfyL/BBgA8PgLdH0TBtkAAAAASUVORK5CYII="
      },
      // 图片进入可见区域前多少像素时，单位rpx，开始加载图片
      // 负数为图片超出屏幕底部多少距离后触发懒加载，正数为图片顶部距离屏幕底部多少距离时触发(图片还没出现在屏幕上)
      threshold: {
        type: [Number, String],
        default: 100
      },
      // 淡入淡出动画的过渡时间
      duration: {
        type: [Number, String],
        default: 500
      },
      // 渡效果的速度曲线，各个之间差别不大，因为这是淡入淡出，且时间很短，不是那些变形或者移动的情况，会明显
      // linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
      effect: {
        type: String,
        default: "ease-in-out"
      },
      // 是否使用过渡效果
      isEffect: {
        type: Boolean,
        default: true
      },
      // 圆角值
      borderRadius: {
        type: [Number, String],
        default: 0
      },
      // 图片高度，单位rpx
      height: {
        type: [Number, String],
        default: "450"
      }
    },
    data() {
      return {
        isShow: false,
        opacity: 1,
        time: this.duration,
        loadStatus: "",
        // 默认是懒加载中的状态
        isError: false,
        // 图片加载失败
        elIndex: this.$u.guid()
      };
    },
    computed: {
      // 将threshold从rpx转为px
      getThreshold() {
        let thresholdPx = uni.upx2px(Math.abs(this.threshold));
        return this.threshold < 0 ? -thresholdPx : thresholdPx;
      },
      // 计算图片的高度，可能为auto，带%，或者直接数值
      imgHeight() {
        return this.$u.addUnit(this.height);
      }
    },
    created() {
      this.observer = {};
    },
    watch: {
      isShow(nVal) {
        if (!this.isEffect)
          return;
        this.time = 0;
        this.opacity = 0;
        setTimeout(() => {
          this.time = this.duration;
          this.opacity = 1;
        }, 30);
      },
      // 图片路径发生变化时，需要重新标记一些变量，否则会一直卡在某一个状态，比如isError
      image(n) {
        if (!n) {
          this.isError = true;
        } else {
          this.init();
          this.isError = false;
        }
      }
    },
    methods: {
      // 用于重新初始化
      init() {
        this.isError = false;
        this.loadStatus = "";
      },
      // 点击图片触发的事件,loadlazy-还是懒加载中状态，loading-图片正在加载，loaded-图片加加载完成
      clickImg() {
        if (this.isShow == false)
          ;
        else if (this.isError == true)
          ;
        else
          ;
        this.$emit("click", this.index);
      },
      // 图片加载完成事件，可能是加载占位图时触发，也可能是加载真正的图片完成时触发，通过isShow区分
      imgLoaded() {
        if (this.loadStatus == "") {
          this.loadStatus = "lazyed";
        } else if (this.loadStatus == "lazyed") {
          this.loadStatus = "loaded";
          this.$emit("load", this.index);
        }
      },
      // 错误的图片加载完成
      errorImgLoaded() {
        this.$emit("error", this.index);
      },
      // 图片加载失败
      loadError() {
        this.isError = true;
      },
      disconnectObserver(observerName) {
        const observer = this[observerName];
        observer && observer.disconnect();
      }
    },
    beforeUnmount() {
    },
    mounted() {
      this.$nextTick(() => {
        uni.$once("uOnReachBottom", () => {
          if (!this.isShow)
            this.isShow = true;
        });
      });
      setTimeout(() => {
        this.disconnectObserver("contentObserver");
        const contentObserver = uni.createIntersectionObserver(this);
        contentObserver.relativeToViewport({
          bottom: this.getThreshold
        }).observe(".u-lazy-item-" + this.elIndex, (res) => {
          if (res.intersectionRatio > 0) {
            this.isShow = true;
            this.disconnectObserver("contentObserver");
          }
        });
        this.contentObserver = contentObserver;
      }, 30);
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-wrap", "u-lazy-item-" + $data.elIndex]),
        style: vue.normalizeStyle({
          opacity: Number($data.opacity),
          borderRadius: $props.borderRadius + "rpx",
          // 因为time值需要改变,所以不直接用duration值(不能改变父组件prop传过来的值)
          transition: `opacity ${$data.time / 1e3}s ease-in-out`
        })
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass("u-lazy-item-" + $data.elIndex)
          },
          [
            !$data.isError ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              style: vue.normalizeStyle({ borderRadius: $props.borderRadius + "rpx", height: $options.imgHeight }),
              class: "u-lazy-item",
              src: $data.isShow ? $props.image : $props.loadingImg,
              mode: $props.imgMode,
              onLoad: _cache[0] || (_cache[0] = (...args) => $options.imgLoaded && $options.imgLoaded(...args)),
              onError: _cache[1] || (_cache[1] = (...args) => $options.loadError && $options.loadError(...args)),
              onClick: _cache[2] || (_cache[2] = (...args) => $options.clickImg && $options.clickImg(...args))
            }, null, 44, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              style: vue.normalizeStyle({ borderRadius: $props.borderRadius + "rpx", height: $options.imgHeight }),
              class: "u-lazy-item error",
              src: $props.errorImg,
              mode: $props.imgMode,
              onLoad: _cache[3] || (_cache[3] = (...args) => $options.errorImgLoaded && $options.errorImgLoaded(...args)),
              onClick: _cache[4] || (_cache[4] = (...args) => $options.clickImg && $options.clickImg(...args))
            }, null, 44, ["src", "mode"]))
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-974af813"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-lazy-load/u-lazy-load.vue"]]);
  const _sfc_main$v = {
    name: "u-waterfall",
    emits: ["update:modelValue", "input"],
    props: {
      value: {
        // 瀑布流数据
        type: Array,
        default: function() {
          return [];
        }
      },
      modelValue: {
        // 瀑布流数据
        type: Array,
        default: function() {
          return [];
        }
      },
      // 每次向结构插入数据的时间间隔，间隔越长，越能保证两列高度相近，但是对用户体验越不好
      // 单位ms
      addTime: {
        type: [Number, String],
        default: 200
      },
      // id值，用于清除某一条数据时，根据此idKey名称找到并移除，如数据为{idx: 22, name: 'lisa'}
      // 那么该把idKey设置为idx
      idKey: {
        type: String,
        default: "id"
      }
    },
    data() {
      return {
        leftList: [],
        rightList: [],
        tempList: [],
        children: []
      };
    },
    watch: {
      copyFlowList(nVal, oVal) {
        let startIndex = Array.isArray(oVal) && oVal.length > 0 ? oVal.length : 0;
        this.tempList = this.tempList.concat(this.cloneData(nVal.slice(startIndex)));
        this.splitData();
      }
    },
    mounted() {
      this.tempList = this.cloneData(this.copyFlowList);
      this.splitData();
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      // 破坏flowList变量的引用，否则watch的结果新旧值是一样的
      copyFlowList() {
        return this.cloneData(this.valueCom);
      }
    },
    methods: {
      async splitData() {
        if (!this.tempList.length)
          return;
        let leftRect = await this.$uGetRect("#u-left-column");
        let rightRect = await this.$uGetRect("#u-right-column");
        let item = this.tempList[0];
        if (!item)
          return;
        if (leftRect.height < rightRect.height) {
          this.leftList.push(item);
        } else if (leftRect.height > rightRect.height) {
          this.rightList.push(item);
        } else {
          if (this.leftList.length <= this.rightList.length) {
            this.leftList.push(item);
          } else {
            this.rightList.push(item);
          }
        }
        this.tempList.splice(0, 1);
        if (this.tempList.length) {
          setTimeout(() => {
            this.splitData();
          }, this.addTime);
        }
      },
      // 复制而不是引用对象和数组
      cloneData(data) {
        return JSON.parse(JSON.stringify(data));
      },
      // 清空数据列表
      clear() {
        this.leftList = [];
        this.rightList = [];
        this.$emit("input", []);
        this.$emit("update:modelValue", []);
        this.tempList = [];
      },
      // 清除某一条指定的数据，根据id实现
      remove(id) {
        let index2 = -1;
        index2 = this.leftList.findIndex((val) => val[this.idKey] == id);
        if (index2 != -1) {
          this.leftList.splice(index2, 1);
        } else {
          index2 = this.rightList.findIndex((val) => val[this.idKey] == id);
          if (index2 != -1)
            this.rightList.splice(index2, 1);
        }
        index2 = this.value.findIndex((val) => val[this.idKey] == id);
        if (index2 != -1) {
          this.$emit("input", this.valueCom.splice(index2, 1));
          this.$emit("update:modelValue", this.valueCom.splice(index2, 1));
        }
      },
      // 修改某条数据的某个属性
      modify(id, key, value) {
        let index2 = -1;
        index2 = this.leftList.findIndex((val) => val[this.idKey] == id);
        if (index2 != -1) {
          this.leftList[index2][key] = value;
        } else {
          index2 = this.rightList.findIndex((val) => val[this.idKey] == id);
          if (index2 != -1)
            this.rightList[index2][key] = value;
        }
        index2 = this.valueCom.findIndex((val) => val[this.idKey] == id);
        if (index2 != -1) {
          let data = this.cloneData(this.valueCom);
          data[index2][key] = value;
          this.$emit("input", data);
          this.$emit("update:modelValue", data);
        }
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-waterfall" }, [
      vue.createElementVNode("view", {
        id: "u-left-column",
        class: "u-column"
      }, [
        vue.renderSlot(_ctx.$slots, "left", { leftList: $data.leftList }, void 0, true)
      ]),
      vue.createElementVNode("view", {
        id: "u-right-column",
        class: "u-column"
      }, [
        vue.renderSlot(_ctx.$slots, "right", { rightList: $data.rightList }, void 0, true)
      ])
    ]);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-059d5f61"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-waterfall/u-waterfall.vue"]]);
  const _sfc_main$u = {
    name: "u-line",
    props: {
      color: {
        type: String,
        default: "#e4e7ed"
      },
      // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等
      length: {
        type: String,
        default: "100%"
      },
      // 线条方向，col-竖向，row-横向
      direction: {
        type: String,
        default: "row"
      },
      // 是否显示细边框
      hairLine: {
        type: Boolean,
        default: true
      },
      // 线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx 30rpx"
      margin: {
        type: String,
        default: "0"
      },
      // 线条的类型，solid-实线，dashed-方形虚线，dotted-圆点虚线
      borderStyle: {
        type: String,
        default: "solid"
      }
    },
    computed: {
      lineStyle() {
        let style = {};
        style.margin = this.margin;
        if (this.direction == "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.borderStyle;
          style.width = this.$u.addUnit(this.length);
          if (this.hairLine)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.borderStyle;
          style.height = this.$u.addUnit(this.length);
          if (this.hairLine)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return style;
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-line",
        style: vue.normalizeStyle([$options.lineStyle])
      },
      null,
      4
      /* STYLE */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-3e1cc47b"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-line/u-line.vue"]]);
  const _sfc_main$t = {
    name: "u-loading",
    props: {
      // 动画的类型
      mode: {
        type: String,
        default: "circle"
      },
      // 动画的颜色
      color: {
        type: String,
        default: "#c7c7c7"
      },
      // 加载图标的大小，单位rpx
      size: {
        type: [String, Number],
        default: "34"
      },
      // 是否显示动画
      show: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      // 加载中圆圈动画的样式
      cricleStyle() {
        let style = {};
        style.width = this.size + "rpx";
        style.height = this.size + "rpx";
        if (this.mode == "circle")
          style.borderColor = `#e4e4e4 #e4e4e4 #e4e4e4 ${this.color ? this.color : "#c7c7c7"}`;
        return style;
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-loading", $props.mode == "circle" ? "u-loading-circle" : "u-loading-flower"]),
        style: vue.normalizeStyle([$options.cricleStyle])
      },
      null,
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-32db0ed8"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-loading/u-loading.vue"]]);
  const _sfc_main$s = {
    name: "u-loadmore",
    emits: ["loadmore"],
    props: {
      // 组件背景色
      bgColor: {
        type: String,
        default: "transparent"
      },
      // 是否显示加载中的图标
      icon: {
        type: Boolean,
        default: true
      },
      // 字体大小
      fontSize: {
        type: String,
        default: "28"
      },
      // 字体颜色
      color: {
        type: String,
        default: "#606266"
      },
      // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
      status: {
        type: String,
        default: "loadmore"
      },
      // 加载中状态的图标，flower-花朵状图标，circle-圆圈状图标
      iconType: {
        type: String,
        default: "circle"
      },
      // 显示的文字
      loadText: {
        type: Object,
        default() {
          return {
            loadmore: "加载更多",
            loading: "正在加载...",
            nomore: "没有更多了"
          };
        }
      },
      // 在“没有更多”状态下，是否显示粗点
      isDot: {
        type: Boolean,
        default: false
      },
      // 加载中显示圆圈动画时，动画的颜色
      iconColor: {
        type: String,
        default: "#b7b7b7"
      },
      // 上边距
      marginTop: {
        type: [String, Number],
        default: 0
      },
      // 下边距
      marginBottom: {
        type: [String, Number],
        default: 0
      },
      // 高度，单位rpx
      height: {
        type: [String, Number],
        default: "auto"
      }
    },
    data() {
      return {
        // 粗点
        dotText: "●"
      };
    },
    computed: {
      // 加载的文字显示的样式
      loadTextStyle() {
        return {
          color: this.color,
          fontSize: this.fontSize + "rpx",
          position: "relative",
          zIndex: 1,
          backgroundColor: this.bgColor
          // 如果是加载中状态，动画和文字需要距离近一点
        };
      },
      // 加载中圆圈动画的样式
      cricleStyle() {
        return {
          borderColor: `#e5e5e5 #e5e5e5 #e5e5e5 ${this.circleColor}`
        };
      },
      // 加载中花朵动画形式
      // 动画由base64图片生成，暂不支持修改
      flowerStyle() {
        return {};
      },
      // 显示的提示文字
      showText() {
        let text = "";
        if (this.status == "loadmore")
          text = this.loadText.loadmore;
        else if (this.status == "loading")
          text = this.loadText.loading;
        else if (this.status == "nomore" && this.isDot)
          text = this.dotText;
        else
          text = this.loadText.nomore;
        return text;
      }
    },
    methods: {
      loadMore() {
        if (this.status == "loadmore")
          this.$emit("loadmore");
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_0$4);
    const _component_u_loading = resolveEasycom(vue.resolveDynamicComponent("u-loading"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-load-more-wrap",
        style: vue.normalizeStyle({
          backgroundColor: $props.bgColor,
          marginBottom: $props.marginBottom + "rpx",
          marginTop: $props.marginTop + "rpx",
          height: _ctx.$u.addUnit($props.height)
        })
      },
      [
        vue.createVNode(_component_u_line, {
          color: "#d4d4d4",
          length: "50"
        }),
        vue.createCommentVNode(" 加载中和没有更多的状态才显示两边的横线 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([$props.status == "loadmore" || $props.status == "nomore" ? "u-more" : "", "u-load-more-inner"])
          },
          [
            vue.createElementVNode("view", { class: "u-loadmore-icon-wrap" }, [
              vue.createVNode(_component_u_loading, {
                class: "u-loadmore-icon",
                color: $props.iconColor,
                mode: $props.iconType == "circle" ? "circle" : "flower",
                show: $props.status == "loading" && $props.icon
              }, null, 8, ["color", "mode", "show"])
            ]),
            vue.createCommentVNode(" 如果没有更多的状态下，显示内容为dot（粗点），加载特定样式 "),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["u-line-1", [$props.status == "nomore" && $props.isDot == true ? "u-dot-text" : "u-more-text"]]),
                style: vue.normalizeStyle([$options.loadTextStyle]),
                onClick: _cache[0] || (_cache[0] = (...args) => $options.loadMore && $options.loadMore(...args))
              },
              vue.toDisplayString($options.showText),
              7
              /* TEXT, CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        ),
        vue.createVNode(_component_u_line, {
          color: "#d4d4d4",
          length: "50"
        })
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-e9906cfb"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.vue"]]);
  const _sfc_main$r = {
    __name: "waterfall-goods",
    setup(__props, { expose: __expose }) {
      __expose();
      const loadStatus = vue.ref("loadmore");
      const flowList = vue.ref([]);
      const originList = vue.ref([
        {
          price: 488,
          title: "皮尔卡丹男装羽绒服男女同款冬季新款长款过膝加长加厚情侣款外套 黑色（可拆卸帽） 2XL",
          shop: "皮尔卡丹专卖店",
          image: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/39114/14/20805/86340/638b4940E942d72fb/348e214e2d5c22f1.jpg"
        },
        {
          price: 388,
          title: "罗蒙（ROMON）羽绒服男外套爸爸装长款工作服装过膝加 厚中老年户 绿咖 M",
          shop: "罗蒙（ROMON）",
          image: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/172036/27/38888/54333/64ddd0f3Fa45b1afd/16bab41480f69947.jpg"
        },
        {
          price: 42,
          title: "美的（Midea）LED便携充电小台灯书桌学习阅读灯学生宿舍卧室床头灯学习台灯",
          shop: "美的（Midea）旗舰店",
          image: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/226233/4/10194/156936/658e8f88Fcfc9cb40/cea4a48783f11a7a.jpg"
        },
        {
          price: 1199,
          title: "Redmi Note11T Pro 5G 天玑8100 144HzLCD旗舰直屏 67W快充",
          shop: "小米京东自营旗舰店",
          image: "https://img12.360buyimg.com/n7/jfs/t1/192495/8/41694/55778/654ded4eF138ec2ac/953fc6e1f5b3531d.jpg"
        },
        {
          price: 4599,
          title: "小米14 徕卡光学镜头 光影猎人900 徕卡75mm浮动长焦 骁龙8Gen3 16+512 黑色",
          shop: "小米京东自营旗舰店",
          image: "https://img14.360buyimg.com/n7/jfs/t1/227814/23/5514/38906/65682d3fF0f273d30/02864fac06c402dc.jpg"
        },
        {
          price: 159,
          title: "百草味全肉大礼包超3斤鸭脖牛肉肉干肉脯卤味肉类休闲零食礼盒中秋送",
          shop: "百草味京东自营旗舰店",
          image: "https://img12.360buyimg.com/n7/jfs/t1/235711/30/5438/256809/65695004F5e7b7158/c9abb3266adcce23.jpg"
        },
        {
          price: 22.9,
          title: "蒙都 羊杂500g 加热即食 京东超市肉干肉脯及礼包11.11真便宜",
          shop: "蒙都旗舰店",
          image: "https://img10.360buyimg.com/n7/jfs/t1/155306/32/25324/231912/62d22fb8E4ffab855/c6001ee702fb240a.jpg"
        },
        {
          price: 10.9,
          title: "趣小馋兰州牛肉面非油炸兰州拉面方便速食冲泡面125g*12桶/6桶整箱批发",
          shop: "辰方食品专营店",
          image: "https://img14.360buyimg.com/n7/jfs/t1/161308/15/37369/235862/649e95b2Fc5a04c60/3cf66104aa7b1b0c.jpg"
        },
        {
          price: 89.9,
          title: "康新牧场内蒙酱牛肉150g×5袋即食牛肉健身代餐熟食牛腱子下酒菜",
          shop: "康新牧场京东自营旗舰店",
          image: "https://img13.360buyimg.com/n7/jfs/t1/219054/36/29956/250174/646d73b9F0b077b00/f1cb3349892defb1.jpg"
        },
        {
          price: 1,
          title: "圣菲尔伯爵法国红酒Saintfilcount干红葡萄酒珍藏13.5度单瓶送礼红酒 一元试饮",
          shop: "小森葡萄酒专营店",
          image: "https://img10.360buyimg.com/n7/jfs/t1/226168/23/3411/118733/65537e5fF2db2d109/7d1d11a8013d6e8f.jpg"
        },
        {
          price: 129.9,
          title: "芝洛洛盒子蛋糕甜品零食110g*10罐千层慕斯罐子蛋糕休闲食品",
          shop: "芝洛洛京东自营旗舰店",
          image: "https://img10.360buyimg.com/n7/jfs/t1/232669/13/4985/171607/65669688F10439b91/cdee52c0b6929794.jpg"
        }
      ]);
      const addFlowList = () => {
        for (let i = 0; i < originList.value.length; i++) {
          let item = JSON.parse(JSON.stringify(originList.value[i]));
          flowList.value.push(item);
        }
      };
      onLoad(() => {
        addFlowList();
      });
      onReachBottom(() => {
        loadStatus.value = "loading";
        setTimeout(() => {
          addFlowList();
          loadStatus.value = "loadmore";
        }, 1e3);
      });
      const __returned__ = { loadStatus, flowList, originList, addFlowList, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get onReachBottom() {
        return onReachBottom;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_lazy_load = resolveEasycom(vue.resolveDynamicComponent("u-lazy-load"), __easycom_0$5);
    const _component_u_waterfall = resolveEasycom(vue.resolveDynamicComponent("u-waterfall"), __easycom_1$4);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "ulive__home-waterfall" }, [
      vue.createVNode(_component_u_waterfall, {
        modelValue: $setup.flowList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.flowList = $event)
      }, {
        left: vue.withCtx(({ leftList }) => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(leftList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "ulive__home-waterfall__item",
                key: index2
              }, [
                vue.createVNode(_component_u_lazy_load, {
                  threshold: "100",
                  "border-radius": "10",
                  image: item.image,
                  index: index2
                }, null, 8, ["image", "index"]),
                vue.createElementVNode(
                  "view",
                  { class: "title clamp2" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "price" },
                  "￥" + vue.toDisplayString(item.price.toFixed(2)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "tags" }, [
                  vue.createElementVNode("view", { class: "tag-owner" }, "自营"),
                  vue.createElementVNode("view", { class: "tag-text" }, "放心购")
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "shop" },
                  vue.toDisplayString(item.shop),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        right: vue.withCtx(({ rightList }) => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(rightList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "ulive__home-waterfall__item",
                key: index2
              }, [
                vue.createVNode(_component_u_lazy_load, {
                  threshold: "100",
                  "border-radius": "10",
                  image: item.image,
                  index: index2
                }, null, 8, ["image", "index"]),
                vue.createElementVNode(
                  "view",
                  { class: "title clamp2" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "price" },
                  "￥" + vue.toDisplayString(item.price.toFixed(2)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "tags" }, [
                  vue.createElementVNode("view", { class: "tag-owner" }, "自营"),
                  vue.createElementVNode("view", { class: "tag-text" }, "放心购")
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "shop" },
                  vue.toDisplayString(item.shop),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      vue.createVNode(_component_u_loadmore, {
        class: "loadmore",
        status: $setup.loadStatus,
        "margin-top": "20",
        onLoadmore: $setup.addFlowList
      }, null, 8, ["status"])
    ]);
  }
  const WaterfallGoods = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-ea629531"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/index/components/waterfall-goods.vue"]]);
  const _sfc_main$q = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const searchText = vue.ref("");
      const tabsList = vue.ref([
        { name: "推荐", count: 6 },
        { name: "手机" },
        { name: "酒水饮料" },
        { name: "男装" },
        { name: "女装" },
        { name: "腕表珠宝" },
        { name: "生鲜" },
        { name: "医药健康" },
        { name: "工业品" },
        { name: "图书" }
      ]);
      const tabsCurrent = vue.ref(0);
      const cateList = vue.ref([
        {
          id: 1,
          list: [
            { name: "order", label: "我的订单", count: "待发货3" },
            { name: "red-packet", label: "手机充值", count: "减10元" },
            { name: "integral", label: "品牌会员" },
            { name: "gift", label: "乐购小店" }
          ]
        },
        {
          id: 2,
          list: [
            { name: "coupon", label: "优惠券" },
            { name: "scan", label: "扫码好物" },
            { name: "shopping-cart", label: "购物车" },
            { name: "tags", label: "试用领取" }
          ]
        },
        {
          id: 3,
          list: [
            { name: "star", label: "收藏" },
            { name: "kefu-ermai", label: "客服消息" },
            { name: "map", label: "地址" }
          ]
        }
      ]);
      const cateCurrent = vue.ref(0);
      const scrollTop = vue.ref(0);
      const tabsChange = (index2) => {
        formatAppLog("log", "at pages/index/index.vue:38", index2);
      };
      const cateChange = (e) => {
        cateCurrent.value = e.detail.current;
      };
      onPageScroll((e) => {
        scrollTop.value = e.scrollTop;
      });
      const __returned__ = { searchText, tabsList, tabsCurrent, cateList, cateCurrent, scrollTop, tabsChange, cateChange, ref: vue.ref, get onPageScroll() {
        return onPageScroll;
      }, WaterfallGoods };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_ua_input = resolveEasycom(vue.resolveDynamicComponent("ua-input"), __easycom_0$8);
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$7);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$5);
    const _component_u_grid_item = resolveEasycom(vue.resolveDynamicComponent("u-grid-item"), __easycom_4$2);
    const _component_u_grid = resolveEasycom(vue.resolveDynamicComponent("u-grid"), __easycom_5$1);
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_2$4);
    const _component_u_back_top = resolveEasycom(vue.resolveDynamicComponent("u-back-top"), __easycom_4$1);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_ua_layout, { class: "scrolling" }, {
      header: vue.withCtx(() => [
        vue.createVNode(_component_ua_navbar, {
          back: "false",
          custom: "",
          size: "32rpx",
          fixed: "",
          bgcolor: "#2979ff",
          "z-index": "1000"
        }, {
          left: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "flexbox flex-alignc ml-25" }, [
              vue.createElementVNode("text", { class: "welive-icon welive-icon-livevideo fs-60 mr-20" }),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("view", { class: "fs-32" }, "uni-welive直播商城"),
                vue.createElementVNode("view", { class: "fs-24" }, "直播不停 • 乐购无忧")
              ])
            ])
          ]),
          right: vue.withCtx(() => [
            vue.createElementVNode("text", { class: "welive-icon welive-icon-qiandao fs-36 mr-25" }),
            vue.createElementVNode("text", { class: "welive-icon welive-icon-xiaoxi fs-36" })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createElementVNode("view", { class: "ulive__wrap-header__sear" }, [
          vue.createVNode(_component_ua_input, {
            modelValue: $setup.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchText = $event),
            search: "",
            placeholder: "大家都在搜手机"
          }, {
            prefix: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "welive-icon welive-icon-scancode mr-20" })
            ]),
            suffix: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "welive-icon welive-icon-yinliang fs-36 mr-25" }),
              vue.createElementVNode("text", { class: "welive-icon welive-icon-search fs-36 mr-10" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__home-banner__swiper" }, [
          vue.createElementVNode("swiper", {
            "indicator-dots": true,
            autoplay: true,
            "indicator-color": "rgba(255,255,255,.5)",
            "indicator-active-color": "#fff"
          }, [
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("image", {
                src: "https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/10029424278029/FocusFullshop/CkBqZnMvdDEvMjQ1Nzk4LzQvNTA2LzU2OTc0LzY1ODczMzkwRmZlODYzMTg0L2JjZTBlOGVjNzhkYWUxYmQucG5nEgkzLXR5XzBfNTQwAjjui3pCEwoP5rW35bCU56yU6K6w5pysEAFCDQoJ6LSt6L-H55i-EAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG6LaF5YC8EAdYjfSVwvKjAg/cr/s/q.jpg",
                mode: "widthFix"
              })
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("image", {
                src: "https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/100011534754/FocusFullshop/CkNqZnMvdDEvMjM2ODA4LzIxLzgxMTUvMzY2MTg0LzY1ODA5YTI5Rjc4YzE0MTFjLzQzZDE0ZDk5OGY1ZWE0NmQucG5nEgk1LXR5XzBfNTYwAjjui3pCFgoS5Yac5aSr5bGx5rOJ6aWu5paZEAFCEAoM5aW96LSn5rGH6IGaEAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG5Yqb6I2QEAdYotObyfQC/cr/s/q.jpg",
                mode: "widthFix"
              })
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "ulive__home-cate__swiper" }, [
          vue.createElementVNode("view", { class: "ulive__home-cate__list" }, [
            vue.createElementVNode(
              "swiper",
              { onChange: $setup.cateChange },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.cateList, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", {
                      index: index2,
                      key: index2
                    }, [
                      vue.createVNode(
                        _component_u_grid,
                        {
                          col: 4,
                          border: false
                        },
                        {
                          default: vue.withCtx(() => [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(item.list, (item2, index22) => {
                                return vue.openBlock(), vue.createBlock(_component_u_grid_item, {
                                  index: index22,
                                  key: index22,
                                  "bg-color": "transparent"
                                }, {
                                  default: vue.withCtx(() => [
                                    item2.count ? (vue.openBlock(), vue.createBlock(_component_u_badge, {
                                      key: 0,
                                      count: item2.count,
                                      offset: [20, -10],
                                      size: "mini"
                                    }, null, 8, ["count"])) : vue.createCommentVNode("v-if", true),
                                    vue.createVNode(_component_u_icon, {
                                      name: item2.name,
                                      size: 60
                                    }, null, 8, ["name"]),
                                    vue.createElementVNode(
                                      "text",
                                      { class: "mt-10" },
                                      vue.toDisplayString(item2.label),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["index"]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      )
                    ], 8, ["index"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("view", { class: "ulive__home-cate__indicator-dots" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.cateList, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: index2,
                      class: vue.normalizeClass(["ulive__home-cate__indicator-dots-item", [$setup.cateCurrent == index2 ? "ulive__home-cate__indicator-dots-active" : ""]])
                    },
                    null,
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]),
        vue.createVNode(_component_u_tabs, {
          modelValue: $setup.tabsCurrent,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.tabsCurrent = $event),
          list: $setup.tabsList,
          "is-scroll": true,
          "bg-color": "#fff",
          onChange: $setup.tabsChange
        }, null, 8, ["modelValue", "list"]),
        vue.createVNode($setup["WaterfallGoods"]),
        vue.createVNode(_component_u_back_top, {
          "scroll-top": $setup.scrollTop,
          top: "1000"
        }, null, 8, ["scroll-top"])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/index/index.vue"]]);
  const mpMixin = {};
  function email$1(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile$1(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url$1(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date$1(value) {
    if (!value)
      return false;
    if (number$1(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO$1(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number$1(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string$1(value) {
    return typeof value === "string";
  }
  function digits$1(value) {
    return /^\d+$/.test(value);
  }
  function idCard$1(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo$1(value) {
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
  function amount$1(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese$1(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter$1(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum$1(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains$1(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$2(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength$1(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline$1(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty$1(value) {
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
  function jsonString$1(value) {
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
  function array$1(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object$1(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code$1(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func$1(value) {
    return typeof value === "function";
  }
  function promise$1(value) {
    return object$1(value) && func$1(value.then) && func$1(value.catch);
  }
  function image$1(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video$1(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp$1(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount: amount$1,
    array: array$1,
    carNo: carNo$1,
    chinese: chinese$1,
    code: code$1,
    contains: contains$1,
    date: date$1,
    dateISO: dateISO$1,
    digits: digits$1,
    email: email$1,
    empty: empty$1,
    enOrNum: enOrNum$1,
    func: func$1,
    idCard: idCard$1,
    image: image$1,
    jsonString: jsonString$1,
    landline: landline$1,
    letter: letter$1,
    mobile: mobile$1,
    number: number$1,
    object: object$1,
    promise: promise$1,
    range: range$2,
    rangeLength: rangeLength$1,
    regExp: regExp$1,
    string: string$1,
    url: url$1,
    video: video$1
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
  function range$1(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number$1(value)) {
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
  function os$1() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys$1() {
    return uni.getSystemInfoSync();
  }
  function random$1(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid$2(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid2 = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid2[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid2[8] = uuid2[13] = uuid2[18] = uuid2[23] = "-";
      uuid2[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid2[i]) {
          r = 0 | Math.random() * 16;
          uuid2[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid2.shift();
      return `u${uuid2.join("")}`;
    }
    return uuid2.join("");
  }
  function $parent$1(name = void 0) {
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
  function addStyle$1(customStyle, target = "object") {
    if (empty$1(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim$2(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim$2(item[0])] = trim$2(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim$2(string2);
  }
  function addUnit$1(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number$1(value) ? `${value}${unit}` : value;
  }
  function deepClone$1(obj, cache = /* @__PURE__ */ new WeakMap()) {
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
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone$1(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone$1(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone$1(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone$1(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge$1(target = {}, source = {}) {
    target = deepClone$1(target);
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
        merged[prop] = deepMerge$1(targetValue, sourceValue);
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
  function randomArray$1(array2 = []) {
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
  function timeFormat$1(dateTime = null, formatStr = "yyyy-mm-dd") {
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
  function timeFrom$1(timestamp = null, format = "yyyy-mm-dd") {
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
          tips = timeFormat$1(timestamp, format);
        }
    }
    return tips;
  }
  function trim$2(str, pos = "both") {
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
  function queryParams$1(data = {}, isPrefix = true, arrayFormat = "brackets") {
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
  function toast$1(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon$1(type = "success", fill = false) {
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
    const formItem = $parent$1.call(instance, "uv-form-item");
    const form = $parent$1.call(instance, "uv-form");
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
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$uv;
    uni.$uv.config = deepMerge2(uni.$uv.config, config2);
    uni.$uv.props = deepMerge2(uni.$uv.props, props2);
    uni.$uv.color = deepMerge2(uni.$uv.color, color2);
    uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex2);
  }
  const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent: $parent$1,
    addStyle: addStyle$1,
    addUnit: addUnit$1,
    deepClone: deepClone$1,
    deepMerge: deepMerge$1,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid: guid$2,
    os: os$1,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams: queryParams$1,
    random: random$1,
    randomArray: randomArray$1,
    range: range$1,
    setConfig,
    setProperty,
    sleep,
    sys: sys$1,
    timeFormat: timeFormat$1,
    timeFrom: timeFrom$1,
    toast: toast$1,
    trim: trim$2,
    type2icon: type2icon$1
  }, Symbol.toStringTag, { value: "Module" }));
  let Router$1 = class Router {
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
        query = queryParams$1(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams$1(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = deepMerge$1(this.config, options);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig.url === page())
        return;
      if (params.intercept) {
        mergeConfig.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = deepMerge$1(this.config, mergeConfig);
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
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
        events
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration,
          events
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  };
  const route$1 = new Router$1().route;
  let timeout$1 = null;
  function debounce$1(func2, wait = 500, immediate = false) {
    if (timeout$1 !== null)
      clearTimeout(timeout$1);
    if (immediate) {
      const callNow = !timeout$1;
      timeout$1 = setTimeout(() => {
        timeout$1 = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout$1 = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle$1(func2, wait = 500, immediate = true) {
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
  const mixin$1 = {
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
          ...index$1,
          test: test$1,
          route: route$1,
          debounce: debounce$1,
          throttle: throttle$1,
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
      if (this.parent && array$1(this.parent.children)) {
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
      if (this.parent && array$1(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const props = {
    props: {
      // 指示器的整体宽度
      indicatorWidth: {
        type: [String, Number],
        default: 50
      },
      // 滑块的宽度
      indicatorBarWidth: {
        type: [String, Number],
        default: 20
      },
      // 是否显示面板指示器
      indicator: {
        type: Boolean,
        default: true
      },
      // 指示器非激活颜色
      indicatorColor: {
        type: String,
        default: "#f2f2f2"
      },
      // 指示器的激活颜色
      indicatorActiveColor: {
        type: String,
        default: "#3c9cff"
      },
      // 指示器样式，可通过bottom，left，right进行定位
      indicatorStyle: {
        type: [String, Object],
        default: ""
      },
      ...(_f = (_e = uni.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.scrollList
    }
  };
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxs"] = "1f01b1f2";
  };
  const _sfc_main$p = {
    name: "uv-scroll-list",
    mixins: [mpMixin, mixin$1, props],
    data() {
      return {
        scrollInfo: {
          scrollLeft: 0,
          scrollWidth: 0
        },
        scrollWidth: 0
      };
    },
    computed: {
      // 指示器为线型的样式
      barStyle() {
        const style = {};
        style.width = this.$uv.addUnit(this.indicatorBarWidth);
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      lineStyle() {
        const style = {};
        style.width = this.$uv.addUnit(this.indicatorWidth);
        style.backgroundColor = this.indicatorColor;
        return style;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getComponentWidth();
      },
      scrollEvent(status) {
        this.$emit(status);
      },
      // 获取组件的宽度
      async getComponentWidth() {
        await this.$uv.sleep(30);
        this.$uvGetRect(".uv-scroll-list").then((size) => {
          this.scrollWidth = size.width;
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uv-scroll-list",
        ref: "uv-scroll-list"
      },
      [
        vue.createCommentVNode(" 以上平台，支持wxs "),
        vue.createElementVNode("scroll-view", {
          class: "uv-scroll-list__scroll-view",
          "scroll-x": "",
          onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.wxs.scroll && _ctx.wxs.scroll(...args)),
          onScrolltoupper: _cache[1] || (_cache[1] = (...args) => _ctx.wxs.scrolltoupper && _ctx.wxs.scrolltoupper(...args)),
          onScrolltolower: _cache[2] || (_cache[2] = (...args) => _ctx.wxs.scrolltolower && _ctx.wxs.scrolltolower(...args)),
          "data-scrollWidth": $data.scrollWidth,
          "data-barWidth": _ctx.$uv.getPx(_ctx.indicatorBarWidth),
          "data-indicatorWidth": _ctx.$uv.getPx(_ctx.indicatorWidth),
          "show-scrollbar": false,
          "upper-threshold": 0,
          "lower-threshold": 0,
          "data-unit": _ctx.$uv.unit
        }, [
          vue.createElementVNode("view", { class: "uv-scroll-list__scroll-view__content" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 40, ["data-scrollWidth", "data-barWidth", "data-indicatorWidth", "data-unit"]),
        _ctx.indicator ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "uv-scroll-list__indicator",
            style: vue.normalizeStyle([_ctx.$uv.addStyle(_ctx.indicatorStyle)])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: "uv-scroll-list__indicator__line",
                style: vue.normalizeStyle([$options.lineStyle])
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "uv-scroll-list__indicator__line__bar",
                    style: vue.normalizeStyle([$options.barStyle]),
                    ref: "uv-scroll-list__indicator__line__bar"
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 避免报错 ")
      ],
      512
      /* NEED_PATCH */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$p);
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-145f8032"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-scroll-list/components/uv-scroll-list/uv-scroll-list.vue"]]);
  const _sfc_main$o = {
    __name: "waterfall-lives",
    props: {
      // 直播数据源
      data: {
        type: [Array, Object],
        default: () => []
      }
    },
    emits: ["click-item"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props2 = __props;
      const emit = __emit;
      const loadStatus = vue.ref("loadmore");
      const flowList = vue.ref([]);
      const originList = vue.ref(props2.data);
      const addFlowList = () => {
        for (let i = 0; i < originList.value.length; i++) {
          let item = JSON.parse(JSON.stringify(originList.value[i]));
          flowList.value.push(item);
        }
      };
      onLoad(() => {
        addFlowList();
      });
      onReachBottom(() => {
        loadStatus.value = "loading";
        setTimeout(() => {
          addFlowList();
          loadStatus.value = "loadmore";
        }, 1e3);
      });
      const handleClickItem = (item) => {
        emit("click-item", item);
      };
      const __returned__ = { props: props2, emit, loadStatus, flowList, originList, addFlowList, handleClickItem, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get onReachBottom() {
        return onReachBottom;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_lazy_load = resolveEasycom(vue.resolveDynamicComponent("u-lazy-load"), __easycom_0$5);
    const _component_u_waterfall = resolveEasycom(vue.resolveDynamicComponent("u-waterfall"), __easycom_1$4);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "ulive__wrap-waterfall" }, [
      vue.createVNode(_component_u_waterfall, {
        modelValue: $setup.flowList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.flowList = $event)
      }, {
        left: vue.withCtx(({ leftList }) => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(leftList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "ulive__wrap-waterfall__item",
                key: index2,
                onClick: ($event) => $setup.handleClickItem(item)
              }, [
                vue.createVNode(_component_u_lazy_load, {
                  threshold: "100",
                  image: item.poster,
                  index: index2,
                  height: "300",
                  "img-mode": "aspctFit"
                }, null, 8, ["image", "index"]),
                vue.createElementVNode(
                  "view",
                  { class: "title clamp2" },
                  vue.toDisplayString(item.desc),
                  1
                  /* TEXT */
                ),
                item.topic ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "tags"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(item.topic, (tag, tagidx) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: "tag-text",
                          key: tagidx
                        },
                        vue.toDisplayString(tag),
                        1
                        /* TEXT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", {
                    src: item.logo
                  }, null, 8, ["src"]),
                  vue.createTextVNode(
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        right: vue.withCtx(({ rightList }) => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(rightList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "ulive__wrap-waterfall__item",
                key: index2,
                onClick: ($event) => $setup.handleClickItem(item)
              }, [
                vue.createVNode(_component_u_lazy_load, {
                  threshold: "100",
                  image: item.poster,
                  index: index2,
                  height: "300",
                  "img-mode": "aspctFit"
                }, null, 8, ["image", "index"]),
                vue.createElementVNode(
                  "view",
                  { class: "title clamp2" },
                  vue.toDisplayString(item.desc),
                  1
                  /* TEXT */
                ),
                item.topic ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "tags"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(item.topic, (tag, tagidx) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: "tag-text",
                          key: tagidx
                        },
                        vue.toDisplayString(tag),
                        1
                        /* TEXT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", {
                    src: item.logo
                  }, null, 8, ["src"]),
                  vue.createTextVNode(
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      vue.createVNode(_component_u_loadmore, {
        class: "loadmore",
        status: $setup.loadStatus,
        "margin-top": "20",
        onLoadmore: $setup.addFlowList
      }, null, 8, ["status"])
    ]);
  }
  const WaterfallLives = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-48c99846"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/live/components/waterfall-lives.vue"]]);
  const liveJson = [
    {
      id: 20230101,
      logo: "https://tx2.a.yximgs.com/uhead/AB/2020/07/21/22/BMjAyMDA3MjEyMjQ0NTRfMTY5OTAxODYxMF8yX2hkMTM4Xzc4_s.jpg",
      name: "小猪护肤",
      src: "/static/video/video1.mp4",
      poster: "https://img.zcool.cn/community/01r26g1cgctgqbdgkk3cpw3835.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
      desc: "模特出镜口播短视频，化妆品种草视频",
      // 话题
      topic: ["口播", "种草带货"],
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
        { id: 2023001, type: "notice", content: `欢迎来到直播间！本平台提倡绿色健康直播，直播内容和评论严禁出现违法违规、色情低俗、诱导诈骗、抽烟酗酒等内容。` },
        { id: 2023002, user: "夜的迷迭香", content: `真是太美了，必须支持一下呀🔥👍` },
        { id: 2023003, user: "鸡哥", content: `这也太厉害了吧。` },
        { id: 2023004, type: "gift", user: "Jack", content: `小心心`, img: "/static/gift/gift1.png", num: 23 },
        { id: 2023005, type: "gift", user: "Andy", content: `棒棒糖`, img: "/static/gift/gift2.png", num: 6 },
        { id: 2023006, user: "Hisen", content: `美女，可以认识一下吗😐` },
        { id: 2023007, user: "杯酒人生", content: `这也拍的太好看了吧，周末正好带着女朋友去试一试啊 👬` },
        { id: 2023008, user: "Mike", isbuy: true },
        { id: 2023009, user: "一路向北", content: `必须一朵红花。`, tag: "总管理" },
        { id: 2023010, user: "Yon", content: `支持一下~` }
      ]
    },
    {
      id: 20230103,
      logo: "https://ali2.a.yximgs.com/uhead/AB/2020/08/12/23/BMjAyMDA4MTIyMzUyMDJfMjA1MTk0ODc2Ml8yX2hkNzc0Xzg4OA==_s.jpg",
      name: "展望未来",
      src: "https://video-js.51miz.com/preview/video/00/00/18/07/V-180745-5B4706CF.mp4",
      poster: "https://img-qn-0.51miz.com/preview/video/00/00/18/07/V-180745-8B5B1CD5.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fw/400",
      desc: "2024马上到了，圣诞元旦一起过。",
      // 话题
      topic: ["圣诞节", "元旦"],
      playNum: 1873,
      likeNum: 217,
      replyNum: 88,
      shareNum: 30,
      saleNum: 24,
      isLike: true,
      isFollow: false,
      // 广告
      ads: "https://m.suning.com/product/0000000000/10971963141.html",
      adstitle: "得力-柔软毛笔",
      // 视频合集
      collectionLs: [],
      // 商品
      goods: [
        {
          name: "50支得力铅笔六角杆",
          pic: "https://imgservice.suning.cn/uimg1/b2c/image/4Ad9rVUgsf_x3VgB9AzzWQ.jpg_180w_180h_4e",
          price: 12.9
        },
        {
          name: "幼儿园2b儿童带橡皮擦头",
          pic: "https://imgservice.suning.cn/uimg1/b2c/image/mt5W89NKkixG4DXaN5-5Jw.jpg_180w_180h_4e",
          price: 9.9
        }
      ],
      // 滚动消息
      message: [
        { id: 2021001, type: "notice", content: `欢迎来到直播间！本平台提倡绿色健康直播，直播内容和评论严禁出现违法违规、色情低俗、诱导诈骗、抽烟酗酒等内容。` },
        { id: 2021002, user: "素颜自然美", content: `这个厉害了哟👍` },
        { id: 2021003, user: "鸡哥", content: `怎么可以拍的这么好。🔥🔥` },
        { id: 2021004, user: "夜的迷迭香", content: `来一首歌听听` },
        { id: 2021005, user: "杯酒人生", content: `感觉好酷 😎` },
        { id: 2021006, user: "小马", content: `怎么可以这么美！` },
        { id: 2021007, user: "曾经是王者", content: `大哥，给你点赞！😬` },
        { id: 2021008, user: "一路向北", content: `牛逼666` }
      ]
    },
    {
      id: 20230106,
      logo: "https://p2-pro.a.yximgs.com/uhead/AB/2019/10/04/10/BMjAxOTEwMDQxMDQxNTlfNjkxNjI1NzU0XzJfaGQ4MTFfMzQz_s.jpg",
      name: "爱生活",
      src: "/static/video/video2.mp4",
      poster: "https://img.zcool.cn/community/01jvls1sozrcs49zwqt9sk3035.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp",
      desc: "zectron 电动自行车，休闲自行车~",
      // 话题
      topic: ["电动车", "休闲自行车♥"],
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
        { id: 2021002, user: "大兵", content: `这么小巧精致，这么漂亮的外形，真是让人太爱了。💋💋` },
        { id: 2021003, user: "鸡哥", content: `真的不错啊！👑` },
        { id: 2021004, user: "Yaya", content: `认识你真好！` },
        { id: 2021005, user: "流浪地球", content: `啧啧，给你比个心。🤞` },
        { id: 2021006, user: "猛哥", content: `怎么可以认识到你。👠` },
        { id: 2021007, user: "曾经是王者", content: `咱们可以一起拍一个吗？` },
        { id: 2021008, user: "斌哥", content: `哇哇哇，拍的这么好看啊！` },
        { id: 2021009, user: "小虎子", content: `真的是太给力啦！😎` }
      ]
    },
    {
      id: 20230107,
      logo: "https://ali2.a.kwimgs.com/uhead/AB/2020/08/06/08/BMjAyMDA4MDYwODA3MzNfNDUyNDA0MjE3XzFfaGQzNTZfNzk2_s.jpg",
      name: "东北丫头",
      src: "https://txmov2.a.yximgs.com/upic/2021/03/15/07/BMjAyMTAzMTUwNzM2MjFfMTcwOTE1MzI1NV80NjAyNDkwODMxM18yXzM=_b_B28bed5de3a81a302d79f76e1e938e257.mp4",
      poster: "https://js2.a.yximgs.com/upic/2021/03/15/07/BMjAyMTAzMTUwNzM2MjFfMTcwOTE1MzI1NV80NjAyNDkwODMxM18yXzM=_B4d822757a2f9754a5393b181d2c28db8.jpg",
      desc: "追求诗与远方，一起去旅行吧！",
      // 话题
      topic: ["旅行", "诗与远方"],
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
          name: "直飞昆明大理丽江6天5晚",
          pic: "https://img.alicdn.com/bao/uploaded/i1/2939694477/O1CN01HYJuPP1iwVjCp5YPD_!!2939694477.jpg_400x400.jpg",
          price: 600
        },
        {
          name: "云南包车玉龙雪山含往返机票",
          pic: "https://img.alicdn.com/bao/uploaded/i3/2939694477/O1CN01AECxOh1iwVhfd0BnZ_!!2939694477.jpg_400x400.jpg",
          price: 688
        },
        {
          name: "武汉-昆大丽6天5晚",
          pic: "https://img.alicdn.com/bao/uploaded/i3/2939694477/O1CN01J7QfhB1iwVjDANUEC_!!2939694477.jpg_400x400.jpg",
          price: 568.9
        }
      ],
      message: [
        { id: 2021002, user: "涛哥", content: `这个拍的挺不错的。` },
        { id: 2021003, user: "阿梅", content: `有一种淡淡的忧伤感！` },
        { id: 2021004, user: "King", content: `给孩子也买一个属于她的童话世界！` },
        { id: 2021005, user: "流浪地球", content: `太喜欢这个了。🤞` },
        { id: 2021009, user: "丫仔", content: `给你点赞，666 😎` }
      ]
    },
    {
      id: 20230112,
      logo: "https://ali2.a.yximgs.com/uhead/AB/2020/10/30/17/BMjAyMDEwMzAxNzUwMzJfMjEyNTMxNzU2MF8yX2hkODQwXzI3Mw==_s.jpg",
      name: "小王吃播",
      src: "https://txmov2.a.yximgs.com/upic/2021/03/20/13/BMjAyMTAzMjAxMzA3MzNfMjEyNTMxNzU2MF80NjMwNzU0NTMxNV8wXzM=_b_B6717ec232dac71a529a19a0e4ac64b97.mp4",
      poster: "https://tx2.a.yximgs.com/upic/2021/03/20/13/BMjAyMTAzMjAxMzA3MzNfMjEyNTMxNzU2MF80NjMwNzU0NTMxNV8wXzM=_B0d63175c0501238e74115ebae1a69236.jpg",
      desc: "分享生活美食，美食艺术，美食视频记录。",
      // 话题
      topic: ["美食艺术", "吃播", "美食"],
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
        { id: 2021002, user: "杯酒人生", content: `过分, 看完都流口水了！` },
        { id: 2021003, user: "鸡哥", content: `啊啊啊，好想吃啊。` },
        { id: 2021004, user: "Ring", content: `可以认识一下吗？` },
        { id: 2021005, user: "Null", content: `看着好好吃啊 🤞🤞` },
        { id: 2021006, user: "暗黑世界", content: `以后要多向你学习啦！` },
        { id: 2021007, user: "曾经是王者", content: `点赞，666！👠` }
      ]
    },
    {
      id: 20230116,
      logo: "https://js2.a.yximgs.com/uhead/AB/2020/01/24/19/BMjAyMDAxMjQxOTUyMTBfMTcwOTE1MzI1NV8yX2hkMTIyXzEwNg==_s.jpg",
      name: "心如止水",
      src: "https://jsmov2.a.yximgs.com/upic/2020/08/22/06/BMjAyMDA4MjIwNjU0MjhfNzU4OTU3ODI0XzM0NzcyNTYyNTI1XzFfMw==_b_B02dceb0bc91b376ee1337df632e2821b.mp4",
      poster: "https://ali2.a.yximgs.com/upic/2020/08/22/06/BMjAyMDA4MjIwNjU0MjhfNzU4OTU3ODI0XzM0NzcyNTYyNTI1XzFfMw==_Bd7c907dc5118e78e44356793daef1c7f.jpg",
      desc: "世界如此之大，吃遍各地美食，希望在某个地方能和你不期而遇！",
      // 话题
      topic: ["美食", "旅游"],
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
        { id: 2021002, user: "刘美丽", content: `真是太好吃了啊！` },
        { id: 2021003, user: "鸡哥", content: `世界这么大，好想去看看！👑` },
        { id: 2021004, user: "Pink", content: `这是在什么地方呀？` },
        { id: 2021005, user: "大雄", content: `下次我也想去吃 🤞🤞` },
        { id: 2021006, user: "Mimi", content: `哈哈~ 美食美女啊！` },
        { id: 2021007, user: "曾经是王者", content: `666！😎` }
      ]
    }
  ];
  const _imports_0$3 = "/static/logo.png";
  const _imports_1$2 = "/static/coupon.png";
  const _sfc_main$n = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const searchText = vue.ref("");
      const tabsList = vue.ref([
        { name: "大家在看", count: 5 },
        { name: "购物" },
        { name: "颜值" },
        { name: "游戏" },
        { name: "虚拟主播" },
        { name: "聊天交友" },
        { name: "KTV" },
        { name: "唱歌" }
      ]);
      const tabsCurrent = vue.ref(0);
      const goodsList = vue.ref([
        { image: "https://img10.360buyimg.com/n7/jfs/t1/226168/23/3411/118733/65537e5fF2db2d109/7d1d11a8013d6e8f.jpg", price: 1 },
        { image: "https://img14.360buyimg.com/n7/jfs/t1/161308/15/37369/235862/649e95b2Fc5a04c60/3cf66104aa7b1b0c.jpg", price: 10.9 },
        { image: "https://img14.360buyimg.com/n7/jfs/t1/190110/28/40216/146211/653f24f1Fc5d462e6/0bf0311e647339b4.jpg", price: 79 },
        { image: "https://img12.360buyimg.com/n7/jfs/t1/192495/8/41694/55778/654ded4eF138ec2ac/953fc6e1f5b3531d.jpg", price: 1199 },
        { image: "https://img10.360buyimg.com/n7/jfs/t1/232669/13/4985/171607/65669688F10439b91/cdee52c0b6929794.jpg", price: 129.9 },
        { image: "https://img10.360buyimg.com/n7/jfs/t1/155306/32/25324/231912/62d22fb8E4ffab855/c6001ee702fb240a.jpg", price: 22.9 }
      ]);
      const scrollTop = vue.ref(0);
      const tabsChange = (index2) => {
        formatAppLog("log", "at pages/live/index.vue:21", index2);
      };
      const handleClickItem = (item) => {
        uni.navigateTo({
          url: "/pages/live/live?roomid=" + item.id
        });
      };
      onPageScroll((e) => {
        scrollTop.value = e.scrollTop;
      });
      const __returned__ = { searchText, tabsList, tabsCurrent, goodsList, scrollTop, tabsChange, handleClickItem, ref: vue.ref, get onPageScroll() {
        return onPageScroll;
      }, WaterfallLives, get liveJson() {
        return liveJson;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_input = resolveEasycom(vue.resolveDynamicComponent("ua-input"), __easycom_0$8);
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_uv_scroll_list = resolveEasycom(vue.resolveDynamicComponent("uv-scroll-list"), __easycom_2$2);
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_2$4);
    const _component_u_back_top = resolveEasycom(vue.resolveDynamicComponent("u-back-top"), __easycom_4$1);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_ua_layout, { class: "scrolling" }, {
      header: vue.withCtx(() => [
        vue.createVNode(_component_ua_navbar, {
          back: "false",
          custom: "",
          fixed: "",
          bgcolor: "linear-gradient(45deg, #d122b2 25%, #e1f516)",
          "z-index": "1000"
        }, {
          left: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "flexbox flex-alignc ml-25" }, [
              vue.createElementVNode("image", {
                src: _imports_0$3,
                mode: "widthFix",
                style: { "height": "60rpx", "width": "60rpx" }
              })
            ])
          ]),
          title: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "ulive__wrap-header__sear" }, [
              vue.createVNode(_component_ua_input, {
                modelValue: $setup.searchText,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchText = $event),
                search: "",
                placeholder: "男士加绒卫裤"
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "welive-icon welive-icon-search mr-20" })
                ]),
                suffix: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "welive-icon welive-icon-tupian fs-36 mr-25" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "pad25" }, [
          vue.createElementVNode("image", {
            src: _imports_1$2,
            mode: "widthFix",
            style: { "width": "100%" }
          })
        ]),
        vue.createElementVNode("view", { class: "ulive__scrolllist-goods" }, [
          vue.createVNode(_component_uv_scroll_list, {
            indicatorColor: "#ffe4dd",
            indicatorActiveColor: "#f56c6c",
            indicatorStyle: "margin-top: 10px;"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "ulive__scrolllist-wrap flexbox flex-row" }, [
                vue.createElementVNode("view", { class: "ulive__scrolllist-left" }, [
                  vue.createElementVNode("view", { class: "welive-icon welive-icon-shouyi fs-50 c-eb4868" }),
                  vue.createElementVNode("view", { class: "mt-10" }, "超值购"),
                  vue.createElementVNode("text", { class: "fs-24 c-eb4868" }, "双12补贴")
                ]),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.goodsList, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "ulive__scrolllist-goositem flexbox flex-col",
                      key: index2
                    }, [
                      vue.createElementVNode("image", {
                        class: "ulive__scrolllist-goositem__image",
                        src: item.image
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { class: "ulive__scrolllist-goositem__price" },
                        "￥" + vue.toDisplayString(item.price),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                vue.createElementVNode("view", { class: "ulive__scrolllist-right" }, "查看更多")
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        vue.createVNode(_component_u_tabs, {
          modelValue: $setup.tabsCurrent,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.tabsCurrent = $event),
          list: $setup.tabsList,
          "is-scroll": true,
          "bg-color": "#fff",
          onChange: $setup.tabsChange
        }, null, 8, ["modelValue", "list"]),
        vue.createVNode($setup["WaterfallLives"], {
          data: $setup.liveJson,
          onClickItem: $setup.handleClickItem
        }, null, 8, ["data"]),
        vue.createVNode(_component_u_back_top, {
          "scroll-top": $setup.scrollTop,
          top: "1000"
        }, null, 8, ["scroll-top"])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesLiveIndex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-810271e5"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/live/index.vue"]]);
  const _sfc_main$m = {
    name: "u-checkbox",
    emits: ["update:modelValue", "input", "change"],
    props: {
      // 是否为选中状态
      value: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      // checkbox的名称
      name: {
        type: [String, Number],
        default: ""
      },
      // 形状，square为方形，circle为圆型
      shape: {
        type: String,
        default: ""
      },
      // 是否禁用
      disabled: {
        type: [String, Boolean],
        default: ""
      },
      // 是否禁止点击提示语选中复选框
      labelDisabled: {
        type: [String, Boolean],
        default: ""
      },
      // 选中状态下的颜色，如设置此值，将会覆盖checkboxGroup的activeColor值
      activeColor: {
        type: String,
        default: ""
      },
      // 图标的大小，单位rpx
      iconSize: {
        type: [String, Number],
        default: ""
      },
      // label的字体大小，rpx单位
      labelSize: {
        type: [String, Number],
        default: ""
      },
      // 组件的整体大小
      size: {
        type: [String, Number],
        default: ""
      },
      // 设置不确定状态，仅负责样式控制
      indeterminate: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        parentDisabled: false,
        newParams: {}
      };
    },
    created() {
      this.parent = this.$u.$parent.call(this, "u-checkbox-group");
      this.parent && this.parent.children.push(this);
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      // 是否禁用，如果父组件u-checkbox-group禁用的话，将会忽略子组件的配置
      isDisabled() {
        return this.disabled !== "" ? this.disabled : this.parent ? this.parent.disabled : false;
      },
      // 是否禁用label点击
      isLabelDisabled() {
        return this.labelDisabled !== "" ? this.labelDisabled : this.parent ? this.parent.labelDisabled : false;
      },
      // 组件尺寸，对应size的值，默认值为34rpx
      checkboxSize() {
        return this.size ? this.size : this.parent ? this.parent.size : 34;
      },
      // 组件的勾选图标的尺寸，默认20
      checkboxIconSize() {
        return this.iconSize ? this.iconSize : this.parent ? this.parent.iconSize : 20;
      },
      // 组件选中激活时的颜色
      elActiveColor() {
        return this.activeColor ? this.activeColor : this.parent ? this.parent.activeColor : "primary";
      },
      // 组件的形状
      elShape() {
        return this.shape ? this.shape : this.parent ? this.parent.shape : "square";
      },
      iconStyle() {
        let style = {};
        if (this.elActiveColor && this.valueCom && !this.isDisabled) {
          style.borderColor = this.elActiveColor;
          style.backgroundColor = this.elActiveColor;
        }
        style.width = this.$u.addUnit(this.checkboxSize);
        style.height = this.$u.addUnit(this.checkboxSize);
        return style;
      },
      // checkbox内部的勾选图标，如果选中状态，为白色，否则为透明色即可
      iconColor() {
        if (this.indeterminate)
          return "#ffffff";
        return this.valueCom ? "#ffffff" : "transparent";
      },
      iconClass() {
        let classes = [];
        classes.push("u-checkbox__icon-wrap--" + this.elShape);
        if (this.valueCom == true)
          classes.push("u-checkbox__icon-wrap--checked");
        if (this.isDisabled)
          classes.push("u-checkbox__icon-wrap--disabled");
        if (this.valueCom && this.isDisabled)
          classes.push("u-checkbox__icon-wrap--disabled--checked");
        if (this.indeterminate === true)
          classes.push("u-checkbox__icon-wrap--indeterminate");
        return classes.join(" ");
      },
      checkboxStyle() {
        let style = {};
        if (this.parent && this.parent.width) {
          style.width = this.parent.width;
          style.flex = `0 0 ${this.parent.width}`;
        }
        if (this.parent && this.parent.wrap) {
          style.width = "100%";
          style.flex = "0 0 100%";
        }
        return style;
      }
    },
    mounted() {
      this._emitEvent();
    },
    watch: {
      valueCom: {
        handler: function(newVal, oldVal) {
          this._emitEvent();
        }
      }
    },
    methods: {
      _emitEvent() {
        let value = this.valueCom;
        let obj = {
          value,
          name: this.name
        };
        if (this.parent && this.parent.emitEvent)
          this.parent.emitEvent(obj);
      },
      onClickLabel() {
        if (!this.isLabelDisabled && !this.isDisabled) {
          this.setValue();
        }
      },
      toggle() {
        if (!this.isDisabled) {
          this.setValue();
        }
      },
      emitEvent() {
        let obj = {
          value: !this.valueCom,
          name: this.name
        };
        this.$emit("change", obj);
        if (this.parent && this.parent.emitEvent)
          this.parent.emitEvent(obj);
      },
      // 设置input的值，这里通过input事件，设置通过v-model绑定的组件的值
      setValue() {
        let value = this.valueCom;
        let checkedNum = 0;
        if (this.parent && this.parent.children) {
          this.parent.children.map((val) => {
            if (val.value)
              checkedNum++;
          });
        }
        if (value == true) {
          this.emitEvent();
          this.$emit("input", !value);
          this.$emit("update:modelValue", !value);
        } else {
          if (this.parent && checkedNum >= this.parent.max) {
            return this.$u.toast(`最多可选${this.parent.max}项`);
          }
          this.emitEvent();
          this.$emit("input", !value);
          this.$emit("update:modelValue", !value);
        }
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-checkbox",
        style: vue.normalizeStyle([$options.checkboxStyle])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-checkbox__icon-wrap", [$options.iconClass]]),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggle && $options.toggle(...args)),
            style: vue.normalizeStyle([$options.iconStyle])
          },
          [
            $props.indeterminate ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
              key: 0,
              class: "u-checkbox__icon-wrap__icon",
              name: "minus",
              size: $options.checkboxIconSize,
              color: $options.iconColor
            }, null, 8, ["size", "color"])) : (vue.openBlock(), vue.createBlock(_component_u_icon, {
              key: 1,
              class: "u-checkbox__icon-wrap__icon",
              name: "checkbox-mark",
              size: $options.checkboxIconSize,
              color: $options.iconColor
            }, null, 8, ["size", "color"]))
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createElementVNode(
          "view",
          {
            class: "u-checkbox__label",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickLabel && $options.onClickLabel(...args)),
            style: vue.normalizeStyle({
              fontSize: _ctx.$u.addUnit($props.labelSize)
            })
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-cafae08d"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.vue"]]);
  const _sfc_main$l = {
    name: "u-tag",
    emits: ["click", "close"],
    // 是否禁用这个标签，禁用的话，会屏蔽点击事件
    props: {
      // 标签类型info、primary、success、warning、error
      type: {
        type: String,
        default: "primary"
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      // 标签的大小，分为default（默认），mini（较小）
      size: {
        type: String,
        default: "default"
      },
      // tag的形状，circle（两边半圆形）, square（方形，带圆角），circleLeft（左边是半圆），circleRight（右边是半圆）
      shape: {
        type: String,
        default: "square"
      },
      // 标签文字
      text: {
        type: [String, Number],
        default: ""
      },
      // 背景颜色，默认为空字符串，即不处理
      bgColor: {
        type: String,
        default: ""
      },
      // 标签字体颜色，默认为空字符串，即不处理
      color: {
        type: String,
        default: ""
      },
      // 镂空形式标签的边框颜色
      borderColor: {
        type: String,
        default: ""
      },
      // 关闭按钮图标的颜色
      closeColor: {
        type: String,
        default: ""
      },
      // 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
      index: {
        type: [Number, String],
        default: ""
      },
      // 模式选择，dark|light|plain
      mode: {
        type: String,
        default: "light"
      },
      // 是否可关闭
      closeable: {
        type: Boolean,
        default: false
      },
      // 是否显示
      show: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    computed: {
      customStyle() {
        let style = {};
        if (this.color)
          style.color = this.color;
        if (this.bgColor)
          style.backgroundColor = this.bgColor;
        if (this.mode == "plain" && this.color && !this.borderColor)
          style.borderColor = this.color;
        else
          style.borderColor = this.borderColor;
        return style;
      },
      iconStyle() {
        if (!this.closeable)
          return;
        let style = {};
        if (this.size == "mini")
          style.fontSize = "20rpx";
        else
          style.fontSize = "22rpx";
        if (this.mode == "plain" || this.mode == "light")
          style.color = this.type;
        else if (this.mode == "dark")
          style.color = "#ffffff";
        if (this.closeColor)
          style.color = this.closeColor;
        return style;
      },
      // 关闭图标的颜色
      closeIconColor() {
        if (this.closeColor)
          return this.closeColor;
        else if (this.color)
          return this.color;
        else if (this.mode == "dark")
          return "#ffffff";
        else
          return this.type;
      }
    },
    methods: {
      // 标签被点击
      clickTag() {
        if (this.disabled)
          return;
        this.$emit("click", this.index);
      },
      // 点击标签关闭按钮
      close() {
        this.$emit("close", this.index);
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$5);
    return $props.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass([[
          $props.disabled ? "u-disabled" : "",
          "u-size-" + $props.size,
          "u-shape-" + $props.shape,
          "u-mode-" + $props.mode + "-" + $props.type
        ], "u-tag"]),
        style: vue.normalizeStyle([$options.customStyle]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.clickTag && $options.clickTag(...args))
      },
      [
        vue.createTextVNode(
          vue.toDisplayString($props.text) + " ",
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "u-icon-wrap",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          $props.closeable ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            onClick: $options.close,
            size: "22",
            color: $options.closeIconColor,
            name: "close",
            class: "u-close-icon",
            style: vue.normalizeStyle([$options.iconStyle])
          }, null, 8, ["onClick", "color", "style"])) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-2c5b368d"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-tag/u-tag.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$k = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return unescape(`%u${code2.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$j = {
    name: "u-numberbox",
    emits: ["update:modelValue", "input", "change", "blur", "plus", "minus"],
    props: {
      // 预显示的数字
      value: {
        type: Number,
        default: 1
      },
      modelValue: {
        type: Number,
        default: 1
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: "#F2F3F5"
      },
      // 最小值
      min: {
        type: Number,
        default: 0
      },
      // 最大值
      max: {
        type: Number,
        default: 99999
      },
      // 步进值，每次加或减的值
      step: {
        type: Number,
        default: 1
      },
      // 步进值，首次增加或最后减的值
      stepFirst: {
        type: Number,
        default: 0
      },
      // 是否只能输入 step 的倍数
      stepStrictly: {
        type: Boolean,
        default: false
      },
      // 是否禁用加减操作
      disabled: {
        type: Boolean,
        default: false
      },
      // input的字体大小，单位rpx
      size: {
        type: [Number, String],
        default: 26
      },
      // 加减图标的颜色
      color: {
        type: String,
        default: "#323233"
      },
      // input宽度，单位rpx
      inputWidth: {
        type: [Number, String],
        default: 80
      },
      // input高度，单位rpx
      inputHeight: {
        type: [Number, String],
        default: 50
      },
      // index索引，用于列表中使用，让用户知道是哪个numberbox发生了变化，一般使用for循环出来的index值即可
      index: {
        type: [Number, String],
        default: ""
      },
      // 是否禁用输入框，与disabled作用于输入框时，为OR的关系，即想要禁用输入框，又可以加减的话
      // 设置disabled为false，disabledInput为true即可
      disabledInput: {
        type: Boolean,
        default: false
      },
      // 输入框于键盘之间的距离
      cursorSpacing: {
        type: [Number, String],
        default: 100
      },
      // 是否开启长按连续递增或递减
      longPress: {
        type: Boolean,
        default: true
      },
      // 开启长按触发后，每触发一次需要多久
      pressTime: {
        type: [Number, String],
        default: 250
      },
      // 是否只能输入大于或等于0的整数(正整数)
      positiveInteger: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      valueCom(v1, v2) {
        if (!this.changeFromInner) {
          this.inputVal = v1;
          this.$nextTick(function() {
            this.changeFromInner = false;
          });
        }
      },
      inputVal(v1, v2) {
        if (v1 == "")
          return;
        let value = 0;
        let tmp = this.isNumber(v1);
        if (tmp && v1 >= this.min && v1 <= this.max)
          value = v1;
        else
          value = v2;
        if (this.positiveInteger) {
          if (v1 < 0 || String(v1).indexOf(".") !== -1) {
            value = v2;
            this.$nextTick(() => {
              this.inputVal = v2;
            });
          }
        }
        this.handleChange(value, "change");
      },
      min(v1) {
        if (v1 !== void 0 && v1 != "" && this.valueCom < v1) {
          this.$emit("input", v1);
        }
      },
      max(v1) {
        if (v1 !== void 0 && v1 != "" && this.valueCom > v1) {
          this.$emit("input", v1);
        }
      }
    },
    data() {
      return {
        inputVal: 1,
        // 输入框中的值，不能直接使用props中的value，因为应该改变props的状态
        timer: null,
        // 用作长按的定时器
        changeFromInner: false,
        // 值发生变化，是来自内部还是外部
        innerChangeTimer: null
        // 内部定时器
      };
    },
    created() {
      this.inputVal = Number(this.valueCom);
    },
    mounted() {
    },
    computed: {
      getCursorSpacing() {
        return Number(uni.upx2px(this.cursorSpacing));
      },
      valueCom() {
        return this.modelValue;
      }
    },
    methods: {
      // 点击退格键
      btnTouchStart(callback) {
        this[callback]();
        if (!this.longPress)
          return;
        clearInterval(this.timer);
        this.timer = null;
        this.timer = setInterval(() => {
          this[callback]();
        }, this.pressTime);
      },
      clearTimer() {
        this.$nextTick(() => {
          clearInterval(this.timer);
          this.timer = null;
        });
      },
      minus() {
        this.computeVal("minus");
      },
      plus() {
        this.computeVal("plus");
      },
      // 为了保证小数相加减出现精度溢出的问题
      calcPlus(num1, num2) {
        let baseNum, baseNum1, baseNum2;
        try {
          baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
          baseNum1 = 0;
        }
        try {
          baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
          baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        let precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
        return ((num1 * baseNum + num2 * baseNum) / baseNum).toFixed(precision);
      },
      // 为了保证小数相加减出现精度溢出的问题
      calcMinus(num1, num2) {
        let baseNum, baseNum1, baseNum2;
        try {
          baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
          baseNum1 = 0;
        }
        try {
          baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
          baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        let precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
      },
      computeVal(type) {
        uni.hideKeyboard();
        if (this.disabled)
          return;
        let value = 0;
        if (type === "minus") {
          if (this.stepFirst > 0 && this.inputVal == this.stepFirst) {
            value = this.min;
          } else {
            value = this.calcMinus(this.inputVal, this.step);
          }
        } else if (type === "plus") {
          if (this.stepFirst > 0 && this.inputVal < this.stepFirst) {
            value = this.stepFirst;
          } else {
            value = this.calcPlus(this.inputVal, this.step);
          }
        }
        if (this.stepStrictly) {
          let strictly = value % this.step;
          if (strictly > 0) {
            value -= strictly;
          }
          if (this.stepFirst > 0 && value > 0 && value < this.stepFirst) {
            if (type === "minus") {
              value = 0;
            } else if (type === "plus") {
              value = this.stepFirst + (this.step - this.stepFirst % this.step);
            }
          }
        }
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
        this.inputVal = value;
        this.handleChange(value, type);
      },
      // 处理用户手动输入的情况
      onBlur(event) {
        let val = 0;
        let value = event.detail.value;
        if (!/(^\d+$)/.test(value) || value[0] == 0)
          val = this.min;
        val = +value;
        if (this.stepFirst > 0 && this.inputVal < this.stepFirst && this.inputVal > 0) {
          val = this.stepFirst;
        }
        if (this.stepStrictly) {
          let strictly = val % this.step;
          if (strictly > 0) {
            val -= strictly;
          }
          if (this.stepFirst > 0 && val > 0 && val < this.stepFirst) {
            val = this.stepFirst + (this.step - this.stepFirst % this.step);
          }
        }
        if (val > this.max) {
          val = this.max;
        } else if (val < this.min) {
          val = this.min;
        }
        this.$nextTick(() => {
          this.inputVal = val;
        });
        this.handleChange(val, "blur");
      },
      handleChange(value, type) {
        if (this.disabled)
          return;
        if (this.innerChangeTimer) {
          clearTimeout(this.innerChangeTimer);
          this.innerChangeTimer = null;
        }
        this.changeFromInner = true;
        this.innerChangeTimer = setTimeout(() => {
          this.changeFromInner = false;
        }, 150);
        this.$emit("input", Number(value));
        this.$emit("update:modelValue", Number(value));
        this.$emit(type, {
          // 转为Number类型
          value: Number(value),
          index: this.index
        });
      },
      /**
       * 验证十进制数字
       */
      isNumber(value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-numberbox" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-icon-minus", { "u-icon-disabled": $props.disabled || $data.inputVal <= $props.min }]),
          onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers(($event) => $options.btnTouchStart("minus"), ["prevent"])),
          onTouchend: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.clearTimer && $options.clearTimer(...args), ["stop", "prevent"])),
          style: vue.normalizeStyle({
            background: $props.bgColor,
            height: $props.inputHeight + "rpx",
            color: $props.color,
            fontSize: $props.size + "rpx",
            minHeight: "1.4em"
          })
        },
        [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle("font-size:" + (Number($props.size) + 10) + "rpx"),
              class: "num-btn"
            },
            "－",
            4
            /* STYLE */
          )
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      vue.withDirectives(vue.createElementVNode("input", {
        disabled: $props.disabledInput || $props.disabled,
        "cursor-spacing": $options.getCursorSpacing,
        class: vue.normalizeClass([{ "u-input-disabled": $props.disabled }, "u-number-input"]),
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.inputVal = $event),
        onBlur: _cache[3] || (_cache[3] = (...args) => $options.onBlur && $options.onBlur(...args)),
        type: "number",
        style: vue.normalizeStyle({
          color: $props.color,
          fontSize: $props.size + "rpx",
          background: $props.bgColor,
          height: $props.inputHeight + "rpx",
          width: $props.inputWidth + "rpx"
        })
      }, null, 46, ["disabled", "cursor-spacing"]), [
        [vue.vModelText, $data.inputVal]
      ]),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-icon-plus", { "u-icon-disabled": $props.disabled || $data.inputVal >= $props.max }]),
          onTouchstart: _cache[4] || (_cache[4] = vue.withModifiers(($event) => $options.btnTouchStart("plus"), ["prevent"])),
          onTouchend: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.clearTimer && $options.clearTimer(...args), ["stop", "prevent"])),
          style: vue.normalizeStyle({
            background: $props.bgColor,
            height: $props.inputHeight + "rpx",
            color: $props.color,
            fontSize: $props.size + "rpx",
            minHeight: "1.4em"
          })
        },
        [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle("font-size:" + (Number($props.size) + 10) + "rpx"),
              class: "num-btn"
            },
            "＋",
            4
            /* STYLE */
          )
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      )
    ]);
  }
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-2bb8fbb0"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-number-box/u-number-box.vue"]]);
  const _sfc_main$i = {
    name: "u-button",
    emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp", "chooseavatar"],
    props: {
      // 是否细边框
      hairLine: {
        type: Boolean,
        default: true
      },
      // 按钮的预置样式，default，primary，error，warning，success
      type: {
        type: String,
        default: "default"
      },
      // 按钮尺寸，default，medium，mini
      size: {
        type: String,
        default: "default"
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
        default: false
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
        default: false
      },
      // 手指按（触摸）按钮时按钮时的背景颜色
      hoverBgColor: {
        type: String,
        default: ""
      },
      // 水波纹的背景颜色
      rippleBgColor: {
        type: String,
        default: ""
      },
      // 是否开启水波纹效果
      ripple: {
        type: Boolean,
        default: false
      },
      // 按下的类名
      hoverClass: {
        type: String,
        default: ""
      },
      // 自定义样式，对象形式
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
      dataName: {
        type: String,
        default: ""
      },
      // 节流，一定时间内只能触发一次
      throttleTime: {
        type: [String, Number],
        default: 500
      },
      // 按住后多久出现点击态，单位毫秒
      hoverStartTime: {
        type: [String, Number],
        default: 20
      },
      // 手指松开后点击态保留时间，单位毫秒
      hoverStayTime: {
        type: [String, Number],
        default: 150
      },
      timerId: {
        type: [String, Number]
      }
    },
    computed: {
      // 当没有传bgColor变量时，按钮按下去的颜色类名
      getHoverClass() {
        if (this.loading || this.disabled || this.ripple || this.hoverClass)
          return "";
        let hoverClass = "";
        hoverClass = this.plain ? "u-" + this.type + "-plain-hover" : "u-" + this.type + "-hover";
        return hoverClass;
      },
      // 在'primary', 'success', 'error', 'warning'类型下，不显示边框，否则会造成四角有毛刺现象
      showHairLineBorder() {
        if (["primary", "success", "error", "warning"].indexOf(this.type) >= 0 && !this.plain) {
          return "";
        } else {
          return "u-hairline-border";
        }
      }
    },
    data() {
      let btnTimerId = this.timerId || "button_" + Math.floor(Math.random() * 1e8 + 0);
      return {
        btnTimerId,
        rippleTop: 0,
        // 水波纹的起点Y坐标到按钮上边界的距离
        rippleLeft: 0,
        // 水波纹起点X坐标到按钮左边界的距离
        fields: {},
        // 波纹按钮节点信息
        waveActive: false
        // 激活水波纹
      };
    },
    methods: {
      // 按钮点击
      click(e) {
        this.$u.throttle(() => {
          if (this.loading === true || this.disabled === true)
            return;
          if (this.ripple) {
            this.waveActive = false;
            this.$nextTick(function() {
              this.getWaveQuery(e);
            });
          }
          this.$emit("click", e);
        }, this.throttleTime, true, this.btnTimerId);
      },
      // 查询按钮的节点信息
      getWaveQuery(e) {
        this.getElQuery().then((res) => {
          let data = res[0];
          if (!data.width || !data.width)
            return;
          data.targetWidth = data.height > data.width ? data.height : data.width;
          if (!data.targetWidth)
            return;
          this.fields = data;
          let touchesX = "", touchesY = "";
          touchesX = e.touches[0].clientX;
          touchesY = e.touches[0].clientY;
          this.rippleTop = touchesY - data.top - data.targetWidth / 2;
          this.rippleLeft = touchesX - data.left - data.targetWidth / 2;
          this.$nextTick(() => {
            this.waveActive = true;
          });
        });
      },
      // 获取节点信息
      getElQuery() {
        return new Promise((resolve) => {
          let queryInfo = "";
          queryInfo = uni.createSelectorQuery().in(this);
          queryInfo.select(".u-btn").boundingClientRect();
          queryInfo.exec((data) => {
            resolve(data);
          });
        });
      },
      // 下面为对接uniapp官方按钮开放能力事件回调的对接
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      },
      chooseavatar(res) {
        this.$emit("chooseavatar", res);
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", {
      id: "u-wave-btn",
      class: vue.normalizeClass(["u-btn u-line-1 u-fix-ios-appearance", [
        "u-size-" + $props.size,
        $props.plain ? "u-btn--" + $props.type + "--plain" : "",
        $props.loading ? "u-loading" : "",
        $props.shape == "circle" ? "u-round-circle" : "",
        $props.hairLine ? $options.showHairLineBorder : "u-btn--bold-border",
        "u-btn--" + $props.type,
        $props.disabled ? `u-btn--${$props.type}--disabled` : ""
      ]]),
      "hover-start-time": Number($props.hoverStartTime),
      "hover-stay-time": Number($props.hoverStayTime),
      disabled: $props.disabled,
      "form-type": $props.formType,
      "open-type": $props.openType,
      "app-parameter": $props.appParameter,
      "hover-stop-propagation": $props.hoverStopPropagation,
      "send-message-title": $props.sendMessageTitle,
      "send-message-path": "sendMessagePath",
      lang: $props.lang,
      "data-name": $props.dataName,
      "session-from": $props.sessionFrom,
      "send-message-img": $props.sendMessageImg,
      "show-message-card": $props.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      onChooseavatar: _cache[5] || (_cache[5] = (...args) => $options.chooseavatar && $options.chooseavatar(...args)),
      style: vue.normalizeStyle([$props.customStyle, {
        overflow: $props.ripple ? "hidden" : "visible"
      }]),
      onClick: _cache[6] || (_cache[6] = vue.withModifiers(($event) => $options.click($event), ["stop"])),
      "hover-class": $options.getHoverClass,
      loading: $props.loading
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.ripple ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["u-wave-ripple", [$data.waveActive ? "u-wave-active" : ""]]),
          style: vue.normalizeStyle({
            top: $data.rippleTop + "px",
            left: $data.rippleLeft + "px",
            width: $data.fields.targetWidth + "px",
            height: $data.fields.targetWidth + "px",
            "background-color": $props.rippleBgColor || "rgba(0, 0, 0, 0.15)"
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ], 46, ["hover-start-time", "hover-stay-time", "disabled", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class", "loading"]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-097def2b"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-button/u-button.vue"]]);
  const cartJson = [
    {
      shopname: "Telent天伦官方旗舰店",
      type: "自营",
      list: [
        {
          image: "https://img14.360buyimg.com/n7/jfs/t1/190110/28/40216/146211/653f24f1Fc5d462e6/0bf0311e647339b4.jpg",
          title: "天伦外套男春秋冬季潮流韩版宽松休闲衣服男潮牌工装连帽夹克男",
          guige: "黑色/XL(120-135斤)",
          tags: ["满60减10", "7天无理由退货", "运费险"],
          price: 79,
          cprice: 69
        }
      ]
    },
    {
      shopname: "小米之家旗舰店",
      isCoupon: true,
      list: [
        {
          image: "https://img12.360buyimg.com/n7/jfs/t1/192495/8/41694/55778/654ded4eF138ec2ac/953fc6e1f5b3531d.jpg",
          title: "Redmi Note11T Pro 5G 天玑8100 144HzLCD旗舰直屏 67W快充",
          guige: "玫瑰蓝/5G(天玑8100)",
          tags: ["满1000减100", "运费险"],
          price: 1199,
          cprice: 1099
        },
        {
          image: "https://img14.360buyimg.com/n7/jfs/t1/227814/23/5514/38906/65682d3fF0f273d30/02864fac06c402dc.jpg",
          title: "小米14 徕卡光学镜头 光影猎人900 徕卡75mm浮动长焦 骁龙8Gen3 16+512 黑色",
          guige: "黑色/徕卡镜头(骁龙8Gen3)",
          tags: ["满3000减500", "运费险"],
          price: 4999,
          cprice: 4499
        }
      ]
    }
  ];
  const _sfc_main$h = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const cartList = vue.ref(cartJson);
      const searchText = vue.ref("");
      const tabsList = vue.ref([
        { name: "全部", count: 3 },
        { name: "跨店满减" },
        { name: "降价" },
        { name: "折扣" }
      ]);
      const tabsCurrent = vue.ref(0);
      const checkAll = vue.ref(false);
      const __returned__ = { cartList, searchText, tabsList, tabsCurrent, checkAll, ref: vue.ref, get cartJson() {
        return cartJson;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_input = resolveEasycom(vue.resolveDynamicComponent("ua-input"), __easycom_0$8);
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_2$4);
    const _component_u_checkbox = resolveEasycom(vue.resolveDynamicComponent("u-checkbox"), __easycom_3$1);
    const _component_u_tag = resolveEasycom(vue.resolveDynamicComponent("u-tag"), __easycom_2$1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    const _component_u_number_box = resolveEasycom(vue.resolveDynamicComponent("u-number-box"), __easycom_6);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_0$3);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_ua_layout, null, {
      header: vue.withCtx(() => [
        vue.createVNode(_component_ua_navbar, {
          back: "false",
          custom: "",
          fixed: "",
          bgcolor: "#fff",
          color: "#333",
          "z-index": "1000"
        }, {
          left: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "fs-36 ml-25" }, "购物车")
          ]),
          title: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "ulive__wrap-cart__sear" }, [
              vue.createVNode(_component_ua_input, {
                modelValue: $setup.searchText,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchText = $event),
                search: "",
                placeholder: "加绒毛衣"
              }, {
                suffix: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "welive-icon welive-icon-search fs-36" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ]),
          right: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "fs-30 ml-25" }, "编辑")
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_tabs, {
          modelValue: $setup.tabsCurrent,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.tabsCurrent = $event),
          list: $setup.tabsList,
          "is-scroll": true,
          "bg-color": "#fff"
        }, null, 8, ["modelValue", "list"])
      ]),
      footer: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__wrap-cart__footbar flexbox flex-alignc" }, [
          vue.createVNode(_component_u_checkbox, {
            modelValue: $setup.checkAll,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.checkAll = $event),
            shape: "circle"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("全选")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          vue.createElementVNode("view", { class: "infos flex1 flexbox flex-alignc" }, [
            vue.createElementVNode("view", { class: "price mr-20" }, [
              vue.createElementVNode("view", { class: "fs-28" }, [
                vue.createTextVNode("合计："),
                vue.createElementVNode("text", { class: "c-eb4868 fs-32" }, "￥6785.00")
              ]),
              vue.createElementVNode("view", { class: "fs-24 c-999" }, "优惠减: ￥636.00")
            ]),
            vue.createVNode(_component_u_button, {
              type: "error",
              shape: "circle",
              "custom-style": { margin: 0 }
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("去结算")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__wrap-cart__list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.cartList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: "ulive__wrap-cart__item"
              }, [
                vue.createElementVNode("view", { class: "ulive__wrap-cart__shopinfo flexbox flex-alignc" }, [
                  vue.createVNode(_component_u_checkbox, {
                    modelValue: item.checkAll,
                    "onUpdate:modelValue": ($event) => item.checkAll = $event,
                    shape: "circle"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vue.createElementVNode("view", { class: "flex1 flexbox flex-alignc" }, [
                    item.type ? (vue.openBlock(), vue.createBlock(_component_u_tag, {
                      key: 0,
                      text: item.type,
                      mode: "dark",
                      "bg-color": "#ff0000",
                      shape: "circle",
                      size: "mini"
                    }, null, 8, ["text"])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "text",
                      { class: "fs-30 ml-10" },
                      vue.toDisplayString(item.shopname),
                      1
                      /* TEXT */
                    ),
                    vue.createVNode(_component_uni_icons, {
                      type: "right",
                      size: "12"
                    })
                  ]),
                  item.isCoupon ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, [
                    vue.createVNode(_component_u_tag, {
                      text: "领券",
                      mode: "dark",
                      shape: "circle",
                      color: "#f00",
                      "bg-color": "#fee"
                    })
                  ])) : vue.createCommentVNode("v-if", true)
                ]),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.list, (gitem, gindex) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: gindex,
                      class: "ulive__wrap-cart__goodsinfo flexbox"
                    }, [
                      vue.createVNode(_component_u_checkbox, {
                        modelValue: gitem.checked,
                        "onUpdate:modelValue": ($event) => gitem.checked = $event,
                        shape: "circle"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      vue.createElementVNode("image", {
                        class: "gpic",
                        src: gitem.image,
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "ginfo flex1" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "title clamp1" },
                          vue.toDisplayString(gitem.title),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("view", { class: "guige flexbox flex-alignc" }, [
                          vue.createTextVNode(
                            vue.toDisplayString(gitem.guige) + " ",
                            1
                            /* TEXT */
                          ),
                          vue.createVNode(_component_uni_icons, {
                            type: "bottom",
                            size: "12",
                            color: "#999",
                            style: { "margin-left": "10rpx" }
                          })
                        ]),
                        gitem.tags ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "tags"
                        }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(gitem.tags, (tag, idx) => {
                              return vue.openBlock(), vue.createBlock(_component_u_tag, {
                                key: idx,
                                text: tag,
                                mode: "plain",
                                color: idx == 0 ? "#f00" : "#f90",
                                "border-color": idx == 0 ? "#f00" : "#f90",
                                size: "mini"
                              }, null, 8, ["text", "color", "border-color"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode("view", { class: "foot flexbox flex-alignc" }, [
                          vue.createElementVNode("view", { class: "price flex1 c-eb4868" }, [
                            vue.createTextVNode("￥"),
                            vue.createElementVNode(
                              "text",
                              { class: "fs-36" },
                              vue.toDisplayString(gitem.price),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createVNode(_component_u_number_box, {
                            min: 1,
                            max: 100
                          })
                        ])
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesCartIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-8039fbf1"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/cart/index.vue"]]);
  let index = 0;
  const _sfc_main$g = {
    __name: "ua-popup",
    props: {
      // 接收父组件中v-model的值
      modelValue: { type: Boolean, default: false },
      title: String,
      content: String,
      type: String,
      customStyle: { type: Object, default: null },
      icon: String,
      shade: { type: [Boolean, String], default: true },
      shadeClose: { type: [Boolean, String], default: true },
      opacity: { type: [Number, String], default: "" },
      round: Boolean,
      xclose: Boolean,
      xposition: { type: String, default: "right" },
      xcolor: { type: String, default: "#333" },
      anim: { type: String, default: "scaleIn" },
      position: String,
      follow: { type: Array, default: null },
      time: { type: [Number, String], default: 0 },
      zIndex: { type: [Number, String], default: "202107" },
      btns: {
        type: Array,
        default: null
      },
      // 打开弹框回调
      onOpen: Function,
      // 关闭弹框回调
      onClose: Function
    },
    emits: [
      "update:modelValue",
      "open",
      "close"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const instance = vue.getCurrentInstance();
      const opts = vue.ref({
        ...props2
      });
      const visible = vue.ref(false);
      const closeAnim = vue.ref(false);
      const stopTimer = vue.ref(null);
      const oIndex = vue.ref(props2.zIndex);
      const uuid2 = vue.computed(() => Math.floor(Math.random() * 1e4));
      const positionStyle = vue.ref({ position: "absolute", left: "-999px", top: "-999px" });
      const toastIcon = {
        loading: "data:image/gif;base64,R0lGODlhJQAlAJECAL3L2AYrTv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAJQAlAAACi5SPqcvtDyGYIFpF690i8xUw3qJBwUlSadmcLqYmGQu6KDIeM13beGzYWWy3DlB4IYaMk+Dso2RWkFCfLPcRvFbZxFLUDTt21BW56TyjRep1e20+i+eYMR145W2eefj+6VFmgTQi+ECVY8iGxcg35phGo/iDFwlTyXWphwlm1imGRdcnuqhHeop6UAAAIfkEBQoAAgAsEAACAAQACwAAAgWMj6nLXAAh+QQFCgACACwVAAUACgALAAACFZQvgRi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwXABEADAADAAACBYyPqcsFACH5BAUKAAIALBUAFQAKAAsAAAITlGKZwWoMHYxqtmplxlNT7ixGAQAh+QQFCgACACwQABgABAALAAACBYyPqctcACH5BAUKAAIALAUAFQAKAAsAAAIVlC+BGL3Z3IlxUmUuhtR2LzHhsiEFACH5BAUKAAIALAEAEQAMAAMAAAIFjI+pywUAIfkEBQoAAgAsBQAFAAoACwAAAhOUYJnAagwdjGq2amXGU1PuLEYBACH5BAUKAAIALBAAAgAEAAsAAAIFhI+py1wAIfkEBQoAAgAsFQAFAAoACwAAAhWUL4AIvdnciXFSZS6G1HYvMeGyIQUAIfkEBQoAAgAsFwARAAwAAwAAAgWEj6nLBQAh+QQFCgACACwVABUACgALAAACE5RgmcBqDB2MarZqZcZTU+4sRgEAIfkEBQoAAgAsEAAYAAQACwAAAgWEj6nLXAAh+QQFCgACACwFABUACgALAAACFZQvgAi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwBABEADAADAAACBYSPqcsFADs=",
        success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAwCAYAAABHYrdbAAADwElEQVRoQ+Way69URRCHf58xxJ0bYwwu3RjjxpVGjIkLExfGGE1Q8QXIQ0VQkYcgCr7fL0B8i28hNzEmmhBcGRasWPkP8Ae4cuXyZ4qcIXNhzpzuPufMnTtT21tVXfVNVXd1n4vmXGxvl3QTsHqAgnllYvsKSa9J2lwxWBiAmUsotm+ugNx2QVGcAzN3UGyvrYBcXdMlC3MDxfYlFYw9DVvGfXMBxfa1FZB7G4DcDxyfeSi275L0pqTrGoA8ABwLnZmGYnuHpHcTTtg1wC8zfSTbvrJql40JQB4Efh7Wm7lKsX2LpPck3VgCZObax/Z6SV8nwAiVh4CfRunORKXYvrRql92JQB4GfqzTXfZQbMep8pGk2xOBPAL8ME53WUOxfbekODUuSwTyKPB9k+6yhWJ7l6S3mxIc+vta4LsU/VootjcAX6U4maSO7askfSLpnox11wHfpuqPhGI7duU1kqLUDgFnUh32qWf7VkkLkmIOSZX1wNFU5ZFHsu1wEDfJgZyVdBCIzWzJJCpX0peZATwGfJNps3jMt/25pE01Tn6tquav3EXa6NteISniGv6hUlxG+6fOLIv8nW8f2wclbW1Y7Z+qauLFqnexfb2k3yRdk7nYxjb74TkotuPSFJenVPkzbp5Ab1VjO95Mj6cGNKS3Cchts8WVYvtVSfsKFv+vaqfUKTJ5icSqHeVvM/BF8kI1itg+IGl/C0enJb3QRdXYXinpD0k3FMTzOBB7T2sZtE9bMBHIEWBLaUS275B0otD+CeCzQtuLzIY32i7A/C3p6dyqsf26pL2FST0JfFpoO9Js0fDWQSsNFkmqGttxZzkpKYayEtkCHCkxHGdz0UTbIZgY+mKaHHlC2V4l6ZSkeGUvkaeAGPc7l7oxv4tWqq0a23FivdUim63A4Rb2Y03HXQi7BBND3+qoGtu/S7qzRULbgEMt7BtNxz4ddNhKg0D+lXR5Y1T1CrGJx+TdqzS+p/QApjShZ4CPS41z7BqhhLMpAPPsJG/pSVCWGMx24MOcX7qtbjKUJQLzHPBB2yRz7bOgTBjMDuD93IS60M+GMiEwO4H4yrckUgSlZzC7gJSP4r0BK4bSE5jdwDu9ZZvouBWUjsE8D+R8x0lMMV+tNZSOwOwB2tyF8jMfY9EJlJZg9gLxn0ZTI51BKQQTz5hvTA2NKpBOoWSC2QfEi9vUSedQEsG8CEzk21EJ8V6gNIB5CYjPKlMrvUGpAbMfeGVqafS1p1yY8NCzwwHg5WkHEvH1WikDAAEGiOfNZSH/A4EiPTqzdGO9AAAAAElFTkSuQmCC",
        fail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADUUlEQVRoQ92Zu5MOQRTFz0n5A7AlV0XknRJ4C0gWRUJAUSQEFGVZiiIgoSgCEsojIfAWkHpHtkquPP4A0qO6amarzTfT9/bM7Nr1hbu3u8+v+5xv5utLTPMPp7l+/J8AkmYAmAfgG8mf//KUJM0CMATgC8nfVS0DJyBpPoD7ABYUxetJPv0XEJLWAXhSrP0ZwDDJsVjLXwCSZgJ4E4kva1eSfD2ZEJJWAHhVWTNALCf5q/x7FWApgLcNQicNokF8KWsZyXdNAMFvPxI7PeEQhvggbXacy7oMxL6rY5kwCIf4gTzWfo06JlpN8mWfmZC0CsCL3NNvfA44IDaSfNwHhKQNAB7lig/1yQeZA2IzyYddICRtAvCgjXgTIBQ4ILaQDM+N7I+kYQD32op3ARQQlj93kLydQyBpO4BbiTGunLnfhRw+3UXypgdC0k4ANxK17ny5AYqTsPy6h+T1FISk3QCuJWqycpUFUEBYvj1A8nKdQEn7AVxKiM/OUzZAAWH59xDJi7FQSQcBXEiIz86RO8QNu2n5+AjJ8wXwYQDnEuLd+anO0eoEykkcfh4pak8lxJu5SWWqE0Cxu5avU+s35sXzbdbJQpn+rtMzkBOv6Liu8wlEdrJ8Hq87no82oicEoLDTcQApv4eyEZKnuwovx/d2AgXASQAnDHGjJENdL5/eACR5xJeie4PoBSBTfK8QnQFaiu8NohOAQ/xooTSVi052ag3gEV+GNac2N9mtANoIajPGA5MN0EVIl7FNMFkAko4COJPYGdPPDohjJM96dj/rXcjxPm+Kj147rGeG+z3JdQKS9gK40mXnq2MdJ7GP5FXrJEwAxw9w9863gDB/6FgXW1sB3EnsQpZf6+Zx5GobybvZIXbcmLl9atnAka/Gm4qmy901AJ4lFnb50xIe/9+Rs7Ukn1fnrLteXwzgfWJx05c5wisQ1kXBEpIf4jHVDs2c0NhLCEj6sa3wCoSVuyGS38sxVYCFAD42CMm6MesCY+RvEclPTQChvRp6ZGWHsqyr9V8XkdZYSXU5DE2+0CMbb7d62qwDvrMW7+v/kuI82m3W6FEf2q2hX/w19ltfwnLmkRRyORfAWNxerbVQzsRTpdZ8lZgqQrOfxFNdeKnvD8/WeEC+PziBAAAAAElFTkSuQmCC",
        warn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEZUlEQVRoQ+2ZV6hdRRSG///BB/EtNoxdvPqg+CYIxl6JBUsssWBiLNii2BVLYiFN0dgQFb2KJSZYYosaFRs27BILKDZ8MhbsBf1lXda+LOeeMrPPzj25kIHzsme1b9aZmbXXJsb44BiPH6sA+p3BFZYBSScA2MF/qwF4F8AikoNNQq8QAEkLARzSJtClJPdsCqJxgC7BV3HPIDmzCYhGASTNAXBuZmCTSS7IlG0r1hiApO0BvJx4WgRgBoC/ANwKYOcw/w6ACSR/6wWiSYDFAPYPwXziAS63Z5L2APB0EuxMkgZYezQCIGkagNuSKKaRvD0+k3Q9gFPDs98d8u26BD0DSFrb/zpbhCAWkzwgDUrShi67UZi7n+Th/QSYB+DsEIB8VV9pFZSkUwDckMwdSfLeOhA9ZUCSXVQvJo7nkDy/UzCSngIQ74L3HPqXUoheAR4FsG9w+pEH8n0XgN0APJPIXE7yklEDkHQ8gFsSh1NzSwVJ8wFMD/p/OvybJRC1MiBpXd+MmwdnD5E8KDl1rJyYCOBLAIMkv6jmJa3vNjYJOlYrHToaAFcDODM4+sdX77UEwDbmZH9mAFOT+ZMA3JQEfDTJu3MhijMgaScAzycOZpG8sMWxaSfS8CA5wp+kJQD2DmIf+GL8lANRB+Bx/1tU9pe5wx9rAuwC4LlE90qSFzUOIOlEADcnho8heVcrZ5K6ZsD0JF0D4Ixg429flDe6QWRnQNJ6vuk2C0YfIDmpnZMCgGLblc8SgOJVygXwLBRltwhAUq3/aQmAQ2Tvr1KAWidFDYDsEy4bQFLts7oUwLOQdcdkAUga7xt307BRs29LSZ8DqG7aJSTtVu442tzyD5I8uJVix00s6VoApwfFonpFkr1tXer6AyQ/7QbgWWhVZ00heWeq3xZA0q4Ank0UriB5cU4QvcpIegzAPsHOh343/BBtdwJ4EsBeQfh9N/Bzr8Hl6EvaEcALiexskhd0BZB0MoAbE+WjSN6T47ySkdS2Gs2xI+kqAGcF2X99EV9tu4klbeAbd+OguJDkYTlOo4ykjtVoN3uS1vFYBoLswyQP7ARwHYDTgsIfTv1WN4fpfHIKLSO5dQ0bx3lPKaoeS/IOe/C/PSBpdwBLEyeXkaxOkiL/ySm0FUnbiMVD0iMA9guKH/uifpcCWOPJGlDVsI6ydc9+LfbaoIKkCQBeSkzOJXneMICkKQCG0hLGESTvazCW2qYkzQVwTmJgIAKkhdQCktXrYG3HTSlKWss39JbB5vQIEK99k9mO5OtNBdCEHUnWQLNGWjUGI4A1ldYIk2uS7NjfaSKoEht+r9jHk2o8EQHs9W3bMNlz57gkuBzZFh9P5kUAawfOSgx9BuDrHOOjIGPNY6uO45gYAbbx/r01rcbCGCrr03vAWuKzAcSdvjLCLCdpbf2RH7r9uLKPEFaTpynrN8y3/qnWWvRDo1M5vToAK6LG9Ttq9/8NgK9I2kvV8Mhuq6wkECPCWAXQ78z8B8atzObFwyTDAAAAAElFTkSuQmCC",
        info: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFaUlEQVRoQ+1ZW6xdUxQd44sQlAZRVQmaoF6ltIQEH94VJJ6tih9NvaIVjfrBD9JSDfHqH1WvCqKlCNFEoxWvKupDSRQVBC3RkEiGjNu1m3XX3fvstc6+0jQxk5OTc/Z8jTX3nmuusYkdXLiD54//AVQVlHQAgMkAjgAwJvpYZUP0+QzAUpLfDkf1O1VA0rEAzgRwBoBTCxNaAeANAK+T/KjQdpt6XwAk7Q1gFoCZAHbqN3iw+xvA/QDmk/y51FcxAEnXhuQPrgm2EsBbAL4EsD58W20sgEPC91kAJtbYfhVAPFwCogiApCcAXJkEWApgCYA3Sf6QE1ySwZwN4AoAkxKbRSSn5fixTjYASZ8AOCpy7MQXklyWG6xOT9JlAK4C4MpUspbk0Tl+swBIUuJsDsl7cgLk6ki6FcDdsT7J1vxaFWpW/iKSL+YmVqIn6UIAL0Q2y0me08tHTwCSngNwceUgZ0VKEm7STSo+j+TsJt1GAJIeBTA9MpxA8sPcBCXtA6AKPJfkTwW2xwH4INKfQdL5DJFaAJIOA/Bx1OOnk1yYm4D1JLmVuttY1pN0K80WSdcAeCwYePeeSHJL6qAJwFwAtwTl10i65WWLpGPCAsQ240muyXaydRGWR91pNsl5rQAkjQbgrd27reVyks8UBp4A4P3E5niS8W3R6jK02KeDouepE0j+GBsOqYCkGwA8EJRWkzyxNVKiEDYq30KxjCXp3blIJK2KNrsbST7YBuDVsEtabybJBUURt5beD/CglQKwb8mDXMWUdFOYlfzXkLY6qAKS9gCwKUp4HMl1fQDwgPdXYrczSQ9uRSLpcACfR0YjSG6ufqcAPJssDhfXkBxfFC1SlvQngF3CX1tI7trBlzuiG4NlCsmnmgB4rHXJLHeSvKND0O8BjAr2G0nu38GX87g92C8g6TF+QNIKeES4IFybSrKqRnFsSS67y29ZR3JcsZNgIGkKgCfDz5dIeuSoBRCXahLJ9zoEfRdA1cFWkTypgy+fH1YH+0G3dlqB3wCMCIojSf7aIWjczVqHsl5xJO0F4Jegs4nknk0VcAdyJ7J0BeDN79Lg61mSnvv7kgTAZpLVIg95BtYCODJE6XoLeY7xPGPxwSceDIuASIpvoU9JbjtYpbeQT1fnBu9dH+J4nuo5ErehSR7iV0ie13QL+UA9I1zs2kbd6uYHX7NIukX3JZLiNvoISRMLA5JWwBceCtdWkjylr4jBSNLNA0HI+zr6eQfAycHHdSS3MRcpALNrnvoqGZXLNHRJsJetpP0AbIx0xsSsXt00+nbEsk0juei/Si7HryTTOKZzLCtInhbb1QGYA+CuoGQO8/ycQHU6kkw5+hYyhdiXSHo5cK62v43kYOYi9SopPY9O7of7keSt3yOAZTHJqaUIJLnbmH+qZMi5vOlIGffw4ipI8uD2XZLwaJIe8LIlWf3avaQJQFqFYiJL0u8AdgvZ/kFy9+zMtx6KUqKrlhXpRavEVXDsIkJLksffilN6vmQ0ryG4GnfyNmIr7r9+GFuZvJJVbtJNiK2e+1FrQpK+CW9bGh+k4UjaPmoayAaSB/by3wogOE7J3WKiqw1kQmQNqOdUPAtAAJHS6+ZN7yWZ8j9tuQ66Lul0ANcD2HbKAjC89HoVMSV7AfwDwHPO4yS/KMlckl9seNy+OrFbQvKSXF/ZFYhApN2puuTjqF/ceef0Sc4nqOpE5xPVSAD+dmfyqh9ak2TxuaEYQPSwefWqA0vugjXpmTh28tnsd+WoLwBRNbzhebs3+Vv34q4XMBMGJm+X9ZP4sACIs5N0UDjNmZrv9aLbz4pPVV93LdtApxoOJ9vTx/8AtufqO/a/U+oHT19sV/UAAAAASUVORK5CYII="
      };
      const open2 = (options) => {
        if (visible.value)
          return;
        opts.value = Object.assign({}, props2, options);
        visible.value = true;
        let _index = ++index;
        oIndex.value = _index + parseInt(opts.value.zIndex);
        emit("open");
        typeof opts.value.onOpen === "function" && opts.value.onOpen();
        if (opts.value.follow) {
          vue.nextTick(() => {
            let winW = uni.getSystemInfoSync().windowWidth;
            let winH = uni.getSystemInfoSync().windowHeight;
            formatAppLog("log", "at components/ua-popup/ua-popup.vue:129", "坐标点信息：", opts.value.follow);
            getDom(uuid2.value).then((res) => {
              formatAppLog("log", "at components/ua-popup/ua-popup.vue:131", "Dom尺寸信息：", res);
              if (!res)
                return;
              let pos = getPos(opts.value.follow[0], opts.value.follow[1], res.width + 15, res.height + 15, winW, winH);
              positionStyle.value.left = pos[0] + "px";
              positionStyle.value.top = pos[1] + "px";
            });
          });
        }
        if (opts.value.time) {
          if (stopTimer.value)
            clearTimeout(stopTimer.value);
          stopTimer.value = setTimeout(() => {
            close();
          }, parseInt(opts.value.time) * 1e3);
        }
      };
      const close = () => {
        if (!visible.value)
          return;
        closeAnim.value = true;
        setTimeout(() => {
          visible.value = false;
          closeAnim.value = false;
          emit("update:modelValue", false);
          emit("close");
          typeof opts.value.onClose === "function" && opts.value.onClose();
          positionStyle.value.left = "-999px";
          positionStyle.value.top = "-999px";
          stopTimer.value && clearTimeout(stopTimer.value);
        }, 200);
      };
      const handleShadeClick = () => {
        if (JSON.parse(opts.value.shadeClose)) {
          close();
        }
      };
      const handleBtnClick = (e, index2) => {
        let btn = opts.value.btns[index2];
        if (!(btn == null ? void 0 : btn.disabled)) {
          typeof btn.click === "function" && btn.click(e);
        }
      };
      const getDom = (id) => {
        return new Promise((resolve, inject) => {
          uni.createSelectorQuery().in(instance).select("#uapopup-" + id).fields({
            size: true
          }, (data) => {
            resolve(data);
          }).exec();
        });
      };
      const getPos = (x, y, ow, oh, winW, winH) => {
        let l = x + ow > winW ? x - ow : x;
        let t2 = y + oh > winH ? y - oh : y;
        return [l, t2];
      };
      vue.onMounted(() => {
        if (props2.modelValue) {
          open2();
        }
      });
      vue.watch(() => props2.modelValue, (val) => {
        if (val) {
          open2();
        } else {
          close();
        }
      });
      __expose({
        open: open2,
        close
      });
      const __returned__ = { get index() {
        return index;
      }, set index(v) {
        index = v;
      }, props: props2, emit, instance, opts, visible, closeAnim, stopTimer, oIndex, uuid: uuid2, positionStyle, toastIcon, open: open2, close, handleShadeClick, handleBtnClick, getDom, getPos, onMounted: vue.onMounted, ref: vue.ref, computed: vue.computed, watch: vue.watch, nextTick: vue.nextTick, getCurrentInstance: vue.getCurrentInstance };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["ua__popup", { "ua__popup-closed": $setup.closeAnim }])
      },
      [
        $setup.opts.shade && $setup.opts.shade != "false" ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "uapopup__overlay",
            onClick: $setup.handleShadeClick,
            style: vue.normalizeStyle({ "opacity": $setup.opts.opacity >= 0 ? $setup.opts.opacity : "", "z-index": $setup.oIndex - 1 })
          },
          null,
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: "uapopup__wrap",
            style: vue.normalizeStyle({ "z-index": $setup.oIndex })
          },
          [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uapopup__child", ["anim-" + $setup.opts.anim, $setup.opts.type && "popui__" + $setup.opts.type, $setup.opts.round && "round", $setup.opts.position]]),
              id: "uapopup-" + $setup.uuid,
              style: vue.normalizeStyle([$setup.opts.follow && $setup.positionStyle, $setup.opts.customStyle])
            }, [
              $setup.opts.title || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uapopup__title"
              }, [
                _ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("rich-text", {
                  key: 1,
                  nodes: $setup.opts.title
                }, null, 8, ["nodes"]))
              ])) : vue.createCommentVNode("v-if", true),
              $setup.opts.type == "toast" && $setup.opts.icon ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 1,
                class: vue.normalizeClass(["toast__icons", ["toast__icons-" + $setup.opts.icon]]),
                src: $setup.toastIcon[$setup.opts.icon],
                mode: "widthFix"
              }, null, 10, ["src"])) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" //内容 "),
              $setup.opts.content || _ctx.$slots.content ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "uapopup__content"
              }, [
                _ctx.$slots.content ? vue.renderSlot(_ctx.$slots, "content", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("rich-text", {
                  key: 1,
                  nodes: $setup.opts.content
                }, null, 8, ["nodes"]))
              ])) : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
              $setup.opts.btns ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 3,
                class: "uapopup__actions"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.opts.btns, (btn, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index2,
                      class: vue.normalizeClass(["btn", { "disabled": btn.disabled }]),
                      style: vue.normalizeStyle(btn.style),
                      onClick: ($event) => $setup.handleBtnClick($event, index2)
                    }, [
                      vue.createElementVNode("rich-text", {
                        nodes: btn.text
                      }, null, 8, ["nodes"])
                    ], 14, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $setup.opts.xclose ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 4,
                  class: vue.normalizeClass(["uapopup__xclose", $setup.opts.xposition]),
                  style: vue.normalizeStyle({ "color": $setup.opts.xcolor }),
                  onClick: $setup.close
                },
                null,
                6
                /* CLASS, STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ], 14, ["id"])
          ],
          4
          /* STYLE */
        )
      ],
      2
      /* CLASS */
    )), [
      [vue.vShow, $setup.visible]
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-f29bf096"], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/ua-popup/ua-popup.vue"]]);
  var isVue2 = false;
  function set$1(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url2, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url2) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url2, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url2 = reader.result;
        if (typeof url2 !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url2;
        } else {
          location.assign(url2);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url2 = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url2);
      else
        location.href = url2;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url2);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error2) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error2) {
                    getters[key] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set$1(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set$1(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set$1(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set$1(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  const authStore = defineStore("authState", {
    state: () => ({
      // 登录验证key
      authorization: null,
      userInfo: null
    }),
    getters: {},
    actions: {
      setAuthorization(data) {
        this.authorization = data;
      },
      // 设置登录信息
      setUserInfo(data) {
        this.userInfo = data;
      },
      // 退出登录
      logout() {
        this.authorization = null;
        this.userInfo = null;
      }
    },
    // 本地持久化存储(默认存储localStorage)
    unistorage: true
  });
  const _imports_0$2 = "/static/avatar/uimg1.jpeg";
  const _imports_1$1 = "/static/icon_mine_vip.png";
  const _imports_2$1 = "/static/order1.png";
  const _imports_3$1 = "/static/order2.png";
  const _imports_4 = "/static/order3.png";
  const _imports_5 = "/static/order4.png";
  const _imports_6 = "/static/order5.png";
  const _sfc_main$f = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const { globalData } = getApp();
      const customBarH = vue.ref(globalData.customBarH);
      const authState = authStore();
      const uapopRef = vue.ref();
      const toOrdList = () => {
        uni.navigateTo({
          url: "/pages/order/list"
        });
      };
      const handleAbout = () => {
        const ua = uapopRef.value;
        ua.open({
          content: `<div style="text-align:center; padding:25px 10px;">
			<img src="/static/logo.png" height="50" />
				<h2 class="c-19be6b fs-42 mt-20">uniapp-welive</h2>
			<div class="c-2979ff fs-28 mt-10">基于<em>Uniapp+Vue3+Pinia+vkuview</em>跨多端仿微信/抖音短视频直播</div>
			<p class="c-aaa fs-24 mt-20">Create by Andy @2023/12</p>
				<p class="c-aaa fs-24 mt-10">282310962@qq.com</p>
			</div>`,
          customStyle: { "border-radius": "6px", "max-width": "70%", "overflow": "hidden" },
          xclose: true
        });
      };
      const handleLogout = () => {
        const ua = uapopRef.value;
        ua.open({
          type: "android",
          content: "确认要退出账号吗?",
          customStyle: { "border-radius": "6px", "max-width": "70%", "overflow": "hidden" },
          btns: [
            {
              text: "取消",
              click: () => {
                ua.close();
              }
            },
            {
              text: "退出",
              style: "color: #fa3535",
              click: () => {
                ua.close();
                uni.redirectTo({
                  url: "/pages/auth/login"
                });
                authState.logout();
              }
            }
          ]
        });
      };
      const __returned__ = { globalData, customBarH, authState, uapopRef, toOrdList, handleAbout, handleLogout, ref: vue.ref, get authStore() {
        return authStore;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$5);
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_u_tag = resolveEasycom(vue.resolveDynamicComponent("u-tag"), __easycom_2$1);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_0$3);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    const _component_ua_popup = resolveEasycom(vue.resolveDynamicComponent("ua-popup"), __easycom_1$1);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_ua_layout, null, {
      header: vue.withCtx(() => [
        vue.createVNode(_component_ua_navbar, {
          back: "false",
          custom: "",
          title: "我的",
          size: "36rpx",
          transparent: "",
          bgcolor: "transparent"
        }, {
          right: vue.withCtx(() => [
            vue.createVNode(_component_u_icon, {
              name: "info-circle",
              size: "36",
              onClick: $setup.handleAbout
            }),
            vue.createElementVNode("text", { class: "welive-icon welive-icon-peizhi fs-36 ml-25" })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode(
          "view",
          {
            class: "ulive__ucenter-hdbg",
            style: vue.normalizeStyle({ "height": `${$setup.customBarH + 10}px` })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "ulive__ucenter" }, [
          vue.createElementVNode("view", { class: "avatarinfo flexbox flex-alignc" }, [
            vue.createElementVNode("image", {
              class: "uimg",
              src: _imports_0$2,
              mode: "aspectFill"
            }),
            vue.createElementVNode("view", { class: "flex1 ml-20" }, [
              vue.createElementVNode("view", { class: "uname flexbox flex-alignc" }, [
                vue.createTextVNode("Andy"),
                vue.createElementVNode("text", { class: "welive-icon welive-icon-renzheng c-2979ff ml-10 mr-10" }),
                vue.createVNode(_component_u_tag, {
                  text: "体验版",
                  mode: "dark",
                  size: "mini",
                  color: "#fff",
                  "bg-color": "#ccc"
                })
              ]),
              vue.createElementVNode("view", { class: "uid" }, "UID: 982125")
            ])
          ]),
          vue.createElementVNode("view", { class: "balancewrap" }, [
            vue.createElementVNode("view", { class: "balanceinfo flexbox flex-alignc" }, [
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("text", { class: "welive-icon welive-icon-wallet mr-10" }),
                vue.createTextVNode("个人收益"),
                vue.createElementVNode("text", { class: "ml-30" }, "￥168.00")
              ]),
              vue.createVNode(_component_u_button, {
                shape: "circle",
                "custom-style": { margin: 0, height: "28px" }
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("去提现")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "balancegrid flexbox" }, [
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("text", { class: "c-999 fs-28" }, "抖币"),
                vue.createElementVNode("view", { class: "fs-32" }, "0")
              ]),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("text", { class: "c-999 fs-28" }, "卡券"),
                vue.createElementVNode("view", { class: "fs-32" }, "0")
              ]),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("text", { class: "c-999 fs-28" }, "银行卡"),
                vue.createElementVNode("view", { class: "fs-32" }, "2")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "mt-25" }, [
            vue.createElementVNode("image", {
              src: _imports_1$1,
              mode: "widthFix",
              style: { "width": "100%" }
            })
          ]),
          vue.createElementVNode("view", {
            class: "orderwrap",
            onClick: $setup.toOrdList
          }, [
            vue.createElementVNode("view", { class: "fs-32 flexbox flex-alignc" }, [
              vue.createElementVNode("view", { class: "flex1" }, "我的订单"),
              vue.createVNode(_component_uni_icons, {
                type: "right",
                color: "#999",
                size: "16"
              })
            ]),
            vue.createElementVNode("view", { class: "ordlist flexbox" }, [
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("image", {
                  class: "ordimg",
                  src: _imports_2$1,
                  mode: "widthFix"
                }),
                vue.createElementVNode("view", null, "待付款")
              ]),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("image", {
                  class: "ordimg",
                  src: _imports_3$1,
                  mode: "widthFix"
                }),
                vue.createElementVNode("view", null, "待拼团")
              ]),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("image", {
                  class: "ordimg",
                  src: _imports_4,
                  mode: "widthFix"
                }),
                vue.createElementVNode("view", null, "待发货")
              ]),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("image", {
                  class: "ordimg",
                  src: _imports_5,
                  mode: "widthFix"
                }),
                vue.createElementVNode("view", null, "待收货")
              ]),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createElementVNode("image", {
                  class: "ordimg",
                  src: _imports_6,
                  mode: "widthFix"
                }),
                vue.createElementVNode("view", null, "退款/售后")
              ])
            ])
          ]),
          vue.createElementVNode("view", { style: { "margin": "50rpx auto", "width": "350rpx" } }, [
            vue.createVNode(_component_u_button, {
              shape: "circle",
              onClick: $setup.handleLogout
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("退出")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        vue.createVNode(
          _component_ua_popup,
          { ref: "uapopRef" },
          null,
          512
          /* NEED_PATCH */
        )
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-f97bc692"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/my/index.vue"]]);
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$1 = {
    "uni-countdown.day": "day",
    "uni-countdown.h": "h",
    "uni-countdown.m": "m",
    "uni-countdown.s": "s"
  };
  const zhHans$1 = {
    "uni-countdown.day": "天",
    "uni-countdown.h": "时",
    "uni-countdown.m": "分",
    "uni-countdown.s": "秒"
  };
  const zhHant$1 = {
    "uni-countdown.day": "天",
    "uni-countdown.h": "時",
    "uni-countdown.m": "分",
    "uni-countdown.s": "秒"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const {
    t: t$1
  } = initVueI18n(messages$1);
  const _sfc_main$e = {
    name: "UniCountdown",
    emits: ["timeup"],
    props: {
      showDay: {
        type: Boolean,
        default: true
      },
      showColon: {
        type: Boolean,
        default: true
      },
      start: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      splitorColor: {
        type: String,
        default: "#333"
      },
      day: {
        type: Number,
        default: 0
      },
      hour: {
        type: Number,
        default: 0
      },
      minute: {
        type: Number,
        default: 0
      },
      second: {
        type: Number,
        default: 0
      },
      timestamp: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        timer: null,
        syncFlag: false,
        d: "00",
        h: "00",
        i: "00",
        s: "00",
        leftTime: 0,
        seconds: 0
      };
    },
    computed: {
      dayText() {
        return t$1("uni-countdown.day");
      },
      hourText(val) {
        return t$1("uni-countdown.h");
      },
      minuteText(val) {
        return t$1("uni-countdown.m");
      },
      secondText(val) {
        return t$1("uni-countdown.s");
      },
      timeStyle() {
        const {
          color: color2,
          backgroundColor,
          fontSize
        } = this;
        return {
          color: color2,
          backgroundColor,
          fontSize: `${fontSize}px`,
          width: `${fontSize * 22 / 14}px`,
          // 按字体大小为 14px 时的比例缩放
          lineHeight: `${fontSize * 20 / 14}px`,
          borderRadius: `${fontSize * 3 / 14}px`
        };
      },
      splitorStyle() {
        const { splitorColor, fontSize, backgroundColor } = this;
        return {
          color: splitorColor,
          fontSize: `${fontSize * 12 / 14}px`,
          margin: backgroundColor ? `${fontSize * 4 / 14}px` : ""
        };
      }
    },
    watch: {
      day(val) {
        this.changeFlag();
      },
      hour(val) {
        this.changeFlag();
      },
      minute(val) {
        this.changeFlag();
      },
      second(val) {
        this.changeFlag();
      },
      start: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal) {
            this.startData();
          } else {
            if (!oldVal)
              return;
            clearInterval(this.timer);
          }
        }
      }
    },
    created: function(e) {
      this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
      this.countDown();
    },
    unmounted() {
      clearInterval(this.timer);
    },
    methods: {
      toSeconds(timestamp, day, hours, minutes, seconds) {
        if (timestamp) {
          return timestamp - parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3, 10);
        }
        return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
      },
      timeUp() {
        clearInterval(this.timer);
        this.$emit("timeup");
      },
      countDown() {
        let seconds = this.seconds;
        let [day, hour, minute, second] = [0, 0, 0, 0];
        if (seconds > 0) {
          day = Math.floor(seconds / (60 * 60 * 24));
          hour = Math.floor(seconds / (60 * 60)) - day * 24;
          minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
          second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
        } else {
          this.timeUp();
        }
        if (day < 10) {
          day = "0" + day;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        if (second < 10) {
          second = "0" + second;
        }
        this.d = day;
        this.h = hour;
        this.i = minute;
        this.s = second;
      },
      startData() {
        this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
        if (this.seconds <= 0) {
          this.seconds = this.toSeconds(0, 0, 0, 0, 0);
          this.countDown();
          return;
        }
        clearInterval(this.timer);
        this.countDown();
        this.timer = setInterval(() => {
          this.seconds--;
          if (this.seconds < 0) {
            this.timeUp();
            return;
          }
          this.countDown();
        }, 1e3);
      },
      update() {
        this.startData();
      },
      changeFlag() {
        if (!this.syncFlag) {
          this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
          this.startData();
          this.syncFlag = true;
        }
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-countdown" }, [
      $props.showDay ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.d),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showDay ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 1,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($options.dayText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.h),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($props.showColon ? ":" : $options.hourText),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.i),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($props.showColon ? ":" : $options.minuteText),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.s),
        5
        /* TEXT, STYLE */
      ),
      !$props.showColon ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($options.secondText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-c592f7f2"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.vue"]]);
  const en = {
    "uni-goods-nav.options.shop": "shop",
    "uni-goods-nav.options.cart": "cart",
    "uni-goods-nav.buttonGroup.addToCart": "add to cart",
    "uni-goods-nav.buttonGroup.buyNow": "buy now"
  };
  const zhHans = {
    "uni-goods-nav.options.shop": "店铺",
    "uni-goods-nav.options.cart": "购物车",
    "uni-goods-nav.buttonGroup.addToCart": "加入购物车",
    "uni-goods-nav.buttonGroup.buyNow": "立即购买"
  };
  const zhHant = {
    "uni-goods-nav.options.shop": "店鋪",
    "uni-goods-nav.options.cart": "購物車",
    "uni-goods-nav.buttonGroup.addToCart": "加入購物車",
    "uni-goods-nav.buttonGroup.buyNow": "立即購買"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages);
  const _sfc_main$d = {
    name: "UniGoodsNav",
    emits: ["click", "buttonClick"],
    props: {
      options: {
        type: Array,
        default() {
          return [{
            icon: "shop",
            text: t("uni-goods-nav.options.shop")
          }, {
            icon: "cart",
            text: t("uni-goods-nav.options.cart")
          }];
        }
      },
      buttonGroup: {
        type: Array,
        default() {
          return [
            {
              text: t("uni-goods-nav.buttonGroup.addToCart"),
              backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
              color: "#fff"
            },
            {
              text: t("uni-goods-nav.buttonGroup.buyNow"),
              backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
              color: "#fff"
            }
          ];
        }
      },
      fill: {
        type: Boolean,
        default: false
      },
      stat: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(index2, item) {
        this.$emit("click", {
          index: index2,
          content: item
        });
      },
      buttonClick(index2, item) {
        if (uni.report && this.stat) {
          uni.report(item.text, item.text);
        }
        this.$emit("buttonClick", {
          index: index2,
          content: item
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-goods-nav" }, [
      vue.createCommentVNode(" 底部占位 "),
      vue.createElementVNode("view", { class: "uni-tab__seat" }),
      vue.createElementVNode("view", { class: "uni-tab__cart-box flex" }, [
        vue.createElementVNode("view", { class: "flex uni-tab__cart-sub-left" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.options, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: "flex uni-tab__cart-button-left uni-tab__shop-cart",
                onClick: ($event) => $options.onClick(index2, item)
              }, [
                vue.createElementVNode("view", { class: "uni-tab__icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    size: "20",
                    color: "#646566"
                  }, null, 8, ["type"]),
                  vue.createCommentVNode(' <image class="image" :src="item.icon" mode="widthFix" /> ')
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "uni-tab__text" },
                  vue.toDisplayString(item.text),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "flex uni-tab__dot-box" }, [
                  item.info ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: vue.normalizeClass([{ "uni-tab__dots": item.info > 9 }, "uni-tab__dot"]),
                      style: vue.normalizeStyle({
                        "backgroundColor": item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
                        color: item.infoColor ? item.infoColor : "#fff"
                      })
                    },
                    vue.toDisplayString(item.info),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-tab__right": $props.fill }, "flex uni-tab__cart-sub-right"])
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.buttonGroup, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  style: vue.normalizeStyle({ background: item.backgroundColor, color: item.color }),
                  class: "flex uni-tab__cart-button-right",
                  onClick: ($event) => $options.buttonClick(index2, item)
                }, [
                  vue.createElementVNode(
                    "text",
                    {
                      style: vue.normalizeStyle({ color: item.color }),
                      class: "uni-tab__cart-button-right-text"
                    },
                    vue.toDisplayString(item.text),
                    5
                    /* TEXT, STYLE */
                  )
                ], 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ])
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-8226c5e1"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"]]);
  const _sfc_main$c = {
    __name: "goods-nav",
    emits: ["click", "buttonClick"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const goodsNavOptions = vue.ref([
        { icon: "heart", text: "收藏" },
        { icon: "cart", text: "购物车", info: 3, infoBackgroundColor: "#ff007f", infoColor: "#fff" }
      ]);
      const goodsNavButtonGroups = vue.ref([
        { text: "加入购物车", backgroundColor: "#e0eeff", color: "#2979ff" },
        { text: "立即购买", backgroundColor: "#2979ff", color: "#fff" }
      ]);
      const handleGoodsNavClick = (e) => {
        emit("click", e);
      };
      const handleGoodsNavButtonClick = (e) => {
        emit("buttonClick", e);
      };
      const __returned__ = { emit, goodsNavOptions, goodsNavButtonGroups, handleGoodsNavClick, handleGoodsNavButtonClick, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_0$2);
    return vue.openBlock(), vue.createBlock(_component_uni_goods_nav, {
      options: $setup.goodsNavOptions,
      "button-group": $setup.goodsNavButtonGroups,
      fill: true,
      onClick: $setup.handleGoodsNavClick,
      onButtonClick: $setup.handleGoodsNavButtonClick,
      style: { "width": "100%" }
    }, null, 8, ["options", "button-group"]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/curry/Desktop/uni-weLive/components/goods-nav/goods-nav.vue"]]);
  const _sfc_main$b = {
    __name: "detail",
    props: {
      rid: { type: [Number, String] }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props2 = __props;
      onLoad((option) => {
        liveJson.map((item, index2) => {
          if (parseInt(item.id) == parseInt(props2.rid)) {
            goodsItem.value = item;
          }
        });
      });
      const goodsItem = vue.ref({});
      const navbarBg = vue.ref("transparent");
      onPageScroll((e) => {
        let scrollTop = e.scrollTop;
        if (scrollTop < 200)
          scrollTop = 200;
        navbarBg.value = "rgba(41, 121, 255, " + (scrollTop - 200) / 100 + ")";
      });
      const handleGoodsNavClick = (e) => {
        if (e.index == 1) {
          uni.switchTab({
            url: "/pages/cart/index"
          });
        }
      };
      const handleGoodsNavButtonClick = (e) => {
        if (e.index == 1) {
          uni.navigateTo({
            url: "/pages/order/order-sure?rid=" + props2.rid
          });
        }
      };
      const __returned__ = { props: props2, goodsItem, navbarBg, handleGoodsNavClick, handleGoodsNavButtonClick, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get onPageScroll() {
        return onPageScroll;
      }, get liveJson() {
        return liveJson;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_uni_countdown = resolveEasycom(vue.resolveDynamicComponent("uni-countdown"), __easycom_2);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    const _component_goods_nav = resolveEasycom(vue.resolveDynamicComponent("goods-nav"), __easycom_3);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_ua_layout, {
      class: "scrolling",
      tabbar: false
    }, {
      header: vue.withCtx(() => [
        vue.createVNode(_component_ua_navbar, {
          custom: "",
          transparent: "",
          bgcolor: $setup.navbarBg
        }, {
          back: vue.withCtx(() => [
            vue.createElementVNode("text", { class: "welive-icon welive-icon-arrLeft fs-36" })
          ]),
          right: vue.withCtx(() => [
            vue.createElementVNode("text", { class: "welive-icon welive-icon-share fs-36" })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["bgcolor"])
      ]),
      footer: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-footfixed" }, [
          vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-footbar flexbox flex-alignc" }, [
            vue.createVNode(_component_goods_nav, {
              onClick: $setup.handleGoodsNavClick,
              onButtonClick: $setup.handleGoodsNavButtonClick
            })
          ])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__wrap-goods__detail" }, [
          vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-swiper" }, [
            vue.createElementVNode("swiper", {
              "indicator-dots": true,
              autoplay: true,
              "indicator-color": "rgba(255,255,255,.5)",
              "indicator-active-color": "#fff"
            }, [
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("image", {
                  class: "gpic",
                  src: $setup.goodsItem.poster,
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("image", {
                  class: "gpic",
                  src: $setup.goodsItem.poster,
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-price flexbox flex-alignc" }, [
            vue.createElementVNode("view", { class: "realprice flexbox flex-col" }, [
              vue.createElementVNode("view", { class: "real" }, [
                vue.createElementVNode("text", { class: "fs-24" }, "￥"),
                vue.createTextVNode("1678.00")
              ]),
              vue.createElementVNode("view", { class: "del" }, "原价￥4000.00")
            ]),
            vue.createElementVNode("view", { class: "mprice flex1" }, [
              vue.createTextVNode("限时秒杀"),
              vue.createElementVNode("view", { class: "flexbox flex-justifyb" }, [
                vue.createTextVNode("距离结束 "),
                vue.createVNode(_component_uni_countdown, {
                  "show-day": false,
                  hour: 12,
                  minute: 12,
                  second: 12,
                  color: "#fff",
                  splitorColor: "#fff"
                })
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-item ulive__wrap-goods__detail-ginfo" }, [
            vue.createElementVNode(
              "view",
              { class: "fs-32 bold" },
              vue.toDisplayString($setup.goodsItem.desc),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "rowitem" }, [
              vue.createElementVNode("view", { class: "lbl" }, "服务"),
              vue.createElementVNode("view", { class: "flex1" }, [
                vue.createTextVNode("随时退-过期自动退"),
                vue.createVNode(_component_uni_icons, {
                  type: "help",
                  size: "16"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "rowitem" }, [
              vue.createElementVNode("view", { class: "lbl" }, "须知"),
              vue.createElementVNode("view", { class: "flex1 clamp1" }, "周一至周日09:30-18:00 至少提前1天预订信息"),
              vue.createVNode(_component_uni_icons, {
                type: "right",
                color: "#999",
                size: "16"
              })
            ]),
            vue.createElementVNode("view", { class: "rowitem" }, [
              vue.createElementVNode("view", { class: "lbl" }, "门店"),
              vue.createElementVNode("view", { class: "flex1" }, "最近12.3km 武汉爱尔眼科"),
              vue.createVNode(_component_uni_icons, {
                type: "right",
                color: "#999",
                size: "16"
              })
            ]),
            vue.createElementVNode("view", { class: "rowitem" }, [
              vue.createElementVNode("view", { class: "lbl" }, "活动"),
              vue.createElementVNode("view", { class: "flex1" }, "元旦大促销")
            ])
          ]),
          vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-item ulive__wrap-goods__detail-gdetail" }, [
            vue.createTextVNode(
              vue.toDisplayString($setup.goodsItem.desc) + " ",
              1
              /* TEXT */
            ),
            vue.createElementVNode("image", {
              src: $setup.goodsItem.poster
            }, null, 8, ["src"]),
            vue.createElementVNode("image", {
              src: $setup.goodsItem.poster
            }, null, 8, ["src"])
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesGoodsDetail = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-adbe0a1d"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/goods/detail.vue"]]);
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    let startRGB = hexToRgb(startColor, false);
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];
    let endRGB = hexToRgb(endColor, false);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];
    let sR = (endR - startR) / step;
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;
    let colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex("rgb(" + Math.round(sR * i + startR) + "," + Math.round(sG * i + startG) + "," + Math.round(sB * i + startB) + ")");
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = sColor.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      let sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      if (!str) {
        return sColorChange;
      } else {
        return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
      }
    } else if (/^(rgb|RGB)/.test(sColor)) {
      let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    } else {
      return sColor;
    }
  }
  function rgbToHex(rgb) {
    let _this = rgb;
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? "0" + hex : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    } else if (reg.test(_this)) {
      let aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      } else if (aNum.length === 3) {
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
  function colorToRgba(color2, alpha = 0.3) {
    color2 = rgbToHex(color2);
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = color2.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      var sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return "rgba(" + sColorChange.join(",") + "," + alpha + ")";
    } else {
      return sColor;
    }
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  let color$1 = colorGradient$1;
  const { windowWidth } = uni.getSystemInfoSync();
  const preId = "UEl_";
  const _sfc_main$a = {
    name: "u-tabs-swiper",
    emits: ["update:modelValue", "input", "change"],
    props: {
      // 导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度
      isScroll: {
        type: Boolean,
        default: true
      },
      //需循环的标签列表
      list: {
        type: Array,
        default() {
          return [];
        }
      },
      // 当前活动tab的索引
      current: {
        type: [Number, String],
        default: 0
      },
      // 导航栏的高度和行高，单位rpx
      height: {
        type: [Number, String],
        default: 80
      },
      // 字体大小，单位rpx
      fontSize: {
        type: [Number, String],
        default: 30
      },
      // 过渡动画时长, 单位s
      // duration: {
      // 	type: [Number, String],
      // 	default: 0.5
      // },
      swiperWidth: {
        //line3生效, 外部swiper的宽度, 单位rpx
        type: [String, Number],
        default: 750
      },
      // 选中项的主题颜色
      activeColor: {
        type: String,
        default: "#2979ff"
      },
      // 未选中项的颜色
      inactiveColor: {
        type: String,
        default: "#303133"
      },
      // 菜单底部移动的bar的宽度，单位rpx
      barWidth: {
        type: [Number, String],
        default: 40
      },
      // 移动bar的高度
      barHeight: {
        type: [Number, String],
        default: 6
      },
      // 单个tab的左或右内边距（各占一半），单位rpx
      gutter: {
        type: [Number, String],
        default: 40
      },
      // 如果是绝对定位，添加z-index值
      zIndex: {
        type: [Number, String],
        default: 1
      },
      // 导航栏的背景颜色
      bgColor: {
        type: String,
        default: "#ffffff"
      },
      //滚动至中心目标类型
      autoCenterMode: {
        type: String,
        default: "window"
      },
      // 读取传入的数组对象的属性(tab名称)
      name: {
        type: String,
        default: "name"
      },
      // 读取传入的数组对象的属性(徽标数)
      count: {
        type: String,
        default: "count"
      },
      // 徽标数位置偏移
      offset: {
        type: Array,
        default: () => {
          return [5, 20];
        }
      },
      // 活动tab字体是否加粗
      bold: {
        type: Boolean,
        default: true
      },
      // 当前活动tab item的样式
      activeItemStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 是否显示底部的滑块
      showBar: {
        type: Boolean,
        default: true
      },
      // 底部滑块的自定义样式
      barStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        scrollLeft: 0,
        // 滚动scroll-view的左边滚动距离
        tabQueryInfo: [],
        // 存放对tab菜单查询后的节点信息
        windowWidth: 0,
        // 屏幕宽度，单位为px
        //scrollBarLeft: 0, // 移动bar需要通过translateX()移动的距离
        animationFinishCurrent: this.current,
        componentsWidth: 0,
        line3AddDx: 0,
        line3Dx: 0,
        preId,
        sW: 0,
        tabsInfo: [],
        colorGradientArr: [],
        colorStep: 100
        // 两个颜色之间的渐变等分
      };
    },
    computed: {
      // 获取当前活跃的current值
      getCurrent() {
        const current = Number(this.current);
        if (current > this.getTabs.length - 1) {
          return this.getTabs.length - 1;
        }
        if (current < 0)
          return 0;
        return current;
      },
      getTabs() {
        return this.list;
      },
      // 滑块需要移动的距离
      scrollBarLeft() {
        return Number(this.line3Dx) + Number(this.line3AddDx);
      },
      // 滑块的宽度转为px单位
      barWidthPx() {
        return uni.upx2px(this.barWidth);
      },
      // tab的样式
      tabItemStyle() {
        return (index2) => {
          let style = {
            height: this.height + "rpx",
            lineHeight: this.height + "rpx",
            padding: `0 ${this.gutter / 2}rpx`,
            color: this.tabsInfo.length > 0 ? this.tabsInfo[index2] ? this.tabsInfo[index2].color : this.activeColor : this.inactiveColor,
            fontSize: this.fontSize + "rpx",
            zIndex: this.zIndex + 2,
            fontWeight: index2 == this.getCurrent && this.bold ? "bold" : "normal"
          };
          if (index2 == this.getCurrent) {
            style = Object.assign(style, this.activeItemStyle);
          }
          return style;
        };
      },
      // 底部滑块的样式
      tabBarStyle() {
        let style = {
          width: this.barWidthPx + "px",
          height: this.barHeight + "rpx",
          borderRadius: "100px",
          backgroundColor: this.activeColor,
          left: this.scrollBarLeft + "px"
        };
        return Object.assign(style, this.barStyle);
      }
    },
    watch: {
      current(n, o) {
        this.change(n);
        this.setFinishCurrent(n);
      },
      list() {
        this.$nextTick(() => {
          this.init();
        });
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      async init() {
        this.countPx();
        await this.getTabsInfo();
        this.countLine3Dx();
        this.getQuery(() => {
          this.setScrollViewToCenter();
        });
        this.colorGradientArr = color$1.colorGradient(this.inactiveColor, this.activeColor, this.colorStep);
      },
      // 获取各个tab的节点信息
      getTabsInfo() {
        return new Promise((resolve, reject) => {
          let view = uni.createSelectorQuery().in(this);
          for (let i = 0; i < this.list.length; i++) {
            view.select("." + preId + i).boundingClientRect();
          }
          view.exec((res) => {
            const arr = [];
            for (let i = 0; i < res.length; i++) {
              res[i].color = this.inactiveColor;
              if (i == this.getCurrent)
                res[i].color = this.activeColor;
              arr.push(res[i]);
            }
            this.tabsInfo = arr;
            resolve();
          });
        });
      },
      // 当swiper滑动结束，计算滑块最终要停留的位置
      countLine3Dx() {
        const tab = this.tabsInfo[this.animationFinishCurrent];
        if (tab)
          this.line3Dx = tab.left + tab.width / 2 - this.barWidthPx / 2 - this.tabsInfo[0].left;
      },
      countPx() {
        this.sW = uni.upx2px(Number(this.swiperWidth));
      },
      emit(index2) {
        this.$emit("change", index2);
      },
      change() {
        this.setScrollViewToCenter();
      },
      getQuery(cb) {
        try {
          let view = uni.createSelectorQuery().in(this).select(".u-tabs");
          view.fields(
            {
              size: true
            },
            (data) => {
              if (data) {
                this.componentsWidth = data.width;
                if (cb && typeof cb === "function")
                  cb(data);
              } else {
                this.getQuery(cb);
              }
            }
          ).exec();
        } catch (e) {
          this.componentsWidth = windowWidth;
        }
      },
      // 把活动tab移动到屏幕中心点
      setScrollViewToCenter() {
        let tab;
        tab = this.tabsInfo[this.animationFinishCurrent];
        if (tab) {
          let tabCenter = tab.left + tab.width / 2;
          let fatherWidth;
          if (this.autoCenterMode === "window") {
            fatherWidth = windowWidth;
          } else {
            fatherWidth = this.componentsWidth;
          }
          this.scrollLeft = tabCenter - fatherWidth / 2;
        }
      },
      setDx(dx) {
        let nextTabIndex = dx > 0 ? this.animationFinishCurrent + 1 : this.animationFinishCurrent - 1;
        nextTabIndex = nextTabIndex <= 0 ? 0 : nextTabIndex;
        nextTabIndex = nextTabIndex >= this.list.length ? this.list.length - 1 : nextTabIndex;
        this.tabsInfo[nextTabIndex];
        let nowTab = this.tabsInfo[this.animationFinishCurrent];
        let nowTabX = nowTab.left + nowTab.width / 2;
        let nextTab = this.tabsInfo[nextTabIndex];
        let nextTabX = nextTab.left + nextTab.width / 2;
        let distanceX = Math.abs(nextTabX - nowTabX);
        this.line3AddDx = dx / this.sW * distanceX;
        this.setTabColor(this.animationFinishCurrent, nextTabIndex, dx);
      },
      // 设置tab的颜色
      setTabColor(nowTabIndex, nextTabIndex, dx) {
        let colorIndex = Math.abs(Math.ceil(dx / this.sW * 100));
        let colorLength = this.colorGradientArr.length;
        colorIndex = colorIndex >= colorLength ? colorLength - 1 : colorIndex <= 0 ? 0 : colorIndex;
        this.tabsInfo[nextTabIndex].color = this.colorGradientArr[colorIndex];
        this.tabsInfo[nowTabIndex].color = this.colorGradientArr[colorLength - 1 - colorIndex];
      },
      // swiper结束滑动
      setFinishCurrent(current) {
        this.tabsInfo.map((val, index2) => {
          if (current == index2)
            val.color = this.activeColor;
          else
            val.color = this.inactiveColor;
          return val;
        });
        this.line3AddDx = 0;
        this.animationFinishCurrent = current;
        this.countLine3Dx();
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-tabs",
        style: vue.normalizeStyle({
          zIndex: $props.zIndex,
          background: $props.bgColor
        })
      },
      [
        vue.createElementVNode("scroll-view", {
          "scroll-x": "",
          class: "u-scroll-view",
          "scroll-left": $data.scrollLeft,
          "scroll-with-animation": "",
          style: vue.normalizeStyle({ zIndex: $props.zIndex + 1 })
        }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["u-tabs-scroll-box", { "u-tabs-scroll-flex": !$props.isScroll }])
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($options.getTabs, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["u-tabs-item", [$data.preId + index2]]),
                    style: vue.normalizeStyle([$options.tabItemStyle(index2)]),
                    key: index2,
                    onClick: ($event) => $options.emit(index2)
                  }, [
                    vue.createVNode(_component_u_badge, {
                      count: item[$props.count] || item["count"] || 0,
                      offset: $props.offset,
                      size: "mini"
                    }, null, 8, ["count", "offset"]),
                    vue.createTextVNode(
                      " " + vue.toDisplayString(item[$props.name] || item["name"]),
                      1
                      /* TEXT */
                    )
                  ], 14, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $props.showBar ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "u-scroll-bar",
                  style: vue.normalizeStyle([$options.tabBarStyle])
                },
                null,
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], 12, ["scroll-left"])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-d226c2b0"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-tabs-swiper/u-tabs-swiper.vue"]]);
  const _imports_0$1 = "/static/avatar/uimg2.jpeg";
  const _imports_1 = "/static/avatar/uimg3.jpeg";
  const _imports_2 = "/static/avatar/uimg5.jpeg";
  const _imports_3 = "/static/avatar/uimg7.jpeg";
  const _sfc_main$9 = {
    __name: "list",
    setup(__props, { expose: __expose }) {
      __expose();
      const tabList = vue.ref([
        { name: "全部" },
        { name: "待付款" },
        { name: "待发货" },
        { name: "待收货" },
        { name: "已完成" },
        { name: "取消" }
      ]);
      const tabCur = vue.ref(0);
      const swiperCur = vue.ref(0);
      const isrefresh = vue.ref(false);
      const uTabs = vue.ref();
      const orderList = vue.ref([
        {
          list: [],
          page: 1,
          status: ""
          // loading-加载 nomore-没有数据 loaded-已请求数据
        },
        {
          list: [],
          page: 1,
          status: ""
        },
        {
          list: [],
          page: 1,
          status: ""
        },
        {
          list: [],
          page: 1,
          status: ""
        },
        {
          list: [],
          page: 1,
          status: ""
        },
        {
          list: [],
          page: 1,
          status: ""
        }
      ]);
      const tabsChange = (index2) => {
        swiperCur.value = index2;
      };
      const transition = (e) => {
        let dx = e.detail.dx;
        uTabs.value.setDx(dx);
      };
      const animationfinish = (e) => {
        let current = e.detail.current;
        uTabs.value.setFinishCurrent(current);
        swiperCur.value = current;
        tabCur.value = current;
      };
      const onChange = (e) => {
        let current = e.detail.current;
        formatAppLog("log", "at pages/order/list.vue:64", `🚀 - current:`, current);
        swiperCur.value = current;
      };
      const onRefresher = () => {
        if (isrefresh.value)
          return;
        isrefresh.value = true;
        setTimeout(() => {
          isrefresh.value = false;
        }, 1e3);
      };
      const onreachBottom = () => {
      };
      const toDetail = () => {
        uni.navigateTo({
          url: "/pages/order/detail"
        });
      };
      const __returned__ = { tabList, tabCur, swiperCur, isrefresh, uTabs, orderList, tabsChange, transition, animationfinish, onChange, onRefresher, onreachBottom, toDetail, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_u_tabs_swiper = resolveEasycom(vue.resolveDynamicComponent("u-tabs-swiper"), __easycom_1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    const _component_u_tag = resolveEasycom(vue.resolveDynamicComponent("u-tag"), __easycom_2$1);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_0$3);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_ua_layout, { tabbar: false }, {
      header: vue.withCtx(() => [
        vue.createVNode(_component_ua_navbar, {
          custom: "",
          title: "我的订单",
          fixed: "",
          bgcolor: "#2979ff"
        }, {
          back: vue.withCtx(() => [
            vue.createElementVNode("text", { class: "welive-icon welive-icon-arrLeft fs-36" })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__wrap-orderlist__wrap flexbox flex-col" }, [
          vue.createVNode(_component_u_tabs_swiper, {
            ref: "uTabs",
            list: $setup.tabList,
            current: $setup.tabCur,
            "is-scroll": false,
            "bg-color": "#fff",
            "active-color": "#388ae9",
            onChange: $setup.tabsChange
          }, null, 8, ["list", "current"]),
          vue.createElementVNode("swiper", {
            class: "flex1",
            current: $setup.swiperCur,
            onTransition: $setup.transition,
            onAnimationfinish: $setup.animationfinish,
            onChange: $setup.onChange
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.tabList, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index2 }, [
                  vue.createElementVNode("scroll-view", {
                    class: "ulive__wrap-orderlist__scrollview",
                    "scroll-y": "",
                    "refresher-background": "transparent",
                    "refresher-enabled": true,
                    "refresher-triggered": $setup.isrefresh,
                    onRefresherrefresh: $setup.onRefresher,
                    onScrolltolower: $setup.onreachBottom,
                    style: { "height": "100%", "width": "100%" }
                  }, [
                    vue.createElementVNode("view", { class: "ulive__wrap-orderlist__body" }, [
                      vue.createElementVNode("view", {
                        class: "ulive__wrap-orderlist__item",
                        onClick: $setup.toDetail
                      }, [
                        vue.createElementVNode("view", { class: "ulive__wrap-orderlist__hd flexbox" }, [
                          vue.createElementVNode("view", { class: "flex1 flexbox flex-alignc" }, [
                            vue.createElementVNode("image", {
                              class: "ico",
                              src: _imports_0$1,
                              mode: "aspectFill"
                            }),
                            vue.createElementVNode("text", { class: "title clamp1" }, "南极人阳光城专卖店"),
                            vue.createTextVNode(),
                            vue.createVNode(_component_uni_icons, {
                              type: "arrowright",
                              color: "#999",
                              size: "14"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "c-eb4868 fs-26" }, "待付款")
                        ]),
                        vue.createElementVNode("view", { class: "ulive__wrap-orderlist__bdinfo" }, [
                          vue.createElementVNode("view", { class: "bd-listbox flexbox" }, [
                            vue.createElementVNode("image", {
                              class: "lsitem-img",
                              src: "https://img14.360buyimg.com/n7/jfs/t1/190110/28/40216/146211/653f24f1Fc5d462e6/0bf0311e647339b4.jpg",
                              mode: "aspectFill"
                            }),
                            vue.createElementVNode("view", { class: "lsitem-mid flex1" }, [
                              vue.createElementVNode("view", { class: "title clamp2" }, [
                                vue.createVNode(_component_u_tag, {
                                  text: "到店付",
                                  shape: "circle",
                                  mode: "dark",
                                  size: "mini",
                                  "bg-color": "#f2905b"
                                }),
                                vue.createElementVNode("text", { class: "pl-10" }, "南极人外套男春秋冬季潮流韩版宽松休闲衣服男潮牌假两件工装连帽夹克男")
                              ]),
                              vue.createElementVNode("view", { class: "flexbox flex-alignc mt-15" }, [
                                vue.createElementVNode("view", { class: "flex1 c-333 fs-28 mr-20" }, "￥69.90.00"),
                                vue.createElementVNode("view", { class: "c-999 fs-28" }, "×10")
                              ])
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "bd-infobox" }, [
                            vue.createElementVNode("view", { class: "pintuan flexbox flex-alignc" }, [
                              vue.createElementVNode("view", { class: "avatar-group" }, [
                                vue.createElementVNode("image", {
                                  src: _imports_1,
                                  mode: "aspectFill"
                                }),
                                vue.createElementVNode("image", {
                                  src: _imports_2,
                                  mode: "aspectFill"
                                }),
                                vue.createElementVNode("image", {
                                  src: _imports_3,
                                  mode: "aspectFill"
                                })
                              ]),
                              vue.createElementVNode("text", { class: "fs-24" }, "已拼团3人，还差1人")
                            ]),
                            vue.createElementVNode("view", { class: "price flex1" }, [
                              vue.createTextVNode(" 实付款："),
                              vue.createElementVNode("text", { class: "c-eb4868" }, "￥690.90")
                            ])
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "ulive__wrap-orderlist__ftinfo flexbox" }, [
                          vue.createVNode(_component_u_button, {
                            class: "ulive__ord-btn",
                            type: "default",
                            shape: "circle",
                            onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                            }, ["stop"]))
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("取消订单")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          vue.createVNode(_component_u_button, {
                            class: "ulive__ord-btn",
                            type: "primary",
                            shape: "circle",
                            onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                            }, ["stop"]))
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("去支付")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ])
                      ]),
                      vue.createCommentVNode(' <u-empty mode="order"></u-empty> ')
                    ])
                  ], 40, ["refresher-triggered"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 40, ["current"])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesOrderList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-456ecf67"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/order/list.vue"]]);
  const _sfc_main$8 = {
    __name: "detail",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$5);
    const _component_uni_countdown = resolveEasycom(vue.resolveDynamicComponent("uni-countdown"), __easycom_2);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    const _component_u_tag = resolveEasycom(vue.resolveDynamicComponent("u-tag"), __easycom_2$1);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_0$3);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_ua_layout, { tabbar: false }, {
      header: vue.withCtx(() => [
        vue.createVNode(_component_ua_navbar, {
          custom: "",
          title: "订单详情",
          fixed: "",
          bgcolor: "#2979ff"
        }, {
          back: vue.withCtx(() => [
            vue.createElementVNode("text", { class: "welive-icon welive-icon-arrLeft fs-36" })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      footer: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-footfixed" }, [
          vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-footbar flexbox flex-alignc" }, [
            vue.createVNode(_component_u_button, {
              shape: "circle",
              plain: "",
              "custom-style": { margin: 0 }
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("取消订单")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_button, {
              type: "primary",
              shape: "circle",
              "custom-style": { margin: "0 25rpx" }
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("去支付")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "ulive__wrap-order__wrap" }, [
          vue.createElementVNode("view", { class: "ulive__wrap-orderdetail__body" }, [
            vue.createElementVNode("view", { class: "align-c pb-30" }, [
              vue.createElementVNode("view", { class: "fs-28 flexbox flex-alignc flex-justifyc" }, [
                vue.createVNode(_component_u_icon, {
                  name: "error-circle",
                  size: "36"
                }),
                vue.createTextVNode(" 待支付，剩余"),
                vue.createVNode(_component_uni_countdown, {
                  "show-day": false,
                  hour: 12,
                  minute: 12,
                  second: 12,
                  color: "#eb4868",
                  splitorColor: "#eb4868"
                })
              ]),
              vue.createElementVNode("view", { class: "c-999 fs-26 mt-10" }, "超过29分钟未支付，订单将自动取消")
            ]),
            vue.createElementVNode("view", { class: "ulive__wrap-orderlist__item" }, [
              vue.createElementVNode("view", { class: "ulive__wrap-orderlist__hd flexbox" }, [
                vue.createElementVNode("view", { class: "flex1 flexbox flex-alignc" }, [
                  vue.createElementVNode("image", {
                    class: "ico",
                    src: _imports_0$1,
                    mode: "aspectFill"
                  }),
                  vue.createElementVNode("text", { class: "title clamp1" }, "南极人阳光城专卖店"),
                  vue.createTextVNode(),
                  vue.createVNode(_component_uni_icons, {
                    type: "arrowright",
                    color: "#999",
                    size: "14"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "ulive__wrap-orderlist__bdinfo" }, [
                vue.createElementVNode("view", { class: "bd-listbox flexbox" }, [
                  vue.createElementVNode("image", {
                    class: "lsitem-img",
                    src: "https://img14.360buyimg.com/n7/jfs/t1/190110/28/40216/146211/653f24f1Fc5d462e6/0bf0311e647339b4.jpg",
                    mode: "aspectFill"
                  }),
                  vue.createElementVNode("view", { class: "lsitem-mid flex1" }, [
                    vue.createElementVNode("view", { class: "title clamp2" }, [
                      vue.createVNode(_component_u_tag, {
                        text: "到店付",
                        shape: "circle",
                        mode: "dark",
                        size: "mini",
                        "bg-color": "#f2905b"
                      }),
                      vue.createElementVNode("text", { class: "pl-10" }, "南极人外套男春秋冬季潮流韩版宽松休闲衣服男潮牌假两件工装连帽夹克男")
                    ]),
                    vue.createElementVNode("view", { class: "flexbox flex-alignc mt-15" }, [
                      vue.createElementVNode("view", { class: "flex1 c-333 fs-28 mr-20" }, "￥69.90"),
                      vue.createElementVNode("view", { class: "c-999 fs-28" }, "×10")
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-ginfo" }, [
              vue.createElementVNode("view", { class: "fs-32 mb-25" }, "订单信息"),
              vue.createElementVNode("view", { class: "rowitem" }, [
                vue.createElementVNode("view", { class: "lbl flex1" }, "订单号"),
                vue.createElementVNode("view", { class: "fs-26" }, [
                  vue.createTextVNode("101245045412301358 "),
                  vue.createElementVNode("text", { class: "welive-icon welive-icon-copy fs-36" })
                ])
              ]),
              vue.createElementVNode("view", { class: "rowitem" }, [
                vue.createElementVNode("view", { class: "lbl flex1" }, "下单时间"),
                vue.createElementVNode("view", { class: "fs-26" }, "2023-12-28 11:12:38")
              ]),
              vue.createElementVNode("view", { class: "rowitem" }, [
                vue.createElementVNode("view", { class: "lbl flex1" }, "购买数量"),
                vue.createElementVNode("view", { class: "fs-26" }, "x10")
              ]),
              vue.createElementVNode("view", { class: "rowitem" }, [
                vue.createElementVNode("view", { class: "lbl flex1" }, "订单金额"),
                vue.createElementVNode("view", { class: "fs-32" }, "￥69.90")
              ]),
              vue.createElementVNode("view", { class: "rowitem" }, [
                vue.createElementVNode("view", { class: "lbl flex1" }, "商品优惠"),
                vue.createElementVNode("view", { class: "fs-26 c-999" }, "暂无优惠")
              ]),
              vue.createElementVNode("view", { class: "rowitem" }, [
                vue.createElementVNode("view", { class: "lbl flex1" }, "实付金额"),
                vue.createElementVNode("view", { class: "fs-32 c-eb4868" }, "￥690.90")
              ])
            ])
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesOrderDetail = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-6b23c96c"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/order/detail.vue"]]);
  const _sfc_main$7 = {
    name: "u-mask",
    emits: ["click"],
    props: {
      // 是否显示遮罩
      show: {
        type: Boolean,
        default: false
      },
      // 层级z-index
      zIndex: {
        type: [Number, String],
        default: ""
      },
      // 用户自定义样式
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 遮罩的动画样式， 是否使用使用zoom进行scale进行缩放
      zoom: {
        type: Boolean,
        default: true
      },
      // 遮罩的过渡时间，单位为ms
      duration: {
        type: [Number, String],
        default: 300
      },
      // 是否可以通过点击遮罩进行关闭
      maskClickAble: {
        type: Boolean,
        default: true
      },
      // 遮罩的模糊度
      blur: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        zoomStyle: {
          transform: ""
        },
        scale: "scale(1.2, 1.2)"
      };
    },
    watch: {
      show(n) {
        if (n && this.zoom) {
          this.zoomStyle.transform = "scale(1, 1)";
        } else if (!n && this.zoom) {
          this.zoomStyle.transform = this.scale;
        }
      }
    },
    computed: {
      maskStyle() {
        let style = {};
        style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        if (this.show)
          style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.mask;
        else
          style.zIndex = -1;
        style.transition = `all ${this.duration / 1e3}s ease-in-out`;
        if (Object.keys(this.customStyle).length)
          style = {
            ...style,
            ...this.customStyle
          };
        return style;
      },
      filterStyle() {
        let { blur } = this;
        let style = {};
        if (blur) {
          style.backdropFilter = `blur(${blur}rpx)`;
        }
        return style;
      }
    },
    methods: {
      click() {
        if (!this.maskClickAble)
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-mask", {
          "u-mask-zoom": $props.zoom,
          "u-mask-show": $props.show
        }]),
        "hover-stop-propagation": "",
        style: vue.normalizeStyle([$options.maskStyle, $data.zoomStyle, $options.filterStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args)),
        onTouchmove: vue.withModifiers(() => {
        }, ["stop", "prevent"])
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-b3b508a8"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-mask/u-mask.vue"]]);
  const _sfc_main$6 = {
    name: "u-popup",
    emits: ["update:modelValue", "input", "open", "close"],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      /**
       * 显示状态
       */
      show: {
        type: Boolean,
        default: false
      },
      /**
       * 弹出方向，left|right|top|bottom|center
       */
      mode: {
        type: String,
        default: "left"
      },
      /**
       * 是否显示遮罩
       */
      mask: {
        type: Boolean,
        default: true
      },
      // 抽屉的宽度(mode=left|right)，或者高度(mode=top|bottom)，单位rpx，或者"auto"
      // 或者百分比"50%"，表示由内容撑开高度或者宽度
      length: {
        type: [Number, String],
        default: "auto"
      },
      // 是否开启缩放动画，只在mode=center时有效
      zoom: {
        type: Boolean,
        default: true
      },
      // 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      // 是否可以通过点击遮罩进行关闭
      maskCloseAble: {
        type: Boolean,
        default: true
      },
      // 用户自定义样式
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 此为内部参数，不在文档对外使用，为了解决Picker和keyboard等融合了弹窗的组件
      // 对v-model双向绑定多层调用造成报错不能修改props值的问题
      popup: {
        type: Boolean,
        default: true
      },
      // 显示显示弹窗的圆角，单位rpx
      borderRadius: {
        type: [Number, String],
        default: 0
      },
      zIndex: {
        type: [Number, String],
        default: ""
      },
      // 是否显示关闭图标
      closeable: {
        type: Boolean,
        default: false
      },
      // 关闭图标的名称，只能uView的内置图标
      closeIcon: {
        type: String,
        default: "close"
      },
      // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
      closeIconPos: {
        type: String,
        default: "top-right"
      },
      // 关闭图标的颜色
      closeIconColor: {
        type: String,
        default: "#909399"
      },
      // 关闭图标的大小，单位rpx
      closeIconSize: {
        type: [String, Number],
        default: "30"
      },
      // 宽度，只对左，右，中部弹出时起作用，单位rpx，或者"auto"
      // 或者百分比"50%"，表示由内容撑开高度或者宽度，优先级高于length参数
      width: {
        type: String,
        default: ""
      },
      // 高度，只对上，下，中部弹出时起作用，单位rpx，或者"auto"
      // 或者百分比"50%"，表示由内容撑开高度或者宽度，优先级高于length参数
      height: {
        type: String,
        default: ""
      },
      // 给一个负的margin-top，往上偏移，避免和键盘重合的情况，仅在mode=center时有效
      negativeTop: {
        type: [String, Number],
        default: 0
      },
      // 遮罩的样式，一般用于修改遮罩的透明度
      maskCustomStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 遮罩打开或收起的动画过渡时间，单位ms
      duration: {
        type: [String, Number],
        default: 250
      },
      // 遮罩的模糊度
      blur: {
        type: [String, Number],
        default: 0
      }
    },
    data() {
      return {
        visibleSync: false,
        showDrawer: false,
        timer: null,
        closeFromInner: false
        // value的值改变，是发生在内部还是外部
      };
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      // 根据mode的位置，设定其弹窗的宽度(mode = left|right)，或者高度(mode = top|bottom)
      style() {
        let style = {};
        if (this.mode == "left" || this.mode == "right") {
          style = {
            width: this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length),
            height: "100%",
            transform: `translate3D(${this.mode == "left" ? "-100%" : "100%"},0px,0px)`
          };
        } else if (this.mode == "top" || this.mode == "bottom") {
          style = {
            width: "100%",
            height: this.height ? this.getUnitValue(this.height) : this.getUnitValue(this.length),
            transform: `translate3D(0px,${this.mode == "top" ? "-100%" : "100%"},0px)`
          };
        }
        style.zIndex = this.uZindex;
        if (this.borderRadius) {
          switch (this.mode) {
            case "left":
              style.borderRadius = `0 ${this.borderRadius}rpx ${this.borderRadius}rpx 0`;
              break;
            case "top":
              style.borderRadius = `0 0 ${this.borderRadius}rpx ${this.borderRadius}rpx`;
              break;
            case "right":
              style.borderRadius = `${this.borderRadius}rpx 0 0 ${this.borderRadius}rpx`;
              break;
            case "bottom":
              style.borderRadius = `${this.borderRadius}rpx ${this.borderRadius}rpx 0 0`;
              break;
          }
          style.overflow = "hidden";
        }
        if (this.duration)
          style.transition = `all ${this.duration / 1e3}s linear`;
        return style;
      },
      // 中部弹窗的特有样式
      centerStyle() {
        let style = {};
        style.width = this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length);
        style.height = this.height ? this.getUnitValue(this.height) : "auto";
        style.zIndex = this.uZindex;
        style.marginTop = `-${this.$u.addUnit(this.negativeTop)}`;
        if (this.borderRadius) {
          style.borderRadius = `${this.borderRadius}rpx`;
          style.overflow = "hidden";
        }
        return style;
      },
      // 计算整理后的z-index值
      uZindex() {
        return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
      }
    },
    watch: {
      valueCom: {
        immediate: true,
        handler(val) {
          if (val) {
            this.open();
          } else if (!this.closeFromInner) {
            this.close();
          }
          this.closeFromInner = false;
        }
      }
    },
    mounted() {
      this.valueCom && this.open();
    },
    methods: {
      // 判断传入的值，是否带有单位，如果没有，就默认用rpx单位
      getUnitValue(val) {
        if (/(%|px|rpx|auto)$/.test(val))
          return val;
        else
          return val + "rpx";
      },
      // 遮罩被点击
      maskClick() {
        this.close();
      },
      close() {
        this.closeFromInner = true;
        this.change("showDrawer", "visibleSync", false);
      },
      // 中部弹出时，需要.u-drawer-content将居中内容，此元素会铺满屏幕，点击需要关闭弹窗
      // 让其只在mode=center时起作用
      modeCenterClose(mode) {
        if (mode != "center" || !this.maskCloseAble)
          return;
        this.close();
      },
      open() {
        this.change("visibleSync", "showDrawer", true);
      },
      // 此处的原理是，关闭时先通过动画隐藏弹窗和遮罩，再移除整个组件
      // 打开时，先渲染组件，延时一定时间再让遮罩和弹窗的动画起作用
      change(param1, param2, status) {
        if (this.popup == true) {
          this.$emit("input", status);
          this.$emit("update:modelValue", status);
        }
        this[param1] = status;
        if (status) {
          this.$nextTick(() => {
            this[param2] = status;
            this.$emit(status ? "open" : "close");
          });
        } else {
          this.timer = setTimeout(() => {
            this[param2] = status;
            this.$emit(status ? "open" : "close");
          }, this.duration);
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_mask = resolveEasycom(vue.resolveDynamicComponent("u-mask"), __easycom_0$1);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$5);
    return $data.visibleSync ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        style: vue.normalizeStyle([$props.customStyle, {
          zIndex: $options.uZindex - 1
        }]),
        class: "u-drawer",
        "hover-stop-propagation": ""
      },
      [
        vue.createVNode(_component_u_mask, {
          blur: $props.blur,
          duration: $props.duration,
          "custom-style": $props.maskCustomStyle,
          maskClickAble: $props.maskCloseAble,
          "z-index": $options.uZindex - 2,
          show: $data.showDrawer && $props.mask,
          onClick: $options.maskClick
        }, null, 8, ["blur", "duration", "custom-style", "maskClickAble", "z-index", "show", "onClick"]),
        vue.createCommentVNode(" 移除	@tap.stop.prevent "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-drawer-content", [
              $props.safeAreaInsetBottom ? "safe-area-inset-bottom" : "",
              "u-drawer-" + $props.mode,
              $data.showDrawer ? "u-drawer-content-visible" : "",
              $props.zoom && $props.mode == "center" ? "u-animation-zoom" : ""
            ]]),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.modeCenterClose($props.mode)),
            onTouchmove: _cache[4] || (_cache[4] = vue.withModifiers(() => {
            }, ["stop", "prevent"])),
            style: vue.normalizeStyle([$options.style])
          },
          [
            $props.mode == "center" ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "u-mode-center-box",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                }, ["stop", "prevent"])),
                onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                }, ["stop", "prevent"])),
                style: vue.normalizeStyle([$options.centerStyle])
              },
              [
                $props.closeable ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                  key: 0,
                  onClick: $options.close,
                  class: vue.normalizeClass(["u-close", ["u-close--" + $props.closeIconPos]]),
                  name: $props.closeIcon,
                  color: $props.closeIconColor,
                  size: $props.closeIconSize
                }, null, 8, ["onClick", "class", "name", "color", "size"])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("scroll-view", {
                  class: "u-drawer__scroll-view",
                  "scroll-y": "true"
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ])
              ],
              36
              /* STYLE, NEED_HYDRATION */
            )) : (vue.openBlock(), vue.createElementBlock("scroll-view", {
              key: 1,
              class: "u-drawer__scroll-view",
              "scroll-y": "true"
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])),
            vue.createElementVNode(
              "view",
              {
                onClick: _cache[2] || (_cache[2] = (...args) => $options.close && $options.close(...args)),
                class: vue.normalizeClass(["u-close", ["u-close--" + $props.closeIconPos]])
              },
              [
                $props.mode != "center" && $props.closeable ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                  key: 0,
                  name: $props.closeIcon,
                  color: $props.closeIconColor,
                  size: $props.closeIconSize
                }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ],
          38
          /* CLASS, STYLE, NEED_HYDRATION */
        )
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-c93a8fd2"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-popup/u-popup.vue"]]);
  const provinces = [
    {
      code: "110000",
      name: "北京市"
    },
    {
      code: "120000",
      name: "天津市"
    },
    {
      code: "130000",
      name: "河北省"
    },
    {
      code: "140000",
      name: "山西省"
    },
    {
      code: "150000",
      name: "内蒙古自治区"
    },
    {
      code: "210000",
      name: "辽宁省"
    },
    {
      code: "220000",
      name: "吉林省"
    },
    {
      code: "230000",
      name: "黑龙江省"
    },
    {
      code: "310000",
      name: "上海市"
    },
    {
      code: "320000",
      name: "江苏省"
    },
    {
      code: "330000",
      name: "浙江省"
    },
    {
      code: "340000",
      name: "安徽省"
    },
    {
      code: "350000",
      name: "福建省"
    },
    {
      code: "360000",
      name: "江西省"
    },
    {
      code: "370000",
      name: "山东省"
    },
    {
      code: "410000",
      name: "河南省"
    },
    {
      code: "420000",
      name: "湖北省"
    },
    {
      code: "430000",
      name: "湖南省"
    },
    {
      code: "440000",
      name: "广东省"
    },
    {
      code: "450000",
      name: "广西壮族自治区"
    },
    {
      code: "460000",
      name: "海南省"
    },
    {
      code: "500000",
      name: "重庆市"
    },
    {
      code: "510000",
      name: "四川省"
    },
    {
      code: "520000",
      name: "贵州省"
    },
    {
      code: "530000",
      name: "云南省"
    },
    {
      code: "540000",
      name: "西藏自治区"
    },
    {
      code: "610000",
      name: "陕西省"
    },
    {
      code: "620000",
      name: "甘肃省"
    },
    {
      code: "630000",
      name: "青海省"
    },
    {
      code: "640000",
      name: "宁夏回族自治区"
    },
    {
      code: "650000",
      name: "新疆维吾尔自治区"
    },
    {
      code: "710000",
      name: "台湾省"
    },
    {
      code: "810000",
      name: "香港特别行政区"
    },
    {
      code: "820000",
      name: "澳门特别行政区"
    }
  ];
  const citys = [
    [
      {
        code: "110100",
        name: "北京市"
      }
    ],
    [
      {
        code: "120100",
        name: "天津市"
      }
    ],
    [
      {
        code: "130100",
        name: "石家庄市"
      },
      {
        code: "130200",
        name: "唐山市"
      },
      {
        code: "130300",
        name: "秦皇岛市"
      },
      {
        code: "130400",
        name: "邯郸市"
      },
      {
        code: "130500",
        name: "邢台市"
      },
      {
        code: "130600",
        name: "保定市"
      },
      {
        code: "130700",
        name: "张家口市"
      },
      {
        code: "130800",
        name: "承德市"
      },
      {
        code: "130900",
        name: "沧州市"
      },
      {
        code: "131000",
        name: "廊坊市"
      },
      {
        code: "131100",
        name: "衡水市"
      }
    ],
    [
      {
        code: "140100",
        name: "太原市"
      },
      {
        code: "140200",
        name: "大同市"
      },
      {
        code: "140300",
        name: "阳泉市"
      },
      {
        code: "140400",
        name: "长治市"
      },
      {
        code: "140500",
        name: "晋城市"
      },
      {
        code: "140600",
        name: "朔州市"
      },
      {
        code: "140700",
        name: "晋中市"
      },
      {
        code: "140800",
        name: "运城市"
      },
      {
        code: "140900",
        name: "忻州市"
      },
      {
        code: "141000",
        name: "临汾市"
      },
      {
        code: "141100",
        name: "吕梁市"
      }
    ],
    [
      {
        code: "150100",
        name: "呼和浩特市"
      },
      {
        code: "150200",
        name: "包头市"
      },
      {
        code: "150300",
        name: "乌海市"
      },
      {
        code: "150400",
        name: "赤峰市"
      },
      {
        code: "150500",
        name: "通辽市"
      },
      {
        code: "150600",
        name: "鄂尔多斯市"
      },
      {
        code: "150700",
        name: "呼伦贝尔市"
      },
      {
        code: "150800",
        name: "巴彦淖尔市"
      },
      {
        code: "150900",
        name: "乌兰察布市"
      },
      {
        code: "152200",
        name: "兴安盟"
      },
      {
        code: "152500",
        name: "锡林郭勒盟"
      },
      {
        code: "152900",
        name: "阿拉善盟"
      }
    ],
    [
      {
        code: "210100",
        name: "沈阳市"
      },
      {
        code: "210200",
        name: "大连市"
      },
      {
        code: "210300",
        name: "鞍山市"
      },
      {
        code: "210400",
        name: "抚顺市"
      },
      {
        code: "210500",
        name: "本溪市"
      },
      {
        code: "210600",
        name: "丹东市"
      },
      {
        code: "210700",
        name: "锦州市"
      },
      {
        code: "210800",
        name: "营口市"
      },
      {
        code: "210900",
        name: "阜新市"
      },
      {
        code: "211000",
        name: "辽阳市"
      },
      {
        code: "211100",
        name: "盘锦市"
      },
      {
        code: "211200",
        name: "铁岭市"
      },
      {
        code: "211300",
        name: "朝阳市"
      },
      {
        code: "211400",
        name: "葫芦岛市"
      }
    ],
    [
      {
        code: "220100",
        name: "长春市"
      },
      {
        code: "220200",
        name: "吉林市"
      },
      {
        code: "220300",
        name: "四平市"
      },
      {
        code: "220400",
        name: "辽源市"
      },
      {
        code: "220500",
        name: "通化市"
      },
      {
        code: "220600",
        name: "白山市"
      },
      {
        code: "220700",
        name: "松原市"
      },
      {
        code: "220800",
        name: "白城市"
      },
      {
        code: "222400",
        name: "延边朝鲜族自治州"
      }
    ],
    [
      {
        code: "230100",
        name: "哈尔滨市"
      },
      {
        code: "230200",
        name: "齐齐哈尔市"
      },
      {
        code: "230300",
        name: "鸡西市"
      },
      {
        code: "230400",
        name: "鹤岗市"
      },
      {
        code: "230500",
        name: "双鸭山市"
      },
      {
        code: "230600",
        name: "大庆市"
      },
      {
        code: "230700",
        name: "伊春市"
      },
      {
        code: "230800",
        name: "佳木斯市"
      },
      {
        code: "230900",
        name: "七台河市"
      },
      {
        code: "231000",
        name: "牡丹江市"
      },
      {
        code: "231100",
        name: "黑河市"
      },
      {
        code: "231200",
        name: "绥化市"
      },
      {
        code: "232700",
        name: "大兴安岭地区"
      }
    ],
    [
      {
        code: "310100",
        name: "上海市"
      }
    ],
    [
      {
        code: "320100",
        name: "南京市"
      },
      {
        code: "320200",
        name: "无锡市"
      },
      {
        code: "320300",
        name: "徐州市"
      },
      {
        code: "320400",
        name: "常州市"
      },
      {
        code: "320500",
        name: "苏州市"
      },
      {
        code: "320600",
        name: "南通市"
      },
      {
        code: "320700",
        name: "连云港市"
      },
      {
        code: "320800",
        name: "淮安市"
      },
      {
        code: "320900",
        name: "盐城市"
      },
      {
        code: "321000",
        name: "扬州市"
      },
      {
        code: "321100",
        name: "镇江市"
      },
      {
        code: "321200",
        name: "泰州市"
      },
      {
        code: "321300",
        name: "宿迁市"
      }
    ],
    [
      {
        code: "330100",
        name: "杭州市"
      },
      {
        code: "330200",
        name: "宁波市"
      },
      {
        code: "330300",
        name: "温州市"
      },
      {
        code: "330400",
        name: "嘉兴市"
      },
      {
        code: "330500",
        name: "湖州市"
      },
      {
        code: "330600",
        name: "绍兴市"
      },
      {
        code: "330700",
        name: "金华市"
      },
      {
        code: "330800",
        name: "衢州市"
      },
      {
        code: "330900",
        name: "舟山市"
      },
      {
        code: "331000",
        name: "台州市"
      },
      {
        code: "331100",
        name: "丽水市"
      }
    ],
    [
      {
        code: "340100",
        name: "合肥市"
      },
      {
        code: "340200",
        name: "芜湖市"
      },
      {
        code: "340300",
        name: "蚌埠市"
      },
      {
        code: "340400",
        name: "淮南市"
      },
      {
        code: "340500",
        name: "马鞍山市"
      },
      {
        code: "340600",
        name: "淮北市"
      },
      {
        code: "340700",
        name: "铜陵市"
      },
      {
        code: "340800",
        name: "安庆市"
      },
      {
        code: "341000",
        name: "黄山市"
      },
      {
        code: "341100",
        name: "滁州市"
      },
      {
        code: "341200",
        name: "阜阳市"
      },
      {
        code: "341300",
        name: "宿州市"
      },
      {
        code: "341500",
        name: "六安市"
      },
      {
        code: "341600",
        name: "亳州市"
      },
      {
        code: "341700",
        name: "池州市"
      },
      {
        code: "341800",
        name: "宣城市"
      }
    ],
    [
      {
        code: "350100",
        name: "福州市"
      },
      {
        code: "350200",
        name: "厦门市"
      },
      {
        code: "350300",
        name: "莆田市"
      },
      {
        code: "350400",
        name: "三明市"
      },
      {
        code: "350500",
        name: "泉州市"
      },
      {
        code: "350600",
        name: "漳州市"
      },
      {
        code: "350700",
        name: "南平市"
      },
      {
        code: "350800",
        name: "龙岩市"
      },
      {
        code: "350900",
        name: "宁德市"
      }
    ],
    [
      {
        code: "360100",
        name: "南昌市"
      },
      {
        code: "360200",
        name: "景德镇市"
      },
      {
        code: "360300",
        name: "萍乡市"
      },
      {
        code: "360400",
        name: "九江市"
      },
      {
        code: "360500",
        name: "新余市"
      },
      {
        code: "360600",
        name: "鹰潭市"
      },
      {
        code: "360700",
        name: "赣州市"
      },
      {
        code: "360800",
        name: "吉安市"
      },
      {
        code: "360900",
        name: "宜春市"
      },
      {
        code: "361000",
        name: "抚州市"
      },
      {
        code: "361100",
        name: "上饶市"
      }
    ],
    [
      {
        code: "370100",
        name: "济南市"
      },
      {
        code: "370200",
        name: "青岛市"
      },
      {
        code: "370300",
        name: "淄博市"
      },
      {
        code: "370400",
        name: "枣庄市"
      },
      {
        code: "370500",
        name: "东营市"
      },
      {
        code: "370600",
        name: "烟台市"
      },
      {
        code: "370700",
        name: "潍坊市"
      },
      {
        code: "370800",
        name: "济宁市"
      },
      {
        code: "370900",
        name: "泰安市"
      },
      {
        code: "371000",
        name: "威海市"
      },
      {
        code: "371100",
        name: "日照市"
      },
      {
        code: "371200",
        name: "莱芜市"
      },
      {
        code: "371300",
        name: "临沂市"
      },
      {
        code: "371400",
        name: "德州市"
      },
      {
        code: "371500",
        name: "聊城市"
      },
      {
        code: "371600",
        name: "滨州市"
      },
      {
        code: "371700",
        name: "菏泽市"
      }
    ],
    [
      {
        code: "410100",
        name: "郑州市"
      },
      {
        code: "410200",
        name: "开封市"
      },
      {
        code: "410300",
        name: "洛阳市"
      },
      {
        code: "410400",
        name: "平顶山市"
      },
      {
        code: "410500",
        name: "安阳市"
      },
      {
        code: "410600",
        name: "鹤壁市"
      },
      {
        code: "410700",
        name: "新乡市"
      },
      {
        code: "410800",
        name: "焦作市"
      },
      {
        code: "410900",
        name: "濮阳市"
      },
      {
        code: "411000",
        name: "许昌市"
      },
      {
        code: "411100",
        name: "漯河市"
      },
      {
        code: "411200",
        name: "三门峡市"
      },
      {
        code: "411300",
        name: "南阳市"
      },
      {
        code: "411400",
        name: "商丘市"
      },
      {
        code: "411500",
        name: "信阳市"
      },
      {
        code: "411600",
        name: "周口市"
      },
      {
        code: "411700",
        name: "驻马店市"
      },
      {
        code: "419000",
        name: "省直辖县级行政区划"
      }
    ],
    [
      {
        code: "420100",
        name: "武汉市"
      },
      {
        code: "420200",
        name: "黄石市"
      },
      {
        code: "420300",
        name: "十堰市"
      },
      {
        code: "420500",
        name: "宜昌市"
      },
      {
        code: "420600",
        name: "襄阳市"
      },
      {
        code: "420700",
        name: "鄂州市"
      },
      {
        code: "420800",
        name: "荆门市"
      },
      {
        code: "420900",
        name: "孝感市"
      },
      {
        code: "421000",
        name: "荆州市"
      },
      {
        code: "421100",
        name: "黄冈市"
      },
      {
        code: "421200",
        name: "咸宁市"
      },
      {
        code: "421300",
        name: "随州市"
      },
      {
        code: "422800",
        name: "恩施土家族苗族自治州"
      },
      {
        code: "429000",
        name: "省直辖县级行政区划"
      }
    ],
    [
      {
        code: "430100",
        name: "长沙市"
      },
      {
        code: "430200",
        name: "株洲市"
      },
      {
        code: "430300",
        name: "湘潭市"
      },
      {
        code: "430400",
        name: "衡阳市"
      },
      {
        code: "430500",
        name: "邵阳市"
      },
      {
        code: "430600",
        name: "岳阳市"
      },
      {
        code: "430700",
        name: "常德市"
      },
      {
        code: "430800",
        name: "张家界市"
      },
      {
        code: "430900",
        name: "益阳市"
      },
      {
        code: "431000",
        name: "郴州市"
      },
      {
        code: "431100",
        name: "永州市"
      },
      {
        code: "431200",
        name: "怀化市"
      },
      {
        code: "431300",
        name: "娄底市"
      },
      {
        code: "433100",
        name: "湘西土家族苗族自治州"
      }
    ],
    [
      {
        code: "440100",
        name: "广州市"
      },
      {
        code: "440200",
        name: "韶关市"
      },
      {
        code: "440300",
        name: "深圳市"
      },
      {
        code: "440400",
        name: "珠海市"
      },
      {
        code: "440500",
        name: "汕头市"
      },
      {
        code: "440600",
        name: "佛山市"
      },
      {
        code: "440700",
        name: "江门市"
      },
      {
        code: "440800",
        name: "湛江市"
      },
      {
        code: "440900",
        name: "茂名市"
      },
      {
        code: "441200",
        name: "肇庆市"
      },
      {
        code: "441300",
        name: "惠州市"
      },
      {
        code: "441400",
        name: "梅州市"
      },
      {
        code: "441500",
        name: "汕尾市"
      },
      {
        code: "441600",
        name: "河源市"
      },
      {
        code: "441700",
        name: "阳江市"
      },
      {
        code: "441800",
        name: "清远市"
      },
      {
        code: "441900",
        name: "东莞市"
      },
      {
        code: "442000",
        name: "中山市"
      },
      {
        code: "445100",
        name: "潮州市"
      },
      {
        code: "445200",
        name: "揭阳市"
      },
      {
        code: "445300",
        name: "云浮市"
      }
    ],
    [
      {
        code: "450100",
        name: "南宁市"
      },
      {
        code: "450200",
        name: "柳州市"
      },
      {
        code: "450300",
        name: "桂林市"
      },
      {
        code: "450400",
        name: "梧州市"
      },
      {
        code: "450500",
        name: "北海市"
      },
      {
        code: "450600",
        name: "防城港市"
      },
      {
        code: "450700",
        name: "钦州市"
      },
      {
        code: "450800",
        name: "贵港市"
      },
      {
        code: "450900",
        name: "玉林市"
      },
      {
        code: "451000",
        name: "百色市"
      },
      {
        code: "451100",
        name: "贺州市"
      },
      {
        code: "451200",
        name: "河池市"
      },
      {
        code: "451300",
        name: "来宾市"
      },
      {
        code: "451400",
        name: "崇左市"
      }
    ],
    [
      {
        code: "460100",
        name: "海口市"
      },
      {
        code: "460200",
        name: "三亚市"
      },
      {
        code: "460300",
        name: "三沙市"
      },
      {
        code: "460400",
        name: "儋州市"
      },
      {
        code: "469000",
        name: "省直辖县级行政区划"
      }
    ],
    [
      {
        code: "500100",
        name: "重庆市"
      },
      {
        code: "500200",
        name: "县"
      }
    ],
    [
      {
        code: "510100",
        name: "成都市"
      },
      {
        code: "510300",
        name: "自贡市"
      },
      {
        code: "510400",
        name: "攀枝花市"
      },
      {
        code: "510500",
        name: "泸州市"
      },
      {
        code: "510600",
        name: "德阳市"
      },
      {
        code: "510700",
        name: "绵阳市"
      },
      {
        code: "510800",
        name: "广元市"
      },
      {
        code: "510900",
        name: "遂宁市"
      },
      {
        code: "511000",
        name: "内江市"
      },
      {
        code: "511100",
        name: "乐山市"
      },
      {
        code: "511300",
        name: "南充市"
      },
      {
        code: "511400",
        name: "眉山市"
      },
      {
        code: "511500",
        name: "宜宾市"
      },
      {
        code: "511600",
        name: "广安市"
      },
      {
        code: "511700",
        name: "达州市"
      },
      {
        code: "511800",
        name: "雅安市"
      },
      {
        code: "511900",
        name: "巴中市"
      },
      {
        code: "512000",
        name: "资阳市"
      },
      {
        code: "513200",
        name: "阿坝藏族羌族自治州"
      },
      {
        code: "513300",
        name: "甘孜藏族自治州"
      },
      {
        code: "513400",
        name: "凉山彝族自治州"
      }
    ],
    [
      {
        code: "520100",
        name: "贵阳市"
      },
      {
        code: "520200",
        name: "六盘水市"
      },
      {
        code: "520300",
        name: "遵义市"
      },
      {
        code: "520400",
        name: "安顺市"
      },
      {
        code: "520500",
        name: "毕节市"
      },
      {
        code: "520600",
        name: "铜仁市"
      },
      {
        code: "522300",
        name: "黔西南布依族苗族自治州"
      },
      {
        code: "522600",
        name: "黔东南苗族侗族自治州"
      },
      {
        code: "522700",
        name: "黔南布依族苗族自治州"
      }
    ],
    [
      {
        code: "530100",
        name: "昆明市"
      },
      {
        code: "530300",
        name: "曲靖市"
      },
      {
        code: "530400",
        name: "玉溪市"
      },
      {
        code: "530500",
        name: "保山市"
      },
      {
        code: "530600",
        name: "昭通市"
      },
      {
        code: "530700",
        name: "丽江市"
      },
      {
        code: "530800",
        name: "普洱市"
      },
      {
        code: "530900",
        name: "临沧市"
      },
      {
        code: "532300",
        name: "楚雄彝族自治州"
      },
      {
        code: "532500",
        name: "红河哈尼族彝族自治州"
      },
      {
        code: "532600",
        name: "文山壮族苗族自治州"
      },
      {
        code: "532800",
        name: "西双版纳傣族自治州"
      },
      {
        code: "532900",
        name: "大理白族自治州"
      },
      {
        code: "533100",
        name: "德宏傣族景颇族自治州"
      },
      {
        code: "533300",
        name: "怒江傈僳族自治州"
      },
      {
        code: "533400",
        name: "迪庆藏族自治州"
      }
    ],
    [
      {
        code: "540100",
        name: "拉萨市"
      },
      {
        code: "540200",
        name: "日喀则市"
      },
      {
        code: "540300",
        name: "昌都市"
      },
      {
        code: "540400",
        name: "林芝市"
      },
      {
        code: "540500",
        name: "山南市"
      },
      {
        code: "542400",
        name: "那曲地区"
      },
      {
        code: "542500",
        name: "阿里地区"
      }
    ],
    [
      {
        code: "610100",
        name: "西安市"
      },
      {
        code: "610200",
        name: "铜川市"
      },
      {
        code: "610300",
        name: "宝鸡市"
      },
      {
        code: "610400",
        name: "咸阳市"
      },
      {
        code: "610500",
        name: "渭南市"
      },
      {
        code: "610600",
        name: "延安市"
      },
      {
        code: "610700",
        name: "汉中市"
      },
      {
        code: "610800",
        name: "榆林市"
      },
      {
        code: "610900",
        name: "安康市"
      },
      {
        code: "611000",
        name: "商洛市"
      }
    ],
    [
      {
        code: "620100",
        name: "兰州市"
      },
      {
        code: "620200",
        name: "嘉峪关市"
      },
      {
        code: "620300",
        name: "金昌市"
      },
      {
        code: "620400",
        name: "白银市"
      },
      {
        code: "620500",
        name: "天水市"
      },
      {
        code: "620600",
        name: "武威市"
      },
      {
        code: "620700",
        name: "张掖市"
      },
      {
        code: "620800",
        name: "平凉市"
      },
      {
        code: "620900",
        name: "酒泉市"
      },
      {
        code: "621000",
        name: "庆阳市"
      },
      {
        code: "621100",
        name: "定西市"
      },
      {
        code: "621200",
        name: "陇南市"
      },
      {
        code: "622900",
        name: "临夏回族自治州"
      },
      {
        code: "623000",
        name: "甘南藏族自治州"
      }
    ],
    [
      {
        code: "630100",
        name: "西宁市"
      },
      {
        code: "630200",
        name: "海东市"
      },
      {
        code: "632200",
        name: "海北藏族自治州"
      },
      {
        code: "632300",
        name: "黄南藏族自治州"
      },
      {
        code: "632500",
        name: "海南藏族自治州"
      },
      {
        code: "632600",
        name: "果洛藏族自治州"
      },
      {
        code: "632700",
        name: "玉树藏族自治州"
      },
      {
        code: "632800",
        name: "海西蒙古族藏族自治州"
      }
    ],
    [
      {
        code: "640100",
        name: "银川市"
      },
      {
        code: "640200",
        name: "石嘴山市"
      },
      {
        code: "640300",
        name: "吴忠市"
      },
      {
        code: "640400",
        name: "固原市"
      },
      {
        code: "640500",
        name: "中卫市"
      }
    ],
    [
      {
        code: "650100",
        name: "乌鲁木齐市"
      },
      {
        code: "650200",
        name: "克拉玛依市"
      },
      {
        code: "650400",
        name: "吐鲁番市"
      },
      {
        code: "650500",
        name: "哈密市"
      },
      {
        code: "652300",
        name: "昌吉回族自治州"
      },
      {
        code: "652700",
        name: "博尔塔拉蒙古自治州"
      },
      {
        code: "652800",
        name: "巴音郭楞蒙古自治州"
      },
      {
        code: "652900",
        name: "阿克苏地区"
      },
      {
        code: "653000",
        name: "克孜勒苏柯尔克孜自治州"
      },
      {
        code: "653100",
        name: "喀什地区"
      },
      {
        code: "653200",
        name: "和田地区"
      },
      {
        code: "654000",
        name: "伊犁哈萨克自治州"
      },
      {
        code: "654200",
        name: "塔城地区"
      },
      {
        code: "654300",
        name: "阿勒泰地区"
      },
      {
        code: "659000",
        name: "自治区直辖县级行政区划"
      }
    ],
    [
      {
        code: "710100",
        name: "台北市"
      },
      {
        code: "710200",
        name: "高雄市"
      },
      {
        code: "710300",
        name: "台南市"
      },
      {
        code: "710400",
        name: "台中市"
      },
      {
        code: "710600",
        name: "南投县"
      },
      {
        code: "710700",
        name: "基隆市"
      },
      {
        code: "710800",
        name: "新竹市"
      },
      {
        code: "710900",
        name: "嘉义市"
      },
      {
        code: "711100",
        name: "新北市"
      },
      {
        code: "711200",
        name: "宜兰县"
      },
      {
        code: "711300",
        name: "新竹县"
      },
      {
        code: "711400",
        name: "桃园市"
      },
      {
        code: "711500",
        name: "苗栗县"
      },
      {
        code: "711700",
        name: "彰化县"
      },
      {
        code: "711900",
        name: "嘉义县"
      },
      {
        code: "712100",
        name: "云林县"
      },
      {
        code: "712400",
        name: "屏东县"
      },
      {
        code: "712500",
        name: "台东县"
      },
      {
        code: "712600",
        name: "花莲县"
      },
      {
        code: "712700",
        name: "澎湖县"
      }
    ],
    [
      {
        code: "810100",
        name: "香港特别行政区"
      }
    ],
    [
      {
        code: "820100",
        name: "澳门特别行政区"
      }
    ]
  ];
  const areas = [
    [
      [
        {
          code: "110101",
          name: "东城区"
        },
        {
          code: "110102",
          name: "西城区"
        },
        {
          code: "110105",
          name: "朝阳区"
        },
        {
          code: "110106",
          name: "丰台区"
        },
        {
          code: "110107",
          name: "石景山区"
        },
        {
          code: "110108",
          name: "海淀区"
        },
        {
          code: "110109",
          name: "门头沟区"
        },
        {
          code: "110111",
          name: "房山区"
        },
        {
          code: "110112",
          name: "通州区"
        },
        {
          code: "110113",
          name: "顺义区"
        },
        {
          code: "110114",
          name: "昌平区"
        },
        {
          code: "110115",
          name: "大兴区"
        },
        {
          code: "110116",
          name: "怀柔区"
        },
        {
          code: "110117",
          name: "平谷区"
        },
        {
          code: "110118",
          name: "密云区"
        },
        {
          code: "110119",
          name: "延庆区"
        }
      ]
    ],
    [
      [
        {
          code: "120101",
          name: "和平区"
        },
        {
          code: "120102",
          name: "河东区"
        },
        {
          code: "120103",
          name: "河西区"
        },
        {
          code: "120104",
          name: "南开区"
        },
        {
          code: "120105",
          name: "河北区"
        },
        {
          code: "120106",
          name: "红桥区"
        },
        {
          code: "120110",
          name: "东丽区"
        },
        {
          code: "120111",
          name: "西青区"
        },
        {
          code: "120112",
          name: "津南区"
        },
        {
          code: "120113",
          name: "北辰区"
        },
        {
          code: "120114",
          name: "武清区"
        },
        {
          code: "120115",
          name: "宝坻区"
        },
        {
          code: "120116",
          name: "滨海新区"
        },
        {
          code: "120117",
          name: "宁河区"
        },
        {
          code: "120118",
          name: "静海区"
        },
        {
          code: "120119",
          name: "蓟州区"
        }
      ]
    ],
    [
      [
        {
          code: "130102",
          name: "长安区"
        },
        {
          code: "130104",
          name: "桥西区"
        },
        {
          code: "130105",
          name: "新华区"
        },
        {
          code: "130107",
          name: "井陉矿区"
        },
        {
          code: "130108",
          name: "裕华区"
        },
        {
          code: "130109",
          name: "藁城区"
        },
        {
          code: "130110",
          name: "鹿泉区"
        },
        {
          code: "130111",
          name: "栾城区"
        },
        {
          code: "130121",
          name: "井陉县"
        },
        {
          code: "130123",
          name: "正定县"
        },
        {
          code: "130125",
          name: "行唐县"
        },
        {
          code: "130126",
          name: "灵寿县"
        },
        {
          code: "130127",
          name: "高邑县"
        },
        {
          code: "130128",
          name: "深泽县"
        },
        {
          code: "130129",
          name: "赞皇县"
        },
        {
          code: "130130",
          name: "无极县"
        },
        {
          code: "130131",
          name: "平山县"
        },
        {
          code: "130132",
          name: "元氏县"
        },
        {
          code: "130133",
          name: "赵县"
        },
        {
          code: "130181",
          name: "辛集市"
        },
        {
          code: "130183",
          name: "晋州市"
        },
        {
          code: "130184",
          name: "新乐市"
        }
      ],
      [
        {
          code: "130202",
          name: "路南区"
        },
        {
          code: "130203",
          name: "路北区"
        },
        {
          code: "130204",
          name: "古冶区"
        },
        {
          code: "130205",
          name: "开平区"
        },
        {
          code: "130207",
          name: "丰南区"
        },
        {
          code: "130208",
          name: "丰润区"
        },
        {
          code: "130209",
          name: "曹妃甸区"
        },
        {
          code: "130223",
          name: "滦县"
        },
        {
          code: "130224",
          name: "滦南县"
        },
        {
          code: "130225",
          name: "乐亭县"
        },
        {
          code: "130227",
          name: "迁西县"
        },
        {
          code: "130229",
          name: "玉田县"
        },
        {
          code: "130281",
          name: "遵化市"
        },
        {
          code: "130283",
          name: "迁安市"
        }
      ],
      [
        {
          code: "130302",
          name: "海港区"
        },
        {
          code: "130303",
          name: "山海关区"
        },
        {
          code: "130304",
          name: "北戴河区"
        },
        {
          code: "130306",
          name: "抚宁区"
        },
        {
          code: "130321",
          name: "青龙满族自治县"
        },
        {
          code: "130322",
          name: "昌黎县"
        },
        {
          code: "130324",
          name: "卢龙县"
        }
      ],
      [
        {
          code: "130402",
          name: "邯山区"
        },
        {
          code: "130403",
          name: "丛台区"
        },
        {
          code: "130404",
          name: "复兴区"
        },
        {
          code: "130406",
          name: "峰峰矿区"
        },
        {
          code: "130407",
          name: "肥乡区"
        },
        {
          code: "130408",
          name: "永年区"
        },
        {
          code: "130423",
          name: "临漳县"
        },
        {
          code: "130424",
          name: "成安县"
        },
        {
          code: "130425",
          name: "大名县"
        },
        {
          code: "130426",
          name: "涉县"
        },
        {
          code: "130427",
          name: "磁县"
        },
        {
          code: "130430",
          name: "邱县"
        },
        {
          code: "130431",
          name: "鸡泽县"
        },
        {
          code: "130432",
          name: "广平县"
        },
        {
          code: "130433",
          name: "馆陶县"
        },
        {
          code: "130434",
          name: "魏县"
        },
        {
          code: "130435",
          name: "曲周县"
        },
        {
          code: "130481",
          name: "武安市"
        }
      ],
      [
        {
          code: "130502",
          name: "桥东区"
        },
        {
          code: "130503",
          name: "桥西区"
        },
        {
          code: "130521",
          name: "邢台县"
        },
        {
          code: "130522",
          name: "临城县"
        },
        {
          code: "130523",
          name: "内丘县"
        },
        {
          code: "130524",
          name: "柏乡县"
        },
        {
          code: "130525",
          name: "隆尧县"
        },
        {
          code: "130526",
          name: "任县"
        },
        {
          code: "130527",
          name: "南和县"
        },
        {
          code: "130528",
          name: "宁晋县"
        },
        {
          code: "130529",
          name: "巨鹿县"
        },
        {
          code: "130530",
          name: "新河县"
        },
        {
          code: "130531",
          name: "广宗县"
        },
        {
          code: "130532",
          name: "平乡县"
        },
        {
          code: "130533",
          name: "威县"
        },
        {
          code: "130534",
          name: "清河县"
        },
        {
          code: "130535",
          name: "临西县"
        },
        {
          code: "130581",
          name: "南宫市"
        },
        {
          code: "130582",
          name: "沙河市"
        }
      ],
      [
        {
          code: "130602",
          name: "竞秀区"
        },
        {
          code: "130606",
          name: "莲池区"
        },
        {
          code: "130607",
          name: "满城区"
        },
        {
          code: "130608",
          name: "清苑区"
        },
        {
          code: "130609",
          name: "徐水区"
        },
        {
          code: "130623",
          name: "涞水县"
        },
        {
          code: "130624",
          name: "阜平县"
        },
        {
          code: "130626",
          name: "定兴县"
        },
        {
          code: "130627",
          name: "唐县"
        },
        {
          code: "130628",
          name: "高阳县"
        },
        {
          code: "130629",
          name: "容城县"
        },
        {
          code: "130630",
          name: "涞源县"
        },
        {
          code: "130631",
          name: "望都县"
        },
        {
          code: "130632",
          name: "安新县"
        },
        {
          code: "130633",
          name: "易县"
        },
        {
          code: "130634",
          name: "曲阳县"
        },
        {
          code: "130635",
          name: "蠡县"
        },
        {
          code: "130636",
          name: "顺平县"
        },
        {
          code: "130637",
          name: "博野县"
        },
        {
          code: "130638",
          name: "雄县"
        },
        {
          code: "130681",
          name: "涿州市"
        },
        {
          code: "130682",
          name: "定州市"
        },
        {
          code: "130683",
          name: "安国市"
        },
        {
          code: "130684",
          name: "高碑店市"
        }
      ],
      [
        {
          code: "130702",
          name: "桥东区"
        },
        {
          code: "130703",
          name: "桥西区"
        },
        {
          code: "130705",
          name: "宣化区"
        },
        {
          code: "130706",
          name: "下花园区"
        },
        {
          code: "130708",
          name: "万全区"
        },
        {
          code: "130709",
          name: "崇礼区"
        },
        {
          code: "130722",
          name: "张北县"
        },
        {
          code: "130723",
          name: "康保县"
        },
        {
          code: "130724",
          name: "沽源县"
        },
        {
          code: "130725",
          name: "尚义县"
        },
        {
          code: "130726",
          name: "蔚县"
        },
        {
          code: "130727",
          name: "阳原县"
        },
        {
          code: "130728",
          name: "怀安县"
        },
        {
          code: "130730",
          name: "怀来县"
        },
        {
          code: "130731",
          name: "涿鹿县"
        },
        {
          code: "130732",
          name: "赤城县"
        }
      ],
      [
        {
          code: "130802",
          name: "双桥区"
        },
        {
          code: "130803",
          name: "双滦区"
        },
        {
          code: "130804",
          name: "鹰手营子矿区"
        },
        {
          code: "130821",
          name: "承德县"
        },
        {
          code: "130822",
          name: "兴隆县"
        },
        {
          code: "130824",
          name: "滦平县"
        },
        {
          code: "130825",
          name: "隆化县"
        },
        {
          code: "130826",
          name: "丰宁满族自治县"
        },
        {
          code: "130827",
          name: "宽城满族自治县"
        },
        {
          code: "130828",
          name: "围场满族蒙古族自治县"
        },
        {
          code: "130881",
          name: "平泉市"
        }
      ],
      [
        {
          code: "130902",
          name: "新华区"
        },
        {
          code: "130903",
          name: "运河区"
        },
        {
          code: "130921",
          name: "沧县"
        },
        {
          code: "130922",
          name: "青县"
        },
        {
          code: "130923",
          name: "东光县"
        },
        {
          code: "130924",
          name: "海兴县"
        },
        {
          code: "130925",
          name: "盐山县"
        },
        {
          code: "130926",
          name: "肃宁县"
        },
        {
          code: "130927",
          name: "南皮县"
        },
        {
          code: "130928",
          name: "吴桥县"
        },
        {
          code: "130929",
          name: "献县"
        },
        {
          code: "130930",
          name: "孟村回族自治县"
        },
        {
          code: "130981",
          name: "泊头市"
        },
        {
          code: "130982",
          name: "任丘市"
        },
        {
          code: "130983",
          name: "黄骅市"
        },
        {
          code: "130984",
          name: "河间市"
        }
      ],
      [
        {
          code: "131002",
          name: "安次区"
        },
        {
          code: "131003",
          name: "广阳区"
        },
        {
          code: "131022",
          name: "固安县"
        },
        {
          code: "131023",
          name: "永清县"
        },
        {
          code: "131024",
          name: "香河县"
        },
        {
          code: "131025",
          name: "大城县"
        },
        {
          code: "131026",
          name: "文安县"
        },
        {
          code: "131028",
          name: "大厂回族自治县"
        },
        {
          code: "131081",
          name: "霸州市"
        },
        {
          code: "131082",
          name: "三河市"
        }
      ],
      [
        {
          code: "131102",
          name: "桃城区"
        },
        {
          code: "131103",
          name: "冀州区"
        },
        {
          code: "131121",
          name: "枣强县"
        },
        {
          code: "131122",
          name: "武邑县"
        },
        {
          code: "131123",
          name: "武强县"
        },
        {
          code: "131124",
          name: "饶阳县"
        },
        {
          code: "131125",
          name: "安平县"
        },
        {
          code: "131126",
          name: "故城县"
        },
        {
          code: "131127",
          name: "景县"
        },
        {
          code: "131128",
          name: "阜城县"
        },
        {
          code: "131182",
          name: "深州市"
        }
      ]
    ],
    [
      [
        {
          code: "140105",
          name: "小店区"
        },
        {
          code: "140106",
          name: "迎泽区"
        },
        {
          code: "140107",
          name: "杏花岭区"
        },
        {
          code: "140108",
          name: "尖草坪区"
        },
        {
          code: "140109",
          name: "万柏林区"
        },
        {
          code: "140110",
          name: "晋源区"
        },
        {
          code: "140121",
          name: "清徐县"
        },
        {
          code: "140122",
          name: "阳曲县"
        },
        {
          code: "140123",
          name: "娄烦县"
        },
        {
          code: "140181",
          name: "古交市"
        }
      ],
      [
        {
          code: "140202",
          name: "城区"
        },
        {
          code: "140203",
          name: "矿区"
        },
        {
          code: "140211",
          name: "南郊区"
        },
        {
          code: "140212",
          name: "新荣区"
        },
        {
          code: "140221",
          name: "阳高县"
        },
        {
          code: "140222",
          name: "天镇县"
        },
        {
          code: "140223",
          name: "广灵县"
        },
        {
          code: "140224",
          name: "灵丘县"
        },
        {
          code: "140225",
          name: "浑源县"
        },
        {
          code: "140226",
          name: "左云县"
        },
        {
          code: "140227",
          name: "大同县"
        }
      ],
      [
        {
          code: "140302",
          name: "城区"
        },
        {
          code: "140303",
          name: "矿区"
        },
        {
          code: "140311",
          name: "郊区"
        },
        {
          code: "140321",
          name: "平定县"
        },
        {
          code: "140322",
          name: "盂县"
        }
      ],
      [
        {
          code: "140402",
          name: "城区"
        },
        {
          code: "140411",
          name: "郊区"
        },
        {
          code: "140421",
          name: "长治县"
        },
        {
          code: "140423",
          name: "襄垣县"
        },
        {
          code: "140424",
          name: "屯留县"
        },
        {
          code: "140425",
          name: "平顺县"
        },
        {
          code: "140426",
          name: "黎城县"
        },
        {
          code: "140427",
          name: "壶关县"
        },
        {
          code: "140428",
          name: "长子县"
        },
        {
          code: "140429",
          name: "武乡县"
        },
        {
          code: "140430",
          name: "沁县"
        },
        {
          code: "140431",
          name: "沁源县"
        },
        {
          code: "140481",
          name: "潞城市"
        }
      ],
      [
        {
          code: "140502",
          name: "城区"
        },
        {
          code: "140521",
          name: "沁水县"
        },
        {
          code: "140522",
          name: "阳城县"
        },
        {
          code: "140524",
          name: "陵川县"
        },
        {
          code: "140525",
          name: "泽州县"
        },
        {
          code: "140581",
          name: "高平市"
        }
      ],
      [
        {
          code: "140602",
          name: "朔城区"
        },
        {
          code: "140603",
          name: "平鲁区"
        },
        {
          code: "140621",
          name: "山阴县"
        },
        {
          code: "140622",
          name: "应县"
        },
        {
          code: "140623",
          name: "右玉县"
        },
        {
          code: "140624",
          name: "怀仁县"
        }
      ],
      [
        {
          code: "140702",
          name: "榆次区"
        },
        {
          code: "140721",
          name: "榆社县"
        },
        {
          code: "140722",
          name: "左权县"
        },
        {
          code: "140723",
          name: "和顺县"
        },
        {
          code: "140724",
          name: "昔阳县"
        },
        {
          code: "140725",
          name: "寿阳县"
        },
        {
          code: "140726",
          name: "太谷县"
        },
        {
          code: "140727",
          name: "祁县"
        },
        {
          code: "140728",
          name: "平遥县"
        },
        {
          code: "140729",
          name: "灵石县"
        },
        {
          code: "140781",
          name: "介休市"
        }
      ],
      [
        {
          code: "140802",
          name: "盐湖区"
        },
        {
          code: "140821",
          name: "临猗县"
        },
        {
          code: "140822",
          name: "万荣县"
        },
        {
          code: "140823",
          name: "闻喜县"
        },
        {
          code: "140824",
          name: "稷山县"
        },
        {
          code: "140825",
          name: "新绛县"
        },
        {
          code: "140826",
          name: "绛县"
        },
        {
          code: "140827",
          name: "垣曲县"
        },
        {
          code: "140828",
          name: "夏县"
        },
        {
          code: "140829",
          name: "平陆县"
        },
        {
          code: "140830",
          name: "芮城县"
        },
        {
          code: "140881",
          name: "永济市"
        },
        {
          code: "140882",
          name: "河津市"
        }
      ],
      [
        {
          code: "140902",
          name: "忻府区"
        },
        {
          code: "140921",
          name: "定襄县"
        },
        {
          code: "140922",
          name: "五台县"
        },
        {
          code: "140923",
          name: "代县"
        },
        {
          code: "140924",
          name: "繁峙县"
        },
        {
          code: "140925",
          name: "宁武县"
        },
        {
          code: "140926",
          name: "静乐县"
        },
        {
          code: "140927",
          name: "神池县"
        },
        {
          code: "140928",
          name: "五寨县"
        },
        {
          code: "140929",
          name: "岢岚县"
        },
        {
          code: "140930",
          name: "河曲县"
        },
        {
          code: "140931",
          name: "保德县"
        },
        {
          code: "140932",
          name: "偏关县"
        },
        {
          code: "140981",
          name: "原平市"
        }
      ],
      [
        {
          code: "141002",
          name: "尧都区"
        },
        {
          code: "141021",
          name: "曲沃县"
        },
        {
          code: "141022",
          name: "翼城县"
        },
        {
          code: "141023",
          name: "襄汾县"
        },
        {
          code: "141024",
          name: "洪洞县"
        },
        {
          code: "141025",
          name: "古县"
        },
        {
          code: "141026",
          name: "安泽县"
        },
        {
          code: "141027",
          name: "浮山县"
        },
        {
          code: "141028",
          name: "吉县"
        },
        {
          code: "141029",
          name: "乡宁县"
        },
        {
          code: "141030",
          name: "大宁县"
        },
        {
          code: "141031",
          name: "隰县"
        },
        {
          code: "141032",
          name: "永和县"
        },
        {
          code: "141033",
          name: "蒲县"
        },
        {
          code: "141034",
          name: "汾西县"
        },
        {
          code: "141081",
          name: "侯马市"
        },
        {
          code: "141082",
          name: "霍州市"
        }
      ],
      [
        {
          code: "141102",
          name: "离石区"
        },
        {
          code: "141121",
          name: "文水县"
        },
        {
          code: "141122",
          name: "交城县"
        },
        {
          code: "141123",
          name: "兴县"
        },
        {
          code: "141124",
          name: "临县"
        },
        {
          code: "141125",
          name: "柳林县"
        },
        {
          code: "141126",
          name: "石楼县"
        },
        {
          code: "141127",
          name: "岚县"
        },
        {
          code: "141128",
          name: "方山县"
        },
        {
          code: "141129",
          name: "中阳县"
        },
        {
          code: "141130",
          name: "交口县"
        },
        {
          code: "141181",
          name: "孝义市"
        },
        {
          code: "141182",
          name: "汾阳市"
        }
      ]
    ],
    [
      [
        {
          code: "150102",
          name: "新城区"
        },
        {
          code: "150103",
          name: "回民区"
        },
        {
          code: "150104",
          name: "玉泉区"
        },
        {
          code: "150105",
          name: "赛罕区"
        },
        {
          code: "150121",
          name: "土默特左旗"
        },
        {
          code: "150122",
          name: "托克托县"
        },
        {
          code: "150123",
          name: "和林格尔县"
        },
        {
          code: "150124",
          name: "清水河县"
        },
        {
          code: "150125",
          name: "武川县"
        }
      ],
      [
        {
          code: "150202",
          name: "东河区"
        },
        {
          code: "150203",
          name: "昆都仑区"
        },
        {
          code: "150204",
          name: "青山区"
        },
        {
          code: "150205",
          name: "石拐区"
        },
        {
          code: "150206",
          name: "白云鄂博矿区"
        },
        {
          code: "150207",
          name: "九原区"
        },
        {
          code: "150221",
          name: "土默特右旗"
        },
        {
          code: "150222",
          name: "固阳县"
        },
        {
          code: "150223",
          name: "达尔罕茂明安联合旗"
        }
      ],
      [
        {
          code: "150302",
          name: "海勃湾区"
        },
        {
          code: "150303",
          name: "海南区"
        },
        {
          code: "150304",
          name: "乌达区"
        }
      ],
      [
        {
          code: "150402",
          name: "红山区"
        },
        {
          code: "150403",
          name: "元宝山区"
        },
        {
          code: "150404",
          name: "松山区"
        },
        {
          code: "150421",
          name: "阿鲁科尔沁旗"
        },
        {
          code: "150422",
          name: "巴林左旗"
        },
        {
          code: "150423",
          name: "巴林右旗"
        },
        {
          code: "150424",
          name: "林西县"
        },
        {
          code: "150425",
          name: "克什克腾旗"
        },
        {
          code: "150426",
          name: "翁牛特旗"
        },
        {
          code: "150428",
          name: "喀喇沁旗"
        },
        {
          code: "150429",
          name: "宁城县"
        },
        {
          code: "150430",
          name: "敖汉旗"
        }
      ],
      [
        {
          code: "150502",
          name: "科尔沁区"
        },
        {
          code: "150521",
          name: "科尔沁左翼中旗"
        },
        {
          code: "150522",
          name: "科尔沁左翼后旗"
        },
        {
          code: "150523",
          name: "开鲁县"
        },
        {
          code: "150524",
          name: "库伦旗"
        },
        {
          code: "150525",
          name: "奈曼旗"
        },
        {
          code: "150526",
          name: "扎鲁特旗"
        },
        {
          code: "150581",
          name: "霍林郭勒市"
        }
      ],
      [
        {
          code: "150602",
          name: "东胜区"
        },
        {
          code: "150603",
          name: "康巴什区"
        },
        {
          code: "150621",
          name: "达拉特旗"
        },
        {
          code: "150622",
          name: "准格尔旗"
        },
        {
          code: "150623",
          name: "鄂托克前旗"
        },
        {
          code: "150624",
          name: "鄂托克旗"
        },
        {
          code: "150625",
          name: "杭锦旗"
        },
        {
          code: "150626",
          name: "乌审旗"
        },
        {
          code: "150627",
          name: "伊金霍洛旗"
        }
      ],
      [
        {
          code: "150702",
          name: "海拉尔区"
        },
        {
          code: "150703",
          name: "扎赉诺尔区"
        },
        {
          code: "150721",
          name: "阿荣旗"
        },
        {
          code: "150722",
          name: "莫力达瓦达斡尔族自治旗"
        },
        {
          code: "150723",
          name: "鄂伦春自治旗"
        },
        {
          code: "150724",
          name: "鄂温克族自治旗"
        },
        {
          code: "150725",
          name: "陈巴尔虎旗"
        },
        {
          code: "150726",
          name: "新巴尔虎左旗"
        },
        {
          code: "150727",
          name: "新巴尔虎右旗"
        },
        {
          code: "150781",
          name: "满洲里市"
        },
        {
          code: "150782",
          name: "牙克石市"
        },
        {
          code: "150783",
          name: "扎兰屯市"
        },
        {
          code: "150784",
          name: "额尔古纳市"
        },
        {
          code: "150785",
          name: "根河市"
        }
      ],
      [
        {
          code: "150802",
          name: "临河区"
        },
        {
          code: "150821",
          name: "五原县"
        },
        {
          code: "150822",
          name: "磴口县"
        },
        {
          code: "150823",
          name: "乌拉特前旗"
        },
        {
          code: "150824",
          name: "乌拉特中旗"
        },
        {
          code: "150825",
          name: "乌拉特后旗"
        },
        {
          code: "150826",
          name: "杭锦后旗"
        }
      ],
      [
        {
          code: "150902",
          name: "集宁区"
        },
        {
          code: "150921",
          name: "卓资县"
        },
        {
          code: "150922",
          name: "化德县"
        },
        {
          code: "150923",
          name: "商都县"
        },
        {
          code: "150924",
          name: "兴和县"
        },
        {
          code: "150925",
          name: "凉城县"
        },
        {
          code: "150926",
          name: "察哈尔右翼前旗"
        },
        {
          code: "150927",
          name: "察哈尔右翼中旗"
        },
        {
          code: "150928",
          name: "察哈尔右翼后旗"
        },
        {
          code: "150929",
          name: "四子王旗"
        },
        {
          code: "150981",
          name: "丰镇市"
        }
      ],
      [
        {
          code: "152201",
          name: "乌兰浩特市"
        },
        {
          code: "152202",
          name: "阿尔山市"
        },
        {
          code: "152221",
          name: "科尔沁右翼前旗"
        },
        {
          code: "152222",
          name: "科尔沁右翼中旗"
        },
        {
          code: "152223",
          name: "扎赉特旗"
        },
        {
          code: "152224",
          name: "突泉县"
        }
      ],
      [
        {
          code: "152501",
          name: "二连浩特市"
        },
        {
          code: "152502",
          name: "锡林浩特市"
        },
        {
          code: "152522",
          name: "阿巴嘎旗"
        },
        {
          code: "152523",
          name: "苏尼特左旗"
        },
        {
          code: "152524",
          name: "苏尼特右旗"
        },
        {
          code: "152525",
          name: "东乌珠穆沁旗"
        },
        {
          code: "152526",
          name: "西乌珠穆沁旗"
        },
        {
          code: "152527",
          name: "太仆寺旗"
        },
        {
          code: "152528",
          name: "镶黄旗"
        },
        {
          code: "152529",
          name: "正镶白旗"
        },
        {
          code: "152530",
          name: "正蓝旗"
        },
        {
          code: "152531",
          name: "多伦县"
        }
      ],
      [
        {
          code: "152921",
          name: "阿拉善左旗"
        },
        {
          code: "152922",
          name: "阿拉善右旗"
        },
        {
          code: "152923",
          name: "额济纳旗"
        }
      ]
    ],
    [
      [
        {
          code: "210102",
          name: "和平区"
        },
        {
          code: "210103",
          name: "沈河区"
        },
        {
          code: "210104",
          name: "大东区"
        },
        {
          code: "210105",
          name: "皇姑区"
        },
        {
          code: "210106",
          name: "铁西区"
        },
        {
          code: "210111",
          name: "苏家屯区"
        },
        {
          code: "210112",
          name: "浑南区"
        },
        {
          code: "210113",
          name: "沈北新区"
        },
        {
          code: "210114",
          name: "于洪区"
        },
        {
          code: "210115",
          name: "辽中区"
        },
        {
          code: "210123",
          name: "康平县"
        },
        {
          code: "210124",
          name: "法库县"
        },
        {
          code: "210181",
          name: "新民市"
        }
      ],
      [
        {
          code: "210202",
          name: "中山区"
        },
        {
          code: "210203",
          name: "西岗区"
        },
        {
          code: "210204",
          name: "沙河口区"
        },
        {
          code: "210211",
          name: "甘井子区"
        },
        {
          code: "210212",
          name: "旅顺口区"
        },
        {
          code: "210213",
          name: "金州区"
        },
        {
          code: "210214",
          name: "普兰店区"
        },
        {
          code: "210224",
          name: "长海县"
        },
        {
          code: "210281",
          name: "瓦房店市"
        },
        {
          code: "210283",
          name: "庄河市"
        }
      ],
      [
        {
          code: "210302",
          name: "铁东区"
        },
        {
          code: "210303",
          name: "铁西区"
        },
        {
          code: "210304",
          name: "立山区"
        },
        {
          code: "210311",
          name: "千山区"
        },
        {
          code: "210321",
          name: "台安县"
        },
        {
          code: "210323",
          name: "岫岩满族自治县"
        },
        {
          code: "210381",
          name: "海城市"
        }
      ],
      [
        {
          code: "210402",
          name: "新抚区"
        },
        {
          code: "210403",
          name: "东洲区"
        },
        {
          code: "210404",
          name: "望花区"
        },
        {
          code: "210411",
          name: "顺城区"
        },
        {
          code: "210421",
          name: "抚顺县"
        },
        {
          code: "210422",
          name: "新宾满族自治县"
        },
        {
          code: "210423",
          name: "清原满族自治县"
        }
      ],
      [
        {
          code: "210502",
          name: "平山区"
        },
        {
          code: "210503",
          name: "溪湖区"
        },
        {
          code: "210504",
          name: "明山区"
        },
        {
          code: "210505",
          name: "南芬区"
        },
        {
          code: "210521",
          name: "本溪满族自治县"
        },
        {
          code: "210522",
          name: "桓仁满族自治县"
        }
      ],
      [
        {
          code: "210602",
          name: "元宝区"
        },
        {
          code: "210603",
          name: "振兴区"
        },
        {
          code: "210604",
          name: "振安区"
        },
        {
          code: "210624",
          name: "宽甸满族自治县"
        },
        {
          code: "210681",
          name: "东港市"
        },
        {
          code: "210682",
          name: "凤城市"
        }
      ],
      [
        {
          code: "210702",
          name: "古塔区"
        },
        {
          code: "210703",
          name: "凌河区"
        },
        {
          code: "210711",
          name: "太和区"
        },
        {
          code: "210726",
          name: "黑山县"
        },
        {
          code: "210727",
          name: "义县"
        },
        {
          code: "210781",
          name: "凌海市"
        },
        {
          code: "210782",
          name: "北镇市"
        }
      ],
      [
        {
          code: "210802",
          name: "站前区"
        },
        {
          code: "210803",
          name: "西市区"
        },
        {
          code: "210804",
          name: "鲅鱼圈区"
        },
        {
          code: "210811",
          name: "老边区"
        },
        {
          code: "210881",
          name: "盖州市"
        },
        {
          code: "210882",
          name: "大石桥市"
        }
      ],
      [
        {
          code: "210902",
          name: "海州区"
        },
        {
          code: "210903",
          name: "新邱区"
        },
        {
          code: "210904",
          name: "太平区"
        },
        {
          code: "210905",
          name: "清河门区"
        },
        {
          code: "210911",
          name: "细河区"
        },
        {
          code: "210921",
          name: "阜新蒙古族自治县"
        },
        {
          code: "210922",
          name: "彰武县"
        }
      ],
      [
        {
          code: "211002",
          name: "白塔区"
        },
        {
          code: "211003",
          name: "文圣区"
        },
        {
          code: "211004",
          name: "宏伟区"
        },
        {
          code: "211005",
          name: "弓长岭区"
        },
        {
          code: "211011",
          name: "太子河区"
        },
        {
          code: "211021",
          name: "辽阳县"
        },
        {
          code: "211081",
          name: "灯塔市"
        }
      ],
      [
        {
          code: "211102",
          name: "双台子区"
        },
        {
          code: "211103",
          name: "兴隆台区"
        },
        {
          code: "211104",
          name: "大洼区"
        },
        {
          code: "211122",
          name: "盘山县"
        }
      ],
      [
        {
          code: "211202",
          name: "银州区"
        },
        {
          code: "211204",
          name: "清河区"
        },
        {
          code: "211221",
          name: "铁岭县"
        },
        {
          code: "211223",
          name: "西丰县"
        },
        {
          code: "211224",
          name: "昌图县"
        },
        {
          code: "211281",
          name: "调兵山市"
        },
        {
          code: "211282",
          name: "开原市"
        }
      ],
      [
        {
          code: "211302",
          name: "双塔区"
        },
        {
          code: "211303",
          name: "龙城区"
        },
        {
          code: "211321",
          name: "朝阳县"
        },
        {
          code: "211322",
          name: "建平县"
        },
        {
          code: "211324",
          name: "喀喇沁左翼蒙古族自治县"
        },
        {
          code: "211381",
          name: "北票市"
        },
        {
          code: "211382",
          name: "凌源市"
        }
      ],
      [
        {
          code: "211402",
          name: "连山区"
        },
        {
          code: "211403",
          name: "龙港区"
        },
        {
          code: "211404",
          name: "南票区"
        },
        {
          code: "211421",
          name: "绥中县"
        },
        {
          code: "211422",
          name: "建昌县"
        },
        {
          code: "211481",
          name: "兴城市"
        }
      ]
    ],
    [
      [
        {
          code: "220102",
          name: "南关区"
        },
        {
          code: "220103",
          name: "宽城区"
        },
        {
          code: "220104",
          name: "朝阳区"
        },
        {
          code: "220105",
          name: "二道区"
        },
        {
          code: "220106",
          name: "绿园区"
        },
        {
          code: "220112",
          name: "双阳区"
        },
        {
          code: "220113",
          name: "九台区"
        },
        {
          code: "220122",
          name: "农安县"
        },
        {
          code: "220182",
          name: "榆树市"
        },
        {
          code: "220183",
          name: "德惠市"
        }
      ],
      [
        {
          code: "220202",
          name: "昌邑区"
        },
        {
          code: "220203",
          name: "龙潭区"
        },
        {
          code: "220204",
          name: "船营区"
        },
        {
          code: "220211",
          name: "丰满区"
        },
        {
          code: "220221",
          name: "永吉县"
        },
        {
          code: "220281",
          name: "蛟河市"
        },
        {
          code: "220282",
          name: "桦甸市"
        },
        {
          code: "220283",
          name: "舒兰市"
        },
        {
          code: "220284",
          name: "磐石市"
        }
      ],
      [
        {
          code: "220302",
          name: "铁西区"
        },
        {
          code: "220303",
          name: "铁东区"
        },
        {
          code: "220322",
          name: "梨树县"
        },
        {
          code: "220323",
          name: "伊通满族自治县"
        },
        {
          code: "220381",
          name: "公主岭市"
        },
        {
          code: "220382",
          name: "双辽市"
        }
      ],
      [
        {
          code: "220402",
          name: "龙山区"
        },
        {
          code: "220403",
          name: "西安区"
        },
        {
          code: "220421",
          name: "东丰县"
        },
        {
          code: "220422",
          name: "东辽县"
        }
      ],
      [
        {
          code: "220502",
          name: "东昌区"
        },
        {
          code: "220503",
          name: "二道江区"
        },
        {
          code: "220521",
          name: "通化县"
        },
        {
          code: "220523",
          name: "辉南县"
        },
        {
          code: "220524",
          name: "柳河县"
        },
        {
          code: "220581",
          name: "梅河口市"
        },
        {
          code: "220582",
          name: "集安市"
        }
      ],
      [
        {
          code: "220602",
          name: "浑江区"
        },
        {
          code: "220605",
          name: "江源区"
        },
        {
          code: "220621",
          name: "抚松县"
        },
        {
          code: "220622",
          name: "靖宇县"
        },
        {
          code: "220623",
          name: "长白朝鲜族自治县"
        },
        {
          code: "220681",
          name: "临江市"
        }
      ],
      [
        {
          code: "220702",
          name: "宁江区"
        },
        {
          code: "220721",
          name: "前郭尔罗斯蒙古族自治县"
        },
        {
          code: "220722",
          name: "长岭县"
        },
        {
          code: "220723",
          name: "乾安县"
        },
        {
          code: "220781",
          name: "扶余市"
        }
      ],
      [
        {
          code: "220802",
          name: "洮北区"
        },
        {
          code: "220821",
          name: "镇赉县"
        },
        {
          code: "220822",
          name: "通榆县"
        },
        {
          code: "220881",
          name: "洮南市"
        },
        {
          code: "220882",
          name: "大安市"
        }
      ],
      [
        {
          code: "222401",
          name: "延吉市"
        },
        {
          code: "222402",
          name: "图们市"
        },
        {
          code: "222403",
          name: "敦化市"
        },
        {
          code: "222404",
          name: "珲春市"
        },
        {
          code: "222405",
          name: "龙井市"
        },
        {
          code: "222406",
          name: "和龙市"
        },
        {
          code: "222424",
          name: "汪清县"
        },
        {
          code: "222426",
          name: "安图县"
        }
      ]
    ],
    [
      [
        {
          code: "230102",
          name: "道里区"
        },
        {
          code: "230103",
          name: "南岗区"
        },
        {
          code: "230104",
          name: "道外区"
        },
        {
          code: "230108",
          name: "平房区"
        },
        {
          code: "230109",
          name: "松北区"
        },
        {
          code: "230110",
          name: "香坊区"
        },
        {
          code: "230111",
          name: "呼兰区"
        },
        {
          code: "230112",
          name: "阿城区"
        },
        {
          code: "230113",
          name: "双城区"
        },
        {
          code: "230123",
          name: "依兰县"
        },
        {
          code: "230124",
          name: "方正县"
        },
        {
          code: "230125",
          name: "宾县"
        },
        {
          code: "230126",
          name: "巴彦县"
        },
        {
          code: "230127",
          name: "木兰县"
        },
        {
          code: "230128",
          name: "通河县"
        },
        {
          code: "230129",
          name: "延寿县"
        },
        {
          code: "230183",
          name: "尚志市"
        },
        {
          code: "230184",
          name: "五常市"
        }
      ],
      [
        {
          code: "230202",
          name: "龙沙区"
        },
        {
          code: "230203",
          name: "建华区"
        },
        {
          code: "230204",
          name: "铁锋区"
        },
        {
          code: "230205",
          name: "昂昂溪区"
        },
        {
          code: "230206",
          name: "富拉尔基区"
        },
        {
          code: "230207",
          name: "碾子山区"
        },
        {
          code: "230208",
          name: "梅里斯达斡尔族区"
        },
        {
          code: "230221",
          name: "龙江县"
        },
        {
          code: "230223",
          name: "依安县"
        },
        {
          code: "230224",
          name: "泰来县"
        },
        {
          code: "230225",
          name: "甘南县"
        },
        {
          code: "230227",
          name: "富裕县"
        },
        {
          code: "230229",
          name: "克山县"
        },
        {
          code: "230230",
          name: "克东县"
        },
        {
          code: "230231",
          name: "拜泉县"
        },
        {
          code: "230281",
          name: "讷河市"
        }
      ],
      [
        {
          code: "230302",
          name: "鸡冠区"
        },
        {
          code: "230303",
          name: "恒山区"
        },
        {
          code: "230304",
          name: "滴道区"
        },
        {
          code: "230305",
          name: "梨树区"
        },
        {
          code: "230306",
          name: "城子河区"
        },
        {
          code: "230307",
          name: "麻山区"
        },
        {
          code: "230321",
          name: "鸡东县"
        },
        {
          code: "230381",
          name: "虎林市"
        },
        {
          code: "230382",
          name: "密山市"
        }
      ],
      [
        {
          code: "230402",
          name: "向阳区"
        },
        {
          code: "230403",
          name: "工农区"
        },
        {
          code: "230404",
          name: "南山区"
        },
        {
          code: "230405",
          name: "兴安区"
        },
        {
          code: "230406",
          name: "东山区"
        },
        {
          code: "230407",
          name: "兴山区"
        },
        {
          code: "230421",
          name: "萝北县"
        },
        {
          code: "230422",
          name: "绥滨县"
        }
      ],
      [
        {
          code: "230502",
          name: "尖山区"
        },
        {
          code: "230503",
          name: "岭东区"
        },
        {
          code: "230505",
          name: "四方台区"
        },
        {
          code: "230506",
          name: "宝山区"
        },
        {
          code: "230521",
          name: "集贤县"
        },
        {
          code: "230522",
          name: "友谊县"
        },
        {
          code: "230523",
          name: "宝清县"
        },
        {
          code: "230524",
          name: "饶河县"
        }
      ],
      [
        {
          code: "230602",
          name: "萨尔图区"
        },
        {
          code: "230603",
          name: "龙凤区"
        },
        {
          code: "230604",
          name: "让胡路区"
        },
        {
          code: "230605",
          name: "红岗区"
        },
        {
          code: "230606",
          name: "大同区"
        },
        {
          code: "230621",
          name: "肇州县"
        },
        {
          code: "230622",
          name: "肇源县"
        },
        {
          code: "230623",
          name: "林甸县"
        },
        {
          code: "230624",
          name: "杜尔伯特蒙古族自治县"
        }
      ],
      [
        {
          code: "230702",
          name: "伊春区"
        },
        {
          code: "230703",
          name: "南岔区"
        },
        {
          code: "230704",
          name: "友好区"
        },
        {
          code: "230705",
          name: "西林区"
        },
        {
          code: "230706",
          name: "翠峦区"
        },
        {
          code: "230707",
          name: "新青区"
        },
        {
          code: "230708",
          name: "美溪区"
        },
        {
          code: "230709",
          name: "金山屯区"
        },
        {
          code: "230710",
          name: "五营区"
        },
        {
          code: "230711",
          name: "乌马河区"
        },
        {
          code: "230712",
          name: "汤旺河区"
        },
        {
          code: "230713",
          name: "带岭区"
        },
        {
          code: "230714",
          name: "乌伊岭区"
        },
        {
          code: "230715",
          name: "红星区"
        },
        {
          code: "230716",
          name: "上甘岭区"
        },
        {
          code: "230722",
          name: "嘉荫县"
        },
        {
          code: "230781",
          name: "铁力市"
        }
      ],
      [
        {
          code: "230803",
          name: "向阳区"
        },
        {
          code: "230804",
          name: "前进区"
        },
        {
          code: "230805",
          name: "东风区"
        },
        {
          code: "230811",
          name: "郊区"
        },
        {
          code: "230822",
          name: "桦南县"
        },
        {
          code: "230826",
          name: "桦川县"
        },
        {
          code: "230828",
          name: "汤原县"
        },
        {
          code: "230881",
          name: "同江市"
        },
        {
          code: "230882",
          name: "富锦市"
        },
        {
          code: "230883",
          name: "抚远市"
        }
      ],
      [
        {
          code: "230902",
          name: "新兴区"
        },
        {
          code: "230903",
          name: "桃山区"
        },
        {
          code: "230904",
          name: "茄子河区"
        },
        {
          code: "230921",
          name: "勃利县"
        }
      ],
      [
        {
          code: "231002",
          name: "东安区"
        },
        {
          code: "231003",
          name: "阳明区"
        },
        {
          code: "231004",
          name: "爱民区"
        },
        {
          code: "231005",
          name: "西安区"
        },
        {
          code: "231025",
          name: "林口县"
        },
        {
          code: "231081",
          name: "绥芬河市"
        },
        {
          code: "231083",
          name: "海林市"
        },
        {
          code: "231084",
          name: "宁安市"
        },
        {
          code: "231085",
          name: "穆棱市"
        },
        {
          code: "231086",
          name: "东宁市"
        }
      ],
      [
        {
          code: "231102",
          name: "爱辉区"
        },
        {
          code: "231121",
          name: "嫩江县"
        },
        {
          code: "231123",
          name: "逊克县"
        },
        {
          code: "231124",
          name: "孙吴县"
        },
        {
          code: "231181",
          name: "北安市"
        },
        {
          code: "231182",
          name: "五大连池市"
        }
      ],
      [
        {
          code: "231202",
          name: "北林区"
        },
        {
          code: "231221",
          name: "望奎县"
        },
        {
          code: "231222",
          name: "兰西县"
        },
        {
          code: "231223",
          name: "青冈县"
        },
        {
          code: "231224",
          name: "庆安县"
        },
        {
          code: "231225",
          name: "明水县"
        },
        {
          code: "231226",
          name: "绥棱县"
        },
        {
          code: "231281",
          name: "安达市"
        },
        {
          code: "231282",
          name: "肇东市"
        },
        {
          code: "231283",
          name: "海伦市"
        }
      ],
      [
        {
          code: "232701",
          name: "加格达奇区"
        },
        {
          code: "232702",
          name: "松岭区"
        },
        {
          code: "232703",
          name: "新林区"
        },
        {
          code: "232704",
          name: "呼中区"
        },
        {
          code: "232721",
          name: "呼玛县"
        },
        {
          code: "232722",
          name: "塔河县"
        },
        {
          code: "232723",
          name: "漠河县"
        }
      ]
    ],
    [
      [
        {
          code: "310101",
          name: "黄浦区"
        },
        {
          code: "310104",
          name: "徐汇区"
        },
        {
          code: "310105",
          name: "长宁区"
        },
        {
          code: "310106",
          name: "静安区"
        },
        {
          code: "310107",
          name: "普陀区"
        },
        {
          code: "310109",
          name: "虹口区"
        },
        {
          code: "310110",
          name: "杨浦区"
        },
        {
          code: "310112",
          name: "闵行区"
        },
        {
          code: "310113",
          name: "宝山区"
        },
        {
          code: "310114",
          name: "嘉定区"
        },
        {
          code: "310115",
          name: "浦东新区"
        },
        {
          code: "310116",
          name: "金山区"
        },
        {
          code: "310117",
          name: "松江区"
        },
        {
          code: "310118",
          name: "青浦区"
        },
        {
          code: "310120",
          name: "奉贤区"
        },
        {
          code: "310151",
          name: "崇明区"
        }
      ]
    ],
    [
      [
        {
          code: "320102",
          name: "玄武区"
        },
        {
          code: "320104",
          name: "秦淮区"
        },
        {
          code: "320105",
          name: "建邺区"
        },
        {
          code: "320106",
          name: "鼓楼区"
        },
        {
          code: "320111",
          name: "浦口区"
        },
        {
          code: "320113",
          name: "栖霞区"
        },
        {
          code: "320114",
          name: "雨花台区"
        },
        {
          code: "320115",
          name: "江宁区"
        },
        {
          code: "320116",
          name: "六合区"
        },
        {
          code: "320117",
          name: "溧水区"
        },
        {
          code: "320118",
          name: "高淳区"
        }
      ],
      [
        {
          code: "320205",
          name: "锡山区"
        },
        {
          code: "320206",
          name: "惠山区"
        },
        {
          code: "320211",
          name: "滨湖区"
        },
        {
          code: "320213",
          name: "梁溪区"
        },
        {
          code: "320214",
          name: "新吴区"
        },
        {
          code: "320281",
          name: "江阴市"
        },
        {
          code: "320282",
          name: "宜兴市"
        }
      ],
      [
        {
          code: "320302",
          name: "鼓楼区"
        },
        {
          code: "320303",
          name: "云龙区"
        },
        {
          code: "320305",
          name: "贾汪区"
        },
        {
          code: "320311",
          name: "泉山区"
        },
        {
          code: "320312",
          name: "铜山区"
        },
        {
          code: "320321",
          name: "丰县"
        },
        {
          code: "320322",
          name: "沛县"
        },
        {
          code: "320324",
          name: "睢宁县"
        },
        {
          code: "320381",
          name: "新沂市"
        },
        {
          code: "320382",
          name: "邳州市"
        }
      ],
      [
        {
          code: "320402",
          name: "天宁区"
        },
        {
          code: "320404",
          name: "钟楼区"
        },
        {
          code: "320411",
          name: "新北区"
        },
        {
          code: "320412",
          name: "武进区"
        },
        {
          code: "320413",
          name: "金坛区"
        },
        {
          code: "320481",
          name: "溧阳市"
        }
      ],
      [
        {
          code: "320505",
          name: "虎丘区"
        },
        {
          code: "320506",
          name: "吴中区"
        },
        {
          code: "320507",
          name: "相城区"
        },
        {
          code: "320508",
          name: "姑苏区"
        },
        {
          code: "320509",
          name: "吴江区"
        },
        {
          code: "320581",
          name: "常熟市"
        },
        {
          code: "320582",
          name: "张家港市"
        },
        {
          code: "320583",
          name: "昆山市"
        },
        {
          code: "320585",
          name: "太仓市"
        }
      ],
      [
        {
          code: "320602",
          name: "崇川区"
        },
        {
          code: "320611",
          name: "港闸区"
        },
        {
          code: "320612",
          name: "通州区"
        },
        {
          code: "320621",
          name: "海安县"
        },
        {
          code: "320623",
          name: "如东县"
        },
        {
          code: "320681",
          name: "启东市"
        },
        {
          code: "320682",
          name: "如皋市"
        },
        {
          code: "320684",
          name: "海门市"
        }
      ],
      [
        {
          code: "320703",
          name: "连云区"
        },
        {
          code: "320706",
          name: "海州区"
        },
        {
          code: "320707",
          name: "赣榆区"
        },
        {
          code: "320722",
          name: "东海县"
        },
        {
          code: "320723",
          name: "灌云县"
        },
        {
          code: "320724",
          name: "灌南县"
        }
      ],
      [
        {
          code: "320803",
          name: "淮安区"
        },
        {
          code: "320804",
          name: "淮阴区"
        },
        {
          code: "320812",
          name: "清江浦区"
        },
        {
          code: "320813",
          name: "洪泽区"
        },
        {
          code: "320826",
          name: "涟水县"
        },
        {
          code: "320830",
          name: "盱眙县"
        },
        {
          code: "320831",
          name: "金湖县"
        }
      ],
      [
        {
          code: "320902",
          name: "亭湖区"
        },
        {
          code: "320903",
          name: "盐都区"
        },
        {
          code: "320904",
          name: "大丰区"
        },
        {
          code: "320921",
          name: "响水县"
        },
        {
          code: "320922",
          name: "滨海县"
        },
        {
          code: "320923",
          name: "阜宁县"
        },
        {
          code: "320924",
          name: "射阳县"
        },
        {
          code: "320925",
          name: "建湖县"
        },
        {
          code: "320981",
          name: "东台市"
        }
      ],
      [
        {
          code: "321002",
          name: "广陵区"
        },
        {
          code: "321003",
          name: "邗江区"
        },
        {
          code: "321012",
          name: "江都区"
        },
        {
          code: "321023",
          name: "宝应县"
        },
        {
          code: "321081",
          name: "仪征市"
        },
        {
          code: "321084",
          name: "高邮市"
        }
      ],
      [
        {
          code: "321102",
          name: "京口区"
        },
        {
          code: "321111",
          name: "润州区"
        },
        {
          code: "321112",
          name: "丹徒区"
        },
        {
          code: "321181",
          name: "丹阳市"
        },
        {
          code: "321182",
          name: "扬中市"
        },
        {
          code: "321183",
          name: "句容市"
        }
      ],
      [
        {
          code: "321202",
          name: "海陵区"
        },
        {
          code: "321203",
          name: "高港区"
        },
        {
          code: "321204",
          name: "姜堰区"
        },
        {
          code: "321281",
          name: "兴化市"
        },
        {
          code: "321282",
          name: "靖江市"
        },
        {
          code: "321283",
          name: "泰兴市"
        }
      ],
      [
        {
          code: "321302",
          name: "宿城区"
        },
        {
          code: "321311",
          name: "宿豫区"
        },
        {
          code: "321322",
          name: "沭阳县"
        },
        {
          code: "321323",
          name: "泗阳县"
        },
        {
          code: "321324",
          name: "泗洪县"
        }
      ]
    ],
    [
      [
        {
          code: "330102",
          name: "上城区"
        },
        {
          code: "330105",
          name: "拱墅区"
        },
        {
          code: "330106",
          name: "西湖区"
        },
        {
          code: "330108",
          name: "滨江区"
        },
        {
          code: "330109",
          name: "萧山区"
        },
        {
          code: "330110",
          name: "余杭区"
        },
        {
          code: "330111",
          name: "富阳区"
        },
        {
          code: "330112",
          name: "临安区"
        },
        {
          code: "330113",
          name: "临平区"
        },
        {
          code: "330114",
          name: "钱塘区"
        },
        {
          code: "330122",
          name: "桐庐县"
        },
        {
          code: "330127",
          name: "淳安县"
        },
        {
          code: "330182",
          name: "建德市"
        }
      ],
      [
        {
          code: "330203",
          name: "海曙区"
        },
        {
          code: "330205",
          name: "江北区"
        },
        {
          code: "330206",
          name: "北仑区"
        },
        {
          code: "330211",
          name: "镇海区"
        },
        {
          code: "330212",
          name: "鄞州区"
        },
        {
          code: "330213",
          name: "奉化区"
        },
        {
          code: "330225",
          name: "象山县"
        },
        {
          code: "330226",
          name: "宁海县"
        },
        {
          code: "330281",
          name: "余姚市"
        },
        {
          code: "330282",
          name: "慈溪市"
        }
      ],
      [
        {
          code: "330302",
          name: "鹿城区"
        },
        {
          code: "330303",
          name: "龙湾区"
        },
        {
          code: "330304",
          name: "瓯海区"
        },
        {
          code: "330305",
          name: "洞头区"
        },
        {
          code: "330324",
          name: "永嘉县"
        },
        {
          code: "330326",
          name: "平阳县"
        },
        {
          code: "330327",
          name: "苍南县"
        },
        {
          code: "330328",
          name: "文成县"
        },
        {
          code: "330329",
          name: "泰顺县"
        },
        {
          code: "330381",
          name: "瑞安市"
        },
        {
          code: "330382",
          name: "乐清市"
        }
      ],
      [
        {
          code: "330402",
          name: "南湖区"
        },
        {
          code: "330411",
          name: "秀洲区"
        },
        {
          code: "330421",
          name: "嘉善县"
        },
        {
          code: "330424",
          name: "海盐县"
        },
        {
          code: "330481",
          name: "海宁市"
        },
        {
          code: "330482",
          name: "平湖市"
        },
        {
          code: "330483",
          name: "桐乡市"
        }
      ],
      [
        {
          code: "330502",
          name: "吴兴区"
        },
        {
          code: "330503",
          name: "南浔区"
        },
        {
          code: "330521",
          name: "德清县"
        },
        {
          code: "330522",
          name: "长兴县"
        },
        {
          code: "330523",
          name: "安吉县"
        }
      ],
      [
        {
          code: "330602",
          name: "越城区"
        },
        {
          code: "330603",
          name: "柯桥区"
        },
        {
          code: "330604",
          name: "上虞区"
        },
        {
          code: "330624",
          name: "新昌县"
        },
        {
          code: "330681",
          name: "诸暨市"
        },
        {
          code: "330683",
          name: "嵊州市"
        }
      ],
      [
        {
          code: "330702",
          name: "婺城区"
        },
        {
          code: "330703",
          name: "金东区"
        },
        {
          code: "330723",
          name: "武义县"
        },
        {
          code: "330726",
          name: "浦江县"
        },
        {
          code: "330727",
          name: "磐安县"
        },
        {
          code: "330781",
          name: "兰溪市"
        },
        {
          code: "330782",
          name: "义乌市"
        },
        {
          code: "330783",
          name: "东阳市"
        },
        {
          code: "330784",
          name: "永康市"
        }
      ],
      [
        {
          code: "330802",
          name: "柯城区"
        },
        {
          code: "330803",
          name: "衢江区"
        },
        {
          code: "330822",
          name: "常山县"
        },
        {
          code: "330824",
          name: "开化县"
        },
        {
          code: "330825",
          name: "龙游县"
        },
        {
          code: "330881",
          name: "江山市"
        }
      ],
      [
        {
          code: "330902",
          name: "定海区"
        },
        {
          code: "330903",
          name: "普陀区"
        },
        {
          code: "330921",
          name: "岱山县"
        },
        {
          code: "330922",
          name: "嵊泗县"
        }
      ],
      [
        {
          code: "331002",
          name: "椒江区"
        },
        {
          code: "331003",
          name: "黄岩区"
        },
        {
          code: "331004",
          name: "路桥区"
        },
        {
          code: "331022",
          name: "三门县"
        },
        {
          code: "331023",
          name: "天台县"
        },
        {
          code: "331024",
          name: "仙居县"
        },
        {
          code: "331081",
          name: "温岭市"
        },
        {
          code: "331082",
          name: "临海市"
        },
        {
          code: "331083",
          name: "玉环市"
        }
      ],
      [
        {
          code: "331102",
          name: "莲都区"
        },
        {
          code: "331121",
          name: "青田县"
        },
        {
          code: "331122",
          name: "缙云县"
        },
        {
          code: "331123",
          name: "遂昌县"
        },
        {
          code: "331124",
          name: "松阳县"
        },
        {
          code: "331125",
          name: "云和县"
        },
        {
          code: "331126",
          name: "庆元县"
        },
        {
          code: "331127",
          name: "景宁畲族自治县"
        },
        {
          code: "331181",
          name: "龙泉市"
        }
      ]
    ],
    [
      [
        {
          code: "340102",
          name: "瑶海区"
        },
        {
          code: "340103",
          name: "庐阳区"
        },
        {
          code: "340104",
          name: "蜀山区"
        },
        {
          code: "340111",
          name: "包河区"
        },
        {
          code: "340121",
          name: "长丰县"
        },
        {
          code: "340122",
          name: "肥东县"
        },
        {
          code: "340123",
          name: "肥西县"
        },
        {
          code: "340124",
          name: "庐江县"
        },
        {
          code: "340181",
          name: "巢湖市"
        }
      ],
      [
        {
          code: "340202",
          name: "镜湖区"
        },
        {
          code: "340203",
          name: "弋江区"
        },
        {
          code: "340207",
          name: "鸠江区"
        },
        {
          code: "340208",
          name: "三山区"
        },
        {
          code: "340221",
          name: "芜湖县"
        },
        {
          code: "340222",
          name: "繁昌县"
        },
        {
          code: "340223",
          name: "南陵县"
        },
        {
          code: "340225",
          name: "无为县"
        }
      ],
      [
        {
          code: "340302",
          name: "龙子湖区"
        },
        {
          code: "340303",
          name: "蚌山区"
        },
        {
          code: "340304",
          name: "禹会区"
        },
        {
          code: "340311",
          name: "淮上区"
        },
        {
          code: "340321",
          name: "怀远县"
        },
        {
          code: "340322",
          name: "五河县"
        },
        {
          code: "340323",
          name: "固镇县"
        }
      ],
      [
        {
          code: "340402",
          name: "大通区"
        },
        {
          code: "340403",
          name: "田家庵区"
        },
        {
          code: "340404",
          name: "谢家集区"
        },
        {
          code: "340405",
          name: "八公山区"
        },
        {
          code: "340406",
          name: "潘集区"
        },
        {
          code: "340421",
          name: "凤台县"
        },
        {
          code: "340422",
          name: "寿县"
        }
      ],
      [
        {
          code: "340503",
          name: "花山区"
        },
        {
          code: "340504",
          name: "雨山区"
        },
        {
          code: "340506",
          name: "博望区"
        },
        {
          code: "340521",
          name: "当涂县"
        },
        {
          code: "340522",
          name: "含山县"
        },
        {
          code: "340523",
          name: "和县"
        }
      ],
      [
        {
          code: "340602",
          name: "杜集区"
        },
        {
          code: "340603",
          name: "相山区"
        },
        {
          code: "340604",
          name: "烈山区"
        },
        {
          code: "340621",
          name: "濉溪县"
        }
      ],
      [
        {
          code: "340705",
          name: "铜官区"
        },
        {
          code: "340706",
          name: "义安区"
        },
        {
          code: "340711",
          name: "郊区"
        },
        {
          code: "340722",
          name: "枞阳县"
        }
      ],
      [
        {
          code: "340802",
          name: "迎江区"
        },
        {
          code: "340803",
          name: "大观区"
        },
        {
          code: "340811",
          name: "宜秀区"
        },
        {
          code: "340822",
          name: "怀宁县"
        },
        {
          code: "340824",
          name: "潜山县"
        },
        {
          code: "340825",
          name: "太湖县"
        },
        {
          code: "340826",
          name: "宿松县"
        },
        {
          code: "340827",
          name: "望江县"
        },
        {
          code: "340828",
          name: "岳西县"
        },
        {
          code: "340881",
          name: "桐城市"
        }
      ],
      [
        {
          code: "341002",
          name: "屯溪区"
        },
        {
          code: "341003",
          name: "黄山区"
        },
        {
          code: "341004",
          name: "徽州区"
        },
        {
          code: "341021",
          name: "歙县"
        },
        {
          code: "341022",
          name: "休宁县"
        },
        {
          code: "341023",
          name: "黟县"
        },
        {
          code: "341024",
          name: "祁门县"
        }
      ],
      [
        {
          code: "341102",
          name: "琅琊区"
        },
        {
          code: "341103",
          name: "南谯区"
        },
        {
          code: "341122",
          name: "来安县"
        },
        {
          code: "341124",
          name: "全椒县"
        },
        {
          code: "341125",
          name: "定远县"
        },
        {
          code: "341126",
          name: "凤阳县"
        },
        {
          code: "341181",
          name: "天长市"
        },
        {
          code: "341182",
          name: "明光市"
        }
      ],
      [
        {
          code: "341202",
          name: "颍州区"
        },
        {
          code: "341203",
          name: "颍东区"
        },
        {
          code: "341204",
          name: "颍泉区"
        },
        {
          code: "341221",
          name: "临泉县"
        },
        {
          code: "341222",
          name: "太和县"
        },
        {
          code: "341225",
          name: "阜南县"
        },
        {
          code: "341226",
          name: "颍上县"
        },
        {
          code: "341282",
          name: "界首市"
        }
      ],
      [
        {
          code: "341302",
          name: "埇桥区"
        },
        {
          code: "341321",
          name: "砀山县"
        },
        {
          code: "341322",
          name: "萧县"
        },
        {
          code: "341323",
          name: "灵璧县"
        },
        {
          code: "341324",
          name: "泗县"
        }
      ],
      [
        {
          code: "341502",
          name: "金安区"
        },
        {
          code: "341503",
          name: "裕安区"
        },
        {
          code: "341504",
          name: "叶集区"
        },
        {
          code: "341522",
          name: "霍邱县"
        },
        {
          code: "341523",
          name: "舒城县"
        },
        {
          code: "341524",
          name: "金寨县"
        },
        {
          code: "341525",
          name: "霍山县"
        }
      ],
      [
        {
          code: "341602",
          name: "谯城区"
        },
        {
          code: "341621",
          name: "涡阳县"
        },
        {
          code: "341622",
          name: "蒙城县"
        },
        {
          code: "341623",
          name: "利辛县"
        }
      ],
      [
        {
          code: "341702",
          name: "贵池区"
        },
        {
          code: "341721",
          name: "东至县"
        },
        {
          code: "341722",
          name: "石台县"
        },
        {
          code: "341723",
          name: "青阳县"
        }
      ],
      [
        {
          code: "341802",
          name: "宣州区"
        },
        {
          code: "341821",
          name: "郎溪县"
        },
        {
          code: "341822",
          name: "广德县"
        },
        {
          code: "341823",
          name: "泾县"
        },
        {
          code: "341824",
          name: "绩溪县"
        },
        {
          code: "341825",
          name: "旌德县"
        },
        {
          code: "341881",
          name: "宁国市"
        }
      ]
    ],
    [
      [
        {
          code: "350102",
          name: "鼓楼区"
        },
        {
          code: "350103",
          name: "台江区"
        },
        {
          code: "350104",
          name: "仓山区"
        },
        {
          code: "350105",
          name: "马尾区"
        },
        {
          code: "350111",
          name: "晋安区"
        },
        {
          code: "350112",
          name: "长乐区"
        },
        {
          code: "350121",
          name: "闽侯县"
        },
        {
          code: "350122",
          name: "连江县"
        },
        {
          code: "350123",
          name: "罗源县"
        },
        {
          code: "350124",
          name: "闽清县"
        },
        {
          code: "350125",
          name: "永泰县"
        },
        {
          code: "350128",
          name: "平潭县"
        },
        {
          code: "350181",
          name: "福清市"
        }
      ],
      [
        {
          code: "350203",
          name: "思明区"
        },
        {
          code: "350205",
          name: "海沧区"
        },
        {
          code: "350206",
          name: "湖里区"
        },
        {
          code: "350211",
          name: "集美区"
        },
        {
          code: "350212",
          name: "同安区"
        },
        {
          code: "350213",
          name: "翔安区"
        }
      ],
      [
        {
          code: "350302",
          name: "城厢区"
        },
        {
          code: "350303",
          name: "涵江区"
        },
        {
          code: "350304",
          name: "荔城区"
        },
        {
          code: "350305",
          name: "秀屿区"
        },
        {
          code: "350322",
          name: "仙游县"
        }
      ],
      [
        {
          code: "350404",
          name: "三元区"
        },
        {
          code: "350405",
          name: "沙县区"
        },
        {
          code: "350421",
          name: "明溪县"
        },
        {
          code: "350423",
          name: "清流县"
        },
        {
          code: "350424",
          name: "宁化县"
        },
        {
          code: "350425",
          name: "大田县"
        },
        {
          code: "350426",
          name: "尤溪县"
        },
        {
          code: "350428",
          name: "将乐县"
        },
        {
          code: "350429",
          name: "泰宁县"
        },
        {
          code: "350430",
          name: "建宁县"
        },
        {
          code: "350481",
          name: "永安市"
        }
      ],
      [
        {
          code: "350502",
          name: "鲤城区"
        },
        {
          code: "350503",
          name: "丰泽区"
        },
        {
          code: "350504",
          name: "洛江区"
        },
        {
          code: "350505",
          name: "泉港区"
        },
        {
          code: "350521",
          name: "惠安县"
        },
        {
          code: "350524",
          name: "安溪县"
        },
        {
          code: "350525",
          name: "永春县"
        },
        {
          code: "350526",
          name: "德化县"
        },
        {
          code: "350527",
          name: "金门县"
        },
        {
          code: "350581",
          name: "石狮市"
        },
        {
          code: "350582",
          name: "晋江市"
        },
        {
          code: "350583",
          name: "南安市"
        }
      ],
      [
        {
          code: "350602",
          name: "芗城区"
        },
        {
          code: "350603",
          name: "龙文区"
        },
        {
          code: "350604",
          name: "龙海区"
        },
        {
          code: "350605",
          name: "长泰区"
        },
        {
          code: "350622",
          name: "云霄县"
        },
        {
          code: "350623",
          name: "漳浦县"
        },
        {
          code: "350624",
          name: "诏安县"
        },
        {
          code: "350626",
          name: "东山县"
        },
        {
          code: "350627",
          name: "南靖县"
        },
        {
          code: "350628",
          name: "平和县"
        },
        {
          code: "350629",
          name: "华安县"
        }
      ],
      [
        {
          code: "350702",
          name: "延平区"
        },
        {
          code: "350703",
          name: "建阳区"
        },
        {
          code: "350721",
          name: "顺昌县"
        },
        {
          code: "350722",
          name: "浦城县"
        },
        {
          code: "350723",
          name: "光泽县"
        },
        {
          code: "350724",
          name: "松溪县"
        },
        {
          code: "350725",
          name: "政和县"
        },
        {
          code: "350781",
          name: "邵武市"
        },
        {
          code: "350782",
          name: "武夷山市"
        },
        {
          code: "350783",
          name: "建瓯市"
        }
      ],
      [
        {
          code: "350802",
          name: "新罗区"
        },
        {
          code: "350803",
          name: "永定区"
        },
        {
          code: "350821",
          name: "长汀县"
        },
        {
          code: "350823",
          name: "上杭县"
        },
        {
          code: "350824",
          name: "武平县"
        },
        {
          code: "350825",
          name: "连城县"
        },
        {
          code: "350881",
          name: "漳平市"
        }
      ],
      [
        {
          code: "350902",
          name: "蕉城区"
        },
        {
          code: "350921",
          name: "霞浦县"
        },
        {
          code: "350922",
          name: "古田县"
        },
        {
          code: "350923",
          name: "屏南县"
        },
        {
          code: "350924",
          name: "寿宁县"
        },
        {
          code: "350925",
          name: "周宁县"
        },
        {
          code: "350926",
          name: "柘荣县"
        },
        {
          code: "350981",
          name: "福安市"
        },
        {
          code: "350982",
          name: "福鼎市"
        }
      ]
    ],
    [
      [
        {
          code: "360102",
          name: "东湖区"
        },
        {
          code: "360103",
          name: "西湖区"
        },
        {
          code: "360104",
          name: "青云谱区"
        },
        {
          code: "360105",
          name: "湾里区"
        },
        {
          code: "360111",
          name: "青山湖区"
        },
        {
          code: "360112",
          name: "新建区"
        },
        {
          code: "360121",
          name: "南昌县"
        },
        {
          code: "360123",
          name: "安义县"
        },
        {
          code: "360124",
          name: "进贤县"
        }
      ],
      [
        {
          code: "360202",
          name: "昌江区"
        },
        {
          code: "360203",
          name: "珠山区"
        },
        {
          code: "360222",
          name: "浮梁县"
        },
        {
          code: "360281",
          name: "乐平市"
        }
      ],
      [
        {
          code: "360302",
          name: "安源区"
        },
        {
          code: "360313",
          name: "湘东区"
        },
        {
          code: "360321",
          name: "莲花县"
        },
        {
          code: "360322",
          name: "上栗县"
        },
        {
          code: "360323",
          name: "芦溪县"
        }
      ],
      [
        {
          code: "360402",
          name: "濂溪区"
        },
        {
          code: "360403",
          name: "浔阳区"
        },
        {
          code: "360404",
          name: "柴桑区"
        },
        {
          code: "360423",
          name: "武宁县"
        },
        {
          code: "360424",
          name: "修水县"
        },
        {
          code: "360425",
          name: "永修县"
        },
        {
          code: "360426",
          name: "德安县"
        },
        {
          code: "360428",
          name: "都昌县"
        },
        {
          code: "360429",
          name: "湖口县"
        },
        {
          code: "360430",
          name: "彭泽县"
        },
        {
          code: "360481",
          name: "瑞昌市"
        },
        {
          code: "360482",
          name: "共青城市"
        },
        {
          code: "360483",
          name: "庐山市"
        }
      ],
      [
        {
          code: "360502",
          name: "渝水区"
        },
        {
          code: "360521",
          name: "分宜县"
        }
      ],
      [
        {
          code: "360602",
          name: "月湖区"
        },
        {
          code: "360622",
          name: "余江区"
        },
        {
          code: "360681",
          name: "贵溪市"
        }
      ],
      [
        {
          code: "360702",
          name: "章贡区"
        },
        {
          code: "360703",
          name: "南康区"
        },
        {
          code: "360704",
          name: "赣县区"
        },
        {
          code: "360722",
          name: "信丰县"
        },
        {
          code: "360723",
          name: "大余县"
        },
        {
          code: "360724",
          name: "上犹县"
        },
        {
          code: "360725",
          name: "崇义县"
        },
        {
          code: "360726",
          name: "安远县"
        },
        {
          code: "360727",
          name: "龙南县"
        },
        {
          code: "360728",
          name: "定南县"
        },
        {
          code: "360729",
          name: "全南县"
        },
        {
          code: "360730",
          name: "宁都县"
        },
        {
          code: "360731",
          name: "于都县"
        },
        {
          code: "360732",
          name: "兴国县"
        },
        {
          code: "360733",
          name: "会昌县"
        },
        {
          code: "360734",
          name: "寻乌县"
        },
        {
          code: "360735",
          name: "石城县"
        },
        {
          code: "360781",
          name: "瑞金市"
        }
      ],
      [
        {
          code: "360802",
          name: "吉州区"
        },
        {
          code: "360803",
          name: "青原区"
        },
        {
          code: "360821",
          name: "吉安县"
        },
        {
          code: "360822",
          name: "吉水县"
        },
        {
          code: "360823",
          name: "峡江县"
        },
        {
          code: "360824",
          name: "新干县"
        },
        {
          code: "360825",
          name: "永丰县"
        },
        {
          code: "360826",
          name: "泰和县"
        },
        {
          code: "360827",
          name: "遂川县"
        },
        {
          code: "360828",
          name: "万安县"
        },
        {
          code: "360829",
          name: "安福县"
        },
        {
          code: "360830",
          name: "永新县"
        },
        {
          code: "360881",
          name: "井冈山市"
        }
      ],
      [
        {
          code: "360902",
          name: "袁州区"
        },
        {
          code: "360921",
          name: "奉新县"
        },
        {
          code: "360922",
          name: "万载县"
        },
        {
          code: "360923",
          name: "上高县"
        },
        {
          code: "360924",
          name: "宜丰县"
        },
        {
          code: "360925",
          name: "靖安县"
        },
        {
          code: "360926",
          name: "铜鼓县"
        },
        {
          code: "360981",
          name: "丰城市"
        },
        {
          code: "360982",
          name: "樟树市"
        },
        {
          code: "360983",
          name: "高安市"
        }
      ],
      [
        {
          code: "361002",
          name: "临川区"
        },
        {
          code: "361003",
          name: "东乡区"
        },
        {
          code: "361021",
          name: "南城县"
        },
        {
          code: "361022",
          name: "黎川县"
        },
        {
          code: "361023",
          name: "南丰县"
        },
        {
          code: "361024",
          name: "崇仁县"
        },
        {
          code: "361025",
          name: "乐安县"
        },
        {
          code: "361026",
          name: "宜黄县"
        },
        {
          code: "361027",
          name: "金溪县"
        },
        {
          code: "361028",
          name: "资溪县"
        },
        {
          code: "361030",
          name: "广昌县"
        }
      ],
      [
        {
          code: "361102",
          name: "信州区"
        },
        {
          code: "361103",
          name: "广丰区"
        },
        {
          code: "361121",
          name: "上饶县"
        },
        {
          code: "361123",
          name: "玉山县"
        },
        {
          code: "361124",
          name: "铅山县"
        },
        {
          code: "361125",
          name: "横峰县"
        },
        {
          code: "361126",
          name: "弋阳县"
        },
        {
          code: "361127",
          name: "余干县"
        },
        {
          code: "361128",
          name: "鄱阳县"
        },
        {
          code: "361129",
          name: "万年县"
        },
        {
          code: "361130",
          name: "婺源县"
        },
        {
          code: "361181",
          name: "德兴市"
        }
      ]
    ],
    [
      [
        {
          code: "370102",
          name: "历下区"
        },
        {
          code: "370103",
          name: "市中区"
        },
        {
          code: "370104",
          name: "槐荫区"
        },
        {
          code: "370105",
          name: "天桥区"
        },
        {
          code: "370112",
          name: "历城区"
        },
        {
          code: "370113",
          name: "长清区"
        },
        {
          code: "370114",
          name: "章丘区"
        },
        {
          code: "370124",
          name: "平阴县"
        },
        {
          code: "370125",
          name: "济阳县"
        },
        {
          code: "370126",
          name: "商河县"
        }
      ],
      [
        {
          code: "370202",
          name: "市南区"
        },
        {
          code: "370203",
          name: "市北区"
        },
        {
          code: "370211",
          name: "黄岛区"
        },
        {
          code: "370212",
          name: "崂山区"
        },
        {
          code: "370213",
          name: "李沧区"
        },
        {
          code: "370214",
          name: "城阳区"
        },
        {
          code: "370215",
          name: "即墨区"
        },
        {
          code: "370281",
          name: "胶州市"
        },
        {
          code: "370283",
          name: "平度市"
        },
        {
          code: "370285",
          name: "莱西市"
        }
      ],
      [
        {
          code: "370302",
          name: "淄川区"
        },
        {
          code: "370303",
          name: "张店区"
        },
        {
          code: "370304",
          name: "博山区"
        },
        {
          code: "370305",
          name: "临淄区"
        },
        {
          code: "370306",
          name: "周村区"
        },
        {
          code: "370321",
          name: "桓台县"
        },
        {
          code: "370322",
          name: "高青县"
        },
        {
          code: "370323",
          name: "沂源县"
        }
      ],
      [
        {
          code: "370402",
          name: "市中区"
        },
        {
          code: "370403",
          name: "薛城区"
        },
        {
          code: "370404",
          name: "峄城区"
        },
        {
          code: "370405",
          name: "台儿庄区"
        },
        {
          code: "370406",
          name: "山亭区"
        },
        {
          code: "370481",
          name: "滕州市"
        }
      ],
      [
        {
          code: "370502",
          name: "东营区"
        },
        {
          code: "370503",
          name: "河口区"
        },
        {
          code: "370505",
          name: "垦利区"
        },
        {
          code: "370522",
          name: "利津县"
        },
        {
          code: "370523",
          name: "广饶县"
        }
      ],
      [
        {
          code: "370602",
          name: "芝罘区"
        },
        {
          code: "370611",
          name: "福山区"
        },
        {
          code: "370612",
          name: "牟平区"
        },
        {
          code: "370613",
          name: "莱山区"
        },
        {
          code: "370634",
          name: "长岛县"
        },
        {
          code: "370681",
          name: "龙口市"
        },
        {
          code: "370682",
          name: "莱阳市"
        },
        {
          code: "370683",
          name: "莱州市"
        },
        {
          code: "370684",
          name: "蓬莱市"
        },
        {
          code: "370685",
          name: "招远市"
        },
        {
          code: "370686",
          name: "栖霞市"
        },
        {
          code: "370687",
          name: "海阳市"
        }
      ],
      [
        {
          code: "370702",
          name: "潍城区"
        },
        {
          code: "370703",
          name: "寒亭区"
        },
        {
          code: "370704",
          name: "坊子区"
        },
        {
          code: "370705",
          name: "奎文区"
        },
        {
          code: "370724",
          name: "临朐县"
        },
        {
          code: "370725",
          name: "昌乐县"
        },
        {
          code: "370781",
          name: "青州市"
        },
        {
          code: "370782",
          name: "诸城市"
        },
        {
          code: "370783",
          name: "寿光市"
        },
        {
          code: "370784",
          name: "安丘市"
        },
        {
          code: "370785",
          name: "高密市"
        },
        {
          code: "370786",
          name: "昌邑市"
        }
      ],
      [
        {
          code: "370811",
          name: "任城区"
        },
        {
          code: "370812",
          name: "兖州区"
        },
        {
          code: "370826",
          name: "微山县"
        },
        {
          code: "370827",
          name: "鱼台县"
        },
        {
          code: "370828",
          name: "金乡县"
        },
        {
          code: "370829",
          name: "嘉祥县"
        },
        {
          code: "370830",
          name: "汶上县"
        },
        {
          code: "370831",
          name: "泗水县"
        },
        {
          code: "370832",
          name: "梁山县"
        },
        {
          code: "370881",
          name: "曲阜市"
        },
        {
          code: "370883",
          name: "邹城市"
        }
      ],
      [
        {
          code: "370902",
          name: "泰山区"
        },
        {
          code: "370911",
          name: "岱岳区"
        },
        {
          code: "370921",
          name: "宁阳县"
        },
        {
          code: "370923",
          name: "东平县"
        },
        {
          code: "370982",
          name: "新泰市"
        },
        {
          code: "370983",
          name: "肥城市"
        }
      ],
      [
        {
          code: "371002",
          name: "环翠区"
        },
        {
          code: "371003",
          name: "文登区"
        },
        {
          code: "371082",
          name: "荣成市"
        },
        {
          code: "371083",
          name: "乳山市"
        }
      ],
      [
        {
          code: "371102",
          name: "东港区"
        },
        {
          code: "371103",
          name: "岚山区"
        },
        {
          code: "371121",
          name: "五莲县"
        },
        {
          code: "371122",
          name: "莒县"
        }
      ],
      [
        {
          code: "371202",
          name: "莱城区"
        },
        {
          code: "371203",
          name: "钢城区"
        }
      ],
      [
        {
          code: "371302",
          name: "兰山区"
        },
        {
          code: "371311",
          name: "罗庄区"
        },
        {
          code: "371312",
          name: "河东区"
        },
        {
          code: "371321",
          name: "沂南县"
        },
        {
          code: "371322",
          name: "郯城县"
        },
        {
          code: "371323",
          name: "沂水县"
        },
        {
          code: "371324",
          name: "兰陵县"
        },
        {
          code: "371325",
          name: "费县"
        },
        {
          code: "371326",
          name: "平邑县"
        },
        {
          code: "371327",
          name: "莒南县"
        },
        {
          code: "371328",
          name: "蒙阴县"
        },
        {
          code: "371329",
          name: "临沭县"
        }
      ],
      [
        {
          code: "371402",
          name: "德城区"
        },
        {
          code: "371403",
          name: "陵城区"
        },
        {
          code: "371422",
          name: "宁津县"
        },
        {
          code: "371423",
          name: "庆云县"
        },
        {
          code: "371424",
          name: "临邑县"
        },
        {
          code: "371425",
          name: "齐河县"
        },
        {
          code: "371426",
          name: "平原县"
        },
        {
          code: "371427",
          name: "夏津县"
        },
        {
          code: "371428",
          name: "武城县"
        },
        {
          code: "371481",
          name: "乐陵市"
        },
        {
          code: "371482",
          name: "禹城市"
        }
      ],
      [
        {
          code: "371502",
          name: "东昌府区"
        },
        {
          code: "371521",
          name: "阳谷县"
        },
        {
          code: "371522",
          name: "莘县"
        },
        {
          code: "371523",
          name: "茌平县"
        },
        {
          code: "371524",
          name: "东阿县"
        },
        {
          code: "371525",
          name: "冠县"
        },
        {
          code: "371526",
          name: "高唐县"
        },
        {
          code: "371581",
          name: "临清市"
        }
      ],
      [
        {
          code: "371602",
          name: "滨城区"
        },
        {
          code: "371603",
          name: "沾化区"
        },
        {
          code: "371621",
          name: "惠民县"
        },
        {
          code: "371622",
          name: "阳信县"
        },
        {
          code: "371623",
          name: "无棣县"
        },
        {
          code: "371625",
          name: "博兴县"
        },
        {
          code: "371626",
          name: "邹平县"
        }
      ],
      [
        {
          code: "371702",
          name: "牡丹区"
        },
        {
          code: "371703",
          name: "定陶区"
        },
        {
          code: "371721",
          name: "曹县"
        },
        {
          code: "371722",
          name: "单县"
        },
        {
          code: "371723",
          name: "成武县"
        },
        {
          code: "371724",
          name: "巨野县"
        },
        {
          code: "371725",
          name: "郓城县"
        },
        {
          code: "371726",
          name: "鄄城县"
        },
        {
          code: "371728",
          name: "东明县"
        }
      ]
    ],
    [
      [
        {
          code: "410102",
          name: "中原区"
        },
        {
          code: "410103",
          name: "二七区"
        },
        {
          code: "410104",
          name: "管城回族区"
        },
        {
          code: "410105",
          name: "金水区"
        },
        {
          code: "410106",
          name: "上街区"
        },
        {
          code: "410108",
          name: "惠济区"
        },
        {
          code: "410122",
          name: "中牟县"
        },
        {
          code: "410181",
          name: "巩义市"
        },
        {
          code: "410182",
          name: "荥阳市"
        },
        {
          code: "410183",
          name: "新密市"
        },
        {
          code: "410184",
          name: "新郑市"
        },
        {
          code: "410185",
          name: "登封市"
        }
      ],
      [
        {
          code: "410202",
          name: "龙亭区"
        },
        {
          code: "410203",
          name: "顺河回族区"
        },
        {
          code: "410204",
          name: "鼓楼区"
        },
        {
          code: "410205",
          name: "禹王台区"
        },
        {
          code: "410212",
          name: "祥符区"
        },
        {
          code: "410221",
          name: "杞县"
        },
        {
          code: "410222",
          name: "通许县"
        },
        {
          code: "410223",
          name: "尉氏县"
        },
        {
          code: "410225",
          name: "兰考县"
        }
      ],
      [
        {
          code: "410302",
          name: "老城区"
        },
        {
          code: "410303",
          name: "西工区"
        },
        {
          code: "410304",
          name: "瀍河回族区"
        },
        {
          code: "410305",
          name: "涧西区"
        },
        {
          code: "410307",
          name: "偃师区"
        },
        {
          code: "410308",
          name: "孟津区"
        },
        {
          code: "410311",
          name: "洛龙区"
        },
        {
          code: "410323",
          name: "新安县"
        },
        {
          code: "410324",
          name: "栾川县"
        },
        {
          code: "410325",
          name: "嵩县"
        },
        {
          code: "410326",
          name: "汝阳县"
        },
        {
          code: "410327",
          name: "宜阳县"
        },
        {
          code: "410328",
          name: "洛宁县"
        },
        {
          code: "410329",
          name: "伊川县"
        }
      ],
      [
        {
          code: "410402",
          name: "新华区"
        },
        {
          code: "410403",
          name: "卫东区"
        },
        {
          code: "410404",
          name: "石龙区"
        },
        {
          code: "410411",
          name: "湛河区"
        },
        {
          code: "410421",
          name: "宝丰县"
        },
        {
          code: "410422",
          name: "叶县"
        },
        {
          code: "410423",
          name: "鲁山县"
        },
        {
          code: "410425",
          name: "郏县"
        },
        {
          code: "410481",
          name: "舞钢市"
        },
        {
          code: "410482",
          name: "汝州市"
        }
      ],
      [
        {
          code: "410502",
          name: "文峰区"
        },
        {
          code: "410503",
          name: "北关区"
        },
        {
          code: "410505",
          name: "殷都区"
        },
        {
          code: "410506",
          name: "龙安区"
        },
        {
          code: "410522",
          name: "安阳县"
        },
        {
          code: "410523",
          name: "汤阴县"
        },
        {
          code: "410526",
          name: "滑县"
        },
        {
          code: "410527",
          name: "内黄县"
        },
        {
          code: "410581",
          name: "林州市"
        }
      ],
      [
        {
          code: "410602",
          name: "鹤山区"
        },
        {
          code: "410603",
          name: "山城区"
        },
        {
          code: "410611",
          name: "淇滨区"
        },
        {
          code: "410621",
          name: "浚县"
        },
        {
          code: "410622",
          name: "淇县"
        }
      ],
      [
        {
          code: "410702",
          name: "红旗区"
        },
        {
          code: "410703",
          name: "卫滨区"
        },
        {
          code: "410704",
          name: "凤泉区"
        },
        {
          code: "410711",
          name: "牧野区"
        },
        {
          code: "410721",
          name: "新乡县"
        },
        {
          code: "410724",
          name: "获嘉县"
        },
        {
          code: "410725",
          name: "原阳县"
        },
        {
          code: "410726",
          name: "延津县"
        },
        {
          code: "410727",
          name: "封丘县"
        },
        {
          code: "410728",
          name: "长垣县"
        },
        {
          code: "410781",
          name: "卫辉市"
        },
        {
          code: "410782",
          name: "辉县市"
        }
      ],
      [
        {
          code: "410802",
          name: "解放区"
        },
        {
          code: "410803",
          name: "中站区"
        },
        {
          code: "410804",
          name: "马村区"
        },
        {
          code: "410811",
          name: "山阳区"
        },
        {
          code: "410821",
          name: "修武县"
        },
        {
          code: "410822",
          name: "博爱县"
        },
        {
          code: "410823",
          name: "武陟县"
        },
        {
          code: "410825",
          name: "温县"
        },
        {
          code: "410882",
          name: "沁阳市"
        },
        {
          code: "410883",
          name: "孟州市"
        }
      ],
      [
        {
          code: "410902",
          name: "华龙区"
        },
        {
          code: "410922",
          name: "清丰县"
        },
        {
          code: "410923",
          name: "南乐县"
        },
        {
          code: "410926",
          name: "范县"
        },
        {
          code: "410927",
          name: "台前县"
        },
        {
          code: "410928",
          name: "濮阳县"
        }
      ],
      [
        {
          code: "411002",
          name: "魏都区"
        },
        {
          code: "411003",
          name: "建安区"
        },
        {
          code: "411024",
          name: "鄢陵县"
        },
        {
          code: "411025",
          name: "襄城县"
        },
        {
          code: "411081",
          name: "禹州市"
        },
        {
          code: "411082",
          name: "长葛市"
        }
      ],
      [
        {
          code: "411102",
          name: "源汇区"
        },
        {
          code: "411103",
          name: "郾城区"
        },
        {
          code: "411104",
          name: "召陵区"
        },
        {
          code: "411121",
          name: "舞阳县"
        },
        {
          code: "411122",
          name: "临颍县"
        }
      ],
      [
        {
          code: "411202",
          name: "湖滨区"
        },
        {
          code: "411203",
          name: "陕州区"
        },
        {
          code: "411221",
          name: "渑池县"
        },
        {
          code: "411224",
          name: "卢氏县"
        },
        {
          code: "411281",
          name: "义马市"
        },
        {
          code: "411282",
          name: "灵宝市"
        }
      ],
      [
        {
          code: "411302",
          name: "宛城区"
        },
        {
          code: "411303",
          name: "卧龙区"
        },
        {
          code: "411321",
          name: "南召县"
        },
        {
          code: "411322",
          name: "方城县"
        },
        {
          code: "411323",
          name: "西峡县"
        },
        {
          code: "411324",
          name: "镇平县"
        },
        {
          code: "411325",
          name: "内乡县"
        },
        {
          code: "411326",
          name: "淅川县"
        },
        {
          code: "411327",
          name: "社旗县"
        },
        {
          code: "411328",
          name: "唐河县"
        },
        {
          code: "411329",
          name: "新野县"
        },
        {
          code: "411330",
          name: "桐柏县"
        },
        {
          code: "411381",
          name: "邓州市"
        }
      ],
      [
        {
          code: "411402",
          name: "梁园区"
        },
        {
          code: "411403",
          name: "睢阳区"
        },
        {
          code: "411421",
          name: "民权县"
        },
        {
          code: "411422",
          name: "睢县"
        },
        {
          code: "411423",
          name: "宁陵县"
        },
        {
          code: "411424",
          name: "柘城县"
        },
        {
          code: "411425",
          name: "虞城县"
        },
        {
          code: "411426",
          name: "夏邑县"
        },
        {
          code: "411481",
          name: "永城市"
        }
      ],
      [
        {
          code: "411502",
          name: "浉河区"
        },
        {
          code: "411503",
          name: "平桥区"
        },
        {
          code: "411521",
          name: "罗山县"
        },
        {
          code: "411522",
          name: "光山县"
        },
        {
          code: "411523",
          name: "新县"
        },
        {
          code: "411524",
          name: "商城县"
        },
        {
          code: "411525",
          name: "固始县"
        },
        {
          code: "411526",
          name: "潢川县"
        },
        {
          code: "411527",
          name: "淮滨县"
        },
        {
          code: "411528",
          name: "息县"
        }
      ],
      [
        {
          code: "411602",
          name: "川汇区"
        },
        {
          code: "411621",
          name: "扶沟县"
        },
        {
          code: "411622",
          name: "西华县"
        },
        {
          code: "411623",
          name: "商水县"
        },
        {
          code: "411624",
          name: "沈丘县"
        },
        {
          code: "411625",
          name: "郸城县"
        },
        {
          code: "411626",
          name: "淮阳县"
        },
        {
          code: "411627",
          name: "太康县"
        },
        {
          code: "411628",
          name: "鹿邑县"
        },
        {
          code: "411681",
          name: "项城市"
        }
      ],
      [
        {
          code: "411702",
          name: "驿城区"
        },
        {
          code: "411721",
          name: "西平县"
        },
        {
          code: "411722",
          name: "上蔡县"
        },
        {
          code: "411723",
          name: "平舆县"
        },
        {
          code: "411724",
          name: "正阳县"
        },
        {
          code: "411725",
          name: "确山县"
        },
        {
          code: "411726",
          name: "泌阳县"
        },
        {
          code: "411727",
          name: "汝南县"
        },
        {
          code: "411728",
          name: "遂平县"
        },
        {
          code: "411729",
          name: "新蔡县"
        }
      ],
      [
        {
          code: "419001",
          name: "济源市"
        }
      ]
    ],
    [
      [
        {
          code: "420102",
          name: "江岸区"
        },
        {
          code: "420103",
          name: "江汉区"
        },
        {
          code: "420104",
          name: "硚口区"
        },
        {
          code: "420105",
          name: "汉阳区"
        },
        {
          code: "420106",
          name: "武昌区"
        },
        {
          code: "420107",
          name: "青山区"
        },
        {
          code: "420111",
          name: "洪山区"
        },
        {
          code: "420112",
          name: "东西湖区"
        },
        {
          code: "420113",
          name: "汉南区"
        },
        {
          code: "420114",
          name: "蔡甸区"
        },
        {
          code: "420115",
          name: "江夏区"
        },
        {
          code: "420116",
          name: "黄陂区"
        },
        {
          code: "420117",
          name: "新洲区"
        }
      ],
      [
        {
          code: "420202",
          name: "黄石港区"
        },
        {
          code: "420203",
          name: "西塞山区"
        },
        {
          code: "420204",
          name: "下陆区"
        },
        {
          code: "420205",
          name: "铁山区"
        },
        {
          code: "420222",
          name: "阳新县"
        },
        {
          code: "420281",
          name: "大冶市"
        }
      ],
      [
        {
          code: "420302",
          name: "茅箭区"
        },
        {
          code: "420303",
          name: "张湾区"
        },
        {
          code: "420304",
          name: "郧阳区"
        },
        {
          code: "420322",
          name: "郧西县"
        },
        {
          code: "420323",
          name: "竹山县"
        },
        {
          code: "420324",
          name: "竹溪县"
        },
        {
          code: "420325",
          name: "房县"
        },
        {
          code: "420381",
          name: "丹江口市"
        }
      ],
      [
        {
          code: "420502",
          name: "西陵区"
        },
        {
          code: "420503",
          name: "伍家岗区"
        },
        {
          code: "420504",
          name: "点军区"
        },
        {
          code: "420505",
          name: "猇亭区"
        },
        {
          code: "420506",
          name: "夷陵区"
        },
        {
          code: "420525",
          name: "远安县"
        },
        {
          code: "420526",
          name: "兴山县"
        },
        {
          code: "420527",
          name: "秭归县"
        },
        {
          code: "420528",
          name: "长阳土家族自治县"
        },
        {
          code: "420529",
          name: "五峰土家族自治县"
        },
        {
          code: "420581",
          name: "宜都市"
        },
        {
          code: "420582",
          name: "当阳市"
        },
        {
          code: "420583",
          name: "枝江市"
        }
      ],
      [
        {
          code: "420602",
          name: "襄城区"
        },
        {
          code: "420606",
          name: "樊城区"
        },
        {
          code: "420607",
          name: "襄州区"
        },
        {
          code: "420624",
          name: "南漳县"
        },
        {
          code: "420625",
          name: "谷城县"
        },
        {
          code: "420626",
          name: "保康县"
        },
        {
          code: "420682",
          name: "老河口市"
        },
        {
          code: "420683",
          name: "枣阳市"
        },
        {
          code: "420684",
          name: "宜城市"
        }
      ],
      [
        {
          code: "420702",
          name: "梁子湖区"
        },
        {
          code: "420703",
          name: "华容区"
        },
        {
          code: "420704",
          name: "鄂城区"
        }
      ],
      [
        {
          code: "420802",
          name: "东宝区"
        },
        {
          code: "420804",
          name: "掇刀区"
        },
        {
          code: "420821",
          name: "京山县"
        },
        {
          code: "420822",
          name: "沙洋县"
        },
        {
          code: "420881",
          name: "钟祥市"
        }
      ],
      [
        {
          code: "420902",
          name: "孝南区"
        },
        {
          code: "420921",
          name: "孝昌县"
        },
        {
          code: "420922",
          name: "大悟县"
        },
        {
          code: "420923",
          name: "云梦县"
        },
        {
          code: "420981",
          name: "应城市"
        },
        {
          code: "420982",
          name: "安陆市"
        },
        {
          code: "420984",
          name: "汉川市"
        }
      ],
      [
        {
          code: "421002",
          name: "沙市区"
        },
        {
          code: "421003",
          name: "荆州区"
        },
        {
          code: "421022",
          name: "公安县"
        },
        {
          code: "421023",
          name: "监利县"
        },
        {
          code: "421024",
          name: "江陵县"
        },
        {
          code: "421081",
          name: "石首市"
        },
        {
          code: "421083",
          name: "洪湖市"
        },
        {
          code: "421087",
          name: "松滋市"
        }
      ],
      [
        {
          code: "421102",
          name: "黄州区"
        },
        {
          code: "421121",
          name: "团风县"
        },
        {
          code: "421122",
          name: "红安县"
        },
        {
          code: "421123",
          name: "罗田县"
        },
        {
          code: "421124",
          name: "英山县"
        },
        {
          code: "421125",
          name: "浠水县"
        },
        {
          code: "421126",
          name: "蕲春县"
        },
        {
          code: "421127",
          name: "黄梅县"
        },
        {
          code: "421181",
          name: "麻城市"
        },
        {
          code: "421182",
          name: "武穴市"
        }
      ],
      [
        {
          code: "421202",
          name: "咸安区"
        },
        {
          code: "421221",
          name: "嘉鱼县"
        },
        {
          code: "421222",
          name: "通城县"
        },
        {
          code: "421223",
          name: "崇阳县"
        },
        {
          code: "421224",
          name: "通山县"
        },
        {
          code: "421281",
          name: "赤壁市"
        }
      ],
      [
        {
          code: "421303",
          name: "曾都区"
        },
        {
          code: "421321",
          name: "随县"
        },
        {
          code: "421381",
          name: "广水市"
        }
      ],
      [
        {
          code: "422801",
          name: "恩施市"
        },
        {
          code: "422802",
          name: "利川市"
        },
        {
          code: "422822",
          name: "建始县"
        },
        {
          code: "422823",
          name: "巴东县"
        },
        {
          code: "422825",
          name: "宣恩县"
        },
        {
          code: "422826",
          name: "咸丰县"
        },
        {
          code: "422827",
          name: "来凤县"
        },
        {
          code: "422828",
          name: "鹤峰县"
        }
      ],
      [
        {
          code: "429004",
          name: "仙桃市"
        },
        {
          code: "429005",
          name: "潜江市"
        },
        {
          code: "429006",
          name: "天门市"
        },
        {
          code: "429021",
          name: "神农架林区"
        }
      ]
    ],
    [
      [
        {
          code: "430102",
          name: "芙蓉区"
        },
        {
          code: "430103",
          name: "天心区"
        },
        {
          code: "430104",
          name: "岳麓区"
        },
        {
          code: "430105",
          name: "开福区"
        },
        {
          code: "430111",
          name: "雨花区"
        },
        {
          code: "430112",
          name: "望城区"
        },
        {
          code: "430121",
          name: "长沙县"
        },
        {
          code: "430181",
          name: "浏阳市"
        },
        {
          code: "430182",
          name: "宁乡市"
        }
      ],
      [
        {
          code: "430202",
          name: "荷塘区"
        },
        {
          code: "430203",
          name: "芦淞区"
        },
        {
          code: "430204",
          name: "石峰区"
        },
        {
          code: "430211",
          name: "天元区"
        },
        {
          code: "430221",
          name: "株洲县"
        },
        {
          code: "430223",
          name: "攸县"
        },
        {
          code: "430224",
          name: "茶陵县"
        },
        {
          code: "430225",
          name: "炎陵县"
        },
        {
          code: "430281",
          name: "醴陵市"
        }
      ],
      [
        {
          code: "430302",
          name: "雨湖区"
        },
        {
          code: "430304",
          name: "岳塘区"
        },
        {
          code: "430321",
          name: "湘潭县"
        },
        {
          code: "430381",
          name: "湘乡市"
        },
        {
          code: "430382",
          name: "韶山市"
        }
      ],
      [
        {
          code: "430405",
          name: "珠晖区"
        },
        {
          code: "430406",
          name: "雁峰区"
        },
        {
          code: "430407",
          name: "石鼓区"
        },
        {
          code: "430408",
          name: "蒸湘区"
        },
        {
          code: "430412",
          name: "南岳区"
        },
        {
          code: "430421",
          name: "衡阳县"
        },
        {
          code: "430422",
          name: "衡南县"
        },
        {
          code: "430423",
          name: "衡山县"
        },
        {
          code: "430424",
          name: "衡东县"
        },
        {
          code: "430426",
          name: "祁东县"
        },
        {
          code: "430481",
          name: "耒阳市"
        },
        {
          code: "430482",
          name: "常宁市"
        }
      ],
      [
        {
          code: "430502",
          name: "双清区"
        },
        {
          code: "430503",
          name: "大祥区"
        },
        {
          code: "430511",
          name: "北塔区"
        },
        {
          code: "430521",
          name: "邵东县"
        },
        {
          code: "430522",
          name: "新邵县"
        },
        {
          code: "430523",
          name: "邵阳县"
        },
        {
          code: "430524",
          name: "隆回县"
        },
        {
          code: "430525",
          name: "洞口县"
        },
        {
          code: "430527",
          name: "绥宁县"
        },
        {
          code: "430528",
          name: "新宁县"
        },
        {
          code: "430529",
          name: "城步苗族自治县"
        },
        {
          code: "430581",
          name: "武冈市"
        }
      ],
      [
        {
          code: "430602",
          name: "岳阳楼区"
        },
        {
          code: "430603",
          name: "云溪区"
        },
        {
          code: "430611",
          name: "君山区"
        },
        {
          code: "430621",
          name: "岳阳县"
        },
        {
          code: "430623",
          name: "华容县"
        },
        {
          code: "430624",
          name: "湘阴县"
        },
        {
          code: "430626",
          name: "平江县"
        },
        {
          code: "430681",
          name: "汨罗市"
        },
        {
          code: "430682",
          name: "临湘市"
        }
      ],
      [
        {
          code: "430702",
          name: "武陵区"
        },
        {
          code: "430703",
          name: "鼎城区"
        },
        {
          code: "430721",
          name: "安乡县"
        },
        {
          code: "430722",
          name: "汉寿县"
        },
        {
          code: "430723",
          name: "澧县"
        },
        {
          code: "430724",
          name: "临澧县"
        },
        {
          code: "430725",
          name: "桃源县"
        },
        {
          code: "430726",
          name: "石门县"
        },
        {
          code: "430781",
          name: "津市市"
        }
      ],
      [
        {
          code: "430802",
          name: "永定区"
        },
        {
          code: "430811",
          name: "武陵源区"
        },
        {
          code: "430821",
          name: "慈利县"
        },
        {
          code: "430822",
          name: "桑植县"
        }
      ],
      [
        {
          code: "430902",
          name: "资阳区"
        },
        {
          code: "430903",
          name: "赫山区"
        },
        {
          code: "430921",
          name: "南县"
        },
        {
          code: "430922",
          name: "桃江县"
        },
        {
          code: "430923",
          name: "安化县"
        },
        {
          code: "430981",
          name: "沅江市"
        }
      ],
      [
        {
          code: "431002",
          name: "北湖区"
        },
        {
          code: "431003",
          name: "苏仙区"
        },
        {
          code: "431021",
          name: "桂阳县"
        },
        {
          code: "431022",
          name: "宜章县"
        },
        {
          code: "431023",
          name: "永兴县"
        },
        {
          code: "431024",
          name: "嘉禾县"
        },
        {
          code: "431025",
          name: "临武县"
        },
        {
          code: "431026",
          name: "汝城县"
        },
        {
          code: "431027",
          name: "桂东县"
        },
        {
          code: "431028",
          name: "安仁县"
        },
        {
          code: "431081",
          name: "资兴市"
        }
      ],
      [
        {
          code: "431102",
          name: "零陵区"
        },
        {
          code: "431103",
          name: "冷水滩区"
        },
        {
          code: "431122",
          name: "东安县"
        },
        {
          code: "431123",
          name: "双牌县"
        },
        {
          code: "431124",
          name: "道县"
        },
        {
          code: "431125",
          name: "江永县"
        },
        {
          code: "431126",
          name: "宁远县"
        },
        {
          code: "431127",
          name: "蓝山县"
        },
        {
          code: "431128",
          name: "新田县"
        },
        {
          code: "431129",
          name: "江华瑶族自治县"
        },
        {
          code: "431181",
          name: "祁阳市"
        }
      ],
      [
        {
          code: "431202",
          name: "鹤城区"
        },
        {
          code: "431221",
          name: "中方县"
        },
        {
          code: "431222",
          name: "沅陵县"
        },
        {
          code: "431223",
          name: "辰溪县"
        },
        {
          code: "431224",
          name: "溆浦县"
        },
        {
          code: "431225",
          name: "会同县"
        },
        {
          code: "431226",
          name: "麻阳苗族自治县"
        },
        {
          code: "431227",
          name: "新晃侗族自治县"
        },
        {
          code: "431228",
          name: "芷江侗族自治县"
        },
        {
          code: "431229",
          name: "靖州苗族侗族自治县"
        },
        {
          code: "431230",
          name: "通道侗族自治县"
        },
        {
          code: "431281",
          name: "洪江市"
        }
      ],
      [
        {
          code: "431302",
          name: "娄星区"
        },
        {
          code: "431321",
          name: "双峰县"
        },
        {
          code: "431322",
          name: "新化县"
        },
        {
          code: "431381",
          name: "冷水江市"
        },
        {
          code: "431382",
          name: "涟源市"
        }
      ],
      [
        {
          code: "433101",
          name: "吉首市"
        },
        {
          code: "433122",
          name: "泸溪县"
        },
        {
          code: "433123",
          name: "凤凰县"
        },
        {
          code: "433124",
          name: "花垣县"
        },
        {
          code: "433125",
          name: "保靖县"
        },
        {
          code: "433126",
          name: "古丈县"
        },
        {
          code: "433127",
          name: "永顺县"
        },
        {
          code: "433130",
          name: "龙山县"
        }
      ]
    ],
    [
      [
        {
          code: "440103",
          name: "荔湾区"
        },
        {
          code: "440104",
          name: "越秀区"
        },
        {
          code: "440105",
          name: "海珠区"
        },
        {
          code: "440106",
          name: "天河区"
        },
        {
          code: "440111",
          name: "白云区"
        },
        {
          code: "440112",
          name: "黄埔区"
        },
        {
          code: "440113",
          name: "番禺区"
        },
        {
          code: "440114",
          name: "花都区"
        },
        {
          code: "440115",
          name: "南沙区"
        },
        {
          code: "440117",
          name: "从化区"
        },
        {
          code: "440118",
          name: "增城区"
        }
      ],
      [
        {
          code: "440203",
          name: "武江区"
        },
        {
          code: "440204",
          name: "浈江区"
        },
        {
          code: "440205",
          name: "曲江区"
        },
        {
          code: "440222",
          name: "始兴县"
        },
        {
          code: "440224",
          name: "仁化县"
        },
        {
          code: "440229",
          name: "翁源县"
        },
        {
          code: "440232",
          name: "乳源瑶族自治县"
        },
        {
          code: "440233",
          name: "新丰县"
        },
        {
          code: "440281",
          name: "乐昌市"
        },
        {
          code: "440282",
          name: "南雄市"
        }
      ],
      [
        {
          code: "440303",
          name: "罗湖区"
        },
        {
          code: "440304",
          name: "福田区"
        },
        {
          code: "440305",
          name: "南山区"
        },
        {
          code: "440306",
          name: "宝安区"
        },
        {
          code: "440307",
          name: "龙岗区"
        },
        {
          code: "440308",
          name: "盐田区"
        },
        {
          code: "440309",
          name: "龙华区"
        },
        {
          code: "440310",
          name: "坪山区"
        }
      ],
      [
        {
          code: "440402",
          name: "香洲区"
        },
        {
          code: "440403",
          name: "斗门区"
        },
        {
          code: "440404",
          name: "金湾区"
        }
      ],
      [
        {
          code: "440507",
          name: "龙湖区"
        },
        {
          code: "440511",
          name: "金平区"
        },
        {
          code: "440512",
          name: "濠江区"
        },
        {
          code: "440513",
          name: "潮阳区"
        },
        {
          code: "440514",
          name: "潮南区"
        },
        {
          code: "440515",
          name: "澄海区"
        },
        {
          code: "440523",
          name: "南澳县"
        }
      ],
      [
        {
          code: "440604",
          name: "禅城区"
        },
        {
          code: "440605",
          name: "南海区"
        },
        {
          code: "440606",
          name: "顺德区"
        },
        {
          code: "440607",
          name: "三水区"
        },
        {
          code: "440608",
          name: "高明区"
        }
      ],
      [
        {
          code: "440703",
          name: "蓬江区"
        },
        {
          code: "440704",
          name: "江海区"
        },
        {
          code: "440705",
          name: "新会区"
        },
        {
          code: "440781",
          name: "台山市"
        },
        {
          code: "440783",
          name: "开平市"
        },
        {
          code: "440784",
          name: "鹤山市"
        },
        {
          code: "440785",
          name: "恩平市"
        }
      ],
      [
        {
          code: "440802",
          name: "赤坎区"
        },
        {
          code: "440803",
          name: "霞山区"
        },
        {
          code: "440804",
          name: "坡头区"
        },
        {
          code: "440811",
          name: "麻章区"
        },
        {
          code: "440823",
          name: "遂溪县"
        },
        {
          code: "440825",
          name: "徐闻县"
        },
        {
          code: "440881",
          name: "廉江市"
        },
        {
          code: "440882",
          name: "雷州市"
        },
        {
          code: "440883",
          name: "吴川市"
        }
      ],
      [
        {
          code: "440902",
          name: "茂南区"
        },
        {
          code: "440904",
          name: "电白区"
        },
        {
          code: "440981",
          name: "高州市"
        },
        {
          code: "440982",
          name: "化州市"
        },
        {
          code: "440983",
          name: "信宜市"
        }
      ],
      [
        {
          code: "441202",
          name: "端州区"
        },
        {
          code: "441203",
          name: "鼎湖区"
        },
        {
          code: "441204",
          name: "高要区"
        },
        {
          code: "441223",
          name: "广宁县"
        },
        {
          code: "441224",
          name: "怀集县"
        },
        {
          code: "441225",
          name: "封开县"
        },
        {
          code: "441226",
          name: "德庆县"
        },
        {
          code: "441284",
          name: "四会市"
        }
      ],
      [
        {
          code: "441302",
          name: "惠城区"
        },
        {
          code: "441303",
          name: "惠阳区"
        },
        {
          code: "441322",
          name: "博罗县"
        },
        {
          code: "441323",
          name: "惠东县"
        },
        {
          code: "441324",
          name: "龙门县"
        }
      ],
      [
        {
          code: "441402",
          name: "梅江区"
        },
        {
          code: "441403",
          name: "梅县区"
        },
        {
          code: "441422",
          name: "大埔县"
        },
        {
          code: "441423",
          name: "丰顺县"
        },
        {
          code: "441424",
          name: "五华县"
        },
        {
          code: "441426",
          name: "平远县"
        },
        {
          code: "441427",
          name: "蕉岭县"
        },
        {
          code: "441481",
          name: "兴宁市"
        }
      ],
      [
        {
          code: "441502",
          name: "城区"
        },
        {
          code: "441521",
          name: "海丰县"
        },
        {
          code: "441523",
          name: "陆河县"
        },
        {
          code: "441581",
          name: "陆丰市"
        }
      ],
      [
        {
          code: "441602",
          name: "源城区"
        },
        {
          code: "441621",
          name: "紫金县"
        },
        {
          code: "441622",
          name: "龙川县"
        },
        {
          code: "441623",
          name: "连平县"
        },
        {
          code: "441624",
          name: "和平县"
        },
        {
          code: "441625",
          name: "东源县"
        }
      ],
      [
        {
          code: "441702",
          name: "江城区"
        },
        {
          code: "441704",
          name: "阳东区"
        },
        {
          code: "441721",
          name: "阳西县"
        },
        {
          code: "441781",
          name: "阳春市"
        }
      ],
      [
        {
          code: "441802",
          name: "清城区"
        },
        {
          code: "441803",
          name: "清新区"
        },
        {
          code: "441821",
          name: "佛冈县"
        },
        {
          code: "441823",
          name: "阳山县"
        },
        {
          code: "441825",
          name: "连山壮族瑶族自治县"
        },
        {
          code: "441826",
          name: "连南瑶族自治县"
        },
        {
          code: "441881",
          name: "英德市"
        },
        {
          code: "441882",
          name: "连州市"
        }
      ],
      [
        {
          code: "441901",
          name: "东城街道"
        },
        {
          code: "441902",
          name: "南城街道"
        },
        {
          code: "441903",
          name: "万江街道"
        },
        {
          code: "441904",
          name: "莞城街道"
        },
        {
          code: "441905",
          name: "石碣镇"
        },
        {
          code: "441906",
          name: "石龙镇"
        },
        {
          code: "441907",
          name: "茶山镇"
        },
        {
          code: "441908",
          name: "石排镇"
        },
        {
          code: "441909",
          name: "企石镇"
        },
        {
          code: "441910",
          name: "横沥镇"
        },
        {
          code: "441911",
          name: "桥头镇"
        },
        {
          code: "441912",
          name: "谢岗镇"
        },
        {
          code: "441913",
          name: "东坑镇"
        },
        {
          code: "441914",
          name: "常平镇"
        },
        {
          code: "441915",
          name: "寮步镇"
        },
        {
          code: "441916",
          name: "樟木头镇"
        },
        {
          code: "441917",
          name: "大朗镇"
        },
        {
          code: "441918",
          name: "黄江镇"
        },
        {
          code: "441919",
          name: "清溪镇"
        },
        {
          code: "441920",
          name: "塘厦镇"
        },
        {
          code: "441921",
          name: "凤岗镇"
        },
        {
          code: "441922",
          name: "大岭山镇"
        },
        {
          code: "441923",
          name: "长安镇"
        },
        {
          code: "441924",
          name: "虎门镇"
        },
        {
          code: "441925",
          name: "厚街镇"
        },
        {
          code: "441926",
          name: "沙田镇"
        },
        {
          code: "441927",
          name: "道滘镇"
        },
        {
          code: "441928",
          name: "洪梅镇"
        },
        {
          code: "441929",
          name: "麻涌镇"
        },
        {
          code: "441930",
          name: "望牛墩镇"
        },
        {
          code: "441931",
          name: "中堂镇"
        },
        {
          code: "441932",
          name: "高埗镇"
        },
        {
          code: "441933",
          name: "松山湖管委会"
        },
        {
          code: "441934",
          name: "虎门港管委会"
        },
        {
          code: "441935",
          name: "东莞生态园"
        }
      ],
      [
        {
          code: "442001",
          name: "石岐区街道"
        },
        {
          code: "442002",
          name: "东区街道"
        },
        {
          code: "442003",
          name: "火炬开发区"
        },
        {
          code: "442004",
          name: "西区街道"
        },
        {
          code: "442005",
          name: "南区街道"
        },
        {
          code: "442006",
          name: "五桂山街道"
        },
        {
          code: "442007",
          name: "小榄镇"
        },
        {
          code: "442008",
          name: "黄圃镇"
        },
        {
          code: "442009",
          name: "民众镇"
        },
        {
          code: "442010",
          name: "东凤镇"
        },
        {
          code: "442011",
          name: "东升镇"
        },
        {
          code: "442012",
          name: "古镇镇"
        },
        {
          code: "442013",
          name: "沙溪镇"
        },
        {
          code: "442014",
          name: "坦洲镇"
        },
        {
          code: "442015",
          name: "港口镇"
        },
        {
          code: "442016",
          name: "三角镇"
        },
        {
          code: "442017",
          name: "横栏镇"
        },
        {
          code: "442018",
          name: "南头镇"
        },
        {
          code: "442019",
          name: "阜沙镇"
        },
        {
          code: "442020",
          name: "南朗镇"
        },
        {
          code: "442021",
          name: "三乡镇"
        },
        {
          code: "442022",
          name: "板芙镇"
        },
        {
          code: "442023",
          name: "大涌镇"
        },
        {
          code: "442024",
          name: "神湾镇"
        }
      ],
      [
        {
          code: "445102",
          name: "湘桥区"
        },
        {
          code: "445103",
          name: "潮安区"
        },
        {
          code: "445122",
          name: "饶平县"
        }
      ],
      [
        {
          code: "445202",
          name: "榕城区"
        },
        {
          code: "445203",
          name: "揭东区"
        },
        {
          code: "445222",
          name: "揭西县"
        },
        {
          code: "445224",
          name: "惠来县"
        },
        {
          code: "445281",
          name: "普宁市"
        }
      ],
      [
        {
          code: "445302",
          name: "云城区"
        },
        {
          code: "445303",
          name: "云安区"
        },
        {
          code: "445321",
          name: "新兴县"
        },
        {
          code: "445322",
          name: "郁南县"
        },
        {
          code: "445381",
          name: "罗定市"
        }
      ]
    ],
    [
      [
        {
          code: "450102",
          name: "兴宁区"
        },
        {
          code: "450103",
          name: "青秀区"
        },
        {
          code: "450105",
          name: "江南区"
        },
        {
          code: "450107",
          name: "西乡塘区"
        },
        {
          code: "450108",
          name: "良庆区"
        },
        {
          code: "450109",
          name: "邕宁区"
        },
        {
          code: "450110",
          name: "武鸣区"
        },
        {
          code: "450123",
          name: "隆安县"
        },
        {
          code: "450124",
          name: "马山县"
        },
        {
          code: "450125",
          name: "上林县"
        },
        {
          code: "450126",
          name: "宾阳县"
        },
        {
          code: "450181",
          name: "横州市"
        }
      ],
      [
        {
          code: "450202",
          name: "城中区"
        },
        {
          code: "450203",
          name: "鱼峰区"
        },
        {
          code: "450204",
          name: "柳南区"
        },
        {
          code: "450205",
          name: "柳北区"
        },
        {
          code: "450206",
          name: "柳江区"
        },
        {
          code: "450222",
          name: "柳城县"
        },
        {
          code: "450223",
          name: "鹿寨县"
        },
        {
          code: "450224",
          name: "融安县"
        },
        {
          code: "450225",
          name: "融水苗族自治县"
        },
        {
          code: "450226",
          name: "三江侗族自治县"
        }
      ],
      [
        {
          code: "450302",
          name: "秀峰区"
        },
        {
          code: "450303",
          name: "叠彩区"
        },
        {
          code: "450304",
          name: "象山区"
        },
        {
          code: "450305",
          name: "七星区"
        },
        {
          code: "450311",
          name: "雁山区"
        },
        {
          code: "450312",
          name: "临桂区"
        },
        {
          code: "450321",
          name: "阳朔县"
        },
        {
          code: "450323",
          name: "灵川县"
        },
        {
          code: "450324",
          name: "全州县"
        },
        {
          code: "450325",
          name: "兴安县"
        },
        {
          code: "450326",
          name: "永福县"
        },
        {
          code: "450327",
          name: "灌阳县"
        },
        {
          code: "450328",
          name: "龙胜各族自治县"
        },
        {
          code: "450329",
          name: "资源县"
        },
        {
          code: "450330",
          name: "平乐县"
        },
        {
          code: "450331",
          name: "荔浦县"
        },
        {
          code: "450332",
          name: "恭城瑶族自治县"
        }
      ],
      [
        {
          code: "450403",
          name: "万秀区"
        },
        {
          code: "450405",
          name: "长洲区"
        },
        {
          code: "450406",
          name: "龙圩区"
        },
        {
          code: "450421",
          name: "苍梧县"
        },
        {
          code: "450422",
          name: "藤县"
        },
        {
          code: "450423",
          name: "蒙山县"
        },
        {
          code: "450481",
          name: "岑溪市"
        }
      ],
      [
        {
          code: "450502",
          name: "海城区"
        },
        {
          code: "450503",
          name: "银海区"
        },
        {
          code: "450512",
          name: "铁山港区"
        },
        {
          code: "450521",
          name: "合浦县"
        }
      ],
      [
        {
          code: "450602",
          name: "港口区"
        },
        {
          code: "450603",
          name: "防城区"
        },
        {
          code: "450621",
          name: "上思县"
        },
        {
          code: "450681",
          name: "东兴市"
        }
      ],
      [
        {
          code: "450702",
          name: "钦南区"
        },
        {
          code: "450703",
          name: "钦北区"
        },
        {
          code: "450721",
          name: "灵山县"
        },
        {
          code: "450722",
          name: "浦北县"
        }
      ],
      [
        {
          code: "450802",
          name: "港北区"
        },
        {
          code: "450803",
          name: "港南区"
        },
        {
          code: "450804",
          name: "覃塘区"
        },
        {
          code: "450821",
          name: "平南县"
        },
        {
          code: "450881",
          name: "桂平市"
        }
      ],
      [
        {
          code: "450902",
          name: "玉州区"
        },
        {
          code: "450903",
          name: "福绵区"
        },
        {
          code: "450921",
          name: "容县"
        },
        {
          code: "450922",
          name: "陆川县"
        },
        {
          code: "450923",
          name: "博白县"
        },
        {
          code: "450924",
          name: "兴业县"
        },
        {
          code: "450981",
          name: "北流市"
        }
      ],
      [
        {
          code: "451002",
          name: "右江区"
        },
        {
          code: "451021",
          name: "田阳县"
        },
        {
          code: "451022",
          name: "田东县"
        },
        {
          code: "451023",
          name: "平果县"
        },
        {
          code: "451024",
          name: "德保县"
        },
        {
          code: "451026",
          name: "那坡县"
        },
        {
          code: "451027",
          name: "凌云县"
        },
        {
          code: "451028",
          name: "乐业县"
        },
        {
          code: "451029",
          name: "田林县"
        },
        {
          code: "451030",
          name: "西林县"
        },
        {
          code: "451031",
          name: "隆林各族自治县"
        },
        {
          code: "451081",
          name: "靖西市"
        }
      ],
      [
        {
          code: "451102",
          name: "八步区"
        },
        {
          code: "451103",
          name: "平桂区"
        },
        {
          code: "451121",
          name: "昭平县"
        },
        {
          code: "451122",
          name: "钟山县"
        },
        {
          code: "451123",
          name: "富川瑶族自治县"
        }
      ],
      [
        {
          code: "451202",
          name: "金城江区"
        },
        {
          code: "451203",
          name: "宜州区"
        },
        {
          code: "451221",
          name: "南丹县"
        },
        {
          code: "451222",
          name: "天峨县"
        },
        {
          code: "451223",
          name: "凤山县"
        },
        {
          code: "451224",
          name: "东兰县"
        },
        {
          code: "451225",
          name: "罗城仫佬族自治县"
        },
        {
          code: "451226",
          name: "环江毛南族自治县"
        },
        {
          code: "451227",
          name: "巴马瑶族自治县"
        },
        {
          code: "451228",
          name: "都安瑶族自治县"
        },
        {
          code: "451229",
          name: "大化瑶族自治县"
        }
      ],
      [
        {
          code: "451302",
          name: "兴宾区"
        },
        {
          code: "451321",
          name: "忻城县"
        },
        {
          code: "451322",
          name: "象州县"
        },
        {
          code: "451323",
          name: "武宣县"
        },
        {
          code: "451324",
          name: "金秀瑶族自治县"
        },
        {
          code: "451381",
          name: "合山市"
        }
      ],
      [
        {
          code: "451402",
          name: "江州区"
        },
        {
          code: "451421",
          name: "扶绥县"
        },
        {
          code: "451422",
          name: "宁明县"
        },
        {
          code: "451423",
          name: "龙州县"
        },
        {
          code: "451424",
          name: "大新县"
        },
        {
          code: "451425",
          name: "天等县"
        },
        {
          code: "451481",
          name: "凭祥市"
        }
      ]
    ],
    [
      [
        {
          code: "460105",
          name: "秀英区"
        },
        {
          code: "460106",
          name: "龙华区"
        },
        {
          code: "460107",
          name: "琼山区"
        },
        {
          code: "460108",
          name: "美兰区"
        }
      ],
      [
        {
          code: "460202",
          name: "海棠区"
        },
        {
          code: "460203",
          name: "吉阳区"
        },
        {
          code: "460204",
          name: "天涯区"
        },
        {
          code: "460205",
          name: "崖州区"
        }
      ],
      [
        {
          code: "460321",
          name: "西沙群岛"
        },
        {
          code: "460322",
          name: "南沙群岛"
        },
        {
          code: "460323",
          name: "中沙群岛的岛礁及其海域"
        }
      ],
      [
        {
          code: "460401",
          name: "那大镇"
        },
        {
          code: "460402",
          name: "和庆镇"
        },
        {
          code: "460403",
          name: "南丰镇"
        },
        {
          code: "460404",
          name: "大成镇"
        },
        {
          code: "460405",
          name: "雅星镇"
        },
        {
          code: "460406",
          name: "兰洋镇"
        },
        {
          code: "460407",
          name: "光村镇"
        },
        {
          code: "460408",
          name: "木棠镇"
        },
        {
          code: "460409",
          name: "海头镇"
        },
        {
          code: "460410",
          name: "峨蔓镇"
        },
        {
          code: "460411",
          name: "三都镇"
        },
        {
          code: "460412",
          name: "王五镇"
        },
        {
          code: "460413",
          name: "白马井镇"
        },
        {
          code: "460414",
          name: "中和镇"
        },
        {
          code: "460415",
          name: "排浦镇"
        },
        {
          code: "460416",
          name: "东成镇"
        },
        {
          code: "460417",
          name: "新州镇"
        },
        {
          code: "460418",
          name: "国营西培农场"
        },
        {
          code: "460419",
          name: "国营西联农场"
        },
        {
          code: "460420",
          name: "国营蓝洋农场"
        },
        {
          code: "460421",
          name: "国营八一农场"
        },
        {
          code: "460422",
          name: "洋浦经济开发区"
        },
        {
          code: "460423",
          name: "华南热作学院"
        },
        {
          code: "460424",
          name: "红岭农场"
        }
      ],
      [
        {
          code: "469001",
          name: "五指山市"
        },
        {
          code: "469002",
          name: "琼海市"
        },
        {
          code: "469005",
          name: "文昌市"
        },
        {
          code: "469006",
          name: "万宁市"
        },
        {
          code: "469007",
          name: "东方市"
        },
        {
          code: "469021",
          name: "定安县"
        },
        {
          code: "469022",
          name: "屯昌县"
        },
        {
          code: "469023",
          name: "澄迈县"
        },
        {
          code: "469024",
          name: "临高县"
        },
        {
          code: "469025",
          name: "白沙黎族自治县"
        },
        {
          code: "469026",
          name: "昌江黎族自治县"
        },
        {
          code: "469027",
          name: "乐东黎族自治县"
        },
        {
          code: "469028",
          name: "陵水黎族自治县"
        },
        {
          code: "469029",
          name: "保亭黎族苗族自治县"
        },
        {
          code: "469030",
          name: "琼中黎族苗族自治县"
        }
      ]
    ],
    [
      [
        {
          code: "500101",
          name: "万州区"
        },
        {
          code: "500102",
          name: "涪陵区"
        },
        {
          code: "500103",
          name: "渝中区"
        },
        {
          code: "500104",
          name: "大渡口区"
        },
        {
          code: "500105",
          name: "江北区"
        },
        {
          code: "500106",
          name: "沙坪坝区"
        },
        {
          code: "500107",
          name: "九龙坡区"
        },
        {
          code: "500108",
          name: "南岸区"
        },
        {
          code: "500109",
          name: "北碚区"
        },
        {
          code: "500110",
          name: "綦江区"
        },
        {
          code: "500111",
          name: "大足区"
        },
        {
          code: "500112",
          name: "渝北区"
        },
        {
          code: "500113",
          name: "巴南区"
        },
        {
          code: "500114",
          name: "黔江区"
        },
        {
          code: "500115",
          name: "长寿区"
        },
        {
          code: "500116",
          name: "江津区"
        },
        {
          code: "500117",
          name: "合川区"
        },
        {
          code: "500118",
          name: "永川区"
        },
        {
          code: "500119",
          name: "南川区"
        },
        {
          code: "500120",
          name: "璧山区"
        },
        {
          code: "500151",
          name: "铜梁区"
        },
        {
          code: "500152",
          name: "潼南区"
        },
        {
          code: "500153",
          name: "荣昌区"
        },
        {
          code: "500154",
          name: "开州区"
        },
        {
          code: "500155",
          name: "梁平区"
        },
        {
          code: "500156",
          name: "武隆区"
        }
      ],
      [
        {
          code: "500229",
          name: "城口县"
        },
        {
          code: "500230",
          name: "丰都县"
        },
        {
          code: "500231",
          name: "垫江县"
        },
        {
          code: "500233",
          name: "忠县"
        },
        {
          code: "500235",
          name: "云阳县"
        },
        {
          code: "500236",
          name: "奉节县"
        },
        {
          code: "500237",
          name: "巫山县"
        },
        {
          code: "500238",
          name: "巫溪县"
        },
        {
          code: "500240",
          name: "石柱土家族自治县"
        },
        {
          code: "500241",
          name: "秀山土家族苗族自治县"
        },
        {
          code: "500242",
          name: "酉阳土家族苗族自治县"
        },
        {
          code: "500243",
          name: "彭水苗族土家族自治县"
        }
      ]
    ],
    [
      [
        {
          code: "510104",
          name: "锦江区"
        },
        {
          code: "510105",
          name: "青羊区"
        },
        {
          code: "510106",
          name: "金牛区"
        },
        {
          code: "510107",
          name: "武侯区"
        },
        {
          code: "510108",
          name: "成华区"
        },
        {
          code: "510112",
          name: "龙泉驿区"
        },
        {
          code: "510113",
          name: "青白江区"
        },
        {
          code: "510114",
          name: "新都区"
        },
        {
          code: "510115",
          name: "温江区"
        },
        {
          code: "510116",
          name: "双流区"
        },
        {
          code: "510117",
          name: "郫都区"
        },
        {
          code: "510121",
          name: "金堂县"
        },
        {
          code: "510129",
          name: "大邑县"
        },
        {
          code: "510131",
          name: "蒲江县"
        },
        {
          code: "510132",
          name: "新津县"
        },
        {
          code: "510181",
          name: "都江堰市"
        },
        {
          code: "510182",
          name: "彭州市"
        },
        {
          code: "510183",
          name: "邛崃市"
        },
        {
          code: "510184",
          name: "崇州市"
        },
        {
          code: "510185",
          name: "简阳市"
        }
      ],
      [
        {
          code: "510302",
          name: "自流井区"
        },
        {
          code: "510303",
          name: "贡井区"
        },
        {
          code: "510304",
          name: "大安区"
        },
        {
          code: "510311",
          name: "沿滩区"
        },
        {
          code: "510321",
          name: "荣县"
        },
        {
          code: "510322",
          name: "富顺县"
        }
      ],
      [
        {
          code: "510402",
          name: "东区"
        },
        {
          code: "510403",
          name: "西区"
        },
        {
          code: "510411",
          name: "仁和区"
        },
        {
          code: "510421",
          name: "米易县"
        },
        {
          code: "510422",
          name: "盐边县"
        }
      ],
      [
        {
          code: "510502",
          name: "江阳区"
        },
        {
          code: "510503",
          name: "纳溪区"
        },
        {
          code: "510504",
          name: "龙马潭区"
        },
        {
          code: "510521",
          name: "泸县"
        },
        {
          code: "510522",
          name: "合江县"
        },
        {
          code: "510524",
          name: "叙永县"
        },
        {
          code: "510525",
          name: "古蔺县"
        }
      ],
      [
        {
          code: "510603",
          name: "旌阳区"
        },
        {
          code: "510604",
          name: "罗江区"
        },
        {
          code: "510623",
          name: "中江县"
        },
        {
          code: "510681",
          name: "广汉市"
        },
        {
          code: "510682",
          name: "什邡市"
        },
        {
          code: "510683",
          name: "绵竹市"
        }
      ],
      [
        {
          code: "510703",
          name: "涪城区"
        },
        {
          code: "510704",
          name: "游仙区"
        },
        {
          code: "510705",
          name: "安州区"
        },
        {
          code: "510722",
          name: "三台县"
        },
        {
          code: "510723",
          name: "盐亭县"
        },
        {
          code: "510725",
          name: "梓潼县"
        },
        {
          code: "510726",
          name: "北川羌族自治县"
        },
        {
          code: "510727",
          name: "平武县"
        },
        {
          code: "510781",
          name: "江油市"
        }
      ],
      [
        {
          code: "510802",
          name: "利州区"
        },
        {
          code: "510811",
          name: "昭化区"
        },
        {
          code: "510812",
          name: "朝天区"
        },
        {
          code: "510821",
          name: "旺苍县"
        },
        {
          code: "510822",
          name: "青川县"
        },
        {
          code: "510823",
          name: "剑阁县"
        },
        {
          code: "510824",
          name: "苍溪县"
        }
      ],
      [
        {
          code: "510903",
          name: "船山区"
        },
        {
          code: "510904",
          name: "安居区"
        },
        {
          code: "510921",
          name: "蓬溪县"
        },
        {
          code: "510922",
          name: "射洪县"
        },
        {
          code: "510923",
          name: "大英县"
        }
      ],
      [
        {
          code: "511002",
          name: "市中区"
        },
        {
          code: "511011",
          name: "东兴区"
        },
        {
          code: "511024",
          name: "威远县"
        },
        {
          code: "511025",
          name: "资中县"
        },
        {
          code: "511083",
          name: "隆昌市"
        }
      ],
      [
        {
          code: "511102",
          name: "市中区"
        },
        {
          code: "511111",
          name: "沙湾区"
        },
        {
          code: "511112",
          name: "五通桥区"
        },
        {
          code: "511113",
          name: "金口河区"
        },
        {
          code: "511123",
          name: "犍为县"
        },
        {
          code: "511124",
          name: "井研县"
        },
        {
          code: "511126",
          name: "夹江县"
        },
        {
          code: "511129",
          name: "沐川县"
        },
        {
          code: "511132",
          name: "峨边彝族自治县"
        },
        {
          code: "511133",
          name: "马边彝族自治县"
        },
        {
          code: "511181",
          name: "峨眉山市"
        }
      ],
      [
        {
          code: "511302",
          name: "顺庆区"
        },
        {
          code: "511303",
          name: "高坪区"
        },
        {
          code: "511304",
          name: "嘉陵区"
        },
        {
          code: "511321",
          name: "南部县"
        },
        {
          code: "511322",
          name: "营山县"
        },
        {
          code: "511323",
          name: "蓬安县"
        },
        {
          code: "511324",
          name: "仪陇县"
        },
        {
          code: "511325",
          name: "西充县"
        },
        {
          code: "511381",
          name: "阆中市"
        }
      ],
      [
        {
          code: "511402",
          name: "东坡区"
        },
        {
          code: "511403",
          name: "彭山区"
        },
        {
          code: "511421",
          name: "仁寿县"
        },
        {
          code: "511423",
          name: "洪雅县"
        },
        {
          code: "511424",
          name: "丹棱县"
        },
        {
          code: "511425",
          name: "青神县"
        }
      ],
      [
        {
          code: "511502",
          name: "翠屏区"
        },
        {
          code: "511503",
          name: "南溪区"
        },
        {
          code: "511521",
          name: "宜宾县"
        },
        {
          code: "511523",
          name: "江安县"
        },
        {
          code: "511524",
          name: "长宁县"
        },
        {
          code: "511525",
          name: "高县"
        },
        {
          code: "511526",
          name: "珙县"
        },
        {
          code: "511527",
          name: "筠连县"
        },
        {
          code: "511528",
          name: "兴文县"
        },
        {
          code: "511529",
          name: "屏山县"
        }
      ],
      [
        {
          code: "511602",
          name: "广安区"
        },
        {
          code: "511603",
          name: "前锋区"
        },
        {
          code: "511621",
          name: "岳池县"
        },
        {
          code: "511622",
          name: "武胜县"
        },
        {
          code: "511623",
          name: "邻水县"
        },
        {
          code: "511681",
          name: "华蓥市"
        }
      ],
      [
        {
          code: "511702",
          name: "通川区"
        },
        {
          code: "511703",
          name: "达川区"
        },
        {
          code: "511722",
          name: "宣汉县"
        },
        {
          code: "511723",
          name: "开江县"
        },
        {
          code: "511724",
          name: "大竹县"
        },
        {
          code: "511725",
          name: "渠县"
        },
        {
          code: "511781",
          name: "万源市"
        }
      ],
      [
        {
          code: "511802",
          name: "雨城区"
        },
        {
          code: "511803",
          name: "名山区"
        },
        {
          code: "511822",
          name: "荥经县"
        },
        {
          code: "511823",
          name: "汉源县"
        },
        {
          code: "511824",
          name: "石棉县"
        },
        {
          code: "511825",
          name: "天全县"
        },
        {
          code: "511826",
          name: "芦山县"
        },
        {
          code: "511827",
          name: "宝兴县"
        }
      ],
      [
        {
          code: "511902",
          name: "巴州区"
        },
        {
          code: "511903",
          name: "恩阳区"
        },
        {
          code: "511921",
          name: "通江县"
        },
        {
          code: "511922",
          name: "南江县"
        },
        {
          code: "511923",
          name: "平昌县"
        }
      ],
      [
        {
          code: "512002",
          name: "雁江区"
        },
        {
          code: "512021",
          name: "安岳县"
        },
        {
          code: "512022",
          name: "乐至县"
        }
      ],
      [
        {
          code: "513201",
          name: "马尔康市"
        },
        {
          code: "513221",
          name: "汶川县"
        },
        {
          code: "513222",
          name: "理县"
        },
        {
          code: "513223",
          name: "茂县"
        },
        {
          code: "513224",
          name: "松潘县"
        },
        {
          code: "513225",
          name: "九寨沟县"
        },
        {
          code: "513226",
          name: "金川县"
        },
        {
          code: "513227",
          name: "小金县"
        },
        {
          code: "513228",
          name: "黑水县"
        },
        {
          code: "513230",
          name: "壤塘县"
        },
        {
          code: "513231",
          name: "阿坝县"
        },
        {
          code: "513232",
          name: "若尔盖县"
        },
        {
          code: "513233",
          name: "红原县"
        }
      ],
      [
        {
          code: "513301",
          name: "康定市"
        },
        {
          code: "513322",
          name: "泸定县"
        },
        {
          code: "513323",
          name: "丹巴县"
        },
        {
          code: "513324",
          name: "九龙县"
        },
        {
          code: "513325",
          name: "雅江县"
        },
        {
          code: "513326",
          name: "道孚县"
        },
        {
          code: "513327",
          name: "炉霍县"
        },
        {
          code: "513328",
          name: "甘孜县"
        },
        {
          code: "513329",
          name: "新龙县"
        },
        {
          code: "513330",
          name: "德格县"
        },
        {
          code: "513331",
          name: "白玉县"
        },
        {
          code: "513332",
          name: "石渠县"
        },
        {
          code: "513333",
          name: "色达县"
        },
        {
          code: "513334",
          name: "理塘县"
        },
        {
          code: "513335",
          name: "巴塘县"
        },
        {
          code: "513336",
          name: "乡城县"
        },
        {
          code: "513337",
          name: "稻城县"
        },
        {
          code: "513338",
          name: "得荣县"
        }
      ],
      [
        {
          code: "513401",
          name: "西昌市"
        },
        {
          code: "513402",
          name: "会理市"
        },
        {
          code: "513422",
          name: "木里藏族自治县"
        },
        {
          code: "513423",
          name: "盐源县"
        },
        {
          code: "513424",
          name: "德昌县"
        },
        {
          code: "513426",
          name: "会东县"
        },
        {
          code: "513427",
          name: "宁南县"
        },
        {
          code: "513428",
          name: "普格县"
        },
        {
          code: "513429",
          name: "布拖县"
        },
        {
          code: "513430",
          name: "金阳县"
        },
        {
          code: "513431",
          name: "昭觉县"
        },
        {
          code: "513432",
          name: "喜德县"
        },
        {
          code: "513433",
          name: "冕宁县"
        },
        {
          code: "513434",
          name: "越西县"
        },
        {
          code: "513435",
          name: "甘洛县"
        },
        {
          code: "513436",
          name: "美姑县"
        },
        {
          code: "513437",
          name: "雷波县"
        }
      ]
    ],
    [
      [
        {
          code: "520102",
          name: "南明区"
        },
        {
          code: "520103",
          name: "云岩区"
        },
        {
          code: "520111",
          name: "花溪区"
        },
        {
          code: "520112",
          name: "乌当区"
        },
        {
          code: "520113",
          name: "白云区"
        },
        {
          code: "520115",
          name: "观山湖区"
        },
        {
          code: "520121",
          name: "开阳县"
        },
        {
          code: "520122",
          name: "息烽县"
        },
        {
          code: "520123",
          name: "修文县"
        },
        {
          code: "520181",
          name: "清镇市"
        }
      ],
      [
        {
          code: "520201",
          name: "钟山区"
        },
        {
          code: "520203",
          name: "六枝特区"
        },
        {
          code: "520221",
          name: "水城县"
        },
        {
          code: "520281",
          name: "盘州市"
        }
      ],
      [
        {
          code: "520302",
          name: "红花岗区"
        },
        {
          code: "520303",
          name: "汇川区"
        },
        {
          code: "520304",
          name: "播州区"
        },
        {
          code: "520322",
          name: "桐梓县"
        },
        {
          code: "520323",
          name: "绥阳县"
        },
        {
          code: "520324",
          name: "正安县"
        },
        {
          code: "520325",
          name: "道真仡佬族苗族自治县"
        },
        {
          code: "520326",
          name: "务川仡佬族苗族自治县"
        },
        {
          code: "520327",
          name: "凤冈县"
        },
        {
          code: "520328",
          name: "湄潭县"
        },
        {
          code: "520329",
          name: "余庆县"
        },
        {
          code: "520330",
          name: "习水县"
        },
        {
          code: "520381",
          name: "赤水市"
        },
        {
          code: "520382",
          name: "仁怀市"
        }
      ],
      [
        {
          code: "520402",
          name: "西秀区"
        },
        {
          code: "520403",
          name: "平坝区"
        },
        {
          code: "520422",
          name: "普定县"
        },
        {
          code: "520423",
          name: "镇宁布依族苗族自治县"
        },
        {
          code: "520424",
          name: "关岭布依族苗族自治县"
        },
        {
          code: "520425",
          name: "紫云苗族布依族自治县"
        }
      ],
      [
        {
          code: "520502",
          name: "七星关区"
        },
        {
          code: "520521",
          name: "大方县"
        },
        {
          code: "520523",
          name: "金沙县"
        },
        {
          code: "520524",
          name: "织金县"
        },
        {
          code: "520525",
          name: "纳雍县"
        },
        {
          code: "520526",
          name: "威宁彝族回族苗族自治县"
        },
        {
          code: "520527",
          name: "赫章县"
        },
        {
          code: "520581",
          name: "黔西市"
        }
      ],
      [
        {
          code: "520602",
          name: "碧江区"
        },
        {
          code: "520603",
          name: "万山区"
        },
        {
          code: "520621",
          name: "江口县"
        },
        {
          code: "520622",
          name: "玉屏侗族自治县"
        },
        {
          code: "520623",
          name: "石阡县"
        },
        {
          code: "520624",
          name: "思南县"
        },
        {
          code: "520625",
          name: "印江土家族苗族自治县"
        },
        {
          code: "520626",
          name: "德江县"
        },
        {
          code: "520627",
          name: "沿河土家族自治县"
        },
        {
          code: "520628",
          name: "松桃苗族自治县"
        }
      ],
      [
        {
          code: "522301",
          name: "兴义市"
        },
        {
          code: "522322",
          name: "兴仁县"
        },
        {
          code: "522323",
          name: "普安县"
        },
        {
          code: "522324",
          name: "晴隆县"
        },
        {
          code: "522325",
          name: "贞丰县"
        },
        {
          code: "522326",
          name: "望谟县"
        },
        {
          code: "522327",
          name: "册亨县"
        },
        {
          code: "522328",
          name: "安龙县"
        }
      ],
      [
        {
          code: "522601",
          name: "凯里市"
        },
        {
          code: "522622",
          name: "黄平县"
        },
        {
          code: "522623",
          name: "施秉县"
        },
        {
          code: "522624",
          name: "三穗县"
        },
        {
          code: "522625",
          name: "镇远县"
        },
        {
          code: "522626",
          name: "岑巩县"
        },
        {
          code: "522627",
          name: "天柱县"
        },
        {
          code: "522628",
          name: "锦屏县"
        },
        {
          code: "522629",
          name: "剑河县"
        },
        {
          code: "522630",
          name: "台江县"
        },
        {
          code: "522631",
          name: "黎平县"
        },
        {
          code: "522632",
          name: "榕江县"
        },
        {
          code: "522633",
          name: "从江县"
        },
        {
          code: "522634",
          name: "雷山县"
        },
        {
          code: "522635",
          name: "麻江县"
        },
        {
          code: "522636",
          name: "丹寨县"
        }
      ],
      [
        {
          code: "522701",
          name: "都匀市"
        },
        {
          code: "522702",
          name: "福泉市"
        },
        {
          code: "522722",
          name: "荔波县"
        },
        {
          code: "522723",
          name: "贵定县"
        },
        {
          code: "522725",
          name: "瓮安县"
        },
        {
          code: "522726",
          name: "独山县"
        },
        {
          code: "522727",
          name: "平塘县"
        },
        {
          code: "522728",
          name: "罗甸县"
        },
        {
          code: "522729",
          name: "长顺县"
        },
        {
          code: "522730",
          name: "龙里县"
        },
        {
          code: "522731",
          name: "惠水县"
        },
        {
          code: "522732",
          name: "三都水族自治县"
        }
      ]
    ],
    [
      [
        {
          code: "530102",
          name: "五华区"
        },
        {
          code: "530103",
          name: "盘龙区"
        },
        {
          code: "530111",
          name: "官渡区"
        },
        {
          code: "530112",
          name: "西山区"
        },
        {
          code: "530113",
          name: "东川区"
        },
        {
          code: "530114",
          name: "呈贡区"
        },
        {
          code: "530115",
          name: "晋宁区"
        },
        {
          code: "530124",
          name: "富民县"
        },
        {
          code: "530125",
          name: "宜良县"
        },
        {
          code: "530126",
          name: "石林彝族自治县"
        },
        {
          code: "530127",
          name: "嵩明县"
        },
        {
          code: "530128",
          name: "禄劝彝族苗族自治县"
        },
        {
          code: "530129",
          name: "寻甸回族彝族自治县"
        },
        {
          code: "530181",
          name: "安宁市"
        }
      ],
      [
        {
          code: "530302",
          name: "麒麟区"
        },
        {
          code: "530303",
          name: "沾益区"
        },
        {
          code: "530321",
          name: "马龙县"
        },
        {
          code: "530322",
          name: "陆良县"
        },
        {
          code: "530323",
          name: "师宗县"
        },
        {
          code: "530324",
          name: "罗平县"
        },
        {
          code: "530325",
          name: "富源县"
        },
        {
          code: "530326",
          name: "会泽县"
        },
        {
          code: "530381",
          name: "宣威市"
        }
      ],
      [
        {
          code: "530402",
          name: "红塔区"
        },
        {
          code: "530403",
          name: "江川区"
        },
        {
          code: "530422",
          name: "澄江县"
        },
        {
          code: "530423",
          name: "通海县"
        },
        {
          code: "530424",
          name: "华宁县"
        },
        {
          code: "530425",
          name: "易门县"
        },
        {
          code: "530426",
          name: "峨山彝族自治县"
        },
        {
          code: "530427",
          name: "新平彝族傣族自治县"
        },
        {
          code: "530428",
          name: "元江哈尼族彝族傣族自治县"
        }
      ],
      [
        {
          code: "530502",
          name: "隆阳区"
        },
        {
          code: "530521",
          name: "施甸县"
        },
        {
          code: "530523",
          name: "龙陵县"
        },
        {
          code: "530524",
          name: "昌宁县"
        },
        {
          code: "530581",
          name: "腾冲市"
        }
      ],
      [
        {
          code: "530602",
          name: "昭阳区"
        },
        {
          code: "530621",
          name: "鲁甸县"
        },
        {
          code: "530622",
          name: "巧家县"
        },
        {
          code: "530623",
          name: "盐津县"
        },
        {
          code: "530624",
          name: "大关县"
        },
        {
          code: "530625",
          name: "永善县"
        },
        {
          code: "530626",
          name: "绥江县"
        },
        {
          code: "530627",
          name: "镇雄县"
        },
        {
          code: "530628",
          name: "彝良县"
        },
        {
          code: "530629",
          name: "威信县"
        },
        {
          code: "530630",
          name: "水富县"
        }
      ],
      [
        {
          code: "530702",
          name: "古城区"
        },
        {
          code: "530721",
          name: "玉龙纳西族自治县"
        },
        {
          code: "530722",
          name: "永胜县"
        },
        {
          code: "530723",
          name: "华坪县"
        },
        {
          code: "530724",
          name: "宁蒗彝族自治县"
        }
      ],
      [
        {
          code: "530802",
          name: "思茅区"
        },
        {
          code: "530821",
          name: "宁洱哈尼族彝族自治县"
        },
        {
          code: "530822",
          name: "墨江哈尼族自治县"
        },
        {
          code: "530823",
          name: "景东彝族自治县"
        },
        {
          code: "530824",
          name: "景谷傣族彝族自治县"
        },
        {
          code: "530825",
          name: "镇沅彝族哈尼族拉祜族自治县"
        },
        {
          code: "530826",
          name: "江城哈尼族彝族自治县"
        },
        {
          code: "530827",
          name: "孟连傣族拉祜族佤族自治县"
        },
        {
          code: "530828",
          name: "澜沧拉祜族自治县"
        },
        {
          code: "530829",
          name: "西盟佤族自治县"
        }
      ],
      [
        {
          code: "530902",
          name: "临翔区"
        },
        {
          code: "530921",
          name: "凤庆县"
        },
        {
          code: "530922",
          name: "云县"
        },
        {
          code: "530923",
          name: "永德县"
        },
        {
          code: "530924",
          name: "镇康县"
        },
        {
          code: "530925",
          name: "双江拉祜族佤族布朗族傣族自治县"
        },
        {
          code: "530926",
          name: "耿马傣族佤族自治县"
        },
        {
          code: "530927",
          name: "沧源佤族自治县"
        }
      ],
      [
        {
          code: "532301",
          name: "楚雄市"
        },
        {
          code: "532302",
          name: "禄丰市"
        },
        {
          code: "532322",
          name: "双柏县"
        },
        {
          code: "532323",
          name: "牟定县"
        },
        {
          code: "532324",
          name: "南华县"
        },
        {
          code: "532325",
          name: "姚安县"
        },
        {
          code: "532326",
          name: "大姚县"
        },
        {
          code: "532327",
          name: "永仁县"
        },
        {
          code: "532328",
          name: "元谋县"
        },
        {
          code: "532329",
          name: "武定县"
        }
      ],
      [
        {
          code: "532501",
          name: "个旧市"
        },
        {
          code: "532502",
          name: "开远市"
        },
        {
          code: "532503",
          name: "蒙自市"
        },
        {
          code: "532504",
          name: "弥勒市"
        },
        {
          code: "532523",
          name: "屏边苗族自治县"
        },
        {
          code: "532524",
          name: "建水县"
        },
        {
          code: "532525",
          name: "石屏县"
        },
        {
          code: "532527",
          name: "泸西县"
        },
        {
          code: "532528",
          name: "元阳县"
        },
        {
          code: "532529",
          name: "红河县"
        },
        {
          code: "532530",
          name: "金平苗族瑶族傣族自治县"
        },
        {
          code: "532531",
          name: "绿春县"
        },
        {
          code: "532532",
          name: "河口瑶族自治县"
        }
      ],
      [
        {
          code: "532601",
          name: "文山市"
        },
        {
          code: "532622",
          name: "砚山县"
        },
        {
          code: "532623",
          name: "西畴县"
        },
        {
          code: "532624",
          name: "麻栗坡县"
        },
        {
          code: "532625",
          name: "马关县"
        },
        {
          code: "532626",
          name: "丘北县"
        },
        {
          code: "532627",
          name: "广南县"
        },
        {
          code: "532628",
          name: "富宁县"
        }
      ],
      [
        {
          code: "532801",
          name: "景洪市"
        },
        {
          code: "532822",
          name: "勐海县"
        },
        {
          code: "532823",
          name: "勐腊县"
        }
      ],
      [
        {
          code: "532901",
          name: "大理市"
        },
        {
          code: "532922",
          name: "漾濞彝族自治县"
        },
        {
          code: "532923",
          name: "祥云县"
        },
        {
          code: "532924",
          name: "宾川县"
        },
        {
          code: "532925",
          name: "弥渡县"
        },
        {
          code: "532926",
          name: "南涧彝族自治县"
        },
        {
          code: "532927",
          name: "巍山彝族回族自治县"
        },
        {
          code: "532928",
          name: "永平县"
        },
        {
          code: "532929",
          name: "云龙县"
        },
        {
          code: "532930",
          name: "洱源县"
        },
        {
          code: "532931",
          name: "剑川县"
        },
        {
          code: "532932",
          name: "鹤庆县"
        }
      ],
      [
        {
          code: "533102",
          name: "瑞丽市"
        },
        {
          code: "533103",
          name: "芒市"
        },
        {
          code: "533122",
          name: "梁河县"
        },
        {
          code: "533123",
          name: "盈江县"
        },
        {
          code: "533124",
          name: "陇川县"
        }
      ],
      [
        {
          code: "533301",
          name: "泸水市"
        },
        {
          code: "533323",
          name: "福贡县"
        },
        {
          code: "533324",
          name: "贡山独龙族怒族自治县"
        },
        {
          code: "533325",
          name: "兰坪白族普米族自治县"
        }
      ],
      [
        {
          code: "533401",
          name: "香格里拉市"
        },
        {
          code: "533422",
          name: "德钦县"
        },
        {
          code: "533423",
          name: "维西傈僳族自治县"
        }
      ]
    ],
    [
      [
        {
          code: "540102",
          name: "城关区"
        },
        {
          code: "540103",
          name: "堆龙德庆区"
        },
        {
          code: "540104",
          name: "达孜区"
        },
        {
          code: "540121",
          name: "林周县"
        },
        {
          code: "540122",
          name: "当雄县"
        },
        {
          code: "540123",
          name: "尼木县"
        },
        {
          code: "540124",
          name: "曲水县"
        },
        {
          code: "540127",
          name: "墨竹工卡县"
        }
      ],
      [
        {
          code: "540202",
          name: "桑珠孜区"
        },
        {
          code: "540221",
          name: "南木林县"
        },
        {
          code: "540222",
          name: "江孜县"
        },
        {
          code: "540223",
          name: "定日县"
        },
        {
          code: "540224",
          name: "萨迦县"
        },
        {
          code: "540225",
          name: "拉孜县"
        },
        {
          code: "540226",
          name: "昂仁县"
        },
        {
          code: "540227",
          name: "谢通门县"
        },
        {
          code: "540228",
          name: "白朗县"
        },
        {
          code: "540229",
          name: "仁布县"
        },
        {
          code: "540230",
          name: "康马县"
        },
        {
          code: "540231",
          name: "定结县"
        },
        {
          code: "540232",
          name: "仲巴县"
        },
        {
          code: "540233",
          name: "亚东县"
        },
        {
          code: "540234",
          name: "吉隆县"
        },
        {
          code: "540235",
          name: "聂拉木县"
        },
        {
          code: "540236",
          name: "萨嘎县"
        },
        {
          code: "540237",
          name: "岗巴县"
        }
      ],
      [
        {
          code: "540302",
          name: "卡若区"
        },
        {
          code: "540321",
          name: "江达县"
        },
        {
          code: "540322",
          name: "贡觉县"
        },
        {
          code: "540323",
          name: "类乌齐县"
        },
        {
          code: "540324",
          name: "丁青县"
        },
        {
          code: "540325",
          name: "察雅县"
        },
        {
          code: "540326",
          name: "八宿县"
        },
        {
          code: "540327",
          name: "左贡县"
        },
        {
          code: "540328",
          name: "芒康县"
        },
        {
          code: "540329",
          name: "洛隆县"
        },
        {
          code: "540330",
          name: "边坝县"
        }
      ],
      [
        {
          code: "540402",
          name: "巴宜区"
        },
        {
          code: "540421",
          name: "工布江达县"
        },
        {
          code: "540422",
          name: "米林县"
        },
        {
          code: "540423",
          name: "墨脱县"
        },
        {
          code: "540424",
          name: "波密县"
        },
        {
          code: "540425",
          name: "察隅县"
        },
        {
          code: "540426",
          name: "朗县"
        }
      ],
      [
        {
          code: "540502",
          name: "乃东区"
        },
        {
          code: "540521",
          name: "扎囊县"
        },
        {
          code: "540522",
          name: "贡嘎县"
        },
        {
          code: "540523",
          name: "桑日县"
        },
        {
          code: "540524",
          name: "琼结县"
        },
        {
          code: "540525",
          name: "曲松县"
        },
        {
          code: "540526",
          name: "措美县"
        },
        {
          code: "540527",
          name: "洛扎县"
        },
        {
          code: "540528",
          name: "加查县"
        },
        {
          code: "540529",
          name: "隆子县"
        },
        {
          code: "540530",
          name: "错那县"
        },
        {
          code: "540531",
          name: "浪卡子县"
        }
      ],
      [
        {
          code: "542421",
          name: "那曲县"
        },
        {
          code: "542422",
          name: "嘉黎县"
        },
        {
          code: "542423",
          name: "比如县"
        },
        {
          code: "542424",
          name: "聂荣县"
        },
        {
          code: "542425",
          name: "安多县"
        },
        {
          code: "542426",
          name: "申扎县"
        },
        {
          code: "542427",
          name: "索县"
        },
        {
          code: "542428",
          name: "班戈县"
        },
        {
          code: "542429",
          name: "巴青县"
        },
        {
          code: "542430",
          name: "尼玛县"
        },
        {
          code: "542431",
          name: "双湖县"
        }
      ],
      [
        {
          code: "542521",
          name: "普兰县"
        },
        {
          code: "542522",
          name: "札达县"
        },
        {
          code: "542523",
          name: "噶尔县"
        },
        {
          code: "542524",
          name: "日土县"
        },
        {
          code: "542525",
          name: "革吉县"
        },
        {
          code: "542526",
          name: "改则县"
        },
        {
          code: "542527",
          name: "措勤县"
        }
      ]
    ],
    [
      [
        {
          code: "610102",
          name: "新城区"
        },
        {
          code: "610103",
          name: "碑林区"
        },
        {
          code: "610104",
          name: "莲湖区"
        },
        {
          code: "610111",
          name: "灞桥区"
        },
        {
          code: "610112",
          name: "未央区"
        },
        {
          code: "610113",
          name: "雁塔区"
        },
        {
          code: "610114",
          name: "阎良区"
        },
        {
          code: "610115",
          name: "临潼区"
        },
        {
          code: "610116",
          name: "长安区"
        },
        {
          code: "610117",
          name: "高陵区"
        },
        {
          code: "610118",
          name: "鄠邑区"
        },
        {
          code: "610122",
          name: "蓝田县"
        },
        {
          code: "610124",
          name: "周至县"
        }
      ],
      [
        {
          code: "610202",
          name: "王益区"
        },
        {
          code: "610203",
          name: "印台区"
        },
        {
          code: "610204",
          name: "耀州区"
        },
        {
          code: "610222",
          name: "宜君县"
        }
      ],
      [
        {
          code: "610302",
          name: "渭滨区"
        },
        {
          code: "610303",
          name: "金台区"
        },
        {
          code: "610304",
          name: "陈仓区"
        },
        {
          code: "610305",
          name: "凤翔区"
        },
        {
          code: "610323",
          name: "岐山县"
        },
        {
          code: "610324",
          name: "扶风县"
        },
        {
          code: "610326",
          name: "眉县"
        },
        {
          code: "610327",
          name: "陇县"
        },
        {
          code: "610328",
          name: "千阳县"
        },
        {
          code: "610329",
          name: "麟游县"
        },
        {
          code: "610330",
          name: "凤县"
        },
        {
          code: "610331",
          name: "太白县"
        }
      ],
      [
        {
          code: "610402",
          name: "秦都区"
        },
        {
          code: "610403",
          name: "杨陵区"
        },
        {
          code: "610404",
          name: "渭城区"
        },
        {
          code: "610422",
          name: "三原县"
        },
        {
          code: "610423",
          name: "泾阳县"
        },
        {
          code: "610424",
          name: "乾县"
        },
        {
          code: "610425",
          name: "礼泉县"
        },
        {
          code: "610426",
          name: "永寿县"
        },
        {
          code: "610427",
          name: "彬州市"
        },
        {
          code: "610428",
          name: "长武县"
        },
        {
          code: "610429",
          name: "旬邑县"
        },
        {
          code: "610430",
          name: "淳化县"
        },
        {
          code: "610431",
          name: "武功县"
        },
        {
          code: "610481",
          name: "兴平市"
        }
      ],
      [
        {
          code: "610502",
          name: "临渭区"
        },
        {
          code: "610503",
          name: "华州区"
        },
        {
          code: "610522",
          name: "潼关县"
        },
        {
          code: "610523",
          name: "大荔县"
        },
        {
          code: "610524",
          name: "合阳县"
        },
        {
          code: "610525",
          name: "澄城县"
        },
        {
          code: "610526",
          name: "蒲城县"
        },
        {
          code: "610527",
          name: "白水县"
        },
        {
          code: "610528",
          name: "富平县"
        },
        {
          code: "610581",
          name: "韩城市"
        },
        {
          code: "610582",
          name: "华阴市"
        }
      ],
      [
        {
          code: "610602",
          name: "宝塔区"
        },
        {
          code: "610603",
          name: "安塞区"
        },
        {
          code: "610621",
          name: "延长县"
        },
        {
          code: "610622",
          name: "延川县"
        },
        {
          code: "610623",
          name: "子长县"
        },
        {
          code: "610625",
          name: "志丹县"
        },
        {
          code: "610626",
          name: "吴起县"
        },
        {
          code: "610627",
          name: "甘泉县"
        },
        {
          code: "610628",
          name: "富县"
        },
        {
          code: "610629",
          name: "洛川县"
        },
        {
          code: "610630",
          name: "宜川县"
        },
        {
          code: "610631",
          name: "黄龙县"
        },
        {
          code: "610632",
          name: "黄陵县"
        }
      ],
      [
        {
          code: "610702",
          name: "汉台区"
        },
        {
          code: "610703",
          name: "南郑区"
        },
        {
          code: "610722",
          name: "城固县"
        },
        {
          code: "610723",
          name: "洋县"
        },
        {
          code: "610724",
          name: "西乡县"
        },
        {
          code: "610725",
          name: "勉县"
        },
        {
          code: "610726",
          name: "宁强县"
        },
        {
          code: "610727",
          name: "略阳县"
        },
        {
          code: "610728",
          name: "镇巴县"
        },
        {
          code: "610729",
          name: "留坝县"
        },
        {
          code: "610730",
          name: "佛坪县"
        }
      ],
      [
        {
          code: "610802",
          name: "榆阳区"
        },
        {
          code: "610803",
          name: "横山区"
        },
        {
          code: "610822",
          name: "府谷县"
        },
        {
          code: "610824",
          name: "靖边县"
        },
        {
          code: "610825",
          name: "定边县"
        },
        {
          code: "610826",
          name: "绥德县"
        },
        {
          code: "610827",
          name: "米脂县"
        },
        {
          code: "610828",
          name: "佳县"
        },
        {
          code: "610829",
          name: "吴堡县"
        },
        {
          code: "610830",
          name: "清涧县"
        },
        {
          code: "610831",
          name: "子洲县"
        },
        {
          code: "610881",
          name: "神木市"
        }
      ],
      [
        {
          code: "610902",
          name: "汉滨区"
        },
        {
          code: "610921",
          name: "汉阴县"
        },
        {
          code: "610922",
          name: "石泉县"
        },
        {
          code: "610923",
          name: "宁陕县"
        },
        {
          code: "610924",
          name: "紫阳县"
        },
        {
          code: "610925",
          name: "岚皋县"
        },
        {
          code: "610926",
          name: "平利县"
        },
        {
          code: "610927",
          name: "镇坪县"
        },
        {
          code: "610929",
          name: "白河县"
        },
        {
          code: "610981",
          name: "旬阳市"
        }
      ],
      [
        {
          code: "611002",
          name: "商州区"
        },
        {
          code: "611021",
          name: "洛南县"
        },
        {
          code: "611022",
          name: "丹凤县"
        },
        {
          code: "611023",
          name: "商南县"
        },
        {
          code: "611024",
          name: "山阳县"
        },
        {
          code: "611025",
          name: "镇安县"
        },
        {
          code: "611026",
          name: "柞水县"
        }
      ]
    ],
    [
      [
        {
          code: "620102",
          name: "城关区"
        },
        {
          code: "620103",
          name: "七里河区"
        },
        {
          code: "620104",
          name: "西固区"
        },
        {
          code: "620105",
          name: "安宁区"
        },
        {
          code: "620111",
          name: "红古区"
        },
        {
          code: "620121",
          name: "永登县"
        },
        {
          code: "620122",
          name: "皋兰县"
        },
        {
          code: "620123",
          name: "榆中县"
        }
      ],
      [
        {
          code: "620201",
          name: "雄关区"
        },
        {
          code: "620202",
          name: "镜铁区"
        },
        {
          code: "620203",
          name: "长城区"
        }
      ],
      [
        {
          code: "620302",
          name: "金川区"
        },
        {
          code: "620321",
          name: "永昌县"
        }
      ],
      [
        {
          code: "620402",
          name: "白银区"
        },
        {
          code: "620403",
          name: "平川区"
        },
        {
          code: "620421",
          name: "靖远县"
        },
        {
          code: "620422",
          name: "会宁县"
        },
        {
          code: "620423",
          name: "景泰县"
        }
      ],
      [
        {
          code: "620502",
          name: "秦州区"
        },
        {
          code: "620503",
          name: "麦积区"
        },
        {
          code: "620521",
          name: "清水县"
        },
        {
          code: "620522",
          name: "秦安县"
        },
        {
          code: "620523",
          name: "甘谷县"
        },
        {
          code: "620524",
          name: "武山县"
        },
        {
          code: "620525",
          name: "张家川回族自治县"
        }
      ],
      [
        {
          code: "620602",
          name: "凉州区"
        },
        {
          code: "620621",
          name: "民勤县"
        },
        {
          code: "620622",
          name: "古浪县"
        },
        {
          code: "620623",
          name: "天祝藏族自治县"
        }
      ],
      [
        {
          code: "620702",
          name: "甘州区"
        },
        {
          code: "620721",
          name: "肃南裕固族自治县"
        },
        {
          code: "620722",
          name: "民乐县"
        },
        {
          code: "620723",
          name: "临泽县"
        },
        {
          code: "620724",
          name: "高台县"
        },
        {
          code: "620725",
          name: "山丹县"
        }
      ],
      [
        {
          code: "620802",
          name: "崆峒区"
        },
        {
          code: "620821",
          name: "泾川县"
        },
        {
          code: "620822",
          name: "灵台县"
        },
        {
          code: "620823",
          name: "崇信县"
        },
        {
          code: "620824",
          name: "华亭县"
        },
        {
          code: "620825",
          name: "庄浪县"
        },
        {
          code: "620826",
          name: "静宁县"
        }
      ],
      [
        {
          code: "620902",
          name: "肃州区"
        },
        {
          code: "620921",
          name: "金塔县"
        },
        {
          code: "620922",
          name: "瓜州县"
        },
        {
          code: "620923",
          name: "肃北蒙古族自治县"
        },
        {
          code: "620924",
          name: "阿克塞哈萨克族自治县"
        },
        {
          code: "620981",
          name: "玉门市"
        },
        {
          code: "620982",
          name: "敦煌市"
        }
      ],
      [
        {
          code: "621002",
          name: "西峰区"
        },
        {
          code: "621021",
          name: "庆城县"
        },
        {
          code: "621022",
          name: "环县"
        },
        {
          code: "621023",
          name: "华池县"
        },
        {
          code: "621024",
          name: "合水县"
        },
        {
          code: "621025",
          name: "正宁县"
        },
        {
          code: "621026",
          name: "宁县"
        },
        {
          code: "621027",
          name: "镇原县"
        }
      ],
      [
        {
          code: "621102",
          name: "安定区"
        },
        {
          code: "621121",
          name: "通渭县"
        },
        {
          code: "621122",
          name: "陇西县"
        },
        {
          code: "621123",
          name: "渭源县"
        },
        {
          code: "621124",
          name: "临洮县"
        },
        {
          code: "621125",
          name: "漳县"
        },
        {
          code: "621126",
          name: "岷县"
        }
      ],
      [
        {
          code: "621202",
          name: "武都区"
        },
        {
          code: "621221",
          name: "成县"
        },
        {
          code: "621222",
          name: "文县"
        },
        {
          code: "621223",
          name: "宕昌县"
        },
        {
          code: "621224",
          name: "康县"
        },
        {
          code: "621225",
          name: "西和县"
        },
        {
          code: "621226",
          name: "礼县"
        },
        {
          code: "621227",
          name: "徽县"
        },
        {
          code: "621228",
          name: "两当县"
        }
      ],
      [
        {
          code: "622901",
          name: "临夏市"
        },
        {
          code: "622921",
          name: "临夏县"
        },
        {
          code: "622922",
          name: "康乐县"
        },
        {
          code: "622923",
          name: "永靖县"
        },
        {
          code: "622924",
          name: "广河县"
        },
        {
          code: "622925",
          name: "和政县"
        },
        {
          code: "622926",
          name: "东乡族自治县"
        },
        {
          code: "622927",
          name: "积石山保安族东乡族撒拉族自治县"
        }
      ],
      [
        {
          code: "623001",
          name: "合作市"
        },
        {
          code: "623021",
          name: "临潭县"
        },
        {
          code: "623022",
          name: "卓尼县"
        },
        {
          code: "623023",
          name: "舟曲县"
        },
        {
          code: "623024",
          name: "迭部县"
        },
        {
          code: "623025",
          name: "玛曲县"
        },
        {
          code: "623026",
          name: "碌曲县"
        },
        {
          code: "623027",
          name: "夏河县"
        }
      ]
    ],
    [
      [
        {
          code: "630102",
          name: "城东区"
        },
        {
          code: "630103",
          name: "城中区"
        },
        {
          code: "630104",
          name: "城西区"
        },
        {
          code: "630105",
          name: "城北区"
        },
        {
          code: "630121",
          name: "大通回族土族自治县"
        },
        {
          code: "630122",
          name: "湟中县"
        },
        {
          code: "630123",
          name: "湟源县"
        }
      ],
      [
        {
          code: "630202",
          name: "乐都区"
        },
        {
          code: "630203",
          name: "平安区"
        },
        {
          code: "630222",
          name: "民和回族土族自治县"
        },
        {
          code: "630223",
          name: "互助土族自治县"
        },
        {
          code: "630224",
          name: "化隆回族自治县"
        },
        {
          code: "630225",
          name: "循化撒拉族自治县"
        }
      ],
      [
        {
          code: "632221",
          name: "门源回族自治县"
        },
        {
          code: "632222",
          name: "祁连县"
        },
        {
          code: "632223",
          name: "海晏县"
        },
        {
          code: "632224",
          name: "刚察县"
        }
      ],
      [
        {
          code: "632321",
          name: "同仁县"
        },
        {
          code: "632322",
          name: "尖扎县"
        },
        {
          code: "632323",
          name: "泽库县"
        },
        {
          code: "632324",
          name: "河南蒙古族自治县"
        }
      ],
      [
        {
          code: "632521",
          name: "共和县"
        },
        {
          code: "632522",
          name: "同德县"
        },
        {
          code: "632523",
          name: "贵德县"
        },
        {
          code: "632524",
          name: "兴海县"
        },
        {
          code: "632525",
          name: "贵南县"
        }
      ],
      [
        {
          code: "632621",
          name: "玛沁县"
        },
        {
          code: "632622",
          name: "班玛县"
        },
        {
          code: "632623",
          name: "甘德县"
        },
        {
          code: "632624",
          name: "达日县"
        },
        {
          code: "632625",
          name: "久治县"
        },
        {
          code: "632626",
          name: "玛多县"
        }
      ],
      [
        {
          code: "632701",
          name: "玉树市"
        },
        {
          code: "632722",
          name: "杂多县"
        },
        {
          code: "632723",
          name: "称多县"
        },
        {
          code: "632724",
          name: "治多县"
        },
        {
          code: "632725",
          name: "囊谦县"
        },
        {
          code: "632726",
          name: "曲麻莱县"
        }
      ],
      [
        {
          code: "632801",
          name: "格尔木市"
        },
        {
          code: "632802",
          name: "德令哈市"
        },
        {
          code: "632821",
          name: "乌兰县"
        },
        {
          code: "632822",
          name: "都兰县"
        },
        {
          code: "632823",
          name: "天峻县"
        },
        {
          code: "632824",
          name: "冷湖行政委员会"
        },
        {
          code: "632825",
          name: "大柴旦行政委员会"
        },
        {
          code: "632826",
          name: "茫崖行政委员会"
        }
      ]
    ],
    [
      [
        {
          code: "640104",
          name: "兴庆区"
        },
        {
          code: "640105",
          name: "西夏区"
        },
        {
          code: "640106",
          name: "金凤区"
        },
        {
          code: "640121",
          name: "永宁县"
        },
        {
          code: "640122",
          name: "贺兰县"
        },
        {
          code: "640181",
          name: "灵武市"
        }
      ],
      [
        {
          code: "640202",
          name: "大武口区"
        },
        {
          code: "640205",
          name: "惠农区"
        },
        {
          code: "640221",
          name: "平罗县"
        }
      ],
      [
        {
          code: "640302",
          name: "利通区"
        },
        {
          code: "640303",
          name: "红寺堡区"
        },
        {
          code: "640323",
          name: "盐池县"
        },
        {
          code: "640324",
          name: "同心县"
        },
        {
          code: "640381",
          name: "青铜峡市"
        }
      ],
      [
        {
          code: "640402",
          name: "原州区"
        },
        {
          code: "640422",
          name: "西吉县"
        },
        {
          code: "640423",
          name: "隆德县"
        },
        {
          code: "640424",
          name: "泾源县"
        },
        {
          code: "640425",
          name: "彭阳县"
        }
      ],
      [
        {
          code: "640502",
          name: "沙坡头区"
        },
        {
          code: "640521",
          name: "中宁县"
        },
        {
          code: "640522",
          name: "海原县"
        }
      ]
    ],
    [
      [
        {
          code: "650102",
          name: "天山区"
        },
        {
          code: "650103",
          name: "沙依巴克区"
        },
        {
          code: "650104",
          name: "新市区"
        },
        {
          code: "650105",
          name: "水磨沟区"
        },
        {
          code: "650106",
          name: "头屯河区"
        },
        {
          code: "650107",
          name: "达坂城区"
        },
        {
          code: "650109",
          name: "米东区"
        },
        {
          code: "650121",
          name: "乌鲁木齐县"
        }
      ],
      [
        {
          code: "650202",
          name: "独山子区"
        },
        {
          code: "650203",
          name: "克拉玛依区"
        },
        {
          code: "650204",
          name: "白碱滩区"
        },
        {
          code: "650205",
          name: "乌尔禾区"
        }
      ],
      [
        {
          code: "650402",
          name: "高昌区"
        },
        {
          code: "650421",
          name: "鄯善县"
        },
        {
          code: "650422",
          name: "托克逊县"
        }
      ],
      [
        {
          code: "650502",
          name: "伊州区"
        },
        {
          code: "650521",
          name: "巴里坤哈萨克自治县"
        },
        {
          code: "650522",
          name: "伊吾县"
        }
      ],
      [
        {
          code: "652301",
          name: "昌吉市"
        },
        {
          code: "652302",
          name: "阜康市"
        },
        {
          code: "652323",
          name: "呼图壁县"
        },
        {
          code: "652324",
          name: "玛纳斯县"
        },
        {
          code: "652325",
          name: "奇台县"
        },
        {
          code: "652327",
          name: "吉木萨尔县"
        },
        {
          code: "652328",
          name: "木垒哈萨克自治县"
        }
      ],
      [
        {
          code: "652701",
          name: "博乐市"
        },
        {
          code: "652702",
          name: "阿拉山口市"
        },
        {
          code: "652722",
          name: "精河县"
        },
        {
          code: "652723",
          name: "温泉县"
        }
      ],
      [
        {
          code: "652801",
          name: "库尔勒市"
        },
        {
          code: "652822",
          name: "轮台县"
        },
        {
          code: "652823",
          name: "尉犁县"
        },
        {
          code: "652824",
          name: "若羌县"
        },
        {
          code: "652825",
          name: "且末县"
        },
        {
          code: "652826",
          name: "焉耆回族自治县"
        },
        {
          code: "652827",
          name: "和静县"
        },
        {
          code: "652828",
          name: "和硕县"
        },
        {
          code: "652829",
          name: "博湖县"
        }
      ],
      [
        {
          code: "652901",
          name: "阿克苏市"
        },
        {
          code: "652922",
          name: "温宿县"
        },
        {
          code: "652923",
          name: "库车县"
        },
        {
          code: "652924",
          name: "沙雅县"
        },
        {
          code: "652925",
          name: "新和县"
        },
        {
          code: "652926",
          name: "拜城县"
        },
        {
          code: "652927",
          name: "乌什县"
        },
        {
          code: "652928",
          name: "阿瓦提县"
        },
        {
          code: "652929",
          name: "柯坪县"
        }
      ],
      [
        {
          code: "653001",
          name: "阿图什市"
        },
        {
          code: "653022",
          name: "阿克陶县"
        },
        {
          code: "653023",
          name: "阿合奇县"
        },
        {
          code: "653024",
          name: "乌恰县"
        }
      ],
      [
        {
          code: "653101",
          name: "喀什市"
        },
        {
          code: "653121",
          name: "疏附县"
        },
        {
          code: "653122",
          name: "疏勒县"
        },
        {
          code: "653123",
          name: "英吉沙县"
        },
        {
          code: "653124",
          name: "泽普县"
        },
        {
          code: "653125",
          name: "莎车县"
        },
        {
          code: "653126",
          name: "叶城县"
        },
        {
          code: "653127",
          name: "麦盖提县"
        },
        {
          code: "653128",
          name: "岳普湖县"
        },
        {
          code: "653129",
          name: "伽师县"
        },
        {
          code: "653130",
          name: "巴楚县"
        },
        {
          code: "653131",
          name: "塔什库尔干塔吉克自治县"
        }
      ],
      [
        {
          code: "653201",
          name: "和田市"
        },
        {
          code: "653221",
          name: "和田县"
        },
        {
          code: "653222",
          name: "墨玉县"
        },
        {
          code: "653223",
          name: "皮山县"
        },
        {
          code: "653224",
          name: "洛浦县"
        },
        {
          code: "653225",
          name: "策勒县"
        },
        {
          code: "653226",
          name: "于田县"
        },
        {
          code: "653227",
          name: "民丰县"
        }
      ],
      [
        {
          code: "654002",
          name: "伊宁市"
        },
        {
          code: "654003",
          name: "奎屯市"
        },
        {
          code: "654004",
          name: "霍尔果斯市"
        },
        {
          code: "654021",
          name: "伊宁县"
        },
        {
          code: "654022",
          name: "察布查尔锡伯自治县"
        },
        {
          code: "654023",
          name: "霍城县"
        },
        {
          code: "654024",
          name: "巩留县"
        },
        {
          code: "654025",
          name: "新源县"
        },
        {
          code: "654026",
          name: "昭苏县"
        },
        {
          code: "654027",
          name: "特克斯县"
        },
        {
          code: "654028",
          name: "尼勒克县"
        }
      ],
      [
        {
          code: "654201",
          name: "塔城市"
        },
        {
          code: "654202",
          name: "乌苏市"
        },
        {
          code: "654203",
          name: "沙湾市"
        },
        {
          code: "654221",
          name: "额敏县"
        },
        {
          code: "654224",
          name: "托里县"
        },
        {
          code: "654225",
          name: "裕民县"
        },
        {
          code: "654226",
          name: "和布克赛尔蒙古自治县"
        }
      ],
      [
        {
          code: "654301",
          name: "阿勒泰市"
        },
        {
          code: "654321",
          name: "布尔津县"
        },
        {
          code: "654322",
          name: "富蕴县"
        },
        {
          code: "654323",
          name: "福海县"
        },
        {
          code: "654324",
          name: "哈巴河县"
        },
        {
          code: "654325",
          name: "青河县"
        },
        {
          code: "654326",
          name: "吉木乃县"
        }
      ],
      [
        {
          code: "659001",
          name: "石河子市"
        },
        {
          code: "659002",
          name: "阿拉尔市"
        },
        {
          code: "659003",
          name: "图木舒克市"
        },
        {
          code: "659004",
          name: "五家渠市"
        },
        {
          code: "659005",
          name: "北屯市"
        },
        {
          code: "659006",
          name: "铁门关市"
        },
        {
          code: "659007",
          name: "双河市"
        },
        {
          code: "659008",
          name: "可克达拉市"
        },
        {
          code: "659009",
          name: "昆玉市"
        }
      ]
    ],
    [
      [
        {
          code: "710101",
          name: "中正区"
        },
        {
          code: "710102",
          name: "大同区"
        },
        {
          code: "710103",
          name: "中山区"
        },
        {
          code: "710104",
          name: "松山区"
        },
        {
          code: "710105",
          name: "大安区"
        },
        {
          code: "710106",
          name: "万华区"
        },
        {
          code: "710107",
          name: "信义区"
        },
        {
          code: "710108",
          name: "士林区"
        },
        {
          code: "710109",
          name: "北投区"
        },
        {
          code: "710110",
          name: "内湖区"
        },
        {
          code: "710111",
          name: "南港区"
        },
        {
          code: "710112",
          name: "文山区"
        }
      ],
      [
        {
          code: "710201",
          name: "新兴区"
        },
        {
          code: "710202",
          name: "前金区"
        },
        {
          code: "710203",
          name: "苓雅区"
        },
        {
          code: "710204",
          name: "盐埕区"
        },
        {
          code: "710205",
          name: "鼓山区"
        },
        {
          code: "710206",
          name: "旗津区"
        },
        {
          code: "710207",
          name: "前镇区"
        },
        {
          code: "710208",
          name: "三民区"
        },
        {
          code: "710209",
          name: "左营区"
        },
        {
          code: "710210",
          name: "楠梓区"
        },
        {
          code: "710211",
          name: "小港区"
        },
        {
          code: "710242",
          name: "仁武区"
        },
        {
          code: "710243",
          name: "大社区"
        },
        {
          code: "710244",
          name: "冈山区"
        },
        {
          code: "710245",
          name: "路竹区"
        },
        {
          code: "710246",
          name: "阿莲区"
        },
        {
          code: "710247",
          name: "田寮区"
        },
        {
          code: "710248",
          name: "燕巢区"
        },
        {
          code: "710249",
          name: "桥头区"
        },
        {
          code: "710250",
          name: "梓官区"
        },
        {
          code: "710251",
          name: "弥陀区"
        },
        {
          code: "710252",
          name: "永安区"
        },
        {
          code: "710253",
          name: "湖内区"
        },
        {
          code: "710254",
          name: "凤山区"
        },
        {
          code: "710255",
          name: "大寮区"
        },
        {
          code: "710256",
          name: "林园区"
        },
        {
          code: "710257",
          name: "鸟松区"
        },
        {
          code: "710258",
          name: "大树区"
        },
        {
          code: "710259",
          name: "旗山区"
        },
        {
          code: "710260",
          name: "美浓区"
        },
        {
          code: "710261",
          name: "六龟区"
        },
        {
          code: "710262",
          name: "内门区"
        },
        {
          code: "710263",
          name: "杉林区"
        },
        {
          code: "710264",
          name: "甲仙区"
        },
        {
          code: "710265",
          name: "桃源区"
        },
        {
          code: "710266",
          name: "那玛夏区"
        },
        {
          code: "710267",
          name: "茂林区"
        },
        {
          code: "710268",
          name: "茄萣区"
        }
      ],
      [
        {
          code: "710301",
          name: "中西区"
        },
        {
          code: "710302",
          name: "东区"
        },
        {
          code: "710303",
          name: "南区"
        },
        {
          code: "710304",
          name: "北区"
        },
        {
          code: "710305",
          name: "安平区"
        },
        {
          code: "710306",
          name: "安南区"
        },
        {
          code: "710339",
          name: "永康区"
        },
        {
          code: "710340",
          name: "归仁区"
        },
        {
          code: "710341",
          name: "新化区"
        },
        {
          code: "710342",
          name: "左镇区"
        },
        {
          code: "710343",
          name: "玉井区"
        },
        {
          code: "710344",
          name: "楠西区"
        },
        {
          code: "710345",
          name: "南化区"
        },
        {
          code: "710346",
          name: "仁德区"
        },
        {
          code: "710347",
          name: "关庙区"
        },
        {
          code: "710348",
          name: "龙崎区"
        },
        {
          code: "710349",
          name: "官田区"
        },
        {
          code: "710350",
          name: "麻豆区"
        },
        {
          code: "710351",
          name: "佳里区"
        },
        {
          code: "710352",
          name: "西港区"
        },
        {
          code: "710353",
          name: "七股区"
        },
        {
          code: "710354",
          name: "将军区"
        },
        {
          code: "710355",
          name: "学甲区"
        },
        {
          code: "710356",
          name: "北门区"
        },
        {
          code: "710357",
          name: "新营区"
        },
        {
          code: "710358",
          name: "后壁区"
        },
        {
          code: "710359",
          name: "白河区"
        },
        {
          code: "710360",
          name: "东山区"
        },
        {
          code: "710361",
          name: "六甲区"
        },
        {
          code: "710362",
          name: "下营区"
        },
        {
          code: "710363",
          name: "柳营区"
        },
        {
          code: "710364",
          name: "盐水区"
        },
        {
          code: "710365",
          name: "善化区"
        },
        {
          code: "710366",
          name: "大内区"
        },
        {
          code: "710367",
          name: "山上区"
        },
        {
          code: "710368",
          name: "新市区"
        },
        {
          code: "710369",
          name: "安定区"
        }
      ],
      [
        {
          code: "710401",
          name: "中区"
        },
        {
          code: "710402",
          name: "东区"
        },
        {
          code: "710403",
          name: "南区"
        },
        {
          code: "710404",
          name: "西区"
        },
        {
          code: "710405",
          name: "北区"
        },
        {
          code: "710406",
          name: "北屯区"
        },
        {
          code: "710407",
          name: "西屯区"
        },
        {
          code: "710408",
          name: "南屯区"
        },
        {
          code: "710431",
          name: "太平区"
        },
        {
          code: "710432",
          name: "大里区"
        },
        {
          code: "710433",
          name: "雾峰区"
        },
        {
          code: "710434",
          name: "乌日区"
        },
        {
          code: "710435",
          name: "丰原区"
        },
        {
          code: "710436",
          name: "后里区"
        },
        {
          code: "710437",
          name: "石冈区"
        },
        {
          code: "710438",
          name: "东势区"
        },
        {
          code: "710439",
          name: "和平区"
        },
        {
          code: "710440",
          name: "新社区"
        },
        {
          code: "710441",
          name: "潭子区"
        },
        {
          code: "710442",
          name: "大雅区"
        },
        {
          code: "710443",
          name: "神冈区"
        },
        {
          code: "710444",
          name: "大肚区"
        },
        {
          code: "710445",
          name: "沙鹿区"
        },
        {
          code: "710446",
          name: "龙井区"
        },
        {
          code: "710447",
          name: "梧栖区"
        },
        {
          code: "710448",
          name: "清水区"
        },
        {
          code: "710449",
          name: "大甲区"
        },
        {
          code: "710450",
          name: "外埔区"
        },
        {
          code: "710451",
          name: "大安区"
        }
      ],
      [
        {
          code: "710614",
          name: "南投市"
        },
        {
          code: "710615",
          name: "中寮乡"
        },
        {
          code: "710616",
          name: "草屯镇"
        },
        {
          code: "710617",
          name: "国姓乡"
        },
        {
          code: "710618",
          name: "埔里镇"
        },
        {
          code: "710619",
          name: "仁爱乡"
        },
        {
          code: "710620",
          name: "名间乡"
        },
        {
          code: "710621",
          name: "集集镇"
        },
        {
          code: "710622",
          name: "水里乡"
        },
        {
          code: "710623",
          name: "鱼池乡"
        },
        {
          code: "710624",
          name: "信义乡"
        },
        {
          code: "710625",
          name: "竹山镇"
        },
        {
          code: "710626",
          name: "鹿谷乡"
        }
      ],
      [
        {
          code: "710701",
          name: "仁爱区"
        },
        {
          code: "710702",
          name: "信义区"
        },
        {
          code: "710703",
          name: "中正区"
        },
        {
          code: "710704",
          name: "中山区"
        },
        {
          code: "710705",
          name: "安乐区"
        },
        {
          code: "710706",
          name: "暖暖区"
        },
        {
          code: "710707",
          name: "七堵区"
        }
      ],
      [
        {
          code: "710801",
          name: "东区"
        },
        {
          code: "710802",
          name: "北区"
        },
        {
          code: "710803",
          name: "香山区"
        }
      ],
      [
        {
          code: "710901",
          name: "东区"
        },
        {
          code: "710902",
          name: "西区"
        }
      ],
      [
        {
          code: "711130",
          name: "万里区"
        },
        {
          code: "711131",
          name: "金山区"
        },
        {
          code: "711132",
          name: "板桥区"
        },
        {
          code: "711133",
          name: "汐止区"
        },
        {
          code: "711134",
          name: "深坑区"
        },
        {
          code: "711135",
          name: "石碇区"
        },
        {
          code: "711136",
          name: "瑞芳区"
        },
        {
          code: "711137",
          name: "平溪区"
        },
        {
          code: "711138",
          name: "双溪区"
        },
        {
          code: "711139",
          name: "贡寮区"
        },
        {
          code: "711140",
          name: "新店区"
        },
        {
          code: "711141",
          name: "坪林区"
        },
        {
          code: "711142",
          name: "乌来区"
        },
        {
          code: "711143",
          name: "永和区"
        },
        {
          code: "711144",
          name: "中和区"
        },
        {
          code: "711145",
          name: "土城区"
        },
        {
          code: "711146",
          name: "三峡区"
        },
        {
          code: "711147",
          name: "树林区"
        },
        {
          code: "711148",
          name: "莺歌区"
        },
        {
          code: "711149",
          name: "三重区"
        },
        {
          code: "711150",
          name: "新庄区"
        },
        {
          code: "711151",
          name: "泰山区"
        },
        {
          code: "711152",
          name: "林口区"
        },
        {
          code: "711153",
          name: "芦洲区"
        },
        {
          code: "711154",
          name: "五股区"
        },
        {
          code: "711155",
          name: "八里区"
        },
        {
          code: "711156",
          name: "淡水区"
        },
        {
          code: "711157",
          name: "三芝区"
        },
        {
          code: "711158",
          name: "石门区"
        }
      ],
      [
        {
          code: "711214",
          name: "宜兰市"
        },
        {
          code: "711215",
          name: "头城镇"
        },
        {
          code: "711216",
          name: "礁溪乡"
        },
        {
          code: "711217",
          name: "壮围乡"
        },
        {
          code: "711218",
          name: "员山乡"
        },
        {
          code: "711219",
          name: "罗东镇"
        },
        {
          code: "711220",
          name: "三星乡"
        },
        {
          code: "711221",
          name: "大同乡"
        },
        {
          code: "711222",
          name: "五结乡"
        },
        {
          code: "711223",
          name: "冬山乡"
        },
        {
          code: "711224",
          name: "苏澳镇"
        },
        {
          code: "711225",
          name: "南澳乡"
        }
      ],
      [
        {
          code: "711314",
          name: "竹北市"
        },
        {
          code: "711315",
          name: "湖口乡"
        },
        {
          code: "711316",
          name: "新丰乡"
        },
        {
          code: "711317",
          name: "新埔镇"
        },
        {
          code: "711318",
          name: "关西镇"
        },
        {
          code: "711319",
          name: "芎林乡"
        },
        {
          code: "711320",
          name: "宝山乡"
        },
        {
          code: "711321",
          name: "竹东镇"
        },
        {
          code: "711322",
          name: "五峰乡"
        },
        {
          code: "711323",
          name: "横山乡"
        },
        {
          code: "711324",
          name: "尖石乡"
        },
        {
          code: "711325",
          name: "北埔乡"
        },
        {
          code: "711326",
          name: "峨眉乡"
        }
      ],
      [
        {
          code: "711414",
          name: "中坜区"
        },
        {
          code: "711415",
          name: "平镇区"
        },
        {
          code: "711416",
          name: "龙潭区"
        },
        {
          code: "711417",
          name: "杨梅区"
        },
        {
          code: "711418",
          name: "新屋区"
        },
        {
          code: "711419",
          name: "观音区"
        },
        {
          code: "711420",
          name: "桃园区"
        },
        {
          code: "711421",
          name: "龟山区"
        },
        {
          code: "711422",
          name: "八德区"
        },
        {
          code: "711423",
          name: "大溪区"
        },
        {
          code: "711424",
          name: "复兴区"
        },
        {
          code: "711425",
          name: "大园区"
        },
        {
          code: "711426",
          name: "芦竹区"
        }
      ],
      [
        {
          code: "711519",
          name: "竹南镇"
        },
        {
          code: "711520",
          name: "头份市"
        },
        {
          code: "711521",
          name: "三湾乡"
        },
        {
          code: "711522",
          name: "南庄乡"
        },
        {
          code: "711523",
          name: "狮潭乡"
        },
        {
          code: "711524",
          name: "后龙镇"
        },
        {
          code: "711525",
          name: "通霄镇"
        },
        {
          code: "711526",
          name: "苑里镇"
        },
        {
          code: "711527",
          name: "苗栗市"
        },
        {
          code: "711528",
          name: "造桥乡"
        },
        {
          code: "711529",
          name: "头屋乡"
        },
        {
          code: "711530",
          name: "公馆乡"
        },
        {
          code: "711531",
          name: "大湖乡"
        },
        {
          code: "711532",
          name: "泰安乡"
        },
        {
          code: "711533",
          name: "铜锣乡"
        },
        {
          code: "711534",
          name: "三义乡"
        },
        {
          code: "711535",
          name: "西湖乡"
        },
        {
          code: "711536",
          name: "卓兰镇"
        }
      ],
      [
        {
          code: "711727",
          name: "彰化市"
        },
        {
          code: "711728",
          name: "芬园乡"
        },
        {
          code: "711729",
          name: "花坛乡"
        },
        {
          code: "711730",
          name: "秀水乡"
        },
        {
          code: "711731",
          name: "鹿港镇"
        },
        {
          code: "711732",
          name: "福兴乡"
        },
        {
          code: "711733",
          name: "线西乡"
        },
        {
          code: "711734",
          name: "和美镇"
        },
        {
          code: "711735",
          name: "伸港乡"
        },
        {
          code: "711736",
          name: "员林市"
        },
        {
          code: "711737",
          name: "社头乡"
        },
        {
          code: "711738",
          name: "永靖乡"
        },
        {
          code: "711739",
          name: "埔心乡"
        },
        {
          code: "711740",
          name: "溪湖镇"
        },
        {
          code: "711741",
          name: "大村乡"
        },
        {
          code: "711742",
          name: "埔盐乡"
        },
        {
          code: "711743",
          name: "田中镇"
        },
        {
          code: "711744",
          name: "北斗镇"
        },
        {
          code: "711745",
          name: "田尾乡"
        },
        {
          code: "711746",
          name: "埤头乡"
        },
        {
          code: "711747",
          name: "溪州乡"
        },
        {
          code: "711748",
          name: "竹塘乡"
        },
        {
          code: "711749",
          name: "二林镇"
        },
        {
          code: "711750",
          name: "大城乡"
        },
        {
          code: "711751",
          name: "芳苑乡"
        },
        {
          code: "711752",
          name: "二水乡"
        }
      ],
      [
        {
          code: "711919",
          name: "番路乡"
        },
        {
          code: "711920",
          name: "梅山乡"
        },
        {
          code: "711921",
          name: "竹崎乡"
        },
        {
          code: "711922",
          name: "阿里山乡"
        },
        {
          code: "711923",
          name: "中埔乡"
        },
        {
          code: "711924",
          name: "大埔乡"
        },
        {
          code: "711925",
          name: "水上乡"
        },
        {
          code: "711926",
          name: "鹿草乡"
        },
        {
          code: "711927",
          name: "太保市"
        },
        {
          code: "711928",
          name: "朴子市"
        },
        {
          code: "711929",
          name: "东石乡"
        },
        {
          code: "711930",
          name: "六脚乡"
        },
        {
          code: "711931",
          name: "新港乡"
        },
        {
          code: "711932",
          name: "民雄乡"
        },
        {
          code: "711933",
          name: "大林镇"
        },
        {
          code: "711934",
          name: "溪口乡"
        },
        {
          code: "711935",
          name: "义竹乡"
        },
        {
          code: "711936",
          name: "布袋镇"
        }
      ],
      [
        {
          code: "712121",
          name: "斗南镇"
        },
        {
          code: "712122",
          name: "大埤乡"
        },
        {
          code: "712123",
          name: "虎尾镇"
        },
        {
          code: "712124",
          name: "土库镇"
        },
        {
          code: "712125",
          name: "褒忠乡"
        },
        {
          code: "712126",
          name: "东势乡"
        },
        {
          code: "712127",
          name: "台西乡"
        },
        {
          code: "712128",
          name: "仑背乡"
        },
        {
          code: "712129",
          name: "麦寮乡"
        },
        {
          code: "712130",
          name: "斗六市"
        },
        {
          code: "712131",
          name: "林内乡"
        },
        {
          code: "712132",
          name: "古坑乡"
        },
        {
          code: "712133",
          name: "莿桐乡"
        },
        {
          code: "712134",
          name: "西螺镇"
        },
        {
          code: "712135",
          name: "二仑乡"
        },
        {
          code: "712136",
          name: "北港镇"
        },
        {
          code: "712137",
          name: "水林乡"
        },
        {
          code: "712138",
          name: "口湖乡"
        },
        {
          code: "712139",
          name: "四湖乡"
        },
        {
          code: "712140",
          name: "元长乡"
        }
      ],
      [
        {
          code: "712434",
          name: "屏东市"
        },
        {
          code: "712435",
          name: "三地门乡"
        },
        {
          code: "712436",
          name: "雾台乡"
        },
        {
          code: "712437",
          name: "玛家乡"
        },
        {
          code: "712438",
          name: "九如乡"
        },
        {
          code: "712439",
          name: "里港乡"
        },
        {
          code: "712440",
          name: "高树乡"
        },
        {
          code: "712441",
          name: "盐埔乡"
        },
        {
          code: "712442",
          name: "长治乡"
        },
        {
          code: "712443",
          name: "麟洛乡"
        },
        {
          code: "712444",
          name: "竹田乡"
        },
        {
          code: "712445",
          name: "内埔乡"
        },
        {
          code: "712446",
          name: "万丹乡"
        },
        {
          code: "712447",
          name: "潮州镇"
        },
        {
          code: "712448",
          name: "泰武乡"
        },
        {
          code: "712449",
          name: "来义乡"
        },
        {
          code: "712450",
          name: "万峦乡"
        },
        {
          code: "712451",
          name: "崁顶乡"
        },
        {
          code: "712452",
          name: "新埤乡"
        },
        {
          code: "712453",
          name: "南州乡"
        },
        {
          code: "712454",
          name: "林边乡"
        },
        {
          code: "712455",
          name: "东港镇"
        },
        {
          code: "712456",
          name: "琉球乡"
        },
        {
          code: "712457",
          name: "佳冬乡"
        },
        {
          code: "712458",
          name: "新园乡"
        },
        {
          code: "712459",
          name: "枋寮乡"
        },
        {
          code: "712460",
          name: "枋山乡"
        },
        {
          code: "712461",
          name: "春日乡"
        },
        {
          code: "712462",
          name: "狮子乡"
        },
        {
          code: "712463",
          name: "车城乡"
        },
        {
          code: "712464",
          name: "牡丹乡"
        },
        {
          code: "712465",
          name: "恒春镇"
        },
        {
          code: "712466",
          name: "满州乡"
        }
      ],
      [
        {
          code: "712517",
          name: "台东市"
        },
        {
          code: "712518",
          name: "绿岛乡"
        },
        {
          code: "712519",
          name: "兰屿乡"
        },
        {
          code: "712520",
          name: "延平乡"
        },
        {
          code: "712521",
          name: "卑南乡"
        },
        {
          code: "712522",
          name: "鹿野乡"
        },
        {
          code: "712523",
          name: "关山镇"
        },
        {
          code: "712524",
          name: "海端乡"
        },
        {
          code: "712525",
          name: "池上乡"
        },
        {
          code: "712526",
          name: "东河乡"
        },
        {
          code: "712527",
          name: "成功镇"
        },
        {
          code: "712528",
          name: "长滨乡"
        },
        {
          code: "712529",
          name: "金峰乡"
        },
        {
          code: "712530",
          name: "大武乡"
        },
        {
          code: "712531",
          name: "达仁乡"
        },
        {
          code: "712532",
          name: "太麻里乡"
        }
      ],
      [
        {
          code: "712615",
          name: "花莲市"
        },
        {
          code: "712616",
          name: "新城乡"
        },
        {
          code: "712618",
          name: "秀林乡"
        },
        {
          code: "712619",
          name: "吉安乡"
        },
        {
          code: "712620",
          name: "寿丰乡"
        },
        {
          code: "712621",
          name: "凤林镇"
        },
        {
          code: "712622",
          name: "光复乡"
        },
        {
          code: "712623",
          name: "丰滨乡"
        },
        {
          code: "712624",
          name: "瑞穗乡"
        },
        {
          code: "712625",
          name: "万荣乡"
        },
        {
          code: "712626",
          name: "玉里镇"
        },
        {
          code: "712627",
          name: "卓溪乡"
        },
        {
          code: "712628",
          name: "富里乡"
        }
      ],
      [
        {
          code: "712707",
          name: "马公市"
        },
        {
          code: "712708",
          name: "西屿乡"
        },
        {
          code: "712709",
          name: "望安乡"
        },
        {
          code: "712710",
          name: "七美乡"
        },
        {
          code: "712711",
          name: "白沙乡"
        },
        {
          code: "712712",
          name: "湖西乡"
        }
      ]
    ],
    [
      [
        {
          code: "810101",
          name: "中西区"
        },
        {
          code: "810102",
          name: "东区"
        },
        {
          code: "810103",
          name: "九龙城区"
        },
        {
          code: "810104",
          name: "观塘区"
        },
        {
          code: "810105",
          name: "南区"
        },
        {
          code: "810106",
          name: "深水埗区"
        },
        {
          code: "810107",
          name: "湾仔区"
        },
        {
          code: "810108",
          name: "黄大仙区"
        },
        {
          code: "810109",
          name: "油尖旺区"
        },
        {
          code: "810110",
          name: "离岛区"
        },
        {
          code: "810111",
          name: "葵青区"
        },
        {
          code: "810112",
          name: "北区"
        },
        {
          code: "810113",
          name: "西贡区"
        },
        {
          code: "810114",
          name: "沙田区"
        },
        {
          code: "810115",
          name: "屯门区"
        },
        {
          code: "810116",
          name: "大埔区"
        },
        {
          code: "810117",
          name: "荃湾区"
        },
        {
          code: "810118",
          name: "元朗区"
        }
      ]
    ],
    [
      [
        {
          code: "820101",
          name: "澳门半岛"
        },
        {
          code: "820102",
          name: "凼仔"
        },
        {
          code: "820103",
          name: "路凼城"
        },
        {
          code: "820104",
          name: "路环"
        }
      ]
    ]
  ];
  const _sfc_main$5 = {
    name: "u-picker",
    emits: ["update:modelValue", "input", "confirm", "cancel"],
    props: {
      // 通过双向绑定控制组件的弹出与收起
      value: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      // picker中需要显示的参数
      params: {
        type: Object,
        default() {
          return {
            year: true,
            month: true,
            day: true,
            hour: false,
            minute: false,
            second: false,
            province: true,
            city: true,
            area: true,
            timestamp: true
          };
        }
      },
      // 当mode=selector或者mode=multiSelector时，提供的数组
      range: {
        type: Array,
        default() {
          return [];
        }
      },
      // 当mode=selector或者mode=multiSelector时，提供的默认选中的下标
      defaultSelector: {
        type: Array,
        default() {
          return [0];
        }
      },
      // 当 range 是一个 Array＜Object＞ 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
      rangeKey: {
        type: String,
        default: ""
      },
      // 模式选择，region-地区类型，time-时间类型，selector-单列模式，multiSelector-多列模式
      mode: {
        type: String,
        default: "time"
      },
      // 年份开始时间
      startYear: {
        type: [String, Number],
        default: 1950
      },
      // 年份结束时间
      endYear: {
        type: [String, Number],
        default: 2050
      },
      // "取消"按钮的颜色
      cancelColor: {
        type: String,
        default: "#606266"
      },
      // "确定"按钮的颜色
      confirmColor: {
        type: String,
        default: "#2979ff"
      },
      // 默认显示的时间，2025-07-02 || 2025-07-02 13:01:00 || 2025/07/02
      defaultTime: {
        type: String,
        default: ""
      },
      // 默认显示的地区，可传类似["河北省", "秦皇岛市", "北戴河区"]
      defaultRegion: {
        type: Array,
        default() {
          return [];
        }
      },
      // 时间模式时，是否显示后面的年月日中文提示
      showTimeTag: {
        type: Boolean,
        default: true
      },
      // 默认显示地区的编码，defaultRegion和areaCode同时存在，areaCode优先，可传类似["13", "1303", "130304"]
      areaCode: {
        type: Array,
        default() {
          return [];
        }
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      // 是否允许通过点击遮罩关闭Picker
      maskCloseAble: {
        type: Boolean,
        default: true
      },
      // 弹出的z-index值
      zIndex: {
        type: [String, Number],
        default: 0
      },
      // 顶部标题
      title: {
        type: String,
        default: ""
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: "取消"
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: "确认"
      },
      // 遮罩的模糊度
      blur: {
        type: [String, Number],
        default: 0
      }
    },
    data() {
      return {
        popupValue: false,
        years: [],
        months: [],
        days: [],
        hours: [],
        minutes: [],
        seconds: [],
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        reset: false,
        startDate: "",
        endDate: "",
        valueArr: [],
        provinces,
        citys: citys[0],
        areas: areas[0][0],
        province: 0,
        city: 0,
        area: 0,
        moving: false
        // 列是否还在滑动中，微信小程序如果在滑动中就点确定，结果可能不准确
      };
    },
    mounted() {
      this.init();
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      propsChange() {
        let { mode, defaultTime, startYear, endYear, defaultRegion, areaCode, defaultSelector } = this;
        return JSON.stringify({ mode, defaultTime, startYear, endYear, defaultRegion, areaCode, defaultSelector });
      },
      regionChange() {
        return `${this.province}-${this.city}`;
      },
      yearAndMonth() {
        return `${this.year}-${this.month}`;
      },
      uZIndex() {
        return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
      },
      // 用来兼容小程序、App、h5
      showColumnCom() {
        return true;
      }
    },
    watch: {
      propsChange() {
        this.reset = true;
        setTimeout(() => this.init(), 10);
      },
      // 如果地区发生变化，为了让picker联动起来，必须重置this.citys和this.areas
      regionChange(val) {
        this.citys = citys[this.province];
        this.areas = areas[this.province][this.city];
      },
      // watch监听月份的变化，实时变更日的天数，因为不同月份，天数不一样
      // 一个月可能有30，31天，甚至闰年2月的29天，平年2月28天
      yearAndMonth(val) {
        if (this.params.year)
          this.setDays();
      },
      // 微信和QQ小程序由于一些奇怪的原因(故同时对所有平台均初始化一遍)，需要重新初始化才能显示正确的值
      valueCom: {
        immediate: true,
        handler(n) {
          if (n) {
            this.reset = true;
            setTimeout(() => this.init(), 10);
          }
          this.popupValue = n;
        }
      }
    },
    methods: {
      // 标识滑动开始，只有微信小程序才有这样的事件
      pickstart() {
      },
      // 标识滑动结束
      pickend() {
      },
      // 对单列和多列形式的判断是否有传入变量的情况
      getItemValue(item, mode) {
        if (this.mode == mode) {
          return typeof item == "object" ? item[this.rangeKey] : item;
        }
      },
      // 小于10前面补0，用于月份，日期，时分秒等
      formatNumber(num) {
        return +num < 10 ? "0" + num : String(num);
      },
      // 生成递进的数组
      generateArray: function(start, end) {
        start = Number(start);
        end = Number(end);
        end = end > start ? end : start;
        return [...Array(end + 1).keys()].slice(start);
      },
      getIndex: function(arr, val) {
        let index2 = arr.indexOf(val);
        return ~index2 ? index2 : 0;
      },
      //日期时间处理
      initTimeValue() {
        let fdate = this.defaultTime.replace(/\-/g, "/");
        fdate = fdate && fdate.indexOf("/") == -1 ? `2020/01/01 ${fdate}` : fdate;
        let arr1 = fdate.split(" ");
        let arr1_1 = arr1[0] || "";
        let arr1_2 = arr1[1] || "";
        let arr2;
        if (arr1_1.indexOf("-") > -1) {
          arr2 = arr1_1.split("-");
        } else {
          arr2 = arr1_1.split("/");
        }
        let arr3 = arr1_2.split(":");
        let dateObj = {
          year: Number(arr2[0]),
          month: Number(arr2[1]) || 1,
          day: Number(arr2[2]) || 1,
          hour: Number(arr3[0]) || 0,
          minute: Number(arr3[1]) || 0,
          second: Number(arr3[2]) || 0
        };
        for (let key in dateObj) {
          if (dateObj[key] >= 0 && dateObj[key] < 10)
            dateObj[key] = `0${dateObj[key]}`;
        }
        fdate = `${dateObj.year}/${dateObj.month}/${dateObj.day} ${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;
        let time = null;
        if (fdate)
          time = new Date(fdate);
        else
          time = /* @__PURE__ */ new Date();
        this.year = time.getFullYear();
        this.month = Number(time.getMonth()) + 1;
        this.day = time.getDate();
        this.hour = time.getHours();
        this.minute = time.getMinutes();
        this.second = time.getSeconds();
      },
      init() {
        this.valueArr = [];
        this.reset = false;
        if (this.mode == "time") {
          this.initTimeValue();
          if (this.params.year) {
            this.valueArr.push(0);
            this.setYears();
          }
          if (this.params.month) {
            this.valueArr.push(0);
            this.setMonths();
          }
          if (this.params.day) {
            this.valueArr.push(0);
            this.setDays();
          }
          if (this.params.hour) {
            this.valueArr.push(0);
            this.setHours();
          }
          if (this.params.minute) {
            this.valueArr.push(0);
            this.setMinutes();
          }
          if (this.params.second) {
            this.valueArr.push(0);
            this.setSeconds();
          }
        } else if (this.mode == "region") {
          if (this.params.province) {
            this.valueArr.push(0);
            this.setProvinces();
          }
          if (this.params.city) {
            this.valueArr.push(0);
            this.setCitys();
          }
          if (this.params.area) {
            this.valueArr.push(0);
            this.setAreas();
          }
        } else if (this.mode == "selector") {
          this.valueArr = this.defaultSelector;
        } else if (this.mode == "multiSelector") {
          this.valueArr = this.defaultSelector;
          this.multiSelectorValue = this.defaultSelector;
        }
        this.$forceUpdate();
      },
      // 设置picker的某一列值
      setYears() {
        this.years = this.generateArray(this.startYear, this.endYear);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.years, this.year));
      },
      setMonths() {
        this.months = this.generateArray(1, 12);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.months, this.month));
      },
      setDays() {
        let totalDays = new Date(this.year, this.month, 0).getDate();
        this.days = this.generateArray(1, totalDays);
        let index2 = 0;
        if (this.params.year && this.params.month)
          index2 = 2;
        else if (this.params.month)
          index2 = 1;
        else if (this.params.year)
          index2 = 1;
        else
          index2 = 0;
        if (this.day > this.days.length)
          this.day = this.days.length;
        this.valueArr.splice(index2, 1, this.getIndex(this.days, this.day));
      },
      setHours() {
        this.hours = this.generateArray(0, 23);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.hours, this.hour));
      },
      setMinutes() {
        this.minutes = this.generateArray(0, 59);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.minutes, this.minute));
      },
      setSeconds() {
        this.seconds = this.generateArray(0, 59);
        this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.seconds, this.second));
      },
      setProvinces() {
        if (!this.params.province)
          return;
        let tmp = "";
        let useCode = false;
        if (this.areaCode.length) {
          tmp = this.areaCode[0];
          useCode = true;
        } else if (this.defaultRegion.length)
          tmp = this.defaultRegion[0];
        else
          tmp = 0;
        provinces.map((v, k) => {
          if (useCode ? v.code == tmp : v.name == tmp) {
            tmp = k;
          }
        });
        this.province = tmp;
        this.provinces = provinces;
        this.valueArr.splice(0, 1, this.province);
      },
      setCitys() {
        if (!this.params.city)
          return;
        let tmp = "";
        let useCode = false;
        if (this.areaCode.length) {
          tmp = this.areaCode[1];
          useCode = true;
        } else if (this.defaultRegion.length)
          tmp = this.defaultRegion[1];
        else
          tmp = 0;
        citys[this.province].map((v, k) => {
          if (useCode ? v.code == tmp : v.name == tmp) {
            tmp = k;
          }
        });
        this.city = tmp;
        this.citys = citys[this.province];
        this.valueArr.splice(1, 1, this.city);
      },
      setAreas() {
        if (!this.params.area)
          return;
        let tmp = "";
        let useCode = false;
        if (this.areaCode.length) {
          tmp = this.areaCode[2];
          useCode = true;
        } else if (this.defaultRegion.length)
          tmp = this.defaultRegion[2];
        else
          tmp = 0;
        areas[this.province][this.city].map((v, k) => {
          if (useCode ? v.code == tmp : v.name == tmp) {
            tmp = k;
          }
        });
        this.area = tmp;
        this.areas = areas[this.province][this.city];
        this.valueArr.splice(2, 1, this.area);
      },
      close() {
        this.$emit("input", false);
        this.$emit("update:modelValue", false);
      },
      // 用户更改picker的列选项
      change(e) {
        this.valueArr = e.detail.value;
        let i = 0;
        if (this.mode == "time") {
          if (this.params.year)
            this.year = this.years[this.valueArr[i++]];
          if (this.params.month)
            this.month = this.months[this.valueArr[i++]];
          if (this.params.day)
            this.day = this.days[this.valueArr[i++]];
          if (this.params.hour)
            this.hour = this.hours[this.valueArr[i++]];
          if (this.params.minute)
            this.minute = this.minutes[this.valueArr[i++]];
          if (this.params.second)
            this.second = this.seconds[this.valueArr[i++]];
        } else if (this.mode == "region") {
          if (this.params.province)
            this.province = this.valueArr[i++];
          if (this.params.city)
            this.city = this.valueArr[i++];
          if (this.params.area)
            this.area = this.valueArr[i++];
        } else if (this.mode == "multiSelector") {
          let index2 = null;
          this.defaultSelector.map((val, idx) => {
            if (val != e.detail.value[idx])
              index2 = idx;
          });
          if (index2 != null) {
            this.$emit("columnchange", {
              column: index2,
              index: e.detail.value[index2]
            });
          }
        }
      },
      // 用户点击确定按钮
      getResult(event = null) {
        let result = {};
        if (this.mode == "time") {
          if (this.params.year)
            result.year = this.formatNumber(this.year || 0);
          if (this.params.month)
            result.month = this.formatNumber(this.month || 0);
          if (this.params.day)
            result.day = this.formatNumber(this.day || 0);
          if (this.params.hour)
            result.hour = this.formatNumber(this.hour || 0);
          if (this.params.minute)
            result.minute = this.formatNumber(this.minute || 0);
          if (this.params.second)
            result.second = this.formatNumber(this.second || 0);
          if (this.params.timestamp)
            result.timestamp = this.getTimestamp();
        } else if (this.mode == "region") {
          if (this.params.province)
            result.province = provinces[this.province];
          if (this.params.city)
            result.city = citys[this.province][this.city];
          if (this.params.area)
            result.area = areas[this.province][this.city][this.area];
        } else if (this.mode == "selector") {
          result = this.valueArr;
        } else if (this.mode == "multiSelector") {
          result = this.valueArr;
        }
        if (event)
          this.$emit(event, result);
        this.close();
      },
      // 获取时间戳
      getTimestamp() {
        let time = this.year + "/" + this.month + "/" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second;
        return new Date(time).getTime() / 1e3;
      },
      // 获得数据源
      getDateSource() {
        return {
          provinces,
          citys,
          areas
        };
      },
      // 智能识别省市区
      regionDiscern(addressText) {
        let address = "";
        let province = {};
        let city = {};
        let area = {};
        if (!addressText)
          return { code: -1, msg: "地址文本不能为空" };
        addressText.trim();
        let firstTwoKey = addressText.substring(0, 2);
        let provinceIndex = -1;
        for (let i = 0; i < provinces.length; i++) {
          let { code: code2, name } = provinces[i];
          if (name.indexOf(firstTwoKey) == 0) {
            province = { code: code2, name };
            provinceIndex = i;
            break;
          }
        }
        if (provinceIndex == -1)
          return { code: -1, msg: `省份【${firstTwoKey}】没有找到，请输入正确的地址` };
        let citysArr = citys[provinceIndex];
        let cityIndex = -1;
        for (let i = 0; i < citysArr.length; i++) {
          let { name, code: code2 } = citysArr[i];
          let cityName = name.substr(0, name.length - 1);
          if (addressText.indexOf(cityName) > -1) {
            city = { code: code2, name };
            cityIndex = i;
            break;
          }
        }
        if (cityIndex == -1)
          return { code: -1, msg: `地级市没有找到，请输入正确的地址` };
        let areasArr = areas[provinceIndex][cityIndex];
        let areaIndex = -1;
        for (let i = 0; i < areasArr.length; i++) {
          let { code: code2, name } = areasArr[i];
          let reg = name;
          if (name.length > 2)
            reg += `|${name.substr(0, name.length - 1)}`;
          let areaRegExp = new RegExp(reg);
          if (addressText.search(areaRegExp) > -1) {
            area = { code: code2, name };
            address = addressText.replace(new RegExp(reg), "{{~}}").split("{{~}}")[1];
            areaIndex = i;
            break;
          }
        }
        if (areaIndex == -1)
          return { code: -1, msg: "县级市没有找到，请输入正确的地址" };
        let formatted_address = `${province.name}${city.name}${area.name}${address}`;
        let res = {
          code: 0,
          msg: "ok",
          data: {
            province,
            // 省
            city,
            // 市
            area,
            // 区
            address,
            // 街道地址
            formatted_address
            // 完整格式化地址
          }
        };
        return res;
      },
      // 智能识别收货信息
      addressDiscern(text) {
        let name = "";
        let mobile2 = "";
        if (!text)
          return { code: -1, msg: "地址文本不能为空" };
        let textArr = text.split(/[^\u4e00-\u9fa5a-zA-Z0-9+-（）()]+/g).filter((v) => v.length);
        if (textArr.length != 3)
          return { code: -1, msg: "地址格式不正确，请按姓名 手机号 收货地址格式。" };
        let temp;
        let addressText;
        for (let [k, v] of textArr.entries()) {
          if (/^1[3,4,5,6,7,8,9][0-9]{9}$/.test(v)) {
            mobile2 = v;
            continue;
          }
          if (!temp) {
            temp = v;
            continue;
          }
          temp.length > v.length ? (addressText = temp, name = v) : (addressText = v, name = temp);
        }
        let positionRes = this.regionDiscern(addressText);
        if (positionRes.code !== 0)
          return positionRes;
        let res = {
          code: 0,
          msg: "ok",
          data: {
            name,
            // 姓名
            mobile: mobile2,
            // 手机号
            position: positionRes.data
            // 省市区街道信息
          }
        };
        return res;
      },
      stop() {
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_0);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      maskCloseAble: $props.maskCloseAble,
      mode: "bottom",
      popup: false,
      modelValue: $data.popupValue,
      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.popupValue = $event),
      length: "auto",
      safeAreaInsetBottom: $props.safeAreaInsetBottom,
      onClose: $options.close,
      "z-index": $options.uZIndex,
      blur: $props.blur
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-datetime-picker" }, [
          vue.createElementVNode(
            "view",
            {
              class: "u-picker-header",
              onTouchmove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.stop && $options.stop(...args), ["stop", "prevent"]))
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "u-btn-picker u-btn-picker--tips",
                  style: vue.normalizeStyle({ color: $props.cancelColor }),
                  "hover-class": "u-opacity",
                  "hover-stay-time": 150,
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.getResult("cancel"))
                },
                vue.toDisplayString($props.cancelText),
                5
                /* TEXT, STYLE */
              ),
              vue.createElementVNode(
                "view",
                { class: "u-picker__title" },
                vue.toDisplayString($props.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "u-btn-picker u-btn-picker--primary",
                  style: vue.normalizeStyle({ color: $data.moving ? $props.cancelColor : $props.confirmColor }),
                  "hover-class": "u-opacity",
                  "hover-stay-time": 150,
                  onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.stop && $options.stop(...args), ["stop"])),
                  onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => $options.getResult("confirm"), ["stop"]))
                },
                vue.toDisplayString($props.confirmText),
                37
                /* TEXT, STYLE, NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          vue.createElementVNode("view", { class: "u-picker-body" }, [
            $props.mode == "region" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 0,
              value: $data.valueArr,
              onChange: _cache[4] || (_cache[4] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[5] || (_cache[5] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[6] || (_cache[6] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              $options.showColumnCom && $props.params.province ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.provinces, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createElementVNode(
                        "view",
                        { class: "u-line-1" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $options.showColumnCom && $props.params.city ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 1 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.citys, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createElementVNode(
                        "view",
                        { class: "u-line-1" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $options.showColumnCom && $props.params.area ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 2 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.areas, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createElementVNode(
                        "view",
                        { class: "u-line-1" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : $props.mode == "time" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 1,
              value: $data.valueArr,
              onChange: _cache[7] || (_cache[7] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[8] || (_cache[8] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[9] || (_cache[9] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              $options.showColumnCom && $props.params.year ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.years, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString(item) + " ",
                        1
                        /* TEXT */
                      ),
                      $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "u-text"
                      }, "年")) : vue.createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $options.showColumnCom && $props.params.month ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 1 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.months, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString($options.formatNumber(item)) + " ",
                        1
                        /* TEXT */
                      ),
                      $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "u-text"
                      }, "月")) : vue.createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $options.showColumnCom && $props.params.day ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 2 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.days, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString($options.formatNumber(item)) + " ",
                        1
                        /* TEXT */
                      ),
                      $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "u-text"
                      }, "日")) : vue.createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $options.showColumnCom && $props.params.hour ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 3 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.hours, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString($options.formatNumber(item)) + " ",
                        1
                        /* TEXT */
                      ),
                      $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "u-text"
                      }, "时")) : vue.createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $options.showColumnCom && $props.params.minute ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 4 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.minutes, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString($options.formatNumber(item)) + " ",
                        1
                        /* TEXT */
                      ),
                      $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "u-text"
                      }, "分")) : vue.createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $options.showColumnCom && $props.params.second ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 5 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.seconds, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString($options.formatNumber(item)) + " ",
                        1
                        /* TEXT */
                      ),
                      $props.showTimeTag ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "u-text"
                      }, "秒")) : vue.createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : $props.mode == "selector" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 2,
              value: $data.valueArr,
              onChange: _cache[10] || (_cache[10] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[11] || (_cache[11] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[12] || (_cache[12] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              $options.showColumnCom ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.range, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "u-column-item",
                      key: index2
                    }, [
                      vue.createElementVNode(
                        "view",
                        { class: "u-line-1" },
                        vue.toDisplayString($options.getItemValue(item, "selector")),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : $props.mode == "multiSelector" ? (vue.openBlock(), vue.createElementBlock("picker-view", {
              key: 3,
              value: $data.valueArr,
              onChange: _cache[13] || (_cache[13] = (...args) => $options.change && $options.change(...args)),
              class: "u-picker-view",
              onPickstart: _cache[14] || (_cache[14] = (...args) => $options.pickstart && $options.pickstart(...args)),
              onPickend: _cache[15] || (_cache[15] = (...args) => $options.pickend && $options.pickend(...args))
            }, [
              $options.showColumnCom ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                vue.renderList($props.range, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("picker-view-column", { key: index2 }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item, (item1, index1) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "u-column-item",
                          key: index1
                        }, [
                          vue.createElementVNode(
                            "view",
                            { class: "u-line-1" },
                            vue.toDisplayString($options.getItemValue(item1, "multiSelector")),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ], 40, ["value"])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["maskCloseAble", "modelValue", "safeAreaInsetBottom", "onClose", "z-index", "blur"]);
  }
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-e8b59df9"], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/vk-uview-ui/components/u-picker/u-picker.vue"]]);
  const _sfc_main$4 = {
    __name: "order-sure",
    props: {
      // 直播id
      rid: { type: [Number, String] }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props2 = __props;
      onLoad((option) => {
        liveJson.map((item, index2) => {
          if (parseInt(item.id) == parseInt(props2.rid)) {
            goodsItem.value = item;
          }
        });
      });
      const goodsItem = vue.ref({});
      const showAddressPicker = vue.ref(false);
      const address = vue.reactive({
        fullname: "",
        phone: "",
        region: "",
        detail: ""
      });
      const onConfirmRegion = (region) => {
        address.region = `${region.province.name} ${region.city.name} ${region.area.name}`;
      };
      const __returned__ = { props: props2, goodsItem, showAddressPicker, address, onConfirmRegion, ref: vue.ref, reactive: vue.reactive, get onLoad() {
        return onLoad;
      }, get liveJson() {
        return liveJson;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_navbar = resolveEasycom(vue.resolveDynamicComponent("ua-navbar"), __easycom_0$9);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    const _component_u_tag = resolveEasycom(vue.resolveDynamicComponent("u-tag"), __easycom_2$1);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_0$3);
    const _component_ua_layout = resolveEasycom(vue.resolveDynamicComponent("ua-layout"), __easycom_4);
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_5);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_ua_layout, { tabbar: false }, {
          header: vue.withCtx(() => [
            vue.createVNode(_component_ua_navbar, {
              custom: "",
              title: "确认订单",
              fixed: "",
              bgcolor: "#2979ff"
            }, {
              back: vue.withCtx(() => [
                vue.createElementVNode("text", { class: "welive-icon welive-icon-arrL fs-36" })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          footer: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-footfixed" }, [
              vue.createElementVNode("view", { class: "ulive__wrap-goods__detail-footbar flexbox flex-alignc" }, [
                vue.createElementVNode("view", { class: "flex1 align-r c-eb4868" }, [
                  vue.createTextVNode("需附："),
                  vue.createElementVNode("text", { class: "fs-36" }, "￥550.00")
                ]),
                vue.createVNode(_component_u_button, {
                  type: "primary",
                  shape: "circle",
                  "custom-style": { margin: "0 25rpx" }
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("提交订单")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "ulive__wrap-order__wrap" }, [
              vue.createElementVNode("view", { class: "ulive__wrap-ordersure__wrap" }, [
                vue.createElementVNode("view", { class: "ulive__wrap-ordersure__addrinfo" }, [
                  vue.createElementVNode("view", { class: "flexbox flex-alignc" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "location",
                      size: "20"
                    }),
                    vue.createElementVNode("view", { class: "addr-info flex1 ml-10" }, [
                      vue.createElementVNode("view", { class: "name fs-32" }, [
                        vue.createTextVNode("啧啧啧啧啧仄仄"),
                        vue.createElementVNode("text", { class: "c-999 fs-24 ml-10" }, "15620452653")
                      ]),
                      vue.createElementVNode("view", { class: "addr fs-28 mt-10 clamp1" }, "广东省 广州市 天河区 珠江新城保利大厦201")
                    ]),
                    vue.createElementVNode("view", { class: "arrow" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "arrowright",
                        color: "#999",
                        size: "16"
                      })
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "ulive__wrap-ordersure__wrapcell" }, [
                  vue.createElementVNode("view", { class: "ulive__wrap-ordersure__cell flexbox flex-alignc" }, [
                    vue.createElementVNode("view", { class: "lbl" }, "收货人"),
                    vue.createElementVNode("view", { class: "flex1" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          class: "iptxt",
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.address.fullname = $event),
                          placeholder: "请输入收货人姓名"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $setup.address.fullname]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "ulive__wrap-ordersure__cell flexbox flex-alignc" }, [
                    vue.createElementVNode("view", { class: "lbl" }, "手机号码"),
                    vue.createElementVNode("view", { class: "flex1" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          class: "iptxt",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.address.phone = $event),
                          placeholder: "请输入手机号"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $setup.address.phone]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    class: "ulive__wrap-ordersure__cell flexbox flex-alignc",
                    onClick: _cache[3] || (_cache[3] = ($event) => $setup.showAddressPicker = true)
                  }, [
                    vue.createElementVNode("view", { class: "lbl" }, "所在地区"),
                    vue.createElementVNode("view", { class: "flex1" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          class: "iptxt",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.address.region = $event),
                          disabled: "",
                          placeholder: "请选择区域"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $setup.address.region]
                      ])
                    ]),
                    vue.createVNode(_component_uni_icons, {
                      type: "arrowright",
                      color: "#999",
                      size: "16"
                    })
                  ]),
                  vue.createElementVNode("view", { class: "ulive__wrap-ordersure__cell flexbox flex-alignc" }, [
                    vue.createElementVNode("view", { class: "lbl" }, "详细地址"),
                    vue.createElementVNode("view", { class: "flex1" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          class: "iptxt",
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.address.detail = $event),
                          placeholder: "请输入详细收货地址"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $setup.address.detail]
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "ulive__wrap-ordersure__goodsinfo" }, [
                  vue.createElementVNode("view", { class: "flexbox" }, [
                    vue.createElementVNode("image", {
                      class: "gimg",
                      src: $setup.goodsItem.poster,
                      mode: "aspectFill"
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "ginfo flex1 ml-20" }, [
                      vue.createElementVNode("view", { class: "title clamp2 fs-28" }, [
                        vue.createVNode(_component_u_tag, {
                          text: "到店付",
                          shape: "circle",
                          mode: "dark",
                          size: "mini",
                          "bg-color": "#f2905b"
                        }),
                        vue.createTextVNode(
                          " " + vue.toDisplayString($setup.goodsItem.desc),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "flexbox flex-alignc mt-10" }, [
                        vue.createElementVNode("view", { class: "flex1 c-999 fs-28" }, "×10"),
                        vue.createElementVNode("view", { class: "c-333 fs-28 mr-20" }, "￥60.00")
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "ulive__wrap-ordersure__cell flexbox flex-alignc mt-25" }, [
                    vue.createElementVNode("view", { class: "lbl flex1" }, "商品价格"),
                    vue.createElementVNode("view", { class: "c-eb4868" }, "￥600.00")
                  ]),
                  vue.createElementVNode("view", { class: "ulive__wrap-ordersure__cell flexbox flex-alignc" }, [
                    vue.createElementVNode("view", { class: "lbl flex1" }, "优惠券"),
                    vue.createElementVNode("view", { class: "c-999" }, "-￥50.00"),
                    vue.createVNode(_component_uni_icons, {
                      type: "arrowright",
                      color: "#999",
                      size: "16"
                    })
                  ])
                ])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_picker, {
          mode: "region",
          modelValue: $setup.showAddressPicker,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.showAddressPicker = $event),
          "safe-area-inset-bottom": "",
          onConfirm: $setup.onConfirmRegion
        }, null, 8, ["modelValue"])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesOrderOrderSure = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-e7499415"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/order/order-sure.vue"]]);
  const _imports_0 = "/static/404.svg";
  const _sfc_main$3 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const handleBack = () => {
        uni.switchTab({
          url: "/pages/index/index"
        });
      };
      const __returned__ = { handleBack };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "ulive__error flexbox flex-col flex-alignc flex-justifyc" }, [
      vue.createElementVNode("view", { class: "ltimg" }, [
        vue.createElementVNode("image", {
          src: _imports_0,
          mode: "widthFix"
        })
      ]),
      vue.createElementVNode("view", { class: "rtcnt" }, [
        vue.createElementVNode("h2", null, "404出错啦"),
        vue.createElementVNode("h4", null, "您访问的页面不存在..."),
        vue.createElementVNode("p", null, "请检查网址是否正确，或点击返回首页。"),
        vue.createVNode(_component_u_button, {
          type: "primary",
          shape: "circle",
          plain: "",
          onClick: $setup.handleBack,
          style: { "margin": "20px 0" }
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("返回首页")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  const Pages404Index = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-de02c344"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/404/index.vue"]]);
  function uuid(len = 32) {
    let $chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let $lens = $chars.length;
    let str = "";
    for (var i = 0; i < len; i++) {
      str += $chars.charAt(Math.floor(Math.random() * $lens));
    }
    return str;
  }
  function guid$1(len, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid2 = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid2[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid2[8] = uuid2[13] = uuid2[18] = uuid2[23] = "-";
      uuid2[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid2[i]) {
          r = 0 | Math.random() * 16;
          uuid2[i] = chars[i === 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid2.shift();
      return "u" + uuid2.join("");
    } else {
      return uuid2.join("");
    }
  }
  const _sfc_main$2 = {
    __name: "login",
    setup(__props, { expose: __expose }) {
      __expose();
      const authState = authStore();
      const uapopRef = vue.ref();
      const formObj = vue.ref({
        username: "",
        password: ""
      });
      const handleSubmit = () => {
        const { username, password } = formObj.value;
        if (!username || !password) {
          toast2("warn", "验证失败");
        } else {
          toast2("success", "验证通过", () => {
            uni.switchTab({
              url: "/pages/index/index"
            });
          });
          authState.setAuthorization(guid$1(32));
          authState.setUserInfo({
            avatar: "",
            username,
            token: uuid(64)
          });
        }
      };
      const toast2 = (icon = "info", content, fn) => {
        uapopRef.value.open({
          type: "toast",
          icon,
          content,
          customStyle: { "border-radius": "10px" },
          time: 2,
          onClose: fn
        });
      };
      const __returned__ = { authState, uapopRef, formObj, handleSubmit, toast: toast2, ref: vue.ref, get authStore() {
        return authStore;
      }, get uuid() {
        return uuid;
      }, get guid() {
        return guid$1;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ua_input = resolveEasycom(vue.resolveDynamicComponent("ua-input"), __easycom_0$8);
    const _component_ua_popup = resolveEasycom(vue.resolveDynamicComponent("ua-popup"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "ulive__authlayout" }, [
          vue.createElementVNode("view", { class: "ulive__authwrap flexbox flex-col" }, [
            vue.createElementVNode("view", { class: "ulive__authwrap-header flex1" }, [
              vue.createElementVNode("view", { class: "ulive__authwrap-slogan" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$3,
                  mode: "widthFix",
                  style: { "width": "60px" }
                }),
                vue.createElementVNode("view", null, "uniapp-welive")
              ]),
              vue.createElementVNode("view", { class: "ulive__authwrap-forms" }, [
                vue.createElementVNode("view", { class: "item flexbox" }, [
                  vue.createVNode(_component_ua_input, {
                    modelValue: $setup.formObj.username,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.formObj.username = $event),
                    placeholder: "请输入账号",
                    style: { "width": "100%" }
                  }, null, 8, ["modelValue"])
                ]),
                vue.createElementVNode("view", { class: "item flexbox" }, [
                  vue.createVNode(_component_ua_input, {
                    modelValue: $setup.formObj.password,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.formObj.password = $event),
                    showPassword: "",
                    placeholder: "请输入密码",
                    style: { "width": "100%" }
                  }, null, 8, ["modelValue"])
                ]),
                vue.createElementVNode("view", { class: "item btns" }, [
                  vue.createElementVNode("button", {
                    class: "flex-c",
                    onClick: $setup.handleSubmit
                  }, "登录")
                ]),
                vue.createElementVNode("view", { class: "item lgreg-lk" }, [
                  vue.createElementVNode("text", {
                    class: "navigator",
                    to: "#"
                  }, "忘记密码"),
                  vue.createElementVNode("text", {
                    class: "navigator",
                    to: "#"
                  }, "注册账号")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "ulive__authwrap-footer" }, [
              vue.createElementVNode("text", { class: "version" }, "UNIAPP-WELIVE v1.0")
            ])
          ])
        ]),
        vue.createCommentVNode(" //函数式弹框 "),
        vue.createVNode(
          _component_ua_popup,
          { ref: "uapopRef" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesAuthLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-2cc9f8c3"], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/auth/login.vue"]]);
  const _sfc_main$1 = {
    __name: "register",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = {};
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "ulive__authlayout" }, " 注册模板... ");
  }
  const PagesAuthRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/auth/register.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/live/index", PagesLiveIndex);
  __definePage("pages/cart/index", PagesCartIndex);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/goods/detail", PagesGoodsDetail);
  __definePage("pages/order/list", PagesOrderList);
  __definePage("pages/order/detail", PagesOrderDetail);
  __definePage("pages/order/order-sure", PagesOrderOrderSure);
  __definePage("pages/404/index", Pages404Index);
  __definePage("pages/auth/login", PagesAuthLogin);
  __definePage("pages/auth/register", PagesAuthRegister);
  const _sfc_main = {
    globalData: {
      statusBarH: 0,
      customBarH: 0,
      screenWidth: 0,
      screenHeight: 0,
      menuBar: null
    },
    onLaunch: function() {
      uni.hideTabBar();
      this.appInit();
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:14", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:17", "App Hide");
    },
    onPageNotFound: function() {
      uni.redirectTo({
        url: "/pages/index/index"
      });
    },
    methods: {
      appInit: function() {
        uni.getSystemInfo({
          success: (e) => {
            let statusBar = e.statusBarHeight || 0;
            let customBar;
            let menuBar;
            customBar = statusBar + (e.osName === "android" ? 50 : 45);
            this.globalData.statusBarH = statusBar;
            this.globalData.customBarH = customBar;
            this.globalData.screenWidth = e.screenWidth;
            this.globalData.screenHeight = e.screenHeight;
            this.globalData.menuBar = menuBar;
          }
        });
      }
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/curry/Desktop/uni-weLive/App.vue"]]);
  function get(state, path) {
    return path.reduce((obj, p) => {
      return obj == null ? void 0 : obj[p];
    }, state);
  }
  function set(state, path, val) {
    return path.slice(0, -1).reduce((obj, p) => {
      if (!/^(__proto__)$/.test(p))
        return obj[p] = obj[p] || {};
      else
        return {};
    }, state)[path[path.length - 1]] = val, state;
  }
  function pick(baseState, paths) {
    return paths.reduce((substate, path) => {
      const pathArray = path.split(".");
      return set(
        substate,
        pathArray,
        get(baseState, pathArray)
      );
    }, {});
  }
  const isObject = (v) => typeof v === "object" && v !== null;
  const normalizeOptions = (options, globalOptions) => {
    options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
    return new Proxy(options, {
      get(t2, p, r) {
        return Reflect.get(t2, p, r) || Reflect.get(globalOptions, p, r);
      }
    });
  };
  function passage(key) {
    return key;
  }
  function createUnistorage(globalOptions = {}) {
    const { key: normalizeKey = passage } = globalOptions || {};
    if (globalOptions == null ? void 0 : globalOptions.key) {
      delete globalOptions.key;
    }
    return function(ctx) {
      {
        const { store, options } = ctx;
        let { unistorage } = options || {};
        if (!unistorage)
          return;
        const {
          paths = null,
          afterRestore,
          beforeRestore,
          serializer = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
          },
          key = store.$id
        } = normalizeOptions(unistorage, globalOptions);
        beforeRestore == null ? void 0 : beforeRestore(ctx);
        const normalizedKey = normalizeKey(key);
        try {
          const fromStorage = uni.getStorageSync(normalizedKey);
          if (fromStorage) {
            store.$patch(serializer.deserialize(fromStorage));
          }
        } catch (_error) {
        }
        afterRestore == null ? void 0 : afterRestore(ctx);
        store.$subscribe(
          (_, state) => {
            try {
              const toStore = Array.isArray(paths) ? pick(state, paths) : state;
              uni.setStorageSync(
                normalizedKey,
                serializer.serialize(toStore)
              );
            } catch (_error) {
            }
          },
          { detached: true }
        );
      }
    };
  }
  const Pinia = createPinia();
  Pinia.use(createUnistorage());
  const mixin = {
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    methods: {
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
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
          this.parent = false;
        this.parent = this.$u.$parent.call(this, parentName);
        if (this.parent) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
          this.parentData.value = this.parent.modelValue;
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && e.stopPropagation && e.stopPropagation();
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    var o = isArray(obj) ? [] : {};
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (var prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else {
          if (typeof source[prop] !== "object") {
            target[prop] = source[prop];
          } else {
            if (target[prop].concat && source[prop].concat) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = deepMerge(target[prop], source[prop]);
            }
          }
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
  }
  function date(value) {
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
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
    } else if (value.length === 8) {
      return xreg.test(value);
    } else {
      return false;
    }
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    let reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    let reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
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
        if (0 === value || isNaN(value))
          return true;
        break;
      case "object":
        if (null === value || value.length === 0)
          return true;
        for (var i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value == "string") {
      try {
        var obj = JSON.parse(value);
        if (typeof obj == "object" && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
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
    return new RegExp(/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)$/).test(newValue);
  }
  function video(value) {
    const newValue = value.split("?")[0];
    return new RegExp(/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8|3gp)$/).test(newValue);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  function string(value) {
    return typeof value === "string";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  class Request {
    // 设置全局默认配置
    setConfig(customConfig) {
      this.config = deepMerge(this.config, customConfig);
    }
    // 主要请求部分
    request(options = {}) {
      if (this.interceptor.request && typeof this.interceptor.request === "function") {
        let interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          return new Promise(() => {
          });
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || "";
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise((resolve, reject) => {
        options.complete = (response) => {
          uni.hideLoading();
          clearTimeout(this.config.timer);
          this.config.timer = null;
          if (this.config.originalData) {
            if (this.interceptor.response && typeof this.interceptor.response === "function") {
              let resInterceptors = this.interceptor.response(response);
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                reject(response);
              }
            } else {
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (this.interceptor.response && typeof this.interceptor.response === "function") {
                let resInterceptors = this.interceptor.response(response.data);
                if (resInterceptors !== false) {
                  resolve(resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                resolve(response.data);
              }
            } else {
              reject(response);
            }
          }
        };
        options.url = test.url(options.url) ? options.url : this.config.baseUrl + (options.url.indexOf("/") == 0 ? options.url : "/" + options.url);
        if (this.config.showLoading && !this.config.timer) {
          this.config.timer = setTimeout(() => {
            uni.showLoading({
              title: this.config.loadingText,
              mask: this.config.loadingMask
            });
            this.config.timer = null;
          }, this.config.loadingTime);
        }
        uni.request(options);
      });
    }
    constructor() {
      this.config = {
        baseUrl: "",
        // 请求的根域名
        // 默认的请求头
        header: {},
        method: "POST",
        // 设置为json，返回后uni.request会对数据进行一次JSON.parse
        dataType: "json",
        // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
        responseType: "text",
        showLoading: true,
        // 是否显示请求中的loading
        loadingText: "请求中...",
        loadingTime: 800,
        // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
        timer: null,
        // 定时器
        originalData: false,
        // 是否在拦截器中返回服务端的原始数据，见文档说明
        loadingMask: true
        // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
      };
      this.interceptor = {
        // 请求前的拦截
        request: null,
        // 请求后的拦截
        response: null
      };
      this.get = (url2, data = {}, header = {}) => {
        return this.request({
          method: "GET",
          url: url2,
          header,
          data
        });
      };
      this.post = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "POST",
          header,
          data
        });
      };
      this.put = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "PUT",
          header,
          data
        });
      };
      this.delete = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "DELETE",
          header,
          data
        });
      };
    }
  }
  const http = new Request();
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    let prefix = isPrefix ? "?" : "";
    let _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (let key in data) {
      let value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(key + "[" + i + "]=" + value[i]);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(key + "[]=" + _value);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(key + "=" + _value);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(key + "=" + commaStr);
            break;
          default:
            value.forEach((_value) => {
              _result.push(key + "[]=" + _value);
            });
        }
      } else {
        _result.push(key + "=" + value);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
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
        intercept: false
        // 是否需要拦截
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
        query = uni.$u.queryParams(params, false);
        return url2 += "&" + query;
      } else {
        query = uni.$u.queryParams(params);
        return url2 += query;
      }
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = uni.$u.deepClone(options, this.config);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]")
        throw new TypeError(
          "fillString must be String"
        );
      let str = this;
      if (str.length >= maxLength)
        return String(str);
      let fillLength = maxLength - str.length, times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, fmt = "yyyy-mm-dd") {
    if (!dateTime)
      dateTime = Number(/* @__PURE__ */ new Date());
    if (dateTime.toString().length == 10)
      dateTime *= 1e3;
    let date2 = new Date(dateTime);
    let ret;
    let opt = {
      "y+": date2.getFullYear().toString(),
      // 年
      "m+": (date2.getMonth() + 1).toString(),
      // 月
      "d+": date2.getDate().toString(),
      // 日
      "h+": date2.getHours().toString(),
      // 时
      "M+": date2.getMinutes().toString(),
      // 分
      "s+": date2.getSeconds().toString()
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
      }
    }
    return fmt;
  }
  function timeFrom(dateTime = null, format = "yyyy-mm-dd") {
    if (!dateTime)
      dateTime = Number(/* @__PURE__ */ new Date());
    if (dateTime.toString().length == 10)
      dateTime *= 1e3;
    let timestamp = +new Date(Number(dateTime));
    let timer = (Number(/* @__PURE__ */ new Date()) - timestamp) / 1e3;
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = parseInt(timer / 60) + "分钟前";
        break;
      case (timer >= 3600 && timer < 86400):
        tips = parseInt(timer / 3600) + "小时前";
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = parseInt(timer / 86400) + "天前";
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = parseInt(timer / (86400 * 30)) + "个月前";
          } else {
            tips = parseInt(timer / (86400 * 365)) + "年前";
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function guid(len = 32, firstU = true, radix = null) {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let uuid2 = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid2[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid2[8] = uuid2[13] = uuid2[18] = uuid2[23] = "-";
      uuid2[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid2[i]) {
          r = 0 | Math.random() * 16;
          uuid2[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid2.shift();
      return "u" + uuid2.join("");
    } else {
      return uuid2.join("");
    }
  }
  let color = {
    primary: "#2979ff",
    primaryDark: "#2b85e4",
    primaryDisabled: "#a0cfff",
    primaryLight: "#ecf5ff",
    bgColor: "#f3f4f6",
    info: "#909399",
    infoDark: "#82848a",
    infoDisabled: "#c8c9cc",
    infoLight: "#f4f4f5",
    warning: "#ff9900",
    warningDark: "#f29100",
    warningDisabled: "#fcbd71",
    warningLight: "#fdf6ec",
    error: "#fa3534",
    errorDark: "#dd6161",
    errorDisabled: "#fab6b6",
    errorLight: "#fef0f0",
    success: "#19be6b",
    successDark: "#18b566",
    successDisabled: "#71d5a1",
    successLight: "#dbf1e1",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
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
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  function addUnit(value = "auto", unit = "rpx") {
    value = String(value);
    return test.number(value) ? `${value}${unit}` : value;
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      let gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    } else {
      return 0;
    }
  }
  function trim$1(str, pos = "both") {
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    } else if (pos == "left") {
      return str.replace(/^\s*/, "");
    } else if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    } else if (pos == "all") {
      return str.replace(/\s+/g, "");
    } else {
      return str;
    }
  }
  function toast(title, duration = 1500) {
    uni.showToast({
      title,
      icon: "none",
      duration
    });
  }
  function getParent(name, keys) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        let data = {};
        if (Array.isArray(keys)) {
          keys.map((val) => {
            data[val] = parent[val] ? parent[val] : "";
          });
        } else {
          for (let i in keys) {
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return data;
      }
    }
    return {};
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
  function os() {
    return uni.getSystemInfoSync().platform;
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(function() {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let timeoutArr = [];
  let flagArr = [];
  function throttle(fn, time = 500, isImmediate = true, timeoutName = "default") {
    if (!timeoutArr[timeoutName])
      timeoutArr[timeoutName] = null;
    if (isImmediate) {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        if (typeof fn === "function")
          fn();
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
        }, time);
      }
    } else {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
          if (typeof fn === "function")
            fn();
        }, time);
      }
    }
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
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
  let version = "1.10.1";
  const config = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ]
  };
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  function wranning(str) {
    {
      formatAppLog("warn", "at uni_modules/vk-uview-ui/index.js:13", str);
    }
  }
  const $u = {
    queryParams,
    route,
    timeFormat,
    date: timeFormat,
    // 另名date
    timeFrom,
    colorGradient: colorGradient$1.colorGradient,
    colorToRgba: colorGradient$1.colorToRgba,
    guid,
    color,
    sys,
    os,
    type2icon,
    randomArray,
    wranning,
    get: http.get,
    post: http.post,
    put: http.put,
    "delete": http.delete,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    test,
    random,
    deepClone,
    deepMerge,
    getParent,
    $parent,
    addUnit,
    trim: trim$1,
    type: ["primary", "success", "error", "warning", "info"],
    http,
    toast,
    config,
    // uView配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    addStyle
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.mixin(mixin);
    Vue2.config.globalProperties.$u = $u;
  };
  const VKuview = {
    install
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(Pinia);
    app.use(VKuview);
    return {
      app,
      Pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
