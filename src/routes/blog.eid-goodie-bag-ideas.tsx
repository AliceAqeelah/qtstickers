import { createFileRoute, Link } from "@tanstack/react-router";
import qtLogo from "@/assets/qt-logo.png";

export const Route = createFileRoute("/blog/eid-goodie-bag-ideas")({
  head: () => ({
    meta: [
      { title: "Eid Goodie Bag Ideas — What to Put Inside + Checklist | QT Designs" },
      { name: "description", content: "Looking for Eid goodie bag ideas? Discover what to put inside Eid gift bags, from treats and tasbeeh to personalized bookmarks. Plus a free printable checklist." },
      { property: "og:title", content: "Eid Goodie Bag Ideas — What to Put Inside + Checklist | QT Designs" },
      { property: "og:description", content: "Looking for Eid goodie bag ideas? Discover what to put inside Eid gift bags, from treats and tasbeeh to personalized bookmarks." },
      { property: "og:type", content: "article" },
      { name: "article:published_time", content: new Date().toISOString() },
    ],
    links: [
      { rel: "canonical", href: "/blog/eid-goodie-bag-ideas" },
    ],
  }),
  component: EidGoodieBagIdeas,
});

const checklistItems = [
  { title: "Sweet treats", desc: "Mini chocolates, nougat, or halal gummies — the first thing kids reach for." },
  { title: "A tasbeeh (33 beads)", desc: "A beautiful reminder that Eid is still about dhikr and gratitude." },
  { title: "A personalized bookmark", desc: "Add a child's name and a short Qur'anic verse — ours are laminated and gold-foiled." },
  { title: "A mini magnet", desc: "A crescent or masjid design for the fridge — something they'll keep year-round." },
  { title: "Nutella or water-bottle label", desc: "Swap generic packaging for a label with their name in elegant script." },
  { title: "Scented soap or candle", desc: "A small luxe touch that parents appreciate just as much." },
  { title: "Date pouch or tissue pack", desc: "Practical, halal, and fits neatly into any box." },
];

const themeIdeas = [
  { name: "Pink & Gold Princess", items: "Pink favour box, gold-foil bookmark, mini tiara magnet, pink tasbeeh" },
  { name: "Midnight Blue Mosque", items: "Navy box, silver crescent magnet, blue tasbeeh, moon-phase bookmark" },
  { name: "Botanical Eid Garden", items: "Sage box, floral label, leaf-shaped bookmark, honey jar" },
  { name: "Classic Black & Gold", items: "Luxe crescent box, black tasbeeh, gold bookmark, mini candle" },
];

function EidGoodieBagIdeas() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={qtLogo} alt="QT Designs" className="h-10 w-auto" />
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            <Link to="/" className="hover:text-pink transition">Home</Link>
            <Link to="/blog/eid-goodie-bag-ideas" className="text-pink font-medium">Blog</Link>
            <a href="/#collection" className="hover:text-pink transition">Collection</a>
            <a href="/#story" className="hover:text-pink transition">Our Story</a>
          </nav>
          <Link to="/" className="rounded-full bg-pink px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Order Now
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-pink">
            Eid Gifting Guide
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Eid Goodie Bag Ideas:<br /><em className="text-pink not-italic">What to put inside.</em>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground">
            Whether you're preparing Eid gift bags for a classroom, a family gathering, or a corporate iftar, the right mix of treats, keepsakes, and personal touches turns a simple bag into a memory.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Intro */}
        <div className="prose-custom">
          <h2 className="font-display text-3xl md:text-4xl">Start with the why</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Eid goodie bags aren't just about sugar. They're a small act of love — a way to say "you matter to me" at the end of Ramadan. When guests (especially children) open a bag that has their name on it, the gift becomes a keepsake, not just a snack.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            At QT Designs, we hand-finish every Eid favour box, label, and bookmark so that your goodie bags feel bespoke — even if you're giving out thirty of them.
          </p>
        </div>

        {/* Checklist */}
        <div className="mt-20">
          <h2 className="font-display text-3xl md:text-4xl">The ultimate Eid goodie bag checklist</h2>
          <p className="mt-3 text-muted-foreground">Tick at least three of these and your bag will feel full, thoughtful, and faith-centred.</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {checklistItems.map((item, i) => (
              <div key={item.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink/10 text-pink font-display text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div className="mt-20">
          <h2 className="font-display text-3xl md:text-4xl">Theme ideas to make it cohesive</h2>
          <p className="mt-3 text-muted-foreground">Pick a palette and carry it through the box, labels, and contents for a professional, Instagram-worthy finish.</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {themeIdeas.map((theme) => (
              <div key={theme.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl text-pink">{theme.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{theme.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personalization CTA */}
        <div className="mt-20 rounded-3xl border border-pink/20 bg-card p-8 md:p-12 text-center shadow-[var(--shadow-elegant)]">
          <img src={qtLogo} alt="" className="mx-auto h-12 w-auto" />
          <h2 className="mt-5 font-display text-3xl md:text-4xl">Make every bag personal</h2>
          <p className="mt-4 mx-auto max-w-lg text-muted-foreground">
            We design custom jar labels, bookmarks, magnets, and favour boxes that match your theme — printed with guest names, event dates, or short duas. No two bags need to look the same.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="rounded-full bg-pink px-8 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]">
              Browse the collection →
            </Link>
            <a href="https://wa.me/27726955808" className="rounded-full border border-border px-8 py-3.5 font-medium hover:bg-secondary transition">
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Quick tips */}
        <div className="mt-20">
          <h2 className="font-display text-3xl md:text-4xl">Quick tips for stress-free packing</h2>
          <ul className="mt-8 space-y-4">
            {[
              "Order personalised items 7–10 days before Eid so nothing is rushed.",
              "Buy non-perishable treats first; add fresh dates or baked goods 1–2 days out.",
              "Assemble bags on a big table with a playlist — it's actually therapeutic.",
              "Label each bag with a name tag so guests feel seen before they even open it.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="font-display text-3xl md:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              { q: "How many items should go in an Eid goodie bag?", a: "Three to five items is the sweet spot — one edible, one spiritual (tasbeeh or bookmark), and one decorative or practical keepsake." },
              { q: "Can I personalise every single bag?", a: "Yes. Our custom labels, bookmarks, and magnets can each be printed with individual names or a single event design." },
              { q: "What age range are these goodie bags for?", a: "We design for all ages — from toddler-friendly no-small-parts boxes to elegant adult keepsakes with candles and premium tasbeeh." },
              { q: "Do you ship assembled boxes or DIY kits?", a: "Both. We can ship fully assembled and ribbon-tied favour boxes, or flat-pack kits with stickers and instructions if you prefer to pack yourself." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2"><img src={qtLogo} alt="" className="h-6 w-auto" /> QT Designs © {new Date().getFullYear()}</div>
          <div className="flex items-center gap-6">
            <a href="tel:+27726955808" className="hover:text-pink transition">+27 72 695 5808</a>
            <span className="hidden md:inline text-border">|</span>
            <span>Handmade in South Africa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
