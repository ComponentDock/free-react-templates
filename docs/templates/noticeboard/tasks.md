# Noticeboard — task outline

Recreation of the ColorLib **Alert V01** design (`alert-01`) at `apps/noticeboard`. Spec is the
authority: `openspec/specs/template-noticeboard/spec.md`. Design notes:
`docs/templates/noticeboard/design-notes.md`. Live reference:
`https://preview.colorlib.com/theme/bootstrap/alert-01/` (the slug-only `theme/alert-01/` is 404 — this
family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **single-screen notice panel, not a site**: a 680 px centred column on cool grey
> `#f5f6f8` with a three-line head and four severity alerts (info / success / warning / danger). The
> reference is **3,733 B of HTML and one 6,273 B stylesheet**, with **0 links, 0 buttons, 0 inputs,
> 0 images, 0 focusable elements, 0 scripts, 0 keyframes, 0 `@supports`**.
>
> The risk is not a missing band — it is flattening the five things that make it read as a *severity
> ladder*: the **four tint quads** (bg / 1 px line / darkened title / accent icon), the **28 px
> head-to-first-alert gap** (14 margin **plus** 14 grid gap), the **18 × 16 px card insets**, the
> **22 px icon nudged 1 px down**, and the **481 → 480 media-query step** that shrinks the card
> padding to 14 and the gap to 12 while the panel keeps its 16 px gutter.
>
> Five numbers decide fidelity: panel **680 × 577** at (380, 88); alert **680 × 101.5** at pitch
> **115.5** starting y **217**; icon **22 × 22** at (399, 235); panel cap at vw **712**; intro wrap at
> vw **671**.
>
> **There is no behaviour.** No script, no handlers, no state, no hover, no focus. The four alerts
> differ only in tokens (and `role="alert"` on the danger one).

## 0 — Scaffold

- [ ] `cp -r apps/showbill apps/noticeboard` (simplest static card app: no router, no forms); rename
      the package to `@free-react-templates/noticeboard` and drop showbill's `lib/` + `data/` files
- [ ] `public/CNAME` = `noticeboard.free.componentdock.com`; `"homepage"` =
      `https://noticeboard.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/noticeboard" package-lock.json` → 1)
- [ ] `index.html`: title + `Inter` Google Fonts `<link>`
      (`family=Inter:wght@400..700`, verified 200 — one `<link>`, it is a variable face)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #f5f6f8`, `--color-ink: #111827`, `--color-muted: #4b5563`,
      `--color-body: #374151` (**one** body grey for all four alerts)
- [ ] four quads, each `{ bg, line, title, accent }`:
      info `#eff5ff / #c7dbfe / #1e3a8a / #2563eb`,
      success `#ecfdf5 / #b7ecd4 / #064e3b / #059669`,
      warning `#fff8eb / #fbdba7 / #7c2d12 / #c2410c`,
      danger `#fef2f2 / #fbcaca / #7f1d1d / #dc2626`
- [ ] keep the **title darker than the accent** — using the accent for the title drops 9.46:1 to 4.72:1
- [ ] the ground is **blue-leaning** `#f5f6f8`, not white and not warm paper
- [ ] type at **400 / 600 / 700 only** — 500 renders as 400 and 800/900 as 700

## 2 — Shell and head

- [ ] `main`: `flex justify-center items-start box-border min-h-screen`,
      `padding: clamp(24px, 7vw, 88px) 16px`; **no** other band, **no** footer wrapper beyond the
      attribution line
- [ ] panel: `w-full max-w-[680px] grid content-start gap-[14px] text-[#111827] leading-[1.5]`
- [ ] header: eyebrow `text-[13px] font-semibold tracking-[.04em] uppercase text-[#4b5563]
      m-0 mb-[6px]`, `h1` `text-[clamp(24px,4vw,30px)] font-bold tracking-[-.02em]`,
      intro `text-[15px] text-[#4b5563] mt-2`
- [ ] header keeps `margin-bottom: 14px` **in addition to** the grid's 14 px gap → first alert starts
      **28 px** below the header box (y 217 at 1440)

## 3 — Data module and the alert component

- [ ] `src/data/alerts.ts`: typed `alerts: Alert[]` with `severity`, `title`, `text`, in order
      info → success → warning → danger
- [ ] `src/components/Alert.tsx`: `grid grid-cols-[22px_1fr] gap-[14px] items-start
      px-[18px] py-4 rounded-xl border border-[var(--line)] bg-[var(--bg)]
      shadow-[0_1px_2px_rgba(17,24,39,.04)]`, tokens applied as `style={{ '--bg': …, '--line': … }}`
- [ ] icon: lucide `Info` / `CircleCheck` / `TriangleAlert` / `OctagonX`, `size={22}`
      `strokeWidth={2}`, `aria-hidden` + `focusable="false"`, `mt-px`, `text-[var(--accent)]`
- [ ] title `<p className="text-[15px] font-semibold leading-[1.5] text-[var(--title)] m-0">`
      — **not** an `<h2>`; the page has exactly one heading
- [ ] text `<p className="text-[14px] text-[#374151] leading-[1.5] mt-[3px] m-0">`
- [ ] roles from data: `status`, `status`, `status`, `alert` (danger last)

## 4 — Responsive

- [ ] `max-[480px]:p-[14px] max-[480px]:gap-3` on the alert only — the panel, the radius and the
      `vw − 32` width formula are untouched
- [ ] nothing else is responsive: no `sm:`/`md:`/`lg:` classes; the panel cap, the `h1` clamp and the
      padding clamp do all the work
- [ ] verify the two-step discontinuity: at **481** the first alert is **122.5** (3 lines), at **480**
      it is **118.5** (2 lines, smaller padding)

## 5 — Copy

- [ ] keep the reference's four notices verbatim (heights are copy-driven):
      "New tax rates from 1 October" / "Payment received" / "Card expires next month" /
      "Bank sync failed" with their VAT, `INV-2048`, Visa-4417 and bank-feed sentences
- [ ] eyebrow "Ledgerly · Billing", `h1` "Invoices and payments", intro "Account notices for
      September. Messages that need action stay here until they are resolved."

## 6 — Tests (100 % coverage)

- [ ] `alerts.test.ts` — four entries, order, severities, non-empty copy
- [ ] `Alert.test.tsx` — renders title + text; applies the right token pair per severity; icon is
      `aria-hidden`; `role` is `status` for the first three and `alert` for danger
- [ ] `App.test.tsx` — one `h1`, one `section` labelled by it, four alert roles, **zero** links /
      buttons / inputs, footer links Component Dock
- [ ] no `useState` / `useEffect` anywhere in the app (the reference has no behaviour)

## 7 — Verify and ship

- [ ] `npm run verify:app noticeboard`
- [ ] re-measure the spec's verification checklist at 1440 / 712 / 671 / 481 / 480 / 390 / 320
- [ ] `TEMPLATES.md`: create `## Bootstrap Alerts (12)` between `Bootstrap Accordions` and
      `Bootstrap Buttons`, add the `Alert 01` row with the app URL
- [ ] `npm run readme:status`; commit `feat: Noticeboard — four severity alerts in one billing notice
      panel (ColorLib Alert V01)`; PR + immediate squash merge; confirm the Surge deploy
