# Zing — Design Notes

- **Source slug:** `tasteit`
- **ColorLib name:** Tasteit (demo brand "Taste.it — Family Restaurant Since 1958")
- **Listing:** https://colorlib.com/wp/template/tasteit/
- **Preview:** https://preview.colorlib.com/theme/tasteit/ — HTTP 200, 49,823 B,
  sha256 `b80e76d207c75f52…` (measured 2026-10-24); page title
  `Taste.it | Family Restaurant Since 1958`
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/tasteit-free-template.jpg
  (1,200 × 946)
- **New name:** zing · **Category:** Restaurant landing
- **Spec:** `openspec/specs/template-zing/spec.md`
- **App:** `apps/zing/` (Navbar · Hero · About · Menu · Ingredients ·
  Testimonials · Chefs · Blog · CtaBanner · Newsletter · Footer)

Rewrite status: this brief replaced a **Zeta** description on 2026-10-24 — Zeta is
a different ColorLib theme entirely (an app-landing page), not this restaurant.
Docs-source drift caught it (`scripts/verify-docs-source.py`, `DOCS-STALE`
`brief=zeta`); the spec, the `TEMPLATES.md` row (`line 2703`) and the shipped app
all recreate `tasteit`. Values below re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/tasteit/` (index) | 49,823 | `b80e76d207c75f52…` |
| `theme/tasteit/css/style.min.css?v=3.0.0` | 196,189 | `9c14287525b09f39…` |
| `vendor/swiper/14.3.0/swiper-bundle.min.css` (14,615 B), `vendor/fontawesome/7.3.1/…subset.css` (1,700 B) | supporting sheets | — |

**This demo is a 3.0.0 rebuild**: every asset carries `?v=3.0.0`, Bootstrap 5 is
inlined into `style.min.css`, and Roboto / Dancing Script are self-hosted. The
TEMPLATES.md screenshot is the pre-3.0 release of the same design — layout and
palette agree, so the screenshot stays usable as the visual reference. The page
holds **1** `<form>` (the booking card), **no** nav-form, a skip link, and
`background-image: image-set(...)` on the photo bands (`bg_1`, `bg_2`, `about`,
`bg_3`).

## Design tokens (from `css/style.min.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand red | `#cf1f28` (44) | links, active nav, `.btn-primary` fill, `.subheading-2`, footer submit, `.bg-primary` CTA band |
| A11y accent (3.0.0 patch) | `#e52b34` (3) | `:focus-visible` outline + active-nav underline — a focus accent, **not** the brand fill |
| Paper | `#fff` (108) · `#f8f9fa` (16, `bg-light` bands) | page and alternating sections |
| Ink | `#000` (68) · `#343a40` (18) · `#6c757d` (18) | headings, body, muted |
| Bootstrap link | `#007bff` (21) | default anchors not overridden by the theme |
| Danger | `#dc3545` (16) | form validation chrome |
| Footer | `#1a1a1a` ground, `#a3a3a3` copy, `padding: 6em 0 0` | `.ftco-footer` |
| Subheading (eyebrow) | 16px, weight **900**, uppercase, `letter-spacing: 5px`, `1px solid rgba(255,255,255,.5)` box on dark; `.subheading-2` 18px/700 `#cf1f28` with 85px flanking rules on light | `.subheading`, `.subheading-2` |
| Typeface | **Roboto** (10 declarations) body/UI + **Dancing Script** (cursive) for the hero's verb phrase | `--bs-font-sans-serif` resolves to Roboto |
| Radii | `50%` (15 — avatars, dots) · `2px` (6) · `4px` (5) | radii census |

Palette census, most-used first: `#fff` ×108, `#000` ×68, `#cf1f28` ×44,
`#007bff` ×21, `#6c757d` ×18, `#343a40` ×18, `#f8f9fa` ×16, `#dc3545` ×16.

## Visual design (from the TEMPLATES.md screenshot)

A slim **red contact strip** at the very top (phone + e-mail left, socials right),
then a transparent dark navbar with the `Taste.it` wordmark (the `.it` in red) and
uppercase tracked white links, `BOOK YOUR TABLE` last. The hero is a full-bleed
restaurant photograph (screenshot samples `#021922` teal-dark, `#5e2f2b` warm
brown) carrying a boxed uppercase eyebrow (`TASTE.IT RESTAURANT`), a huge
`h1` "Cooking Since" with the year in **Dancing Script red**, and body copy. Below
it a two-column band: a **red booking card** on the left (Your name, E-mail,
Phone, Date, Time, Guest → white `Book Your Table Now` button, square corners)
and a `Welcome to Taste.it` split with a chef portrait on the right. White and
`#f8f9fa` bands alternate downwards; a dark testimonial band, a `#cf1f28`
newsletter band and a near-black footer close the page.

## Section order (as the reference renders)

1. **Contact strip** — phone `tel:`, e-mail `mailto:`, opening hours
   ("Tue - Sun / 12:00 - 22:00, Fri - Sat to 23:00"), four social icons
   (Facebook, X, Instagram, Yelp).
2. **Navbar** — `.ftco_navbar` dark: `Taste.it` brand, `Home / About / Chef /
   Menu / Blog / Contact`, `Book a table` CTA.
3. **Hero** — `.hero-wrap` with `bg_1`: eyebrow `Taste.it Restaurant`,
   `h1` "Cooking Since" + script `1958`, paragraph, scroll cue.
