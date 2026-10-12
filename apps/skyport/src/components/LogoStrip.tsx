import { cn } from '@free-react-templates/ui'

/** Five own muted-grey partner marks (text + glyph), never borrowed logo files. */
const MARKS = [
  { name: 'Northwind', glyph: 'circle' },
  { name: 'Cobalt', glyph: 'diamond' },
  { name: 'lumenworks', glyph: 'ring' },
  { name: 'Vertex', glyph: 'bars' },
  { name: 'Orbital', glyph: 'peak' },
] as const

function MarkGlyph({ glyph }: { glyph: (typeof MARKS)[number]['glyph'] }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0" fill="currentColor">
      {glyph === 'circle' ? <circle cx="12" cy="12" r="8" /> : null}
      {glyph === 'diamond' ? <path d="M12 3l9 9-9 9-9-9Z" /> : null}
      {glyph === 'ring' ? (
        <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
      ) : null}
      {glyph === 'bars' ? <path d="M4 14h3v6H4Zm6-5h3v11h-3Zm6-6h3v17h-3Z" /> : null}
      {glyph === 'peak' ? <path d="M12 4l9 16H3Z" /> : null}
    </svg>
  )
}

/**
 * The grey partner strip under the hero: a padded wrapper holding exactly five
 * muted monochrome marks, evenly distributed and vertically centred.
 */
export function LogoStrip() {
  return (
    <section className="bg-surface pt-[40px]">
      <div className="mx-auto max-w-[1140px] px-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 px-[65px] py-[60px] text-[#a8a8a8] sm:justify-between">
          {MARKS.map((mark, index) => (
            <li
              key={mark.name}
              className={cn(
                'inline-flex items-center gap-2 text-[15px] font-semibold tracking-wide uppercase',
                index === 2 && 'normal-case',
              )}
            >
              <MarkGlyph glyph={mark.glyph} />
              {mark.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
