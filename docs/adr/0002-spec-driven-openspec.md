# ADR-0002: Spec-driven development with OpenSpec / GitHub Spec Kit

**Status:** Accepted · **Date:** 2026-08-01

## Context

With ~1,600 templates to build, mostly by AI agents, un-specified work drifts:
sections get skipped, behavior differs per template, and "done" is ambiguous.
A lightweight, reviewable requirements format is needed.

## Decision

Adopt OpenSpec (`@fission-ai/openspec`, schema: `spec-driven`) with the GitHub
Spec Kit workflow scaffolding (`.specify/`, `.opencode/`). **Each template has
one spec**: `openspec/specs/template-<name>/spec.md`, written as Gherkin
requirements (`SHALL` + `Given/When/Then` scenarios) covering every section
(navigation, hero, about, services, features, testimonials, contact form,
footer, composition). Specs validate via `npm run spec:validate`; the spec is
the definition of done and the source of test scenarios.

## Consequences

- Implementation follows the spec, not assumptions; tests trace 1:1 to
  scenarios.
- Specs double as onboarding docs and checklist extensions.
- Cost: writing a spec before each template adds a step (absorbed by the
  hourly pipeline job).

## Alternatives considered

- **Free-form requirements in README:** rejected — not machine-checkable, no
  scenario discipline.
- **TypeScript interfaces as the only contract:** rejected — behavioral
  contracts (validation, interactions) can't be expressed in types alone.
