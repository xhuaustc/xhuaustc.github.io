var STRINGS = {
  zh: {
    heroTitle: "\u62fe\u5149\u62fc\u56fe",
    brandSub: "\u62fe\u5149\u62fc\u56fe",
    navFeatures: "\u529f\u80fd", navHow: "\u73a9\u6cd5", navScreens: "\u622a\u56fe", navPricing: "\u4ef7\u683c", navPrivacy: "\u9690\u79c1",
    ctaAppStoreText: "App Store",
    kicker: "iOS \u00b7 4+ \u00b7 \u514d\u8d39 + Pro \u5347\u7ea7",
    subtitle: "\u7528\u4f60\u81ea\u5df1\u7684\u7167\u7247\u751f\u6210\u6ed1\u5757\u62fc\u56fe\u30027 \u79cd\u7f51\u683c\u30018 \u79cd\u6c89\u6d78\u5f0f\u4e3b\u9898\uff0c\u6bcf\u4e00\u5c40\u90fd\u7ecf\u8fc7\u6570\u5b66\u9a8c\u8bc1\u53ef\u89e3\u3002",
    ctaDownloadText: "App Store \u4e0b\u8f7d",
    ctaNote: "\u514d\u8d39\u5f00\u59cb\uff0cPro \u4e00\u6b21\u6027 $0.99",
    badgeSolvable: "100% \u53ef\u89e3", badgeUndo: "50 \u6b65\u64a4\u9500", badgePrivacy: "\u96f6\u6570\u636e\u91c7\u96c6",
    hlGridTitle: "\u81ea\u7531\u9009\u62e9\u7f51\u683c",
    hlGridDesc: "2\u00d72 / 3\u00d73 / 4\u00d74 / 5\u00d75 / 6\u00d76\uff0c\u8fd8\u6709 3\u00d74\u30014\u00d75 \u77e9\u5f62\u548c\u81ea\u5b9a\u4e49\u5c3a\u5bf8\u3002",
    hlRecordTitle: "\u4e2a\u4eba\u6700\u4f73\u8bb0\u5f55",
    hlRecordDesc: "\u6bcf\u5f20\u7167\u7247 \u00d7 \u6bcf\u79cd\u7f51\u683c\u72ec\u7acb\u8bb0\u5f55\u6700\u4f73\u6b65\u6570\u4e0e\u7528\u65f6\u3002",
    hlThemeTitle: "\u4e3b\u9898 + \u97f3\u4e50",
    hlThemeDesc: "8 \u79cd\u89c6\u89c9\u4e3b\u9898\u5404\u914d\u4e13\u5c5e\u80cc\u666f\u97f3\u4e50\u3002",
    heroHowTitle: "\u600e\u4e48\u73a9", hs1: "\u9009\u7167\u7247", hs2: "\u88c1\u526a", hs3: "\u9009\u7f51\u683c", hs4: "\u6ed1\u52a8\u590d\u539f",
    hfPlatform: "iPhone", hfAge: "4+", hfLang: "5 \u79cd\u8bed\u8a00",
    featPill: "Features", featTitle: "\u529f\u80fd\u7279\u6027",
    featDesc: "\u7167\u7247\u53d8\u62fc\u56fe\uff0c\u4e3b\u9898\u914d\u97f3\u4e50\uff0c3D \u5361\u7247\u52a8\u753b\uff0c\u8fdb\u5ea6\u81ea\u52a8\u8bb0\u5f55\u3002",
    f1Title: "\u4f60\u7684\u7167\u7247\uff0c\u4f60\u7684\u62fc\u56fe", f1Desc: "\u4ece\u76f8\u518c\u5bfc\u5165\u3001\u62cd\u7167\u6216\u9009\u62e9\u5185\u7f6e\u56fe\u5e93\uff0c\u652f\u6301 1:1 / 3:4 \u7cbe\u786e\u88c1\u526a\u3002",
    f2Title: "7 \u79cd\u7f51\u683c\u9884\u8bbe", f2Desc: "\u4ece 2\u00d72 \u5230 6\u00d76\uff0c\u542b\u77e9\u5f62\uff083\u00d74\u30014\u00d75\uff09\u548c\u81ea\u5b9a\u4e49\u5c3a\u5bf8\u3002",
    f3Title: "\u6570\u5b66\u4fdd\u8bc1\u53ef\u89e3", f3Desc: "\u6bcf\u5c40\u62fc\u56fe\u90fd\u7ecf\u8fc7\u9a8c\u8bc1\uff0c\u4e0d\u5b58\u5728\u65e0\u89e3\u5c40\u9762\u3002",
    f4Title: "8 \u79cd\u89c6\u89c9\u4e3b\u9898", f4Desc: "\u6bcf\u4e2a\u4e3b\u9898\u6709\u72ec\u7acb\u80cc\u666f\u4e0e\u97f3\u4e50\uff1aNeon Night\u3001Sunset\u3001Aurora\u3001Starfield\u3001Sakura\u3001Ocean\u3001Paper\u3001Candy\u3002",
    f5Title: "3D \u5361\u7247\u52a8\u753b", f5Desc: "\u5361\u7247\u5f0f 3D \u6548\u679c\uff0c\u6ed1\u52a8\u624b\u611f\u6d41\u7545\u3002",
    f6Title: "\u8ba1\u65f6\u3001\u6b65\u6570\u4e0e\u64a4\u9500", f6Desc: "\u5b9e\u65f6\u8ba1\u65f6\u4e0e\u6b65\u6570\u7edf\u8ba1\uff0c\u6700\u591a 50 \u6b65\u64a4\u9500\uff0c\u968f\u65f6\u9884\u89c8\u539f\u56fe\u3002",
    howTitle: "\u56db\u6b65\u5f00\u59cb", howDesc: "\u9009\u56fe\u3001\u88c1\u526a\u3001\u9009\u96be\u5ea6\u3001\u6ed1\u52a8\u590d\u539f\u3002",
    h1Title: "\u9009\u62e9\u7167\u7247", h1Desc: "\u76f8\u518c\u3001\u76f8\u673a\u6216\u5185\u7f6e\u56fe\u5e93\u3002",
    h2Title: "\u88c1\u526a\u6784\u56fe", h2Desc: "1:1 \u6216 3:4 \u6bd4\u4f8b\u88c1\u526a\u3002",
    h3Title: "\u9009\u62e9\u7f51\u683c", h3Desc: "2\u00d72 \u5230 6\u00d76\uff0c\u542b\u77e9\u5f62\u4e0e\u81ea\u5b9a\u4e49\u3002",
    h4Title: "\u6ed1\u52a8\u590d\u539f", h4Desc: "\u70b9\u51fb\u6216\u6ed1\u52a8\u65b9\u5757\uff0c\u8fd8\u539f\u5b8c\u6574\u56fe\u7247\u5373\u53ef\u8fc7\u5173\u3002",
    themeTitle: "\u4e3b\u9898\u4e00\u89c8", themeDesc: "8 \u79cd\u4e3b\u9898\uff0c\u5404\u6709\u72ec\u7acb\u89c6\u89c9\u98ce\u683c\u4e0e\u80cc\u666f\u97f3\u4e50\u3002",
    progressTitle: "\u8fdb\u5ea6\u8bb0\u5f55", progressDesc: "\u6bcf\u5f20\u7167\u7247 + \u6bcf\u79cd\u7f51\u683c\u72ec\u7acb\u8bb0\u5f55\u6700\u4f73\u6b65\u6570\u4e0e\u7528\u65f6\u3002",
    screenTitle: "\u6e38\u620f\u622a\u56fe", screenDesc: "\u771f\u5b9e\u6e38\u620f\u754c\u9762\u3002",
    priceTitle: "\u514d\u8d39\u4f7f\u7528\uff0c\u53ef\u9009\u5347\u7ea7",
    priceDesc: "\u6838\u5fc3\u73a9\u6cd5\u514d\u8d39\u3002\u4e00\u6b21\u6027\u8d2d\u4e70 Pro \u89e3\u9501\u5168\u90e8\u4e3b\u9898\u3001\u5168\u90e8\u96be\u5ea6\uff0c\u5e76\u79fb\u9664\u5e7f\u544a\u3002",
    freeName: "Free", freeTag: "$0", free1: "\u6838\u5fc3\u6ed1\u5757\u62fc\u56fe\u73a9\u6cd5", free2: "2 \u4e2a\u4e3b\u9898", free3: "\u7f51\u683c\u6700\u9ad8 3\u00d73",
    proName: "Pro", proBadge: "\u4e00\u6b21\u6027\u8d2d\u4e70", proTag: "$0.99",
    pro1: "\u5168\u90e8 8 \u4e2a\u4e3b\u9898 + \u97f3\u4e50", pro2: "\u5168\u90e8\u96be\u5ea6\u5230 6\u00d76", pro3: "\u65e0\u5e7f\u544a",
    specTitle: "\u89c4\u683c\u4e0e\u9690\u79c1",
    spPlatform: "\u5e73\u53f0", spPlatformVal: "iPhone (iOS 17+)",
    spCategory: "\u5206\u7c7b", spCategoryVal: "Puzzle", spAge: "\u5e74\u9f84", spAgeVal: "4+",
    spLang: "\u8bed\u8a00", spLangVal: "EN / \u7b80\u4e2d / \u7e41\u4e2d / \u65e5 / \u97e9",
    privacyTitle: "\u9690\u79c1", privacyDesc: "\u5f00\u53d1\u8005\u58f0\u660e\uff1a\u4e0d\u6536\u96c6\u4efb\u4f55\u6570\u636e (Data Not Collected)\u3002",
    ctaOpenText: "App Store \u9875\u9762", devLabel: "\u5f00\u53d1\u8005", devVal: "Xiaohua Pan",
    footerLine1: "Gleamory \u00b7 \u62fe\u5149\u62fc\u56fe"
  },
  en: {
    heroTitle: "Gleamory",
    brandSub: "Photo Sliding Puzzle",
    navFeatures: "Features", navHow: "How to play", navScreens: "Screenshots", navPricing: "Pricing", navPrivacy: "Privacy",
    ctaAppStoreText: "App Store",
    kicker: "iOS \u00b7 Ages 4+ \u00b7 Free with Pro upgrade",
    subtitle: "Turn your photos into sliding puzzles. 7 grid presets, 8 immersive themes, and every puzzle is mathematically guaranteed solvable.",
    ctaDownloadText: "Download on App Store",
    ctaNote: "Free to start \u00b7 Pro $0.99 one-time",
    badgeSolvable: "100% solvable", badgeUndo: "50-step undo", badgePrivacy: "Zero data collected",
    hlGridTitle: "Flexible grids", hlGridDesc: "2\u00d72 / 3\u00d73 / 4\u00d74 / 5\u00d75 / 6\u00d76, plus 3\u00d74, 4\u00d75 rectangles and custom sizes.",
    hlRecordTitle: "Personal bests", hlRecordDesc: "Separate best-moves and best-time records per photo \u00d7 grid.",
    hlThemeTitle: "Themes + music", hlThemeDesc: "8 visual themes, each with its own background music.",
    heroHowTitle: "How to play", hs1: "Pick photo", hs2: "Crop", hs3: "Choose grid", hs4: "Slide to solve",
    hfPlatform: "iPhone", hfAge: "4+", hfLang: "5 languages",
    featPill: "Features", featTitle: "Features",
    featDesc: "Photos become puzzles. Themes with music. 3D card animations. Progress tracking.",
    f1Title: "Your photos, your puzzles", f1Desc: "Import from album, shoot with camera, or use the built-in gallery. Crop at 1:1 or 3:4.",
    f2Title: "7 grid presets", f2Desc: "From 2\u00d72 to 6\u00d76, including rectangular grids (3\u00d74, 4\u00d75) and custom sizes.",
    f3Title: "Guaranteed solvable", f3Desc: "Every puzzle is mathematically verified \u2014 no unsolvable layouts.",
    f4Title: "8 visual themes", f4Desc: "Each with unique background and music: Neon Night, Sunset, Aurora, Starfield, Sakura, Ocean, Paper, Candy.",
    f5Title: "3D card animations", f5Desc: "Card-style 3D tiles with smooth sliding motion.",
    f6Title: "Timer, moves & undo", f6Desc: "Real-time move counter and timer, up to 50-step undo, original image preview anytime.",
    howTitle: "Four steps", howDesc: "Pick, crop, choose grid, slide to solve.",
    h1Title: "Pick a photo", h1Desc: "Album, camera, or built-in gallery.",
    h2Title: "Crop it", h2Desc: "1:1 or 3:4 aspect ratio.",
    h3Title: "Choose a grid", h3Desc: "2\u00d72 to 6\u00d76, rectangles, or custom.",
    h4Title: "Slide to solve", h4Desc: "Tap or swipe tiles to restore the full image.",
    themeTitle: "Themes", themeDesc: "8 themes, each with its own visuals and background music.",
    progressTitle: "Progress tracking", progressDesc: "Personal best per photo + grid combination.",
    screenTitle: "Screenshots", screenDesc: "Actual in-game screens.",
    priceTitle: "Free to play, optional upgrade",
    priceDesc: "Core gameplay is free. One-time Pro purchase unlocks all themes, all difficulties, and removes ads.",
    freeName: "Free", freeTag: "$0", free1: "Core sliding puzzle gameplay", free2: "2 themes", free3: "Grids up to 3\u00d73",
    proName: "Pro", proBadge: "One-time", proTag: "$0.99",
    pro1: "All 8 themes + music", pro2: "All difficulties up to 6\u00d76", pro3: "Ad-free",
    specTitle: "Specs & privacy",
    spPlatform: "Platform", spPlatformVal: "iPhone (iOS 17+)",
    spCategory: "Category", spCategoryVal: "Puzzle", spAge: "Age rating", spAgeVal: "4+",
    spLang: "Languages", spLangVal: "EN / SC / TC / JA / KO",
    privacyTitle: "Privacy", privacyDesc: "Developer states: Data Not Collected.",
    ctaOpenText: "App Store page", devLabel: "Developer", devVal: "Xiaohua Pan",
    footerLine1: "Gleamory \u00b7 Photo Sliding Puzzle"
  }
};

