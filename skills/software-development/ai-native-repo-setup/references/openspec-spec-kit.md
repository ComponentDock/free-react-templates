# OpenSpec / GitHub Spec Kit — working recipe (verified 2026-08)

Verified while adding spec-driven development to `free-react-templates` (a
ColorLib-recreation monorepo; every template = one spec). OpenSpec CLI 1.7.0
via `@fission-ai/openspec` npm devDependency (`npx openspec`).

## Files to create

### openspec/config.yaml

```yaml
schema: spec-driven

context: |
  One paragraph describing the project: domain, tech stack, structure,
  conventions, tooling. This is injected into agents creating artifacts.

rules:
  proposal:
    - Keep proposals under 500 words
    - Always include a "Non-goals" section
  tasks:
    - Break tasks into chunks of max 2 hours
    - Every task must include its test (TDD — tests first)

operations:
  apply:
    guidance:
      - Tests are written first (red), then implementation (green).
      - Run the full verification chain before finishing.
  archive:
    guidance:
      - Update the project checklist (e.g. TEMPLATES.md) when the capability ships.
```

### openspec/specs/<capability>/spec.md

Structure that validates and reads well:

```markdown
# <Capability> Specification

## Purpose

One short paragraph: what this is, why it exists.

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with ...

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name and links
- **AND** the links SHALL scroll to their target sections
```

Rules that matter:

- `SHALL` for every normative statement; `GIVEN/WHEN/THEN`/`AND` scenario lines.
- Cover every user-visible section of a page/feature (nav, hero, sections,
  forms, footer, composition) so tests can trace 1:1 to scenarios.
- Keep it the definition of done: a template without a validated spec is not
  shippable.

## Commands

```bash
openspec validate            # non-interactive: prints "Nothing to validate"
openspec validate --specs    # headless validation of all specs (use this)
openspec validate --all      # specs + changes
npx openspec --version
```

`openspec validate --specs` on a valid spec prints:
`✓ spec/<capability>` / `Totals: 1 passed, 0 failed`.

Wire it into package.json scripts as `"spec:validate": "openspec validate --specs"` —
two wins: the openspec binary becomes "used" (knip stops reporting the devDep
as unused) and the check is CI/pre-push-able.

## Spec Kit scaffolding (.specify/ + .opencode/)

GitHub Spec Kit's project scaffolding (workflows, bash scripts, templates,
openspec skill files) can be copied wholesale from a sibling repo that already
ran `spec kit init`:

```bash
cp -r <sibling>/.specify ./
cp -r <sibling>/.opencode ./
# then verify no stale references to the source repo:
grep -rl <old-repo-name> .specify .opencode || echo clean
```

- `.specify/integration.json` + `init-options.json` record the integration
  (e.g. copilot) and spec-kit version — fine to leave as-is.
- The `.opencode/skills/openspec-*` files are the workflow skills
  (propose/apply/archive) for opencode; they work with the openspec CLI.

## Pitfalls

- Plain `openspec validate` without flags says "Nothing to validate" and exits
  0 — a false green. Always pass `--specs` (or `--all`) in scripts/CI.
- knip flags `@fission-ai/openspec` as an unused devDependency until a script
  references the binary (the `spec:validate` script fixes it); fallow needs it
  in `.fallowrc.json` `ignoreDependencies` too.
- If specs live under `openspec/specs/<capability>/spec.md`, the openspec CLI
  discovers them from the repo root automatically — no registration needed.
