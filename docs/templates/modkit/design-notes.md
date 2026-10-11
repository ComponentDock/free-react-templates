# Modkit — design notes

Recreation of ColorLib **"Next Ui Kit"** (free Bootstrap 4 UI kit on a
purple/indigo design — hero + 17 component showcase bands). Source:
https://colorlib.com/wp/template/next-ui-kit/ · Preview analyzed:
https://preview.colorlib.com/theme/next/ (HTTP 200, 67,775 bytes HTML +
17,474 bytes `css/style.css`; 2026-10-11; saved to
`/tmp/next-preview.html`, `/tmp/next-style.css`). NOTE the theme slug is
**`next`** — the product-slug path `theme/next-ui-kit/` 404s (same
short-slug pattern as Buildex → `theme/buildex/`). Screenshot reviewed:
`next-free-template.jpg` (foggy mountain hero under an indigo gradient,
bold white "Next UI Kit", teal "SEE HERE" button, then a white "Alerts"
band with an indigo left-accent-bar heading and a light-gray alert demo
panel). The demo brand "Next"/"Next UI Kit" is NEVER reused in app files
— hence the new name **modkit**. The preview is a classic Colorlib
build: compiled Bootstrap 4 + icomoon + font-awesome 4.3 + nouislider +
datetimepicker + jQuery.

## Structure order (1:1 with preview DOM)

1. Hero — `.site-section.bg-image.gradient-1`: 80vh cover photo
   (`images/slider_2.jpg`, foggy mountain/forest) under a `.8`-opacity
   `linear-gradient(315deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)`
   overlay. Centered: BOLD white h1 "Next UI Kit" (→ "Modkit UI Kit."),
   white lorem subtitle (2 lines), teal `#12d0da` "See Here" button
   (small rounded, px-4 py-3, uppercase) → `#start`. NOTE: there is NO
   site navbar — the page starts at the hero.
2. Alerts — band header (h2 "Alerts" + lead "Provide contextual feedback
   messages for typical user actions..."). Demo rows: (a) eight solid
   contextual alerts `alert rounded border-0 py-3` — primary `#5753C9`,
   secondary `#6c757d`, success `#00ad6c`, danger `#ef3536`, warning
   `#ffb800`, info `#12d0da`, light, dark — white text, "A simple
   primary alert—check it out!" kind; (b) "With Icon + Shadow" — info
   alert, flex row, lucide icon + "Info:" prefix; (c) "Dismissing" —
   shadowed primary + secondary with white × close (React state). The
   screenshot wraps the alerts in a light-gray demo panel (`.bd-example`
   docs style) — keep that panel treatment.
3. Badge — "Contextual Variations" (Primary…Dark) + "Pill badges".
   Style: uppercase, 10px, weight 600, 4px/8px; tinted fills — color at
   0.1 alpha bg + colored text (warning/info 0.5 alpha bg).
4. Buttons — groups: "Example" (plain "Button" + "With Icon"), "Example"
   (Default/Secondary/Info/Danger/Warning/Success solid), "Button
   outline" (six outlines), "Button Pill" (six OUTLINED pills,
   `.btn-pill` radius 50px, px-4), "Sizes" (btn-sm 12px / btn-md 14px /
   btn-lg 16px, lg pad .875rem/1.2rem). All: uppercase 0.9rem, per-color
   soft shadow `0 5px 15px -5px rgba(<color>, .8)` → 0.1 alpha on hover.
5. Carousel — 3 image slides (`images/slider_1..3.jpg`) with bottom
   captions: white h5 "First/Second/Third slide label" + one lorem line
   ("Nulla vitae elit libero..." kind); 3 indicator dots + prev/next
   arrows. React state only.
6. Dropdowns — four "Dropdown button" toggles (color variants) → Action /
   Another action / Something else here. Menu: borderless, .8rem, `0 0
   30px rgba(0,0,0,0.2)` shadow.
7. Forms — "Input": Name ("Full name"), Email, "Datetime Picker" (→
   native `<input type="datetime-local">`; the source uses the
   datetimepicker plugin). "Input Shadow": Username / Email / Password
   (`.form-control-shadow`: white bg + `0 1px 2px 0 rgba(0,0,0,0.08)`).
   Inputs .9rem; focus `border-color: #5753C9`, no ring. (`.form-pill`
   radius 30px exists in CSS — used by the navbar search.)
8. Modal — "Launch Demo Modal" button → centered dialog: "Modal title" +
   × close + two "Mist enveloped the ship three hours out from port..."
   lorem paragraphs (paraphrasable). Content: `rounded-0`, borderless,
   `0 10px 50px -10px rgba(0,0,0,0.3)`, header no bottom border, 30px
   x-padding. × / backdrop / Escape close; focus managed.
