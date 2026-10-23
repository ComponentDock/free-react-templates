# Zen Template — Tasks & Design Notes

## ColorLib Source
- Template: Namaste (https://preview.colorlib.com/theme/namaste/)
- Yoga/wellness landing page
- Montserrat typeface, deep purple (#493365) headings, pale yellow (#f7ffa0) buttons
- Purple-to-pink gradient (#7364b0→#ffb8e7) on footer and accents

## Design Tokens
- `--color-zen-purple`: #493365 (headings, nav)
- `--color-zen-muted`: #938e99 (body text)
- `--color-zen-yellow`: #f7ffa0 (primary button bg)
- `--color-zen-gradient-from`: #7364b0 (gradient start)
- `--color-zen-gradient-to`: #ffb8e7 (gradient end)
- Font: Montserrat (Google Fonts)

## Tasks
- [x] Spec written
- [ ] App scaffolded (package.json, vite.config, tsconfig, CNAME)
- [ ] Tests written (App + 9 components)
- [ ] Implementation complete
- [ ] Per-app gate passes (verify-app.sh zen)
- [ ] PR created and merged
- [ ] Bookkeeping (TEMPLATES.md [x], readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/zen/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zen/public/CNAME` = `zen.free.componentdock.com`
  and the package `homepage` = `https://zen.free.componentdock.com`.
