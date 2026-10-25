import { cn } from '@free-react-templates/ui'
import { licenceBar } from '../content'
import { Stars, containerClass } from './ui'

/**
 * A compliance row, not a marketing row: the licence number, the certification
 * and the county are the first thing on the page, and the strip scrolls away
 * (only the header below it is sticky).
 */
export function LicenceBar() {
  return (
    <div
      data-licence-bar=""
      className="w-full border-b border-transparent bg-ink-800 text-ink-100 dark:bg-gray-900 dark:text-gray-300"
    >
      <div className={cn(containerClass, 'flex h-9 items-center justify-between gap-4 text-xs')}>
        <ul className="flex min-w-0 items-center gap-5">
          {licenceBar.items.map((item, index) => (
            <li
              key={item.label}
              className={cn(
                'flex items-center gap-1.5 whitespace-nowrap',
                index > 0 && 'hidden sm:flex',
              )}
            >
              <span className="opacity-70">{item.label}</span>
              {item.value ? <span className="font-semibold">{item.value}</span> : null}
            </li>
          ))}
        </ul>
        <p className="flex shrink-0 items-center gap-2 font-medium">
          <Stars size="h-3 w-3" />
          <span className="font-bold">{licenceBar.rating}</span>
          <span className="hidden opacity-70 sm:inline">{licenceBar.reviews}</span>
        </p>
      </div>
    </div>
  )
}
