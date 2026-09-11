/* Air Premia Refund Playbook — behaviour
   Two jobs: copy an email draft, and highlight the current section in the nav.
   No dependencies. Degrades quietly if JS is off. */

(function () {
  "use strict";

  /* ---------- Copy buttons ----------
     Each .copy-btn copies the .email-body inside its own .email block.
     Falls back to a hidden textarea + execCommand where the async
     Clipboard API is unavailable (e.g. non-secure contexts). */

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function flash(btn, ok) {
    var original = btn.getAttribute("data-label") || btn.textContent;
    btn.setAttribute("data-label", original);
    btn.textContent = ok ? "Copied" : "Select + Ctrl/Cmd+C";
    btn.classList.toggle("copied", ok);
    window.setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 2000);
  }

  function wireCopyButtons() {
    var buttons = document.querySelectorAll(".copy-btn");
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener("click", function () {
        var block = btn.closest(".email");
        if (!block) return;
        var body = block.querySelector(".email-body");
        if (!body) return;
        var text = body.innerText;

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(
            function () { flash(btn, true); },
            function () { flash(btn, legacyCopy(text)); }
          );
        } else {
          flash(btn, legacyCopy(text));
        }
      });
    });
  }

  /* ---------- Active nav highlighting ----------
     IntersectionObserver drives it; if the API is missing the nav simply
     stays unhighlighted, which is fine. */

  function wireScrollSpy() {
    var links = document.querySelectorAll(".subnav a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    Array.prototype.forEach.call(links, function (a) {
      var id = a.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (target) map[id] = a;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          Array.prototype.forEach.call(links, function (a) {
            a.classList.remove("active");
          });
          var link = map[entry.target.id];
          if (link) link.classList.add("active");
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    Object.keys(map).forEach(function (id) {
      observer.observe(document.getElementById(id));
    });
  }

  /* ---------- Smooth-scroll offset for the sticky nav ----------
     CSS scroll-padding-top handles most of it; this is a no-op safety net
     for browsers that ignore it. */

  function wireNavOffset() {
    var nav = document.querySelector(".subnav");
    if (!nav) return;
    var links = document.querySelectorAll(".subnav a[href^='#']");
    Array.prototype.forEach.call(links, function (a) {
      a.addEventListener("click", function (ev) {
        var target = document.getElementById(a.getAttribute("href").slice(1));
        if (!target) return;
        ev.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - (nav.offsetHeight + 12);
        window.scrollTo({ top: top, behavior: "smooth" });
        if (history.replaceState) history.replaceState(null, "", a.getAttribute("href"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    wireCopyButtons();
    wireScrollSpy();
    wireNavOffset();
  }
})();
