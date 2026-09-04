import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Pixelframe" },
      {
        name: "description",
        content: "Unisciti alla community di Pixelframe e discuti dei tuoi videogame preferiti.",
      },
      { property: "og:title", content: "Community — Pixelframe" },
      {
        property: "og:description",
        content: "Unisciti alla community di Pixelframe e discuti dei tuoi videogame preferiti.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-neon/25 blur-[120px]" />
        <div className="absolute top-1/4 right-[-10%] h-[560px] w-[560px] rounded-full bg-neon-2/22 blur-[130px]" />
      </div>
      <main className="relative mx-auto max-w-6xl px-5 py-24">
        <Link to="/" className="text-sm text-muted hover:text-foreground">
          ← Torna alla home
        </Link>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight">
          Community
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          La community è in arrivo. Presto potrai unirti alle discussioni sui giochi del momento.
        </p>
      </main>
    </div>
  );
}
