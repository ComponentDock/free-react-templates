import { CheckCircle2, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const reasons = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Integer et nisl et massa tempor ornare vel id orci.',
  'Nunc consectetur ligula vitae nisl placerat tempus.',
  'Curabitur quis ante vitae lacus varius pretium.',
] as const

export function ChooseUs() {
  return (
    <section id="about" className="bg-paper py-16 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-black leading-tight text-ink dark:text-white">
            Why People Choose Us
          </h2>
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm text-mist">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-ink dark:text-white">{reason}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="#contact" className="uppercase">
              About Us
            </ButtonLink>
          </div>
        </div>

        <div
          className="relative flex min-h-72 items-center justify-center rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/clutch-video/800/600')" }}
        >
          <div className="absolute inset-0 rounded-xl bg-black/40" aria-hidden="true" />
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Play video"
            className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Play className="ml-1 h-8 w-8" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
