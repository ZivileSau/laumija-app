const parts = [
  {
    title: "Kas yra Laumija?",
    description: "Trumpa pažintis su Laumija ir jos ciklišku žvilgsniu į gyvenimą.",
    lessons: [
      { title: "Sveika atvykusi", symbol: "✦", text: ["Laumija – tai vieta, kur senieji lietuviški vaizdiniai susitinka su šiandienos moters gyvenimu.", "Čia nereikia visko perskaityti iš karto. Šis trumpas kelias padės suprasti, kas su kuo susiję ir nuo ko tau būtų gera pradėti."], note: "Pradėk lėtai. Laumija atsiveria ne kaip katalogas, o kaip pasakojimas." },
      { title: "Kas yra Laumija", symbol: "L", text: ["Laumija jungia Rėdos ratą, Mėnulio kalendorių, deives, pasakas, žurnalą ir gyvus susitikimus.", "Tai nėra atskiros, nesusijusios temos. Jos visos padeda kitu kampu pažvelgti į laiką, gyvenimo etapus ir tai, kas šiuo metu vyksta viduje." ] },
      { title: "Kodėl gyvename ciklais", symbol: "○", text: ["Gamtoje niekas visą laiką neauga ir nežydi. Yra pradžia, branda, derlius, nykimas ir poilsis.", "Laumijoje metų, Mėnulio ir moters gyvenimo ciklai tampa orientyrais – ne taisyklėmis, o būdu geriau išgirsti save."], note: "Ciklas neįkalina. Jis parodo, kur dabar esi." }
    ]
  },
  {
    title: "Kaip Laumija gyvena?",
    description: "Rėdos ratas, einamosios deivės laikas ir kasdienis Mėnulio ritmas.",
    lessons: [
      { title: "Rėdos ratas", symbol: "☼", text: ["Rėdos ratas – tai metų kelionė per skirtingus gamtos ir žmogaus gyvenimo tarpsnius.", "Kiekviena metų dalis turi savą nuotaiką, klausimus ir deivę, kuri padeda ją atpažinti." ] },
      { title: "Kieno laiku gyvename", symbol: "♢", text: ["Laumijos kalendorius parodo, kurios deivės laikas vyksta dabar ir kokią gyvenimo temą jis išryškina.", "Deivė čia nėra tolima būtybė. Ji – tam tikra tavo pačios būsena, jėga ar gyvenimo etapas."], note: "Klausimas ne „ar tikiu deive“, o „ką ji padeda manyje pamatyti?“" },
      { title: "Mėnulio dienos žinutė", symbol: "☾", text: ["Mėnulio kalendorius keičiasi kasdien. Kiekviena diena turi simbolį, trumpą pasakojimą ir klausimą refleksijai.", "Tai mažiausias Laumijos ritmas – vieta, į kurią galima trumpam sugrįžti kiekvieną dieną." ] }
    ]
  },
  {
    title: "Ką gali atrasti?",
    description: "Trumpas paaiškinimas, kuo skiriasi pagrindinės Laumijos erdvės.",
    lessons: [
      { title: "Rėdos rato žurnalas", symbol: "▤", text: ["Žurnalas seka einamąjį metų laiką. Jame susitinka savaitės tema, deivės laikas, tekstai ir kūrybiniai atradimai.", "Tai nuolat atsinaujinanti Laumijos dalis – tarsi gyvas metų dienoraštis." ] },
      { title: "Deivės ir pasakos", symbol: "♜", text: ["Deivių puslapiai supažindina su archetipais ir gyvenimo etapais, o pasakos leidžia jų prasmę ne tik suprasti, bet ir pajusti.", "Čia galima eiti giliau tada, kai kuri nors tema ar deivė ima kalbėti asmeniškai." ] },
      { title: "Laimos raštai", symbol: "⌘", text: ["Laimos raštai padeda pažvelgti į asmeninį gimimo kodą ir pasikartojančius gyvenimo motyvus.", "Tai individualesnė Laumijos dalis – ne dienos ar metų ritmas, o tavo pačios raštas." ] },
      { title: "Laumės namai", symbol: "⌂", text: ["Laumės namai – fizinė erdvė Vilniuje, kur Laumija tampa gyvu susitikimu.", "Čia vyksta kūrybinės veiklos, individualios sesijos ir nedideli moterų susitikimai."], note: "Skaitmeninis kelias supažindina. Laumės namuose galima susitikti gyvai." }
    ]
  }
];

