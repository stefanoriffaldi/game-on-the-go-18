import { createFileRoute, Link } from "@tanstack/react-router";

import nebulaDrift from "@/assets/nebula-drift.jpg";
import ombraDiFerro from "@/assets/ombra-di-ferro.jpg";
import cucinaStellare from "@/assets/cucina-stellare.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixelframe — Il portale italiano dei videogame" },
      {
        name: "description",
        content:
          "Recensioni, novità e guide sui videogame. La scena del gaming raccontata a tutto volume, senza rumore.",
      },
      {
        property: "og:title",
        content: "Pixelframe — Il portale italiano dei videogame",
      },
      {
        property: "og:description",
        content:
          "Recensioni, novità e guide sui videogame. La scena del gaming raccontata a tutto volume, senza rumore.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased">
      <AuroraField />
      <Header />

      <main className="relative mx-auto max-w-6xl px-5">
        <Hero />
        <FeaturedGames />
        <LatestReviews />
        <NewsList />
      </main>

      <Footer />
    </div>
  );
}

function AuroraField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-neon/25 blur-[120px] animate-pulse-glow"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute top-1/4 right-[-10%] h-[560px] w-[560px] rounded-full bg-neon-2/22 blur-[130px] animate-pulse-glow"
        style={{ animationDuration: "8s", animationDelay: "1.2s" }}
      />
      <div className="absolute bottom-[-10%] left-1/3 h-[480px] w-[480px] rounded-full bg-neon/15 blur-[120px]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.9442 0.0124 293.821 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9442 0.0124 293.821 / 0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-md bg-neon/15 font-display text-sm font-bold text-neon ring-1 ring-neon/40">
            PX
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            PIXEL<span className="text-neon">FRAME</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm md:flex">
          <Link
            to="/recensioni"
            className="text-muted transition-colors hover:text-foreground"
          >
            Recensioni
          </Link>
          <Link
            to="/novita"
            className="text-muted transition-colors hover:text-foreground"
          >
            Novità
          </Link>
          <Link
            to="/guide"
            className="text-muted transition-colors hover:text-foreground"
          >
            Guide
          </Link>
          <Link
            to="/community"
            className="text-muted transition-colors hover:text-foreground"
          >
            Community
          </Link>
        </div>
        <Link
          to="/"
          className="rounded-md bg-neon/15 px-3.5 py-2 text-sm font-semibold text-neon ring-1 ring-neon/40 transition-colors hover:bg-neon/25"
        >
          Entra
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="animate-rise pb-12 pt-16 md:pb-16 md:pt-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-neon">
        Sett. 2025 — n.07
      </p>
      <h1 className="mt-4 max-w-[26ch] font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance md:text-7xl">
        La scena dei videogiochi, raccontata a tutto volume
      </h1>
      <p className="mt-5 max-w-[52ch] text-lg text-pretty text-muted">
        Recensioni senza sconti, novità ogni giorno e la community più curata
        d'Italia. Tutto ciò che conta, senza rumore.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          to="/novita"
          className="rounded-md bg-neon px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-neon/85"
        >
          Rileva le novità
        </Link>
        <Link
          to="/recensioni"
          className="rounded-md px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition-colors hover:ring-neon/40"
        >
          Sfoglia le recensioni
        </Link>
      </div>
    </section>
  );
}

function FeaturedGames() {
  return (
    <section className="animate-rise py-12" style={{ animationDelay: "120ms" }}>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Giochi in evidenza
        </h2>
        <span className="font-mono text-xs text-muted">(a)</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <article className="card-glow rounded-xl bg-surface/70 p-5 ring-1 ring-border backdrop-blur-md transition-shadow duration-300 hover:card-glow-hover">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-neon">
              In uscita
            </span>
            <span className="font-mono text-xs text-muted">11 ago</span>
          </div>
          <h3 className="font-display text-xl font-bold tracking-tight">
            Nebula Drift
          </h3>
          <p className="mt-1.5 text-sm text-pretty text-muted">
            Corse al limite dell'orbita, ogni drift ti travolge.
          </p>
        </article>
        <article className="card-glow rounded-xl bg-surface/70 p-5 ring-1 ring-border backdrop-blur-md transition-shadow duration-300 hover:card-glow-hover">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-neon-2">
              In evidenza
            </span>
            <span className="font-mono text-xs text-muted">Recensione</span>
          </div>
          <h3 className="font-display text-xl font-bold tracking-tight">
            Ombra di Ferro
          </h3>
          <p className="mt-1.5 text-sm text-pretty text-muted">
            RPG d'azione in un regno che respira davvero.
          </p>
        </article>
      </div>
    </section>
  );
}

function LatestReviews() {
  const reviews = [
    {
      title: "Nebula Drift",
      score: "9,1",
      genre: "Azione",
      image: nebulaDrift,
      alt: "Copertina di Nebula Drift: una supercar futuristica su un'autostrada bagnata illuminata al neon",
    },
    {
      title: "Ombra di Ferro",
      score: "8,6",
      genre: "RPG",
      image: ombraDiFerro,
      alt: "Copertina di Ombra di Ferro: guerriero dark fantasy avvolto nella nebbia con braci arancioni",
    },
    {
      title: "Cucina Stellare",
      score: "9,4",
      genre: "Simulazione",
      image: cucinaStellare,
      alt: "Copertina di Cucina Stellare: una cucina accogliente e colorata in stile simulazione",
    },
  ];

  return (
    <section className="animate-rise py-12" style={{ animationDelay: "240ms" }}>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Ultime recensioni
        </h2>
        <span className="font-mono text-xs text-muted">(b)</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.title}
            className="card-glow overflow-hidden rounded-xl bg-surface/70 ring-1 ring-border backdrop-blur-md transition-shadow duration-300 hover:card-glow-hover"
          >
            <img
              src={review.image}
              alt={review.alt}
              width={1024}
              height={640}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-neon">
                  {review.score}
                </span>
                <span className="font-mono text-xs text-muted">
                  {review.genre}
                </span>
              </div>
              <h3 className="mt-1 font-display text-base font-bold tracking-tight">
                {review.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const newsItems = [
  { day: "14", title: "Aggiornamento 2.0 per Nebula Drift", tag: "Novità" },
  { day: "13", title: "Ombra di Ferro: le prime impressioni", tag: "Anteprima" },
  { day: "12", title: "Guida ai trofei: Cucina Stellare", tag: "Guida" },
  { day: "11", title: "Il ritorno della retro arcade, in diretta", tag: "Retro" },
];

function NewsList() {
  return (
    <section className="animate-rise py-12" style={{ animationDelay: "360ms" }}>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold tracking-tight">Novità</h2>
        <span className="font-mono text-xs text-muted">(c)</span>
      </div>
      <div className="overflow-hidden rounded-xl bg-surface/70 ring-1 ring-border backdrop-blur-md">
        {newsItems.map((item, index) => (
          <Link
            key={item.day + item.title}
            to="/novita"
            className={`group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-neon/5 ${
              index !== newsItems.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-neon">{item.day}</span>
              <span className="text-sm font-medium">{item.title}</span>
            </div>
            <span className="font-mono text-xs text-muted">{item.tag}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 text-sm text-muted md:flex-row md:items-center">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          PIXEL<span className="text-neon">FRAME</span>
        </span>
        <span className="font-mono text-xs">
          © 2025 Pixelframe · Fatto con passione a Milano
        </span>
      </div>
    </footer>
  );
}
