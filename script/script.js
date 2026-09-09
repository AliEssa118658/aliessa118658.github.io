document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const navLinks = document.querySelectorAll('.site-nav > a[href^="#"]');
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });

  const setActive = () => {
    if (!sections.length) return;
    const offset = 80;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top - offset <= 0) {
        current = section;
      }
    }
    navLinks.forEach((link) => {
      const match = link.getAttribute("href") === `#${current.id}`;
      link.classList.toggle("is-active", match);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
});
