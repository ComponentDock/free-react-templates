# Lawbrief (ColorLib Lawmaker) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lawbrief`. Recreation name: **Lawbrief** (NEW name —
> the ColorLib source keeps its name "Lawmaker").

## Source mapping

- **ColorLib item:** "Lawmaker" (TEMPLATES.md line 2126; section
  "## Lawyer (23)"). Source URL: https://colorlib.com/wp/template/lawmaker/
- **Preview URL — REACHABLE (verified by direct fetch):**
  https://preview.colorlib.com/theme/lawmaker/ (HTTP 200, 648 lines, `<title>
  Lawmaker — Website Template by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (1,118 lines) + Bootstrap + animate.css +
  icomoon + flexslider + owl carousel + magnific popup. Main styles in
  `css/style.css`. Font: Work Sans (300/400/500/600/700 from Google Fonts
  via Cloudflare CDN).

## Reference research (done — do not redo)

### Screenshot (`lawmaker-free-template.jpg`)

Browsed visually. Shows: full-width hero with parallax background image of
lawyers reviewing documents, dark gradient overlay, centered white heading
"Defend Your Constitutional Right with Legal Help", blue CTA button. White
navbar with "LAWMAKER" logo. Below hero: "Welcome To Our Legal Office"
section with image on left and text on right. Professional, clean law firm
aesthetic with blue accent color (#2f89fc). Work Sans font family.

### Design tokens (live stylesheet + rendered page)

| Token             | Value                           | Use                                                                |
| ----------------- | ------------------------------- | ------------------------------------------------------------------ |
| Brand blue        | `#2f89fc`                       | Buttons, links, active nav state                                   |
| Brand hover       | `#4897fc`                       | Button hover background                                            |
| Body text         | `#828282`                       | Paragraph text (14px base)                                         |
| Headings          | `#000`                          | h1, h2, h3 text color                                              |
| White             | `#fff`                          | Nav text, hero text, button text, counter labels                   |
| Overlay           | `rgba(0,0,0,0.5–0.7)`          | Hero gradient, counter bg, video overlay                           |
| CTA accent        | `#3f52e3`                       | "Need Legal Services?" right column bg                             |
| Font              | 'Work Sans' 300/400/500/600/700 | Google Fonts (Cloudflare CDN); body 14px                           |
| Button radius     | `4px`                           | Primary buttons                                                    |
| Counter icon      | 50% radius, white bg            | Circular icon boxes with box-shadow                                |
| Section bg light  | `rgba(0,0,0,0.05)`             | Testimonials section background                                    |

### Section order (from live DOM, top to bottom)

1. Navigation bar (sticky/fixed, logo left, links right)
2. Hero slider (3 slides, parallax bg images, overlay, centered text + CTA)
3. Welcome section (2-col: image left, heading + text + CTA right)
4. Practice areas — compact (3-col: Real Estate, Insurance, Business Law)
5. Stats counter (parallax bg, 4 counters with icons)
6. Video/choose section (video thumbnail left, text right)
7. Practice areas — expanded (6-col grid with heading, View More button)
8. Consultation CTA (parallax bg, centered text + button)
9. Testimonials (carousel with 3 slides)
10. Contact form (split: parallax bg left, form right)
11. Blog section (3-col cards with images)
12. Attorneys section (3 staff cards with social icons)
13. "Need Legal Services?" intro bar (2-col: white left, blue right)
14. Footer (4-col: description, nav, contact, hours + social + copyright)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/lawbrief` from the simplest existing app, rename
       package to `@free-react-templates/lawbrief`, add Work Sans 400/500/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `lawbrief.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (logo, nav links, active state, mobile
       hamburger), Hero (heading, subtitle, CTA button, overlay), Welcome
       (heading, paragraph, CTA, image), PracticeAreasCompact (3 cards with
       icons + titles), StatsCounter (4 counters with animated numbers,
       parallax bg), VideoSection (thumbnail + play icon, heading, CTA),
       PracticeAreasExpanded (6 cards with icons + titles + View More
       button), ConsultationCTA (heading, text, button), Testimonials
       (carousel with 3 slides, navigation), ContactForm (5 fields + submit
       button, mock submit), BlogSection (3 cards with image + title + meta
       + excerpt), TeamSection (3 cards with photo + name + role + bio +
       social links), IntroBar (2-col with headings + contact info),
       Footer (4-col layout, social icons, Component Dock link), BackToTop
       (scroll to top on click), App (landmarks, document title).
3. [ ] Layout shell: Tailwind theme with `--color-brand: #2f89fc`, Work Sans
       font, global styles.
4. [ ] Navbar: sticky top, logo "Lawbrief" left, nav links right, mobile
       hamburger menu toggle.
5. [ ] Hero: full-viewport section with picsum placeholder bg, dark gradient
       overlay, centered white h1 + subtitle + CTA button.
6. [ ] Welcome section: 2-column grid, rounded image left, heading + text +
       CTA right.
7. [ ] Practice areas compact: 3-column grid with lucide icons (Building2,
       Shield, FolderOpen) + h3 links + descriptions.
8. [ ] Stats counter: parallax bg image + overlay, 4 counters with circular
       white icon boxes, animated count-up on scroll (use Intersection
       Observer or a lightweight counter hook).
9. [ ] Video/choose: split layout with video thumbnail + play icon overlay
       left, heading + text + CTA right.
10. [ ] Practice areas expanded: heading + subtitle, 3×2 grid with 6 cards,
        "View More" button centered below.
11. [ ] Consultation CTA: parallax bg + overlay, centered white heading +
        text + "Consultation" button.
12. [ ] Testimonials: light bg section, heading, carousel/slider with 3
        slides (avatar placeholder, name, blockquote), dot/arrow navigation.
13. [ ] Contact form: split layout — parallax bg left, form right with 5
        fields (First Name, Last Name, Email, Subject, Message textarea) +
        "Send Message" submit. Mock submit (no network).
14. [ ] Blog section: heading "Recent Posts", 3-column responsive grid with
        cards (picsum image, title, date/comment meta, excerpt).
15. [ ] Attorneys section: heading "Our Attorneys", 3-column grid with
        staff cards (picsum photo, name, role, bio, social icons: Facebook,
        Twitter, LinkedIn, Dribbble via lucide).
16. [ ] Intro bar: 2-column layout — left (white bg, "Need Legal Services?"
        heading + text), right (blue `#3f52e3` bg, phone + email).
17. [ ] Footer: 4-column grid (description, navigation, contact info,
        opening hours), copyright line, social icons, Component Dock link.
18. [ ] Back-to-top: floating button, smooth scroll to top.
19. [ ] Run `npm run verify:app -- lawbrief` (typecheck → lint → vitest
        100% → build) and fix until green.
20. [ ] Open PR `feat/template-lawbrief` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (blue `#2f89fc`, hover
        `#4897fc`, Work Sans, 4px radius buttons, parallax backgrounds),
        and what differs (renamed "Lawbrief", Work Sans via Google Fonts,
        lucide icons, placeholder images via picsum, mock form submit).
21. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2126 `[x]` + surge
        URL (`https://lawbrief.free.componentdock.com`), `npm run
        readme:status`, push.
