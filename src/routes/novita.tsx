import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/novita")({
  head: () => ({
    meta: [
      { title: "Novità — Pixelframe" },
      {
        name: "description",
        content: "Tutte le novità dal mondo dei videogame, filtrate per te.",
      },
      { property: "og:title", content: "Novità — Pixelframe" },
      {
        property: "og:description",
        content: "Tutte le novità dal mondo dei videogame, filtrate per te.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NovitaPage,
});

function NovitaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-[-10%] h-[560px] w-[560px] rounded-full bg-neon-2/22 blur-[130px]" />
      </div>
      <main className="relative mx-auto max-w-6xl px-5 py-24">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Torna alla home
        </Link>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight">
          Novità
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Resta aggiornato: a breve pubblicheremo tutte le news dalla scena gaming.
        </p>
      </main>
    </div>
  );
}
