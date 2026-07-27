const START_DATE = new Date(2026, 7, 1, 0, 0, 0);
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

const weeks = [
  { title: "1 savaitė · Namų slenkstis", image: "assets/savaite-1.png" },
  { title: "2 savaitė", image: "assets/savaite-2.png" },
  { title: "3 savaitė", image: "assets/savaite-3.png" },
  { title: "4 savaitė", image: "assets/savaite-4.png" },
  { title: "5 savaitė", image: "assets/savaite-5.png" },
  { title: "6 savaitė", image: "assets/savaite-6.png" },
  { title: "7 savaitė", image: "assets/savaite-7.png" }
];

const supplements = [
  { title: "Žolinių ritualas", image: "assets/priedas-1.png" },
  { title: "Austėjos priedas 2", image: "assets/priedas-2.png" },
  { title: "Austėjos priedas 3", image: "assets/priedas-3.png" },
  { title: "Austėjos priedas 4", image: "assets/priedas-4.png" }
];

const previewMode =
  new URLSearchParams(location.search).get("perziura") === "1" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1";

const menuToggle = document.querySelector(".menu-toggle");
const slideMenu = document.querySelector(".slide-menu");
const reader = document.querySelector("#reader");
const prelaunch = document.querySelector("#prelaunch");
const countdown = document.querySelector("#countdown");
const weekImage = document.querySelector("#week-image");
const weekTitle = document.querySelector("#week-title");
const weekCount = document.querySelector("#week-count");
const releaseNote = document.querySelector("#release-note");
const prevWeek = document.querySelector("#prev-week");
const nextWeek = document.querySelector("#next-week");
const loading = document.querySelector("#loading");

const supplementsDialog = document.querySelector("#supplements");
const supplementImage = document.querySelector("#supplement-image");
const supplementTitle = document.querySelector("#supplement-title");
const supplementCount = document.querySelector("#supplement-count");
const prevSupplement = document.querySelector("#prev-supplement");
const nextSupplement = document.querySelector("#next-supplement");

let availableWeeks = getAvailableWeeks();
let currentWeek = Math.max(0, availableWeeks - 1);
let currentSupplement = 0;
let touchStartX = null;

function getAvailableWeeks() {
  if (previewMode) return weeks.length;
  const elapsed = Date.now() - START_DATE.getTime();
  if (elapsed < 0) return 0;
  return Math.min(weeks.length, Math.floor(elapsed / WEEK_MS) + 1);
}

function showLaunchState() {
  if (availableWeeks === 0) {
    reader.hidden = true;
    prelaunch.hidden = false;
    const days = Math.max(1, Math.ceil((START_DATE.getTime() - Date.now()) / (24 * 60 * 60 * 1000)));
    countdown.textContent = `Liko ${days} d.`;
    return;
  }
  prelaunch.hidden = true;
  reader.hidden = false;
  renderWeek();
}

function renderWeek() {
  const page = weeks[currentWeek];
  loading.hidden = false;
  weekImage.onload = () => { loading.hidden = true; };
  weekImage.src = page.image;
  weekImage.alt = `${page.title} – Laumijos žurnalo puslapis`;
  weekTitle.textContent = page.title;
  weekCount.textContent = `${currentWeek + 1} / ${availableWeeks}`;
  prevWeek.disabled = currentWeek === 0;
  nextWeek.disabled = currentWeek >= availableWeeks - 1;
  releaseNote.textContent = previewMode
    ? "Peržiūros režimas · matomos visos 7 savaitės"
    : availableWeeks < weeks.length
      ? "Naujas puslapis atsiveria kiekvieną šeštadienį."
      : "Visas Austėjos ciklas jau atvertas.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveWeek(direction) {
  const next = currentWeek + direction;
  if (next < 0 || next >= availableWeeks) return;
  currentWeek = next;
  renderWeek();
}

function renderSupplement() {
  const page = supplements[currentSupplement];
  supplementImage.src = page.image;
  supplementImage.alt = `${page.title} – Austėjos žurnalo priedas`;
  supplementTitle.textContent = page.title;
  supplementCount.textContent = `${currentSupplement + 1} / ${supplements.length}`;
  prevSupplement.disabled = currentSupplement === 0;
  nextSupplement.disabled = currentSupplement === supplements.length - 1;
  supplementsDialog.scrollTo({ top: 0, behavior: "smooth" });
}

menuToggle.addEventListener("click", () => {
  const open = slideMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelector("#open-supplements").addEventListener("click", () => {
  slideMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  currentSupplement = 0;
  renderSupplement();
  supplementsDialog.showModal();
});

document.querySelector("#close-supplements").addEventListener("click", () => supplementsDialog.close());
supplementsDialog.addEventListener("click", event => {
  if (event.target === supplementsDialog) supplementsDialog.close();
});

prevWeek.addEventListener("click", () => moveWeek(-1));
nextWeek.addEventListener("click", () => moveWeek(1));
prevSupplement.addEventListener("click", () => {
  if (currentSupplement > 0) { currentSupplement -= 1; renderSupplement(); }
});
nextSupplement.addEventListener("click", () => {
  if (currentSupplement < supplements.length - 1) { currentSupplement += 1; renderSupplement(); }
});

reader.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

reader.addEventListener("touchend", event => {
  if (touchStartX === null) return;
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 60) moveWeek(distance > 0 ? -1 : 1);
  touchStartX = null;
}, { passive: true });

showLaunchState();
