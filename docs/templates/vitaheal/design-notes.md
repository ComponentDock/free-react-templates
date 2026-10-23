# Vitaheal — Design Notes

Reference: **Health** — `https://colorlib.com/wp/template/health/`  
Live preview: `https://preview.colorlib.com/theme/health/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/health-free-template.jpg  
Shipped: https://vitaheal.free.componentdock.com

Recreation of ColorLib **Health** (`https://colorlib.com/wp/template/health/`, preview: `https://preview.colorlib.com/theme/health/`). A full-width medical/healthcare landing page with hero, service info boxes, appointment booking, CTA banner, services grid, departments carousel, FAQ accordion, latest news, and a comprehensive footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/vitaheal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal-50` | `#e6f7f1` | teal 50 |
| `--color-teal-100` | `#b3e8d8` | teal 100 |
| `--color-teal-200` | `#80d9bf` | teal 200 |
| `--color-teal-300` | `#4dcaa6` | teal 300 |
| `--color-teal-400` | `#32c69a` | teal 400 |
| `--color-teal-500` | `#2ab08a` | teal 500 |
| `--color-teal-600` | `#229a78` | teal 600 |
| `--color-teal-700` | `#1a7d60` | teal 700 |
| `--color-teal-800` | `#136049` | teal 800 |
| `--color-teal-900` | `#0b4332` | teal 900 |
| `--color-coral-300` | `#ffb999` | coral 300 |
| `--color-coral-400` | `#ffa07f` | coral 400 |
| `--color-coral-500` | `#ff6347` | coral 500 |
| `--color-ink-700` | `#404040` | Neutral surfaces + text |
| `--color-ink-800` | `#4c4c4c` | ink 800 |
| `--color-ink-900` | `#333333` | ink 900 |
| `--color-mute-400` | `#a5a5a5` | mute 400 |
| `--color-mute-500` | `#929991` | mute 500 |
| `--color-mute-600` | `#838383` | mute 600 |
| `--color-band-50` | `#f7f7f7` | band 50 |
| `--color-primary-50` | `#e6f7f1` | Primary scale for shared ui Button/ButtonLink `primary` variants |
| `--color-primary-100` | `#b3e8d8` | primary 100 |
| `--color-primary-200` | `#80d9bf` | primary 200 |
| `--color-primary-300` | `#4dcaa6` | primary 300 |
| `--color-primary-400` | `#32c69a` | primary 400 |
| `--color-primary-500` | `#2ab08a` | primary 500 |
| `--color-primary-600` | `#229a78` | primary 600 |
| `--color-primary-700` | `#1a7d60` | primary 700 |
| `--color-primary-800` | `#136049` | primary 800 |
| `--color-primary-900` | `#0b4332` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat (body + headings) — Google Fonts via index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header displays navigation and contact info | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTA | see fidelity note below |
| 3 | `InfoBoxes` | Info boxes with consultation, emergency, and appointment | see fidelity note below |
| 4 | `CtaBanner` | CTA banner with appointment prompt | see fidelity note below |
| 5 | `Services` | Services section with 6 service icons | see fidelity note below |
| 6 | `Departments` | Departments carousel | see fidelity note below |
| 7 | `FaqNews` | FAQ accordion and Latest News | see fidelity note below |
| 8 | `Footer` | Footer with about, contact form, hours, and bottom bar | see fidelity note below |

## Section-by-section fidelity

### `Header`
Users SHALL see a top bar with the Vitaheal+ logo, quick links (Help Desk, Emergency Services, Appointment), and a phone number. Below, a sticky nav bar with Home, About Us, Services, News, Contact links and a search icon.

### `Hero`
Users SHALL see a full-width hero with a background image overlay, a headline "Medical Services that you can trust", descriptive text, and a "Read More" call-to-action button.

### `InfoBoxes`
Users SHALL see three info boxes: Free Consultations (image + text + link), Emergency Care (image + text + link), and Make an Appointment (form with Department, Doctor selects, Name input, Phone input, and submit button).

### `CtaBanner`
Users SHALL see a parallax-background CTA section with "Make an appointment with one of our professional Doctors." headline and a "Call Now" button.

### `Services`
Users SHALL see a "Our Services" section with 6 service items in a 3-column grid: Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology — each with an icon, title, and description.

### `Departments`
Users SHALL see an "Our Departments" section with horizontally scrollable department cards (Neonatology, Dentistry, Orthopedics, Laboratory), each with an image and "Read More" link.

### `FaqNews`
Users SHALL see a FAQ section with 3 expandable accordion items on the left, and a Latest News section with 3 blog post previews on the right.

### `Footer`
Users SHALL see a footer with: about section (logo, description, social icons), quick contact form (Name, Email, Message, Send button), opening hours schedule, and a bottom bar with nav links, quick links, phone number, and "Made with Component Dock" credit linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/vitaheal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitaheal/public/CNAME` = `vitaheal.free.componentdock.com`
  and the package `homepage` = `https://vitaheal.free.componentdock.com`.
