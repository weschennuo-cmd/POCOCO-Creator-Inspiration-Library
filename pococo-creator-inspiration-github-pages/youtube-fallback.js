(() => {
  document.querySelectorAll(".case-card.youtube").forEach((card) => {
    const sourceLink = card.querySelector(".source-link");
    const iframe = card.querySelector("iframe");
    const embedWrap = card.querySelector(".embed-wrap");
    if (!sourceLink || !iframe || !embedWrap) return;
    if (!sourceLink.href.includes("QaNa3w96IfY")) return;

    iframe.remove();
    embedWrap.classList.add("has-poster");

    const posterLink = document.createElement("a");
    posterLink.className = "poster-link";
    posterLink.href = sourceLink.href;
    posterLink.target = "_blank";
    posterLink.rel = "noopener noreferrer";
    posterLink.setAttribute(
      "aria-label",
      "Open the original YouTube video in a new tab.",
    );
    posterLink.innerHTML = `
      <img src="./assets/QaNa3w96IfY-poster.jpg" alt="">
      <span class="poster-action">
        <span class="poster-play" aria-hidden="true">&#9654;</span>
        <span>
          Watch the original video
          <small class="embed-note">Open on YouTube</small>
        </span>
      </span>
    `;
    embedWrap.append(posterLink);
  });
})();
