# BuildWell — Task Outline

> **SHIPPED** — this prep's design shipped as `apps/buildwell`
> (<https://buildwell.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Source: ColorLib **Celt** (https://preview.colorlib.com/theme/celt/ — HTTP 200, 31,820 B,
re-read 2026-10-24) · new name **buildwell** · construction / corporate, single page.

Companion research: `docs/templates/buildwell/design-notes.md`; contract:
`openspec/specs/template-buildwell/spec.md`.

> The brief was rewritten 2026-10-24 (it had described ColorLib Balay). Section list and
> tokens below are measured from the live Celt preview + `css/style.css` (28,799 B, sha256
> `2f934fdfad5f…`); the source archive (`downloads/free/celt.zip`) is **404**.

## Section order (top → bottom, as the source's band ids run)

1. **TopBar** — `#top-navbar`: `#001232`, address · phone · e-mail, each with a circular outline icon
2. **Navbar** — white; yellow circle + navy wordmark, nav with dropdown carets, search glyph; `fixed-navbar` past the top bar
3. **Hero** — `#home`: construction photo under a **white 0.9 wash**, `#000044` "We Build Your Dream", grey lead, one yellow "Learn more"
4. **About** — 3 cards (image + 4px `#FFD626` bottom rule + title + blurb + "Read more")
5. **About Us band** — `#F8F8F8`, half-width background photo left, kicker + "About Us" + 2 paragraphs right
6. **Stats** — `#FFD626` band, 4 counters, 60px `#004` glyph left of each number (not a centred badge)
7. **Portfolio** — "Featured Works", 4-up carousel (1/2/4 items), arrows, lightbox, "View All"; band has no bottom padding
8. **Services** — "Our Services", 6 cards, 35px yellow glyph at left, hover shadow `0 0 10px 3px #EEE`
9. **FAQ** — "Why Choose Us" accordion **inside the services band**, first panel open, panel swap only
10. **CTA 1** — yellow `md-section`, centred `h2` + `h4` + navy "Contact Us"
11. **Testimonial** — background photo with white 0.9 wash, "Happy Clients", 1-up carousel, dots, autoplay
12. **Partners** — logo carousel, 2/4/6 items, arrows, autoplay, no heading
13. **Blog** — "Latest News" (source spells "Lastest News"), 3 cards with date + author meta
14. **CTA 2** — slim yellow strip, `h3` left + navy "Contact Us" right
15. **Footer** — `#001232`: logo + contact list · Quick Links (source ships the list twice) · "Keep in touch" with the **e-mail + Subscribe** form and 4 social glyphs
16. **BottomFooter** — copyright + Component Dock link

## Component file plan

```
src/
  App.tsx
  index.css            (Tailwind + @theme tokens)
  main.tsx
  components/
    TopBar.tsx
    Navbar.tsx
    Hero.tsx
    About.tsx
    AboutBand.tsx
    Stats.tsx
    Portfolio.tsx
    Services.tsx
    Faq.tsx
    Cta.tsx
    Testimonial.tsx
    Partners.tsx
    Blog.tsx
    Footer.tsx
```

## Fidelity notes

- **Colors:** `#001232` navy · `#FFD626` yellow · `#000044` headings · `#64728A` body · `#F8F8F8` / `#EEE` greys. Nothing else.
- **Font:** Poppins 300–700 (Google Fonts `css2?family=Poppins:wght@300;400;500;600;700` → 200). Body 16px/24px, letter-spacing `.3px`; headings 35/28/20/16 at weight 700.
- **Buttons:** square (radius 0), `10px 30px`; `.main-button` navy/white, `.secondary-button` yellow/`#004`; hover = bottom-up fill (`height 0→100%`, `.2s`), main→yellow, secondary→navy.
- **Hero:** the overlay is **white 0.9**, not a dark scrim — headline is navy and there is exactly one CTA.
- **Stat icons:** 60px glyphs aligned left of the number, `#004` — no circular badges.
- **Portfolio:** owl-style carousel (1/2/4), arrows only, lightbox on card activation; no parallax in the source.
- **Services:** icon at `left:0; top:20px`, content padded `15px 15px 15px 70px`; hover shadow `0 0 10px 3px #EEE`.
- **FAQ accordion:** single-open, first panel open; clicking the open panel's header does not close it.
- **Testimonial:** one quote at a time with dots + autoplay, over a washed photo.
- **Blog:** image with a 4px yellow bottom rule; meta line "10 November 2017 , By John Doe".
- **Footer:** three 4-column widgets; the subscribe form lives here, not in a standalone band.
- **Section rhythm:** 90px (`md`) / 60px (`sm`) / 30px (`xs`) vertical padding.

## Implementation tasks

- [ ] Scaffold `apps/buildwell/` from simplest existing app
- [ ] Create `TopBar` (navy strip, three contact items with ring icons)
- [ ] Create `Navbar` with sticky behaviour + mobile toggle + search glyph
- [ ] Create `Hero` — white-wash photo, navy headline, single yellow CTA
- [ ] Create `About` (3 cards, 4px yellow image rule, "Read more" links)
- [ ] Create `AboutBand` (`#F8F8F8`, half background photo, "About Us" copy)
- [ ] Create `Stats` yellow band (4 counters, glyph left of the number)
- [ ] Create `Portfolio` carousel (1/2/4, arrows, lightbox, "View All")
- [ ] Create `Services` (6 cards, yellow glyph, hover shadow)
- [ ] Create `Faq` accordion (3 panels, first open, single-open swap)
- [ ] Create `Cta` bands (mid-page + slim pre-footer)
- [ ] Create `Testimonial` carousel over a washed photo
- [ ] Create `Partners` logo carousel
- [ ] Create `Blog` (3 cards with date + author meta)
- [ ] Create `Footer` (3 widgets incl. subscribe form) + Component Dock line
- [ ] Write `App.tsx` composing all sections in source order
- [ ] Add `@theme` tokens in `index.css` (navy, accent, heading, body, greys, Poppins)
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run verify:app buildwell`
- [ ] Commit and open PR
