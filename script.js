/* =========================
   PAGE LOAD
========================= */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =========================
   SCROLL REVEAL
========================= */
const revealItems = document.querySelectorAll(
  ".stat-box, .feature-card, .trust-box, .final-cta, .proof-item"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform =
    "translateY(35px)";
  item.style.transition =
    "all .7s ease";

  revealObserver.observe(item);
});


/* =========================
   COUNTER ANIMATION
========================= */
const counters =
  document.querySelectorAll(".stat-box h2");

function animateCounter(
  el,
  target,
  suffix = ""
) {
  let start = 0;
  const duration = 1400;
  const increment =
    target / (duration / 16);

  function update() {
    start += increment;

    if (start < target) {
      el.textContent =
        Math.floor(start) + suffix;
      requestAnimationFrame(update);
    } else {
      el.textContent =
        target + suffix;
    }
  }

  update();
}

const counterObserver =
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text =
          entry.target.textContent;

        if (text.includes("%")) {
          animateCounter(
            entry.target,
            90,
            "%"
          );
        }

        if (text.includes("K+")) {
          animateCounter(
            entry.target,
            10,
            "K+"
          );
        }

        if (text.includes("24")) {
          animateCounter(
            entry.target,
            24,
            "/7"
          );
        }

        if (text.includes("Live")) {
          entry.target.textContent =
            "Live";
        }

        counterObserver.unobserve(
          entry.target
        );
      }
    });
  });

counters.forEach(counter => {
  counterObserver.observe(counter);
});


/* =========================
   HERO TYPEWRITER
========================= */
const heroText =
  document.querySelector(".hero-text");

const message =
  "Smart Signals • Fast Alerts • Premium Growth Experience";

let i = 0;

if (heroText) {
  heroText.textContent = "";

  function typeWriter() {
    if (i < message.length) {
      heroText.textContent +=
        message.charAt(i);
      i++;
      setTimeout(
        typeWriter,
        35
      );
    }
  }

  setTimeout(
    typeWriter,
    500
  );
}


/* =========================
   TOUCH RIPPLE
========================= */
const buttons =
  document.querySelectorAll(
    ".primary-btn, .secondary-btn, .join-now, .cta-btn"
  );

buttons.forEach(btn => {
  btn.addEventListener(
    "click",
    function (e) {
      const ripple =
        document.createElement(
          "span"
        );

      ripple.classList.add(
        "ripple"
      );

      const rect =
        this.getBoundingClientRect();

      ripple.style.left =
        e.clientX -
        rect.left +
        "px";

      ripple.style.top =
        e.clientY -
        rect.top +
        "px";

      this.appendChild(
        ripple
      );

      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  );
});


/* =========================
   STICKY CTA SHOW/HIDE
========================= */
const sticky =
  document.querySelector(
    ".sticky-cta"
  );

let lastScroll =
  window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const current =
      window.scrollY;

    if (!sticky) return;

    if (
      current >
      lastScroll
    ) {
      sticky.style.transform =
        "translateY(100%)";
    } else {
      sticky.style.transform =
        "translateY(0)";
    }

    lastScroll = current;
  }
);


/* =========================
   LIGHT PARALLAX
========================= */
const circles =
  document.querySelectorAll(
    ".bg-circle"
  );

window.addEventListener(
  "scroll",
  () => {
    const y =
      window.scrollY /
      8;

    circles.forEach(
      (circle, i) => {
        circle.style.transform =
          `translateY(${y * (i + 1)}px)`;
      }
    );
  }
);


/* =========================
   ACTIVE TITLE
========================= */
let toggle =
  true;

setInterval(() => {
  document.title =
    toggle
      ? "🚀 Prime Earning"
      : "📈 Premium Signals";

  toggle = !toggle;
}, 2500);


/* =========================
   SCROLL PROGRESS BAR
========================= */
const progress =
  document.createElement(
    "div"
  );

progress.style.position =
  "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height =
  "3px";
progress.style.width =
  "0%";
progress.style.zIndex =
  "9999";
progress.style.background =
  "linear-gradient(90deg,#2b7fff,#2ca8ff)";

document.body.appendChild(
  progress
);

window.addEventListener(
  "scroll",
  () => {
    const total =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    const value =
      (window.scrollY /
        total) *
      100;

    progress.style.width =
      value + "%";
  }
);