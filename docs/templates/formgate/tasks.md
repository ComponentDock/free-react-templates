# FormGate — Tasks

Source: **Contact Form 19** — https://colorlib.com/wp/template/contact-form-19/ (`TEMPLATES.md` row 1422)
Live preview (catalog-resolved): https://preview.colorlib.com/theme/bootstrap/contact-form-19/ — **HTTP 200**, 3,091 B, sha256 `8440ca0f977f…` (3 fetches, stable), `<title>Contact Form #9`
Slug-only path: https://preview.colorlib.com/theme/contact-form-19/ → **404** (the demo lives in the host's `theme/bootstrap/` family)
Sheet: `css/style.css?v=d060f86a` — 15,654 B, sha256 `706f4fbf35e9…`, 128 rules · Script: `js/snippet.js?v=36d04cc0` — 3,070 B, sha256 `1ec1044e2fea…`
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-19.jpg
Spec: `openspec/specs/template-formgate/spec.md`

New name: `formgate` · package `@free-react-templates/formgate` · deploy target `formgate.free.componentdock.com`

> **Prep correction (2026-10-23p).** This brief used to describe
> **Contact Form 09** — a dark near-black page with a tan/gold accent, three
> circular contact icons and a four-field form. That is a *different* ColorLib
> entry, not this one. The spec, and the demo the preview host resolves for this
> slug, are the light "Get Started" card below. Nothing in this file is copied
> from the old text except the parts re-verified against the live demo.

## Prep (done — do not redo)

- [x] Resolve the preview through the host catalog (`theme/bootstrap/contact-form-19/`, 200) — the slug-only path 404s
- [x] Read `css/style.css` and `js/snippet.js` from the live demo
- [x] Record the real palette: lime **base** `#ccda46` / `#b7c628` / `#c0d02a`, but the **visible CTA is red `#ef4339`** (later override wins)
- [x] Write the spec (`## Design reference` + Gherkin requirements) and this brief

## What the page is

A single white card on a light page — no hero, no imagery, no icons:

```
body
  div.content                        padding: 7rem 0
    div.cl-container
      div.cl-row.cl-align-items-stretch.cl-no-gutters.contact-wrap
        div.cl-col-md-12
          div.form.cl-h-100          background #fff, padding 40px
            h3                       "Get Started"  (2rem, 700, #000, mb 30px)
            form#contactForm
              row 1  col-md-6  label "Name *"  + input[text] placeholder "Your name"
                     col-md-6  label "Email *" + input[email] placeholder "Your email" required
              row 2  col-md-12 label "Budget"  + select (Choose…, < $1,000, $2,000 - $5,000,
                                              $5,000 - $15,000, $15,000 - $25,000, $25,000 >)
              row 3  col-md-12 label "Message *" + textarea rows=4 minlength=5
                                              placeholder "Write your message" required
              row 4  col-md-12 input[submit] value "Send Message"
                     + span.submitting (empty, filled by the script)
            div#form-message-warning   (empty error slot; the source's id attribute is malformed)
            div#form-message-success   "Your message was sent, thank you!"
  script js/snippet.js
```

## Design tokens

| token | value | role |
| --- | --- | --- |
| `--color-cta` | `#ef4339` | submit button fill (winning override), `0 15px 30px 0 rgba(239,67,57,.2)` shadow |
| `--color-cta-hover` | `#ef4339` darkening via shadow only — the sheet has no hover fill | `.cl-btn:hover { color: #fff }` |
| `--color-accent-base` | `#ccda46` / `#b7c628` / `#c0d02a` | the imported `.cl-btn-primary` base the override repaints — **not** what the page shows |
| `--color-surface` | `#ffffff` | card `.contact-wrap .form` |
| `--color-card-border` | `#efefef` | `1px solid` on `.contact-wrap` + `box-shadow: 0 0 20px rgba(0,0,0,.05)` |
| `--color-page` | `#ffffff` | `body` (the card is separated by its border + shadow, not a tint) |
| `--color-ink` | `#000000` | `h3`, labels on the card (`#b3b3b3` for the muted variant) |
| `--color-label` | `#b3b3b3`, 14px | `.contact-wrap .cl-col-form-label` |
| `--color-rule` | `#ccc` | the only input border: `border-bottom` |
| `--color-placeholder` | `#6c757d` | `::placeholder` |
| type | **Roboto** — `h3` 2rem/700; inputs 1rem; button 11px, `letter-spacing: .2rem`, uppercase | sheet `font-family` + `.cl-btn` |
| inputs | height **45px**, `border: none; border-bottom: 1px solid #ccc; border-radius: 0`, transparent background | `.cl-form-control`, `.cl-custom-select` |
| button shape | `border-radius: 30px` (`!important` on `.cl-btn`), full label "SEND MESSAGE" | `.cl-btn`, `.cl-btn.cl-btn-primary` |
| card | `padding: 40px`, `border: 1px solid #efefef`, `box-shadow: 0 0 20px rgba(0,0,0,.05)` | `.contact-wrap`, `.contact-wrap .form` |
| page rhythm | `padding: 7rem 0` on `.content` | `.content` |

