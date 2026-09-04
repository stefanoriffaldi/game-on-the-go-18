import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DeoHObJp.js
var import_jsx_runtime = require_jsx_runtime();
var nebula_drift_default = "/assets/nebula-drift-C_yeA_fZ.jpg";
var ombra_di_ferro_default = "/assets/ombra-di-ferro-D6PeXrQW.jpg";
var cucina_stellare_default = "/assets/cucina-stellare-Br9_6GLu.jpg";
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative mx-auto max-w-6xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedGames, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestReviews, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsList, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function AuroraField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-neon/25 blur-[120px] animate-pulse-glow",
				style: { animationDuration: "6s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/4 right-[-10%] h-[560px] w-[560px] rounded-full bg-neon-2/22 blur-[130px] animate-pulse-glow",
				style: {
					animationDuration: "8s",
					animationDelay: "1.2s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] left-1/3 h-[480px] w-[480px] rounded-full bg-neon/15 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					backgroundImage: "linear-gradient(oklch(0.9442 0.0124 293.821 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9442 0.0124 293.821 / 0.04) 1px, transparent 1px)",
					backgroundSize: "64px 64px"
				}
			})
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-border bg-background/60 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-md bg-neon/15 font-display text-sm font-bold text-neon ring-1 ring-neon/40",
						children: "PX"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold tracking-tight",
						children: ["PIXEL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neon",
							children: "FRAME"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-7 text-sm md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/recensioni",
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: "Recensioni"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/novita",
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: "Novità"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guide",
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: "Guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/community",
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: "Community"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-md bg-neon/15 px-3.5 py-2 text-sm font-semibold text-neon ring-1 ring-neon/40 transition-colors hover:bg-neon/25",
					children: "Entra"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "animate-rise pb-12 pt-16 md:pb-16 md:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.25em] text-neon",
				children: "Sett. 2025 — n.07"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-[26ch] font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance md:text-7xl",
				children: "La scena dei videogiochi, raccontata a tutto volume"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-[52ch] text-lg text-pretty text-muted-foreground",
				children: "Recensioni senza sconti, novità ogni giorno e la community più curata d'Italia. Tutto ciò che conta, senza rumore."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/novita",
					className: "rounded-md bg-neon px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-neon/85",
					children: "Rileva le novità"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/recensioni",
					className: "rounded-md px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition-colors hover:ring-neon/40",
					children: "Sfoglia le recensioni"
				})]
			})
		]
	});
}
function FeaturedGames() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "animate-rise py-12",
		style: { animationDelay: "120ms" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold tracking-tight",
				children: "Giochi in evidenza"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-muted-foreground",
				children: "(a)"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-glow rounded-xl bg-surface/70 p-5 ring-1 ring-border backdrop-blur-md transition-shadow duration-300 hover:card-glow-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-wider text-neon",
							children: "In uscita"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: "11 ago"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold tracking-tight",
						children: "Nebula Drift"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-pretty text-muted-foreground",
						children: "Corse al limite dell'orbita, ogni drift ti travolge."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-glow rounded-xl bg-surface/70 p-5 ring-1 ring-border backdrop-blur-md transition-shadow duration-300 hover:card-glow-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-wider text-neon-2",
							children: "In evidenza"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: "Recensione"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold tracking-tight",
						children: "Ombra di Ferro"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-pretty text-muted-foreground",
						children: "RPG d'azione in un regno che respira davvero."
					})
				]
			})]
		})]
	});
}
function LatestReviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "animate-rise py-12",
		style: { animationDelay: "240ms" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold tracking-tight",
				children: "Ultime recensioni"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-muted-foreground",
				children: "(b)"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-3",
			children: [
				{
					title: "Nebula Drift",
					score: "9,1",
					genre: "Azione",
					image: nebula_drift_default,
					alt: "Copertina di Nebula Drift: una supercar futuristica su un'autostrada bagnata illuminata al neon"
				},
				{
					title: "Ombra di Ferro",
					score: "8,6",
					genre: "RPG",
					image: ombra_di_ferro_default,
					alt: "Copertina di Ombra di Ferro: guerriero dark fantasy avvolto nella nebbia con braci arancioni"
				},
				{
					title: "Cucina Stellare",
					score: "9,4",
					genre: "Simulazione",
					image: cucina_stellare_default,
					alt: "Copertina di Cucina Stellare: una cucina accogliente e colorata in stile simulazione"
				}
			].map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-glow overflow-hidden rounded-xl bg-surface/70 ring-1 ring-border backdrop-blur-md transition-shadow duration-300 hover:card-glow-hover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: review.image,
					alt: review.alt,
					width: 1024,
					height: 640,
					loading: "lazy",
					className: "aspect-[16/10] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold text-neon",
							children: review.score
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: review.genre
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-base font-bold tracking-tight",
						children: review.title
					})]
				})]
			}, review.title))
		})]
	});
}
var newsItems = [
	{
		day: "14",
		title: "Aggiornamento 2.0 per Nebula Drift",
		tag: "Novità"
	},
	{
		day: "13",
		title: "Ombra di Ferro: le prime impressioni",
		tag: "Anteprima"
	},
	{
		day: "12",
		title: "Guida ai trofei: Cucina Stellare",
		tag: "Guida"
	},
	{
		day: "11",
		title: "Il ritorno della retro arcade, in diretta",
		tag: "Retro"
	}
];
function NewsList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "animate-rise py-12",
		style: { animationDelay: "360ms" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold tracking-tight",
				children: "Novità"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-muted-foreground",
				children: "(c)"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl bg-surface/70 ring-1 ring-border backdrop-blur-md",
			children: newsItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/novita",
				className: `group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-neon/5 ${index !== newsItems.length - 1 ? "border-b border-border" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-neon",
						children: item.day
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: item.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: item.tag
				})]
			}, item.day + item.title))
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-border py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-base font-bold tracking-tight text-foreground",
				children: ["PIXEL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-neon",
					children: "FRAME"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: "© 2025 Pixelframe · Fatto con passione a Milano"
			})]
		})
	});
}
//#endregion
export { HomePage as component };
