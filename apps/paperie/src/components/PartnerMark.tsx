import type { MarkShape } from '../lib/site'

/**
 * The five partner marks. Each is one drawn glyph — a pure lookup of path data, so a mark can never
 * render an empty box and the component carries no branch of its own.
 */
const PATHS: Record<MarkShape, string> = {
  rings: 'M24 6a9 9 0 100 18 9 9 0 100-18M24 28a6 6 0 100 12 6 6 0 100-12',
  kettle: 'M12 22h24v12a6 6 0 01-6 6H18a6 6 0 01-6-6V22Zm6-6c0-5 12-5 12 0M12 26H8m28 0h4',
  leaf: 'M38 10C22 12 10 22 10 38c16 0 26-12 28-28Zm-24 24c6-6 12-12 20-18',
  wave: 'M8 30c6-8 12-8 18 0s12 8 18 0M8 20c6-8 12-8 18 0s12 8 18 0',
  star: 'M24 8l4 11 11 4-11 4-4 11-4-11-11-4 11-4 4-11Zm14 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z',
}

export function PartnerMark({ shape, className }: { shape: MarkShape; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[shape]} />
    </svg>
  )
}