function getInitialLang() {
  var url = new URL(window.location.href);
  var q = (url.searchParams.get("lang") || "").toLowerCase();
  if (q === "en" || q === "zh") return q;
  var s = (localStorage.getItem("gleamory_lang") || "").toLowerCase();
  if (s === "en" || s === "zh") return s;
  return (navigator.language || "").startsWith("zh") ? "zh" : "en";
}

var currentLang = getInitialLang();
function t(k) { return (STRINGS[currentLang] && STRINGS[currentLang][k]) || k; }

function applyLang() {
  document.documentElement.lang = currentLang;
  document.title = currentLang === "zh" ? "Gleamory - \u62fe\u5149\u62fc\u56fe" : "Gleamory - Photo Sliding Puzzle";
  document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
  document.getElementById("langPill").textContent = currentLang === "zh" ? "EN" : "\u4e2d\u6587";
  localStorage.setItem("gleamory_lang", currentLang);
}

function setHeroShot(n) {
  var img = document.getElementById("heroShot");
  img.src = "./images/" + n + ".jpg";
  img.alt = "Gleamory screenshot " + n;
  document.querySelectorAll(".thumb").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-shot") === String(n) ? "true" : "false");
  });
}

function setupShots() {
  var active = 1, timer = null;
  function startAuto() { stopAuto(); timer = setInterval(function () { active = active >= 7 ? 1 : active + 1; setHeroShot(active); }, 6000); }
  function stopAuto() { if (timer) clearInterval(timer); timer = null; }
  document.querySelectorAll(".thumb").forEach(function (btn) {
    btn.addEventListener("click", function () { active = Number(btn.getAttribute("data-shot") || "1"); setHeroShot(active); startAuto(); });
  });
  setHeroShot(active);
  startAuto();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("langToggle").addEventListener("click", function () { currentLang = currentLang === "zh" ? "en" : "zh"; applyLang(); });
  var menuBtn = document.getElementById("menuBtn"), mobileNav = document.getElementById("mobileNav");
  menuBtn.addEventListener("click", function () { mobileNav.classList.toggle("open"); });
  mobileNav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { mobileNav.classList.remove("open"); }); });
  applyLang();
  setupShots();
});
