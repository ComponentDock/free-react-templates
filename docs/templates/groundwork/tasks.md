# Groundwork — Implementation Tasks

Source design: **Bootstrap Footer 04** (`https://colorlib.com/wp/template/bootstrap-footer-04/`) → recreation name **groundwork**. Shipped at https://groundwork.free.componentdock.com.

Scope: Recreation of ColorLib's "Bootstrap Footer 04" — a dark-themed website footer with four-column link layout, horizontal separator with policy links and social icons, and a bottom disclaimer paragraph. This is a focused footer component template, not a full-page website template.

## Component breakdown

Render order as composed in `apps/groundwork/src/App.tsx`:

### 1. Footer
- The footer component SHALL render with a black (#000) background and muted gray (#777) text color, with 7rem vertical padding.
- Scenario — Footer background styling:
  - **WHEN** the Groundwork component is rendered
  - **THEN** the footer element has a black (#000) background
  - **AND** the footer text color is muted gray (#777)
  - **AND** the footer has 7rem vertical padding

### Cross-cutting requirements

- **Four-column link layout** — The footer SHALL display four columns in a row: brand info, Shop links, Press links, and About links.
  - Scenario — Brand column: **WHEN** the Groundwork component is rendered; **THEN** the first column displays the site logo "Groundwork" as a white link; **AND** the logo is 26px bold white text; **AND** a description paragraph appears below the logo
  - Scenario — Shop column: **WHEN** the Groundwork component is rendered; **THEN** the second column displays a "Shop" heading; **AND** the Shop column contains links: "Sell online", "Features", "Examples", "Website editors", "Online retail"
  - Scenario — Press column: **WHEN** the Groundwork component is rendered; **THEN** the third column displays a "Press" heading; **AND** the Press column contains links: "Events", "News", "Awards", "Testimonials", "Online retail"
  - Scenario — About column: **WHEN** the Groundwork component is rendered; **THEN** the fourth column displays an "About" heading; **AND** the About column contains links: "Contact", "Services", "Team", "Career", "Contacts"
- **Separator with policy links and social icons** — The footer SHALL display a horizontal separator line with policy links on the left and social media icons on the right.
  - Scenario — Separator line: **WHEN** the Groundwork component is rendered; **THEN** a horizontal line (1px solid rgba(255,255,255,0.2)) is displayed below the column row
  - Scenario — Policy links: **WHEN** the separator section is visible; **THEN** the left side shows links: "Privacy Policy", "Terms & Conditions", "Code of Conduct"; **AND** the policy links are white text, inline-block, with 10px padding
  - Scenario — Social media icons: **WHEN** the separator section is visible; **THEN** the right side shows social media icons for Twitter, Instagram, Facebook, and Pinterest; **AND** the social icons are #ccc colored, inline-block, with 10px padding; **AND** the social icons turn white (#fff) on hover
- **Bottom disclaimer paragraph** — The footer SHALL display a small disclaimer paragraph below the separator section.
  - Scenario — Disclaimer content: **WHEN** the Groundwork component is rendered; **THEN** a small-text paragraph appears below the separator row; **AND** the paragraph contains placeholder disclaimer text
- **Link hover transitions** — All links in the footer SHALL have smooth hover transitions (0.3s ease).
  - Scenario — Link hover effect: **WHEN** a user hovers over a footer link; **THEN** the link color transitions from #999 to #fff over 0.3s ease; **AND** no underline decoration appears on hover
- **Footer does not reference ColorLib** — The footer component SHALL NOT contain any references to ColorLib, colorlib.com, or the source template name in any code, comments, or user-facing text.
  - Scenario — No ColorLib references: **WHEN** the Groundwork component source code is inspected; **THEN** no file contains the string "colorlib" (case-insensitive); **AND** no file contains the string "bootstrap-footer" (except spec/docs); [ ] Footer renders with black (#000) background; [ ] Four-column layout: brand + Shop + Press + About; [ ] Site logo "Groundwork" is 26px bold white; [ ] Each link column has 5 items with correct labels; [ ] Horizontal separator with rgba(255,255,255,0.2) border; [ ] Policy links (Privacy Policy, Terms & Conditions, Code of Conduct) on left; [ ] Social icons (Twitter, Instagram, Facebook, Pinterest) on right, #ccc; [ ] Social icons hover to white; [ ] Bottom disclaimer paragraph present; [ ] Link hover transitions (0.3s ease); [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/ ("Component Dock"); [ ] CNAME file: `groundwork.free.componentdock.com`; [ ] Homepage: `https://groundwork.free.componentdock.com`; [ ] 100% test coverage

## Verification

- [x] `apps/groundwork` ships on https://groundwork.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/groundwork/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/groundwork/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/groundwork/public/CNAME` = `groundwork.free.componentdock.com`
  and the package `homepage` = `https://groundwork.free.componentdock.com`.
