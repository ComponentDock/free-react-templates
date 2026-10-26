import { useState } from 'react'
import { EVENTS, type EventItem } from './data/events'
import { EventCard } from './components/EventCard'
import { PageFooter } from './components/PageFooter'
import { PageHead } from './components/PageHead'

/**
 * Showbill — a city events desk: one head, three event cards on warm paper and
 * a single status line under the grid. The only state is which buttons have
 * written a calendar file plus the sentence that announces the last one.
 */
export function App() {
  const [saved, setSaved] = useState<ReadonlySet<string>>(() => new Set())
  const [status, setStatus] = useState('')

  function handleSaved(event: EventItem) {
    setSaved((previous) => new Set(previous).add(event.id))
    setStatus(`${event.title} downloaded as a calendar file. Open it to add the event.`)
  }

  return (
    <main className="mx-auto max-w-[1192px] px-4 py-[clamp(32px,6vw,72px)]">
      <PageHead />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
        {EVENTS.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            saved={saved.has(event.id)}
            onSaved={handleSaved}
          />
        ))}
      </div>
      <p
        role="status"
        className="mt-5 mb-0 min-h-[1.5em] text-center text-[15px] font-semibold text-blue-800"
      >
        {status}
      </p>
      <PageFooter />
    </main>
  )
}
