(() => {
  const library = window.POCOCO_LIBRARY;
  if (!library) return;

  const familyCase = {
    category: "family",
    title: "A Calm Bedtime with an Active Toddler",
    platform: "local",
    videoSrc: "./pococo-creator-inspiration-github-pages/assets/original-toddler-bedtime.mp4",
    poster: "./pococo-creator-inspiration-github-pages/assets/original-toddler-bedtime-poster.jpg",
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
    videoSrc: "./pococo-creator-inspiration-github-pages/assets/original-projection-showcase.webm",
    poster: "./pococo-creator-inspiration-github-pages/assets/original-projection-showcase-poster.jpg",
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

  const addedCases = [
    {
      category: "family",
      title: "Homeschool Night Sky Activity",
      platform: "instagram",
      shortcode: "DcEEec5oCDQ",
      url: "https://www.instagram.com/reel/DcEEec5oCDQ/",
      direction: "Homeschool family • Learning through wonder",
      overview:
        "Turns the projection into a family learning prompt, making the stars feel like part of a child-friendly discovery moment rather than only room decor.",
      watch: "Full reel",
      visual:
        "The strongest value is the parent-led context: the reel can connect a real home routine with a more imaginative astronomy cue.",
      learn:
        "Frame the projector as a simple way to start conversation, curiosity, or a quiet shared activity with kids."
    },
    {
      category: "family",
      title: "Toddler Playroom Wind-Down",
      platform: "instagram",
      shortcode: "DcT04xNvccJ",
      url: "https://www.instagram.com/reel/DcT04xNvccJ/",
      direction: "Toddler play • Transition to calm",
      overview:
        "Uses a young-child setting to show how an exciting visual can still support a softer evening transition after active play.",
      watch: "Full reel",
      visual:
        "Child-centered framing makes the scale and emotional reaction easy to understand without needing heavy product explanation.",
      learn:
        "Show the before-and-after of the room mood: play energy first, then lights down and projection as the cue to settle."
    },
    {
      category: "family",
      title: "Family Room Glow-Up for Kids",
      platform: "instagram",
      shortcode: "DdCHO7xMWKE",
      url: "https://www.instagram.com/reel/DdCHO7xMWKE/",
      direction: "Kids’ space • Shared family atmosphere",
      overview:
        "Positions the projection as a family-friendly room upgrade that children can respond to immediately and parents can easily explain.",
      watch: "Full reel",
      visual:
        "A child or family room context helps the product read as useful for everyday home life, not just a decorative gadget.",
      learn:
        "Keep the focus on the child’s reaction and the parent’s simple setup action to make the benefit feel believable."
    },
    {
      category: "neuro",
      title: "Sensory-Friendly Room Reset",
      platform: "instagram",
      shortcode: "DcMQtLKpw7T",
      url: "https://www.instagram.com/reel/DcMQtLKpw7T/",
      direction: "Sensory support • Calmer environment",
      overview:
        "Fits best as a sensory environment reference: the projection can be framed as a gentler visual anchor for people who need a softer room mood.",
      watch: "Full reel",
      visual:
        "The room atmosphere is the message; low light and slow visual movement communicate regulation faster than a list of features.",
      learn:
        "Use language around comfort, decompression, and environment design, while avoiding overclaiming medical outcomes."
    },
    {
      category: "neuro",
      title: "Co-Regulation Through Light",
      platform: "instagram",
      shortcode: "Db_iM3cPWVq",
      url: "https://www.instagram.com/reel/Db_iM3cPWVq/",
      direction: "Neurodivergent-friendly routine • Visual calm",
      overview:
        "Works as a reference for explaining how a predictable visual environment can support a calmer shared routine.",
      watch: "Full reel",
      visual:
        "Repeating projection movement and a dimmed room can make the scene feel stable, soft, and less overstimulating.",
      learn:
        "Pair the projection with a real routine cue—reading, breathing, quiet talk, or bedtime preparation—so the content has a practical anchor."
    },
    {
      category: "wellness",
      title: "A Small Night Ritual After a Busy Day",
      platform: "instagram",
      shortcode: "Db--7OYtOn8",
      url: "https://www.instagram.com/reel/Db--7OYtOn8/",
      direction: "Evening reset • Emotional decompression",
      overview:
        "Belongs in wellness because the main creative value is the personal shift from daytime stimulation into a softer night mood.",
      watch: "Full reel",
      visual:
        "The projection gives the creator a visible ritual cue: lights down, atmosphere changes, and the room starts to feel slower.",
      learn:
        "Open with the feeling you want to leave behind, then use the projector reveal as the moment the routine changes pace."
    },
    {
      category: "wellness",
      title: "Quiet Self-Care Under the Stars",
      platform: "instagram",
      shortcode: "Dcb9JbGBNm3",
      url: "https://www.instagram.com/reel/Dcb9JbGBNm3/",
      direction: "Self-care night • Cozy recovery",
      overview:
        "Uses the projector as part of a low-effort self-care scene, ideal for creators who focus on relaxation, mood, or gentle routines.",
      watch: "Full reel",
      visual:
        "A darker frame with controlled warm accents helps the projection feel immersive without losing the room’s cozy details.",
      learn:
        "Keep the actions simple—turn it on, sit down, breathe, read, stretch, or journal—so the product feels naturally useful."
    },
    {
      category: "wellness",
      title: "Night-In Mood Reset",
      platform: "instagram",
      shortcode: "Dcha4A-TlgM",
      url: "https://www.instagram.com/reel/Dcha4A-TlgM/",
      direction: "Night-in routine • Stress relief mood",
      overview:
        "A good reference for making the projector part of a personal decompression sequence rather than a direct sales demo.",
      watch: "Full reel",
      visual:
        "The visual hook comes from contrast: an ordinary room becomes a more cinematic and restful space once the projection appears.",
      learn:
        "Let the caption or opening line name the emotional need, then show the atmosphere doing most of the persuasion."
    },
    {
      category: "spaces",
      title: "Cozy Room Atmosphere Upgrade",
      platform: "instagram",
      shortcode: "DbYtWmdCMH9",
      url: "https://www.instagram.com/reel/DbYtWmdCMH9/",
      direction: "Room styling • Cozy visual reveal",
      overview:
        "Best used as room-inspiration content: the projector becomes part of a styled home scene and helps the space feel more intentional.",
      watch: "Full reel",
      visual:
        "The room transformation is the selling point, especially if the shot holds long enough for viewers to read the projection coverage.",
      learn:
        "Use a clean reveal from normal lighting to projection lighting, and keep furniture or decor visible for scale."
    },
    {
      category: "spaces",
      title: "Soft Bedroom Projection Moment",
      platform: "instagram",
      shortcode: "DbmSoYnsTn4",
      url: "https://www.instagram.com/reel/DbmSoYnsTn4/",
      direction: "Bedroom mood • Low-light styling",
      overview:
        "Shows how projection can turn a bedroom into a more immersive nighttime space with very little setup.",
      watch: "Full reel",
      visual:
        "Ceiling and wall coverage are especially useful here because they show the environment changing beyond a small product close-up.",
      learn:
        "Film one wide room angle and one close product action so viewers understand both the mood and how it was created."
    },
    {
      category: "spaces",
      title: "Creator Room Aesthetic with Stars",
      platform: "instagram",
      shortcode: "DcQxGaJI5yl",
      url: "https://www.instagram.com/reel/DcQxGaJI5yl/",
      direction: "Creator setup • Aesthetic room content",
      overview:
        "Works as a general creator-room reference where the product supports an existing visual style instead of taking over the whole post.",
      watch: "Full reel",
      visual:
        "The projection adds texture and motion, while the room styling gives the video a stronger lifestyle context.",
      learn:
        "Match the disc color and room props so the projector feels like part of the creator’s personal aesthetic."
    },
    {
      category: "spaces",
      title: "Cozy Corner Night Scene",
      platform: "instagram",
      shortcode: "DclZXQIOkma",
      url: "https://www.instagram.com/reel/DclZXQIOkma/",
      direction: "Cozy corner • Ambient room inspiration",
      overview:
        "A useful reference for showing the projector in a small, intimate corner instead of needing a fully staged bedroom.",
      watch: "Full reel",
      visual:
        "A compact setup can still feel immersive when the camera captures both the projection surface and a few warm room details.",
      learn:
        "Use a corner, desk, bed, or chair as the human-scale anchor, then let the projection expand the scene around it."
    },
    {
      category: "spaces",
      title: "Cinematic Room Escape",
      platform: "instagram",
      shortcode: "Dcm107YT9TG",
      url: "https://www.instagram.com/reel/Dcm107YT9TG/",
      direction: "Room escape • Dreamy visual mood",
      overview:
        "Belongs with cozy-space references because the core idea is transformation: an ordinary room becomes a small escape destination.",
      watch: "Full reel",
      visual:
        "The projection should be treated like a scene-setting layer, with slower pacing so viewers can absorb the mood.",
      learn:
        "Use a caption about escape, imagination, or winding down, then support it with steady room shots rather than quick product cuts."
    },
    {
      category: "product",
      title: "Simple Projection Demo for Quick Understanding",
      platform: "instagram",
      shortcode: "DcmRYVdtAIl",
      url: "https://www.instagram.com/reel/DcmRYVdtAIl/",
      direction: "Product clarity • Quick feature proof",
      overview:
        "Works best as a product-reference clip because it can show the projector effect quickly and help viewers understand the visual payoff.",
      watch: "Full reel",
      visual:
        "A direct reveal or close product action makes the post useful as proof of what the projector does in a real room.",
      learn:
        "Keep the demo clean: show the device or setup briefly, then spend most of the reel on the projected result."
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

  addedCases.forEach((item) => {
    const key = item.shortcode || item.videoId || item.videoSrc || item.url;
    if (!existingKeys.has(key)) {
      library.cases.push(item);
      existingKeys.add(key);
    }
  });
})();
