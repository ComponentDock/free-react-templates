# Sonata — Design Notes

Reference: **Solmusic** — `https://colorlib.com/wp/template/solmusic/`  
Live preview: `https://preview.colorlib.com/theme/solmusic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/solmusic-free-template.jpg  
Shipped: https://sonata.free.componentdock.com

Sonata is a single-page music-streaming landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**

## Design tokens (`apps/sonata/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fc0254` | brand |
| `--color-brand-dark` | `#e0024b` | brand dark |
| `--color-navy` | `#0a183d` | navy |
| `--color-navy-dark` | `#08192d` | navy dark |
| `--color-navy-2` | `#1c294a` | navy 2 |
| `--color-indigo-2` | `#383b70` | indigo 2 |
| `--color-muted` | `#6a7080` | muted |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header and navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Intro` | Intro band ("Unlimited Access") | see fidelity note below |
| 4 | `How` | How it works | see fidelity note below |
| 5 | `Concept` | Concept section | see fidelity note below |
| 6 | `Subscription` | Subscription section | see fidelity note below |
| 7 | `Premium` | Premium section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navy bar (`#08192d`) spanning the full width: brand wordmark on the left ("Sonata" — accent-colored first word + white rest, matching the "SOL/MUSIC" split-wordmark pattern), nav links (Home, About, Pages, Category, Playlist, Artist, Blog, Contact — white, 16px), and a user panel on the right ("Help", "Login" white links and "Create an account" in accent pink).

### `Hero`
The system SHALL render a full-width navy (`#0a183d`) slider with two slides, each with a left text column and a right illustration column. Slide 1: "Music for everyone." with "Music" in accent pink, a muted-white paragraph, and buttons "Download Now" (primary pink pill) + "Start free trial" (indigo `#383b70` pill). Slide 2: "Listen to new music." with "Listen to" in accent pink and the same button pair. Slider dots SHALL indicate the active slide.

### `Intro`
The system SHALL render a white section with two columns: left headline "Unlimited Access to 100K tracks" (60px), right paragraph of muted text + a "Try it now" primary pink pill button.

### `How`
The system SHALL render a dark navy section (with optional cover image) titled "How it works" with three step items, each with a 57px pink circular icon, a heading, and muted-white body text: "Create an account", "Choose a plan", "Download Music".

### `Concept`
The system SHALL render a white section titled "Our Concept & artists" (title left, paragraph right) with a 4-column grid of image cards: rounded-corner image (`border-radius: 40px`), small heading below. Items: "Soul Music", "Live Concerts", "Dj Sets", "Live Streems" (keep the source's typo "Streems" or fix to "Streams" — implementer's choice, note in PR).

### `Subscription`
The system SHALL render a dark navy section: left column with headline "Subscription from $15/month" (white), sub-headline "Start a free trial now" in accent pink, muted-white paragraph, and a "Try it now" primary pill. The right column SHALL be a rounded (`border-radius: 42px`) `#1c294a` panel listing six checkmarked perks: Play any track, Listen offline, No ad interruptions, Unlimited skips, High quality audio, Shuffle play.

### `Premium`
The system SHALL render a white section titled "Why go Premium" (left) with a paragraph (right) and a 4-column grid of circular-image features (190px image, `border-radius: 50%`, heading + short muted caption): "No ad interruptions", "High Quality", "Listen Offline", "Download Music".

### `Footer`
The system SHALL render a dark navy (`#0a183d`) footer: brand + short about text + social icon links (muted `#6a7080`); three link columns — "About us" (Our Story, Sol Music Blog, History), "Products" (Music, Subscription, Custom Music, Footage), "Playlists" (Newsletter, Careers, Press, Contact); the copyright bar SHALL link to `https://www.componentdock.com/` branded as "Component Dock" (mandatory — replaces the source's Colorlib credit).

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
- **Provenance ban.** No file under `apps/sonata/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sonata/public/CNAME` = `sonata.free.componentdock.com`
  and the package `homepage` = `https://sonata.free.componentdock.com`.
