# Formbloom — Design Notes

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/bootstrap/contact-form-15/` answers
> HTTP 200 (2,773 B; `style.css` 13,532 B, sha256 `dc952ec40953`). Any
> "preview 404 / design from screenshot" note further down is
> **superseded**: take CSS values from the live sheet
> (`docs/replication.md`); the screenshot stays the layout target.

## Source

- ColorLib slug: `contact-form-15`
- Preview URL: https://preview.colorlib.com/theme/contact-form-15/ (404 at time of implementation — screenshot used as reference)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-15.jpg

## Visual Design

- **Aesthetic:** Ultra-minimal, monochrome, professional
- **Layout:** Two-column top (location info + contact info), single-column form below
- **Background:** Pure white
- **Typography:** Quicksand (rounded geometric sans-serif), black headings
- **Form:** Bottom-border-only inputs (no background), monospace-style placeholders
- **Button:** Solid black, white text, slight border-radius
- **Overall feel:** Clean, spacious, modern minimalism

## Replication Notes

- Preview was unreachable (404) — design tokens extracted from screenshot only
- No images or decorative elements in original — purely typographic layout
- Form fields use underline-only styling (no box/border wrapping)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formbloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formbloom/public/CNAME` = `formbloom.free.componentdock.com`
  and the package `homepage` = `https://formbloom.free.componentdock.com`.
