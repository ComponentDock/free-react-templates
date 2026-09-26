import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section data-testid="cta" className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <h2 className="text-2xl font-bold text-maroon sm:text-3xl">
          Do you want to know more about me?
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-none border-2 border-maroon px-6 py-3 text-sm font-semibold uppercase tracking-widest text-maroon transition-colors hover:bg-maroon hover:text-white"
        >
          Download CV <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
