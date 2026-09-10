# Alpine (ColorLib Bobsled) — Tasks & Design Notes

> Recreation of ColorLib "Bobsled"
> (https://colorlib.com/wp/template/bobsled/) under the NEW name
> **Alpine** (mountain/winter sport theme, tying to bobsled), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Bobsled" — creative business website template.
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/bobsled/`
  (HTTP 200, ~18 KB HTML + `css/main.css` ~33 KB parsed for tokens).
- **Visual design (screenshot `bobsled-creative-website-template.jpg`):**
  Blue-to-teal gradient hero section with bold white uppercase headline,
  white outlined CTA button, laptop mockup image. White "Working Process"
  section with 4 icon cards connected by arrows. Gradient background
  featured area with 3 white-text feature cards. Alternating portfolio
  layout for "Remarkable Works." Gradient story section. White newsletter
  form. Gradient contact form with white inputs. Clean footer with
  address/email/phone columns + social icons.
- **Structure (1:1, section order):**
  1. **Header** — Logo left, nav (Home, Generic, Elements) right, hamburger
     icon. Transparent overlay on hero gradient.
  2. **Hero/Banner** — `linear-gradient(0deg, #3e69fe, #4cd4e3)`, height
     540px. H1 "Don't look anywhere, This is the best place on web"
     (white, uppercase, Poppins). Subtext paragraph. "Get Started" CTA
     button (white bg, blue text, 20px radius, arrow icon via
     `lnr-arrow-right`).
  3. **Working Process** — White bg, centered title "Our Working Process"
     with subtext. 4 steps horizontal: Researching (funnel), Wireframing
     (layers), Prototyping (paw), Final Design (smiley). Each step has a
     colored icon circle. Connected by arrow images.
  4. **Featured Area** — Gradient bg, title "Our Exclusive Features"
     (white). 3 col-md-4 cards: thumbnail bg-image, title, paragraph
     (white), "Read More" button (white bg, gradient on hover).
  5. **Remarkable Works** — White bg, title "Remarkable Works". 3 items
     alternating: left image (col-lg-7) + right text (col-lg-5), then
     reversed. Each: bg-image thumbnail, title "Vector Illustration",
     description, "View Project" button (border 1px solid #eee).
  6. **Story Area** — Gradient bg, col-lg-1 spacer + col-lg-7 text. Uppercase
     heading "From the part of beginning", paragraph, "Get Started" CTA
     with arrow icon.
  7. **Subscription Area** — White bg. Left: title "Subscribe for our
     Newsletter" + subtitle. Right: email input + "Get Started" submit
     button with arrow.
  8. **Contact Form** — Gradient bg, title "Keep in Touch" (white). Form:
     name input (col-lg-5), email input (col-lg-5), textarea (col-lg-10),
     "Send Message" submit button right-aligned (col-lg-10). All inputs
     white placeholders.
  9. **Footer Widget Area** — Transparent bg. 3 col-md-4: Address (text),
     Email Address (2 mailto links), Phone Number (2 tel links).
  10. **Footer** — Logo left, copyright center, social icons right
      (Facebook, Twitter, Dribbble, Behance). Links to
      https://www.componentdock.com/.

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Font family | Poppins (300, 500, 600) | All text |
| Primary gradient | linear-gradient(0deg, #3e69fe, #4cd4e3) | Hero, featured, story, contact, btn::after |
| Primary blue | #3e69fe | Headings, button text, icons |
| Primary teal | #4cd3e3 | Gradient endpoint, accent |
| Accent colors | #6382e6, #a367e7, #e66686, #f09359, #73fbaf | Feature icon boxes |
| Page bg | #f9f9ff | Body background |
| White | #fff | Card backgrounds, featured text |
| Text dark | #222222 | Body text on white |
| Text secondary | #777777 / #797979 | Subtitles, descriptions |
| Button radius | 20px | All primary buttons |
| Button padding | 0 30px | Primary buttons |
| Button line-height | 40px | Primary buttons |
| Section padding | 90–100px vertical | All sections |

## Implementation tasks (implementer stream)

- [ ] Scaffold `apps/alpine` (copy simplest existing app; rename package to
      `@free-react-templates/alpine`; `injectUiSource()` in vite.config.ts)
- [ ] `npm install` at root; verify `grep -c "free-react-templates/alpine"`
      package-lock.json before committing
- [ ] `src/index.css`: `@theme` with `--color-primary-*` blue/teal scale,
      Poppins font link in index.html
- [ ] Header (logo, nav links, hamburger menu for mobile)
- [ ] Hero (gradient bg, H1, subtext, "Get Started" CTA with arrow icon)
- [ ] Working Process (4 steps with icons + arrow connectors)
- [ ] Featured Area (gradient bg, 3 feature cards with thumbnails)
- [ ] Remarkable Works (3 alternating portfolio items with bg-images)
- [ ] Story Area (gradient bg, text, CTA with arrow)
- [ ] Subscription (email form + newsletter title)
- [ ] Contact Form (gradient bg, name/email/message inputs, send button)
- [ ] Footer Widget Area (3 columns: address, email, phone)
- [ ] Footer (logo, copyright, social icons, Component Dock link)
- [ ] Tests per section; 100% coverage via `npm run verify:app alpine`
- [ ] Commit `feat: Alpine — business template (ColorLib Bobsled)`,
      PR → merge immediately, deploy to Surge, update TEMPLATES.md + README
