# Sanctus (ColorLib Byfaith) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sanctus`.

## Design notes (replication findings)

- **Original:** ColorLib "Byfaith" — free responsive Bootstrap 5 church
  website template (source: https://colorlib.com/wp/template/byfaith/).
  TEMPLATES.md has TWO copies (line 554 — Bootstrap 5 category, line 1289 —
  Church category; mark BOTH `[x]` when done). Both rows use the correct
  screenshot `byfaith-free-template.jpg`.
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/byfaith/`
  returns HTTP 200 (curl, 2026-08-13, 23.5 KB HTML). Title: "ByFaith —
  Website by Colorlib". This is a FULL-fidelity reference: section order,
  copy, buttons all taken from the live DOM. Token source: `css/style.css`
  (56.9 KB) + `css/bootstrap.min.css` (custom-compiled, carries
  `--bs-primary:#f79918` and `--bs-secondary:#10495c`).
- **Visual design (browser vision confirmed):** warm, earthy church
  aesthetic. Amber `#f79918` is the single accent (subheadings, pill
  buttons, service icons, nav dropdown hover/active, testimonial nav pills,
  footer hovers). Deep teal `#10495c` fills the Why Us + Join CTA sections.
  White body, warm beige `#ede1d0` footer. Screenshot shows the hero as a
  golden mountain/sunrise photo with a cutout preacher photo (yellow jacket,
  raised hand) on the right — the live DOM puts an `about_1.jpg` rounded
  image with a circular play icon there instead; follow the DOM. Demo brands
  itself "ByFaith" → recreation: **Sanctus**.

## Design tokens (from the live stylesheets)

| Token           | Value                                                                                                                                                                                                                                                            | Where                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand amber     | `#f79918` (`--bs-primary`; hover shades `#f8a83b` / `#f9ad46` / `#f8a431`)                                                                                                                                                                                       | `btn-primary` bg/border, subheadings, service icons, testimonial nav pills, active dot, dropdown hover/active, footer underline + social hover |
| Dark teal       | `#10495c` (`--bs-secondary`)                                                                                                                                                                                                                                     | `.bg-secondary` (Why Us + Join CTA), footer widget h3                                                                                          |
| Footer bg       | `#ede1d0` (warm beige)                                                                                                                                                                                                                                           | `.site-footer`                                                                                                                                 |
| Light grays     | `#f8f9fa`, `#f5f0e9`                                                                                                                                                                                                                                             | misc light surfaces                                                                                                                            |
| Button text     | WHITE on `#f79918` (custom `.btn.btn-primary` override); note plain BS `.btn-primary` text is `#000` — the style.css override wins                                                                                                                               | hover: white bg + `#f79918` text + `0 15px 30px 0 rgba(0,0,0,0.2)` shadow                                                                      |
| Buttons         | PILLS: `.btn { padding: 12px 20px; border-radius: 30px; font-size: 10px; font-weight: 700; letter-spacing: .1rem; text-transform: uppercase; }`; `btn-sm` = `.25rem .5rem / .875rem / .2rem`; large CTA `py-3 px-5` (Join Us)                                    | `.btn`, `.btn-primary`, `.btn-sm`                                                                                                              |
| Headings        | `.heading` 40px/700 (30px mobile); hero h1 40px/700 white; `.subheading` uppercase 12px bold letter-spacing .1rem `#f79918` (white in hero)                                                                                                                      | `.heading`, `.subheading`, `.hero h1`                                                                                                          |
| Font            | **Poppins** (Google Fonts)                                                                                                                                                                                                                                       | `"Poppins", sans-serif`                                                                                                                        |
| Hero            | cover photo (`hero_1.jpg`) + `:before` overlay `rgba(0,0,0,0.3)`; white text                                                                                                                                                                                     | `.hero.overlay`                                                                                                                                |
| Section rhythm  | `.section` padding 7rem 0; `sec-cta` padding-top 10rem; `sec-services-wrap` margin-bottom -50px (overlap into CTA)                                                                                                                                               | —                                                                                                                                              |
| Why Us features | `feature-1 h3` 12px/700 UPPERCASE white; copy `p.opac-white-5` = `rgba(255,255,255,0.5)`                                                                                                                                                                         | `.feature-1`, `.opac-white-5`                                                                                                                  |
| Video-bg        | circular 80px play icon over a rounded image (`img-fluid rounded`)                                                                                                                                                                                               | `.video-bg .icon` (YouTube links in the original; recreate as decorative)                                                                      |
| Testimonials    | card padding 50px 30px bg `#fff` radius 0; heading 18px/700; blockquote 18px italic `#000`; author img 40px circle; strong 16px/700 `#000`; span 14px; dots 7px `rgba(0,0,0,0.2)` / active `#f79918`; Prev/Next = amber pills (padding 5px 20px, uppercase 12px) | `.testimonial-item`, `.tns-nav`, `.testimonial-nav`                                                                                            |
| Service icons   | 60px amber `#f79918` (flaticon-wheat / flaticon-church / flaticon-bible → lucide Wheat / Church / BookOpen)                                                                                                                                                      | `.service [class^="flaticon-"]`                                                                                                                |
| Footer          | bg `#ede1d0`, 14px `#888`; links `#777` hover `#000` + 10%-height underline (`rgba(247,153,24,0.1)` → `#f79918`); widget h3 12px/700 uppercase `#10495c`; social 40px circles white bg radius 40% hover `#f79918`                                                | `.site-footer`                                                                                                                                 |
| Navbar          | absolute top-0 z-9, padding 20px; logo 24px; menu links 14px `rgba(255,255,255,0.7)` hover/active `#fff` padding 10px 15px; dropdown shadow `0 2px 10px -2px rgba(0,0,0,0.1)` min-width 180px links `#000` hover/active `#f79918`                                | `.site-nav`, `.site-menu`                                                                                                                      |
| AOS animations  | `data-aos` fade-up / fade-left with 0/100/200ms delays on most blocks                                                                                                                                                                                            | progressive enhancement — optional in recreation                                                                                               |

## Structure (1:1 section order)

1. Navbar — transparent absolute over hero; "Sanctus" white wordmark (24px)
   left; right links (14px, rgba(255,255,255,0.7)): Home (active) / Sermons
   (dropdown: Sermons, Sermons Single, Dropdown → Sub Menu One/Two/Three) /
   Ministries / Events / Contact; mobile burger → off-canvas menu with the
   same links.
2. Hero — full-width cover photo (picsum `sanctus-hero`) + `rgba(0,0,0,0.3)`
   overlay; LEFT: white uppercase subheading "Welcome to Sanctus church", h1
   "Oh Safe To the Rock That Is Higher Than I" (40px/700 white), white
   paragraph, "Go to sermons" amber pill; RIGHT: rounded image (`sanctus-about`)
   with 80px circular play icon.
3. About — left: amber "About us" subheading, h2 "Living and Sharing The
   Gospel" (40px/700), 2 paragraphs, "Know more about us" pill; right:
   rounded photo (warm books vibe).
4. Recent Sermons — centered "Sermons" / "Recent Sermons"; 3 cards: rounded
   image (`sanctus-sermon-1..3`), gray date "15 Jan 2020 • By Pastor
   Campbell", h3 "Living and Sharing The Gospel" (20px), copy, btn-sm pill
   "Read more".
5. Why Us (`#10495c`) — header: amber "Why Us" + white h2 "You matter to
   God, you matter to us." + right white paragraph; body: video-bg image
   with play icon left; 2x2 feature grid right (Peace with God /
   Relationship for the Soul / Identifying Limitations / His Kingdom — white
   uppercase 12px h3 + rgba(255,255,255,0.5) copy); "Send us your prayer
   request" amber pill.
6. Living Testimonies — centered "Testimonials" / "Living Testimonies"; 9
   white cards (heading "Far far away, behind the word mountains", italic
   quote, 40px avatar `sanctus-person`, James Campbell / Person); amber
   Prev/Next pills; dots (active amber).
7. Church Services — white bg, centered "Our Services" / "Church Services";
   3 centered cards: Praise and Worship (Wheat icon), Marriage (Church
   icon), Exhortation (BookOpen icon) — 60px amber icons, 18px titles,
   copy, "+ Read more".
8. Join (`#10495c`, padding-top 10rem to overlap Services) — white h2 "Join
   with us as we worship the Lord" left; large "Join Us" pill (`py-3 px-5`)
   right.
9. Footer (`#ede1d0`) — Contact widget (address "43 Raymouth Rd. Baltemoer,
   London 3910", 2× phone, email); Sources widget (2 link columns: About
   us/Services/Vision/Mission/Terms/Privacy | Partners/Business/Careers/
   Blog/FAQ/Creative); Links widget (Our Vision / About us / Contact us) +
   6 circular social icons (Instagram/Twitter/Facebook/LinkedIn/Pinterest/
   Dribbble, amber hover); copyright bar with the mandatory Component Dock
   link (https://www.componentdock.com/) replacing the ColorLib credit.

## Tasks (implementation order)

1. Scaffold `apps/sanctus` (copy the simplest existing app; package
   `@free-react-templates/sanctus`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/sanctus" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #f79918`,
   `--color-primary-hover: #f8a83b`, `--color-secondary: #10495c`,
   `--color-footer: #ede1d0`, `--font-sans: 'Poppins', sans-serif`.
4. `index.html`: Google Fonts `<link>` for Poppins; document title "Sanctus
   — Church Template".
5. Components (in order): `Navbar` (with Sermons dropdown + mobile menu) →
   `Hero` → `About` → `Sermons` → `WhyUs` → `Testimonials` → `Services` →
   `Join` → `Footer`; compose in `App.tsx`.
6. Data: nav links (Home/Sermons/…/Contact), dropdown (Sermons, Sermons
   Single, Dropdown → 3 sub items), sermon cards (3 × date "15 Jan 2020 • By
   Pastor Campbell" + title + copy), features (Peace with God / Relationship
   for the Soul / Identifying Limitations / His Kingdom), testimonials (9 ×
   James Campbell / Person), services (Praise and Worship / Marriage /
   Exhortation), footer widgets (Contact, Sources ×2 cols, Links, socials).
7. Icons: lucide-react — Wheat, Church, BookOpen, Play (video-bg circles),
   Menu (burger), Instagram, Twitter, Facebook, Linkedin, Pinterest,
   Dribbble.
8. Placeholders: picsum — hero (`sanctus-hero`, warm landscape), About
   (`sanctus-about`), sermon ×3 (`sanctus-sermon-1..3`), Why Us
   (`sanctus-why`), testimonial avatar (`sanctus-person`, same for all 9).
9. Buttons: one `Button` variant "pill-primary" (amber bg, white text, 30px
   radius, uppercase 10px/700 letter-spacing .1rem; hover → white bg + amber
   text + soft shadow). Join CTA uses the large size (`py-3 px-5`), sermon
   "Read more" uses the small size.
10. TDD per section; 100% coverage; verify with `scripts/verify-app.sh
sanctus` (or `npm run verify:app`).
11. PR description: source (ColorLib Byfaith, preview URL), tokens,
    dup-rows (mark lines 554/1289 `[x]` after deploy), what differs (name,
    YouTube links → decorative play icons, placeholders).

## Fidelity pitfalls to watch

- The page is WARM/LIGHT: white body + beige `#ede1d0` footer — NOT dark.
  Only Why Us + Join are dark teal `#10495c`.
- Buttons are PILLS (30px radius) with WHITE text on `#f79918` — the plain
  Bootstrap `.btn-primary` (black text) is overridden by `.btn.btn-primary`
  in style.css; hover inverts to white bg + amber text.
- The hero and Why Us `video-bg` elements are YouTube glightbox links —
  recreate as decorative circular play icons over the image (no video).
- Sermon "Read more" is `btn-sm` (tiny pill, .875rem) — NOT the full-size
  pill; hero/About/Why Us/Join use the full-size pill.
- `sec-services-wrap` has `margin-bottom: -50px` and the Join CTA has
  `padding-top: 10rem` — the Services section visually overlaps INTO the
  Join section. Recreate the overlap.
- Testimonials are 9 items all with the SAME author (James Campbell /
  Person) and same photo — repeat them.
- Subheadings are uppercase 12px BOLD with .1rem letter-spacing in amber
  `#f79918` (white in the hero) — a recurring signature element.
- Footer has TWO Sources link columns floated side by side within one
  widget.
- The dropdown's third item "Dropdown" has its own submenu (Sub Menu One/
  Two/Three) — nested; desktop hover-open, keyboard focus should also open.
- Navbar menu link color is `rgba(255,255,255,0.7)` (not full white) with
  Home active in full white.
- The screenshot's hero shows a cutout preacher photo, but the live DOM has
  the rounded `about_1.jpg` + play icon — follow the DOM.
- The copyright line "made with ♥ by Colorlib" is replaced by the Component
  Dock link per repo conventions; the logo is "Sanctus", never "ByFaith".
