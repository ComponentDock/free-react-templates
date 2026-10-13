# Gatherly — design notes (replication research)

**Source:** ColorLib *MeetUp* — `https://colorlib.com/wp/template/meetup/`
**Live preview:** `https://preview.colorlib.com/theme/meetup/` (200, **46,056 B**, `curl -4`, 2026-10-13)
**Stylesheet:** `https://preview.colorlib.com/theme/meetup/css/style.css` (**81,607 B** — token authority)
**App:** `apps/gatherly` · **new name:** gatherly (never the source name)
**Reference screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/meetup-free-template.jpg`

> Live readings above are byte counts on purpose: the preview is one of the
> Google-font-injected ColorLib pages, whose injected `@font-face` block is re-ordered per
> request, so a raw page sha256 does not reproduce. The stylesheet is stable.

## Visual design (what the reference looks like)

A corporate **conference/event** one-pager. White page, generous white space, **one brand
blue (`#033fff`)** doing all the work — links, tab pills, primary buttons, hover states —
lifted by an **amber `#fbb901`** accent used sparingly (heading accents, the highlighted
pricing tier, footer hover). Typography is **Lato** at 16 px with tight, uppercase-ish
section eyebrows ("Welcome") above centred section headings; body copy is grey `#6c757d`.

Rhythm of light/dark: a photographic full-height hero (white wash overlay) → white countdown
+ about + counter → a **4-up full-bleed image gallery** (no gutters) → a photographic
subscribe band with a dark/white overlay → white speakers → **grey `bg-light` schedule** →
white pricing → **grey `bg-light` blog** → white contact + map → dark footer. Two bands of
`#f8f9fa` break the white run in the middle and again near the end — keep that alternation.

Shapes: pill CTAs (`border-radius: 30px`) for tickets and schedule pills, 5 px cards/inputs,
`border-radius: 50%` circles for avatars and icon discs, soft `rgba(0,0,0,.1)` shadows. Cards
(speakers, tickets, blog) lift on hover; speaker portraits reveal a coloured social overlay.

## Section map (DOM order, verified 2026-10-13)

| # | Reference markup | What it holds |
| - | ---------------- | ------------- |
| 1 | `#ftco-loader` | preloader overlay — **last** node in the DOM, first thing painted |
| 2 | `#ftco-nav` | eyebrow "Welcome to MeetUp." + 7 anchors + "Buy Ticket" |
| 3 | `section.hero.js-fullheight` `#home-section` | 2-slide carousel: "Annual Conference 2019" / "Business Conference 2019", date line, "Get Ticket" + "Watch Video" |
| 4 | `#timer` (`days`,`hours`,`minutes`,`seconds`) | event countdown |
| 5 | `ftco-about ftco-counter ftco-no-pb img` | "About Me", prose, `data-number="50"` counter, `about-1.jpg`, "Join Our Event" |
| 6 | `ftco-section ftco-no-pb ftco-no-pt` | `gallery-1.jpg` … `gallery-4.jpg`, one unguttered row |
| 7 | `ftco-section ftco-subscribe img` | `bg_1.jpg` + `.overlay`, white heading block, `placeholder="Enter email address"` |
| 8 | `ftco-section ftco-speakers` | "MeetUp Speakers": John Wilson (CEO, Founder), Robert Wills (Businessman), Mike Smith (Entrepreneur), Adrian Henderson (Web Developer) — cards duplicated for the carousel |
| 9 | `ftco-section bg-light` | "Program Schedule", pills "Day 01 21 November 2019" … "Day 04" → `#v-pills-1..4`; rows `08:00AM - 10:00AM` + session title + "— Brett Morgan Founder of Wordpress" |
| 10 | `ftco-section` | "Buy Tickets": Basic $29.00 · Standard $59.00 · Premium $79.00 · Gold $89.50 (10 events, VIP seat) |
| 11 | `ftco-section bg-light` | "Our Blog": 3 × "Why Lead Generation is Key for Business Growth", `image_1..3.jpg` |
| 12 | `ftco-section contact-section ftco-no-pb` | "Contact Me": 198 West 21th Street Suite 721 New York NY 10016 · + 1235 2355 98 · info@yoursite.com · yoursite.com + name/email/subject/message form |
| 13 | `ftco-section ftco-no-pt ftco-no-pb` | `#map` Google Maps iframe (do **not** reuse the reference's API key) |
| 14 | `footer` | "About MeetUp." blurb, Links, Privacy, "Have a Questions?", 4 social icons, copyright |

## Fidelity deltas to expect (and accept)

- **Copy is paraphrased**, structure is not: headline+subtext+CTA, card title+blurb+link.
- **No assets copied**: portraits/backgrounds → `picsum.photos/seed/gatherly-<n>/<w>/<h>`;
  icons → `lucide-react`; fonts → Google Fonts `<link>` (Lato).
- Icon faces (flaticon/icomoon/ionicons) and the reference's Bootstrap 4 grid are **not**
  reproduced — the monorepo stack is React 19 + Vite + Tailwind 4 with `packages/ui` reuse.
- The reference's dead/mobile-only links are not mirrored; every anchor must resolve.

## Why this spec exists (provenance note for the PR)

`apps/gatherly` shipped without `openspec/specs/template-<name>/spec.md`, so the generated
README row could only fall back to `A ready-to-use gatherly template…` and 4 TEMPLATES.md
"Meetup" listings had no spec to point at. This spec + its `docs/templates/gatherly/` prep
notes close that gap; they document the live reference as read on 2026-10-13 and match the
shipped implementation. The other ten spec-less apps are **second apps of designs that
already have a spec under another name** — do not write a second spec for those.
