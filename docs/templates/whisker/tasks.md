# Whisker (Colorlib Petcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-whisker`.

## Design notes (replication findings)

- **Original:** ColorLib "Petcare" — pet care services & animal clinic
  (source: https://colorlib.com/wp/template/petcare/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/petcare/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (63.5KB, minified)
  extracted).
- **Visual design (from DOM + CSS tokens):** clean pet-clinic landing on a
  photo hero, **red** brand color (`#ff2121`) for outlined/filled buttons,
  service icon bubbles in soft pink (`#ffedf2` bg, `#ff7474` icons), light
  sections, dark-navy footer headings (`#012f5f`), and a wide CTA band over a
  photo with white text.
- **Structure (1:1, section order):**
  1. Header: logo + nav links + phone `01654.066.456`.
  2. Hero (`slider-area`, bg image, 920px tall): kicker "We help to groom
     your pet", h1 "We Care Your Pets.", blurb, **Contact Now** button.
  3. Services (`our-services`): kicker "Our Professional Services", h2 "Best
     Pet Care Services" + 3 cards — **Pet Boarding, Pet Treatment,
     Vaccinations** — each with an icon bubble and blurb.
  4. About (`about-area`): counter **354** (happy clients), h2 "We are
     commited for better service", two paragraphs, **Read More** button.
  5. Gallery (`gallery-area`): kicker "Our Recent Photos", h2 "Pets Photo
     Gallery" + 4 images with hover overlay (rgba(1,10,28,0.3)) and a
     "View Project" caption.
  6. Contact form (`contact-form-main`): heading "World's Leading Law
     Consultency Agency !" + form — Name, Phone, Email inputs, message
     textarea, submit button.
  7. Team (`team-area`): kicker "Our Professional members", h2 "Our Team
     Mambers" + 3 members — **Mike Janathon, Mike J Smith, Pule W Smith**
     (role "Doctor").
  8. Testimonial (`testimonial-area section-bg`): quote by **Margaret Lawson
     — Creative Director** ("I am at an age where I just want to be fit and
     healthy…").
  9. Blog (`home_blog-area`): kicker "Oure recent news", h2 "Our Recent
     Blog" + 3 posts (tag "Pet food", date "Nov 30, 2020") — **Amazing
     Places To Visit In Summer**, **Developing Creativithout Losing
     Visual**, **Winter Photography Tips from Glenn** + **Read more**.
  10. CTA (`contact-animal-owner section-bg`): "Any time you can call us!"
      - blurb + **Contact Us** or phone `+880 4664 216`.
  11. Footer: logo + blurb; **Company** links (Home, About Us, Services,
      Cases, Contact Us); **Services** links; **Get in Touch**
      (`152-515-6565`, `Demomail@gmail.com`, New Orleans, USA); social
      icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff2121`** (`.boxed-btn` border/text; hover fills red).
  - Service icon bubble `#ffedf2` bg, icon `#ff7474`, 100px circle.
  - Footer widget headings `#012f5f` (navy); gallery hover overlay
    rgba(1,10,28,0.3); CTA heading `#fff` over photo bg.
  - Font: **"Muli"** (body/buttons) + Roboto (Google Fonts via `<link>`).
  - Buttons: uppercase, letter-spacing 3px, padding 18px 44px.
- **Recreation name:** Whisker (pet-themed, distinct from "Petcare" and all
  existing names). App folder `apps/whisker`, package
  `@free-react-templates/whisker`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/whisker-<n>/<w>/<h>`); lucide-react icons (replaces
  flaticon); Muli via Google Fonts; counter as static stat; forms prevent
  default (no backend); red primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-whisker/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/whisker` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/whisker`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-whisker`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