## Behaviour (from `js/snippet.js`)

| behaviour | source |
| --- | --- |
| submit is intercepted | `e.preventDefault()` on `submit` (the browser has already blocked an invalid form thanks to `required` / `minlength`) |
| busy state | `.submitting` text set to `Submitting...` and shown while posting |
| success | on `OK` the form resets and `#form-message-success` ("Your message was sent, thank you!") flashes, then hides on a timer |
| failure | `#form-message-warning` shown |
| transport | `fetch('php/send-email.php', { method: 'POST', body: new FormData(form) })` |

React equivalent: `onSubmit` → `preventDefault()`, validate with the native constraints,
then set local state `status: 'submitting' | 'sent'` and render the same two messages.
**No network call** — the recreation has no mail handler; show the success copy.

## Picsum placeholders

**None.** The source is text, a select and a textarea on a white card.

## Implementation order (TDD)

1. [ ] Scaffold `apps/formgate` from the simplest existing app; package `@free-react-templates/formgate`, `public/CNAME` = `formgate.free.componentdock.com`, `"homepage"` matching; Roboto 400/500/700 via Google Fonts `<link>`
2. [ ] `@theme` tokens: `--color-cta: #ef4339`, `--color-surface: #fff`, `--color-card-border: #efefef`, `--color-ink: #000`, `--color-label: #b3b3b3`, `--color-rule: #ccc`, `--color-placeholder: #6c757d`
3. [ ] Tests first (Vitest + Testing Library, 100% coverage): heading "Get Started"; the four controls with their labels and placeholders; the six budget options; native `required`/`minlength`; submit shows "Your message was sent, thank you!" and does not navigate; Component Dock link
4. [ ] Shell: `.content` rhythm (`py-28`-equivalent at desktop), centred `.contact-wrap` card with `1px #efefef` border and the soft shadow
5. [ ] Card: 40px padding, `h3` 2rem bold, labels 14px `#b3b3b3`
6. [ ] Fields: Name + Email in a two-column row (stacked below `md`), Budget select and Message textarea full width; 45px height, underline-only border, no radius, transparent background
7. [ ] Submit: pill (`30px`), `#ef4339` fill, white 11px uppercase label with `letter-spacing: .2em`, shadow `0 15px 30px 0 rgba(239,67,57,.2)`
8. [ ] Messages: hidden success + warning slots; success copy exactly "Your message was sent, thank you!"
9. [ ] Footer: Component Dock credit linking https://www.componentdock.com/
10. [ ] `npm run verify:app -- formgate` until green; PR `feat/template-formgate` with source URL, preview URL, tokens, and the deltas (renamed FormGate, Roboto via Google Fonts, no mail transport)
11. [ ] Bookkeeping after merge: `TEMPLATES.md` row 1422 `[x]` + surge URL, `npm run readme:status`, push

## App delta (predates the correction)

The shipped `apps/formgate` renders a light card with a **coral `#e07060`** accent,
`#f5f5f5` page tint and Inter — i.e. neither this design's `#ef4339` CTA on a white
card nor the old brief's dark/tan page. Colour + type layer needs the implementer
follow-up above; the single-card page shape is right.
