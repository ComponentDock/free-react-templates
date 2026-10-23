# Taply — Design Notes

Reference: **Mobapp** — `https://colorlib.com/wp/template/mobapp/`  
Live preview: `https://preview.colorlib.com/theme/mobapp/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/MobApp-free-one-mobile-app-landing-page.jpg  
Shipped: https://taply.free.componentdock.com

Taply is a single-page mobile-app landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;700**

## Design tokens (`apps/taply/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e54595` | brand |
| `--color-brand-2` | `#fd378e` | brand 2 |
| `--color-hero-1` | `#3c0876` | hero 1 |
| `--color-hero-2` | `#fa0076` | hero 2 |
| `--color-brand-purple` | `#633991` | brand purple |
| `--color-lavender` | `#faf6fb` | lavender |
| `--color-eyebrow` | `#998a9b` | eyebrow |
| `--color-muted` | `#959094` | muted |
| `--color-popular` | `#ce75b4` | popular |
| `--color-primary-50` | `#fdf0f6` | primary 50 |
| `--color-primary-100` | `#fbd9e8` | primary 100 |
| `--color-primary-200` | `#f7b0d1` | primary 200 |
| `--color-primary-300` | `#f083b6` | primary 300 |
| `--color-primary-400` | `#e9559d` | primary 400 |
| `--color-primary-500` | `#e54595` | primary 500 |
| `--color-primary-600` | `#d63987` | primary 600 |
| `--color-primary-700` | `#b32a6e` | primary 700 |
| `--color-primary-800` | `#8c1f56` | primary 800 |
| `--color-primary-900` | `#66163f` | primary 900 |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Original font: 'Rubik', sans-serif (Google Fonts, weights 300/400/500/700). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `ClientLogos` | Client logos | see fidelity note below |
| 4 | `Features` | Features | see fidelity note below |
| 5 | `Discover` | Discover our App | see fidelity note below |
| 6 | `FeatureBlocks` | Alternating feature blocks | see fidelity note below |
| 7 | `LaunchApp` | Launch your App | see fidelity note below |
| 8 | `UiSteps` | UI steps | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Screenshots` | App Screenshots | see fidelity note below |
| 11 | `Pricing` | Pricing | see fidelity note below |
| 12 | `Faq` | FAQ | see fidelity note below |
| 13 | `DownloadCta` | Download CTA + contact | see fidelity note below |
| 14 | `Contact` | Download CTA + contact | see fidelity note below |
| 15 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the gradient hero with a brand, five uppercase anchor links, and a "Download" button.

### `Hero`
The system SHALL render a purple-to-pink gradient hero with a large light headline, a subtext paragraph, and a centered phone mockup image.

### `ClientLogos`
The system SHALL render a white strip of greyed-out client logos between the hero and the features section.

### `Features`
The system SHALL render a light-lavender (`#faf6fb`) section with the eyebrow "HIGHLIGHTS", the heading "Features you love", and three icon cards: Simple, Customize, Secure.

### `Discover`
The system SHALL render a two-column section with "Discover our App" text and a "Read more" link on the left, and a "Do more with our app" checklist with four items on the right.

### `FeatureBlocks`
The system SHALL render four alternating image + text blocks (light-bg and white, image side flipping) with the headings "Communicate with ease", "Scheduling when you want", "Realtime Messaging service", and "Live chat when you needed".

### `LaunchApp`
The system SHALL render a white section with a rocket icon, the heading "Launch your App", a paragraph, a "Read more" button, and a dual-phone image.

### `UiSteps`
The system SHALL render a lavender section with three numbered steps (Create an Account, Share with friends, Enjoy your life) beside a phone image.

### `Testimonials`
The system SHALL render a "What our Customers Says" section with testimonial cards, each with a quote, an avatar, a name, and a country.

### `Screenshots`
The system SHALL render a light-bg "App Screenshots" section with a carousel of phone-screen images.

### `Pricing`
The system SHALL render an "Upgrade to Pro" pricing section with three tier cards — PERSONAL $14/m, FOR TEAMS $29/m (highlighted), ENTERPRISE $249/m — each with a feature list and a "Choose this Plan" button.

### `Faq`
The system SHALL render a "Frequently Asked Questions" section with an accordion of four questions and answers.

### `DownloadCta`
The system SHALL render a gradient "Download Anywhere" section with App Store and Google Play buttons, a compatibility footnote, and the contact info (address, email, phone).

### `Contact`
The system SHALL render a gradient "Download Anywhere" section with App Store and Google Play buttons, a compatibility footnote, and the contact info (address, email, phone).

### `Footer`
The system SHALL render a centered footer with a copyright line and PRESS / TERMS / PRIVACY links.

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
- **Provenance ban.** No file under `apps/taply/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/taply/public/CNAME` = `taply.free.componentdock.com`
  and the package `homepage` = `https://taply.free.componentdock.com`.
