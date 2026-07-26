(() => {
  const covers = {
    "DSY1_H0DEmE": "./assets/DSY1_H0DEmE-cover.png",
    "DQUoElKEjzz": "./assets/DQUoElKEjzz-cover.png",
    "DQkYk1mDkzo": "./assets/DQkYk1mDkzo-cover.png",
    "DSK_cb-DyaU": "./assets/DSK_cb-DyaU-cover.jpg",
    "DXCmHhvjuhY": "./assets/DXCmHhvjuhY-cover.png",
    "DOgoxg8CdbG": "./assets/DOgoxg8CdbG-cover.png",
    "DNGFrBSNj_o": "./assets/DNGFrBSNj_o-cover.png",
    "DXxsMZdOuf1": "./assets/DXxsMZdOuf1-cover.png",
    "DW1ofFNCD5n": "./assets/DW1ofFNCD5n-cover.png",
    "DYSE8hvSXEc": "./assets/DYSE8hvSXEc-cover.png",
    "DYevdfpxBmO": "./assets/DYevdfpxBmO-cover.png",
    "DPBwFX5Ek1F": "./assets/DPBwFX5Ek1F-cover.jpg",
  };

  document.querySelectorAll(".case-card.instagram").forEach((card) => {
    const sourceLink = card.querySelector(".source-link");
    const iframe = card.querySelector("iframe");
    const embedWrap = card.querySelector(".embed-wrap");
    if (!sourceLink || !iframe || !embedWrap) return;

    const shortcode = Object.keys(covers).find((code) =>
      sourceLink.href.includes(code),
    );
    if (!shortcode) return;

    iframe.remove();
    embedWrap.classList.add("has-poster");

    const posterLink = document.createElement("a");
    posterLink.className = "poster-link";
    posterLink.href = sourceLink.href;
    posterLink.target = "_blank";
    posterLink.rel = "noopener noreferrer";
    posterLink.setAttribute(
      "aria-label",
      "Open this Instagram reel in a new tab.",
    );
    posterLink.innerHTML = `
      <img src="${covers[shortcode]}" alt="">
      <span class="poster-action">
        <span class="poster-play" aria-hidden="true">&#9654;</span>
        <span>
          Watch the original reel
          <small class="embed-note">This post opens on Instagram.</small>
        </span>
      </span>
    `;
    embedWrap.append(posterLink);
  });
})();
