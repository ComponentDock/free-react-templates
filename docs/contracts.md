# Contracts

Explicit contracts for the public API, data, and component interfaces.

## TypeScript baseline

Shared strict config (`tsconfig.base.json`): `strict`, `noUnusedLocals`,
`noUnusedParameters`, `noUncheckedIndexedAccess`, `isolatedModules`,
`moduleResolution: bundler`. Workspace configs extend it. **No `any`** — use
`unknown` with narrowing, or precise types.

## `packages/ui` public API (contract)

Import everything through the package name: `import { Button, Card, Badge, cn }
from '@free-react-templates/ui'` (resolves to `src/index.ts`).

| Export | Contract |
| --- | --- |
| `cn(...inputs: ClassValue[])` | Returns merged Tailwind class string (clsx + tailwind-merge). Never returns `undefined`. |
| `Button` | `forwardRef<HTMLButtonElement, ButtonProps>`; props: `variant?: 'primary'\|'outline'\|'ghost'\|'danger'` (default `primary`), `size?: 'sm'\|'md'\|'lg'` (default `md`), `type` default `'button'`, extends `ButtonHTMLAttributes`. |
| `Badge` | props: `variant?: 'default'\|'success'\|'warning'\|'danger'` (default `default`), extends `HTMLAttributes<HTMLSpanElement>`. |
| `Card` | Compound: `Card` + `Card.Header` + `Card.Content` + `Card.Footer` (also exported standalone). Extends `HTMLAttributes<HTMLDivElement>`. |

Contract rules for the UI package:
- Variant/size props are **closed unions** — adding a value requires updating
  the variant class map + tests.
- Components accept `className` and merge it via `cn()` (caller overrides win
  through tailwind-merge).
- All interactive elements must be real semantic elements (`<button>`, `<a>`),
  not `div` with handlers.

## Component prop contract (templates)

Every section component in an app accepts at minimum `className?: string` when
it wraps a container, and all props are typed interfaces — no inline anonymous
prop types in public components.

## Data model conventions

- No global mutable state in templates unless required; prefer local state
  (`useState`) and prop drilling for sections.
- Form state/validation: zod schema (`z.object`) + typed `z.infer` form type;
  the schema is the single source of truth for field names and rules.
- Timestamps/ids: plain strings; keep field names snake_case in any persisted
  shape, camelCase in component props.

## Spec contract

`openspec/specs/template-<name>/spec.md` is the behavioral contract for each
template. Requirements use Gherkin `SHALL` + `Given/When/Then` scenarios; tests
must trace 1:1 to scenarios. A template without a validated spec is not
shippable.
