# Template: Wicket (Product Promo Modal)

## Purpose

Wicket is a single-page product-promo modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 19" free
template (source: https://colorlib.com/wp/template/modal-19/), built under a
DIFFERENT name (**Wicket** — the nineteenth of the architectural-entrance
names for this UI series, after Portico (Modal 01), Vestibule (Modal 02),
Portal (Modal 03), Threshold (Modal 04), Doorway (Modal 05), Gateway (Modal
06), Lobby (Modal 07), Narthex (Modal 08), Mezzanine (Modal 09), Ingress
(Modal 10), Vestry (Modal 11), Postern (Modal 12), Rotunda (Modal 13),
Concourse (Modal 14), Promenade (Modal 15), Peristyle (Modal 16), Parvis
(Modal 17), and Propylaeum (Modal 18); a wicket is a small door/gate — and a
ticket window — the reveal that shows off a featured product, exactly what
this promo modal does — per the monorepo naming mandate: never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`div.container.content` with a centered heading "Modal #9" (see quirk note
below) and a Bootstrap **secondary-gray** `btn-secondary` "Launch modal"
button that opens a **large** Bootstrap modal (`modal-dialog modal-lg
modal-dialog-centered`, max-width 800px, SQUARE via `rounded-0`) whose
rounded light-gray body (`#efefef`, 7px radius, deep shadow) holds a
two-column flex row: a LEFT **product-photo panel** (`promo-img`, flex 0 0
50%, background-image `images/img_1.jpg`, white `$2000` price label
absolutely positioned top-left over the photo's dark corner) and a RIGHT
**content panel** (`content-text p-4 px-5`) with a top-right share icon
(`#ccc`), the product headline "Grand Prix 4000" (black, 22px, with a
centered 70px `#ccc` underline), a star rating row (4 filled gold
`#ffc107` stars + 1 gray `#777`), a gray description paragraph, and a
centered social-action row (heart `#dc3545` / chat `#007bff` / add
`#007bff` icons with gray counts "25 / 10 / 55"). The whole template is ONE
interactive surface — the launch button and the promo modal. Wicket
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Modal 19" is FORBIDDEN as the app
> name. **Wicket** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 19". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 818). Free
  product-promo modal component template. The `modal-19` slug appears exactly
  ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-19/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Modal 01–18) is
  `https://preview.colorlib.com/theme/bootstrap/modal-19/` (HTTP 200,
  18.3KB HTML). Stylesheets: `css/bootstrap.min.css` (178.1KB —
  Bootstrap 4.3.1), `css/style.css` (**3.7KB — this template's full custom
  token source**, unlike the earlier modals whose style.css bundled the
  whole 220KB+ Bootstrap; read it all, it is short), `fonts/icomoon/style.css`
  (79.8KB — Material-ish glyphs: `icon-share` \f064, `icon-star` \f005,
  `icon-heart` \f004, `icon-chat` \e0b7, `icon-add` \e145). Roboto (300)
  via cf-fonts @font-face blocks in the head (Poppins + Source Serif Pro
  also load — series-shared dead includes; the ACTIVE font is Roboto).
  `js/main.js` (59 bytes): ONLY a COMMENTED-OUT `$('#exampleModalCenter').modal()`
  — dead code, the modal opens purely via the launch button's
  `data-toggle="modal"`. Screenshot (`modal-19.jpg`, 1200×972,
  browser-verified 2026-08-16): the modal OPEN over a grayish backdrop —
  rounded 7px light-gray `#efefef` card split ~50/50: LEFT the dark
  bike-photo panel with white "$2000" top-left (the photo's own dark corner
  reads as a tag — the CSS gives the label NO background); RIGHT the
  content panel with a faint share glyph top-right, black "Grand Prix
  4000" with a thin centered underline, four gold stars + one gray, small
  gray description text, and the icon+count row (red heart 25, blue chat
  10, blue add 55). Launch page behind: white, centered dark-gray button.
- **QUIRK — heading says "Modal #9":** the live DOM's `<title>` AND the
  launch heading `<h3>` both read "Modal #9" (the series copy-pasted Modal
  09's markup into the 19 slot). The heading is only a demo label — replace
  with the new brand name ("Wicket") + demo label like the sibling
  recreations (Portico → "Portico" + "Launch Sign-In"). Do NOT replicate
  the "Modal #9" typo literally.
- **Visual design (screenshot + live DOM):** clean, minimal e-commerce
  promo. White launch page with a single gray pill-less button (4px
  radius) and ONE floating product dialog. Signature elements: square-ish
  LARGE (800px) card, half product photo with a price sticker, half
  product info with stars + social counts. Accent colors are the
  bootstrap-utility blues/reds (`#dc3545` heart, `#007bff` chat/add) and
  gold stars (`#ffc107`). Grays carry the layout: `#efefef` card, `#777`
  body text, `#b3b3b3` muted, `#ccc` dividers/share.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (`.content { height:
100vh }` — full viewport) → `div.row.align-items-center.content` →
     `div.col-12.text-center`:
     - `h3.mb-4` — "Modal #9" (quirk — use "Wicket").
     - `button.btn.btn-secondary.px-4.py-3` — "Launch modal"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; Bootstrap
       secondary **`#6c757d`** fill, white text, custom 4px radius).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button
     toggles; standard dark backdrop) → `div.modal-dialog.modal-lg.modal-dialog-centered`
     (Bootstrap **modal-lg max-width 800px**, flex-centered) →
     `div.modal-content.rounded-0` (Bootstrap `.rounded-0` =
     `border-radius: 0 !important` → SQUARE corners; the custom
     `.modal .modal-content { border-radius: 7px }` loses to the
     !important — the visible 7px rounding comes from the BODY, see next)
     → `div.modal-body.py-0` (radius **7px**, `overflow: hidden`,
     background **`#efefef`**, `box-shadow: 0 10px 50px -10px
rgba(0, 0, 0, 0.9)`, no horizontal padding — this light-gray rounded
     body IS the visible card):
     - `div.d-flex.main-content`:
       - **Left panel** `div.bg-image.promo-img.mr-3` (flex `0 0 50%`,
         margin-right 1rem; cover background-image `images/img_1.jpg` —
         1000×667 dark-wall fixed-gear bike photo):
         - `span.price` — "$2000" (absolute, top **20px** left **20px**,
           white; NO background in CSS — sits on the photo's dark corner).
       - **Right panel** `div.content-text.p-4.px-5.align-item-stretch`
         (padding 1.5rem top/bottom, **3rem left/right**) →
         `div.text-center`:
         - `a.share` — `span.icon-share` (position absolute, right 20px,
           color **`#ccc`**, z-index 4; hover → **`#000`**).
         - `h3.mb-3.line` — "Grand Prix 4000" (`.line` adds a centered
           70px × 1px **`#ccc`** pseudo-underline; color **`#000`**,
           font-size **22px**).
         - `p.mb-3` — star row: `span.icon-star.text-warning` ×4
           (Bootstrap warning **`#ffc107`** gold) + `span.icon-star` ×1
           (inherits the p color **`#777`** — gray).
         - `p.mb-5` — description: "All their equipment and instruments
           are alive. The sky was this is cloudless and of a deep dark
           blue. A shining crescent far beneath the flying vessel."
           (color **`#777`**, font-size **14px**, line-height 1.5).
         - `div.d-flex.text-center.social.w-50.mx-auto` (three equal-ish
           links with `mr-auto` / `mx-auto` / `ml-auto`): `a.like`
           (`span.icon-heart.mr-2.icon` — **`#dc3545`** red — + "25"),
           `a.message` (`span.icon-chat` — **`#007bff`** blue — + "10"),
           `a.add` (`span.icon-add` — **`#007bff`** blue — + "55"); the
           counts inherit `.social a { color: #b3b3b3 }` (14px).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **Design tokens:**
  - Brand/primary: none — the launch button and modal are Bootstrap-utility
    gray + utility accents. Accents: stars `#ffc107` (gold), heart
    `#dc3545` (red), chat/add `#007bff` (blue).
  - Button: launch = Bootstrap secondary **`#6c757d`** fill, WHITE text,
    custom `.btn { border-radius: 4px; border: none }` (NOT a pill), `px-4
py-3` (24px/16px), no shadow.
  - Card: modal-body bg **`#efefef`**, radius **7px**, overflow hidden,
    shadow **`0 10px 50px -10px rgba(0,0,0,0.9)`**; modal-content
    transparent bg, border none, SQUARE (`rounded-0` !important); dialog
    max-width **800px** (modal-lg).
  - Layout: left panel `flex: 0 0 50%` + `mr-3` (1rem gutter); right panel
    padding `p-4 px-5` (1.5rem / 3rem).
  - Text: launch heading default `#212529`; product h3 **`#000`** 22px
    (Bootstrap h3 base weight 500); description `#777` **14px** line-height
    1.5 (`.modal .modal-content .modal-body p` overrides the page-wide
    `p { color: #b3b3b3; font-weight: 300 }`); social counts `#b3b3b3`
    14px; share `#ccc` → hover `#000`; muted gray family for dividers/price
    shadow.
  - Price: white, absolute top-left 20px/20px over the photo, NO badge
    background (the screenshot's dark "tag" is the photo's own shadowed
    corner).
  - Font: **Roboto** (300/400/700-ish — the active family; body weight 300
    via `p`, headings inherit Bootstrap weights). Poppins + Source Serif
    Pro are loaded but UNUSED by this template's CSS (series-shared head
    includes) — do NOT load them in the recreation.
  - Rhythm: single centered column `col-12` inside a `height: 100vh`
    container (recreate with `min-h-screen` flex centering, no JS resize
    needed).
- **Recreation approach:** white full-viewport centered page (h3 "Wicket" +
  gray 4px-radius "Launch Promo" button); the modal is a state-driven
  overlay (open on button click, close on backdrop/Escape) — no Bootstrap
  dependency: `role="dialog"` `aria-modal="true"` semantics, dark backdrop
  fade, centered max-w-800px SQUARE-outside/7px-body card with the source's
  deep shadow on the `#efefef` body. Inside: a 50% cover-image panel
  (picsum seed `wicket-1`, e.g. 1000×667) with the absolute white "$2000"
  price label top-left; a right panel with a `Share2` icon top-right
  (`#ccc`), "Grand Prix 4000" h3 + centered underline, 4 gold (`Star`
  filled) + 1 gray `Star` , the gray description, and the centered
  social row — `Heart` red + 25, `MessageCircle` blue + 10, `PlusCircle`
  blue + 55 — and a visually-hidden a11y close button (the source has NO
  visible close ×; see a11y note). Plus the mandatory minimal Component
  Dock footer. Icons: lucide-react (`X`, `Share2`, `Star`, `Heart`,
  `MessageCircle`, `PlusCircle` — probe exports before use — see tasks.md).
  No other images (the source has only the one product photo).

## Requirements

### Requirement: Launch page

The system SHALL render a full-viewport centered page with a heading and a
launch button.

#### Scenario: Centered launch section

- **GIVEN** the Wicket app is rendered
- **WHEN** the page loads
- **THEN** a white full-viewport section SHALL show a centered heading
  ("Wicket" — the new brand name in place of the source's "Modal #9" quirk)
- **AND** it SHALL show a gray (`#6c757d`) button labeled "Launch Promo"
  with white text and a 4px border radius
- **AND** the launch button SHALL have generous padding (px-4 py-3
  proportions, ~24px horizontal / 16px vertical)

### Requirement: Modal dialog

The system SHALL open a centered modal dialog on launch and dismiss it on
close.

#### Scenario: Open modal

- **GIVEN** the Wicket app is rendered
- **WHEN** the user clicks the launch button
- **THEN** a dark backdrop SHALL fade in over the page
- **AND** a centered dialog (max-width ~800px) SHALL appear whose body is a
  light-gray (`#efefef`) rounded card (7px radius) with the shadow
  `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** the dialog SHALL have `role="dialog"` and `aria-modal="true"` and
  an accessible close control (`aria-label="Close"`)
- **AND** opacity SHALL animate in over ~0.3s (Bootstrap `.fade` behavior)

#### Scenario: Close modal

- **WHEN** the modal is open
- **THEN** clicking the backdrop or pressing Escape SHALL dismiss the modal
- **AND** focus SHALL be moved into the dialog on open and restored to the
  launch button on close

### Requirement: Product promo content

The system SHALL render the two-panel promo content inside the dialog.

#### Scenario: Left photo panel

- **GIVEN** the modal is open
- **THEN** the left half SHALL show a cover-cropped product photo
  (placeholder, e.g. `https://picsum.photos/seed/wicket-1/1000/667`)
- **AND** a white "$2000" price label SHALL be absolutely positioned at the
  top-left (20px/20px) over the photo, with NO badge background (per the
  source CSS)

#### Scenario: Right content panel

- **WHEN** the promo content displays
- **THEN** it SHALL show a share icon (`Share2`, `#ccc`) in the top-right
  corner of the content panel (hover → `#000`)
- **AND** it SHALL show the product heading "Grand Prix 4000" in black
  (22px) with a centered 70px × 1px `#ccc` underline below it
- **AND** it SHALL show a star rating of 5 stars: 4 in gold `#ffc107` and 1
  gray `#777`
- **AND** it SHALL show the gray (`#777`, 14px) description paragraph

#### Scenario: Social action row

- **WHEN** the promo content displays
- **THEN** a centered row SHALL show a red (`#dc3545`) heart icon with "25"
- **AND** it SHALL show a blue (`#007bff`) chat icon with "10"
- **AND** it SHALL show a blue (`#007bff`) add/plus icon with "55"
- **AND** the counts SHALL be muted gray (`#b3b3b3`) at 14px

### Requirement: Form/interaction behavior

The system SHALL keep the modal's interactions client-side only.

#### Scenario: Social links are inert

- **GIVEN** the modal is open
- **WHEN** the user clicks any social icon or the share icon
- **THEN** the page SHALL NOT navigate (links are decorative; `href="#"`
  with preventDefault or buttons)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Wicket app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Wicket app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the launch section in the main landmark and
  the Component Dock footer in the contentinfo landmark
- **AND** the document title SHALL be "Wicket — Product Promo Modal"

## Verification checklist

- [ ] `openspec/specs/template-wicket/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/wicket/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Modal 19 preview DOM 1:1 (full-viewport
      centered launch section → gray 4px-radius launch button → centered
      max-w-800px dialog: LEFT 50% product photo + "$2000" price top-left /
      RIGHT content panel: share top-right, "Grand Prix 4000" + underline,
      4 gold + 1 gray stars, gray description, heart/chat/add social row) →
      minimal Component Dock footer.
- [ ] Tokens used in the app: launch button `#6c757d` (white text, 4px
      radius), card body `#efefef` (7px radius, shadow `0 10px 50px -10px
    rgba(0,0,0,0.9)`), gold stars `#ffc107`, heart `#dc3545`, chat/add
      `#007bff`, counts `#b3b3b3`, description `#777` (14px), share `#ccc`,
      h3 `#000` (22px); Roboto via Google Fonts `<link>` (NO Poppins/Source
      Serif Pro — dead includes in the source).
- [ ] No ColorLib references in `apps/wicket` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] One placeholder product photo (`picsum.photos/seed/wicket-1/1000/667`);
      price label = plain white text, no badge background.
- [ ] Source quirk honored: the source heading "Modal #9" is NOT copied
      verbatim — the new brand name is used (documented deviation).
- [ ] lucide icons probed (`X`, `Share2`, `Star`, `Heart`,
      `MessageCircle`, `PlusCircle` exist in current lucide-react) before
      use.
- [ ] Implementer gate: `scripts/verify-app.sh wicket` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
