import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { BottomBar } from './BottomBar'
import { CentreBand } from './CentreBand'
import { Slideshow } from './Slideshow'
import { TopBar } from './TopBar'

export interface PendingProps {
  className?: string
}

/**
 * The whole page: one full-height column that distributes exactly three bands
 * top-to-bottom with `space-between`, sitting over a viewport-fixed photographic
 * slideshow and under a single 50% scrim. There is no navbar, no footer band, no
 * second section and nothing to scroll.
 *
 * The slideshow is deliberately a SIBLING of the column rather than a child: the
 * column is a `z-index:1` stacking context, so a slideshow inside it would be
 * composited underneath the column's own content and the 50% scrim — the layer
 * order only works when the two are siblings in the same context. The credit line
 * is pinned absolutely, so the three bands stay the column's only laid-out
 * children.
 */
export function Pending({ className }: PendingProps) {
  return (
    <>
      <Slideshow />

      <main
        data-testid="pending"
        className={cn(
          'relative z-[1] flex min-h-screen w-full flex-col items-center justify-between',
          'px-[75px] pt-[20px] pb-[40px] max-[576px]:px-[15px]',
          className,
        )}
      >
        <div
          aria-hidden="true"
          data-testid="scrim"
          className="absolute inset-0 z-[-1] bg-black/50"
        />

        <TopBar />

        <CentreBand />

        <BottomBar />

        <Attribution />
      </main>
    </>
  )
}
