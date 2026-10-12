import type { Panel } from '../lib/site'

export interface AnchorPanelProps {
  panel: Panel
}

/**
 * One labelled target inside the band: the alternative to the reference's five
 * declared-but-missing pages, so no menu row points at nothing. It is a square
 * card on a translucent dark surface so the white copy stays legible over the
 * photograph, with the brand blue carrying the eyebrow, and it keeps clear of the
 * floating header when it is scrolled to.
 */
export function AnchorPanel({ panel }: AnchorPanelProps) {
  return (
    <section
      id={panel.id}
      aria-labelledby={`${panel.id}-heading`}
      className="scroll-mt-[7rem]"
    >
      <div
        data-testid="panel-card"
        className="h-full border-l-2 border-brand bg-black/45 p-6 backdrop-blur-sm"
      >
        <p className="text-[13px] font-bold tracking-[0.18em] uppercase text-brand">
          {panel.eyebrow}
        </p>
        <h2 id={`${panel.id}-heading`} className="mt-2 text-[26px] font-light text-white">
          {panel.heading}
        </h2>
        <p className="mt-3 text-[16px] text-white/80">{panel.body}</p>
      </div>
    </section>
  )
}
