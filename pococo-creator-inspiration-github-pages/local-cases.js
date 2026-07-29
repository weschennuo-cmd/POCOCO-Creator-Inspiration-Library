(() => {
  const library = window.POCOCO_LIBRARY;
  if (!library) return;

  const familyCase = {
    category: "family",
    title: "A Calm Bedtime with an Active Toddler",
    platform: "local",
    videoSrc: "./assets/original-toddler-bedtime.mp4",
    poster: "./assets/original-toddler-bedtime-poster.jpg",
    direction: "Toddler bedtime • Immersive visual transition",
    overview:
      "Uses a simple promise—creating a calm, cozy bedtime with an active toddler—then lets the projection guide the child from excited exploration into a shared reading moment.",
    watch: "Full video • 00:17",
    visual:
      "Low-angle child silhouettes, full-frame ocean and galaxy projections, and a warm parent–child reading shot create a clear journey from wonder to calm.",
    learn:
      "Open with one relatable bedtime challenge, use several projection worlds to hold attention, and finish with a quiet human moment that proves the emotional benefit."
  };

  const cozyCase = {
    category: "spaces",
    title: "A Cozy Bedroom Galaxy Transformation",
    platform: "local",
    videoSrc: "./assets/original-projection-showcase.webm",
    poster: "./assets/original-projection-showcase-poster.jpg",
    direction: "Cozy bedroom • Day-to-night transformation",
    overview:
      "Moves from a bright, personality-filled bedroom into an immersive galaxy escape, using the projector as part of a relaxed solo evening rather than presenting it as a standalone demonstration.",
    watch: "Full video • 00:39",
    visual:
      "Strong day-to-night contrast, ceiling-wide compositions, multiple projection looks, and clean product close-ups make both the atmosphere and operation easy to understand.",
    learn:
      "Lead with a lived-in room and a relaxed personal mood, then add a few clear product actions—choose the disc, insert it, reveal the result—to keep the story both cinematic and useful."
  };

  const firstFamily = library.cases.findIndex((item) => item.category === "family");
  library.cases.splice(firstFamily < 0 ? 0 : firstFamily, 0, familyCase);

  const firstCozy = library.cases.findIndex((item) => item.category === "spaces");
  library.cases.splice(firstCozy < 0 ? library.cases.length : firstCozy, 0, cozyCase);
})();
