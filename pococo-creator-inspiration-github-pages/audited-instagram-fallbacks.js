(() => {
  const covers = {
    "DSK_cb-DyaU": "./assets/DSK_cb-DyaU-cover.jpg",
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
