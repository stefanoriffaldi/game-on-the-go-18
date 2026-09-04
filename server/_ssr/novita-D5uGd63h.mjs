import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/novita-D5uGd63h.js
var import_jsx_runtime = require_jsx_runtime();
function NovitaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 right-[-10%] h-[560px] w-[560px] rounded-full bg-neon-2/22 blur-[130px]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative mx-auto max-w-6xl px-5 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm text-muted-foreground hover:text-foreground",
					children: "← Torna alla home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-5xl font-bold tracking-tight",
					children: "Novità"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted-foreground",
					children: "Resta aggiornato: a breve pubblicheremo tutte le news dalla scena gaming."
				})
			]
		})]
	});
}
//#endregion
export { NovitaPage as component };
