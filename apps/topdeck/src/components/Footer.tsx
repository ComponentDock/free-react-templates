import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { containerClass } from '../lib/styles'
import { cn } from '@free-react-templates/ui'

/**
 * The closing strip below the last section: a dark surface with a 1px translucent
 * hairline along its top edge, the wordmark line and the page's one outbound
 * credit, next to a year computed at render. The original snippet has no footer at
 * all — this is the app shell's addition.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-shell">
      <div
        className={cn(
          containerClass,
          'flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between',
        )}
      >
        <p className="text-[14px] text-white/70">
          {SITE_NAME} — {FOOTER_NOTE}
        </p>
        <p className="text-[14px] text-white/70">
          More templates at{' '}
          <a
            href={DOCK_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand underline transition-colors duration-300 hover:text-brand-shade focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {DOCK_LABEL}
          </a>{' '}
          · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
