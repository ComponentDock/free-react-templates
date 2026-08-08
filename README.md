# free-react-templates

A **monorepo** of free, ready-to-use React website templates. Each template is a
production-ready starting point built with the latest versions of the core stack.

## Stack (always latest)

| Layer        | Technology          |
| ------------ | ------------------- |
| **Build**    | Vite                |
| **UI**       | React               |
| **Styling**  | Tailwind CSS v4     |
| **Language** | TypeScript (strict) |

## Structure

```
free-react-templates/
├── apps/
│   ├── aurora/          # Template: Aurora (personal/business landing)
│   ├── azure/           # Template: Azure (404 error page, watermark + blue pill)
│   ├── blaze/           # Template: Blaze (404 error page, bold red exclamation)
│   ├── cloud/           # Template: Cloud (404 error page, minimalist cloud)
│   ├── cove/            # Template: Cove (404 error page, emoji in light circle)
│   ├── drift/           # Template: Drift (404 error page)
│   ├── flick/           # Template: Flick (404 error page, animated spark)
│   ├── lagoon/          # Template: Lagoon (404 error page, teal sad-face)
│   ├── nova/            # Template: Nova (404 error page, gradient 404 + social tiles)
│   ├── orbit/           # Template: Orbit (404 error page, space theme)
│   ├── punch/           # Template: Punch (404 error page, bold Oops + orange CTA)
│   ├── query/           # Template: Query (404 error page, gray 404 + search bar)
│   ├── scarlet/         # Template: Scarlet (404 error page, photo + red overlay)
│   ├── slice/           # Template: Slice (404 error page, tight cut digits)
│   ├── sky/             # Template: Sky (404 error page, blue zero + search bar)
│   ├── tears/           # Template: Tears (404 error page, crying emoji)
│   └── vista/           # Template: Vista (404 error page, image background)
├── packages/
│   └── ui/              # Shared UI components (Button, ButtonLink, Card, Badge, cn)
├── package.json         # npm workspaces root
└── tsconfig.base.json   # Shared strict TypeScript config
```

> **One app per template:** every template lives in its own folder under `apps/`,
> named after the template (e.g. `apps/aurora` for the Aurora template).

## Getting started

```bash
npm install
npm run dev        # start the web app (http://localhost:5173)
npm run build      # typecheck + production build
npm run typecheck  # typecheck every workspace
```

## AI-assisted development

This repo is optimized for AI-driven development. **Start at [`AGENTS.md`](./AGENTS.md)** —
it is the binding contract for AI agents (read docs first, spec-first, TDD,
verification gates, self-review). Supporting docs:

| Doc                                            | Contents                                                                            |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`docs/ai-context.md`](docs/ai-context.md)     | Architecture, stack, workflows, known issues                                        |
| [`docs/conventions.md`](docs/conventions.md)   | File structure, naming, component/error-handling patterns                           |
| [`docs/contracts.md`](docs/contracts.md)       | Public API and data contracts                                                       |
| [`docs/verification.md`](docs/verification.md) | The full gate: commands, failure policy, coverage                                   |
| [`docs/replication.md`](docs/replication.md)   | Faithful template recreation: preview DOM + CSS tokens + screenshot                 |
| [`docs/deployment.md`](docs/deployment.md)     | Surge.sh deploys — one subdomain per template                                       |
| [`docs/self-review.md`](docs/self-review.md)   | Change-impact analysis + self-review checklists                                     |
| [`docs/adr/`](docs/adr/)                       | Architecture decision records                                                       |
| [`skills/`](skills/README.md)                  | The agent skill library (version-controlled, incl. `colorlib-template-replication`) |
| [`CRONJOB.md`](CRONJOB.md)                     | The hourly scheduled jobs driving this repo                                         |

> **Model note:** development agents working on this repo run on
> `opencode-go/deepseek-v4-flash` (via Hermes Agent, opencode-go provider).

## Development workflow

- **Spec-driven:** every template has a spec in `openspec/specs/template-<name>/spec.md`
  (GitHub Spec Kit / OpenSpec). Validate with `npm run spec:validate`.
- **TDD, 100% coverage:** write the test first, then implement. `npm run test:coverage`
  enforces 100% lines/functions/branches/statements (root `vitest.config.ts`).
