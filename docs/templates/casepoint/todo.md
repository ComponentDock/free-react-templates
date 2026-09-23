# Casepoint — Implementation Todo & Design Notes

**Source:** ColorLib TheLawyer (https://preview.colorlib.com/theme/thelawyer/)
**New name:** casepoint
**Category:** Legal / Law Firm

## Section Order (match 1:1 with original)

1. **Header** — Sticky header with logo, 6-item nav, phone CTA button
2. **Hero** — Full-width background image, subtitle + accent line, h1, paragraph, CTA button
3. **Practice Areas** — 3-column grid of bordered icon cards (Health Law, Insurance Law, Vehicle Accident)
4. **About** — Split layout: left image, right text + heading + CTA button
5. **Contact Form** — Background image, 5-field form, submit button
6. **Case Studies** — Tabbed nav (3 tabs), 2x2 card grid per tab
7. **CTA Banner** — Full-width background image, heading, dark CTA button
8. **Team** — 3-column team member cards (photo + name + role)
9. **Testimonial** — Background image, quote icon, testimonial text, founder info, carousel
10. **Blog** — 2-column blog post cards with image date overlay + caption
11. **Footer** — Dark bg image, 4-column layout (logo/info, support links, quick links, newsletter), social icons, copyright

## Component Breakdown

| Component        | File                   | Notes                                      |
| ---------------- | ---------------------- | ------------------------------------------ |
| Header           | `Header.tsx`           | Sticky, logo, nav array, phone CTA button  |
| Hero             | `Hero.tsx`             | Background image, subtitle w/ line, h1, p, btn |
| PracticeAreaCard | `PracticeAreaCard.tsx` | Icon (lucide-react), title, description, "Read More" link |
| PracticeAreas    | `PracticeAreas.tsx`    | Section title + 3-column grid              |
| About            | `About.tsx`            | Split layout, background image, text + CTA |
| ContactForm      | `ContactForm.tsx`      | Background image, 5 fields, select, submit |
| CaseStudies      | `CaseStudies.tsx`      | Tabbed nav + 2x2 card grid                 |
| CtaBanner        | `CtaBanner.tsx`        | Background image, heading, dark button     |
| TeamMember       | `TeamMember.tsx`       | Photo, name, role                          |
| Team             | `Team.tsx`             | Section title + 3-column grid              |
| Testimonial      | `Testimonial.tsx`      | Background image, quote SVG, text, founder, carousel |
| BlogCard         | `BlogCard.tsx`         | Image w/ date overlay, caption             |
| Blog             | `Blog.tsx`             | Section title + 2-column grid              |
| Footer           | `Footer.tsx`           | Dark bg, 4 columns, newsletter form, social icons, copyright |

## Fidelity Notes

- **Fonts:** Google Fonts: Josefin Sans (headings, buttons), Roboto (body), Rubik (hero h1). Load via `<link>` in index.html.
- **Brand color `#3957ff`** — use as Tailwind theme token. All accent lines, icons, hover states, section subtitles use this.
- **Buttons have 0px border-radius** — all buttons are sharp/square corners.
- **Hero button hover** — pseudo-element slides in from left (scaleX 0→1). Use Tailwind group-hover or CSS transition.
- **Section subtitles** — uppercase Josefin Sans 18px, `#3957ff`, with a 54px × 2px line before the text (use ::before pseudo or a div).
- **Practice area cards** — white bg, 1px `#dddddd` border, icon in `#3957ff`, hover lifts with shadow.
- **About section** — image on left, text on right. Use a background image approach or an <img>.
- **Contact form** — dark background image treatment. Form fields: plain borders, white bg.
- **CTA / Testimonial / Footer** — all use dark background images. Implement as CSS background-image with dark overlay.
- **Testimonial quote icon** — white SVG double-quote, inline in component.
- **Team photos** — use `https://picsum.photos/seed/casepoint-team-{1,2,3}/400/400`.
- **Blog images** — use `https://picsum.photos/seed/casepoint-blog-{1,2}/600/400`.
- **Footer copyright** — replace Colorlib attribution with "Made with ❤️ by Component Dock" linking to `https://www.componentdock.com/`.
- **No ColorLib references in app code** — all provenance lives only in the spec.