const expandedLessons = [
  [
    {
      text: [
        "Laumija – tai vieta, kur senieji lietuviški vaizdiniai susitinka su šiandienos moters gyvenimu. Čia deivės, pasakos ir gamtos ciklai kalba ne apie tolimą praeitį, o apie tai, ką galime atpažinti savyje dabar.",
        "Galbūt čia atkeliavai per Mėnulio dienos žinutę, pasaką, žurnalą ar vienos deivės vardą. O gal tik pajutai smalsumą ir dar nežinai, ko ieškai. Abu keliai yra geri.",
        "Tau nereikia visko suprasti ar perskaityti iš karto. Ši trumpa pažintis parodys, kaip Laumijos dalys susijungia, ir padės pajusti, prie kurių durų norisi stabtelėti ilgiau."
      ],
      note: "Pradėk lėtai. Laumija atsiveria ne kaip katalogas, o kaip pasakojimas."
    },
    {
      text: [
        "Laumija gimė iš noro sugrąžinti senąsias lietuviškas deives į gyvą moters kasdienybę. Ne kaip sustingusias istorines figūras, o kaip atpažįstamus gyvenimo tarpsnius, vidines būsenas ir jėgas.",
        "Todėl čia greta gyvena Rėdos ratas, Mėnulio kalendorius, deivės, pasakos, žurnalas, gimimo kodai ir gyvi susitikimai. Iš pirmo žvilgsnio jų daug, tačiau visos šios erdvės pasakoja tą pačią istoriją skirtingais balsais.",
        "Vienur gali rasti kasdienį klausimą sau, kitur – ilgesnį metų ciklo pasakojimą, o dar kitur – deivę, kurios gyvenimo etapas netikėtai primins taviškį.",
        "Laumijoje nėra vieno teisingo įėjimo. Gali pradėti ten, kur šiandien kažkas atsiliepia."
      ]
    },
    {
      text: [
        "Gamtoje niekas visą laiką neauga ir nežydi. Sėkla ilsisi tamsoje, daigas veržiasi į šviesą, vasara brandina, ruduo atiduoda derlių, o žiema moko sustoti.",
        "Mūsų gyvenime taip pat keičiasi pradžios, augimo, brandos, paleidimo ir tylos laikai. Tačiau dažnai iš savęs reikalaujame vienodo tempo – būti stiprios, kūrybingos ir pasiruošusios veikti kiekvieną dieną.",
        "Laumijos ciklai kviečia pastebėti kitą galimybę: gal šiandien nereikia savęs stumti pirmyn. Gal reikia užbaigti, išlaukti, subrandinti arba pagaliau leisti kažkam prasidėti.",
        "Metų ir Mėnulio ritmas čia tampa ne taisykle, o švelniu orientyru, padedančiu geriau išgirsti, kur esi tu."
      ],
      note: "Ciklas neįkalina. Jis parodo, kur dabar esi, ir leidžia tam laikui turėti prasmę."
    }
  ],
  [
    {
      text: [
        "Rėdos ratas – tai metų kelionė per gamtos virsmus ir jiems atliepiančius žmogaus gyvenimo tarpsnius. Jis prasideda ne sausio pirmąją, o ten, kur gamtoje iš tiesų ima keistis šviesa, žemė ir gyvybė.",
        "Kelionėje sutinkame skirtingas deives. Viena pažadina pradžią, kita kviečia augti ir kurti, trečia – bręsti, saugoti ar paleisti. Kiekviena kalba apie savą laiką, kurio negalime amžinai praleisti.",
        "Stebėdama ratą gali pradėti matyti, kad tai, kas vyksta už lango, kartais netikėtai atkartoja tai, kas vyksta tavo viduje.",
        "Rėdos ratas yra didysis Laumijos ritmas. Jis padeda ne skubėti per metus, o juos išgyventi."
      ]
    },
    {
      text: [
        "Keliaudamos Rėdos ratu vis įžengiame į kitos deivės laiką. Laumijos kalendorius parodo, kuri deivė lydi dabartinį metų tarpsnį ir kokias temas jis gali iškelti į paviršių.",
        "Deivė čia nėra tolima būtybė, kurią reikia garbinti ar kuria privalu tikėti. Ji – vaizdinys, leidžiantis atpažinti tam tikrą tavo pačios būseną, jėgą ar gyvenimo etapą.",
        "Kartais jos laikas sutaps su tuo, kuo gyveni. Kartais erzins, bus nepatogus ar atrodys visiškai svetimas. Ir tai taip pat gali būti vertingas susitikimas.",
        "Gali tiesiog skaityti ir stebėti: kas atsiliepia, ką norisi atmesti, o kur netikėtai atpažįsti save."
      ],
      note: "Klausimas ne „ar tikiu deive“, o „ką ji padeda manyje pamatyti?“"
    },
    {
      text: [
        "Jeigu Rėdos ratas pasakoja visų metų istoriją, Mėnulis kalba daug trumpesniu ritmu. Jo šviesa keičiasi kasnakt, o kartu keičiasi ir Laumijos dienos simbolis.",
        "Kiekviena Mėnulio diena turi savo vardą, trumpą pasakojimą ir klausimą refleksijai. Tai nėra dienos pranašystė ar nurodymas, kaip privalai jaustis.",
        "Dienos žinutė veikiau pasiūlo mažą veidrodį. Kartais jame aiškiai pamatysi savo būseną, kartais tekstas primins tai, kam ilgai neradai žodžių, o kartais tiesiog palydės vienu klausimu.",
        "Tai mažiausias Laumijos ritmas – vieta, į kurią galima sugrįžti kelioms minutėms ir vėl tęsti savo dieną."
      ]
    }
  ],
  [
    {
      text: [
        "Rėdos rato žurnalas seka tai, kas Laumijoje gyva dabar. Jis keičiasi kartu su metų laiku, einamąja deive ir savaitėmis, todėl nėra knyga, kurią reikia pradėti nuo pirmojo puslapio.",
        "Jame susitinka trumpi tekstai, vaizdai, pasakojimai, ženklai ir kūrybiniai atradimai. Gali užsukti tik į vieną puslapį arba lėtai sekti visą deivės laiką.",
        "Žurnalas leidžia pamatyti, kaip didysis Rėdos ratas atrodo kasdienybėje – ne teorijoje, o mažose savaitės nuotaikose ir gyvenimo detalėse.",
        "Tai gyvas Laumijos metų dienoraštis. Į jį verta grįžti, nes sugrįžusi gali rasti jau kitą puslapį."
      ]
    },
    {
      text: [
        "Laumijos deivės pasakoja apie skirtingas moters galias ir gyvenimo etapus: pradžią, jaunystę, brandą, laukinę laisvę, paleidimą ir tylą prieš naują ratą.",
        "Deivių puslapiuose gali su jomis susipažinti aiškiau, o pasakose – pamatyti jas veikiančias. Pasaka nieko neaiškina tiesiai. Ji leidžia simboliui apsigyventi vaizduotėje ir kartais pasakyti daugiau nei ilgas aprašymas.",
        "Nebūtina iš karto pažinti visų deivių. Galima pradėti nuo tos, kurios vardas, vaizdas ar istorija šiandien kažkuo traukia.",
        "Kai kuri nors deivė ima kalbėti asmeniškai, jos pasakojimas gali tapti durimis į gilesnį savęs pažinimą."
      ]
    },
    {
      text: [
        "Senosiose istorijose Laima žino žmogaus dalią ir verpia gyvenimo siūlą. Laumijoje jos vardu vadinama erdvė, skirta asmeniniam gimimo kodui ir pasikartojantiems gyvenimo motyvams pažinti.",
        "Čia dėmesys pasisuka nuo bendro metų ar Mėnulio ritmo į tavo pačios raštą. Ką atsinešei gimdama? Kokios temos sugrįžta? Kurios savybės prašo būti išgirstos, o ne taisomos?",
        "Laimos raštai neskirti užrakinti žmogų viename apibrėžime. Jie kviečia pamatyti savo gyvenimo gijas ir sąmoningiau rinktis, kaip jas austi toliau.",
        "Tai individualesnė Laumijos dalis, į kurią gali eiti tada, kai norisi pažinti ne tik dabartinį laiką, bet ir save jame."
      ]
    },
    {
      text: [
        "Laumės namai – fizinė erdvė Vilniuje, kur Laumija iš ekrano persikelia į gyvą susitikimą. Čia galima ne tik skaityti apie ciklus, kūrybą ir deives, bet ir patirti juos per pokalbį, kvapą, prisilietimą bei savo rankomis kuriamą daiktą.",
        "Namuose vyksta nedideli moterų susitikimai, kūrybinės veiklos ir individualios sesijos. Jų turinys keičiasi kartu su einamuoju deivės laiku, todėl kiekvienas apsilankymas gali turėti kitą temą.",
        "Tai nėra vieta, į kurią privalai ateiti užbaigusi šį kelią. Tai viena iš Laumijos durų – skirta toms, kurioms norisi tikro stalo, arbatos, pokalbio ir buvimo kartu.",
        "Dabar jau žinai pagrindines Laumijos erdves. Toliau gali grįžti ten, kur šioje kelionėje pajutai daugiausia smalsumo, šilumos ar gyvybės."
      ],
      note: "Skaitmeninis kelias supažindina. Laumės namuose galima susitikti gyvai."
    }
  ]
];

