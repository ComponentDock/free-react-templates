# Snuggle (Colorlib Petsitting) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-snuggle`.

## Design notes (replication findings)

- **Original:** ColorLib "Petsitting" — professional pet care services
  (source: https://colorlib.com/wp/template/petsitting/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/petsitting/
  (HTTP 200, full rendered DOM + `css/style.css` (317KB, Bootstrap-based)
  extracted).
- **Visual design (from DOM + CSS tokens):** modern pet-services landing with
  a **green** brand (`#00bd56`, hover `#26c76f`), Montserrat font, light
  (`#f8f9fa`) alternating sections, icon tiles, a monthly/yearly pricing
  toggle, a photo gallery of pet breeds, and a green appointment/CTA band.
- **Structure (1:1, section order):**
  1. Navbar: links Home, About, Veterinarian, Services, Gallery, Pricing,
     Blog, Contact.
  2. Hero: h1 "Highest Quality Care For Pets You'll Love" + **Learn more**
     button.
  3. Intro tiles: **Dog Walking, Pet Daycare, Pet Grooming** — icon, title,
     blurb, arrow link.
  4. About: "Why Choose Us?" + 4 features — **Care Advices, Customer
     Supports, Emergency Services, Veterinary Help** (icon + blurb).
  5. Counters: **Customer, Professionals, Products, Pets Hosted** (animated
     numbers in original; static in recreation).
  6. FAQ (`ftco-faqs`, bg-light): "Frequently Asks Questions" + 4 Q&A —
     How to train your pet dog?, How to manage your pets?, What is the best
     grooming for your pets?, What are those requirements for sitting pets?
  7. Testimonials (`testimony-section`): "Happy Clients & Feedbacks" +
     customer quotes.
  8. Pricing (`ftco-pricing`): "Choose Your Plan" / "Select the perfect care
     package for your furry friend" + Monthly/Yearly toggle ("Save 20%") + 3
     plans — **Starter $29/mo** (3 Dog Walks per week, 1 Vet Check-up, Basic
     Grooming, Email Support, Pet Spa Access, Emergency Care), **Professional
     $59/mo** (Most Popular badge; Unlimited Dog Walks, 3 Vet Check-ups,
     Full Grooming Package, Priority Support, Pet Spa Access, Emergency
     Care), **Premium $99/mo** (Complete care for your pet…) — each with
     **Get Started**.
  9. Gallery: "Pets Gallery" + 6 pets — **Persian Cat, Pomeranian, Sphynx
     Cat, British Shorthair, Beagle, Pug** (photo + name + zoom).
  10. Blog (bg-light): "Latest news from our blog" + 3 posts ("Even the
      all-powerful Pointing has no control about the blind texts" — April 7,
      2035 · Admin · 19 comments) + **Read more**.
  11. Appointment (`ftco-appointment`): "Free Consultation" + form — Your
      Name, Phone Number, services select (Cat Sitting, Dog Walk, Pet Spa,
      Pet Grooming, Pet Daycare), date, time, Message textarea + submit.
  12. Footer: site name + blurb ("A small river named Duden flows by their
      place…"), **Latest News** (2 posts), **Quick Links** (Home, About,
      Services, Works, Blog, Contact), **Have a Questions?** (203 Fake St.
      Mountain View, San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com), social icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#00bd56`** (`.btn-primary` bg; hover `#26c76f`).
  - Font: **"Montserrat", Arial, sans-serif** (Google Fonts via `<link>`).
  - Light section bg `#f8f9fa`; white cards; blue `#207dff` secondary
    accent in parts of the demo.
  - Buttons: Bootstrap-style, uppercase pill/rounded in the original;
    rounded-full with green bg at implementation.
- **Recreation name:** Snuggle (pet-sitting themed, distinct from "Petsitting"
  and all existing names). App folder `apps/snuggle`, package
  `@free-react-templates/snuggle`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/snuggle-<n>/<w>/<h>`); lucide-react icons (replaces
  FontAwesome/flaticon); Montserrat via Google Fonts; pricing toggle as a
  client-side state switch (static prices); FAQ as accessible
  disclosure/accordion; forms prevent default (no backend); green primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-snuggle/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/snuggle` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/snuggle`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-snuggle`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