4. **Booking + welcome** — `.ftco-wrap-about`: left `Book your Table` card
   (name, e-mail, phone, date, time, guest + submit), right the chef portrait and
   `Welcome to Taste.it` copy.
5. **Intro band** — `.ftco-intro` with `bg_2`: `Private Dinners & Happy Hours`.
6. **Menu** — `h2` "Our Menu" with six groups (`Brunch`, `Lunch`, `Dinner`,
   `Desserts`, `Wine Card`, `Drinks & Tea`), three dishes each with price.
7. **Testimonials** — `.testimony-section` dark photo: `Happy Guests`.
8. **Chefs** — `.bg-light`: `Our Master Chefs`, four portraits
   (Marco Ventura, Elena Brooks, Daniel Ortiz, Samuel Price).
9. **Ingredients** — `Perfect Ingredients` split with photo.
10. **Blog** — `.bg-light`: `Recent Stories`, three cards.
11. **Newsletter / CTA** — `.ftco-intro.bg-primary` (red): "We Make Delicious &
    Nutritious Food" + e-mail field.
12. **Footer** — `.ftco-footer` on `#1a1a1a`: brand + socials, hours, explore
    links, contact, copyright.

## Section-by-section fidelity notes

**Contact strip.** Red ground, white text, small type: phone and e-mail as links,
hours pushed right, then square-ish social glyphs. It is the page's top edge and
the only place the red reads as a full band besides the newsletter CTA.

**Navbar.** Transparent over the hero, dark on scroll; brand is `Taste.it` with
the second syllable red. Links are uppercase, tracked, 12–13px; the CTA is the
last item.

**Hero.** One photograph, no overlay beyond a light wash; eyebrow is a *boxed*
uppercase label (1px translucent border) — that box is the design's signature
besides the script numeral. `h1` is a large sans line, with `1958` rendered in
Dancing Script red on the same baseline.

**Booking card.** Solid `#cf1f28`, square corners, white inputs with no radius,
white label text, and a white submit button with red label. Six fields in two
columns, submit full-width at the bottom right. This is the page's only form —
in React it is controlled state, `preventDefault` on submit.

**Welcome split.** Chef portrait right, copy left with a `subheading-2` eyebrow
(red, tracked, with the 85px flanking rule) and a `h2` in `#343a40`.

**Intro band.** Full-bleed photo with a boxed white eyebrow and a large white
line — a pure statement band, no buttons.

**Menu.** Six groups laid out in columns; each dish is name + dotted leader +
price, with a muted description under the name. Group titles are the `h3`s
listed above.

**Testimonials.** Dark photo band, white boxed eyebrow, quote cards with avatar
circles, five slides (Swiper in the rebuild).

**Chefs.** Four cards on `bg-light`: square photo, name, role in red.

**Ingredients.** Split band: text + a list of ingredient chips on one side, photo
on the other.

**Blog.** Three cards on `bg-light`: photo, date, title, `read more`.

**Newsletter CTA.** Full-bleed `#cf1f28` band: centred white `h2` and an inline
e-mail + submit.

**Footer.** Near-black, four widget columns (brand + socials, hours, explore,
contact), muted copy, bottom bar with the copyright. Replace the source credit
with the Component Dock line.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| contact strip | phone/e-mail/hours/socials | strip inside `Navbar` |
| `.ftco_navbar` | dark nav + CTA | `Navbar` |
| `.hero-wrap` `bg_1` | photo hero, boxed eyebrow, script numeral | `Hero` |
| booking card + welcome split | 6-field form + chef portrait | `About` (form state) |
| `.ftco-intro` `bg_2` | statement band | `Ingredients` / intro band |
| menu groups | six tabbed groups × 3 dishes | `Menu` (tab state) |
| `.testimony-section` | dark quote slider | `Testimonials` |
| chefs grid | four portraits | `Chefs` |
| ingredients split | text + chips + photo | `Ingredients` |
| blog band | three cards | `Blog` |
| `.ftco-intro.bg-primary` | red newsletter band | `Newsletter` / `CtaBanner` |
| `.ftco-footer` | four widget columns | `Footer` (Component Dock credit) |

## Placeholder images / fonts

`https://picsum.photos/seed/zing-<n>/<w>/<h>` for the hero, chef portraits, menu
dishes, testimonial avatars, blog cards and the ingredients split. **Roboto** and
**Dancing Script** come from Google Fonts via `<link>`; the rebuild self-hosts the
same two families. Icons from `lucide-react`; the source's Font Awesome 7 subset
is not copied.

## App deltas (as shipped in `apps/zing/`)

- **Brand token differs:** the app themes on `--color-brand-red: #e52b34`, the
  rebuild's **focus** accent, rather than the sheet's dominant `#cf1f28` brand
  fill (44 declarations). When the app is next touched, re-point the token to
  `#cf1f28` and keep `#e52b34` for focus rings only.
- Tokens otherwise track the sheet: `--font-roboto`, `--font-dancing`,
  `--color-brand-dark: #333333`, `--color-brand-light: #f8f9fa`,
  `--color-muted-text: #777777`.
- The menu ships as six tabs × three dishes (`useState` active tab), matching the
  source's grouping.
- Hero copy keeps the "Cooking Since 1958" construction with the script numeral;
  the boxed eyebrow is preserved as a bordered label.
- All photography is picsum placeholders; no third-party slider library — slide
  state is React.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/zing/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zing/public/CNAME` = `zing.free.componentdock.com`
  and the package `homepage` = `https://zing.free.componentdock.com`.
