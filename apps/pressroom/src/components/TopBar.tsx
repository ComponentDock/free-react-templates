import { TRENDING_HEADLINE, TRENDING_LABEL, TRENDING_PHONE } from '../data'

export function TopBar() {
  return (
    <div className="hidden bg-black text-toptxt sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="bg-brand px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
            {TRENDING_LABEL}
          </span>
          <span className="truncate">{TRENDING_HEADLINE}</span>
        </div>
        <span className="hidden md:inline">{TRENDING_PHONE}</span>
      </div>
    </div>
  )
}
