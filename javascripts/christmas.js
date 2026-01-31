(function () {
  const LIGHT = "light";
  const DARK = "dark";

  const script = document.currentScript;
  const url = new URL(script.src);

  const startDate = url.searchParams.get("startDate") || "12-01";
  const endDate = url.searchParams.get("endDate") || "01-15";
  const themeParam = url.searchParams.get("theme");
  const positions = (url.searchParams.get("positions") || "top,right,bottom,left")
    .split(",");

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

  /* ------------------ Copos de nieve ------------------ */

  function applySnow() {
    clearInterval(window.__xmasSnowflakeInterval);

    const style = document.createElement("style");
    style.innerHTML = `
      .__xmas_snowflake__ {
        position: fixed;
        top: -10px;
        pointer-events: none;
        user-select: none;
        animation: __xmas_fall__ linear infinite;
        z-index: 3;
        text-shadow: 0 0 3px rgba(0,0,0,0.7);
      }
      @keyframes __xmas_fall__ {
        to {
          transform: translateY(110vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const interval = isMobile ? 1400 : 1100;

    window.__xmasSnowflakeInterval = setInterval(() => {
      if (document.querySelectorAll(".__xmas_snowflake__").length > 40) {
        return;
      }
      const flake = document.createElement("div");
      flake.className = "__xmas_snowflake__";
      flake.textContent = "❄";

      flake.style.left = Math.random() * window.innerWidth + "px";
      flake.style.fontSize = 8 + Math.random() * 18 + "px";
      flake.style.opacity = 0.7 + Math.random() * 0.3;
      flake.style.animationDuration = 5 + Math.random() * 5 + "s";
      flake.style.color = theme === LIGHT ? "#1e90ff" : "white";

      document.body.appendChild(flake);
      setTimeout(() => flake.remove(), 12000);
    }, interval);
  }

  /* ------------------ Luces de borde ------------------ */

  function applyLights() {
    const style = document.createElement("style");
    style.innerHTML = `
      .__xmas_border_lights__ {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 4;
      }
      .__xmas_light__ {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
        animation: __xmas_twinkle__ ease-in-out infinite;
      }
      @keyframes __xmas_twinkle__ {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.4); }
      }
    `;
    document.head.appendChild(style);

    const container = document.createElement("div");
    container.className = "__xmas_border_lights__";

    const colorsDark = ["#dc2626", "#16a34a", "#eab308", "#ffffff"];
    const colorsLight = ["#1e40af", "#dc2626", "#16a34a", "#eab308"];
    const colors = theme === DARK ? colorsDark : colorsLight;
    const spacing = 40;

    function createLight(i) {
      const el = document.createElement("div");
      const color = colors[i % colors.length];
      el.className = "__xmas_light__";
      el.style.backgroundColor = color;
      el.style.color = color;
      el.style.animationDuration = 1 + Math.random() * 1.5 + "s";
      el.style.animationDelay = Math.random() * 2 + "s";
      return el;
    }

    function render() {
      container.innerHTML = "";
      const w = window.innerWidth;
      const h = window.innerHeight;
      let i = 0;

      if (positions.includes("top"))
        for (let x = spacing; x < w - spacing; x += spacing) {
          const l = createLight(i++);
          l.style.left = x + "px";
          l.style.top = "10px";
          container.appendChild(l);
        }

      if (positions.includes("right"))
        for (let y = spacing; y < h - spacing; y += spacing) {
          const l = createLight(i++);
          l.style.right = "10px";
          l.style.top = y + "px";
          container.appendChild(l);
        }

      if (positions.includes("bottom"))
        for (let x = w - spacing; x > spacing; x -= spacing) {
          const l = createLight(i++);
          l.style.left = x + "px";
          l.style.bottom = "10px";
          container.appendChild(l);
        }

      if (positions.includes("left"))
        for (let y = h - spacing; y > spacing; y -= spacing) {
          const l = createLight(i++);
          l.style.left = "10px";
          l.style.top = y + "px";
          container.appendChild(l);
        }
    }

    render();

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(render, 100);
    });

    document.body.appendChild(container);
  }

  /* ------------------ Activación ------------------ */

  applySnow();
  applyLights();
})();
