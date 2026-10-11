import { useState } from 'react'
import { Info, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band, DemoPanel, GroupLabel } from './Band'

interface AlertTone {
  id: string
  label: string
  classes: string
}

const TONES: AlertTone[] = [
  { id: 'primary', label: 'primary', classes: 'bg-kit-primary text-white' },
  { id: 'secondary', label: 'secondary', classes: 'bg-kit-secondary text-white' },
  { id: 'success', label: 'success', classes: 'bg-kit-success text-white' },
  { id: 'danger', label: 'danger', classes: 'bg-kit-danger text-white' },
  { id: 'warning', label: 'warning', classes: 'bg-kit-warning text-white' },
  { id: 'info', label: 'info', classes: 'bg-kit-info text-white' },
  { id: 'light', label: 'light', classes: 'border border-gray-200 bg-kit-light text-body' },
  { id: 'dark', label: 'dark', classes: 'bg-kit-dark text-white' },
]

const DISMISSIBLE: AlertTone[] = [
  { id: 'dismiss-primary', label: 'primary', classes: 'bg-kit-primary text-white' },
  { id: 'dismiss-secondary', label: 'secondary', classes: 'bg-kit-secondary text-white' },
]

export function AlertsShowcase() {
  const [dismissed, setDismissed] = useState<string[]>([])

  const dismiss = (id: string) => setDismissed((prev) => [...prev, id])

  return (
    <Band
      id="start"
      title="Alerts"
      lead="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
    >
      <DemoPanel className="space-y-3">
        {TONES.map((tone) => (
          <div
            key={tone.id}
            role="alert"
            className={cn('rounded px-4 py-3 leading-normal', tone.classes)}
          >
            A simple {tone.label} alert—check it out!
          </div>
        ))}
      </DemoPanel>

      <div>
        <GroupLabel>With Icon + Shadow</GroupLabel>
        <div className="flex items-center gap-2 rounded bg-kit-info px-4 py-3 text-white shadow-btn-info">
          <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="leading-normal">
            <strong className="font-semibold">Info:</strong> A simple info alert—check it out!
          </span>
        </div>
      </div>

      <div>
        <GroupLabel>Dismissing</GroupLabel>
        <div className="space-y-3">
          {DISMISSIBLE.filter((tone) => !dismissed.includes(tone.id)).map((tone) => (
            <div
              key={tone.id}
              role="alert"
              className={cn(
                'flex items-center justify-between gap-4 rounded px-4 py-3 leading-normal shadow-kit-card',
                tone.classes,
              )}
            >
              <span>A simple {tone.label} alert—check it out!</span>
              <button
                type="button"
                aria-label={`Dismiss ${tone.label} alert`}
                onClick={() => dismiss(tone.id)}
                className="shrink-0 cursor-pointer text-white/90 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Band>
  )
}