expandedLessons.forEach((group, partIndex) => {
  group.forEach((content, lessonIndex) => Object.assign(parts[partIndex].lessons[lessonIndex], content));
});

const flat = parts.flatMap((part, partIndex) => part.lessons.map((lesson, lessonIndex) => ({...lesson, partIndex, lessonIndex})));
const app = document.querySelector("#app");

function shell(content) {
  app.innerHTML = `<div class="shell">${content}</div>`;
  window.scrollTo(0, 0);
}

function showHome() {
  location.hash = "";
  shell(`
    <header class="topbar"><span class="brand">Laumija</span><span class="home-link">Prototipas</span></header>
    <section class="hero">
      <p class="eyebrow">Trumpa pažintis</p>
      <h1>Laumijos<br>kelias</h1>
      <p class="intro">Nuoseklus įėjimas į tai, kas jau gyvena Laumijoje. Trys dalys, padėsiančios suprasti jos ritmą ir atrasti, kur norisi sugrįžti.</p>
    </section>
    <section class="path" aria-label="Laumijos kelio dalys">
      ${parts.map((part, index) => `
        <button class="part-card" data-part="${index}">
          <span class="part-number">${roman(index + 1)} dalis</span>
          <h2>${part.title}</h2>
          <p>${part.description}</p>
          <span class="part-meta">${part.lessons.length} temos · pradėti →</span>
        </button>`).join("")}
    </section>
    <p class="trail">Tai bandomoji struktūra. Tekstai laikini – dabar svarbiausia pajusti, ar kelias aiškus.</p>
  `);
  document.querySelectorAll("[data-part]").forEach(btn => btn.addEventListener("click", () => showLesson(Number(btn.dataset.part), 0)));
}

