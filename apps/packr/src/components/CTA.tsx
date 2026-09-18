import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="bg-brand py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <h2 className="font-mono text-2xl font-normal text-white sm:text-3xl">
              Are you looking for a web designer?
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-brand transition-colors hover:bg-gray-100"
          >
            Available for Hire!
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
