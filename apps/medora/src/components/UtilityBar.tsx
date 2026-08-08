import { Phone, Search } from 'lucide-react'

export function UtilityBar() {
  return (
    <div aria-label="Top utility bar" className="hidden bg-paper text-xs text-mist sm:block">
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-5">
          <a
            href="#departments"
            className="font-semibold uppercase tracking-wide transition-colors hover:text-brand"
          >
            Fees &amp; Insurance
          </a>
          <a
            href="#appointment"
            className="font-semibold uppercase tracking-wide transition-colors hover:text-brand"
          >
            Request an Appointment
          </a>
        </div>
        <label className="hidden items-center gap-2 text-mist md:flex">
          <Search className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only">Search the website</span>
          <input
            type="search"
            placeholder="Search or enter website name"
            className="w-52 border-none bg-transparent text-xs text-ink outline-none placeholder:text-mist"
          />
        </label>
        <p className="flex items-center gap-1.5 font-semibold uppercase tracking-wide">
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          Emergency Line (+1) 555-0199-005
        </p>
      </div>
    </div>
  )
}
