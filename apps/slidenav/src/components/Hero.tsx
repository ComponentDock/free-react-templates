import { PANELS } from '../lib/site'
import { BandPanel } from './BandPanel'

/**
 * The page's only content band: one flat coral canvas that fills the viewport and
 * grows with the panels it carries (which is what gives the page real scroll
 * length, and lets the transparent header prove it scrolls away). The header
 * floats over it, so the coral shows through behind the wordmark and the row.
 */
export function Hero() {
  return (
    <div data-band="" className="min-h-screen w-full bg-band">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-16 px-[15px] pt-[110px] pb-16">
        {PANELS.map((panel) => (
          <BandPanel key={panel.id} panel={panel} />
        ))}
      </div>
    </div>
  )
}
