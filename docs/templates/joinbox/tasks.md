# Joinbox — Tasks

## Template Info

- **Name:** Joinbox
- **Original:** ColorLib Signup Form 02
- **Preview:** https://preview.colorlib.com/theme/bootstrap/signup-form-02/
- **Slug:** signup-form-02

## Design Notes

- Split layout: form on left (#f6f7fc), background image on right
- Font: Roboto (Google Fonts, weights 300/400)
- Brand color: #fb771a (orange)
- 7 form fields in a mix of single/double column layout
- Terms checkbox checked by default
- Orange "Register" submit button

## Tasks

- [x] Spec written
- [x] Scaffold app (copy from enroll, rename)
- [x] Implement index.css with design tokens
- [x] Implement split layout in App.tsx
- [x] Implement SignupForm component with 7 fields
- [x] Implement Footer component
- [x] Write tests for SignupForm
- [x] Write tests for Footer
- [x] Run per-app gate (verify-app.sh)
- [x] PR + merge
- [x] Bookkeeping (TEMPLATES.md, homepage, readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/joinbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joinbox/public/CNAME` = `joinbox.free.componentdock.com`
  and the package `homepage` = `https://joinbox.free.componentdock.com`.
