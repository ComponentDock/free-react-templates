# Grinwell (ColorLib Dentures) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-grinwell`. Recreation name: **Grinwell** (NEW name —
> the ColorLib source keeps its name "Dentures").

## Source mapping

- **ColorLib item:** "Dentures" (TEMPLATES.md line 1513; section
  "## Dental (8)" at line 1512). The
  `wp/template/dentures/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/dentures/
- **Preview URL — REACHABLE (verified by direct fetch):**
  **`https://preview.colorlib.com/theme/dentures/`**
  (HTTP 200, 538 lines of HTML).
- **Preview CSS:** `css/style.css` (618 lines) + Bootstrap 4, AOS,
  Owl Carousel, Fancybox, Magnific Popup, jQuery UI, Stellar.js parallax.
  Fonts: Raleway 300/400/600 via `@font-face` (Cloudflare Fonts CDN).
  Icons: flaticon font + icomoon icon font.

## Reference research (done — do not redo)

### Screenshot (dentures-free-template.jpg, 1200×946 AVIF → converted to JPEG)

Visual analysis of the screenshot:
- **Hero:** Full-width background image (dental clinic photo) with a
  teal/cyan color overlay (#12cad6 at ~60% opacity). Centered white text:
  "Dental Clinic for Everyone" as the main heading, subtitle text below,
  and a circular video play button above the heading. Two buttons below
  the subtitle: "Check Out Our Services" (white fill, teal text) and
  "About Us" (white outline border).
- **Features:** White background, 3-column × 2-row grid of 6 service
  cards. Each card has a circular icon badge (teal-tinted) on the left
  and title + description text on the right. Cards have subtle rounded
  corners and light borders.
- **Free Quote:** Split layout — left half has a teal (#12cad6) form card
  with white text, offset slightly from center. Right half has a dental
  clinic image.
- **Overall aesthetic:** Clean, professional, medical/dental clinic feel.
  Teal (#12cad6) is the dominant brand color throughout. Light backgrounds
  with dark text. Square buttons (no border-radius). Raleway font family.

### Design tokens (live stylesheet + rendered page, verified by direct fetch)

| Token       | Value                                  | Use                                                                 |
| ----------- | -------------------------------------- | ------------------------------------------------------------------- |
| Brand       | `#12cad6` (teal/cyan)                 | `.btn.btn-primary`, `.free-quote .form-wrap` bg, accent color       |
| Body font   | Raleway 300/400/600                    | Google Fonts via Cloudflare CDN `@font-face`                        |
| Body text   | `#4d4d4d`                             | `body` color                                                        |
| Button      | `border-radius: 0` (square corners)   | `.btn { border-radius: 0; }` — both fill and outline variants       |
| White btn   | `#fff` bg, `#12cad6` color            | `.btn.btn-white` — hero primary CTA                                 |
| Outline-wht | transparent, `#fff` border+color       | `.btn.btn-outline-white` — hero secondary CTA                       |
| Hero overlay| `rgba(0, 0, 0, 0.6)`                  | `.site-blocks-cover.overlay:before`                                 |
| Dark bg     | `#333333`                             | `.site-section` (optional), `.site-footer`                          |
| Muted text  | `#737373` / `#999999`                 | Footer body text, links, copyright                                  |
| Card border | `#efefef`                             | `.team` card border                                                 |
| Team photo  | 90px, `border-radius: 50%`            | `.team img`                                                         |
| Client photo| Circular, top-right aligned            | `.client .name-photo img`                                           |
| Form card   | `#12cad6` bg, white text               | `.free-quote .form-wrap`, padding 40px, offset right -30px          |
| Feature icon| Circular teal badge                    | `.site-block-feature .wrap-icon`                                    |
| Dark mode   | None (light-only template)            | —                                                                   |

### Section structure (page order from HTML source)

1. **Navbar** — sticky dark bg, logo "Grinwell", nav: Home (dropdown with sub-menus), About, Services, Testimonials, Contact
2. **Hero** (`site-blocks-cover overlay`) — full-width bg image, dark overlay, parallax, centered: play button (vimeo link), h1, subtitle, 2 CTAs
3. **Features Grid** (`site-block-1`) — 3×2 grid, 6 service cards: icon + h3 + description (Periodontology, Tooth Whitening, Preventative Care, Stethoscope, First Aid Kit, Tooth Brace)
4. **Free Quote** (`free-quote split`) — left: teal form card (name, email, message, submit); right: image
5. **Testimonials** (`site-section`) — 4 client cards: photo + name + "Customer" + quote, in a row
6. **Why Choose Us** (`half split`) — left: heading + 3 feature items (icon + title + description: Fast Support, Happy Customers, 24/7 Support); right: image with stats
7. **Team** (`site-section`) — 3 team member cards: circular photo + name + role + social icons + bio
8. **Footer** (`site-footer`) — dark #333 bg, 3 columns: Navigation links, Recent News (thumbnails + dates), Subscribe Newsletter + social icons; Component Dock attribution

### Icon mapping (lucide-react — replace flaticon + icomoon)

| Source glyph                     | Recreation                          |
| -------------------------------- | ----------------------------------- |
| `flaticon-tooth`                 | lucide `Tooth`                      |
| `flaticon-tooth-whitening`       | lucide `Sparkles`                   |
| `flaticon-tooth-pliers`          | lucide `Wrench` or `Stethoscope`    |
| `flaticon-stethoscope`           | lucide `Stethoscope`                |
| `flaticon-first-aid-kit`         | lucide `FirstAid` or `HeartPulse`   |
| `flaticon-brackets`              | lucide `Braces` or `Link`           |
| `icon-play` (hero video button)  | lucide `Play`                       |
| `icon-paper-plane` (Why Choose)  | lucide `Send`                       |
| `icon-cog` (Why Choose)          | lucide `Settings`                   |
| `icon-check` (Why Choose)        | lucide `Check`                      |
| `icon-facebook` / `twitter` etc. | lucide `Facebook` / `Twitter` etc.  |
| `icon-menu` (mobile toggle)      | lucide `Menu`                       |
| `icon-close2` (mobile close)     | lucide `X`                          |

### Picsum placeholder plan

| Slot              | URL                                          | Dimensions |
| ----------------- | -------------------------------------------- | ---------- |
| Hero bg           | `https://picsum.photos/seed/grinwell-hero/1920/1080` | 1920×1080  |
| Free Quote image  | `https://picsum.photos/seed/grinwell-quote/800/600`  | 800×600    |
| Why Choose image  | `https://picsum.photos/seed/grinwell-why/800/600`    | 800×600    |
| Team member 1     | `https://picsum.photos/seed/grinwell-t1/200/200`     | 200×200    |
| Team member 2     | `https://picsum.photos/seed/grinwell-t2/200/200`     | 200×200    |
| Team member 3     | `https://picsum.photos/seed/grinwell-t3/200/200`     | 200×200    |
| Client avatar 1   | `https://picsum.photos/seed/grinwell-c1/100/100`     | 100×100    |
| Client avatar 2   | `https://picsum.photos/seed/grinwell-c2/100/100`     | 100×100    |
| Client avatar 3   | `https://picsum.photos/seed/grinwell-c3/100/100`     | 100×100    |
| Client avatar 4   | `https://picsum.photos/seed/grinwell-c4/100/100`     | 100×100    |
| News thumbnail 1  | `https://picsum.photos/seed/grinwell-n1/100/100`     | 100×100    |
| News thumbnail 2  | `https://picsum.photos/seed/grinwell-n2/100/100`     | 100×100    |
| News thumbnail 3  | `https://picsum.photos/seed/grinwell-n3/100/100`     | 100×100    |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/grinwell` from the simplest existing app
       (`cp -r apps/<simplest> apps/grinwell`), rename package to
       `@free-react-templates/grinwell`, add Raleway 300/400/600
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `grinwell.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (sticky, logo, nav links with
       dropdown, mobile toggle), Hero (heading, subtitle, play button,
       2 CTAs, parallax bg), Features (6 cards in 3×2 grid, icons,
       titles, descriptions), FreeQuote (split layout, form fields,
       teal bg card, submit button), Testimonials (4 client cards,
       photos, names, roles, quotes), WhyChooseUs (heading, 3 feature
       items, split layout), Team (3 cards, circular photos, social
       links, bios), Footer (3 columns, nav links, news, newsletter,
       social icons, Component Dock link), App (landmarks, document
       title "Grinwell — Dental Clinic").
3. [ ] Navbar component: sticky dark bg, logo "Grinwell", nav links
       (Home with dropdown submenu, About, Services, Testimonials,
       Contact), mobile hamburger toggle with slide-in menu. Use lucide
       icons (Menu, X, ChevronDown for dropdown).
4. [ ] Hero component: full-width bg image with `bg-cover bg-center`,
       dark overlay (`bg-black/60`), parallax via `bg-fixed`, centered
       content: Play circle button (lucide Play in white circle), h1
       "Dental Clinic for Everyone", subtitle paragraph, two CTA
       buttons (white fill + white outline, square corners).
5. [ ] Features grid component: 3-column responsive grid, 6 cards each
       with circular icon badge (lucide icon in teal-tinted bg), title,
       and description. Light background, subtle card borders.
6. [ ] FreeQuote component: split layout (flex, 50/50), left: form card
       with `#12cad6` bg, white text, name/email/message inputs (white
       bg, borderless), "Get a quote now" submit button (white outline);
       right: placeholder image. Form card offset right by -30px.
7. [ ] Testimonials component: 4-column row of client cards, each with
       circular photo (top-right), name, "Customer" role, quote text.
8. [ ] WhyChooseUs component: split layout, left: "Why Choose Us"
       heading, description, 3 feature items (icon + title + description:
       Send/Fast Support, Settings/Happy Customers, Check/24/7 Support);
       right: placeholder image.
9. [ ] Team component: 3-column grid, circular 90px photos, name, role,
       social icons (Facebook, Twitter, Instagram, LinkedIn), bio text.
       Card with `#efefef` border.
10. [ ] Footer component: dark `#333` bg, 3 columns — Navigation (links
        in 2 sub-columns), Recent News (3 items with thumbnail + date +
        title), Subscribe Newsletter (email input + Send button) + social
        icons. Component Dock attribution link at bottom.
11. [ ] Run `npm run verify:app -- grinwell` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-grinwell` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (teal #12cad6,
        Raleway 300/400/600, square buttons, dark #333 footer), and
        what differs (renamed "Grinwell", Raleway via Google Fonts,
        lucide icons replacing flaticon/icomoon, picsum placeholders,
        Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1513 `[x]` +
        surge URL (`https://grinwell.free.componentdock.com`),
        `npm run readme:status`, push.
