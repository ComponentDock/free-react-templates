---
name: ai-native-repo-setup
description: 'AI-native repo setup: AGENTS.md, docs tree, ADRs, OpenSpec.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [AGENTS.md, documentation, ADR, openspec, spec-driven, AI-agents, conventions]
    related_skills: [repo-audit-workflow, vite-react-tailwind-scaffolding, test-driven-development]
---

# AI-Native Repo Setup

Use when asked to "improve this project for AI-assisted development", add an
AGENTS.md / AI coding rules layer, set up spec-driven development (OpenSpec /
GitHub Spec Kit), document decisions (ADRs), or make a repo self-describing so
AI agents (and cron jobs) can work in it without repeated onboarding.

Goal: a repo where an agent that has never seen the project can read one file
and know the contract, the workflow, the gates, and the current state.

## The 12-practice framework (user's canonical checklist)

Map each practice to a concrete artifact — this is the deliverable shape:

| #   | Practice                | Artifact in the repo                                                                   |
| --- | ----------------------- | -------------------------------------------------------------------------------------- |
| 1   | Context-driven          | `docs/ai-context.md` — architecture, stack, workflows, **known issues**                |
| 2   | Specification-driven    | `openspec/specs/<capability>/spec.md` + `npm run spec:validate`                        |
| 3   | Test-driven             | `docs/verification.md` coverage semantics (100% thresholds)                            |
| 4   | Architecture-driven     | `docs/ai-context.md` module boundaries + ADR on the layout                             |
| 5   | Contract-driven         | `docs/contracts.md` — typed public APIs, prop contracts, no-`any`                      |
| 6   | Decision documentation  | `docs/adr/NNNN-title.md` per decision                                                  |
| 7   | Convention-driven       | `docs/conventions.md` — structure, naming, patterns, error handling                    |
| 8   | Continuous verification | `docs/verification.md` — the gate chain + failure policy                               |
| 9   | AI self-review          | `docs/self-review.md` — pre-commit checklists                                          |
| 10  | Change impact analysis  | `docs/self-review.md` — pre-edit checklist (files, deps, regressions, smallest change) |
| 11  | Documentation-driven    | README index linking the docs; "keep docs current" rule in AGENTS.md                   |
| 12  | AI coding rules         | `AGENTS.md` — the binding contract                                                     |

## AGENTS.md (the entry point)

One concise file at repo root. It is injected into agent context (Hermes
`workdir`, Claude Code, Codex, Cursor, opencode all honor it), so:

- **Keep it short** (~1 screen). Snapshot paragraph + 8–12 numbered
  non-negotiable rules + a standard workflow + pointers to `docs/`.
- Put the detail in `docs/`, never in AGENTS.md.
- Non-negotiables that work well: read docs first · spec-first · TDD with
  coverage gate · full verification chain · smallest safe change ·
  self-review · keep docs current · conventional commits · summarize when done.
- Add: "If nothing needs doing, do NOT create an empty commit — report the
  repo is green and idle."

## docs/ tree

One file per practice (see table). Keep each file tight and imperative:
`conventions.md` gets a naming table, component/error-handling patterns, test
conventions; `contracts.md` documents the actual exported API with prop tables
and closed unions; `verification.md` lists the exact commands, the failure
policy ("never disable a check, fix the root cause"), and coverage semantics.

**Known-issues section is the highest-value part of `ai-context.md`** — record
quirks discovered the hard way (tooling artifacts, whitespace quirks, version
gotchas) so agents don't re-derive them. Keep it updated as new ones surface.

## ADR format (docs/adr/)

`NNNN-title.md` with: Status · Date · Context · Decision · Consequences ·
Alternatives considered. Write one per significant decision (monorepo layout,
spec tooling, gate chain). Consequence of NOT writing one: agents re-litigate
or violate the decision.

## Spec-driven layer (OpenSpec / GitHub Spec Kit)

- Scaffold: `openspec/config.yaml` (schema `spec-driven`; `context:` carries
  the project description; `rules:` per-artifact; `operations.apply/archive`
  guidance), then `openspec/specs/<capability>/spec.md`.
- Spec format: `## Requirements` → `### Requirement: X` → `The system SHALL ...`
  → `#### Scenario:` blocks in Gherkin `GIVEN/WHEN/THEN` + `SHALL`/`AND`.
- Validate headlessly with `openspec validate --specs` (plain `validate` says
  "Nothing to validate" non-interactively — pass `--specs` or `--all`).
- Add `"spec:validate": "openspec validate --specs"` to scripts: it makes the
  openspec CLI binary "used" (knip stops flagging it) AND is the CI-able check.
- Spec Kit's `.specify/` + `.opencode/` scaffolding can be copied from a
  sibling repo that already has it — check for stale repo references after
  copying (`grep -rl <old-repo> .specify .opencode`).
- Full recipe with config/spec templates: `references/openspec-spec-kit.md`.

## Automating against the contract

- When a cron job drives the repo, update its prompt to start with "read
  AGENTS.md — it is the binding contract" so every run re-anchors on the
  current rules.
- Document the scheduled jobs in `CRONJOB.md` at repo root (job ID, schedule,
  workspace, mission, verification chain, report format) — the automation
  becomes self-documenting.

## Pitfalls

- **AGENTS.md bloat**: the file is read on every agent start — long files get
  skimmed, and rules buried past the first screen get ignored. Detail goes in
  `docs/`.
- **Stale known-issues**: a known-issues section that isn't updated as quirks
  surface becomes a liability. Update `docs/ai-context.md` in the same commit
  that discovers the quirk.
- **Docs drift**: the layer only works if the workflow includes "update docs
  alongside code" (self-review checklist item) and the cron/agent prompt
  enforces it.
- **Over-documenting**: one file per practice, not twenty; if a section is
  obvious, cut it. The layer should be readable in ~5 minutes total.
