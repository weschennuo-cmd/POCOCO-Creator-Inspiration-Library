(() => {
  const library = window.POCOCO_LIBRARY;
  if (!library) return;

  const nav = document.querySelector("#category-nav");
  const sections = document.querySelector("#category-sections");
  const categoryTemplate = document.querySelector("#category-template");
  const caseTemplate = document.querySelector("#case-template");
  const menuToggle = document.querySelector(".menu-toggle");

  const embedUrl = (item) => {
    if (item.platform === "youtube") {
      return `https://www.youtube-nocookie.com/embed/${item.videoId}?rel=0&modestbranding=1`;
    }
    if (item.platform === "tiktok") {
      return `https://www.tiktok.com/player/v1/${item.videoId}?autoplay=0&loop=0&music_info=1&description=1`;
    }
    const type = item.url.includes("/p/") ? "p" : "reel";
    return `https://www.instagram.com/${type}/${item.shortcode}/embed/`;
  };

  library.categories.forEach((category, categoryIndex) => {
    const navLink = document.createElement("a");
    navLink.href = `#${category.id}`;
    navLink.textContent = category.short;
    navLink.dataset.section = category.id;
    nav.append(navLink);

    const categoryCases = library.cases.filter((item) => item.category === category.id);
    const section = categoryTemplate.content.firstElementChild.cloneNode(true);
    section.id = category.id;
    section.dataset.section = category.id;
    section.querySelector(".section-index").textContent =
      `0${categoryIndex + 1} / Inspiration direction`;
    section.querySelector("h2").textContent = category.label;
    section.querySelector(".section-count").textContent =
      `${categoryCases.length} references`;

    const list = section.querySelector(".case-list");
    categoryCases.forEach((item) => {
      const card = caseTemplate.content.firstElementChild.cloneNode(true);
      card.classList.add(item.platform);

      const iframe = card.querySelector("iframe");
      if (item.platform === "local") {
        const video = document.createElement("video");
        video.src = item.videoSrc;
        video.poster = item.poster || "";
        video.title = `${item.title} - original video`;
        video.controls = true;
        video.preload = "metadata";
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        iframe.replaceWith(video);
      } else {
        iframe.src = embedUrl(item);
        const videoPlatform =
          item.platform === "youtube"
            ? "YouTube"
            : item.platform === "tiktok"
              ? "TikTok"
              : "Instagram";
        iframe.title = `${item.title} - ${videoPlatform} video`;
      }

      const platformLabel =
        item.platform === "local"
          ? "Original video"
          : item.platform === "youtube"
            ? "YouTube reference"
            : item.platform === "tiktok"
              ? "TikTok reference"
              : "Instagram reference";
      card.querySelector(".platform-badge").textContent = platformLabel;
      card.querySelector(".watch-time").textContent = `Watch: ${item.watch}`;
      card.querySelector(".direction").textContent = item.direction;
      card.querySelector("h3").textContent = item.title;
      card.querySelector(".overview").textContent = item.overview;
      card.querySelector(".visual-note").textContent = item.visual;
      card.querySelector(".learn").textContent = item.learn;

      const sourceLink = card.querySelector(".source-link");
      if (item.platform === "local") {
        sourceLink.remove();
      } else {
        sourceLink.href = item.url;
        card.querySelector(".source-link-label").textContent =
item.platform === "youtube"
            ? "Watch on YouTube"
            : item.platform === "tiktok"
              ? "View on TikTok"
              : "View on Instagram";
      }

      list.append(card);
    });

    sections.append(section);
  });

  const closeMenu = () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });

  const navLinks = [...nav.querySelectorAll("a")];
  const observedSections = [...document.querySelectorAll(".category-section")];
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.dataset.section === visible.target.id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-25% 0px -62% 0px", threshold: [0, 0.1, 0.25] },
  );

  observedSections.forEach((section) => observer.observe(section));
})();
