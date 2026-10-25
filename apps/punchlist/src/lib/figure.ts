/**
 * Figures on the page are strings with a shape — `2,400`, `4.9`, `96%`, `£45`.
 * The counter animates the number and keeps the shape, so the final text is
 * always the authored text, never a reformatted approximation of it.
 */

export interface ParsedFigure {
  /** Everything before the digits (`£`, or empty). */
  readonly prefix: string
  /** The number without its grouping separators. */
  readonly target: number
  readonly decimals: number
  /** Everything after the digits (`%`, `+`, ` yrs`, or empty). */
  readonly suffix: string
  readonly grouped: boolean
}

const FIGURE = /^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/

/** `null` when the string is not a figure — the caller then renders it verbatim. */
export function parseFigure(value: string): ParsedFigure | null {
  const match = FIGURE.exec(value)
  if (!match) {
    return null
  }
  const [, prefix = '', digits = '', suffix = ''] = match
  const plain = digits.replace(/,/g, '')
  const dot = plain.indexOf('.')
  return {
    prefix,
    target: Number(plain),
    decimals: dot === -1 ? 0 : plain.length - dot - 1,
    suffix,
    grouped: digits.includes(','),
  }
}

/** Half-way value of a count-up, in the same shape as the authored figure. */
export function formatFigure(value: number, parsed: ParsedFigure): string {
  const fixed =
    parsed.decimals > 0 ? value.toFixed(parsed.decimals) : String(Math.round(value))
  const [whole = '0', fraction] = fixed.split('.')
  const grouped = parsed.grouped ? Number(whole).toLocaleString('en-US') : whole
  return `${parsed.prefix}${grouped}${fraction === undefined ? '' : `.${fraction}`}${parsed.suffix}`
}

/** `easeOutCubic` — fast start, long settle; the reference's 2,000 ms curve. */
export function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3)
}
