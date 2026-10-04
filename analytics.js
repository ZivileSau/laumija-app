(function () {
  "use strict";

  const measurementId = "G-PYNH0JWBMG";
  const trackedHosts = new Set(["zivilesau.github.io", "laumija.lt", "www.laumija.lt"]);
  if (!trackedHosts.has(window.location.hostname)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: true,
    page_path: window.location.pathname + window.location.search + window.location.hash
  });

  const loader = document.createElement("script");
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(loader);

  document.addEventListener("click", function (event) {
    const chapterButton = event.target.closest("button[data-chapter]");
    if (chapterButton) {
      window.gtag("event", "chapter_view", {
        chapter_number: chapterButton.dataset.chapter,
        page_title: document.title
      });
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link) return;
    let target;
    try { target = new URL(link.href, window.location.href); } catch (_) { return; }
    window.gtag("event", "navigation_click", {
      link_text: (link.textContent || link.getAttribute("aria-label") || "").trim().slice(0, 100),
      link_url: target.href,
      link_domain: target.hostname,
      outbound: target.hostname !== window.location.hostname
    });
  });
})();
