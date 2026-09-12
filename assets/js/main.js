/* ==========================================================================
   Menna Elwan — Portfolio interactions
   Vanilla JS, no dependencies. Keeps things fast and easy to maintain.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------------- Theme toggle ---------------- */
  function initTheme() {
    var stored = localStorage.getItem("me-theme");
    var systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    var theme = stored || (systemPrefersLight ? "light" : "dark");
    root.setAttribute("data-theme", theme);

    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("me-theme", next);
    });
  }

  /* ---------------- Scroll progress bar ---------------- */
  function initScrollProgress() {
    var bar = document.querySelector(".scroll-progress__bar");
    if (!bar) return;

    var ticking = false;
    function update() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      bar.style.transform = "scaleX(" + pct + ")";
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---------------- Navbar scroll state ---------------- */
  function initNavbarScroll() {
    var navbar = document.querySelector(".navbar");
    if (!navbar) return;
    function onScroll() {
      navbar.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Mobile nav toggle ---------------- */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Nav sliding indicator ---------------- */
  function initNavIndicator() {
    var nav = document.querySelector(".nav-links");
    var indicator = document.querySelector(".nav-indicator");
    if (!nav || !indicator || !canHover) return;

    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    var hovering = false;

    function place(link) {
      if (!link) {
        indicator.style.opacity = "0";
        return;
      }
      var navRect = nav.getBoundingClientRect();
      var linkRect = link.getBoundingClientRect();
      indicator.style.opacity = "1";
      indicator.style.width = linkRect.width + "px";
      indicator.style.transform = "translateX(" + (linkRect.left - navRect.left) + "px)";
    }

    function placeActive() {
      if (hovering) return;
      var active = nav.querySelector("a.active");
      place(active);
    }

    links.forEach(function (link) {
      link.addEventListener("mouseenter", function () {
        hovering = true;
        place(link);
      });
    });

    nav.addEventListener("mouseleave", function () {
      hovering = false;
      placeActive();
    });

    window.addEventListener("resize", placeActive);

    // Expose so scrollspy can nudge the indicator when the active link changes.
    window.__meMoveNavIndicator = placeActive;
    placeActive();
  }

  /* ---------------- Scrollspy: highlight active nav link ---------------- */
  function initScrollspy() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
    if (!sections.length || !navLinks.length) return;

    var map = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      map[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.id;
          var link = map[id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("active"); });
            link.classList.add("active");
            if (window.__meMoveNavIndicator) window.__meMoveNavIndicator();
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (prefersReducedMotion) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------- Typewriter for role line ---------------- */
  function initTypewriter() {
    var el = document.querySelector("[data-typewriter]");
    if (!el) return;

    var roles;
    try {
      roles = JSON.parse(el.getAttribute("data-typewriter"));
    } catch (e) {
      return;
    }
    if (!roles || !roles.length) return;

    if (prefersReducedMotion) {
      el.textContent = roles[0];
      return;
    }

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var typeSpeed = 55;
    var deleteSpeed = 30;
    var holdTime = 1800;

    function tick() {
      var word = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          setTimeout(tick, holdTime);
          return;
        }
        setTimeout(tick, typeSpeed);
      } else {
        charIndex--;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, 350);
          return;
        }
        setTimeout(tick, deleteSpeed);
      }
    }
    tick();
  }

  /* ---------------- Animated counters ---------------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;
    var start = null;

    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------- Project filters (with sliding pill indicator) ---------------- */
  function initProjectFilters() {
    var bar = document.querySelector(".filter-bar");
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
    var cards = document.querySelectorAll("[data-category]");
    var indicator = document.querySelector(".filter-indicator");
    if (!buttons.length || !cards.length) return;

    function placeIndicator(btn) {
      if (!indicator || !bar || !btn) return;
      var barRect = bar.getBoundingClientRect();
      var btnRect = btn.getBoundingClientRect();
      indicator.style.width = btnRect.width + "px";
      indicator.style.transform = "translateX(" + (btnRect.left - barRect.left) + "px)";
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        placeIndicator(btn);
        var filter = btn.getAttribute("data-filter");

        cards.forEach(function (card) {
          var cats = (card.getAttribute("data-category") || "").split(" ");
          var show = filter === "all" || cats.indexOf(filter) !== -1;
          card.style.display = show ? "" : "none";
        });
      });
    });

    var initial = bar ? bar.querySelector(".filter-btn.active") : null;
    if (initial) placeIndicator(initial);
    window.addEventListener("resize", function () {
      var active = bar.querySelector(".filter-btn.active");
      if (active) placeIndicator(active);
    });
  }

  /* ---------------- Project card tilt + cursor glow ---------------- */
  function initProjectTilt() {
    if (!canHover || prefersReducedMotion) return;

    var cards = document.querySelectorAll(".project-card");
    cards.forEach(function (card) {
      card.classList.add("can-tilt");
      var rafId = null;
      var rect = null;

      card.addEventListener("pointerenter", function () {
        rect = card.getBoundingClientRect();
      });

      card.addEventListener("pointermove", function (e) {
        if (rafId) return;
        rafId = requestAnimationFrame(function () {
          rafId = null;
          if (!rect) rect = card.getBoundingClientRect();
          var px = (e.clientX - rect.left) / rect.width;
          var py = (e.clientY - rect.top) / rect.height;
          var rotateY = (px - 0.5) * 8;
          var rotateX = (0.5 - py) * 8;
          card.style.transform =
            "translateY(-8px) perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
          card.style.setProperty("--mx", px * 100 + "%");
          card.style.setProperty("--my", py * 100 + "%");
        });
      });

      card.addEventListener("pointerleave", function () {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        card.style.transform = "";
      });
    });
  }

  /* ---------------- Fade in project images once loaded ---------------- */
  function initImageFade() {
    var medias = document.querySelectorAll(".project-media:not(.no-image)");
    medias.forEach(function (media) {
      var img = media.querySelector("img");
      if (!img) return;
      function markLoaded() {
        media.classList.add("is-loaded");
      }
      if (img.complete && img.naturalWidth > 0) {
        markLoaded();
      } else {
        img.addEventListener("load", markLoaded);
        img.addEventListener("error", markLoaded);
      }
    });
  }

  /* ---------------- Back to top ---------------- */
  function initBackToTop() {
    var btn = document.querySelector(".back-to-top");
    if (!btn) return;
    function onScroll() {
      btn.classList.toggle("is-visible", window.scrollY > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Footer year ---------------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initScrollProgress();
    initNavbarScroll();
    initMobileNav();
    initNavIndicator();
    initScrollspy();
    initReveal();
    initTypewriter();
    initCounters();
    initProjectFilters();
    initProjectTilt();
    initImageFade();
    initBackToTop();
    initYear();
  });
})();