function showLesson(partIndex, lessonIndex) {
  const part = parts[partIndex];
  const lesson = part.lessons[lessonIndex];
  const currentFlatIndex = flat.findIndex(x => x.partIndex === partIndex && x.lessonIndex === lessonIndex);
  const previous = flat[currentFlatIndex - 1];
  const next = flat[currentFlatIndex + 1];
  const progress = Math.round(((currentFlatIndex + 1) / flat.length) * 100);
  location.hash = `dalis-${partIndex + 1}-tema-${lessonIndex + 1}`;
  shell(`
    <header class="topbar"><button class="back-link" id="home">← Visas kelias</button><span class="brand">${roman(partIndex + 1)} dalis</span></header>
    <section class="lesson-head">
      <div class="progress-row"><span>${currentFlatIndex + 1} iš ${flat.length}</span><div class="progress"><span style="width:${progress}%"></span></div></div>
      <p class="eyebrow">${part.title}</p>
      <h1>${lesson.title}</h1>
    </section>
    <article class="lesson-card">
      <div class="symbol">${lesson.symbol}</div>
      ${lesson.text.map(p => `<p>${p}</p>`).join("")}
      ${lesson.note ? `<div class="aside">${lesson.note}</div>` : ""}
    </article>
    ${lessonIndex === part.lessons.length - 1 && next ? `<section class="part-break"><span class="eyebrow">Toliau</span><h2>${parts[next.partIndex].title}</h2><p>${parts[next.partIndex].description}</p></section>` : ""}
    <nav class="lesson-nav">
      ${previous ? `<button class="nav-card" id="previous"><span class="nav-label">← Ankstesnė</span><span class="nav-title">${previous.title}</span></button>` : `<button class="nav-card" id="previous"><span class="nav-label">← Pradžia</span><span class="nav-title">Visas kelias</span></button>`}
      ${next ? `<button class="nav-card next" id="next"><span class="nav-label">Toliau →</span><span class="nav-title">${next.title}</span></button>` : `<button class="nav-card next" id="next"><span class="nav-label">Kelio pabaiga</span><span class="nav-title">Grįžti į pradžią</span></button>`}
    </nav>
  `);
  document.querySelector("#home").addEventListener("click", showHome);
  document.querySelector("#previous").addEventListener("click", () => previous ? showLesson(previous.partIndex, previous.lessonIndex) : showHome());
  document.querySelector("#next").addEventListener("click", () => next ? showLesson(next.partIndex, next.lessonIndex) : showHome());
}

