# Hermes cron run forensics

When a cron job's behavior is in question ("did the job make those
commits?"), read the artifacts instead of guessing.

## Saved run reports

`~/.hermes/cron/output/<job_id>/<timestamp>.md` — one file per run,
containing the prompt (including the delivery wrapper) and the job's final
response. This is the job's own saved report and names its commits.

## Execution DB

`~/.hermes/cron/executions.db` — SQLite:

```
CREATE TABLE executions (
  id TEXT, job_id TEXT, source TEXT, process_id TEXT, pid INTEGER,
  process_started_at INTEGER, status TEXT, claimed_at TEXT,
  started_at TEXT, finished_at TEXT, error TEXT);
```

Query:

```bash
sqlite3 ~/.hermes/cron/executions.db \
  "SELECT claimed_at, started_at, finished_at, status \
   FROM executions WHERE job_id='<id>' ORDER BY rowid DESC"
```

## The in-flight gotcha (proven this session)

`cronjob action=list` shows `last_run_at: null` and `last_status: null`
until a run COMPLETES. A long run (audit → fix → verify → commit → push can
take 50+ minutes) therefore looks like it "never ran" while it is actively
committing. Meanwhile `next_run_at` has already advanced past the fired tick.

Evidence a set of commits came from the cron job:

- executions.db row for the job has `started_at` BEFORE the commit timestamps
  and `finished_at` AFTER them;
- the job's `output/<timestamp>.md` report names those commits;
- commit author/committer matches the host git identity used by cron runs
  (e.g. `root <root@hostname>` when the machine default is in use).

This resolved a real mystery: the user's uncommitted auth refactor was swept
up by the hourly audit job at 18:55 — `cronjob list` showed `last_run_at:
null` at 18:57, so it looked like "another agent" had committed it. The
executions DB showed the job started 18:11 and finished 19:04.
