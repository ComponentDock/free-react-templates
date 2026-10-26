import { Bookmark } from 'lucide-react'

interface PageHeadProps {
  savedCount: number
}

/**
 * The head is three pieces of information: the section title, a count of open
 * roles and the live size of the shortlist. The saved figure is a prop — it is
 * derived from the saved set in `App`, never read back out of the DOM.
 */
export function PageHead({ savedCount }: PageHeadProps) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-[14px]">
      <div>
        <h1 className="m-0 text-[clamp(26px,3.4vw,36px)] leading-[1.1] font-extrabold tracking-[-.02em]">
          Design &amp; product roles
        </h1>
        <p className="mt-1.5 mr-0 mb-0 ml-0 text-[15px] leading-[18px] text-muted">
          128 open positions · updated today
        </p>
      </div>
      <p className="m-0 inline-flex items-center gap-1.5 text-[15px] leading-[18px] font-medium">
        <Bookmark aria-hidden="true" size={18} strokeWidth={0} className="flex-none fill-ink text-ink" />
        Saved jobs: <strong className="font-medium">{savedCount}</strong>
      </p>
    </header>
  )
}
