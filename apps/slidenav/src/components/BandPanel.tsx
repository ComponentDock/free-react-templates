import { Badge, ButtonLink, Card, cn } from '@free-react-templates/ui'
import type { Panel, PanelItem } from '../lib/site'

/**
 * Story / offerings / posts panels: one squared card per item on the coral
 * surface (translucent white surface, no radius anywhere), with an optional
 * accent chip for the item's meta line and an optional seeded photo.
 */
function CardGrid({ items }: { items: PanelItem[] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title}>
          <Card className="h-full rounded-none border-white/20 bg-white/10 shadow-none">
            {item.photo ? (
              <img src={item.photo} alt="" className="h-40 w-full object-cover" />
            ) : null}
            <Card.Header className="p-5 pb-0">
              <h3 className="text-[18px] font-semibold text-white">{item.title}</h3>
              {item.meta ? (
                <Badge className="mt-2 rounded-none bg-accent text-white">{item.meta}</Badge>
              ) : null}
            </Card.Header>
            <Card.Content className="p-5 text-white/80">{item.note}</Card.Content>
          </Card>
        </li>
      ))}
    </ul>
  )
}

/** Portfolio panels: seeded placeholder frames with their captions. */
function PhotoGrid({ items }: { items: PanelItem[] }) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.title}>
          <img src={item.photo} alt={item.title} className="h-40 w-full object-cover" />
          <p className="mt-2 text-[13px] text-white/80">{item.title}</p>
        </li>
      ))}
    </ul>
  )
}

/** Contact panels: labelled rows whose value is itself the link. */
function ContactBlock({ items }: { items: PanelItem[] }) {
  return (
    <ul className="mt-8 grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title}>
          <h3 className="text-[13px] font-bold tracking-[0.14em] text-white/85 uppercase">
            {item.title}
          </h3>
          <a
            href={item.href}
            className="mt-1 inline-block text-white underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
 * One landing panel on the coral band. The nav's own order puts the panels in
 * document order, each carrying a stable id so its menu row scrolls to it and a
 * scroll margin tall enough that the floating header never covers the heading.
 */
export function BandPanel({ panel }: BandPanelProps) {
  return (
    <section
      id={panel.id}
      className="scroll-mt-32 border-t border-white/20 pt-10 first:border-t-0 first:pt-0"
    >
      <p className="text-[13px] font-bold tracking-[0.14em] text-white/85 uppercase">
        {panel.eyebrow}
      </p>
      <h2 className="mt-2 text-[30px] text-white">{panel.heading}</h2>
      <p className="mt-2 max-w-[640px] text-white/85">{panel.intro}</p>
      {body(panel)}
      {panel.actions ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {panel.actions.map((action) => (
            <ButtonLink
              key={action.label}
              href={action.href}
              variant={action.variant}
              className={cn(
                'rounded-none',
                action.variant === 'outline' && 'border-white/70 text-white hover:bg-white/10',
              )}
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}
    </section>
  )
}
