import { Badge, Card, cn } from '@free-react-templates/ui'
import type { Panel, PanelItem } from '../lib/site'

/**
 * The grid used by people / plans / offerings / quotes / posts panels: one card
 * per item, squared off (no radius anywhere on this page except the off-canvas
 * submenu toggle), with an optional standfirst badge and an optional photo.
 */
function CardGrid({ items }: { items: PanelItem[] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title}>
          <Card className="h-full rounded-none border-white/10 bg-white/5 shadow-none">
            {item.photo ? (
              <img src={item.photo} alt="" className="h-40 w-full object-cover" />
            ) : null}
            <Card.Header className="p-5 pb-0">
              <h3 className="text-[18px] font-semibold text-white">{item.title}</h3>
              {item.meta ? (
                <Badge className="mt-2 rounded-none bg-brand/20 text-brand">{item.meta}</Badge>
              ) : null}
            </Card.Header>
            <Card.Content className="p-5 text-white/75">{item.note}</Card.Content>
          </Card>
        </li>
      ))}
    </ul>
  )
}

/** Question panels: a ruled list instead of a grid. */
function QuestionList({ items }: { items: PanelItem[] }) {
  return (
    <ul className="mt-8 grid gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-l-2 border-brand pl-4">
          <h3 className="text-[17px] font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-white/75">{item.note}</p>
        </li>
      ))}
    </ul>
  )
}

/** Photo panels: seeded placeholder frames with their captions. */
function PhotoGrid({ items }: { items: PanelItem[] }) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.title}>
          <img src={item.photo} alt={item.title} className="h-40 w-full object-cover" />
          <p className="mt-2 text-[13px] text-white/70">{item.title}</p>
        </li>
      ))}
    </ul>
  )
}

/** Contact panels: labelled rows that are themselves the links. */
function ContactBlock({ items }: { items: PanelItem[] }) {
  return (
    <ul className="mt-8 grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title}>
          <h3 className="text-[13px] font-bold tracking-[0.14em] text-white/70 uppercase">
            {item.title}
          </h3>
          <a
            href={item.href}
            className="mt-1 inline-block text-[18px] text-brand underline transition-colors duration-300 hover:text-brand-shade focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {item.note}
          </a>
        </li>
      ))}
    </ul>
  )
}

function body(panel: Panel) {
  switch (panel.kind) {
    case 'lead':
      return null
    case 'questions':
      return <QuestionList items={panel.items} />
    case 'photos':
      return <PhotoGrid items={panel.items} />
    case 'contact':
      return <ContactBlock items={panel.items} />
    default:
      return <CardGrid items={panel.items} />
  }
}

export interface BandPanelProps {
  panel: Panel
}

/**
 * One landing panel on the slate band. The nav's own order puts the panels in
 * document order, each carrying a stable id so its menu row scrolls to it and a
 * scroll margin tall enough that the pinned bar never covers the heading.
 */
export function BandPanel({ panel }: BandPanelProps) {
  return (
    <section
      id={panel.id}
      className={cn('scroll-mt-24 border-t border-white/10 pt-10', 'first:border-t-0 first:pt-0')}
    >
      <p className="text-[13px] font-bold tracking-[0.14em] text-brand uppercase">
        {panel.eyebrow}
      </p>
      <h2 className="mt-2 text-[30px] text-white">{panel.heading}</h2>
      <p className="mt-2 max-w-[640px] text-white/80">{panel.intro}</p>
      {body(panel)}
    </section>
  )
}
