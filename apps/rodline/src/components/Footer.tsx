import { contact, footer } from '../content'

/** One row and one notice line. The Component Dock link is the only addition. */
export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white py-10 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-4 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={contact.phoneHref} className="font-bold text-ink-700 dark:text-gray-200">
              {contact.phone}
            </a>
            <a href="#top" className="transition-colors hover:text-ink-700 dark:hover:text-white">
              {footer.privacy}
            </a>
            <a href="#top" className="transition-colors hover:text-ink-700 dark:hover:text-white">
              {footer.terms}
            </a>
            <a
              href={contact.componentDock}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-ink-700 dark:hover:text-white"
            >
              {footer.more}
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-ink-300 dark:text-gray-500">{footer.notice}</p>
      </div>
    </footer>
  )
}
