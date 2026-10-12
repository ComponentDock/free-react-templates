import { HEADER_OFFSET } from '../lib/site'
import type { Section as SectionModel, SubPage } from '../lib/site'
import { containerClass } from '../lib/styles'

export interface SectionProps {
  section: SectionModel
  /** The dropdown destinations that hang off this section, in menu order. */
  subPages: SubPage[]
}

/**
 * One materialised target: an eyebrow, a heading and a short body, then — where
 * the section is a list or a grid — its cards or its frames. Every section is
 * scroll-anchored past the floating chrome (`HEADER_OFFSET`), so arriving from the
 * menu never leaves the heading under the bar.
 *
 * The destinations the dropdown declares are rendered inside the section of the
 * same kind as small anchored blocks, which is how the app keeps every flyout row
 * pointing at something real.
 */
export function Section({ section, subPages }: SectionProps) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      style={{ scrollMarginTop: HEADER_OFFSET }}
      className="border-t border-black/5 py-16"
    >
      <div className={containerClass}>
        <p className="text-[13px] font-bold tracking-[0.18em] text-brand uppercase">
          {section.eyebrow}
        </p>
        <h2 id={`${section.id}-heading`} className="mt-2 text-[28px] font-light text-ink">
          {section.heading}
        </h2>
        <p className="mt-3 max-w-[720px] text-[16px] text-ink-soft">{section.body}</p>

        {section.items && (
          <ul
            data-testid={`${section.id}-items`}
            className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
          >
            {section.items.map((item) => (
              <li key={item.title} className="border-l-2 border-brand bg-black/[0.03] p-5">
                <h3 className="text-[18px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        )}

        {section.photos && (
          <div
            data-testid={`${section.id}-photos`}
            className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {section.photos.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={`${section.heading} frame ${index + 1}`}
                loading="lazy"
                className="h-[180px] w-full object-cover"
              />
            ))}
          </div>
        )}

        {subPages.length > 0 && (
          <div
            data-testid={`${section.id}-subpages`}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {subPages.map((page) => (
              <section
                key={page.id}
                id={page.id}
                aria-labelledby={`${page.id}-heading`}
                style={{ scrollMarginTop: HEADER_OFFSET }}
                className="border-l-2 border-brand/40 bg-black/[0.02] p-5"
              >
                <p className="text-[12px] font-bold tracking-[0.18em] text-brand uppercase">
                  {page.eyebrow}
                </p>
                <h3 id={`${page.id}-heading`} className="mt-2 text-[16px] font-semibold text-ink">
                  {page.heading}
                </h3>
                <p className="mt-2 text-[15px] text-ink-soft">{page.body}</p>
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
