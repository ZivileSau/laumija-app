const START_DATE = new Date(2026, 7, 1, 0, 0, 0);
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

const weeks = [
  { title: "1 savaitė · Austėjos 1 savaitė · Namų slenkstis", image: "assets/savaite-1.png" },
  { title: "2 savaitė · Austėjos 2 savaitė", image: "assets/savaite-2.png" },
  { title: "3 savaitė · Austėjos 3 savaitė", image: "assets/savaite-3.png" },
  { title: "4 savaitė · Austėjos 4 savaitė", image: "assets/savaite-4.png" },
  { title: "5 savaitė · Austėjos 5 savaitė", image: "assets/savaite-5.png" },
  { title: "6 savaitė · Austėjos 6 savaitė", image: "assets/savaite-6.png" },
  { title: "7 savaitė · Austėjos 7 savaitė", image: "assets/savaite-7.png" },
  { title: "8 savaitė · Medeinos 1 savaitė", image: "assets/medeina-savaite-1.png" },
  { title: "9 savaitė · Medeinos 2 savaitė", image: "assets/medeina-savaite-2.png" },
  { title: "10 savaitė · Medeinos 3 savaitė", image: "assets/medeina-savaite-3.png" },
  { title: "11 savaitė · Medeinos 4 savaitė", image: "assets/medeina-savaite-4.png" },
  { title: "12 savaitė · Medeinos 5 savaitė", image: "assets/medeina-savaite-5.png" },
  { title: "13 savaitė · Medeinos 6 savaitė", image: "assets/medeina-savaite-6.png" },
  { title: "14 savaitė · Velionos 1 savaitė · Namai prisimena", image: "../assets/ciklai/veliona/zurnalas/veliona-savaite-1.png" },
  { title: "15 savaitė · Velionos 2 savaitė · Besikeičiantys namai", image: "../assets/ciklai/veliona/zurnalas/veliona-savaite-2.png" },
  { title: "16 savaitė · Velionos 3 savaitė · Tarp pabaigos ir pradžios", image: "../assets/ciklai/veliona/zurnalas/veliona-savaite-3.png" },
  { title: "17 savaitė · Velionos 4 savaitė · Žiemos atramos", image: "../assets/ciklai/veliona/zurnalas/veliona-savaite-4.png" },
  { title: "18 savaitė · Laimos 1 savaitė · Namai pradeda laukti", image: "../assets/ciklai/laima/zurnalas/laima-savaite-1.png" },
  { title: "19 savaitė · Laimos 2 savaitė · Jaukus vakaras drauge", image: "../assets/ciklai/laima/zurnalas/laima-savaite-2.png" },
  { title: "20 savaitė · Laimos 3 savaitė · Šventė tavo rankose", image: "../assets/ciklai/laima/zurnalas/laima-savaite-3.png" }
];

const supplements = [
  { title: "Žolinių ritualas", image: "assets/priedas-1.png" },
  { title: "Austėjos priedas 2", image: "assets/priedas-2.png" },
  { title: "Austėjos priedas 3", image: "assets/priedas-3.png" },
  { title: "Austėjos priedas 4", image: "assets/priedas-4.png" },
  { title: "Medeinos priedas 1", image: "assets/medeina-priedas-1.png" },
  { title: "Medeinos priedas 2", image: "assets/medeina-priedas-2.png" },
  { title: "Medeinos priedas 3", image: "assets/medeina-priedas-3.png" },
  { title: "Kalėdinis brandintas pyragas", image: "../assets/ciklai/laima/priedai/brandintas-pyragas.png" },
  { title: "Laimos vakaro tradiciniai žaidimai", image: "../assets/ciklai/laima/priedai/tradiciniai-zaidimai.png" },
  { title: "Laimos lėlytės rišimo instrukcija", image: "../assets/ciklai/laima/priedai/laimos-lelyte.png" }
];

const previewMode =
  new URLSearchParams(location.search).get("perziura") === "1" ||
  location.protocol === "file:" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1";

const embedMode = new URLSearchParams(location.search).get("embed") === "1";
if (embedMode) document.body.classList.add("embed-mode");

const menuToggle = document.querySelector(".menu-toggle");
const slideMenu = document.querySelector(".slide-menu");
const reader = document.querySelector("#reader");
const prelaunch = document.querySelector("#prelaunch");
const countdown = document.querySelector("#countdown");
const weekImage = document.querySelector("#week-image");
const weekTitle = document.querySelector("#week-title");
const weekCount = document.querySelector("#week-count");
const cycleLabel = document.querySelector("#cycle-label");
const readerLabel = document.querySelector("#reader");
const austejaBook = document.querySelector("#austeja-book");
const medeinaBook = document.querySelector("#medeina-book");
const velionaBook = document.querySelector("#veliona-book");
const medeinaCards = document.querySelector("#medeina-cards");
const releaseNote = document.querySelector("#release-note");
const prevWeek = document.querySelector("#prev-week");
const nextWeek = document.querySelector("#next-week");
const loading = document.querySelector("#loading");

