import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const ALERTS = [
  {
    id: 'info',
    label: 'Info alert',
    text: "You've got some friends nearby, stop looking at your phone and find them...",
    className: 'bg-info text-white',
  },
  {
    id: 'success',
    label: 'Success Alert',
    text: "Yuhuuu! You've got your $11.99 album from your favourite streaming service.",
    className: 'bg-success text-heading',
  },
  {
    id: 'warning',
    label: 'Warning Alert',
    text: 'Hey, it looks like you still have the "copyright © 2015" in your footer. Please update it!',
    className: 'bg-warning text-heading',
  },
  {
    id: 'danger',
    label: 'Error Alert',
    text: 'Damn man! You screwed up the server this time. You should find a good excuse for your Boss...',
    className: 'bg-danger text-white',
  },
]

/** Four contextual alerts, each dismissible with its × control. */
export function NotificationsShowcase() {
  const [dismissed, setDismissed] = useState<string[]>([])

  const dismiss = (id: string) => setDismissed((current) => [...current, id])

  return (
    <ShowcaseSection id="notifications" title="Notifications">
      <div className="space-y-4">
        {ALERTS.filter((alert) => !dismissed.includes(alert.id)).map((alert) => (
          <div
            key={alert.id}
            role="alert"
            className={cn(
              'flex items-start justify-between gap-4 rounded px-4 py-3',
              alert.className,
            )}
          >
            <p className="text-sm">
              <strong className="mr-2">{alert.label}:</strong>
              {alert.text}
            </p>
            <button
              type="button"
              aria-label={`Dismiss ${alert.label}`}
              onClick={() => dismiss(alert.id)}
              className="cursor-pointer leading-none"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </ShowcaseSection>
  )
}
