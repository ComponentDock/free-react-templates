import { FOOTER } from '../data/hero'

/** The port's only addition below the band: the Component Dock line. */
export function PageFooter() {
  return (
    <footer className="border-t border-line bg-ground py-4">
      <p className="mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)] text-[13px] text-muted">
        {FOOTER.prefix}{' '}
        <a
          href={FOOTER.href}
          className="font-semibold text-ink underline-offset-2 transition-colors duration-200 hover:text-accent hover:underline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent"
        >
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
