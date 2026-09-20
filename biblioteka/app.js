const library = {
  writing: [
    {
      title: "Grifų sala",
      symbol: "𓅓",
      tone: "island",
      description: "Moteris su dukra pabėga į mažą pajūrio miestelį, kuriame jų laukia nykstanti sala ir seniai nutrūkusi paslaptis.",
      status: "Rašoma",
      rhythm: "Skaityti 1–2 skyrius",
      url: "./grifu-sala/"
    },
    {
      title: "Estelės kelionė",
      symbol: "🧵",
      tone: "thread",
      description: "Simbolinė pasaka auga į savarankišką istoriją apie paveldą, nutrūkusias gijas ir drąsą jas susiūti savaip.",
      status: "Auginama",
      rhythm: "Literatūrinė versija kuriama",
      url: ""
    }
  ],
  tales: [
    { title: "Žvaigždutės pasaka", symbol: "✦", note: "Asmeninė pasaka", url: "./zvaigzdutes-pasaka/" },
    { title: "Austėjos pasaka", symbol: "🐝", note: "Skaityti pasaką", url: "https://laumija.lt/p/1147569/" },
    { title: "Ragana ir Vilkė", symbol: "🐺", note: "Skaityti pasaką", url: "https://laumija.lt/p/1145e41/" },
    { title: "Gabija ir Sniegena", symbol: "🔥", note: "Skaityti pasaką", url: "https://laumija.lt/p/1145e55/" }
  ],
  reading: [
    { title: "Skaitiniai", symbol: "📖", note: "Moteriškumo temos", url: "https://laumija.lt/p/fbfba6/" },
    { title: "Kvapų istorijos", symbol: "🌿", note: "Augalai, kvapai ir atmintis", url: "https://laumija.lt/p/fc050a/" }
  ]
};

function bookCard(book) {
  const tag = book.url ? "a" : "article";
  const href = book.url ? ` href="${book.url}"` : "";
  const state = book.url ? "" : " is-coming";
  return `
    <${tag}${href} class="book-card${state}" data-tone="${book.tone}">
      <div class="book-inner">
        <div class="book-topline">
          <span class="status">${book.status}</span>
          <span class="book-symbol" aria-hidden="true">${book.symbol}</span>
        </div>
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <div class="book-footer">
          <small>${book.rhythm}</small>
          <span class="open-label">${book.url ? "Atversti →" : "Netrukus"}</span>
        </div>
      </div>
    </${tag}>`;
}

function smallCard(item, className) {
  return `
    <a class="${className}" href="${item.url}">
      <span aria-hidden="true">${item.symbol}</span>
      <h3>${item.title}</h3>
      <small>${item.note}</small>
    </a>`;
}

document.querySelector("#writing-grid").innerHTML = library.writing.map(bookCard).join("");
document.querySelector("#tale-grid").innerHTML = library.tales.map(item => smallCard(item, "tale-card")).join("");
document.querySelector("#reading-grid").innerHTML = library.reading.map(item => smallCard(item, "reading-card")).join("");
