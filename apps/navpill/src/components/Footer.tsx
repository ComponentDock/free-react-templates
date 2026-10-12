import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'

/**
 * The closing strip at the very bottom of the 200vh page: the wordmark line and
 * the single outbound credit, which is the page's only external destination.
 */
export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-white">
      <div className="mx-auto flex w-full flex-col gap-2 px-[15px] py-6 sm:max-w-[540px] sm:flex-row sm:items-center sm:justify-between md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <p className="text-[14px] text-ink/70">
          {SITE_NAME} — {FOOTER_NOTE}
        </p>
        <p className="text-[14px] text-ink/70">
          More templates at{' '}
          <a
            href={DOCK_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-accent underline transition-colors duration-300 hover:text-accent-shade focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {DOCK_LABEL}
          </a>
        </p>
      </div>
    </footer>
  )
}
