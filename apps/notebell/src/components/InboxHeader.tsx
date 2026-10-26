import { cn } from '@free-react-templates/ui'

interface InboxHeaderProps {
  unread: number
  onMarkAllRead: () => void
  allButtonRef?: (element: HTMLButtonElement | null) => void
}

/**
 * The page's single h1 with the counter pill inside it, and the one control that
 * acts on the whole list. The pill turns grey at zero — that is the only "empty"
 * signal the header carries.
 */
export function InboxHeader({ unread, onMarkAllRead, allButtonRef }: InboxHeaderProps) {
  return (
    <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <h1
        id="notebell-title"
        className="m-0 flex items-center gap-2.5 text-[24px] leading-[1.5] font-bold tracking-[-0.02em]"
      >
        Notifications
        <span
          className={cn(
            'inline-grid h-[26px] min-w-[26px] place-items-center rounded-full px-2 text-[14px] font-bold',
            unread === 0 ? 'bg-count-zero text-muted' : 'bg-accent text-ground',
          )}
        >
          {unread}
        </span>
        <span className="sr-only"> unread</span>
      </h1>
      <button
        ref={allButtonRef}
        type="button"
        onClick={onMarkAllRead}
        className="rounded-lg px-2.5 py-1.5 text-[15px] leading-[1.5] font-normal text-accent hover:bg-accent-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Mark all as read
      </button>
    </header>
  )
}