9. Navbar — six stacked `navbar-dark px-4 mb-4` demo bars with tinted
   backgrounds + per-color `0 2px 5px -2px rgba(<color>, .5)` shadows:
   bg-primary, bg-success, bg-info, bg-danger, bg-secondary,
   bg-transparent. Each: "Brand" + links (Home / Features / Pricing;
   variants with "Link", "Disabled", "Dropdown link" → Action / Another
   action / Something else here). Items: uppercase .8rem/400 white,
   15px/10px padding, hover/active `rgba(255,255,255,0.2)`. The
   transparent bar carries the dark-navbar search treatment: transparent
   input, white bottom border + white placeholder, 40px round white
   search button (lucide Search).
10. Pagination — three `custom-pagination` rows (Prev / 1 / 2 / 3 / Next
    style): pagination-primary `#5753C9`, pagination-secondary `#6c757d`,
    pagination-info `#12d0da`. Active page-link: filled variant color,
    white text, `0 2px 5px 0 rgba(<color>, 0.2)` shadow. Clickable.
11. Typography — labeled samples: Heading 1–6, each rendering "Almost
    before we knew it, we had left the ground." (h1–h6 weight 300,
    `#394a6d`, lh 1.5); "Paragraph" + "Quote"; colored text rows: Muted /
    Primary / Info / Success / Warning / Danger text.
12. Images — four centered columns over ONE shared image
    (`images/img_1.jpg`): "Rounded Raised Image" (rounded + `img-raised`
    shadow), "Rounded Image", "Circle Image", "Thumbnail Image"
    (bordered). All `img-fluid w-75`.
13. Popovers — "Popover on top / on right / on bottom / on left" buttons.
    Card: borderless, 10px pad, `0 5px 30px -5px rgba(0,0,0,0.4)`,
    header transparent weight 400 `#6c757d`, NO arrow.
14. Tooltips — "Tooltip on top / on right / on bottom / on left" buttons.
    `.tooltip-inner`: white bg, black text, `0 2px 10px 0
    rgba(0,0,0,0.5)`, max-width 200px, 4px/10px pad.
15. Checkboxes, Radios, Toggle Buttons — three col-md-4 groups:
    "Checkboxes" (Unchecked / Checked / Unchecked (Disabled) / Checked
    (Disabled)), "Radioboxes" (Radio is on / Radio is off + disabled
    pair), "Toggle Switch" ("Toggle this switch element" / "Checked
    switch element"). Bootstrap `custom-control` style; checked accent =
    kit indigo `#5753C9`.
16. Sliders — nouislider demos in the source → recreation uses native
    `<input type="range">` with kit-accent track/thumb or static styled
    tracks. NEVER copy nouislider.
17. Tabs — two `bg-light p-4` panels (col-md-6), each a white
    `tab-card p-4` with a horizontal pill nav (Profile / Messages /
    Settings; one `tab-secondary` variant = gray `#6c757d` accent) +
    pane lorem "Mist enveloped the ship..." copy. React state,
    aria-selected.
18. Progress Bar — left col: four `.progress-20102` bars (7px tall,
    `rounded`, 30px gap): 25% `bg-success`, 50% `bg-info`, 75%
    `bg-warning`, 100% `bg-danger`. Right col: labeled skill rows —
    pill badge label + right-aligned `<strong>` percentage over a bar:
    "WordPress" 94% (primary), "HTML5" 85% (warning), and a third row
    whose source label is the demo brand ("Colorlib") — paraphrase it
    (e.g. "UI Design").
19. Footer — `.site-section.bg-light` (`#f8f9fa`), centered single line:
    "Copyright © <year> All rights reserved | This template is made with
    ♥ by Colorlib" → recreation: "Made with <Heart> by Component Dock"
    linking `https://www.componentdock.com/` (REQUIRED).

## Section rhythm & shared pattern

Every showcase band is `.site-section` (padding `7rem 0`) with a header
row `row mb-4 > col-md-7`: h2.heading-21921 + `p.lead`. The heading
style is the kit's signature: `padding-left: 10px`, `line-height: 1`, a
2px full-height `#5753C9` left bar via `:before`, margin-bottom 1.5rem.
Implement as one shared header-row component within `apps/modkit` (or
reuse `packages/ui` if a fitting component exists).

## Fidelity traps

- Hero CTA is TEAL `#12d0da` (btn-info), NOT the indigo brand color —
  the screenshot shows the cyan "SEE HERE" button against purple.
- The hero h1 is BOLD white; every other heading is weight 300
  `#394a6d` — don't flatten the difference.
- Alerts render with SMALL rounded corners in practice (markup `rounded`
  utility overrides `.alert { border-radius: 0 }`), borderless, solid
  fills, white text.
- Buttons are UPPERCASE 0.9rem with colored soft shadows that fade on
  hover — not flat Bootstrap defaults.
- "Button Pill" variants are OUTLINED pills (the source's pill row is
  `btn-pill px-4 btn-outline-*`), while the solid rows are square-ish.
- No site navbar exists on this template — the "Navbar" section is a
  demo band of six stacked bars.
- Third progress-bar label in the source is the demo brand "Colorlib" —
  must be paraphrased in app code.
- Assets are never copied: picsum seeds `modkit-hero`,
  `modkit-slide-1..3`, `modkit-img-1`; icons from `lucide-react`; Work
  Sans via Google Fonts `<link>`.
