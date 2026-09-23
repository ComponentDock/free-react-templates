import { ArrowDown } from 'lucide-react'

export function LoadMore() {
  return (
    <section className="bg-warm-gray py-12 text-center">
      <a
        href="#"
        aria-label="Load more"
        className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-load-more-bg transition-colors hover:bg-rose-accent hover:text-white"
      >
        <ArrowDown className="h-6 w-6 text-muted" />
      </a>
    </section>
  )
}
