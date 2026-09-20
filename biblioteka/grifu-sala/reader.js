const story = document.querySelector("#story-text");
const chapterNumber = document.querySelector("#chapter-number");
const nextButton = document.querySelector("#next-chapter");
const buttons = [...document.querySelectorAll("[data-chapter]")];

const chapters = {
  1: { file: "chapter-1.txt", label: "Pirmas skyrius" },
  2: { file: "chapter-2.txt", label: "Antras skyrius" }
};

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function showChapter(number, shouldScroll = false) {
  const chapter = chapters[number];
  if (!chapter) return;

  story.innerHTML = '<p class="loading">Skyrius atsiveria…</p>';
  chapterNumber.textContent = chapter.label;
  buttons.forEach(button => {
    const active = Number(button.dataset.chapter) === number;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });

  fetch(chapter.file)
    .then(response => {
      if (!response.ok) throw new Error("Skyrius nepasiekiamas");
      return response.text();
    })
    .then(text => {
      const blocks = text.replace(/^\uFEFF/, "").trim().split(/\r?\n+/).filter(Boolean);
      story.innerHTML = blocks.map(block => `<p>${escapeHtml(block.trim())}</p>`).join("");
      nextButton.hidden = number === 2;
      history.replaceState(null, "", `#skyrius-${number}`);
      if (shouldScroll) chapterNumber.scrollIntoView({ behavior: "smooth", block: "start" });
    })
    .catch(() => {
      story.innerHTML = '<p class="error">Skyriaus nepavyko atverti. Sugrįžk po akimirkos.</p>';
    });
}

buttons.forEach(button => button.addEventListener("click", () => showChapter(Number(button.dataset.chapter), true)));
nextButton.addEventListener("click", () => showChapter(2, true));

const requested = Number(location.hash.match(/skyrius-(\d+)/)?.[1] || 1);
showChapter(chapters[requested] ? requested : 1);

