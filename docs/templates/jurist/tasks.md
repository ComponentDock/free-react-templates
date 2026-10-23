# Jurist — Tasks

## Template Info

- Name: Jurist
- Original: ColorLib Judicial
- Preview: https://preview.colorlib.com/theme/judicial/
- Branch: feat/template-jurist

## Design Tokens

- Brand gold: #cea15a
- Navy: #293462
- Fonts: Nunito Sans (body), Oswald (headings)

## Tasks

- [x] Write spec (openspec/specs/template-jurist/spec.md)
- [x] Scaffold app (copy from advocat, rename)
- [x] Implement Navbar
- [x] Implement Hero
- [x] Implement About
- [x] Implement FeaturedPractice
- [x] Implement AreasOfExpertise
- [x] Implement WhyChooseUs
- [x] Implement Consultation
- [x] Implement TestimonialsFaq
- [x] Implement SocialBar
- [x] Implement Footer
- [x] Write all tests
- [x] Run verify-app.sh
- [x] PR + merge

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/jurist/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jurist/public/CNAME` = `jurist.free.componentdock.com`
  and the package `homepage` = `https://jurist.free.componentdock.com`.
