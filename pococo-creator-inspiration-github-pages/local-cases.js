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

  const tiktokCozyCase = {
    category: "spaces",
    title: "A Storybook Escape Under the Stars",
    platform: "tiktok",
    videoId: "7665373482074524950",
    url: "https://www.tiktok.com/@maciastracy/video/7665373482074524950",
    direction: "Cozy night • Storybook escapism",
    overview:
      "Builds around one emotional promise—a little escape from reality—and pairs a Peter Pan–inspired projection with an intimate night-in atmosphere.",
    watch: "Full video",
    visual:
      "Projection-led color and a dark, softly styled room turn an everyday space into a cinematic storybook scene without overcrowding the frame.",
    learn:
      "Choose one projection theme that matches the caption and audio, then use restrained styling and slow pacing so the atmosphere carries the story."
  };

  const verifiedAddedCases = [
    {
      category: "family",
      title: "Screen-Free Audiobook Bedtime",
      platform: "instagram",
      shortcode: "DcMQtLKpw7T",
      url: "https://www.instagram.com/reel/DcMQtLKpw7T/",
      direction: "Kids’ bedtime • Screen-free family routine",
      overview:
        "The creator frames POCOCO as an evening alternative to screens: the family turns on the projector, gets cozy, and plays kids’ audiobooks or podcasts.",
      watch: "Full reel",
      visual:
        "The value comes from combining the ceiling projection with a quiet listening activity, so the product supports a real family wind-down instead of replacing the routine.",
      learn:
        "Pair projection with a concrete kid-friendly action—storybook audio, podcast listening, reading, or cuddling—so parents immediately understand how to use it."
    },
    {
      category: "spaces",
      title: "Twilight Movie Night Atmosphere",
      platform: "instagram",
      shortcode: "DcEEec5oCDQ",
      url: "https://www.instagram.com/reel/DcEEec5oCDQ/",
      direction: "Bookish movie night • Magical room mood",
      overview:
        "A book/movie creator links the projector to a Twilight-style evening, using the stars to make a familiar fandom night feel more magical.",
      watch: "Full reel",
      visual:
        "The strongest angle is aesthetic fit: dark, moody pop-culture styling plus galaxy projection creates a clear themed atmosphere.",
      learn:
        "Tie a projection disc to a specific movie, book, or fandom mood so the room transformation has a recognizable story."
    },
    {
      category: "family",
      title: "School Counselor Mom Bedtime Transition",
      platform: "instagram",
      shortcode: "Db_iM3cPWVq",
      url: "https://www.instagram.com/reel/Db_iM3cPWVq/",
      direction: "Kids’ bedtime • Gentle transition after a full day",
      overview:
        "A professional school counselor and mom explains that children may be in bed before their brains are ready to slow down, then shows POCOCO as part of the boys’ nightly transition.",
      watch: "Full reel",
      visual:
        "The routine has credible parenting details: screens and overhead lights off, children choose a projection disc, then the family reads, talks, or quietly looks up together.",
      learn:
        "Use parent expertise carefully: explain the transition challenge, show the child’s choice, and mention practical helpers like the timer without making medical claims."
    },
    {
      category: "product",
      title: "Small Change, Better Nights",
      platform: "instagram",
      shortcode: "DbYtWmdCMH9",
      url: "https://www.instagram.com/reel/DbYtWmdCMH9/",
      direction: "Brand product clip • Quick emotional promise",
      overview:
        "The official POCOCO account presents the reel around a simple promise: a small projector-led change can make nights feel better.",
      watch: "Full reel",
      visual:
        "Because the caption is short, the clip should be used mainly as a quick product-mood reference rather than a detailed creator story.",
      learn:
        "Keep one clear transformation message and let the visual reveal carry the proof when the caption is minimal."
    },
    {
      category: "neuro",
      title: "Nervous System Wind-Down Cues",
      platform: "instagram",
      shortcode: "DbmSoYnsTn4",
      url: "https://www.instagram.com/reel/DbmSoYnsTn4/",
      direction: "Nervous system education • Sleep hygiene routine",
      overview:
        "The creator explains wind-down through nervous-system safety cues, then places the projector inside a screen-free routine with lower lights, tidying, journaling, reading, and music.",
      watch: "Full reel",
      visual:
        "The projection works as an environmental cue: reducing harsh light and adding a softer visual focus makes the routine feel calmer and more intentional.",
      learn:
        "Educational sleep content should connect the projector to environment cues and routine design, while avoiding promises that it treats anxiety or sleep problems."
    },
    {
      category: "spaces",
      title: "Tiny Universe Bedroom Ritual",
      platform: "instagram",
      shortcode: "Db--7OYtOn8",
      url: "https://www.instagram.com/reel/Db--7OYtOn8/",
      direction: "Bedroom transformation • Peaceful nighttime ritual",
      overview:
        "The creator’s hook is bringing the universe into the bedroom, turning an ordinary room into a peaceful little nighttime ritual.",
      watch: "Full reel",
      visual:
        "This belongs with room inspiration because the central proof is spatial: the ceiling and bedroom become the story.",
      learn:
        "Use a simple transformation line, then hold on the room-wide projection long enough for viewers to feel the before-and-after."
    },
    {
      category: "wellness",
      title: "IVF Stress-Relief Room Idea",
      platform: "instagram",
      shortcode: "DcQxGaJI5yl",
      url: "https://www.instagram.com/reel/DcQxGaJI5yl/",
      direction: "IVF stress context • Science-led relaxation",
      overview:
        "An IVF lab professional connects her love of stars with the stress of retrieval and transfer days, suggesting the projector as a way to make clinical-feeling spaces softer.",
      watch: "Full reel",
      visual:
        "The contrast between microscope/science context and galaxy projection gives the post a memorable professional angle beyond ordinary bedroom decor.",
      learn:
        "For health-adjacent creators, frame the product as atmosphere and comfort support only; do not imply treatment or guaranteed stress relief."
    },
    {
      category: "neuro",
      title: "School SLP Sensory Space",
      platform: "instagram",
      shortcode: "Dcha4A-TlgM",
      url: "https://www.instagram.com/reel/Dcha4A-TlgM/",
      direction: "SLP classroom support • Sensory environment",
      overview:
        "A school SLP frames communication support around regulation first, using a cozy sensory space to help students feel supported before expecting them to talk.",
      watch: "Full reel",
      visual:
        "The projection is useful as part of a sensory environment: it creates a softer shared focus without demanding immediate verbal interaction.",
      learn:
        "When creators have education or therapy credentials, anchor the idea in environment design and support, not in cure-style claims."
    },
    {
      category: "wellness",
      title: "Teacher Brain After-School Switch-Off",
      platform: "instagram",
      shortcode: "DclZXQIOkma",
      url: "https://www.instagram.com/reel/DclZXQIOkma/",
      direction: "Teacher well-being • School-to-home transition",
      overview:
        "A trauma-informed teacher describes the hard transition from school mode to home mode, then uses lower lights, less noise, a couch, TV or reading, and the galaxy projection to decompress.",
      watch: "Full reel",
      visual:
        "The room environment visibly supports the mental shift: projection changes the feel of the room after a stimulating classroom day.",
      learn:
        "Use the creator’s real professional stressor as the hook, then show one calm home sequence that proves the reset."
    },
    {
      category: "wellness",
      title: "Endometriosis Meditation Night Environment",
      platform: "instagram",
      shortcode: "Dcm107YT9TG",
      url: "https://www.instagram.com/reel/Dcm107YT9TG/",
      direction: "Meditation and chronic-pain community • Soft environment",
      overview:
        "An endometriosis meditation specialist explains why trust matters in brand collaborations, then frames the projector as a soft, soothing nighttime environment for meditation classes or before bed.",
      watch: "Full reel",
      visual:
        "The strongest asset is the creator’s trust-based explanation, supported by the chill room mood and projection atmosphere.",
      learn:
        "Let wellness creators be transparent about gifted products and keep the recommendation low-pressure, especially in sensitive health communities."
    },
    {
      category: "family",
      title: "A Son’s Room Upgrade Beyond Glow Stars",
      platform: "instagram",
      shortcode: "DcmRYVdtAIl",
      url: "https://www.instagram.com/reel/DcmRYVdtAIl/",
      direction: "Child’s room • Long-term family use",
      overview:
        "Parents position the projector as something their son can enjoy in his room for years, comparing it favorably with stick-on glow-in-the-dark stars.",
      watch: "Full reel",
      visual:
        "The message is simple and family-oriented: a child’s room gains a stronger, more flexible night-sky effect than static decor.",
      learn:
        "For family creators, compare the projector against a familiar alternative and show why the room feels more alive or lasting."
    },
    {
      category: "spaces",
      title: "Ceramic Tea and Nebula Cup Night",
      platform: "instagram",
      shortcode: "DdCHO7xMWKE",
      url: "https://www.instagram.com/reel/DdCHO7xMWKE/",
      direction: "Cozy rainy evening • Handmade decor match",
      overview:
        "A ceramics creator connects rainy evenings, tea, handmade Nebula cups, and the projector, making the galaxy effect feel tailored to her existing aesthetic.",
      watch: "Full reel",
      visual:
        "The best visual idea is matching product atmosphere with creator-made objects, so the projection and cups feel like one styled ritual.",
      learn:
        "Look for props that already echo space, stars, or color gradients, then make the projector feel like the missing layer of the scene."
    },
    {
      category: "wellness",
      title: "Wind Down With Me Galaxy Ceiling",
      platform: "instagram",
      shortcode: "DcT04xNvccJ",
      url: "https://www.instagram.com/reel/DcT04xNvccJ/",
      direction: "Night routine • Self-care wind-down",
      overview:
        "Anita Rahimi frames the clip directly as a wind-down routine: the projector turns the ceiling into a galaxy and becomes part of a self-care night.",
      watch: "Full reel",
      visual:
        "The caption makes the intended use clear—night routine, wind-down routine, self-care—so it belongs with wellness rather than children or product-only demos.",
      learn:
        "Use a direct 'wind down with me' structure: start with the evening mood, reveal the galaxy ceiling, and end with a simple link or code CTA."
    }
  ];

  const firstFamily = library.cases.findIndex((item) => item.category === "family");
  library.cases.splice(firstFamily < 0 ? 0 : firstFamily, 0, familyCase);

  const firstCozy = library.cases.findIndex((item) => item.category === "spaces");
  library.cases.splice(firstCozy < 0 ? library.cases.length : firstCozy, 0, cozyCase);
  library.cases.splice(
    firstCozy < 0 ? library.cases.length : firstCozy + 1,
    0,
    tiktokCozyCase
  );

  const existingKeys = new Set(
    library.cases.map((item) => item.shortcode || item.videoId || item.videoSrc || item.url)
  );

  verifiedAddedCases.forEach((item) => {
    const key = item.shortcode || item.videoId || item.videoSrc || item.url;
    if (!existingKeys.has(key)) {
      library.cases.push(item);
      existingKeys.add(key);
    }
  });
})();
