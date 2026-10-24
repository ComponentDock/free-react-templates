# Visage — Design Notes

- **Source slug:** `vcard2`
- **ColorLib name:** Vcard2 (personal vCard / CV template; demo persona "Smith.CV")
- **Listing:** https://colorlib.com/wp/template/vcard2/
- **Preview:** https://preview.colorlib.com/theme/vcard2/ — HTTP 200, 10,451 B,
  sha256 `1481ff1b35cacc2d…` (measured 2026-10-24); page title `About` (the demo
  sets a per-page title, so the home page's title is the tab label, not a brand)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/vcard2-free-template.jpg
  (1,200 × 946)
- **New name:** visage · **Category:** Personal vCard / CV
- **Spec:** `openspec/specs/template-visage/spec.md`
- **App:** `apps/visage/` (Header · Sidebar · AboutPanel · SkillsPanel ·
  ServicesPanel · ExperiencePanel · EducationPanel · PortfolioPanel ·
  TestimonialsPanel · ContactPanel · Footer)

Rewrite status: this brief replaced a **The Look** description on 2026-10-24 —
The Look is a separate ColorLib template (a photography/agency layout), not this
vCard. Docs-source drift caught it (`scripts/verify-docs-source.py`,
`DOCS-STALE` `brief=thelook`); the spec, the `TEMPLATES.md` row (`line 2576`) and
the shipped app all recreate `vcard2`. Values below re-measured from the live
reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/vcard2/` (index) | 10,451 | `1481ff1b35cacc2d…` |
| `theme/vcard2/styles/main_styles.css` | 12,580 | `9c0cb8c6b95a5fdf…` |
| `styles/responsive.css`, `styles/bootstrap-4.1.2/bootstrap.min.css`, `plugins/font-awesome-4.7.0`, `plugins/mCustomScrollbar` | supporting sheets | — |

The sheet opens with
`@import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,…,900')`
— nine weights, one family. The home page holds **25** anchors (8 tab links plus
inner links), **7** `<img>`, **1** inline `background-image`, and **no form**.
The design is a **multi-page** site — `index.html` (About), `skills.html`,
`services.html`, `experience.html`, `education.html`, `portfolio.html`,
`testimonials.html`, `contact.html` — one tabbed panel per page. Visage
recreates it as a **single-page SPA** with the same eight tabs.

## Design tokens (from `styles/main_styles.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand indigo | `#8583e1` (6) | active tab, links, buttons, progress arcs |
| Deep navy | `#100f3a` (10) | tab tiles, logo, "General Information" panel, headings |
| Paper | `#ffffff` (11) | page, content card |
| Body text | `#a5a5a5` (body 14px/400) · `#838393` (2, paragraphs) · `#7a798c` (4, meta) | `body{font-family:'Montserrat',…;color:#a5a5a5}` |
| Warm accent | `#ffa07f` (2) · `#ff6347` | small highlights (button hover / skill captions) |
| Neutrals | `#f5f0f0` · `#e1dada` | hairlines and field beds |
| Typeface | **Montserrat**, 300–900 | the sheet's only family, plus its italic weights |
| Scale | `h1` 48px · `h2` 36px | `h1{font-size:48px}`, `h2{font-size:36px}` |
| Radii | **none declared** | every tile, image and button is square-cornered |

Palette census, most-used first: `#ffffff` ×11, `#100f3a` ×10, `#8583e1` ×6,
`#7a798c` ×4, `#ffa07f` ×2. The design is **navy tiles + indigo active state on
white**, with warm accents used only on small details.

## Visual design (from the TEMPLATES.md screenshot)

A wide white masthead: `Smith.CV` wordmark (dot in indigo) on the left, then a
single row of **eight square navy tiles** — `About` (active, indigo), `Skills`,
`Services`, `Experience`, `Education`, `Portfolio`, `Testimonials`, `Contact` —
white labels, no radius, butted together, and an indigo `Available for freelance
work` pill with a download arrow at the far right. Below, a two-column body:
left sidebar with a portrait photo and a navy **General Information** panel
(name, location, date of birth rows, each with a line icon, plus a row of social
squares); right content area on white with a small indigo role kicker
(`HTML5 & CSS Developer`), an oversized navy name (`Jeremy Smith`), a
`Description` subheading with a paragraph, and two thin **circular progress
rings** (75% intuition, 83% creativity) with captions underneath. Screenshot
samples: `#f6f0f0` ground, `#64657d` navy/indigo mix, `#ffffff` content.

## Section order (as the reference renders)

1. **Header** — `.header`: logo, eight-tab `main_nav` (`About · Skills · Services
   · Experience · Education · Portfolio · Testimonials · Contact`), and the
   `Available for freelance work` button with a download glyph; mobile gets a
   hamburger menu.
2. **Sidebar** — `.general_info`: portrait, `.general_info_title` "General
   Information", six icon+text rows (name, location, date of birth, …), and a
   `.social_container` row.
3. **Content panel** — one per tab; the home page is **About**: role kicker,
   name `h1`, `Description` `h2`, paragraph(s), and two circular progress rings
   with captions.
4. **Other panels** (other pages in the source, tabs in the SPA): Skills (bars /
   rings), Services (icon cards), Experience & Education (timeline rows),
   Portfolio (image grid), Testimonials (quotes), Contact (details — the source
   panel is contact information, not a form: there is no `<form>` in the markup).
5. **Footer** — the reference has none per page; the app appends the Component
   Dock footer.

## Section-by-section fidelity notes

**Header.** The tab bar is the design's signature: eight adjacent rectangles of
equal height, navy `#100f3a`, **no radius**, active tab indigo `#8583e1` with
white text. Labels are small, regular weight, title-case. The freelance pill on
the right is indigo with a square download glyph in a white box.

**Sidebar.** Photo first (square, no border), then the navy panel: white
`General Information` heading, then rows of `[white line icon][white text]`,
separated by generous spacing, and a social row of small square icon tiles. The
panel scrolls independently in the source (`mCustomScrollbar`).

**Content (About).** Left-aligned block: tiny indigo uppercase-ish kicker, then
the name at 48px navy, then `Description` at 36px, then a muted paragraph. The
two progress rings are thin indigo arcs (~4px stroke) with the percentage in
navy above the caption. Nothing is carded — whitespace separates.

**Panel switching.** In the source each tab is a page load; in the recreation it
is `useState` — preserve the visual result (one panel at a time, tab
highlighting) and keep the URL-free behaviour, since the source has no router
state.

**Footer.** Absent in the reference; the app appends the Component Dock line.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.header_content` + `main_nav` | logo + 8 square tab tiles + freelance pill | `Header` (active tab state) |
| `.general_info` | photo + navy info panel + socials | `Sidebar` |
| About page markup | kicker, name, Description, progress rings | `AboutPanel` |
| Skills / Services / Experience / Education / Portfolio / Testimonials / Contact pages | one panel each | `*Panel` components |
| `styles/responsive.css` | mobile collapse | Tailwind breakpoints |
| — | no footer | `Footer` with Component Dock credit |

## Placeholder images / fonts

`https://picsum.photos/seed/visage-<n>/<w>/<h>` for the portrait and portfolio
tiles. **Montserrat** (300–900, italics included) from Google Fonts via
`<link>`, exactly the range the sheet imports. Icons from `lucide-react`; Font
Awesome 4.7 and the download PNG are not copied.

## App deltas (as shipped in `apps/visage/`)

- Tokens match the sheet: `--color-brand: #8583e1`, `--color-brand-dark:
  #100f3a`, body `#a5a5a5`, paragraphs `#838393`, plus `--color-salmon:
  #ffa07f` for the small highlight.
- The eight pages become one SPA with tab state; the URL never changes.
- Progress rings ship as SVG arcs with the same thin-stroke look; values are
  static (75% / 83% in the source, app-authored numbers in the same range).
- The Contact panel carries contact rows rather than a form, matching the
  source (the markup contains no form).
- Portrait and portfolio tiles are picsum placeholders.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/visage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/visage/public/CNAME` =
  `visage.free.componentdock.com` and the package `homepage` =
  `https://visage.free.componentdock.com`.
