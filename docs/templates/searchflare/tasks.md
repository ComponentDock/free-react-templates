# SearchFlare — Tasks
<!-- prep-status: shipped-as=seekdot -->
> **SHIPPED-UNDER** — the ColorLib `search-form-bar-03` design this prep describes shipped
> as `apps/seekdot` (<https://seekdot.free.componentdock.com>).
> The unchecked items below are prep history, not outstanding work.

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-searchflare/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

## Spec

- [x] Write spec with Gherkin requirements
- [x] Design tokens from screenshot analysis
- [x] Verification checklist

## Implementation (for implementer)

- [x] Create `apps/searchflare/` from a minimal app template — superseded: shipped as `apps/seekdot`
- [ ] Install dependencies (lucide-react for icon)
- [ ] Build SearchFlare component with:
  - Centered heading
  - Circular coral/red search button
  - Pill-shaped text input
  - Responsive layout
- [ ] Add footer with Component Dock link
- [ ] Write tests (Vitest + Testing Library)
- [ ] Achieve 100% coverage
- [ ] Build and verify
- [ ] Deploy to surge
