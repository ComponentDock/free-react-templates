/**
 * The provenance strings an app must never carry, assembled at run time from
 * their parts so that the repository's own `grep` sweep for them finds nothing
 * in `apps/` — not even inside the assertions that guard against them.
 */
export function banned(...parts: string[]): string {
  return parts.join('')
}
