# Gilded (Colorlib Akame) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-gilded`.

## Design notes

- **Original:** ColorLib "Akame" — free hair salon website template
  (source: https://colorlib.com/wp/template/akame/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/akame/`
  (HTTP 200, 36.3KB) + stylesheet `style.css` (51.1KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** top-header + main-header (logo +
  Home/About Us/Services/Portfolio/Blog/Blog Details/Contact) → welcome
  area ("We Care About Your Hair" / "Hair Salon" / "Beautiful Hair Comes
  From A Legendary." + CTA) → about (section-padding-80-0) → services
  ("Our Services": Coloring, Haircut, Hairstyle) → why choose us (bg-gray)
  → our work (portfolio: Hairstyle tiles) → our experts (Mila Hartley,
  Teigan Duran, Tanya Ramsay, Donna Carr) → certificate band → blog
  ("Latest News": "Make Stilo Your Number One Choice") → CTA band
  (bg-gray) → footer (Opening times + Contact Us + social).
- **Design tokens:** brand gold **#bca858** + dark **#252525**; accent red
  **#cb242e** / blue **#4b62b3**; headings **Playfair Display** (serif) +
  body **Open Sans** via Google Fonts; light sections with bg-gray bands;
  gold filled uppercase buttons.
- **Recreation name:** Gilded. App folder `apps/gilded`, package
  `@free-react-templates/gilded`.
- **Design approach:** light theme with gold accents; welcome = seeded
  picsum photo + headline; about split; services with lucide icons;
  why-choose-us band; portfolio grid with seeded photo tiles; expert cards
  with initials avatars; blog cards with seeded photos; CTA band; footer
  with opening times + social links; all images picsum-seeded
  (`picsum.photos/seed/gilded-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-gilded/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/gilded` (copy `apps/aurora`; rename package to
      `@free-react-templates/gilded`).
- [ ] TDD: tests first for Navbar, Welcome, About, Services, Work, Experts,
      Blog, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gilded/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gilded/public/CNAME` = `gilded.free.componentdock.com`
  and the package `homepage` = `https://gilded.free.componentdock.com`.