- **Guards (husky):**
  - `pre-commit` — lint-staged (oxlint --fix + prettier --write)
  - `pre-push` — typecheck → lint → test:coverage → build → knip → fallow
- **Quality tools:** oxlint · prettier · knip · fallow (`npm run lint`, `npm run format`,
  `npm run knip`, `npm run fallow`)
- **Checklist:** `TEMPLATES.md` tracks all 1,646 ColorLib template recreations;
  mark an item `[x]` when its template ships.

## Adding a new template

1. Pick the next unchecked item in `TEMPLATES.md`.
2. Write its spec in `openspec/specs/template-<name>/spec.md` (requirements + scenarios).
3. Create the app folder `apps/<template-name>` (copy an existing template, e.g. `apps/aurora`).
4. Write tests first, implement until coverage is 100%.
5. Run the pre-push chain locally: `npm run typecheck && npm run lint && npm run test:coverage && npm run build && npm run knip && npm run fallow`.
6. Mark the `TEMPLATES.md` item `[x]` and commit conventionally.

## License

TBD

## Templates

**Status:** 83 / 1646 templates recreated · **1563 remaining**.

> Updated automatically after every template merge
> (`node scripts/update-readme-status.mjs`). Each row is an original React
> recreation of a ColorLib design, deployed to its own Surge subdomain.

