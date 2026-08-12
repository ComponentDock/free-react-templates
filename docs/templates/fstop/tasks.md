# Fstop (ColorLib Snapshot) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fstop` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Snapshot" —
  `https://colorlib.com/wp/template/snapshot/` (Photography Template).
  TEMPLATES.md has **FOUR duplicate rows** — lines **499** (Bootstrap), **1168**
  (Business), **2359** (One Page), **2473** (Photography) — all `- [ ]`; mark
  ALL FOUR `[x]` when done. Recreation uses the NEW name **Fstop** (an
  f-stop = camera aperture setting; single lowercase word, no collision with
  `ls apps/`, spec folders, or `docs/templates/`).
- **Preview URL:** `https://preview.colorlib.com/theme/snapshot/` — **HTTP 200**
  (50 KB), analyzed live in a browser (structure + computed styles).
  Stylesheet: `css/style.css` (58 KB: bootstrap 4 + custom theme). Fonts
  **"Noto Sans"** (400/700) + **"Noto Serif"** (400/700) loaded via inline
  cf-fonts `@font-face` in the head — recreate with Google Fonts `<link>`s.
- **Screenshot / visual design** (`snapshot-free-template.jpg`, verified via
  browser vision): dark cinematic hero — full-width behind-the-scenes photo
  (two people) darkened with a black overlay; centered logo (camera icon +
  "SNAPSHOT" + "Photographer / San Francisco"), huge white uppercase "WE MAKE
  SOMETHING GREAT", gray lorem, **outlined** "CONTACT US" button; About below
  with a portrait photo left and agency copy right. Minimal dark photography
  portfolio, white/taupe on near-black.
- **Sections (from the live DOM, in order):** fixed right-side **dot
  navigation** (`#navbar`, `position: fixed; top: 50%; right: 50px`) → hero
  (`#home`, bg photo + black overlay 0.5, logo box + 62px white uppercase h1
  "We Make Something Great" + outlined "Contact us →") → about (`#about`,
  video thumb + 80px play circle, 16px gray caps h2, 2 paragraphs, counter
  "120 Project complete" 10px uppercase, 2 small photos, Noto Serif italic
  quote "— Lucy Lee") → services (`#services`, "Photography Services" + 3
  video cards + 3 taupe circular progress bars 90/80/75) → selected projects
  (`#work`, "Selected Projects" + **12** 600px photo tiles w/ hover expand
  circle, "Nature / Beautiful Work") → testimony (`#testimonial`,
  subheading "Testimony" + "Our satisfied customer says", 5 dark cards w/
  overlapping 100px avatar + italic quote + "Garreth Smith" + taupe role) →
  contact (`#contact`, "Contact Me" + 4 dark info boxes + form w/ taupe pill
  "Send Message" + 300px map placeholder) → footer (centered copyright +
  social icons).
- **Notable quirks / fidelity calls:**
  - The whole site is **DARK** (`body { background: #191a1c; color: #9da1a5 }`)
    — no white sections anywhere. Do NOT build light sections.
  - Section h2s are **16px gray uppercase** (`#9da1a5`, ls 2px, weight 700) —
    small caps, NOT big white headings. Only the hero h1 is huge (62px white).
  - Hero CTA is an **outlined** button (`border: 1px solid rgba(255,255,255,.2)`,
    10px/700 uppercase, gray text) — not a filled pill. The form submit is
    the only filled button: **taupe pill** (`#9d8f8f`, radius 30px, hover →
    transparent bg + taupe text).
  - Nav is a fixed vertical dot rail (no hamburger); dots 5px circle, active
    dot filled taupe `#9d8f8f`. Mobile: rail stays, `right: 20px`.
  - Testimony carousel: 5 items, all named "Garreth Smith" in the source with
    different roles — keep the name or vary it, but keep the 5 role variants
    (CEO Founder of Commercial Building / CEO Founder of Interior Design /
    Exterior Designer / Landscape Designer / System Analyst).
  - Original counter animates 0→120 (jquery.animateNumber) at **10px
    uppercase** — render "120" statically (or animate) with the label
    "Project complete".
  - Project tiles link to a second page (`work-single.html`) + open a
    lightbox in the original — recreation is single-page: non-navigating
    links, hover expand icon only (no lightbox needed).
  - Play button links to Vimeo — render as a non-navigating button.
  - Footer credit: "made with ❤ by Colorlib" → "made with ❤ by Component
    Dock" linking `https://www.componentdock.com/`; footer social icons via
    inline SVG brand paths (lucide-react dropped brand icons).
  - `lucide-react` icons to use: camera, video, clapperboard, play, expand,
    map-pin, phone, mail, globe, arrow-right, quote.

