var STRINGS = {
  zh: {
    heroTitle: "Meridian",
    brandSub: "本地代理管理器",
    navFeatures: "功能", navDetails: "详情", navScreens: "截图", navDownload: "下载",
    ctaDownload: "下载",
    kicker: "macOS \u00b7 Windows \u00b7 Linux \u00b7 免费",
    heroSub: "轻渡",
    subtitle: "优雅的本地代理管理器。可视化管理反向代理、SSL 证书与访问控制，内置 Nginx 引擎，开箱即用。",
    ctaDownloadFull: "免费下载",
    ctaNote: "v0.1.0 \u00b7 macOS / Windows / Linux",
    badgeNative: "原生桌面应用", badgeNginx: "内置 Nginx", badgeTLS: "自动 TLS", badgeCross: "跨平台",
    hlProxyTitle: "HTTP / HTTPS / TCP / UDP",
    hlProxyDesc: "支持四种代理模式、多上游负载均衡、WebSocket、自定义 Header 和路径前缀路由。",
    hlCertTitle: "证书全自动管理",
    hlCertDesc: "一键自签名、上传 PEM、ACME 自动申请 Let's Encrypt，支持通配符域名。",
    hlGuiTitle: "告别手写 nginx.conf",
    hlGuiDesc: "可视化界面操作，实时配置验证，出错自动回滚，再也不用手动编辑配置文件。",
    featPill: "Core Features", featTitle: "核心功能",
    featDesc: "一站式本地代理管理，从创建规则到签发证书，一切尽在掌握。",
    f1Title: "反向代理", f1Desc: "HTTP/HTTPS/TCP/UDP 四种模式，支持域名路由、路径前缀和多上游负载均衡。",
    f2Title: "SSL 证书管理", f2Desc: "自签名、PEM 上传、ACME 自动申请，支持 Cloudflare / AliDNS / DNSPod / Route 53。",
    f3Title: "访问控制", f3Desc: "创建 IP 黑白名单，支持 CIDR 网段，按优先级有序匹配，绑定任意代理规则。",
    f4Title: "实时监控", f4Desc: "请求量、错误率、响应延迟、带宽统计，可视化图表，支持按规则筛选。",
    f5Title: "Hosts 管理", f5Desc: "可视化编辑本地 DNS，一键同步系统 hosts 文件，智能关联代理规则。",
    f6Title: "系统托盘常驻", f6Desc: "关闭窗口后台运行，托盘菜单快速控制引擎启停，显示运行时间。",
    engineTitle: "Nginx 引擎管理", engineDesc: "内置预编译 Nginx，零依赖开箱即用。",
    e1Title: "一键启停与重载", e1Desc: "侧边栏实时状态指示，启动 / 停止 / 重载一键操作。",
    e2Title: "配置预检", e2Desc: "每次重载前自动运行 nginx -t 验证配置，失败自动回滚到上一个有效版本。",
    e3Title: "开机自启", e3Desc: "支持随系统启动，并可设置自动启动引擎，全程无需手动干预。",
    e4Title: "健康检查", e4Desc: "后台持续监控 Nginx 进程状态，异常退出时即时通知前端。",
    expTitle: "原生体验", expDesc: "为每个平台精心适配的桌面体验。",
    x1Title: "macOS 毛玻璃侧边栏", x1Desc: "NSVisualEffect 磨砂质感，红绿灯按钮无缝集成。",
    x2Title: "Windows Mica 材质", x2Desc: "Windows 11 Mica 透明效果，旧版本优雅降级。",
    x3Title: "极致轻量", x3Desc: "安装包约 10 MB，空闲内存不到 150 MB，启动不超过 3 秒。",
    x4Title: "多语言", x4Desc: "中英文完整覆盖，自动识别系统语言，可随时切换。",
    screenTitle: "应用截图", screenDesc: "真实界面展示，所见即所得。",
    dlPill: "Download", dlTitle: "免费下载", dlDesc: "选择你的平台，立即开始使用。",
    dlMacArm: "Apple Silicon DMG",
    dlMacIntel: "Intel DMG",
    dlMacArmArchive: "Apple Silicon App",
    dlMacIntelArchive: "Intel App",
    dlWinMsi: "MSI 安装包",
    dlWinExe: "EXE 安装包",
    dlNote: "当前公开版本 v0.1.0，发布于 2026-05-08。",
    dlAllReleases: "查看所有版本",
    specTitle: "规格与隐私",
    spPlatform: "平台", spPlatformVal: "macOS / Windows / Linux",
    spEngine: "引擎", spEngineVal: "Nginx 1.26 (内置)",
    spSize: "安装包", spSizeVal: "~10 MB",
    spLang: "语言", spLangVal: "中文 / English",
    privacyTitle: "隐私",
    privacyDesc: "Meridian 完全离线运行，不收集任何用户数据。所有代理规则、证书和配置仅保存在本地。",
    devLabel: "开发者",
    footerLine1: "Meridian \u00b7 轻渡 \u00b7 本地代理管理器"
  },
  en: {
    heroTitle: "Meridian",
    brandSub: "Local Proxy Manager",
    navFeatures: "Features", navDetails: "Details", navScreens: "Screenshots", navDownload: "Download",
    ctaDownload: "Download",
    kicker: "macOS \u00b7 Windows \u00b7 Linux \u00b7 Free",
    heroSub: "\u8f7b\u6e21",
    subtitle: "An elegant local proxy manager. Visually manage reverse proxies, SSL certificates & access control with a built-in Nginx engine \u2014 zero config, ready out of the box.",
    ctaDownloadFull: "Free Download",
    ctaNote: "v0.1.0 \u00b7 macOS / Windows / Linux",
    badgeNative: "Native Desktop", badgeNginx: "Built-in Nginx", badgeTLS: "Auto TLS", badgeCross: "Cross-platform",
    hlProxyTitle: "HTTP / HTTPS / TCP / UDP",
    hlProxyDesc: "Four proxy modes with multi-upstream load balancing, WebSocket support, custom headers, and path prefix routing.",
    hlCertTitle: "Fully Automated Certs",
    hlCertDesc: "One-click self-signed, PEM upload, or ACME auto-request from Let's Encrypt with wildcard domain support.",
    hlGuiTitle: "No More nginx.conf",
    hlGuiDesc: "Visual interface with real-time config validation and automatic rollback on errors. Never hand-edit config files again.",
    featPill: "Core Features", featTitle: "Core Features",
    featDesc: "All-in-one local proxy management \u2014 from creating rules to issuing certificates.",
    f1Title: "Reverse Proxy", f1Desc: "HTTP/HTTPS/TCP/UDP modes with domain routing, path prefix, and multi-upstream load balancing.",
    f2Title: "SSL Certificates", f2Desc: "Self-signed, PEM upload, ACME auto-request. Supports Cloudflare / AliDNS / DNSPod / Route 53.",
    f3Title: "Access Control", f3Desc: "IP allow/deny lists with CIDR support, priority-ordered matching, bindable to any proxy rule.",
    f4Title: "Real-time Monitoring", f4Desc: "Request volume, error rate, latency, bandwidth \u2014 visual charts with per-rule filtering.",
    f5Title: "Hosts Management", f5Desc: "Visual local DNS editor with one-click system hosts sync and smart proxy association.",
    f6Title: "System Tray", f6Desc: "Runs in background when closed. Tray menu for quick engine control with uptime display.",
    engineTitle: "Nginx Engine", engineDesc: "Pre-compiled Nginx bundled in \u2014 zero dependencies, works out of the box.",
    e1Title: "Start / Stop / Reload", e1Desc: "Live status indicator in the sidebar. One-click engine lifecycle control.",
    e2Title: "Config Pre-check", e2Desc: "Runs nginx -t before every reload. Automatically rolls back to the last working config on failure.",
    e3Title: "Auto-start", e3Desc: "Launch at login with optional auto-start engine \u2014 fully hands-free operation.",
    e4Title: "Health Check", e4Desc: "Continuous background process monitoring with instant frontend notification on unexpected exits.",
    expTitle: "Native Experience", expDesc: "Carefully crafted for each platform.",
    x1Title: "macOS Vibrancy Sidebar", x1Desc: "NSVisualEffect frosted glass with seamless traffic light button integration.",
    x2Title: "Windows Mica Material", x2Desc: "Windows 11 Mica transparency with graceful fallback for older versions.",
    x3Title: "Ultra Lightweight", x3Desc: "~10 MB installer, under 150 MB idle memory, cold start in under 3 seconds.",
    x4Title: "Multilingual", x4Desc: "Full Chinese and English coverage. Auto-detects system language, switchable anytime.",
    screenTitle: "Screenshots", screenDesc: "Real interface, what you see is what you get.",
    dlPill: "Download", dlTitle: "Free Download", dlDesc: "Choose your platform and get started.",
    dlMacArm: "Apple Silicon DMG",
    dlMacIntel: "Intel DMG",
    dlMacArmArchive: "Apple Silicon App",
    dlMacIntelArchive: "Intel App",
    dlWinMsi: "MSI Installer",
    dlWinExe: "EXE Installer",
    dlNote: "Current public release v0.1.0, published on 2026-05-08.",
    dlAllReleases: "View all releases",
    specTitle: "Specs & Privacy",
    spPlatform: "Platform", spPlatformVal: "macOS / Windows / Linux",
    spEngine: "Engine", spEngineVal: "Nginx 1.26 (built-in)",
    spSize: "Installer", spSizeVal: "~10 MB",
    spLang: "Languages", spLangVal: "Chinese / English",
    privacyTitle: "Privacy",
    privacyDesc: "Meridian runs entirely offline and collects zero user data. All proxy rules, certificates, and settings are stored locally.",
    devLabel: "Developer",
    footerLine1: "Meridian \u00b7 Local Proxy Manager"
  }
};

