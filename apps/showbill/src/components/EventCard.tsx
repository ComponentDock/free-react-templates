import { CalendarPlus, Clock, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { EN_DASH, type EventItem } from '../data/events'
import { buildIcs, clockLabel, downloadIcs, isoDate, slugify } from '../lib/calendar'
import { DateLeaf } from './DateLeaf'

interface EventCardProps {
  event: EventItem
  /** True once this card's button has written a calendar file. */
  saved: boolean
  onSaved: (event: EventItem) => void
}

/**
 * One event: a photograph with a hanging date leaf, the category, the title, a
 * clock row and a pin row, an attendee cluster, then a perforated stub with the
 * price and the Add-to-calendar button. The card itself has no hover state.
 */
export function EventCard({ event, saved, onSaved }: EventCardProps) {
  const { price } = event

  function handleClick() {
    downloadIcs(`${slugify(event.title)}.ics`, buildIcs(event))
    onSaved(event)
  }

  return (
    <article className="relative flex flex-col rounded-[20px] bg-white text-[15px] leading-[1.45] text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,.05),0_16px_36px_-24px_rgba(0,0,0,.35)]">
      <div className="relative aspect-[700/440] w-full">
        <img
          src={`https://picsum.photos/seed/${event.imageSeed}/700/440`}
          alt={event.alt}
          width={700}
          height={440}
          loading="lazy"
          className="h-full w-full rounded-t-[20px] object-cover"
        />
        <DateLeaf start={event.start} />
        {event.flag ? (
          <p className="absolute top-[14px] right-[14px] z-10 m-0 rounded-full bg-amber-400 px-[11px] py-[5px] text-[12.5px] font-extrabold text-amber-950">
            {event.flag}
          </p>
        ) : null}
      </div>

      <div className="flex-1 px-[22px] pt-[44px] pb-[18px]">
        <p className="m-0 text-[13px] leading-[1.45] font-extrabold tracking-[.08em] text-blue-700 uppercase">
          {event.type}
        </p>
        <h2 className="mt-1 mb-3 text-[21px] leading-[1.2] font-extrabold tracking-[-.02em] text-neutral-900">
          {event.title}
        </h2>
        <ul className="m-0 grid list-none gap-[6px] p-0 text-[15px] text-neutral-700">
          <li className="flex items-center gap-2">
            <Clock size={17} strokeWidth={2} aria-hidden="true" className="flex-none" />
            <span>
              <time dateTime={isoDate(event.start)}>{clockLabel(event.start)}</time>
              <span className="mx-[8px]">{EN_DASH}</span>
              <time dateTime={isoDate(event.end)}>{clockLabel(event.end)}</time>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={17} strokeWidth={2} aria-hidden="true" className="flex-none" />
            <span>{event.venueLabel}</span>
          </li>
        </ul>

        <div className="mt-4 flex items-center gap-[10px]">
          <span aria-hidden="true" className="flex">
            {event.faces.map((face, index) => (
              <span
                key={face.initials}
                style={{ backgroundColor: face.color }}
                className={cn(
                  'flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-[10.5px] font-extrabold tracking-[-.02em] text-white',
                  index > 0 && '-ml-[6px]',
                )}
              >
                {face.initials}
              </span>
            ))}
          </span>
          <span className="text-[14px] font-medium text-neutral-600">{event.countLabel}</span>
        </div>
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-ticket px-[22px] pt-[18px] pb-[20px]">
        <span
          aria-hidden="true"
          className="absolute top-[-11px] left-[-10px] h-5 w-5 rounded-full bg-paper"
        />
        <span
          aria-hidden="true"
          className="absolute top-[-11px] right-[-10px] h-5 w-5 rounded-full bg-paper"
        />
        {price.labelAfter ? (
          <p className="m-0 text-[14px] text-neutral-600">
            <span className="text-[20px] font-extrabold text-neutral-900">{price.amount}</span>{' '}
            {price.label}
          </p>
        ) : (
          <p className="m-0 text-[14px] text-neutral-600">
            {price.label}{' '}
            <span className="text-[20px] font-extrabold text-neutral-900">{price.amount}</span>
          </p>
        )}
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            'inline-flex min-w-[173px] items-center justify-center gap-2 rounded-[12px] border-[1.5px] px-4 py-[10px] text-[14.5px] font-semibold transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-blue-600',
            saved
              ? 'border-green-700 bg-green-50 text-green-700'
              : 'border-blue-700 bg-white text-blue-700 hover:bg-blue-700 hover:text-white',
          )}
        >
          <CalendarPlus size={18} strokeWidth={2} aria-hidden="true" className="flex-none" />
          {saved ? 'Saved to calendar' : 'Add to calendar'}
        </button>
      </div>
    </article>
  )
}
