import { PANELS } from '../lib/site'
import { BandPanel } from './BandPanel'

/**
 * The page's only content band: one flat slate canvas that fills the viewport and
 * grows with the panels it carries (so the page has real scroll length for the
 * header's pinned state), holding the ten landing panels in menu order.
 */
export function Band() {
  return (
    <div data-band="" className="min-h-screen w-full bg-band">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-14 px-[15px] pt-[110px] pb-16">
        {PANELS.map((panel) => (
          <BandPanel key={panel.id} panel={panel} />
        ))}
      </div>
    </div>
  )
}
