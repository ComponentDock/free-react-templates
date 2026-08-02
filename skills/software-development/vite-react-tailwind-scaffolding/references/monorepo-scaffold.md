# Monorepo scaffold recipe (verified 2026-08, free-react-templates)

Reproduce-with-modifications: `apps/web` (Vite demo app) + `packages/ui` (shared components), npm workspaces, Tailwind v4, TS 7. Versions resolved by `"latest"`: vite 8.2, react 19.2, tailwindcss 4.3, typescript 7.0.

## Root files

### package.json

```json
{
  "name": "free-react-templates",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev": "npm run dev --workspace @free-react-templates/web",
    "build": "npm run build --workspace @free-react-templates/web",
    "typecheck": "npm run typecheck --workspaces --if-present"
  }
}
```

### tsconfig.base.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "jsx": "react-jsx",
    "forceConsistentCasingInFileNames": true
  }
}
```

## packages/ui (shared source package)

### package.json

```json
{
  "name": "@free-react-templates/ui",
  "version": "0.1.0",
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": { ".": "./src/index.ts" },
  "files": ["src"],
  "scripts": { "typecheck": "tsc --noEmit" },
  "dependencies": { "clsx": "latest", "tailwind-merge": "latest" },
  "peerDependencies": { "react": "^19.0.0", "react-dom": "^19.0.0" },
  "devDependencies": { "@types/react": "latest", "typescript": "latest" }
}
```

tsconfig.json: `{ "extends": "../../tsconfig.base.json", "compilerOptions": { "noEmit": true }, "include": ["src"] }`

### cn.ts

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
```

### Compound component pattern (TS7-safe)

```tsx
function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4 pb-2', className)} {...props} />
}
// function CardContent / CardFooter analogous...

// Object.assign with a FUNCTION EXPRESSION — a `function Card() {}` declaration
// next to `const Card = Object.assign(...)` is TS2300 (duplicate identifier).
export const Card = Object.assign(
  function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn('rounded-xl border ... dark:border-gray-800 dark:bg-gray-900', className)}
        {...props}
      />
    )
  },
  { Header: CardHeader, Content: CardContent, Footer: CardFooter },
)
```

### index.ts barrel

```ts
export { cn } from './cn'
export { Button, type ButtonProps } from './Button'
export { Badge, type BadgeProps } from './Badge'
export { Card, CardHeader, CardContent, CardFooter } from './Card'
```

## apps/web

### package.json

```json
{
  "name": "@free-react-templates/web",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@free-react-templates/ui": "*",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@tailwindcss/vite": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "@vitejs/plugin-react": "latest",
    "tailwindcss": "latest",
    "typescript": "latest",
    "vite": "latest"
  }
}
```

### vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': resolve(__dirname, './src') } },
})
```

### src/index.css (Tailwind v4 + class-based dark mode)

```css
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-primary-50: #eef2ff;
  /* ... indigo scale ... */
  --color-primary-950: #1e1b4b;
}
```

### tsconfig.json

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": { "types": ["vite/client", "node"], "noEmit": true },
  "include": ["src", "vite.config.ts"]
}
```

## Dark-mode toggle in the app (works with the variant above)

```tsx
const [dark, setDark] = useState(false)
useEffect(() => {
  document.documentElement.classList.toggle('dark', dark)
}, [dark])
// <Button onClick={() => setDark((d) => !d)}>{dark ? 'Light' : 'Dark'}</Button>
```

## Verify + ship

```bash
npm install          # root installs all workspaces
npm run typecheck    # tsc --noEmit per workspace
npm run build        # tsc --noEmit && vite build; expect dist/ + chunk report
git init -b main
git config user.name "..." && git config user.email "..."   # org owner identity, not root
git add -A && git commit -m "feat: scaffold Vite + React + Tailwind monorepo"
git remote add origin https://github.com/<org>/<repo>.git
git push -u origin main
```

## Notes

- `tsc --noEmit` per workspace instead of `tsc -b` project references — simpler, works fine without composite configs.
- The `write_file` auto-lint may print `TS5112 ... files are specified on commandline` on .ts/.tsx writes — noise, ignore (see vite-vitest-tooling §4).
- `public/index.html` is NOT needed — Vite uses root `index.html`; Firebase hosting deploys `dist/` (firebase.json `"public": "dist"`).
