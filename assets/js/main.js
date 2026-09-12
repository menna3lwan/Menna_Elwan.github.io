/* ==========================================================================
   Menna Elwan — Portfolio interactions
   Vanilla JS, no dependencies. Keeps things fast and easy to maintain.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  /* ---------------- Project filters ---------------- */
  function initProjectFilters() {
    var buttons = document.querySelectorAll(".filter-btn");
    var cards = document.querySelectorAll("[data-category]");
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var filter = btn.getAttribute("data-filter");

        cards.forEach(function (card) {
          var cats = (card.getAttribute("data-category") || "").split(" ");
          var show = filter === "all" || cats.indexOf(filter) !== -1;
          card.style.display = show ? "" : "none";
        });
      });
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
    initNavbarScroll();
    initMobileNav();
    initScrollspy();
    initReveal();
    initTypewriter();
    initCounters();
    initProjectFilters();
    initBackToTop();
    initYear();
  });
})();
