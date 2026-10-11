import { cn } from '@free-react-templates/ui'
import { Band, GroupLabel } from './Band'

interface BadgeTone {
  id: string
  label: string
  classes: string
}

/** Tinted fills: color at 0.1 alpha (warning/info stronger at 0.5). */
const TONED: BadgeTone[] = [
  { id: 'primary', label: 'Primary', classes: 'bg-kit-primary/10 text-kit-primary' },
  { id: 'secondary', label: 'Secondary', classes: 'bg-kit-secondary/10 text-kit-secondary' },
  { id: 'success', label: 'Success', classes: 'bg-kit-success/10 text-kit-success' },
  { id: 'danger', label: 'Danger', classes: 'bg-kit-danger/10 text-kit-danger' },
  { id: 'warning', label: 'Warning', classes: 'bg-kit-warning/50 text-kit-warning' },
  { id: 'info', label: 'Info', classes: 'bg-kit-info/50 text-kit-info' },
  { id: 'light', label: 'Light', classes: 'bg-kit-light text-body' },
  { id: 'dark', label: 'Dark', classes: 'bg-kit-dark/10 text-kit-dark' },
]

const COUNTS = [
  { id: 'primary', classes: 'bg-kit-primary text-white' },
  { id: 'success', classes: 'bg-kit-success text-white' },
  { id: 'danger', classes: 'bg-kit-danger text-white' },
  { id: 'warning', classes: 'bg-kit-warning text-white' },
]

function badgeClasses(extra: string) {
  return cn('inline-block px-2 py-1 text-[10px] font-semibold uppercase tracking-wide', extra)
}

export function BadgeShowcase() {
  return (
    <Band
      title="Badge"
      lead="Documentation and examples for badges, our small count and labeling component."
    >
      <div>
        <GroupLabel>Notifications</GroupLabel>
        <div className="flex flex-wrap items-center gap-6">
          {COUNTS.map((count) => (
            <span key={count.id} className="flex items-center gap-2">
              Notifications
              <span className={badgeClasses(cn('rounded-full', count.classes))}>4</span>
            </span>
          ))}
        </div>
      </div>

      <div>
        <GroupLabel>Contextual Variations</GroupLabel>
        <div className="flex flex-wrap items-center gap-2">
          {TONED.map((tone) => (
            <span key={tone.id} className={badgeClasses(cn('rounded', tone.classes))}>
              {tone.label}
            </span>
          ))}
        </div>
      </div>

      <div>
        <GroupLabel>Pill badges</GroupLabel>
        <div className="flex flex-wrap items-center gap-2">
          {TONED.map((tone) => (
            <span key={tone.id} className={badgeClasses(cn('rounded-full', tone.classes))}>
              {tone.label}
            </span>
          ))}
        </div>
      </div>
    </Band>
  )
}
