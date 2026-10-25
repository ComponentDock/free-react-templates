import { contact } from '../content'

/** 40 px graphite strip: counter hours, collection promise, account link, phone. */
export function UtilityBar() {
  return (
    <div className="bg-ink-800 text-ink-100">
      <div className="container mx-auto flex h-10 items-center justify-between gap-4 px-4 text-xs lg:px-8">
        <p className="min-w-0 truncate">
          Counter open Mon - Fri 06:30 - 17:00, Sat 07:00 - 13:00
          <span className="ml-3 hidden text-ink-300 sm:inline">
            Next-day collection on stocked lines
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-6">
          <a
            href="#trade"
            className="hidden font-semibold transition-colors hover:text-primary-300 sm:inline"
          >
            Trade accounts
          </a>
          <a
            href={contact.phoneHref}
            data-phone
            className="font-semibold transition-colors hover:text-primary-300"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
