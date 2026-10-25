import { cn } from '@free-react-templates/ui'
import { mosaic, type MosaicTile } from '../data'
import { Wordmark } from './Wordmark'

function Tile({ tile }: { tile: MosaicTile }) {
  if (tile.tone === 'gap') {
    return (
      <div
        data-testid="mosaic-gap"
        aria-hidden="true"
        className="halftone hidden aspect-square md:block"
      />
    )
  }

  return (
    <a
      href="#contact"
      className={cn(
        'group relative block aspect-square overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white',
        tile.wide === true && 'sm:col-span-2 md:row-span-2',
      )}
    >
      {tile.tone === 'navy' ? (
        <span className="flex h-full w-full items-center justify-center bg-ink">
          <Wordmark />
        </span>
      ) : (
        <img
          src={`https://picsum.photos/seed/${tile.seed}/600/600${tile.tone === 'mono' ? '?grayscale' : ''}`}
          alt={tile.label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      )}
      <span className="pointer-events-none absolute inset-x-0 top-[10%] flex h-[80%] items-center justify-center bg-popup/95 px-4 text-center text-[20px] text-white opacity-0 transition-all duration-300 group-hover:top-0 group-hover:h-full group-hover:opacity-100 group-focus-visible:top-0 group-focus-visible:h-full group-focus-visible:opacity-100 md:text-[24px]">
        {tile.label}
      </span>
    </a>
  )
}

/**
 * Full-bleed gap-free mosaic: five equal columns at desktop, the measured tile
 * map (one deliberate hole showing the halftone, one 2x2 hero tile), squares
 * via `aspect-ratio` — never a JS height pass.
 */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
    >
      {mosaic.map((tile) => (
        <Tile key={tile.id} tile={tile} />
      ))}
    </section>
  )
}
