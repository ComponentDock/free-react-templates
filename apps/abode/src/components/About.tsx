import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/belara-about/640/480"
            alt="About Abode — architects at work"
            className="h-full w-full object-cover"
          />
          <span
            className="absolute -bottom-4 -right-4 hidden h-28 w-28 bg-brand lg:block"
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Who We Are</p>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            About Us
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Abode is located in a quiet neighborhood, a short walk from the station and a side
            street from the main boulevard. Five floors above ground with office space — we shape
            homes that feel like yours from the first key turn.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-none border border-brand bg-transparent px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand hover:bg-brand hover:text-white"
          >
            Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