| #   | Template           | Description                                                                                                                                          | Categories                                                        | Preview                                                                         |
| --- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1   | **Abode**          | Recreation of ColorLib "Belara" website template design.                                                                                             | Architects, Bootstrap 5, Interior Design                          | [abode.surge.sh](https://free-react-templates-abode.surge.sh)                   |
| 2   | **Animal-shelter** | Recreation of ColorLib "Animal Shelter" website template design.                                                                                     | Animal                                                            | [animal-shelter.surge.sh](https://free-react-templates-animal-shelter.surge.sh) |
| 3   | **Appco**          | Recreation of ColorLib "Appco" design.                                                                                                               | App Landing Page                                                  | [appco.surge.sh](https://free-react-templates-appco.surge.sh)                   |
| 4   | **Appdeck**        | Recreation of ColorLib "Prantokon" website template design.                                                                                          | App Landing Page, Bootstrap, Landing Page, One Page               | [appdeck.surge.sh](https://free-react-templates-appdeck.surge.sh)               |
| 5   | **Applab**         | Recreation of ColorLib "Applab" design.                                                                                                              | App Landing Page                                                  | [applab.surge.sh](https://free-react-templates-applab.surge.sh)                 |
| 6   | **Appli**          | Recreation of ColorLib "Appli" website template design.                                                                                              | App Landing Page, Bootstrap, Landing Page                         | [appli.surge.sh](https://free-react-templates-appli.surge.sh)                   |
| 7   | **Appru**          | Recreation of ColorLib "Appru" website template design.                                                                                              | App Landing Page                                                  | [appru.surge.sh](https://free-react-templates-appru.surge.sh)                   |
| 8   | **Apps**           | Recreation of ColorLib "Apps" website template design.                                                                                               | App Landing Page, Landing Page                                    | [apps.surge.sh](https://free-react-templates-apps.surge.sh)                     |
| 9   | **Appson**         | Recreation of ColorLib "Appson" website template design.                                                                                             | App Landing Page, One Page                                        | [appson.surge.sh](https://free-react-templates-appson.surge.sh)                 |
| 10  | **Appy**           | Recreation of ColorLib "Appy" website template design.                                                                                               | App Landing Page, Bootstrap, Business                             | [appy.surge.sh](https://free-react-templates-appy.surge.sh)                     |
| 11  | **Archon**         | Recreation of ColorLib "Alpha" website template design.                                                                                              | Architects                                                        | [archon.surge.sh](https://free-react-templates-archon.surge.sh)                 |
| 12  | **Atrium**         | Recreation of ColorLib "Ararat" website template design, built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4… | Architects, Business                                              | [atrium.surge.sh](https://free-react-templates-atrium.surge.sh)                 |
| 13  | **Aurora**         | Recreation of ColorLib "Maze" template .                                                                                                             | Creative, Personal, Portfolio                                     | [aurora.surge.sh](https://free-react-templates-aurora.surge.sh)                 |
| 14  | **Azure**          | Recreation of ColorLib "Colorlib Error 404 V20" error page design.                                                                                   | 404 Error                                                         | [azure.surge.sh](https://free-react-templates-azure.surge.sh)                   |
| 15  | **Beamline**       | Recreation of ColorLib "Archlab" website template design.                                                                                            | Architects, Construction                                          | [beamline.surge.sh](https://free-react-templates-beamline.surge.sh)             |
| 16  | **Blaze**          | Recreation of ColorLib "Colorlib Error 404 V13" error page design.                                                                                   | 404 Error                                                         | [blaze.surge.sh](https://free-react-templates-blaze.surge.sh)                   |
| 17  | **Blueprint**      | Recreation of ColorLib "Unapp" website template design (https://colorlib.com/wp/template/unapp/), built under a **new, original name** with the mon… | App Landing Page, Bootstrap, Landing Page, One Page               | [blueprint.surge.sh](https://free-react-templates-blueprint.surge.sh)           |
| 18  | **Blush**          | Recreation of ColorLib "Selene" website template design, built under a DIFFERENT name ("Blush") with the monorepo stack: Vite + React 19 + Tailwind… | App Landing Page                                                  | [blush.surge.sh](https://free-react-templates-blush.surge.sh)                   |
| 19  | **Bold**           | Recreation of ColorLib "Bold" website template design.                                                                                               | App Landing Page, Landing Page                                    | [bold.surge.sh](https://free-react-templates-bold.surge.sh)                     |
| 20  | **Boost**          | Recreation of ColorLib "WebApp" website template design (source: https://colorlib.com/wp/template/webapp/), built under a **new, original name** ("… | App Landing Page, One Page                                        | [boost.surge.sh](https://free-react-templates-boost.surge.sh)                   |
| 21  | **Breed**          | Recreation of ColorLib "Breed" website template design.                                                                                              | Animal                                                            | [breed.surge.sh](https://free-react-templates-breed.surge.sh)                   |
| 22  | **Bulkapp**        | Recreation of ColorLib "BulkApp" website template design.                                                                                            | App Landing Page, Bootstrap, Landing Page                         | [bulkapp.surge.sh](https://free-react-templates-bulkapp.surge.sh)               |
| 23  | **Catwalk**        | Recreation of ColorLib "Topmodel" website template design.                                                                                           | Beauty, Bootstrap, Business, Fashion                              | [catwalk.surge.sh](https://free-react-templates-catwalk.surge.sh)               |
| 24  | **Chimper**        | Recreation of ColorLib "Chimper" website template design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript..            | App Landing Page, Business, Landing Page                          | [chimper.surge.sh](https://free-react-templates-chimper.surge.sh)               |
| 25  | **Chroma**         | Recreation of ColorLib **"Transcend"** website template design (https://colorlib.com/wp/template/transcend/), built under a DIFFERENT name ("Chroma… | App Landing Page, Business, Landing Page, One Page, Portfolio     | [chroma.surge.sh](https://free-react-templates-chroma.surge.sh)                 |
| 26  | **Cloud**          | Recreation of ColorLib "Colorlib Error 404 V14" error page design.                                                                                   | 404 Error                                                         | [cloud.surge.sh](https://free-react-templates-cloud.surge.sh)                   |
| 27  | **Colid**          | Recreation of ColorLib "Colid" website template design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript..              | App Landing Page, Business, Creative, Landing Page                | [colid.surge.sh](https://free-react-templates-colid.surge.sh)                   |
| 28  | **Cove**           | Recreation of ColorLib "Colorlib Error 404 V18" error page design.                                                                                   | 404 Error                                                         | [cove.surge.sh](https://free-react-templates-cove.surge.sh)                     |
| 29  | **Crafted**        | Recreation of ColorLib "Crafted" website template design.                                                                                            | App Landing Page, Business, Landing Page                          | [crafted.surge.sh](https://free-react-templates-crafted.surge.sh)               |
| 30  | **Diamond**        | Recreation of ColorLib "Colorlib Error 404 V9" error page design.                                                                                    | 404 Error                                                         | [diamond.surge.sh](https://free-react-templates-diamond.surge.sh)               |
| 31  | **Dogger**         | Recreation of ColorLib "Dogger" website template design.                                                                                             | Animal, One Page                                                  | [dogger.surge.sh](https://free-react-templates-dogger.surge.sh)                 |
| 32  | **Doglife**        | Recreation of ColorLib "Doglife" design.                                                                                                             | Animal, Business, One Page                                        | [doglife.surge.sh](https://free-react-templates-doglife.surge.sh)               |
| 33  | **Drift**          | Recreation of ColorLib "Colorlib Error 404 V1" error page design.                                                                                    | 404 Error                                                         | [drift.surge.sh](https://free-react-templates-drift.surge.sh)                   |
| 34  | **Driven**         | Recreation of ColorLib "Sasu" website template design, built under a DIFFERENT name ("Driven") with the monorepo stack: Vite + React 19 + Tailwind … | App Landing Page, Business                                        | [driven.surge.sh](https://free-react-templates-driven.surge.sh)                 |
| 35  | **Ecobit**         | Recreation of ColorLib "Ecobit" website template design.                                                                                             | App Landing Page, Business                                        | [ecobit.surge.sh](https://free-react-templates-ecobit.surge.sh)                 |
| 36  | **Elevation**      | Recreation of ColorLib "Buildarch" website template design.                                                                                          | Architects                                                        | [elevation.surge.sh](https://free-react-templates-elevation.surge.sh)           |
| 37  | **Facade**         | Recreation of ColorLib "Arclabs" website template design.                                                                                            | Architects, Bootstrap, Business                                   | [facade.surge.sh](https://free-react-templates-facade.surge.sh)                 |
| 38  | **Farmie**         | Recreation of ColorLib "Farmie" design.                                                                                                              | Animal, Business                                                  | [farmie.surge.sh](https://free-react-templates-farmie.surge.sh)                 |
| 39  | **Favison**        | Recreation of ColorLib "Favison" website template design.                                                                                            | App Landing Page, Bootstrap, Business                             | [favison.surge.sh](https://free-react-templates-favison.surge.sh)               |
| 40  | **Flick**          | Recreation of ColorLib "Colorlib Error 404 V15" error page design.                                                                                   | 404 Error                                                         | [flick.surge.sh](https://free-react-templates-flick.surge.sh)                   |
| 41  | **Foundry**        | Recreation of ColorLib "Architect" website template design.                                                                                          | Architects, Construction                                          | [foundry.surge.sh](https://free-react-templates-foundry.surge.sh)               |
| 42  | **Gaas**           | Recreation of ColorLib "GaaS" website template design.                                                                                               | App Landing Page, Bootstrap, Business, Landing Page               | [gaas.surge.sh](https://free-react-templates-gaas.surge.sh)                     |
| 43  | **Girder**         | Recreation of ColorLib "Constructed" website template design.                                                                                        | Architects, Bootstrap 5                                           | [girder.surge.sh](https://free-react-templates-girder.surge.sh)                 |
| 44  | **Glitch**         | Recreation of ColorLib "Colorlib Error 404 V6" error page design.                                                                                    | 404 Error                                                         | [glitch.surge.sh](https://free-react-templates-glitch.surge.sh)                 |
| 45  | **Glow**           | Recreation of ColorLib "Colorlib Error 404 V8" error page design.                                                                                    | 404 Error                                                         | [glow.surge.sh](https://free-react-templates-glow.surge.sh)                     |
| 46  | **Halcyon**        | Recreation of ColorLib "Wellspa" website template design.                                                                                            | Beauty, Bootstrap, Business, Health Fitness                       | [halcyon.surge.sh](https://free-react-templates-halcyon.surge.sh)               |
| 47  | **Horse-club**     | Recreation of ColorLib "Horse Club" design.                                                                                                          | Animal, Business                                                  | [horse-club.surge.sh](https://free-react-templates-horse-club.surge.sh)         |
| 48  | **Itkol**          | Recreation of ColorLib "IT-Solution" (Itkol) website template design.                                                                                | App Landing Page, Business, Landing Page                          | [itkol.surge.sh](https://free-react-templates-itkol.surge.sh)                   |
| 49  | **Keystone**       | Recreation of ColorLib "Archi" website template design, built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4.  | Architects, Interior Design                                       | [keystone.surge.sh](https://free-react-templates-keystone.surge.sh)             |
| 50  | **Lagoon**         | Recreation of ColorLib "Colorlib Error 404 V17" error page design.                                                                                   | 404 Error                                                         | [lagoon.surge.sh](https://free-react-templates-lagoon.surge.sh)                 |
| 51  | **Landing**        | It is an original React recreation of the ColorLib "Landing Page Wordpress Themes" entry in TEMPLATES.md (App Landing Page category).                | App Landing Page, Bootstrap, Business, Landing Page, One Page     | [landing.surge.sh](https://free-react-templates-landing.surge.sh)               |
| 52  | **Launch**         | Recreation of ColorLib "Launch" website template design.                                                                                             | App Landing Page                                                  | [launch.surge.sh](https://free-react-templates-launch.surge.sh)                 |
| 53  | **Leopet**         | Recreation of ColorLib "Leopet" design.                                                                                                              | Animal, Bootstrap                                                 | [leopet.surge.sh](https://free-react-templates-leopet.surge.sh)                 |
| 54  | **Lustre**         | Recreation of ColorLib "Vogue" website template design.                                                                                              | Beauty                                                            | [lustre.surge.sh](https://free-react-templates-lustre.surge.sh)                 |
| 55  | **Masonry**        | Recreation of ColorLib "Astral" website template design.                                                                                             | Architects                                                        | [masonry.surge.sh](https://free-react-templates-masonry.surge.sh)               |
| 56  | **Massive**        | Recreation of ColorLib "Massive" website template design.                                                                                            | App Landing Page, One Page                                        | [massive.surge.sh](https://free-react-templates-massive.surge.sh)               |
| 57  | **Mosh**           | Recreation of ColorLib "Mosh" website template design.                                                                                               | App Landing Page, Bootstrap, Business, Landing Page, Startup      | [mosh.surge.sh](https://free-react-templates-mosh.surge.sh)                     |
| 58  | **Nova**           | Recreation of ColorLib "Colorlib Error 404 V19" error page design.                                                                                   | 404 Error                                                         | [nova.surge.sh](https://free-react-templates-nova.surge.sh)                     |
| 59  | **Onepage**        | It is an original React recreation of the ColorLib "One Page Wordpress Themes" entry in TEMPLATES.md (App Landing Page category).                    | App Landing Page, Landing Page, One Page, Startup                 | [onepage.surge.sh](https://free-react-templates-onepage.surge.sh)               |
| 60  | **Orbit**          | Recreation of ColorLib "Colorlib Error 404 10" error page design.                                                                                    | 404 Error                                                         | [orbit.surge.sh](https://free-react-templates-orbit.surge.sh)                   |
| 61  | **Pawcare**        | Recreation of ColorLib "Anipat" website template design.                                                                                             | Animal                                                            | [pawcare.surge.sh](https://free-react-templates-pawcare.surge.sh)               |
| 62  | **Pawpal**         | Recreation of ColorLib "PawPal" design.                                                                                                              | Animal, Astro, Tailwind Css                                       | [pawpal.surge.sh](https://free-react-templates-pawpal.surge.sh)                 |
| 63  | **Petcare**        | Recreation of ColorLib "Petcare" design.                                                                                                             | Animal                                                            | [petcare.surge.sh](https://free-react-templates-petcare.surge.sh)               |
| 64  | **Petsitting**     | Recreation of ColorLib "Petsitting" design.                                                                                                          | Animal, Bootstrap 5                                               | [petsitting.surge.sh](https://free-react-templates-petsitting.surge.sh)         |
| 65  | **Petvet**         | Recreation of ColorLib "Petvet" design.                                                                                                              | Animal, Business                                                  | [petvet.surge.sh](https://free-react-templates-petvet.surge.sh)                 |
| 66  | **Pop**            | Recreation of ColorLib "Colorlib Error 404 V7" error page design.                                                                                    | 404 Error                                                         | [pop.surge.sh](https://free-react-templates-pop.surge.sh)                       |
| 67  | **Postie**         | Recreation of ColorLib **"Standout"** website template design (https://colorlib.com/wp/template/standout/), built under a DIFFERENT name ("Postie" … | App Landing Page, Business                                        | [postie.surge.sh](https://free-react-templates-postie.surge.sh)                 |
| 68  | **Punch**          | Recreation of ColorLib "Colorlib Error 404 V4" error page design.                                                                                    | 404 Error                                                         | [punch.surge.sh](https://free-react-templates-punch.surge.sh)                   |
| 69  | **Query**          | Recreation of ColorLib "Colorlib Error 404 V5" error page design.                                                                                    | 404 Error                                                         | [query.surge.sh](https://free-react-templates-query.surge.sh)                   |
| 70  | **Scarlet**        | Recreation of ColorLib "Colorlib Error 404 V16" error page design.                                                                                   | 404 Error                                                         | [scarlet.surge.sh](https://free-react-templates-scarlet.surge.sh)               |
| 71  | **Showkit**        | Recreation of ColorLib "SuSan" website template design, built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 … | App Landing Page, Landing Page                                    | [showkit.surge.sh](https://free-react-templates-showkit.surge.sh)               |
| 72  | **Sky**            | Recreation of ColorLib "Colorlib Error 404 V2" error page design.                                                                                    | 404 Error                                                         | [sky.surge.sh](https://free-react-templates-sky.surge.sh)                       |
| 73  | **Slice**          | Recreation of ColorLib "Colorlib Error 404 V3" error page design.                                                                                    | 404 Error                                                         | [slice.surge.sh](https://free-react-templates-slice.surge.sh)                   |
| 74  | **Soar**           | Recreation of ColorLib "Raptor" website template design, built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4… | App Landing Page, Bootstrap, Landing Page, Web Hosting            | [soar.surge.sh](https://free-react-templates-soar.surge.sh)                     |
| 75  | **Synapse**        | Recreation of ColorLib "Nexus" website template design, built under a **different name** (Synapse) with the monorepo stack: Vite + React 19 + Tailw… | App Landing Page, Bootstrap, Landing Page                         | [synapse.surge.sh](https://free-react-templates-synapse.surge.sh)               |
| 76  | **Tears**          | Recreation of ColorLib "Colorlib Error 404 V12" error page design.                                                                                   | 404 Error                                                         | [tears.surge.sh](https://free-react-templates-tears.surge.sh)                   |
| 77  | **Thepetcare**     | Recreation of ColorLib "Thepetcare" design.                                                                                                          | Animal                                                            | [thepetcare.surge.sh](https://free-react-templates-thepetcare.surge.sh)         |
| 78  | **Trestle**        | Recreation of ColorLib "Arcade" website template design.                                                                                             | Architects, Business, Construction                                | [trestle.surge.sh](https://free-react-templates-trestle.surge.sh)               |
| 79  | **Verve**          | Recreation of ColorLib "Racks" website template design (https://colorlib.com/wp/template/racks/), built under a **different name** with the monorep… | App Landing Page, Bootstrap, Business, Startup                    | [verve.surge.sh](https://free-react-templates-verve.surge.sh)                   |
| 80  | **Violet**         | Recreation of ColorLib **"Sierra"** website template design (https://colorlib.com/wp/template/sierra/), built under a DIFFERENT name ("Violet" — th… | App Landing Page, Bootstrap, Business, Landing Page, Startup      | [violet.surge.sh](https://free-react-templates-violet.surge.sh)                 |
| 81  | **Vista**          | Recreation of ColorLib "Colorlib Error 404 V11" error page design.                                                                                   | 404 Error                                                         | [vista.surge.sh](https://free-react-templates-vista.surge.sh)                   |
| 82  | **Wordpressapp**   | It is an original React recreation of the ColorLib "Wordpress App Themes" entry in TEMPLATES.md (App Landing Page category).                         | App Landing Page, Bootstrap, Landing Page, One Page, Seo, Startup | [wordpressapp.surge.sh](https://free-react-templates-wordpressapp.surge.sh)     |
| 83  | **Zest**           | Recreation of ColorLib "Zeedapp" website template design, built under the new name **Zest** with the monorepo stack: Vite + React 19 + Tailwind CSS… | App Landing Page, Bootstrap, Landing Page, One Page               | [zest.surge.sh](https://free-react-templates-zest.surge.sh)                     |
