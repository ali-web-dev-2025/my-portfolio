const words = ["طراح و توسعه‌دهنده وب", "عاشق کد و طراحی", "سازنده تجربه‌های مدرن"];
let w = 0, c = 0, deleting = false;
const typedEl = document.getElementById("typed");

function type() {
  const word = words[w];
  typedEl.textContent = word.substring(0, c);

  if (!deleting && c < word.length) {
    c++;
    setTimeout(type, 100);
  } else if (deleting && c > 0) {
    c--;
    setTimeout(type, 50);
  } else {
    deleting = !deleting;
    if (!deleting) w = (w + 1) % words.length;
    setTimeout(type, 1400);
  }
}
type();

const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => menu.classList.remove("open"))
);

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const skillObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      const bar = e.target.querySelector(".bar div");
      if (bar) bar.style.width = bar.dataset.width + "%";
    }
  }),
  { threshold: 0.3 }
);
document.querySelectorAll(".skill").forEach(el => skillObserver.observe(el));

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", e => {
  e.preventDefault();
  formMsg.textContent = "پیامت دریافت شد ✅ به‌زودی جواب می‌دم.";
  form.reset();
});

const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.style.background = window.scrollY > 50
    ? "rgba(7,20,16,0.9)"
    : "rgba(7,20,16,0.6)";
});