## Tasks (implementation order)

1. Scaffold `apps/fstop` from the simplest existing app (copy app, rename
   package to `@free-react-templates/fstop`); `npm install` at root to
   register the workspace in the lockfile; verify
   `grep -c "free-react-templates/fstop" package-lock.json`. Keep
   `injectUiSource()` in `vite.config.ts` (see conventions.md).
2. `index.html`: title "Fstop — Photography", Google Fonts `<link>` for
   Noto Sans (400, 700) + Noto Serif (400, 700).
3. `src/index.css` `@theme` tokens (see Verification checklist in spec):
   `--color-ink: #191a1c` (page bg), `--color-body: #9da1a5` (text),
   `--color-taupe: #9d8f8f` (accent), `--color-card: #202224` (dark cards);
   `--font-sans: "Noto Sans"`, `--font-serif: "Noto Serif"`; heading utility
   (16px uppercase ls 2px weight 700 body-color), small-caps utility (10px
   uppercase ls 2px), outline-button utility (1px `rgba(255,255,255,.2)`
   border, 10px/700 uppercase ls 1px).
4. Components with colocated tests (TDD, 100% coverage):
   - `DotNav` — fixed right rail, 6 links (Home/About/Services/Gallery/
     Testimony/Contact), active dot taupe; tracks active section on click
     (scrollspy optional).
   - `Hero` — full-height bg photo + black overlay, logo box (camera icon +
     "Fstop" + "Photographer / San Francisco"), 62px white uppercase h1 "We
     Make Something Great", gray paragraph, outlined "Contact us →" (scrolls
     to #contact).
   - `About` — video thumb + circular play button (non-navigating), 16px
     gray-caps h2, 2 paragraphs, counter "120" + "Project complete", small
     photo pair, Noto Serif italic quote + "— Lucy Lee".
   - `Services` — h2 + intro, 3 icon cards (Movies & Advertising Videos /
     Clip & Music Videos / Short Film Productions), 3 circular progress bars
     (Creation 90%, Development 80%, Production 75%; taupe ring, % center),
     trailing paragraph + side photo.
   - `Projects` — h2 + intro, 12 tiles (3-up, 4 rows; category "Nature" +
     "Beautiful Work"; hover expand circle).
   - `Testimony` — subheading "Testimony" + h2, carousel of 5 dark cards
     (100px circular avatar overlapping top, 40px quote circle, Noto Serif
     italic quote, name, taupe role), dots/arrows to advance.
   - `Contact` — 4 dark info boxes (Address / Contact Number / Email /
     Website), form (Your Name, Your Email, Subject, Message, "Send Message"
     taupe pill; preventDefault + success message), 300px map placeholder.
   - `Footer` — centered copyright + Component Dock credit link + 3 inline-
     SVG social icons.
5. `App.tsx`: DotNav → Hero → About → Services → Projects → Testimony →
   Contact → Footer.
6. Images: `https://picsum.photos/seed/fstop-<n>/<w>/<h>` only (hero
   1920×1080 moody shoot, about thumbs 800×600 / 400×300, 12 project tiles
   800×600 photography subjects, avatars 200×200 portraits); no ColorLib
   assets.
7. Verify: `npm run verify:app fstop` (typecheck + lint + vitest 100% +
   build). PR: branch `feat/template-fstop`, conventional commits, merge
   immediately with `gh pr merge --squash --delete-branch`.
8. PR description must include: source (Snapshot), preview URL
   (`https://preview.colorlib.com/theme/snapshot/`), design tokens (dark
   `#191a1c` / `#9da1a5` / taupe `#9d8f8f` / card `#202224`, Noto Sans +
   Noto Serif, pill buttons, outlined hero CTA), renames, placeholder
   images, the FOUR dup-row note (499/1168/2359/2473 covered by one
   recreation).