function getInitialLang() {
  var url = new URL(window.location.href);
  var q = (url.searchParams.get("lang") || "").toLowerCase();
  if (q === "en" || q === "zh") return q;
  var s = (localStorage.getItem("meridian_lang") || "").toLowerCase();
  if (s === "en" || s === "zh") return s;
  return (navigator.language || "").startsWith("zh") ? "zh" : "en";
}

var currentLang = getInitialLang();
function t(k) { return (STRINGS[currentLang] && STRINGS[currentLang][k]) || k; }

function applyLang() {
  document.documentElement.lang = currentLang;
  document.title = currentLang === "zh" ? "Meridian - 轻渡 · 本地代理管理器" : "Meridian - Local Proxy Manager";
  document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
  document.getElementById("langPill").textContent = currentLang === "zh" ? "EN" : "\u4e2d\u6587";
  localStorage.setItem("meridian_lang", currentLang);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("langToggle").addEventListener("click", function () { currentLang = currentLang === "zh" ? "en" : "zh"; applyLang(); });
  var menuBtn = document.getElementById("menuBtn"), mobileNav = document.getElementById("mobileNav");
  menuBtn.addEventListener("click", function () { mobileNav.classList.toggle("open"); });
  mobileNav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { mobileNav.classList.remove("open"); }); });
  applyLang();
});
