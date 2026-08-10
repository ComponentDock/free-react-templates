import { breakingNewsHeadline, breakingNewsLabel } from '../data'

export function NewsTicker() {
  return (
    <div className="bg-white px-5 py-3">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
        <span className="font-medium text-primary-600">{breakingNewsLabel}</span>
        <a
          href="#breaking"
          className="text-xs font-light text-heading transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
        >
          {breakingNewsHeadline}
        </a>
      </div>
    </div>
  )
}
