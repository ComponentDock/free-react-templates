/** Turn a row label into a stable DOM id fragment ("More" → "more"). */
export function toId(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}
