import { adWidgetLabel } from '../data'
import { NewsletterForm } from './NewsletterForm'

/** Right sidebar of the news section: newsletter widget + ad placeholder
    (reference: .sidebar-area .newsletter-widget + .add-widget). */
export function Sidebar() {
  return (
    <aside className="space-y-8 lg:pl-10">
      <NewsletterForm />
      <div className="flex h-64 items-center justify-center border border-hairline bg-mist">
        <p className="text-xs font-bold tracking-widest text-ash uppercase">{adWidgetLabel}</p>
      </div>
    </aside>
  )
}
