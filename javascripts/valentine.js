(function () {
  const LIGHT = "light";
  const DARK = "dark";

  const script = document.currentScript;
  const url = new URL(script.src);

  const startDate = url.searchParams.get("startDate") || "02-01";
  const endDate = url.searchParams.get("endDate") || "02-28";
  const themeParam = url.searchParams.get("theme");

  /* ------------------ Utilidades ------------------ */

  function isInDateRange(start, end) {
    const now = new Date();
    const year = now.getFullYear();

    let startD = new Date(`${year}-${start}`);
    let endD = new Date(`${year}-${end}`);

    if (endD < startD) {
      if (now < startD) startD.setFullYear(year - 1);
      else endD.setFullYear(year + 1);
    }

    return now >= startD && now <= endD;
  }

  function detectTheme(forced) {
    if (forced) return forced === LIGHT ? LIGHT : DARK;

    const rgb = getComputedStyle(document.body)
      .backgroundColor.match(/\d+/g);

    if (!rgb || rgb.length < 3) return LIGHT;

    const brightness =
      0.299 * rgb[0] +
      0.587 * rgb[1] +
      0.114 * rgb[2];

    return brightness < 128 ? DARK : LIGHT;
  }

  if (
    !isInDateRange(startDate, endDate) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const theme = detectTheme(themeParam);

  /* ------------------ Corazones flotantes ------------------ */

  function applyHearts() {
    clearInterval(window.__floatingHeartsInterval);

    const style = document.createElement("style");
    style.innerHTML = `
      .__floating_heart__ {
        position: fixed;
        bottom: -20px;
        pointer-events: none;
        user-select: none;
        animation: __heart_float__ linear forwards;
        z-index: 3;
        will-change: transform, opacity;
      }

      @keyframes __heart_float__ {
        0% {
          transform: translateY(0) translateX(0) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        100% {
          transform: translateY(-120vh) translateX(var(--drift)) scale(1.4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const interval = isMobile ? 1200 : 900;

    window.__floatingHeartsInterval = setInterval(() => {
      if (document.querySelectorAll(".__floating_heart__").length > 35) {
        return;
      }

      const heart = document.createElement("div");
      heart.className = "__floating_heart__";
      heart.textContent = "❤";

      const size = 10 + Math.random() * 20;
      const duration = 6 + Math.random() * 6;
      const drift = (Math.random() * 100 - 50).toFixed(0) + "px";

      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.fontSize = size + "px";
      heart.style.animationDuration = duration + "s";
      heart.style.setProperty("--drift", drift);
      heart.style.opacity = 0.8;

      heart.style.color =
        theme === DARK
          ? ["#fb7185", "#f472b6", "#fda4af"][Math.floor(Math.random() * 3)]
          : ["#dc2626", "#e11d48", "#be123c"][Math.floor(Math.random() * 3)];

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), duration * 1000);
    }, interval);
  }

  /* ------------------ Activación ------------------ */

  applyHearts();
})();
