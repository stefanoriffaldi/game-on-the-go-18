import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Guide — Pixelframe" },
      {
        name: "description",
        content: "Guide dettagliate per completare i tuoi giochi preferiti.",
      },
      { property: "og:title", content: "Guide — Pixelframe" },
      {
        property: "og:description",
        content: "Guide dettagliate per completare i tuoi giochi preferiti.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute bottom-[-10%] left-1/3 h-[480px] w-[480px] rounded-full bg-neon/15 blur-[120px]" />
      </div>
      <main className="relative mx-auto max-w-6xl px-5 py-24">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Torna alla home
        </Link>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight">
          Guide
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Stiamo preparando guide complete per aiutarti a padroneggiare ogni gioco.
        </p>
      </main>
    </div>
  );
}
