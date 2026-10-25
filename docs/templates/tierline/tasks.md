# Tierline — task outline

Recreation of the ColorLib **Card V04** design (`card-04`) at `apps/tierline`. Spec is the authority:
`openspec/specs/template-tierline/spec.md`. Design notes: `docs/templates/tierline/design-notes.md`.
Check boxes only as work ships.

> This is a **section, not a site**: one dark band with a centred head and three plans, the middle one inverted
> to white and 58.5 px taller. The reference is **4,184 B of HTML + one 9,675 B stylesheet, 13 tick glyphs, no
> image and no JavaScript**.
> The risk is not a missing band — it is *inventing* one (a nav, a billing toggle, a comparison table, an FAQ,
> a fourth "enterprise" plan) or "fixing" the two details that make the composition work: **the featured card
> is inverted, never scaled**, and **the dark cards are hairlines on near-black, not grey boxes**.
>
> Three numbers decide fidelity: the card is **360 × 488** with **302 px** of content (all three cards, the
> featured one included, because its 1 px border is *transparent*, not removed), the featured card is
> **546.5** tall (+26 px padding, +32.5 px fifth list row), and the grid is **3 → 1 columns at 881 / 880** with
> **no two-column state anywhere**.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/tierline`; rename the package to `@free-react-templates/tierline`
- [ ] `public/CNAME` = `tierline.free.componentdock.com`; `homepage` = `https://tierline.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/tierline" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Manrope 400; 500; 700; 800**
      (`css2?family=Manrope:wght@400;500;700;800&display=swap`), `preconnect` to `fonts.gstatic.com` — **not**
      the reference's ten self-hosted `woff2` files (two binaries copied five times, weight 600 undeclared)
- [ ] `@theme` in `src/index.css`: `--color-night: #0c0f1d`, `--color-card: #151a2e`, `--color-card-line:
      #262c47`, `--color-card-ink: #e5e7f5`, `--color-card-muted: #a9aecb`, `--color-eyebrow: #b7a8ff`,
      `--color-violet: #5b3df5`, `--color-violet-deep: #9333ea`, `--color-ribbon-a: #6d4dff`,
      `--color-ribbon-b: #b04dff`, `--color-paper: #ffffff`, `--color-paper-ink: #14142b`,
      `--color-paper-muted: #4d5170`, `--color-paper-rule: #ebe8fb`, `--color-tick-ground: #efeaff`,
      `--color-cta-line: #3a4166`, `--radius-card: 22px`, `--radius-cta: 12px`, `--font-sans: "Manrope", …`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] no new dependency: the only glyph is a 20 × 20 tick SVG, one component reused 13 times
- [ ] **do not port the `:where(html) … { all: revert; }` reset guard** (55 lines) — Tailwind's preflight is the
      equivalent; keep `box-sizing: border-box` inside the cards (the reference sets it on `.cl-card04 *`)

## 1 — Primitives

- [ ] `PlanCard` — `<article>` with `aria-labelledby`, `position: relative`, radius **22**, padding
      `30px 28px 32px`, `border: 1px solid #262c47`, `background: #151a2e`, `color: #e5e7f5`,
      `font-size: 15px; line-height: 1.5`; a `featured` variant switches surface/ink/muted/rule and padding to
      `44px 28px` with **`border: 1px solid transparent`** (never `border-none` — that would widen the content
      by 2 px)
- [ ] `PlanName` — `<h2>` **20 px / 30 / 700**, `margin: 0`, id = `plan-<slug>`; `featured` → `#5b3df5`
- [ ] `PlanPitch` — `<p>` 15/22.5/400 muted, `margin: 6px 0 22px`, **`min-height: 3em`** (45 px = two lines;
      it is *not* a three-line reserved block)
- [ ] `PlanPrice` — flex, `align-items: baseline`, `flex-wrap: wrap`, `gap: 8px`, `margin: 0 0 22px`;
      `amount` **48/48/800/−1.92px** in card ink, `per` 14/21/500 muted. Do not vertically centre the unit —
      baseline alignment is what puts it 26 px below the amount's top
- [ ] `PlanCta` — `<a>` `display: block`, `padding: 13px 18px`, radius **12**, 15/700 white,
      `text-align: center`; dark skin: `1px solid #3a4166`, hover `#222844` / `#4d5580`, focus
      `3px #b7a8ff` offset 3; featured skin: `linear-gradient(90deg,#5b3df5,#9333ea)`, transparent border,
      `shadow 0 10px 24px -10px rgba(91,61,245,.8)`, hover `#4c2fe0 → #7e22ce` **and** `translateY(-1px)`,
      focus `3px #5b3df5` offset 3
- [ ] `PlanList` — `__list-title` is a `<p>` (13/19.5/700/0.78px uppercase) with `margin-top 26`,
      `padding-top 22`, `border-top: 1px` in the card's rule colour, `margin-bottom 12`; then `<ul>` as
      `grid gap-10 list-none p-0`, each `<li>` `flex items-start gap-2.5`
- [ ] `Tick` — inline SVG `viewBox="0 0 20 20"`, `path d="m5 10.5 3 3 7-7"`, `fill: none`,
      `stroke-width: 2.4`, round caps/joins, `aria-hidden`, **20 × 20** with `padding: 2px`, radius 50 %,
      `margin-top: 1px`; dark disc `rgba(139,114,255,.18)` / stroke `#b7a8ff`, featured `#efeaff` / `#5b3df5`
- [ ] `PopularRibbon` — `<p>` "Most popular", `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2`,
      `padding: 6px 14px`, radius **999**, 12.5/700/0.5px white on `linear-gradient(90deg,#6d4dff,#b04dff)`,
      `whitespace-nowrap`; it must add **0 px** of height to the card

