# ADR-0001: Monorepo with one app per template

**Status:** Accepted · **Date:** 2026-08-01

## Context

The project recreates ~1,600 ColorLib website templates in React. A single app
would become unmanageable; many small standalone repos would fragment shared
UI and tooling.

## Decision

npm-workspaces monorepo. **Every template is its own app under `apps/`, in a
folder named after the template** (`apps/aurora` for the Aurora template),
packaged as `@free-react-templates/<name>`. Shared UI and utilities live in
`packages/ui`. Root owns tooling, specs, and the checklist.

## Consequences

- Templates are isolated (own deps, own build) yet share `packages/ui`.
- Adding a template = copy an existing app + rename the package.
- CI/gates run once at the root across all workspaces.
- Trade-off: dependency upgrades are hoisted at the root, so a template cannot
  pin a different React major without extra work.

## Alternatives considered

- **Single app with routed "templates":** rejected — breaks the "copy and
  ship" model and couples unrelated designs.
- **One repo per template:** rejected — tooling/spec overhead × 1,600 and no
  shared UI.
