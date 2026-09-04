import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recensioni-BZ1bUdvR.js
var import_jsx_runtime = require_jsx_runtime();
function RecensioniPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-neon/25 blur-[120px]" })
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
					children: "Recensioni"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted-foreground",
					children: "Presto troverai qui le nostre analisi approfondite sui titoli più attesi."
				})
			]
		})]
	});
}
//#endregion
export { RecensioniPage as component };
