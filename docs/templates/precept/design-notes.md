# Precept — Design Notes

Reference: **Education** — `https://colorlib.com/wp/template/education/`  
Live preview: `https://preview.colorlib.com/theme/education/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/education-free-template.jpg  
Shipped: https://precept.free.componentdock.com

An Education & Courses template with hero, features, popular courses, cta, reviews and search course sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/precept/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f7631b` | brand |
| `--color-brand-light` | `#ff8a50` | brand light |
| `--color-navy` | `#04091e` | navy |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-bg-light` | `#f9f9ff` | bg light |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `PopularCourses` | Popular courses section | see fidelity note below |
| 5 | `CtaSection` | CTA section | see fidelity note below |
| 6 | `Reviews` | Reviews section | see fidelity note below |
| 7 | `SearchCourse` | Search course section | see fidelity note below |
| 8 | `UpcomingEvents` | Upcoming events section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Newsletter` | Newsletter section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed navbar with a dark top bar (social icons, phone, email), the site name "Precept" with an orange left border, and navigation links (Home, About, Courses, Events, Blog, Contact) with a mobile hamburger toggle.

### `Hero`
The system SHALL render a full-height hero banner with a dark overlay background image, a headline "We Ensure Better Education for a Better World", supporting paragraph, and an orange "Get Started" CTA button.

### `Features`
The system SHALL render a 3-column feature section with cards for "Learn Online Courses", "No.1 of Universities", and "Huge Library", each with a description and a "Join Now" link.

### `PopularCourses`
The system SHALL render a course carousel section titled "Popular Courses We Offer" with course cards showing an image, user/comment counts, price, title, and description.

### `CtaSection`
The system SHALL render a call-to-action section with a background image, dark overlay, headline "Enhance Your Skills With Best Online Courses", and an "Enroll Now" button.

### `Reviews`
The system SHALL render an instructor/testimonial section titled "Our Expert Instructors" with instructor cards showing an avatar, name, role, star rating, and review text.

### `SearchCourse`
The system SHALL render a search section with a dark overlay background, heading "Search For Available Courses", and a search input with submit button.

### `UpcomingEvents`
The system SHALL render an events section titled "Upcoming Events" with event cards showing an image, title, date/time, and venue.

### `Blog`
The system SHALL render a blog section titled "Latest Posts From Blog" with post cards showing an image, author, date, comment count, title, excerpt, and a "View More" button.

### `Newsletter`
The system SHALL render a newsletter subscription section with an orange background, heading "Subscribe to Get Updated Information", email input, and a "Subscribe" button.

### `Footer`
The system SHALL render a dark navy footer with the site name "Precept", link columns (Quick Links, Resources, Contact), and a bottom bar with a "Made with ❤ by Component Dock" link pointing to `https://www.componentdock.com/`.

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/precept/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/precept/public/CNAME` = `precept.free.componentdock.com`
  and the package `homepage` = `https://precept.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Read from `https://preview.colorlib.com/theme/education/` (HTTP 200, 41,573 B,
title `Education`) and its theme sheet `css/main.css` (60,089 B, sha256
`0615670e1059…`) over `css/bootstrap.css` (13,681 B). Nine sheets in total; the
census reads `main.css` only.

| Token | Reference | App (`apps/precept`) |
| ----- | --------- | -------------------- |
| Brand | `#f7631b` (88) | `#f7631b` ✓ |
| Scrim navy | `rgba(4,9,30,0.8)` on `.banner-area .overlay-bg` | `--color-navy: #04091e` ✓ |
| Ink | `#222` (33) | `#222222` ✓ |
| Body copy | `#777` (23) | `#777777` ✓ |
| Lilac-white band | `#f9f9ff` (22) | `#f9f9ff` ✓ |
| Kit teal / blue | `#4cd3e3` (7) / `#38a4ff` (6) — `.genric-btn.success/.info` styleguide only | not used ✓ (correct) |
| Face | Poppins 300 body / 600 headings, no serif | Poppins ✓ |
| Radius | 3px (`.genric-btn.radius`), `50%` avatars | `rounded` |
| Bands | `.section-gap` 100px, alternating white / `#f9f9ff` | `py-24` white / lilac |

This prep's palette was already exact; the section exists so a fidelity pass can
see the occurrence counts and the "kit colours are not page colours" note.

Section order measured: header (phone/email/nav) → banner (0.8 navy scrim, 48px
white H1, orange CTA) → features (3) → popular courses (3 cards, 355/35/$150) →
"Get reduced fee" split band → upcoming events (2) → testimonial carousel →
"Become an instructor" CTA → blog (3) → "Not Yet Satisfied" CTA → footer.
