var __wxsModules={};

__wxsModules["1f01b1f2"] = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
      function scroll(event, ownerInstance) {
        var detail = event.detail;
        var scrollWidth = detail.scrollWidth;
        var scrollLeft = detail.scrollLeft;
        var dataset = event.currentTarget.dataset;
        var scrollComponentWidth = dataset.scrollWidth || dataset.scrollwidth || 0;
        var indicatorWidth = dataset.indicatorWidth || dataset.indicatorwidth || 0;
        var barWidth = dataset.barWidth || dataset.barwidth || 0;
        var x = scrollLeft / (scrollWidth - scrollComponentWidth) * (indicatorWidth - barWidth);
        setBarStyle(ownerInstance, x, dataset.unit);
      }
      function scrolltolower(event, ownerInstance) {
        ownerInstance.callMethod("scrollEvent", "right");
        var dataset = event.currentTarget.dataset;
        var indicatorWidth = dataset.indicatorWidth || dataset.indicatorwidth || 0;
        var barWidth = dataset.barWidth || dataset.barwidth || 0;
        setBarStyle(ownerInstance, indicatorWidth - barWidth, dataset.unit);
      }
      function scrolltoupper(event, ownerInstance) {
        var dataset = event.currentTarget.dataset;
        ownerInstance.callMethod("scrollEvent", "left");
        setBarStyle(ownerInstance, 0, dataset.unit);
      }
      function setBarStyle(ownerInstance, x, unit) {
        ownerInstance.selectComponent(".uv-scroll-list__indicator__line__bar") && ownerInstance.selectComponent(".uv-scroll-list__indicator__line__bar").setStyle({
          transform: unit == "rpx" ? "translateX(" + x + "rpx)" : "translateX(" + x + "px)"
        });
      }
      module.exports = {
        scroll,
        scrolltolower,
        scrolltoupper
      };
    }
  });
  return require_stdin();
})();
