// Stay Maven — frontend interactions
(function () {
  "use strict";

  // Nav: scroll state + mobile toggle
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");

  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      const expanded = nav.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", String(expanded));
      document.body.style.overflow = expanded ? "hidden" : "";
    });

    // Close on link tap (mobile)
    document.querySelectorAll(".nav__links a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Set active nav link based on path
  const path = window.location.pathname.replace(/\/$/, "");
  document.querySelectorAll(".nav__links a").forEach((a) => {
    const href = a.getAttribute("href").replace(/\/$/, "");
    if (!href) return;
    if (path === href || (path === "" && href.endsWith("index.html"))) {
      a.classList.add("is-active");
    } else if (href !== "/" && path.includes(href.replace(".html", "")) && href !== "index.html") {
      a.classList.add("is-active");
    }
  });

  // Contact form (no-op local demo)
  const form = document.querySelector("form[data-form='contact']");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type='submit']");
      if (btn) {
        const original = btn.textContent;
        btn.textContent = "Thanks — we'll be in touch";
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          form.reset();
        }, 3200);
      }
    });
  }
})();
