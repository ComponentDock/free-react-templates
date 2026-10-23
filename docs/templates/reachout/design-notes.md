# Reachout — Design Notes

## Source

- ColorLib Contact Form 13
- https://colorlib.com/wp/template/contact-form-13/
- Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-13/

## Layout

- Full-viewport gradient background (blue → cyan, 120deg)
- Two-column split: left = contact info, right = white form card
- Left: two sub-columns (London, New York) with map/phone/email icons
- Right: white card with shadow, form fields, blue submit button

## Tokens

- Gradient: #66a6ff → #89f7fe
- Body font: Roboto, Headings: Poppins
- Form: white, shadow, 40px 70px padding
- Inputs: #d9d9d9 border, 55px height, 4px radius
- Button: Bootstrap primary blue, 4px radius, shadow
- Section heading: 14px, uppercase, #888

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reachout/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reachout/public/CNAME` = `reachout.free.componentdock.com`
  and the package `homepage` = `https://reachout.free.componentdock.com`.
