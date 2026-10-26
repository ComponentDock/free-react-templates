import { useEffect, useReducer, useRef } from 'react'
import { INITIAL, type Notification } from '../data'
import { inboxReducer, initialInbox, unreadCount } from '../lib/inbox'
import { prefersReducedMotion } from '../lib/motion'
import { EmptyNote } from './EmptyNote'
import { InboxHeader } from './InboxHeader'
import { NotificationCard } from './NotificationCard'
import { Toast } from './Toast'

/** How long a card takes to fade out and slide 24 px right before it unmounts. */
const LEAVE_MS = 250

interface InboxProps {
  initial?: Notification[]
}

/**
 * The whole page's behaviour: one list, one counter, one status line and a
 * single-slot undo. The two-step archive (`beginArchive` → `commitArchive`) is what
 * buys the 250 ms leave; under `prefers-reduced-motion: reduce` the commit happens
 * in the same tick, so only the animation disappears, never the outcome.
 */
export function Inbox({ initial = INITIAL }: InboxProps) {
  const [state, dispatch] = useReducer(inboxReducer, initial, initialInbox)
  const readButtons = useRef(new Map<string, HTMLButtonElement>())
  const allButton = useRef<HTMLButtonElement>(null)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const pending = timers
    return () => {
      pending.current.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  const unread = unreadCount(state)

  const focusAfter = (id: string | null) => {
    const target = id ? readButtons.current.get(id) : allButton.current
    target?.focus()
  }

  const archive = (id: string) => {
    const index = state.items.findIndex((item) => item.id === id)
    // The next card takes focus; the previous one when this was the last, and the
    // header control when the list is about to be empty.
    const nextId = state.items[index + 1]?.id ?? state.items[index - 1]?.id ?? null

    dispatch({ type: 'beginArchive', id })

    if (prefersReducedMotion()) {
      dispatch({ type: 'commitArchive', id })
      focusAfter(nextId)
      return
    }

    const timer = window.setTimeout(() => {
      dispatch({ type: 'commitArchive', id })
      focusAfter(nextId)
    }, LEAVE_MS)
    timers.current.push(timer)
  }

  return (
    <section
      aria-labelledby="notebell-title"
      className="w-full max-w-[620px] text-[15px] leading-[1.5] text-ink"
    >
      <InboxHeader
        unread={unread}
        onMarkAllRead={() => dispatch({ type: 'allRead' })}
        allButtonRef={(element) => {
          allButton.current = element
        }}
      />
      <ul className="m-0 grid list-none gap-2.5 p-0">
        {state.items.map((item) => (
          <NotificationCard
            key={item.id}
            item={item}
            leaving={state.leaving.includes(item.id)}
            onToggleRead={(id) => dispatch({ type: 'toggle', id })}
            onArchive={archive}
            readButtonRef={(element) => {
              if (element) readButtons.current.set(item.id, element)
              else readButtons.current.delete(item.id)
            }}
          />
        ))}
      </ul>
      <Toast
        message={state.message}
        canUndo={state.undo !== null}
        onUndo={() => dispatch({ type: 'undo' })}
      />
      {state.items.length === 0 ? <EmptyNote /> : null}
    </section>
  )
}
