import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/recensioni")({
  head: () => ({
    meta: [
      { title: "Recensioni — Pixelframe" },
      {
        name: "description",
        content: "Le recensioni più accurate e senza sconti sui videogame del momento.",
      },
      { property: "og:title", content: "Recensioni — Pixelframe" },
      {
        property: "og:description",
        content: "Le recensioni più accurate e senza sconti sui videogame del momento.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecensioniPage,
});

function RecensioniPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-neon/25 blur-[120px]" />
      </div>
      <main className="relative mx-auto max-w-6xl px-5 py-24">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Torna alla home
        </Link>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight">
          Recensioni
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Presto troverai qui le nostre analisi approfondite sui titoli più attesi.
        </p>
      </main>
    </div>
  );
}
