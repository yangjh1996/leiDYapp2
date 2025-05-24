var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a, _b;
import { _ as _export_sfc, m as mpMixin, a as mixin, r as resolveEasycom, b as __easycom_0, c as __easycom_0$1, d as __easycom_1, f as formatAppLog, o as onShow, e as onHide, g as _imports_5$1, h as getRandomColor, i as __easycom_6$1, j as __easycom_2$1, k as __easycom_1$1, l as __easycom_2$2, n as __easycom_3, p as __easycom_4 } from "../../uimg3.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createVNode, createCommentVNode, renderSlot, toDisplayString, createBlock, ref, computed, resolveComponent, withCtx, Fragment, renderList, getCurrentInstance } from "vue";
const props = {
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    // 是否为加载中状态
    loading: {
      type: Boolean,
      default: false
    },
    // 是否为禁用装填
    disabled: {
      type: Boolean,
      default: false
    },
    // 开关尺寸，单位px
    size: {
      type: [String, Number],
      default: 25
    },
    // 打开时的背景颜色
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 关闭时的背景颜色
    inactiveColor: {
      type: String,
      default: "#fff"
    },
    // switch打开时的值
    activeValue: {
      type: [String, Number, Boolean],
      default: true
    },
    // switch关闭时的值
    inactiveValue: {
      type: [String, Number, Boolean],
      default: false
    },
    // 是否开启异步变更，开启后需要手动控制输入值
    asyncChange: {
      type: Boolean,
      default: false
    },
    // 圆点与外边框的距离
    space: {
      type: [String, Number],
      default: 0
    },
    ...(_b = (_a = uni.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.switch
  }
};
const _style_0$3 = { "uv-switch": { "": { "flexDirection": "row", "position": "relative", "backgroundColor": "#ffffff", "borderWidth": 1, "borderRadius": 100, "transitionProperty": "backgroundColor", "transitionDuration": 400, "borderColor": "rgba(0,0,0,0.12)", "borderStyle": "solid", "justifyContent": "flex-end", "alignItems": "center", "overflow": "hidden" } }, "uv-switch__node": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "borderRadius": 100, "backgroundColor": "#ffffff", "boxShadow": "1px 1px 1px 0 rgba(0, 0, 0, 0.25)", "transitionProperty": "transform", "transitionDuration": 400, "transitionTimingFunction": "cubic-bezier(0.3,1.05,0.4,1.05)" } }, "uv-switch__bg": { "": { "position": "absolute", "borderRadius": 100, "backgroundColor": "#FFFFFF", "transitionProperty": "transform", "transitionDuration": 400, "borderTopLeftRadius": 0, "borderBottomLeftRadius": 0, "transitionTimingFunction": "ease" } }, "uv-switch--disabled": { "": { "opacity": 0.6 } }, "@TRANSITION": { "uv-switch": { "property": "backgroundColor", "duration": 400 }, "uv-switch__node": { "property": "transform", "duration": 400, "timingFunction": "cubic-bezier(0.3,1.05,0.4,1.05)" }, "uv-switch__bg": { "property": "transform", "duration": 400, "timingFunction": "ease" } } };
const _sfc_main$3 = {
  name: "uv-switch",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      bgColor: "#ffffff",
      innerValue: false
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        if (newVal !== this.inactiveValue && newVal !== this.activeValue) {
          return this.$uv.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");
        }
        this.innerValue = newVal;
      }
    }
  },
  created() {
    this.innerValue = this.value || this.modelValue;
  },
  computed: {
    isActive() {
      return this.innerValue === this.activeValue;
    },
    switchStyle() {
      let style = {};
      style.width = this.$uv.addUnit(this.$uv.getPx(this.size) * 2 + 2);
      style.height = this.$uv.addUnit(this.$uv.getPx(this.size) + 2);
      if (this.customInactiveColor) {
        style.borderColor = "rgba(0, 0, 0, 0)";
      }
      style.backgroundColor = this.isActive ? this.activeColor : this.inactiveColor;
      return style;
    },
    nodeStyle() {
      let style = {};
      style.width = this.$uv.addUnit(this.$uv.getPx(this.size) - this.space);
      style.height = this.$uv.addUnit(this.$uv.getPx(this.size) - this.space);
      const translateX = this.isActive ? this.$uv.addUnit(this.space) : this.$uv.addUnit(this.$uv.getPx(this.size));
      style.transform = `translateX(-${translateX})`;
      return style;
    },
    bgStyle() {
      let style = {};
      style.width = this.$uv.addUnit(this.$uv.getPx(this.size) * 2 - this.$uv.getPx(this.size) / 2);
      style.height = this.$uv.addUnit(this.$uv.getPx(this.size));
      style.backgroundColor = this.inactiveColor;
      style.transform = `scale(${this.isActive ? 0 : 1})`;
      return style;
    },
    customInactiveColor() {
      return this.inactiveColor !== "#fff" && this.inactiveColor !== "#ffffff";
    }
  },
  methods: {
    clickHandler() {
      if (!this.disabled && !this.loading) {
        const oldValue = this.isActive ? this.inactiveValue : this.activeValue;
        if (!this.asyncChange) {
          this.$emit("input", oldValue);
          this.$emit("update:modelValue", oldValue);
        }
        this.$nextTick(() => {
          this.$emit("change", oldValue);
        });
      }
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uv_loading_icon = resolveEasycom(resolveDynamicComponent("uv-loading-icon"), __easycom_0);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["uv-switch", [_ctx.disabled && "uv-switch--disabled"]]),
      style: normalizeStyle([$options.switchStyle, _ctx.$uv.addStyle(_ctx.customStyle)]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "uv-switch__bg",
          style: normalizeStyle([$options.bgStyle])
        },
        null,
        4
        /* STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["uv-switch__node", [$data.innerValue && "uv-switch__node--on"]]),
          style: normalizeStyle([$options.nodeStyle]),
          ref: "uv-switch__node"
        },
        [
          createVNode(_component_uv_loading_icon, {
            show: _ctx.loading,
            mode: "circle",
            timingFunction: "linear",
            color: $data.innerValue ? _ctx.activeColor : "#AAABAD",
            size: _ctx.size * 0.6
          }, null, 8, ["show", "color", "size"])
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-switch/components/uv-switch/uv-switch.vue"]]);
const _style_0$2 = { "uv-line-1": { "": { "lines": 1, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "uv-line-2": { "": { "lines": 2, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "uv-line-3": { "": { "lines": 3, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "uv-line-4": { "": { "lines": 4, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "uv-line-5": { "": { "lines": 5, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "uv-list-item": { "": { "flexDirection": "row", "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff" } }, "uv-list-item--disabled": { "": { "opacity": 0.3 } }, "uv-list-item--hover": { "": { "!backgroundColor": "#f1f1f1" } }, "uv-list-item__wrapper": { "": { "flexDirection": "column", "flex": 1 } }, "uv-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uv-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uv-list-item__content": { "": { "flexDirection": "column", "paddingRight": 8, "flex": 1, "color": "#3b4144", "justifyContent": "space-between", "overflow": "hidden" } }, "uv-list-item__content--center": { "": { "justifyContent": "center" } }, "uv-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uv-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uv-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uv-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uv-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uv-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uv-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uv-list--lg": { "": { "height": 40, "width": 40 } }, "uv-list--base": { "": { "height": 26, "width": 26 } }, "uv-list--sm": { "": { "height": 20, "width": 20 } }, "uv-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } } };
const _sfc_main$2 = {
  name: "uv-list-item",
  mixins: [mpMixin, mixin],
  emits: ["click", "switchChange"],
  props: {
    direction: {
      type: String,
      default: "row"
    },
    title: {
      type: String,
      default: ""
    },
    note: {
      type: String,
      default: ""
    },
    ellipsis: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: [Boolean, String],
      default: false
    },
    link: {
      type: [Boolean, String],
      default: false
    },
    to: {
      type: String,
      default: ""
    },
    showSwitch: {
      type: [Boolean, String],
      default: false
    },
    switchChecked: {
      type: [Boolean, String],
      default: false
    },
    showBadge: {
      type: [Boolean, String],
      default: false
    },
    badge: {
      type: Object,
      default() {
        return {};
      }
    },
    rightText: {
      type: String,
      default: ""
    },
    thumb: {
      type: String,
      default: ""
    },
    thumbSize: {
      type: String,
      default: "base"
    },
    showExtraIcon: {
      type: [Boolean, String],
      default: false
    },
    extraIcon: {
      type: Object,
      default() {
        return {
          name: "",
          color: "#000000",
          size: 20,
          customPrefix: ""
        };
      }
    },
    border: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default() {
        return {
          padding: "",
          backgroundColor: "#FFFFFF"
        };
      }
    },
    keepScrollPosition: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    directionData() {
      return this.direction ? this.direction : this.parentData.direction ? this.parentData.direction : "row";
    }
  },
  watch: {
    "customStyle.padding": {
      handler(padding) {
        if (padding)
          this.setPadding(padding);
      },
      immediate: true
    }
  },
  data() {
    return {
      isFirstChild: false,
      padding: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      parentData: {
        direction: "row",
        padding: 0
      }
    };
  },
  created() {
    this.updateParentData();
  },
  mounted() {
    this.init();
    this.list = this.getForm();
    if (this.list) {
      if (!this.list.firstChildAppend) {
        this.list.firstChildAppend = true;
        this.isFirstChild = true;
      }
    }
  },
  methods: {
    init() {
      if (!this.parent) {
        this.$uv.error("uv-list-item必须搭配uv-list组件使用");
      }
      this.$nextTick(() => {
        if (!(this.padding.top || this.padding.right || this.padding.bottom || this.padding.left)) {
          this.setPadding(this.parentData.padding);
        }
      });
    },
    updateParentData() {
      this.getParentData("uv-list");
    },
    setPadding(padding) {
      if (typeof padding == "number") {
        padding += "";
      }
      let paddingArr = padding.split(" ");
      if (paddingArr.length === 1) {
        const allPadding = paddingArr[0];
        this.padding = {
          "top": allPadding,
          "right": allPadding,
          "bottom": allPadding,
          "left": allPadding
        };
      } else if (paddingArr.length === 2) {
        const [verticalPadding, horizontalPadding] = paddingArr;
        this.padding = {
          "top": verticalPadding,
          "right": horizontalPadding,
          "bottom": verticalPadding,
          "left": horizontalPadding
        };
      } else if (paddingArr.length === 4) {
        const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
        this.padding = {
          "top": topPadding,
          "right": rightPadding,
          "bottom": bottomPadding,
          "left": leftPadding
        };
      }
    },
    /**
     * 获取父元素实例
     */
    getForm(name = "uniList") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    onClick() {
      if (this.to !== "") {
        this.openPage();
        return;
      }
      if (this.clickable || this.link) {
        this.$emit("click", {
          data: {}
        });
      }
    },
    onSwitchChange(e) {
      this.$emit("switchChange", e);
    },
    openPage() {
      if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
        this.pageApi(this.link);
      } else {
        this.pageApi("navigateTo");
      }
    },
    pageApi(api) {
      let callback = {
        url: this.to,
        success: (res) => {
          this.$emit("click", {
            data: res
          });
        },
        fail: (err) => {
          this.$emit("click", {
            data: err
          });
        }
      };
      switch (api) {
        case "navigateTo":
          uni.navigateTo(callback);
          break;
        case "redirectTo":
          uni.redirectTo(callback);
          break;
        case "reLaunch":
          uni.reLaunch(callback);
          break;
        case "switchTab":
          uni.switchTab(callback);
          break;
        default:
          uni.navigateTo(callback);
      }
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uv_icon = resolveEasycom(resolveDynamicComponent("uv-icon"), __easycom_0$1);
  const _component_uv_badge = resolveEasycom(resolveDynamicComponent("uv-badge"), __easycom_1);
  const _component_uv_switch = resolveEasycom(resolveDynamicComponent("uv-switch"), __easycom_2);
  return openBlock(), createElementBlock("cell", { keepScrollPosition: $props.keepScrollPosition }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uv-list-item--disabled": $props.disabled }, "uv-list-item"]),
      style: normalizeStyle([_ctx.$uv.addStyle($props.customStyle), { "background-color": $props.customStyle.backgroundColor ? $props.customStyle.backgroundColor : "#fff" }]),
      hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uv-list-item--hover",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["border--left", { "uv-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      createElementVNode("view", { class: "uv-list-item__wrapper" }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["uv-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $options.directionData === "column" }]),
              style: normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
            },
            [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createElementVNode("view", { class: "uv-list-item__header" }, [
                  $props.thumb ? (openBlock(), createElementBlock("view", {
                    key: 0,
                    class: "uv-list-item__icon"
                  }, [
                    createElementVNode("u-image", {
                      src: $props.thumb,
                      class: normalizeClass(["uv-list-item__icon-img", ["uv-list--" + $props.thumbSize]])
                    }, null, 10, ["src"])
                  ])) : $props.showExtraIcon ? (openBlock(), createElementBlock("view", {
                    key: 1,
                    class: "uv-list-item__icon"
                  }, [
                    createVNode(_component_uv_icon, {
                      name: $props.extraIcon.icon,
                      customPrefix: $props.extraIcon.customPrefix,
                      color: $props.extraIcon.color,
                      size: $props.extraIcon.size
                    }, null, 8, ["name", "customPrefix", "color", "size"])
                  ])) : createCommentVNode("v-if", true)
                ])
              ]),
              renderSlot(_ctx.$slots, "body", {}, () => [
                createElementVNode(
                  "view",
                  {
                    class: normalizeClass(["uv-list-item__content", { "uv-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
                  },
                  [
                    $props.title ? (openBlock(), createElementBlock(
                      "u-text",
                      {
                        key: 0,
                        class: normalizeClass(["uv-list-item__content-title", [$props.ellipsis && `uv-line-${$props.ellipsis}`]])
                      },
                      toDisplayString($props.title),
                      3
                      /* TEXT, CLASS */
                    )) : createCommentVNode("v-if", true),
                    $props.note ? (openBlock(), createElementBlock(
                      "u-text",
                      {
                        key: 1,
                        class: "uv-list-item__content-note"
                      },
                      toDisplayString($props.note),
                      1
                      /* TEXT */
                    )) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                )
              ]),
              renderSlot(_ctx.$slots, "footer", {}, () => [
                $props.rightText || $props.showBadge || $props.showSwitch ? (openBlock(), createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: normalizeClass(["uv-list-item__extra", { "flex--justify": $options.directionData === "column" }])
                  },
                  [
                    $props.rightText ? (openBlock(), createElementBlock(
                      "u-text",
                      {
                        key: 0,
                        class: "uv-list-item__extra-text"
                      },
                      toDisplayString($props.rightText),
                      1
                      /* TEXT */
                    )) : createCommentVNode("v-if", true),
                    $props.showBadge ? (openBlock(), createBlock(_component_uv_badge, {
                      key: 1,
                      show: !!($props.badge.show || $props.badge.isDot || $props.badge.value),
                      isDot: $props.badge.isDot,
                      value: $props.badge.value,
                      max: $props.badge.max,
                      type: $props.badge.type,
                      showZero: $props.badge.showZero,
                      bgColor: $props.badge.bgColor,
                      color: $props.badge.color,
                      shape: $props.badge.shape,
                      numberType: $props.badge.numberType,
                      inverted: $props.badge.inverted,
                      customStyle: "margin-left: 4px;"
                    }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])) : createCommentVNode("v-if", true),
                    $props.showSwitch ? (openBlock(), createBlock(_component_uv_switch, {
                      key: 2,
                      value: $props.switchChecked,
                      disabled: $props.disabled,
                      onChange: $options.onSwitchChange
                    }, null, 8, ["value", "disabled", "onChange"])) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true)
              ])
            ],
            6
            /* CLASS, STYLE */
          )
        ])
      ]),
      $props.showArrow || $props.link ? (openBlock(), createBlock(_component_uv_icon, {
        key: 1,
        size: "34rpx",
        class: "uv-icon-wrapper",
        color: "#bbb",
        name: "arrow-right"
      })) : createCommentVNode("v-if", true)
    ], 14, ["hoverClass"])
  ], 8, ["keepScrollPosition"]);
}
const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-list/components/uv-list-item/uv-list-item.vue"]]);
const _style_0$1 = { "uv-list": { "": { "position": "relative", "flexDirection": "column", "backgroundColor": "#ffffff" } }, "uv-list--border": { "": { "position": "relative", "borderTopColor": "#dadbde", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#dadbde", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
const _sfc_main$1 = {
  name: "uv-list",
  mixins: [mpMixin, mixin],
  "mp-weixin": {
    options: {
      multipleSlots: false
    }
  },
  props: {
    border: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "#dadbde"
    },
    // 排版方向，默认row，列表里面使用其他组件  最好设置成column
    direction: {
      type: String,
      default: "row"
    },
    // 内边距
    padding: {
      type: [String, Number],
      default: "20rpx 30rpx"
    }
  },
  created() {
    this.firstChildAppend = false;
  },
  computed: {
    parentData() {
      return [this.direction, this.padding];
    }
  },
  methods: {
    loadMore(e) {
      this.$emit("scrolltolower");
    },
    scroll(e) {
      this.$emit("scroll", e);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "list",
    {
      bounce: true,
      scrollable: true,
      showScrollbar: "",
      renderReverse: false,
      class: normalizeClass(["uv-list", { "uv-list--border": $props.border }]),
      style: normalizeStyle([
        { "border-top-color": $props.borderColor, "border-bottom-color": $props.borderColor },
        _ctx.$uv.addStyle(_ctx.customStyle)
      ]),
      enableBackToTop: false,
      loadmoreoffset: 15,
      onScroll: _cache[0] || (_cache[0] = (...args) => $options.scroll && $options.scroll(...args)),
      onLoadmore: _cache[1] || (_cache[1] = (...args) => $options.loadMore && $options.loadMore(...args))
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    38
    /* CLASS, STYLE, NEED_HYDRATION */
  );
}
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-list/components/uv-list/uv-list.vue"]]);
const videoJson = [
  {
    avatar: "https://p4-pro.a.yximgs.com/uhead/AB/2022/08/06/00/BMjAyMjA4MDYwMDI0MzNfMTgyMjkxNjk5XzFfaGQ1NzFfOTIw_s.jpg",
    author: "美食家",
    src: "https://imgs-qn.51miz.com/vcg/video/preview/51miz42N823378918.mp4",
    desc: "天太冷了，必须整个涂层火鸡。",
    playNum: 8726,
    likeNum: 4238,
    replyNum: 1846,
    starNum: 943,
    shareNum: 815,
    isLike: true,
    isFollow: false,
    danmu: [
      { text: "第 1s 出现的弹幕", color: "#ff5500", time: 1 },
      { text: "第 3s 出现的弹幕", color: "#5500ff", time: 3 }
    ]
  },
  {
    avatar: "https://p5-pro.a.yximgs.com/uhead/AB/2022/12/12/15/BMjAyMjEyMTIxNTAwNTlfMzE3MTgxMDE1Ml8yX2hkMzMxXzg3MA==_s.jpg",
    author: "And一路向前",
    src: "https://imgs-qn.51miz.com/vcg/video/preview/51miz42N1324777173.mp4",
    desc: "好看的晚霞 一定要分享给贼漂亮 贼温柔 贼特别的女孩子一起看啦",
    playNum: 4126,
    likeNum: 527,
    replyNum: 316,
    starNum: 384,
    shareNum: 297,
    isLike: false,
    isFollow: true,
    danmu: [
      { text: "这个好棒啊", color: "#a4ff4f", time: 1 },
      { text: "啊啊啊，真的好唯美", color: "#ff75ed", time: 3 }
    ]
  },
  {
    avatar: "https://p4-pro.a.yximgs.com/uhead/AB/2023/06/08/15/BMjAyMzA2MDgxNTMxNDZfMzUwMTUxMTk2MV8xX2hkNTZfNjU5_s.jpg",
    author: "董小姐",
    src: "http://alimov2.a.yximgs.com/bs2/gdtPostRoll/postRoll-MTA3MDY0NDY3Mzk.mp4",
    desc: "每一天都是好心情。",
    playNum: 5681,
    likeNum: 1354,
    replyNum: 628,
    starNum: 216,
    shareNum: 139,
    isLike: true,
    isFollow: true,
    danmu: [
      { text: "这个确实给力", color: "#ffff00", time: 1 },
      { text: "哎呀，豪车啊", color: "#55ffff", time: 3 }
    ]
  },
  {
    avatar: "https://p4-pro.a.yximgs.com/uhead/AB/2023/06/08/15/BMjAyMzA2MDgxNTMxNDZfMzUwMTUxMTk2MV8xX2hkNTZfNjU5_s.jpg",
    author: "董小姐",
    src: "https://imgs-qn.51miz.com/vcg/video/preview/51miz42N1363590192.mp4",
    desc: "可爱甜美的小姑凉，大家喜欢吗？",
    playNum: 8756,
    likeNum: 1237,
    replyNum: 529,
    starNum: 318,
    shareNum: 226,
    isLike: true,
    isFollow: true,
    danmu: [
      { text: "点赞一个", color: "#ffff00", time: 1 },
      { text: "哈哈哈，给我来一打。", color: "#55ffff", time: 3 }
    ]
  }
];
class Request {
  constructor() {
    __publicField(this, "config", {
      baseUrl: "",
      header: {
        "content-type": "application/json;charset=UTF-8"
      },
      method: "GET",
      dataType: "json",
      custom: {},
      sslVerify: true
    });
    /**
     * @property {Function} request 请求拦截器
     * @property {Function} response 响应拦截器
     * @type {{request: Request.interceptor.request, response: Request.interceptor.response}}
     */
    __publicField(this, "interceptor", {
      /**
         * @param {Request~requestCallback} cb - 请求之前拦截,接收一个函数（config, cancel）=> {return config}。第一个参数为全局config,第二个参数为函数，调用则取消本次请求。
         */
      request: (cb) => {
        if (cb) {
          this.requestBeforeFun = cb;
        }
      },
      /**
         * @param {Request~responseCallback} cb 响应拦截器，对响应数据做点什么
         * @param {Request~responseErrCallback} ecb 响应拦截器，对响应错误做点什么
         */
      response: (cb, ecb) => {
        if (cb && ecb) {
          this.requestComFun = cb;
          this.requestComFail = ecb;
        }
      }
    });
  }
  static posUrl(url) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
  }
  static addQueryString(params) {
    let paramsData = "";
    Object.keys(params).forEach(function(key) {
      paramsData += key + "=" + encodeURIComponent(params[key]) + "&";
    });
    return paramsData.substring(0, paramsData.length - 1);
  }
  requestBeforeFun(config) {
    return config;
  }
  requestComFun(response) {
    return response;
  }
  requestComFail(response) {
    return response;
  }
  /**
   * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
   * @param { Number } statusCode - 请求响应体statusCode（只读）
   * @return { Boolean } 如果为true,则 resolve, 否则 reject
   */
  validateStatus(statusCode) {
    return statusCode === 200;
  }
  /**
   * @Function
   * @param {Request~setConfigCallback} f - 设置全局默认配置
   */
  setConfig(f) {
    this.config = f(this.config);
  }
  /**
   * @Function
   * @param {Object} options - 请求配置项
   * @prop {String} options.url - 请求路径
   * @prop {Object} options.data - 请求参数
   * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
   * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
   * @prop {Object} [options.header = config.header] - 请求header
   * @prop {Object} [options.method = config.method] - 请求方法
   * @returns {Promise<unknown>}
   */
  async request(options = {}) {
    options.baseUrl = this.config.baseUrl;
    options.dataType = options.dataType || this.config.dataType;
    options.url = options.url || "";
    options.data = options.data || {};
    options.params = options.params || {};
    options.header = options.header || this.config.header;
    options.method = options.method || this.config.method;
    options.custom = { ...this.config.custom, ...options.custom || {} };
    options.sslVerify = options.sslVerify === void 0 ? this.config.sslVerify : options.sslVerify;
    return new Promise((resolve, reject) => {
      let next = true;
      let handleRe = {};
      options.complete = (response) => {
        response.config = handleRe;
        if (this.validateStatus(response.statusCode)) {
          response = this.requestComFun(response);
          resolve(response);
        } else {
          response = this.requestComFail(response);
          reject(response);
        }
      };
      const cancel = (t = "handle cancel", config = options) => {
        const err = {
          errMsg: t,
          config
        };
        reject(err);
        next = false;
      };
      handleRe = { ...this.requestBeforeFun(options, cancel) };
      const _config = { ...handleRe };
      if (!next)
        return;
      delete _config.custom;
      let mergeUrl = Request.posUrl(_config.url) ? _config.url : _config.baseUrl + _config.url;
      if (JSON.stringify(_config.params) !== "{}") {
        const paramsH = Request.addQueryString(_config.params);
        mergeUrl += mergeUrl.indexOf("?") === -1 ? `?${paramsH}` : `&${paramsH}`;
      }
      _config.url = mergeUrl;
      uni.request(_config);
    });
  }
  get(url, options = {}) {
    return this.request({
      url,
      method: "GET",
      ...options
    });
  }
  post(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: "POST",
      ...options
    });
  }
  put(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: "PUT",
      ...options
    });
  }
  delete(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: "DELETE",
      ...options
    });
  }
  connect(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: "CONNECT",
      ...options
    });
  }
  head(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: "HEAD",
      ...options
    });
  }
  options(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: "OPTIONS",
      ...options
    });
  }
  trace(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: "TRACE",
      ...options
    });
  }
  upload(url, {
    files,
    filePath,
    name,
    header,
    formData,
    custom
  }) {
    return new Promise((resolve, reject) => {
      let next = true;
      let handleRe = {};
      const globalHeader = { ...this.config.header };
      delete globalHeader["content-type"];
      const pubConfig = {
        baseUrl: this.config.baseUrl,
        url,
        files,
        filePath,
        method: "UPLOAD",
        name,
        header: header || globalHeader,
        formData,
        custom: { ...this.config.custom, ...custom || {} },
        complete: (response) => {
          response.config = handleRe;
          if (response.statusCode === 200) {
            response = this.requestComFun(response);
            resolve(response);
          } else {
            response = this.requestComFail(response);
            reject(response);
          }
        }
      };
      const cancel = (t = "handle cancel", config = pubConfig) => {
        const err = {
          errMsg: t,
          config
        };
        reject(err);
        next = false;
      };
      handleRe = { ...this.requestBeforeFun(pubConfig, cancel) };
      const _config = { ...handleRe };
      if (!next)
        return;
      delete _config.custom;
      _config.url = Request.posUrl(_config.url) ? _config.url : _config.baseUrl + _config.url;
      uni.uploadFile(_config);
    });
  }
}
const http = new Request();
const baseurl = "http://192.168.2.6:9100";
http.store = null;
http.setConfig((config) => {
  config.baseUrl = baseurl;
  config.header = {
    ...config.header
  };
  return config;
});
http.validateStatus = (statusCode) => {
  return statusCode === 200;
};
http.interceptor.request((config, cancel) => {
  const token = uni.getStorageSync("token");
  if (token && config.url !== "/login") {
    config.header = {
      Token: token,
      ...config.header
    };
  } else {
    config.header = {
      ...config.header
    };
  }
  return config;
});
http.interceptor.response(
  (response) => {
    const res = response;
    if (res.statusCode !== 200) {
      if (res.statusCode === 401)
        ;
      return Promise.reject(response);
    } else {
      return response.data;
    }
  },
  (response) => {
    formatAppLog("log", "at pages/api/requestUtil.js:86", "response error", response);
    return Promise.reject(response);
  }
);
function request(options = {}) {
  return http.request(options);
}
const getVideoList = () => {
  return request({
    method: "GET",
    url: "/api/thing/list?sort=recommend"
  });
};
const _imports_0 = "/static/avatar/uimg1.jpeg";
const _imports_2 = "/static/share-wx.png";
const _imports_3 = "/static/share-pyq.png";
const _imports_4 = "/static/share-tiktok.png";
const _imports_5 = "/static/share-qq.png";
const _style_0 = { "ua__swipervideo": { "": { "height": 100 } }, "ua__swipervideo-wrap": { "": { "height": 100 } }, "ua__swipervideo-player": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0 } }, "ua__swipervideo-playbtn": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)", "!alignItems": "center", "!justifyContent": "center", "marginLeft": "-50rpx", "marginTop": "-50rpx", "height": "100rpx", "width": "100rpx", "!position": "absolute", "pointerEvents": "none" } }, "ua__swipervideo-playico": { ".ua__swipervideo-playbtn ": { "color": "rgba(255,255,255,0.7)", "fontSize": "100rpx" } }, "ua__swipervideo-progress": { "": { "left": 0, "right": 0, "backgroundColor": "rgba(255,255,255,0.2)", "height": 1, "!position": "absolute", "bottom": "110rpx", "zIndex": 10 } }, "ua__swipervideo-progressbar": { ".ua__swipervideo-progress ": { "backgroundColor": "#ffffff", "height": 1, "width": 0, "transitionDuration": 200, "position": "relative", "content:after": '""', "backgroundColor:after": "#ffffff", "borderRadius:after": 50, "height:after": 4, "width:after": 4, "position:after": "absolute", "right:after": 0, "top:after": 50, "transform:after": "translateY(-50%)" } }, "uni-video-danmu": { "": { "!marginTop": 50, "!height": 150 } }, "ulive__video-header__tabs": { "": { "alignItems": "center", "justifyContent": "center", "position": "absolute", "top": 0, "left": 0, "right": 0, "zIndex": 1e3 } }, "ulive__video-float__info": { "": { "maxWidth": "750px", "!position": "absolute", "left": 0, "right": 0, "bottom": "150rpx" } }, "vdinfo__left": { ".ulive__video-float__info ": { "paddingTop": "20rpx", "paddingRight": "80rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "pointerEvents": "auto" } }, "ltrow": { ".vdinfo__left ": { "marginTop": "20rpx" } }, "danmu": { ".vdinfo__left ": { "alignItems": "center", "justifyContent": "center", "backgroundColor": "rgba(0,0,0,0.3)", "borderRadius": 50, "height": "60rpx", "width": "60rpx", "position": "relative" }, ".ulive__video-danmu__editor ": { "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f3f3f3", "borderRadius": 50, "height": "70rpx", "width": "70rpx", "position": "relative" } }, "danmu-txt": { ".vdinfo__left .danmu ": { "color": "#ffffff", "fontSize": "30rpx" }, ".ulive__video-danmu__editor .danmu ": { "color": "#777777", "fontSize": "30rpx" } }, "ico": { ".vdinfo__left .danmu ": { "position": "absolute", "right": 0, "bottom": 0 }, ".ulive__video-danmu__editor .danmu ": { "position": "absolute", "right": 0, "bottom": 0 } }, "ait": { ".vdinfo__left ": { "color": "#ffffff", "fontSize": "32rpx" } }, "desc": { ".vdinfo__left ": { "color": "#ffffff", "fontSize": "26rpx" } }, "vdinfo__right": { ".ulive__video-float__info ": { "alignItems": "center", "width": "120rpx", "pointerEvents": "auto" } }, "rtbtn": { ".vdinfo__right ": { "alignItems": "center", "textAlign": "center", "marginTop": "30rpx", "position": "relative" }, ".vdinfo__right .avatar": { "justifyContent": "center", "width": "90rpx" } }, "ubox": { ".vdinfo__right .rtbtn.avatar ": { "borderWidth": 2, "borderStyle": "solid", "borderColor": "#ffffff", "borderRadius": 50 } }, "uimg": { ".vdinfo__right .rtbtn.avatar ": { "borderRadius": 50, "height": "80rpx", "width": "80rpx", "objectFit": "cover" } }, "btn": { ".vdinfo__right .rtbtn.avatar ": { "alignItems": "center", "justifyContent": "center", "backgroundColor": "#ff007f", "borderRadius": 50, "marginTop": "-20rpx", "height": "40rpx", "width": "40rpx" }, ".vdinfo__right .rtbtn.avatar .active": { "backgroundColor": "#ffffff", "color": "#ff007f" } }, "icon": { ".vdinfo__right .rtbtn ": { "color": "#ffffff", "fontSize": "75rpx" } }, "num": { ".vdinfo__right .rtbtn ": { "color": "#ffffff", "fontSize": "24rpx" } }, "ulive__video-danmu__wrap": { "": { "maxWidth": "750px", "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "zIndex": 2023 } }, "ulive__video-danmu__mask": { "": { "backgroundColor": "rgba(0,0,0,0.4)", "position": "fixed", "top": 0, "left": 0, "right": 0, "bottom": 0, "animation": "animMask 0.5s" } }, "ulive__video-danmu__body": { "": { "backgroundColor": "rgba(0,0,0,0)", "position": "fixed", "left": 0, "right": 0, "bottom": 0 } }, "ulive__video-danmu__editor": { "": { "backgroundColor": "#ffffff", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__video-comment__wrap": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__video-comment__head": { "": { "paddingBottom": "20rpx" } }, "ulive__video-comment__item": { "": { "paddingTop": "20rpx", "paddingRight": "10rpx", "paddingBottom": "20rpx", "paddingLeft": "10rpx" } }, "avatar": { ".ulive__video-comment__item ": { "borderRadius": 100, "marginRight": "15rpx", "height": "60rpx", "width": "60rpx" } }, "replynum": { ".ulive__video-comment__item ": { "backgroundColor": "#f9f9f9", "borderRadius": "20rpx", "marginRight": "20rpx", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" } }, "ulive__video-comment__foot": { "": { "backgroundColor": "#f3f3f3", "borderRadius": "10rpx", "paddingTop": "10rpx", "paddingRight": "10rpx", "paddingBottom": "10rpx", "paddingLeft": "10rpx" } }, "ulive__video-share__list": { "": { "paddingTop": "25rpx", "paddingRight": "25rpx", "paddingBottom": "25rpx", "paddingLeft": "25rpx", "backgroundColor": "#f3f3f3", "borderTopLeftRadius": 10, "borderTopRightRadius": 10 } }, "ulive__video-share__item": { "": { "flex": 1, "alignItems": "center" } }, "ulive__video-share__bg": { "": { "backgroundColor": "#ffffff", "borderRadius": 50, "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "10rpx", "height": "90rpx", "width": "90rpx" } }, "ulive__video-share__img": { "": { "height": "60rpx", "width": "60rpx" } }, "ulive__video-share__cancel": { "": { "alignItems": "center", "justifyContent": "center", "paddingTop": "25rpx", "paddingRight": "25rpx", "paddingBottom": "25rpx", "paddingLeft": "25rpx" } }, "@FONT-FACE": [{}], "@TRANSITION": { "ua__swipervideo-progressbar": { "duration": 200 } } };
const _sfc_main = {
  __name: "index",
  setup(__props, { expose: __expose }) {
    var _a2;
    __expose();
    const { globalData } = getApp();
    const menuBarT = ref(((_a2 = globalData.menu) == null ? void 0 : _a2.top) || globalData.statusBarH);
    const winWidth = ref(globalData.screenWidth);
    const winHeight = ref(globalData.screenHeight);
    const tabsList = ref([
      { name: "推荐", count: 5 },
      { name: "关注" },
      { name: "同城" }
    ]);
    const tabsCurrent = ref(0);
    const currentVideo = ref(0);
    const isPlaying = ref(false);
    const clickNum = ref(0);
    const clickTimer = ref(null);
    const progressBar = ref(0);
    const videoList = ref([]);
    const danmuEditor = ref("");
    const isVisibleDanmu = ref(false);
    const commentRef = ref(null);
    const shareRef = ref(null);
    const keyboardHeight = ref(0);
    const fixKeyboardHeight = computed(() => {
      let keyboardH = keyboardHeight.value > 0 ? keyboardHeight.value + 56 : keyboardHeight.value;
      return keyboardH ? keyboardH + "px" : null;
    });
    uni.onKeyboardHeightChange((e) => {
      keyboardHeight.value = e.height;
      if (e.height <= 0) {
        handleCloseDanmu();
      }
    });
    const getVideoContext = () => {
      return uni.createVideoContext(`uplayer${currentVideo.value}`, getCurrentInstance());
    };
    print(item);
    const transformVideoData = (apiData) => {
      return apiData.map((item2) => {
        return {
          avatar: item2.cover,
          author: "系统",
          src: "http://192.168.2.6:9100/api/staticfiles/raw/" + item2.raw,
          desc: item2.description,
          playNum: item2.wishCount,
          likeNum: item2.wishCount,
          replyNum: item2.recommendCount,
          starNum: item2.score,
          shareNum: item2.pv,
          isLike: true,
          isFollow: true,
          danmu: [
            { text: "第 1s 出现的弹幕", color: "#ff5500", time: 1 },
            { text: "第 3s 出现的弹幕", color: "#5500ff", time: 3 }
          ]
        };
      });
    };
    const fetchVideoData = async () => {
      try {
        const res = await getVideoList();
        if (res.code === 200 && res.data) {
          const transformedData = transformVideoData(res.data);
          videoList.value = transformedData;
          if (videoList.value.length > 0) {
            handlePlay();
          }
        } else {
          formatAppLog("error", "at pages/video/index.nvue:92", "获取视频列表失败:", res.message);
        }
      } catch (err) {
        formatAppLog("error", "at pages/video/index.nvue:95", "网络错误:", err);
      }
    };
    onShow(() => {
      if (videoList.value.length === 0) {
        fetchVideoData();
      } else {
        handlePlay();
      }
    });
    const handleChange = (e) => {
      const index2 = e.detail.current;
      progressBar.value = 0;
      handleReset();
      currentVideo.value = index2;
      handlePlay();
    };
    const handleTransition = (e) => {
    };
    const handlePlay = () => {
      let video = getVideoContext();
      if (!video)
        return;
      video.play();
      isPlaying.value = true;
    };
    const handlePause = () => {
      let video = getVideoContext();
      if (!video)
        return;
      video.pause();
      isPlaying.value = false;
    };
    const handleReset = () => {
      let video = getVideoContext();
      if (!video)
        return;
      video.pause();
      video.seek(0);
      video.stop();
      isPlaying.value = false;
    };
    const handleTimeUpdate = (e) => {
      let { currentTime, duration } = e.detail;
      progressBar.value = parseInt((currentTime / duration).toFixed(2) * parseInt(winWidth.value));
    };
    const handleClickVideo = () => {
      clearTimeout(clickTimer.value);
      clickNum.value++;
      clickTimer.value = setTimeout(() => {
        if (clickNum.value >= 2) {
          formatAppLog("log", "at pages/video/index.nvue:155", "double click");
        } else {
          if (isPlaying.value) {
            handlePause();
          } else {
            handlePlay();
          }
        }
        clickNum.value = 0;
      }, 200);
    };
    onShow(() => {
      handlePlay();
    });
    onHide(() => {
      handleReset();
    });
    const handleOpenDanmu = () => {
      isVisibleDanmu.value = true;
    };
    const handleCloseDanmu = () => {
      uni.hideKeyboard();
      isVisibleDanmu.value = false;
      danmuEditor.value = "";
    };
    const handleSendDanmu = () => {
      let video = getVideoContext();
      if (!video)
        return;
      video.sendDanmu({
        text: danmuEditor.value,
        color: getRandomColor()
      });
      handleCloseDanmu();
    };
    const handleFollow = (index2) => {
      videoList.value[index2].isFollow = !videoList.value[index2].isFollow;
    };
    const handleLiked = (index2) => {
      videoList.value[index2].isLike = !videoList.value[index2].isLike;
    };
    const handleOpenComment = (index2) => {
      commentRef.value.open();
    };
    const handleCloseComment = (index2) => {
      commentRef.value.close();
    };
    const handleOpenShare = (index2) => {
      shareRef.value.open();
    };
    const handleCloseShare = (index2) => {
      shareRef.value.close();
    };
    const __returned__ = { globalData, menuBarT, winWidth, winHeight, tabsList, tabsCurrent, currentVideo, isPlaying, clickNum, clickTimer, progressBar, videoList, danmuEditor, isVisibleDanmu, commentRef, shareRef, keyboardHeight, fixKeyboardHeight, getVideoContext, transformVideoData, fetchVideoData, handleChange, handleTransition, handlePlay, handlePause, handleReset, handleTimeUpdate, handleClickVideo, handleOpenDanmu, handleCloseDanmu, handleSendDanmu, handleFollow, handleLiked, handleOpenComment, handleCloseComment, handleOpenShare, handleCloseShare, ref, computed, getCurrentInstance, get onShow() {
      return onShow;
    }, get onHide() {
      return onHide;
    }, get getRandomColor() {
      return getRandomColor;
    }, get videoJson() {
      return videoJson;
    }, get getVideoList() {
      return getVideoList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uv_icon = resolveEasycom(resolveDynamicComponent("uv-icon"), __easycom_0$1);
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_uv_tabs = resolveEasycom(resolveDynamicComponent("uv-tabs"), __easycom_6$1);
  const _component_ua_tabbar = resolveEasycom(resolveDynamicComponent("ua-tabbar"), __easycom_2$1);
  const _component_ua_layout = resolveEasycom(resolveDynamicComponent("ua-layout"), __easycom_1$1);
  const _component_uv_input = resolveEasycom(resolveDynamicComponent("uv-input"), __easycom_2$2);
  const _component_uv_button = resolveEasycom(resolveDynamicComponent("uv-button"), __easycom_3);
  const _component_rich_text = resolveComponent("rich-text");
  const _component_uv_list_item = resolveEasycom(resolveDynamicComponent("uv-list-item"), __easycom_6);
  const _component_uv_list = resolveEasycom(resolveDynamicComponent("uv-list"), __easycom_7);
  const _component_uv_popup = resolveEasycom(resolveDynamicComponent("uv-popup"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createVNode(_component_ua_layout, { tabbar: false }, {
      footer: withCtx(() => [
        createVNode(_component_ua_tabbar, {
          bgcolor: "transparent",
          color: "rgba(255,255,255,.7)",
          border: false,
          dock: false,
          transparent: "",
          "z-index": "1000"
        })
      ]),
      default: withCtx(() => [
        createElementVNode("view", { class: "ua__swipervideo flex1" }, [
          createVNode(_component_swiper, {
            class: "ua__swipervideo-wrap flex1",
            current: $setup.currentVideo,
            vertical: "",
            circular: true,
            duration: 200,
            onChange: $setup.handleChange,
            onTransition: $setup.handleTransition
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.videoList, (item2, index2) => {
                  return openBlock(), createBlock(
                    _component_swiper_item,
                    { key: index2 },
                    {
                      default: withCtx(() => [
                        createElementVNode("u-video", {
                          class: "ua__swipervideo-player flex1",
                          id: "uplayer" + index2,
                          src: item2.src,
                          danmuList: item2.danmu,
                          enableDanmu: true,
                          controls: false,
                          loop: true,
                          autoplay: index2 == $setup.currentVideo,
                          showCenterPlayBtn: false,
                          objectFit: "contain",
                          onClick: $setup.handleClickVideo,
                          onPlay: _cache[0] || (_cache[0] = ($event) => $setup.isPlaying = true),
                          onTimeupdate: $setup.handleTimeUpdate,
                          style: normalizeStyle({ "width": `${$setup.winWidth}px`, "height": `${$setup.winHeight}px` })
                        }, null, 44, ["id", "src", "danmuList", "autoplay"]),
                        createElementVNode("view", { class: "ulive__video-float__info flexbox flex-col" }, [
                          createElementVNode("view", { class: "flexbox flex-row flex-alignb" }, [
                            createElementVNode("view", { class: "vdinfo__left flex1 flexbox flex-col" }, [
                              createElementVNode("view", {
                                class: "ltrow danmu flexbox",
                                onClick: $setup.handleOpenDanmu
                              }, [
                                createElementVNode("u-text", { class: "danmu-txt" }, "弹"),
                                createVNode(_component_uv_icon, {
                                  class: "ico",
                                  name: "edit-pen",
                                  color: "#fff",
                                  size: "14"
                                })
                              ]),
                              createElementVNode("view", { class: "ltrow" }, [
                                createElementVNode(
                                  "u-text",
                                  { class: "ait" },
                                  "@" + toDisplayString(item2.author),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              createElementVNode("view", { class: "ltrow" }, [
                                createElementVNode(
                                  "u-text",
                                  { class: "desc" },
                                  toDisplayString(item2.desc),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ]),
                            createElementVNode("view", { class: "vdinfo__right flexbox flex-col" }, [
                              createElementVNode("view", { class: "rtbtn avatar flexbox flex-col" }, [
                                createElementVNode("view", { class: "ubox" }, [
                                  createElementVNode("u-image", {
                                    class: "uimg",
                                    src: item2.avatar,
                                    mode: "aspectFill"
                                  }, null, 8, ["src"])
                                ]),
                                createElementVNode("view", {
                                  class: normalizeClass(["btn flexbox", { "active": item2.isFollow }]),
                                  onClick: ($event) => $setup.handleFollow(index2)
                                }, [
                                  createVNode(_component_uv_icon, {
                                    name: item2.isFollow ? "checkmark" : "plus",
                                    color: item2.isFollow ? "#ff007f" : "#fff",
                                    size: "11"
                                  }, null, 8, ["name", "color"])
                                ], 10, ["onClick"])
                              ]),
                              createElementVNode("view", {
                                class: "rtbtn flexbox flex-col",
                                onClick: ($event) => $setup.handleLiked(index2)
                              }, [
                                createVNode(_component_uv_icon, {
                                  name: "heart-fill",
                                  color: item2.isLike ? "#ff007f" : "#fff",
                                  size: "40"
                                }, null, 8, ["color"]),
                                createElementVNode(
                                  "u-text",
                                  { class: "num" },
                                  toDisplayString(item2.likeNum + (item2.isLike ? 1 : 0)),
                                  1
                                  /* TEXT */
                                )
                              ], 8, ["onClick"]),
                              createElementVNode("view", {
                                class: "rtbtn flexbox flex-col",
                                onClick: ($event) => $setup.handleOpenComment(index2)
                              }, [
                                createVNode(_component_uv_icon, {
                                  name: "chat-fill",
                                  color: "#fff",
                                  size: "40"
                                }),
                                createElementVNode(
                                  "u-text",
                                  { class: "num" },
                                  toDisplayString(item2.replyNum),
                                  1
                                  /* TEXT */
                                )
                              ], 8, ["onClick"]),
                              createElementVNode("view", { class: "rtbtn flexbox flex-col" }, [
                                createVNode(_component_uv_icon, {
                                  name: "star-fill",
                                  color: "#fff",
                                  size: "40"
                                }),
                                createElementVNode(
                                  "u-text",
                                  { class: "num" },
                                  toDisplayString(item2.starNum),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              createElementVNode("view", {
                                class: "rtbtn flexbox flex-col",
                                onClick: ($event) => $setup.handleOpenShare(index2)
                              }, [
                                createVNode(_component_uv_icon, {
                                  name: "share-fill",
                                  color: "#fff",
                                  size: "40"
                                }),
                                createElementVNode(
                                  "u-text",
                                  { class: "num" },
                                  toDisplayString(item2.shareNum),
                                  1
                                  /* TEXT */
                                )
                              ], 8, ["onClick"])
                            ])
                          ])
                        ])
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
          }, 8, ["current"]),
          createElementVNode(
            "view",
            {
              class: "ulive__video-header__tabs",
              style: normalizeStyle({ "margin-top": `${$setup.menuBarT}px` })
            },
            [
              createVNode(_component_uv_tabs, {
                current: $setup.tabsCurrent,
                list: $setup.tabsList,
                "bg-color": "transparent",
                inactiveStyle: { color: "rgba(255,255,255,.7)", "font-size": "32rpx" },
                activeStyle: { color: "#fff", "font-size": "32rpx" }
              }, null, 8, ["current", "list", "inactiveStyle"])
            ],
            4
            /* STYLE */
          ),
          !$setup.isPlaying ? (openBlock(), createElementBlock(
            "view",
            {
              key: 0,
              class: "ua__swipervideo-playbtn",
              style: normalizeStyle({ "left": `${$setup.winWidth / 2}px`, "top": `${$setup.winHeight / 2}px` }),
              onClick: $setup.handleClickVideo
            },
            [
              createElementVNode("u-text", { class: "ua__swipervideo-playico welive-icon welive-icon-play nvueicon" }, "  ")
            ],
            4
            /* STYLE */
          )) : createCommentVNode("v-if", true),
          createElementVNode(
            "view",
            {
              class: "ua__swipervideo-progress",
              style: normalizeStyle({ "width": `${$setup.winWidth}px` })
            },
            [
              createElementVNode(
                "view",
                {
                  class: "ua__swipervideo-progressbar",
                  style: normalizeStyle({ "width": `${$setup.progressBar}px` })
                },
                null,
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ])
      ]),
      _: 1
      /* STABLE */
    }),
    $setup.isVisibleDanmu ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "ulive__video-danmu__wrap"
    }, [
      createElementVNode("view", {
        class: "ulive__video-danmu__mask",
        onClick: $setup.handleCloseDanmu
      }),
      createElementVNode(
        "view",
        {
          class: "ulive__video-danmu__body",
          style: normalizeStyle({ "height": $setup.fixKeyboardHeight })
        },
        [
          createElementVNode("view", { class: "ulive__video-danmu__editor flexbox flex-row flex-alignc" }, [
            createElementVNode("view", { class: "danmu flexbox" }, [
              createElementVNode("u-text", { class: "danmu-txt" }, "弹"),
              createVNode(_component_uv_icon, {
                class: "ico",
                name: "checkbox-mark",
                color: "#2979ff",
                size: "14"
              })
            ]),
            createVNode(_component_uv_input, {
              modelValue: $setup.danmuEditor,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.danmuEditor = $event),
              shape: "circle",
              focus: "",
              adjustPosition: false,
              placeholder: "发一条友好的弹幕吧",
              customStyle: { background: "#f3f3f3", border: "none", margin: "0 20rpx" }
            }, {
              suffix: withCtx(() => [
                createVNode(_component_uv_icon, {
                  name: "/static/emoj.png",
                  color: "#777",
                  size: "20"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            createVNode(_component_uv_button, {
              text: "发送",
              type: "primary",
              shape: "circle",
              customStyle: { padding: "0 20rpx", height: "70rpx" },
              onClick: $setup.handleSendDanmu
            })
          ]),
          createElementVNode("view", { class: "ulive__video-danmu__emojs" })
        ],
        4
        /* STYLE */
      )
    ])) : createCommentVNode("v-if", true),
    createVNode(
      _component_uv_popup,
      {
        ref: "commentRef",
        mode: "bottom",
        round: "10",
        zIndex: "2023"
      },
      {
        default: withCtx(() => [
          createElementVNode("view", {
            class: "ulive__video-comment__wrap flexbox flex-col",
            style: { "height": "1000rpx" }
          }, [
            createElementVNode("view", { class: "ulive__video-comment__head flexbox flex-row" }, [
              createVNode(_component_uv_icon, {
                name: "close",
                onClick: $setup.handleCloseComment
              }),
              createElementVNode("view", { class: "ml-20" }, [
                createElementVNode("u-text", { class: "fs-32" }, "评论 7643")
              ])
            ]),
            createElementVNode("scroll-view", {
              class: "flex1",
              scrollY: "",
              style: { "height": "800rpx" }
            }, [
              createVNode(_component_uv_list, null, {
                default: withCtx(() => [
                  createVNode(_component_uv_list_item, null, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "ulive__video-comment__item flexbox flex-row" }, [
                        createElementVNode("u-image", {
                          class: "avatar",
                          src: _imports_0
                        }),
                        createElementVNode("view", { class: "flex1 flexbox flex-col" }, [
                          createElementVNode("view", { class: "flexbox flex-row flex-alignc mb-10" }, [
                            createElementVNode("u-text", { class: "flex1 fs-24" }, "第三视角"),
                            createElementVNode("view", { class: "flexbox flex-row mr-30" }, [
                              createVNode(_component_uv_icon, { name: "thumb-up" }),
                              createElementVNode("u-text", { class: "fs-24" }, "348")
                            ]),
                            createVNode(_component_uv_icon, { name: "thumb-down" })
                          ]),
                          createVNode(_component_rich_text, {
                            class: "fs-30",
                            nodes: "解放立刻洒家方式JFK拉萨解放jkljkljklfjds534534空间链接发上课了432432j尽快立法"
                          }),
                          createElementVNode("view", { class: "flexbox flex-row flex-alignc mt-10" }, [
                            createElementVNode("view", { class: "replynum flexbox flex-row" }, [
                              createElementVNode("u-text", { class: "fs-24" }, "21回复"),
                              createVNode(_component_uv_icon, {
                                name: "arrow-right",
                                size: "12"
                              })
                            ]),
                            createElementVNode("u-text", { class: "c-999 fs-24" }, "12-5 · 浙江")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_uv_list_item, null, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "ulive__video-comment__item flexbox flex-row" }, [
                        createElementVNode("u-image", {
                          class: "avatar",
                          src: _imports_5$1
                        }),
                        createElementVNode("view", { class: "flex1 flexbox flex-col" }, [
                          createElementVNode("view", { class: "flexbox flex-row flex-alignc mb-10" }, [
                            createElementVNode("u-text", { class: "flex1 fs-24" }, "盗梦空间"),
                            createElementVNode("view", { class: "flexbox flex-row mr-30" }, [
                              createVNode(_component_uv_icon, { name: "thumb-up" }),
                              createElementVNode("u-text", { class: "fs-24" }, "26")
                            ]),
                            createVNode(_component_uv_icon, { name: "thumb-down" })
                          ]),
                          createVNode(_component_rich_text, {
                            class: "fs-30",
                            nodes: "非洛伊德关于梦的解析"
                          }),
                          createElementVNode("view", { class: "flexbox flex-row flex-alignc mt-10" }, [
                            createElementVNode("view", { class: "replynum flexbox flex-row" }, [
                              createElementVNode("u-text", { class: "fs-24" }, "回复"),
                              createVNode(_component_uv_icon, {
                                name: "arrow-right",
                                size: "12"
                              })
                            ]),
                            createElementVNode("u-text", { class: "c-999 fs-24" }, "12-5 · 浙江")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            createElementVNode("view", { class: "ulive__video-comment__foot flexbox flex-row" }, [
              createElementVNode("view", { class: "flex1 flexbox flex-row flex-alignc" }, [
                createVNode(_component_uv_icon, {
                  name: "edit-pen-fill",
                  size: "12"
                }),
                createElementVNode("u-text", { class: "fs-28 ml-10" }, "美好的一天从评论开始")
              ]),
              createVNode(_component_uv_icon, {
                name: "photo",
                color: "#777",
                size: "24"
              }),
              createVNode(_component_uv_icon, {
                name: "/static/emoj.png",
                color: "#777",
                size: "20",
                style: { "margin-left": "20rpx" }
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      },
      512
      /* NEED_PATCH */
    ),
    createVNode(
      _component_uv_popup,
      {
        ref: "shareRef",
        mode: "bottom",
        round: "10",
        zIndex: "2023"
      },
      {
        default: withCtx(() => [
          createElementVNode("view", { class: "ulive__video-share__wrap" }, [
            createElementVNode("view", { class: "ulive__video-share__list flexbox flex-row" }, [
              createElementVNode("view", { class: "ulive__video-share__item flexbox flex-col" }, [
                createElementVNode("view", { class: "ulive__video-share__bg" }, [
                  createElementVNode("u-image", {
                    class: "ulive__video-share__img",
                    src: _imports_2
                  })
                ]),
                createElementVNode("u-text", { class: "fs-24" }, "微信")
              ]),
              createElementVNode("view", { class: "ulive__video-share__item flexbox flex-col" }, [
                createElementVNode("view", { class: "ulive__video-share__bg" }, [
                  createElementVNode("u-image", {
                    class: "ulive__video-share__img",
                    src: _imports_3
                  })
                ]),
                createElementVNode("u-text", { class: "fs-24" }, "朋友圈")
              ]),
              createElementVNode("view", { class: "ulive__video-share__item flexbox flex-col" }, [
                createElementVNode("view", { class: "ulive__video-share__bg" }, [
                  createElementVNode("u-image", {
                    class: "ulive__video-share__img",
                    src: _imports_4
                  })
                ]),
                createElementVNode("u-text", { class: "fs-24" }, "抖音好友")
              ]),
              createElementVNode("view", { class: "ulive__video-share__item flexbox flex-col" }, [
                createElementVNode("view", { class: "ulive__video-share__bg" }, [
                  createElementVNode("u-image", {
                    class: "ulive__video-share__img",
                    src: _imports_5
                  })
                ]),
                createElementVNode("u-text", { class: "fs-24" }, "QQ")
              ])
            ]),
            createElementVNode("view", {
              class: "ulive__video-share__cancel",
              onClick: $setup.handleCloseShare
            }, [
              createElementVNode("u-text", null, "取消")
            ])
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/video/index.nvue"]]);
export {
  index as default
};
