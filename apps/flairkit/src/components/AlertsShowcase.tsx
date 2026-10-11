import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'

const ALERT_FILLS: Record<string, string> = {
  primary: 'bg-flair-primary',
  success: 'bg-flair-success',
  danger: 'bg-flair-danger',
  warning: 'bg-flair-warning',
  info: 'bg-flair-info',
}

const ALERTS: { color: string; label: string }[] = [
  { color: 'primary', label: 'primary' },
  { color: 'success', label: 'success' },
  { color: 'danger', label: 'danger' },
  { color: 'warning', label: 'warning' },
  { color: 'info', label: 'info' },
]

/** Five solid dismissible alerts on a white band. */
export function AlertsShowcase() {
  const [dismissed, setDismissed] = useState(() => ALERTS.map(() => false))

  return (
    <Band>
      <SectionHeading>Alerts</SectionHeading>
      <div className="space-y-4">
        {ALERTS.map((alert, index) => {
          const close = () =>
            setDismissed((previous) => previous.map((value, i) => (i === index ? true : value)))

          return dismissed[index] ? null : (
            <div
              key={alert.color}
              role="alert"
              className={cn(
                'flex items-start gap-4 px-5 py-5 text-white',
                ALERT_FILLS[alert.color],
              )}
            >
              <p>
                A simple {alert.label} alert with{' '}
                <a href="#" className="text-white underline">
                  an example link
                </a>
                . Give it a click if you like.
              </p>
              <button
                type="button"
                aria-label={`Close ${alert.color} alert`}
                onClick={close}
                className="ml-auto cursor-pointer text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )
        })}
      </div>
    </Band>
  )
}
