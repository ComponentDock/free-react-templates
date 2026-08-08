import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Featured Work
          </p>
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            Projects
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/belara-project-1/720/520"
            alt="Casa la perla nera — residential interior"
            className="h-full w-full object-cover"
          />
          <div>
            <h3 className="font-display text-3xl font-bold uppercase leading-tight text-ink dark:text-white">
              Casa la perla nera residential interior design
            </h3>
            <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
              A residential interior project where dark tones meet warm light — curated materials,
              custom joinery, and rooms that flow into the garden.
            </p>
            <Button
              size="lg"
              className="mt-8 rounded-none border border-brand bg-transparent px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand hover:bg-brand hover:text-white"
            >
              Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