function roman(number) { return ["I", "II", "III"][number - 1] || number; }

function showHome() {
  location.hash = "";
  shell([
    '<header class="topbar"><span class="brand">Laumija</span><span class="home-link">Vilnius</span></header>',
    '<section class="hub-hero"><p class="eyebrow">Laumės namai</p><h1>Pažink. Patirk.<br>Kurk kartu.</h1>',
    '<p class="intro">Viena vieta atrasti Laumiją, pajusti jos ritmą ir pasirinkti tai, kas šiandien kviečia.</p></section>',

    '<section class="hub-section"><div class="section-head"><h2>Pažink</h2><p>Suprask, kas yra Laumija ir nuo ko pradėti.</p></div><div class="card-rail">',
    '<button class="hub-card featured" data-part="0"><span class="card-kicker">Vedama pažintis</span><span class="card-symbol">✦</span><h3>Laumijos kelias</h3><p>Dešimt trumpų temų apie Laumijos pasaulį ir jo ritmą.</p><span class="card-foot"><span>10 temų</span><span>Pradėti →</span></span></button>',
    '<button class="hub-card small goddess" data-part="1"><span class="card-kicker">Metų ritmas</span><span class="card-symbol">○</span><h3>Rėdos ratas</h3><p>Kaip keičiasi metų laikas ir jį lydinti deivė.</p><span class="card-foot"><span>3 temos</span><span>Atverti →</span></span></button>',
    '</div></section>',

    '<section class="hub-section"><div class="section-head"><h2>Patirk</h2><p>Trumpam sustok ir pajusk šiandienos Laumiją.</p></div><div class="card-rail">',
    '<a class="hub-card small moon" href="https://zivilesau.github.io/laumija-app/menulio-dienos/"><span class="card-kicker">Šiandien</span><span class="card-symbol">☾</span><h3>Mėnulio refleksija</h3><p>Dienos simbolis, pasakojimas ir klausimas sau.</p><span class="card-foot"><span>Keičiasi kasdien</span><span>Atverti →</span></span></a>',
    '<a class="hub-card small journal" href="https://zivilesau.github.io/laumija-app/zurnalas/"><span class="card-kicker">Šios savaitės puslapis</span><span class="card-symbol">▤</span><h3>Rėdos rato žurnalas</h3><p>Gyvas metų dienoraštis, keliaujantis kartu su deivės laiku.</p><span class="card-foot"><span>Naujas turinys</span><span>Skaityti →</span></span></a>',
    '<a class="hub-card small tale" href="https://laumija.lt/p/fbfd84/"><span class="card-kicker">Pasakojimai</span><span class="card-symbol">⌁</span><h3>Raganos pasakos</h3><p>Istorijos, kuriose simboliai prabyla savais balsais.</p><span class="card-foot"><span>Skaityti</span><span>Atverti →</span></span></a>',
    '</div></section>',

    '<section class="hub-section"><div class="section-head"><h2>Kurk kartu</h2><p>Sezoninės veiklos ir maži gyvi susitikimai.</p></div><div class="card-rail">',
    '<a class="hub-card create" href="https://docs.google.com/forms/d/e/1FAIpQLSfxbq3OWUBWYVjrMj9nWqesYz9LXAR7utXFcQLY4_S_TVYviA/viewform?usp=header"><span class="card-kicker">Austėjos laiku</span><span class="card-symbol">⌂</span><h3>Namų dienoraštis</h3><p>Kurkime knygą iš nuotraukų, žiedų, laiškų, receptų ir gyvų namų istorijų.</p><span class="card-foot"><span>1–4 moterys</span><span>Registruotis →</span></span></a>',
    '<article class="hub-card small live"><span class="card-kicker">Vėliau</span><span class="card-symbol">＋</span><h3>Kitas susitikimas</h3><p>Čia atsiras nauja veikla, kai ją atneš kitas deivės laikas.</p><span class="card-foot"><span>Ruošiama</span><span>•</span></span></article>',
    '</div></section>',

    '<section class="hub-section"><div class="section-head"><h2>Susitik gyvai</h2><p>Laumės namų patirtys ir individualūs susitikimai Vilniuje.</p></div><div class="card-rail">',
    '<a class="hub-card small live" href="https://laumija.lt/p/fb8906/"><span class="card-kicker">Individualiai</span><span class="card-symbol">◌</span><h3>Kvapų terapija</h3><p>Susitikimas per kvapus, atmintį ir vidinį pajautimą.</p><span class="card-foot"><span>Vilnius</span><span>Sužinoti →</span></span></a>',
    '<a class="hub-card small create" href="https://laumija.lt/p/1096b77/"><span class="card-kicker">Individualiai</span><span class="card-symbol">⌁</span><h3>Pasakų terapija</h3><p>Asmeninis susitikimas su pasaka ir jos simboliais.</p><span class="card-foot"><span>Vilnius</span><span>Sužinoti →</span></span></a>',
    '<a class="hub-card small goddess" href="https://laumija.lt/p/1009f0b/"><span class="card-kicker">Rankų darbo</span><span class="card-symbol">◇</span><h3>Deivių amuletai</h3><p>Autoriniai papuošalai, gimstantys iš Laumijos simbolių.</p><span class="card-foot"><span>Atrasti</span><span>Atverti →</span></span></a>',
    '</div></section>',
    '<p class="hub-note">Užsuk ten, kur šiandien pajutai daugiausia smalsumo, šilumos ar gyvybės.</p>'
  ].join(""));
  document.querySelectorAll("[data-part]").forEach(btn => btn.addEventListener("click", () => showLesson(Number(btn.dataset.part), 0)));
}

function loadRoute() {
  const match = location.hash.match(/dalis-(\d+)-tema-(\d+)/);
  if (match) {
    const p = Number(match[1]) - 1, l = Number(match[2]) - 1;
    if (parts[p]?.lessons[l]) return showLesson(p, l);
  }
  showHome();
}

window.addEventListener("hashchange", loadRoute);
loadRoute();
