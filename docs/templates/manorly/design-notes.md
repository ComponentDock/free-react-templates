# Manorly — Design Notes

Reference: **Dreamrs** — https://colorlib.com/wp/template/dreamrs/
Live preview: https://preview.colorlib.com/theme/dreamrs/ (HTTP 200, 36,309 B, page title `Real_state || Home`, read 2026-10-24 with `curl -4`)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dreamrs-free-template.jpg (1200×946, header + hero)
Token authority: `theme/dreamrs/css/style.css` (171,589 B, sha256 `f924622caf81533c161556f6ced1b63ad6e6a349d9b22b587f82d1fec1f1d30b`)
Spec: `openspec/specs/template-manorly/spec.md`
Shipped: https://manorly.free.componentdock.com

A city real-estate agency page in red (`#ff3334`) on white. Translucent white header over a 900px
aerial photograph washed `5deg #f73347 → rgba(18,1,248,.2)`; a left-aligned "Dream / Properties Now
In City" hero; a two-column about band with counters; a filterable project portfolio; a four-card
grey service grid that closes on a red "Hello City We are leader in Services." call-out; a
four-card luxury-apartment gallery; three blog teasers; a `#030305` four-column footer.

Provenance note: `TEMPLATES.md` rows **106**, **1967** and **2587** were marked `[x]` with
`[Skyline]`, but `apps/skyline` recreates **Rooftop** — its spec names that design and its body
carries the restaurant copy. The row-multiplicity census (`docs/row-multiplicity.md` §2,
`verify-row-multiplicity.py --network`) scored skyline's copy 5 exclusive hits for `dreamrs`
against 16 for `rooftop`: verdict `APP-WRONG-DESIGN`, so the `[x]` was false and this design had
never been built. No spec claimed `template/dreamrs` either. This run claims the row and ships the
design as **Manorly** (`manorly` ≠ `dreamrs`, rule 5 holds).

## Document order

| #   | band          | ground                                                        | content                                                                                                                                  |
| --- | ------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | header        | `#fff` at `opacity: .9`, absolute over the hero               | hexagon-and-house mark + wordmark; `Home · About · Services · Blog ▾ · Pages ▾ · Contact Us`; `Blog` → `Blog`, `Single Blog`; `Pages` → `Project`, `Apartment`, `Elements` |
| 2   | hero          | aerial photograph + `5deg #f73347 → rgba(18,1,248,.2)`, `900px` | eyebrow "Dream"; 60px+ white headline "Properties / Now In City"; one lorem sentence; no CTA                                             |
| 3   | about         | `#fff`, `100px 0`                                             | photo with a red frame left (6 cols); label "about us", "Hello City We are leader in **properties.**", paragraph, **Learn More**, counters `100` project · `300` clients · `150` member right |
| 4   | portfolio     | `#f9f9ff` mist, `pt_30` + bottom padding                      | label "our project"; "Hello City We are leader in **Projects.**"; tabs `Architecture · Interior · Exterior · Drafting Landing`; ten cards with `Exclusive Project` / `new Project` badges and the caption "Etiam tortor aliquet habitant" |
| 5   | services      | `#fff`                                                        | label "our services"; four `#f4f4f4`, `35px`-padded cards — `House Planning`, `House Build`, `Design & Build`, `Design & Build` (reference repeat) |
| 6   | services CTA  | `#ff3334`, `100px 0`                                          | "Hello City We are leader in **Services.**", paragraph, **Learn more** (links back to the services grid)                                   |
| 7   | gallery       | `#fff`, `70px 0 50px`                                         | "Luxuries **Apartment**"; four cards — photo, `Home Apartment` / `Detached House For Sale`, `04` beds, `03` baths, `2400 sqft`, heart control |
| 8   | blog          | `#fff`, bottom padding                                        | label "our blog"; three teasers — `Apartment`, `March 20, 2019`, title, `2 comment` · `0 like` (later cards `Mar 12`)                      |
| 9   | footer        | `#030305`, `130px 0 25px`                                     | About Us · Contact Info · Important Link · Newsletter (field + button); copyright bar with the Component Dock credit                      |

## Tokens

| token          | value                                                     | where the reference paints it                                                                    |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| brand          | `#ff3334`                                                 | `.btn_1:hover`, `.section_tittle h2::after`, `.portfolio_area h2 span`, footer link hovers (61)  |
| brand deep     | `#f73347`                                                 | first stop of the hero's `linear-gradient(5deg, …)`                                              |
| hero wash end  | `rgba(18, 1, 248, .2)`                                    | second stop of the same gradient                                                                 |
| ink            | `#000`                                                    | headings, `.section_tittle h2`                                                                   |
| footer         | `#030305`                                                 | `.footer_part` background                                                                        |
| mist           | `#f9f9ff`                                                 | light panels (27 declarations)                                                                   |
| panel          | `#f4f4f4`                                                 | `.service_part .single_service_text`, resting `.btn_1`                                           |
| muted          | `#999999`                                                 | body copy (9 declarations)                                                                       |
| face           | `Poppins`, `sans-serif`                                   | 5 declarations; Google Fonts `<link>`, never the shipped woff                                    |
| button         | `19px 40px`, 16px/700, uppercase, `5px` radius            | `.btn_1` — hover: `#ff3334` ground, white text, `50px` radius                                    |
| section label  | 24px/700 title + 180×1px rule + red keyword span          | `.section_tittle h2` in about/portfolio/services/gallery/blog                                    |
| service card   | `#f4f4f4`, `35px` padding                                 | `.service_part .single_service_text`                                                             |
| hero           | `900px`, cover, overlay gradient                          | `.banner_part`, `.banner_part:before`                                                            |
| radii present  | `3px` (fields), `5px` (buttons), `8px` (cards), `50%` (circles) | sheet census                                                                                |

`#f0e9ff` (13), `#415094` (7) and `#4cd3e3` (7) belong to the bundled Bootstrap kit's `.genric-btn`
and `.blog_right_sidebar` widgets, which this landing page never renders; the recreation does not
use them.

## Assets

Every image is a deterministic placeholder (`picsum.photos/seed/manorly-*`); the reference's `img/`
tree (banner overlay, about, ten project shots, four gallery shots, three blog shots, logo,
favicons) is not copied. Icons come from `lucide-react`; the reference ships themify, flaticon and
font-awesome subsets, none copied. The logo is drawn inline as an SVG mark.

## Behaviour

- Header: `Blog` and `Pages` are click disclosures (`aria-expanded`); the mobile panel is a second
  disclosure listing the same links and closes when a link is followed.
- Portfolio: one active category at a time (`aria-pressed`), ten cards distributed over four
  categories, and a live count of the visible projects.
- Gallery: each card's heart toggles "Like"/"Liked" with `aria-pressed`.
- Newsletter: validates a non-empty address, then confirms by naming it; error and confirmation are
  mutually exclusive.

## Deviations

- **Copy.** Lorem ipsum is kept as filler; the reference's "Proparties" typo is corrected to
  "Properties".
- **Footer links.** The reference's shop widgets (`WHMCS-bridge`, `Search Domain`, `My Account`,
  `Shopping Cart`, `Our Shop`) are replaced by the template's own anchors; contact details are the
  recreation's own (`hello@manorly.com`), and the copyright bar credits **Component Dock** instead
  of the original author.
- **Services repeat.** The reference repeats "Design& Build" for the third and fourth cards; the
  recreation keeps the repeat rather than inventing a fifth service.
- **Animations.** The reference loads `animate.css` and owl-carousel; the recreation ships no
  animation library and no carousel (the project grid is a static grid, the blog a static row).
