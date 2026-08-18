import { PenLine, PlusCircle } from 'lucide-react'

export function CtaBand() {
  return (
    <section
      aria-label="Start building your own job board now"
      id="cta"
      className="bg-brand py-24 text-center"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-bold text-white">
          Start building your own job board now
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#jobs"
            className="inline-flex items-center gap-2 rounded-[5px] border border-white px-10 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-brand"
          >
            <PenLine aria-hidden="true" className="size-5" />
            Search Job
          </a>
          <a
            href="#jobs"
            className="inline-flex items-center gap-2 rounded-[5px] bg-white px-10 py-4 font-semibold text-brand transition-colors hover:bg-ink hover:text-white"
          >
            <PlusCircle aria-hidden="true" className="size-5" />
            Post a Job
          </a>
        </div>
      </div>
    </section>
  )
}
