/**
 * Temperatures with the true minus sign (U+2212), not a hyphen — the negative
 * night value has to read as arithmetic, and the glyph is visible in text.
 */
export function formatTemp(value: number): string {
  return value < 0 ? `−${Math.abs(value)}` : String(value)
}