const supplementsDialog = document.querySelector("#supplements");
const supplementImage = document.querySelector("#supplement-image");
const supplementTitle = document.querySelector("#supplement-title");
const supplementCount = document.querySelector("#supplement-count");
const supplementCycle = document.querySelector("#supplement-cycle");
const prevSupplement = document.querySelector("#prev-supplement");
const nextSupplement = document.querySelector("#next-supplement");

let availableWeeks = getAvailableWeeks();
let currentWeek = Math.max(0, availableWeeks - 1);
let currentSupplement = 0;
let touchStartX = null;
let suppressImageClick = false;

function visibleSupplements() {
  if (currentWeek >= 13) return supplements.slice(7);
  if (currentWeek >= 7) return supplements.slice(4, 7);
  return supplements.slice(0, 4);
}

function getCycle(index) {
  if (index >= 17) return { name: "Laimos", label: "Laimos laikas", book: "veliona" };
  if (index >= 13) return { name: "Velionos", label: "Velionos laikas", book: "veliona" };
  if (index >= 7) return { name: "Medeinos", label: "Medeinos laikas", book: "medeina" };
  return { name: "Austėjos", label: "Austėjos laikas", book: "austeja" };
}

const requestedWeek = Number.parseInt(new URLSearchParams(location.search).get("savaite"), 10);
if (!embedMode && Number.isInteger(requestedWeek) && requestedWeek >= 1) {
  currentWeek = Math.min(requestedWeek - 1, Math.max(0, availableWeeks - 1));
}

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
  const cycle = getCycle(currentWeek);
  if (cycleLabel) cycleLabel.textContent = cycle.label;
  if (readerLabel) readerLabel.setAttribute("aria-label", `${cycle.name} savaičių žurnalas`);
  if (austejaBook) {
    austejaBook.hidden = cycle.book !== "austeja";
    austejaBook.style.display = cycle.book === "austeja" ? "" : "none";
  }
  if (medeinaBook) {
    medeinaBook.hidden = cycle.book !== "medeina";
    medeinaBook.style.display = cycle.book === "medeina" ? "" : "none";
  }
  if (velionaBook) {
    velionaBook.hidden = cycle.book !== "veliona";
    velionaBook.style.display = cycle.book === "veliona" ? "" : "none";
  }
  if (medeinaCards) {
    medeinaCards.hidden = cycle.book !== "medeina";
    medeinaCards.style.display = cycle.book === "medeina" ? "" : "none";
  }
  document.title = `Laumijos žurnalas · ${cycle.label}`;
  loading.hidden = false;
  weekImage.onload = () => { loading.hidden = true; };
  weekImage.src = page.image;
  weekImage.alt = `${page.title} – Laumijos žurnalo puslapis`;
  weekTitle.textContent = page.title;
  weekCount.textContent = `${currentWeek + 1} / ${availableWeeks}`;
  prevWeek.disabled = currentWeek === 0;
  nextWeek.disabled = currentWeek >= availableWeeks - 1;
  releaseNote.textContent = previewMode
    ? `Peržiūros režimas · matomos visos ${weeks.length} savaitės`
    : availableWeeks < weeks.length
      ? "Naujas puslapis atsiveria kiekvieną šeštadienį."
      : "Visas Rėdos rato ciklas jau atvertas.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveWeek(direction) {
  const next = currentWeek + direction;
  if (next < 0 || next >= availableWeeks) return;
  currentWeek = next;
  renderWeek();
}

function renderSupplement() {
  const pages = visibleSupplements();
  const page = pages[currentSupplement];
  const cycle = getCycle(currentWeek);
  if (supplementCycle) supplementCycle.textContent = cycle.label;
  supplementImage.src = page.image;
  supplementImage.alt = `${page.title} – Laumijos žurnalo priedas`;
  supplementTitle.textContent = page.title;
  supplementCount.textContent = `${currentSupplement + 1} / ${pages.length}`;
  prevSupplement.disabled = currentSupplement === 0;
  nextSupplement.disabled = currentSupplement === pages.length - 1;
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
  if (currentSupplement < visibleSupplements().length - 1) { currentSupplement += 1; renderSupplement(); }
});

reader.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

reader.addEventListener("touchend", event => {
  if (touchStartX === null) return;
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 60) {
    suppressImageClick = true;
    moveWeek(distance > 0 ? -1 : 1);
  }
  touchStartX = null;
}, { passive: true });

if (embedMode) {
  weekImage.setAttribute("role", "link");
  weekImage.setAttribute("tabindex", "0");
  weekImage.setAttribute("title", "Atverti pilną žurnalo puslapį");

  const openFullJournal = () => {
    if (suppressImageClick) {
      suppressImageClick = false;
      return;
    }
    window.open(`${location.pathname}?savaite=${currentWeek + 1}`, "_blank", "noopener");
  };

  weekImage.addEventListener("click", openFullJournal);
  weekImage.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFullJournal();
    }
  });
}

showLaunchState();
