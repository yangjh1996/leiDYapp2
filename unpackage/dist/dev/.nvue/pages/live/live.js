var _a, _b;
import { q as requireNativePlugin, _ as _export_sfc, m as mpMixin, a as mixin, s as onLoad, f as formatAppLog, o as onShow, e as onHide, t as isEmpty, r as resolveEasycom, g as _imports_5, c as __easycom_0, k as __easycom_1, l as __easycom_2, n as __easycom_3, p as __easycom_4, i as __easycom_6 } from "../../uimg3.js";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, toDisplayString, createCommentVNode, onMounted, ref, computed, watch, nextTick, resolveComponent, resolveDynamicComponent, createVNode, withCtx, Fragment, renderList, createBlock, normalizeClass, withModifiers, createTextVNode, getCurrentInstance } from "vue";
const props = {
  props: {
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
    },
    ...(_b = (_a = uni.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.lineProgress
  }
};
const _style_0$1 = { "uv-line-progress": { "": { "alignItems": "stretch", "position": "relative", "flexDirection": "row", "flex": 1, "overflow": "hidden", "borderRadius": 100 } }, "uv-line-progress__background": { "": { "backgroundColor": "#ececec", "borderRadius": 100, "flex": 1 } }, "uv-line-progress__line": { "": { "position": "absolute", "top": 0, "left": 0, "bottom": 0, "alignItems": "center", "flexDirection": "row", "color": "#ffffff", "borderRadius": 100, "transitionProperty": "width", "transitionDuration": 500, "transitionTimingFunction": "ease", "justifyContent": "flex-end" } }, "uv-line-progress__text": { "": { "fontSize": 10, "alignItems": "center", "textAlign": "right", "color": "#FFFFFF", "marginRight": 5, "transform": "scale(0.9)" } }, "@TRANSITION": { "uv-line-progress__line": { "property": "width", "duration": 500, "timingFunction": "ease" } } };
const dom = requireNativePlugin("dom");
const _sfc_main$1 = {
  name: "uv-line-progress",
  mixins: [mpMixin, mixin, props],
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
        dom.getComponentRect(this.$refs["uv-line-progress__background"], (res) => {
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "uv-line-progress",
      style: normalizeStyle([_ctx.$uv.addStyle(_ctx.customStyle)]),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: "uv-line-progress__background",
          ref: "uv-line-progress__background",
          style: normalizeStyle([{
            backgroundColor: _ctx.inactiveColor,
            height: _ctx.$uv.addUnit(_ctx.$uv.getPx(_ctx.height))
          }])
        },
        null,
        4
        /* STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: "uv-line-progress__line",
          style: normalizeStyle([$options.progressStyle])
        },
        [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.showText && _ctx.percentage >= 10 ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 0,
                class: "uv-line-progress__text"
              },
              toDisplayString($options.innserPercentage + "%"),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
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
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/curry/Desktop/uni-weLive/uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.vue"]]);
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
const giftJson = [
  { title: "小心心", pic: "/static/gift/gift1.png", coins: 10 },
  { title: "棒棒糖", pic: "/static/gift/gift2.png", coins: 399 },
  { title: "大啤酒", pic: "/static/gift/gift3.png", coins: 69 },
  { title: "人气票", pic: "/static/gift/gift4.png", coins: 99 },
  { title: "鲜花", pic: "/static/gift/gift5.png", coins: 520 },
  { title: "捏捏小脸", pic: "/static/gift/gift6.png", coins: 99 },
  { title: "你真好看", pic: "/static/gift/gift7.png", coins: 39 },
  { title: "亲吻", pic: "/static/gift/gift8.png", coins: 79 },
  { title: "加油鸭", pic: "/static/gift/gift9.png", coins: 19 },
  { title: "保时捷", pic: "/static/gift/gift10.png", coins: 9 },
  { title: "热气球", pic: "/static/gift/gift11.png", coins: 29 },
  { title: "玫瑰", pic: "/static/gift/gift12.png", coins: 666 },
  { title: "比心", pic: "/static/gift/gift13.png", coins: 29 },
  { title: "浪漫烟花", pic: "/static/gift/gift14.png", coins: 399 },
  { title: "真的爱你", pic: "/static/gift/gift15.png", coins: 219 },
  { title: "私人飞机", pic: "/static/gift/gift16.png", coins: 168 },
  { title: "豪华邮轮", pic: "/static/gift/gift17.png", coins: 39 },
  { title: "嘉年华", pic: "/static/gift/gift18.png", coins: 999 },
  { title: "情定三生", pic: "/static/gift/gift19.png", coins: 1314 },
  { title: "摩天大厦", pic: "/static/gift/gift20.png", coins: 2999 }
];
const _imports_0 = "/static/icon-fudai.png";
const _imports_1 = "/static/icon-hb.png";
const _imports_2 = "/static/icon-rotate.png";
const _imports_3 = "/static/icon-hot.png";
const _imports_4 = "/static/redpacket.png";
const _imports_6 = "/static/redpacket-over.png";
const _imports_7 = "/static/avatar/uimg7.jpeg";
const _style_0 = { "ua__swipervideo": { "": { "height": 100 } }, "ua__swipervideo-wrap": { "": { "height": 100 } }, "ua__swipervideo-player": { "": { "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0 } }, "ulive__swiperscreen": { "": { "height": 100 } }, "ulive__headlayer": { "": { "maxWidth": "750px", "!position": "absolute", "left": 0, "right": 0, "top": 0 } }, "ulive__mask": { "": { "backgroundColor": "rgba(0,0,0,0.3)", "borderRadius": "50rpx", "alignItems": "center", "flexDirection": "row", "maxWidth": "fit-content" } }, "ulive__roundwrap": { "": { "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" } }, "ulive__roundtext": { "": { "color": "#ffffff", "fontSize": "24rpx" } }, "ulive__hd-liveinfo": { "": { "paddingTop": "15rpx", "paddingRight": "20rpx", "paddingBottom": "15rpx", "paddingLeft": "20rpx" } }, "ulive__hd-avatar": { ".ulive__hd-liveinfo ": { "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx" } }, "logo": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "borderRadius": 50, "height": "60rpx", "width": "60rpx" }, ".ulive__popup-redpacket__wrap .redpacket-infos ": { "borderRadius": "10rpx", "height": "90rpx", "width": "90rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-head ": { "borderRadius": 50, "height": "80rpx", "width": "80rpx" } }, "name": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "color": "#ffffff", "fontSize": "24rpx" }, ".ulive__ft-livewrap-activegift ": { "color": "#ffffff", "fontSize": "28rpx" }, ".ulive__popup-redpacket__wrap .redpacket-infos ": { "color": "#f7e1ad", "fontSize": "28rpx", "marginTop": "20rpx" } }, "zan": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "color": "rgba(255,255,255,0.7)", "fontSize": "20rpx" } }, "btn": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "backgroundColor": "#ff007f", "borderRadius": "50rpx", "marginLeft": "10rpx", "paddingTop": 0, "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "height": "60rpx" }, ".ulive__hd-liveinfo .ulive__hd-avatar .active": { "backgroundColor": "#ffffff" }, ".ulive__ft-livewrap-hotbuy ": { "backgroundColor": "#ffffff", "borderRadius": "30rpx", "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "backgroundColor": "#ff007f", "borderRadius": "10rpx", "alignItems": "center", "paddingTop": 0, "paddingRight": "10rpx", "paddingBottom": 0, "paddingLeft": "10rpx", "height": "50rpx" }, ".ulive__ft-livewrap-toolbar .btnwrap ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderRadius": 50, "alignItems": "center", "justifyContent": "center", "marginLeft": "20rpx", "height": "70rpx", "width": "70rpx", "position": "relative" }, ".ulive__popup-menus__wrap .withdraw ": { "borderRadius": "50rpx", "fontSize": "24rpx", "marginLeft": "20rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-head ": { "alignItems": "center", "marginLeft": "20rpx" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-head .infowrap ": { "backgroundColor": "#333a48", "borderRadius": "5rpx", "marginLeft": "20rpx", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" } }, "btntext": { ".ulive__hd-liveinfo .ulive__hd-avatar ": { "color": "#ffffff", "fontSize": "28rpx" }, ".ulive__hd-liveinfo .ulive__hd-avatar .active": { "color": "#ff007f" }, ".ulive__ft-livewrap-hotbuy .btn ": { "color": "#cd910a", "fontSize": "28rpx" } }, "ulive__hd-onlineuser": { ".ulive__hd-liveinfo ": { "alignItems": "flex-end", "justifyContent": "center" } }, "ulive__hd-livewrap__left": { ".ulive__hd-livewrap ": { "marginLeft": "20rpx" } }, "ulive__hd-livewrap__right": { ".ulive__hd-livewrap ": { "alignItems": "flex-end" } }, "ulive__hd-livewrap__redpacket": { ".ulive__hd-livewrap ": { "marginTop": "15rpx" } }, "ulive__redpacket-item": { ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket ": { "alignItems": "flex-end", "justifyContent": "center", "borderRadius": "20rpx", "marginRight": "10rpx", "height": "76rpx", "width": "76rpx", "position": "relative" }, ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket .center": { "alignItems": "center" } }, "ulive__redpacket-image": { ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket ": { "width": "76rpx" } }, "ulive__redpacket-time": { ".ulive__hd-livewrap .ulive__hd-livewrap__redpacket ": { "backgroundColor": "rgba(0,0,0,0.5)", "borderRadius": "20rpx", "color": "#ffffff", "fontSize": "24rpx", "position": "absolute", "bottom": 0 } }, "ulive__footlayer": { "": { "maxWidth": "750px", "!position": "absolute", "left": 0, "right": 0, "bottom": 0 } }, "ulive__ft-livewrap-placeholder": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "alignItems": "center", "flexDirection": "row", "maxWidth": "fit-content" } }, "ulive__ft-livewrap-hotbuy": { "": { "backgroundImage": "linear-gradient(to right, rgba(205, 145, 10, 0.7) 20%, transparent)", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(255,255,255,0.5)", "borderRadius": "20rpx", "alignItems": "center", "maxWidth": "fit-content" } }, "gimg": { ".ulive__ft-livewrap-hotbuy ": { "borderRadius": "20rpx", "marginRight": "10rpx", "height": "100rpx", "width": "100rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "height": "200rpx", "width": "200rpx" } }, "ginfo": { ".ulive__ft-livewrap-hotbuy ": { "color": "#ffffff", "maxWidth": "375rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item ": { "marginLeft": "20rpx" } }, "gdesc": { ".ulive__ft-livewrap-hotbuy ": { "color": "#ffffff", "fontSize": "24rpx" } }, "ulive__ft-livewrap-animateview": { "": { "minHeight": "180rpx" } }, "ulive__ft-livewrap-animatejoin": { "": { "minHeight": "80rpx" } }, "ulive__ft-livewrap-animategift": { "": { "minHeight": "100rpx" } }, "ulive__ft-livewrap-joinroom": { "": { "backgroundImage": "linear-gradient(to right, #ab29fd, transparent)", "borderRadius": "30rpx", "maxWidth": "fit-content", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx", "minWidth": "500rpx", "animation": "ulive__animSlideInRight 2s" } }, "ulive__ft-livewrap-joinroom__text": { ".ulive__ft-livewrap-joinroom ": { "color": "#ffffff", "fontSize": "28rpx" } }, "ulive__ft-livewrap-activegift": { "": { "backgroundImage": "linear-gradient(to right, #ff63b1, transparent)", "borderRadius": "50rpx", "maxWidth": "fit-content", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx", "position": "relative", "animation": "ulive__animSlideInLeft 0.3s" } }, "avatar": { ".ulive__ft-livewrap-activegift ": { "borderRadius": 50, "height": "60rpx", "width": "60rpx" } }, "info": { ".ulive__ft-livewrap-activegift ": { "paddingTop": 0, "paddingRight": "90rpx", "paddingBottom": 0, "paddingLeft": "20rpx" } }, "desc": { ".ulive__ft-livewrap-activegift ": { "color": "#ffffff", "fontSize": "24rpx" }, ".ulive__popup-redpacket__wrap .redpacket-infos ": { "color": "#f7e1ad", "fontSize": "36rpx", "marginTop": "20rpx" } }, "gift": { ".ulive__ft-livewrap-activegift ": { "height": "50rpx", "width": "50rpx", "position": "absolute", "top": "10rpx", "right": "20rpx", "transform": "scale(1.5)" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "display": "flex", "alignItems": "flex-start", "marginBottom": "10rpx" } }, "ulive__ft-livewrap-mixinview": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "alignItems": "flex-end" } }, "ulive__ft-livewrap-chats": { ".ulive__ft-livewrap-mixinview ": { "height": "400rpx", "maxWidth": "600rpx", "pointerEvents": "auto", "position": "relative" } }, "ulive__ft-livewrap-chats__scrollview": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "height": "400rpx" } }, "notice": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "marginBottom": "10rpx" } }, "msg": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "display": "flex", "alignItems": "flex-start", "marginBottom": "10rpx" } }, "item": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderRadius": "30rpx", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats .msg ": { "flexDirection": "row" }, ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats .gift ": { "flexDirection": "row" } }, "noticetext": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#77e8e1", "fontSize": "28rpx" } }, "user": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#77e8e1", "fontSize": "24rpx", "marginRight": "10rpx" } }, "text": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ffffff", "fontSize": "28rpx" } }, "giftuser": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ffdd1a", "marginRight": "15rpx" } }, "gifttext": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ff0ad3" } }, "giftimg": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx", "width": "50rpx", "transform": "scale(1.2)" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "height": "90rpx", "width": "90rpx", "objectFit": "cover" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item.on ": { "transform": "scale(1.3)", "transitionDuration": 300 } }, "giftnum": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "color": "#ff0ad3", "fontSize": "32rpx", "fontStyle": "italic" } }, "tag": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "backgroundImage": "linear-gradient(45deg, #f4bc61, #da8300)", "borderRadius": "30rpx", "color": "#ffffff", "verticalAlign": "top", "fontSize": "24rpx", "marginRight": "10rpx", "paddingTop": "3rpx", "paddingRight": "10rpx", "paddingBottom": "3rpx", "paddingLeft": "10rpx" } }, "tag-buy": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "backgroundColor": "#ff007f", "marginLeft": "10rpx", "marginRight": 0 } }, "ulive__ft-livewrap-chats__unread": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-chats ": { "alignItems": "center", "backgroundColor": "#ffffff", "borderRadius": "30rpx", "paddingTop": "7rpx", "paddingRight": 0, "paddingBottom": "7rpx", "paddingLeft": 0, "width": "160rpx", "position": "absolute", "left": 0, "bottom": 0 } }, "ulive__ft-livewrap-activegoods": { ".ulive__ft-livewrap-mixinview ": { "marginLeft": "20rpx", "height": "400rpx", "width": "200rpx" } }, "ulive__ft-livewrap-activegoods__hotsale": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods ": { "backgroundImage": "linear-gradient(to right, #ff9900, rgba(255, 153, 0, 0.1))", "borderRadius": "30rpx", "alignItems": "center", "marginBottom": "10rpx", "paddingLeft": "20rpx" } }, "fimg": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__hotsale ": { "height": "30rpx", "width": "30rpx", "marginRight": "10rpx" } }, "ulive__ft-livewrap-activegoods__swiper": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods ": { "height": "375rpx" } }, "ulive__ft-livewrap-activegoods__card": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods ": { "backgroundColor": "#ffffff", "borderRadius": "10rpx", "overflow": "hidden", "width": "200rpx", "position": "relative", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#ffffff" } }, "gwrap": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "height": "200rpx", "position": "relative" } }, "waves": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderTopLeftRadius": 0, "borderTopRightRadius": "20rpx", "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": 0, "paddingTop": "5rpx", "paddingRight": "10rpx", "paddingBottom": "5rpx", "paddingLeft": "10rpx", "position": "absolute", "top": 0 }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .gpic ": { "backgroundColor": "rgba(235,72,104,0.9)", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": "20rpx", "alignItems": "center", "justifyContent": "center", "paddingTop": "5rpx", "paddingRight": 0, "paddingBottom": "5rpx", "paddingLeft": 0, "textAlign": "center", "position": "absolute", "bottom": 0, "left": 0, "right": 0 } }, "close": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "position": "absolute", "top": "10rpx", "right": "10rpx" } }, "qiang": { ".ulive__ft-livewrap-mixinview .ulive__ft-livewrap-activegoods .ulive__ft-livewrap-activegoods__card ": { "color": "#ffdd1a", "fontSize": "36rpx", "fontStyle": "italic", "marginRight": "10rpx" } }, "ulive__ft-livewrap-toolbar": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "15rpx", "paddingLeft": "20rpx" } }, "editorwrap": { ".ulive__ft-livewrap-toolbar ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderWidth": 0, "borderStyle": "solid", "borderColor": "#000000", "borderRadius": "50rpx", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx", "height": "70rpx", "position": "relative" } }, "editorwrap-text": { ".ulive__ft-livewrap-toolbar ": { "color": "rgba(255,255,255,0.8)", "fontSize": "28rpx" } }, "btnwrap": { ".ulive__ft-livewrap-toolbar ": { "justifyContent": "flex-end" } }, "ulive__video-chat__wrap": { "": { "maxWidth": "750px", "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "zIndex": 2023 } }, "ulive__video-chat__mask": { "": { "backgroundColor": "rgba(0,0,0,0.4)", "position": "fixed", "top": 0, "left": 0, "right": 0, "bottom": 0, "animation": "animMask 0.5s" } }, "ulive__video-chat__body": { "": { "backgroundColor": "rgba(0,0,0,0)", "position": "fixed", "left": 0, "right": 0, "bottom": 0 } }, "ulive__video-chat__editor": { "": { "backgroundColor": "#ffffff", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__popup-redpacket__wrap": { "": { "height": "756rpx", "width": "560rpx", "position": "relative" } }, "redpacket-cover": { ".ulive__popup-redpacket__wrap ": { "height": "756rpx", "width": "560rpx", "position": "absolute", "left": 0, "top": 0 } }, "redpacket-infos": { ".ulive__popup-redpacket__wrap ": { "alignItems": "center", "justifyContent": "center", "position": "absolute", "top": "100rpx", "left": 0, "right": 0 } }, "redpacket-btn": { ".ulive__popup-redpacket__wrap ": { "borderRadius": 50, "display": "flex", "alignItems": "center", "justifyContent": "center", "height": "120rpx", "width": "120rpx", "position": "absolute", "top": "395rpx", "left": "220rpx" } }, "redpacket-btntxt": { ".ulive__popup-redpacket__wrap ": { "color": "#eb4868", "fontSize": "70rpx" } }, "redpacket-more": { ".ulive__popup-redpacket__wrap ": { "alignItems": "center", "justifyContent": "center", "position": "absolute", "bottom": "100rpx", "left": 0, "right": 0 } }, "redpacket-endtime": { ".ulive__popup-redpacket__wrap ": { "alignItems": "center", "justifyContent": "center", "position": "absolute", "bottom": "150rpx", "left": 0, "right": 0 } }, "withdraw": { ".ulive__popup-menus__wrap ": { "backgroundColor": "#ffffff", "boxShadow": "0 1px 3px #eee", "borderRadius": "30rpx", "marginTop": "25rpx", "marginRight": "25rpx", "marginBottom": "25rpx", "marginLeft": "25rpx", "paddingTop": "25rpx", "paddingRight": "25rpx", "paddingBottom": "25rpx", "paddingLeft": "25rpx" } }, "ulive__popup-menus__wrap-scrollbox": { ".ulive__popup-menus__wrap ": { "backgroundColor": "#ffffff", "boxShadow": "0 1px 3px #eee", "borderRadius": "30rpx", "marginTop": 0, "marginRight": "25rpx", "marginBottom": "25rpx", "marginLeft": "25rpx", "paddingTop": "15rpx", "paddingRight": 0, "paddingBottom": "25rpx", "paddingLeft": 0 } }, "ulive__popup-menus__wrap-body": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox ": { "flexWrap": "wrap" } }, "ulive__popup-menus__item": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox .ulive__popup-menus__wrap-body ": { "alignItems": "center", "justifyContent": "center", "paddingTop": "20rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": 0, "width": "175rpx" } }, "icoimg": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox .ulive__popup-menus__wrap-body .ulive__popup-menus__item ": { "height": "50rpx", "width": "50rpx", "objectFit": "cover" } }, "label": { ".ulive__popup-menus__wrap .ulive__popup-menus__wrap-scrollbox .ulive__popup-menus__wrap-body .ulive__popup-menus__item ": { "fontSize": "24rpx", "marginTop": "20rpx" } }, "ulive__popup-goods__wrap-head": { ".ulive__popup-goods__wrap ": { "alignItems": "center", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__popup-goods__wrap-cate": { ".ulive__popup-goods__wrap ": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#eeeeee", "paddingTop": "20rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": 0 } }, "cateitem": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate ": { "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#dddddd", "borderRadius": "50rpx", "marginLeft": "20rpx", "paddingTop": "5rpx", "paddingRight": "20rpx", "paddingBottom": "5rpx", "paddingLeft": "20rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate .on": { "borderColor": "#eb4868" } }, "catetxt": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate ": { "color": "#999999", "fontSize": "24rpx" }, ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-cate .cateitem.on ": { "color": "#eb4868" } }, "ulive__popup-goods__wrap-body": { ".ulive__popup-goods__wrap ": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "ulive__popup-goods__item": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body ": { "marginBottom": "20rpx", "paddingBottom": "20rpx" } }, "gpic": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item ": { "borderRadius": "20rpx", "overflow": "hidden", "height": "200rpx", "width": "200rpx", "position": "relative" } }, "img": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .gpic ": { "borderRadius": "20rpx", "height": "200rpx", "width": "200rpx" } }, "num": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .gpic ": { "backgroundColor": "rgba(0,0,0,0.3)", "borderTopLeftRadius": "20rpx", "borderTopRightRadius": 0, "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": 0, "paddingTop": "5rpx", "paddingRight": "20rpx", "paddingBottom": "5rpx", "paddingLeft": "20rpx", "position": "absolute", "top": 0 } }, "title": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "fontSize": "32rpx" } }, "subtit": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "alignItems": "center", "marginTop": "5rpx" } }, "tags": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "marginTop": "10rpx" } }, "tagsitem": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .tags ": { "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#fde7eb", "borderRadius": "5rpx", "marginRight": "5rpx", "paddingTop": "2rpx", "paddingRight": "8rpx", "paddingBottom": "2rpx", "paddingLeft": "8rpx" } }, "tagstext": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .tags ": { "color": "#eb4868", "fontSize": "20rpx" } }, "foot": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo ": { "marginTop": "20rpx" } }, "price": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .foot ": { "alignItems": "center" } }, "del": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .foot ": { "marginLeft": "5rpx" } }, "deltxt": { ".ulive__popup-goods__wrap .ulive__popup-goods__wrap-body .ulive__popup-goods__item .ginfo .foot ": { "color": "#aaaaaa", "fontSize": "24rpx", "textDecoration": "line-through" } }, "infowrap": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-head ": { "paddingTop": "30rpx", "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "ulive__popup-gifts__wrap-body": { ".ulive__popup-gifts__wrap ": { "flexWrap": "wrap", "paddingTop": 0, "paddingRight": "25rpx", "paddingBottom": "25rpx", "paddingLeft": "25rpx" } }, "ulive__popup-gifts__item": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body ": { "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(0,0,0,0)", "borderRadius": "15rpx", "alignItems": "center", "justifyContent": "center", "height": "250rpx", "width": "175rpx" }, ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .on": { "backgroundColor": "#333a48", "borderColor": "#3f4859" } }, "giftname": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "color": "#ffffff", "fontSize": "28rpx", "marginTop": "10rpx" } }, "giftcoin": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "marginTop": "5rpx" } }, "giftcoin-text": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "color": "#ffffff", "fontSize": "24rpx" } }, "giftbtn": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "backgroundColor": "#eb4868", "borderRadius": "5rpx", "marginTop": "5rpx", "paddingTop": "5rpx", "paddingRight": "15rpx", "paddingBottom": "5rpx", "paddingLeft": "15rpx" } }, "giftbtn-text": { ".ulive__popup-gifts__wrap .ulive__popup-gifts__wrap-body .ulive__popup-gifts__item ": { "color": "#ffffff", "fontSize": "24rpx" } }, "ulive__modal-gifts__content": { "": { "paddingTop": "50rpx", "paddingRight": "50rpx", "paddingBottom": "50rpx", "paddingLeft": "50rpx" } }, "ulive__modal-gifts__btns": { "": { "justifyContent": "flex-end", "paddingTop": "50rpx", "paddingRight": "50rpx", "paddingBottom": "50rpx", "paddingLeft": "50rpx" } }, "@FONT-FACE": [{}, {}, {}, {}], "@TRANSITION": { "giftimg": { "duration": 300 } } };
const _sfc_main = {
  __name: "live",
  props: {
    // 直播id
    roomid: { type: [Number, String] }
  },
  setup(__props, { expose: __expose }) {
    var _a2;
    __expose();
    const props2 = __props;
    onLoad((option) => {
      liveJson.map((item, index) => {
        if (parseInt(item.id) == parseInt(props2.roomid)) {
          currentLive.value = index;
          scrollBottom();
        }
      });
    });
    onMounted(() => {
      mockJoinRoom();
      mockSendGift();
    });
    const { globalData } = getApp();
    formatAppLog("log", "at pages/live/live.nvue:27", globalData);
    const menuBarT = ref(((_a2 = globalData.menu) == null ? void 0 : _a2.top) || globalData.statusBarH);
    const winWidth = ref(globalData.screenWidth);
    const winHeight = ref(globalData.screenHeight);
    const liveList = ref(liveJson);
    const currentLive = ref(0);
    const giftList = ref(giftJson);
    const giftCur = ref(0);
    const giftCoins = ref(0);
    const joinRoomData = ref(null);
    const sendGiftData = ref([]);
    const isVisibleChatbox = ref(false);
    const chatEditor = ref("");
    const isScrolltolower = ref(false);
    const scrollToView = ref("");
    const msgUnread = ref([]);
    const isVisibleGoodsTalk = ref(true);
    const goodsTalkWidth = ref(0);
    const redpacketRef = ref(null);
    const isVisibleRedpacketRecieve = ref(false);
    const isVisibleRedpacketWait = ref(false);
    const menuList = ref([
      { label: "提现", img: "/static/menu/menu1.png" },
      { label: "我的订单", img: "/static/menu/menu2.png" },
      { label: "联系客服", img: "/static/menu/menu3.png" },
      { label: "排行榜", img: "/static/menu/menu4.png" },
      { label: "转盘抽奖", img: "/static/menu/menu5.png" },
      { label: "中奖记录", img: "/static/menu/menu6.png" },
      { label: "我的优惠券", img: "/static/menu/menu7.png" },
      { label: "评论记录板", img: "/static/menu/menu8.png" },
      { label: "推广员", img: "/static/menu/menu9.png" },
      { label: "举报", img: "/static/menu/menu10.png" },
      { label: "特效", img: "/static/menu/menu11.png" },
      { label: "分享", img: "/static/menu/menu12.png" }
    ]);
    const menusRef = ref(null);
    const goodsRef = ref(null);
    const goodsData = ref({});
    const giftsRef = ref(null);
    const giftModalRef = ref(null);
    const giftsTabList = ref([
      { name: "礼物" },
      { name: "互动" },
      { name: "粉丝团" },
      { name: "等级" }
    ]);
    const giftsTabCurrent = ref(0);
    const keyboardHeight = ref(0);
    const fixKeyboardHeight = computed(() => {
      let keyboardH = keyboardHeight.value > 0 ? keyboardHeight.value + 56 : keyboardHeight.value;
      return keyboardH ? keyboardH + "px" : null;
    });
    const fixTextStyle = computed(() => {
      return { "max-width": globalData.screenWidth - goodsTalkWidth.value - 100 + "px" };
    });
    uni.onKeyboardHeightChange((e) => {
      keyboardHeight.value = e.height;
      if (e.height <= 0) {
        handleCloseChatbox();
      }
    });
    watch(() => isVisibleGoodsTalk.value, (val) => {
      if (val) {
        nextTick(() => {
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
      return uni.createVideoContext(`uplayer${currentLive.value}`, getCurrentInstance());
    };
    const handleChange = (e) => {
      const index = e.detail.current;
      handleReset();
      currentLive.value = index;
      handlePlay();
      scrollBottom();
    };
    const handleTransition = (e) => {
    };
    const handlePlay = () => {
      formatAppLog("log", "at pages/live/live.nvue:131", "video play");
      let video = getVideoContext();
      if (!video)
        return;
      video.play();
    };
    const handlePause = () => {
      let video = getVideoContext();
      if (!video)
        return;
      video.pause();
    };
    const handleReset = () => {
      let video = getVideoContext();
      if (!video)
        return;
      video.pause();
      video.seek(0);
      video.stop();
    };
    onShow(() => {
      handlePlay();
    });
    onHide(() => {
      handleReset();
    });
    const mockJoinRoom = () => {
      setInterval(() => {
        let joinArr = ["Jack", "阿sir", "Andy", "Hisen", "王二宝", "小李子", "Alice", "大飞", "璐璐", "宇辉"];
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
          { title: "小心心", pic: "/static/gift/gift1.png", user: "Jack", avatar: "/static/avatar/uimg1.jpeg" },
          { title: "棒棒糖", pic: "/static/gift/gift2.png", user: "Andy", avatar: "/static/avatar/uimg2.jpeg" },
          { title: "大啤酒", pic: "/static/gift/gift3.png", user: "Hisen", avatar: "/static/avatar/uimg3.jpeg" },
          { title: "人气票", pic: "/static/gift/gift4.png", user: "璐璐", avatar: "/static/avatar/uimg4.jpeg" },
          { title: "鲜花", pic: "/static/gift/gift5.png", user: "小马", avatar: "/static/avatar/uimg5.jpeg" },
          { title: "捏捏小脸", pic: "/static/gift/gift6.png", user: "Alice", avatar: "/static/avatar/uimg6.jpeg" },
          { title: "你真好看", pic: "/static/gift/gift7.png", user: "赵冬梅", avatar: "/static/avatar/uimg7.jpeg" },
          { title: "亲吻", pic: "/static/gift/gift8.png", user: "YOYO", avatar: "/static/avatar/uimg3.jpeg" },
          { title: "玫瑰", pic: "/static/gift/gift12.png", user: "宇辉", avatar: "/static/avatar/uimg2.jpeg" },
          { title: "比心", pic: "/static/gift/gift13.png", user: "Len", avatar: "/static/avatar/uimg1.jpeg" },
          { title: "浪漫烟花", pic: "/static/gift/gift14.png", user: "Apple", avatar: "/static/avatar/uimg5.jpeg" },
          { title: "真的爱你", pic: "/static/gift/gift15.png", user: "小孙", avatar: "/static/avatar/uimg6.jpeg" },
          { title: "私人飞机", pic: "/static/gift/gift16.png", user: "阿伟", avatar: "/static/avatar/uimg7.jpeg" }
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
      nextTick(() => {
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
    const handleCheckGift = (item, index) => {
      giftCur.value = index;
      giftCoins.value = item.coins;
    };
    const handleSendGift = (item) => {
      giftModalRef.value.open();
    };
    const handleSendGiftClose = () => {
      giftModalRef.value.close();
    };
    const handleFollow = (index) => {
      liveList.value[index].isFollow = !liveList.value[index].isFollow;
    };
    const handleLiveQuit = () => {
      uni.navigateBack();
    };
    const __returned__ = { props: props2, globalData, menuBarT, winWidth, winHeight, liveList, currentLive, giftList, giftCur, giftCoins, joinRoomData, sendGiftData, isVisibleChatbox, chatEditor, isScrolltolower, scrollToView, msgUnread, isVisibleGoodsTalk, goodsTalkWidth, redpacketRef, isVisibleRedpacketRecieve, isVisibleRedpacketWait, menuList, menusRef, goodsRef, goodsData, giftsRef, giftModalRef, giftsTabList, giftsTabCurrent, keyboardHeight, fixKeyboardHeight, fixTextStyle, getVideoContext, handleChange, handleTransition, handlePlay, handlePause, handleReset, mockJoinRoom, mockSendGift, handleOpenChatbox, handleCloseChatbox, handleSendChatmsg, handleMsgScroll, handleMsgScrollLower, handleMsgIsRead, scrollBottom, handleOpenRedpacket, handleCloseRedpacket, handleOpenMenus, handleOpenGoods, toGoodsDetail, handleOpenGifts, handleCheckGift, handleSendGift, handleSendGiftClose, handleFollow, handleLiveQuit, onMounted, nextTick, ref, computed, watch, getCurrentInstance, get onLoad() {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_uv_icon = resolveEasycom(resolveDynamicComponent("uv-icon"), __easycom_0);
  const _component_swiper = resolveComponent("swiper");
  const _component_ua_layout = resolveEasycom(resolveDynamicComponent("ua-layout"), __easycom_1);
  const _component_uv_input = resolveEasycom(resolveDynamicComponent("uv-input"), __easycom_2);
  const _component_uv_button = resolveEasycom(resolveDynamicComponent("uv-button"), __easycom_3);
  const _component_uv_popup = resolveEasycom(resolveDynamicComponent("uv-popup"), __easycom_4);
  const _component_button = resolveComponent("button");
  const _component_navigator = resolveComponent("navigator");
  const _component_uv_line_progress = resolveEasycom(resolveDynamicComponent("uv-line-progress"), __easycom_5);
  const _component_uv_tabs = resolveEasycom(resolveDynamicComponent("uv-tabs"), __easycom_6);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createVNode(_component_ua_layout, { tabbar: false }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "ua__swipervideo flex1" }, [
          createVNode(_component_swiper, {
            class: "ua__swipervideo-wrap flex1",
            current: $setup.currentLive,
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
                renderList($setup.liveList, (item, index) => {
                  return openBlock(), createBlock(
                    _component_swiper_item,
                    { key: index },
                    {
                      default: withCtx(() => [
                        createElementVNode("u-video", {
                          class: "ua__swipervideo-player flex1",
                          id: "uplayer" + index,
                          src: item.src,
                          controls: false,
                          loop: true,
                          autoplay: index == $setup.currentLive,
                          showCenterPlayBtn: false,
                          objectFit: "cover",
                          style: normalizeStyle({ "width": `${$setup.winWidth}px`, "height": `${$setup.winHeight}px` })
                        }, null, 12, ["id", "src", "autoplay"]),
                        createVNode(
                          _component_swiper,
                          {
                            class: "ulive__swiperscreen flex1",
                            current: 1
                          },
                          {
                            default: withCtx(() => [
                              createCommentVNode(" 清屏 "),
                              createVNode(_component_swiper_item, null, {
                                default: withCtx(() => [
                                  createElementVNode("u-text", null, " 第一屏 ")
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(
                                _component_swiper_item,
                                null,
                                {
                                  default: withCtx(() => [
                                    createElementVNode(
                                      "view",
                                      {
                                        class: "ulive__headlayer",
                                        style: normalizeStyle({ "top": $setup.menuBarT + "px" })
                                      },
                                      [
                                        createCommentVNode(" logo+关注 "),
                                        createElementVNode("view", { class: "ulive__hd-liveinfo flexbox flex-row flex-alignc" }, [
                                          createElementVNode("view", { class: "ulive__hd-avatar ulive__mask flex-alignc" }, [
                                            createElementVNode("u-image", {
                                              class: "logo",
                                              src: item.logo,
                                              mode: "widthFix"
                                            }, null, 8, ["src"]),
                                            createElementVNode("view", { class: "flex1 flexbox flex-col ml-10" }, [
                                              createElementVNode(
                                                "u-text",
                                                { class: "name" },
                                                toDisplayString(item.name),
                                                1
                                                /* TEXT */
                                              ),
                                              createElementVNode(
                                                "u-text",
                                                { class: "zan" },
                                                toDisplayString(item.likeNum) + "本场点赞",
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            createElementVNode("view", {
                                              class: normalizeClass(["btn flexbox flex-row flex-alignc", { "active": item.isFollow }]),
                                              onClick: ($event) => $setup.handleFollow(index)
                                            }, [
                                              createElementVNode(
                                                "u-text",
                                                {
                                                  class: normalizeClass(["btntext", { "active": item.isFollow }])
                                                },
                                                toDisplayString(item.isFollow ? "已关注" : "关注"),
                                                3
                                                /* TEXT, CLASS */
                                              )
                                            ], 10, ["onClick"])
                                          ]),
                                          createElementVNode("view", { class: "ulive__hd-onlineuser flex1" }, [
                                            createVNode(_component_uv_icon, {
                                              name: "close",
                                              color: "#fff",
                                              onClick: $setup.handleLiveQuit
                                            })
                                          ])
                                        ]),
                                        createElementVNode("view", { class: "ulive__hd-livewrap flexbox flex-row" }, [
                                          createCommentVNode(" 左边 "),
                                          createElementVNode("view", { class: "ulive__hd-livewrap__left flex1 flexbox flex-col" }, [
                                            createCommentVNode(' <view class="ulive__roundwrap ulive__mask">\r\n								<text class="ulive__roundtext">回放</text>\r\n								</view> '),
                                            createElementVNode("view", { class: "ulive__hd-livewrap__tags flexbox flex-row" }, [
                                              createElementVNode("view", { class: "ulive__roundwrap ulive__mask" }, [
                                                createVNode(_component_uv_icon, {
                                                  name: "shopping-cart",
                                                  color: "#ffdd1a"
                                                }),
                                                createElementVNode("u-text", { class: "ulive__roundtext" }, "服饰鞋包榜第1名")
                                              ]),
                                              createElementVNode("view", { class: "ulive__roundwrap ulive__mask ml-10" }, [
                                                createVNode(_component_uv_icon, {
                                                  name: "level",
                                                  color: "#ffdd1a"
                                                }),
                                                createElementVNode("u-text", { class: "ulive__roundtext" }, "小时榜")
                                              ])
                                            ]),
                                            createElementVNode("view", { class: "ulive__hd-livewrap__redpacket flexbox flex-row" }, [
                                              createElementVNode("view", {
                                                class: "ulive__redpacket-item ulive__mask",
                                                onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleOpenRedpacket(1))
                                              }, [
                                                createElementVNode("u-image", {
                                                  class: "ulive__redpacket-image",
                                                  src: _imports_0,
                                                  mode: "widthFix"
                                                }),
                                                createElementVNode("u-text", { class: "ulive__redpacket-time" }, "04:49")
                                              ]),
                                              createElementVNode("view", {
                                                class: "ulive__redpacket-item ulive__mask",
                                                onClick: _cache[1] || (_cache[1] = ($event) => $setup.handleOpenRedpacket(2))
                                              }, [
                                                createElementVNode("u-image", {
                                                  class: "ulive__redpacket-image",
                                                  src: _imports_1,
                                                  mode: "widthFix"
                                                }),
                                                createElementVNode("u-text", { class: "ulive__redpacket-time" }, "04:49")
                                              ]),
                                              createElementVNode("view", { class: "ulive__redpacket-item ulive__mask center" }, [
                                                createElementVNode("u-image", {
                                                  class: "ulive__redpacket-image",
                                                  src: _imports_2,
                                                  mode: "widthFix"
                                                }),
                                                createElementVNode("u-text", { class: "ulive__redpacket-time" }, "04:49")
                                              ])
                                            ])
                                          ]),
                                          createElementVNode("view", { class: "ulive__hd-livewrap__right flexbox flex-col" }, [
                                            createElementVNode("view", { class: "ulive__roundwrap ulive__mask mr-20" }, [
                                              createVNode(_component_uv_icon, {
                                                name: "kefu-ermai",
                                                color: "#fff"
                                              }),
                                              createElementVNode("u-text", { class: "ulive__roundtext ml-5" }, "后台")
                                            ])
                                          ])
                                        ])
                                      ],
                                      4
                                      /* STYLE */
                                    ),
                                    createElementVNode("view", { class: "ulive__footlayer" }, [
                                      createElementVNode("view", { class: "ulive__ft-livewrap-placeholder animated fadeIn" }, [
                                        createElementVNode("view", { class: "ulive__ft-livewrap-hotbuy flexbox flex-row" }, [
                                          createElementVNode("u-image", {
                                            class: "gimg",
                                            src: item.poster,
                                            mode: "aspectFill"
                                          }, null, 8, ["src"]),
                                          createElementVNode("view", { class: "ginfo flex1" }, [
                                            createElementVNode("view", { class: "flexbox flex-row" }, [
                                              createElementVNode("u-text", { class: "user c-ffdd1a" }, "Andy"),
                                              createElementVNode(
                                                "u-text",
                                                { class: "c-fff" },
                                                "等" + toDisplayString(item.saleNum) + "人在购买",
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            createElementVNode(
                                              "u-text",
                                              { class: "gdesc clamp1" },
                                              toDisplayString(item.desc),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          createElementVNode("view", { class: "btn" }, [
                                            createElementVNode("u-text", { class: "btntext" }, "去购买")
                                          ])
                                        ])
                                      ]),
                                      createCommentVNode(" 加入直播间/送礼物提示 "),
                                      createElementVNode("view", { class: "ulive__ft-livewrap-animateview flexbox flex-col" }, [
                                        createElementVNode("view", { class: "ulive__ft-livewrap-animatejoin ulive__ft-livewrap-placeholder" }, [
                                          $setup.joinRoomData ? (openBlock(), createElementBlock("view", {
                                            key: 0,
                                            class: "ulive__ft-livewrap-joinroom"
                                          }, [
                                            createElementVNode(
                                              "u-text",
                                              { class: "ulive__ft-livewrap-joinroom__text" },
                                              "欢迎" + toDisplayString($setup.joinRoomData) + "加入了直播间",
                                              1
                                              /* TEXT */
                                            )
                                          ])) : createCommentVNode("v-if", true)
                                        ]),
                                        createElementVNode("view", { class: "ulive__ft-livewrap-animategift ulive__ft-livewrap-placeholder" }, [
                                          !$setup.isEmpty($setup.sendGiftData) ? (openBlock(), createElementBlock("view", {
                                            key: 0,
                                            class: "ulive__ft-livewrap-activegift flexbox flex-row flex-alignc"
                                          }, [
                                            createElementVNode("u-image", {
                                              class: "avatar",
                                              src: $setup.sendGiftData.avatar
                                            }, null, 8, ["src"]),
                                            createElementVNode("view", { class: "info flex1" }, [
                                              createElementVNode(
                                                "u-text",
                                                { class: "name" },
                                                toDisplayString($setup.sendGiftData.user),
                                                1
                                                /* TEXT */
                                              ),
                                              createElementVNode("u-text", { class: "desc" }, "送出")
                                            ]),
                                            createElementVNode("u-image", {
                                              class: "gift",
                                              src: $setup.sendGiftData.pic
                                            }, null, 8, ["src"])
                                          ])) : createCommentVNode("v-if", true)
                                        ])
                                      ]),
                                      createElementVNode("view", { class: "ulive__ft-livewrap-mixinview flexbox flex-row" }, [
                                        createCommentVNode(" 聊天消息 "),
                                        createElementVNode("view", { class: "ulive__ft-livewrap-chats flex1" }, [
                                          createElementVNode("scroll-view", {
                                            class: "ulive__ft-livewrap-chats__scrollview flex1",
                                            scrollY: "",
                                            showScrollbar: "false",
                                            scrollIntoView: $setup.scrollToView,
                                            lowerThreshold: 5,
                                            onScroll: $setup.handleMsgScroll,
                                            onScrolltolower: $setup.handleMsgScrollLower
                                          }, [
                                            (openBlock(true), createElementBlock(
                                              Fragment,
                                              null,
                                              renderList(item.message, (msgitem, msgidx) => {
                                                return openBlock(), createElementBlock(
                                                  Fragment,
                                                  { key: msgidx },
                                                  [
                                                    msgitem.type == "notice" ? (openBlock(), createElementBlock("view", {
                                                      key: 0,
                                                      class: "notice",
                                                      id: `msg-${msgitem.id}`
                                                    }, [
                                                      createElementVNode("view", { class: "item" }, [
                                                        createElementVNode(
                                                          "u-text",
                                                          { class: "noticetext" },
                                                          toDisplayString(msgitem.content),
                                                          1
                                                          /* TEXT */
                                                        )
                                                      ])
                                                    ], 8, ["id"])) : msgitem.type == "gift" ? (openBlock(), createElementBlock("view", {
                                                      key: 1,
                                                      class: "gift",
                                                      id: `msg-${msgitem.id}`
                                                    }, [
                                                      createElementVNode("view", { class: "item" }, [
                                                        createElementVNode(
                                                          "u-text",
                                                          { class: "giftuser" },
                                                          toDisplayString(msgitem.user),
                                                          1
                                                          /* TEXT */
                                                        ),
                                                        createElementVNode(
                                                          "u-text",
                                                          { class: "gifttext" },
                                                          "送出了" + toDisplayString(msgitem.content),
                                                          1
                                                          /* TEXT */
                                                        ),
                                                        createElementVNode("u-image", {
                                                          class: "giftimg",
                                                          src: msgitem.img,
                                                          mode: "widthFix"
                                                        }, null, 8, ["src"]),
                                                        createElementVNode(
                                                          "u-text",
                                                          { class: "giftnum" },
                                                          "x" + toDisplayString(msgitem.num),
                                                          1
                                                          /* TEXT */
                                                        )
                                                      ])
                                                    ], 8, ["id"])) : (openBlock(), createElementBlock("view", {
                                                      key: 2,
                                                      class: "msg",
                                                      id: `msg-${msgitem.id}`
                                                    }, [
                                                      createElementVNode("view", { class: "item" }, [
                                                        msgitem.tag ? (openBlock(), createElementBlock(
                                                          "u-text",
                                                          {
                                                            key: 0,
                                                            class: "tag"
                                                          },
                                                          toDisplayString(msgitem.tag),
                                                          1
                                                          /* TEXT */
                                                        )) : createCommentVNode("v-if", true),
                                                        createElementVNode(
                                                          "u-text",
                                                          { class: "user" },
                                                          toDisplayString(msgitem.user),
                                                          1
                                                          /* TEXT */
                                                        ),
                                                        createElementVNode(
                                                          "u-text",
                                                          {
                                                            class: "text",
                                                            style: normalizeStyle([$setup.fixTextStyle])
                                                          },
                                                          toDisplayString(msgitem.isbuy ? "正在购买" : msgitem.content),
                                                          5
                                                          /* TEXT, STYLE */
                                                        ),
                                                        msgitem.isbuy ? (openBlock(), createElementBlock("u-text", {
                                                          key: 1,
                                                          class: "tag tag-buy"
                                                        }, "去购买")) : createCommentVNode("v-if", true)
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
                                          !$setup.isEmpty($setup.msgUnread) ? (openBlock(), createElementBlock("view", {
                                            key: 0,
                                            class: "ulive__ft-livewrap-chats__unread",
                                            onClick: $setup.handleMsgIsRead
                                          }, [
                                            createElementVNode(
                                              "u-text",
                                              { class: "c-eb4868 fs-24" },
                                              toDisplayString($setup.msgUnread.length) + "条新消息",
                                              1
                                              /* TEXT */
                                            )
                                          ])) : createCommentVNode("v-if", true)
                                        ]),
                                        createCommentVNode(" 商品讲解 "),
                                        $setup.isVisibleGoodsTalk ? (openBlock(), createElementBlock("view", {
                                          key: 0,
                                          class: "ulive__ft-livewrap-activegoods animated fadeInRight",
                                          id: "goodsTalkID"
                                        }, [
                                          createElementVNode("view", { class: "ulive__ft-livewrap-activegoods__hotsale flexbox flex-row" }, [
                                            createElementVNode("u-image", {
                                              class: "fimg",
                                              src: _imports_3,
                                              mode: "widthFix"
                                            }),
                                            createElementVNode(
                                              "u-text",
                                              { class: "c-fff fs-32" },
                                              "热卖 x" + toDisplayString(item.saleNum),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          createVNode(
                                            _component_swiper,
                                            { class: "ulive__ft-livewrap-activegoods__swiper" },
                                            {
                                              default: withCtx(() => [
                                                createVNode(
                                                  _component_swiper_item,
                                                  null,
                                                  {
                                                    default: withCtx(() => [
                                                      createElementVNode("view", { class: "ulive__ft-livewrap-activegoods__card" }, [
                                                        createElementVNode("view", {
                                                          class: "gwrap",
                                                          onClick: $setup.toGoodsDetail
                                                        }, [
                                                          createElementVNode("u-image", {
                                                            class: "gimg",
                                                            src: item.poster,
                                                            mode: "aspectFill"
                                                          }, null, 8, ["src"]),
                                                          createElementVNode("view", { class: "waves" }, [
                                                            createElementVNode("u-text", { class: "c-fff fs-24" }, "讲解中")
                                                          ]),
                                                          createElementVNode("view", {
                                                            class: "close",
                                                            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.isVisibleGoodsTalk = false, ["stop"]))
                                                          }, [
                                                            createVNode(_component_uv_icon, {
                                                              name: "close-circle-fill",
                                                              color: "rgba(0, 0, 0, .3)",
                                                              size: "14"
                                                            })
                                                          ])
                                                        ]),
                                                        createElementVNode("view", { class: "ginfo flexbox flex-col" }, [
                                                          createElementVNode(
                                                            "u-text",
                                                            { class: "clamp1 fs-24" },
                                                            toDisplayString(item.desc),
                                                            1
                                                            /* TEXT */
                                                          ),
                                                          createElementVNode("u-text", { class: "clamp1 fs-24 c-eb4868" }, "7天无理由退货")
                                                        ]),
                                                        createElementVNode("view", { class: "btn flexbox flex-row" }, [
                                                          createElementVNode("u-text", { class: "flex1 c-fff fs-28" }, "￥79.00"),
                                                          createElementVNode("u-text", { class: "qiang" }, "抢")
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
                                        ])) : createCommentVNode("v-if", true)
                                      ]),
                                      createElementVNode("view", { class: "ulive__ft-livewrap-toolbar flexbox flex-row" }, [
                                        createElementVNode("view", { class: "editorwrap flex1 flexbox flex-row flex-alignc" }, [
                                          createElementVNode("view", {
                                            class: "flex1",
                                            onClick: $setup.handleOpenChatbox
                                          }, [
                                            createElementVNode("u-text", { class: "editorwrap-text" }, "说点什么...")
                                          ])
                                        ]),
                                        createElementVNode("view", { class: "btnwrap flexbox flex-row" }, [
                                          createElementVNode("view", {
                                            class: "btn flexbox",
                                            onClick: $setup.handleOpenMenus
                                          }, [
                                            createVNode(_component_uv_icon, {
                                              name: "grid",
                                              color: "#3c9cff",
                                              size: "22"
                                            })
                                          ]),
                                          createElementVNode("view", {
                                            class: "btn flexbox",
                                            onClick: ($event) => $setup.handleOpenGoods(item)
                                          }, [
                                            createVNode(_component_uv_icon, {
                                              name: "shopping-cart-fill",
                                              color: "#ffaa00",
                                              size: "24"
                                            })
                                          ], 8, ["onClick"]),
                                          createElementVNode("view", {
                                            class: "btn flexbox",
                                            onClick: $setup.handleOpenGifts
                                          }, [
                                            createVNode(_component_uv_icon, {
                                              name: "gift",
                                              color: "#ff0ad3",
                                              size: "22"
                                            })
                                          ]),
                                          createElementVNode("view", { class: "btn flexbox" }, [
                                            createVNode(_component_uv_icon, {
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
    $setup.isVisibleChatbox ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "ulive__video-chat__wrap"
    }, [
      createElementVNode("view", {
        class: "ulive__video-chat__mask",
        onClick: $setup.handleCloseChatbox
      }),
      createElementVNode(
        "view",
        {
          class: "ulive__video-chat__body",
          style: normalizeStyle({ "height": $setup.fixKeyboardHeight })
        },
        [
          createCommentVNode(" 编辑框 "),
          createElementVNode("view", { class: "ulive__video-chat__editor flexbox flex-row flex-alignc" }, [
            createVNode(_component_uv_input, {
              modelValue: $setup.chatEditor,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.chatEditor = $event),
              shape: "circle",
              focus: "",
              adjustPosition: false,
              placeholder: "文明发言,理性购物",
              customStyle: { background: "#f3f3f3", border: "none", "margin-right": "20rpx" }
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
              customStyle: { background: "#ff007f", border: "none", padding: "0 20rpx", height: "70rpx" },
              onClick: $setup.handleSendChatmsg
            })
          ]),
          createElementVNode("view", { class: "ulive__video-chat__emojs" })
        ],
        4
        /* STYLE */
      )
    ])) : createCommentVNode("v-if", true),
    createCommentVNode(" 红包弹出框 "),
    createVNode(
      _component_uv_popup,
      {
        ref: "redpacketRef",
        mode: "center",
        round: "25",
        zIndex: "2023",
        onMaskClick: $setup.handleCloseRedpacket
      },
      {
        default: withCtx(() => [
          createCommentVNode(" 领取红包 "),
          $setup.isVisibleRedpacketRecieve ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "ulive__popup-redpacket__wrap"
          }, [
            createElementVNode("u-image", {
              class: "redpacket-cover",
              src: _imports_4
            }),
            createElementVNode("view", { class: "redpacket-infos flexbox flex-col" }, [
              createElementVNode("u-image", {
                class: "logo",
                src: _imports_5,
                mode: "widthFix"
              }),
              createElementVNode("u-text", { class: "name" }, "乐购的红包"),
              createElementVNode("u-text", { class: "desc" }, "福利回馈，感恩有您")
            ]),
            createElementVNode("view", {
              class: "redpacket-btn",
              onClick: $setup.handleCloseRedpacket
            }, [
              createElementVNode("u-text", { class: "redpacket-btntxt" }, "拆")
            ]),
            createElementVNode("view", { class: "redpacket-more flexbox flex-row" }, [
              createElementVNode("u-text", { class: "c-fff fs-24" }, "查看领取详情"),
              createVNode(_component_uv_icon, {
                name: "arrow-right",
                color: "#fff",
                size: "12"
              })
            ])
          ])) : createCommentVNode("v-if", true),
          createCommentVNode(" 红包雨 "),
          $setup.isVisibleRedpacketWait ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "ulive__popup-redpacket__wrap"
          }, [
            createElementVNode("u-image", {
              class: "redpacket-cover",
              src: _imports_6
            }),
            createElementVNode("view", { class: "redpacket-infos flexbox flex-col" }, [
              createElementVNode("u-image", {
                class: "logo",
                src: _imports_7,
                mode: "widthFix"
              }),
              createElementVNode("u-text", { class: "name" }, "乐购董老师将于"),
              createElementVNode("u-text", { class: "name" }, "12月30日12时00分发送红包雨")
            ]),
            createElementVNode("view", { class: "redpacket-endtime flexbox flex-col" }, [
              createElementVNode("u-text", { class: "c-f7e1ad fs-28" }, "倒计时24时55分12秒"),
              createElementVNode("u-text", { class: "c-f7e1ad fs-24 mt-10" }, "倒计时结束可抢")
            ])
          ])) : createCommentVNode("v-if", true)
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
        ref: "menusRef",
        mode: "bottom",
        round: "10",
        zIndex: "2023",
        customStyle: { "background": "#f7fbff" }
      },
      {
        default: withCtx(() => [
          createElementVNode("view", { class: "ulive__popup-menus__wrap" }, [
            createElementVNode("view", { class: "withdraw flexbox flex-row flex-alignc" }, [
              createElementVNode("view", { class: "flex1 flexbox flex-col" }, [
                createElementVNode("u-text", { class: "c-999 fs-24" }, "可提现金额"),
                createElementVNode("u-text", { class: "c-eb4868 fs-40" }, "￥638.00")
              ]),
              createVNode(_component_button, {
                type: "primary",
                size: "mini",
                class: "btn"
              }, {
                default: withCtx(() => [
                  createTextVNode("立即提现")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_button, {
                type: "primary",
                plain: "",
                size: "mini",
                class: "btn"
              }, {
                default: withCtx(() => [
                  createTextVNode("提现记录")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            createElementVNode("view", { class: "ulive__popup-menus__wrap-scrollbox flexbox flex-col" }, [
              createElementVNode("view", { class: "pad25" }, [
                createElementVNode("u-text", { class: "fs-28" }, "菜单功能")
              ]),
              createElementVNode("view", { class: "ulive__popup-menus__wrap-body flexbox flex-row" }, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.menuList, (item, index) => {
                    return openBlock(), createElementBlock("view", {
                      key: index,
                      class: "ulive__popup-menus__item flexbox flex-col"
                    }, [
                      createElementVNode("u-image", {
                        class: "icoimg",
                        src: item.img,
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      createElementVNode(
                        "u-text",
                        { class: "label" },
                        toDisplayString(item.label),
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
    createVNode(
      _component_uv_popup,
      {
        ref: "goodsRef",
        mode: "bottom",
        round: "10",
        zIndex: "2023"
      },
      {
        default: withCtx(() => {
          var _a2, _b2;
          return [
            createElementVNode("view", { class: "ulive__popup-goods__wrap" }, [
              createElementVNode("view", { class: "ulive__popup-goods__wrap-head flexbox flex-row" }, [
                createElementVNode("u-image", {
                  class: "logo",
                  src: $setup.goodsData.logo,
                  mode: "aspectFill"
                }, null, 8, ["src"]),
                createElementVNode("view", { class: "flex1 flexbox flex-col ml-10" }, [
                  createElementVNode("view", { class: "flexbox flex-row" }, [
                    createElementVNode(
                      "u-text",
                      null,
                      toDisplayString($setup.goodsData.name) + "直播间",
                      1
                      /* TEXT */
                    ),
                    createVNode(_component_uv_icon, {
                      name: "arrow-right",
                      size: "12"
                    })
                  ]),
                  createElementVNode("view", { class: "flexbox flex-row" }, [
                    createElementVNode("u-text", { class: "c-eb4868 fs-24" }, "带货口碑"),
                    createElementVNode("u-text", { class: "c-2979ff fs-24 ml-15" }, "4.78 高")
                  ])
                ]),
                createVNode(_component_navigator, {
                  url: "/pages/cart/index",
                  "hover-class": "none",
                  "open-type": "switchTab"
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "btn flexbox flex-col" }, [
                      createVNode(_component_uv_icon, {
                        name: "shopping-cart",
                        size: "18"
                      }),
                      createElementVNode("u-text", { class: "fs-28" }, "购物车")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_navigator, {
                  url: "/pages/order/list",
                  "hover-class": "none"
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "btn flexbox flex-col" }, [
                      createVNode(_component_uv_icon, {
                        name: "order",
                        size: "18"
                      }),
                      createElementVNode("u-text", { class: "fs-28" }, "订单")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createElementVNode("view", { class: "ulive__popup-goods__wrap-cate flexbox flex-row" }, [
                createElementVNode("view", { class: "cateitem on" }, [
                  createElementVNode("u-text", { class: "catetxt" }, "全部")
                ]),
                createElementVNode("view", { class: "cateitem" }, [
                  createElementVNode("u-text", { class: "catetxt" }, "零食特产")
                ]),
                createElementVNode("view", { class: "cateitem" }, [
                  createElementVNode("u-text", { class: "catetxt" }, "酒类")
                ]),
                createElementVNode("view", { class: "cateitem" }, [
                  createElementVNode("u-text", { class: "catetxt" }, "厨房电器")
                ])
              ]),
              createElementVNode("scroll-view", {
                scrollY: "true",
                style: { "height": "900rpx" }
              }, [
                createElementVNode("view", { class: "ulive__popup-goods__wrap-body" }, [
                  createElementVNode("view", { class: "ulive__popup-goods__item flexbox flex-row" }, [
                    createElementVNode("view", {
                      class: "gpic",
                      onClick: $setup.toGoodsDetail
                    }, [
                      createElementVNode("u-image", {
                        class: "img",
                        src: $setup.goodsData.poster,
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      createElementVNode("view", { class: "num" }, [
                        createElementVNode("u-text", { class: "c-fff fs-24" }, "1")
                      ]),
                      createElementVNode("view", {
                        class: "waves",
                        onClick: _cache[4] || (_cache[4] = withModifiers(($event) => $setup.isVisibleGoodsTalk = true, ["stop"]))
                      }, [
                        createElementVNode("u-text", { class: "c-fff fs-24" }, "讲解中")
                      ])
                    ]),
                    createElementVNode("view", {
                      class: "ginfo flex1",
                      onClick: $setup.toGoodsDetail
                    }, [
                      createElementVNode("view", { class: "title flexbox flex-row" }, [
                        createElementVNode(
                          "u-text",
                          { class: "fs-32 clamp1" },
                          toDisplayString($setup.goodsData.desc),
                          1
                          /* TEXT */
                        )
                      ]),
                      createElementVNode("view", { class: "subtit flexbox flex-row" }, [
                        createElementVNode(
                          "u-text",
                          { class: "c-eb4868 fs-24" },
                          toDisplayString((_b2 = (_a2 = $setup.goodsData) == null ? void 0 : _a2.topic) == null ? void 0 : _b2.join(" ")),
                          1
                          /* TEXT */
                        )
                      ]),
                      createElementVNode("view", { class: "tags flexbox flex-row" }, [
                        createElementVNode("view", { class: "tagsitem" }, [
                          createElementVNode("u-text", { class: "tagstext" }, "顺丰包邮")
                        ]),
                        createElementVNode("view", { class: "tagsitem" }, [
                          createElementVNode("u-text", { class: "tagstext" }, "返2元券")
                        ])
                      ]),
                      createElementVNode("view", { class: "foot flexbox flex-row" }, [
                        createElementVNode("view", { class: "price flex1 flexbox flex-row" }, [
                          createElementVNode("view", { class: "real" }, [
                            createElementVNode("u-text", { class: "c-eb4868 sfs-32" }, "￥22.90")
                          ]),
                          createElementVNode("view", { class: "del" }, [
                            createElementVNode("u-text", { class: "deltxt" }, "￥29.00")
                          ])
                        ]),
                        createElementVNode("view", { class: "btn" }, [
                          createVNode(_component_uv_button, {
                            color: "#ff007f",
                            text: "去抢购",
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
    createVNode(
      _component_uv_popup,
      {
        ref: "giftsRef",
        mode: "bottom",
        round: "10",
        zIndex: "2023",
        customStyle: { "background": "#232831" }
      },
      {
        default: withCtx(() => [
          createElementVNode("view", { class: "ulive__popup-gifts__wrap flexbox flex-col" }, [
            createElementVNode("view", { class: "ulive__popup-gifts__wrap-head flexbox flex-col" }, [
              createElementVNode("view", { class: "infowrap flexbox flex-row" }, [
                createElementVNode("view", { class: "level flex1 flexbox flex-col" }, [
                  createVNode(_component_uv_line_progress, {
                    percentage: 75,
                    height: "5",
                    showText: false,
                    inactiveColor: "#16191f",
                    activeColor: "#eb48ca"
                  }),
                  createElementVNode("u-text", {
                    class: "fs-20",
                    style: { "color": "rgba(255,255,255,.7)" }
                  }, "距离3级还差12金币")
                ]),
                createElementVNode("view", { class: "btn flexbox flex-row" }, [
                  createElementVNode("u-text", { class: "c-ffdd1a fs-26" }, "充值"),
                  createVNode(_component_uv_icon, {
                    name: "arrow-right",
                    color: "#fff",
                    size: "12"
                  })
                ]),
                createElementVNode("view", { class: "btn" }, [
                  createElementVNode("u-text", { class: "c-fff fs-26" }, "个人中心")
                ])
              ]),
              createElementVNode("view", { class: "tabwrap flexbox flex-row" }, [
                createVNode(_component_uv_tabs, {
                  current: $setup.giftsTabCurrent,
                  list: $setup.giftsTabList,
                  "bg-color": "transparent",
                  lineHeight: "0",
                  inactiveStyle: { color: "rgba(255,255,255,.7)", "font-size": "28rpx" },
                  activeStyle: { color: "#ffdd1a", "font-size": "28rpx" }
                }, null, 8, ["current", "list", "inactiveStyle"])
              ])
            ]),
            createElementVNode("scroll-view", {
              scrollY: "",
              style: { "height": "600rpx" }
            }, [
              createElementVNode("view", { class: "ulive__popup-gifts__wrap-body flexbox flex-row" }, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.giftList, (giftitem, giftindex) => {
                    return openBlock(), createElementBlock("view", {
                      key: giftindex,
                      class: normalizeClass(["ulive__popup-gifts__item flexbox flex-col", $setup.giftCur == giftindex ? "on" : ""]),
                      onClick: ($event) => $setup.handleCheckGift(giftitem, giftindex)
                    }, [
                      createElementVNode("u-image", {
                        class: "giftimg",
                        src: giftitem.pic,
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      createElementVNode(
                        "u-text",
                        { class: "giftname" },
                        toDisplayString(giftitem.title),
                        1
                        /* TEXT */
                      ),
                      $setup.giftCur != giftindex ? (openBlock(), createElementBlock("view", {
                        key: 0,
                        class: "giftcoin flexbox flex-row"
                      }, [
                        createVNode(_component_uv_icon, {
                          name: "integral",
                          color: "#fff",
                          size: "14"
                        }),
                        createElementVNode(
                          "u-text",
                          { class: "giftcoin-text" },
                          toDisplayString(giftitem.coins),
                          1
                          /* TEXT */
                        )
                      ])) : (openBlock(), createElementBlock("view", {
                        key: 1,
                        class: "giftbtn",
                        onClick: ($event) => $setup.handleSendGift(giftitem)
                      }, [
                        createElementVNode("u-text", { class: "giftbtn-text" }, "赠送")
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
    createVNode(
      _component_uv_popup,
      {
        ref: "giftModalRef",
        mode: "center",
        round: "3",
        zIndex: "2023",
        customStyle: { "width": "500rpx" }
      },
      {
        default: withCtx(() => [
          createElementVNode("view", { class: "ulive__modal-gifts__content" }, [
            createElementVNode(
              "u-text",
              { class: "fs-30" },
              "确定要支付" + toDisplayString($setup.giftCoins) + "金币吗?",
              1
              /* TEXT */
            )
          ]),
          createElementVNode("view", { class: "ulive__modal-gifts__btns flexbox flex-row" }, [
            createElementVNode("u-text", {
              class: "fs-28 c-999 mr-20",
              onClick: $setup.handleSendGiftClose
            }, "取消"),
            createElementVNode("u-text", { class: "fs-28 c-eb4868 ml-20" }, "去支付")
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
const live = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/curry/Desktop/uni-weLive/pages/live/live.nvue"]]);
export {
  live as default
};
