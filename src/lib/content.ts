// ============================================================================
// AthleteOS website copy + config.
// This is the ONE place to edit copy. Change text here, not in the components.
// Words wrapped like {accent:scale} render in the italic serif accent style.
// ============================================================================

export const siteConfig = {
  // Paste the AthleteOS Typeform URL here when ready. Leave empty to fall back
  // to the on-page apply section (#apply) so every CTA still works.
  typeformUrl: "",
  // How many onboarding spots to advertise this month.
  spotsLeft: 3,
  brand: "AthleteOS",
  contactEmail: "hello@athleteos.co", // placeholder, confirm real contact
};

export const nav = {
  links: [
    { label: "Results", href: "#results" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Apply Here",
};

export const hero = {
  pill: `Only ${siteConfig.spotsLeft} onboarding spots left this month`,
  // {accent:...} marks the italic serif emphasis word.
  // Locked positioning copy (Monday Positioning Doc v1, locked June 28, 2026).
  headline: "The only done-for-you acquisition system built {accent:exclusively} for fitness coaches and influencers.",
  sub: "We install a done-for-you acquisition system across your ads, funnels, and workflows. Double your revenue in 60 days or you don't pay.",
  cta: "Apply Here",
  microcopy: "Takes under 60 seconds. No upfront payment.",
};

export const results = {
  label: "Proof",
  heading: "Results speak {accent:louder} than promises.",
  sub: "Real fitness brands, real revenue, doubled.",
  // PLACEHOLDER — Cam supplies the 3 real case studies. Numbers + photos are stand-ins.
  placeholderNote: "Placeholder figures. Real case study numbers and photos get dropped in here.",
  // To add a photo: drop the file in public/results/ and set image to its path,
  // e.g. image: "/results/strength-coach.jpg". Leave empty for a clean placeholder slot.
  cases: [
    {
      niche: "Online strength coach",
      image: "/results/online-strength-coach.jpg",
      from: "$8K / mo",
      to: "$19K / mo",
      timeframe: "54 days",
      quote: "The leads were always there. They just finally started booking.",
    },
    {
      niche: "Nutrition influencer",
      image: "/results/nutrition-influencer.jpg",
      from: "$14K / mo",
      to: "$31K / mo",
      timeframe: "60 days",
      quote: "Same audience, completely different revenue.",
    },
    {
      niche: "Hybrid training brand",
      image: "/results/hybrid-training-brand.jpg",
      from: "$22K / mo",
      to: "$48K / mo",
      timeframe: "49 days",
      quote: "My calendar went from empty to booked out.",
    },
  ],
  cta: "Apply Here",
};

export const oneLiner = {
  // Repointed to "who it's for" so it complements the hero (which now owns the
  // positioning line) instead of duplicating it. No revenue figures, per Cam.
  statement:
    "Made for fitness coaches and influencers with a proven offer, a real audience, and a backend that {accent:leaks}.",
  sub: "Double your revenue in 60 days or you don't pay.",
  cta: "Apply Here",
  image: "/oneliner/fitness-influencer.jpg",
  // Honest trust strip. No partner badges we do not hold. Confirm with Cam.
  trust: [
    "Built for coaches and influencers with a proven offer and a real audience",
    "Founder-led by a fitness model who knows the space",
    "Done for you across every channel",
  ],
};

export const painBlock = {
  label: "Sound familiar",
  heading: "You are doing the hard part {accent:right}. Something still isn't clicking.",
  intro:
    "If a few of these hit home, the problem is not your effort. It is the system behind your offer.",
  image: "/pain/pain-points.jpg",
  pains: [
    {
      title: "Your audience is big, but the sales don't match it.",
      body: "The following is there. The revenue isn't, because the backend isn't built to convert it.",
    },
    {
      title: "Your DMs are full, your calendar isn't.",
      body: "Interested people reach out and then nothing catches them or books them.",
    },
    {
      title: "You post every day and still ride the feast-or-famine rollercoaster.",
      body: "No predictable system, so income swings hard from month to month.",
    },
    {
      title: "Leads go cold before you follow up.",
      body: "No workflows, no nurture, so warm people forget you within a day.",
    },
    {
      title: "Your ads lose money and you can't tell why.",
      body: "If they run at all, they burn cash with no clear system behind them.",
    },
    {
      title: "You are the coach, the closer, the editor, and the admin.",
      body: "Everything runs through you, so nothing scales past you.",
    },
  ],
  bridge:
    "We've been there, we've done that. We can guarantee your revenue doubled because we've done it before and we can do it again.",
};

export const services = {
  label: "What we do",
  heading: "You have built the audience. We turn it into {accent:revenue}.",
  sub: "You are already doing the hard part. We bring the guidance, the branding, and the system that patches your leaky lead funnel.",
  // Feature carousel steps (Services section). Panel labels are placeholder
  // previews until real product screenshots are dropped in.
  steps: [
    {
      name: "Ads",
      title: "Paid ads that bring buyers, not just clicks.",
      description:
        "We build and manage paid ads around your offer and your audience, so paid traffic finally returns buyers and scales the moment you want more.",
      panels: ["Ad manager", "ROAS report"],
      images: ["/services/ads-manager.avif", "/services/ads-manager-2.avif"],
      mocks: [] as string[],
    },
    {
      name: "Organic",
      title: "Your content, turned into booked calls.",
      description:
        "We add the guidance and branding that turns your existing views into booked calls, so the audience you already built starts producing real revenue.",
      panels: ["Content plan", "Booked call"],
      images: [] as string[],
      mocks: ["feed", "dm"],
    },
    {
      name: "Referrals",
      title: "Referrals that run on their own.",
      description:
        "We install a referral system that makes introductions automatic, so your cheapest acquisition channel finally works for you.",
      panels: ["Referral flow"],
      images: [] as string[],
      mocks: ["referral"],
    },
    {
      name: "Workflows",
      title: "Follow up that never lets a lead go cold.",
      description:
        "We build the follow up, booking, and nurture workflows behind the scenes, so no lead slips through and more turn into paying clients.",
      panels: ["Automation map"],
      images: [] as string[],
      mocks: ["automation"],
    },
  ],
  glance: [
    { name: "Ads", line: "Paid ads dialed to your fitness offer that bring buyers, not just clicks." },
    { name: "Organic", line: "Your existing content turned into a channel that books calls." },
    { name: "Referrals", line: "A referral system that turns happy clients into new ones." },
    { name: "Workflows", line: "Backend automations that follow up, book, and convert every lead." },
  ],
  inDepth: [
    {
      no: "01",
      name: "Ads",
      problem: "Your ads either do not run or quietly burn cash.",
      solution: "We build and manage paid ads built around your offer and your audience.",
      result: "So paid traffic finally returns buyers and scales the moment you want more.",
    },
    {
      no: "02",
      name: "Organic",
      problem: "Your content performs but does not convert to clients.",
      solution: "We add the guidance and branding that turns views into booked calls.",
      result: "So the audience you already built starts producing real revenue.",
    },
    {
      no: "03",
      name: "Referrals",
      problem: "Your best clients never send you the next one.",
      solution: "We install a referral system that makes referrals automatic.",
      result: "So your cheapest acquisition channel finally works for you.",
    },
    {
      no: "04",
      name: "Workflows",
      problem: "Leads slip through the cracks the moment they come in.",
      solution: "We build the follow up, booking, and nurture workflows behind the scenes.",
      result: "So no lead goes cold and more turn into paying clients.",
    },
  ],
  summary:
    "On their own, each of these plugs a leak. Together they compound into the outcome we guarantee: double your revenue in 60 days, with no upfront payment.",
  cta: "Apply Here",
};

export const compound = {
  label: "Why it works",
  heading: "The system gets {accent:sharper} every week.",
  body: "Every channel feeds the next. Ads and organic bring the right people in, your funnel and VSL qualify them, the workflows follow up and book them, and referrals multiply them. Each cycle gives us cleaner data, so it compounds instead of resets.",
  benefits: [
    "More booked calls",
    "Lower cost per lead",
    "Predictable month over month growth",
    "Less running through you",
  ],
  // Loop steps shown in the flow visual.
  loop: [
    { step: "01", title: "Traffic", note: "Ads and organic bring the right people in" },
    { step: "02", title: "Funnel and VSL", note: "The offer qualifies and pre-sells them" },
    { step: "03", title: "Workflows", note: "Follow up books the call automatically" },
    { step: "04", title: "Referrals", note: "Happy clients multiply the next round" },
  ],
  loopNote: "Cleaner data every cycle. The loop compounds.",
};

export const process = {
  label: "How we deliver",
  heading: "Our 4-step process to {accent:double} your fitness brand.",
  sub: "Clear, done for you, and built around how coaches and influencers actually grow.",
  steps: [
    { no: "01", title: "Audit", line: "We map your funnel, content, ads, and follow up to find exactly where your fitness leads leak out." },
    { no: "02", title: "Install", line: "We build and install your acquisition system across ads, organic, referrals, and workflows." },
    { no: "03", title: "Optimize", line: "We tune everything against real numbers, not guesses, so conversion climbs." },
    { no: "04", title: "Scale", line: "We double down on what is converting to hit the revenue goal we guaranteed." },
  ],
  cta: "Apply Here",
};

export const testimonials = {
  label: "In their words",
  heading: "There is a reason coaches keep {accent:referring} us.",
  // PLACEHOLDER — swap for real quotes when available.
  placeholderNote: "Placeholder testimonials. Real client quotes go here.",
  quotes: [
    { quote: "We doubled revenue in under 60 days without me touching the backend once.", name: "Placeholder", role: "Online strength coach" },
    { quote: "My content was always good. AthleteOS made it actually convert.", name: "Placeholder", role: "Nutrition influencer" },
    { quote: "The follow up alone paid for the whole thing. Nothing slips now.", name: "Placeholder", role: "Hybrid training brand" },
    { quote: "First month my calendar was booked out. That never happened before.", name: "Placeholder", role: "Physique coach" },
    { quote: "Finally a team that gets fitness and not just generic marketing.", name: "Placeholder", role: "Group coaching founder" },
  ],
  cta: "Apply Here",
};

export const comparison = {
  label: "Your options",
  heading: "What are your {accent:other} options?",
  columns: ["AthleteOS", "Marketing agency", "Doing it yourself"],
  rows: [
    { label: "Built only for fitness coaches and influencers", values: ["yes", "no", "no"] },
    { label: "Done for you across ads, organic, referrals, and workflows", values: ["yes", "partial", "no"] },
    { label: "Revenue guarantee", values: ["Double in 60 days or you don't pay", "None", "None"] },
    { label: "Upfront risk", values: ["No upfront payment", "Upfront retainer", "Your time and money"] },
    { label: "Time to results", values: ["Up to 60 days, done for you", "Slow onboarding", "Trial and error"] },
  ],
  cta: "Apply Here",
};

export const reviews = {
  label: "Reviews",
  heading: "What clients {accent:say}.",
  // PLACEHOLDER — hidden until real ratings exist. Confirm review platform.
  placeholderNote: "Placeholder rating. Connect a real review source before publishing.",
  rating: "4.9",
  outOf: "5",
  count: "on early client reviews",
  breakdown: [
    { stars: 5, count: 42 },
    { stars: 4, count: 3 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ],
};

export const guarantee = {
  headline: "Double your revenue in 60 days or you don't pay.",
  sub: "No upfront payment. If we don't hit it, you don't pay for the work. The risk is ours, not yours.",
  cta: "Apply Here",
};

export const finalCta = {
  heading: "Ready to {accent:double} your revenue in 60 days?",
  sub: "No upfront payment. If we don't hit it, you don't pay for the work. The risk is ours, not yours.",
  pill: `Only ${siteConfig.spotsLeft} onboarding spots left this month`,
  cta: "Apply Here",
  microcopy: "Takes under 60 seconds.",
  // Shown in place of the embed until the Typeform URL is set.
  embedPlaceholder: "Your Typeform embeds here once the URL is set.",
};

export const faq = {
  label: "Questions",
  heading: "Everything you're {accent:wondering}.",
  items: [
    {
      q: "What if it doesn't work?",
      a: "Then you don't pay. Double your revenue in 60 days or you don't pay for the work. The guarantee is the whole point.",
    },
    {
      q: "Do I have to pay anything upfront?",
      a: "No upfront payment. You only pay after you have seen the results we promised.",
    },
    {
      q: "I have been burned by agencies before.",
      a: "Fair. We are fitness only, fully done for you, and guaranteed. The risk sits with us, not you, which is the opposite of how most agencies work.",
    },
    {
      q: "Will this work for my niche or audience size?",
      a: "It is built for coaches and influencers across the range. We point the same system at your specific audience and offer.",
    },
    {
      q: "How much of my time does this take?",
      a: "We build it for you behind the scenes, so it runs off your plate, not on it. You keep creating and coaching.",
    },
    {
      q: "What do you do versus what I do?",
      a: "We handle the backend, the ads, the funnel, and the follow up. You keep doing what you are great at.",
    },
    {
      q: "How fast will I see results?",
      a: "The guarantee window is 60 days, and the work starts the moment you are onboarded.",
    },
  ],
  cta: "Apply Here",
};

export const footer = {
  tagline: "The done-for-you acquisition system for fitness coaches and influencers.",
  contactLabel: "Questions first?",
  cta: "Apply Here",
};
