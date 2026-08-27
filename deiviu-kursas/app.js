const goddesses = ["Medeina", "Veliona", "Ragana", "Gabija", "Žemyna", "Milda", "Aušrinė", "Austėja"];

const app = document.querySelector("#app");

function shell(content, back = false) {
  return `<div class="shell">
    <header class="topbar">
      ${back ? '<button class="icon-btn" data-go="home" aria-label="Grįžti">←</button>' : '<span class="brand">Laumija</span>'}
      <button class="text-btn" data-go="home">Kurso pradžia</button>
    </header>
    ${content}
  </div>`;
}

function home() {
  app.innerHTML = shell(`
    <section class="hero">
      <p class="eyebrow">Rėdos rato kursas</p>
      <h1>Deivės, kurios mus kuria.</h1>
      <p class="hero-sub">Interaktyvus būsimo kurso išdėstymo prototipas.</p>
    </section>

    <section class="continue-card">
      <span class="mini">Tavo kelio pradžia</span>
      <h2>Pradinis deivių testas</h2>
      <p>Testo vieta ir rezultatų kelias</p>
      <button class="primary" data-go="test">Pradėti testą</button>
    </section>

    <section class="section">
      <div class="section-head"><h2>Deivių ratas</h2><span>Visi kurso moduliai vienoje vietoje</span></div>
      <div class="map-grid">
        ${goddesses.map((name, i) => `<button class="goddess-card" data-goddess="${name}">
          <span class="module-no">${String(i + 1).padStart(2, "0")} modulis</span>
          <h3>${name}</h3><small>Atverti →</small>
        </button>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Mano kelias</h2><span>Asmeniniai kurso įrankiai</span></div>
      <div class="tools">
        <button class="tool-card" data-go="circle"><span class="tool-symbol">○</span><span><strong>Mano deivių ratas</strong><small>Testų ir įžvalgų suvestinė</small></span></button>
        <button class="tool-card" data-go="workbook"><span class="tool-symbol">≋</span><span><strong>Darbo knyga</strong><small>Užrašai ir refleksijos</small></span></button>
      </div>
    </section>
    <p class="footer-note">Prototipas · mokėjimai, prisijungimai ir tikras turinys dar nejungiami</p>
  `);
}

function goddess(name) {
  app.innerHTML = shell(`
    <section class="screen-head">
      <span class="crumb">Deivių ratas · modulis</span>
      <h1>${name}</h1>
      <div class="progress-row"><span>Modulio eiga</span><div class="progress"><span></span></div><b>0 / 7</b></div>
    </section>
    <section class="lesson-list">
      ${["Deivės pasaulis", "Taro arkanas", "Deivės šviesa", "Deivės šešėlis", "Atpažinimo testas", "Patyrimas", "Mano įžvalga"].map((title, i) => `<button class="lesson" data-lesson="${title}"><b>${i + 1}. ${title}</b><em>→</em></button>`).join("")}
    </section>
  `, true);
}

function simple(title, eyebrow, body) {
  app.innerHTML = shell(`
    <section class="screen-head"><span class="crumb">${eyebrow}</span><h1>${title}</h1></section>
    ${body}
  `, true);
}

function test() {
  simple("Pradinis testas", "Tavo kelio pradžia", `
    <div class="placeholder">Čia bus testo klausimai</div>
    <section class="lesson-list" style="margin-top:14px">
      <button class="lesson" data-go="circle"><b>Peržiūrėti rezultatų išdėstymą</b><em>→</em></button>
    </section>`);
}

function circle() {
  simple("Mano deivių ratas", "Asmeninė suvestinė", `
    <div class="circle">${goddesses.map((_, i) => `<span class="dot">${i + 1}</span>`).join("")}</div>
    <div class="lesson-list">
      <button class="lesson"><b>Stipriausia deivės jėga</b><em>+</em></button>
      <button class="lesson"><b>Šešėlyje veikianti jėga</b><em>+</em></button>
      <button class="lesson"><b>Dabartinis gyvenimo slenkstis</b><em>+</em></button>
      <button class="lesson"><b>Mano tolesnė kryptis</b><em>+</em></button>
    </div>`);
}

function workbook() {
  simple("Darbo knyga", "Mano kelias", `
    <div class="placeholder">Čia bus atsisiunčiama arba pildoma kurso darbo knyga</div>
    <section class="lesson-list" style="margin-top:14px">
      <button class="lesson"><b>Mano užrašai</b><em>→</em></button>
      <button class="lesson"><b>Išsaugotos įžvalgos</b><em>→</em></button>
      <button class="lesson"><b>Galutinė suvestinė</b><em>→</em></button>
    </section>`);
}

document.addEventListener("click", event => {
  const goddessButton = event.target.closest("[data-goddess]");
  if (goddessButton) return goddess(goddessButton.dataset.goddess);

  const lesson = event.target.closest("[data-lesson]");
  if (lesson) return simple(lesson.dataset.lesson, "Modulio vidus", '<div class="placeholder">Čia bus šios dalies turinys</div>');

  const target = event.target.closest("[data-go]")?.dataset.go;
  if (!target) return;
  ({home, test, circle, workbook}[target] || home)();
});

home();


