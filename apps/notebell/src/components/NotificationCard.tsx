import { cn } from '@free-react-templates/ui'
import type { Notification } from '../data'
import { ArchiveIcon } from './icons'
import { NotificationAvatar } from './NotificationAvatar'

interface NotificationCardProps {
  item: Notification
  /** Playing the 250 ms leave: 24 px right and gone. */
  leaving?: boolean
  onToggleRead: (id: string) => void
  onArchive: (id: string) => void
  readButtonRef?: (element: HTMLButtonElement | null) => void
}

const ACTION =
  'inline-flex items-center gap-1.5 rounded-[9px] px-3 py-1.5 text-[15px] leading-[1.5] font-normal transition-[background-color,border-color,color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

/**
 * One notification: a 16 px-radius surface that is the page's only card, a 42 px
 * avatar, the body with an optional quote, the meta line and two actions. Unread is
 * three signals at once — surface, border and the 9 px dot in the body's right lane.
 */
export function NotificationCard({
  item,
  leaving = false,
  onToggleRead,
  onArchive,
  readButtonRef,
}: NotificationCardProps) {
  return (
    <li
      className={cn(
        'relative flex gap-3.5 rounded-[16px] border py-4 pr-[18px] pl-4 transition-[background-color,border-color,opacity,transform] duration-[250ms] ease-out',
        item.read ? 'border-line bg-surface' : 'border-line-unread bg-surface-unread',
        leaving && 'translate-x-6 opacity-0',
      )}
    >
      <NotificationAvatar avatar={item.avatar} />
      <div className="min-w-0 flex-1 pr-[18px]">
        <p
          className={cn(
            'm-0 text-[15px] leading-[1.5] [&_strong]:font-semibold [&_strong]:text-ink',
            item.read ? 'text-text-dim' : 'text-ink',
          )}
        >
          {item.body}
        </p>
        {item.quote ? (
          <blockquote className="mt-2 rounded-r-[10px] border-l-[3px] border-accent bg-quote-bg px-3 py-2.5 text-[14px] leading-[1.5] text-quote-ink">
            {item.quote}
          </blockquote>
        ) : null}
        <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">
          <span className="sr-only">{item.read ? 'Read · ' : 'Unread · '}</span>
          <time dateTime={item.time.dateTime}>{item.time.label}</time> · {item.category}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            ref={readButtonRef}
            type="button"
            onClick={() => onToggleRead(item.id)}
            className={cn(
              ACTION,
              'border border-btn-line bg-btn text-ink hover:border-btn-line-hover hover:bg-btn-hover',
            )}
          >
            {item.read ? 'Mark as unread' : 'Mark as read'}
          </button>
          <button
            type="button"
            onClick={() => onArchive(item.id)}
            className={cn(
              ACTION,
              'border border-transparent bg-transparent text-muted hover:bg-ghost-hover hover:text-ink',
            )}
          >
            <ArchiveIcon className="h-4 w-4" />
            Archive
          </button>
        </div>
      </div>
      {item.read ? null : (
        <span
          aria-hidden="true"
          className="absolute top-5 right-[18px] h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(129,140,248,0.2)]"
        />
      )}
    </li>
  )
}
