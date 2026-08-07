import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const facts = [
  { number: '1990', label: 'Projects done' },
  { number: '1990', label: 'Projects done' },
  { number: '1990', label: 'Projects done' },
  { number: '1990', label: 'Projects done' },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-6">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-paper p-8 text-center dark:bg-gray-800">
              <span className="font-display text-5xl font-bold text-brand">{fact.number}</span>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink dark:text-white">
                {fact.label}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">About Us</p>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            We Are Creating Since 1990
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            For over three decades we have shaped skylines and homes alike. Eiusmod tempor
            incididunt ut labore et dolore magna aliqua — every project starts with listening and
            ends with a structure that lasts.
          </p>
          <Button
            size="lg"
            className="mt-10 rounded-none border border-brand bg-transparent px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand hover:bg-brand hover:text-white"
          >
            View More <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
