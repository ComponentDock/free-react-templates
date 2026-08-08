# Shutter (ColorLib Elena Voss) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shutter`.

## Source mapping

- **ColorLib item:** "Elena Voss" (TEMPLATES.md — THREE copies, lines 139,
  2445, 2908; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/elena-voss/
- **Preview URL:** https://elenavoss-colorlib.pages.dev/
  (HTTP 200, ~69 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/elena-voss/` returns 404 — the ColorLib preview
  portal maps this slug to `elenavoss-colorlib.pages.dev/`. Do not redo this
  lookup.
- **Preview CSS:** `https://elenavoss-colorlib.pages.dev/_astro/Base.s_bAeOkz.css`
  (Tailwind v4 output; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`elenavoss-template-1771943801609.jpg`, 2400×1892; verified via vision)

High-end photographer portfolio. Hero: full-screen mountain landscape photo
(warm sunset light, peaks above clouds) with a dark gradient overlay bottom;
small uppercase serif wordmark near top; large bold serif headline centered
("Capturing Moments That Last Forever" per the live DOM); sans sub-line
"Fine art and documentary photography that tells your story with authenticity
and grace."; centered ghost CTA "VIEW PORTFOLIO" (transparent, thin white
border, uppercase, wide tracking). Nav: serif logo "Elena Voss" left; centered
links Portfolio · About · Services · Testimonials · Pricing · Blog · Gallery ·
Contact; rounded-outline "Book a Session" right. Below the fold: white stats
band with 4 columns — 500+ Photo Shoots, 10+ Years Experience, 50+ Awards Won,
99% Client Satisfaction. Gold/beige accent touches (underline/details), serif
display + sans body, generous whitespace, elegant editorial mood.

### Live DOM (primary reference — matches the screenshot)

Section order: fixed header (serif wordmark + centered nav Portfolio/About/
Services/Testimonials/Pricing/Blog/Gallery/Contact + "Book a Session" outline
pill + dark-mode toggle + hamburger; mobile panel) → hero
(`section.relative.min-h-screen.overflow-hidden`; bg image + dark gradient
overlay; H1 serif; sub; ghost "View Portfolio" → #portfolio) → stats band
(`border-y border-gray-200 bg-gray-50 py-16 lg:py-20`; 4 counters via
`data-counter="500+"/"10+"/"50+"/"99%"` spans) → portfolio
(`#portfolio bg-white py-20 lg:py-28`; H2 "Selected Work" + sub; filter tabs
All/Weddings/Portraits/Nature/Editorial; `masonry-grid` with
`masonry-item-tall` + standard items, 8 cards, `data-lightbox` on click,
hover zoom + overlay) → about (`#about bg-gray-50`; H2 "About Elena"; 2
paragraphs incl. Vogue/National Geographic/Harper's Bazaar; Awards &
Recognition list) → services (`#services bg-white`; H2 "Services & Packages";
3 cards — Portrait Session / Wedding Coverage / Commercial, each blurb +
serif price + 4-5 feature bullets + "Inquire More" link) → results
(`#results bg-white`; eyebrow pill "Editing"; H2 "The Edit Makes the Shot";
2 `data-before-after` sliders — `aspect-[4/3]`, clip layer `width:50%`,
draggable handle `cursor-ew-resize` left:50%) → testimonials
(`#testimonials bg-gray-50`; H2 "Kind Words"; carousel of 6 cards — quote
icon, serif italic quote, initials avatar circle, name + role; prev/next
buttons + dots) → faq (`#faq bg-white`; H2 "Frequently Asked Questions"; 5
accordion items, plus-icon chip rotates, max-height expand, aria-expanded) →
contact (`#contact bg-white`; H2 "Let's Create Together"; form Name/Email/
Session Type (select)/Preferred Date (date)/Message + "Send Inquiry"; "Call
Now" + "Book a Session" side buttons) → footer (dark; brand blurb, 3 social
SVGs, legal links, © 2026). Extras: cookie dialog (Decline/Accept All),
back-to-top, dark mode.

## Design tokens (from preview CSS)

- **Primary = warm stone scale** (`--color-primary-*`): 100 `#f5f5f4` ·
  200 `#e7e5e4` · 300 `#d6d3d1` · 400 `#a8a29e` · 500 `#78716c` · 600
  `#57534e` · 700 `#44403c` · 800 `#292524` · 900 `#1c1917`.
- **Accent = gold/amber** (`--color-accent-*`): 100 `#fef3c7` · 400
  `#fbbf24` · 500 `#f59e0b` (primary CTA bg) · 600 `#d97706` (hover).
- **Grays** (Tailwind): 50 `#f9fafb` · 100 `#f3f4f6` · 200 `#e5e7eb` ·
  300 `#d1d5db` · 400 `#9ca3af` · 500 `#6b7280` · 600 `#4b5563` ·
  700 `#374151` · 800 `#1f2937` · 900 `#111827` · 950 `#030712`.
- **Fonts:** Fraunces (serif display; 400–800) for headings/wordmark/quotes/
  prices/initials; DM Sans (400–700) for body/nav/buttons. One Google Fonts
  link in `index.html`.
- **Buttons:** `rounded-full`; primary `bg-accent-500 text-white
hover:bg-accent-600`; outline `border border-primary-900
hover:bg-primary-900 hover:text-white` (dark: `border-white
dark:hover:bg-white dark:hover:text-primary-900`); hero ghost `border
border-white/60 text-white uppercase tracking-widest hover:bg-white
hover:text-primary-900`. Text links `uppercase tracking-widest
hover:text-accent-600`.
- **Surfaces:** hero image + dark gradient; stats `bg-gray-50 border-y
border-gray-200`; body alternates `bg-white`/`bg-gray-50` (dark
  `bg-gray-950`/`bg-gray-900`); footer dark; cards `rounded-2xl border
border-gray-200 bg-white p-8` (dark `border-gray-800 bg-gray-900`);
  avatar circle `bg-primary-200 text-primary-800 font-serif` (dark
  `bg-primary-800 text-primary-200`); eyebrow pill `rounded-full
bg-primary-100 text-primary-700`.

## Implementation outline (section order 1:1)

1. **Navbar** — serif wordmark "Shutter" (lucide Camera icon) + 8 links
   (Portfolio/About/Services/Testimonials → section anchors; Pricing/Blog →
   `#`; Gallery → `#portfolio`; Contact → `#contact`) + outline "Book a
   Session" pill + dark toggle + mobile hamburger (`aria-expanded`).
2. **Hero** — full-bleed picsum image + gradient overlay; H1 serif; sub;
   ghost "View Portfolio" → `#portfolio`.
3. **Stats band** — 4 counters (500+, 10+, 50+, 99%) animated on scroll into
   view (IntersectionObserver + rAF; suffix from `data-counter`).
4. **Portfolio** — H2 "Selected Work" + sub; tabs All/Weddings/Portraits/
   Nature/Editorial; masonry grid (CSS columns or grid with row-span tall
   items); 8 cards with category tags; hover zoom + overlay; lightbox modal
   on click (or decorative if scope tight — note in PR).
5. **About** — H2 "About Elena"; bio paragraphs (Vogue / National Geographic
   / Harper's Bazaar); portrait image; Awards & Recognition list (Gold 2024,
   Fearless Photographer 2023, Nat Geo Featured, +1).
6. **Services** — H2 "Services & Packages" + sub; 3 cards (Portrait Session /
   Wedding Coverage / Commercial): blurb, serif price, bullets, "Inquire
   More" link (→ `#contact`).
7. **Results** — "Editing" eyebrow + H2 "The Edit Makes the Shot" + 2
   before/after sliders (pointer drag → clip width; keyboard accessible
   range or arrow keys; aria-labels "Before"/"After").
8. **Testimonials** — H2 "Kind Words" + sub; carousel (state-driven) of 6
   quotes; prev/next round buttons + dots; initials avatar circles.
9. **FAQ** — 5 accordion items; plus chip rotates 45° when open; max-height
   transition; `aria-expanded` + `aria-controls`.
10. **Contact** — H2 "Let's Create Together" + sub; form (Name, Email,
    Session Type select, Preferred Date date, Message) with zod validation +
    per-field errors; "Send Inquiry" submit (client-side only); side panel
    "Call Now" + "Book a Session".
11. **Footer** — serif brand + blurb; 3 social inline SVGs (Instagram/X/
    LinkedIn); Privacy Policy / Terms of Service / Style Guide; © 2026.
12. **Extras** — cookie consent banner (Decline / Accept All), back-to-top
    floating button, dark-mode toggle.

## Fidelity notes

- Serif (Fraunces) headings + uppercase wide-tracked sans labels are the
  signature look — keep both; don't swap to a geometric sans.
- Gold accent is SPARSE in the original (CTAs, quote icons, hover states) —
  resist over-using `accent-*`; stone neutrals carry the design.
- Portfolio masonry: use tall (2-row) and standard (1-row) items mixed, per
  the demo (`masonry-item-tall`).
- Before/after: two picsum images per slider (same seed, different crop is
  NOT possible — use two different seeds of the SAME subject class, e.g.
  both portraits; or same seed + CSS filter to fake retouching).
- Contact form: client-side only; no backend. Validation must be tested
  (blocked submit until valid, per-field errors).
- Dark mode: `dark:` variants throughout (the demo ships them); keep the
  toggle + persistence.
- Never use "Elena Voss" as the brand; brand is "Shutter".
- Placeholders: `picsum.photos/seed/shutter-<n>/<w>/<h>` — hero 1920×1080,
  portfolio 600×900 (tall) / 600×600 (standard), about 600×700, before/after
  800×600, testimonial avatars = initials circles (no images).
- Icons: lucide-react (Camera, Menu, X, Moon, Sun, Plus, ArrowUp, Phone,
  Mail, MapPin, ChevronLeft, ChevronRight, Quote). Brand social icons
  (Instagram/X/LinkedIn) are NOT in lucide-react — inline SVG (simple-icons
  paths) like existing apps.
- Stats counters, filter tabs, carousel, accordion, before/after drag,
  lightbox: all state-driven; test interactions per the spec scenarios.

## Commit + PR conventions

- Prep commit (this): `docs: prep Shutter (ColorLib Elena Voss) spec +
research`.
- Implementation branch: `feat/template-shutter`; PR title: `feat: Shutter —
photographer portfolio website template (ColorLib Elena Voss)`.
- PR body: source URL, preview URL (pages.dev — note the 404 on
  preview.colorlib.com), tokens, differences (rename, placeholders,
  single-page anchors), TEMPLATES.md three-copy note (lines 139 / 2445 /
  2908).
- After merge: surge URL `https://free-react-templates-shutter.surge.sh`,
  TEMPLATES.md `[x]` on ALL THREE copies, `npm run readme:status`.
