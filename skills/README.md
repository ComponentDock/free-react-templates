# Skills

This directory is a **version-controlled copy of the agent skill library**
(Hermes `SKILL.md` format) so the repository is self-contained for AI-driven
development. Agents working in this repo can load any skill here.

## What's here

- **84 skills** copied from the Hermes library (`~/.hermes/skills/`), grouped by
  category: `autonomous-ai-agents/`, `creative/`, `email/`, `github/`, `media/`,
  `mlops/`, `note-taking/`, `productivity/`, `research/`, `smart-home/`,
  `social-media/`, `software-development/`, `automation/`, `apple/`.

## Skills most relevant to this project

| Skill                                                             | Purpose                                                                                                                   |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `research/colorlib-template-replication`                          | **Recreate ColorLib templates faithfully** (preview DOM, CSS tokens, screenshots) — mandatory reference for template work |
| `research/web-catalog-scraping`                                   | Catalog scraping (sitemaps → TEMPLATES.md checklists)                                                                     |
| `software-development/vite-react-monorepo-tooling`                | Monorepo TDD/gates/quirks for this stack                                                                                  |
| `software-development/vite-react-tailwind-scaffolding`            | Scaffolding Vite + React + Tailwind apps                                                                                  |
| `software-development/ai-native-project-setup`                    | AGENTS.md / docs / convention layers                                                                                      |
| `automation/autonomous-cron-pipelines`                            | Hourly agent pipelines with PR review gates                                                                               |
| `github/github-pr-workflow`                                       | Branch → PR → manual merge flow                                                                                           |
| `github/github-org-administration` + `github-org-bulk-operations` | Org cleanup at scale                                                                                                      |
| `productivity/surge-per-template-deploy`                          | One Surge.sh subdomain per template                                                                                       |

## Keeping this in sync

- When a skill is created or updated in `~/.hermes/skills/`, mirror it here
  (copy the folder) and commit.
- New skills for this project are written here first, then installed to the
  Hermes library with `skill_manage(action='create')`.
