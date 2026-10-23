# Ledgerly — Design Notes

Reference: **Cryptos** — `https://colorlib.com/wp/template/cryptos/`  
Live preview: `https://preview.colorlib.com/theme/cryptos/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cryptos-free-template.jpg  
Shipped: https://ledgerly.free.componentdock.com

Ledgerly is a cryptocurrency and mining website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Open Sans**

## Design tokens (`apps/ledgerly/src/index.css` `@theme`)

| token              | value                      | role         |
| ------------------ | -------------------------- | ------------ |
| `--color-navy-50`  | `#eef0ff`                  | navy 50      |
| `--color-navy-100` | `#d9ddff`                  | navy 100     |
| `--color-navy-200` | `#b3bbff`                  | navy 200     |
| `--color-navy-300` | `#8c99ff`                  | navy 300     |
| `--color-navy-400` | `#6677ff`                  | navy 400     |
| `--color-navy-500` | `#4055ff`                  | navy 500     |
| `--color-navy-600` | `#2a3fcc`                  | navy 600     |
| `--color-navy-700` | `#1f2f99`                  | navy 700     |
| `--color-navy-800` | `#151f66`                  | navy 800     |
| `--color-navy-900` | `#0d104d`                  | navy 900     |
| `--color-navy-950` | `#070830`                  | navy 950     |
| `--color-gold-50`  | `#fff8e6`                  | gold 50      |
| `--color-gold-100` | `#ffedb3`                  | gold 100     |
| `--color-gold-200` | `#ffe280`                  | gold 200     |
| `--color-gold-300` | `#ffd74d`                  | gold 300     |
| `--color-gold-400` | `#ffcc1a`                  | gold 400     |
| `--color-gold-500` | `#ffaf02`                  | gold 500     |
| `--color-gold-600` | `#cc8c02`                  | gold 600     |
| `--color-gold-700` | `#996901`                  | gold 700     |
| `--color-gold-800` | `#664601`                  | gold 800     |
| `--color-gold-900` | `#332300`                  | gold 900     |
| `--color-surface`  | `#eef3f6`                  | surface      |
| `--color-heading`  | `#292929`                  | heading      |
| `--color-muted`    | `#8e8e8e`                  | muted        |
| `--font-heading`   | `'Montserrat', sans-serif` | font heading |
| `--font-body`      | `'Open Sans', sans-serif`  | font body    |

## Document order

| #   | component            | spec requirement        | notes                   |
| --- | -------------------- | ----------------------- | ----------------------- |
| 1   | `TopHeader`          | Top header bar          | see fidelity note below |
| 2   | `Navbar`             | Navigation bar          | see fidelity note below |
| 3   | `Hero`               | Hero section            | see fidelity note below |
| 4   | `Features`           | Features section        | see fidelity note below |
| 5   | `About`              | About section           | see fidelity note below |
| 6   | `CurrencyCalculator` | Currency calculator     | see fidelity note below |
| 7   | `BlogAndPrices`      | Blog and prices         | see fidelity note below |
| 8   | `Newsletter`         | Newsletter subscription | see fidelity note below |
| 9   | `Footer`             | Footer                  | see fidelity note below |

## Section-by-section fidelity

### `TopHeader`

The system SHALL render a dark top header bar with "Welcome to Ledgerly" text and navigation links (Login | Register, FAQ, Earn Money).

### `Navbar`

The system SHALL render a sticky navbar with the Ledgerly logo, navigation links (Home, Currencies, About, Contact), a newsletter email input with Subscribe button, and a mobile hamburger menu toggle.

### `Hero`

The system SHALL render a hero section with a dark gradient background, a heading "Take a step into the Crypto World", a subtitle, a "Read More" CTA button, and a coin illustration.

### `Features`

The system SHALL render a features section with a centered heading "Let's change the world together" and a 4-column grid of feature cards (Fast & Easy, No Strings Attached, Small Commissions, 100% Secure), each with an icon, description, and "Read More" button.

### `About`

The system SHALL render a two-column about section with an image on the left and a heading, description, and "Read More" CTA on the right.

### `CurrencyCalculator`

The system SHALL render a dark parallax section with a "Cryptocurrency Calculator" heading and two currency conversion forms with amount inputs and currency selects.

### `BlogAndPrices`

The system SHALL render a two-column section with blog posts on the left (thumbnail, title, category, date, excerpt) and a cryptocurrency price table on the right showing 10 coins with rank, name, symbol, and price (with increase/decrease color).

### `Newsletter`

The system SHALL render a newsletter section with a heading, description, email input, and Subscribe button.

### `Footer`

The system SHALL render a dark parallax footer with three columns (brand logo with social icons, recent posts, quick links) and a bottom bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/ledgerly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ledgerly/public/CNAME` = `ledgerly.free.componentdock.com`
  and the package `homepage` = `https://ledgerly.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/cryptos/ — HTTP 200 on 2026-10-23; measured `style.css` (38,127 bytes).

- Hex census: `#ffaf02` 41, `#292929` 27, `#0d104d` 12, `#28408b` 8, `#eef3f6` 12, `#8e8e8e` 10 (count = rules containing the literal).
- Typefaces: Body: `Montserrat`; Headings: Montserrat bold.
- Radii: `0` (9) — square buttons and cards; `4px` (1).
- Section order (shipped): `TopHeader -> Navbar -> Hero -> Features -> About -> CurrencyCalculator -> BlogAndPrices -> Newsletter -> Footer`.

### Deltas measured against the shipped app

- `--color-navy-500` is `#4055ff` (bright blue) and occurs **0 times** in the stylesheet — the reference navy family is `#0d104d` (deep) to `#28408b` (mid); the app's navy scale should be re-anchored.
- The reference body face is **Montserrat**; the app sets `--font-body: Open Sans`.
