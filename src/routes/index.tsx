import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import favors from "@/assets/product-favors.jpg";
import luxe from "@/assets/product-luxe.jpg";
import labels from "@/assets/product-labels.jpg";
import stand from "@/assets/product-stand.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QT Designs — Bespoke Stickers & Eid Gifting" },
      { name: "description", content: "Handcrafted personalized stickers, gift boxes and Eid favours by QT Designs." },
    ],
  }),
  component: Index,
});

const products = [
  { img: favors, name: "Eid Favour Boxes", price: "from R55", desc: "Personalized bookmark, magnet, Kitkat & treats — tied with ribbon." },
  { img: luxe, name: "Luxe Crescent Box", price: "from R95", desc: "Black & gold octagonal keepsake with 33-bead tasbeeh and bookmark." },
  { img: labels, name: "Custom Jar Labels", price: "from R15", desc: "Nutella, water bottles, juice — personalized for every guest." },
  { img: stand, name: "Crescent Dessert Stand", price: "from R180", desc: "Hand-cut wooden moon tier — the centrepiece of every Eid table." },
];

function Crescent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

function Index() {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-2">
            <Crescent className="h-5 w-5 text-pink" />
            <span className="font-display text-2xl tracking-wide">QT <span className="text-pink">Designs</span></span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#collection" className="hover:text-pink transition">Collection</a>
            <a href="#story" className="hover:text-pink transition">Our Story</a>
            <a href="#contact" className="hover:text-pink transition">Contact</a>
          </nav>
          <button onClick={() => setOrderOpen(true)} className="rounded-full bg-pink px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Order Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-32">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-pink">
              <Crescent className="h-3 w-3" /> Bespoke Eid Gifting
            </p>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Stickers, favours <br/>& keepsakes <em className="text-pink not-italic">made with love.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              QT Designs crafts personalized packaging, sweet boxes and printed
              keepsakes — a little detail that turns any gift into a memory.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => setOrderOpen(true)} className="group relative overflow-hidden rounded-full bg-pink px-8 py-4 font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]">
                Place an order →
              </button>
              <a href="#collection" className="rounded-full border border-border px-8 py-4 font-medium hover:bg-secondary transition">
                Browse collection
              </a>
            </div>
            <div className="mt-12 flex gap-10 text-sm">
              <div><div className="font-display text-3xl text-pink">500+</div><div className="text-muted-foreground">Happy gifters</div></div>
              <div><div className="font-display text-3xl text-pink">7 days</div><div className="text-muted-foreground">Turnaround</div></div>
              <div><div className="font-display text-3xl text-pink">100%</div><div className="text-muted-foreground">Handmade</div></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-pink/10 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-pink/20 shadow-[var(--shadow-card)]">
              <img src={heroImg} alt="Personalized Eid gift boxes with gold ribbons" width={1536} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-pink/30 bg-card px-5 py-4 shadow-[var(--shadow-card)] md:block">
              <div className="flex items-center gap-3">
                <Crescent className="h-6 w-6 text-pink" />
                <div>
                  <div className="font-display text-lg leading-none">Eid Mubarak</div>
                  <div className="text-xs text-muted-foreground">Limited seasonal range</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-pink">The Collection</p>
              <h2 className="font-display text-4xl md:text-5xl">Designed to be unwrapped slowly.</h2>
            </div>
            <p className="hidden max-w-sm text-muted-foreground md:block">Each piece is handmade to order. Personalize names, colours and finishing touches.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary">
                  <img src={p.img} alt={p.name} width={800} height={1000} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-background/85 px-4 py-2 text-xs backdrop-blur">
                    <span className="text-pink">{p.price}</span>
                    <button onClick={() => setOrderOpen(true)} className="text-foreground hover:text-pink">Order →</button>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="relative border-t border-border/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-pink">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Small details, <em className="text-pink not-italic">big moments.</em></h2>
            <p className="mt-6 text-muted-foreground">
              QT Designs began at a kitchen table, cutting stickers for a single
              Eid box. Today, every order is still personally hand-finished —
              packed with the same patience that started it all.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Personalized to every guest","Premium paper & gold foil","Made-to-order, never mass produced","Ships across South Africa"].map(t => (
                <li key={t} className="flex items-center gap-3"><Crescent className="h-4 w-4 text-pink" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-pink/20 bg-card p-8 shadow-[var(--shadow-card)]">
              <p className="font-display text-2xl italic leading-relaxed">
                "I ordered the crescent dessert stand and Nutella labels — every
                guest asked where I got them. Quality is unreal."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink to-pink-soft" />
                <div>
                  <div className="text-sm font-medium">Zainab E.</div>
                  <div className="text-xs text-muted-foreground">Cape Town</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Crescent className="mx-auto h-10 w-10 text-pink" />
          <h2 className="mt-6 font-display text-4xl md:text-6xl">Ready to make it personal?</h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Tell us about your occasion, guest count and colours. We'll come
            back with a quote within 24 hours.
          </p>
          <button onClick={() => setOrderOpen(true)} className="mt-10 rounded-full bg-pink px-10 py-4 font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]">
            Start your order
          </button>
        </div>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2"><Crescent className="h-4 w-4 text-pink" /> QT Designs © {new Date().getFullYear()}</div>
          <div>Handmade in South Africa</div>
        </div>
      </footer>

      {orderOpen && <OrderDialog onClose={() => setOrderOpen(false)} />}
    </div>
  );
}

function OrderDialog({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", item: "Eid Favour Boxes", qty: "10", date: "", notes: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi QT Designs! I'd like to place an order.%0A%0AName: ${form.name}%0AItem: ${form.item}%0AQuantity: ${form.qty}%0ANeeded by: ${form.date}%0ANotes: ${form.notes}`;
    window.open(`https://wa.me/27000000000?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-2xl border border-pink/20 bg-card p-8 shadow-[var(--shadow-elegant)]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-pink" aria-label="Close">✕</button>
        {sent ? (
          <div className="py-8 text-center">
            <Crescent className="mx-auto h-10 w-10 text-pink" />
            <h3 className="mt-4 font-display text-3xl">Order sent!</h3>
            <p className="mt-3 text-muted-foreground">We've opened WhatsApp — finish sending the message and we'll reply within 24 hours.</p>
            <button onClick={onClose} className="mt-6 rounded-full bg-pink px-6 py-2.5 text-primary-foreground">Close</button>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-pink">Place Order</p>
            <h3 className="mt-2 font-display text-3xl">Tell us about your gift</h3>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <Field label="Your name"><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-pink" /></Field>
              <Field label="Item"><select value={form.item} onChange={(e) => setForm({ ...form, item: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-pink">
                {products.map(p => <option key={p.name}>{p.name}</option>)}
              </select></Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Quantity"><input type="number" min="1" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-pink" /></Field>
                <Field label="Needed by"><input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-pink" /></Field>
              </div>
              <Field label="Notes (names, colours, theme)"><textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-pink" /></Field>
              <button type="submit" className="w-full rounded-full bg-pink py-3 font-medium text-primary-foreground transition hover:opacity-90">
                Send order via WhatsApp
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
