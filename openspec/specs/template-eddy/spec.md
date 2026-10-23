# Template: Eddy (Hotel / Resort)

## Purpose

Eddy is a single-page hotel and resort template with a photographic hero,
service features, a gallery, an about block, guest testimonials, a
book-your-stay availability form and a latest-news row.

It is an original React recreation of the ColorLib "The River" free
template (source: https://colorlib.com/wp/template/theriver/), built
under a DIFFERENT name (**Eddy**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The reference is a calm, image-led resort page: Playfair Display serif
headings over Roboto body copy, a warm salmon `#ffa37b` brand accent on a
`#393939` charcoal ink, generous photography and a dark multi-column
footer (Address, Reservations, Newsletter, Follow Us). The recreation
keeps the same section order and the reference's headline copy
("Relax, Unwind, and Enjoy", "Book Your Stay").

## Design Tokens

| Token         | Value                  | Notes                              |
| ------------- | ---------------------- | ---------------------------------- |
| Heading font  | `'Playfair Display', serif` | Section headings and card titles |
| Body font     | `'Roboto', sans-serif` | Paragraphs, labels                 |
| Brand         | `#ffa37b`              | Accent, links, active state        |
| Ink           | `#393939`              | Headings and body on light sections|
| Surface       | `#ffffff`              | Page and card background           |
| Footer        | dark charcoal          | Four-column footer block           |

## Requirements

### Requirement 1: Navbar And Hero

The page SHALL open with a navbar (brand, links, mobile toggle) and a
full-width hero whose headline is `Relax, Unwind, and Enjoy`.

#### Scenario: Visitor opens the page

- **WHEN** the page loads
- **THEN** a `banner` landmark shows the navbar and hero image
- **AND** the hero renders exactly one h1

### Requirement 2: Services And Gallery

The page SHALL render an `Our Services` section and an `Our Gallery`
section, the latter as an image grid where every image has meaningful
alt text.

#### Scenario: Visitor browses the gallery

- **WHEN** the visitor scrolls to `Our Gallery`
- **THEN** each image in the grid exposes descriptive alt text (e.g.
  `Beach lounge area`)

### Requirement 3: About And Testimonials

The page SHALL include an about block headlined `The River` with an
experience counter (`10 years of excellence`) and a testimonial section
whose cards carry a quote, guest name (`Samantha Brown`) and role
(`Travel Blogger`).

#### Scenario: Visitor reads the guest quotes

- **WHEN** the visitor reaches the testimonials
- **THEN** each quote is paired with the guest's name and role

### Requirement 4: Booking Enquiry

The booking section SHALL be headed `Book Your Stay` and collect arrival
date, departure date, adults, children and room count. Both date fields
SHALL be `required` so the browser blocks an incomplete submission, and
submitting SHALL be handled client-side (no navigation, no backend).

#### Scenario: Visitor requests availability

- **WHEN** the visitor fills the dates and guest counts and presses
  `CHECK AVAILABILITY`
- **THEN** the submit is intercepted (`preventDefault`) and the page does
  not navigate away

#### Scenario: Visitor submits without dates

- **WHEN** either date field is empty and the form is submitted
- **THEN** the browser's required-field validation blocks the submission

### Requirement 5: Latest News And Component Dock Footer

The page SHALL render a `Latest News` card row and a footer with
`Address`, `Reservations`, `Newsletter` and `Follow Us` columns that
links `https://www.componentdock.com/`.

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reaches the footer
- **THEN** a link to `https://www.componentdock.com/` is present
- **AND** the newsletter field accepts an email and reports success

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/eddy/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/eddy/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/eddy`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% for `apps/eddy`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/eddy`)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` is `eddy.free.componentdock.com` and `homepage` matches
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
