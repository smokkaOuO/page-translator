(function () {
  'use strict';

  // 沙盒框架（origin 為 "null"）無法載入擴充功能資源，直接跳過以免 Chrome 記錄錯誤
  if (self.origin === "null") return;

  const injectTime = performance.now();
  (async () => {
    const { onExecute } = await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/src-content-index.ts-B4kM8-jd.js")
    );
    onExecute?.({ perf: { injectTime, loadTime: performance.now() - injectTime } });
  })().catch(console.error);

})();
