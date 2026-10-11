import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const ALERTS = [
  {
    id: 'info',
    label: 'Info alert',
    text: 'You have got some friends nearby — stop looking at your phone and greet them.',
    className: 'bg-info',
  },
  {
    id: 'success',
    label: 'Success alert',
    text: 'Yuhuuu! You got your $11.99 album from your favourite streaming service.',
    className: 'bg-success',
  },
  {
    id: 'warning',
    label: 'Warning alert',
    text: 'Hey, it looks like you still have the footer copyright notice in your layout. That is fine by us.',
    className: 'bg-warning',
  },
  {
    id: 'danger',
    label: 'Error alert',
    text: 'Damn! You screwed up the server this time, find a good sysadmin.',
    className: 'bg-danger',
  },
]

export function NotificationsShowcase() {
  return (
    <ShowcaseSection id="notifications" title="Notifications">
      {ALERTS.map((alert) => (
        <div
          key={alert.id}
          role="alert"
          className={cn('rounded px-4 py-3 text-sm text-white', alert.className)}
        >
          <strong className="mr-2">{alert.label}:</strong>
          {alert.text}
        </div>
      ))}
    </ShowcaseSection>
  )
}
