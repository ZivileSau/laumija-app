const pages = [...document.querySelectorAll(".page")];
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const pageTitle = document.querySelector("#page-title");
const pageNumber = document.querySelector("#page-number");
const contents = document.querySelector("#contents");
const contentsButton = document.querySelector(".contents-button");
const book = document.querySelector("#book");

let currentPage = 0;
let touchStartX = 0;
let touchStartY = 0;

function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));

  pages.forEach((page, pageIndex) => {
    const active = pageIndex === currentPage;
    page.classList.toggle("is-active", active);
    page.setAttribute("aria-hidden", String(!active));
    if (active) page.scrollTop = 0;
  });

  previous.disabled = currentPage === 0;
  next.disabled = currentPage === pages.length - 1;
  pageTitle.textContent = pages[currentPage].dataset.title;
  pageNumber.textContent = `${currentPage + 1} / ${pages.length}`;

  const hash = currentPage ? `#puslapis-${currentPage + 1}` : "#virselis";
  history.replaceState(null, "", hash);
}

function closeContents() {
  contents.hidden = true;
  contentsButton.setAttribute("aria-expanded", "false");
}

previous.addEventListener("click", () => showPage(currentPage - 1));
next.addEventListener("click", () => showPage(currentPage + 1));

contentsButton.addEventListener("click", () => {
  contents.hidden = !contents.hidden;
  contentsButton.setAttribute("aria-expanded", String(!contents.hidden));
});

contents.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  showPage(Number(button.dataset.page));
  closeContents();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showPage(currentPage - 1);
  if (event.key === "ArrowRight") showPage(currentPage + 1);
  if (event.key === "Escape") closeContents();
});

book.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

book.addEventListener("touchend", (event) => {
  const deltaX = event.changedTouches[0].clientX - touchStartX;
  const deltaY = event.changedTouches[0].clientY - touchStartY;

  if (Math.abs(deltaX) < 65 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
  if (deltaX < 0) showPage(currentPage + 1);
  if (deltaX > 0) showPage(currentPage - 1);
}, { passive: true });

const pageFromHash = Number(location.hash.replace(/\D/g, "")) - 1;
showPage(Number.isInteger(pageFromHash) && pageFromHash >= 0 ? pageFromHash : 0);
