# Self-Review & Change Impact Analysis

Mandatory checklists before finishing any task (and before starting a risky one).

## Change impact analysis (BEFORE editing)

- [ ] Which files will change? (list them)
- [ ] Which imports/exports depend on them? (`npm run knip` baseline if unsure)
- [ ] Does this touch a shared contract (`packages/ui`, types, spec)?
  If yes, update `docs/contracts.md` and the affected specs/tests.
- [ ] What regressions are possible? Which tests cover the area?
- [ ] Is this the smallest safe change that satisfies the requirement?
- [ ] Does the spec need updating first (spec-first rule)?

## Self-review (BEFORE committing)

### Architecture impact
- [ ] Follows the monorepo layout (one app per template, shared code in
      `packages/ui`)?
- [ ] No unnecessary new abstractions or modules?

### Code quality
- [ ] Matches `docs/conventions.md` (naming, patterns, structure)?
- [ ] No dead code, debug logs, commented-out code, or temporary workarounds?
- [ ] No `any`; types are precise and exported interfaces are named?

### Performance
- [ ] No obvious re-render traps (inline handlers that break memoization where
      it matters), no layout thrash, images lazy/deferred where sensible?

### Security
- [ ] No secrets added; no unsafe HTML injection (`dangerouslySetInnerHTML`
      without justification); URLs from user input are validated/allowlisted?

### Test coverage
- [ ] `npm run test:coverage` passes at 100%?
- [ ] Tests mirror the spec scenarios, including edge cases and error paths?
- [ ] No skipped/disabled tests?

### Documentation updates
- [ ] `docs/` touched where behavior/architecture changed?
- [ ] ADR added for a significant new decision?
- [ ] `TEMPLATES.md` status updated (`[~]` → `[x]`)?
- [ ] README/AGENTS.md still accurate?

## Final gate

Run the full chain (`docs/verification.md`) and confirm every check passes
before commit. Then commit conventionally and push.
