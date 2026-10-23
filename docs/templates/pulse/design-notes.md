# Pulse — Design notes (ColorLib "Saita", digital agency)

Prep research for `apps/pulse`. Reference read on 2026-10-23; tokens are
literals counted in the live stylesheet, not guesses.

## Reference read

| Item      | Value |
| --------- | ----- |
| Source    | ColorLib "Saita" — https://colorlib.com/wp/template/saita/ |
| Slug      | `saita` |
| Preview   | https://preview.colorlib.com/theme/saita/ — HTTP 200, 14,471 B, 2026-10-23 |
| Sheet     | `css/style.min.css?v=3.1.0` — 207,866 B |
| Title     | "Clear ideas. Considered design. — Saita" |
| Screenshot| https://colorlib.com/wp/wp-content/uploads/sites/2/saita-colorlib-template.jpg |

**Important:** the live demo has been re-skinned (v3.1.0 studio aesthetic —
"Clear ideas. Considered design.", nav Home/Work/Services/Process/Studio/
Insights/Contact, `.s-*` section classes). The screenshot and the shipped app
recreate the earlier teal digital-agency design ("We Are Digital Agency Helping
To Boost Your sales"). Do not "fix" the app toward the current demo without a
fresh decision — the screenshot is the design of record for this app.

## Tokens (live sheet, counted)

- Type: `Poppins, Arial, sans-serif` — 8 declarations.
- Brand teal `#0b7466` — 38 literals; `.btn-primary{background:#0b7466}`,
  `.btn-outline-primary{color:#0b7466}`.
- Hero `linear-gradient(135deg,#0b6f62,#1a5a73)`, height 800 px (600 px under
  `md`), plus a 550 px `rgba(255,255,255,.07)` circle bleeding off the
  top-right for depth.
- Hero caption panel `#0b5c54e6`, 20 px padding, 4 px radius; hero `h1`
  46 px / weight 500, white.
- Radii: **4 px** dominant (16 declarations), `50%` for avatars/icons, 2–3 px
  minor.
- Buttons: `9px 12px`, 13 px, weight 600, uppercase, letter-spaced.
- Neutrals: `#6c757d` body, `#212529` headings, `#f8f9fa` tints.

## Tokens as shipped (`apps/pulse/src/index.css`)

- Teal scale `--color-pulse-400 #1fc1a9` → `900 #03302a`.
- Blue accent `--color-accent-400 #5579fa` (hero gradient end, blue cards).
- Navy `--color-navy-700 #052c43` (counters), `800 #031d2c` (footer).
- Headings navy + bold; body `gray-600`/`gray-500`; tints `bg-gray-50`.
- Hero/CTA actions: white pill (`rounded-full`); cards `rounded-lg` (4 px).

## Structure, in order

1. **Navbar** — navy band, "Pulse." wordmark in teal, 7 anchors
   (Home, About, Work, Services, Pricing, Blog, Contact), mobile toggle with
   `aria-expanded`/`aria-controls`.
2. **Hero** — teal→blue gradient, one `h1`, paragraph, "START A PROJECT" white
   pill + "WATCH THE VIDEO" ghost with play icon.
3. **About** (`#about`) — heading "We have experience for your project",
   Strategy / Design / Development entries, bars Design 70% / Branding 85% /
   Marketing 75%.
4. **Counters** — navy band, 4 count-ups: 60 Projects, 9200 Happy Clients,
   5800 Cups of Coffee, 100 Expert Workers.
5. **Services** (`#services`) — 8 icon cards: Creative Design, Digital
   Marketing, Application Design, Web Development, Branding, Graphic Design,
   Email Marketing, Web Design.
6. **Portfolio** (`#work`) — 6 filter chips (All + 5 categories), 8 tiles with
   hover overlay + zoom action.
7. **Team** — `bg-gray-50`, "Meet Our Team", 4 circular portraits + socials.
8. **Pricing** (`#pricing`) — Starter $49 / Professional $99 (highlighted) /
   Enterprise $199, check-icon feature lists.
9. **Testimonials** — `bg-gray-50`, single-card carousel, 2 quotes, labelled
   prev/next.
10. **Blog** (`#blog`) — 3 post cards with date, blurb, read-more.
11. **CTA banner** — gradient, eyebrow "Prepare For Takeoff", heading
    "Looking for business opportunity?", "Get Started".
12. **Footer** (`#contact`) — navy, 4 columns (brand + socials, Recent Posts,
    Services, Contact), Component Dock credit line.

## Fidelity notes

- **Hero band is the identity.** Teal→blue diagonal gradient plus a soft
  decorative circle; the four-card band hugging the hero's lower edge (one
  white card, three blue `#5579fa` cards) is the signature element of the
  screenshot design. The shipped app keeps the gradient and the card rhythm;
  it does not reproduce the cut-out photo (placeholders only, no assets copied).
- **Two-tone section rhythm:** white → tint → white → navy → white … The navy
  counters band is the only dark interruption before the footer; the CTA
  banner repeats the hero gradient to close the page.
- **Type discipline:** Poppins throughout, bold navy headings, uppercase
  letter-spaced eyebrows/labels, muted `gray-500` blurbs.
- **Copy kind, not copy text:** headline + subtext + two CTAs; card title +
  blurb; post title + date + blurb + link. Text is paraphrased.
- **Placeholders:** `https://picsum.photos/seed/pulse-proj1..8/600/400`,
  `pulse-blog1..3/600/400`; icons `lucide-react`; font via Google Fonts link.
- **Known a11y gaps** (also listed in the spec): skill bars lack
  `role="progressbar"`, filter chips lack `aria-pressed`, counters ignore
  `prefers-reduced-motion`.
