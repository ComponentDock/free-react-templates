# VPS_SETUP — standing up a second pipeline node (FAST_MODE)

> Use this to replicate the free-react-templates pipeline on a new VPS. Each
> node runs the same 3-stream structure and coordinates with the existing
> node(s) via the GitHub `[~]` claim rule — multiple nodes just mean more
> parallel streams. Read `docs/FAST_MODE.md` (restore checklist) and
> `CRONJOB.md` (stream roles) first.

## Machine requirements

- **Ubuntu 22.04/24.04, ≥4 vCPU, ≥8 GB RAM, ≥40 GB disk** (this node: 4 cores /
  7.8 GB / 76 GB, fine).
- Outbound HTTPS to: github.com, preview.colorlib.com, surge.sh,
  your LLM provider (opencode-go), and the Hermes install endpoints.

## 1. Install the base toolchain

```bash
# Hermes agent (installs uv, python venv, and the `hermes` launcher)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Node.js 26.x + npm (linuxbrew works well; nvm is fine too)
brew install node        # or: nvm install 26

# GitHub CLI + auth (needs repo + workflow scopes)
brew install gh
gh auth login            # scopes: repo, workflow, read:org, gist

# Surge CLI (project devDependency, but a global copy helps debugging)
npm i -g surge && surge login   # email: chesteralantagudin@gmail.com
# save credentials for headless use:
surge token | xargs -I{} sh -c 'echo "machine surge.surge.sh login chesteralantagudin@gmail.com password {}" >> ~/.netrc'
```

## 2. Set the Hermes provider/model (same as this node)

```bash
hermes setup              # pick provider: opencode-go, model: deepseek-v4-flash
hermes model              # verify
```

Note: non-streaming responses from this provider can stall >10 min under load —
that's WHY the cron is a token-free watchdog and all real work runs in spawned
`hermes chat -q` processes (no idle timeout). Do NOT put LLM work in cron jobs
on this setup (600s idle limit kills stalled runs).

## 3. Clone the repo (three working trees)

```bash
git clone https://github.com/Free-Templates-cc/free-react-templates.git /root/free-react-templates
cd /root/free-react-templates && npm install        # main tree (stream 1)
git clone https://github.com/Free-Templates-cc/free-react-templates.git /root/free-react-templates-p2
cd /root/free-react-templates-p2 && npm install      # stream 2 (implementer clone)
git clone https://github.com/Free-Templates-cc/free-react-templates.git /root/free-react-templates-p3
cd /root/free-react-templates-p3 && npm install      # stream 3 (prep clone)
```

Set git identity once (global): `git config --global user.name "..."` /
`user.email "..."` and `gh auth setup-git`.

## 4. Install the prompt files + runner scripts

Copy from an existing node (`/root/.hermes/scripts/`):

| File                          | Purpose                                                                    |
| ----------------------------- | -------------------------------------------------------------------------- |
| `pipeline-implementer.prompt` | Implementer prompt (streams 1+2) — claims via `[~]`, prefers prepped specs |
| `pipeline-prep.prompt`        | Prep prompt (stream 3) — specs/research only, never `[~]`                  |
| `stream1-implementer.sh`      | Loop: `hermes chat -q "$(cat implementer.prompt)"`, 10-min gap, main tree  |
| `stream2-implementer.sh`      | Same, in `-p2`                                                             |
| `stream3-prep.sh`             | Same with the prep prompt, in `-p3`                                        |
| `cron-watchdog.sh`            | no_agent watchdog: restarts any dead stream; silent when healthy           |

All logs: `/root/.hermes/logs/stream{1,2,3}-*.log`.

## 5. Create the watchdog cron (replaces any old pipeline cron)

```
name:      Templates pipeline watchdog
schedule:  every 15m
no_agent:  TRUE          ← critical: pure script, zero LLM, no idle timeout
script:    cron-watchdog.sh   (resolves under ~/.hermes/scripts/)
deliver:   origin        ← only emits when a stream was restarted
prompt:    (ignored when no_agent — set a one-liner anyway)
```

The watchdog spawns the three streams as detached `nohup` processes. They
survive gateway restarts (the watchdog re-spawns them on the next tick if
they died). This is the pattern that eliminates the
`TimeoutError: idle for 600s ... waiting for non-streaming API` failures.

## 6. FAST_MODE repo settings (already in the repo — no action)

The repo carries everything: per-app local gate (`scripts/verify-app.sh`,
pre-push hook), full gate in CI on merge + nightly (`npm run gate`,
`.github/workflows/nightly-gate.yml`), restore checklist
(`docs/FAST_MODE.md`). Just keep the repo updated (`git pull --rebase`).

## 7. Coordination rules (how multiple nodes don't collide)

- **Claim rule**: implementers push a `[~]` mark to `main` BEFORE branching;
  if the push races, they re-pick the next item. Works across nodes.
- **Prep rule**: stream 3 takes the first `- [ ]` item WITHOUT a spec on main;
  implementers prefer the first item WITH a prepped spec.
- **Bookkeeping**: after a merge, `pull --rebase` before pushing (`[x]` +
  surge URL + `npm run readme:status`). Rebase discipline absorbs races.
- **Surge rate limit**: ~30 deploys/window per account. On mass redeploys use
  the self-healing loop (on "Rate limited", sleep 10 min, retry). Both nodes
  share ONE surge account — stagger big redeploys.

## 8. First-run smoke test

```bash
bash /root/.hermes/scripts/cron-watchdog.sh        # spawns all 3 streams
pgrep -af "stream[123]-"                            # expect 3 processes
tail -f /root/.hermes/logs/stream3-prep.log         # expect agent activity
```

Then let the cron take over; verify a merged PR + auto-deploy within a day.
