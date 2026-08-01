# free-react-templates

A **monorepo** of free, ready-to-use React website templates. Each template is a
production-ready starting point built with the latest versions of the core stack.

## Stack (always latest)

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| **Build**    | Vite                                |
| **UI**       | React                               |
| **Styling**  | Tailwind CSS v4                     |
| **Language** | TypeScript (strict)                 |

## Structure

```
free-react-templates/
├── apps/
│   └── web/              # The Vite + React demo app
├── packages/
│   └── ui/               # Shared UI components (Button, Card, Badge, cn)
├── package.json          # npm workspaces root
└── tsconfig.base.json    # Shared strict TypeScript config
```

## Getting started

```bash
npm install
npm run dev        # start the web app (http://localhost:5173)
npm run build      # typecheck + production build
npm run typecheck  # typecheck every workspace
```

## Adding a new template

1. Copy `apps/web` to `apps/<template-name>`.
2. Update the workspace `name` and the app shell (title, meta, hero).
3. Reuse shared pieces from `packages/ui` — never duplicate them.

## License

TBD