## 2 — The band

- [ ] `PricingBand` — `<main>` on `#0c0f1d`, `max-width: 1120px` **content box**, `margin: 0 auto`,
      `padding: clamp(40px, 7vw, 88px) 16px`, `color: #e5e7f5`
- [ ] the glow lives on the band container, not `body`:
      `background-image: radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,.22), transparent 70%)`
- [ ] header — `max-width: 620px`, `margin: 0 auto 44px`, `text-align: center`: eyebrow
      **13/700/1.82px/uppercase** `#b7a8ff`; `h1` **`clamp(28px, 4vw, 44px)`/1.12/800/−0.03em** white,
      `margin: 10px 0 12px`; sub **16/1.6/400** `#a9aecb`
- [ ] grid — `grid grid-cols-3 gap-5 items-center` above 880 px; at `≤ 880` a single **440 px** max track
      centred (`grid-cols-[minmax(0,440px)] justify-center`). **No two-column state.**
- [ ] page footer — one small line of print linking **https://www.componentdock.com/** ("Component Dock")

## 3 — Content

- [ ] head verbatim: eyebrow **"Pricing"**, `h1` **"Plans that grow with your inbox"**, sub **"Every plan
      includes unlimited contacts, a shared inbox and a 14-day free trial. Prices in USD, billed monthly."**
- [ ] plan 1 **Starter** / "For freelancers answering customers on their own." / **$12** / "per seat / month" /
      **Start free trial** / "What's included" / *1 shared inbox · Email and contact form channels · Saved
      replies · 7-day conversation history*
- [ ] plan 2 (featured) **Most popular** / **Team** / "For small support teams that need to share the load." /
      **$29** / "per seat / month" / **Start free trial** / "Everything in Starter, plus" / *5 shared inboxes ·
      Live chat and social channels · Assignment rules and tags · Customer satisfaction surveys · Unlimited
      history*
- [ ] plan 3 **Scale** / "For growing teams with service levels to meet." / **$59** / "per seat / month" /
      **Talk to sales** / "Everything in Team, plus" / *Unlimited inboxes · SLA timers and escalations ·
      Single sign-on and audit log · Priority support in 2 hours*
- [ ] list labels stay **sentence case in the DOM** ("What's included", straight ASCII apostrophe) and are
      uppercased by CSS only
- [ ] anchors resolve — no bare `#` and **no invented signup route**; the source has no inner pages at all
- [ ] **no images anywhere** (the reference has 0 `<img>`) and **no script**

## 4 — Verification

- [ ] columns **1 / 1 / 1 / 1 / 1 / 1 / 1 / 3 / 3 / 3 / 3 / 3 / 3 / 3** and card widths
      **288 / 328 / 358 / 398 / 440 / 440 / 440 / 269.7 / 276 / 317.3 / 330.7 / 360 / 360 / 360** at 320 /
      360 / 390 / 430 / 500 / 768 / 880 / 881 / 900 / 1,024 / 1,060 / 1,152 / 1,440 / 1,920
- [ ] band height **956.2** at 1440 (88 px padding, 189.7 head, 44 gap, 546.5 row); **870.9** at 1,024;
      **925** at 1,060; **931.5** at 881; **1,860.3** at 880; **1,809** at 500; **1,866** at 390; **1,953** at
      320 — at 1,024 `document.scrollHeight` reports 900 (viewport), so measure the band element
- [ ] `scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 424 / 430 /
      436 / 500 / 600 / 768 / 880 / 881 / 900 / 1,024 / 1,060 / 1,120 / 1,152 / 1,200 / 1,280 / 1,440 / 1,920
- [ ] plain card **360 × 488**, content **302**, children **30 / 45 / 48 / 50.5 / 42.5 / 120**, gaps
      **6 / 22 / 22 / 26 / 12**; featured **360 × 546.5**, padding `44px 28px`, list **152.5**
- [ ] the featured card starts **29.25 px higher** than its neighbours at 1440 (y 321.7 vs 351) and the two
      plain cards are **not** stretched
- [ ] ribbon **116 × 30.8**, centred at x 662, **14.4 px** above the card's outer top, **0 px** of height added,
      not clipped at any width
- [ ] `h1` **2 lines ≥ 1,060**, **1 line 436–1,059**, **2 lines ≤ 434** (nowrap advance 615.6 at 1,059 vs 620
      available; 404 vs head 403 at 435); sub **3 lines ≤ 422**
- [ ] cards stop being level below 1,060 — **510.5 / 546.5 / 488** at 1,024, **533 / 611 / 533** at 900,
      **533 / 633.5 / 533** at 881, **510.5 / 611 / 488** at 320
- [ ] hover cycle: dark CTA `#222844` / border `#4d5580`, no transform; featured CTA gradient darkens **and**
      moves `matrix(1,0,0,1,0,-1)`
- [ ] `prefers-reduced-motion: reduce` → CTA transition `none`, featured hover transform `none`, nothing else
- [ ] one `h1`, three `h2`, three `<article>`, `<main>` + `<header>`; all three `aria-labelledby` resolve; 13
      ticks `aria-hidden`
- [ ] Manrope **400; 500; 700; 800** only (no 600, no bundled woff2); `grep -ri colorlib apps/tierline` and
      `grep -ri 'card-04' apps/tierline` → no matches
- [ ] 100% coverage, `scripts/verify-app.sh tierline` green
- [ ] after shipping: add the row from the spec under the new `## Bootstrap Cards (20)` section, between
      `## Bootstrap Carousels (20)` and `## Bootstrap Checkboxes (20)`, and mark it `[x]` (the implementer
      stream owns `TEMPLATES.md`, not the prep)
