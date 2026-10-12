import type { FaqEntry, GalleryShot, Section as SectionModel, SectionItem, SubPage } from '../lib/site'
import { containerClass, sectionAnchorStyle } from '../lib/styles'
import { SectionForm } from './SectionForm'

/** How a block is framed: a top-level band, or one nested inside another section. */
type SectionVariant = 'base' | 'nested'

const FRAME: Record<SectionVariant, string> = {
  base: 'border-t border-black/5 py-16',
  nested: 'mt-10 border-l-2 border-brand/40 bg-black/[0.02] p-6',
}

const HEADING: Record<SectionVariant, string> = {
  base: 'mt-2 text-[28px] font-light text-ink',
  nested: 'mt-2 text-[20px] font-semibold text-ink',
}

export interface SectionProps {
  section: SectionModel
  /** The destinations that hang off this section, rendered inside it. */
  subPages?: SubPage[]
  variant?: SectionVariant
}

/**
 * One destination the bar declares, materialised: its eyebrow, heading and body, then
 * whichever of the page's shapes its data carries — a grid of cards, a gallery, an FAQ,
 * a form — and, where destinations hang off it, those rendered inside it so that every
 * row of a submenu lands on the section of the same kind it belongs to. Every target is
 * scroll-anchored clear of the floating bar, so arriving from a row never leaves the
 * heading underneath it.
 */
export function Section({ section, subPages = [], variant = 'base' }: SectionProps) {
  const Heading: 'h2' | 'h3' = variant === 'nested' ? 'h3' : 'h2'

  return (
    <section
      id={section.id}
      data-testid={`${section.id}-section`}
      aria-labelledby={`${section.id}-heading`}
      style={sectionAnchorStyle}
      className={FRAME[variant]}
    >
      <div className={variant === 'base' ? containerClass : undefined}>
        <p className="text-[13px] font-bold tracking-[0.18em] text-brand uppercase">
          {section.eyebrow}
        </p>
        <Heading id={`${section.id}-heading`} className={HEADING[variant]}>
          {section.heading}
        </Heading>
        <p className="mt-3 max-w-[720px] text-[16px] text-ink-soft">{section.body}</p>

        {section.items && <CardGrid id={section.id} items={section.items} />}
        {section.images && <Gallery id={section.id} images={section.images} />}
        {section.faq && <FaqList id={section.id} entries={section.faq} />}
        {section.form && <SectionForm id={section.id} form={section.form} />}

        {subPages.length > 0 && (
          <div
            data-testid={`${section.id}-subpages`}
            className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {subPages.map((page) => (
              <Section key={page.id} section={page} variant="nested" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface CardGridProps {
  id: string
  items: SectionItem[]
}

/** A section's rows: a title and a line each, with a picture above them where it has one. */
function CardGrid({ id, items }: CardGridProps) {
  return (
    <ul
      data-testid={`${id}-items`}
      className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item) => (
        <li key={item.title} className="border-l-2 border-brand bg-black/[0.03] p-5">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="mb-4 h-[180px] w-full rounded-btn object-cover"
            />
          )}
          <h3 className="text-[18px] font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-[15px] text-ink-soft">{item.body}</p>
        </li>
      ))}
    </ul>
  )
}

interface GalleryProps {
  id: string
  images: GalleryShot[]
}

/** A section's pictures, laid out as a grid of frames. */
function Gallery({ id, images }: GalleryProps) {
  return (
    <ul
      data-testid={`${id}-gallery`}
      className="mt-8 grid list-none grid-cols-2 gap-4 p-0 lg:grid-cols-4"
    >
      {images.map((image) => (
        <li key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-[220px] w-full rounded-btn object-cover"
          />
        </li>
      ))}
    </ul>
  )
}

interface FaqListProps {
  id: string
  entries: FaqEntry[]
}

/** A section's questions, each with its answer written out beside it. */
function FaqList({ id, entries }: FaqListProps) {
  return (
    <dl data-testid={`${id}-faq`} className="mt-8 max-w-[820px]">
      {entries.map((entry) => (
        <div key={entry.question} className="border-t border-black/10 py-4">
          <dt className="text-[17px] font-semibold text-ink">{entry.question}</dt>
          <dd className="mt-1 text-[15px] text-ink-soft">{entry.answer}</dd>
        </div>
      ))}
    </dl>
  )
}
