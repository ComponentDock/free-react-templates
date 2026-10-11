import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const ALERTS = [
  {
    id: 'info',
    heading: 'Info alert:',
    body: "You've got some friends nearby, stop looking at your phone and find them...",
    className: 'bg-info text-white',
  },
  {
    id: 'success',
    heading: 'Success Alert:',
    body: "Yuhuuu! You've got your $11.99 album from the band you love.",
    className: 'bg-success text-strong',
  },
  {
    id: 'warning',
    heading: 'Warning Alert:',
    body: 'Hey, it looks like you still have the "copyright ©" line in your footer. Please update it!',
    className: 'bg-warning text-strong',
  },
  {
    id: 'error',
    heading: 'Error Alert:',
    body: 'Damn man! You screwed up the server this time. You should find a good excuse for your boss.',
    className: 'bg-danger text-white',
  },
]

/** Four solid alerts in the kit palette; each one can be dismissed. */
export function NotificationsShowcase() {
  const [dismissed, setDismissed] = useState<string[]>([])

  return (
    <ShowcaseSection id="notifications" title="Notifications">
      {ALERTS.filter(({ id }) => !dismissed.includes(id)).map(
        ({ id, heading, body, className }) => (
          <div
            key={id}
            role="alert"
            className={cn('flex items-start justify-between gap-4 rounded px-4 py-3', className)}
          >
            <p>
              <span className="font-bold">{heading}</span> {body}
            </p>
            <button
              type="button"
              aria-label={`Dismiss ${id} alert`}
              onClick={() => setDismissed([...dismissed, id])}
              className="cursor-pointer text-xl leading-none opacity-80 hover:opacity-100"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ),
      )}
    </ShowcaseSection>
  )
}
